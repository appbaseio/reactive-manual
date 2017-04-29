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
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `Array`  
    data field(s) to be mapped with the component's UI view. A nested list component supports multiple fields passed as an Array denoting the order of nesting.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    collection of UI `labels` with associated with `start` and `end` ratings values.
- **defaultSelected** `Object` [optional]  
    pre-select a ratings value using `start` and `end` key values from one of the data elements.

### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/eBNY5rZ.png)

```html
<div class="rbc rbc-ratingsfilter col s12 col-xs-12 card thumbnail rbc-title-active">
  <div class="row">
    <h4 class="rbc-title col s12 col-xs-12">RatingsFilter</h4>
    <div class="col s12 col-xs-12 rbc-list-container">
      <div class="rbc-list-item row">
        <label class="rbc-label ">
          <div style="overflow: hidden; position: relative;">
          </div>
          <span>4 stars and up</span>
        </label>
      </div>
      <div class="rbc-list-item row">
        <label class="rbc-label rbc-active">
          <div style="overflow: hidden; position: relative;">
          </div>
          <span>3 stars and up</span>
        </label>
      </div>
      <div class="rbc-list-item row">
        <label class="rbc-label ">
          <div style="overflow: hidden; position: relative;">
          </div>
          <span>2 stars and up</span>
        </label>
      </div>
      <div class="rbc-list-item row">
        <label class="rbc-label ">
          <div style="overflow: hidden; position: relative;">
          </div>
          <span>&gt; 1 stars</span>
        </label>
      </div>
    </div>
  </div>
</div>
```

* RatingsFilter component's class name is `rbc-ratingsfilter`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* ratings are present inside a `rbc-list-item row` element.
* ratings labels are associated with a `rbc-label` class.

### Extending

`RatingsFilter` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

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
- **onValueChange** `Function`  
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **RatingsFilter's** value changes.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="zwZzqm" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch RatingsFilter" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/zwZzqm/">ReactiveSearch RatingsFilter</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for RatingsFilter on playground.

1. [RatingsFilter with basic props](../playground/?selectedKind=s%2FRatingsFilter&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

4. [RatingsFilter with defaultSelected](../playground/?knob-defaultSelected=%7B"start"%3A2%2C"end"%3A5%7D&selectedKind=s%2FRatingsFilter&selectedStory=With+defaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

4. [Playground (with all knob actions)](../playground/?knob-defaultSelected=%7B"start"%3A2%2C"end"%3A5%7D&knob-title=RatingsFilter&knob-data=%5B%7B"start"%3A4%2C"end"%3A5%2C"label"%3A"4+stars+and+up"%7D%2C%7B"start"%3A3%2C"end"%3A5%2C"label"%3A"3+stars+and+up"%7D%2C%7B"start"%3A2%2C"end"%3A5%2C"label"%3A"2+stars+and+up"%7D%2C%7B"start"%3A1%2C"end"%3A5%2C"label"%3A">+1+stars"%7D%5D&selectedKind=s%2FRatingsFilter&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)
