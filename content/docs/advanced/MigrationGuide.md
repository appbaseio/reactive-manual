---
id: migrationguide
title: "Migration Guide"
layout: docs
sectionid: docs
permalink: advanced/migrationguide.html
prev: componentsusage.html
prevTitle: "Components Usage"
---

With the release of version 3.0 of reactivesearch, we are now fully compatible with React 16.6.x and above. This release comes after the feedback we have gathered from the iterative deployment of reactivesearch in production for the dozens of our clients in the past 6–8 months. In this version we have changed the way certain props behaved in the earlier versions. This guide will give a brief about all the changes.

## Major Changes

### Controlled and Uncontrolled component behaviors

To enable effective control over the components, we now support `defaultValue`, `value` & `onChange` props. These new props enable better controlled and uncontrolled usage for all the reactivesearch components. You can read all about it [here](/componentsusage).

### Flexible Rendering

With custom rendering support, you can now customise the looks and behaviors of your components in much more flexible and declarative manner.

- #### Render Error

We have added the support for `renderError` in all the data driven components which is used to display error message.

```js{4-6}
<DataSearch
    componentId="SearchSensor"
    dataField={["group_venue", "group_city"]}
    renderError={(error) =>
        <div>
            Something went wrong with DataSearch!<br/>Error details<br/>{error}
        </div>
    }/>
```

- #### Result Components

In **v3** `onData` & `onAllData` is replaced with `renderData` & `renderAllData`, this props are used to render the UI in your Result Component. While `onData` is used to trigger side effects & concurrently render customised UI within the components.

**v2:**
```js
<ReactiveList
    react={{
        "and": ["CitySensor", "SearchSensor"]
    }}
    componentId="SearchResult"
    onData={(res) => <div>{res.title}</div>}
/>
```

**v3:**
```js{6}
<ReactiveList
    react={{
        "and": ["CitySensor", "SearchSensor"]
    }}
    componentId="SearchResult"
    renderData={(res) => <div>{res.title}</div>}
/>
```

> Note: We have removed support for `onAllData` prop from all the result components.

- #### Search Components

In **v3** `onSuggestion` is renamed to `renderSuggestion` & `renderAllSuggestion` is added to retrieve all the suggestions. `Render` prop is used to render the Suggestions UI in your Search Component. While `onSuggestion` is a callback used to  listen for the changes in suggestions & trigger side effects. Now we also have `renderNoSuggestion` to show message when there are no suggestions.

**v2:**
```js
<DataSearch
  ...
  onSuggestion={(suggestion) => ({
    label: (
            <div>
                {suggestion._source.original_title} by
                <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
                    {suggestion._source.authors}
                </span>
            </div>
        ),
    value: suggestion._source.original_title,
    source: suggestion._source // for onValueSelected to work with onSuggestion
  })}/>
```

**v3:**
```js{3,15}
<DataSearch
  ...
  renderSuggestion={(suggestion) => ({
    label: (
            <div>
                {suggestion._source.original_title} by
                <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
                    {suggestion._source.authors}
                </span>
            </div>
        ),
    value: suggestion._source.original_title,
    source: suggestion._source  // for onValueSelected to work with renderSuggestion
  })}
  renderNoSuggestion={() => <div>No Suggestions for the search term!</div>}
  />
```

- #### List Components

In **v3** `renderListItem` is renamed to `renderItem` with an additional third argument `isChecked` to provide whether the item is already checked.

**v2**:
```js
<MultiList
    componentId="CitySensor"
    dataField="group.group_city.raw"
    title="Cities"
    renderListItem={(label, count) => (
        <div>
            {label}
            <span style={{ marginLeft: 5, color: 'dodgerblue' }}>
                {count}
            </span>
        </div>
    )}
/>
```

**v3**:
```js{5-11}
<MultiList
    componentId="CitySensor"
    dataField="group.group_city.raw"
    title="Cities"
    renderItem={(label, count, isChecked) => (
        <div className={isChecked ? 'active' : ''}>
            {label}
            <span style={{ marginLeft: 5, color: 'dodgerblue' }}>
                {count}
            </span>
        </div>
    )}/>
```

> Note: We have removed support for `renderListItem` prop from all the list components.

### Standardized usage of custom and default queries

ReactiveSearch now internally validates the user-provided queries and compute the aggregation, sort, or generic queries based on the input provided. This intents to provide a seamless development experience to the developers for customizing the behaviors of the reactivesearch components. You can catch the details of this enhancement [here](https://github.com/appbaseio/reactivesearch/issues/546).

### Support for google and openstreet maps

We love our reactivemap cousin library equally, and have added support for the rendering of google and openstreet maps with the release of reactivemaps 3.0.

> If you had problems getting through this guide, or made it through the guide but still have problems, please create a new issue describing your problem, ideally with a link to a public repo where we can reproduce the issue. 