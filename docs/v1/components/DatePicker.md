{"bigh3": true}

## DatePicker

![Image to be displayed](https://i.imgur.com/HnZexE9.png)

A `DatePicker` sensor component creates a calender view based UI widget. It is used for filtering results by a date like property.

Example uses:
* finding flights departing on a particular day.
* picking your date of birth for an online application form.

### Usage

```js
<DatePicker
  sensorId="CitySensor"
  appbaseField="mtime"
  title="DatePicker"
/>
```

### Props

- **sensorId** `String`  
    unique id of the sensor, can be referenced when creating a combined query context in an actuator's `depends` prop.  
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI options.
- **title** `String` [optional]  
    title of the component to be shown in the UI.

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

* DatePicker component's class name is `rbc-singlelist`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. 
* the title element has a class name of `rbc-title`.

### Examples


