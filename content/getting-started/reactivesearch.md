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
    - "reactive-manual/getting-started/"
---

### Install ReactiveSearch

We will fetch the [`reactivesearch`](https://www.npmjs.com/package/@appbaseio/reactivesearch) module first from npm.

```bash
npm install --save @appbaseio/reactivesearch
```

or

```bash
yarn add @appbaseio/reactivesearch
```

### Creating an App

Now that we have gotten the installation part out of the way, let's create an app with reactivesearch.

If you already have a React boilerplate setup, then let's go ahead and import the components.

```javascript
import {
	ReactiveBase,
	CategorySearch,
	RatingsFilter,
	ResultCard
} from '@appbaseio/reactivesearch';
```

Next, we will create a [`ReactiveBase`](/getting-started/ReactiveBase.html) component for connecting our UI view with data, where the data source is an [appbase.io](https://appbase.io) app. This quick GIF will help with creating an app and getting its credentials.

![create an appbase.io app](https://i.imgur.com/r6hWKAG.gif)

```js
class App extends Component {

	// takes one hit response from query and returns it
	// in the ResultCard format to render UI view.
	onData({ _source: res }) {
		const result = {
			image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
			title: res.name,
			desc: res.brand + " " + "★".repeat(res.rating),
			url: "#"
		};
		return result;
	}

	render() {
		return (
			<ReactiveBase
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
				<Flex column={false} className="flex-wrapper">
					<Flex column w={[1, 1, 1/3]} wrap>
						<Box m={2} pt={3}>
							<CategorySearch
								componentId="SearchSensor"
								dataField="name"
								categoryField="brand.raw"
								placeholder="Search Cars"
							/>
						</Box>
						<Box m={2} pt={2}>
							<SingleRange
								componentId="RatingsSensor"
								dataField="rating"
								title="RatingsFilter"
								data={
								[{ start: 4, end: 5, label: "4 stars and up" },
									{ start: 3, end: 5, label: "3 stars and up" },
									{ start: 2, end: 5, label: "2 stars and up" },
									{ start: 1, end: 5, label: "> 1 stars" }]
								}
								defaultSelected={"4 stars and up"}
							/>
						</Box>
					</Flex>
					<Flex w={[1, 1, 2/3]} wrap>
						<ResultCard
							innerClass={{
								"resultstats": "resultstats"
							}}
							className="results"
							componentId="SearchResult"
							dataField="name"
							title="Results"
							from={0}
							size={6}
							pagination
							onData={this.onData}
							sortOptions={[
								{
									label: "Lowest Price First",
									dataField: "price",
									sortBy: "asc"
								},
								{
									label: "Highest Price First",
									dataField: "price",
									sortBy: "desc"
								},
								{
									label: "Most rated",
									dataField: "rating",
									sortBy: "desc"
								}
							]}
							react={{
								and: ["SearchSensor", "RatingsSensor"]
							}}
						/>
					</Flex>
				</Flex>
			</ReactiveBase>
		);
	}
}

export default App;
```

Here, we have created a `CategorySearch` component along with a `SingleRange` component (first half of the screen) to show the filters.

In the second half, we have used the `ResultCard` component to display the resulting data.

If you have followed along, you should see something like this:

![Image](https://i.imgur.com/Zgp5lGk.png)

You can also checkout a working demo of the above app directly at https://github.com/appbaseio-apps/reactivesearch-starter-app. The repo demonstrates the same example app in different ways:
1. [`master`](https://github.com/appbaseio-apps/reactivesearch-starter-app/tree/master) - The app as shown in the steps above.
1. [`umd`](https://github.com/appbaseio-apps/reactivesearch-starter-app/tree/umd) - A completely browser based app with no npm dependencies and webpack / browserify modules.
