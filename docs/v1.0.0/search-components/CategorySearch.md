{"bigh3": true}

#CategorySearch

![Image to be displayed](https://i.imgur.com/dLeyahL.png)
A `CategorySearch` sensor component creates a category search UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields.

Example uses:
* Searching for a rental listing by its `name` or `description` field.
* Creating an e-commerce search box for finding products by their listing properties.

### Usage

```js
<CategorySearch
  componentId="SearchSensor"
  appbaseField={["group_venue", "group_city"]}
  title="Search"
  placeholder="Search for cities or venues"
  categoryField="group_topics"
  autocomplete={true}
  highlight={false}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator’s react prop.
- **appbaseField** `String or Array`  
    data field(s) on which the search query will be aplied to. If you want to search across multiple fields, pass them as an `Array`.
- **title** `String or HTML` [optional]  
    Sets the title of the component to be shown in the UI.
- **placeholder** `String` [optional]  
    Sets the placeholder text to be shown in the searhbox input field. Defaults to "Search...".
- **categoryField** `String` [optional]  
    data field which has the category values mapped.
- **autocomplete** `Boolean` [optional]  
    Sets whether the autocomplete functionality should be enabled or disabled. Defaults to true.
- **highlight** `Boolean` [optional]  
    Whether highlighting should be enabled in the returned results.
- **highlightFields** `Array` [optional]  
    When highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the **appbaseField** prop.

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

### Extending

`CategorySearch` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<CategorySearch
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
    CSS styles to be applied to the **DataSearch** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **CategorySearch** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **CategorySearch's** value changes.


### Examples

1. [DataSearch with all the default props](../playground/?selectedKind=m%2FDataSearch&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
1. [DataSearch with autocomplete turned off](../playground/?selectedKind=m%2FDataSearch&selectedStory=Without%20Autocomplete&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
1. [Playground (with all knob actions)](../playground/?knob-title=DataSearch%3A%20Meetups&knob-placeholder=Search%20Venue&knob-autocomplete=true&selectedKind=m%2FDataSearch&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
