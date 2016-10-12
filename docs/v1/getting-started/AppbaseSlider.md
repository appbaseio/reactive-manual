## AppbaseSlider

```js
<AppbaseSlider 
    sensorId="RangeSensor"
    inputData={this.props.mapping.guests} 
    title="guests"
    maxThreshold={5}
    minThreshold={0}
    depends={{
      CitySensor: {
        "operation": "must",
        "defaultQuery": this.topicDepends
      }
    }}
/>
```

- **sensorId** : `string`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **inputData** : `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map   
- **maxThreshold** : `Number`: It specifies the maximum limit of slider range
- **minThreshold** : `Number`: It specifies the minimum limit of slider range
- **title**: `String`: It set the title of component.
- **depends**: `Object`: It should contain the sensors on which component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)

