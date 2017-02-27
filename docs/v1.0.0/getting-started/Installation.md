{"bigh3": true}

## Installation

### Step 1: Install reactivemaps via NPM

We will fetch the [`reactivemaps`](https://www.npmjs.com/package/@appbaseio/reactivemaps) module first from npm.

```js
npm install --save @appbaseio/reactivemaps
```

### Step 2: Add Google Maps JS lib

ReactiveMaps uses Google Maps to render the maps. For including Google Maps, add the following  &lt;script> tag in the &lt;head> element.

```html
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=Your_key_here"></script>
```

### Step 3: Add ReactiveMap's style file

All ReactiveMap styles are present in a single file. We will import it in the &lt;head> element as well

```html
<link rel="stylesheet" href="node_modules/@appbaseio/reactivemaps/dist/css/style.min.css">
```

If you haven't included any style framework, we recommend adding materialize. 

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
```

---

You're now all set to create an app with ReactiveMaps!

Next, read the [getting started](v1.0.0/getting-started/Start.html) guide to find out how to build your first ReactiveMap based app.
