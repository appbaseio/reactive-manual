{"bigh3": true}

## GeoDistanceSlider

![Image to be displayed](
https://i.imgur.com/FU4s0PQ.png)

A `GeoDistanceSlider` sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.

Example uses:

* finding restaurants in walking distance from your location.
* discovering things to do near a landmark.

### Usage

```js
<GeoDistanceSlider
  componentId="GeoDistanceSensor"
  appbaseField="location"
  title="Geo Distance Slider"
  unit="mi"
  range={
    {
      "start": 0,
      "end": 20
    }
  }
  defaultSelected={{
    "location": "SOMA, San Francisco, United States",
    "distance": 12
  }}
  rangeLabels={
    {
      "start": "0 mi",
      "end": "20 mi"
    }
  }
  stepValue={1}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view, used when a database query is made on this field.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **unit** `String` [optional]  
    unit for distance measurement, uses `mi` (for miles) by default. Distance units can be specified from the following:  
    ![screenshot](https://i.imgur.com/STbeagk.png).
- **range** `Object`  
    an object with `start` and `end` keys and corresponding numeric values denoting the minimum and maximum possible slider values.
- **rangeLabels** `Object` [optional]  
    an object with `start` and `end` keys and corresponding `String` labels to show labels near the ends of the `GeoDistanceSlider` component.
- **defaultSelected** `Object` [optional]  
    pre-select the search query with `location` option and distance with `distance` option.
- **stepValue** `Number` [optional]  
    step value specifies the slider stepper. Value should be an integer between 1 and floor(#total-range/2). Defaults to 1.


### CSS Styles

All reactivebase and reactivemaps components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/0si7fn1.png)

```html
<div class="rbc rbc-geodistanceslider rbc-title-active rbc-placeholder-active rbc-labels-inactive">
    <div class="row">
        <h4 class="rbc-title">Geo Distance Search</h4>
        <div class="rbc-search-container col s12 col-xs-12">
            <div class="Select">
              ...
            </div>
        </div>
    </div>
    <div class="rbc-rangeslider-container col s12 col-xs-12">
        <div class="rc-slider">
           ...
        </div>
    </div>
</div>
```


### Examples

1. GeoDistance slider with all the default props

2. GeoDistance slider with a title

3. GeoDistance slider with range labels

4. Playground (with all knob actions)

