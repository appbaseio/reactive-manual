{"bigh3": true}

## NestedList

![Image to be displayed](https://i.imgur.com/f5aO5HP.png)

A `NestedList` sensor component creates a nested list UI widget. It is used for filtering items by a hierarchy of categories.
It is used for filtering results based on the current selection from a list of items.

Example uses:
* show a two-level category list for an e-commerce search experience.

### Usage

```js
<NestedList
  sensorId="CarCategorySensor"
  appbaseField={[this.props.mapping.brand, this.props.mapping.model]}
  title="List of Brand > Model"
  size={100}
  sortBy="asc"
  defaultSelected=["ford", "galaxy"]
  showCount={true}
  showSearch={false}
  searchPlaceholder="Search"
/>
```

### Props

- **sensorId** `String`  
    unique id of the sensor, can be referenced in an actuator's `depends` prop.
- **appbaseField** `Array`  
    data field(s) to be mapped with the component's UI view. A nested list component supports multiple fields passed as an Array denoting the order of nesting.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
- **sortBy** `String` [optional]  
    sort the list items by one of `count`, `asc`, or `desc`. Defaults to `count`, which sorts the list by the frequency of count     value, most first.
- **defaultSelected** `Array` [optional]  
    pre-select a nested list item. Accepts an `Array` object containing the hierarchy of items to be selected. It is important that the passed value(s) exactly match the field value(s) as stored in the DB.
- **showCount** `Boolean` [optional]  
    show a count of the number of occurences besides each list item. Defaults to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to `true`. When applicable, the default placeholder value is set to "Search".

**Note:** A NestedList component's props are exactly like a SingleList component except for the `appbaseField` prop which takes an Array to denote the level of nesting.

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/Gh0iVDb.png)

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


### Examples

1. List with all the default props

2. List with custom sort and a default selection

3. List with show search set to true

4. List with a dependency on another sensor

5. Playground (with all knob actions)
