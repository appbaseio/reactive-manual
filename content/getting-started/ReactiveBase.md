---
id: reactivebase
title: "ReactiveBase"
layout: tutorial
sectionid: getting-started
permalink: getting-started/reactivebase.html
prev: getting-started/data.html
prevTitle: "Importing Data"
next: getting-started/componentsindex.html
nextTitle: "Components Overview"
---

**ReactiveBase** is a container component that wraps all the `ReactiveSearch` components together. It binds the backend app (data source) with the UI view components (elements wrapped within ReactiveBase), allowing a UI component to be reactively updated every time there is a change in the data source or in other UI components.

This is the first component you will need to add when using `ReactiveSearch`.

### Usage

```js
<ReactiveBase
  app="appname"
  credentials="abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456"
>
    <Component1 .. />
    <Component2 .. />
</ReactiveBase>
```

### Props

- **app** `String`  
    app name as it appears on the dashboard.
- **credentials** `String` [optional]  
    app credentials as they appear on the dashboard. It should be a string of the format "username:password" and is used for authenticating the app. If you are not using an appbase.io app, credentials may not be necessary - although having an open-access Elasticsearch cluster is not recommended.
- **url** `String` [optional]  
    URL where Elasticsearch cluster is hosted, only needed if your app uses a non appbase.io URL.
- **type** `String` [optional]  
    types on which the queries should run on. Multiple types can be passed as comma separated values. The default behavior here is to search on all the app types.
- **theme** `Object` [optional]  
    // TODO: Update usage of theme.

> Note
>
> If you are using the **url** prop for an Elasticsearch cluster, ensure that your ReactiveSearch app can access the cluster. Typically, you will need to configure CORS in **elasticsearch.yml** to enable access.

```yaml
http.cors.enabled: true
http.cors.allow-credentials: true
http.cors.allow-origin: "http://reactive-search-app-domain.com:port"
http.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept
```

### Next Steps

Once you have added the **ReactiveBase** component, you can get started with adding other components as its children.

* List specific components can be found  [here](/list-components/singlelist.html).
* Range specific components can be found  [here](/list-components/singlerange.html).
* Search specific components can be found [here](/search-components/datasearch.html).
* Result specific components can be found
[here](/result-components/resultlist.html).

You can read more about when to use which components in the overview guide [here](/getting-started/ComponentsIndex.html).
