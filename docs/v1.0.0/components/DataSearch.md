{"bigh3": true}

## DataSearch

![Image to be displayed](https://i.imgur.com/dLeyahL.png)

A `DataSearch` sensor component creates a searchbox UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields.

Example uses:
* Searching for a rental listing by its `name` or `description` field.
* Creating an e-commerce search box for finding products by their listing properties.

### Usage

```js
<DataSearch
  componentId="SearchSensor"
  appbaseField={["group_venue", "group_city"]}
  title="Search"
  placeholder="Search for cities or venues"
  autocomplete={true}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator’s react prop.
- **appbaseField** `String or Array`  
    data field(s) on which the search query will be aplied to. If you want to search across multiple fields, pass them as an `Array`.
- **title** `String` [optional]  
    Sets the title of the component to be shown in the UI.
- **placeholder** `String` [optional]  
    Sets the placeholder text to be shown in the searhbox input field. Defaults to "Search...".
- **autocomplete** `Boolean` [optional]  
    Sets whether the autocomplete functionality should be enabled or disabled. Defaults to true.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated Image](https://i.imgur.com/ysbmr3Gg.png)

```html
<div class="rbc rbc-datasearch rbc-title-inactive rbc-placeholder-active rbc-autocomplete-active">
		<div class="Select Select--single is-searchable">
			...
		</div>
</div>

<div class="rbc rbc-datasearch rbc-title-active rbc-placeholder-active rbc-autocomplete-inactive">
		<h4 class="rbc-title col s12 col-xs-12">DataSearch</h4>
		<div class="rbc-search-container col s12 col-xs-12">
			<input type="text" class="rbc-input" placeholder="Search Venue" value="">
			<span class="rbc-search-icon"></span>
		</div>
</div>

```

* DataSearch component's class name is `rbc-datasearch`.
* Additionally, depending on the presence / absence of the `placeholder` prop, a `rbc-placeholder-active` or `rbc-placeholder-inactive` class is respectively applied.
* Also depending on the presence / absence of the `autocomplete` prop, a `rbc-autocomplete-active` or `rbc-autocomplete-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* the search container has a class name of `rbc-search-container`.
* the input element inside the search container has a class name of `rbc-input`.

### Examples

1. DataSearch with all the default props
1. DataSearch with autocomplete turned off
1. Playground (with all knob actions)
