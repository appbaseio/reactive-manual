---
id: reactivecomponent
title: "Reactive Component"
layout: docs
sectionid: reactivecomponent
permalink: base-components/reactivecomponent.html
prev: selectedfilters.html
prevTitle: "SelectedFilters"
next: /list-components/singlelist.html
nextTitle: "List Components: SingleList"
redirect_from:
    - 'basic-components/reactivecomponent.html'
    - 'base-components/reactivecomponent'
    - 'reactivecomponent'
---


With `ReactiveComponent`, you can convert any React Component into a Reactivesearch component i.e. your react component will be able to talk to other Reactivesearch components and connect with your elasticsearch cluster seamlessly. `Note` This page only cover `ReactiveComponent` with `customQuery`. Read more [here](/advanced/reactivecomponentindepth.html).

> How does this work?
>
> `ReactiveComponent` is a wrapper component that allows you to connect custom component(s) (passed as children) with the Reactivesearch ecosystem.


### Usage

Let's suppose - we are building an e-commerce store for cars which displays a list of cars of a particular brand on their separate page as `example.com/cars/nissan`. Now, we want all the filters on that page (like pricing, type of car, model, year, etc) to only show the data relevant to the given brand (i.e. `nissan`). In this case, `ReactiveComponent` can be used with `customQuery` to achieve the desired behavior easily.

We can then use the given ReactiveComponent to be watched by all the filters (via `react` prop) to avail the desired brand based filtering for all the filters.

Check demo [here](https://codesandbox.io/s/3ylrrr0r5q).


```js
 <ReactiveComponent
    componentId="CarSensor"
    customQuery={props => ({
        query: {
                term: {
                    "brand.keyword": "Ford"
                }
            }
        })
    }
/>
```


### Props
 
- **className** `String`  
    CSS class to be injected on the component container.
- **style** `Object`  
    CSS styles to be applied to the **DataSearch** component.
- **customQuery** `Function`  
    **returns** the custom query to be applied to the component, as defined in Elasticsearch Query DSL.
    Custom query can be used to change the component's behavior for its subscribers.
- **onQueryChange** `Function`  
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.
- **onAllData** `Function`  
    callback function which provides `hits` and `aggregations` as function params.
- **react** `Object`
    `react` prop is available in components whose data view should reactively update when on or more dependent components change their states, e.g. [`ReactiveMap`](/map-components/reactivemap.html), [`ReactiveList`](/basic-components/reactivelist.html).
  - **key** `String`
      one of `and`, `or`, `not` defines the combining clause.
      - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
      - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
      - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
  - **value** `String or Array or Object`
      - `String` is used for specifying a single component by its `componentId`.
      - `Array` is used for specifying multiple components by their `componentId`.
      - `Object` is used for nesting other key clauses.

- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.

### Demo

<iframe src="https://codesandbox.io/embed/3ylrrr0r5q" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

See storybook for ReactiveComponent on playground.

<a href="https://opensource.appbase.io/playground/?selectedKind=Base%20components%2FReactiveComponent&selectedStory=A%20custom%20component" target="_blank">A custom component using ReactiveComponent</a>
