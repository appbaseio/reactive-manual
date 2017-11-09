const {writeFileSync} = require('fs');
const {join} = require('path');
const sanitize = require('sanitize-html');

const query = `
{
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
        }
        fields {
          slug
        }
        tableOfContents
        headings {
          value
        }
      }
    }
  }
}
`;

// TODO: use a library for a more versatile stop words, probably use stemmer also
const StopWords = {
  a: true,
  an: true,
  the: true,
  to: true,
};

const TOKENIZER_REGEX = /[^a-zа-яё0-9\-\.']+/i;

function tokenize(text) {
  const uniqueWords = {};

  return text
    .split(TOKENIZER_REGEX) // Split words at boundaries
    .map(word => word.toLowerCase())
    .filter(word => {
      // remove empty tokens and stop-words
      return word != '' && StopWords[word] === undefined;
    })
    .filter(word => {
      if (uniqueWords[word] === undefined) {
        uniqueWords[word] = true;
        return true;
      }
      return false;
    });
}

function getTokens(text) {
  const sanitizedText = sanitize(
    text,
    {
      allowedTags: [],
      allowedAttributes: [],
    }
  );
  return tokenize(sanitizedText);
}

function getHashId(heading, tableOfContents) {
  const headingPos = tableOfContents.indexOf(heading);
  const hashPos = tableOfContents.lastIndexOf('#', headingPos);

  if (headingPos === -1 || hashPos === -1) {
    return null;
  }
  const end = headingPos - 2;  // subtract 2 for ">
  return tableOfContents.substring(hashPos, end);
}

exports.createPages = async ({ graphql }) => {
  const result = await graphql(query);

  if (result.errors) {
    throw new Error(result.errors.join(`, `));
  }

  const searchData = [];

  result.data.allMarkdownRemark.edges.forEach(edge => {
    const { html, headings, tableOfContents } = edge.node;
    const slug = edge.node.fields.slug;
    const title = edge.node.frontmatter.title;
    if (headings.length) {
      let prevHashIndex = 0;
      let prevHashId = '';
      headings.forEach(({ value }) => {
        const hashId = getHashId(value, tableOfContents);
        if (hashId) {
          const hashPos = html.indexOf(hashId, prevHashIndex);
          searchData.push({
            title,
            slug,
            tokens: getTokens(html.substring(prevHashIndex, hashPos)),
            hash: prevHashId,
            id: slug + prevHashId,
          });
          prevHashIndex = hashPos;
          prevHashId = hashId;
        }
      });
      // push for the last heading
      searchData.push({
        title,
        slug,
        tokens: getTokens(html.substring(prevHashIndex)),
        hash: prevHashId,
        id: slug + prevHashId,
      });
    } else {
      searchData.push({
        title,
        slug,
        tokens: getTokens(html),
        hash: '', // no hash since result should match the root url
        id: slug,
      });
    }
  });

  const path = join(process.cwd(), './search.index.json');
  const data = JSON.stringify(searchData);

  writeFileSync(path, data);
  console.log('Created search index at', process.cwd());
};
