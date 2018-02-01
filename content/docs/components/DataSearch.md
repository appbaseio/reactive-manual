---
id: datasearch
title: "DataSearch"
layout: docs
sectionid: docs
permalink: components/datasearch.html
prev: components/textfield.html
prevTitle: "TextField"
next: components/singledropdownlist.html
nextTitle: "SingleDropdownList"
redirect_from:
    - 'components/datasearch'
    - 'base-components/datasearch'
    - 'search-components/datasearch'
    - 'datasearch'
---

![Image to be displayed](https://imgur.com/Z0O7oL7.png)

`DataSearch` creates a search box UI component that is connected to one or more database fields.

Example uses:
* Searching for a rental listing by its `name` or `description` field.
* Creating an e-commerce search box for finding products by their listing properties.

## Usage

### Basic Usage

```js
<DataSearch
  componentId="SearchSensor"
  dataField={["name", "brand"]}
/>
```

### Usage With All Props

```js
<DataSearch
  componentId="SearchSensor"
  dataField={["name", "brand"]}
  placeholder="Type a car name"
  defaultSelected="volvo"
  defaultSuggestions={[{label: "Nissan", value: "Nissan"}, {label: "BMW", value: "BMW"}]}
  fieldWeights={[1, 3]}
  queryFormat="or"
  fuzziness={0}
  autosuggest
  debounce={300}
  highlight
  highlightField="brand"
  react={{
    and: ["CategoryFilter", "SearchFilter"]
  }}
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String` or `Array`  
    database field(s) to be connected to the component's UI view. DataSearch accepts an Array in addition to String, useful for applying search across multiple fields.
- **defaultSelected** `string` [optional]  
    preset the search query text in the search box.
- **placeholder** `String` [optional]  
    set the placeholder text to be shown in the searchbox input field. Defaults to "Search".
- **autoSuggest** `Boolean` [optional]  
    set whether the autosuggest functionality should be enabled or disabled. Defaults to `true`.
- **defaultSuggestions** `Array` [optional]
    preset search suggestions to be shown on focus when the search box does not have any search query text set. Accepts an array of objects each having a **label** and **value** property. The label can contain either String or an HTML element.
- **highlight** `Boolean` [optional]  
    whether highlighting should be enabled in the returned results.
- **highlightField** `String or Array` [optional]  
    when highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the **dataField** prop.
- **fieldWeights** `Array` [optional]  
    set the search weight for the database fields, useful when dataField is an Array of more than one field. This prop accepts an array of numbers. A higher number implies a higher relevance weight for the corresponding field in the search results.
- **queryFormat** `String` [optional]
    Sets the query format, can be **or** or **and**. Defaults to **or**.
    * **or** returns all the results matching **any** of the search query text's parameters. For example, searching for "bat man" with **or** will return all the results matching either "bat" or "man".
    * On the other hand with **and**, only results matching both "bat" and "man" will be returned. It returns the results matching **all** of the search query text's parameters.
- **fuzziness** `String or Number` [optional]
    Sets a maximum edit distance on the search parameters, can be **0**, **1**, **2** or **"AUTO"**. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, **fox** can become **box**. Read more about it in the elastic search [docs](https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html).
- **debounce** `Number` [optional]
    delays executing the query by the specified time in **ms** while the user is typing. Defaults to `0`, i.e. no debounce. Useful if you want to save on the number of requests sent.

## Demo

[Try the demo](https://expo.io/@dhruvdutt/datasearch-demo) instantly on expo or check it out on appetize below:

<br />

<iframe frameborder="0" scrolling="no" src="https://appetize.io/embed/pe6y824c9n5a8kf9ecpe1phbtr?device=nexus5&scale=75&orientation=portrait&osVersion=7.1" height="600px"></iframe>

<br />

## Styles

`DataSearch` component supports `style` prop. Read more about it [here](/advanced/style.html).

## Extending

`DataSearch` component can be extended to
1. customize the look and feel with `style`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange`, `onValueChange` and `onQueryChange`,
4. specify how search suggestions should be filtered using `react` prop

```js
<DataSearch
  ...
  style={{ paddingBottom: 10 }}
  customQuery={
    function(value, props) {
      return {
        match: {
          data_field: "this is a test"
        }
      }
    }
  }
  beforeValueChange={
    function(value) {
      // called before the value is set
      // returns a promise
      return new Promise((resolve, reject) => {
        // update state or component props
        resolve()
        // or reject()
      })
    }
  }
  onValueChange={
    function(value) {
      console.log("current value: ", value)
      // set the state
      // use the value with other js code
    }
  }
  onQueryChange={
    function(prevQuery, nextQuery) {
      // use the query with other js code
      console.log('prevQuery', prevQuery);
      console.log('nextQuery', nextQuery);
    }
  }
  // specify how and which suggestions are filtered using `react` prop.
  react={
    "and": ["pricingFilter", "dateFilter"],
    "or": ["searchFilter"]
  }
/>
```

- **style** `Object`
    CSS styles to be applied to the **DataSearch** component.
- **customQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the component, as defined in Elasticsearch Query DSL.
    `Note:` customQuery is called on value changes in the **DataSearch** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the DataSearch.
- **onQueryChange** `Function`  
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.
- **react** `Object`  
    specify dependent components to reactively update **DataSearch's** suggestions.
    - **key** `String`  
        one of `and`, `or`, `not` defines the combining clause.
        - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
        - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
        - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
    - **value** `String or Array or Object`  
        - `String` is used for specifying a single component by its `componentId`.
        - `Array` is used for specifying multiple components by their `componentId`.
        - `Object` is used for nesting other key clauses.
