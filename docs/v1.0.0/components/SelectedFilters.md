{"bigh3": true}

# SelectedFilters

![Image to be displayed](https://i.imgur.com/DyW5jJ2.png)

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

As an example, check [MultiList usage](v1.0.0/components/MultiList.html#-multilist-usage) to see how `showFilter` and `filterLabel` can be used.

### Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="ayMNZW" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="SelectedFilters docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/ayMNZW/">SelectedFilters docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Styles

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/DzFn900.png)

## Extending

`SelectedFilters` component can be extended to customize the look and feel with `style`.

```
<SelectedFilters
  style={{"paddingBottom": "10px"}}
/>
```

- **style** `Object`
    CSS styles to be applied to the **TextField** component.

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="ayMNZW" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="SelectedFilters docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/ayMNZW/">SelectedFilters docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [Filters with all the default props](../playground/?selectedKind=search%2FSelectedFilters&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [List component with filters disabled](../playground/?knob-showFilter=false&selectedKind=search%2FSelectedFilters&selectedStory=With%20no%20filter&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

3. [List component with custom filterLabel](../playground/?knob-showFilter=false&knob-filterLabel=City%20filter&selectedKind=search%2FSelectedFilters&selectedStory=With%20filterLabel&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

4. [Playground (with all knob actions)](../playground/?knob-showFilter=true&knob-filterLabel=City%20filter&selectedKind=search%2FSelectedFilters&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)
