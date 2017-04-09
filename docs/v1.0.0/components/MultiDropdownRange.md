{"bigh3": true}

## MultiDropdownRange

![Image to be displayed](https://i.imgur.com/Xwo2Aog.png)

A `MultiDropdownRange` sensor component creates a dropdown based multiple numeric range selector UI widget. It is like a MultiList widget but for numeric data. It is also like MultiRange widget except displayed in a dropdown format.

Example uses:
* filtering search results by prices in an e-commerce or food delivery experience.
* browsing movies by a ratings filter.

### Usage

```js
<MultiDropdownRange
  componentId="PriceSensor"
  appbaseField="price"
  title="MultiDropdownRange component"
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
  defaultSelected={["Cheap", "Moderate"]}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view. The range items are filtered by a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    collection of UI `labels` with associated `start` and `end` range values.
- **defaultSelected** `Array` [optional]  
    pre-select one or more labels from the `data` array.
- **placeholder** `String` [optional]  
    set the placeholder to show for the dropdown UI, useful when no option is `defaultSelected`.

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/qO1I0Th.png)

```html
<div class="rbc rbc-multidropdownrange col s12 col-xs-12 card thumbnail rbc-title-active rbc-placeholder-active">
    <div class="row">
        <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
        <div class="col s12 col-xs-12">
            <div class="Select Select--single is-searchable has-value">
              ...
            </div>
        </div>
    </div>
</div>
```

* MultiDropdownRange component's class name is `rbc-multidropdownrange`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `placeholder` prop, classname of `rbc-placeholder-active` or `rbc-placeholder-active` is applied.
* the title element has a class name of `rbc-title`.

### Extending

`MultiDropdownRange` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<MultiDropdownRange
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
    CSS styles to be applied to the **MultiDropdownRange** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **MultiDropdownRange** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **MultiDropdownRange's** value changes.

### Examples

1. [Range with default props](../playground/?selectedKind=m%2FMultiDropdownRange&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

2. [Range with pre-selected values](../playground/?selectedKind=m%2FMultiDropdownRange&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

3. [Playground (with all knob actions)](../playground/?knob-title=MultiDropdownRange%3A%20Earthquake%20Magnitude&knob-defaultSelected%5B0%5D=Moderate&knob-defaultSelected%5B1%5D=Strong&selectedKind=m%2FMultiDropdownRange&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
