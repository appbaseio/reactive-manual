import navCommunity from '../../content/community/nav.yml';
import navDocs from '../../content/docs/nav.yml';
import navTutorial from '../../content/getting-started/nav.yml';

const sectionListDocs = navDocs.map(item => ({
  ...item,
  directory: 'docs',
}));

const sectionListCommunity = navCommunity.map(item => ({
  ...item,
  directory: 'community',
}));

const sectionListTutorial = navTutorial.map(item => ({
  ...item,
  directory: 'getting-started',
}));

export {
  sectionListCommunity,
  sectionListDocs,
  sectionListTutorial,
};
