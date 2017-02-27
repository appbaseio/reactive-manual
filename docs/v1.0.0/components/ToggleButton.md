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
- **title** `String` [optional]  
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


### Examples

1. A single toggle button with all the default props

2. A multiple toggle button with default props

3. A multiple toggle button with specific default selected labels

4. Playground (with all knob actions)

