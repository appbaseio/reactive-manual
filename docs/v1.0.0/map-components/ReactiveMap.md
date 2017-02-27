{"bigh3": true}

{% raw %}

### ReactiveMap

![ReactiveMap Image](https://i.imgur.com/faAZ5v8.png)

A `ReactiveMap` actuator component creates a map UI widget. It is the key component for building map based experiences.

Example uses:
* showing a map of user checkins by city and topics for powering discovery based experiences.
* displaying restaurants filtered by a nearby distance query on a map.

### Usage

```js
<ReactiveMap
    componentId="ReactiveMapActuator"
    appbaseField="location"
    title="ReactiveMap"

    size={100}
    defaultZoom={13}
    defaultCenter={{ lat: 37.74, lng: -122.45 }}

    showMapStyles={true}
    defaultMapStyle="Standard"
    showMarkers={true}
    defaultMarkerImage="path/to/marker.png"
    setMarkerCluster={true}
    showSearchAsMove={true}
    setSearchAsMove={true}
    showPopoverOn="click"
    onPopoverTrigger={this.onPopoverTrigger}

    stream={true}
    streamTTL={5}
    streamAutoCenter={true}
    streamMarkerImage="path/to/streaming/marker.png"

    // 'react' defines when and how the map component should update
    react={{
      and: "CitySensor"
    }}

    // map events
    onData={this.onData}
    onIdle={this.onIdle}
    onMouseover={this.onMouseover}
    onMouseout={this.onMouseout}
    onClick={this.onClick}
    onDblclick={this.onDblclick}
    onDrag={this.onDrag}
    onDragstart={this.onDragstart}
    onDragend={this.onDragend}
    onMousemove={this.onMousemove}
    onMouseout={this.onMouseout}
    onMouseover={this.onMouseover}
    onResize={this.onResize}
    onRightclick={this.onRightclick}
    onBoundsChanged={this.onBoundsChanged}
    onCenterChanged={this.onCenterChanged}
    onProjectionChanged={this.onProjectionChanged}
    onTiltChanged={this.onTiltChanged}
    onZoomChanged={this.onZoomChanged}

    // less useful props
    autoMapRender={true}
    autoCenter={true}
    autoMarkerPosition={true}
    componentStyle={{
      height: '100%';
    }}
    containerStyle={{
      height: '700px';
    }}
/>
```

### Props

- **componentId** `String`  
    unique id of the component, can be referenced in another actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view, usually of a geopoint (i.e. location) data type and used for rendering the markers on the map.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    number of results to show in the map view, can be a number in the range [1, 1000]. Defaults to 100.
- **defaultZoom** `Number` [optional]  
    preset map's zoom level, accepts integer values between [0, 20]. 0 is the minimum zoom level, where you can see the entire globe. 20 is the maximum zoom level. Defaults to 13.
- **defaultCenter** `Object` [optional]  
    preset map's center position by specifying an object with valid `lat` and `lng` values.
- **showMapStyles** `Boolean` [optional]  
    whether to show map styles dropdown picker in the map UI. Defaults to `true`.
- **defaultMapStyle** `String` [optional]  
    preset a map style for the map UI. Available options include "Standard", "Blue Essence", "Blue Water", "Flat Map", "Light Monochrome", "Midnight Commander", "Unsaturated Browns".
- **showMarkers** `Boolean` [optional]  
    whether to show the markers on the map, defaults to `true`. Sometimes, it doesn't make sense to display markers (when building a heatmap or weather map or a directions navigation map)
- **defaultMarkerImage** `String` [optional]  
    URL of the default marker image to be shown. It comes with a default image. Should only be set if you wish to use a custom marker.
- **setMarkerCluster** `Boolean` [optional]  
    whether to aggregate and form a cluster of nearby markers. Defaults to `true`.
- **showSearchAsMove** `Boolean` [optional]  
    whether to show the *Search As I Move* checkbox in the UI. Defaults to `true`.
- **setSearchAsMove** `Boolean` [optional]  
    whether to set the *Search As I Move* checkbox. Defaults to `false`.
- **showPopoverOn** `String` [optional]  
    event that triggers popover, accepts either a "click" or a "mouseover" as valid values.
- **onPopoverTrigger** `function` [optional]  
    a function that takes one argument for getting a marker's data and returns an HTML markup to be displayed in the popover box.
- **stream** `Boolean` [optional]  
    whether to stream new result (aka realtime view) updates in the UI. Defaults to `false`.
- **streamTTL** `Number` [optional]  
    time to live for a just streamed update, specified in seconds. It defaults to 5 seconds.
- **streamAutoCenter** `Boolean` [optional]  
    whether to auto center the map based on the location of the streamed update. Defaults to `false`.
- **streamMarkerImage** `String` [optional]  
    URL of the streaming marker image to be shown. It comes with a default image that's distinct from the defaultMarkerImage. Should be only set if you wish to use a custom marker image.
- **react** `Object`
     a dependency object defining how this component should react based on the state changes in the dependent sensor components. You can read more about it [here](v1.0.0/advanced/React.html)
- **autoCenter** `Boolean` [optional]  
    whether to auto center the map based on the geometric center of all the location markers. Defaults to `true`.
- **autoMapRender** `Boolean` [optional]  
    whether map view should be rendered automatically. Defaults to `true` and is what you want most of the time. There are certain cases however where you want to re-render the map view manually.
- **autoMarkerPosition** `Boolean` [optional]  
    whether to set the rotation angle of the marker image based on the delta changes in its location, useful when displaying realtime traffic data. Defaults to `false`.
- **componentStyle** `Object` [optional]  
    CSS style object to be applied to the `ReactiveMap` component.
- **containerStyle** `Object` [optional]  
    CSS style object to be applied to the underlying `GoogleMap` component.
- **onData** `function`  
    event fired when one or more markers are indexed, updated or removed from the map. It takes an object with the following properties:

```js
{
  mode: 'historic' or 'streaming',
  newData: data which is the response of xhr call or streaming data,
  currentData: Array of all existing markers data in the view (should be [] on query change),
  appliedQuery: Raw query object,
  took: time in milliseconds (optional, only applicable when mode is historic)
}
```

the function can return the markup to be displayed on the map (e.g. setting custom pins based on type of marker data or overlaying shapes like polygons or circles on the map).

### Events

![ReactiveMap Events](https://i.imgur.com/W8deTH2.png)

ReactiveMap component exposes many events to provide a good listening mechanism for building interactivity.

- **onIdle**: is the event which is fired when map reached to its idle state after dragging or zooming effect. It has argument which contains
```js
{
  boundingBoxCoordinates: object which contains top_left, bottom_right of current map bounds,
  mapBounds: original map bounds which is returned by map
}
```
and also user can return the markup which will be append inside map (as ex. Polygon, circles, rectangles can be return using [react-component](https://github.com/tomchentw/react-google-maps) ).


### CSS Styles

![Annotated Image](https://i.imgur.com/YPRoLch.png)

### Examples

1. ReactiveMap with all the default props.

2. ReactiveMap with a search sensor on the map.

3. ReactiveMap with historical and realtime data.

4. ReactiveMap with events example.

5. ReactiveMap with weather data.

{% endraw %}
