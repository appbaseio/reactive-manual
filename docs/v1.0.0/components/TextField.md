{"bigh3": true}

## TextField

![Image to be displayed](https://i.imgur.com/0fnMNaz.png)

A `TextField` sensor component creates a simple text input field. It is useful for taking generic user inputs that can be used with a custom query.

### Usage

```js
<TextField
  componentId="NameTextSensor"
  appbaseField="name"
  title="TextField"
  placeholder="Type a car name"
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the text field.


### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/EeShH2p.png)

```html
<div class="rbc rbc-textfield col s12 col-xs-12 card thumbnail rbc-title-active rbc-placeholder-inactive">
	<h4 class="rbc-title col s12 col-xs-12">Type a search string</h4>
	<div class="rbc-search-container col s12 col-xs-12">
		<input type="text" class="rbc-input" value="">
	</div>
</div>
```

* Textfield component's class name is `rbc-textfield`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `placeholder` prop, classname of `rbc-placeholder-active` or `rbc-placeholder-active` is applied.
* the title element has a class name of `rbc-title`.
* the search container has a class name of `rbc-search-container`.
* the input element has a class name of `rbc-input`.

### Extending

`TextField` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

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
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **TextField's** value changes.

### Examples

1. [Text field  with default props](..playground/?selectedKind=TextField&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

2. [Text field with a default selected value](..playground/?selectedKind=TextField&selectedStory=DefaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](..playground/?knob-title=TextField%3A%20Car%20Search&knob-placeholder=Type%20a%20car%20name&knob-defaultSelected=nissan&selectedKind=TextField&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)
