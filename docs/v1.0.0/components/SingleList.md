{"bigh3": true}

## SingleList

![Image to be displayed](https://i.imgur.com/hFKkYws.png)

A `SingleList` sensor component creates a radio select list UI widget. It is used for filtering results based on the current selection from a list of items.

Example uses:
* select a category from a list of categories for filtering e-commerce search results.
* filtering restaurants by a cuisine choice.

### Usage

```js
<SingleList
  componentId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
  size={100}
  sortBy="count"
  defaultSelected="London"
  showCount={true}
  showSearch={true}
  searchPlaceholder="Search City"
  initialLoader="Loading cities list.."
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
    pre-selects an item from the list.
- **showCount** `Boolean` [optional]  
    show count value of the number of occurences besides a list item. Defaults to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to true. When applicable, the default placeholder value is set to "Search".
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.

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
3. connect with external interfaces using `onValueChange`.

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
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **SingleList** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **SingleList's** value changes.

### Examples

1. [List with all the default props](../playground/?selectedKind=m%2FSingleList&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

2. [List without search UI](../playground/?selectedKind=m%2FSingleList&selectedStory=Without%20Search&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

3. [List with pre-selected items](../playground/?selectedKind=m%2FSingleList&selectedStory=Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

4. [List with a custom sort order](../playground/?selectedKind=m%2FSingleList&selectedStory=Custom%20Sort&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

5. [List with a 'Select All' item](../playground/?selectedKind=m%2FSingleList&selectedStory=With%20Select%20All&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

6. [Playground (with all knob actions)](../playground/?knob-title=SingleList%3A%20City%20Filter&knob-size=100&knob-sortBy=count&knob-defaultSelected=San%20Francisco&knob-showCount=true&knob-showSearch=true&knob-placeholder=Search%20City&knob-selectAllLabel=All%20cities&selectedKind=m%2FSingleList&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
