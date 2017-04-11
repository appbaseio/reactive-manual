{"bigh3": true}

{% raw %}

## ReactiveList

![Image to be displayed](https://i.imgur.com/GcUFZjh.png)

A `ReactiveList` is an actuator component that creates a result list UI widget where results from all the applied filters are shown. It forms the base for building more specific actuators like `ReactivePaginatedList` and provides a lot of rich functionalities out of the box.

Example uses:

* showing a feed of results based on the applied search criterias.
* streaming realtime feed updates based on applied criterias like in a newsfeed.

### Usage

```js
<ReactiveList
  componentId="SearchResult"
  appbaseField="ratings"
  stream={true}
  pagination={false}
  title="ReactiveList"
  sortBy="desc"
  from={0}
  size={10}
  initialLoader="Loading Results.."
  noResults="No Results Found!"
  showResultStats={true}
  react={{
    and: ["CitySensor", "SearchSensor"]
  }}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the `ReactiveList`'s UI view, used for providing a sorting context.
- **title** `String or HTML` [optional]  
    title of the component, to be shown in the UI.
- **stream** `Boolean` [optional]  
    whether to stream new result updates in the UI. Defaults to `false`.
- **pagination** `Boolean` [optional]  
    pagination <> infinite scroll switcher. Defaults to `false`, i.e. an infinite scroll based view. When set to `true`, a pagination based list view with page numbers will appear.
- **paginationAt** `String` [optional]  
    Determines the position where to show the pagination, only applicable when **pagination** prop is set to `true`. Accepts one of `top`, `bottom` or `both` as valid values. Defaults to `bottom`.
-  **sortBy** `String` [optional]  
    sort the results by either `asc` or `desc` order. It is an alternative to `sortOptions`, both can't be used together.
- **sortOptions** `Object Array` [optional]  
    an alternative to the `sortBy` prop, `sortOptions` creates a sorting view in the ReactiveList component's UI. Each array element is an object that takes three keys:
    - `label` - label to be displayed in the UI.
    - `appbaseField` - data field to use for applying the sorting criteria on.
    - `sortBy` - specified as either `asc` or `desc`.
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


![Annotated Image](https://i.imgur.com/TPP2Zuh.png)

### Extending

`ReactiveList` component can be extended to
1. customize the look and feel with `componentStyle`,
2. render individual result data items using `onData`,
3. render the entire result data using  `onAllData`.

```js
// Register a callback function with the `onData` prop.
<ReactiveList
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

- **componentStyle** `Object` [optional]  
    CSS Styles to be applied to the **ReactiveList** component.
- **onData** `Function` [optional]  
    a callback function where user can define how to render the view based on the data changes.
- **onAllData** `Function` [optional]  
    an alternative callback function to `onData`, where user can define how to render the view based on all the data changes.

### Examples

1. ReactiveList with all the default props with a single sensor filter.

2. ReactiveList with a search and a filter sensor.

3. ReactiveList that shows streaming updates.

4. Playground (with all knob actions).

{% endraw %}
