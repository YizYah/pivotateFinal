(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[9],{618:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},619:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},620:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return function(){var t,a=n(e);if(r()){var l=n(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return o(this,t)}}a.d(t,"a",(function(){return c}))},621:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},632:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),r.a.createElement("div",{className:"dialog text-center ".concat(e.styleName,"\n         ").concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},r.a.createElement("div",{className:"dialog__close"},r.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&r.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},689:function(e,t,a){"use strict";a.r(t);var n=a(618),r=a(619),l=a(621),o=a(620),c=a(0),i=a.n(c),s=a(11),m=a(626),u=a(86),d=a(616),p=a.n(d),b=a(617),f=a(190),E=a(73),h=a(690),v=a(87),g=a(611),y=a(31);function w(){var e=Object(g.a)(["\n  text-align: center;\n\n  input {\n    display: block;\n    margin: auto;\n    width: 80%;\n  }\n"]);return w=function(){return e},e}function N(){var e=Object(g.a)(["\n  font-size: 0.75rem;\n  color: tomato;\n"]);return N=function(){return e},e}function O(){var e=Object(g.a)(["\n  width: 250px;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n"]);return O=function(){return e},e}y.a.div(O());var x=y.a.div(N()),S=y.a.div(w()),C=function(e){e.fieldLabel;var t=e.type,a=e.name,n=e.as,r=e.placeholder,l=e.options,o=void 0===l?[]:l;e.value;return i.a.createElement(S,null,"checkbox"!==t&&i.a.createElement("label",{style:{width:"100%"}},!n&&i.a.createElement(v.b,{className:"form__input",type:t,name:a,placeholder:r}),n&&i.a.createElement(v.b,{name:a,as:n,placeholder:r},0!==o.length&&o.map((function(e,t){return i.a.createElement("option",{key:t,value:e.value},e.label)})))),"checkbox"===t&&i.a.createElement(v.b,{name:a},(function(e){var t=e.field;e.form;return i.a.createElement("label",null,i.a.createElement("input",Object.assign({},t,{type:"checkbox"})),"I agree to our",i.a.createElement("b",null,i.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"\xa0 Terms of Use \xa0")),"and",i.a.createElement("b",null,i.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"\xa0 Privacy Policy \xa0")),"by signing up")})),i.a.createElement(x,null,i.a.createElement(v.a,{name:a})))},k=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError,l=Object(h.a)(e,["initialValues","validationSchema","onSubmit","formError"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){e.isSubmitting,e.isValid,e.dirty,e.isValidating;return i.a.createElement(v.c,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Username",type:"text",name:"username"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"First Name",type:"text",name:"firstName"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Last Name",type:"text",name:"lastName"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Email",type:"email",name:"email"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Password",type:"password",name:"password"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Confirm Password",type:"password",name:"passwordConfirmation"})),i.a.createElement("div",{className:"",style:{marginTop:"0.5em"}},i.a.createElement(C,{name:"terms",type:"checkbox",checked:"false",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit"},"SIGN UP"),r&&i.a.createElement(x,null,r)),i.a.createElement("small",null,"Already have an account?",i.a.createElement("span",{role:"presentation",className:"teal--text",onClick:l.onSwitch},"\xa0Log In")))})))},j=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,r=e.isValidating;return i.a.createElement(v.c,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"App Name:",type:"text",name:"app"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Description:",as:"textarea",name:"description"})),i.a.createElement("br",null),i.a.createElement("div",{className:""},i.a.createElement(C,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:t||!a||r||!n},"MAKE MY APP NOW")))})))},_=a(47),P=a(666),L=a.n(P),I=a(670),R=a.n(I),T=_.b().shape({username:_.d().label("username").required("Please enter desired username."),firstName:_.d().label("firstName").required("Please enter your first name."),lastName:_.d().label("lastName").required("Please enter your last name."),email:_.d().label("email").email("Enter a valid email.").required("Please enter your email."),terms:_.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed"),password:_.d().label("password").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,"at least 1 special char (@,!,#, etc).").min(8,"Must be at least 8 characters.").required("Please enter your desired password."),passwordConfirmation:_.d().oneOf([_.c("password"),"",null],"Passwords must match.").required("Please confirm your password.")}),A=_.b().shape({app:_.d().label("app").required("Please enter desired app name."),description:_.d().label("description").required("Please enter app description."),terms:_.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),H=_.b().shape({cardNumber:_.d().label("Card number").max(16).test("test-number","Credit Card number is invalid",(function(e){return L.a.number(e).isValid})).required(),cardName:_.d().label("Name on card").required(),cvc:_.d().label("CVC").min(3).max(4).required(),expiryMonth:_.d().label("Expiry month").min(2).max(2).required(),expiryYear:_.d().label("Expiry year").min(4).max(4).required()}),M=function(){for(var e=[],t=R()(),a=R()().add(10,"y");a.diff(t,"years")>=0;){var n=t.format("YYYY");e.push({value:n,label:n}),t.add(1,"year")}return e},V=function(){for(var e=[],t=R()(),a=R()().add(11,"month");a.diff(t,"months")>=0;){var n=t.format("MM"),r=t.format("MMMM");e.push({value:n,label:r}),t.add(1,"month")}return e},D=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError;return i.a.createElement(v.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,l=e.isValidating;return i.a.createElement(v.c,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Name on Card:",type:"text",name:"cardName"})),i.a.createElement("div",{className:"form__input flex-row"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"form__input",style:{width:"300px"}},i.a.createElement(C,{placeholder:"Card Number:",type:"text",name:"cardNumber"})),i.a.createElement("div",{className:"",style:{width:"100px",marginLeft:"8px"}},i.a.createElement(C,{placeholder:"CVC:",type:"text",name:"cvc"})))),i.a.createElement("div",{className:"form__input flex-row"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement("div",null,"Expiration Date"),i.a.createElement("div",{className:"",style:{marginLeft:"8px"}},i.a.createElement(C,{placeholder:"Month",as:"select",name:"expiryMonth",options:V()})),i.a.createElement("div",{className:"",style:{marginLeft:"8px"}},i.a.createElement(C,{placeholder:"Year",as:"select",name:"expiryYear",options:M()})))),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{type:"submit",className:"button button--yellow",disabled:t||!a||l||!n},"Sign Up!")),r&&i.a.createElement(x,null,r))}))},F=a(632),U=(a(671),new Date),Y={name:"",username:"",firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",app:"",description:"",terms:!1,cardName:"",cardNumber:"",cvc:"",expiryMonth:(U.getMonth()+1).toString().padStart(2,"0"),expiryYear:U.getFullYear()},q=function(e,t){t.userClassId;var a=t.onSuccess;console.log("propssssssssssssss",e);var n=Object(E.a)(u.f),r=Object(f.a)(n,1)[0],l=Object(c.useState)(!1),o=Object(f.a)(l,2),s=o[0],d=o[1],h=Object(c.useState)(""),v=Object(f.a)(h,2),g=v[0],y=v[1],w=Object(c.useState)(1),N=Object(f.a)(w,2),O=N[0],x=N[1],S=Object(c.useState)(""),C=Object(f.a)(S,2),_=(C[0],C[1]),P=Object(c.useState)(""),L=Object(f.a)(P,2),I=(L[0],L[1]),R=Object(c.useState)(""),M=Object(f.a)(R,2),V=(M[0],M[1]),U=Object(c.useState)(""),q=Object(f.a)(U,2),W=q[0],G=q[1],B=Object(c.useState)(""),z=Object(f.a)(B,2),K=(z[0],z[1]),J=Object(c.useState)(""),Q=Object(f.a)(J,2),Z=Q[0],$=Q[1],X=Object(c.useState)(""),ee=Object(f.a)(X,2),te=ee[0],ae=ee[1],ne=function(){var t=Object(b.a)(p.a.mark((function t(n,l){var o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=l.setSubmitting,y(""),I(n.firstName),K(n.password),V(n.lastName),G(n.email),n.password===n.passwordConfirmation){t.next=8;break}return t.abrupt("return");case 8:return{app:Z,description:te,creditCardNumber:n.cardNumber,creditCardName:n.cardName,expirationDate:"".concat(n.expiryMonth,"/").concat(n.expiryYear),csv:n.cvc},t.prev=9,t.next=12,r({variables:{userClassId:e.userClassId,name:n.username,firstName:n.firstName,lastName:n.lastName,email:n.email,password:n.password,formValues:JSON.stringify({})}});case 12:d(!0),a&&a(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),y("Error: Username already exists");case 19:o(!1);case 20:case"end":return t.stop()}}),t,null,[[9,16]])})));return function(e,a){return t.apply(this,arguments)}}();if(s)return window.history.pushState({registered:"success"},"Registration Complete","?registered=success"),i.a.createElement(F.a,{styleName:"dialogConfirm",onClose:e.onClose},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("img",{src:"/images/mail.png",alt:"png"})),i.a.createElement("p",{className:"text-center"},i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"1.25em 0",fontSize:"18px"}},"Confirm your email!"),i.a.createElement("p",{style:{margin:"1.25em 0"}},"Please check your email",i.a.createElement("strong",null," ",W," "),"for a message to confirm that it\u2019s really you. Then you can log in."),i.a.createElement("div",null,i.a.createElement(m.HashLink,{onClick:e.onSwitch,className:"button button--rounded button--yellow",to:"/"},"LOGIN")),i.a.createElement("div",null,i.a.createElement(m.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"SEND AGAIN")),i.a.createElement("div",null,i.a.createElement(m.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"CHANGE EMAIL")))));var re=function(e,t){t.setSubmitting;y(""),e.password===e.passwordConfirmation&&(_(e.username),I(e.firstName),V(e.lastName),G(e.email),K(e.password))},le=function(e,t){var a=t.setSubmitting;y(""),$(e.app),ae(e.description),a(!1),x(O+1)},oe=function(){switch(O){case 1:return{enterText:"ENTER DETAILS",buttonText:"SIGN UP",progressWidth:"33%"};case 2:return{enterText:"ENTER APP DESCRIPTION",buttonText:"MAKE MY APP NOW",progressWidth:"66%"};case 3:return{enterText:"CREDIT CARD DETAILS",buttonText:"MAKE MY APP NOW",progressWidth:"100%"};default:return!1}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(F.a,{progress:oe().progressWidth,onClose:e.onClose},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("h3",null,oe().enterText)),3===O&&i.a.createElement("p",{className:"dialog__text"},"You won\u2019t be charged a thing until you commit to it explicitly. In fact, the initial consultation is",i.a.createElement("strong",{className:"teal--text"},"FREE"),".",i.a.createElement("br",null),i.a.createElement("br",null),"We just need your credit card in advance to cover ourselves."),function(){switch(O){case 1:return i.a.createElement(k,{onSwitch:e.onSwitch,initialValues:Y,validationSchema:T,onSubmit:ne,formError:g});case 2:return i.a.createElement(j,{initialValues:Y,validationSchema:A,onSubmit:le,formError:g});case 3:return i.a.createElement(D,{initialValues:Y,validationSchema:H,onSubmit:ne,formError:g});default:return i.a.createElement(k,{initialValues:Y,validationSchema:T,onSubmit:re,formError:g})}}()))},W=a(192),G=a(750),B=a(780),z=a(774),K=a(758),J=a(623),Q=a(622),Z=a.n(Q),$=function(e){var t=e.onSubmit,a=e.onCancel,n=e.error,r=e.disabled,l=Object(c.useState)(""),o=Object(f.a)(l,2),s=o[0],m=o[1];return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s)}},i.a.createElement("h3",null,"Reset Password"),i.a.createElement("div",null,"Your Username/Email:",i.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),m(e.target.value)},disabled:r})),i.a.createElement("div",null,i.a.createElement("button",{type:"submit",disabled:r||!s},"Send Code"),i.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:r},"Cancel")),n&&i.a.createElement("div",null,n))},X=function(e){var t=e.onSubmit,a=e.onCancel,n=e.disabled,r=e.error,l=Object(c.useState)(""),o=Object(f.a)(l,2),s=o[0],m=o[1],u=Object(c.useState)(""),d=Object(f.a)(u,2),p=d[0],b=d[1],E=Object(c.useState)(""),h=Object(f.a)(E,2),v=h[0],g=h[1],y=Object(c.useState)(""),w=Object(f.a)(y,2),N=w[0],O=w[1],x=!s||!p||!v;return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O(""),s===p?t(s,v):O("New password and confirmation must match.")}},i.a.createElement("h3",null,"Reset Password"),i.a.createElement("p",null,"A password reset code has been sent to your email. Enter the code below."),i.a.createElement("div",null,"New Password:",i.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),m(e.target.value)},disabled:n})),i.a.createElement("div",null,"Confirm Password:",i.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),b(e.target.value)},disabled:n})),i.a.createElement("div",null,"Password Reset Code:",i.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),g(e.target.value)},disabled:n})),i.a.createElement("div",null,i.a.createElement("button",{type:"submit",disabled:n||x},"Change Password"),i.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:n},"Cancel")),r&&i.a.createElement("div",null,r),N&&i.a.createElement("div",null,N))};function ee(){var e=Object(g.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]);return ee=function(){return e},e}var te=y.a.button(ee()),ae=Z()(Object(J.a)(u.b,{name:"getPasswordResetCode"}),Object(J.a)(u.g,{name:"resetPassword"}),u.k)((function(e){var t=e.getPasswordResetCode,a=e.resetPassword,n=e.platformId,r=Object(c.useState)(!1),l=Object(f.a)(r,2),o=l[0],s=l[1],m=Object(c.useState)(""),u=Object(f.a)(m,2),d=u[0],E=u[1],h=Object(c.useState)(!1),v=Object(f.a)(h,2),g=v[0],y=v[1],w=Object(c.useState)(""),N=Object(f.a)(w,2),O=N[0],x=N[1],S=Object(c.useState)(!1),C=Object(f.a)(S,2),k=C[0],j=C[1],_=function(){x(""),j(!1),y(!1),s(!1),E("")},P=function(){var e=Object(b.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),j(!0),e.prev=2,e.next=5,t({variables:{userNameOrEmail:a,stackId:n}});case 5:E(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),x("Something went wrong. Please try again.");case 11:j(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(p.a.mark((function e(t,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),j(!0),e.prev=2,e.next=5,a({variables:{userNameOrEmail:d,password:t,code:r,stackId:n}});case 5:y(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),x("Something went wrong. Please try again.");case 11:j(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}();return o?d?d&&!g?i.a.createElement(X,{onSubmit:L,onCancel:_,disabled:k,error:O}):i.a.createElement("p",null,"Your password has been reset. You may now login.",i.a.createElement(te,{type:"button",onClick:_},"Ok.")):i.a.createElement($,{onSubmit:P,onCancel:_,disabled:k,error:O}):i.a.createElement(te,{type:"button",onClick:function(){return s(!0)}},"Forgot Password?")})),ne=a(776),re=a(755),le=a(756),oe=Object(G.a)((function(e){var t;return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:(t={backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},Object(W.a)(t,e.breakpoints.down("sm"),{width:"90%"}),Object(W.a)(t,e.breakpoints.up("md"),{width:"40%"}),Object(W.a)(t,e.breakpoints.up("lg"),{width:"30%"}),Object(W.a)(t,"height","80%"),Object(W.a)(t,"display","flex"),Object(W.a)(t,"flexDirection","column"),Object(W.a)(t,"justifyContent","space-evenly"),Object(W.a)(t,"borderRadius","1rem"),t)}}));function ce(e){e.label;var t=e.children,a=e.open,n=e.onClose,r=oe(),l=i.a.useState(a),o=Object(f.a)(l,2),c=o[0],s=o[1];return i.a.createElement(i.a.Fragment,null,c?i.a.createElement(ne.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:c,onClose:function(){s(!1),n()},closeAfterTransition:!0,BackdropComponent:re.a,BackdropProps:{timeout:500}},i.a.createElement(le.a,{in:a},i.a.createElement("div",{className:r.paper},t))):null)}function ie(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ie=function(){return e},e}function se(){var e=Object(g.a)(["\n  text-align: center;\n  margin-bottom: 0.5rem;\n"]);return se=function(){return e},e}var me=y.a.div(se()),ue=y.a.div(ie()),de=Object(G.a)((function(){return{textField:Object(W.a)({fontSize:".8rem",textAlign:"initial",width:"100%",margin:"6px 0",padding:0},"& fieldset",{borderRadius:"32px"}),button:{width:"80%",height:"3.5rem",borderRadius:"2rem"},inputLabel:{textAlign:"center",fontWeight:"bold",fontSize:"1rem",color:"black"}}})),pe=Object(u.k)((function(e){var t=e.loading,a=e.currentUser,n=e.login,r=e.open,l=e.onClose,o=Object(c.useState)(""),s=Object(f.a)(o,2),m=s[0],u=s[1],d=Object(c.useState)(""),E=Object(f.a)(d,2),h=E[0],v=E[1],g=Object(c.useState)(!1),y=Object(f.a)(g,2),w=y[0],N=y[1],O=Object(c.useState)(""),x=Object(f.a)(O,2),S=x[0],C=x[1],k=de();if(t||a)return null;var j=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.prev=2,e.next=5,n({username:m,password:h});case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),C(e.t0.message||e.t0.graphQLErrors&&e.t0.graphQLErrors.length&&e.t0.graphQLErrors[0]||S),N(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(ce,{open:r,onClose:l},i.a.createElement("div",null,i.a.createElement(ue,null,i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),i.a.createElement(B.a,{className:k.inputLabel},"Login")),i.a.createElement("form",{onSubmit:j},i.a.createElement(me,null,i.a.createElement("label",{htmlFor:"nostack-username"},i.a.createElement(z.a,{className:k.textField,id:"nostack-username",type:"text",name:"username",label:"Username",disabled:w,value:m,onChange:function(e){return u(e.target.value)},variant:"outlined"}))),i.a.createElement(me,null,i.a.createElement("label",{htmlFor:"nostack-password"},i.a.createElement(z.a,{className:k.textField,id:"nostack-password",label:"Password",type:"password",name:"password",disabled:w,value:h,onChange:function(e){return v(e.target.value)},variant:"outlined"}))),i.a.createElement(me,null,i.a.createElement(K.a,{className:k.button,type:"submit",disabled:w||!m||!h,variant:"contained",color:"primary"},"Log In")),S&&i.a.createElement(me,null,S)),i.a.createElement(me,null,i.a.createElement(ae,null)))})),be=a(104),fe=a(193),Ee=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={modalRegistration:!1,modalLogin:!1,checkbox:!1},e.howItWorks=function(){var e=document.getElementById("how-it-works");return setTimeout((function(){e.scrollIntoView()}),100),i.a.createElement(s.c,{to:"/",push:!0})},e.about=function(){var e=document.getElementById("about");return setTimeout((function(){e.scrollIntoView()}),100),i.a.createElement(s.c,{to:"/",push:!0})},e.modalHandlerRegistration=function(){e.setState({modalRegistration:!e.state.modalRegistration})},e.modalHandlerLogin=function(){e.setState({modalLogin:!e.state.modalLogin})},e.modalHandlerSwitchForm=function(){e.modalHandlerRegistration(),e.modalHandlerLogin()},e.checkboxHandler=function(){e.setState({checkbox:!e.state.checkbox})},e.handleClick=function(){(0,e.context.logoutUser)()},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("header",{className:"container header flex items-center"},i.a.createElement("div",{className:"header__logo"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),this.state.modalRegistration&&i.a.createElement(q,{platformId:be.l,userClassId:be.n,onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerRegistration,open:this.state.modalRegistration}),this.state.modalLogin&&i.a.createElement(pe,{onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerLogin,open:this.state.modalLogin}),i.a.createElement("nav",{className:"hide-tablet"},i.a.createElement("ul",{className:"flex header__nav"},i.a.createElement("li",null,i.a.createElement(m.HashLink,{to:"/pricing?=initial"}," \xa0 PRICING ")),i.a.createElement("li",null,i.a.createElement(m.HashLink,{to:"/#how-it-works"}," HOW IT WORKS ")),i.a.createElement("li",null,i.a.createElement(m.HashLink,{to:"/#about-us"}," ABOUT US ")),i.a.createElement("li",null,i.a.createElement(m.HashLink,{to:"/contact"}," CONTACT ")))),console.log("modalRegistration",this.state.modalRegistration),!this.props.noAction&&i.a.createElement("div",{className:"grow-12 text-right hide-tablet"},i.a.createElement(u.d,null,(function(t){var a=t.loading,n=t.currentUser;return a?null:n?i.a.createElement("div",{className:"logout"},i.a.createElement(m.HashLink,{to:"/"},i.a.createElement(u.c,null)),i.a.createElement(s.c,{to:"/staging"})):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{role:"presentation",onClick:e.modalHandlerLogin},"LOGIN"),i.a.createElement("span",{role:"presentation",onClick:e.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"SIGN UP"))}))),i.a.createElement("div",{className:"show-tablet"},i.a.createElement("div",{role:"presentation",id:"amp-burger",onClick:this.checkboxHandler},i.a.createElement("div",{className:"lines"},i.a.createElement("input",{type:"checkbox",id:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"lines-icon","data-menu":""},i.a.createElement("div",{className:"icon-left"}),i.a.createElement("div",{className:"icon-right"})),i.a.createElement("div",{className:"mobile-menu__wrapper"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(m.HashLink,{to:"/pricing?inital"},"PRICING")),i.a.createElement("li",null,i.a.createElement(m.HashLink,{onClick:this.checkboxHandler,to:"/#how-it-works"},"HOW IT WORKS"," ")),i.a.createElement("li",null,i.a.createElement(m.HashLink,{onClick:this.checkboxHandler,to:"/#about-us"},"ABOUT US"," ")),i.a.createElement("li",null,i.a.createElement(m.HashLink,{onClick:this.checkboxHandler,to:"/contact"},"CONTACT")),!this.props.noAction&&i.a.createElement("li",null,i.a.createElement("span",{role:"presentation",onClick:this.modalHandlerLogin},"LOGIN")),!this.props.noAction&&i.a.createElement("li",null,i.a.createElement("span",{role:"presentation",onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"FREE CONSULTATION"))))))))}}]),a}(c.Component);Ee.contextType=fe.a;t.default=Ee}}]);
//# sourceMappingURL=9.b1be4bef.chunk.js.map