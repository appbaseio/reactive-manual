{"bigh3": true}

## NestedList

![Image to be displayed](https://i.imgur.com/f5aO5HP.png)

`NestedList` creates a nested list UI component. It is used for filtering items by a hierarchy of categories.
It is used for filtering results based on the current selection from a list of items.

Example uses:
* show a two-level category list for an e-commerce search experience.

### Usage

#### Basic Usage

```js
<NestedList
  componentId="CarCategorySensor"
  appbaseField={["brand.raw", "model.raw"]}
/>
```

#### Usage With All Props
```js
<NestedList
  componentId="CarCategorySensor"
  appbaseField={["brand.raw", "model.raw"]}
  title="List of Brand > Model"
  size={100}
  sortBy="asc"
  defaultSelected=["ford", "galaxy"]
  showCount={true}
  showSearch={false}
  searchPlaceholder="Search"
  initialLoader="Fetching cars.."
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **appbaseField** `Array`  
    data field(s) to be mapped with the component's UI view. A nested list component supports multiple fields passed as an Array denoting the order of nesting.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
- **sortBy** `String` [optional]  
    sort the list items by one of `count`, `asc`, or `desc`. Defaults to `count`, which sorts the list by the frequency of count     value, most first.
- **defaultSelected** `Array` [optional]  
    pre-select a nested list item. Accepts an `Array` object containing the hierarchy of items to be selected. It is important that the passed value(s) exactly match the field value(s) as stored in the DB.
- **showCount** `Boolean` [optional]  
    show a count of the number of occurences besides each list item. Defaults to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to `true`. When applicable, the default placeholder value is set to "Search".
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.

**Note:** A NestedList component's props are exactly like a SingleList component except for the `appbaseField` prop which takes an Array to denote the level of nesting.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="EmmKVZ" data-default-tab="js" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch NestedList" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/EmmKVZ/">ReactiveSearch NestedList</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/vClQmZU.png)

### Extending

`NestedList` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`,
4. filter data using a combined query context via the `react` prop.

```
<NestedList
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
  react={{
    "and": ["PriceFilter"]
  }}
/>
```

- **componentStyle** `Object`  
    CSS styles to be applied to the **NestedList** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **NestedList** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`  
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **NestedList's** value changes.
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

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="EmmKVZ" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch NestedList" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/EmmKVZ/">ReactiveSearch NestedList</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [NestedList with all the default props](../playground/?selectedKind=s%2FNestedList&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch),

2. [NestedList with title](../playground/?knob-title=Car+Category&selectedKind=s%2FNestedList&selectedStory=With+Title&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch),

3. [NestedList with default selection](../playground/?knob-title=Car+Category&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x+series&selectedKind=s%2FNestedList&selectedStory=Default+selection&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch),

4. [Playground (with all knob actions)](../playground/?knob-title=NestedList%3A+Car+Filter&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x+series&knob-size=100&knob-sortBy=count&knob-showCount=true&knob-showSearch=true&knob-placeholder=Search+Cars&selectedKind=s%2FNestedList&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch).
