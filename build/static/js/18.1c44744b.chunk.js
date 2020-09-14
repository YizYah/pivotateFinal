(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[18],{617:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),r.a.createElement("div",{className:"dialog text-center ".concat(e.styleName,"\n         ").concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},r.a.createElement("div",{className:"dialog__close"},r.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&r.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},630:function(e,t,a){"use strict";var n=a(580),r=a.n(n),l=a(180),o=a(0),i=a.n(o),c=a(69),s=a(64),m=a(601),u=a(578),d=a(31);function p(){var e=Object(u.a)(["\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n\n  input {\n    display: block;\n    margin: 0.5em auto;\n    width: 80%;\n  }\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n  font-size: 0.75rem;\n  color: tomato;\n"]);return b=function(){return e},e}function E(){var e=Object(u.a)(["\n  width: 250px;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n"]);return E=function(){return e},e}d.default.div(E());var f=d.default.div(b()),h=d.default.div(p()),g=a(579),v=a(83),y=function(e){e.fieldLabel;var t=e.type,a=e.name,n=e.as,r=e.placeholder,l=e.options,o=void 0===l?[]:l;e.value;return i.a.createElement(h,null,"checkbox"!==t&&i.a.createElement("label",{style:{width:"100%"}},!n&&i.a.createElement(v.Field,{className:"form__input",type:t,name:a,placeholder:r}),n&&i.a.createElement(v.Field,{name:a,as:n,placeholder:r},0!==o.length&&o.map((function(e,t){return i.a.createElement("option",{key:t,value:e.value},e.label)})))),"checkbox"===t&&i.a.createElement(v.Field,{name:a},(function(e){var t=e.field;e.form;return i.a.createElement("label",null,i.a.createElement("input",Object.assign({},t,{type:"checkbox"})),"I agree to our",i.a.createElement("b",null,i.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"\xa0 Terms of Use \xa0")),"and",i.a.createElement("b",null,i.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"\xa0 Privacy Policy \xa0")),"by signing up")})),i.a.createElement(f,null,i.a.createElement(v.ErrorMessage,{name:a})))},N=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError,l=Object(g.a)(e,["initialValues","validationSchema","onSubmit","formError"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.Formik,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){e.isSubmitting,e.isValid,e.dirty,e.isValidating;return i.a.createElement(v.Form,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Username",type:"text",name:"username"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"First Name",type:"text",name:"firstName"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Last Name",type:"text",name:"lastName"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Email",type:"email",name:"email"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Password",type:"password",name:"password"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Confirm Password",type:"password",name:"passwordConfirmation"})),i.a.createElement("div",{className:"",style:{marginTop:"0.5em"}},i.a.createElement(y,{name:"terms",type:"checkbox",checked:"false",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit"},"SIGN UP"),r&&i.a.createElement(f,null,r)),i.a.createElement("small",null,"Already have an account?",i.a.createElement("a",{href:"#",className:"teal--text",onClick:l.onSwitch},"\xa0Log In")))})))},x=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.Formik,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,l=e.isValidating;return i.a.createElement(v.Form,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"App Name:",type:"text",name:"app"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Description:",as:"textarea",name:"description"})),i.a.createElement("br",null),i.a.createElement("div",{className:""},i.a.createElement(y,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:t||!a||l||!n},"MAKE MY APP NOW"),r&&i.a.createElement(f,null,r)))})))},w=a(45),S=a(636),C=a.n(S),O=a(649),k=a.n(O),j=w.object().shape({username:w.string().label("username").required("Please enter desired username."),firstName:w.string().label("firstName").required("Please enter your first name."),lastName:w.string().label("lastName").required("Please enter your last name."),email:w.string().label("email").email("Enter a valid email.").required("Please enter your email."),terms:w.boolean().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed"),password:w.string().label("password").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"at least 1 number or special char (@,!,#, etc).").min(8,"Must be at least 8 characters.").required("Please enter your desired password."),passwordConfirmation:w.string().oneOf([w.ref("password"),"",null],"Passwords must match.").required("Please confirm your password.")}),_=w.object().shape({app:w.string().label("app").required("Please enter desired app name."),description:w.string().label("description").required("Please enter app description."),terms:w.boolean().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),P=w.object().shape({cardNumber:w.string().label("Card number").max(16).test("test-number","Credit Card number is invalid",(function(e){return C.a.number(e).isValid})).required(),cardName:w.string().label("Name on card").required(),cvc:w.string().label("CVC").min(3).max(4).required(),expiryMonth:w.string().label("Expiry month").min(2).max(2).required(),expiryYear:w.string().label("Expiry year").min(4).max(4).required()}),L=function(){for(var e=[],t=k()(),a=k()().add(10,"y");a.diff(t,"years")>=0;){var n=t.format("YYYY");e.push({value:n,label:n}),t.add(1,"year")}return e},I=function(){for(var e=[],t=k()(),a=k()().add(11,"month");a.diff(t,"months")>=0;){var n=t.format("MM"),r=t.format("MMMM");e.push({value:n,label:r}),t.add(1,"month")}return e},T=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError;return i.a.createElement(v.Formik,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,l=e.isValidating;return i.a.createElement(v.Form,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(y,{placeholder:"Name on Card:",type:"text",name:"cardName"})),i.a.createElement("div",{className:"form__input flex-row"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"form__input",style:{width:"300px"}},i.a.createElement(y,{placeholder:"Card Number:",type:"text",name:"cardNumber"})),i.a.createElement("div",{className:"",style:{width:"100px",marginLeft:"8px"}},i.a.createElement(y,{placeholder:"CVC:",type:"text",name:"cvc"})))),i.a.createElement("div",{className:"form__input flex-row"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement("div",null,"Expiration Date"),i.a.createElement("div",{className:"",style:{marginLeft:"8px"}},i.a.createElement(y,{placeholder:"Month",as:"select",name:"expiryMonth",options:I()})),i.a.createElement("div",{className:"",style:{marginLeft:"8px"}},i.a.createElement(y,{placeholder:"Year",as:"select",name:"expiryYear",options:L()})))),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{type:"submit",className:"button button--yellow",disabled:t||!a||l||!n},"Sign Up!")),r&&i.a.createElement(f,null,r))}))},A=a(617),H=new Date,R={name:"",username:"",firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",app:"",description:"",terms:!1,cardName:"",cardNumber:"",cvc:"",expiryMonth:(H.getMonth()+1).toString().padStart(2,"0"),expiryYear:H.getFullYear()};t.a=function(e,t){t.userClassId;var a=t.onSuccess,n=Object(c.useMutation)(s.f),u=Object(l.a)(n,1)[0],d=Object(o.useState)(!1),p=Object(l.a)(d,2),b=p[0],E=p[1],f=Object(o.useState)(""),h=Object(l.a)(f,2),g=h[0],v=h[1],y=Object(o.useState)(1),w=Object(l.a)(y,2),S=w[0],C=w[1],O=Object(o.useState)(""),k=Object(l.a)(O,2),L=(k[0],k[1]),I=Object(o.useState)(""),H=Object(l.a)(I,2),F=(H[0],H[1]),M=Object(o.useState)(""),V=Object(l.a)(M,2),D=(V[0],V[1]),U=Object(o.useState)(""),Y=Object(l.a)(U,2),q=(Y[0],Y[1]),W=Object(o.useState)(""),G=Object(l.a)(W,2),z=(G[0],G[1]),B=Object(o.useState)(""),K=Object(l.a)(B,2),Q=K[0],J=K[1],Z=Object(o.useState)(""),X=Object(l.a)(Z,2),$=X[0],ee=X[1],te=function(t,n){var l;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(l=n.setSubmitting,v(""),F(t.firstName),z(t.password),D(t.lastName),q(t.email),t.password===t.passwordConfirmation){o.next=8;break}return o.abrupt("return");case 8:return{app:Q,description:$,creditCardNumber:t.cardNumber,creditCardName:t.cardName,expirationDate:"".concat(t.expiryMonth,"/").concat(t.expiryYear),csv:t.cvc},o.prev=9,o.next=12,r.a.awrap(u({variables:{userClassId:e.userClassId,name:t.username,firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,formValues:JSON.stringify({})}}));case 12:E(!0),a&&(ae(),a()),o.next=21;break;case 16:o.prev=16,o.t0=o.catch(9),console.log(o.t0),console.log(o.t0.graphQLErrors),v("Something went wrong. Please try again.");case 21:l(!1);case 22:case"end":return o.stop()}}),null,null,[[9,16]])};if(b)return window.history.pushState({registered:"success"},"Registration Complete","?registered=success"),i.a.createElement(A.a,{onClose:e.onClose,styleName:"dialogConfirm"},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("img",{src:"/images/mail.png"})),i.a.createElement("p",{className:"text-center"},i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"1.25em 0",fontSize:"18px"}}," ","Confirm your email!"," "),i.a.createElement("p",{style:{margin:"1.25em 0"}},"Please check your email ",i.a.createElement("strong",null," sample@gmail.com ")," for a message to confirm that it\u2019s really you. Then you can log in."),i.a.createElement("div",null,i.a.createElement(m.HashLink,{onClick:e.onSwitch,className:"button button--rounded button--yellow",to:"/"},"LOGIN")),i.a.createElement("div",null,i.a.createElement(m.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"SEND AGAIN")),i.a.createElement("div",null,i.a.createElement(m.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"CHANGE EMAIL")))));var ae=function(){C(S+1)},ne=function(e,t){t.setSubmitting;console.log(e),v(""),e.password===e.passwordConfirmation&&(L(e.username),F(e.firstName),D(e.lastName),q(e.email),z(e.password))},re=function(e,t){var a=t.setSubmitting;v(""),J(e.app),ee(e.description),a(!1),ae()},le=function(){switch(S){case 1:return{enterText:"ENTER DETAILS",buttonText:"SIGN UP",progressWidth:"33%"};case 2:return{enterText:"ENTER APP DESCRIPTION",buttonText:"MAKE MY APP NOW",progressWidth:"66%"};case 3:return{enterText:"CREDIT CARD DETAILS",buttonText:"MAKE MY APP NOW",progressWidth:"100%"}}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{progress:le().progressWidth,onClose:e.onClose},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("h3",null,le().enterText)),3==S&&i.a.createElement("p",{className:"dialog__text"},"You won\u2019t be charged a thing until you commit to it explicitly. In fact, the initial consultation is"," ",i.a.createElement("strong",{className:"teal--text"},"FREE"),".",i.a.createElement("br",null),i.a.createElement("br",null),"We just need your credit card in advance to cover ourselves."),function(){switch(S){case 1:return i.a.createElement(N,{onSwitch:e.onSwitch,initialValues:R,validationSchema:j,onSubmit:te,formError:g});case 2:return i.a.createElement(x,{initialValues:R,validationSchema:_,onSubmit:re,formError:g});case 3:return i.a.createElement(T,{initialValues:R,validationSchema:P,onSubmit:te,formError:g});default:return i.a.createElement(N,{initialValues:R,validationSchema:j,onSubmit:ne,formError:g})}}()))}},631:function(e,t,a){"use strict";var n=a(580),r=a.n(n),l=a(180),o=a(182),i=a(578),c=a(0),s=a.n(c),m=a(31),u=a(64),d=a(582),p=a(581),b=a.n(p),E=function(e){var t=e.onSubmit,a=e.onCancel,n=e.error,r=e.disabled,o=Object(c.useState)(""),i=Object(l.a)(o,2),m=i[0],u=i[1];return s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(m)}},s.a.createElement("h3",null,"Reset Password"),s.a.createElement("div",null,"Your Username/Email:",s.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),u(e.target.value)},disabled:r})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",disabled:r||!m},"Send Code"),s.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:r},"Cancel")),n&&s.a.createElement("div",null,n))},f=function(e){var t=e.onSubmit,a=e.onCancel,n=e.disabled,r=e.error,o=Object(c.useState)(""),i=Object(l.a)(o,2),m=i[0],u=i[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),b=p[0],E=p[1],f=Object(c.useState)(""),h=Object(l.a)(f,2),g=h[0],v=h[1],y=Object(c.useState)(""),N=Object(l.a)(y,2),x=N[0],w=N[1],S=!m||!b||!g;return s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w(""),m===b?t(m,g):w("New password and confirmation must match.")}},s.a.createElement("h3",null,"Reset Password"),s.a.createElement("p",null,"A password reset code has been sent to your email. Enter the code below."),s.a.createElement("div",null,"New Password:",s.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),u(e.target.value)},disabled:n})),s.a.createElement("div",null,"Confirm Password:",s.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),E(e.target.value)},disabled:n})),s.a.createElement("div",null,"Password Reset Code:",s.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),v(e.target.value)},disabled:n})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",disabled:n||S},"Change Password"),s.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:n},"Cancel")),r&&s.a.createElement("div",null,r),x&&s.a.createElement("div",null,x))};function h(){var e=Object(i.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]);return h=function(){return e},e}var g=m.default.button(h()),v=b()(Object(d.a)(u.b,{name:"getPasswordResetCode"}),Object(d.a)(u.g,{name:"resetPassword"}),u.k)((function(e){var t=e.getPasswordResetCode,a=e.resetPassword,n=e.platformId,o=Object(c.useState)(!1),i=Object(l.a)(o,2),m=i[0],u=i[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),b=p[0],h=p[1],v=Object(c.useState)(!1),y=Object(l.a)(v,2),N=y[0],x=y[1],w=Object(c.useState)(""),S=Object(l.a)(w,2),C=S[0],O=S[1],k=Object(c.useState)(!1),j=Object(l.a)(k,2),_=j[0],P=j[1],L=function(){O(""),P(!1),x(!1),u(!1),h("")};return m?b?b&&!N?s.a.createElement(f,{onSubmit:function(e,t){return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return O(""),P(!0),l.prev=2,l.next=5,r.a.awrap(a({variables:{userNameOrEmail:b,password:e,code:t,stackId:n}}));case 5:x(!0),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(2),O("Something went wrong. Please try again.");case 11:P(!1);case 12:case"end":return l.stop()}}),null,null,[[2,8]])},onCancel:L,disabled:_,error:C}):s.a.createElement("p",null,"Your password has been reset. You may now login.",s.a.createElement(g,{type:"button",onClick:L},"Ok.")):s.a.createElement(E,{onSubmit:function(e){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return O(""),P(!0),a.prev=2,a.next=5,r.a.awrap(t({variables:{userNameOrEmail:e,stackId:n}}));case 5:h(e),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),O("Something went wrong. Please try again.");case 11:P(!1);case 12:case"end":return a.stop()}}),null,null,[[2,8]])},onCancel:L,disabled:_,error:C}):s.a.createElement(g,{type:"button",onClick:function(){return u(!0)}},"Forgot Password?")})),y=a(736),N=a(762),x=a(754),w=a(673),S=a(758),C=a(686),O=a(687),k=Object(y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"30%",height:"80%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",borderRadius:"1rem"}}}));function j(e){e.label;var t=e.children,a=e.open,n=e.onClose,r=k(),o=s.a.useState(a),i=Object(l.a)(o,2),c=i[0],m=i[1];return s.a.createElement(s.a.Fragment,null,c?s.a.createElement(S.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:c,onClose:function(){m(!1),n()},closeAfterTransition:!0,BackdropComponent:C.a,BackdropProps:{timeout:500}},s.a.createElement(O.a,{in:a},s.a.createElement("div",{className:r.paper},t))):null)}function _(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n"]);return _=function(){return e},e}function P(){var e=Object(i.a)(["\n  \n  text-align: center;\n  margin-bottom: .5rem;\n  \n"]);return P=function(){return e},e}m.default.div((function(e){e.open;return"\n  width: 100%;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n  \n"}));var L=m.default.div(P()),I=m.default.div(_()),T=Object(y.a)((function(e){return{textField:Object(o.a)({fontSize:".8rem",textAlign:"initial",width:"100%",margin:"6px 0",padding:0},"& fieldset",{borderRadius:"32px"}),button:{width:"80%",height:"3.5rem",borderRadius:"2rem"},inputLabel:{textAlign:"center",fontWeight:"bold",fontSize:"1rem",color:"black"}}}));t.a=Object(u.k)((function(e){var t=e.loading,a=e.currentUser,n=e.login,o=e.open,i=e.onClose,m=Object(c.useState)(""),u=Object(l.a)(m,2),d=u[0],p=u[1],b=Object(c.useState)(""),E=Object(l.a)(b,2),f=E[0],h=E[1],g=Object(c.useState)(!1),y=Object(l.a)(g,2),S=y[0],C=y[1],O=Object(c.useState)(""),k=Object(l.a)(O,2),_=k[0],P=k[1],A=T();if(t||a)return null;return s.a.createElement(j,{open:o,onClose:i},s.a.createElement("div",null,s.a.createElement(I,null,s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),s.a.createElement(N.a,{className:A.inputLabel},"Login")),s.a.createElement("form",{onSubmit:function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),C(!0),t.prev=2,t.next=5,r.a.awrap(n({username:d,password:f}));case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(2),P(t.t0.message||t.t0.graphQLErrors&&t.t0.graphQLErrors.length&&t.t0.graphQLErrors[0]||t.t0),C(!1);case 11:case"end":return t.stop()}}),null,null,[[2,7]])}},s.a.createElement(L,null,s.a.createElement("label",{htmlFor:"nostack-username"},s.a.createElement(x.a,{className:A.textField,id:"nostack-username",type:"text",name:"username",label:"Username",disabled:S,value:d,onChange:function(e){return p(e.target.value)},variant:"outlined"}))),s.a.createElement(L,null,s.a.createElement("label",{htmlFor:"nostack-password"},s.a.createElement(x.a,{className:A.textField,id:"nostack-password",label:"Password",type:"password",name:"password",disabled:S,value:f,onChange:function(e){return h(e.target.value)},variant:"outlined"}))),s.a.createElement(L,null,s.a.createElement(w.a,{className:A.button,type:"submit",disabled:S||!d||!f,variant:"contained",color:"primary"},"Log In"," ")),_&&s.a.createElement(L,null,_)),s.a.createElement(L,null,s.a.createElement(v,null)))}))},664:function(e,t,a){"use strict";a.r(t);var n=a(587),r=a(586),l=a(588),o=a(589),i=a(590),c=a(0),s=a.n(c),m=a(10),u=a(601),d=a(64),p=a(630),b=a(631),E=a(82),f=a(183),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={modalRegistration:!1,modalLogin:!1,checkbox:!1},a.howItWorks=function(){var e=document.getElementById("how-it-works");return setTimeout((function(){e.scrollIntoView()}),100),s.a.createElement(m.c,{to:"/",push:!0})},a.about=function(){var e=document.getElementById("about");return setTimeout((function(){e.scrollIntoView()}),100),s.a.createElement(m.c,{to:"/",push:!0})},a.modalHandlerRegistration=function(){a.setState({modalRegistration:!a.state.modalRegistration})},a.modalHandlerLogin=function(){a.setState({modalLogin:!a.state.modalLogin})},a.modalHandlerSwitchForm=function(){a.modalHandlerRegistration(),a.modalHandlerLogin()},a.checkboxHandler=function(){a.setState({checkbox:!a.state.checkbox})},a.handleClick=function(){(0,a.context.logoutUser)()},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("header",{className:"container header flex items-center"},s.a.createElement("div",{className:"header__logo"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),this.state.modalRegistration&&s.a.createElement(p.a,{platformId:E.l,userClassId:E.n,onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerRegistration,open:this.state.modalRegistration}),this.state.modalLogin&&s.a.createElement(b.a,{onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerLogin,open:this.state.modalLogin}),s.a.createElement("nav",{className:"hide-tablet"},s.a.createElement("ul",{className:"flex header__nav"},s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/pricing?=initial"}," \xa0 PRICING ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/#how-it-works"}," HOW IT WORKS ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/#about-us"}," ABOUT US ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/contact"}," CONTACT ")))),console.log("modalRegistration",this.state.modalRegistration),!this.props.noAction&&s.a.createElement("div",{className:"grow-12 text-right hide-tablet"},s.a.createElement(d.d,null,(function(t){var a=t.loading,n=t.currentUser;return a?null:n?s.a.createElement("div",{className:"logout"},s.a.createElement(u.HashLink,{to:"/"},s.a.createElement(d.c,null)),s.a.createElement(m.c,{to:"/staging"})):s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{onClick:e.modalHandlerLogin}," LOGIN "),s.a.createElement("a",{onClick:e.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"SIGN UP"))}))),s.a.createElement("div",{className:"show-tablet"},s.a.createElement("div",{id:"amp-burger",onClick:this.checkboxHandler},s.a.createElement("div",{className:"lines"},s.a.createElement("input",{type:"checkbox",id:"checkbox",className:"checkbox"}),s.a.createElement("div",{className:"lines-icon","data-menu":""},s.a.createElement("div",{className:"icon-left"}),s.a.createElement("div",{className:"icon-right"})),s.a.createElement("div",{className:"mobile-menu__wrapper"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/pricing?inital"},"PRICING")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#how-it-works"},"HOW IT WORKS"," ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#about-us"},"ABOUT US"," ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/contact"},"CONTACT")),!this.props.noAction&&s.a.createElement("li",null,s.a.createElement("a",{href:"#",onClick:this.modalHandlerLogin}," ","LOGIN"," ")),!this.props.noAction&&s.a.createElement("li",null,s.a.createElement("a",{href:"#",onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"FREE CONSULTATION"))))))))}}]),t}(c.Component);h.contextType=f.a,t.default=h}}]);
//# sourceMappingURL=18.1c44744b.chunk.js.map