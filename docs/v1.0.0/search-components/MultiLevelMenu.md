{"bigh3": true}

## MultiLevelMenu

![Image to be displayed](https://i.imgur.com/pyJzImP.png)

A `MultiLevelMenu` component creates a multi-level menu UI sensor. It is useful for displaying prominent items by categories.

Example uses:
* Show prominent items on an e-commerce app's front page.

### Usage

#### Basic Usage

```js
<MultiLevelMenu
  componentId="CategorySensor"
  appbaseField={["brand.raw", "vehicleType.raw", "model.raw"]}
  data={[
    {label: "Volkswagen", value: "volkswagen"},
    {label: "BMW", value: "bmw"},
    {label: "Audi", value: "audi"},
    {label: "Nissan", value: "nissan"},
    {label: "Fiat", value: "fiat"}
  ]}
/>
```

#### Usage With All Props

```js
<MultiLevelMenu
  componentId="CategorySensor"
  appbaseField={["brand.raw", "vehicleType.raw", "model.raw"]}
  data={[
    {label: "Volkswagen", value: "volkswagen"},
    {label: "BMW", value: "bmw"},
    {label: "Audi", value: "audi"},
    {label: "Nissan", value: "nissan"},
    {label: "Fiat", value: "fiat"}
  ]}
  maxCategories={10}
  maxItems={4}
  blacklist={["other", "misc"]}
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **appbaseField** `Array`  
    data fields to be mapped with the component's UI view. MultiLevelMenu component supports three (3) fields passed as an Array for Outer List > Category List > Items Sub List, in that order.
- **data** `Object Array`  
    an object array of {label:label, value:value} key-value pairs representing the outer list, `label` is displayed in the UI and `value` is its corresponding field value in the database.
- **maxCategories** `Number` [optional]  
    control how many items to display in the category list. Defaults to 10.
- **maxItems** `Number` [optional]  
    control how many items to display in the items sub list. Defaults to 4.
- **blacklist** `String Array`  
    hides all the matching values in category list and the items sub list.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="oeQJop" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="MultiLevelMenu docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/oeQJop/">MultiLevelMenu docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/GHJnKsB.png)

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="oeQJop" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="MultiLevelMenu docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/oeQJop/">MultiLevelMenu docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [MultiLevelMenu with all the default props](../playground/?knob-title=NestedList%3A%20Car%20Filter&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FMultiLevelMenu&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [MultiLevelMenu with a blacklist](../playground/?knob-title=NestedList%3A%20Car%20Filter&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FMultiLevelMenu&selectedStory=With%20Blacklist&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [MultiLevelMenu with maxCategories set](../playground/?knob-title=NestedList%3A%20Car%20Filter&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=6&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FMultiLevelMenu&selectedStory=With%20maxCategories&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [MultiLevelMenu with maxItems set](../playground/?knob-title=NestedList%3A%20Car%20Filter&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=6&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-maxItems=3&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FMultiLevelMenu&selectedStory=With%20maxItems&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

5. [Playground (with all knob actions)](../playground/?knob-title=NestedList%3A%20Car%20Filter&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-filterLabel=Cars&knob-defaultSelected%5B0%5D=bmw&knob-defaultSelected%5B1%5D=x%20series&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&knob-URLParams%20%28not%20visible%20on%20storybook%29=false&knob-showFilter=true&knob-sortBy=count&filterBy=ReactiveSearch&knob-maxItems=4&knob-size=100&knob-showCount=true&knob-placeholder=Search%20Cars&knob-showSearch=true&selectedKind=search%2FMultiLevelMenu&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
