---
id: reactivesearch-native-maps
title: "ReactiveSearch Native Maps"
layout: tutorial
sectionid: getting-started
permalink: getting-started/reactivesearch-native-maps.html
prev: getting-started/reactivesearch.html
prevTitle: "ReactiveSearch Quickstart"
next: getting-started/reactivesearch-rn.html
nextTitle: "Setup with React Native CLI"
redirect_from:
    - "getting-started/reactivesearch-native-maps"
---

With `v0.8.0` and above, we have added support for maps with Reactivesearch Native as ReactiveMap component.

## Get started with ReactiveMap with react-native:

Through out this tutorial, we will be using CRNA to setup the project. If you wish to use `Reactivemap` with any existing project with no dependency on `Expo`, we'd recommend you to install it and set up the project with Expo, as we only support Reactivemap with `Expo` as of now.

### Step 1: Create Boilerplate with CRNA

For this quickstart guide, we will use [Create React Native App (CRNA)](https://github.com/react-community/create-react-native-app) with [Expo client](https://expo.io/tools#client).

```bash
create-react-native-app my-awesome-map-search && cd my-awesome-map-search
```

Install the `@appbaseio/reactivesearch-native` package:

```bash
yarn add @appbaseio/reactivesearch-native
```

Now before we go ahead and add our first component, we need to add the map keys to our setup. Using react-native-maps with Expo makes the setup and installation trivial, we simply need to specify the google-maps key in the expo configuration:

Your `app.json` should look like this:

```js
{
  "expo": {
    "sdkVersion": "27.0.0", // version is not relevant, gets autoset at the time of installation
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "<ADD_YOUR_KEY_HERE>"
        }
      }
    },
    "ios": {
      "config": {
        "googleMapsApiKey": "<ADD_YOUR_KEY_HERE>"
      }
    }
  }
}
```

And now, you're all set. You can read more about it in detail [here](https://docs.expo.io/versions/latest/sdk/map-view).

### Step 2: Adding first component

Lets add our first ReactiveSearch component: [ReactiveBase](/getting-started/reactivebase.html), it is a backend connector where we can configure the Elasticsearch index / authorization setup.

We will demonstrate creating an index using [appbase.io](https://appbase.io) service, although you can use any Elasticsearch backend within ReactiveBase.

![create an appbase.io app](https://i.imgur.com/r6hWKAG.gif)

**Caption:** For the example that we will build, the app is called **earthquake** and the associated read-only credentials are **OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e**. You can browse and clone the dataset into your own app from [here](https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAALbAAAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsksm3uHy0SJtl-GeS5hzLniAOGDpQVx6D3EoHDw86D_nWcj3PFS3n-DeQd1AOGTWMc5BFSwDVWM1rIpc6OlpeC62Gy4w2bVXsGB02GpXZQAh7epRyt_JV9IiqJyJgzW4vnZefow_cv_nao-NILgskqGbL7TKfAlU6TNHrnj6tr0m0GfAmwInsE1EsphIl_PBW7bxGvDzAfZF13Ec1QA8dB_-a82A&editable=false).


![Dataset](https://i.imgur.com/vKmqxdP.png)

We will update our `src/App.js` file to add ReactiveBase component.

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ReactiveBase } from '@appbaseio/reactivesearch-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ReactiveBase
          app="earthquake"
          credentials="OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e"
          type="places"
        >
        </ReactiveBase>
      </View>
    );
  }
}

```

### Step 3: Adding the Map Component

Next we will look at Reactivemap component:

```js
<ReactiveMap
    componentId="map"
    dataField="location"
    onPopoverClick={item => (
        <Text>Run before it exceeds {item.mag}</Text>
    )}
/>
```

For its prop usage, check out Reactivemaps [docs](/components/reactivemap.html).


Finally, your app should look like this:

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ReactiveBase, ReactiveMap } from '@appbaseio/reactivesearch-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ReactiveBase
          app="earthquake"
          credentials="OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e"
          type="places"
        >
          <View style={{ flex: 1 }}>
            <ReactiveMap
              componentId="map"
              dataField="location"
              onPopoverClick={item => (
                <Text>Run before it exceeds {item.mag}</Text>
              )}
            />
          </View>
        </ReactiveBase>
      </View>
    );
  }
}

```

You can [try the demo here](https://snack.expo.io/@metagrover/reactivemap-with-reactivesearch-native) instantly, and check out [Reactivemaps documentation](/components/reactivemap.html) for further customisations.
