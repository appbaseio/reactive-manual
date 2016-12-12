{"bigh3": true}

## ToggleButton

A `ToggleButton` component creates a single or multiple toggle button selector. It's useful for filtering data by boolean like fields. Like, is the restaurant open now or not.

```js
<ToggleButton
  sensorId="PriceButtons"
  appbaseField={this.props.mapping.price}
  title="Price"
  defaultSelected=["Open"]
  data={
    [{"value": "open", "label": "Open"}]
  }
/>
```

### Props

- **sensorId**: `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **appbaseField**: `String`: is the name of the field for price data in the appbase.io app. For a `ToggleButton` component, the field should be of a numeric data type.
- **title**: `String`: Sets the title of the component to be shown in the UI.
- **defaultSelected**: `Array`: of the default selected label(s)   
- **data**: `Object Array`: is a collection of UI options with labels and value fields
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles



### Examples

1. A single toggle button with all the default props

2. A multiple toggle button with default props

3. A multiple toggle button with specific default selected labels

4. Playground (with all knob actions)

