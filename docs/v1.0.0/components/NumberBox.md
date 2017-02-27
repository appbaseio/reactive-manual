{"bigh3": true}

## NumberBox

![Image to be displayed](https://i.imgur.com/0Xfg8pM.png)

A `NumberBox` sensor component creates a NumberBox UI widget. It is used for filtering results based on a numeric query.

Example uses:
* filtering hotel listings based on the number of guests,
* filtering movies or products by ratings.

### Usage

```js
<NumberBox
  componentId="NumberBoxSensor"
  appbaseField="guests"
  title="NumberBox component"
  data={{ "label": "Guests", "start": 0, "end": 5 }}
  defaultSelected={0}
  labelPosition="left"
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view.The selected buttons create a database query on this field.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **data** `Object`  
    an object with `start` and `end` values and optionally an associated `label` to be displayed in the UI.
- **defaultSelected** `Number` [optional]  
    preset a valid value within the [start, end] range.
- **labelPosition** `String` [optional]  
    position where label is shown, one of "left", "top", "right", "bottom". Defaults to `left`.

### CSS Styles API

![Annotated image]()

All reactivebase components are `rbc` namespaced.

```html
```

TBD

### Examples

1. A NumberBox component with defaults

2. Playground (with all knob actions)

