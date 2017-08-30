{"bigh3": true}

## RatingsFilter

![Image to be displayed](https://i.imgur.com/KO1bJQw.png)

`RatingsFilter` creates a Ratings Filter UI component. It is used for filtering results based on a ratings score.


Example uses:
* filtering movie listings by their ratings.
* filtering items in an e-commerce search listing based on its ratings.

### Usage

#### Basic Usage

```js
<RatingsFilter
  componentId="ratingsSensor"
  appbaseField="ratings"
  data={[
    {"start": 4, "end": 5, "label": "4 & up"},
    {"start": 3, "end": 5, "label": "3 & up"},
    {"start": 1, "end": 5, "label": "All"}
  ]}
/>
```

#### Usage With All Props

```js
<RatingsFilter
  componentId="CarCategorySensor"
  appbaseField="ratings"
  title="Ratings Filter"
  data={[
    {"start": 4, "end": 5, "label": "4 & up"},
    {"start": 3, "end": 5, "label": "3 & up"},
    {"start": 1, "end": 5, "label": "All"}
  ]}
  defaultSelected={{
    "start": 4, "end": 5
  }}
  showFilter={true}
  filterLabel="Rating"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **appbaseField** `String`  
    data field to be mapped with the component's UI view.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    collection of UI `label` with associated with `start` and `end` ratings values.
- **defaultSelected** `Object` [optional]  
    pre-select a ratings value using `start` and `end` key values from one of the data elements.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected rating. This is useful for sharing URLs with the component state. Defaults to `false`.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="rzQPNz" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="RatingsFilter docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/rzQPNz/">RatingsFilter docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/eBNY5rZ.png)

### Extending

`RatingsFilter` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<RatingsFilter
  ...
  componentStyle={{"paddingBottom": "10px"}}
  customQuery={
    function(value) {
      return {
        query: {
          match: {
            data_field: "this is a test"
          }
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
/>
```

- **componentStyle** `Object`  
    CSS styles to be applied to the **RatingsFilter** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **RangeFilter** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for a product with a specific rating in a RatingsFilter.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="rzQPNz" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="RatingsFilter docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/rzQPNz/">RatingsFilter docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for RatingsFilter on playground.

1. [RatingsFilter with basic props](../playground/?knob-title=DynamicRangeSlider%3A%20Guest%20RSVPs&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&knob-stepValue=1&filterBy=ReactiveSearch&knob-showHistogram=true&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FRatingsFilter&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [RatingsFilter with defaultSelected](../playground/?knob-title=DynamicRangeSlider%3A%20Guest%20RSVPs&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected=%7B"start"%3A2%2C"end"%3A5%7D&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&knob-stepValue=1&filterBy=ReactiveSearch&knob-showHistogram=true&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FRatingsFilter&selectedStory=With%20defaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-title=RatingsFilter&knob-data=%5B%7B"start"%3A4%2C"end"%3A5%2C"label"%3A"4%20stars%20and%20up"%7D%2C%7B"start"%3A3%2C"end"%3A5%2C"label"%3A"3%20stars%20and%20up"%7D%2C%7B"start"%3A2%2C"end"%3A5%2C"label"%3A"2%20stars%20and%20up"%7D%2C%7B"start"%3A1%2C"end"%3A5%2C"label"%3A">%201%20stars"%7D%5D&knob-filterLabel=Ratings%20filter&knob-defaultSelected=%7B"start"%3A2%2C"end"%3A5%7D&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&knob-stepValue=1&filterBy=ReactiveSearch&knob-showHistogram=true&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FRatingsFilter&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
