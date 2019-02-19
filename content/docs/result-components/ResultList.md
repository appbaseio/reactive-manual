---
id: resultlist
title: "ResultList"
layout: docs
sectionid: docs
permalink: result-components/resultlist.html
prev: search-components/categorysearch.html
prevTitle: "Search Components: CategorySearch"
next: result-components/resultcard.html
nextTitle: "ResultCard"
redirect_from:
    - 'search-components/resultlist.html'
    - 'result-components/resultlist'
    - 'resultlist'
---

![Image to be displayed](https://i.imgur.com/iY2csRm.png)

`ResultList` creates a result list UI component to display results in a list layout, suited for data that needs a compact display.

Example uses:

* showing e-commerce search listings.
* showing filtered hotel booking results.

> Note
>
> An alternative layout to ResultList is a [**ResultCard**](/search-components/resultcard.html), which displays result data in a card layout.

## Usage

### Basic Usage

```js
<ResultList
  react={{
    "and": ["PriceFilter", "SearchFilter"]
  }}
  componentId="SearchResult"
  renderData={this.renderData}
/>
```

### Pagination Usage With All Props

```js
<ResultList
  componentId="ResultList01"
  dataField="ratings"
  stream={true}  
  sortBy="desc"
  size={8}
  pagination={true}
  paginationAt="bottom"
  pages={5}
  showResultStats={true}
  loader="Loading Results.."
  react={{
    and: ["PriceFilter", "SearchFilter"]
  }}
  renderData={this.renderData}
/>
```

### Infinite Scroll Usage With All Props

```js
<ResultList
  componentId="ResultList01"
  dataField="ratings"
  stream={true}  
  sortBy="desc"
  size={8}
  pagination={false}
  showResultStats={true}
  loader="Loading Results.."
  react={{
    and: ["PriceFilter", "SearchFilter"]
  }}
  renderData={this.renderData}
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be mapped with `ResultList`'s UI view, used for providing a sorting context.
- **excludeFields** `String Array` [optional]  
    fields to be excluded in search results.
- **includeFields** `String Array` [optional]  
    fields to be included in search results.
- **stream** `Boolean` [optional]  
    whether to stream new result updates in the UI. Defaults to `false`.
- **scrollTarget** `String` [optional]  
    accepts `id` of the container you wish to apply infinite loading on. **Note:** The container should be scrollable.
- **pagination** `Boolean` [optional]  
    pagination <> infinite scroll switcher. Defaults to `false`, i.e. an infinite scroll based view. When set to `true`, a pagination based list view with page numbers will appear.
- **paginationAt** `String` [optional]  
    Determines the position where to show the pagination, only applicable when **pagination** prop is set to `true`. Accepts one of `top`, `bottom` or `both` as valid values. Defaults to `bottom`.
- **pages** `Number` [optional]  
    number of pages to show at at time, defaults to 5.
- **onPageChange** `Function` [optional]  
    executes when the current page is changed. If not defined, `window` will be scrolled to the top of the page.
- **onPageClick** `Function` [optional]  
    accepts a function which is invoked with the updated page value when a pagination button is clicked. For example if 'Next' is clicked with the current page number as '1', you would receive the value '2' as the function parameter.

> Note:
>
> The fundamental difference between `onPageChange` and `onPageClick` is that `onPageClick` is only called on a manual interaction with the pagination buttons, whereas, `onPageChange` would also be invoked if some other side effects caused the results to update which includes updating filters, queries or changing pages. The behaviour of these two may change in the future versions as we come up with a better API.

- **sortBy** `String` [optional]  
    sort the results by either `asc` or `desc` order. It is an alternative to `sortOptions`, both can't be used together.
- **sortOptions** `Object Array` [optional]  
    an alternative to the `sortBy` prop, `sortOptions` creates a sorting view in the ResultList component's UI. Each array element is an object that takes three keys:
    - `label` - label to be displayed in the UI.
    - `dataField` - data field to use for applying the sorting criteria on.
    - `sortBy` - specified as either `asc` or `desc`.
- **size** `Number` [optional]  
    number of results to show per view. Defaults to 20.
- **loader** `String or JSX` [optional]  
    display to show the user while the data is loading, accepts `String` or `JSX` markup.
- **showResultStats** `Boolean` [optional]  
    whether to show result stats in the form of results found and time taken. Defaults to `true`.
- **renderResultStats** `Function` [optional]  
    renders custom result stats using a callback function that takes `stats` object as parameter and expects it to return a string or JSX. `stats` object contains following properties
    - `totalResults` - Total number of results found
    - `totalPages` - Total number of pages found based on current page size
    - `currentPage` - Current page number for which data is being rendered
    - `displayedResults` - Number of results displayed in current view
    - `time` - Time taken to find total results
    ```js
    renderResultStats={
            function(stats){
                return (
                    `Showing ${stats.displayedResults} of total ${stats.totalResults} in ${stats.time} ms`
                )   
            }
        }
    ```
- **renderResultStats** `Function` [optional]  
    renders custom result stats using a function that takes two parameters for `total_results` and `time_taken` and expects it to return a string or JSX.
- **react** `Object`  
    a dependency object defining how this component should react based on the state changes in the sensor components. You can read more about how to specify this prop over [here](/advanced/react.html).
- **URLParams** `Boolean` [optional]  
    when set adds the current page number to the url. Only works when `pagination` is enabled.
- **renderData** `Function` [optional]  
    returns a card element object to be rendered based on the `res` data object. This callback function prop is called for each data item rendered in the **ResultList** component's view.
    ```js
    renderData={
      function(res) {
        return {
          image: res.image,
          title: res.name,
          description: (
              <div>
                  <div className="price">${res.price}</div>
                  <p>{res.room_type} · {res.accommodates} guests</p>
              </div>
          ),
          url: res.listing_url,
          containerProps: {
            onMouseEnter: () => console.log('😁'),
            onMouseLeave: () => console.log('🙀')
          }
        }
      }
    }
    ```
    The return format for the callback function is an object with `image`, `image_size`, `title`, `description` and `url` fields.
- **defaultQuery** `Function` [optional]  
    applies a default query to the result component. This query will be run when no other components are being watched (via React prop), as well as in conjunction with the query generated from the React prop. The function should return a query.
- **onNoResults** `String or JSX` [optional]  
    show custom message or component when no results founds.
- **onError** `Function` [optional]  
    gets triggered in case of an error and provides the `error` object, which can be used for debugging or giving feedback to the user if needed.
- **renderError** `String or JSX or Function` [optional]
    can be used to render an error message in case of any error.
    ```js
    renderError={(error) => (
            <div>
                Something went wrong!<br/>Error details<br/>{error}
            </div>
        )
    }
    ```
- **onData** `Function` [optional]
    gets triggered after data changes, which returns an object with these properties: `results`, `streamResults`, `loadMore`, `base` & `triggerClickAnalytics`.
- **onResultStats** `Function` [optional]
    gets triggered after stats changes, which returns an object with these properties:
    - `totalResults` - Total number of results found
    - `totalPages` - Total number of pages found based on current page size
    - `currentPage` - Current page number for which data is being rendered
    - `displayedResults` - Number of results displayed in current view
    - `time` - Time taken to find total results
## Demo

<br />

<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/ResultList" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Styles

`ResultList` component supports `innerClass` prop with the following keys:    

- `resultsInfo`
- `sortOptions`
- `resultStats`
- `noResults`
- `button`
- `pagination`
- `list`
- `listItem`
- `image`
- `title`
- `poweredBy`
 
Read more about it [here](/theming/class.html).

## Extending

`ResultList` component can be extended to
1. customize the look and feel with `className`, `style`,
2. render individual result data items using `renderData`,
3. specify how results should be filtered using `react`.
4. connect with external interfaces using `onQueryChange`.

```js
<ResultList
  ...
  className="custom-class"
  // specify any number of custom styles.
  style={{"paddingBottom": "10px"}}
  // register a callback function with the `renderData` prop.
  renderData={
    function(res) {
      return {
        image: res.image,
        title: res.name,
        url: res.listing_url
      }
    }
  }
  onQueryChange={
    function(prevQuery, nextQuery) {
      // use the query with other js code
      console.log('prevQuery', prevQuery);
      console.log('nextQuery', nextQuery);
    }
  }
  // specify how and which results are filtered using `react` prop.
  react={
    "and": ["pricingFilter", "dateFilter"],
    "or": ["searchFilter"]
  }
/>
```

- **className** `String`  
    CSS class to be injected on the component container.
- **style** `Object`  
    CSS Styles to be applied to the **ResultList** component.
- **renderData** `Function` [optional]  
    a callback function where user can define how to render the view based on the data changes. In `ResultList`'s case, the expected return format is an object with `image`, `image_size`, `title`, `url` and `description` keys.
- **target** `string` [optional]    
    This prop is equivalent to the `target` attribute of html `a` tags. It is only valid when `url` key is present in `renderData()`'s returned object structure. It defaults to `_blank`.
- **react** `Object`  
    specify dependent components to reactively update **ResultList's** data view.
    - **key** `String`  
        one of `and`, `or`, `not` defines the combining clause.
        - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
        - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
        - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
    - **value** `String or Array or Object`  
        - `String` is used for specifying a single component by its `componentId`.
        - `Array` is used for specifying multiple components by their `componentId`.
        - `Object` is used for nesting other key clauses.

```js
renderAllData({
     results,
     streamResults,
     loadMore,
     base,
     triggerClickAnalytics,

}) {
	// return the list to render
}
```

> Note
>
> The **callback** function (`loadMore` here) will only be executed in case of infinite loading.

- **onQueryChange** `Function`  
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.


## Examples

See more stories for ResultList on playground.

<a href="https://opensource.appbase.io/playground/?selectedKind=Result%20components%2FResultList" target="_blank">ResultList with default props</a>
