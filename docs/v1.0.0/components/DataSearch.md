{"bigh3": true}

## DataSearch

![Image to be displayed](https://i.imgur.com/dLeyahL.png)

A `DataSearch` sensor component creates a searchbox UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields.

Example uses:
* Searching for a rental listing by its `name` or `description` field.
* Creating an e-commerce search box for finding products by their listing properties.

### Usage

#### Basic Usage

```js
<DataSearch
  componentId="SearchSensor"
  appbaseField={["group_venue", "group_city"]}
/>
```

#### Usage With All Props

```js
<DataSearch
  componentId="SearchSensor"
  appbaseField={["group_venue", "group_city"]}
  title="Search"
  defaultSelected="Songwriting"
  weights={[1, 3]}
  placeholder="Search for cities or venues"
  autoSuggest={true}
  initialSuggestions={[{label: "Songwriting", value: "Songwriting"}, {label: "Musicians", value: "Musicians"}]}
  highlight={true}
  highlightField="group_city"
  queryFormat="or"
  fuzziness={0}
  showFilter={true}
  filterLabel="Venue filter"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator’s react prop.
- **appbaseField** `String or Array`  
    data field(s) on which the search query will be applied to. If you want to search across multiple fields, pass them as an `Array`.
- **title** `String or HTML` [optional]  
    Sets the title of the component to be shown in the UI.
- **defaultSelected** `string` [optional]  
    pre-select a value in the search bar.
- **weights** `Array` [optional]  
    Sets the weights for the appbaseFields being searched on, accepts an array of numbers. A higher weight will give higher relevance to the corresponding **appbaseField** in the search results.
- **placeholder** `String` [optional]  
    Sets the placeholder text to be shown in the searhbox input field. Defaults to "Search".
- **autoSuggest** `Boolean` [optional]  
    Sets whether the autosuggest functionality should be enabled or disabled. Defaults to true.
- **initialSuggestions** `Array` [optional]
    Sets the initial search suggestions when the search field is empty which show up on focus. Accepts an array of objects each having a **label** and **value** property.
- **highlight** `Boolean` [optional]  
    Whether highlighting should be enabled in the returned results.
- **highlightField** `String or Array` [optional]  
    When highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the **appbaseField** prop.
- **queryFormat** `String` [optional]
    Sets the query format, can be **or** or **and**. Defaults to **or**. **or** returns all the results matching **any** of the search parameters, **and** returns the results matching **all** of the search parameters. For example, searching for "bat man" with **or** will return all the results matching either "bat" or "man", on the other hand with **and** only results matching both "bat" and "man" will be returned.
- **fuzziness** `String or Number` [optional]
    Sets a maximum edit distance on the search parameters, can be **0**, **1**, **2** or **"AUTO"**. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, **fox** can become **box**. Read more about it in the elastic search [docs](https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html).
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="VzdKyL" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="DataSearch docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/VzdKyL/">DataSearch docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated Image](https://i.imgur.com/ysbmr3Gg.png)

### Extending

`DataSearch` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<DataSearch
  ...
  componentStyle={{"paddingBottom": "10px"}}
  customQuery={
    function(value) {
      return {
        query: {
          match: {
            data_field: "this is a test"
          }
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
/>
```

- **componentStyle** `Object`  
    CSS styles to be applied to the **DataSearch** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **DataSearch** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for a product in a DataSearch.


### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="VzdKyL" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="DataSearch docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/VzdKyL/">DataSearch docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [DataSearch with all the default props](../playground/?selectedKind=map%2FDataSearch&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
2. [DataSearch with autocomplete turned off](../playground/?knob-autoSuggest=false&selectedKind=map%2FDataSearch&selectedStory=Without%20autoSuggest&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
3. [Playground (with all knob actions)](../playground/?knob-autoSuggest=true&knob-title=DataSearch%3A%20Places&knob-placeholder=Search%20Places&knob-defaultSelected=&knob-weights%5B0%5D=1&knob-weights%5B1%5D=3&knob-fuzziness=1&selectedKind=map%2FDataSearch&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
