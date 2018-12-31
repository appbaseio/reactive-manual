---
id: migrationguide
title: "Migration Guide"
layout: docs
sectionid: docs
permalink: advanced/migrationguide.html
prev: componentsusage.html
prevTitle: "Components Usage"
---

With the release of version 3.0 of reactivesearch, we are now fully compatible with React 16.6 and above. This release comes after the feedback we have gathered from the iterative deployment of reactivesearch in production for the dozens of our clients in the past 6–8 months. In this version, we have changed the way certain props behaved in the earlier versions. This guide will give you a brief about all the changes.

## Breaking Changes

### Controlled and Uncontrolled component behaviors

To enable effective control over the components, we now support `defaultValue`, `value` & `onChange` props. These new props enable better controlled and uncontrolled usage for all the reactivesearch components. You can read all about it [here](/componentsusage).

> We don't support `defaultSelected` prop anywhere.

### New Render Props

You can now customise the looks and behaviors of your components in much more flexible and declarative manner with the new render props added to reactivesearch components.

- #### Result Components

In **v3**, you will need to use `renderData` & `renderAllData` to custom render the result UI.

> We've removed rendering support with `onData` and `onAllData`. Although onData still exists to enable side-effects handling on new data transmissions. They act as callback props which gets triggered whenever there is a change in the data.

**v2.x:**
```js{6}
<ReactiveList
    react={{
        "and": ["CitySensor", "SearchSensor"]
    }}
    componentId="SearchResult"
    onData={(res) => <div>{res.title}</div>}
/>
```

**v3.x:**
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

- #### Error handling and rendering control

We have added the support for `renderError` in all the data driven components which can be used to display error message whenever there is an error while fetching the data for that particular component.

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

To allow managing the side-effects on error occurrence, we also support `onError` method which gets triggered whenever an error occurs.

- #### Search Components

In **v3**, we have added support for `renderSuggestion` & `renderAllSuggestion` to customise the rendering of suggestions in the search components. This can effectively help you render custom UI in place of vanilla suggestions. We also support `onSuggestion` prop which can be used to listen for the changes in suggestions & trigger side effects if required.

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

We also added support for `renderNoSuggestion` to give feedback to the user when there are no suggestions for a given search query. Please check the relevant search component docs for further details.

- #### List Components

In **v3**, we have added support for `renderItem` to provide custom rendering for radio, checklist, dropdown list items UIs.

> We have removed support for `renderListItem` prop here. Use `renderItem` instead.

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

### Standardized usage of custom and default queries

ReactiveSearch now internally validates the user-provided queries and compute the aggregation, sort, or generic queries based on the input provided. This intents to provide a seamless development experience to the developers for customizing the behaviors of the reactivesearch components. You can catch the details of this enhancement [here](https://github.com/appbaseio/reactivesearch/issues/546).

#### TODO: Example usage for default query and explanation
#### TODO: Example usage for custom query and explanation
