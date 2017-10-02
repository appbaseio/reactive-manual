# Components Index

**ReactiveSearch** and **ReactiveMaps** provide composable components for building data-driven user interfaces. This document explains the different kinds of components offered by the library and walks throughs scenarios of when to use which component.

All components are children (or sub-children) of the **ReactiveBase** component which connects the UI view to an appbase.io app (or an index in Elasticsearch).

Components are divided into four broad categories:  
1. **Basic components** are primitives that are useful across different types of UIs.
2. **Map components** are specific to a map based UI and are available under **ReactiveMaps** library.
3. **Search components** are part of **ReactiveSearch** and offer more specific or advanced versions of the basic components.
4. **Result components** offer UI views for displaying the results from the database queries. Database queries are fired by the library based on the interactions of the one of above categories of components.

> Note: **ReactiveSearch** library is currently the superset library which comes with all of the above components (including the map components). We recommend using that for the general use.
> > `npm -i @appbaseio/reactivesearch` (or read more on [how to install](v1/getting-started/RSInstallation.html))

## 1. Basic Components

### TextField

<img src="https://imgur.com/PgOi2QY.png" style="float:left">
**[TextField](v1/components/TextField)** displays a text input field. It applies a **match** database query on the entered text.

### DataSearch

<img src="https://imgur.com/kbnVVkZ.png" style="float:left"> **[DataSearch](v1/components/DataSearch)** displays a search input box. It supports autosuggestions, highlighting of results and querying against more than one fields via props.

> Note: If you are looking to apply a query on a user input, **DataSearch** is preferable over **TextField**.

### List Components

List is one of the most used data-driven UI displays and hence naturally, we offer a variety of ways to use this UI style.

#### String or Text Datatype

The following are all the possible UI components for a String datatype field in your appbase.io app. These apply a **term** or **terms** database query on the selected item(s).

<img src="https://imgur.com/p2PBKh6.png" style="float:left">
**[SingleList](v1/components/SingleList.html)** is useful for displaying a list of values where only one item can be selected at a time, and the values are retrieved by a database query on the field specified in the **dataField** prop.

<img src="https://imgur.com/waVNdgr.png" style="float:left">
**[MultiList](v1/components/SingleList.html)** is useful for displaying a list of values where multiple values can be selected at a time. Similar to SingleList, these values are retrieved by a database query on the field specified in the **dataField** prop.

<img src="https://imgur.com/b9l8Mhd.png" style="float:left">
**[SingleDataList](v1/components/SingleDataList.html)** is useful for displaying a list of user defined values where only one value item can be selected at a time. Unlike SingleList and MultiList where the values are auto-fetched, here the **data** prop allows one to curate which values to display.

<img src="https://imgur.com/2b1iVDZ.png" style="float:left">
**[MultiDataList](v1/components/MultiDataList.html)** is useful for displaying a list of user defined values where multiple value items can be selected at a time. Similar to the SingleDataList component, one can curate which items to display.

> List vs DataList: Use-cases where curation is important and only a few items need to be shown should use DataList components. Since it doesn't need to  auto-fetch the results, it also saves a network request.

<img src="https://imgur.com/a1be47e.png" style="float:left">
**[SingleDropdownList](v1/components/SingleDropdownList.html)** displays a dropdown list UI where only one item can be selected at a time. It is similar to SingleList.

<img src="https://imgur.com/UVymwfo.png" style="float:left">
**[MultiDropdownList](v1/components/MultiDropdownList.html)** displays a dropdown list UI where multiple items can be selected at a time. It is similar to MultiList.

> When to use dropdown lists: Dropdown lists take up less space. If you have many filters to display or a smaller display area (like on phones), it is better to use dropdown lists.

#### Numeric Datatype

The following are all the possible UI components for a numeric datatype field in your appbase.io app. These apply a **range** database query on the selected item(s).

<img src="https://imgur.com/tPi76EU.png" style="float:left"> **[SingleRange](v1/components/SingleRange.html)** displays a curated list of items where only one item can be selected at a time. Each item represents a range of values, specified in the **data** prop of the component.

> Its counterpart for a String datatype would be **SingleDataList** component.

<img src="https://imgur.com/ulEoXvy.png" style="float:left"> **[MultiRange](v1/components/MultiRange.html)** displays a curated list of items where multiple items can be selected at a time. Each item represents a range of values, specified in the **data** prop of the component.

> Its counterpart for a String datatype would be **MultiDataList** component.

<img src="https://imgur.com/2xxBIUg.png" style="float:left"> **[SingleDropdownRange](v1/components/SingleDropdownRange.html)** displays a dropdown list UI where only one item can be selected at a time.

<img src="https://imgur.com/MrTth88.png" style="float:left">
**[MultiDropdownRange](v1/components/SingleDropdownRange.html)** displays a dropdown list UI where only multiple items can be selected at a time.

### RangeSlider

<img src="https://imgur.com/n4HJ8dD.png" style="float:left"> **[RangeSlider](v1/components/RangeSlider.html)** component applies on a numeric datatype (ideally an integer) field and displays a slider UI.

> RangeSlider vs Range lists: A RangeSlider is useful when the selection of values is homogeneous, e.g. price across a set of products.

### ToggleButton

<img src="https://imgur.com/Ocb9Sir.png" style="float:left">
**[ToggleButton](v1/components/ToggleButton.html)** component applies on a String or Text datatype field where you want users to select a choice (or choices) amongst a small number of total choices.

### NumberBox

<img src="https://imgur.com/svE3sly.png" style="float:left">
**[NumberBox](v1/components/NumberBox.html)** component applies on a numeric datatype field where you want to display a selectable field value that can be incrementally increased or decreased, e.g. no of guests field in a hotel booking app.

### DatePicker and DateRange

<img src="https://imgur.com/rJsL0mK.png" style="float:left"><img src="https://imgur.com/7dKLsNO.png" style="float:left"> **[DatePicker](v1/components/DatePicker.html)** and **[DateRange](v1/components/DateRange.html)** components are useful for showing selectable date fields. They apply to Date datatype field, and internally apply a date range query on the database.

### DataController

<img src="https://imgur.com/qdxEIAz.png" style="float:left"> **[DataController](v1/components/DDataController.html)** is a UI optional component for adding additional queries, e.g. a query based on current URL page path, a default query, a query based on user's global profile preferences. At the same time, it can also have a UI - this is a catchall component to display something that doesn't fit within other components.

## 2. Map Components

Map components are specific to dataset that has a Geopoint datatype, i.e. a (lat, lon) co-ordinate available in at least one field.

### PlacesSearch

<img src="https://imgur.com/8KcudGi.png" style="float:left"> **[PlacesSearch](v1/map-components/PlacesSearch.html)** is a UI component for selecting places from the database based on proximity to a user selected landmark location.

### GeoDistanceDropdown and GeoDistanceSlider

<img src="https://imgur.com/DNdxhB9.png" style="float:left"><img src="https://imgur.com/CfMpulx.png" style="float:left"> **[GeoDistanceDropdown](v1/map-components/GeoDistanceDropdown.html)** and **[GeoDistanceSlider](v1/map-components/GeoDistanceSlider.html)** are UI components for displaying a location search UI where a user can find all the data within a distance range of their selected landmark location.

> Note: These components provide more flexibility than the PlacesSearch component in specifying the distance range as either a slider or a dropdown list.

## 3. Search Components

Search components are more specific versions of the basic components that are useful with an e-commerce or aggregator kind of app.

### CategorySearch

<img src="https://imgur.com/kbnVVkZ.png" style="float:left"> **[CategorySearch](v1/search-components/CategorySearch.html)** is a more specific version of the  [DataSearch](v1/components/DataSearch.html) component. The main difference is that it can show suggestions within specific categories besides the general auto-suggestions that appear in the search dropdown.

### DynamicRangeSlider

<img src="https://imgur.com/n4HJ8dD.png" style="float:left"> **[DynamicRangeSlider](v1/search-components/DynamicRangeSlider.html)** is a more specific version of the [RangeSlider](v1/components/RangeSlider.html) component where the available range is dynamically pre-determined based on the sub-set of data filtered by other components in the view.

### NestedList

<img src="https://imgur.com/XvjkvCZ.png" style="float:left"> **[NestedList](v1/search-components/NestedList.html)** is a list with more sub-lists within each list. It is useful for displaying a menu of categories and sub-categories in an e-commerce setting.

### NestedMultiList

<img src="https://imgur.com/XvjkvCZ.png" style="float:left"> **[NestedMultiList](v1/search-components/NestedMultiList.html)** takes NestedList to the next level by allowing selection of multiple items within the list.

### RatingsFilter

<img src="https://imgur.com/BxizhXe.png" style="float:left"> **[RatingsFilter](v1/search-components/RatingsFilter.html)** is useful for showing a UI selection choice based on ratings score. To be applied on a numeric datatype field.

### TagCloud

<img src="https://imgur.com/lC5KfOK.png" style="float:left">
**[TagCloud](v1/search-components/TagCloud.html)** is useful for showing a tag cloud for users to select from.


### MultiLevelMenu

<img src="https://imgur.com/oErIN7V.png" style="float:left"> **[MultiLevelMenu](v1/search-components/MMultiLevelMenu.html)** is useful for showing an e-commerce app's main navigation menu based on the database field.

## 4. Result Components

Result components are used for displaying the results (aka hits).

- **ResultList**  
    Display the results in a list layout.

- **ResultCard**  
    Display the results in a card layout.

- **ReactiveList**  
    Displays the results in a configurable list layout. This is a low level component (used internally by ResultList and ResultCard) that offers more flexibility in building a unique UI display.

- **ReactiveMap**  
   Display the results on a map. When results contain geopoints (lat,lon), ReactiveMap component can be used to display them on a map interface.

- **ReactiveElement**  
   Display the results in your own HTML DOM element. There are instances where a completely custom UI may be required to display the results, for instance a chart. You can use ReactiveElement component to configure such displays.
