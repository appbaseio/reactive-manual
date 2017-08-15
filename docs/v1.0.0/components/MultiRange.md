{"bigh3": true}

## MultiRange

![Image to be displayed](https://i.imgur.com/XqRjLSS.png)

A `MultiRange` component creates a multiple checkbox based numeric range selector. It is like a MultiList widget but for numeric data.

Example uses:
* filtering search results by prices in an e-commerce or food delivery experience.
* browsing movies by a ratings filter.

### Usage

#### Basic Usage

```js
<MultiRange
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
<MultiRange
  componentId="PriceSensor"
  appbaseField="price"
  title="Prices"
  defaultSelected={["Cheap", "Moderate"]}
  showCheckbox={true}
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
  showFilter={true}
  filterLabel="Prices"
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
- **defaultSelected** `Array` [optional]  
    pre-select one or more labels from the `data` array.
- **showCheckbox** `Boolean` [optional]  
    show checkbox icon for each range item. Defaults to `true`.
- **data** `Object Array`  
    collection of UI `labels` with associated `start` and `end` range values.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected values of the ranges. This is useful for sharing URLs with the component state. Defaults to `false`.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/m3uFfKj.png)

```html
<div class="rbc rbc-multirange col s12 col-xs-12 card thumbnail rbc-title-active">
  <div class="row">
    <h4 class="rbc-title col s12 col-xs-12">Price</h4>
    <div class="col s12 col-xs-12 rbc-list-container">
      <div class="rbc-list-item row">
        <input type="checkbox" value="Cheap">
        <label class="rbc-label">Cheap</label>
      </div>
      <div class="rbc-list-item row">
        <input type="checkbox" value="Moderate">
        <label class="rbc-label">Moderate</label>
      </div>
      <div class="rbc-list-item row">
        <input type="checkbox" value="Pricey">
        <label class="rbc-label">Pricey</label>
      </div>
      <div class="rbc-list-item row">
        <input type="checkbox" value="First Date">
        <label class="rbc-label">First Date</label>
      </div>
    </div>
  </div>
</div>
```

* SingleRange component's class name is `rbc-singlerange`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* the checkbox inputs are encapsulated inside a `rbc-list-container` class with each element having class name of `rbc-list-item`.
* the input checkbox element has a class name of `rbc-checkbox-item`.
* the label element has a class name of `rbc-label`.

### Extending

`MultiRange` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<MultiRange
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
    CSS styles to be applied to the **MultiRange** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **MultiRange** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code(s) when range item(s) is/are selected in a "Prices" MultiRange.

### Examples

1. [Range with all the default props](../playground/?knob-title=SingleRange%3A%20Earthquake%20Filter&knob-defaultSelected=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-size=100&knob-showCount=true&knob-placeholder=Search%20City&knob-showSearch=true&selectedKind=map%2FMultiRange&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [Range with pre-selected items](../playground/?knob-title=SingleRange%3A%20Earthquake%20Filter&knob-defaultSelected%5B0%5D=Major&knob-defaultSelected%5B1%5D=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-size=100&knob-showCount=true&knob-placeholder=Search%20City&knob-showSearch=true&selectedKind=map%2FMultiRange&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-title=MultiRange%3A%20Filter&knob-defaultSelected%5B0%5D=Major&knob-defaultSelected%5B1%5D=Moderate&knob-selectAllLabel=All%20cities&knob-showRadio=true&knob-sortBy=count&knob-showCheckbox=true&knob-size=100&knob-showCount=true&knob-placeholder=Search%20City&knob-showSearch=true&selectedKind=map%2FMultiRange&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
