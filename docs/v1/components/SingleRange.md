{"bigh3": true}

## SingleRange

![Image to be displayed](https://i.imgur.com/55jFax6.png)

A `SingleRange` component creates a numeric range selector. It's useful for filtering data by prices, for instance.

```js
<SingleRange
  sensorId="PriceSensor"
  appbaseField={this.props.mapping.price}
  title="Price"
  defaultSelected="Cheap"
  data={
    [{"start": 0, "end": 10, "label": "Cheap"},
     {"start": 11, "end": 20, "label": "Moderate"},
     {"start": 21, "end": 50, "label": "Pricey"},
     {"start": 51, "end": 1000, "label": "First Date"}]
  }
/>
```

### Props

- **sensorId** : `String`: should be unique id of sensor which can be used in other sensor's dependencies.   
- **appbaseField** : `String`: is the name of the field for price data in the appbase.io app. For a `SingleRange` component, the field should be of a numeric data type.
- **title**: `String`: Sets the title of the component to be shown in the UI.
- **defaultSelected**: `string`: is the default selected label   
- **data**: `Object Array`: is a collection of UI options with labels and [start, end] range values
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles

All reactivebase components are `rbc` namespaced.

```html
<div class="rbc rbc-singlerange col s12 col-xs-12 card thumbnail rbc-title-active">
  <div class="row">
    <h4 class="rbc-title col s12 col-xs-12">Price</h4>
    <div class="col s12 col-xs-12 rbc-list-container">
      <div class="rbc-list-item row">
        <input type="radio" class="rbc-radio-item" value="Cheap">
        <label class="rbc-label">Cheap</label>
      </div>
      <div class="rbc-list-item row">
        <input type="radio" class="rbc-radio-item" value="Moderate">
        <label class="rbc-label">Moderate</label>
      </div>
      <div class="rbc-list-item row">
        <input type="radio" class="rbc-radio-item" value="Pricey">
        <label class="rbc-label">Pricey</label>
      </div>
      <div class="rbc-list-item row">
        <input type="radio" class="rbc-radio-item" value="First Date">
        <label class="rbc-label">First Date</label>
      </div>
    </div>
  </div>
</div>
```

* SingleRange component's class name is `rbc-singlerange`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* the radio inputs are encapsulated inside a `rbc-list-container` class with each element having class name of `rbc-list-item`.
* the input radio element has a class name of `rbc-radio-item`.
* the label element has a class name of `rbc-label`.


### Examples

1. Range with all the default props

2. Range with a default selection

3. Range with a dependency on another sensor

4. Playground (with all knob actions)

