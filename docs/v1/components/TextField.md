{"bigh3": true}

## TextField

A `TextField` component creates a simple text input field. It's useful for taking specific data for defining custom queries, like specifying map bounds of an area.

```js
<TextField
  sensorId="TextFieldSensor"
  appbaseField={this.mapping.props.location}
  title="Map Bounds"
  placeholder="Some placeholder text"
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.  
- **appbaseField** : `String`: (optional) is the name of the field for price data in the appbase.io app.  
- **title**: `String`: Sets the title of the component to be shown in the UI.  
- **placeholder**: `string`: is the placeholder text label  
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles



### Examples

1. Text field with a custom query

2. Playground (with all knob actions)

