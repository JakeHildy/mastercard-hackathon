(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(20),i=c.n(s),o=c(13),r=c(7),d=c(8),l=c(10),j=c(9),u=c(14),b=c(2),p=(c(26),c(27),c(28),c.p+"static/media/Card.46a45d96.png"),h=c(1);var f=function(e){var t=e.handleFaceIdClick;return Object(h.jsx)("div",{className:"payment-card",children:Object(h.jsxs)("div",{className:"payment-card__popup",children:[Object(h.jsx)(u.b,{to:"/second-page",className:"payment-card__popup-open",onClick:t,children:Object(h.jsx)("button",{className:"payment-card__button"})}),Object(h.jsx)("img",{className:"payment-card__card",src:p})]})})},m=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1,showCard:!1},e.handleVerificationClicked=function(t){console.log("Verify Payment Clicked"),t.preventDefault(),e.setState({showCard:!0})},e.handleFaceIdClicked=function(e){console.log("Face Id Clicked")},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"home-page",children:[Object(h.jsx)("button",{className:"home-page__button",onClick:this.handleVerificationClicked,children:"Buy now"}),this.state.showCard&&Object(h.jsx)(f,{handleFaceIdClick:this.handleFaceIdClicked})]})}}]),c}(a.Component),O=(c(35),c.p+"static/media/face-id-box-no-logo.d4f08424.svg"),v=c.p+"static/media/cancel-x-button.4becafde.svg",g=c.p+"static/media/scan circle.8ef32f4f.svg",x=(c(36),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={playing:!1,showCircle:!1},e.startVideo=function(){e.setState({playing:!0}),navigator.getUserMedia({video:!0},(function(e){var t=document.getElementsByClassName("video__videoFeed")[0];t&&(t.srcObject=e)}),(function(e){return console.log(e)}))},e.stopVideo=function(){e.setState({playing:!1}),document.getElementsByClassName("video__videoFeed")[0].srcObject.getTracks()[0].stop()},e.componentDidMount=function(){e.startVideo(),setTimeout((function(){console.log("Timer Done"),e.setState({showCircle:!0})}),2e3),setTimeout((function(){console.log("Timer Done"),e.props.history.push("/success")}),5e3)},e.goBack=function(){e.stopVideo(),e.props.history.goBack()},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"second-page",children:[Object(h.jsx)("div",{className:"second-page__logo-container",children:Object(h.jsxs)("div",{className:"video__container",children:[Object(h.jsx)("video",{height:20,width:30,muted:!0,autoPlay:!0,className:"video__videoFeed"}),Object(h.jsx)("img",{className:"second-page__logo",alt:"FaceLogo",src:O}),this.state.showCircle&&Object(h.jsx)("img",{className:"second-page__scan-circle",alt:"FaceLogo",src:g})]})}),Object(h.jsx)("div",{className:"second-page__buttons",children:Object(h.jsx)("img",{src:v,alt:"Cancel",onClick:this.goBack})})]})}}]),c}(a.Component)),_=(c(37),c.p+"static/media/Checked.abd4801a.svg"),y=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={showButton:!1},e.activateRedirect=function(){setTimeout((function(){e.props.history.push("/")}),2500)},e}return Object(d.a)(c,[{key:"render",value:function(){return this.activateRedirect(),Object(h.jsxs)("div",{className:"verification__page",children:[Object(h.jsx)("div",{className:"verification__background"}),Object(h.jsx)("img",{className:"verification__check",src:_})]})}}]),c}(a.Component),k=(c(38),c.p+"static/media/Failed.66226f6d.svg"),C=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={showButton:!1},e.activateRedirect=function(){setTimeout((function(){e.props.history.push("/second-page")}),5e3)},e}return Object(d.a)(c,[{key:"render",value:function(){return this.activateRedirect(),Object(h.jsxs)("div",{className:"verification-failed__page",children:[Object(h.jsx)("div",{className:"verification-failed__background"}),Object(h.jsx)("img",{className:"verification-failed__failed",src:k})]})}}]),c}(a.Component),N=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,render:function(e){return Object(h.jsx)(m,Object(o.a)({},e))}}),Object(h.jsx)(b.b,{path:"/second-page",render:function(e){return Object(h.jsx)(x,Object(o.a)({},e))}}),Object(h.jsx)(b.b,{path:"/success",render:function(e){return Object(h.jsx)(y,Object(o.a)({},e))}}),Object(h.jsx)(b.b,{path:"/failed",render:function(e){return Object(h.jsx)(C,Object(o.a)({},e))}}),Object(h.jsx)(b.a,{from:"/mastercard-hackathon",to:"/"})]}),Object(h.jsx)("div",{className:"iphone"})]})})})}}]),c}(a.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a4526140.chunk.js.map