---
id: innerprops
title: "innerProps"
layout: docs
sectionid: innerprops
permalink: advanced/innerprops.html
prev: advanced/performance.html
prevTitle: "Performance"
next: advanced/theming.html
nextTitle: "Theming"
redirect_from:
    - "advanced/innerprops"
    - "innerprops"
---

ReactiveSearch components accept a prop `innerProps` which can be utilized for passing props to internal components as specified in the **Props** section of each component.

## Usage

You can pass an object via the `innerprops` prop to pass additonal props like:

```js
innerProps={{
    icon: {
        ...
    },
    button: {
        ...
    }
}}
```

## Examples

This example uses the `innerProps` prop to pass some additional props to the internal [Icon](http://docs.nativebase.io/Components.html#icon-def-headref) component of [TextField](/components/TextField.html).

```js{3-8}
<TextField
    ...
    innerprops={{
        icon: {
            color: 'tomato',
            fontSize: 13
        }
    }}
/>
```
