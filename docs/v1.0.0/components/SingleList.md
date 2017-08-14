{"bigh3": true}

## SingleList

![Image to be displayed](https://i.imgur.com/hFKkYws.png)

`SingleList` creates a single selection based list UI component that is connected to a database field.

Example uses:
* select a category item from a list of categories in an e-commerce website.
* select a cuisine item from a list of cuisine items in a food delivery app.

### Usage

#### Basic Usage

```js
<SingleList
  componentId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
/>
```

#### Usage With All Props

```js
<SingleList
  componentId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
  size={100}
  sortBy="count"
  defaultSelected="London"
  selectAllLabel="All Cities"
  showRadio={true}
  showCount={true}
  showSearch={true}
  placeholder="Search City"
  initialLoader="Loading cities list.."
  showFilter={true}
  filterLabel="City"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view. The list items are filtered by a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
- **sortBy** `String` [optional]  
    sort the list items by one of `count`, `asc`, `desc`. Defaults to `count`, which sorts the list by the frequency of count     value, most first.
- **defaultSelected** `string` [optional]  
    pre-select an item from the list.
- **selectAllLabel** `String` [optional]  
    add an extra `Select all` item to the list with the provided label string.
- **showRadio** `Boolean` [optional]  
    show radio button icon for each list item. Defaults to `true`.
- **showCount** `Boolean` [optional]  
    show count value of the number of occurences besides a list item. Defaults to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to true. When applicable, the default placeholder value is set to "Search".
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/tDrawXi.png)

```html
<div class="rbc col s12 col-xs-12 card thumbnail rbc-search-active rbc-title-active rbc-placeholder-active rbc-singlelist">
  <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
  <div class="rbc-search-container col s12 col-xs-12">
    <input type="text" class="rbc-input col s12 col-xs-12 form-control" value="" placeholder="Search City">
  </div>
  <div class="rbc-list-container col s12 col-xs-12">
    <div class="rbc-list-item row">
      <input type="radio" class="rbc-radio-item" value="London">
      <label class="rbc-label">London <span class="rbc-count">(211)</span></label>
    </div>
  </div>
</div>
```

* SingleList component's class name is `rbc-singlelist`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `search` and `searchPlaceholder` props, classnames of `rbc-search-active`, `rbc-search-inactive`, `rbc-placeholder-active`, `rbc-placeholder-active` are applied.
* the title element has a class name of `rbc-title`.
* the search element has a class name of `rbc-search-container`.
* the radio inputs are encapsulated inside a `rbc-list-container` class with each element having class name of `rbc-list-item`.
* the input radio element has a class name of `rbc-radio-item`.
* the label element has a class name of `rbc-label`.
* the element containing count inside the label has a class name of `rbc-count`.

### Extending

`SingleList` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<SingleList
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
    CSS styles to be applied to the **SingleList** component.
- **customQuery** `Function`  
    is a callback function which accepts component's current **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **SingleList** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a "Discounted Price" SingleList.

### Examples

1. [List with all the default props](../playground/?selectedKind=map%2FSingleList&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [List without search UI](../playground/?selectedKind=map%2FSingleList&selectedStory=Without%20Search&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [List with pre-selected items](../playground/?selectedKind=map%2FSingleList&selectedStory=Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [List with a custom sort order](../playground/?selectedKind=map%2FSingleList&selectedStory=Custom%20Sort&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

5. [List with a 'Select All' item](../playground/?selectedKind=map%2FSingleList&selectedStory=With%20Select%20All&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

6. [Playground (with all knob actions)](../playground/?knob-title=SingleList%3A%20City%20Filter&knob-size=100&knob-sortBy=count&knob-defaultSelected=San%20Francisco&knob-showCount=true&knob-showSearch=true&knob-placeholder=Search%20City&knob-selectAllLabel=All%20cities&selectedKind=map%2FSingleList&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
