(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[6],{562:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},563:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return c}))},564:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},565:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,"a",(function(){return i}))},566:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return c}))},569:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),c.a.createElement("div",{className:"dialog text-center\n         ".concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},c.a.createElement("div",{className:"dialog__close"},c.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&c.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},601:function(e,t,a){"use strict";var n=a(602),c=a(175);function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=c({arrayFormat:"none"},t)),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),c=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),a(decodeURIComponent(c),i,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"===typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[i(t,e),"[",n,"]"].join(""):[i(t,e),"[",i(n,e),"]=",i(a,e)].join("")};case"bracket":return function(t,a){return null===a?i(t,e):[i(t,e),"[]=",i(a,e)].join("")};default:return function(t,a){return null===a?i(t,e):[i(t,e),"=",i(a,e)].join("")}}}(t=c({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var c=e[n];if(void 0===c)return"";if(null===c)return i(n,t);if(Array.isArray(c)){var r=[];return c.slice().forEach((function(e){void 0!==e&&r.push(a(n,e,r.length))})),r.join("&")}return i(n,t)+"="+i(c,t)})).filter((function(e){return e.length>0})).join("&"):""}},602:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},612:function(e,t,a){"use strict";a.r(t);var n=a(562),c=a(563),i=a(565),r=a(564),l=a(566),s=a(0),m=a.n(s),o=a(569),p=function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container text-left"},m.a.createElement("h2",null,m.a.createElement("span",{className:"headline headline--teal"}," ","INITIAL DEVELOPMENT DETAILS"," ")),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Initial consultation"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",null,"FREE")),m.a.createElement("p",null,"A complimentary personal call, with no commitment, where you discuss your goals and we offer options and pricing.")),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Discounted Initial App Package"),m.a.createElement("div",null,m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$240")," per user type"," ")),m.a.createElement("p",null,"Includes initial consultation, guided development of the app flow and data needs with a developer, logo graphic design of three screens with a graphic designer, and final conversion of the app to the design. Customized actions not included (see below).")),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Graphic design"),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%",paddingRight:"1em"}},m.a.createElement("div",{className:"pricing__sub-description"},"LOGO"),m.a.createElement("div",{className:"pricing__price teal--text"}," ",m.a.createElement("strong",null,"$60")," "),m.a.createElement("p",null,"Includes two design options with unlimited revisions.",m.a.createElement("strong",null," $20 per additional design option "))),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",{className:"pricing__sub-description"},"USER INTERFACE"),m.a.createElement("div",{className:"pricing__price inline-flex teal--text"}," ",m.a.createElement("strong",null,"$50")),m.a.createElement("strong",null," Includes up to three standard browser screens. ")))),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Development"),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%",paddingRight:"1em"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"INITIAL UNSTYLED APP DESIGN"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$50")," + 20 per extra user type")," ")),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CLOUD CONFIGURATION MODIFICATION"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",null," $25")," ")),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CUSTOMIZED ACTION"),m.a.createElement("div",{className:""},m.a.createElement("strong",null,"starting from"," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$30"))," "))),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CONVERSION OF UI DESIGN"),m.a.createElement("div",{className:""}," ",m.a.createElement("strong",{className:""},m.a.createElement("span",{className:"pricing__price teal--text"},"$100")," for three screens")," "),m.a.createElement("br",null),m.a.createElement("p",null,"excluding animations or other unusual requirements. We will tell you up front if more money is needed.")),m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CLOUD CONFIGURATION MODIFICATION"),m.a.createElement("div",{className:"pricing__price teal--text"}," ",m.a.createElement("strong",null,"At cost")," "),m.a.createElement("p",null,"(besides the one-time configuration fee above)"))))),m.a.createElement("div",{className:"pricing__content flex justify-center"},m.a.createElement("a",{style:{padding:"1em 2.5em"},className:"button button--rounded button--yellow",type:"button",onClick:e.onSignUp},"Schedule your free consultation now!"))))},d=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container text-left"},m.a.createElement("h2",null,m.a.createElement("span",{className:"headline headline--teal"}," ","PIVOTING SERVICES DETAILS")),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Graphics"),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",{className:"pricing__sub-description"},"ADDING NEW BUTTON"),m.a.createElement("div",{className:"pricing__price teal--text"}," ",m.a.createElement("strong",null,"$2")," ")),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",{className:"pricing__sub-description"},"ADDING NEW FORM"),m.a.createElement("div",{className:"pricing__price inline-flex teal--text"}," ",m.a.createElement("strong",null,"$5")),m.a.createElement("strong",null," per form "),m.a.createElement("p",null,"( Form must fit on one screen )"))),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"NEW CONTENT"),m.a.createElement("div",{className:" inline-flex"}," ",m.a.createElement("strong",null,m.a.createElement("span",{className:" teal--text pricing__price"},"$15 ")," per screen")," ")),m.a.createElement("div",null,m.a.createElement("br",null),m.a.createElement("div",{className:"pricing__sub-description"},"GENERAL LAYOUT CHANGES"),m.a.createElement("div",{className:" inline-flex"}," ",m.a.createElement("strong",null,m.a.createElement("span",{className:" teal--text pricing__price"},"$10 ")," per screen")," "))),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",{className:"pricing__sub-description"},"CHANGE TO A COMPONENT (BUTTON, FORM, ETC.):"),m.a.createElement("div",{className:"pricing__price inline-flex teal--text"}," ",m.a.createElement("strong",null,"$5")),m.a.createElement("p",null,"( Component must fit on one screen )")))),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Content"),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-12",style:{width:"100%"}},m.a.createElement("p",null,"Note: if graphical design changes are necessary, those are charged separately (see above)"))),m.a.createElement("br",null),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CHANGES TO WORDING"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$2 "),"for up to 5 edits")),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$5 "),"for unlimited per 3 screens"))),m.a.createElement("br",null)),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CHANGES TO LAYOUT"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$10 "),"for up to 5 edits")),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$20 "),"for unlimited per 3 screens"))))),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CHANGES TO DATA"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$15 "),"for up to 5 types")),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$50 "),"new form"),m.a.createElement("p",null," (types of data showing or accepted as input) ")))),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"COMPLEX PIVOT"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$90 ")," per 10 types"),m.a.createElement("p",null," (needing a fundamental change to the data)")))))),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Special Services"),m.a.createElement("p",null,"It's okay if you\u2019ve never done this before. We can connect you with experts for many services! If you don\u2019t see what you need, request something new."),m.a.createElement("br",null),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"LANDING PAGE CONTENT CONSULTATION"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$50 ")))),m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"UX CONSULTATION"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$30 "))))),m.a.createElement("div",{className:"grow-6",style:{width:"50%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"SEO CONSULTATION"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$30 ")))),m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__sub-description"},"CONTENT WRITERS"),m.a.createElement("div",{className:""},m.a.createElement("strong",null," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$75"," ")," ","per 500 words")))))))))},u=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container text-left"},m.a.createElement("h2",null,m.a.createElement("span",{className:"headline headline--teal"}," MAINTENANCE DETAILS ")),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Basic maintenance"),m.a.createElement("div",{className:"flex"},m.a.createElement("div",null,m.a.createElement("div",{className:""}," ",m.a.createElement("strong",{className:""}," ",m.a.createElement("span",{className:"pricing__price teal--text"},"$45 "),"/month")," "),m.a.createElement("p",null,"Includes server and cloud storage/computation costs until they exceed a cutoff. Also includes a static front end endpoint, which could be used either for a landing page or for a web app."))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("div",{className:"flex"},m.a.createElement("div",null,m.a.createElement("div",{className:"pricing__description"},"Special cloud storage/computation needs"),m.a.createElement("div",{className:""}," ",m.a.createElement("strong",{className:""}," ",m.a.createElement("span",{className:"pricing__price teal--text"},"At cost "))," "),m.a.createElement("p",null,"In other words, we don\u2019t charge you more than we need to pay ourselves!"))))))},E=(a(601),function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={modalInitDev:!1,modalMaintenance:!1,modalServices:!1},a.signUp=function(e){a.props.onSignUp(),a.modalToggleInitDev()},a.modalToggleInitDev=function(e){a.setState({modalInitDev:!a.state.modalInitDev}),a.state.modalInitDev?a.props.history.push({search:"?"+(new URLSearchParams).toString()}):a.props.history.push({search:"?"+new URLSearchParams({modal:"initial-development"}).toString()})},a.modalToggleMaintenance=function(e){a.setState({modalMaintenance:!a.state.modalMaintenance}),a.state.modalServices?a.props.history.push({search:"?"+(new URLSearchParams).toString()}):a.props.history.push({search:"?"+new URLSearchParams({modal:"maintenance"}).toString()})},a.modalToggleServices=function(e){a.setState({modalServices:!a.state.modalServices}),a.state.modalServices?a.props.history.push({search:"?"+(new URLSearchParams).toString()}):a.props.history.push({search:"?"+new URLSearchParams({modal:"services"}).toString()})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){switch("initial-development".modal){case"initial-development":this.modalToggleInitDev();break;case"maintenance":this.modalToggleMaintenance();break;case"services":this.modalToggleServices()}}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("section",{className:"pricing__section triangle triangle--teal"},m.a.createElement("div",{className:"container"},m.a.createElement("h1",{className:"display-2  has--underline"}," SERVICES OFFERED "),m.a.createElement("p",null,"Pay only for what you need, when you need it. Prices are subject to change."))),m.a.createElement("section",{id:"initial-development"},m.a.createElement("div",{className:"container"},m.a.createElement("h2",{className:"text-center"},m.a.createElement("span",{className:"headline headline--teal"}," ","INITIAL DEVELOPMENT"," ")),m.a.createElement("div",{className:"subheadline text-center"},"Get it live!"),m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Initial consultation.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Initial consultation"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"FREE")))),m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Discounted Initial App Package.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Discounted Initial App Package"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"$240")),m.a.createElement("div",null,m.a.createElement("small",null," per user type ")))),m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Graphic design.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Graphic design"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"$30")))),m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Development.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Development"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"$30"))))),m.a.createElement("div",{className:"pricing__detail flex justify-center"},m.a.createElement("a",{href:"javascript:void(0);",onClick:this.modalToggleInitDev,className:"button button--rounded button--yellow flex justify-center items-center"},"GET DETAILS"," ",m.a.createElement("img",{className:"pricing__icon",src:"https://pivotatestaticassets.com/images/pricing/external link.png"}))))),m.a.createElement("section",{className:"pivoting-services  triangle--grey triangle triangle--white triangle"},m.a.createElement("div",{className:"container"},m.a.createElement("h2",{className:"text-center"},m.a.createElement("span",{className:"headline headline--teal"}," ","PIVOTING SERVICES"," ")),m.a.createElement("div",{className:"subheadline text-center"},"Get it right! "),m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Graphics.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Graphics"),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"$2-$15")),m.a.createElement("div",null," ",m.a.createElement("small",null," per screen ")))),m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Content.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Content "),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"$2-$90")))),m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Special Services.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Special Services"),m.a.createElement("div",null,m.a.createElement("small",null," starting from ")),m.a.createElement("div",{className:"pricing__price teal--text"},m.a.createElement("strong",{className:"teal--text"},"$30"))))),m.a.createElement("div",{className:"pricing__detail flex justify-center"},m.a.createElement("a",{onClick:this.modalToggleServices,href:"javascript:void(0);",className:"button button--rounded button--yellow flex justify-center items-center"},"GET DETAILS"," ",m.a.createElement("img",{className:"pricing__icon",src:"https://pivotatestaticassets.com/images/pricing/external link.png"}))))),m.a.createElement("section",{id:"pivoting-services"},m.a.createElement("div",{className:"container"},m.a.createElement("h2",{className:"text-center"},m.a.createElement("span",{className:"headline headline--teal word-break"}," ","MAINTENANCE"," ")),m.a.createElement("div",{className:"subheadline text-center"},"Keep it up!"),m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Basic maintenance.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Basic maintenance"),m.a.createElement("div",{className:"pricing__price"},m.a.createElement("strong",{className:"teal--text"},"$45 ")," ",m.a.createElement("small",null,"/month ")))),m.a.createElement("div",{className:"grow-3 pricing"},m.a.createElement("figure",{className:"pricing__img"},m.a.createElement("img",{src:"https://pivotatestaticassets.com/images/pricing/Additional Cloud.png"})),m.a.createElement("div",{className:"pricing__content"},m.a.createElement("div",{className:"pricing__description"},"Special Cloud Services"),m.a.createElement("div",{className:"pricing__price"},m.a.createElement("strong",{className:"teal--text"},"At cost"))))),m.a.createElement("div",{className:"pricing__detail flex justify-center"},m.a.createElement("a",{onClick:this.modalToggleMaintenance,href:"javascript:void(0);",className:"button button--rounded button--yellow flex justify-center items-center"},"GET DETAILS"," ",m.a.createElement("img",{className:"pricing__icon",src:"https://pivotatestaticassets.com/images/pricing/external link.png"})))," ")),this.state.modalInitDev&&m.a.createElement(o.a,{fullScreen:!0,onClose:this.modalToggleInitDev},m.a.createElement(p,{onSignUp:this.signUp}," ")),this.state.modalMaintenance&&m.a.createElement(o.a,{fullScreen:!0,onClose:this.modalToggleMaintenance},m.a.createElement(u,null," ")),this.state.modalServices&&m.a.createElement(o.a,{fullScreen:!0,onClose:this.modalToggleServices},m.a.createElement(d,null," ")))}}]),t}(s.Component));t.default=E}}]);
//# sourceMappingURL=6.3e7b71f4.chunk.js.map