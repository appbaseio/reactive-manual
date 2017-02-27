{"bigh3": true}

## GeoDistanceDropdown

![Image to be displayed](https://i.imgur.com/SidQoYY.png)

A `GeoDistanceDropdown` sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.

Example uses:

* finding restaurants in walking distance from your location.
* discovering things to do near a landmark.

### Usage

```js
<GeoDistanceDropdown
  componentId="GeoDistanceDropdownSensor"
  appbaseField="location"
  title="Geo Distance Dropdown"
  unit="mi"
  data={
    [
      { "start": 0, "end": 20, "label": "< 20 miles" },
      { "start": 0, "end": 50, "label": "< 50 miles" },
      { "start": 0, "end": 100, "label": "< 100 miles" },
    ]
  }
  defaultSelected={{
    location: "SOMA, San Francisco"
    label: "< 20 miles"
  }}
  placeholder="Select a distance range.."
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
- **data** `Object Array`  
    collection of UI `labels` with associated `start` and `end` range values.
- **defaultSelected** `Object` [optional]  
    pre-select values of the search query with `label` and `location` keys.
- **placeholder** `String` [optional]  
    set the placeholder to show for the dropdown UI, useful when no option is `defaultSelected`.

### CSS Styles

All reactivebase and reactivemaps components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/St1dgTz.png)

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
    <div class="col s12 col-xs-12">
      <div class="Select">
        ...
      </div>
    </div>
</div>
```


### Examples

1. GeoDistance dropdown with all the default props

2. GeoDistance dropdown with a title

3. GeoDistance dropdown with a defaultSelected value

4. Playground (with all knob actions)

