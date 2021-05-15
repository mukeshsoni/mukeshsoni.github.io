import{_ as t}from"../chunks/preload-helper-9f12a5fd.js";import{S as e,i as o,s,e as a,k as n,t as r,c as i,a as h,n as l,g as c,d as f,b as u,F as p,f as g,G as d,I as m,h as v,j as b,J as w,m as x,o as E,v as _,r as y,w as j,K as I}from"../chunks/vendor-ab208dc6.js";function k(t){let e,o,s,v,b,w,x,E,_,y,j,I,k,T,D,R,S,A,L,V,P,$,O,M,H,J;return{c(){e=a("div"),o=a("div"),s=a("img"),b=n(),w=a("div"),x=a("p"),E=r("This is the personal blog of "),_=a("strong"),y=r("Mukesh Soni"),j=r(". I am a frontend engineer who's\n\t\t\t\texhausted trying to keep up with the new technologies in the frontend world. I am good at\n\t\t\t\tJavaScript, HTML, CSS, React (ReactJS) and nodejs. I have been doing this stuff since 2011."),I=n(),k=a("p"),T=r("This blog was written in "),D=a("a"),R=r("svelte"),S=r(", using\n\t\t\t\t"),A=a("a"),L=r("svelte-kit"),V=r(", even though i write reactjs in my day job."),P=n(),$=a("a"),O=r("Follow me on Twitter"),M=n(),H=a("a"),J=r("Look at my open source work on github"),this.h()},l(t){e=i(t,"DIV",{style:!0});var a=h(e);o=i(a,"DIV",{style:!0});var n=h(o);s=i(n,"IMG",{src:!0,alt:!0,style:!0}),b=l(n),w=i(n,"DIV",{});var r=h(w);x=i(r,"P",{style:!0});var u=h(x);E=c(u,"This is the personal blog of "),_=i(u,"STRONG",{});var p=h(_);y=c(p,"Mukesh Soni"),p.forEach(f),j=c(u,". I am a frontend engineer who's\n\t\t\t\texhausted trying to keep up with the new technologies in the frontend world. I am good at\n\t\t\t\tJavaScript, HTML, CSS, React (ReactJS) and nodejs. I have been doing this stuff since 2011."),u.forEach(f),I=l(r),k=i(r,"P",{style:!0});var g=h(k);T=c(g,"This blog was written in "),D=i(g,"A",{href:!0});var d=h(D);R=c(d,"svelte"),d.forEach(f),S=c(g,", using\n\t\t\t\t"),A=i(g,"A",{href:!0});var m=h(A);L=c(m,"svelte-kit"),m.forEach(f),V=c(g,", even though i write reactjs in my day job."),g.forEach(f),r.forEach(f),n.forEach(f),P=l(a),$=i(a,"A",{style:!0,href:!0});var v=h($);O=c(v,"Follow me on Twitter"),v.forEach(f),M=l(a),H=i(a,"A",{style:!0,href:!0});var F=h(H);J=c(F,"Look at my open source work on github"),F.forEach(f),a.forEach(f),this.h()},h(){s.src!==(v="/profile-pic.jpg")&&u(s,"src","/profile-pic.jpg"),u(s,"alt","Mukesh Soni"),p(s,"margin-right","1rem"),p(s,"margin-bottom","0"),p(s,"width","56px"),p(s,"height","56px"),p(x,"margin-top","0"),u(D,"href","https://svelte.dev"),u(A,"href","https://kit.svelte.dev/"),p(k,"margin-top","0"),p(o,"display","flex"),p($,"text-decoration","none"),p($,"box-shadow","none"),u($,"href","https://twitter.com/mukeshsoni"),p(H,"text-decoration","none"),p(H,"box-shadow","none"),u(H,"href","https://github.com/mukeshsoni"),p(e,"display","flex"),p(e,"margin-bottom","3.5rem"),p(e,"flex-direction","column")},m(t,a){g(t,e,a),d(e,o),d(o,s),d(o,b),d(o,w),d(w,x),d(x,E),d(x,_),d(_,y),d(x,j),d(w,I),d(w,k),d(k,T),d(k,D),d(D,R),d(k,S),d(k,A),d(A,L),d(k,V),d(e,P),d(e,$),d($,O),d(e,M),d(e,H),d(H,J)},p:m,i:m,o:m,d(t){t&&f(e)}}}class T extends e{constructor(t){super(),o(this,t,null,k,s,{})}}function D(t,e,o){const s=t.slice();return s[1]=e[o],s}function R(t){let e,o,s,p,m,b,w,x,E,_=t[1].metadata.title+"",y=t[1].metadata.date+"";return{c(){e=a("li"),o=a("a"),s=a("h2"),p=r(_),b=n(),w=a("div"),x=r(y),E=n(),this.h()},l(t){e=i(t,"LI",{class:!0});var a=h(e);o=i(a,"A",{class:!0,rel:!0,href:!0});var n=h(o);s=i(n,"H2",{});var r=h(s);p=c(r,_),r.forEach(f),n.forEach(f),b=l(a),w=i(a,"DIV",{class:!0});var u=h(w);x=c(u,y),u.forEach(f),E=l(a),a.forEach(f),this.h()},h(){u(o,"class","text-blue-500 space-y-3"),u(o,"rel","prefetch"),u(o,"href",m="blog/"+t[1].metadata.slug),u(w,"class","date"),u(e,"class","list-none")},m(t,a){g(t,e,a),d(e,o),d(o,s),d(s,p),d(e,b),d(e,w),d(w,x),d(e,E)},p(t,e){1&e&&_!==(_=t[1].metadata.title+"")&&v(p,_),1&e&&m!==(m="blog/"+t[1].metadata.slug)&&u(o,"href",m),1&e&&y!==(y=t[1].metadata.date+"")&&v(x,y)},d(t){t&&f(e)}}}function S(t){let e,o,s,m,v,k,S,A,L,V,P,$,O,M;s=new T({});let H=t[0],J=[];for(let a=0;a<H.length;a+=1)J[a]=R(D(t,H,a));return{c(){e=n(),o=a("div"),b(s.$$.fragment),m=n(),v=a("h3"),k=a("a"),S=r("/resume/"),A=n(),L=a("div"),V=a("h2"),P=r("Recent posts"),$=n(),O=a("ul");for(let t=0;t<J.length;t+=1)J[t].c();this.h()},l(t){w('[data-svelte="svelte-b2pdby"]',document.head).forEach(f),e=l(t),o=i(t,"DIV",{});var a=h(o);x(s.$$.fragment,a),m=l(a),v=i(a,"H3",{style:!0});var n=h(v);k=i(n,"A",{href:!0,style:!0});var r=h(k);S=c(r,"/resume/"),r.forEach(f),n.forEach(f),A=l(a),L=i(a,"DIV",{});var u=h(L);V=i(u,"H2",{});var p=h(V);P=c(p,"Recent posts"),p.forEach(f),$=l(u),O=i(u,"UL",{class:!0});var g=h(O);for(let e=0;e<J.length;e+=1)J[e].l(g);g.forEach(f),u.forEach(f),a.forEach(f),this.h()},h(){document.title="unstack.in blog",u(k,"href","/resume"),p(k,"box-shadow","none"),p(v,"margin-bottom","2rem"),u(O,"class","posts")},m(t,a){g(t,e,a),g(t,o,a),E(s,o,null),d(o,m),d(o,v),d(v,k),d(k,S),d(o,A),d(o,L),d(L,V),d(V,P),d(L,$),d(L,O);for(let e=0;e<J.length;e+=1)J[e].m(O,null);M=!0},p(t,[e]){if(1&e){let o;for(H=t[0],o=0;o<H.length;o+=1){const s=D(t,H,o);J[o]?J[o].p(s,e):(J[o]=R(s),J[o].c(),J[o].m(O,null))}for(;o<J.length;o+=1)J[o].d(1);J.length=H.length}},i(t){M||(_(s.$$.fragment,t),M=!0)},o(t){y(s.$$.fragment,t),M=!1},d(t){t&&f(e),t&&f(o),j(s),I(J,t)}}}var A=function(t,e,o,s){return new(o||(o=Promise))((function(a,n){function r(t){try{h(s.next(t))}catch(e){n(e)}}function i(t){try{h(s.throw(t))}catch(e){n(e)}}function h(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,i)}h((s=s.apply(t,e||[])).next())}))};const L={"./blog/2012-06-11-customizing-bootstrap-from-twitter.svx":()=>t((()=>import("./blog/2012-06-11-customizing-bootstrap-from-twitter.svx-7d93f81b.js")),["/_app/pages/blog/2012-06-11-customizing-bootstrap-from-twitter.svx-7d93f81b.js","/_app/chunks/vendor-ab208dc6.js"]),"./blog/2012-12-30-my-top-5-wishes-for-the-future.svx":()=>t((()=>import("./blog/2012-12-30-my-top-5-wishes-for-the-future.svx-56279ea3.js")),["/_app/pages/blog/2012-12-30-my-top-5-wishes-for-the-future.svx-56279ea3.js","/_app/chunks/vendor-ab208dc6.js"]),"./blog/2013-05-28-what-is-nodejs.svx":()=>t((()=>import("./blog/2013-05-28-what-is-nodejs.svx-7960f92d.js")),["/_app/pages/blog/2013-05-28-what-is-nodejs.svx-7960f92d.js","/_app/chunks/vendor-ab208dc6.js"]),"./blog/2013-07-08-javascript-unit-testing-the-why.svx":()=>t((()=>import("./blog/2013-07-08-javascript-unit-testing-the-why.svx-0877bf14.js")),["/_app/pages/blog/2013-07-08-javascript-unit-testing-the-why.svx-0877bf14.js","/_app/chunks/vendor-ab208dc6.js"]),"./blog/2013-07-09-javascript-unit-testing-the-how-part-I.svx":()=>t((()=>import("./blog/2013-07-09-javascript-unit-testing-the-how-part-I.svx-b7b77eb0.js")),["/_app/pages/blog/2013-07-09-javascript-unit-testing-the-how-part-I.svx-b7b77eb0.js","/_app/chunks/vendor-ab208dc6.js"]),"./blog/2015-01-25-getting-started-with-phonegap-on-osx.svx":()=>t((()=>import("./blog/2015-01-25-getting-started-with-phonegap-on-osx.svx-28b78570.js")),["/_app/pages/blog/2015-01-25-getting-started-with-phonegap-on-osx.svx-28b78570.js","/_app/chunks/vendor-ab208dc6.js"])};let V=[];for(const M in L)V.push(L[M]().then((t=>t)));function P(t,e){return new Date(e.metadata.date)-new Date(t.metadata.date)}function $({page:t,fetch:e}){return A(this,void 0,void 0,(function*(){const t=yield Promise.all(V);return t.sort(P),{props:{posts:t}}}))}function O(t,e,o){let{posts:s}=e;return t.$$set=t=>{"posts"in t&&o(0,s=t.posts)},[s]}export default class extends e{constructor(t){super(),o(this,t,O,S,s,{posts:0})}}export{$ as load};
