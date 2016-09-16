AppbaseMap component    
``` javascript
  <AppbaseMap
    fieldName="venue"
    defaultZoom={13}
    defaultCenter={{ lat: 37.74, lng: -122.45 }}
    historicalData={true}
    markerCluster={false}
    markerOnDelete={this.markerOnDelete}
    markerOnIndex={this.markerOnIndex}
    markerOnClick={this.markerOnClick}
    markerOnDblclick={this.markerOnDblclick}
    markerOnMouseover={this.markerOnMouseover}
    markerOnMouseout={this.markerOnMouseout} 
    mapStyle="Blue Water" 
    depends={{
      CitySensor: ["reposition"],
      SearchAsMoveSensor: ["SearchAsMove"],
      MapStyleSensor: ["MapStyles"]
  }} />
```    

- `fieldName` : `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map    
- `historicalData`: `Boolean`: is the boolean field which on true, shows the old results and on false, will only run searchstream(). Defaulted to `true`    
- `searchComponent`: `"appbase"` or `"google"`: is the option for displaying the searchComponent in the Google maps. If `appbase` is selected, then searchField needs to be specified. Defaulted to `google`.    
- `searchField`: `String`: is the name of the field on which Appbase location search will be enables.    
-  `markerCluster`: `Boolean`: is the property which decides on clustering the markers. Defaulted to `true`     
- `markerOnDelete`: is the event which is fired when any element is deleted from the map. It has argument which contains the object which was deleted.    
- `markerOnIndex`is the event which is fired when any element is added into the map. It has argument which contains the object which was indexed.    
- `markerOnClick`, `markerOnDblclick`, `markerOnMouseover`, `markerOnMouseout` are the events which will be fired on click, doubleclick, mouse over, mouse out actions on markers.
- `mapStyle`: is the property which set the default map style. Available options for mapStyle is: `"MapBox"`, `"Blue Essence"`, `"Blue Water"`,  `"Flat Map"`,  `"Light Monochrome"`,  `"Midnight Commander"`,  `"Unsaturated Browns"`.  
- `depends`: is the property which contains the object of sensor and method, In above example on change of "CitySensor" value then it will trigger `reposition` internal method of AppbaseMap. We exposed few methods to use on changing of dependency: `reposition`, `SearchAsMove`, `MapStyles`.  

