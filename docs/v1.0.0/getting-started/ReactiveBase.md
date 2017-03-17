{"bigh3": true}

## ReactiveBase

**ReactiveBase** is the **base** component for all `ReactiveMaps` and `ReactiveSearch` apps. It binds the backend app (data source) with the UI view components (child elements to ReactiveBase), allowing the UI views to be reactively updated every time there is a change in the data source or in the UI view components.

This is the first component you will need to add.

### Usage

```js
<ReactiveBase
  app="appname"
  credentials="abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456"
  theme="rbc-blue">
    <ChildComponent1 .. />
    <ChildComponent2 .. />
</ReactiveBase>
```

### Props

- **app** `String`  
    app name as it appears on the dashboard.
- **credentials** `String`  
    app credentials as they appear on the dashboard. It should be a string of the format "username:password" and is used for authenticating the app.
- **type** `String` [optional]  
    defines which types should the queries run on. Multiple types can be passed as comma separated. The default behavior is to search on all the app types.
- **theme** `String` [optional]  
    specify a UI theme as one of `rbc-blue` or `rbc-dark`. Read more about theming [here](https://opensource.appbase.io/reactivemaps/manual/v1.0.0/advanced/Theming.html).

### Next Steps

Once you have added the **ReactiveBase** component, you can get started with adding other components as its children.

* Map specific components can be found [here](v1.0.0/map-components/ReactiveMap.html).
* Generic components can be found [here](v1.0.0/components/SingleList.html).

