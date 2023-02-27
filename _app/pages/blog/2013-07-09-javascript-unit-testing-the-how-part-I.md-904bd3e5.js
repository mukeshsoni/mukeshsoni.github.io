import{S as un,i as rn,s as kn,C as qs,k as l,w as fn,M as mn,d as n,m as c,x as dn,g as t,y as wn,z as hn,A as zs,q as yn,o as vn,B as bn,P as Gs,e,t as f,c as o,a as p,h as m,b as y,O as _n,H as r,L as gn}from"../../chunks/vendor-ec91eb1f.js";import{B as Tn}from"../../chunks/BlogLayout-2f12ce4e.js";import"../../chunks/Bio-da710757.js";var jn="/_app/assets/_console_add-7bd53041.jpeg";function En(P){let i,d,w,h,v,u,k,I,G,b,Fs=`<code class="language-svelte">function add(x, y) <span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></span></code>`,D,H,fs,F,L,ms,K,_,Ks=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Q,A,M,xs,V,W,ds,X,B,ws,Y,g,Qs=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// start test code</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token number">2</span> and <span class="token number">5</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token number">2</span> and <span class="token number">5</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token operator">-</span><span class="token number">1</span> and <span class="token number">3</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token operator">-</span><span class="token number">1</span> and <span class="token number">3</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">// end test code</span></code>`,Z,R,hs,ss,$,ys,ns,S,vs,as,T,Vs=`<code class="language-javascript"><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">'learn your maths'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ts,C,bs,es,j,Xs=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,os,O,_s,ps,E,Ys=`<code class="language-javascript"><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ls,N,gs,cs,q,Zs=`<code class="language-javascript"><span class="token keyword">var</span> passedTestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>
  <span class="token punctuation">&#125;</span>

  passedTestCount<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,us,J,Ts,is,x,sn=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>
  <span class="token punctuation">&#125;</span>

  passedTestCount<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,rs,U,js,ks,z,Es;return{c(){i=e("p"),d=f(`Testing javascript is a tricky affair. Mainly because you can\u2019t directly run your javascript written for a browser us something like \u2018js myjstest.js\u2019 in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it\u2019s a lot of plumbing to get going.
The second reason it\u2019s tough to test javascript is because of it\u2019s async nature. Testing asynchronous functions is kind of a pain in the ass.`),w=l(),h=e("p"),v=f("There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks."),u=l(),k=e("p"),I=f("Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function."),G=l(),b=e("pre"),D=l(),H=e("p"),fs=f("How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on."),F=l(),L=e("p"),ms=f("One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the \u2018add\u2019 function in the console."),K=l(),_=e("pre"),Q=l(),A=e("p"),M=e("img"),V=l(),W=e("p"),ds=f("That is unit testing for you. The problem - it\u2019s not \u201Cautomated\u201D."),X=l(),B=e("p"),ws=f("How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity."),Y=l(),g=e("pre"),Z=l(),R=e("p"),hs=f("We can do one better by putting the actual code and the test code in external files and link them in our html file."),ss=l(),$=e("p"),ys=f("But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in \u201Cadding 2 and 5 passed\u201D twice)."),ns=l(),S=e("p"),vs=f(`Assertions -
All we wanted to do above was something like \u201Ci am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard\u201D. And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -`),as=l(),T=e("pre"),ts=l(),C=e("p"),bs=f("And the assert function should throw out pass and fail messages accordingly. Let\u2019s try writing one -"),es=l(),j=e("pre"),os=l(),O=e("p"),_s=f("Now we can drop this function whenever we want to test stuff. In our case -"),ps=l(),E=e("pre"),ls=l(),N=e("p"),gs=f("We can go ahead and enhance the assert function to tell us the number of test cases which passed -"),cs=l(),q=e("pre"),us=l(),J=e("p"),Ts=f("That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception."),is=l(),x=e("pre"),rs=l(),U=e("p"),js=f("If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you."),ks=l(),z=e("p"),Es=f("In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!"),this.h()},l(s){i=o(s,"P",{});var a=p(i);d=m(a,`Testing javascript is a tricky affair. Mainly because you can\u2019t directly run your javascript written for a browser us something like \u2018js myjstest.js\u2019 in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it\u2019s a lot of plumbing to get going.
The second reason it\u2019s tough to test javascript is because of it\u2019s async nature. Testing asynchronous functions is kind of a pain in the ass.`),a.forEach(n),w=c(s),h=o(s,"P",{});var Ps=p(h);v=m(Ps,"There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks."),Ps.forEach(n),u=c(s),k=o(s,"P",{});var Is=p(k);I=m(Is,"Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function."),Is.forEach(n),G=c(s),b=o(s,"PRE",{class:!0});var nn=p(b);nn.forEach(n),D=c(s),H=o(s,"P",{});var Hs=p(H);fs=m(Hs,"How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on."),Hs.forEach(n),F=c(s),L=o(s,"P",{});var Ls=p(L);ms=m(Ls,"One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the \u2018add\u2019 function in the console."),Ls.forEach(n),K=c(s),_=o(s,"PRE",{class:!0});var an=p(_);an.forEach(n),Q=c(s),A=o(s,"P",{});var As=p(A);M=o(As,"IMG",{src:!0,alt:!0}),As.forEach(n),V=c(s),W=o(s,"P",{});var Ms=p(W);ds=m(Ms,"That is unit testing for you. The problem - it\u2019s not \u201Cautomated\u201D."),Ms.forEach(n),X=c(s),B=o(s,"P",{});var Ws=p(B);ws=m(Ws,"How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity."),Ws.forEach(n),Y=c(s),g=o(s,"PRE",{class:!0});var tn=p(g);tn.forEach(n),Z=c(s),R=o(s,"P",{});var Bs=p(R);hs=m(Bs,"We can do one better by putting the actual code and the test code in external files and link them in our html file."),Bs.forEach(n),ss=c(s),$=o(s,"P",{});var Rs=p($);ys=m(Rs,"But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in \u201Cadding 2 and 5 passed\u201D twice)."),Rs.forEach(n),ns=c(s),S=o(s,"P",{});var $s=p(S);vs=m($s,`Assertions -
All we wanted to do above was something like \u201Ci am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard\u201D. And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -`),$s.forEach(n),as=c(s),T=o(s,"PRE",{class:!0});var en=p(T);en.forEach(n),ts=c(s),C=o(s,"P",{});var Ss=p(C);bs=m(Ss,"And the assert function should throw out pass and fail messages accordingly. Let\u2019s try writing one -"),Ss.forEach(n),es=c(s),j=o(s,"PRE",{class:!0});var on=p(j);on.forEach(n),os=c(s),O=o(s,"P",{});var Cs=p(O);_s=m(Cs,"Now we can drop this function whenever we want to test stuff. In our case -"),Cs.forEach(n),ps=c(s),E=o(s,"PRE",{class:!0});var pn=p(E);pn.forEach(n),ls=c(s),N=o(s,"P",{});var Os=p(N);gs=m(Os,"We can go ahead and enhance the assert function to tell us the number of test cases which passed -"),Os.forEach(n),cs=c(s),q=o(s,"PRE",{class:!0});var ln=p(q);ln.forEach(n),us=c(s),J=o(s,"P",{});var Ns=p(J);Ts=m(Ns,"That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception."),Ns.forEach(n),is=c(s),x=o(s,"PRE",{class:!0});var cn=p(x);cn.forEach(n),rs=c(s),U=o(s,"P",{});var Js=p(U);js=m(Js,"If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you."),Js.forEach(n),ks=c(s),z=o(s,"P",{});var Us=p(z);Es=m(Us,"In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!"),Us.forEach(n),this.h()},h(){y(b,"class","language-svelte"),y(_,"class","language-javascript"),_n(M.src,xs=jn)||y(M,"src",xs),y(M,"alt","Running the test in the browser"),y(g,"class","language-javascript"),y(T,"class","language-javascript"),y(j,"class","language-javascript"),y(E,"class","language-javascript"),y(q,"class","language-javascript"),y(x,"class","language-javascript")},m(s,a){t(s,i,a),r(i,d),t(s,w,a),t(s,h,a),r(h,v),t(s,u,a),t(s,k,a),r(k,I),t(s,G,a),t(s,b,a),b.innerHTML=Fs,t(s,D,a),t(s,H,a),r(H,fs),t(s,F,a),t(s,L,a),r(L,ms),t(s,K,a),t(s,_,a),_.innerHTML=Ks,t(s,Q,a),t(s,A,a),r(A,M),t(s,V,a),t(s,W,a),r(W,ds),t(s,X,a),t(s,B,a),r(B,ws),t(s,Y,a),t(s,g,a),g.innerHTML=Qs,t(s,Z,a),t(s,R,a),r(R,hs),t(s,ss,a),t(s,$,a),r($,ys),t(s,ns,a),t(s,S,a),r(S,vs),t(s,as,a),t(s,T,a),T.innerHTML=Vs,t(s,ts,a),t(s,C,a),r(C,bs),t(s,es,a),t(s,j,a),j.innerHTML=Xs,t(s,os,a),t(s,O,a),r(O,_s),t(s,ps,a),t(s,E,a),E.innerHTML=Ys,t(s,ls,a),t(s,N,a),r(N,gs),t(s,cs,a),t(s,q,a),q.innerHTML=Zs,t(s,us,a),t(s,J,a),r(J,Ts),t(s,is,a),t(s,x,a),x.innerHTML=sn,t(s,rs,a),t(s,U,a),r(U,js),t(s,ks,a),t(s,z,a),r(z,Es)},p:gn,d(s){s&&n(i),s&&n(w),s&&n(h),s&&n(u),s&&n(k),s&&n(G),s&&n(b),s&&n(D),s&&n(H),s&&n(F),s&&n(L),s&&n(K),s&&n(_),s&&n(Q),s&&n(A),s&&n(V),s&&n(W),s&&n(X),s&&n(B),s&&n(Y),s&&n(g),s&&n(Z),s&&n(R),s&&n(ss),s&&n($),s&&n(ns),s&&n(S),s&&n(as),s&&n(T),s&&n(ts),s&&n(C),s&&n(es),s&&n(j),s&&n(os),s&&n(O),s&&n(ps),s&&n(E),s&&n(ls),s&&n(N),s&&n(cs),s&&n(q),s&&n(us),s&&n(J),s&&n(is),s&&n(x),s&&n(rs),s&&n(U),s&&n(ks),s&&n(z)}}}function qn(P){let i,d,w;const h=[P[0],Ds];let v={$$slots:{default:[En]},$$scope:{ctx:P}};for(let u=0;u<h.length;u+=1)v=qs(v,h[u]);return d=new Tn({props:v}),{c(){i=l(),fn(d.$$.fragment),this.h()},l(u){mn('[data-svelte="svelte-5rs5ll"]',document.head).forEach(n),i=c(u),dn(d.$$.fragment,u),this.h()},h(){document.title="JavaScript Unit Testing - the HOW - Part I"},m(u,k){t(u,i,k),wn(d,u,k),w=!0},p(u,[k]){const I=k&1?hn(h,[k&1&&zs(u[0]),k&0&&zs(Ds)]):{};k&2&&(I.$$scope={dirty:k,ctx:u}),d.$set(I)},i(u){w||(yn(d.$$.fragment,u),w=!0)},o(u){vn(d.$$.fragment,u),w=!1},d(u){u&&n(i),bn(d,u)}}}const Ds={title:"JavaScript Unit Testing - the HOW - Part I",created:"2013-07-09",slug:"2013-07-09-javascript-unit-testing-the-how-part-I"};function xn(P,i,d){return P.$$set=w=>{d(0,i=qs(qs({},i),Gs(w)))},i=Gs(i),[i]}class Ln extends un{constructor(i){super();rn(this,i,xn,qn,kn,{})}}export{Ln as default,Ds as metadata};
