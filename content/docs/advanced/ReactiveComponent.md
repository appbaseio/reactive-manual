---
id: reactivecomponent
title: "Reactive Component"
layout: docs
sectionid: reactivecomponent
permalink: advanced/reactivecomponent.html
prev: advanced/react.html
prevTitle: "React Prop"
next: advanced/mapping.html
nextTitle: "Indexing and Data Mappings"
---

We have built this library keeping you, the developer, in mind. If you're here, it is obvious that you want to create a custom component that is reactive in nature. Perhaps, you already have a component in your design kit and want it to work seamlessly with Reactivesearch.

With `ReactiveComponent`, you can convert any React Component into a Reactivesearch component i.e. your react component will be able to talk to other Reactivesearch components and connect with your elasticsearch cluster seamlessly.

> How does this work?
>
> `ReactiveComponent` is a Higher-Order-Component(HOC) that allows you to connect custom component(s) (passed as children) with the Reactivesearch ecosystem.

For example, let's suppose that we are building an e-commerce store where we have a react component called `ColorPicker` which renders the `colors` passed to it as tiles, allowing us to filter the products by their colors.

![ColorPicker](https://i.imgur.com/wuKhCTT.png)

```javascript{2}
    <ColorPicker
        colors={['#000', '#666', '#fff']}
        onChange={this.handleColorChange}
    >
```

Now, let's assume that we have all these hex-codes stored as `keywords` in an Elasticsearch index. To display each unique color tile, we can run a `terms` aggregations query. The `defaultQuery` prop of ReactiveComponent allows us to do this:

```javascript{3-11}
    <ReactiveComponent
        componentId="myColorPicker"
        defaultQuery={{
            aggs: {
                color: {
                    terms: {
                        field: 'color'
                    }
                }           }
        }}
    >
        <ColorPickerWrapper />
    </ReactiveComponent>
```

The above piece of code runs the `defaultQuery` passed to the ReactiveComponent when the component gets mounted and passes the query results to the `ColorPickerWraper` component (i.e. the child component) as following two props: `hits` and `aggregations`.

In the current usecase of ColorPicker, we only care about the aggregations, hence inside our ColorPickerWrapper which simply wraps the ColorPicker component, we can watch for the aggregations prop and filter out the hexcode strings from the elasticsearch buckets and pass it as an array to the ColorPicker component:

```javascript
    class ColorPickerWrapper extends React.Component {
        /*
        assuming our buckets look like this:

        [
            { key: '#000', doc_count: 10 },
            { key: '#222', doc_count: 4 },
            ...
        ]
        */

        handleColorChange = () => {
            // handles color change
        };

        render() {
            let colors = [];

            if (
                // checking if buckets are not empty
                this.props.aggregations
                && this.props.aggregations.colors
                && this.props.aggregations.colors.buckets.length
            ) {
                colors = this.props.aggregations.map(color => color.key);
            }

            return (
                <ColorPicker
                    colors={colors}
                    onChange={this.handleColorChange}
                />
            )
        }
    }
```

Uptil this point, we have collected the data to render the color tiles, next step is to handle the change in color selection by updating this component's query everytime a new color is selected, so that the components subscribed to `myColorPicker` reactive-component can know about the change and react to it accordingly by considering the newly updated query.

`ReactiveComponent` provides a way to do this via a method in the props called `setQuery()` which takes an object of shape:

```javscript
    {
        query: {},
        value: ''
    }
```

where,

- **query** - is the query of the component,
- **value** - can be an array, string or number (This will be shown in selected filters and URLParams if active)


In our current example, we would simply have to call `this.props.setQuery()` with the updated query and value of the component:

```javascript
    handleColorChange = (newColor) => {
        const query = {
            query: {
                term: {
                    color: newColor
                }
            }
        };

        this.props.setQuery({
            query,
            value: newColor
        })
    };
```

Now, the components which will have `myColorPicker` present in their `react` prop can react to the changes in the ColorPicker component based on the query passed to the setQuery method. You can check a [similar example implementation here](https://github.com/appbaseio/reactivesearch/blob/dev/packages/web/examples/ReactiveComponent/index.js).

### Usage

```javascript

```

### Props

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


