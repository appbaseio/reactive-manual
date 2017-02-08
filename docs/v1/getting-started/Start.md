{"bigh3": true}
{% raw %}

## Getting Started

### Installation Recap

We install the libraries and then add the relevant browser dependencies in the index.html file.

```sh
npm install --save @appbaseio/reactivebase
npm install --save @appbaseio/reactivemaps
```

```html
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=Your_key_here"></script> <!-- Google Maps API Key required-->
<!-- Add browser styles for both npm modules -->
<link rel="stylesheet" href="node_modules/@appbaseio/reactivebase/dist/css/style.min.css">
<link rel="stylesheet" href="node_modules/@appbaseio/reactivemaps/dist/css/style.min.css">
<!-- Your choice of CSS framework, can be materialize, boostrap or something else -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
```

You can read more about the installation steps [here](http://opensource.appbase.io/reactivemaps-manual/v1/getting-started/Installation.html).

### Creating an App

Now that we have gotten the installation part out of the way, let's create an app with reactivemaps.

If you already have a React boilerplate setup, then let's go ahead and import the components.

```javascript
import {
  ReactiveMap
} from '@appbaseio/reactivemaps';

import {
  SingleList,
  ReactiveBase
} from '@appbaseio/reactivebase';
```

Next, we create a `ReactiveBase` component, which requires creating an [appbase.io](https://appbase.io) app along with the `username:password` credentials.

This quick GIF will help with creating an app and getting the credentials.  
![create an appbase.io app](http://im3.ezgif.com/tmp/ezgif.com-59967037ad.gif)

```
class HelloWorld extends Component {
    render() {
       return(
	  <ReactiveBase
	    app="reactivemap-demo-app"
	    username="2ZvCaw7CR"
	    password="6664ec32-4e21-434d-836c-33af67b88c60"
	  >
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
		  actuate={{
		    "SingleListSensor": { "operation": "must" }
		  }}
		/>
	      </div>
	    </div>
	  </ReactiveBase>
       )
   }
}
```

We create a `SingleList` component with New York city selected by default and add a `ReactiveMap` component which updates reactively every time the SingleList component's selected value changes.

If you followed along, you should see something like this:

![Image](https://i.imgur.com/Xj9GIgs.png)

You can also checkout a working demo of the above app directly here - https://github.com/appbaseio-apps/reactivemaps-starter-app.

{% endraw %}
