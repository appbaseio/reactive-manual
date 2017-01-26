{"bigh3": true}

## DatePicker

![Image to be displayed](https://i.imgur.com/HnZexE9.png)

A `DatePicker` sensor component creates a radio select list UI widget. It is used for filtering results based on the current selection from a list of items.

Example uses:
* select a category from a list of categories for filtering e-commerce search results.
* filtering restaurants by a cuisine choice.

### Usage

```js
<DatePicker
  sensorId="CitySensor"
  appbaseField="mtime"
  title="Datepicker"
/>
```

### Props

- **sensorId** `String`  
    unique id of the sensor, can be referenced when creating a combined query context in an actuator's `depends` prop.  
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI options.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `string` [optional]  
    default selected value pre-selects an option from the list.
- **showCount** `Boolean` [optional]  
    show count of number of occurences besides an item. Defaults to `true`.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
-  **sortBy** `String` [optional]  
    property that decides on how to sort the list items, accepts one of `count`, `asc` or `desc` as valid values. `count` sorts the list based on the count occurences, with highest value at the top. `asc` sorts the list in the ascending order of the list item (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to true.


### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/bSei4w3.png)

```html
<div class="rbc rbc-datepicker col s12 col-xs-12 card thumbnail rbc-title-active">
  <h4 class="rbc-title col s12 col-xs-12">DatePicker</h4>
  <div class="col s12 col-xs-12">
    <div class="SingleDatePicker">
      <div class="SingleDatePickerInput">
        <div class="DateInput DateInput--with-caret">
          <label class="DateInput__label" for="DateSensor">Select Date</label>
          <input type="text" class="DateInput__input" id="DateSensor" name="DateSensor" value="" placeholder="Select Date" autocomplete="off">
          <div class="DateInput__display-text DateInput__display-text--focused">Select Date</div>
        </div>
      </div>
      <div class="SingleDatePicker__picker SingleDatePicker__picker--show SingleDatePicker__picker--direction-left SingleDatePicker__picker--horizontal" style="left: 0px;">
        <div class="DayPicker DayPicker--horizontal" style="width: 318px;">
          ...
        </div>
      </div>
    </div>
  </div>
</div>
```

* DatePicker component's class name is `rbc-singlelist`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `search` and `searchPlaceholder` props, classnames of `rbc-search-active`, `rbc-search-inactive`, `rbc-placeholder-active`, `rbc-placeholder-active` are applied.
* the title element has a class name of `rbc-title`.
* the search element has a class name of `rbc-search-container`.
* the radio inputs are encapsulated inside a `rbc-list-container` class with each element having class name of `rbc-list-item`.
* the input radio element has a class name of `rbc-radio-item`.
* the label element has a class name of `rbc-label`.
* the element containing count inside the label has a class name of `rbc-count`.


### Examples


