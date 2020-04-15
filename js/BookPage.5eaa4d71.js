(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BookPage"],{"0eb2":function(o,a,e){},"49aa":function(o,a,e){"use strict";var t=e("a593"),n=e.n(t);n.a},"7db0":function(o,a,e){"use strict";var t=e("23e7"),n=e("b727").find,s=e("44d2"),i=e("ae40"),d="find",l=!0,r=i(d);d in[]&&Array(1)[d]((function(){l=!1})),t({target:"Array",proto:!0,forced:l||!r},{find:function(o){return n(this,o,arguments.length>1?arguments[1]:void 0)}}),s(d)},"97fe":function(o,a,e){},a593:function(o,a,e){},ab24:function(o,a,e){"use strict";e.r(a);var t=function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("div",{staticClass:"container"},[e("BackButton"),e("LoadingQuote",{directives:[{name:"show",rawName:"v-show",value:o.isLoading,expression:"isLoading"}],staticClass:"loading-screen",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean},attrs:{booktitleprop:o.book.title,bookquoteprop:o.book.quote}}),e("div",{staticClass:"bookpage"},[e("div",{staticClass:"bp-image-background",class:{colored:o.imageColor},style:{backgroundImage:"url("+o.book.adaptations[o.selectedIndex].image+")"}}),e("BookItem",{ref:"bookAnimation",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean},attrs:{slugprop:o.slug,titleprop:o.book.title,authorprop:o.book.author,themeprop:o.book.themes,numberprop:o.book.number}}),e("div",{staticClass:"book-summary-item book-panel-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[e("div",{staticClass:"book-summary-title panel-section",on:{click:function(a){o.expandedSummary=!o.expandedSummary}}},[e("span",{staticClass:"panel-title"},[o._v("Book Summary")]),!1===o.expandedSummary?e("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedSummary?e("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedSummary?e("div",{staticClass:"book-summary-text"},[e("div",{staticClass:"book-details"},[e("br"),e("div",[o._v(" "+o._s(o.book.title))]),e("div",[o._v(" by "+o._s(o.book.author))]),e("div",[o._v(" "+o._s(o.book.year))])]),e("br"),e("div",[o._v(" "+o._s(o.book.summary)+" ")]),e("br"),e("div",{staticClass:"panel-section"}),e("br"),e("div",{staticClass:"book-downloads-title panel-section",on:{click:function(a){o.expandedDownloads=!o.expandedDownloads}}},[e("span",{staticClass:"panel-title"},[o._v("Original Text Download")]),!1===o.expandedDownloads?e("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedDownloads?e("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedDownloads?e("div",{staticClass:"book-downloads-links"},[e("a",{attrs:{href:"./src/assets/books/pdf/"+o.book.slug+".pdf",download:""}},[o._v("PDF")]),e("a",{attrs:{href:"link.jpg",download:o.book.title}},[o._v("HTML Text")]),e("a",{attrs:{href:"link.jpg",download:o.book.title}},[o._v("EPUB")])]):o._e()]):o._e()]),e("div",{staticClass:"book-adaptation-item book-panel-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[e("div",{staticClass:"book-adaptation-title panel-section",on:{click:function(a){o.expandedAdaptations=!o.expandedAdaptations}}},[e("span",{staticClass:"panel-title"},[o._v("Films and Adaptations")]),!1===o.expandedAdaptations?e("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedAdaptations?e("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedAdaptations?e("div",{staticClass:"book-adaptations-wrapper",on:{mouseover:function(a){o.imageColor=!0},mouseleave:function(a){o.imageColor=!1}}},[e("br"),o._l(o.book.adaptations,(function(a,t){return e("div",{key:a.name+a.year,staticClass:"book-adaptations-text",class:[o.selectedIndex===t?"selected-movie":""],on:{click:function(e){a.selectedMovie=!a.selectedMovie,o.selectMovie(t)}}},[e("div",{staticClass:"movie-line"},[e("div",{staticClass:"adaptation-title"},[o._v(" "+o._s(a.name))]),e("div",{staticClass:"adaptation-year"},[o._v(o._s(a.year))]),e("img",{staticClass:"hide",attrs:{src:a.image}})])])})),e("br")],2):o._e()])],1)],1)},n=[],s=(e("7db0"),e("a9e3"),e("c0d6")),i=e("54f3"),d=function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("div",{staticClass:"back"},[e("a",{on:{click:function(a){return o.$router.go(-1)}}},[o._v("←")])])},l=[],r={name:"BackButton",data:function(){return{}}},c=r,p=(e("e725"),e("2877")),u=Object(p["a"])(c,d,l,!1,null,"264f6d73",null),k=u.exports,b=function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("div",{staticClass:"quote-page"},[e("div",{staticClass:"quote-page-text"},[e("p",{staticClass:"quote-page-title"},[o._v(" "+o._s(o.booktitleprop)+" ")]),e("p",{staticClass:"quote-page-quote"},[o._v(" "+o._s(o.bookquoteprop)+" ")]),o._m(0)])])},v=[function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("div",{staticClass:"loading"},[e("span",[o._v("L")]),e("span",[o._v("o")]),e("span",[o._v("a")]),e("span",[o._v("d")]),e("span",[o._v("i")]),e("span",[o._v("n")]),e("span",[o._v("g")])])}],m={name:"LoadingQuote",props:{bookquoteprop:String,booktitleprop:String}},f=m,_=(e("49aa"),Object(p["a"])(f,b,v,!1,null,"8e27c6e8",null)),g=_.exports,x=e("cffa"),B=e("9ce6"),C=e("a5cf");x["b"].registerPlugin(B["a"]);var y={name:"BookPage",components:{BookItem:i["a"],BackButton:k,LoadingQuote:g},data:function(){return{expandedSummary:!0,expandedDownloads:!0,expandedAdaptations:!0,selectedMovie:!1,adaptations:s["a"].adaptations,selectedIndex:0,fileName:this.slug,imageColor:!1,isLoading:!0}},props:{slug:{type:String,required:!0},adaptation:{type:Object},selectedFilm:{type:Number}},methods:{selectMovie:function(o){this.selectedIndex=o,console.log(o)},next:function(){this.selectedIndex++},prev:function(){this.selectedIndex--}},computed:{book:function(){var o=this;return s["a"].books.find((function(a){return a.slug===o.slug}))}},mounted:function(){var o=this,a=this.$refs.bookAnimation,e=new C["d"];e.to(a,1,{y:-500,x:200,ease:C["c"].easeIn}),setTimeout((function(){o.isLoading=!1}),5e3)}},h=y,w=(e("ad1d"),Object(p["a"])(h,t,n,!1,null,null,null));a["default"]=w.exports},ad1d:function(o,a,e){"use strict";var t=e("0eb2"),n=e.n(t);n.a},e725:function(o,a,e){"use strict";var t=e("97fe"),n=e.n(t);n.a}}]);
//# sourceMappingURL=BookPage.5eaa4d71.js.map