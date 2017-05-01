{"bigh3": true}

## ToggleList

![Image to be displayed](https://i.imgur.com/132OEOV.png)

`ToggleList` creates a user-curated list UI component. It is useful for displaying custom data attributes.

Example uses:
* Display a curated list of housing types (where some options might not be worth displaying) in a search UI.

### Usage

#### Basic Usage

```js
<ToggleList
  componentId="toggleComponent01"
  appbaseField="housing_types"
  data={[
    {"label": "Private Room", "value": "p_room"},
    {"label": "Shared Room", "value": "shared_room"},
    {"label": "Entire Apartment", "value": "entire_apt"}
  ]}
/>
```

#### Usage With All Props

```js
<ToggleList
  componentId="toggleComponent01"
  appbaseField="housing_types"
  title="Filter by Type"
  data={[
    {"label": "Private Room", "value": "p_room"},
    {"label": "Shared Room", "value": "shared_room"},
    {"label": "Entire Apartment", "value": "entire_apt"}
  ]}
  defaultSelected="p_room"
  multiSelect={false}  
/>
```

### Props

- **componentId** `String`  
    unique id of the component, can be referenced in another component's `react` prop.
- **appbaseField** `String`  
    data field(s) to be mapped with the component's UI view.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    collection of UI list items with `label` that is displayed in the UI and the associated `value` that is the actual value in the DB.
- **multiSelect** `Boolean` [optional]  
    whether to support multiple selections at the same time. Defaults to `false`.
- **defaultSelected** `String or Array` [optional]  
    pre-select a `value` (or multiple values) to be already selected in the component UI. The data type depends on whether *multiSelect* mode is enabled.


### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/Xjyddos.png)

### Extending

`ToggleList` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<ToggleList
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
    CSS styles to be applied to the **ToggleList** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **ToggleList** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **ToggleList's** value changes.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="NjjevM" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch ToggleList" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/NjjevM/">ReactiveSearch ToggleList</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

See more stories for ToggleList on playground.


1. [Toggle List with default props](../playground/?selectedKind=s%2FToggleList&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

2. [Toggle List with defaultSelected](../playground/?knob-defaultSelected%5B0%5D=Social&selectedKind=s%2FToggleList&selectedStory=With+Default+Selected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

3. [Playground (with all knob actions)](../playground/?knob-defaultSelected%5B0%5D=Social&knob-defaultSelected%5B1%5D=Travel&knob-title=ToggleList%3A+Meetup+Categories&knob-multiSelect=true&knob-data=%5B%7B"label"%3A"Social"%2C"value"%3A"Social"%7D%2C%7B"label"%3A"Travel"%2C"value"%3A"Travel"%7D%2C%7B"label"%3A"Outdoors"%2C"value"%3A"Outdoors"%7D%5D&selectedKind=s%2FToggleList&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)
