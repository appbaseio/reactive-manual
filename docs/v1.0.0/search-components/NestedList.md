{"bigh3": true}

# NestedList

![Image to be displayed](https://i.imgur.com/f5aO5HP.png)

`NestedList` creates a nested list UI component. It is used for filtering items by a hierarchy of categories.

Example uses:
* show a two-level or three-level category list for an e-commerce search experience.

## Usage

### Basic Usage

```js
<NestedList
  componentId="CarCategorySensor"
  dataField={["brand.raw", "model.raw"]}
/>
```

### Usage With All Props
```js
<NestedList
  componentId="CarCategorySensor"
  dataField={["brand.raw", "model.raw"]}
  title="List of Brand > Model"
  size={100}
  sortBy="asc"
  defaultSelected={["ford", "galaxy"]}
  showCount={true}
  showSearch={false}
  placeholder="Search"
  initialLoader="Fetching cars.."
  react={{
    and: ["CategoryFilter", "SearchFilter"]
  }}
  showFilter={true}
  filterLabel="Cars filter"
  URLParams={false}
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `Array`  
    data field(s) to be mapped with the component's UI view. A nested list component supports multiple fields passed as an Array denoting the order of nesting.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
- **sortBy** `String` [optional]  
    sort the list items by one of `count`, `asc`, or `desc`. Defaults to `count`, which sorts the list by the frequency of count     value, most first.
- **defaultSelected** `Array` [optional]  
    pre-select nested list item(s). Accepts an `Array` object containing the hierarchy of items to be selected. It is important that the passed value(s) exactly match the field value(s) as stored in the DB.
    Example:
- **showCount** `Boolean` [optional]  
    show a count of the number of occurrences besides each list item. Defaults to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to `true`. When applicable, the default placeholder value is set to "Search".
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

**Note:** A NestedList component's props are exactly like a SingleList component except for the `dataField` prop which takes an Array to denote the level of nesting.

## Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="ZJwgXd" data-default-tab="js" data-user="sids-aquarius" data-embed-version="2" data-pen-title="NestedList docs example" class="codepen">See the Pen <a href="https://codepen.io/sids-aquarius/pen/ZJwgXd/">NestedList docs example</a> by Siddharth Kothari (<a href="https://codepen.io/sids-aquarius">@sids-aquarius</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/vClQmZU.png)

## Extending

`NestedList` component can be extended to
1. customize the look and feel with `style`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.
4. filter data using a combined query context via the `react` prop.

```
<NestedList
  ...
  style={{"paddingBottom": "10px"}}
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
  react={{
    "and": ["PriceFilter"]
  }}
/>
```

- **style** `Object`  
    CSS styles to be applied to the **NestedList** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **NestedList** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user selects a product in a NestedList.
- **react** `Object`  
    specify dependent components to reactively update **NestedList's** data view.
    - **key** `String`  
        one of `and`, `or`, `not` defines the combining clause.
        - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
        - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
        - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
    - **value** `String or Array or Object`  
        - `String` is used for specifying a single component by its `componentId`.
        - `Array` is used for specifying multiple components by their `componentId`.
        - `Object` is used for nesting other key clauses.

## Examples

<p data-height="500" data-theme-id="light" data-slug-hash="ZJwgXd" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="NestedList docs example" class="codepen">See the Pen <a href="https://codepen.io/sids-aquarius/pen/ZJwgXd/">NestedList docs example</a> by Siddharth Kothari (<a href="https://codepen.io/sids-aquarius">@sids-aquarius</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [NestedList with all the default props](../playground/?filterBy=ReactiveSearch&selectedKind=search%2FNestedList&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [NestedList with title](../playground/?filterBy=ReactiveSearch&knob-title=Car%20Category&selectedKind=search%2FNestedList&selectedStory=With%20Title&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [NestedList with default selection](../playground/?filterBy=ReactiveSearch&knob-title=Car%20Category&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&selectedKind=search%2FNestedList&selectedStory=Default%20selection&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [Playground (with all knob actions)](../playground/?knob-title=NestedList%3A%20Car%20Filter&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FNestedList&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
