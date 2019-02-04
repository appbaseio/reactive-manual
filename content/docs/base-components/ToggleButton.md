---
id: togglebutton
title: "ToggleButton"
layout: docs
sectionid: docs
permalink: base-components/togglebutton.html
prev: base-components/selectedfilters.html
prevTitle: "SelectedFilters"
next: list-components/singlelist.html
nextTitle: "List Components: SingleList"
redirect_from:
    - 'basic-components/togglebutton.html'
    - 'base-components/togglebutton'
    - 'togglebutton'
---

![Image to be displayed](https://i.imgur.com/33dxDWT.png)

`ToggleButton` creates a toggle button UI component that is connected to a database field. It is used for filtering results based on a fixed set of toggle-able options.

Example uses:
* filter movies by ratings between 1 and 5,
* display restaurants that accept delivery and are open now,
* show flight tickets by one way, round trip and multi-city options.

## Usage

### Basic Usage

```js
<template>
    <toggle-button
        componentId="MeetupTops"
        dataField="group_topics.topic_name.raw"
        :data="[
            {"label": "Social",   "value": "Social"},
            {"label": "Travel",   "value": "Travel"},
            {"label": "Outdoors", "value": "Outdoors"}
        ]"
    />
</template>
```

### Usage With All Props

```js
<toggle-button
  componentId="MeetupTops"
  dataField="group_topics.topic_name.raw"
  title="Meetups"
  filterLabel="City"
  :data="[
    {"label": "Social",   "value": "Social"},
    {"label": "Travel",   "value": "Travel"},
    {"label": "Outdoors", "value": "Outdoors"}]
  ]"
  :defaultValue="['Social']"
  :multiSelect="true"
  :showFilter="true"
  :URLParams="false"
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be connected to the component's UI view.
- **data** `Object Array`  
    collection of UI `labels` with associated `value` to be matched against the database field.
- **title** `String` or `JSX` [optional]  
    title of the component to be shown in the UI.
- **defaultValue** `String` or `Array` [optional]  
    an array of default selected label(s) to pre-select one or more buttons.
- **value** `String Array` [optional]  
    controls the current value of the component. It selects the label (on mount and on update). Use this prop in conjunction with `onChange` function.
- **multiSelect** `Boolean` [optional]  
    whether multiple buttons can be selected, defaults to **true**. When set to **false**, only one button can be selected.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

## Styles

`ToggleButton` component supports `innerClass` prop with the following keys:    

- `title`
- `button`
 
Read more about it [here](/theming/class.html).

## Extending

`ToggleButton` component can be extended to
1. customize the look and feel with `className`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange`, `valueChange` and `queryChange`.

```js
<toggle-button
  ...
  className="custom-class"
  :customQuery=`
    function(value, props) {
      return {
        query: {
          match: {
            data_field: "this is a test"
          }
        }
      }
    }
  `
  :beforeValueChange=`
    function(value) {
      // called before the value is set
      // returns a promise
      return new Promise((resolve, reject) => {
        // update state or component props
        resolve()
        // or reject()
      })
    }
  `
  @ValueChange=`
    function(value) {
      console.log("current value: ", value)
      // set the state
      // use the value with other js code
    }
  `
  @queryChange=`
    function(prevQuery, nextQuery) {
      // use the query with other js code
      console.log('prevQuery', prevQuery);
      console.log('nextQuery', nextQuery);
    }
  `
/>
```
- **customQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the component, as defined in Elasticsearch Query DSL.
    `Note:` customQuery is called on value changes in the **ToggleButton** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.

## Events

- **queryChange**  
    is an event which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This event is handy in cases where you want to generate a side-effect whenever the component's query would change.
    
- **valueChange**  
    is an event which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This event is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a "Discounted Price" SingleList.

- **error**
    gets triggered in case of an error and provides the `error` object, which can be used for debugging or giving feedback to the user if needed.

- **change** 
    gets triggered when you are using the `value` props and the component's value changes.
    
## Examples

<a href="https://reactivesearch-vue-playground.netlify.com/?selectedKind=Base%20components%2FToggleButton&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs" target="_blank">Basic ToggleButton</a>