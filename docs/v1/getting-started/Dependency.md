{"bigh3": true}

{% raw %}

## Define dependency on other sensors
- **actuate**: `Object`: it should contain the sensors on which component is dependent.


```js
<AppbaseMap 
  ...
actuate={{
    'componentId': {
        "operation": "must",
        "defaultQuery": this.cityQuery
        "doNotExecute": {true}
    }
}}
/>
```

- **operation**: `String`: It should be either `must` or `should`. It decides whether this query should be inside must clause or should clause.

- **defaultQuery**: `Function`: (optional) this function will receive value of that particulat sensor and user needs to create query on basis of that and return the query, If you don't specify defaultquery queryBuilder will include the default query of that sensor.

- **doNotExecute**: `Boolean`: (by default true) If you don't want to execute query immediatly after dependent sensor changees, then apply true as value. In this case your component already append sensor query but just didn't execute it immediatly.

Let's take an example if topics lists is depenedent on city selection (topicSensor is dependent on citySensor).

To achieve this
1. Assign componentId to city list.
2. Use this componentId in other sensor.

- City Sensor should look like this
```
<AppbaseList
    componentId="CitySensor"
    inputData={this.props.mapping.city} 
   ...
/>
```

- Topic Sensor should look like this

```javascript
<AppbaseList
    componentId="TopicSensor"
    inputData={this.props.mapping.topic} 
   ...
    actuate={{
        CitySensor: {
            "operation": "must",
            "defaultQuery": this.topicactuate
        }
    }}
/>
```

{% endraw %}
