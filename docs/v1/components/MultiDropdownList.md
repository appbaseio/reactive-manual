{"bigh3": true}

## MultiDropdownList

![Image to be displayed](https://i.imgur.com/ZZ0MG6N.png)

A `MultiDropdownList` sensor component creates a radio select list UI widget. It is used for filtering results based on the current selection from a list of items.

Example uses:
* select a category from a list of categories for filtering e-commerce search results.
* filtering restaurants by a cuisine choice.

### Usage

```js
<SingleList
  sensorId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
  defaultSelected="London"
  showCount={true}
  size={1000}
  sortBy="count"
  showSearch={true}
  searchPlaceholder="Search City"
/>
```

### Props

- **sensorId** `String`  
    unique id of the sensor, can be referenced when creating a combined query context in an actuator's `depends` prop.  
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI options.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `string` [optional]  
    default selected value pre-selects an option from the list.
- **showCount** `Boolean` [optional]  
    show count of number of occurences besides an item. Defaults to `true`.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
-  **sortBy** `String` [optional]  
    property that decides on how to sort the list items, accepts one of `count`, `asc` or `desc` as valid values. `count` sorts the list based on the count occurences, with highest value at the top. `asc` sorts the list in the ascending order of the list item (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to true.


### CSS Styles API

All reactivebase components are `rbc` namespaced.

```html
<div class="rbc col s12 col-xs-12 card thumbnail rbc-title-active rbc-multidropdownlist rbc-placeholder-active">
    <div class="row">
        <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
        <div class="col s12 col-xs-12">
            <div class="Select Select--single is-searchable has-value">
              ...
            </div>
        </div>
    </div>
</div>
```

* MultiDropdownList component's class name is `rbc-multidropdownlist`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `placeholder` prop, classname of `rbc-placeholder-active` or `rbc-placeholder-active` is applied.
* the title element has a class name of `rbc-title`.


### Examples

1. List with all the default props

2. List with custom sort and a default selection

3. List with show search set to true

4. List with a dependency on another sensor

5. Playground (with all knob actions)

