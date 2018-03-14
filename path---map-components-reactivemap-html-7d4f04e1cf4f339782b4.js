webpackJsonp([64106737349458],{473:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/faAZ5v8.png" alt="ReactiveMap Image"></p>\n<p>A <code>ReactiveMap</code> creates a data-driven map UI component. It is the key component for build map based experiences.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a map of user checkins by city and topics for powering discovery based experiences.</li>\n<li>displaying restaurants filtered by a nearby distance query on a map.</li>\n</ul>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<h4 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveMap</span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MapUI<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>location<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Venue Location Map<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h4 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveMap\n    componentId<span class="token operator">=</span><span class="token string">"MapUI"</span>\n    dataField<span class="token operator">=</span><span class="token string">"location"</span>\n    title<span class="token operator">=</span><span class="token string">"Venue Location Map"</span>\n    size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span>\n    defaultZoom<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">}</span>\n    defaultCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lat<span class="token punctuation">:</span> <span class="token number">37.74</span><span class="token punctuation">,</span> lng<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">122.45</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    showMapStyles<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    defaultMapStyle<span class="token operator">=</span><span class="token string">"Standard"</span>\n    showMarkerCluster<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    showSearchAsMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    searchAsMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    onPopoverClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPopoverClick<span class="token punctuation">}</span>\n\n    stream<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n\n    <span class="token comment">// \'react\' defines when and how the map component should update</span>\n    react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      and<span class="token punctuation">:</span> <span class="token string">"CitySensor"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n    <span class="token comment">// map events</span>\n    onData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onData<span class="token punctuation">}</span>\n\n    <span class="token comment">// less useful props</span>\n    autoCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\nDB data field to be connected to the component’s UI view, usually of a geopoint (i.e. location) data type and used for rendering the markers on the map.</li>\n<li><strong>title</strong> <code>String or HTML</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show in the map view, can be a number in the range [1, 1000]. Defaults to 100.</li>\n<li><strong>defaultZoom</strong> <code>Number</code> [optional]<br>\npreset map’s zoom level, accepts integer values between [0, 20]. 0 is the minimum zoom level, where you can see the entire globe. 20 is the maximum zoom level. Defaults to 13.</li>\n<li><strong>defaultCenter</strong> <code>Object</code> [optional]<br>\npreset map’s center position by specifying an object with valid <code>lat</code> and <code>lng</code> values.</li>\n<li><strong>center</strong> <code>Object</code> [optional]<br>\nset map’s center position by specifying an object with valid <code>lat</code> and <code>lng</code> values.</li>\n<li><strong>showMapStyles</strong> <code>Boolean</code> [optional]<br>\nwhether to show map styles dropdown picker in the map UI. Defaults to <code>true</code>.</li>\n<li><strong>defaultMapStyle</strong> <code>String</code> [optional]<br>\npreset a map style for the map UI. Available options include “Standard”, “Blue Essence”, “Blue Water”, “Flat Map”, “Light Monochrome”, “Midnight Commander”, “Unsaturated Browns”.</li>\n<li><strong>showMarkers</strong> <code>Boolean</code> [optional]<br>\nwhether to show the markers on the map, defaults to <code>true</code>. Sometimes, it doesn’t make sense to display markers (when building a heatmap or weather map or a directions navigation map)</li>\n<li><strong>defaultPin</strong> <code>String</code> [optional]<br>\nURL of the default marker pin image to be shown. It comes with a default image. Should only be set if you wish to use a custom marker.</li>\n<li><strong>showMarkerCluster</strong> <code>Boolean</code> [optional]<br>\nwhether to aggregate and form a cluster of nearby markers. Defaults to <code>true</code>.</li>\n<li><strong>showSearchAsMove</strong> <code>Boolean</code> [optional]<br>\nwhether to show the <em>Search As I Move</em> checkbox in the UI. Defaults to <code>true</code>.</li>\n<li><strong>searchAsMove</strong> <code>Boolean</code> [optional]<br>\nwhether to set the <em>Search As I Move</em> checkbox. Defaults to <code>false</code>.</li>\n<li><strong>onPopoverClick</strong> <code>function</code> [optional]<br>\na function that takes one argument for getting a marker’s data and returns an HTML markup to be displayed in the popover box.</li>\n<li><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result (aka realtime view) updates in the UI. Defaults to <code>false</code>.</li>\n<li><strong>react</strong> <code>Object</code>\na dependency object defining how this component should react based on the state changes in the dependent sensor components. You can read more about it <a href="/reactive-manual/advanced/react.html">here</a>.</li>\n<li>\n<p><strong>autoCenter</strong> <code>Boolean</code> [optional]<br>\nwhether to auto center the map based on the geometric center of all the location markers. Defaults to <code>false</code>.</p>\n<!-- - **autoMarkerPosition** `Boolean` [optional]  \nwhether to set the rotation angle of the marker image based on the delta changes in its location, useful when displaying realtime traffic data. Defaults to `false`. -->\n</li>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS style object to be applied to the <code>ReactiveMap</code> component.</li>\n<li><strong>onData</strong> <code>function</code><br>\nevent fired when one or more markers are indexed, updated or removed from the map. It takes an object with the following formats (<code>label</code>, <code>icon</code>, <code>custom</code>):</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// To render the given text in the marker </span>\nonData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> result<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\n<span class="token comment">// To render a marker image </span>\nonData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    icon<span class="token punctuation">:</span> <span class="token string">\'https://i.imgur.com/NHR2tYL.png\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\n<span class="token comment">// To render a custom markup (as label) in the marker position </span>\nonData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    custom<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>result<span class="token punctuation">.</span>mag<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="syntax"><a href="#syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax</h3>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'ReactiveMap docs example\' src=\'//codepen.io/sids-aquarius/embed/qXvWpo/?height=500&theme-id=light&default-tab=js&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/qXvWpo/\'>ReactiveMap docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h3 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h3>\n<p><img src="https://i.imgur.com/YPRoLch.png" alt="Annotated Image"></p>\n<h3 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'ReactiveMap docs example\' src=\'//codepen.io/sids-aquarius/embed/qXvWpo/?height=500&theme-id=light&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/qXvWpo/\'>ReactiveMap docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<ol>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=Reactive%20maps&#x26;knob-URLParams%20%28not%20visible%20in%20storybook%29=true&#x26;knob-showMarkers=true&#x26;knob-filterLabel=GeoDistance%20filter&#x26;knob-defaultSelected=%7B%22label%22%3A%22Less%20than%20100%20miles%22%2C%22location%22%3A%22London%22%7D&#x26;knob-rangeLabels=%7B%22start%22%3A%22Start%22%2C%22end%22%3A%22End%22%7D&#x26;knob-range=%7B%22start%22%3A0%2C%22end%22%3A50%7D&#x26;knob-autoMarkerPosition=true&#x26;knob-streamMarkerImage=https%3A%2F%2Fcdn.rawgit.com%2Fappbaseio%2Freactivemaps%2F6500c73a%2Fdist%2Fimages%2Fstream-pin.png&#x26;knob-showMapStyles=false&#x26;knob-URLParams%20%28not%20visible%20on%20storybook%29=true&#x26;knob-showFilter=true&#x26;knob-autoMapRender=false&#x26;knob-placeholderDropdown=Select%20radius&#x26;knob-stepValue=1&#x26;knob-showPopoverOn=mouseover&#x26;knob-showMarkerCluster=true&#x26;knob-streamTTL=5&#x26;knob-setSearchAsMove=false&#x26;knob-defaultPin=https%3A%2F%2Fcdn.rawgit.com%2Fappbaseio%2Freactivemaps%2F6500c73a%2Fdist%2Fimages%2Fhistoric-pin.png&#x26;knob-size=100&#x26;knob-autoLocation=true&#x26;knob-streamAutoCenter=true&#x26;knob-unit=mi&#x26;knob-autoCenter=true&#x26;knob-placeholder=Search%20Location&#x26;knob-defaultZoom=5&#x26;knob-showSearchAsMove=true&#x26;knob-defaultMapStyle=Standard&#x26;knob-defaultCenter=%7B%22lat%22%3A37.74%2C%22lng%22%3A-122.45%2C%22lng%22%3A-122.45%7D&#x26;selectedKind=map%2FReactiveMap&#x26;selectedStory=Basic&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">ReactiveMap with all the default props</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/meetupblast/">ReactiveMap with a search sensor on the map</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/transport/">ReactiveMap with historical and realtime data</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/events/">ReactiveMap with events example</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/weather/">ReactiveMap with weather data</a></p>\n</li>\n</ol>',frontmatter:{title:"ReactiveMap",next:null,prev:"map-components/placessearch.html",nextTitle:null,prevTitle:"PlacesSearch"},fields:{path:"docs/map-components/ReactiveMap.md",slug:"map-components/reactivemap.html"}}},pathContext:{slug:"map-components/reactivemap.html"}}}});
//# sourceMappingURL=path---map-components-reactivemap-html-7d4f04e1cf4f339782b4.js.map