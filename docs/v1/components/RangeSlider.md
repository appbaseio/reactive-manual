{"bigh3": true}

## RangeSlider

![Image to be displayed](https://i.imgur.com/OYUWZHL.png)

A `RangeSlider` component creates a numeric range slider. It's useful for granular filtering of numeric data.

```js
<RangeSlider
  sensorId="GuestCount"
  appbaseField={this.props.mapping.guestcount}
  title="RSVPs"
  defaultSelected={
    { 
      "start": 1,
      "end": 5
    }
  }
  startThreshold=0
  endThreshold=10
  stepValue=1
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **appbaseField** : `String`: is the name of the field for the range slider data in the appbase.io app. For a `RangeSlider` component, the field should be of a numeric data type.
- **title**: `String`: Sets the title of the component to be shown in the UI.
- **defaultSelected**: `Object`: (Optional) is the default selection of the slider values.    
- **startThreshold**: `Number`: is the minimum value available to be set on the range slider.  
- **endThreshold**: `Number`: is the maximum value avaiable to be set on the range slider.  
- **stepValue**: `Number`: is the step value between two nearest units, defaults to 1.
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/jXeI9W1.png)

```html
<div class="rbc rbc-rangeslider card thumbnail col s12 col-xs-12 rbc-title-active">
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

