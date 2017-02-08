## Installation


### Step 1: Install via NPM

`ReactiveMaps` module is divided into two libraries to keep separation of concerns. ReactiveMaps itself consists of components related to maps and related search like [`GeoDistanceSlider`](https://opensource.appbase.io/reactivemaps/manual/v1/map-components/GeoDistanceSlider.html), [`PlacesSearch`](https://opensource.appbase.io/reactivemaps/manual/v1/map-components/PlacesSearch.html) and [`ReactiveMap`](https://opensource.appbase.io/reactivemaps/manual/v1/map-components/ReactiveMap.html) while `ReactiveBase` consists of generic UI components like Lists, Ranges, Generic Search, Range Slider, Button Groups, Calendars, Feeds, etc.

Let's install both!

```js
npm install --save @appbaseio/reactivebase
npm install --save @appbaseio/reactivemaps
```

### Step 2: Add browser related styles

ReactiveMaps uses Google Maps under the hood. All you need to add that is a simple &lt;script> in the &lt;head> element.

```html
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=Your_key_here"></script>
```

We will also add the styles file from the related module in the &lt;head> element like

```html
<link rel="stylesheet" href="node_modules/@appbaseio/reactivebase/dist/css/style.min.css">
<link rel="stylesheet" href="node_modules/@appbaseio/reactivemaps/dist/css/style.min.css">
```

### Step 3: Add your CSS framework of choice

Depending on your choice of CSS library, you can then add your CSS framework. Let's pick materialize for this guide. We will add a link like this

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
```

You're all set!

Read the [getting started](http://opensource.appbase.io/reactivemaps-manual/v1/getting-started/Start.html) guide to find out how to build your first ReactiveMap based app.
