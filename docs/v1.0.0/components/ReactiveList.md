{"bigh3": true}

{% raw %}

## ReactiveList

![Image to be displayed](https://i.imgur.com/GcUFZjh.png)

`ReactiveList` creates a result list UI component where results from all the applied filters are shown. It forms the base for building more specific actuators like [`ResultCard`](v1.0.0/search-components/ResultCard.html) or [`ResultList`](v1.0.0/search-components/ResultList.html) and provides a lot of rich functionalities out of the box.

Example uses:

* showing a feed of results based on the applied search criterias.
* streaming realtime feed updates based on applied criterias like in a newsfeed.

### Usage

#### Basic Usage

```js
<ReactiveList
  react={{
    "and": ["CitySensor", "SearchSensor"]
  }}
/>
```

#### Usage With All Props

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
- **onResultStats** `Function` [optional]  
    show custom result stats using a function that takes two parameters for `time_taken` and `total_results` and returns a string.
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

<p data-height="500" data-theme-id="light" data-slug-hash="EmmKVZ" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch ReactiveList" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/EmmKVZ/">ReactiveSearch ReactiveList</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

{% endraw %}
