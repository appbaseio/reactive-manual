{"bigh3": true}

## TagCloud

![Image to be displayed](https://i.imgur.com/cQgqeiv.png)

`TagCloud` creates a tag cloud UI component, also known as word cloud or weighted list in visual design. It is a visual representation of text data, typically used to depict tags on websites, or to visualize free form text.

Example uses:
* news websites and blogs displaying related tags to a current post.
* show an e-commerce listings filter of user generated tags.

### Usage

#### Basic Usage

```js
<TagCloud
  componentId="TagCloud01"
  appbaseField="cities"
/>
```

#### Usage With All Props

```js
<TagCloud
  componentId="CarCategorySensor"
  appbaseField="cities"
  title="City Cloud"
  size={32}
  showCount={true}
  multiSelect={true}
  defaultSelected=["ford", "galaxy"]
  initialLoader="Fetching cars.."
/>
```

### Props

- **componentId** `String`  
    unique id for the component, can be referenced in an actuator's `react` prop.
- **appbaseField** `String`  
    data field(s) to be mapped with the component's UI view.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    number of items to be displayed in the list. Defaults to 100.
- **multiSelect** `Boolean` [optional]  
    whether to support multiple tag selections. Defaults to `false`.
- **defaultSelected** `String or Array` [optional]  
    pre-select tag(s) from the tag cloud. An Array is accepted when *multiSelect* mode is enabled.
- **showCount** `Boolean` [optional]  
    show a count of the number of occurrences besides each list item. Defaults to `true`.
- **initialLoader** `String or HTML` [optional]  
    text or layout to be displayed while the data is being fetched, accepts `String` or `HTML` markup.


### CSS Styles API

All reactivebase components are `rbc` namespaced.

![Annotated image](https://i.imgur.com/Lz0NTnd.png)

### Examples

<p data-height="500" data-theme-id="light" data-slug-hash="pPPOXX" data-default-tab="result" data-user="sids-aquarius" data-embed-version="2" data-pen-title="ReactiveSearch TagCloud" class="codepen">See <a href="http://codepen.io/sids-aquarius/pen/pPPOXX/">ReactiveSearch TagCloud</a> on codepen.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

1. [Tag Cloud with default props](../playground/?selectedKind=s%2FTagCloud&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

2. [Tag Cloud with multi select](../playground/?knob-multiSelect=true&selectedKind=s%2FTagCloud&selectedStory=With+multiSelect&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

3. [Tag Cloud with defaultSelected](../playground/?knob-defaultSelected=Auckland&selectedKind=s%2FTagCloud&selectedStory=With+defaultSelected&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)

4. [Playground (with all knob actions)](../playground/?knob-multiSelect=true&knob-defaultSelected%5B0%5D=Auckland&knob-title=TagCloud%3A+City+Filter&knob-size=100&knob-showCount=true&selectedKind=s%2FTagCloud&selectedStory=Playground&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-knobs&filterBy=ReactiveSearch)
