{"bigh3": true}

## MultiList

![Image to be displayed](https://i.imgur.com/KuSUJyX.png)

A `MultiList` component creates a multiple checkbox select list widget. It's useful for building an e-commerce facet like search experience.

```js
<MultiList
  sensorId="CitySensor"
  appbaseField={this.props.mapping.city}
  title="Cities"
  defaultSelected={["London"]}
  showCount={true}
  size={1000}
  sortBy="asc"
  showSearch={true}
  searchPlaceholder="Search City"
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **appbaseField** : `String`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map   
- **title**: `String`: Set the title of the component, to be shown in the UI.
- **defaultSelected** : `Array`: of the default selected values   
- **showCount**: `Boolean`: is the boolean option for whether displaying the count along with the items. Defaults to `true`.  
- **size**: `number`: is the number field which decides how many items needs to be displayed in the List. Defaults to 100.    
-  **sortBy**: `count` or `asc` or `desc`: is the property which decides on how the list should be sorted. `count` sorts the list based on the count in the desc order. `asc` sorts the list in the ascending order of the term (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.  
- **showSearch**: `Boolean`: (default false): By applying `true`, the component will show search box to filter from list.
- **searchPlaceholder**: `String`: Placeholder text applicable when `showSearch` prop is enabled.
- **depends**: `Object`: It should contain the sensors on which component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles

All reactivebase components are `rbc` namespaced.

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

