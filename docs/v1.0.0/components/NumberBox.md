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
- **title** `String or HTML` [optional]  
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

### Extending

`NumberBox` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<NumberBox
  ...
  componentStyle={{"paddingBottom": "10px"}}
  customQuery={
    function(value) {
      return {
        query: {
          match: {
            data_field: "this is a test"
          }
        }
      }
    }
  }
  onValueChange={
    function(value) {
      console.log("current value: ", value)
      // set the state
      // use the value with other js code
    }
  }
/>
```

- **componentStyle** `Object`
    CSS styles to be applied to the **NumberBox** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **NumberBox** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **NumberBox's** value changes.


### Examples

1. [A NumberBox component with defaults](../playground/?knob-title=DataSearch%3A%20Meetups&knob-placeholder=Search%20Venue&knob-autocomplete=true&selectedKind=m%2FNumberBox&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

2. [Playground (with all knob actions)](../playground/?knob-title=DataSearch%3A%20Meetups&knob-placeholder=Search%20Venue&knob-autocomplete=true&knob-defaultSelected=3&knob-data=%7B"start"%3A1%2C"end"%3A5%2C"label"%3A"Guests"%7D&knob-labelPosition=right&selectedKind=m%2FNumberBox&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
