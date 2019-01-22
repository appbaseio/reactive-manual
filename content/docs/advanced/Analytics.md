---
id: analytics
title: "Search and Click Analytics"
layout: docs
sectionid: docs
permalink: advanced/analytics.html
prev: advancedguides.html
prevTitle: "Advanced Guides"
next: writingdata.html
nextTitle: "Writing and Editing Data"
redirect_from:
    - "analytics"
    - "advanced/analytics"
---


You can take advantage of search and click analytics when using [Appbase.io](https://appbase.io) as a backend with ReactiveSearch. Search analytics work out of the box with `analytics` prop in `ReactiveBase`. This recipe explains how to implement click analytics for your app.

## Click Analytics

Click analytics have to be wired into the result components. Its supported in `ReactiveList`, `ResultCard` and `ResultList`. When using `ResultCard` or `ResultList` the click analytics will work on its own. However when using `ReactiveList`, the `render` or `renderAllData` prop receives two extra properties(`base` & `triggerClickAnalytics`) to make click analytics work which you have to invoke with `onClick`.

```js
<ReactiveList
    ...
    renderData={(data, triggerClickAnalytics) => (
        <div onClick={triggerClickAnalytics}>...</div>
    )}
>
```

When rendering your component using `renderAllData({ results, streamResults, loadMore, base, triggerClickAnalytics })` you have to call the `triggerClickAnalytics` after adding the `base` value to the `index` (`base` is calculated internally from `currentPage * size`). `index` is assumed to start from `0`. Example:

```js
<ReactiveList
    ...
    renderAllData={({
        results,
        base,
        triggerClickAnalytics
    }) =>
        results
            .map((item, index) => (
                <div
                    key={item._id}
                    onClick={() => triggerClickAnalytics(base + index)}
                >
                    ...
                </div>
            ))
    }
>
```
