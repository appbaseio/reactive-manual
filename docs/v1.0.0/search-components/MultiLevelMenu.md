{"bigh3": true}

## MultiLevelMenu

![Image to be displayed](https://i.imgur.com/pyJzImP.png)

A `MultiLevelMenu` component creates a multi-level menu UI sensor. It is useful for displaying prominent items by categories.

Example uses:
* Show prominent items on an e-commerce app's front page.

### Usage

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
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `Array`  
    data fields to be mapped with the component's UI view. MultiLevelMenu component supports three (3) fields passed as an Array for Outer List > Category List > Items Sub List, in that order.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    an object array of {label:label, value:value} kv pairs representing the outer list, `label` is displayed in the UI and `value` is its corresponding field value in the database.
- **maxCategories** `Number` [optional]  
    control how many items to display in the category list. Defaults to 10.
- **maxItems** `Number` [optional]  
    control how many items to display in the items sub list. Defaults to 4.

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/GHJnKsB.png)

```html
TBD: Add CSS Markup and Explainer Text
```

### Examples

<p data-height="265" data-theme-id="light" data-slug-hash="wJLYoe" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch MultiLevel Menu" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/wJLYoe/">ReactiveSearch MultiLevel Menu</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for MultiLevelMenu on playground.

1. [MultiLevelMenu with all the default props](../playground/?selectedKind=s%2FMultiLevelMenu&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

2. [MultiLevelMenu with a blacklist](../playground/?knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&selectedKind=s%2FMultiLevelMenu&selectedStory=With%20Blacklist&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

3. [MultiLevelMenu with maxCategories set](../playground/?knob-maxCategories=6&selectedKind=s%2FMultiLevelMenu&selectedStory=With%20maxCategories&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

4. [MultiLevelMenu with maxItems set](../playground/?knob-maxItems=3&selectedKind=s%2FMultiLevelMenu&selectedStory=With%20maxItems&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

5. [Playground (with all knob actions)](../playground/?knob-maxItems=4&knob-data=%5B%7B"label"%3A"Volkswagen"%2C"value"%3A"volkswagen"%7D%2C%7B"label"%3A"BMW"%2C"value"%3A"bmw"%7D%5D&knob-blacklist%5B0%5D=golf&knob-blacklist%5B1%5D=unknown&knob-maxCategories=10&selectedKind=s%2FMultiLevelMenu&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)
