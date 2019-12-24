(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(e,a,t){"use strict";t.r(a);t(11),t(20),t(94),t(190);var n=t(0),i=t.n(n),o=t(263),r=t(262),l=t(294),u=t.n(l),s=t(278),c=t(283),m=t(140),p=t(139),v=t(18),E=t(284),d=t.n(E),f=t(264),g=t.n(f),h=function(e){var a=e.reduce((function(e,a){return e+a}),0)/e.length;return Number(a.toFixed(1))},y={employees:[],filters:{state:null,nationality:null,age:null,rating:null}},b=function(){var e=Object(m.b)(p.e),a=e.data,t=e.loading,o=Object(n.useState)(y),r=o[0],l=o[1];Object(n.useEffect)((function(){var e=a?a.getAllEmployees:[];e=r.filters.state?e.filter((function(e){return e.location.state===r.filters.state})):e,e=r.filters.nationality?e.filter((function(e){return e.characteristic.nationality===r.filters.nationality})):e,e=r.filters.age&&29===Number(r.filters.age)?e.filter((function(e){return e.age<=29})):e,e=r.filters.age&&39===Number(r.filters.age)?e.filter((function(e){return 30<=e.age&&e.age<=39})):e,e=r.filters.age&&40===Number(r.filters.age)?e.filter((function(e){return e.age>=40})):e,r.filters.rating,e=e.sort((function(e,a){return h(a.score)-h(e.score)})),e="low"===r.filters.rating?e.sort((function(e,a){return h(e.score)-h(a.score)})):e.sort((function(e,a){return h(a.score)-h(e.score)})),l(Object.assign({},r,{employees:e}))}),[a,r.filters]);var E=function(e){var a,t=e.target,n=t.name,i=t.value,o=Object.assign({},r.filters,((a={})[n]=i,a));l(Object.assign({},r,{filters:o}))};return i.a.createElement("div",{className:u.a.background},i.a.createElement("h1",{className:u.a.h1},"FIND AN EMPLOYEE"),i.a.createElement("div",{className:u.a.container},i.a.createElement("div",{className:u.a.filter},i.a.createElement("h5",null,"FILTER"),i.a.createElement("div",{className:u.a.selectors},i.a.createElement(s.a,{name:"state",onChange:function(e){return E(e)}}),i.a.createElement(c.a,{name:"nationality",onChange:function(e){return E(e)}}),i.a.createElement("select",{name:"age",onChange:function(e){return E(e)}},i.a.createElement("option",{hidden:!0,value:null},"Age"),i.a.createElement("option",{value:""},"Age"),i.a.createElement("option",{value:29},"18-29"),i.a.createElement("option",{value:39},"30-39"),i.a.createElement("option",{value:40},"40+")),i.a.createElement("select",{name:"rating",onChange:function(e){return E(e)}},i.a.createElement("option",{hidden:!0,value:null},"Rating"),i.a.createElement("option",{value:""},"Rating"),i.a.createElement("option",{value:"high"},"high"),i.a.createElement("option",{value:"low"},"low")))),t?i.a.createElement("p",{style:{textAlign:"center"}},"Loading..."):i.a.createElement("ul",{className:u.a.employeesUl},r.employees.length?r.employees.map((function(e){var a=e._id,t=e.score,n=e.username,o=e.location,r=e.name,l=e.characteristic,s=e.age;return i.a.createElement("li",{key:a},i.a.createElement("h4",{className:u.a.employeeName},r),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("u",null,"nationality:"))," ",l.nationality?l.nationality:"-"),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("u",null,"age:"))," ",s||"-"),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("u",null,"Languages:"))),i.a.createElement("p",null,l.languages.length?l.languages.map((function(e){return e+" "})):"-"),i.a.createElement("h4",null,"Location"),i.a.createElement("p",null,i.a.createElement("u",null,"state:")," ",o.state?o.state:"-"),i.a.createElement("p",null,i.a.createElement("u",null,"city:")," ",o.city?o.city:"-"),i.a.createElement("h4",null,r+"`s"," Rating:"),i.a.createElement(d.a,{rating:t.length?h(t):0,starRatedColor:"blue",numberOfStars:5}),i.a.createElement("span",{onClick:function(){return Object(v.navigate)("user/#/"+n)}},"View Profile"))})):i.a.createElement("p",null,"nothing found"))))};a.default=function(){return i.a.createElement(o.a,{headerStyle:g.a,lang:"en"},i.a.createElement(r.a,{title:"find-employee"}),i.a.createElement(b,null))}},278:function(e,a,t){"use strict";t(11);var n=t(0),i=t.n(n);a.a=function(e){var a=e.defaultValue,t=e.value,n=e.name,o=e.style,r=e.onChange;return i.a.createElement("select",{defaultValue:a,value:t,style:o,name:n,onChange:r},i.a.createElement("option",{value:""},"None"),i.a.createElement("option",{value:"AL"},"Alabama"),i.a.createElement("option",{value:"AK"},"Alaska"),i.a.createElement("option",{value:"AZ"},"Arizona"),i.a.createElement("option",{value:"AR"},"Arkansas"),i.a.createElement("option",{value:"CA"},"California"),i.a.createElement("option",{value:"CO"},"Colorado"),i.a.createElement("option",{value:"CT"},"Connecticut"),i.a.createElement("option",{value:"DE"},"Delaware"),i.a.createElement("option",{value:"DC"},"District Of Columbia"),i.a.createElement("option",{value:"FL"},"Florida"),i.a.createElement("option",{value:"GA"},"Georgia"),i.a.createElement("option",{value:"HI"},"Hawaii"),i.a.createElement("option",{value:"ID"},"Idaho"),i.a.createElement("option",{value:"IL"},"Illinois"),i.a.createElement("option",{value:"IN"},"Indiana"),i.a.createElement("option",{value:"IA"},"Iowa"),i.a.createElement("option",{value:"KS"},"Kansas"),i.a.createElement("option",{value:"KY"},"Kentucky"),i.a.createElement("option",{value:"LA"},"Louisiana"),i.a.createElement("option",{value:"ME"},"Maine"),i.a.createElement("option",{value:"MD"},"Maryland"),i.a.createElement("option",{value:"MA"},"Massachusetts"),i.a.createElement("option",{value:"MI"},"Michigan"),i.a.createElement("option",{value:"MN"},"Minnesota"),i.a.createElement("option",{value:"MS"},"Mississippi"),i.a.createElement("option",{value:"MO"},"Missouri"),i.a.createElement("option",{value:"MT"},"Montana"),i.a.createElement("option",{value:"NE"},"Nebraska"),i.a.createElement("option",{value:"NV"},"Nevada"),i.a.createElement("option",{value:"NH"},"New Hampshire"),i.a.createElement("option",{value:"NJ"},"New Jersey"),i.a.createElement("option",{value:"NM"},"New Mexico"),i.a.createElement("option",{value:"NY"},"New York"),i.a.createElement("option",{value:"NC"},"North Carolina"),i.a.createElement("option",{value:"ND"},"North Dakota"),i.a.createElement("option",{value:"OH"},"Ohio"),i.a.createElement("option",{value:"OK"},"Oklahoma"),i.a.createElement("option",{value:"OR"},"Oregon"),i.a.createElement("option",{value:"PA"},"Pennsylvania"),i.a.createElement("option",{value:"RI"},"Rhode Island"),i.a.createElement("option",{value:"SC"},"South Carolina"),i.a.createElement("option",{value:"SD"},"South Dakota"),i.a.createElement("option",{value:"TN"},"Tennessee"),i.a.createElement("option",{value:"TX"},"Texas"),i.a.createElement("option",{value:"UT"},"Utah"),i.a.createElement("option",{value:"VT"},"Vermont"),i.a.createElement("option",{value:"VA"},"Virginia"),i.a.createElement("option",{value:"WA"},"Washington"),i.a.createElement("option",{value:"WV"},"West Virginia"),i.a.createElement("option",{value:"WI"},"Wisconsin"),i.a.createElement("option",{value:"WY"},"Wyoming"))}},280:function(e,a,t){var n=t(5);n(n.S,"Number",{isInteger:t(285)})},283:function(e,a,t){"use strict";t(11);var n=t(0),i=t.n(n);a.a=function(e){var a=e.defaultValue,t=e.value,n=e.name,o=e.style,r=e.onChange;return i.a.createElement("select",{defaultValue:a,value:t,name:n,style:o,onChange:r},i.a.createElement("option",{value:""},"None"),i.a.createElement("option",{value:"afghan"},"Afghan"),i.a.createElement("option",{value:"albanian"},"Albanian"),i.a.createElement("option",{value:"algerian"},"Algerian"),i.a.createElement("option",{value:"american"},"American"),i.a.createElement("option",{value:"andorran"},"Andorran"),i.a.createElement("option",{value:"angolan"},"Angolan"),i.a.createElement("option",{value:"antiguans"},"Antiguans"),i.a.createElement("option",{value:"argentinean"},"Argentinean"),i.a.createElement("option",{value:"armenian"},"Armenian"),i.a.createElement("option",{value:"australian"},"Australian"),i.a.createElement("option",{value:"austrian"},"Austrian"),i.a.createElement("option",{value:"azerbaijani"},"Azerbaijani"),i.a.createElement("option",{value:"bahamian"},"Bahamian"),i.a.createElement("option",{value:"bahraini"},"Bahraini"),i.a.createElement("option",{value:"bangladeshi"},"Bangladeshi"),i.a.createElement("option",{value:"barbadian"},"Barbadian"),i.a.createElement("option",{value:"barbudans"},"Barbudans"),i.a.createElement("option",{value:"batswana"},"Batswana"),i.a.createElement("option",{value:"belarusian"},"Belarusian"),i.a.createElement("option",{value:"belgian"},"Belgian"),i.a.createElement("option",{value:"belizean"},"Belizean"),i.a.createElement("option",{value:"beninese"},"Beninese"),i.a.createElement("option",{value:"bhutanese"},"Bhutanese"),i.a.createElement("option",{value:"bolivian"},"Bolivian"),i.a.createElement("option",{value:"bosnian"},"Bosnian"),i.a.createElement("option",{value:"brazilian"},"Brazilian"),i.a.createElement("option",{value:"british"},"British"),i.a.createElement("option",{value:"bruneian"},"Bruneian"),i.a.createElement("option",{value:"bulgarian"},"Bulgarian"),i.a.createElement("option",{value:"burkinabe"},"Burkinabe"),i.a.createElement("option",{value:"burmese"},"Burmese"),i.a.createElement("option",{value:"burundian"},"Burundian"),i.a.createElement("option",{value:"cambodian"},"Cambodian"),i.a.createElement("option",{value:"cameroonian"},"Cameroonian"),i.a.createElement("option",{value:"canadian"},"Canadian"),i.a.createElement("option",{value:"cape verdean"},"Cape Verdean"),i.a.createElement("option",{value:"central african"},"Central African"),i.a.createElement("option",{value:"chadian"},"Chadian"),i.a.createElement("option",{value:"chilean"},"Chilean"),i.a.createElement("option",{value:"chinese"},"Chinese"),i.a.createElement("option",{value:"colombian"},"Colombian"),i.a.createElement("option",{value:"comoran"},"Comoran"),i.a.createElement("option",{value:"congolese"},"Congolese"),i.a.createElement("option",{value:"costa rican"},"Costa Rican"),i.a.createElement("option",{value:"croatian"},"Croatian"),i.a.createElement("option",{value:"cuban"},"Cuban"),i.a.createElement("option",{value:"cypriot"},"Cypriot"),i.a.createElement("option",{value:"czech"},"Czech"),i.a.createElement("option",{value:"danish"},"Danish"),i.a.createElement("option",{value:"djibouti"},"Djibouti"),i.a.createElement("option",{value:"dominican"},"Dominican"),i.a.createElement("option",{value:"dutch"},"Dutch"),i.a.createElement("option",{value:"east timorese"},"East Timorese"),i.a.createElement("option",{value:"ecuadorean"},"Ecuadorean"),i.a.createElement("option",{value:"egyptian"},"Egyptian"),i.a.createElement("option",{value:"emirian"},"Emirian"),i.a.createElement("option",{value:"equatorial guinean"},"Equatorial Guinean"),i.a.createElement("option",{value:"eritrean"},"Eritrean"),i.a.createElement("option",{value:"estonian"},"Estonian"),i.a.createElement("option",{value:"ethiopian"},"Ethiopian"),i.a.createElement("option",{value:"fijian"},"Fijian"),i.a.createElement("option",{value:"filipino"},"Filipino"),i.a.createElement("option",{value:"finnish"},"Finnish"),i.a.createElement("option",{value:"french"},"French"),i.a.createElement("option",{value:"gabonese"},"Gabonese"),i.a.createElement("option",{value:"gambian"},"Gambian"),i.a.createElement("option",{value:"georgian"},"Georgian"),i.a.createElement("option",{value:"german"},"German"),i.a.createElement("option",{value:"ghanaian"},"Ghanaian"),i.a.createElement("option",{value:"greek"},"Greek"),i.a.createElement("option",{value:"grenadian"},"Grenadian"),i.a.createElement("option",{value:"guatemalan"},"Guatemalan"),i.a.createElement("option",{value:"guinea-bissauan"},"Guinea-Bissauan"),i.a.createElement("option",{value:"guinean"},"Guinean"),i.a.createElement("option",{value:"guyanese"},"Guyanese"),i.a.createElement("option",{value:"haitian"},"Haitian"),i.a.createElement("option",{value:"herzegovinian"},"Herzegovinian"),i.a.createElement("option",{value:"honduran"},"Honduran"),i.a.createElement("option",{value:"hungarian"},"Hungarian"),i.a.createElement("option",{value:"icelander"},"Icelander"),i.a.createElement("option",{value:"indian"},"Indian"),i.a.createElement("option",{value:"indonesian"},"Indonesian"),i.a.createElement("option",{value:"iranian"},"Iranian"),i.a.createElement("option",{value:"iraqi"},"Iraqi"),i.a.createElement("option",{value:"irish"},"Irish"),i.a.createElement("option",{value:"israeli"},"Israeli"),i.a.createElement("option",{value:"italian"},"Italian"),i.a.createElement("option",{value:"ivorian"},"Ivorian"),i.a.createElement("option",{value:"jamaican"},"Jamaican"),i.a.createElement("option",{value:"japanese"},"Japanese"),i.a.createElement("option",{value:"jordanian"},"Jordanian"),i.a.createElement("option",{value:"kazakhstani"},"Kazakhstani"),i.a.createElement("option",{value:"kenyan"},"Kenyan"),i.a.createElement("option",{value:"kittian and nevisian"},"Kittian and Nevisian"),i.a.createElement("option",{value:"kuwaiti"},"Kuwaiti"),i.a.createElement("option",{value:"kyrgyz"},"Kyrgyz"),i.a.createElement("option",{value:"laotian"},"Laotian"),i.a.createElement("option",{value:"latvian"},"Latvian"),i.a.createElement("option",{value:"lebanese"},"Lebanese"),i.a.createElement("option",{value:"liberian"},"Liberian"),i.a.createElement("option",{value:"libyan"},"Libyan"),i.a.createElement("option",{value:"liechtensteiner"},"Liechtensteiner"),i.a.createElement("option",{value:"lithuanian"},"Lithuanian"),i.a.createElement("option",{value:"luxembourger"},"Luxembourger"),i.a.createElement("option",{value:"macedonian"},"Macedonian"),i.a.createElement("option",{value:"malagasy"},"Malagasy"),i.a.createElement("option",{value:"malawian"},"Malawian"),i.a.createElement("option",{value:"malaysian"},"Malaysian"),i.a.createElement("option",{value:"maldivan"},"Maldivan"),i.a.createElement("option",{value:"malian"},"Malian"),i.a.createElement("option",{value:"maltese"},"Maltese"),i.a.createElement("option",{value:"marshallese"},"Marshallese"),i.a.createElement("option",{value:"mauritanian"},"Mauritanian"),i.a.createElement("option",{value:"mauritian"},"Mauritian"),i.a.createElement("option",{value:"mexican"},"Mexican"),i.a.createElement("option",{value:"micronesian"},"Micronesian"),i.a.createElement("option",{value:"moldovan"},"Moldovan"),i.a.createElement("option",{value:"monacan"},"Monacan"),i.a.createElement("option",{value:"mongolian"},"Mongolian"),i.a.createElement("option",{value:"moroccan"},"Moroccan"),i.a.createElement("option",{value:"mosotho"},"Mosotho"),i.a.createElement("option",{value:"motswana"},"Motswana"),i.a.createElement("option",{value:"mozambican"},"Mozambican"),i.a.createElement("option",{value:"namibian"},"Namibian"),i.a.createElement("option",{value:"nauruan"},"Nauruan"),i.a.createElement("option",{value:"nepalese"},"Nepalese"),i.a.createElement("option",{value:"new zealander"},"New Zealander"),i.a.createElement("option",{value:"ni-vanuatu"},"Ni-Vanuatu"),i.a.createElement("option",{value:"nicaraguan"},"Nicaraguan"),i.a.createElement("option",{value:"nigerien"},"Nigerien"),i.a.createElement("option",{value:"north korean"},"North Korean"),i.a.createElement("option",{value:"northern irish"},"Northern Irish"),i.a.createElement("option",{value:"norwegian"},"Norwegian"),i.a.createElement("option",{value:"omani"},"Omani"),i.a.createElement("option",{value:"pakistani"},"Pakistani"),i.a.createElement("option",{value:"palauan"},"Palauan"),i.a.createElement("option",{value:"panamanian"},"Panamanian"),i.a.createElement("option",{value:"papua new guinean"},"Papua New Guinean"),i.a.createElement("option",{value:"paraguayan"},"Paraguayan"),i.a.createElement("option",{value:"peruvian"},"Peruvian"),i.a.createElement("option",{value:"polish"},"Polish"),i.a.createElement("option",{value:"portuguese"},"Portuguese"),i.a.createElement("option",{value:"qatari"},"Qatari"),i.a.createElement("option",{value:"romanian"},"Romanian"),i.a.createElement("option",{value:"russian"},"Russian"),i.a.createElement("option",{value:"rwandan"},"Rwandan"),i.a.createElement("option",{value:"saint lucian"},"Saint Lucian"),i.a.createElement("option",{value:"salvadoran"},"Salvadoran"),i.a.createElement("option",{value:"samoan"},"Samoan"),i.a.createElement("option",{value:"san marinese"},"San Marinese"),i.a.createElement("option",{value:"sao tomean"},"Sao Tomean"),i.a.createElement("option",{value:"saudi"},"Saudi"),i.a.createElement("option",{value:"scottish"},"Scottish"),i.a.createElement("option",{value:"senegalese"},"Senegalese"),i.a.createElement("option",{value:"serbian"},"Serbian"),i.a.createElement("option",{value:"seychellois"},"Seychellois"),i.a.createElement("option",{value:"sierra leonean"},"Sierra Leonean"),i.a.createElement("option",{value:"singaporean"},"Singaporean"),i.a.createElement("option",{value:"slovakian"},"Slovakian"),i.a.createElement("option",{value:"slovenian"},"Slovenian"),i.a.createElement("option",{value:"solomon islander"},"Solomon Islander"),i.a.createElement("option",{value:"somali"},"Somali"),i.a.createElement("option",{value:"south african"},"South African"),i.a.createElement("option",{value:"south korean"},"South Korean"),i.a.createElement("option",{value:"spanish"},"Spanish"),i.a.createElement("option",{value:"sri lankan"},"Sri Lankan"),i.a.createElement("option",{value:"sudanese"},"Sudanese"),i.a.createElement("option",{value:"surinamer"},"Surinamer"),i.a.createElement("option",{value:"swazi"},"Swazi"),i.a.createElement("option",{value:"swedish"},"Swedish"),i.a.createElement("option",{value:"swiss"},"Swiss"),i.a.createElement("option",{value:"syrian"},"Syrian"),i.a.createElement("option",{value:"taiwanese"},"Taiwanese"),i.a.createElement("option",{value:"tajik"},"Tajik"),i.a.createElement("option",{value:"tanzanian"},"Tanzanian"),i.a.createElement("option",{value:"thai"},"Thai"),i.a.createElement("option",{value:"togolese"},"Togolese"),i.a.createElement("option",{value:"tongan"},"Tongan"),i.a.createElement("option",{value:"trinidadian or tobagonian"},"Trinidadian or Tobagonian"),i.a.createElement("option",{value:"tunisian"},"Tunisian"),i.a.createElement("option",{value:"turkish"},"Turkish"),i.a.createElement("option",{value:"tuvaluan"},"Tuvaluan"),i.a.createElement("option",{value:"ugandan"},"Ugandan"),i.a.createElement("option",{value:"ukrainian"},"Ukrainian"),i.a.createElement("option",{value:"uruguayan"},"Uruguayan"),i.a.createElement("option",{value:"uzbekistani"},"Uzbekistani"),i.a.createElement("option",{value:"venezuelan"},"Venezuelan"),i.a.createElement("option",{value:"vietnamese"},"Vietnamese"),i.a.createElement("option",{value:"welsh"},"Welsh"),i.a.createElement("option",{value:"yemenite"},"Yemenite"),i.a.createElement("option",{value:"zambian"},"Zambian"),i.a.createElement("option",{value:"zimbabwean"},"Zimbabwean"))}},284:function(e,a,t){"use strict";t(190),t(280),t(41),Object.defineProperty(a,"__esModule",{value:!0});var n,i=t(286),o=(n=i)&&n.__esModule?n:{default:n};Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},a.default=o.default},285:function(e,a,t){var n=t(9),i=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},286:function(e,a,t){"use strict";t(17),t(11),t(42),t(190),t(280),t(34),t(37),t(4),t(63),t(38),t(41),Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),i=l(t(0)),o=l(t(85)),r=l(t(287));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}var s=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=n=u(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))),n.state={highestStarHovered:-1/0},n.fillId="starGrad"+Math.random().toFixed(15).slice(2),n.hoverOverStar=function(e){return function(){n.setState({highestStarHovered:e})}},n.unHoverOverStar=function(){n.setState({highestStarHovered:-1/0})},u(n,t)}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"stopColorStyle",value:function(e){var a={stopColor:e,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:a}},{key:"render",value:function(){var e=this.props,a=e.starRatedColor,t=e.starEmptyColor;return i.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},i.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},i.default.createElement("defs",null,i.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(a)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(a)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(t)}),i.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(t)})))),this.renderStars)}},{key:"starRatingsStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"starGradientStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function(){var e=this.props,a=e.typeOfWidget,t=e.rating,n=this.state.highestStarHovered,i=n>0?n:t,o=parseFloat(i.toFixed(2)).toString();Number.isInteger(i)&&(o=String(i));var r=a+"s";return"1"===o&&(r=a),o+" "+r}},{key:"offsetValue",get:function(){var e=this.props.rating,a="0%";Number.isInteger(e)||(a=e.toFixed(2).split(".")[1].slice(0,2)+"%");return a}},{key:"renderStars",get:function(){var e=this,a=this.props,t=a.changeRating,n=a.rating,o=a.numberOfStars,l=a.starDimension,u=a.starSpacing,s=a.starRatedColor,c=a.starEmptyColor,m=a.starHoverColor,p=a.gradientPathName,v=a.ignoreInlineStyles,E=a.svgIconPath,d=a.svgIconViewBox,f=a.name,g=this.state.highestStarHovered;return Array.apply(null,Array(o)).map((function(a,h){var y=h+1,b=y<=n,S=g>0,C=y<=g,w=y===g,N=y>n&&y-1<n,I=1===y,R=y===o;return i.default.createElement(r.default,{key:y,fillId:e.fillId,changeRating:t?function(){return t(y,f)}:null,hoverOverStar:t?e.hoverOverStar(y):null,unHoverOverStar:t?e.unHoverOverStar:null,isStarred:b,isPartiallyFullStar:N,isHovered:C,hoverMode:S,isCurrentHoveredStar:w,isFirstStar:I,isLastStar:R,starDimension:l,starSpacing:u,starHoverColor:m,starRatedColor:s,starEmptyColor:c,gradientPathName:p,ignoreInlineStyles:v,svgIconPath:E,svgIconViewBox:d})}))}}]),a}(i.default.Component);s.propTypes={rating:o.default.number.isRequired,numberOfStars:o.default.number.isRequired,changeRating:o.default.func,starHoverColor:o.default.string.isRequired,starRatedColor:o.default.string.isRequired,starEmptyColor:o.default.string.isRequired,starDimension:o.default.string.isRequired,starSpacing:o.default.string.isRequired,gradientPathName:o.default.string.isRequired,ignoreInlineStyles:o.default.bool.isRequired,svgIconPath:o.default.string.isRequired,svgIconViewBox:o.default.string.isRequired,name:o.default.string},s.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"},a.default=s},287:function(e,a,t){"use strict";t(63),t(38),t(41),Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),i=l(t(0)),o=l(t(288)),r=l(t(85));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"render",value:function(){var e=this.props,a=e.changeRating,t=e.hoverOverStar,n=e.unHoverOverStar,o=e.svgIconViewBox,r=e.svgIconPath;return i.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:t,onMouseLeave:n,onClick:a},i.default.createElement("svg",{viewBox:o,className:this.starClasses,style:this.starSvgStyle},i.default.createElement("path",{className:"star",style:this.pathStyle,d:r})))}},{key:"starContainerStyle",get:function(){var e=this.props,a=e.changeRating,t=e.starSpacing,n=e.isFirstStar,i=e.isLastStar;return e.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?void 0:t,paddingRight:i?void 0:t,cursor:a?"pointer":void 0}}},{key:"starSvgStyle",get:function(){var e=this.props,a=e.ignoreInlineStyles,t=e.isCurrentHoveredStar,n=e.starDimension;return a?{}:{width:n,height:n,transition:"transform .2s ease-in-out",transform:t?"scale(1.1)":void 0}}},{key:"pathStyle",get:function(){var e=this.props,a=e.isStarred,t=e.isPartiallyFullStar,n=e.isHovered,i=e.hoverMode,o=e.starEmptyColor,r=e.starRatedColor,l=e.starHoverColor,u=e.gradientPathName,s=e.fillId,c=void 0;return c=i?n?l:o:t?"url('"+u+"#"+s+"')":a?r:o,e.ignoreInlineStyles?{}:{fill:c,transition:"fill .2s ease-in-out"}}},{key:"starClasses",get:function(){var e=this.props,a=e.isSelected,t=e.isPartiallyFullStar,n=e.isHovered,i=e.isCurrentHoveredStar,r=e.ignoreInlineStyles,l=(0,o.default)({"widget-svg":!0,"widget-selected":a,"multi-widget-selected":t,hovered:n,"current-hovered":i});return r?{}:l}}]),a}(i.default.Component);u.propTypes={fillId:r.default.string.isRequired,changeRating:r.default.func,hoverOverStar:r.default.func,unHoverOverStar:r.default.func,isStarred:r.default.bool.isRequired,isPartiallyFullStar:r.default.bool.isRequired,isHovered:r.default.bool.isRequired,hoverMode:r.default.bool.isRequired,isCurrentHoveredStar:r.default.bool.isRequired,isFirstStar:r.default.bool.isRequired,isLastStar:r.default.bool.isRequired,starDimension:r.default.string.isRequired,starSpacing:r.default.string.isRequired,starHoverColor:r.default.string.isRequired,starRatedColor:r.default.string.isRequired,starEmptyColor:r.default.string.isRequired,gradientPathName:r.default.string.isRequired,ignoreInlineStyles:r.default.bool.isRequired,svgIconPath:r.default.string.isRequired,svgIconViewBox:r.default.string.isRequired},a.default=u},288:function(e,a,t){var n;t(22),function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=i.apply(null,n);r&&e.push(r)}else if("object"===o)for(var l in n)t.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(a,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-employees-js-bbe90498b70f899d372a.js.map