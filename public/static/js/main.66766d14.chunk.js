(this["webpackJsonpstocktwits-api-app"]=this["webpackJsonpstocktwits-api-app"]||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),c=(a(32),a(33),a(8)),s=a.n(c),m=a(22),u=a(7),i=a(58),p=a(59),d=a(25),E=a(60),f=a(62),g=a(61),h=a(23),y=a.n(h),b=function(e){var t=e.count;return n.createElement(i.a,null,n.createElement(p.a,null,e.data&&e.data.messages?e.data.messages.slice(0,t).map((function(e,t){return n.createElement(d.a,{key:t,sm:12,md:6,lg:4,className:"elements"},n.createElement(g.a,{style:{marginBottom:"20px"},bg:"secondary"},n.createElement(g.a.Body,null,n.createElement(g.a.Title,null,e.created_at),n.createElement(g.a.Text,null,e.body))))})):null))},w=function(){var e=n.useState(""),t=Object(u.a)(e,2),a=t[0],l=t[1],r=n.useState({}),o=Object(u.a)(r,2),c=o[0],h=o[1],w=n.useState(!1),v=Object(u.a)(w,2),x=v[0],S=v[1],T=n.useState(3),k=Object(u.a)(T,2),A=k[0],B=k[1],C=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),t.preventDefault(),clearInterval(),e.next=5,y.a.post("/api",{title:a}).then((function(e){S(!1),h(e.data),console.log(e.data,c,a)})).catch((function(e){S(!0),console.log(e.response&&e.response.data?e.response.data:"Unspecified Error")})).finally((function(){}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.createElement(i.a,null,n.createElement(p.a,null,n.createElement(d.a,null,n.createElement(E.a,{id:"form-form",onSubmit:C},n.createElement(E.a.Group,null,n.createElement(E.a.Label,null,"US Stock Symbol"),n.createElement(E.a.Control,{id:"form-control",type:"text",placeholder:"eg: AAPL, BABA, BAC, etc...",onChange:function(e){return l(e.target.value)}}),n.createElement(E.a.Text,{className:"text-muted"},c&&c.messages?"Please refresh using the button below to get the most recent tweets for your search.":"Please search without using a $ symbol.")),c&&c.messages?n.createElement(f.a,{variant:"outline-primary",type:"submit"},"Refresh Search"):n.createElement(f.a,{variant:"primary",type:"submit"},"Submit")))),x?n.createElement(p.a,{style:{marginTop:"20px"},className:"alert alert-danger"},"There was an error on your submission, please try again."):null,c&&c.messages?n.createElement(g.a,{style:{marginTop:"20px",paddingTop:"20px"}},n.createElement(g.a.Title,{style:{color:"green"}},"$".concat(c.symbol.symbol,": ").concat(c.symbol.title,"  Showing ").concat(A,"/30 Tweets"),n.createElement(p.a,null,n.createElement(d.a,{md:3}),n.createElement(d.a,{md:6},n.createElement(E.a.Control,{placeholder:"eg: 0, 1, 2, 3, etc...",id:"form-control",type:"number",min:"0",max:"30",onChange:function(e){return B(e.target.value)}}),n.createElement(E.a.Text,{className:"text-muted"},"Adjust the number of tweets displayed below. The default value is 3.")),n.createElement(d.a,{md:3})),console.log(c)),n.createElement("hr",null),n.createElement(g.a.Body,null,n.createElement(b,{data:c,count:A})),n.createElement(g.a.Footer,null,n.createElement(f.a,{variant:"outline-success",onClick:function(){h(null)}},"Close ",c.symbol.title))):null)};var v=function(){return l.a.createElement(i.a,{className:"App"},l.a.createElement(p.a,{className:"App-header"},l.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.66766d14.chunk.js.map