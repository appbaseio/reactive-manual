---
id: selectedfilters
title: "SelectedFilters"
layout: docs
sectionid: docs
permalink: base-components/selectedfilters.html
prev: basic-components/datacontroller.html
prevTitle: "DataController"
next: list-components/singlelist.html
nextTitle: "List Components: SingleList"
redirect_from:
    - 'basic-components/selectedfilters.html'
    - 'base-components/selectedfilters'
    - 'selectedfilters'
---

![Image to be displayed](https://i.imgur.com/vt18TFE.png)

`SelectedFilters` creates a selectable filter UI view displaying the current selected values from other components. This component is useful for improving selection accessibility of other components.

Example uses:
* displaying all the user selected facet filters together in the main view area for better accessibility.
* building mobile responsive views where it is not practical to show all the UI components in the main view.

## Usage

### Basic Usage

```js
<SelectedFilters />
```

### Props

The `SelectedFilters` component itself doesn't have any props.

Facet type components have a prop `showFilter` (defaults to `true`) which can be used to control whether the component's selected state appears in the SelectedFilters component. There is also a `filterLabel` prop which controls how that component is displayed.

As an example, check [MultiList usage](/basic-components/multilist.html#usage) to see how `showFilter` and `filterLabel` can be used.

### Demo

<br />

<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/SelectedFilters" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Styles

`SelectedFilters` component supports `innerClass` prop with the following keys:  

- `button`
 
Read more about it [here](/theming/class.html).

## Extending

`SelectedFilters` component can be extended to customize the look and feel with `className`, `style`.

```js
<SelectedFilters
  className="custom-class"
  style={{"paddingBottom": "10px"}}
/>
```

- **className** `String`  
    CSS class to be injected on the component container.
- **style** `Object`
    CSS styles to be applied to the **SelectedFilters** component.

### Examples

1. [Filters with all the default props](https://opensource.appbase.io/playground/?selectedKind=search%2FSelectedFilters&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [List component with filters disabled](https://opensource.appbase.io/playground/?knob-showFilter=false&selectedKind=search%2FSelectedFilters&selectedStory=With%20no%20filter&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [List component with custom filterLabel](https://opensource.appbase.io/playground/?knob-showFilter=false&knob-filterLabel=City%20filter&selectedKind=search%2FSelectedFilters&selectedStory=With%20filterLabel&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [Playground (with all knob actions)](https://opensource.appbase.io/playground/?knob-showFilter=true&knob-filterLabel=City%20filter&selectedKind=search%2FSelectedFilters&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
