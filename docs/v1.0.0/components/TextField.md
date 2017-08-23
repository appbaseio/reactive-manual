{"bigh3": true}

## TextField

![Image to be displayed](https://i.imgur.com/0fnMNaz.png)

A `TextField` sensor component creates a simple text input field. It is useful for taking generic user inputs that can be used with a custom query.

### Usage

#### Basic Usage

```js
<TextField
  componentId="NameTextSensor"
  appbaseField="name"
/>
```

#### Usage With All Props

```js
<TextField
  componentId="NameTextSensor"
  appbaseField="name"
  title="TextField"
  defaultSelected="volvo"
  placeholder="Type a car name"
  showFilter={true}
  filterLabel="Car"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `Number` [optional]  
    preset some value in the text field.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the text field when it has no value.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the text field. This is useful for sharing URLs with the component state. Defaults to `false`.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="prKEwL" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="TextField docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/prKEwL/">TextField docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/EeShH2p.png)

### Extending

`TextField` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<TextField
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
    CSS styles to be applied to the **TextField** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **TextField** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the TextField.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="prKEwL" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="TextField docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/prKEwL/">TextField docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [Text field  with default props](../playground/?knob-title=Number%20of%20Guests&knob-defaultSelected=Nissan&knob-data=%7B"start"%3A1%2C"end"%3A16%2C"label"%3A"Guests"%7D&knob-labelPosition=right&knob-queryFormat=exact&selectedKind=search%2FTextField&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [Text field with a default selected value](../playground/?knob-title=Number%20of%20Guests&knob-defaultSelected=Nissan&knob-data=%7B"start"%3A1%2C"end"%3A16%2C"label"%3A"Guests"%7D&knob-labelPosition=right&knob-queryFormat=exact&selectedKind=search%2FTextField&selectedStory=DefaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-title=TextField%3A%20Car%20Search&knob-defaultSelected=nissan&knob-data=%7B"start"%3A1%2C"end"%3A16%2C"label"%3A"Guests"%7D&knob-labelPosition=right&knob-queryFormat=exact&knob-placeholder=Type%20a%20car%20name&selectedKind=search%2FTextField&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
