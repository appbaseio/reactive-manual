{"bigh3": true}

## MultiList

![Image to be displayed](https://i.imgur.com/KuSUJyX.png)

A `MultiList` sensor component creates a multiple checkbox select list UI widget. It is used for filtering results based on the current selection of list items.

Example uses:

* create an e-commerce facet like search experience.
* create a filter for airlines to fly by in a flight booking experience.

### Usage

```js
<MultiList
  componentId="CitySensor"
  appbaseField="group_city.raw"
  title="MultiList: City Filter"
  size={100}
  sortBy="asc"
  defaultSelected={["San Francisco"]}
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
- **title** `String` [optional]  
    title of the component to be shown in the UI. Defaults to no title being shown.
- **size** `Number` [optional]  
    number of list items to be displayed. Defaults to showing a `100` items. Max value for this prop can be `1000`.
-  **sortBy** `String` [optional]  
    sort the list items by one of `count`, `asc`, or `desc`. Defaults to `count`, which sorts the list by the frequency of count value, most first.
- **defaultSelected** `Array` [optional]  
    pre-select one or more list items. Accepts an `Array` object containing the items that should be selected. It is important for the passed value(s) to exactly match the field value(s) as stored in the DB.
- **showCount** `Boolean` [optional]  
    show a count of the number of occurences besides each list item. Defaults to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to `true`. When applicable, the default placeholder value is set to "Search".
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.


### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/qJZgfvI.png)

```html
<div class="rbc rbc-multilist col s12 col-xs-12 card thumbnail rbc-search-active rbc-title-active rbc-placeholder-active">
  <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
  <div class="rbc-search-container col s12 col-xs-12">
    <input type="text" class="rbc-input col s12 col-xs-12 form-control" value="" placeholder="Search City">
  </div>
  <div class="rbc-list-container col s12 col-xs-12">
    <div class="rbc-list-item row">
      <input type="checkbox" class="rbc-checkbox-item" value="London">
      <label class="rbc-label">London <span class="rbc-count">(211)</span></label>
    </div>
  </div>
</div>
```

* Multilist component's class name is `rbc-multilist`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `search` and `searchPlaceholder` props, classnames of `rbc-search-active`, `rbc-search-inactive`, `rbc-placeholder-active`, `rbc-placeholder-active` are applied.
* the title element has a class name of `rbc-title`.
* the search element has a class name of `rbc-search-container`.
* the checkbox inputs are encapsulated inside a `rbc-list-container` class with each element having class name of `rbc-list-item`.
* the input checkbox element has a class name of `rbc-checkbox-item`.
* the label element has a class name of `rbc-label`.
* the element containing count inside the label has a class name of `rbc-count`.


### Examples

1. List with all the default props

2. List with custom sort and a default selection

3. List with show search set to true

4. List with a dependency on another sensor

5. Playground (with all knob actions)

