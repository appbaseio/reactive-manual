{"bigh3": true}

{% raw %}

## ReactiveElement

![Image to be displayed](https://i.imgur.com/hwjCLss.png)

A `ReactiveElement` is a generic actuator component for creating a result component. It allows the user to define a custom UI for displaying the results.

Example uses:

* showing current trending topics based on the incoming data.
* showing a chart of financial stocks data.

### Usage

```js
<ReactiveElement
  componentId="ReactiveElementID"
  title="Reactive Element"
  from={0}
  size={10}
  initialLoader="Loading Results.."
  noResults="No Results Found!"
  showResultStats={true}
  componentStyle={{height:'700px', overflow:'auto'}}
  react={{
    or: ["CitySensor", "SearchSensor"]
  }}
  onData={this.onData}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **title** `String` [optional]  
    title of the component, to be shown in the UI.
- **stream** `Boolean` [optional]  
    whether to stream new result updates in the UI. Defaults to `false`.
- **from** `Number` [optional]  
    starting point from where to fetch the results. Useful in a pagination context. Defaults to 0.
- **size** `Number` [optional]  
    number of results to show per view. Defaults to 20.
- **componentStyle** `Object` [optional]  
    CSS Styles to be applied to the **ReactiveList** component.
- **initialLoader** `String or HTML` [optional]  
    display to show the user while the data is loading, accepts `String` or `HTML` markup.
- **noResults** `String or HTML` [optional]  
    display to show the user when no results are found, accepts `String` or `HTML` markup.
- **showResultStats** `Boolean` [optional]  
    whether to show result stats in the form of results found and time taken. Defaults to `true`.
- **react** `Object` [optional]  
    a dependency object defining how this component should react based on the state changes in the sensor components.
- **onData** `Function` [optional]  
    a callback function where user can define how to render the view based on the data changes.

### Extending ReactiveList

`onData` prop registers a function callback which is triggered every time there is a change in the data results so that the user can render the `ReactiveList` component's UI view.

```js
// Register a callback function with the `onData` prop.
<ReactiveList ... onData={this.onData} ... />

// Callback function returns an Arry of HTML elements to be rendered as ReactiveList items.
this.onData(res, [err]) {
  console.log(res.mode, res.newData, res.currentData, res.appliedQuery);
  if (res.mode === "historic") {
    console.log("time taken for response is: "+took+"ms");
    return res.currentData + res.newData; // infinite scroll functionality
  } else {
    console.log("New streaming update: ", res.newData);
    res.currentData.unshift(res.newData);
    // add markup per element.
    return res.currentData;               // show streaming update functionality
  }
}
```

The callback function returns an Array of HTML elements (think list items) which are then rendered to the view as ReactiveList items.

#### Usage

- **res** `Object`  
    response object containing:  
    - **mode** `String`  
        "historic" when results are returned from the existing dataset and "streaming" when new results are matched.
    - **newData** `Object`  
        an object array when returning historic data results or a single object for streaming mode updates.
    - **currentData** `Object Array`  
        an array of the result objects being shown in the current component view.
    - **appliedQuery** `Object`  
        raw query object that triggered the function callback, useful for debugging.
    - **took** `Number` [Optional]  
        time taken in milliseconds, only passed when the mode is "historic".
    - **total** `Number` [Optional]  
        total number of results, passed when the mode is "historic".
- **err** `Object`  
    error object.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/KtDriR7.png)

### Examples

1. ReactiveList with all the default props with a single sensor filter.

2. ReactiveList with a search and a filter sensor.

3. ReactiveList that shows streaming updates.

4. Playground (with all knob actions).

{% endraw %}
