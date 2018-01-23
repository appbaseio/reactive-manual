---
id: guides
title: "Advanced Guides"
layout: docs
sectionid: docs
permalink: advanced/guides.html
prev: advanced/writingdata.html
prevTitle: "Writing and Editing Data"
next: advanced/comparison.html
nextTitle: "Comparison"
redirect_from:
    - "guides"
    - "advanced/guides"
---

## beforeValueChange

Most filter components in ReactiveSearch provides a `beforeValueChange` prop. It is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.

> Note
>
> Most of the time your needs can be solved using `onValueChange`. If you absolutely need `beforeValueChange` you should ensure that you don't pass a function which takes a very long time to resolve the promise. The component goes in a **locked** state when using `beforeValueChange` and before the promise is resolved. This means all the state updates are suspended for the component.