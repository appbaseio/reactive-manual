{"bigh3": true}

## Installation

### Step 1: Install via NPM

We will fetch the `ReactiveMaps` module first from npm.

```js
npm install --save @appbaseio/reactivemaps
```

### Step 2: Add browser related styles

ReactiveMaps uses Google Maps under the hood. All you need to add that is a simple &lt;script> in the &lt;head> element.

```html
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=Your_key_here"></script>
```

### Step 3: Add your CSS framework of choice

Now let's add a CSS framework, we will pick materialize for this guide. You can pick any CSS framework of your liking.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
```

### Step 4: Add ReactiveMap's style file

All ReactiveMap styles are present in a single file. We will import it in the &lt;head> element as well

```html
<link rel="stylesheet" href="node_modules/@appbaseio/reactivemaps/dist/css/style.min.css">
```

You're now all set to create an app with ReactiveMaps!

Read the [getting started](http://opensource.appbase.io/reactivemaps-manual/v1/getting-started/Start.html) guide to find out how to build your first ReactiveMap based app.
