---
id: data
title: "Importing Data"
layout: tutorial
sectionid: getting-started
permalink: getting-started/data.html
prev: getting-started/reactivesearch.html
prevTitle: "ReactiveSearch Quickstart"
next: getting-started/reactivebase.html
nextTitle: "Base Component"
---

The first step in getting started with building a custom project for **ReactiveMaps** or **ReactiveSearch** is to add your own data. In this guide, we explain how you can import your data with the correct schema.

### Creating an App

ReactiveSearch uses Elasticsearch as its underlying database system. An app within ReactiveSearch's context refers to an index in Elasticsearch.

Here's a short gif walking through the app creation process in appbase.io, a hosted realtime Elasticsearch service.

![](https://i.imgur.com/r6hWKAG.gif)

If you are using an Elasticsearch cluster, you would be able to create an index with the following command:

```bash
curl -XPUT elasticsearch:9200/my_app/
```

> Note
>
> ReactiveSearch is compatible with Elasticsearch v2, v5 and v6.

### Overview of the App Data Model

Elasticsearch's data model is JSON based, and data within an app is organized as JSON objects that belong to a **type** (or not if you are using v6). Types provide a logical namespace to the JSON data which can be used while querying data. You can read more about the data model behind Elasticsearch over  [here](https://www.elastic.co/blog/found-elasticsearch-mapping-introduction).

![Data Store](https://i.imgur.com/LCvdVuu.png)

> Note
>
> Elasticsearch v6 removes the concepts of types, where data is simply stored as JSON objects within an index.

### Importing Custom Data

In this section, we will cover how to add data using two popular approaches. We will use [Dejavu - a GUI for Elasticsearch](https://opensource.appbase.io/dejavu) for showing the process.

#### CSV or XLS

Let's say you have your data organized as a CSV or XLS file.

1. Use an online tool like http://www.csvjson.com/csv2json to convert your CSV data into a JSON format.
2. Go to your dejavu's **Data Browser** section and click "Add Data".  

![](https://i.imgur.com/idp5Ia2.png)
3. Add the JSON formatted data here, a single object should be added as a JSON object while multiple records can be added using the Array semantics.

> Tip
>
> Add up to a hundred records at a time for best results. Ideal when your data set is small.

#### via API

Elasticsearch uses a RESTful API for both indexing and retrieving data. Whether you are using Python or Java or Javascript, you make a HTTP API call there.

This is how a REST call looks to insert a single object into an app inside a type called **books**.

```bash
curl -XPUT https://API_CREDENTIAL@scalr.api.appbase.io/$app/books/1 --data-binary '{
   "department_name": "Books",
   "department_id": 1,
   "name": "A Sample Book on Network Routing",
   "price": 5595
}'
```

`scalr.api.appbase.io` is the domain for the Elasticsearch cluster, you can replace this with the location of your cluster domain.

### Data Mapping

Data mapping is the process of specifying a schema for your data, which determines how it is indexed and stored. While Elasticsearch auto-detects the schema based on the kind of JSON value through a process known as dynamic mapping, it is also possible to set this mapping statically. You can read more about mappings over [here](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping.html).

Dejavu provides a GUI for setting the mapping of a new field, as well as viewing existing mappings.
