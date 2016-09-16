## AppbaseSearch

- `fieldName` : `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map    
- `placeholder`: `string`: is the string field which decides placeholder for the search input. Default to `Search...`    
- `isGeoSearch`: `"Boolean"`: is the boolean option for whether displaying the search field as input term search or is it geoSearch. Defaulted to `false`     
- `size`: `number`: is the number field which decides how many items needs to be displayed in the search items. Defaulted to 10.  
- `depends`: Same way as AppbaseMap we provides internal method for AppbaseSearch as well. We exposed a method to use on changing of dependency: `searchFilterByCity`.    