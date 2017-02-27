{"bigh3": true}

## Getting Started

### Installation Recap

We install the library and then add the relevant browser dependencies in the index.html file.

```sh
npm install --save @appbaseio/reactivemaps
```

```html
<!-- Google Maps API Key required-->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=Your_key_here"></script>
<!-- Your choice of CSS framework, can be materialize, boostrap or something else -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
<!-- Add browser style for reactivemaps -->
<link rel="stylesheet" href="node_modules/@appbaseio/reactivemaps/dist/css/style.min.css">
```

You can read more about the installation steps [here](v1.0.0/getting-started/Installation.html).

### Creating an App

Now that we have gotten the installation part out of the way, let's create an app with reactivemaps.

If you already have a React boilerplate setup, then let's go ahead and import the components.

```javascript
import {
  ReactiveMap,
  SingleList,
  ReactiveBase
} from '@appbaseio/reactivemaps';
```

Next, we create a `ReactiveBase` component, which requires creating an [appbase.io](https://appbase.io) app along with `username:password` credentials. This quick GIF will help with creating an app and getting the credentials.  

![create an appbase.io app](https://i.imgur.com/Y6HiHnJ.gif)

{% raw %}
```
class HelloWorld extends Component {
  render() {
	return(
		<ReactiveBase
			app="reactivemap-demo-app"
			username="2ZvCaw7CR"
			password="6664ec32-4e21-434d-836c-33af67b88c60">
			<div class="row">
				<div class="col-xs-6">
					<SingleList
						title="SingleList Sensor"
						componentId="SingleListSensor"
						appbaseField="group.group_city"
						size={50}
						showSearch={true}
					/>
				</div>
				<div class="col-xs-6">
					<ReactiveMap
						title="ReactiveMap Actuator"
						componentId="ReactiveMapActuator"
						appbaseField="venue"
						react={{
							"and": "SingleListSensor"
						}}
					/>
				</div>
			</div>
		</ReactiveBase>
	)
  }
}
```
{% endraw %}

We create a `SingleList` component with New York city selected by default and add a `ReactiveMap` component which updates reactively every time the SingleList component's selected value changes.

If you followed along, you should see something like this:

![Image](https://i.imgur.com/Xj9GIgs.png)

You can also checkout a working demo of the above app directly here - https://github.com/appbaseio-apps/reactivemaps-starter-app.
