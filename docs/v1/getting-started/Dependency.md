## Define dependency on other sensors
Let's take an example if topics lists is depenedent on city selection (topic sensor is dependent on city sensor) then we should pass selected city value in topic sensor and get the topic list according to selected city.

To achieve this we should pass following things to topic sensor:
- `selectedSensor`: which contains all the selected sensor values.
- `sensorOnSelect`: an event which is filred on select/change of sensor value. - which is responsible to store selected values of sensors (this should be passed in both sensors - city and topic).
- `depends`: an object which contains dependent sensors
```
depends= {
    {'city': this.state.mapping.city}
}
```