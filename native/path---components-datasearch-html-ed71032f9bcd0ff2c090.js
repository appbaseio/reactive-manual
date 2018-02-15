webpackJsonp([0xe34688b00deb],{456:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://imgur.com/Z0O7oL7.png" alt="Image to be displayed"></p>\n<p><code>DataSearch</code> creates a search box UI component that is connected to one or more database fields.</p>\n<p>Example uses:</p>\n<ul>\n<li>Searching for a rental listing by its <code>name</code> or <code>description</code> field.</li>\n<li>Creating an e-commerce search box for finding products by their listing properties.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"brand"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"brand"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Type a car name<span class="token punctuation">"</span></span>\n  <span class="token attr-name">defaultSelected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>volvo<span class="token punctuation">"</span></span>\n  <span class="token attr-name">defaultSuggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span>label<span class="token punctuation">:</span> <span class="token string">"Nissan"</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">"Nissan"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>label<span class="token punctuation">:</span> <span class="token string">"BMW"</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">"BMW"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">fieldWeights</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">queryFormat</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>or<span class="token punctuation">"</span></span>\n  <span class="token attr-name">fuzziness</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">autosuggest</span>\n  <span class="token attr-name">debounce</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">highlight</span>\n  <span class="token attr-name">highlightField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>brand<span class="token punctuation">"</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CategoryFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li>\n<p><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</p>\n</li>\n<li>\n<p><strong>dataField</strong> <code>String</code> or <code>Array</code><br>\ndatabase field(s) to be connected to the component’s UI view. DataSearch accepts an Array in addition to String, useful for applying search across multiple fields.</p>\n</li>\n<li>\n<p><strong>defaultSelected</strong> <code>string</code> [optional]<br>\npreset the search query text in the search box.</p>\n</li>\n<li>\n<p><strong>placeholder</strong> <code>String</code> [optional]<br>\nset the placeholder text to be shown in the searchbox input field. Defaults to “Search”.</p>\n</li>\n<li>\n<p><strong>autoSuggest</strong> <code>Boolean</code> [optional]<br>\nset whether the autosuggest functionality should be enabled or disabled. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>defaultSuggestions</strong> <code>Array</code> [optional]\npreset search suggestions to be shown on focus when the search box does not have any search query text set. Accepts an array of objects each having a <strong>label</strong> and <strong>value</strong> property. The label can contain either String or an HTML element.</p>\n</li>\n<li>\n<p><strong>highlight</strong> <code>Boolean</code> [optional]<br>\nwhether highlighting should be enabled in the returned results.</p>\n</li>\n<li>\n<p><strong>highlightField</strong> <code>String or Array</code> [optional]<br>\nwhen highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the <strong>dataField</strong> prop.</p>\n</li>\n<li>\n<p><strong>fieldWeights</strong> <code>Array</code> [optional]<br>\nset the search weight for the database fields, useful when dataField is an Array of more than one field. This prop accepts an array of numbers. A higher number implies a higher relevance weight for the corresponding field in the search results.</p>\n</li>\n<li>\n<p><strong>queryFormat</strong> <code>String</code> [optional]\nSets the query format, can be <strong>or</strong> or <strong>and</strong>. Defaults to <strong>or</strong>.</p>\n<ul>\n<li><strong>or</strong> returns all the results matching <strong>any</strong> of the search query text’s parameters. For example, searching for “bat man” with <strong>or</strong> will return all the results matching either “bat” or “man”.</li>\n<li>On the other hand with <strong>and</strong>, only results matching both “bat” and “man” will be returned. It returns the results matching <strong>all</strong> of the search query text’s parameters.</li>\n</ul>\n</li>\n<li>\n<p><strong>fuzziness</strong> <code>String or Number</code> [optional]\nSets a maximum edit distance on the search parameters, can be <strong>0</strong>, <strong>1</strong>, <strong>2</strong> or <strong>“AUTO”</strong>. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, <strong>fox</strong> can become <strong>box</strong>. Read more about it in the elastic search <a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html">docs</a>.</p>\n</li>\n<li>\n<p><strong>debounce</strong> <code>Number</code> [optional]\ndelays executing the query by the specified time in <strong>ms</strong> while the user is typing. Defaults to <code>0</code>, i.e. no debounce. Useful if you want to save on the number of requests sent.</p>\n</li>\n<li>\n<p><strong>innerProps</strong> <code>Object</code> [optional]<br>\nspecifies additional props for the internal components. Accepts an object with the specified keys. Read more about the usage <a href="/reactive-manual/native/advanced/innerprops.html">here</a></p>\n</li>\n</ul>\n<br />\n<table>\n<thead>\n<tr>\n<th align="right"><strong>Key</strong></th>\n<th align="center"><strong>Explaination</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="right"><code>item</code></td>\n<td align="center">The wrapping \n<a href="http://docs.nativebase.io/Components.html#Form">Item</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>listItem</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#list-def-headref">ListItem</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>list</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#list-def-headref">List</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>icon</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#icon-def-headref">Icon</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>input</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#Form">Input</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>button</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#button-def-headref">Button</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>header</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#header-def-headref">Header</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>title</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html">Title</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>text</code></td>\n<td align="center"><a href="http://facebook.github.io/react-native/docs/text.html">Text</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n<tr>\n<td align="right"><code>modal</code></td>\n<td align="center"><a href="https://facebook.github.io/react-native/docs/modal.html#docsNav">Modal</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<div data-snack-id="@dhruvdutt/datasearch-example" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%"></div>\n<p><a href="https://snack.expo.io/@dhruvdutt/datasearch-example" target="_blank">View the full code</a></p>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>DataSearch</code> component supports <code>style</code> prop. Read more about it <a href="/reactive-manual/native/advanced/style.html">here</a>.</p>\n<p>It also supports an <code>innerStyle</code> prop with the following keys:</p>\n<ul>\n<li><code>label</code></li>\n<li><code>left</code></li>\n<li><code>button</code></li>\n<li><code>icon</code></li>\n<li><code>right</code></li>\n<li><code>input</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/native/advanced/style.html#innerstyle">here</a></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>DataSearch</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>onValueChange</code> and <code>onQueryChange</code>,</li>\n<li>specify how search suggestions should be filtered using <code>react</code> prop</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>DataSearch\n  <span class="token operator">...</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// called before the value is set</span>\n      <span class="token comment" spellcheck="true">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment" spellcheck="true">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment" spellcheck="true">// set the state</span>\n      <span class="token comment" spellcheck="true">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment" spellcheck="true">// specify how and which suggestions are filtered using `react` prop.</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"pricingFilter"</span><span class="token punctuation">,</span> <span class="token string">"dateFilter"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"or"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"searchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>style</strong> <code>Object</code>\nCSS styles to be applied to the <strong>DataSearch</strong> component.</li>\n<li><strong>customQuery</strong> <code>Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>DataSearch</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the DataSearch.</li>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>DataSearch’s</strong> suggestions.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',frontmatter:{title:"DataSearch",next:"components/singledropdownlist.html",prev:"components/textfield.html",nextTitle:"SingleDropdownList",prevTitle:"TextField"},fields:{path:"docs/components/DataSearch.md",slug:"components/datasearch.html"}}},pathContext:{slug:"components/datasearch.html"}}}});
//# sourceMappingURL=path---components-datasearch-html-ed71032f9bcd0ff2c090.js.map