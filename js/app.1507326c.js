(function(e){function a(a){for(var o,n,s=a[0],m=a[1],l=a[2],c=0,d=[];c<s.length;c++)n=s[c],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(o in m)Object.prototype.hasOwnProperty.call(m,o)&&(e[o]=m[o]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],o=!0,n=1;n<t.length;n++){var s=t[n];0!==r[s]&&(o=!1)}o&&(i.splice(a--,1),e=m(m.s=t[0]))}return e}var o={},n={app:0},r={app:0},i=[];function s(e){return m.p+"js/"+({BookPage:"BookPage",about:"about"}[e]||e)+"."+{BookPage:"a33a1927",about:"7cced7fb"}[e]+".js"}function m(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.e=function(e){var a=[],t={BookPage:1,about:1};n[e]?a.push(n[e]):0!==n[e]&&t[e]&&a.push(n[e]=new Promise((function(a,t){for(var o="css/"+({BookPage:"BookPage",about:"about"}[e]||e)+"."+{BookPage:"f7a67d81",about:"1efeeb0e"}[e]+".css",r=m.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===r))return a()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===o||c===r)return a()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=a,u.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],u.parentNode.removeChild(u),t(i)},u.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,t){o=r[e]=[a,t]}));a.push(o[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,m.nc&&c.setAttribute("nonce",m.nc),c.src=s(e);var d=new Error;l=function(a){c.onerror=c.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,t[1](d)}r[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(a)},m.m=e,m.c=o,m.d=function(e,a,t){m.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},m.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(e,a){if(1&a&&(e=m(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(m.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)m.d(t,o,function(a){return e[a]}.bind(null,o));return t},m.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return m.d(a,"a",a),a},m.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},m.p="/",m.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var o=t("85ec"),n=t.n(o);n.a},"0846":function(e,a,t){},"1f20":function(e,a,t){"use strict";var o=t("0846"),n=t.n(o);n.a},"4ed1":function(e,a,t){},"54f3":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bookspace"},[t("div",{staticClass:"book"},[t("div",{staticClass:"spine"}),t("div",{staticClass:"title"},[e._v(e._s(e.titleprop))]),t("div",{staticClass:"author"},[e._v(e._s(e.authorprop))])]),t("div",{staticClass:"info-bundle"},[t("div",{staticClass:"themes"},[e._v(e._s(e.themeprop))])]),t("div",{staticClass:"sticker-group sticker"},[t("div",{staticClass:"sticker-text"},[t("div",{staticClass:"number"},[e._v(e._s(e.numberprop))]),t("div",[e._v("Contemporary Works")])])])])},n=[],r=(t("a9e3"),t("c0d6")),i={name:"BookItem",props:{titleprop:String,authorprop:String,themeprop:String,numberprop:Number,femaleprop:Boolean,url:String,type:String,summaryprop:String,slug:String},data:function(){return{books:r["a"].books}}},s=i,m=(t("9f0d"),t("2877")),l=Object(m["a"])(s,o,n,!1,null,null,null);a["a"]=l.exports},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Header"),t("router-view",{key:e.$route.path})],1)},r=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"header-template"},[t("div",{staticClass:"header"},[t("router-link",{attrs:{to:"/"}},[t("div",{staticClass:"logo"},[e._v(" The"),t("br"),t("span",{staticClass:"logo-sans"},[e._v(" Public Domain ")]),t("br"),e._v(" Library ")])]),!1===e.expandedMenu?t("div",{staticClass:"link",on:{click:function(a){e.expandedMenu=!0}}},[t("br"),e._v(" Menu ")]):e._e(),e.expandedMenu?t("div",{staticClass:"link close-btn",on:{click:function(a){e.expandedMenu=!1}}},[t("br"),e._v(" Close ")]):e._e(),e.expandedMenu?t("div",{staticClass:"link"},[t("br"),t("router-link",{attrs:{to:"/About"}},[e._v(" About, ")]),e._v(" Credits ")],1):e._e()],1)])},s=[],m={name:"Header",data:function(){return{expandedMenu:!1}}},l=m,c=(t("78ba"),t("2877")),d=Object(c["a"])(l,i,s,!1,null,"667da678",null),u=d.exports,h={name:"App",components:{Header:u},data:function(){return{}},mounted:function(){}},g=h,p=(t("034f"),Object(c["a"])(g,n,r,!1,null,null,null)),y=p.exports,M=(t("d3b7"),t("8c4f")),f=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("QuoteHomePage"),t("BookCatalog")],1)},k=[],B=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"catalog"},[t("div",{staticClass:"book-grid",attrs:{name:"books"}},e._l(e.books,(function(a){return t("div",{key:a.title,staticClass:"bookspace-two"},[t("div",{staticClass:"bookspacegrid"},[t("router-link",{attrs:{to:{name:"BookPage",params:{slug:a.slug}}},on:{mouseover:function(a){e.hoveredOn=!0}}},[t("BookItem",{class:{"fantasy-book":a.fantasyBookBoolean,"romance-book":a.romanceBookBoolean,"adventure-book":a.adventureBookBoolean,"history-book":a.historyBookBoolean},attrs:{titleprop:a.title,authorprop:a.author,themeprop:a.themes,numberprop:a.adaptations.length}})],1)],1)])})),0)])},v=[],_=t("54f3"),b=t("c0d6"),T={name:"BookCatalog",components:{BookItem:_["a"]},data:function(){return{books:b["a"].books,hoveredOn:!1}},methods:{showImage:function(){}}},j=T,N=(t("1f20"),Object(c["a"])(j,B,v,!1,null,null,null)),w=N.exports,z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"quote-page"},[t("div",{ref:"quote",staticClass:"quote-p"},[e._v(" Culture, like science and technology, grows by accretion, each new creator building on the works of those who came before. ")]),t("div",{ref:"quoteTwo",staticClass:"quote-p"},[e._m(0),t("span",{ref:"speaker",staticClass:"speaker"},[e._v("Alex Kozinski")])])])},Y=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"quoteTwo"},[e._v(" Creativity is impossible without a rich public domain. "),t("br")])}],V=t("a5cf"),X={name:"QuoteHomePage",mounted:function(){var e=this.$refs,a=e.quote,t=e.quoteTwo,o=e.speaker,n=new V["d"];n.to(a,.25,{opacity:1,y:-5,ease:V["c"].easeIn},.25),n.to(t,.25,{opacity:1,y:-5,ease:V["c"].easeIn},.5),n.to(o,.25,{opacity:1,y:-5,ease:V["c"].easeIn},.75)}},A=X,O=(t("5915"),Object(c["a"])(A,z,Y,!1,null,null,null)),F=O.exports,C={name:"Home",components:{BookCatalog:w,QuoteHomePage:F},methods:{changeBackground:function(e){this.backgroundImage="url("+e+");"}}},E=C,D=(t("cccb"),Object(c["a"])(E,f,k,!1,null,null,null)),W=D.exports;o["a"].use(M["a"]);var L=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/book/:slug",name:"BookPage",props:!0,component:function(){return t.e("BookPage").then(t.bind(null,"ab24"))}}],S=new M["a"]({mode:"history",routes:L}),Q=S,I=t("cffa");o["a"].config.productionTip=!1,I["a"].registerPlugin(I["a"]),new o["a"]({router:Q,render:function(e){return e(y)}}).$mount("#app")},5915:function(e,a,t){"use strict";var o=t("4ed1"),n=t.n(o);n.a},"5ced":function(e,a,t){},"659b":function(e,a,t){},"78ba":function(e,a,t){"use strict";var o=t("659b"),n=t.n(o);n.a},"85ec":function(e,a,t){},"9f0d":function(e,a,t){"use strict";var o=t("ee1f"),n=t.n(o);n.a},c0d6:function(e,a,t){"use strict";a["a"]={books:[{title:"Emma",author:"Jane Austen",themes:"Fiction, Romance, British Literature, Female-Lead",female:!0,summary:"Emma Woodhouse is one of Austen's most captivating and vivid characters. Beautiful, spoilt, vain and irrepressibly witty, Emma organizes the lives of the inhabitants of her sleepy little village and plays matchmaker with devastating effect.",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"emma",adaptations:[{name:"Clueless",year:1995,image:"https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg"},{name:"Emma",year:2020,image:"https://m.media-amazon.com/images/M/MV5BN2NkMjY2ZDQtZDQxYS00ZGE3LTgxYTctMjljYmIwOTBhYWE4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1436,1000_AL_.jpg"},{name:"Emma",year:1996,image:"https://m.media-amazon.com/images/M/MV5BYTQwNmFjMTEtYWRhNi00NDAxLTljYzItODkwYjFlOTZkZjVhXkEyXkFqcGdeQXVyNTQxMTIxMTk@._V1_SY1000_CR0,0,1532,1000_AL_.jpg"},{name:"Aisha",year:2010,image:"https://m.media-amazon.com/images/M/MV5BNjk4OTczYjgtODUzZC00NWMzLWEzMDktODY2YzkyNTY5MzQyXkEyXkFqcGdeQXVyNjY4Nzk0Njk@._V1_.jpg"}]},{title:"The Wonderful Wizard of Oz",author:"L. Frank Baum",themes:"Fiction, Children Literature, Fantasy, Adventure, Witches, Kansas",imgurl:"https://m.media-amazon.com/images/M/MV5BZDBlMTk3N2ItYzJjNi00Y2Y0LTg0YWUtYWYwNGNkNDYwYjBhXkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_.jpg",summary:"The story chronicles the adventures of a young farm girl named Dorothy in the magical Land of Oz, after she and her pet dog Toto are swept away from their Kansas home by a cyclone. The book is one of the best-known stories in American literature and has been widely translated.",slug:"the-wonderful-wizard-of-oz",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,adaptations:[{name:"The Wonderful Wizard of Oz",year:1939,image:"https://m.media-amazon.com/images/M/MV5BMTUxNjQwNzIyNl5BMl5BanBnXkFtZTcwMDg4NTkxNA@@._V1_SY1000_CR0,0,1370,1000_AL_.jpg"},{name:"The Wonderful Land of Oz",year:1969,image:"https://m.media-amazon.com/images/M/MV5BYWM0NTc0YjYtZDIzNi00YjFkLWJmNWYtY2UxNjA4NWJmNTA5XkEyXkFqcGdeQXVyMTEzNzczMA@@._V1_.jpg"},{name:"Journey Back to Oz",year:1971,image:"https://m.media-amazon.com/images/M/MV5BYjc3ZmUwMDUtZGZjYy00MTNiLTkxOTktZmIwMzc4OGE3MjFlXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg"},{name:"The Wonderful Wizard of Oz",year:1910,image:"https://m.media-amazon.com/images/M/MV5BOTIwN2Q0NTItYjdjMC00ZGIxLTkyZTctMzEwN2JhZDhmYjBiXkEyXkFqcGdeQXVyNTQ1NDQ3NDc@._V1_SY1000_CR0,0,1310,1000_AL_.jpg"},{name:"Ozu No Mahôtsukai",year:1987,image:"https://m.media-amazon.com/images/M/MV5BMTY0NTY2Nzg0OF5BMl5BanBnXkFtZTgwNTY2MTY1MjE@._V1_.jpg"},{name:"The Wiz",year:1978,image:"https://m.media-amazon.com/images/M/MV5BNjU2MDU2MzY2OV5BMl5BanBnXkFtZTgwNjU0NzIwMjE@._V1_SX1508_CR0,0,1508,999_AL_.jpg"},{name:"Tom & Jerry and the Wizard of Oz",year:2011,image:"https://m.media-amazon.com/images/M/MV5BZTc4NTA2NTItYzQ2Yi00M2Y3LWIzYjUtZjczNzlmYmEwNzRjXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg"}]},{title:"Twelve Years a Slave",author:"Solomon Northup",themes:"Non-Fiction, Autobiography, American History, Slavery",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,slug:"twelve-years-a-slave",adaptations:[{name:"12 Years a Slave",year:2013,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BMjI1NDUwOTE0MF5BMl5BanBnXkFtZTcwNDEwMzY3OQ@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",awards:[{name:"Academy Award Winner",categories:["Best Motion Picture of the Year","Best Supporting Actress","Best Writing, Adapted Screenplay"]},{name:"Golden Globe Winner",categories:["Best Drama Motion Picture"]},{name:"BAFTA Winner",categories:["Best Film","Best Leading Actor"]}]},{name:"Solomon Northup's Odyssey",year:1984,selectedMovie:!1,image:"https://theworldthroughlee.files.wordpress.com/2019/09/2014-01-02_northup_02-1.jpg",awards:null}],summary:"It is a slave narrative of a black man who was born free in New York state but kidnapped in Washington, D.C., sold into slavery, and kept in bondage for 12 years in Louisiana. He provided details of slave markets in Washington, D.C. and New Orleans, as well as describing at length cotton and sugar cultivation on major plantations in Louisiana."},{title:"Little Women",author:"Louisa A. Alcott",themes:"Semi-autobiography, Female-Led",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"little-women",adaptations:[{name:"Little Women",year:2019,image:"https://m.media-amazon.com/images/M/MV5BOTYzNjdlZGUtNzk3OC00ODgyLWE1MWItY2ViZjljMGNmYWUxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"},{name:"Little Women",image:"https://m.media-amazon.com/images/M/MV5BYTg4NjU4YjYtYTBiMi00NzhlLWE3YjktNWYyMjYyMGEzYjlmXkEyXkFqcGdeQXVyNjkxMzgzODU@._V1_SX1777_CR0,0,1777,999_AL_.jpg",year:2018},{name:"Little Women",year:2017,image:"https://m.media-amazon.com/images/M/MV5BNmIxYTQ5NmMtZDRiYy00N2U2LWJjZjctM2FkZTY2MmMwNjQxXkEyXkFqcGdeQXVyNjczNTQyNzY@._V1_.jpg"},{name:"Little Women",year:1994,image:"https://m.media-amazon.com/images/M/MV5BMGZlYTZiYzktY2Q0My00NThjLThjMjUtMmU1YWMyM2I1ZmE5XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_.jpg"}],summary:"Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women. Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War."},{title:"The Home and the World",author:"Rabindranath Tagore",themes:"Fiction, Indian Literature, Romance, Historical",summary:"Set on a Bengali noble's estate in 1908, this is both a love story and a novel of political awakening. The central character, Bimala, is torn between the duties owed to her husband, Nikhil, and the demands made on her by the radical leader, Sandip. Her attempts to resolve the irreconciliable pressures of the home and world reflect the conflict in India itself, and the tragic outcome foreshadows the unrest that accompanied Partition in 1947.",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"the-home-and-the-world",adaptations:[{name:"Ghare Baire",year:1984,image:"https://m.media-amazon.com/images/M/MV5BZGU4MGRiODMtYmU0MS00NTBjLTg5MjgtZTE3MzlkMDEyODliXkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_.jpg"}]},{title:"Grimms Fairytales",author:"Jacob Grimm and Wilhelm Grimm",themes:"Folklore, Fairytales, German",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"grimms-fairytales",adaptations:[{name:"Disney's Cinderella",year:1950,selectedMovie:!0,image:"https://media.npr.org/assets/img/2015/03/12/princess-disney_wide-f4eeaa53bb8f62c23fed393f3cf586694fba815f-s800-c85.jpg"},{name:"A Cinderella Story",year:2004,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMzJmNTM3ZjUtMmYwNy00MjU1LTgzZmYtMjk3NWQzNWNlMmU1XkEyXkFqcGdeQXVyNTg3Njg4ODI@._V1_.jpg"},{name:"Into the Woods",year:2014,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMjI0MTYxODI5MV5BMl5BanBnXkFtZTgwMjkwMzQzMjE@._V1_.jpg"},{name:"Tangled",year:2010,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTU5MTU2NTIyOF5BMl5BanBnXkFtZTcwNzY2MzQwNA@@._V1_SX1777_CR0,0,1777,936_AL_.jpg"},{name:"Sleeping Beauty",year:1959,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTg2MzYyNDM4NV5BMl5BanBnXkFtZTcwMzE0MjIyNw@@._V1_SX1777_CR0,0,1777,688_AL_.jpg"}],summary:"Originally titled Children’s and Household Tales, The Complete Grimm’s Fairy Tales contains the essential bedtime stories for children worldwide for the better part of two centuries. The Brothers Grimm, Jacob and Wilhelm, were German linguists and cultural researchers who gathered legendary folklore and aimed to collect the stories exactly as they heard them"},{title:"Hearts of Darkness",author:"Joseph Conrad",themes:"Non-Fiction, Autobiography, American History, Slavery",number:2,summary:" It is a story within a story, following a character named Charlie Marlow, who recounts his adventure to a group of men onboard an anchored ship. The story told is of his early life as a ferry boat captain. Although his job was to transport ivory downriver, Charlie develops an interest in investing an ivory procurement agent, Kurtz, who is employed by the government. Preceded by his reputation as a brilliant emissary of progress, Kurtz has now established himself as a god among the natives in “one of the darkest places on earth.” Marlow suspects something else of Kurtz: he has gone mad. A reflection on corruptive European colonialism and a journey into the nightmare psyche of one of the corrupted, Heart of Darkness is considered one of the most influential works ever written.",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,slug:"hearts-of-darkness",adaptations:[{name:"Apocalypse Now",year:1979,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTc5OTI5MzAxMl5BMl5BanBnXkFtZTcwNDYyNDY4Mw@@._V1_SY1000_CR0,0,1465,1000_AL_.jpg",awards:[{name:"Academy Award Winner",categories:["Best Cinematography","Best Sound"]},{name:"Golden Globe Winner",categories:["Best Director","Best Supporting Actor","Best Original Score"]},{name:"BAFTA Winner",categories:["Best Direction","Best Supporting Actor"]}]},{name:"Hearts of Darkness: A Filmmaker's Apocalypse",year:1991,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BNGI5OWU5ZmItOWM0Ni00Y2JiLWIyNTUtMmU4ZjM2YjA4ZmI0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"},{name:"Hearts of Darkness",year:1993,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BYmI0MjE0Y2MtMTUzNy00MGU5LThjMTktMWUzMWZlZmU3YjJjXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",awards:null},{name:"Ad Astra",year:2019,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BOThiMThjOTYtMDFjZi00OWU1LWFlYzUtNDZjMmQyZjFlMjliXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg",awards:null}]},{title:"Treasure Island",author:"Robert Louis Stevenson",themes:"Fiction, Adventure, Coming-of-Age Story, Young Adult, Pirates",summary:"For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From the moment young Jim Hawkins first encounters the sinister Blind Pew at the Admiral Benbow Inn until the climactic battle for treasure on a tropic isle, the novel creates scenes and characters that have fired the imaginations of generations of readers. ",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,slug:"treasure-island",adaptations:[{name:"Black Sails",year:2014,image:"https://m.media-amazon.com/images/M/MV5BZjU5MGQ2MWQtMTFkMC00ZTViLWFmNDEtNWI0NmIwNmIxMWYzXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_SY1000_SX1500_AL_.jpg"},{name:"Treasure Island",year:1978,image:"https://m.media-amazon.com/images/M/MV5BYzQzZmQwMDUtZThhZS00OTcyLWI5NDUtNjJjOTE0NmNkZWI3XkEyXkFqcGdeQXVyMzc5ODE0NTU@._V1_.jpg"},{name:"Treasure Island",year:1990,image:"https://m.media-amazon.com/images/M/MV5BNWNhMTNlMzktNDBhYi00MTdhLWIyYTYtMjE1ZDVlZWExZDg0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"}]},{title:"Oliver Twist",author:"Charles Dickens",themes:"Historical Fiction, Victorian Era London, British Literature",summary:"The story of Oliver Twist - orphaned, and set upon by evil and adversity from his first breath - shocked readers when it was published. After running away from the workhouse and pompous beadle Mr Bumble, Oliver finds himself lured into a den of thieves peopled by vivid and memorable characters - the Artful Dodger, vicious burglar Bill Sikes, his dog Bull's Eye, and prostitute Nancy, all watched over by cunning master-thief Fagin. Combining elements of Gothic Romance, the Newgate Novel and popular melodrama, Dickens created an entirely new kind of fiction, scathing in its indictment of a cruel society, and pervaded by an unforgettable sense of threat and mystery.",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,slug:"oliver-twist",adaptations:[{name:"Twist",year:2020,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BYzY4MTkzMjUtNzQwMy00NGFjLTkzMTQtYzE2M2ZmMWQ5YzcxXkEyXkFqcGdeQXVyOTAwNjUwNTA@._V1_.jpg"},{name:"August Rush",year:2007,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTgzMDE2Mzc5OF5BMl5BanBnXkFtZTcwNTM2NjQzMw@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg"},{name:"Oliver Twist",year:2005,selectedMovie:!1,image:""},{name:"Twist",year:2003,selectedMovie:!1,image:""},{name:"Oliver Twist",year:1996,selectedMovie:!1,image:""},{name:"Oliver & Company",year:1998,selectedMovie:!1,image:""}]},{title:"Frankenstein",author:"Mary Shelley",themes:"Horror, Science Fiction, Gothic Novel, Monsters, Creation",summary:"At once a Gothic thriller, a passionate romance, and a cautionary tale about the dangers of science, Frankenstein tells the story of committed science student Victor Frankenstein. Obsessed with discovering the cause of generation and life and bestowing animation upon lifeless matter, Frankenstein assembles a human being from stolen body parts but; upon bringing it to life, he recoils in horror at the creature's hideousness. Tormented by isolation and loneliness, the once-innocent creature turns to evil and unleashes a campaign of murderous revenge against his creator, Frankenstein.",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"frankenstein",adaptations:[{name:"Victor Frankenstein",year:2015,image:"https://m.media-amazon.com/images/M/MV5BMGZiMTY3MDQtNDg1Ny00OTI2LWJkOGEtYzAzM2IzYjRkNmYyXkEyXkFqcGdeQXVyNTUzMDI3Nzc@._V1_SY1000_CR0,0,1506,1000_AL_.jpg"},{name:"I, Frankenstein",year:2014,image:"https://m.media-amazon.com/images/M/MV5BMjI4MzYyMTEyNV5BMl5BanBnXkFtZTgwNDQ3Njc4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"},{name:"Rocky Horror Picture Show",year:1975,image:"https://cdn.theatlantic.com/thumbor/SFGIzjvZ2gJsrS34e07fynh7lWw=/14x44:1778x1036/1440x810/media/img/mt/2015/09/rocky_horror_image_3/original.jpg"},{name:"Frankenweenie",year:2012,image:"https://m.media-amazon.com/images/M/MV5BMTEyMTc2MDY5MjdeQTJeQWpwZ15BbWU3MDM2OTMwNTg@._V1_SX1777_CR0,0,1777,960_AL_.jpg"}]}]}},cccb:function(e,a,t){"use strict";var o=t("5ced"),n=t.n(o);n.a},ee1f:function(e,a,t){}});
//# sourceMappingURL=app.1507326c.js.map