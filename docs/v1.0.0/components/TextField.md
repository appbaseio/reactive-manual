{"bigh3": true}

## TextField

![Image to be displayed](https://i.imgur.com/0fnMNaz.png)

A `TextField` sensor component creates a simple text input field. It is useful for taking generic user inputs for creating a custom query context.

Unlike other components that have a specific query associated with their UI view, a `TextField` component requires a `customQuery` definition using its input value.

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
- **title** `String` [optional]  
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


### Examples

1. Text field with a custom query

2. Playground (with all knob actions)

