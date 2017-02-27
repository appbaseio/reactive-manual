{"bigh3": true}

## DateRange

![Image to be displayed](https://i.imgur.com/Tl2xXNS.png)

A `DateRange` sensor component creates a calendar view based UI widget. It is used for filtering results by a date like property.

Example uses:
* picking a date range for booking a hotel room.
* finding search results from a database based on date range.

### Usage

```js
<DateRange
  componentId="DateSensor"
  appbaseField="mtime"
  title="DatePicker"
  numberOfMonths={2}
  allowAllDates={true}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced when creating a combined query context in an actuator's `react` prop.  
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI options.
- **title** `String` [optional]  
    title of the component to be shown in the UI.
- **numberOfMonths** `Number` [optional]  
    number of months to be shown in the calendar view. Defaults to 1.
- **allowAllDates** `Boolean` [optional]  
    whether to all all dates or dates starting from today. Defaults to `true`, i.e. allowing all dates.
- **startDate** `Object of Moment` [optional]  
    pre-select a start date based on a [moment](https://github.com/moment/moment/) object representing a date.
- **endDate** `Object of Moment` [optional]  
    pre-select an end date based on a [moment](https://github.com/moment/moment/) object representing a date.
- **extra** `Object` [optional]  
    supports the full gauntlet of props as defined in airbnb's [react-dates](https://github.com/airbnb/react-dates) component.

An example `extra` prop object would look like:

```js
extra={{
  "withFullScreenPortal": true,
  "showClearDate": true
}}
```

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/tEwBtgX.png)

```html
<div class="rbc rbc-daterange col s12 col-xs-12 card thumbnail rbc-title-active">
  <h4 class="rbc-title col s12 col-xs-12">DateRange</h4>
  <div class="rbc-daterange-component col s12 col-xs-12">
    <div class="DateRangePicker">
      <div class="DateRangePickerInput">
          ...
      </div>
    </div>
  </div>
</div>
```

* DateRange component's class name is `rbc-daterange`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.

### Examples

1. [Basic component example](../playground/?selectedKind=DateRange&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)

2. [Show more than one month](../playground/?selectedKind=DateRange&selectedStory=Show%20more%20than%201%20month&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)

3. [Start a default date](../playground/?selectedKind=DateRange&selectedStory=Default%20date&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)

4. [Enable days only starting today onwards](../playground/?selectedKind=DateRange&selectedStory=Enable%20days%20from%20today%20only&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)

5. [An example using `extra` prop](../playground/?selectedKind=DateRange&selectedStory=Using%20extra%20prop%20object&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)

6. [Playground mode](../playground/?knob-title=Date%20Range&knob-numberOfMonths=2&knob-allowAllDates=true&selectedKind=DateRange&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
