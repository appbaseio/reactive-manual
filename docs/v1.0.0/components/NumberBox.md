{"bigh3": true}

## NumberBox

![Image to be displayed](https://i.imgur.com/0Xfg8pM.png)

A `NumberBox` sensor component creates a NumberBox UI widget. It is used for filtering results based on a numeric query.

Example uses:
* filtering hotel listings based on the number of guests,
* filtering movies or products by ratings.

### Usage

#### Basic Usage

```js
<NumberBox
  componentId="NumberBoxSensor"
  appbaseField="guests"
  data={{ "label": "Guests", "start": 0, "end": 5 }}
/>
```

#### Usage With All Props

```js
<NumberBox
  componentId="NumberBoxSensor"
  appbaseField="guests"
  title="NumberBox component"
  defaultSelected={0}
  data={{ "label": "Guests", "start": 0, "end": 5 }}
  labelPosition="left"
  queryFormat="gte"
  showFilter={true}
  filterLabel="City"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view.The selected buttons create a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `Number` [optional]  
    preset a valid value within the [start, end] range.
- **data** `Object`  
    an object with `start` and `end` values and optionally an associated `label` to be displayed in the UI.
- **labelPosition** `String` [optional]  
    position where label is shown, one of "left", "top", "right", "bottom". Defaults to `left`.
- **queryFormat** `String` [optional]  
    type of query to perform, one of "exact", "gte" (greater than or equal), "lte" (less than or equal) . Defaults to `gte`.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the number. This is useful for sharing URLs with the component state. Defaults to `false`.

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
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

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
  beforeValueChange={
    function(value) {
      // called before the value is set
      // returns a promise
      return new Promise((resolve, reject) => {
        // update state or component props
        resolve()
        // or reject()
      })
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
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a number is selected in a NumberBox.


### Examples

1. [A NumberBox component with defaults](../playground/?knob-title=Number%20of%20Guests&knob-defaultSelected=2&selectedKind=search%2FNumberBox&selectedStory=With%20defaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [Playground (with all knob actions)](../playground/?knob-title=Number%20of%20Guests&knob-defaultSelected=3&knob-data=%7B"start"%3A1%2C"end"%3A16%2C"label"%3A"Guests"%7D&knob-labelPosition=right&knob-queryFormat=exact&selectedKind=search%2FNumberBox&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
