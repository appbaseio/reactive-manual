{"bigh3": true}

## SelectedFilters

![Image to be displayed](https://i.imgur.com/DyW5jJ2.png)

`SelectedFilters` creates a selectable filter UI view displaying the current selected values from other components. This component is useful for improving selection accessibility of other components.

Example uses:
* displaying all the user selected facet filters together in the main view area for better accessibility.
* building mobile responsive views where it is not practical to show all the UI components in the main view.

### Usage

#### Basic Usage

```js
<SelectedFilters />
```

### Props

The `SelectedFilters` component itself doesn't have any props.

Facet type components have a prop `showFilter` (defaults to `true`) which can be used to control whether the component's selected state appears in the SelectedFilters component. There is also a `filterLabel` prop which controls how that component is displayed.

As an example, check [MultiList usage](/v1.0.0/components/MultiList.html#-multilist-usage) to see how `showFilter` and `filterLabel` can be used.

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/DzFn900.png)

### Extending

`SelectedFilters` component can be extended to customize the look and feel with `componentStyle`.

```
<SelectedFilters
  componentStyle={{"paddingBottom": "10px"}}
/>
```

- **componentStyle** `Object`
    CSS styles to be applied to the **TextField** component.
