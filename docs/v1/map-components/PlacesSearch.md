{"bigh3": true}

## PlacesSearch

![Image to be displayed](https://i.imgur.com/NY3P3P9.png)

A `PlacesSearch` sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.

Example uses:

* finding restaurants in walking distance from your location.
* discovering things to do near a landmark.

### Usage

```js
<PlacesSearch
  componentId="PlacesSearchSensor"
  appbaseField="venue_names"
  title="Places Search Sensor"
  placeholder="Search for Places"
  setAutoLocation={true}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `actuate` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view, used when a database query is made on this field.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **placeholder** `String` [optional]  
    set the placeholder text to be shown in the searchbox field. Defaults to "Search..".
- **setAutoLocation** `Boolean` [optional]  
    defaults to `true`, fetches the user's current location and prefills it in the searchbox.

### CSS Styles

All reactivebase and reactivemaps components are `rbc` namespaced.

![Annotated image]()

```html
TBD
```


### Examples

1. PlacesSearch component with all the default props

2. Using PlacesSearch for navigating directions from Point A to Point B

3. Playground (with all knob actions)
