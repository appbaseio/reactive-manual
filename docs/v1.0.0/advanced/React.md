{"bigh3": true}

{% raw %}

## React

One of the key ideas behind Reactive Maps is the sensor / actuator design pattern, which allows defining how an actuator component reacts to changes in the states of the sensors.

### Usage

```javascript
<ReactiveMap
    ...
    react={{
      "and": "citySensor",
      "or": "searchSensor"
    }}
>
```

### Props

- **react** `Object`  
    `react` prop is available in components whose data view should reactively update when on or more dependent components change their states, e.g. [`ReactiveMap`](http://opensource.appbase.io/reactivemaps/manual/v1.0.0/map-components/ReactiveMap.html), [`ReactiveList`](https://opensource.appbase.io/reactivemaps/manual/v1.0.0/components/ReactiveList.html).
  - **key** `String`  
      one of `and`, `or`, `not` defines the combining clause.
      - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
      - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
      - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
  - **value** `String or Array or Object`  
      - `String` is used for specifying a single component by its `componentId`.
      - `Array` is used for specifying multiple components by their `componentId`.
      - `Object` is used for nesting other key clauses.

An example of a `react` clause where all three clauses are used and values are `Object`, `Array` and `String`.

```js
<ReactiveMap
  ...
  react={{
    "and": {
        "or": ["CityComp", "TopicComp"],
        "not": "BlacklistComp"
    }
  }}
/>
```

Here, we are specifying that the map's UI should update whenever one of the blacklist items is not present and simultaneously any one of city or topics matches.

{% endraw %}
