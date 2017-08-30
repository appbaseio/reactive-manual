{"bigh3": true}

## DynamicRangeSlider

![Image to be displayed](https://i.imgur.com/PGHsWpA.png)

`DynamicRangeSlider` creates a numeric range slider UI component. It is used for granular filtering of numeric data.

Example uses:

* filtering products from a price range in an e-commerce shopping experience.
* filtering flights from a range of departure and arrival times.

### Usage

#### Basic Usage
```js
<DynamicRangeSlider
  componentId="DynamicRangeSensor"
  appbaseField="guests"
/>
```

While `DynamicRangeSlider` only requires the above props to be used, it comes with many additional props for pre-selecting range values, setting the step value of the range slider, specifying labels for the range endpoints, whether to display histogram etc.

#### Usage With All Props
```js
<DynamicRangeSlider
  componentId="DynamicRangeSensor"
  appbaseField="guests"
  title="Guests"
  defaultSelected={(min, max) => (
    {
      "start": min,
      "end": Math.min(min + 5, max)
    }
  )}
  rangeLabels={(min, max) => (
    {
      "start": min + " guest",
      "end": max + " guests"
    }
  )}
  stepValue={1}
  showHistogram={true}
  interval={2}
  initialLoader="Rendering the histogram.."
  URLParams={true}
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view.The selected range creates a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `Function` [optional]  
    a function that accepts `min` and `max` range values as parameters and returns an object representing current selection from the range with `start` and `end` keys.
- **rangeLabels** `Function` [optional]  
    a function that accepts `min` and `max` range values as parameters and returns an object representing labels with `start` and `end` keys.
- **stepValue** `Number` [optional]  
    step value specifies the slider stepper. Value should be an integer between 1 and floor(#total-range/2). Defaults to 1.
- **showHistogram** `Boolean` [optional]  
    whether to display the range histogram or not. Defaults to `true`.
- **interval** `Number` [optional]  
    set the histogram bar interval, applicable when *showHistogram* is `true`. Defaults to `(range.end - range.start) / 10`.
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="jLQXdW" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="DynamicRangeSlider docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/jLQXdW/">DynamicRangeSlider docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/jBkvYft.png)

### Extending

`DynamicRangeSlider` component can be extended to
1. customize the look and feel with `componentStyle`.
2. update the underlying DB query with `customQuery`.
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.
4. filter data using a combined query context via the `react` prop.

```
<DynamicRangeSlider
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
  onValueChange={
    function(value) {
      console.log("current value: ", value)
      // set the state
      // use the value with other js code
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
  react={{
    "and": ["ListSensor"]
  }}
/>
```

- **componentStyle** `Object`  
    CSS styles to be applied to the **DynamicRangeSlider** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **DynamicRangeSlider** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user selects a particular range in a DynamicRangeSlider.
- **react** `Object`  
    specify dependent components to reactively update **DynamicRangeSlider's** data view.
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

<p data-height="500" data-theme-id="light" data-slug-hash="jLQXdW" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="DynamicRangeSlider docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/jLQXdW/">DynamicRangeSlider docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for DynamicRangeSlider on playground.

1. [DynamicRangeSlider with default props](../playground/?knob-title=Guests&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FDynamicRangeSlider&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [DynamicRangeSlider without histogram](../playground/?knob-title=Guests&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-showHistogram=false&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FDynamicRangeSlider&selectedStory=Without%20histogram&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [With Range Labels](../playground/?knob-title=Guests&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-showHistogram=false&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FDynamicRangeSlider&selectedStory=With%20RangeLabels&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [With defaultSelected](../playground/?knob-title=DynamicRangeSlider%3A%20Guest%20RSVPs&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&knob-stepValue=1&filterBy=ReactiveSearch&knob-showHistogram=true&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FDynamicRangeSlider&selectedStory=With%20defaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [Playground (with all knob actions)](../playground/?knob-title=DynamicRangeSlider%3A%20Guest%20RSVPs&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&knob-stepValue=1&filterBy=ReactiveSearch&knob-showHistogram=true&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FDynamicRangeSlider&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
