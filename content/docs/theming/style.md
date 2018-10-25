---
id: style
title: "Customizing Styles"
layout: docs
sectionid: style
permalink: theming/style.html
prev: result-components/reactivelist.html
prevTitle: "Reactive List"
next: theming/class.html
nextTitle: "className injection"
redirect_from:
    - 'advanced/styleguide.html'
    - 'theming/style'
    - 'style'
    - 'styles'
---

You can add a `className` to any component which gets applied to the component at the root level. You may also inject `class` to the inner levels using the `innerClass` prop. You can read more about it in the [next section](/theming/class.html).

## Examples

### Using the className prop

```js{3}
<data-search
    ...
    className="search-box"
/>
```