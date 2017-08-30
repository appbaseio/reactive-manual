{"bigh3": true}

# CategorySearch

![Image to be displayed](https://i.imgur.com/wRErIC9.png)
A `CategorySearch` sensor component creates a category search UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields.

Example uses:
* Searching for a rental listing by its `name` or `description` field.
* Creating an e-commerce search box for finding products by their listing properties.

### Usage

#### Basic Usage

```js
<CategorySearch
  componentId="SearchSensor"
  appbaseField={["group_venue", "group_city"]}
  categoryField="group_topics"
/>
```

#### Usage With All Props

```js
<CategorySearch
  componentId="SearchSensor"
  appbaseField={["group_venue", "group_city"]}
  categoryField="group_topics"
  title="Search"
  defaultSelected="Music"
  weights={[1, 3]}
  placeholder="Search for cities or venues"
  autoSuggest={true}
  initialSuggestions={[{label: "Programming", value: "Programming"}]}
  highlight={false}
  highlightFields="group_city"
  queryFormat="or"
  fuzziness={0}
  showFilter={true}
  filterLabel="Venue filter"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **appbaseField** `String or Array`  
    data field(s) on which the search query will be applied to. If you want to search across multiple fields, pass them as an `Array`.
- **categoryField** `String` [optional]  
    data field which has the category values mapped.
- **title** `String or HTML` [optional]  
    Sets the title of the component to be shown in the UI.
- **defaultSelected** `string` [optional]  
    preset the search query text in the search box.
- **weights** `Array` [optional]  
    set the search weight for the database fields, useful when appbaseField is an Array of more than one field. This prop accepts an array of numbers. A higher number implies a higher relevance weight for the corresponding field in the search results.
- **placeholder** `String` [optional]  
    Sets the placeholder text to be shown in the searhbox input field. Defaults to "Search".
- **autoSuggest** `Boolean` [optional]  
    set whether the autosuggest functionality should be enabled or disabled. Defaults to `true`.
- **initialSuggestions** `Array` [optional]
    preset search suggestions to be shown on focus when the search box does not have any search query text set. Accepts an array of objects each having a **label** and **value** property. The label can contain either String or an HTML element.
- **highlight** `Boolean` [optional]  
    Whether highlighting should be enabled in the returned results. Defaults to `false`.
- **highlightFields** `Array` [optional]  
    When highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the **appbaseField** prop.
- **queryFormat** `String` [optional]
    Sets the query format, can be **or** or **and**. Defaults to **or**.
    * **or** returns all the results matching **any** of the search query text's parameters. For example, searching for "bat man" with **or** will return all the results matching either "bat" or "man".
    * On the other hand with **and**, only results matching both "bat" and "man" will be returned. It returns the results matching **all** of the search query text's parameters.
- **fuzziness** `String or Number` [optional]
    Sets a maximum edit distance on the search parameters, can be **0**, **1**, **2** or **"AUTO"**. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, **fox** can become **box**. Read more about it in the elastic search [docs](https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html).
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="mMQaza" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="CategorySearch docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/mMQaza/">CategorySearch docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated Image](https://i.imgur.com/IWHVT1i.png)

### Extending

`CategorySearch` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<CategorySearch
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
    CSS styles to be applied to the **CategorySearch** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **CategorySearch** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for a product in a CategorySearch.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="mMQaza" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="CategorySearch docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/mMQaza/">CategorySearch docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [CategorySearch with all the default props](../playground/?selectedKind=search%2FCategorySearch&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
2. [CategorySearch with autoSuggest disabled](../playground/?knob-autoSuggest=false&selectedKind=search%2FCategorySearch&selectedStory=Without%20autoSuggest&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
3. [Playground (with all knob actions)](../playground/?knob-title=CategorySearch&knob-weights%5B0%5D=1&knob-weights%5B1%5D=3&knob-filterLabel=Cars%20filter&knob-defaultSelected=&knob-categoryField=brand.raw&knob-queryFormat=or&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-fuzziness=1&knob-placeholder=Search%20Car&knob-highlight=false&knob-autoSuggest=true&knob-appbaseField%5B0%5D=name&selectedKind=search%2FCategorySearch&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
