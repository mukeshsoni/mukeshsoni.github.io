import{S as t,i as s,s as a,e,t as r,k as n,c as o,a as l,g as i,d as c,n as $,F as f,b as d,f as h,G as m,h as u,I as p,D as g,j as v,m as b,o as B,H as w,v as E,r as j,w as x}from"./vendor-ab208dc6.js";import{B as A}from"./Bio-9303181a.js";function D(t){let s,a,g,v,b;return{c(){s=e("h2"),a=r(t[0]),g=n(),v=e("div"),b=r(t[1]),this.h()},l(e){s=o(e,"H2",{style:!0});var r=l(s);a=i(r,t[0]),r.forEach(c),g=$(e),v=o(e,"DIV",{class:!0});var n=l(v);b=i(n,t[1]),n.forEach(c),this.h()},h(){f(s,"margin-bottom","0"),d(v,"class","date")},m(t,e){h(t,s,e),m(s,a),h(t,g,e),h(t,v,e),m(v,b)},p(t,[s]){1&s&&u(a,t[0]),2&s&&u(b,t[1])},i:p,o:p,d(t){t&&c(s),t&&c(g),t&&c(v)}}}function H(t,s,a){let{title:e}=s,{date:r}=s;return t.$$set=t=>{"title"in t&&a(0,e=t.title),"date"in t&&a(1,r=t.date)},[e,r]}class I extends t{constructor(t){super(),s(this,t,H,D,a,{title:0,date:1})}}function V(t){let s,a,f,u,p,D,H,V,k,y,F,G,R,S;a=new I({props:{title:t[0],date:t[1]}});const q=t[3].default,z=g(q,t,t[2],null);return R=new A({}),{c(){s=e("div"),v(a.$$.fragment),f=n(),z&&z.c(),u=n(),p=e("br"),D=n(),H=e("a"),V=r("Browse more posts"),k=n(),y=e("h3"),F=r("About me"),G=n(),v(R.$$.fragment),this.h()},l(t){s=o(t,"DIV",{class:!0});var e=l(s);b(a.$$.fragment,e),f=$(e),z&&z.l(e),u=$(e),p=o(e,"BR",{}),D=$(e),H=o(e,"A",{href:!0});var r=l(H);V=i(r,"Browse more posts"),r.forEach(c),k=$(e),y=o(e,"H3",{});var n=l(y);F=i(n,"About me"),n.forEach(c),G=$(e),b(R.$$.fragment,e),e.forEach(c),this.h()},h(){d(H,"href","/"),d(s,"class","post")},m(t,e){h(t,s,e),B(a,s,null),m(s,f),z&&z.m(s,null),m(s,u),m(s,p),m(s,D),m(s,H),m(H,V),m(s,k),m(s,y),m(y,F),m(s,G),B(R,s,null),S=!0},p(t,[s]){const e={};1&s&&(e.title=t[0]),2&s&&(e.date=t[1]),a.$set(e),z&&z.p&&(!S||4&s)&&w(z,q,t,t[2],s,null,null)},i(t){S||(E(a.$$.fragment,t),E(z,t),E(R.$$.fragment,t),S=!0)},o(t){j(a.$$.fragment,t),j(z,t),j(R.$$.fragment,t),S=!1},d(t){t&&c(s),x(a),z&&z.d(t),x(R)}}}function k(t,s,a){let{$$slots:e={},$$scope:r}=s,{title:n}=s,{date:o}=s;return t.$$set=t=>{"title"in t&&a(0,n=t.title),"date"in t&&a(1,o=t.date),"$$scope"in t&&a(2,r=t.$$scope)},[n,o,r,e]}class y extends t{constructor(t){super(),s(this,t,k,V,a,{title:0,date:1})}}export{y as B};
