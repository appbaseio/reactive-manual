{"bigh3": true}

## SingleDropdownRange

![Image to be displayed](https://i.imgur.com/A23Iu2w.png)

A `SingleDropdownRange` sensor component creates a dropdown based numeric range selector UI widget. It is like a SingleList widget but for numeric data. It is also like SingleRange widget except displayed in a dropdown format.

Example uses:
* filtering search results by prices in an e-commerce or food delivery experience.
* browsing movies by a ratings filter.

### Usage

#### Basic Usage

```js
<SingleDropdownRange
  componentId="PriceSensor"
  appbaseField="price"
  title="Prices"
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
/>
```

#### Usage With All Props

```js
<SingleDropdownRange
  componentId="PriceSensor"
  appbaseField="price"
  title="Prices"
  defaultSelected="Cheap"
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
  placeholder="Select price range"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view. The range items are filtered by a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `String` [optional]  
    pre-select a label from the `data` array.
- **data** `Object Array`  
    collection of UI `labels` with associated `start` and `end` range values.
- **placeholder** `String` [optional]  
    set the placeholder to show for the dropdown UI, useful when no option is `defaultSelected`. The default placeholder value is set to "Select...".
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/iePJDR8.png)

### Extending

`SingleDropdownRange` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<SingleDropdownRange
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
    CSS styles to be applied to the **SingleDropdownRange** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **SingleDropdownRange** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a range item is selected in a "Prices" SingleDropdownRange.

### Examples

1. [Range with all the default props](../playground/?knob-title=SingleList%3A%20City%20Filter&knob-defaultSelected=San%20Francisco&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-showCheckbox=true&knob-size=100&knob-showCount=true&knob-placeholder=s&knob-showSearch=true&selectedKind=map%2FSingleDropdownRange&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [Range with pre-selected items](../playground/?knob-title=SingleList%3A%20City%20Filter&knob-defaultSelected=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-showCheckbox=true&knob-size=100&knob-showCount=true&knob-placeholder=s&knob-showSearch=true&selectedKind=map%2FSingleDropdownRange&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-title=SingleDropdownRange%3A%20Filter&knob-defaultSelected=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-showCheckbox=true&knob-size=100&knob-showCount=true&knob-placeholder=Search%20prices&knob-showSearch=true&selectedKind=map%2FSingleDropdownRange&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
