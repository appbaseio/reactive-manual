---
id: style
title: "Customizing styles"
layout: docs
sectionid: style
permalink: advanced/style.html
prev: advanced/theming.html
prevTitle: "Theming"
next: advanced/innerprops.html
nextTitle: "innerProps"
redirect_from:
    - "advanced/style"
    - "style"
---

ReactiveSearch components can be styled using inline-styles or via the `innerStyle` prop. Each component supports a `style` prop which accepts an object. Find more info on the [react native docs](https://facebook.github.io/react-native/docs/style.html).

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

## innerStyle

The components support an additional `innerStyle` prop which accepts an object with keys specified in the **style** section of each component. It can be used for more granular styling of components. For example,

```js{3-7}
<DataSearch
    ...
    innerStyle={{
        icon: {
            backgroundColor: '#fefefe'
        }
    }}
/>
```
