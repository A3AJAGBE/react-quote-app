(this["webpackJsonpquote-app"]=this["webpackJsonpquote-app"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(15),o=c.n(s),i=(c(24),c(7)),r=(c(25),c(26),c(8)),l=c(16),j=c(11),d=c(17),b=c(10),u=c(18),h=c(14),x=c(19),f=c(0),p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){var t=Math.floor(Math.random()*e.length);a(e[t])}))};Object(n.useEffect)((function(){s()}),[]);var o=Object(f.jsx)(r.a,{icon:l.a}),p=Object(f.jsx)(r.a,{icon:j.c}),m=Object(f.jsx)(r.a,{icon:j.b}),O=Object(f.jsx)(r.a,{icon:j.a});return Object(f.jsx)(d.a,{fluid:!0,id:"App-Container",children:Object(f.jsxs)("div",{className:"Quote-Div text-center w-100",id:"quote-box",children:[Object(f.jsx)("h1",{className:"display-4 fw-bold mb-4",children:"A3AJAGBE Quote App"}),Object(f.jsxs)(b.a,{id:"App-Card",className:"col-lg-6 mx-auto",children:[Object(f.jsx)(b.a.Body,{children:Object(f.jsx)("blockquote",{className:"blockquote mb-0 text-wrap",id:"text",children:Object(f.jsxs)("p",{className:"mb-2 fs-1",children:[O," ",c.text," ",m]})})}),Object(f.jsxs)(b.a.Title,{id:"author",className:"lead fs-4",children:[" \u2014 ",c.author]}),Object(f.jsx)(b.a.Footer,{children:Object(f.jsxs)(u.a,{className:"flex-md-row-reverse my-2",children:[Object(f.jsxs)(h.a,{md:6,className:"d-grid d-md-flex justify-content-md-end",children:[Object(f.jsxs)(x.a,{className:"btn btn-lg coral",id:"new-quote",onClick:s,children:[p," New"]}),Object(f.jsx)("hr",{})]}),Object(f.jsx)(h.a,{className:"d-grid d-md-flex",children:Object(f.jsxs)("a",{href:'https://twitter.com/intent/tweet?text="'.concat(c.text,'" - ').concat(c.author," via https://a3ajagbe.github.io/react-quote-app/"),target:"_blank",rel:"noopener noreferrer",className:"btn btn-lg btn-info",id:"tweet-quote",children:[o," Tweet"]})})]})})]})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),m()}},[[33,1,2]]]);
//# sourceMappingURL=main.c195c28a.chunk.js.map