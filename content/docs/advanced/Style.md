---
id: style
title: "Customizing styles"
layout: docs
sectionid: style
permalink: advanced/style.html
prev: advanced/performance.html
prevTitle: "Performance"
next: advanced/build.html
nextTitle: "Building with Native Code"
redirect_from:
    - "advanced/style"
    - "style"
---

ReactiveSearch components can be styled using inline-styles. Each component supports a `style` prop which accepts an object. Find more info on the [react native docs](https://facebook.github.io/react-native/docs/style.html).

## Usage

You can pass the style object via the `style` prop like:

```js
{
    backgroundColor: 'coral',
    color: 'black'
}
```

## Examples

```js{3-5}
<DataSearch
    ...
    style={{
        backgroundColor: '#fefefe'
    }}
/>
```
