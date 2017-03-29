{"bigh3": true}

## DataController

![Image to be displayed](https://i.imgur.com/Lj5O2qg.png)

As the name suggests, a `DataContoller` component creates a UI optional filter. There are many cases where filtering of results is controlled by query preferences not visible in the view. A Data Controller comes in handy there.

A `DataController` also provides a way to provide a customized UI widget with a generic query, as defined by <a href="https://www.elastic.co/guide/en/elasticsearch/reference/2.4/query-dsl.html">Elasticsearch's Query DSL</a>.

Example uses:

* Showing personalized feeds based on user's global preferences that are not visible in the current UI view, like in meetup.com's meetup recommendations to users.
* Extending the existing UI components to perform a generic query.

### Usage

```js
<DataController
  componentId="DataControllerSensor"
  title="Data Controller Component"
  visible={true}
  dataLabel={
    <p>A customizable UI widget</p>
  }
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in another component's **react** prop.
- **visible** `Boolean` [optional]  
    whether to show the UI for the component. Defaults to `false`.
- **title** `String or HTML` [optional]  
    Sets the title of the component to be shown in the UI, applicable when **visible** is set to `true`.
- **dataLabel** `String or HTML` [optional]  
    set the UI markup. Accepts a string or an HTML element. This prop is only applicable when **visible** is set to `true`.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated Image](http://i.imgur.com/ow7MEdG.png)

```
<div class="rbc rbc-datacontroller card thumbnail rbc-title-active rbc-datalabel-active rbc-visible-active">
  <div>
    <h4 class="rbc-title col s12 col-xs-12">DataController</h4>
    <span class="rbc-datalabel col s12 col-xs-12">
      <p>★ A customizable UI widget ★</p>
    </span>
  </div>
</div>
```

* DataController component's class name is `rbc-datacontroller`.
* Additionally, depending on the presence / absence of the `visible` prop, a `rbc-visible-active` or `rbc-visible-inactive` class is respectively applied.
* The title element has a class name of `rbc-title`. Depending on the presence / absence of the title prop, a `rbc-title-active` or `rbc-title-inactive` class is applied at the component's root div.
* The UI element has a class name of `rbc-datalabel`. Depending on the presence / absence of the datalabel prop, a `rbc-datalabel-active` or `rbc-datalabel-inactive` class is applied at the component's root div.

### Extending

`DataController` component can be extended to
1. customize the look and feel with `componentStyle`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `onValueChange`.

```
<DataController
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
    CSS styles to be applied to the **DataController** component. This prop is only applicable when **visible** prop is set to `true`.
- **customQuery** `Function`
    takes **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch v2.4 Query DSL.
    `Note:` customQuery is called on value changes in the **DataController** component as long as the component is a part of `react` dependency of at least one other component.
- **onValueChange** `Function`
    is called every time the component's **value** changes and is passed as a parameter to the function. This can be used for updating other UI components when **DataController's** value changes.


### Examples

1. [DataController with all the default props](../playground/?selectedKind=DataController&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
1. [DataSearch with autocomplete turned off](../playground/?selectedKind=DataController&selectedStory=With%20UI&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
1. [Playground (with all knob actions)](../playground/?selectedKind=DataController&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
