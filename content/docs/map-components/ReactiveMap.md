---
id: reactivemap
title: "ReactiveMap"
layout: docs
sectionid: docs
permalink: map-components/reactivemap.html
prev: map-components/placessearch.html
prevTitle: "PlacesSearch"
---

![ReactiveMap Image](https://i.imgur.com/faAZ5v8.png)

A `ReactiveMap` creates a data-driven map UI component. It is the key component for build map based experiences.

Example uses:
* showing a map of user checkins by city and topics for powering discovery based experiences.
* displaying restaurants filtered by a nearby distance query on a map.

### Usage

#### Basic Usage

```js
<ReactiveMap
    componentId="MapUI"
    dataField="location"
    title="Venue Location Map"
/>
```

#### Usage With All Props

```js
<ReactiveMap
    componentId="MapUI"
    dataField="location"
    title="Venue Location Map"
    size={100}
    defaultZoom={13}
    defaultCenter={{ lat: 37.74, lng: -122.45 }}
    showMapStyles={true}
    defaultMapStyle="Standard"
    showMarkerCluster={true}
    showSearchAsMove={true}
    searchAsMove={true}
    onPopoverClick={this.onPopoverClick}

    stream={true}

    // 'react' defines when and how the map component should update
    react={{
      and: "CitySensor"
    }}

    // map events
    onData={this.onData}

    // less useful props
    autoCenter={true}
/>
```

### Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    DB data field to be connected to the component's UI view, usually of a geopoint (i.e. location) data type and used for rendering the markers on the map.
- **title** `String or HTML` [optional]  
    title of the component to be shown in the UI.
- **size** `Number` [optional]  
    number of results to show in the map view, can be a number in the range [1, 1000]. Defaults to 100.
- **defaultZoom** `Number` [optional]  
    preset map's zoom level, accepts integer values between [0, 20]. 0 is the minimum zoom level, where you can see the entire globe. 20 is the maximum zoom level. Defaults to 13.
- **defaultCenter** `Object` [optional]  
    preset map's center position by specifying an object with valid `lat` and `lng` values.
- **center** `Object` [optional]  
    set map's center position by specifying an object with valid `lat` and `lng` values.
- **showMapStyles** `Boolean` [optional]  
    whether to show map styles dropdown picker in the map UI. Defaults to `true`.
- **defaultMapStyle** `String` [optional]  
    preset a map style for the map UI. Available options include "Standard", "Blue Essence", "Blue Water", "Flat Map", "Light Monochrome", "Midnight Commander", "Unsaturated Browns".
- **showMarkers** `Boolean` [optional]  
    whether to show the markers on the map, defaults to `true`. Sometimes, it doesn't make sense to display markers (when building a heatmap or weather map or a directions navigation map)
- **defaultPin** `String` [optional]  
    URL of the default marker pin image to be shown. It comes with a default image. Should only be set if you wish to use a custom marker.
- **showMarkerCluster** `Boolean` [optional]  
    whether to aggregate and form a cluster of nearby markers. Defaults to `true`.
- **showSearchAsMove** `Boolean` [optional]  
    whether to show the *Search As I Move* checkbox in the UI. Defaults to `true`.
- **searchAsMove** `Boolean` [optional]  
    whether to set the *Search As I Move* checkbox. Defaults to `false`.
- **onPopoverClick** `function` [optional]  
    a function that takes one argument for getting a marker's data and returns an HTML markup to be displayed in the popover box.
- **stream** `Boolean` [optional]  
    whether to stream new result (aka realtime view) updates in the UI. Defaults to `false`.
- **react** `Object`
     a dependency object defining how this component should react based on the state changes in the dependent sensor components. You can read more about it [here](/advanced/react.html).
- **autoCenter** `Boolean` [optional]  
    whether to auto center the map based on the geometric center of all the location markers. Defaults to `false`.
<!-- - **autoMarkerPosition** `Boolean` [optional]  
    whether to set the rotation angle of the marker image based on the delta changes in its location, useful when displaying realtime traffic data. Defaults to `false`. -->
- **className** `String`  
    CSS class to be injected on the component container.
- **style** `Object`  
    CSS style object to be applied to the `ReactiveMap` component.
- **onData** `function`  
    event fired when one or more markers are indexed, updated or removed from the map. It takes an object with the following formats (`label`, `icon`, `custom`):

```js
// To render the given text in the marker 
onData={result => ({
    label: result.title,
})}

// To render a marker image 
onData={result => ({
    icon: 'https://i.imgur.com/NHR2tYL.png',
})}

// To render a custom markup (as label) in the marker position 
onData={result => ({
    custom: (<div>{result.mag}</div>),
})}
```


### Syntax

<br>

<iframe height='500' scrolling='no' title='ReactiveMap docs example' src='//codepen.io/sids-aquarius/embed/qXvWpo/?height=500&theme-id=light&default-tab=js&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/sids-aquarius/pen/qXvWpo/'>ReactiveMap docs example</a> by Siddharth Kothari (<a href='https://codepen.io/sids-aquarius'>@sids-aquarius</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Styles

![Annotated Image](https://i.imgur.com/YPRoLch.png)

### Examples

<br>

<iframe height='500' scrolling='no' title='ReactiveMap docs example' src='//codepen.io/sids-aquarius/embed/qXvWpo/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/sids-aquarius/pen/qXvWpo/'>ReactiveMap docs example</a> by Siddharth Kothari (<a href='https://codepen.io/sids-aquarius'>@sids-aquarius</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. [ReactiveMap with all the default props](https://opensource.appbase.io/playground/?knob-title=Reactive%20maps&knob-URLParams%20%28not%20visible%20in%20storybook%29=true&knob-showMarkers=true&knob-filterLabel=GeoDistance%20filter&knob-defaultSelected=%7B"label"%3A"Less%20than%20100%20miles"%2C"location"%3A"London"%7D&knob-rangeLabels=%7B"start"%3A"Start"%2C"end"%3A"End"%7D&knob-range=%7B"start"%3A0%2C"end"%3A50%7D&knob-autoMarkerPosition=true&knob-streamMarkerImage=https%3A%2F%2Fcdn.rawgit.com%2Fappbaseio%2Freactivemaps%2F6500c73a%2Fdist%2Fimages%2Fstream-pin.png&knob-showMapStyles=false&knob-URLParams%20%28not%20visible%20on%20storybook%29=true&knob-showFilter=true&knob-autoMapRender=false&knob-placeholderDropdown=Select%20radius&knob-stepValue=1&knob-showPopoverOn=mouseover&knob-showMarkerCluster=true&knob-streamTTL=5&knob-setSearchAsMove=false&knob-defaultPin=https%3A%2F%2Fcdn.rawgit.com%2Fappbaseio%2Freactivemaps%2F6500c73a%2Fdist%2Fimages%2Fhistoric-pin.png&knob-size=100&knob-autoLocation=true&knob-streamAutoCenter=true&knob-unit=mi&knob-autoCenter=true&knob-placeholder=Search%20Location&knob-defaultZoom=5&knob-showSearchAsMove=true&knob-defaultMapStyle=Standard&knob-defaultCenter=%7B"lat"%3A37.74%2C"lng"%3A-122.45%2C"lng"%3A-122.45%7D&selectedKind=map%2FReactiveMap&selectedStory=Basic&full=0&down=1&left=1&panelRight=0&downPanel=storybooks%2Fstorybook-addon-knobs)

2. [ReactiveMap with a search sensor on the map](https://opensource.appbase.io/reactivemaps/examples/meetupblast/)

3. [ReactiveMap with historical and realtime data](https://opensource.appbase.io/reactivemaps/examples/transport/)

4. [ReactiveMap with events example](https://opensource.appbase.io/reactivemaps/examples/events/)

5. [ReactiveMap with weather data](https://opensource.appbase.io/reactivemaps/examples/weather/)
