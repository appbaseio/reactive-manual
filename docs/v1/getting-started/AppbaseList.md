## AppbaseList

- `fieldName` : `string`: is the name of the field which contains the latitude and longitude of the markers for which you want to plot on the map    
- `size`: `number`: is the number field which decides how many items needs to be displayed in the List. Defaulted to 60.    
- `showCount`: `"Boolean"`: is the boolean option for whether displaying the count along with the items. Defaulted to `true`.    
- `multipleSelect`: `Boolean`: is the boolean option to select whether the only single item could be selected in the List or if it is multiple selectable. Defaulted to `true`.   
-  `sort`: `count` or `asc` or `desc`: is the property which decides on how the list should be sorted. `count` sorts the list based on the count  in the desc order. `asc` sorts the list in the ascending order of the term (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.  
- `depends`: Same way as AppbaseMap we provides internal method for AppbaseList as well. We exposed a method to use on changing of dependency: `topicFilterByCity`.