## AppbaseSearch

```js
<AppbaseSearch
  inputData={this.props.mapping.venue}
  sensorId="VenueSensor"
  placeholder="Search Venue"
  depends={{
    'CitySensor': {
      "operation": "must",
      "doNotExecute": {true}
    }
  }}
/>
```

- **sensorId** : `string`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **inputData** : `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map   
- **placeholder** : `string`: is use to apply placeholder value in searchbox    
- **depends**: `Object`: It should contain the sensors on which component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)
