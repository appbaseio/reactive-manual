{"bigh3": true}

{% raw %}

## ResultCard

![Image to be displayed](https://i.imgur.com/aeQs0nn.png)

`ResultCard` creates a result card UI component to display results in a card layout, suited for data that have an associated image.

Example uses:

* showing e-commerce search results in a card layout.
* showing filtered hotel booking results in a card layout.

`Note:` An alternative layout to ResultCard is a [**ResultList**](v1.0.0/search-components/ResultList.html), which displays result data in a list format.

### Usage

#### Basic Usage

```js
<ResultCard
  react={{
    "and": ["PriceFilter", "SearchFilter"]
  }}
  onData={this.onData}
/>
```

#### Pagination Usage With All Props

```js
<ResultCard
  componentId="ResultCard01"
  title="Result Card"
  appbaseField="ratings"
  stream={true}  
  sortBy="desc"
  from={0}
  size={8}
  pagination={true}
  paginationAt="bottom"
  showResultStats={true}
  initialLoader="Loading Results.."
  noResults="No Matching Results Found!"
  react={{
    and: ["PriceFilter", "SearchFilter"]
  }}
  onData={this.onData}
/>
```

#### Infinite Scroll Usage With All Props

```js
<ResultCard
  componentId="ResultCard01"
  title="Result Card"
  appbaseField="ratings"
  stream={true}  
  sortBy="desc"
  from={0}
  size={8}
  pagination={false}
  scrollOnWindow={true}
  showResultStats={true}
  initialLoader="Loading Results.."
  noResults="No Matching Results Found!"
  react={{
    and: ["PriceFilter", "SearchFilter"]
  }}
  onData={this.onData}
/>
```

### Props

- **componentId** `String`  
    unique id of the component, can be referenced in another component's `react` prop.
- **appbaseField** `String`  
    data field to be mapped with `ResultCard`'s UI view, used for providing a sorting context.
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
    an alternative to the `sortBy` prop, `sortOptions` creates a sorting view in the ResultCard component's UI. Each array element is an object that takes three keys:
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
- **react** `Object`  
    a dependency object defining how this component should react based on the state changes in the sensor components. You can read more about how to specify this prop over [here](v1.0.0/advanced/React.html).
- **onData** `Function` [optional]  
    returns a card element object to be rendered based on the `res` data object. This callback function prop is called for each data item rendered in the **ResultCard** component's view.
    ```js
    onData={
      function(res) {
        return {
          image: res.image,
          title: res.name,
          desc: (
              <div>
                  <div className="price">${res.price}</div>
                  <p>{res.room_type} · {res.accommodates} guests</p>
              </div>
          ),
          url: res.listing_url
        }
      }
    }
    ```
    The return format for the callback function is an object with `image`, `title`, `desc` and `url` fields.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/E8u43mG.png)

### Extending

`ResultCard` component can be extended to
1. customize the look and feel with `componentStyle` prop,
2. render individual result data items using `onData`,
3. specify how results should be filtered using `react` prop.

```js
<ResultCard
  ...
  // specify any number of custom styles.
  componentStyle={{"paddingBottom": "10px"}}
  // register a callback function with the `onData` prop.
  onData={
    function(res) {
      return {
        image: res.image,
        title: res.name,
        url: res.listing_url
      }
    }
  }
  // specify how and which results are filtered using `react` prop.
  react={
    "and": ["pricingFilter", "dateFilter"],
    "or": ["searchFilter"]
  }
/>
```

- **componentStyle** `Object` [optional]  
    CSS Styles to be applied to the **ResultCard** component.
- **onData** `Function` [optional]  
    a callback function where user can define how to render the view based on the data changes. In `ResultCard`'s case, the expected return format is an object with `image`, `title`, `url` and `desc` keys.
- **react** `Object`  
    specify dependent components to reactively update **ResultCard's** data view.
    - **key** `String`  
        one of `and`, `or`, `not` defines the combining clause.
        - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
        - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
        - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
    - **value** `String or Array or Object`  
        - `String` is used for specifying a single component by its `componentId`.
        - `Array` is used for specifying multiple components by their `componentId`.
        - `Object` is used for nesting other key clauses.


### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="eWWJwp" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch ResultCard" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/eWWJwp/">ReactiveSearch ResultCard</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for ResultCard on playground.

1. [ResultCard with infinite scroll](../playground/?selectedKind=s%2FResultCard&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

2. [ResultCard with pagination](../playground/?selectedKind=s%2FResultCard&selectedStory=With+Pagination&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch).

{% endraw %}
