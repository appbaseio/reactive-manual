---
id: reactivesearch
title: "ReactiveSearch Quickstart"
layout: tutorial
sectionid: getting-started
permalink: getting-started/reactivesearch.html
next: getting-started/data.html
nextTitle: "Importing Data"
redirect_from:
    - "getting-started/"
    - "getting-started/reactivesearch"
    - "install"
    - "quickstart"
---


### Step 0: Create Boilerplate with Vue Cli
We can either add ReactiveSearch to an existing app or create a boilerplate app with [Vue Cli](https://cli.vuejs.org/guide/creating-a-project.html#vue-create). For this quickstart guide, we will use the Vue Cli.

```bash
vue create my-awesome-search && cd my-awesome-search
```

### Step 1: Install ReactiveSearch

We will fetch and install [`reactivesearch-vue`](https://www.npmjs.com/package/@appbaseio/reactivesearch-vue) module using yarn or npm.

```bash
yarn add @appbaseio/reactivesearch-vue
```

or

```bash
npm install @appbaseio/reactivesearch-vue
```
#### Use ReactiveSearch's Components

### Fully Import
```js
import Vue from 'vue'
import ReactiveSearch from '@appbaseio/reactivesearch-vue'
import App from './App'
Vue.config.productionTip = false

Vue.use(ReactiveSearch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```
The above imports ReactiveSearch entirely.

###  Only import the components you need
```js
import Vue from 'vue'
import { ReactiveBase } from '@appbaseio/reactivesearch-vue'
import App from './App'

Vue.config.productionTip = false

Vue.component(ReactiveBase.name, ReactiveBase)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
``` 

---

### Step 2: Adding the first component

Lets add our first ReactiveSearch component: [ReactiveBase](/getting-started/reactivebase.html), it is a backend connector where we can configure the Elasticsearch index / authorization setup.

We will demonstrate creating an index using [appbase.io](https://appbase.io) service, although you can use any Elasticsearch backend within ReactiveBase.

![create an appbase.io app](https://i.imgur.com/r6hWKAG.gif)

**Caption:** For the example that we will build, the app is called **car-store** and the associated read-only credentials are **cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c**. You can browse and clone the dataset into your own app from  [here](https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJrAAAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsta-jK5IyCHPDQHd0vFqnW3IIPckWf81EYz6c9_C1aGQkSbGptS4zcGd_lZI2UVGi7gEHVqkGAZzrbpw4o5m3TwqV4NeFg28vpiRpym93H_qNV7y_gPH___dHIAA).

We will update our `src/App.js` file to add ReactiveBase component.
```js
import Vue from 'vue'
import { ReactiveBase } from '@appbaseio/reactivesearch-vue'

Vue.config.productionTip = false

Vue.component(ReactiveBase.name, ReactiveBase)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { ReactiveBase },
  template: 
	  `<ReactiveBase 
			app="car-store" 
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
			// other components will go here.
			<div>
				Hello ReactiveSearch!
			</div>
		</ReactiveBase>`
})
```

This is how the app should look after running the `yarn start` command.

![](https://i.imgur.com/M7AAhTh.png)

---
