{"bigh3": true}

{% raw %}

## DataSearch

![Image to be displayed](https://i.imgur.com/dLeyahL.png)

A `DataSearch` component creates a searchbox with an autocomplete search functionality. Useful for full-text search, searching a specific field or a set of fields.

```js
<DataSearch
  sensorId="SearchSensor"
  searchInputId="internalSearch"
  appbaseField={[this.props.mapping.venues, this.props.mapping.cities]}
  title="Search"
  placeholder="Search for cities or venues"
  depends={{
    'CitySensor': {
      "operation": "must",
      "doNotExecute": {true}
    }
  }}
/>
```

### Props

- **sensorId**: `String`: should be unique id of sensor which can be used in other sensor's dependencies.  
- **searchInputId**: `String`: (optional) An additional sensor reference ID that allows actions on the search text changes.  
- **appbaseField**: `String`: is the name of the field for price data in the appbase.io app. For a `DataSearch` component, the field should be of a `String` data type. Search can also be applied on more than one fields.  
- **title**: `String`: Sets the title of the component to be shown in the UI.
- **placeholder**: `string`: is the placeholder text to be shown in the searhbox.  
- **depends**: `Object`: It should contain the sensors on which the component is dependent. [read more](https://appbaseio.github.io/reactive-maps-docs/v1/getting-started/Dependency.html)


### CSS Styles



### Examples

1. DataSearch with all the default props

2. Datasearch on multiple search fields

3. DataSearch with a list actuator that shows results on `searchInputId` changes

4. Playground (with all knob actions)

{% endraw %}
