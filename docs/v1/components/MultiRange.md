## MultiRange

A `MultiRange` component creates a multiple checkbox based numeric range selector. It's useful for filtering data by prices, for instance.

```js
<MultiRange
  sensorId="PriceSensor"
  appbaseField={this.props.mapping.price}
  title="Price"
  defaultSelected={["Cheap", "Moderate"]}
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **appbaseField** : `String`: is the name of the field for price data in the appbase.io app. For a `SingleRange` component, the field should be of a numeric data type.
- **title**: `String`: Sets the title of the component to be shown in the UI.
- **defaultSelected**: `Array`: is the default selected array of labels.
- **data**: `Object Array`: is a collection of UI options with labels and [start, end] range values
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles



### Examples

1. Range with all the default props

2. Range with multiple default selections

3. Range with a dependency on another sensor

4. Playground (with all knob actions)

