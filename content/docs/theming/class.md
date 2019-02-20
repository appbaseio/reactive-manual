---
id: class
title: "ClassName Injection"
layout: docs
sectionid: class
permalink: theming/class.html
prev: theming/style.html
prevTitle: "Style"
next: advanced/mapping.html
nextTitle: "Advanced: Custom Queries"
redirect_from:
    - 'theming/class'
    - 'class'
---

ReactiveSearch components also allow `className` injections to overwrite the default styles for any component at a more granular level. This can be achieved with the `innerClass` prop.

## Usage

The `innerClass` prop accepts an object with keys as defined in the **Styles** section of each component. You can add the desired `className` value for each key and refer to them in your CSS.

## Examples

Here's an example of how to use `innerClass` with a [DataSearch](search-components/DataSearch.html) component:

![DataSearch annotated image](https://imgur.com/f20AvrZ.png)

```js
<DataSearch
    ...
    innerClass={{
        title: 'search-title',
        input: 'search-input'
    }}
/>
```

Then refer to them in your stylesheet.

```css
.search-title {
    color: red;
}

.search-input {
    border: 1px solid red;
}
```

## CSS Specificity

While writing styles using `innerClass`, it's important to keep [CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) in mind in order to get the desired results.

In order for your classes to overwrite the default classes of ReactiveSearch components we recommend combining the `innerClass` classes with a container class. This will also give the correct results without depending on the order of loading of the stylesheets in production. For example:

```js
<DataSearch
    ...
    innerClass={{
        title: 'search-title',
        input: 'search-input'
    }}
    className="search-field"
/>
```

Then refer to them in your stylesheet with the container class as:

```css
.search-field .search-title {
    font-size: 2rem;
}

.search-field .search-input {
    border: none;
}
```

> Note
>
> Here we're using the `className` prop in the component to act as the container class, however, depending on your needs, this can also be acheived by surrounding the ReactiveSearch component in a container `<div className="container-class">...</div>`