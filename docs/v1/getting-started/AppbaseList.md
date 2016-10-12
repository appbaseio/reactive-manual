## AppbaseList

```js
<AppbaseList
  sensorId="CitySensor"
  inputData={this.props.mapping.city} 
  defaultSelected="London"
  showCount={true} 
  size={1000} 
  multipleSelect={false} 
  includeGeo={false}
  staticSearch={true}
  title="Cities"
  searchPlaceholder="Search City"
/>
```

- **sensorId** : `string`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **inputData** : `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map   
- **defaultSelected** : `string`: is the default selected value (only applicable for single item selection)   
- **size**: `number`: is the number field which decides how many items needs to be displayed in the List. Defaulted to 60.    
- **showCount**: `"Boolean"`: is the boolean option for whether displaying the count along with the items. Defaulted to `true`.    
- **multipleSelect**: `Boolean`: is the boolean option to select whether the only single item could be selected in the List or if it is multiple selectable. Defaulted to `true`.   
-  **sort**: `count` or `asc` or `desc`: is the property which decides on how the list should be sorted. `count` sorts the list based on the count  in the desc order. `asc` sorts the list in the ascending order of the term (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.  
- **staticSearch**: `Boolean`: (default false): By applying true component will have search box to filter from list.
- **title**: `String`: It set the title of component.
- **depends**: `Object`: It should contain the sensors on which component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)
