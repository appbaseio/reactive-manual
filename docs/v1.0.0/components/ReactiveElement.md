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
  react={{
    or: ["CitySensor", "SearchSensor"]
  }}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **title** `String or HTML` [optional]  
    title of the component, to be shown in the UI.
- **stream** `Boolean` [optional]  
    whether to stream new result updates in the UI. Defaults to `false`.
- **from** `Number` [optional]  
    starting point from where to fetch the results. Useful in a pagination context. Defaults to 0.
- **size** `Number` [optional]  
    number of results to show per view. Defaults to 20.
- **initialLoader** `String or HTML` [optional]  
    display to show the user while the data is loading, accepts `String` or `HTML` markup.
- **noResults** `String or HTML` [optional]  
    display to show the user when no results are found, accepts `String` or `HTML` markup.
- **showResultStats** `Boolean` [optional]  
    whether to show result stats in the form of results found and time taken. Defaults to `true`.
- **react** `Object` [optional]  
    a dependency object defining how this component should react based on the state changes in the sensor components.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/KtDriR7.png)

### Extending

`ReactiveElement` component can be extended to
1. customize the look and feel with `componentStyle`,
2. render individual result data items using `onData`,
3. render the entire result data using  `onAllData`.

`onData` prop registers a function callback which is triggered every time there is a change in the data results so that the user can render the `ReactiveElement` component's UI view.

```js
// Register a callback function with the `onData` prop.
<ReactiveElement
  ...
  componentStyle={{"paddingBottom": "10px"}}
  onData={
    function(res) {
      return(
        <div>
          { res._source }
        </div>
      )
    }
  }
/>
```

- **componentStyle** `Object`  
    CSS styles to be applied to the **ReactiveElement** component.
- **onData** `Function`  
    takes one parameter which contains the result object and returns a HTML element to be rendered in the component view.
- **onAllData** `Function`  
    an extension of the onData() function which contains the entire result data and returns an array of HTML elements to be rendered in the component view.

### Examples

1. ReactiveElement with all the default props with a single sensor filter.

2. ReactiveElement with a search and a filter sensor.

3. ReactiveElement that shows streaming updates.

4. Playground (with all knob actions).

{% endraw %}
