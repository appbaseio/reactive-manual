---
id: reactivelist
title: "ReactiveList"
layout: docs
sectionid: docs
permalink: result-components/reactivelist.html
prev: result-components/resultcard.html
prevTitle: "ResultCard"
next: advanced/theming.html
nextTitle: "Theming"
redirect_from:
    - 'basic-components/reactivelist.html'
    - 'result-components/reactivelist'
    - 'reactivelist'
---

![Image to be displayed](https://i.imgur.com/iY2csRm.png)

`ReactiveList` creates a data-driven result list UI component. This list can reactively update itself based on changes in other components or changes in the database itself.

This component forms the base for building more specific result display components like [`ResultCard`](/search-components/resultcard.html) or [`ResultList`](/search-components/resultlist.html).

Example uses:

* showing a feed of results based on the applied search criteria.
* streaming realtime feed updates based on applied criteria like in a newsfeed.

## Usage

### Basic Usage

```js
<ReactiveList
  react={{
    "and": ["CitySensor", "SearchSensor"]
  }}
  onData={(res) => <div>{res.title}</div>}
/>
```

### Usage With All Props

```js
<ReactiveList
  componentId="SearchResult"
  dataField="ratings"
  stream={true}
  pagination={false}
  paginationAt="bottom"
  pages={5}
  sortBy="desc"
  size={10}
  loader="Loading Results.."
  showResultStats={true}
  onData={(res) => <div>{res.title}</div>}
  onResultStats={(total, took) => {
    return "found " + total + " results in " + took + "ms."
  }}
  react={{
    and: ["CitySensor", "SearchSensor"]
  }}
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be connected to the component's UI view. It is useful for providing a sorting context.
- **stream** `Boolean` [optional]  
    whether to stream new result updates in the UI. Defaults to `false`. `stream: true` is appended to the streaming hit objects, which can be used to selectively react to streaming changes (eg. showing fade in animation on new streaming hits, Twitter/Facebook like streams, showing the count of new feed items available like *2 New Tweets*)
- **pagination** `Boolean` [optional]  
    pagination <> infinite scroll switcher. Defaults to `false`, i.e. an infinite scroll based view. When set to `true`, a pagination based list view with page numbers will appear.
- **paginationAt** `String` [optional]  
    Determines the position where to show the pagination, only applicable when **pagination** prop is set to `true`. Accepts one of `top`, `bottom` or `both` as valid values. Defaults to `bottom`.
- **pages** `Number` [optional]  
    number of user selectable pages to be displayed when pagination is enabled. Defaults to 5.
- **sortBy** `String` [optional]  
    sort the results by either `asc` or `desc` order. It is an alternative to `sortOptions`, both can't be used together.
- **sortOptions** `Object Array` [optional]  
    an alternative to the `sortBy` prop, `sortOptions` creates a sorting view in the ReactiveList component's UI. Each array element is an object that takes three keys:
    - `label` - label to be displayed in the UI.
    - `dataField` - data field to use for applying the sorting criteria on.
    - `sortBy` - specified as either `asc` or `desc`.
- **size** `Number` [optional]  
    number of results to show per view. Defaults to 10.
- **loader** `String or HTML` [optional]  
    display to show the user while the data is loading, accepts `String` or `HTML` markup.
- **showResultStats** `Boolean` [optional]  
    whether to show result stats in the form of results found and time taken. Defaults to `true`.
- **onResultStats** `Function` [optional]  
    show custom result stats using a function that takes two parameters for `time_taken` and `total_results` and returns a string.
- **react** `Object` [optional]  
    a dependency object defining how this component should react based on the state changes in the sensor components.
- **onData** `Function` [optional]  
    returns a list element object to be rendered based on the `res` data object. This callback function prop is called for each data item rendered in the **ReactiveList** component's view. For example,
    ```js
    onData={
      function(res) {
    		return (
    			<a
    				className="full_row single-record single_record_for_clone"
    				key={res._id}
    			>
    				<div className="text-container full_row" style={{ paddingLeft: "10px" }}>
    					<div className="text-head text-overflow full_row">
    						<span className="text-head-info text-overflow">
    							{res.name ? res.name : ""} - {res.brand ? res.brand : ""}
    						</span>
    						<span className="text-head-city">{res.brand ? res.brand : ""}</span>
    					</div>
    					<div className="text-description text-overflow full_row">
    						<ul className="highlight_tags">
    							{res.price ? `Priced at $${res.price}` : "Free Test Drive"}
    						</ul>
    					</div>
    				</div>
    			</a>
    		);
      }
    }
    ```
- **onAllData** `Function` [optional]  
    works like **onData** prop but all the data objects are passed to the callback function.

## Demo

<br />

<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/ReactiveList" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Styles

`ReactiveList` component supports `innerClass` prop with the following keys:    

- `resultsInfo`
- `sortOptions`
- `resultStats`
- `button`
- `pagination`
- `list`
- `poweredBy`

Read more about it [here](/theming/class.html).

## Extending

`ReactiveList` component can be extended to
1. customize the look and feel with `className`, `style`,
2. render individual result data items using `onData`,
3. render the entire result data using `onAllData`.

```js
<ReactiveList
  ...
  className="custom-class"
  style={{"paddingBottom": "10px"}}
  onData={
    function(res) {
      return(
        <div>
          { res.data }
        </div>
      )
    }
  }
/>
```

- **className** `String`  
    CSS class to be injected on the component container.
- **style** `Object`  
    CSS Styles to be applied to the **ReactiveList** component.
- **onData** `Function` [optional]  
    a callback function where user can define how to render the view based on the data changes.
- **onAllData** `Function` [optional]  
    an alternative callback function to `onData`, where user can define how to render the view based on all the data changes. It accepts three parameters, `results`, `streamResults` and a **callback** function which should be called when the results reach the end (on scroll).

```js
onAllData(results, streamReasults, loadMoreData) {
	// return the list to render
}
```

## Examples

<a href="https://opensource.appbase.io/playground/?selectedKind=Result%20components%2FReactiveList" target="_blank">ReactiveList with default props</a>
