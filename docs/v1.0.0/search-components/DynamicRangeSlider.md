{"bigh3": true}

## DynamicRangeSlider

![Image to be displayed](https://i.imgur.com/PGHsWpA.png)

`DynamicRangeSlider` creates a numeric range slider UI component. It is used for granular filtering of numeric data.

Example uses:

* filtering products from a price range in an e-commerce shopping experience.
* filtering flights from a range of departure and arrival times.

### Usage

#### Basic Usage
```js
<DynamicRangeSlider
  componentId="DynamicRangeSensor"
  appbaseField="guests"
/>
```

While `DynamicRangeSlider` only requires the above props to be used, it comes with many additional props for pre-selecting range values, setting the step value of the range slider, specifying labels for the range endpoints, whether to display histogram etc.

#### Usage With All Props
```js
<DynamicRangeSlider
  componentId="DynamicRangeSensor"
  appbaseField="guests"
  title="Guests"
  defaultSelected={(min, max) => (
    {
      "start": min,
      "end": Math.min(min + 5, max)
    }
  )}
  rangeLabels={(min, max) => (
    {
      "start": min + " guest",
      "end": max + " guests"
    }
  )}
  stepValue={1}
  showHistogram={true}
  interval={2}
  initialLoader="Rendering the histogram.."
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view.The selected range creates a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `Object` [optional]  
    a function that accepts `min` and `max` range values as parameters and returns an object representing current selection from the range with `start` and `end` keys.
- **rangeLabels** `Function` [optional]  
    a function that accepts `min` and `max` range values as parameters and returns an object representing labels with `start` and `end` keys.
- **stepValue** `Number` [optional]  
    step value specifies the slider stepper. Value should be an integer between 1 and floor(#total-range/2). Defaults to 1.
- **showHistogram** `Boolean` [optional]  
    whether to display the range histogram or not. Defaults to `true`.
- **interval** `Number` [optional]  
    set the histogram bar interval, applicable when *showHistogram* is `true`. Defaults to `(range.end - range.start) / 10`.
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/jBkvYft.png)

```html
<div class="rbc rbc-dynamicrangeslider card thumbnail col s12 col-xs-12 rbc-title-active rbc-rangelabels-inactive rbc-histogram-inactive rbc-initialloader-inactive">
  <h4 class="rbc-title col s12 col-xs-12">DynamicRangeSlider</h4>
  <div class="rbc-rangeslider-container col s12 col-xs-12">
    <div class="rc-slider">
      <div class="rc-slider-rail"></div>
      <div class="rc-slider-track rc-slider-track-1" style="visibility: visible; left: 0%; width: 101.01%;"></div>
      <div class="rc-slider-step"></div>
      <div class="rc-slider-handle rc-slider-handle-1 rc-slider-handle-lower" style="left: 0%;"></div>
      <div class="rc-slider-handle rc-slider-handle-2 rc-slider-handle-upper" style="left: 101.01%;"></div>
      <div class="rc-slider-mark"></div>
    </div>
  </div>
</div>
```

* DynamicRangeSlider component's class name is `rbc-dynamicrangeslider`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* the histogram is encapsulated inside a `rbc-bar-container` class with each element having class name of `rbc-bar-item`. When the histogram is not present, the top level element will have a `rbc-histogram-inactive` class.
* the slider is encapsulated inside a `rbc-rangeslider-container` class.
* if range labels are not present, the top level element will have a `rbc-rangelabels-inactive` class.

### Extending

`DynamicRangeSlider` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`,
4. filter data using a combined query context via the `react` prop.

```
<DynamicRangeSlider
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
  react={{
    "and": ["ListSensor"]
  }}
/>
```

- **componentStyle** `Object`  
    CSS styles to be applied to the **DynamicRangeSlider** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **DynamicRangeSlider** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`  
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **DynamicRangeSlider's** value changes.
- **react** `Object`  
    specify dependent components to reactively update **DynamicRangeSlider's** data view.
    - **key** `String`  
        one of `and`, `or`, `not` defines the combining clause.
        - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
        - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
        - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
    - **value** `String or Array or Object`  
        - `String` is used for specifying a single component by its `componentId`.
        - `Array` is used for specifying multiple components by their `componentId`.
        - `Object` is used for nesting other key clauses.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="PmGmOW" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch RangeSlider" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/PmGmOW/">ReactiveSearch DynamicRangeSlider</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for DynamicRangeSlider on playground.

1. [DynamicRangeSlider with default props](../playground/?filterBy=ReactiveSearch&selectedKind=s%2FDynamicRangeSlider&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

2. [DynamicRangeSlider without histogram](../playground/?filterBy=ReactiveSearch&knob-showHistogram=false&selectedKind=s%2FDynamicRangeSlider&selectedStory=Without+histogram&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

3. [With Range Labels](../playground/?filterBy=ReactiveSearch&selectedKind=s%2FDynamicRangeSlider&selectedStory=With+RangeLabels&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

4. [With defaultSelected](../playground/?filterBy=ReactiveSearch&selectedKind=s%2FDynamicRangeSlider&selectedStory=With+defaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

4. [Playground (with all knob actions)](../playground/?filterBy=ReactiveSearch&knob-showHistogram=true&knob-title=DynamicRangeSlider%3A+Guest+RSVPs&knob-stepValue=1&selectedKind=s%2FDynamicRangeSlider&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)
