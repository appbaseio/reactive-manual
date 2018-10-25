---
id: analytics
title: "Analytics"
layout: docs
sectionid: docs
permalink: advanced/analytics.html
prev: advanced/guides.html
prevTitle: "Guides"
redirect_from:
    - "analytics"
    - "advanced/analytics"
---


You can take advantage of search and click analytics when using [Appbase.io](https://appbase.io) as a backend with ReactiveSearch. Search analytics work out of the box with `analytics` prop in `ReactiveBase`. This recipe explains how to implement click analytics for your app.

## Click Analytics

Click analytics have to be wired into the result components. Its supported in `ReactiveList`.When using `ReactiveList`, the `onData` or `onAllData` prop|scoped-slot receives an extra property to make click analytics work which you have to invoke with `onClick`.

```html
<reactive-list
    ...
    <div slot="onData" scoped-slot="{ item,  triggerClickAnalytics}">
        <div onClick="triggerClickAnalytics">{{ item.title }}</div>
    </div>
>
```

With `onAllData({ results, streamResults, loadMore, analytics })` the `analytics` property receives an object having the `base` value and `triggerClickAnalytics` function. When rendering your component using `onAllData` you have to read the `analytics` object and call the `triggerClickAnalytics` after adding the `base` value to the `index` (`base` is calculated internally from `currentPage * size`). `index` is assumed to start from `0`. Example:

```html
<reactive-list
    ...
    <div slot="onAllData" scoped-slot=`
        { results, streamResults, loadMore, { base, triggerClickAnalytics }}
    `>
        <div 
            v-for="(result, index) in results" 
            @click="() => triggerClickAnalytics(base + index)"
        >
            {{ result.title }}
        </div>
    </div>
>
```