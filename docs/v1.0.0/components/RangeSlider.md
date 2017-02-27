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
- **title** `String` [optional]  
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


### Examples

1. Range with all the default props

2. Range with a default selection

3. Range with a dependency on another sensor

4. Playground (with all knob actions)

