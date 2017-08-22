{"bigh3": true}

## SingleRange

![Image to be displayed](https://i.imgur.com/55jFax6.png)

A `SingleRange` sensor component creates a numeric range selector UI widget. It is like a list widget, but for numeric data.

Example uses:
* filtering search results by prices in an e-commerce or food delivery experience.
* browsing movies by a ratings filter.

### Usage

#### Basic Usage

```js
<SingleRange
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
<SingleRange
  componentId="PriceSensor"
  appbaseField="price"
  title="Prices"
  defaultSelected="Cheap"
  showRadio={true}
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
  showFilter={true}
  filterLabel="Price"
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
- **showRadio** `Boolean` [optional]  
    show radio button icon for each range item. Defaults to `true`.
- **data** `Object Array`  
    collection of UI `labels` with associated `start` and `end` range values.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the range. This is useful for sharing URLs with the component state. Defaults to `false`.

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/CIOLTQo.png)

### Extending

`SingleRange` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<SingleRange
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
    CSS styles to be applied to the **SingleRange** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **SingleRange** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a range item is selected in a "Prices" SingleRange.

### Examples

1. [Range with all the default props](../playground/?knob-title=SingleRange%3A%20Price%20Filter&knob-defaultSelected=Cheap&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-size=100&knob-showCount=true&knob-placeholder=Search%20City&knob-showSearch=true&selectedKind=map%2FSingleRange&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [Range with a pre-selected item](../playground/?knob-title=SingleRange%3A%20Price%20Filter&knob-defaultSelected=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-size=100&knob-showCount=true&knob-placeholder=Search%20City&knob-showSearch=true&selectedKind=map%2FSingleRange&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-title=SingleRange%3A%20Earthquake%20Filter&knob-defaultSelected=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-size=100&knob-showCount=true&knob-placeholder=Search%20City&knob-showSearch=true&selectedKind=map%2FSingleRange&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
