(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)n=o[f],i[n]&&d.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={app:0},s=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/itunesexplorer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),i=r.n(a);i.a},1:function(t,e){},"11f9":function(t,e,r){},2:function(t,e){},"370b":function(t,e,r){"use strict";var a=r("7af4"),i=r.n(a);i.a},"39d3":function(t,e,r){"use strict";var a=r("a836"),i=r.n(a);i.a},"3d4e":function(t,e,r){"use strict";var a=r("74db"),i=r.n(a);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf");var a=r("2b0e"),i=r("ce5b"),s=r.n(i);r("bf40");a["default"].use(s.a,{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-content",[r("Search")],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",[r("v-card",[r("background",{attrs:{data:t.data,search:t.search,favoriteMode:t.favoriteMode,error:t.error}}),r("v-flex",{staticClass:"mt-0 align-right",attrs:{xs2:""}},[r("v-btn",{staticClass:"modal-btn",attrs:{outline:"",color:"white"},on:{click:function(e){t.show()}}},[r("v-icon",[t._v("settings")])],1)],1),r("modal",{attrs:{name:"setting-modal",width:300,height:300}},[r("settings-modal",{attrs:{settings:t.settings}})],1),r("div",{staticClass:"search-panel"},[r("div",{staticClass:"search-bar"},[r("v-form",{on:{submit:function(e){e.preventDefault(),t.submitSearch()}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"mt-0",attrs:{xs2:""}},[r("v-btn",{attrs:{outline:"",color:t.favoriteMode?t.settings["btnColor"]:"white"},on:{click:t.toggleFavorite}},[r("v-icon",[t._v("favorite")])],1)],1),r("v-flex",{attrs:{xs10:""}},[r("v-text-field",{staticClass:"mt-0",attrs:{color:"white",dark:"",clearable:"",label:t.getLabel()},on:{keyout:function(e){t.submitSearch()},keyup:function(e){t.toggleError()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-flex",{staticClass:"mt-0",attrs:{xs2:""}},[r("v-btn",{attrs:{outline:"",color:"white",type:"submit"}},[r("v-icon",[t._v("search")])],1)],1)],1)],1)],1),r("v-layout",{staticClass:"filters",attrs:{row:""}},[r("v-flex",{staticClass:"mt-0",attrs:{xs4:""}},[r("v-btn",{key:"filter",attrs:{outline:"",color:t.isFiltered(0)?t.settings["btnColor"]:"white"},on:{click:function(e){t.toggleFilter("song",0)}}},[r("v-icon",[t._v("music_note")])],1)],1),r("v-flex",{staticClass:"mt-0",attrs:{xs4:""}},[r("v-btn",{key:"filter",attrs:{outline:"",color:t.isFiltered(1)?t.settings["btnColor"]:"white"},on:{click:function(e){t.toggleFilter("album",1)}}},[r("v-icon",[t._v("album")])],1)],1),r("v-flex",{staticClass:"mt-0",attrs:{xs4:""}},[r("v-btn",{key:t.filter,attrs:{outline:"",color:t.isFiltered(2)?t.settings["btnColor"]:"white"},on:{click:function(e){t.toggleFilter("movie",2)}}},[r("v-icon",[t._v("movie")])],1)],1),r("v-flex",{staticClass:"mt-0",attrs:{xs4:""}},[r("v-btn",{key:"filter",attrs:{outline:"",color:t.isFiltered(3)?t.settings["btnColor"]:"white"},on:{click:function(e){t.toggleFilter("podcast",3)}}},[r("v-icon",[t._v("radio")])],1)],1),r("v-flex",{staticClass:"mt-0",attrs:{xs4:""}},[r("v-btn",{key:"filter",attrs:{outline:"",color:t.isFiltered(4)?t.settings["btnColor"]:"white"},on:{click:function(e){t.toggleFilter("allArtist",4)}}},[r("v-icon",[t._v("people")])],1)],1)],1)],1),r("data-tiles",{attrs:{data:t.data,favoriteList:t.favoriteList}})],1)],1)},c=[],u=r("7c81"),f=r.n(u),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.length?r("v-card-text",t._l(13,function(e){return r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[t.filterData(t.data,e)[0]?r("div",{staticClass:"category"},[r("h4",{staticClass:"category-title"},[t._v(t._s(t.kinds[e-1]))])]):t._e(),t._l(t.filterData(t.data,e),function(e){return r("div",{staticClass:"shadow text-xs-center my-3 mx-3 tile-card"},[r("v-avatar",{staticClass:"elevation-4 tile-box mt-3",attrs:{tile:!0,size:"160"},on:{click:function(r){t.toiTunes(e)}}},[r("img",{staticClass:"tile-cover",attrs:{src:t.resizeArtworkUrl(e),alt:"Image Cover"}}),r("v-icon",{staticClass:"play-btn",attrs:{"x-large":"",color:"white"}},[t._v("play_circle_filled")])],1),r("v-flex",{staticClass:"text-xs-left mx-2 py-3 tile-info",attrs:{xs12:""}},[r("div",{staticClass:"subheading font-weight-medium white--text"},[t._v(t._s(t.getName(e)))]),r("div",{staticClass:"text--lighten-1 grey--text"},[t._v(t._s(e.artistName))]),r("div",{staticClass:"grey--text"},[t._v(t._s(t.getReleaseYear(e)))]),r("div",{staticClass:"grey--text"},[t._v(t._s(t.getGenre(e)))]),r("v-icon",{key:t.favLength,class:{favorited:t.isFav(e),"favorite-btn":!0},on:{click:function(r){t.favorite(e)}}},[t._v("favorite")])],1)],1)})],2)})):t._e()},v=[],h={props:["data","favoriteList"],data:function(){return{kinds:["artist","collection","book","album","coached-audio","feature-movie","interactive- booklet","music-video","podcast","podcast-episode","software-package","song","tv- episode"],favLength:Object.keys(this.favoriteList).length}},methods:{filterData:function(t,e){var r=this.kinds[e-1];return e<3?t.filter(function(t){return t.wrapperType==r}):t.filter(function(t){return t.kind==r})},isFav:function(t){return this.isInFavList(t)},isInFavList:function(t){var e="";e=void 0==t.collectionViewUrl?void 0!=t.artistLinkUrl?t.artistLinkUrl:t.previewUrl:t.collectionViewUrl;var r=e in this.favoriteList;return r},updateFavStore:function(){var t=JSON.stringify(this.favoriteList);localStorage.setItem("favoriteList",t)},favorite:function(t){var e="";e=void 0==t.collectionViewUrl?void 0!=t.artistLinkUrl?t.artistLinkUrl:t.previewUrl:t.collectionViewUrl,this.isInFavList(t)?(delete this.favoriteList[e],this.updateFavStore(),this.favLength-=1):(this.favoriteList[e]=t,this.updateFavStore(),this.favLength+=1)},getReleaseYear:function(t){return void 0!=t.releaseDate?t.releaseDate.substr(0,4):""},getGenre:function(t){return void 0!=t.primaryGenreName?t.primaryGenreName:""},getName:function(t){return void 0!=t.collectionName?t.collectionName:t.trackName},resizeArtworkUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"160x160";return void 0!=t.artworkUrl100?t.artworkUrl100.replace("100x100","".concat(e)):""},toiTunes:function(t){void 0==t.collectionViewUrl?window.open(t.artistLinkUrl,"_blank"):window.open(t.collectionViewUrl,"_blank")}}},g=h,p=(r("e9c8"),r("2877")),m=Object(p["a"])(g,d,v,!1,null,null,null),b=m.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top",style:{backgroundImage:"url('https://images.unsplash.com/photo-1564106048-cb031ce0985f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80')"}},[r("div",{staticClass:"headerContainer"},[r("h5",{staticClass:"headline text-xs-center grey--text text--lighten-3 mb-4 mt-2"},[t._v(t._s(t.displayText(t.data)))])]),t.data.length?r("div",{staticClass:"top overlay"},[r("div",{staticClass:"slide-div"},[t.data.length>=1?r("s",{attrs:{id:"s1"}}):t._e(),t.data.length>=2?r("s",{attrs:{id:"s2"}}):t._e(),t.data.length>=3?r("s",{attrs:{id:"s3"}}):t._e(),t.data.length>=4?r("s",{attrs:{id:"s4"}}):t._e(),t.data.length>=5?r("s",{attrs:{id:"s5"}}):t._e(),r("div",{staticClass:"slider"},t._l(Math.min(5,t.data.length),function(e){return r("div",{key:e},[r("div",{style:{backgroundImage:"url("+t.resizeArtworkUrl(t.data[e-1],"400x600")+")"}})])})),t._m(0)])]):t._e()])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prevNext"},[r("div",[r("a",{attrs:{href:"#s5"}}),r("a",{attrs:{href:"#s2"}})]),r("div",[r("a",{attrs:{href:"#s1"}}),r("a",{attrs:{href:"#s3"}})]),r("div",[r("a",{attrs:{href:"#s2"}}),r("a",{attrs:{href:"#s4"}})]),r("div",[r("a",{attrs:{href:"#s3"}}),r("a",{attrs:{href:"#s5"}})]),r("div",[r("a",{attrs:{href:"#s4"}}),r("a",{attrs:{href:"#s1"}})])])}],x={name:"Backgound",props:["data","search","error"],methods:{displayText:function(t){return""==this.search||null==this.search?"iTunes Explorer":t.length?"":""==this.error?"Typing":this.error},resizeArtworkUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"160x160";return void 0!=t.artworkUrl100?t.artworkUrl100.replace("100x100","".concat(e)):""}}},w=x,C=(r("39d3"),Object(p["a"])(w,y,_,!1,null,"6673b566",null)),k=C.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",[r("div",[r("div",{staticClass:"settings-menu",attrs:{xs8:""}},[r("div",{staticClass:"header"},[t._v("\n\t\t\t\tiTunes Explorer Settings\n\t\t\t")]),r("div",{staticClass:"setting-row"},[r("div",{staticClass:"settings"},[t._v("\n\t\t\t\t\tNum. of Results\n\t\t\t\t")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.settings["numResults"],expression:"settings['numResults']"}],staticClass:"settings setting-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.settings,"numResults",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),r("option",[t._v("50")]),r("option",[t._v("100")]),r("option",[t._v("200")])])]),r("div",{staticClass:"setting-row"},[r("div",{staticClass:"settings"},[t._v("\n\t\t\t\t\tCountry\n\t\t\t\t")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.settings["country"],expression:"settings['country']"}],staticClass:"settings setting-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.settings,"country",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(t.countries,function(e,a){return r("option",{domProps:{value:a}},[t._v(t._s(e))])})],2)]),r("div",{staticClass:"setting-row"},[r("div",{staticClass:"settings"},[t._v("\n\t\t\t\t\tButton Color\n\t\t\t\t")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.settings["btnColor"],expression:"settings['btnColor']"}],staticClass:"settings setting-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.settings,"btnColor",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(t.btnColor,function(e,a){return r("option",{domProps:{value:e}},[r("span",{class:e},[t._v(t._s(e))])])})],2)])])])])},L=[],U={name:"Settingmdodal",props:["settings"],data:function(){return{countries:{AU:"Australia",BR:"Brazil",CA:"Canada",CN:"China",TW:"Taiwan",GB:"United Kingdom",US:"United States"},btnColor:["red","orange","yellow","green","blue","pink","purple"]}}},O=U,F=(r("370b"),Object(p["a"])(O,S,L,!1,null,"0d4599f8",null)),j=F.exports,N={name:"Search",components:{DataTiles:b,Background:k,SettingsModal:j},data:function(){return{favoriteList:localStorage.getItem("favoriteList")?JSON.parse(localStorage.getItem("favoriteList")):{},favoriteMode:!1,data:[],search:"",filter:"",filtered:[!1,!1,!1,!1,!1],settings:localStorage.getItem("settings")?JSON.parse(localStorage.getItem("settings")):{country:"US",numResults:50,btnColor:"pink"},error:""}},watch:{search:function(t){t||(this.data=[])}},methods:{show:function(){this.$modal.show("setting-modal")},hide:function(){this.$modal.hide("setting-modal")},getLabel:function(){return""==this.filter||"all"==this.filter?"Enter whatever your heart desires":"Enter ".concat("allArtist"!=this.filter?this.filter:"artist"," name")},displayText:function(t){return""==this.search||null==this.search?"iTunes Explorer":t.length?"":"Typing....."},toggleError:function(){this.error=""},isFiltered:function(t){return this.filtered[t]},toggleFilter:function(t,e){this.filtered[e]?(this.filtered[e]=!1,this.filter=""):(this.filtered=[!1,!1,!1,!1,!1],this.filtered[e]=!0,this.filter=t),this.submitSearch()},toggleFavorite:function(){if(this.favoriteMode=!this.favoriteMode,this.favoriteMode){var t=this.favoriteList;this.data=Object.keys(t).map(function(e){return t[e]})}else this.data=[]},submitSearch:function(){var t=this;if(""!=this.search&&null!=this.search){this.favoriteMode=!1;var e={country:"".concat(this.settings["country"]),term:"".concat(this.search),limit:"".concat(this.settings["numResults"])};"all"!=this.filter&&""!=this.filter&&(e["entity"]="".concat(this.filter)),localStorage.setItem("settings",JSON.stringify(this.settings)),f()(e).then(function(e){t.error="";var r=e.results.sort(function(t,e){return t.releaseDate>e.releaseDate?-1:1});r=r.sort(function(t,e){return t.wrapperType<e.wrapperType?-1:1}),r=r.sort(function(t,e){return t.kind<e.kind?-1:1}),t.data=r}).catch(function(e){t.error=e["message"]})}}}},T=N,E=(r("3d4e"),Object(p["a"])(T,l,c,!1,null,"0afd6f75",null)),A=E.exports,I={components:{Search:A}},M=I,P=(r("034f"),Object(p["a"])(M,n,o,!1,null,null,null)),$=P.exports,D=r("1881"),R=r.n(D);a["default"].use(R.a),new a["default"]({render:function(t){return t($)}}).$mount("#app")},"64a9":function(t,e,r){},"74db":function(t,e,r){},"7af4":function(t,e,r){},"7c81":function(t,e,r){var a=r("b1f5"),i=a.doRequest,s=r("0321"),n=s.promisify,o={timeout:5e3,idKeys:["amgAlbumId","amgArtistId","amgVideoId","id","isbn","upc"]};function l(t,e,r){var a=new Error(r);return a.code=e&&e.statusCode,a.body=e&&e.body,a.error=t,a}function c(t,e,r,a){var i=e&&e.body||"",s=null;try{i=JSON.parse(i),i.results instanceof Array&&i.results.length?a&&(i=i.results[0]):s=new Error("no results")}catch(n){s=l(n,e,"invalid response")}t&&(s=l(t,e,"http error")),s?r(s):r(null,i)}function u(t,e){var r=!1,a={url:"https://itunes.apple.com/search",method:"POST",parameters:t.params||{},timeout:parseInt(t.timeout||o.timeout,10),headers:{"User-Agent":"itunessearchapi.js"}};i(a,function(t,a){c(t,a,e,r)})}t.exports=n(function(t,e,r){var a={params:t||{}};"function"===typeof e&&(r=e,e=null),t&&t instanceof Object?(a.params.version=t.version||2,a.timeout=e,u(a,r)):r(new Error("invalid params"))})},a836:function(t,e,r){},e9c8:function(t,e,r){"use strict";var a=r("11f9"),i=r.n(a);i.a}});
//# sourceMappingURL=app.139f5c6a.js.map