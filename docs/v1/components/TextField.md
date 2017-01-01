{"bigh3": true}

## TextField

![Image to be displayed](https://i.imgur.com/VwnK12T.png)

A `TextField` sensor component creates a simple text input field. It is useful for taking generic user inputs for creating a custom query context.

### Usage

```js
<TextField
  sensorId="NameTextSensor"
  appbaseField="name"
  title="Type a Search String"
  placeholder="Type a car name"
/>
```

### Props

- **sensorId** `String`  
    unique id of the sensor, can be referenced when creating a combined query context in an actuator's `depends` prop.  
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI options.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the text field.  


### CSS Styles API

TBD

* Image

* HTML snippet

* bullet points on all the classes used starting from component class.

### Examples

1. Text field with a custom query

2. Playground (with all knob actions)

