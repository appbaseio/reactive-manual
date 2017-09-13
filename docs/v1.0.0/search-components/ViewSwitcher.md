{"bigh3": true}

{% raw %}

# ViewSwitcher

![Image to be displayed](https://i.imgur.com/n52BX8F.png)

`ViewSwitcher` creates a switchable UI component which can toggle different views, suited for showing same data in different ways for example a swtichable view for `ResultCard` and `ResultList`.

Example uses:

* showing e-commerce search results in a switchable card layout which can be switched to a list layout.

## Usage

```js
<ViewSwitcher
	data={[
		{
			label: "Grid",
			value: "rbc-resultcard"
		},
		{
			label: "List",
			value: "rbc-resultlist"
		}
	]}
	defaultSelected="rbc-resultcard"
/>
```

## Props

- **data** `Array`  
    an array of objects each with a **label** and **value** to define different views.
- **defaultSelected** `String` [optional]
    the default view for the ViewSwitcher, matches the **value** in an object in the `data` array.

## Syntax

<p data-height="500" data-theme-id="light" data-slug-hash="xLoQjX" data-default-tab="js" data-user="divyanshu013" data-embed-version="2" data-pen-title="ViewSwitcher docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/xLoQjX/">ViewSwitcher docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Styles

All reactivebase components are `rbc` namespaced.

TBD
![Annotated image](https://i.imgur.com/n52BX8F.png)

## Extending

`ViewSwitcher` component can be extended to
1. customize the look and feel with `style` prop,

```js
<ViewSwitcher
  ...
  // specify any number of custom styles.
  style={{"paddingBottom": "10px"}}
/>
```

- **style** `Object` [optional]  
    CSS Styles to be applied to the **ResultCard** component.

## Examples

<p data-height="500" data-theme-id="light" data-slug-hash="xLoQjX" data-default-tab="result" data-user="divyanshu013" data-embed-version="2" data-pen-title="ViewSwitcher docs example" class="codepen">See the Pen <a href="https://codepen.io/divyanshu013/pen/xLoQjX/">ViewSwitcher docs example</a> by Divyanshu (<a href="https://codepen.io/divyanshu013">@divyanshu013</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [ViewSwitcher basic usage](../playground/?selectedKind=search%2FViewSwitcher&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

{% endraw %}
