{"bigh3": true}

## MultiDropdownList

![Image to be displayed](https://i.imgur.com/ZZ0MG6N.png)

`MultiDropdownList` creates a  dropdown based multiple selection list UI component that is connected to a database field. It is used for filtering results based on the current selection from a list of items.

`Note:` This component is exactly like the [MultiList](/v1.0.0/components/MultiList.html) component except the UI is based on a dropdown, ideal for showing additional UI filters while conserving screen space.

Example uses:
* create an e-commerce facet like search experience.
* create a filter for airlines to fly by in a flight booking experience.

### Usage

#### Basic Usage

```js
<MultiDropdownList
  componentId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
/>
```

#### Usage With All Props

```js
<MultiDropdownList
  componentId="CitySensor"
  appbaseField="group.group_city.raw"
  title="Cities"
  size={100}
  sortBy="count"
  defaultSelected={["London"]}
  showCount={true}
  placeholder="Search City"
  initialLoader="Loading cities list.."
  showFilter={true}
  filterLabel="City"
  URLParams={false}
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **appbaseField** `String`  
    DB data field to be mapped with the component's UI view. The dropdown list items are filtered by a database query on this field.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
-  **sortBy** `String` [optional]  
    property that decides on how to sort the list items, accepts one of `count`, `asc` or `desc` as valid values.
    * `count` sorts the list based on the count occurences, with highest value at the top.
    * `asc` sorts the list in the ascending order of the list item (Alphabetical).
    * `desc` sorts the list in the descending order of the term. Defaulted to `count`.
- **defaultSelected** `Array` [optional]  
    pre-select one or more options from the dropdown list. Accepts an `Array` object containing the items that should be selected. It is important for the passed value(s) exactly match with the field value(s) as stored in appbase.io app.
- **queryFormat** `String` [optional]  
    queries the selected items from the list in one of two modes: `or`, `and`.
    * Defaults to `or` which queries for results where any of the selected list items are present.
    * In `and` mode, the applied query filters results where all of the selected items are present.
- **showCount** `Boolean` [optional]  
    show count of number of occurences besides an item. Defaults to `true`.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the dropdown searchbox.
- **initialLoader** `String or HTML` [optional]  
    display text while the data is being fetched, accepts `String` or `HTML` markup.
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="rzvrqd" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="MultiDropdownList docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/rzvrqd/">MultiDropdownList docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/TqKvRhF.png)

### Extending

`MultiDropdownList` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange` and `onValueChange`.

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

- **componentStyle** `Object`  
    CSS styles to be applied to the **MultiDropdownList** component.
- **customQuery** `Function`  
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **MultiDropdownList** component as long as the component is a part of `react` dependency of at least one other component.
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when list item(s) is/are selected in a "Discounted Price" MultiDropdownList.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="rzvrqd" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="MultiDropdownList docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/rzvrqd/">MultiDropdownList docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [List with all the default props]

2. [List with a placeholder]

3. [List with a 'Select All' option]

4. [List with pre-selected options]

5. [Playground (with all knob actions)]
