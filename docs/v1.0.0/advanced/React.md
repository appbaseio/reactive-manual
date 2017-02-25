{"bigh3": true}

{% raw %}

## Actuate

One of the key ideas behind Reactive Maps is the sensor / actuator design pattern, which allows defining sensor components

## Usage

```javascript
<ReactiveMap
    ...
    actuate={{
      "citySensor": {
        operation: "must"
      },
      "searchSensor": {
        operation: "should",
        doNotExecute: {true}
      }
    }}
>
```

- **actuate** `Object`  
    `actuate` is a prop specific to actuator components, e.g. [`ReactiveMap`](http://opensource.appbase.io/reactivemaps/manual/v1/map-components/ReactiveMap.html), [`ResultList`](https://opensource.appbase.io/reactivemaps/manual/v1/components/ResultList.html). It defines a combined query context for the actuator by chaining one or more sensor components, so when one of the underlying sensor updates, the changes are reflected reactively in the actuator results.


```js
<ReactiveMap 
  ...
  actuate={{
    "<componentId#1>": {
        "operation": "must",
        "defaultQuery": this.cityQuery
        "doNotExecute": {true}
    }
  }}
/>
```

- **actuate.keys** `String`  
    the keys of the `actuate` prop are sensor components referenced by their `componentId`.
  - **operation** `String`  
      choose the operation clause for the sensor component, currently accepts two values: `must` and `should`. `must` requires the query to return a match for the applied sensor component. On the other hand, `should` doesn't require the query to return a match for the applied sensor component as long as there are other sensors returning matches.
  - **customQuery** `Function` [optional]  
      define a custom query for the sensor component. The function recives the current value of the sensor as a value and returns a query in the [Elasticsearch DSL format](https://www.elastic.co/guide/en/elasticsearch/reference/2.4/query-dsl.html).
  - **doNotExecute** `Boolean` [optional]
      Sometimes, you don't want the actuator to immediately update when the sensor value updates, you can set this prop to `true`. The query context updates in this case but it is not applied to the acutator. Defaults to `false`. 

{% endraw %}
