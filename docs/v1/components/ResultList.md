## ResultList

A `ResultList` component creates a result list widget. Unlike other sensors whose states can be filtered by the end user, `ResultList` behaves as an actuator that displays the results of other sensor components in a list.

```js
<ResultList
  sensorId="SearchResult"
  appbaseField={this.props.mapping.searchKey}
  title="Result List"
  sortBy="desc"
  from={0}
  size={10}
  requestOnScroll={true}
  componentStyle={height:'700px', overflow:'auto'}
  onData={this.onData}
  depends={{
    "CitySensor": {
      "operation": "must"
    },
    "SearchSensor": {
      "operation": "must"
    }
  }}
/>
```

### Props

- **sensorId** : `String`: Unique id of the sensor.  
- **appbaseField** : `String`: Data field associated with the `ResultList` sensor, useful for providing a sort context.  
- **title**: `String`: Set the title of the component, to be shown in the UI.      
-  **sortBy**: `String`: Allows sorting of results by `default`, `asc` or `desc` order. The list is already sorted by relevancy of matches to the applied sensors. `asc` sorts the list in the ascending order of the associated appbaseField's value (Alphabetical). `desc` sorts the list based on the appbaseField value in the descending order.  
- **from**: `Number`: is the starting point from where to fetch the results. Useful in a pagination context. Defaults to 0.  
- **size**: `Number`: is the number of results to be shown per page. Defaults to 20.  
- **requestOnScroll**: `Boolean`: Should a paginate data request be made when scroll reaches the end of the component view? Defaults to `true`, allowing an infinite scroll functionality.  
- **onData**: `Function`: A callback function where user can define how to render the view based on the data changes.     
- **depends**: `Object`: An object defining the sensor components that trigger the `ResultList` query. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html).


### Extending ResultList

`onData` prop registers a function callback which triggers with the following parameters every time there is a change in the data view of the `ResultList` component.

```js
this.onData(mode, response, currentData, [took,] appliedQuery) {
  console.log(mode, response, currentData, appliedQuery)
  if (mode === "historic") {
    console.log("time taken for response is: "+took+" ms");
    return currentData + response; // infinite scroll functionality
  } else {
    console.log("New streaming update: ", response);
    currentData.unshift(response);
    // add markup per element.
    return currentData;           // show streaming update functionality
  }
}
```

The callback function returns an Array of HTML elements (think list items) which are then rendered to the view.  

**Usage**:  

- **mode**: `String`: "historic" when results are returned from the existing dataset and "streaming" when new results are matched.  
- **response**: `Object`: An object array when returning historic data results or a single object for streaming mode updates.  
- **currentData**: `Array Object`: An array of the result objects being shown in the current component view.  
- **took**: `Number`: Time taken in milliseconds (only applicable when mode is "historic".  
- **appliedQuery**: `Object`: Raw query object that triggered the function callback, useful for debugging.


### CSS Styles



### Examples

1. ResultList with all the default props with a single sensor filter.

2. ResultList with an infinite scroll with a single sensor filter.

3. ResultList with a pagination view based on a search and a filter sensor.

4. ResultList that shows streaming updates.

5. Playground (with all knob actions)

