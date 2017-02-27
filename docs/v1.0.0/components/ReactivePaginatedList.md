{"bigh3": true}

{% raw %}

## ReactivePaginatedList

![Image to be displayed](https://i.imgur.com/s2VIShU.png)

A `ReactivePaginatedList` is an actuator component that creates a result list UI widget where results from all the applied filters are shown. It is just like a `ReactiveList` except with a UI for displaying pagination.

Example uses include:

* showing a result view in a e-commerce browsing experience.
* displaying a forum thread filtered by a specific topic.

### Usage

```js
<ReactivePaginatedList
  componentId="SearchResult"
  appbaseField={this.props.mapping.searchKey}
  title="Result List"
  paginationAt="both"
  sortBy="desc"
  from={0}
  size={10}
  componentStyle={{height:'500px', overflow:'auto'}}
  initialLoader="Loading Results.."
  noResults="No Results Found!"
  showResultStats={true}
  onData={this.onData}
  react={{
    "and": ["CitySensor", "SearchSensor"]
  }}
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view, used for providing a sorting context.
- **title** `String` [optional]  
    title of the component, to be shown in the UI.
- **paginationAt** `String` [optional]  
    Determines the position where to show the pagination. Accepts one of `top`, `bottom` or `both` as valid values. Defaults to `bottom`.
-  **sortBy** `String` [optional]  
    sort the results by either `asc` or `desc` order. It is an alternative to `sortOptions`, both can't be used together.
- **sortOptions** `Object Array` [optional]  
    an alternative to the `sortBy` prop, `sortOptions` creates a sorting view in the ReactiveList component's UI. Each array element is an object that takes three keys:
    - `label` - label to be displayed in the UI.
    - `field` - data field to use for applying the sorting criteria on.
    - `order` - specified as either `asc` or `desc`.
- **from** `Number` [optional]  
    starting point from where to fetch the results. Useful in a pagination context. Defaults to 0.
- **size** `Number` [optional]  
    number of results to show per view. Defaults to 20.
- **requestOnScroll** `Boolean` [optional]  
    should a paginate data request be made when scroll reaches the end of the component view? Defaults to `true`, allowing an infinite scroll functionality.
- **componentStyle** `Object` [optional]  
    CSS Styles to be applied to the component, passed as an object.
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

### Extending ReactivePaginatedList

`onData` prop registers a function callback which is triggered every time there is a change in the data results so that the user can render the `ReactivePaginatedList` view.

```js
// Register a callback function with the `onData` prop.
<ReactivePaginatedList ... onData={this.onData} ... />

// Callback function returns an Arry of HTML elements to be rendered as ReactivePaginatedList items.
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

The callback function returns an Array of HTML elements (think list items) which are then rendered to the view as ReactivePaginatedList items.

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
    - **took** `Number` [optional]  
        time taken in milliseconds, only passed when the mode is "historic".
    - **total** `Number` [optional]  
        total number of hits, passed when the mode is "historic".
- **err** `Object`  
    error object.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated Image](https://i.imgur.com/TPP2Zuh.png)

```html
<div class="row">
  <div class="col s12 col-xs-12" style="padding: 0px;">
    <div class="rbc rbc-pagination col s12 col-xs-12 card thumbnail rbc-title-inactive rbc-pagination-top">
      <div class="col s12 col-xs-12">
        <ul class="pagination">
          <li class="waves-effect"><a class="rbc-page-previous"><i class="fa fa-chevron-left"></i></a></li>
          <li class="rbc-page-number waves-effect"><a>1</a></li>
          <li class="rbc-page-number active rbc-pagination-active"><a>2</a></li>
          <li class="rbc-page-number waves-effect"><a>3</a></li>
          <li class="rbc-page-number waves-effect"><a>4</a></li>
          <li class="rbc-page-number waves-effect"><a>5</a></li>
          <li class="rbc-page-number waves-effect"><a>6</a></li>
          <li class="waves-effect"><a class="rbc-page-next"><i class="fa fa-chevron-right"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col s12 col-xs-12" style="padding: 0px;">
    <div class="rbc rbc-resultlist card thumbnail rbc-title-active rbc-sort-inactive" style="max-height: 333px;">
      <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
      ...
    </div>
  </div>
</div>
```

### Examples

1. ReactivePaginatedList with all the default props.

2. Playground (with all knob actions).

{% endraw %}
