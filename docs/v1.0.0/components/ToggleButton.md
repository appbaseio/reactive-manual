{"bigh3": true}

## ToggleButton

![Image to be displayed](https://i.imgur.com/Zyooy5N.png)

`ToggleButton` sensor component creates a toggle button UI widget. It is used for filtering results based on a fixed set of toggleable options.

Example uses:
* filter movies by ratings between 1 and 5,
* display restaurants that accept delivery and are open now,
* show flight tickets by one way, round trip and multi-city options.

### Usage

```js
<ToggleButton
  componentId="MeetupTops"
  appbaseField="group_topics.topic_name.raw"
  title="ToggleButton component"
  data={
    [{"label": "Social",   "value": "Social"},
     {"label": "Travel",   "value": "Travel"},
     {"label": "Outdoors", "value": "Outdoors"}]
  }
  defaultSelected=["Social"]
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view.The selected buttons create a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **data** `Object Array`  
    an object array of {label:label, value:value} kv pairs, `label` is displayed in the UI and `value` is the corresponding actual field value in the database.
- **defaultSelected** `Array` [optional]  
    an array of default selected label(s) to pre-select one or more buttons.
- **multiSelect** `Boolean` [optional]  
    whether multiple buttons can be selected, defaults to **true**. When set to **false**, only one button can be selected.

### CSS Styles API

![Annotated image](https://i.imgur.com/lMbqk2H.png)

All reactivebase components are `rbc` namespaced.

```html
<div class="rbc rbc-togglebutton rbc-title-active rbc-multiselect-active col s12 col-xs-12 card thumbnail">
  <div class="row">
    <h4 class="rbc-title col s12 col-xs-12">Meetup Categories</h4>
    <div class="col s12 col-xs-12">
      <div class="rbc-buttongroup">
        <button class="rbc-btn rbc-btn-active" title="Social">Social</button>
        <button class="rbc-btn rbc-btn-inactive" title="Travel">Travel</button>
        <button class="rbc-btn rbc-btn-inactive" title="Outdoors">Outdoors</button>
      </div>
    </div>
  </div>
</div>
```

* ToggleButton component's class name is `rbc-togglebutton`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied.
* the title element has a class name of `rbc-title`.
* the buttons are encapsulated inside a `rbc-buttongroup` class.
* each individual button has a `rbc-btn` class. If the button is currently selected, it will also have the `rbc-btn-active` class. If the button is not selected, it will likewise have the `rbc-btn-inactive` class.

### Extending

`ToggleButton` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<ToggleButton
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
    CSS styles to be applied to the **ToggleButton** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **ToggleButton** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **ToggleButton's** value changes.

### Examples

1. [Toggle button with default props](../playground/?selectedKind=ToggleButton&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

2. [A multiple toggle button with specific default selected labels](../playground/?selectedKind=ToggleButton&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-title=ToggleButton%3A%20Meetup%20Categories&knob-multiSelect=true&knob-defaultSelected%5B0%5D=Social&knob-defaultSelected%5B1%5D=Travel&selectedKind=ToggleButton&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs)
