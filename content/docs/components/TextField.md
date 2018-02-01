---
id: textfield
title: "TextField"
layout: docs
sectionid: docs
permalink: components/textfield.html
next: components/datasearch.html
nextTitle: "DataSearch"
redirect_from:
    - 'docs'
    - 'components'
    - 'components/'
    - 'components/textfield'
    - 'base-components/textfield'
    - 'textfield'
---

![Image to be displayed](https://imgur.com/goOcLdF.png)

`TextField` creates a simple text input field component connected to data. It can be further extended by specifying a user defined query on the input data.

## Usage

### Basic Usage

```js
<TextField
  componentId="NameTextSensor"
  dataField="name"
/>
```

### Usage With All Props

```js
<TextField
  componentId="NameTextSensor"
  dataField="name"
  defaultSelected="volvo"
  placeholder="Type a car name"
  debounce={300}
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be connected to the component's UI view.
- **defaultSelected** `String` [optional]  
    preset some value in the text field.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the text field when it has no value.
- **debounce** `Number` [optional]
    delays executing the query by the specified time in **ms** while the user is typing. Defaults to `0`, i.e. no debounce. Useful if you want to save on the number of requests sent.

## Demo

[Try the demo](https://expo.io/@dhruvdutt/textfield-demo) instantly.

## Styles

`TextField` component supports `style` prop. Read more about it [here](/advanced/style.html).

## Extending

`TextField` component can be extended to
1. customize the look and feel with `style`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange`, `onValueChange` and `onQueryChange`,

```js
<TextField
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
    CSS styles to be applied to the **TextField** component.
- **customQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the component, as defined in Elasticsearch Query DSL.
    `Note:` customQuery is called on value changes in the **TextField** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the TextField.
- **onQueryChange** `Function`  
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.
