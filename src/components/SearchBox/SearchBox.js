import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Search } from 'js-search';
import { navigateTo } from 'gatsby-link';

import data from 'data/search.index.json';
import { colors } from 'theme';
import './styles.css';

const search = new Search('url');
search.addIndex('title');
search.addIndex('heading');
search.addIndex('tokens');
search.addDocuments(data);

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let topResults = search.search(inputValue).slice(0, 8);
  const exactMatchIndex = topResults.findIndex(item => (item.title.toLowerCase() === inputValue) && !item.heading.length);
  if (exactMatchIndex > 0) {
    topResults = [
      topResults[exactMatchIndex],
      ...topResults.slice(0, exactMatchIndex),
      ...topResults.slice(exactMatchIndex + 1),
    ];
  }
  return inputLength === 0 ? [] : topResults;
};

const getSuggestionValue = suggestion => `${suggestion.heading}${suggestion.heading.length ? ' in ' : ''}${suggestion.title}`;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <span
      css={{
        color: colors.dark,
        fontWeight: 'bold',
      }}
    >
      {suggestion.heading}
    </span>
    {
      !!suggestion.heading.length &&
        <span> in </span>
    }
    <span
      css={{
        color: colors.error,
        fontWeight: 'bold',
      }}
    >
      {suggestion.title}
    </span>
  </div>
);

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (e, { suggestion }) => {
    navigateTo(suggestion.url);
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Docs',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

export default SearchBox;