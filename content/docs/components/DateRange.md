---
id: daterange
title: "DateRange"
layout: docs
sectionid: docs
permalink: components/daterange.html
prev: components/datepicker.html
prevTitle: "DatePicker"
next: components/reactivelist.html
nextTitle: "ReactiveList"
redirect_from:
    - 'components/daterange'
    - 'base-components/daterange'
    - 'range-components/daterange'
    - 'daterange'
---

![Image to be displayed](https://imgur.com/6Dtb1Lc.png)

`DateRange` creates a calendar view based UI component that is connected to date fields. It is used for filtering results by a date like property.

Example uses:
* picking a date range for booking a hotel room.
* finding search results from a database based on date range.

## Usage

### Basic Usage

```js
<DateRange
  componentId="DateSensor"
  dataField="mtime"
/>
```

### Usage With All Props

```js
<DateRange
  componentId="DateSensor"
  dataField="mtime"
  defaultSelected={{
      start: "2017-01-17",
      end: "2017-01-23"
  }}
  initialMonth="2017-01-01"
  queryFormat="date"
  placeholder="Pick date"
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be connected to the component's UI view.
- **defaultSelected** `Object` [optional]  
    pre-selects a date range. Accepts the `start` and `end` key with `String` values.
- **initialMonth** `String` [optional]  
    starts the calendar view from the specified month.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the dropdown searchbox. Defaults to "Select a date".
- **queryFormat** `String` [optional]  
    sets the date format to be used in the query, can accept one of the following:

<br />

| **queryFormat** | **Representation as [elasticsearch date](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html#built-in-date-formats)** |
|  ------: | :------: |
| `epoch_millis` **(default)** | `epoch_millis` |
| `epoch_second` | `epoch_second` |
| `basic_time` | `HHmmss.SSSZ` |
| `basic_time_no_millis` | `HHmmssZ` |
| `date` | `yyyy-MM-dd` |
| `basic_date` | `yyyyMMdd` |
| `basic_date_time` | `yyyyMMdd'T'HHmmss.SSSZ` |
| `basic_date_time_no_millis` | `yyyyMMdd'T'HHmmssZ` |
| `date_time_no_millis` | `yyyy-MM-dd'T'HH:mm:ssZZ` |

## Demo

## Styles

`DateRange` component supports `style` prop. Read more about it [here](/advanced/style.html).

## Extending

`DateRange` component can be extended to
1. customize the look and feel with `style`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange`, `onValueChange` and `onQueryChange`

```js
<DateRange
  ...
  style={{ paddingBottom: 10 }}
  customQuery={
    function(value, props) {
      return {
        match: {
          data_field: "this is a test"
        }
      }
    }
  }
  beforeValueChange={
    function(value) {
      // called before the value is set
      // returns a promise
      return new Promise((resolve, reject) => {
        // update state or component props
        resolve()
        // or reject()
      })
    }
  }
  onValueChange={
    function(value) {
      console.log("current value: ", value)
      // set the state
      // use the value with other js code
    }
  }
  onQueryChange={
    function(prevQuery, nextQuery) {
      // use the query with other js code
      console.log('prevQuery', prevQuery);
      console.log('nextQuery', nextQuery);
    }
  }
/>
```

- **style** `Object`
    CSS styles to be applied to the **DateRange** component.
- **customQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the component, as defined in Elasticsearch Query DSL.
    `Note:` customQuery is called on value changes in the **DateRange** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the DateRange.
- **onQueryChange** `Function`  
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.
