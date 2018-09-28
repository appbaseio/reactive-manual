---
id: customsuggestions
title: "Custom Suggestions"
layout: docs
sectionid: docs
permalink: advanced/customsuggestions.html
prev: theming/class.html
prevTitle: "Theming: ClassName Injection"
next: advanced/customquery.html
nextTitle: "Custom Query"
redirect_from:
    - "advanced"
    - "reactive-manual/advanced"
---

Recipe for rendering custom suggestions with `DataSearch` and `CategorySearch` components using the `renderSuggestions` prop.

ReactiveSearch uses the wonderful [downshift](https://github.com/paypal/downshift) for rendering dropdowns and `renderSuggestions` prop provides great extensibility for custom suggestions rendering. `renderSuggestions` is a [render function](https://reactjs.org/docs/render-props.html) which receives some parameters which you may use to build your own custom suggestions rendering

## Custom Suggestions for DataSearch

```js
<DataSearch
    ...
    renderSuggestions={
        ({
            currentValue,       // the current value in the search
            isOpen,             // isOpen from downshift
            getItemProps,       // item props to be passed to suggestions
            highlightedIndex,   // index value which should be highlighted
            suggestions,        // unmodified suggestions from Elasticsearch
            parsedSuggestions,  // suggestions parsed by ReactiveSearch
        }) => JSX
    }
/>
```

Check out the [example](https://opensource.appbase.io/playground) on playground.

The `getItemProps` provides some props that you should pass to your suggestions for them to work properly with downshift. The paramter should be an object with key `item` which should have a `value` field. For example:

```js
<div {...getItemProps({ item: { value: suggestion } })}></div>
```

The `suggestions` parameter receives all the unparsed suggestions from elasticsearch, however `parsedSuggestions` are also passed which can also be used for suggestions rendering.

## Custom Suggestions for CategorySearch

```js
<CategorySearch
    ...
    renderSuggestions={
        ({
            currentValue,       // the current value in the search
            isOpen,             // isOpen from downshift
            getItemProps,       // item props to be passed to suggestions
            highlightedIndex,   // index value which should be highlighted
            suggestions,        // unmodified suggestions from Elasticsearch
            parsedSuggestions,  // suggestions parsed by ReactiveSearch
            categories,         // all categories for the suggestions
        }) => JSX
    }
/>
```

Check out the [example](https://opensource.appbase.io/playground) on playground.

All the parameters received are very similar to the `DataSearch` besides `categories` which receives all the categories for the current query as an array of objects having the `key` attribute and the `doc_count` so you can compose a custom UI accordingly.


## Customizing individual suggestions

Similar to the `onSuggestion` prop usage but supports extra keys for `title`, `image` and `description`. Both title and description support highlighting. In order to take control of rendering specify a `label` key just like `onSuggestion` supports (this has the highest precedence while rendering).

```js
<DataSearch
  ...
  renderSuggestion={(suggestion) => ({
    title: suggestion.source.original_title,
    description: suggestion.source.authors,
    image: suggestion.source.image,
    value: suggestion.source.original_title,  // required
    // optionally render the entire JSX using label
    label: <JSX>,  // has higher precedence over title, description, image
    source: suggestion.source  // for onValueSelected to work with onSuggestion
  })}
/>
```
