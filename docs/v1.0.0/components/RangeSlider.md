{"bigh3": true}

## RangeSlider

![Image to be displayed](https://i.imgur.com/OYUWZHL.png)

A `RangeSlider` sensor component creates a numeric range slider UI widget. It is used for granular filtering of numeric data.

Example uses:

* filtering products from a price range in an e-commerce shopping experience.
* filtering flights from a range of departure and arrival times.

### Usage

```js
<RangeSlider
  componentId="RangeSliderSensor"
  appbaseField="guests"
  title="Guests"
  threshold={
    {
      "start": 0,
      "end": 10
    }
  }
  defaultSelected={
    {
      "start": 1,
      "end": 5
    }
  }
  stepValue=1
  initialLoader="creating the histogram.."
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view.The selected range creates a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **range** `Object`  
    an object with `start` and `end` keys and corresponding numeric values denoting the minimum and maximum possible slider values.
- **rangeLabels** `Object` [optional]  
    an object with `start` and `end` keys and corresponding `String` labels to show labels near the ends of the `RangeSlider` component.
- **defaultSelected** `Object` [optional]  
    an object with `start` and `end` keys and corresponding numeric values denoting the pre-selected range values.
- **stepValue** `Number` [optional]  
    step value specifies the slider stepper. Value should be an integer between 1 and floor(#total-range/2). Defaults to 1.
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/jXeI9W1.png)

```html
<div class="rbc rbc-rangeslider card thumbnail col s12 col-xs-12 rbc-title-active rbc-labels-inactive">
    <h4 class="rbc-title col s12 col-xs-12">Guests</h4>
    <div class="rbc-bar-container col s12 col-xs-12">
      <span class="rbc-bar-item">
        <span class="bar"></span>
      </span>
    </div>
    <div class="rbc-rangeslider-container col s12 col-xs-12" style="margin: 25px 0px;">
        <div class="rc-slider">
          ...
        </div>
    </div>
</div>
```

* RangeSlider component's class name is `rbc-rangeslider`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* the histogram is encapsulated inside a `rbc-bar-container` class with each element having class name of `rbc-bar-item`.
* the slider is encapsulated inside a `rbc-rangeslider-container` class.

### Extending

`RangeSlider` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<RangeSlider
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
    CSS styles to be applied to the **RangeSlider** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **RangeSlider** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **RangeSlider's** value changes.

### Examples

1. [Range with all the default props](../playground/?selectedKind=RangeSlider&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

2. [Range with a default selection](../playground/?selectedKind=RangeSlider&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

3. [Range without histogram](..playground/?selectedKind=RangeSlider&selectedStory=Without%20histogram&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

4. [With Range Labels](..playground/?selectedKind=m%2FRangeSlider&selectedStory=With%20Range%20Labels&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

5. [Playground (with all knob actions)](..playground/?knob-title=RangeSlider%3A%20Guest%20RSVPs&knob-range=%7B"start"%3A0%2C"end"%3A5%7D&knob-stepValue=1&knob-defaultSelected=%7B"start"%3A0%2C"end"%3A2%7D&knob-rangeLabels=%7B"start"%3A"Start"%2C"end"%3A"End"%7D&knob-showHistogram=true&selectedKind=RangeSlider&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
