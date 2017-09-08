{"bigh3": true}

# ToggleButton

![Image to be displayed](https://i.imgur.com/Zyooy5N.png)

`ToggleButton` creates a toggle button UI component that is connected to a database field. It is used for filtering results based on a fixed set of toggle-able options.

Example uses:
* filter movies by ratings between 1 and 5,
* display restaurants that accept delivery and are open now,
* show flight tickets by one way, round trip and multi-city options.

## Usage

### Basic Usage

```js
<ToggleButton
  componentId="MeetupTops"
  dataField="group_topics.topic_name.raw"
  data={
    [{"label": "Social",   "value": "Social"},
     {"label": "Travel",   "value": "Travel"},
     {"label": "Outdoors", "value": "Outdoors"}]
  }
/>
```

### Usage With All Props

```js
<ToggleButton
  componentId="MeetupTops"
  dataField="group_topics.topic_name.raw"
  title="Meetups"
  defaultSelected=["Social"]
  data={
    [{"label": "Social",   "value": "Social"},
     {"label": "Travel",   "value": "Travel"},
     {"label": "Outdoors", "value": "Outdoors"}]
  }
  multiSelect={true}
  showFilter={true}
  filterLabel="City"
  URLParams={false}
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be connected to the component's UI view.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `Array` [optional]  
    an array of default selected label(s) to pre-select one or more buttons.
- **data** `Object Array`  
    collection of UI `labels` with associated `value` to be matched against the database field.
- **multiSelect** `Boolean` [optional]  
    whether multiple buttons can be selected, defaults to **true**. When set to **false**, only one button can be selected.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

## Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="LjaYGq" data-default-tab="js" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ToggleButton docs example" class="codepen">See the Pen <a href="https://codepen.io/sids-aquarius/pen/LjaYGq/">ToggleButton docs example</a> by Siddharth Kothari (<a href="https://codepen.io/sids-aquarius">@sids-aquarius</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/lMbqk2H.png)

## Extending

`ToggleButton` component can be extended to
1. customize the look and feel with `style`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

```
<ToggleButton
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
/>
```

- **style** `Object`
    CSS styles to be applied to the **ToggleButton** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **ToggleButton** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code(s) when button(s) is/are selected in a "Discounted Price" ToggleButton.

## Examples

<p data-height="500" data-theme-id="light" data-slug-hash="LjaYGq" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ToggleButton docs example" class="codepen">See the Pen <a href="https://codepen.io/sids-aquarius/pen/LjaYGq/">ToggleButton docs example</a> by Siddharth Kothari (<a href="https://codepen.io/sids-aquarius">@sids-aquarius</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [Toggle button with default props](../playground/?selectedKind=map%2FToggleButton&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [A multiple toggle button with specific default selected labels](../playground/?knob-defaultSelected%5B0%5D=Social&knob-defaultSelected%5B1%5D=Travel&selectedKind=map%2FToggleButton&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [Playground (with all knob actions)](../playground/?knob-defaultSelected%5B0%5D=Social&knob-defaultSelected%5B1%5D=Travel&knob-title=ToggleButton%3A%20Meetup%20Categories&knob-multiSelect=true&selectedKind=map%2FToggleButton&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
