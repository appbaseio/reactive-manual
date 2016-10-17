AppbaseMap component    
``` javascript
  <AppbaseMap
    config={config}
    inputData="venue"
    defaultZoom={13}
    defaultCenter={{ lat: 37.74, lng: -122.45 }}
    historicalData={true}
    markerCluster={false}
    mapOnIdle = {this.mapOnIdle}
    markerOnDelete={this.markerOnDelete}
    markerOnIndex={this.markerOnIndex}
    markerOnClick={this.markerOnClick}
    markerOnDblclick={this.markerOnDblclick}
    markerOnMouseover={this.markerOnMouseover}
    markerOnMouseout={this.markerOnMouseout} 
    mapStyle="Blue Water" 
    autoCenter={true}
    searchAsMoveComponent={true}
    MapStylesComponent={true}
    title="Reactive Maps"
    searchAsMoveDefault={true}
    requestSize={5}
    streamActiveTime={5}
    depends={{
        CitySensor: {"operation": "must"},
        TopicSensor: {"operation": "must", "defaultQuery": this.topicDepends},
        RangeSensor: {"operation": "must"},
        VenueSensor: {"operation": "must"}
    }} />
```    

- **fieldName**: `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map    
- **historicalData**: `Boolean`: is the boolean field which on true, shows the old results and on false, will only run searchstream(). Defaulted to `true`    
- **searchComponent**: `"appbase"` or `"google"`: is the option for displaying the searchComponent in the Google maps. If `appbase` is selected, then searchField needs to be specified. Defaulted to `google`.    
- **searchField**: `String`: is the name of the field on which Appbase location search will be enables.    
- **markerCluster**: `Boolean`: is the property which decides on clustering the markers. Defaulted to `true`     
- **markerOnDelete**: is the event which is fired when any element is deleted from the map. It has argument which contains the object which was deleted.    
- **markerOnIndex**: is the event which is fired when any element is added into the map. It has argument which contains 
```js
{
  method: 'historic' or 'stream',
  data: data which is the response of xhr call or streaming data,
  allMarkers: Array of all markers data
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
- **mapStyle**: is the property which set the default map style. Available options for mapStyle is: `"MapBox"`, `"Blue Essence"`, `"Blue Water"`,  `"Flat Map"`,  `"Light Monochrome"`,  `"Midnight Commander"`,  `"Unsaturated Browns"`.  
- **searchAsMoveDefault**: `Boolean`: is the property which set the default value of `searchAsMove` component. By default it's value is false.  /
- **requestSize**: `Number`: is the property which set the size in request. By default it's value is 100.  
- **streamActiveTime**: `Number`: is the property which decides the time interval of streaming marker, after that time period marker icon will be converted to normal icon.
- **depends**: `Object`: It should contain the sensors on which component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)

