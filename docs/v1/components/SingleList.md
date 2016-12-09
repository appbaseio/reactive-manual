## SingleList

A `SingleList` component creates a single radio select list widget. It's useful for building a selecting a category amongst many categories of items, like in an online shopping experience.

```js
<SingleList
  sensorId="CitySensor"
  inputData={this.props.mapping.city}
  title="Cities"
  defaultSelected="London"
  showCount={true}
  size={1000}
  sortBy="asc"
  showSearch={true}
  searchPlaceholder="Search City"
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **inputData** : `String`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map   
- **title**: `String`: Set the title of the component, to be shown in the UI.
- **defaultSelected** : `string`: is the default selected value (only applicable for single item selection)   
- **showCount**: `Boolean`: is the boolean option for whether displaying the count along with the items. Defaults to `true`.  
- **size**: `number`: is the number field which decides how many items needs to be displayed in the List. Defaults to 100.    
-  **sortBy**: `count` or `asc` or `desc`: is the property which decides on how the list should be sorted. `count` sorts the list based on the count in the desc order. `asc` sorts the list in the ascending order of the term (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.  
- **showSearch**: `Boolean`: (default false): By applying `true`, the component will show search box to filter from list.
- **searchPlaceholder**: `String`: Placeholder text applicable when `showSearch` prop is enabled.
- **depends**: `Object`: It should contain the sensors on which component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles



### Examples

1. List with all the default props

2. List with custom sort and a default selection

3. List with show search set to true

4. List with a dependency on another sensor

5. Playground (with all knob actions)

