(function(e){function t(t){for(var o,s,a=t[0],c=t[1],u=t[2],l=0,f=[];l<a.length;l++)s=a[l],i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);v&&v(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function s(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"54020ecc"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=i[e]=[t,o]});t.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(e),r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");s.type=o,s.request=r,n[1](s)}i[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var v=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},1305:function(e,t,n){},"4c76":function(e,t,n){"use strict";var o=n("f98b"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("a",{staticClass:"site-logo",attrs:{href:"/HobbySpot/"}},[e._v("HobbySpot")]),n("span",{staticStyle:{float:"right"}},[n("router-link",{attrs:{to:"/"}},[e._v("Movies")]),e._v("|\n    "),n("router-link",{attrs:{to:"/"}},[e._v("TV Shows")])],1)]),n("router-view"),n("footer",[e._v("Made with ❤ on Planet Earth.")])],1)},r=[],s=(n("034f"),n("2877")),a={},c=Object(s["a"])(a,i,r,!1,null,null,null),u=c.exports,l=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Home")],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("div",{attrs:{id:"home-img"}}),n("div",{attrs:{id:"background"}}),n("div",{staticClass:"center-content"},[n("PopularCards",{attrs:{cardsType:"movies",cardsCategory:"popular"}}),n("PopularCards",{attrs:{cardsType:"movies",cardsCategory:"latest"}})],1)])},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"40px"}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.movies.length,expression:"movies.length"}],staticClass:"bold-text-style card-title"},[e._v(e._s(e.cardsCategory)+" "+e._s(e.cardsType))]),e._l(e.movies.slice(0,6),function(t){return n("a",{key:t.id,staticClass:"cover-wrapper",attrs:{href:"/movies/"+t.id}},[n("img",{staticClass:"cover",attrs:{alt:t.title,src:"https://image.tmdb.org/t/p/w500"+t.poster_path}}),n("div",{staticClass:"cover-overlay"},[n("strong",[e._v(e._s(t.title))])])])})],2)},h=[],g={name:"PopularCards",props:["cardsType","cardsCategory"],computed:{movies:function(){return"latest"==this.cardsCategory?this.latestMovies:"similar"==this.cardsCategory?this.similarMovies:this.popularMovies},popularMovies:function(){return this.$store.getters.getPopularMovies},latestMovies:function(){return this.$store.getters.getLatestMovies},similarMovies:function(){return this.$store.getters.getSimilarMovies}}},_=g,M=(n("5cab"),Object(s["a"])(_,m,h,!1,null,null,null)),b=M.exports,y={components:{PopularCards:b},mounted:function(){this.$store.dispatch("setPopularMovies"),this.$store.dispatch("setLatestMovies")}},S=y,E=(n("8b71"),Object(s["a"])(S,d,p,!1,null,null,null)),w=E.exports,I={name:"home",components:{Home:w}},O=I,C=Object(s["a"])(O,v,f,!1,null,null,null),T=C.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Description")],1)},P=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("div",{style:{"background-image":"url( https://image.tmdb.org/t/p/w500"+e.movieInfo.backdrop_path+")"},attrs:{id:"home-img"}}),n("div",{attrs:{id:"background"}}),n("div",{staticClass:"center-content"},[n("h1",{staticClass:"movie-title"},[e._v(e._s(e.movieInfo.title))]),n("span",[e._v("  "+e._s(e.movieInfo.release_date.slice(0,4)))]),n("br"),n("Genres",{attrs:{genres:e.movieInfo.genres}}),n("p",{staticClass:"overview"},[e._v(e._s(e.movieInfo.overview))]),n("PopularCards",{attrs:{cardsType:"movies",cardsCategory:"similar"}})],1)])},j=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.genres,function(t){return n("a",{key:t.id,staticClass:"genres"},[e._v(e._s(t.name))])}),0)},V=[],L={name:"Genres",props:["genres"],computed:{latestMovies:function(){return this.$store.getters.getLatestMovies}}},R=L,A=(n("4c76"),Object(s["a"])(R,x,V,!1,null,null,null)),U=A.exports,H={components:{PopularCards:b,Genres:U},mounted:function(){this.$store.dispatch("setSelectedMovie",this.$route.params.id),this.$store.dispatch("setMovieInfo"),this.$store.dispatch("setSimilarMovies"),this.$store.dispatch("setMovieReviews")},computed:{movieInfo:function(){return this.$store.getters.getMovieInfo},movieReviews:function(){return this.$store.getters.getMovieReviews}}},D=H,G=(n("bdbe"),Object(s["a"])(D,$,j,!1,null,null,null)),N=G.exports,F={name:"description",components:{Description:N}},J=F,W=Object(s["a"])(J,k,P,!1,null,null,null),q=W.exports;o["default"].use(l["a"]);var z=new l["a"]({mode:"history",base:"HobbySpot",routes:[{path:"/",name:"home",component:T},{path:"/movies/:id",name:"desc",component:q},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]}),B=n("2f62"),K=n("bc3a"),Q=n.n(K),X=n("a7fe"),Y=n.n(X);o["default"].use(B["a"]),o["default"].use(Y.a,Q.a);var Z=new B["a"].Store({state:{api_key:"0cd3c8ffa773fa53f149fcec0a403aa7",movies:[],latestMovies:[],similarMovies:[],movieInfo:[],movieReviews:[],selectedMovie:null},getters:{getPopularMovies:function(e){return e.movies},getSimilarMovies:function(e){return e.similarMovies},getLatestMovies:function(e){return e.latestMovies},getMovieInfo:function(e){return e.movieInfo},getMovieReviews:function(e){return e.movieReviews},getSelectedMovie:function(e){return e.selectedMovie}},mutations:{SET_POPULAR_MOVIES:function(e,t){e.movies=t},SET_SIMILAR_MOVIES:function(e,t){e.similarMovies=t},SET_LATEST_MOVIES:function(e,t){e.latestMovies=t},SET_MOVIE_INFO:function(e,t){e.movieInfo=t},SET_MOVIE_REVIEWS:function(e,t){e.movieReviews=t},SET_SELECTED_MOVIE:function(e,t){e.selectedMovie=t}},actions:{setPopularMovies:function(e){var t=e.commit,n=e.state;Q.a.get("https://api.themoviedb.org/3/discover/movie?api_key="+n.api_key+"&language=en-US&sort_by=popularity.desc&include_adult=false&release_date.gte=2000-03-01&release_date.lte=2018-08-20&include_video=false&page=1").then(function(e){return e.data.results}).then(function(e){t("SET_POPULAR_MOVIES",e)})},setLatestMovies:function(e){var t=e.commit,n=e.state;Q.a.get("https://api.themoviedb.org/3/discover/movie?api_key="+n.api_key+"&language=en-US&release_date.gte=2019-03-01&release_date.lte=2019-08-20").then(function(e){return e.data.results}).then(function(e){t("SET_LATEST_MOVIES",e)})},setMovieInfo:function(e){var t=e.commit,n=e.state;Q.a.get("https://api.themoviedb.org/3/movie/"+n.selectedMovie+"?api_key="+n.api_key+"&language=en-US").then(function(e){return e.data}).then(function(e){t("SET_MOVIE_INFO",e)})},setSimilarMovies:function(e){var t=e.commit,n=e.state;Q.a.get("https://api.themoviedb.org/3/movie/"+n.selectedMovie+"/similar?api_key="+n.api_key+"&language=en-US").then(function(e){return e.data.results}).then(function(e){t("SET_SIMILAR_MOVIES",e)})},setMovieReviews:function(e){var t=e.commit,n=e.state;Q.a.get("https://api.themoviedb.org/3/movie/"+n.selectedMovie+"/reviews?api_key="+n.api_key+"&language=en-US").then(function(e){return e.data.results}).then(function(e){t("SET_MOVIE_REVIEWS",e)})},setSelectedMovie:function(e,t){var n=e.commit;n("SET_SELECTED_MOVIE",t)}}}),ee=n("5f5b");n("f9e3"),n("2dd8");o["default"].config.productionTip=!1,o["default"].use(ee["a"]),new o["default"]({router:z,store:Z,render:function(e){return e(u)}}).$mount("#app")},"5cab":function(e,t,n){"use strict";var o=n("c1d0"),i=n.n(o);i.a},"64a9":function(e,t,n){},"8b71":function(e,t,n){"use strict";var o=n("e3a2"),i=n.n(o);i.a},bdbe:function(e,t,n){"use strict";var o=n("1305"),i=n.n(o);i.a},c1d0:function(e,t,n){},e3a2:function(e,t,n){},f98b:function(e,t,n){}});
//# sourceMappingURL=app.e31f8dc7.js.map