{"bigh3": true}

## MultiDropdownRange

![Image to be displayed](https://i.imgur.com/Xwo2Aog.png)

A `MultiDropdownRange` sensor component creates a dropdown based multiple numeric range selector UI widget. It is like a MultiList widget but for numeric data. It is also like MultiRange widget except displayed in a dropdown format.

Example uses:
* filtering search results by prices in an e-commerce or food delivery experience.
* browsing movies by a ratings filter.

### Usage

```js
<MultiDropdownRange
  componentId="PriceSensor"
  appbaseField="price"
  title="MultiDropdownRange component"
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
- **placeholder** `String` [optional]  
    set the placeholder to show for the dropdown UI, useful when no option is `defaultSelected`.

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/qO1I0Th.png)

```html
<div class="rbc rbc-multidropdownrange col s12 col-xs-12 card thumbnail rbc-title-active rbc-placeholder-active">
    <div class="row">
        <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
        <div class="col s12 col-xs-12">
            <div class="Select Select--single is-searchable has-value">
              ...
            </div>
        </div>
    </div>
</div>
```

* MultiDropdownRange component's class name is `rbc-multidropdownrange`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `placeholder` prop, classname of `rbc-placeholder-active` or `rbc-placeholder-active` is applied.
* the title element has a class name of `rbc-title`.

### Examples

1. List with all the default props

2. List with custom sort and a default selection

3. List with show search set to true

4. List with a dependency on another sensor

5. Playground (with all knob actions)

