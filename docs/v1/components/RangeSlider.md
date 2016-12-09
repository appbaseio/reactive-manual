## RangeSlider

A `RangeSlider` component creates a numeric range slider. It's useful for granular filtering of numeric data.

```js
<RangeSlider
  sensorId="GuestCount"
  appbaseField={this.props.mapping.guestcount}
  title="RSVPs"
  defaultSelected={
    { 
      "start": 1,
      "end": 5
    }
  }
  startThreshold=0
  endThreshold=10
  stepValue=1
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **appbaseField** : `String`: is the name of the field for the range slider data in the appbase.io app. For a `RangeSlider` component, the field should be of a numeric data type.
- **title**: `String`: Sets the title of the component to be shown in the UI.
- **defaultSelected**: `Object`: (Optional) is the default selection of the slider values.    
- **startThreshold**: `Number`: is the minimum value available to be set on the range slider.  
- **endThreshold**: `Number`: is the maximum value avaiable to be set on the range slider.  
- **stepValue**: `Number`: is the step value between two nearest units, defaults to 1.
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles



### Examples

1. Range with all the default props

2. Range with a default selection

3. Range with a dependency on another sensor

4. Playground (with all knob actions)

