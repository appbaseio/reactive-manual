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
  showUI={true}
  dataLabel={
    <p>A customizable UI widget</p>
  }
  componentStyle={{
    padding-bottom: '10px'
  }}
  customQuery={
    function() {
      return {
        query: {
          match: {
            data_field: "this is a test"
          }
        }
      }
    }
  }
/>
```

### Props

- **componentId** `String`  
    unique id of the sensor, can be referenced in another component's **react** prop.
- **title** `String` [optional]  
    Sets the title of the component to be shown in the UI.
- **showUI** `Boolean` [optional]  
    whether to show the UI for the component. Defaults to `false`.
- **dataLabel** `String or HTML` [optional]  
    set the UI markup. Accepts a string or an HTML element. This prop is only applicable when **showUI** is set to `true`.
- **componentStyle** `Object` [optional]  
    CSS styles to be applied to the **DataController** component. Similar to dataLabel, this prop is only applicable when **showUI** is set to `true`.
- **customQuery** `Function` [optional]  
    define the data query to be applied to the component, as per Elasticsearch v2.4 Query DSL. Unlike other components where **appbaseField** is a required prop and decides the query, with DataController component -- user returns a query definition in the customQuery prop.

### CSS Styles

All reactivebase components are `rbc` namespaced.

![Annotated Image]()

### Examples

1. [DataController with all the default props](../playground/?selectedKind=DataController&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
1. [DataSearch with autocomplete turned off](../playground/?selectedKind=DataController&selectedStory=With%20UI&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
1. [Playground (with all knob actions)](../playground/?selectedKind=DataController&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
