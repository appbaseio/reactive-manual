{"bigh3": true}

## MultiRange

![Image to be displayed](https://i.imgur.com/XqRjLSS.png)

A `MultiRange` component creates a multiple checkbox based numeric range selector. It is like a MultiList widget but for numeric data.

Example uses:
* filtering search results by prices in an e-commerce or food delivery experience.
* browsing movies by a ratings filter.

### Usage

```js
<MultiRange
  componentId="PriceSensor"
  appbaseField="price"
  title="Price"
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
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    collection of UI `labels` with associated `start` and `end` range values.
- **defaultSelected** `Array` [optional]  
    pre-select one or more labels from the `data` array.

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

### Examples

1. Range with all the default props

2. Range with multiple default selections

3. Range with a dependency on another sensor

4. Playground (with all knob actions)

