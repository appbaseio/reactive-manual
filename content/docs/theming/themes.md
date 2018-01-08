---
id: theming
title: "Themes"
layout: docs
sectionid: themes
permalink: theming/themes.html
prev: result-components/reactivelist.html
prevTitle: "Result Components: ReactiveList"
next: theming/styles.html
nextTitle: "Styles"
redirect_from:
    - 'advanced/theming.html'
    - 'theming/themes'
    - 'theming/'
    - 'theming'
    - 'themes'
---

Themes can be used to change the default styles for all the ReactiveSearch components. These include basic styles like fonts, colors or components' height.

## Usage

[ReactiveBase](/getting-started/reactivebase.html) acts as the theme provider for all the child ReactiveSearch components. It supports a `theme` prop which accepts an object with the following defaults:

```js
{
	// typography
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
	fontSize: '16px',

	// colors
	textColor: '#424242',
	primaryColor: '#0B6AFF',
	primaryTextColor: '#fff',
	titleColor: '#424242',
	alertColor: '#d9534f',

	// settings
	componentMaxHeight: '240px',
};
```

## Examples

You can overwrite the aforementioned default styles by providing the respective key/values as `theme` prop, for example:

```js{4-8}
<ReactiveBase
  app="appname"
  credentials="abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456"
  theme={{
    fontFamily: 'Raleway, Helvetica, sans-serif',
    primaryColor: '#008000',
    titleColor: 'white',
  }}>
    <Component1 .. />
    <Component2 .. />
</ReactiveBase>
```