{"bigh3": true}

{% raw %}
### AppbaseMap component   

```js
<ReactiveMap
    inputData="venue"
    defaultZoom={13}
    defaultCenter={{ lat: 37.74, lng: -122.45 }}
    historicalData={true}
    markerCluster={false}
    OnData={this.onData}
    markerOnClick={this.markerOnClick}
    markerOnDblclick={this.markerOnDblclick}
    markerOnMouseover={this.markerOnMouseover}
    markerOnMouseout={this.markerOnMouseout} 
    mapStyle="Blue Water"
    autoCenter={true}
    searchAsMoveComponent={true}
    MapStylesComponent={true}
    title="Reactive Maps"
    depends={{
      CitySensor: {"operation": "must"},
      TopicSensor: {"operation": "must", "defaultQuery": this.topicDepends},
      RangeSensor: {"operation": "must"},
      VenueSensor: {"operation": "must"}
    }} />
```    

- `appbaseField`: `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map    
- `historicalData`: `Boolean`: is the boolean field which on true, shows the old results and on false, will only run searchstream(). Defaulted to `true`    
- `markerCluster`: `Boolean`: is the property which decides on clustering the markers. Defaulted to `true`        
- `mapStyle`: is the property which set the default map style. Available options for mapStyle is: `"MapBox"`, `"Blue Essence"`, `"Blue Water"`,  `"Flat Map"`,  `"Light Monochrome"`,  `"Midnight Commander"`,  `"Unsaturated Browns"`.  
- `autoCenter`: `Boolean`: is the property which decides whether to change center of map according to result or not.
- `searchAsMoveComponent`: `Boolean`: is the property which decides whether to include search as move (internal component) component or not. Defaults to false.
- `mapStylesComponent`: `Boolean`: is the property which decides whether to include map style chooser component or not.  
- `title`: `string`: is the property which sets the title.
- `depends`: `object`: is the property where user can specify the dependency on sensors.
- **onData**: is the event which is fired when one or more markers are indexed, updated or removed from the map. It takes an object with the following properties:
```js
{
  mode: 'historic' or 'streaming',
  newData: data which is the response of xhr call or streaming data,
  currentData: Array of all existing markers data in the view (should be [] on query change),
  appliedQuery: Raw query object,
  took: time in milliseconds (optional, only applicable when mode is historic)
}
```
and also user can return the markup which will be append inside map (as ex. Polygon, circles, rectangles can be return using [react-component](https://github.com/tomchentw/react-google-maps) ).
    
- **mapOnIdle**: is the event which is fired when map reached to its idle state after dragging or zooming effect. It has argument which contains 
```js
{
  boundingBoxCoordinates: object which contains top_left, bottom_right of current map bounds,
  mapBounds: original map bounds which is returned by map
}
```
and also user can return the markup which will be append inside map (as ex. Polygon, circles, rectangles can be return using [react-component](https://github.com/tomchentw/react-google-maps) ).

- **Events**:  `markerOnClick`, `markerOnDblclick`, `markerOnMouseover`, `markerOnMouseout` are the events which will be fired on click, doubleclick, mouse over, mouse out actions on markers.   
- **searchAsMoveDefault**: `Boolean`: is the property which set the default value of `searchAsMove` component. By default it's value is false.  /
- **streamActiveTime**: `Number`: (default: 5) is the property which decides the time interval of streaming marker, after that time period marker icon will be converted to normal icon.


### CSS Styles

### Examples

1. ReactiveMap with all the default props.

2. ReactiveMap with a search sensor on the map.

3. ReactiveMap with historical and realtime data.

4. ReactiveMap with events example.

5. ReactiveMap with weather data.

{% endraw %}
