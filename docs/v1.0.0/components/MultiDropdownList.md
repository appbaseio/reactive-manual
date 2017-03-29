{"bigh3": true}

## MultiDropdownList

![Image to be displayed](https://i.imgur.com/ZZ0MG6N.png)

A `MultiDropdownList` sensor component creates a multiple select dropdown based list UI widget. It is used for filtering results based on the current selection from a list of items.

`Note:` This component is exactly like the [MultiList](/v1/component/MultiList.html) component except the UI is based on a dropdown, ideal for showing additional UI filters while conserving screen space.

Example uses:
* create an e-commerce facet like search experience.
* create a filter for airlines to fly by in a flight booking experience.

### Usage

```js
<MultiDropdownList
  componentId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
  defaultSelected={["London"]}
  showCount={true}
  size={100}
  sortBy="count"
  showSearch={true}
  searchPlaceholder="Search City"
  initialLoader="Loading cities list.."
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced when creating a combined query context in an actuator's `react` prop.  
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view. The dropdown list items are filtered by a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **defaultSelected** `Array` [optional]  
    pre-select one or more options from the dropdown list. Accepts an `Array` object containing the items that should be selected. It is important for the passed value(s) exactly match with the field value(s) as stored in appbase.io app.
- **showCount** `Boolean` [optional]  
    show count of number of occurences besides an item. Defaults to `true`.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
-  **sortBy** `String` [optional]  
    property that decides on how to sort the list items, accepts one of `count`, `asc` or `desc` as valid values. `count` sorts the list based on the count occurences, with highest value at the top. `asc` sorts the list in the ascending order of the list item (Alphabetical). `desc` sorts the list in the descending order of the term. Defaulted to `count`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to true.
- **searchPlaceholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to true.
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.


### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/TqKvRhF.png)

```html
<div class="rbc col s12 col-xs-12 card thumbnail rbc-title-active rbc-multidropdownlist rbc-placeholder-active">
    <div class="row">
        <h4 class="rbc-title col s12 col-xs-12">Cities</h4>
        <div class="col s12 col-xs-12">
            <div class="Select Select--single is-searchable has-value">
              ...
            </div>
        </div>
    </div>
</div>
```

* MultiDropdownList component's class name is `rbc-multidropdownlist`. Additionally, depending on the presence / absence of the `title` prop, a `rbc-title-active` or `rbc-title-inactive` class is respectively applied. Similarly for `placeholder` prop, classname of `rbc-placeholder-active` or `rbc-placeholder-active` is applied.
* the title element has a class name of `rbc-title`.

### Extending

`MultiDropdownList` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<MultiDropdownList
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
    CSS styles to be applied to the **MultiDropdownList** component.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **MultiDropdownList** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed in as a parameter to the function. This can be used for updating other UI components when **MultiDropdownList's** value changes.

### Examples

1. [List with all the default props](..playground/?selectedKind=m%2FMultiDropdownList&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

2. [List with a placeholder](..playground/?selectedKind=m%2FMultiDropdownList&selectedStory=With%20Placeholder&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

3. [List with a 'Select All' option](..playground/?selectedKind=m%2FMultiDropdownList&selectedStory=With%20Select%20All&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

4. [List with pre-selected options](..playground/?selectedKind=m%2FMultiDropdownList&selectedStory=With%20Default%20Selected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)

5. [Playground (with all knob actions)](..playground/?knob-title=MultiDropdownList&knob-size=100&knob-showCount=true&knob-sortBy=count&knob-selectAllLabel=All%20Cities&knob-defaultSelected%5B0%5D=London&knob-defaultSelected%5B1%5D=Melbourne&knob-placeholder=Select%20Cities&selectedKind=m%2FMultiDropdownList&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveMaps)
