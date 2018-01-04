---
id: writingdata
title: "Writing and Editing Data"
layout: tutorial
sectionid: getting-started
permalink: getting-started/writingdata.html
prev: getting-started/componentsindex.html
prevTitle: "Components Overview"
---

Writing and updating data is a common operation that is triggered from app UIs.

[ReactiveSearch](https://opensource.appbase.io/reactivesearch/) and [ReactiveMaps](https://opensource.appbase.io/reactivemaps/) only offer components for creating read based search UIs.

In this post, we talk about a few ways to perform the Create, Update and Delete operations on the data.

## appbase-js

[`appbase-js`](https://github.com/appbaseio/appbase-js) is the javascript library from appbase.io that runs on Node.JS, UMD, React and React Native environments.

We recommend using appbase-js on a [Node.JS middleware](http://expressjs.com/en/guide/using-middleware.html) to perform the write operations.

> Note
>
> It is important to perform write operations from a secure environment, as you don't want to expose the write credentials publically.

## REST API

If your middleware is written in a different language, you can easily use the REST API endpoints to write data into appbase.io or Elasticsearch. An example PUT endpoint for indexing a new (or overwriting an existing) document would look like:


```bash
curl -XPUT $host/$app/$type/$doc_id -d '{
   "msg": "Hello from ReactiveSearch",
   "from": "A middleware server"
}'
```
