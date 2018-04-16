---
id: reactivesearch-rn
title: "ReactiveSearch with React Native CLI"
layout: tutorial
sectionid: getting-started
permalink: getting-started/reactivesearch-rn.html
prev: getting-started/reactivesearch.html
prevTitle: "ReactiveSearch Quickstart"
next: getting-started/data.html
nextTitle: "Importing Data"
redirect_from:
    - "getting-started/reactivesearch-rn"
---

In this section I'll use the `react-native-cli` instead of expo to setup the dev environment. You can follow a similar approach if you wish to use ReactiveSearch outside expo environment. First lets get started by installing `react-native-cli` by following the instructions from the [react-native docs](https://facebook.github.io/react-native/docs/getting-started.html) for your OS. Now we can follow the same steps as we did for expo setup.

### Step 0: Install ReactiveSearch Native

If you have an existing project, you can install [`reactivesearch-native`](https://www.npmjs.com/package/@appbaseio/reactivesearch-native) module using yarn or npm.

```bash
yarn add @appbaseio/reactivesearch-native
```

or

```bash
npm install @appbaseio/reactivesearch-native
```

If you are starting from scratch, follow the next steps on getting started with reactivesearch-native.

### Step 1: Create Boilerplate with RNCLI

We will create a search UI based on a *books dataset* with ReactiveSearch components.

![Image](https://imgur.com/zAXd5uQ.png)

**Caption:** Final image of how the app will look.

```bash
react-native init myproject && cd myproject
```

Install the `@appbaseio/reactivesearch-native` repo.

```bash
yarn add @appbaseio/reactivesearch-native
```

### Step 2: Adding the first component

Lets add our first ReactiveSearch component: [ReactiveBase](/getting-started/reactivebase.html), it is a backend connector where we can configure the Elasticsearch index / authorization setup.

We will demonstrate creating an index using [appbase.io](https://appbase.io) service, although you can use any Elasticsearch backend within ReactiveBase.

![create an appbase.io app](https://i.imgur.com/r6hWKAG.gif)

**Caption:** For the example that we will build, the app is called **good-books-ds** and the associated read-only credentials are **nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d**. You can browse and clone the dataset into your own app from  [here](https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAKJAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsyzhBoa6J5YHVVPvvStg3duFL_9lBQxNAUEiS2LxrmQIi48IYsLycilGizdEqIf-Z3FUOIdIqHULMVrBqKtL5qUJx1gsOpt0WbuAhQS8qMoK8IdlqoG0tr-8UHi3sau8zMqY64fzpXCehrrPI4SNk8VTbiMsIZhduWAX4hCATwCBWfvrJqfAoiqKGt9zyTfsxLU7CbxGxE6__je7GeiC7UaPdD8YDeYC7eRxv-8JF1j3ysqY_Lkqc6hZAtUm9dN1Mg7O2uJ1MJxZyZWCmnz3ovLxz81T3C6KJZXI0OFjB5ll22UJm0iEaxN9NgY8yT9XOuK1k_90Fp4A).

Lets update our `App.js` file to add ReactiveBase component.

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReactiveBase } from '@appbaseio/reactivesearch-native';

export default class App extends React.Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
      >
        <View style={styles.container}>
            <Text>Hello ReactiveSearch!</Text>
        </View>
      </ReactiveBase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

Now start the packager by running the `yarn start` command. In a different terminal start your emulator/device by running either `react-native run-ios` or `react-native run-android`. While you wait for the packager to finish, get some coffee :)

![Screenshot](https://imgur.com/yEVncXC.png)

### Step 3: Adding Filter and Result Components

For this app, we will be using [DataSearch](/components/datasearch.html) component for filtering the dataset and [ReactiveList](/components/reactivelist.html) component for showing the search results.

Lets add them within the ReactiveBase component. But before we do that, lets look at the important props for each.

```js
<DataSearch
  componentId="searchbox"
  dataField={[
    'original_title',
    'original_title.search',
    'authors',
    'authors.search',
  ]}
  placeholder="Search for books"
/>
```

The [**DataSearch**](/components/datasearch.html) component we describe above creates a searchbox UI component that queries on the specifield `dataField`(s) in the dataset.

Next, we need a component to show the matching results. [**ReactiveList**](/components/reactivelist.html) does exactly this.

```js
<ReactiveList
  componentId="results"
  dataField="original_title"
  size={7}
  showResultStats={false}
  pagination={true}
  react={{
    and: "searchbox"
  }}
  onData={(res) => (
    <View style={styles.result}>
      <Image source={{ uri: res.image }} style={styles.image} />
      <View style={styles.item}>
        <Text style={styles.title}>{res.original_title}</Text>
        <Text>{res.authors}</Text>
      </View>
    </View>
  )}
/>
```

The `react` prop here specifies that it should construct a query based on the current selected values of searchbox and ratingsfilter components. Every time the user changes the input value, a new query is fired -- you don't need to write a manual query for any of the UI components here, although you can override it via `customQuery` prop.

ReactiveSearch uses [native-base](https://docs.nativebase.io/docs/GetStarted.html) which uses some fonts which can be included by running (check [this](https://github.com/GeekyAnts/NativeBase/issues/72) issue if you are running into problems related to fonts):

```bash
react-native link react-native-vector-icons
```

Now, we will put all the things together to create the final view. If you're running into issues try restarting the packager with `--reset-cache` flag:

```bash
yarn start --reset-cache
```

The final app will look like:

```js
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import {
  ReactiveBase,
  DataSearch,
  ReactiveList
} from '@appbaseio/reactivesearch-native';

export default class App extends React.Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
      >
        <ScrollView>
          <View style={styles.container}>
            <DataSearch
              componentId="searchbox"
              dataField={[
                'original_title',
                'original_title.search',
                'authors',
                'authors.search',
              ]}
              placeholder="Search for books"
            />
            <ReactiveList
              componentId="results"
              dataField="original_title"
              size={7}
              showResultStats={false}
              pagination={true}
              react={{
                and: "searchbox"
              }}
              onData={(res) => (
                <View style={styles.result}>
                  <Image source={{ uri: res.image }} style={styles.image} />
                  <View style={styles.item}>
                    <Text style={styles.title}>{res.original_title}</Text>
                    <Text>{res.authors}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ReactiveBase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 25
  },
  image: {
    width: 100,
    height: 100
  },
  result: {
    flexDirection: 'row',
    width: '100%',
    margin: 5,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  title: {
    fontWeight: 'bold'
  }
});
```

If you have followed along so far, you should be able to see the final app:  

![Image](https://imgur.com/zAXd5uQ.png)

The above code is available in [this](https://github.com/appbaseio-apps/reactivesearch-native-starter-rncli) github repo.

In the next section we explain about **importing data**.
