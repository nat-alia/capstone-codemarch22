(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BookPage~home"],{"54f3":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bookspace"},[t("router-link",{attrs:{to:{name:"BookPage",params:{slug:e.slugprop}}},on:{mouseover:function(a){e.hoveredOn=!0}}},[t("div",{staticClass:"book"},[t("div",{staticClass:"spine"}),t("div",{staticClass:"title"},[e._v(e._s(e.titleprop))]),t("div",{staticClass:"author"},[e._v(e._s(e.authorprop))])])]),t("div",{staticClass:"info-bundle"},[t("div",{staticClass:"themes"},[e._v(e._s(e.themeprop))])]),t("div",{staticClass:"category-label"},[e._v(e._s(e.categoryprop))]),t("div",{staticClass:"sticker-group sticker"},[t("div",{staticClass:"sticker-text"},[t("div",{staticClass:"number"},[e._v(e._s(e.numberprop))]),t("div",[e._v("Contemporary Works")])])])],1)},n=[],i=(t("a9e3"),t("c0d6")),r={name:"BookItem",props:{titleprop:String,authorprop:String,themeprop:String,numberprop:Number,femaleprop:Boolean,url:String,type:String,summaryprop:String,slugprop:String,categoryprop:String},data:function(){return{books:i["a"].books}}},s=r,m=(t("9f0d"),t("2877")),l=Object(m["a"])(s,o,n,!1,null,null,null);a["a"]=l.exports},5899:function(e,a){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,a,t){var o=t("1d80"),n=t("5899"),i="["+n+"]",r=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),m=function(e){return function(a){var t=String(o(a));return 1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(s,"")),t}};e.exports={start:m(1),end:m(2),trim:m(3)}},"65f0":function(e,a,t){var o=t("861d"),n=t("e8b5"),i=t("b622"),r=i("species");e.exports=function(e,a){var t;return n(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)?o(t)&&(t=t[r],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},7156:function(e,a,t){var o=t("861d"),n=t("d2bb");e.exports=function(e,a,t){var i,r;return n&&"function"==typeof(i=a.constructor)&&i!==t&&o(r=i.prototype)&&r!==t.prototype&&n(e,r),e}},"9f0d":function(e,a,t){"use strict";var o=t("ee1f"),n=t.n(o);n.a},a9e3:function(e,a,t){"use strict";var o=t("83ab"),n=t("da84"),i=t("94ca"),r=t("6eeb"),s=t("5135"),m=t("c6b6"),l=t("7156"),c=t("c04e"),d=t("d039"),h=t("7c73"),g=t("241c").f,y=t("06cf").f,u=t("9bf2").f,M=t("58a8").trim,p="Number",f=n[p],k=f.prototype,B=m(h(k))==p,N=function(e){var a,t,o,n,i,r,s,m,l=c(e,!1);if("string"==typeof l&&l.length>2)if(l=M(l),a=l.charCodeAt(0),43===a||45===a){if(t=l.charCodeAt(2),88===t||120===t)return NaN}else if(48===a){switch(l.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+l}for(i=l.slice(2),r=i.length,s=0;s<r;s++)if(m=i.charCodeAt(s),m<48||m>n)return NaN;return parseInt(i,o)}return+l};if(i(p,!f(" 0o1")||!f("0b1")||f("+0x1"))){for(var w,T=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof T&&(B?d((function(){k.valueOf.call(t)})):m(t)!=p)?l(new f(N(a)),t,T):N(a)},_=o?g(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;_.length>v;v++)s(f,w=_[v])&&!s(T,w)&&u(T,w,y(f,w));T.prototype=k,k.constructor=T,r(n,p,T)}},ae40:function(e,a,t){var o=t("83ab"),n=t("d039"),i=t("5135"),r=Object.defineProperty,s={},m=function(e){throw e};e.exports=function(e,a){if(i(s,e))return s[e];a||(a={});var t=[][e],l=!!i(a,"ACCESSORS")&&a.ACCESSORS,c=i(a,0)?a[0]:m,d=i(a,1)?a[1]:void 0;return s[e]=!!t&&!n((function(){if(l&&!o)return!0;var e={length:-1};l?r(e,1,{enumerable:!0,get:m}):e[1]=1,t.call(e,c,d)}))}},b727:function(e,a,t){var o=t("0366"),n=t("44ad"),i=t("7b0b"),r=t("50c4"),s=t("65f0"),m=[].push,l=function(e){var a=1==e,t=2==e,l=3==e,c=4==e,d=6==e,h=5==e||d;return function(g,y,u,M){for(var p,f,k=i(g),B=n(k),N=o(y,u,3),w=r(B.length),T=0,_=M||s,v=a?_(g,w):t?_(g,0):void 0;w>T;T++)if((h||T in B)&&(p=B[T],f=N(p,T,k),e))if(a)v[T]=f;else if(f)switch(e){case 3:return!0;case 5:return p;case 6:return T;case 2:m.call(v,p)}else if(c)return!1;return d?-1:l||c?c:v}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c0d6:function(e,a,t){"use strict";a["a"]={books:[{title:"EMMA",author:"Jane Austen",year:1815,themes:"Fiction, Romance, British Literature, Female-Lead",female:!0,summary:"Emma Woodhouse is one of Austen's most captivating and vivid characters. Beautiful, spoilt, vain and irrepressibly witty, Emma organizes the lives of the inhabitants of her sleepy little village and plays matchmaker with devastating effect.",quote:"“I may have lost my heart, but not my self-control.”",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,category:"Romance",firstRow:!0,secondRow:!1,slug:"emma",selectedFilm:2,adaptations:[{name:"Emma",year:2020,image:"https://m.media-amazon.com/images/M/MV5BN2NkMjY2ZDQtZDQxYS00ZGE3LTgxYTctMjljYmIwOTBhYWE4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1436,1000_AL_.jpg"},{name:"Aisha",year:2010,image:"https://m.media-amazon.com/images/M/MV5BNjk4OTczYjgtODUzZC00NWMzLWEzMDktODY2YzkyNTY5MzQyXkEyXkFqcGdeQXVyNjY4Nzk0Njk@._V1_.jpg"},{name:"Emma",year:1996,image:"https://m.media-amazon.com/images/M/MV5BYTQwNmFjMTEtYWRhNi00NDAxLTljYzItODkwYjFlOTZkZjVhXkEyXkFqcGdeQXVyNTQxMTIxMTk@._V1_SY1000_CR0,0,1532,1000_AL_.jpg"},{name:"Clueless",year:1995,image:"https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg"}]},{title:"The WONDERFUL WIZARD of OZ",author:"L. Frank Baum",year:1900,themes:"Fiction, Children Literature, Fantasy, Adventure, Witches, Kansas",imgurl:"https://m.media-amazon.com/images/M/MV5BZDBlMTk3N2ItYzJjNi00Y2Y0LTg0YWUtYWYwNGNkNDYwYjBhXkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_.jpg",summary:"The story chronicles the adventures of a young farm girl named Dorothy in the magical Land of Oz, after she and her pet dog Toto are swept away from their Kansas home by a cyclone. The book is one of the best-known stories in American literature and has been widely translated.",quote:"”If we walk far enough, we shall sometime come to someplace.”",slug:"the-wonderful-wizard-of-oz",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,firstRow:!0,secondRow:!1,category:"Fantasy & SciFi",selectedFilm:5,adaptations:[{name:"Tom & Jerry and the Wizard of Oz",year:2011,image:"https://m.media-amazon.com/images/M/MV5BZTc4NTA2NTItYzQ2Yi00M2Y3LWIzYjUtZjczNzlmYmEwNzRjXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg"},{name:"Ozu No Mahôtsukai",year:1987,image:"https://m.media-amazon.com/images/M/MV5BMTY0NTY2Nzg0OF5BMl5BanBnXkFtZTgwNTY2MTY1MjE@._V1_.jpg"},{name:"The Wiz",year:1978,image:"https://m.media-amazon.com/images/M/MV5BNjU2MDU2MzY2OV5BMl5BanBnXkFtZTgwNjU0NzIwMjE@._V1_SX1508_CR0,0,1508,999_AL_.jpg"},{name:"Journey Back to Oz",year:1971,image:"https://m.media-amazon.com/images/M/MV5BYjc3ZmUwMDUtZGZjYy00MTNiLTkxOTktZmIwMzc4OGE3MjFlXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg"},{name:"The Wonderful Land of Oz",year:1969,image:"https://m.media-amazon.com/images/M/MV5BYWM0NTc0YjYtZDIzNi00YjFkLWJmNWYtY2UxNjA4NWJmNTA5XkEyXkFqcGdeQXVyMTEzNzczMA@@._V1_.jpg"},{name:"The Wonderful Wizard of Oz",year:1939,image:"https://m.media-amazon.com/images/M/MV5BMTUxNjQwNzIyNl5BMl5BanBnXkFtZTcwMDg4NTkxNA@@._V1_SY1000_CR0,0,1370,1000_AL_.jpg"},{name:"The Wonderful Wizard of Oz",year:1910,image:"https://m.media-amazon.com/images/M/MV5BOTIwN2Q0NTItYjdjMC00ZGIxLTkyZTctMzEwN2JhZDhmYjBiXkEyXkFqcGdeQXVyNTQ1NDQ3NDc@._V1_SY1000_CR0,0,1310,1000_AL_.jpg"}]},{title:"TWELVE YEARS a SLAVE",author:"Solomon Northup",year:1853,themes:"Non-Fiction, Autobiography, American History, Slavery",quote:"“Life is dear to every living thing; the worm that crawls upon the ground will struggle for it.”",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,firstRow:!0,secondRow:!1,slug:"twelve-years-a-slave",category:"Historical",selectedFilm:0,adaptations:[{name:"12 Years a Slave",year:2013,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BMjI1NDUwOTE0MF5BMl5BanBnXkFtZTcwNDEwMzY3OQ@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",awards:[{name:"Academy Award Winner",categories:["Best Motion Picture of the Year","Best Supporting Actress","Best Writing, Adapted Screenplay"]},{name:"Golden Globe Winner",categories:["Best Drama Motion Picture"]},{name:"BAFTA Winner",categories:["Best Film","Best Leading Actor"]}]},{name:"Solomon Northup's Odyssey",year:1984,selectedMovie:!1,image:"https://theworldthroughlee.files.wordpress.com/2019/09/2014-01-02_northup_02-1.jpg",awards:null}],summary:"It is a slave narrative of a black man who was born free in New York state but kidnapped in Washington, D.C., sold into slavery, and kept in bondage for 12 years in Louisiana. He provided details of slave markets in Washington, D.C. and New Orleans, as well as describing at length cotton and sugar cultivation on major plantations in Louisiana."},{title:"TREASURE ISLAND",author:"Robert Louis Stevenson",year:1882,themes:"Fiction, Adventure, Coming-of-Age Story, Young Adult, Pirates",quote:"“Seaward ho! Hang the treasure! It's the glory of the sea that has turned my head.”",summary:"For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From the moment young Jim Hawkins first encounters the sinister Blind Pew at the Admiral Benbow Inn until the climactic battle for treasure on a tropic isle, the novel creates scenes and characters that have fired the imaginations of generations of readers. ",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,firstRow:!0,secondRow:!1,selectedFilm:0,category:"Adventure",slug:"treasure-island",adaptations:[{name:"Black Sails",year:2014,image:"https://m.media-amazon.com/images/M/MV5BZjU5MGQ2MWQtMTFkMC00ZTViLWFmNDEtNWI0NmIwNmIxMWYzXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_SY1000_SX1500_AL_.jpg"},{name:"Treasure Island",year:1990,image:"https://m.media-amazon.com/images/M/MV5BNWNhMTNlMzktNDBhYi00MTdhLWIyYTYtMjE1ZDVlZWExZDg0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"},{name:"Treasure Island",year:1978,image:"https://m.media-amazon.com/images/M/MV5BYzQzZmQwMDUtZThhZS00OTcyLWI5NDUtNjJjOTE0NmNkZWI3XkEyXkFqcGdeQXVyMzc5ODE0NTU@._V1_.jpg"}]},{title:"GRIMM'S FAIRYTALES",author:"Jacob Grimm and Wilhelm Grimm",year:1812,themes:"Folklore, Fairytales, German",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,category:"Fantasy & SciFi",quote:"“One feather is of no use to me, I must have the whole bird.”",slug:"grimms-fairytales",firstRow:!0,secondRow:!1,selectedFilm:4,adaptations:[{name:"Into the Woods",year:2014,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMjI0MTYxODI5MV5BMl5BanBnXkFtZTgwMjkwMzQzMjE@._V1_.jpg"},{name:"Tangled",year:2010,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTU5MTU2NTIyOF5BMl5BanBnXkFtZTcwNzY2MzQwNA@@._V1_SX1777_CR0,0,1777,936_AL_.jpg"},{name:"A Cinderella Story",year:2004,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMzJmNTM3ZjUtMmYwNy00MjU1LTgzZmYtMjk3NWQzNWNlMmU1XkEyXkFqcGdeQXVyNTg3Njg4ODI@._V1_.jpg"},{name:"Sleeping Beauty",year:1959,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTg2MzYyNDM4NV5BMl5BanBnXkFtZTcwMzE0MjIyNw@@._V1_SX1777_CR0,0,1777,688_AL_.jpg"},{name:"Disney's Cinderella",year:1950,selectedMovie:!0,image:"https://media.npr.org/assets/img/2015/03/12/princess-disney_wide-f4eeaa53bb8f62c23fed393f3cf586694fba815f-s800-c85.jpg"}],summary:"Originally titled Children’s and Household Tales, The Complete Grimm’s Fairy Tales contains the essential bedtime stories for children worldwide for the better part of two centuries. The Brothers Grimm, Jacob and Wilhelm, were German linguists and cultural researchers who gathered legendary folklore and aimed to collect the stories exactly as they heard them"},{title:"LITTLE WOMEN",author:"Louisa A. Alcott",year:1868,themes:"Semi-autobiography, Female-Led",quote:"“Let us be elegant or die!”",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,category:"Romance",firstRow:!0,secondRow:!1,selectedFilm:0,slug:"little-women",adaptations:[{name:"Little Women",year:2019,image:"https://m.media-amazon.com/images/M/MV5BOTYzNjdlZGUtNzk3OC00ODgyLWE1MWItY2ViZjljMGNmYWUxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"},{name:"Little Women",image:"https://m.media-amazon.com/images/M/MV5BYTg4NjU4YjYtYTBiMi00NzhlLWE3YjktNWYyMjYyMGEzYjlmXkEyXkFqcGdeQXVyNjkxMzgzODU@._V1_SX1777_CR0,0,1777,999_AL_.jpg",year:2018},{name:"Little Women",year:2017,image:"https://m.media-amazon.com/images/M/MV5BNmIxYTQ5NmMtZDRiYy00N2U2LWJjZjctM2FkZTY2MmMwNjQxXkEyXkFqcGdeQXVyNjczNTQyNzY@._V1_.jpg"},{name:"Little Women",year:1994,image:"https://m.media-amazon.com/images/M/MV5BMGZlYTZiYzktY2Q0My00NThjLThjMjUtMmU1YWMyM2I1ZmE5XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_.jpg"}],summary:"Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women. Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War."},{title:"The HOME and the WORLD",author:"Rabindranath Tagore",year:1916,themes:"Fiction, Indian Literature, Romance, Historical",summary:"Set on a Bengali noble's estate in 1908, this is both a love story and a novel of political awakening. The central character, Bimala, is torn between the duties owed to her husband, Nikhil, and the demands made on her by the radical leader, Sandip. Her attempts to resolve the irreconciliable pressures of the home and world reflect the conflict in India itself, and the tragic outcome foreshadows the unrest that accompanied Partition in 1947.",quote:"“To worship my country as a god is to bring a curse upon it.”",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,category:"Romance",firstRow:!1,secondRow:!0,selectedFilm:0,slug:"the-home-and-the-world",adaptations:[{name:"Ghare Baire",year:1984,image:"https://m.media-amazon.com/images/M/MV5BZGU4MGRiODMtYmU0MS00NTBjLTg5MjgtZTE3MzlkMDEyODliXkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_.jpg"}]},{title:"OLIVER TWIST",author:"Charles Dickens",year:1839,themes:"Historical Fiction, Victorian Era London, British Literature",summary:"The story of Oliver Twist - orphaned, and set upon by evil and adversity from his first breath - shocked readers when it was published. After running away from the workhouse and pompous beadle Mr Bumble, Oliver finds himself lured into a den of thieves peopled by vivid and memorable characters - the Artful Dodger, vicious burglar Bill Sikes, his dog Bull's Eye, and prostitute Nancy, all watched over by cunning master-thief Fagin. Combining elements of Gothic Romance, the Newgate Novel and popular melodrama, Dickens created an entirely new kind of fiction, scathing in its indictment of a cruel society, and pervaded by an unforgettable sense of threat and mystery.",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,category:"Historical",firstRow:!1,secondRow:!0,quote:"“Some people are nobody's enemies but their own.”",slug:"oliver-twist",selectedFilm:0,adaptations:[{name:"Twist",year:2020,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BYzY4MTkzMjUtNzQwMy00NGFjLTkzMTQtYzE2M2ZmMWQ5YzcxXkEyXkFqcGdeQXVyOTAwNjUwNTA@._V1_.jpg"},{name:"August Rush",year:2007,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTgzMDE2Mzc5OF5BMl5BanBnXkFtZTcwNTM2NjQzMw@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg"},{name:"Oliver Twist",year:2005,selectedMovie:!1,image:""},{name:"Twist",year:2003,selectedMovie:!1,image:""},{name:"Oliver & Company",year:1998,selectedMovie:!1,image:""},{name:"Oliver Twist",year:1996,selectedMovie:!1,image:""}]},{title:"A JOURNAL of the PLAGUE YEAR",author:"Daniel Defoe",year:1722,quote:"This necessity of going out of our houses to buy provisions was in a great measure the ruin of the whole city.",themes:"Horror, Science Fiction, Gothic Novel, Monsters, Creation",summary:"At once a Gothic thriller, a passionate romance, and a cautionary tale about the dangers of science, Frankenstein tells the story of committed science student Victor Frankenstein. Obsessed with discovering the cause of generation and life and bestowing animation upon lifeless matter, Frankenstein assembles a human being from stolen body parts but; upon bringing it to life, he recoils in horror at the creature's hideousness. Tormented by isolation and loneliness, the once-innocent creature turns to evil and unleashes a campaign of murderous revenge against his creator, Frankenstein.",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,category:"Historical",firstRow:!1,secondRow:!0,selectedFilm:1,slug:"a-journal-of-the-plague-year",adaptations:[{name:"The Periwig Maker",year:1999,image:"https://images.justwatch.com/backdrop/11262053/s1920/the-periwig-maker"},{name:"El Año de la Peste",year:1980,image:"https://remezcla.com/wp-content/uploads/2020/04/El-an%CC%83o-de-la-peste-still.jpg"}]},{title:"HEARTS OF DARKNESS",author:"Joseph Conrad",year:1902,themes:"Non-Fiction, Autobiography, American History, Slavery",quote:"“Like a running blaze on a plain, like a flash of lightning in the clouds. We live in the flicker.”",summary:" It is a story within a story, following a character named Charlie Marlow, who recounts his adventure to a group of men onboard an anchored ship. The story told is of his early life as a ferry boat captain. Although his job was to transport ivory downriver, Charlie develops an interest in investing an ivory procurement agent, Kurtz, who is employed by the government. Preceded by his reputation as a brilliant emissary of progress, Kurtz has now established himself as a god among the natives in “one of the darkest places on earth.” Marlow suspects something else of Kurtz: he has gone mad. A reflection on corruptive European colonialism and a journey into the nightmare psyche of one of the corrupted, Heart of Darkness is considered one of the most influential works ever written.",category:"Adventure",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,firstRow:!1,secondRow:!0,selectedFilm:2,slug:"hearts-of-darkness",adaptations:[{name:"Ad Astra",year:2019,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BOThiMThjOTYtMDFjZi00OWU1LWFlYzUtNDZjMmQyZjFlMjliXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg",awards:null},{name:"Hearts of Darkness: A Filmmaker's Apocalypse",year:1991,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BNGI5OWU5ZmItOWM0Ni00Y2JiLWIyNTUtMmU4ZjM2YjA4ZmI0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"},{name:"Hearts of Darkness",year:1993,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BYmI0MjE0Y2MtMTUzNy00MGU5LThjMTktMWUzMWZlZmU3YjJjXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",awards:null},{name:"Apocalypse Now",year:1979,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTc5OTI5MzAxMl5BMl5BanBnXkFtZTcwNDYyNDY4Mw@@._V1_SY1000_CR0,0,1465,1000_AL_.jpg",awards:[{name:"Academy Award Winner",categories:["Best Cinematography","Best Sound"]},{name:"Golden Globe Winner",categories:["Best Director","Best Supporting Actor","Best Original Score"]},{name:"BAFTA Winner",categories:["Best Direction","Best Supporting Actor"]}]}]},{title:"FRANKENSTEIN",author:"Mary Shelley",quote:"“I ought to be thy Adam, but I am rather the fallen angel...”",themes:"Horror, Science Fiction, Gothic Novel, Monsters, Creation",summary:"At once a Gothic thriller, a passionate romance, and a cautionary tale about the dangers of science, Frankenstein tells the story of committed science student Victor Frankenstein. Obsessed with discovering the cause of generation and life and bestowing animation upon lifeless matter, Frankenstein assembles a human being from stolen body parts but; upon bringing it to life, he recoils in horror at the creature's hideousness. Tormented by isolation and loneliness, the once-innocent creature turns to evil and unleashes a campaign of murderous revenge against his creator, Frankenstein.",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,category:"Fantasy & SciFi",firstRow:!1,secondRow:!0,selectedFilm:0,slug:"frankenstein",adaptations:[{name:"Victor Frankenstein",year:2015,image:"https://m.media-amazon.com/images/M/MV5BMGZiMTY3MDQtNDg1Ny00OTI2LWJkOGEtYzAzM2IzYjRkNmYyXkEyXkFqcGdeQXVyNTUzMDI3Nzc@._V1_SY1000_CR0,0,1506,1000_AL_.jpg"},{name:"I, Frankenstein",year:2014,image:"https://m.media-amazon.com/images/M/MV5BMjI4MzYyMTEyNV5BMl5BanBnXkFtZTgwNDQ3Njc4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"},{name:"Rocky Horror Picture Show",year:1975,image:"https://cdn.theatlantic.com/thumbor/SFGIzjvZ2gJsrS34e07fynh7lWw=/14x44:1778x1036/1440x810/media/img/mt/2015/09/rocky_horror_image_3/original.jpg"},{name:"Frankenweenie",year:2012,image:"https://m.media-amazon.com/images/M/MV5BMTEyMTc2MDY5MjdeQTJeQWpwZ15BbWU3MDM2OTMwNTg@._V1_SX1777_CR0,0,1777,960_AL_.jpg"}]},{title:"PYGMALION",author:"George Bernard Shaw",quote:"“I sold flowers. I didn't sell myself. Now you've made a lady of me I'm not fit to sell anything else.”",themes:"Mystery, Detectives",summary:"In Shaw's clever adaptation, Professor Henry Higgins, a linguistic expert, takes on a bet that he can transform an awkward cockney flower seller into a refined young lady simply by polishing her manners and changing the way she speaks. In the process of convincing society that his creation is a mysterious royal figure, the Professor also falls in love with his elegant handiwork. The irresistible theme of the emerging butterfly, together with Shaw's brilliant dialogue and splendid skills as a playwright, have made Pygmalion one of the most popular comedies in the English language. A staple of college drama courses, it is still widely performed.",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,category:"Romance",firstRow:!1,secondRow:!0,slug:"pygmalion",selectedFilm:3,adaptations:[{name:"The Duff",year:2015,image:"https://m.media-amazon.com/images/M/MV5BN2M1MTdlMDYtNmEzMi00YjE3LTkyYTYtMzg5MWI0ODZlMWY4XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"},{name:"She's All That",year:1999,image:"https://m.media-amazon.com/images/M/MV5BMjJjZGJiZWUtMWQwMC00MmZlLWE4OGQtZTk2MTE1NDZmMWNjXkEyXkFqcGdeQXVyNjAwODA4Mw@@._V1_.jpg"},{name:"The Opening of Misty Beethoven",year:1975,image:"https://distribpixblog.files.wordpress.com/2012/03/misty-beethoven-film-hot12.jpg"},{name:"My Fair Lady",year:1964,image:"https://m.media-amazon.com/images/M/MV5BMTk0MzU4MDk1OV5BMl5BanBnXkFtZTgwMzUzOTk5MTE@._V1_SY1000_CR0,0,1482,1000_AL_.jpg"},{name:"Kitty",year:1945,image:"https://m.media-amazon.com/images/M/MV5BNDQ0MzY1YjQtYjUzZi00YTE0LWJiYWUtOGVkNWZhMmQxZTM4XkEyXkFqcGdeQXVyNjc2OTM5MTU@._V1_SY1000_CR0,0,1346,1000_AL_.jpg"},{name:"Pygmalion",year:1938,image:"https://m.media-amazon.com/images/M/MV5BMTc2MjAzMDc1Nl5BMl5BanBnXkFtZTgwMDY1Nzk5MTE@._V1_SX1411_CR0,0,1411,999_AL_.jpg"},{name:"Pygmalion",year:1937,image:"https://forums.tcm.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.virtual-history.com/movie/photo/m01/large/pygmalion.jpg&key=326b47201e9e0fe69dca9c46e89b084dba4db658ef6c1560aec2d58a622318ef"},{name:"Hoi Polloi",year:1935,image:"https://m.media-amazon.com/images/M/MV5BNGIzNjAxMjItOTdkNS00NjMzLWFlYWMtNjBkODRmOWRmZmRhXkEyXkFqcGdeQXVyMjIyNjE2NA@@._V1_.jpg"}]}]}},e8b5:function(e,a,t){var o=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},ee1f:function(e,a,t){}}]);
//# sourceMappingURL=BookPage~home.dc1bb86c.js.map