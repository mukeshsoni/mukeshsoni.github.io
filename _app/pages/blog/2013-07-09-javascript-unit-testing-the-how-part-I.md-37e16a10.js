import{S as n,i as s,s as a,A as t,k as e,j as o,J as p,d as c,n as l,m as u,f as i,o as r,p as k,v as d,r as h,w as f,q as m,e as w,t as g,c as y,a as b,g as v,b as T,G as j,I as E}from"../../chunks/vendor-ab208dc6.js";import{B as q}from"../../chunks/BlogLayout-964a8505.js";import"../../chunks/Bio-9303181a.js";function x(n){let s,a,t,o,p,u,r,k,d,h,f,m,q,x,P,I,$,H,L,W,A,M,B,R,S,_,C,N,O,J,G,U,z,D,F,K,Q,V,X,Y,Z,nn,sn,an,tn,en,on,pn,cn,ln,un,rn,kn,dn,hn,fn,mn,wn,gn,yn,bn,vn,Tn,jn,En,qn,xn;return{c(){s=w("p"),a=g("Testing javascript is a tricky affair. Mainly because you can’t directly run your javascript written for a browser us something like ‘js myjstest.js’ in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it’s a lot of plumbing to get going.\nThe second reason it’s tough to test javascript is because of it’s async nature. Testing asynchronous functions is kind of a pain in the ass."),t=e(),o=w("p"),p=g("There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks."),u=e(),r=w("p"),k=g("Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function."),d=e(),h=w("pre"),f=e(),m=w("p"),q=g("How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on."),x=e(),P=w("p"),I=g("One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the ‘add’ function in the console."),$=e(),H=w("pre"),L=e(),W=w("p"),A=w("img"),B=e(),R=w("p"),S=g("That is unit testing for you. The problem - it’s not “automated”."),_=e(),C=w("p"),N=g("How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity."),O=e(),J=w("pre"),G=e(),U=w("p"),z=g("We can do one better by putting the actual code and the test code in external files and link them in our html file."),D=e(),F=w("p"),K=g("But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in “adding 2 and 5 passed” twice)."),Q=e(),V=w("p"),X=g("Assertions -\nAll we wanted to do above was something like “i am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard”. And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -"),Y=e(),Z=w("pre"),nn=e(),sn=w("p"),an=g("And the assert function should throw out pass and fail messages accordingly. Let’s try writing one -"),tn=e(),en=w("pre"),on=e(),pn=w("p"),cn=g("Now we can drop this function whenever we want to test stuff. In our case -"),ln=e(),un=w("pre"),rn=e(),kn=w("p"),dn=g("We can go ahead and enhance the assert function to tell us the number of test cases which passed -"),hn=e(),fn=w("pre"),mn=e(),wn=w("p"),gn=g("That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception."),yn=e(),bn=w("pre"),vn=e(),Tn=w("p"),jn=g("If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you."),En=e(),qn=w("p"),xn=g("In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!"),this.h()},l(n){s=y(n,"P",{});var e=b(s);a=v(e,"Testing javascript is a tricky affair. Mainly because you can’t directly run your javascript written for a browser us something like ‘js myjstest.js’ in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it’s a lot of plumbing to get going.\nThe second reason it’s tough to test javascript is because of it’s async nature. Testing asynchronous functions is kind of a pain in the ass."),e.forEach(c),t=l(n),o=y(n,"P",{});var i=b(o);p=v(i,"There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks."),i.forEach(c),u=l(n),r=y(n,"P",{});var w=b(r);k=v(w,"Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function."),w.forEach(c),d=l(n),h=y(n,"PRE",{class:!0}),b(h).forEach(c),f=l(n),m=y(n,"P",{});var g=b(m);q=v(g,"How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on."),g.forEach(c),x=l(n),P=y(n,"P",{});var T=b(P);I=v(T,"One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the ‘add’ function in the console."),T.forEach(c),$=l(n),H=y(n,"PRE",{class:!0}),b(H).forEach(c),L=l(n),W=y(n,"P",{});var j=b(W);A=y(j,"IMG",{src:!0,alt:!0}),j.forEach(c),B=l(n),R=y(n,"P",{});var E=b(R);S=v(E,"That is unit testing for you. The problem - it’s not “automated”."),E.forEach(c),_=l(n),C=y(n,"P",{});var M=b(C);N=v(M,"How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity."),M.forEach(c),O=l(n),J=y(n,"PRE",{class:!0}),b(J).forEach(c),G=l(n),U=y(n,"P",{});var Pn=b(U);z=v(Pn,"We can do one better by putting the actual code and the test code in external files and link them in our html file."),Pn.forEach(c),D=l(n),F=y(n,"P",{});var In=b(F);K=v(In,"But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in “adding 2 and 5 passed” twice)."),In.forEach(c),Q=l(n),V=y(n,"P",{});var $n=b(V);X=v($n,"Assertions -\nAll we wanted to do above was something like “i am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard”. And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -"),$n.forEach(c),Y=l(n),Z=y(n,"PRE",{class:!0}),b(Z).forEach(c),nn=l(n),sn=y(n,"P",{});var Hn=b(sn);an=v(Hn,"And the assert function should throw out pass and fail messages accordingly. Let’s try writing one -"),Hn.forEach(c),tn=l(n),en=y(n,"PRE",{class:!0}),b(en).forEach(c),on=l(n),pn=y(n,"P",{});var Ln=b(pn);cn=v(Ln,"Now we can drop this function whenever we want to test stuff. In our case -"),Ln.forEach(c),ln=l(n),un=y(n,"PRE",{class:!0}),b(un).forEach(c),rn=l(n),kn=y(n,"P",{});var Wn=b(kn);dn=v(Wn,"We can go ahead and enhance the assert function to tell us the number of test cases which passed -"),Wn.forEach(c),hn=l(n),fn=y(n,"PRE",{class:!0}),b(fn).forEach(c),mn=l(n),wn=y(n,"P",{});var An=b(wn);gn=v(An,"That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception."),An.forEach(c),yn=l(n),bn=y(n,"PRE",{class:!0}),b(bn).forEach(c),vn=l(n),Tn=y(n,"P",{});var Mn=b(Tn);jn=v(Mn,"If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you."),Mn.forEach(c),En=l(n),qn=y(n,"P",{});var Bn=b(qn);xn=v(Bn,"In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!"),Bn.forEach(c),this.h()},h(){T(h,"class","language-svelte"),T(H,"class","language-javascript"),A.src!==(M="/_app/assets/_console_add.7bd53041.jpeg")&&T(A,"src","/_app/assets/_console_add.7bd53041.jpeg"),T(A,"alt","Running the test in the browser"),T(J,"class","language-javascript"),T(Z,"class","language-javascript"),T(en,"class","language-javascript"),T(un,"class","language-javascript"),T(fn,"class","language-javascript"),T(bn,"class","language-javascript")},m(n,e){i(n,s,e),j(s,a),i(n,t,e),i(n,o,e),j(o,p),i(n,u,e),i(n,r,e),j(r,k),i(n,d,e),i(n,h,e),h.innerHTML='<code class="language-svelte">function add(x, y) <span class="token language-javascript"><span class="token punctuation">&#123;</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></span></code>',i(n,f,e),i(n,m,e),j(m,q),i(n,x,e),i(n,P,e),j(P,I),i(n,$,e),i(n,H,e),H.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n\t<span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,L,e),i(n,W,e),j(W,A),i(n,B,e),i(n,R,e),j(R,S),i(n,_,e),i(n,C,e),j(C,N),i(n,O,e),i(n,J,e),J.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token comment">// start test code</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token number">2</span> and <span class="token number">5</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token number">2</span> and <span class="token number">5</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token operator">-</span><span class="token number">1</span> and <span class="token number">3</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token operator">-</span><span class="token number">1</span> and <span class="token number">3</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n<span class="token comment">// end test code</span></code>',i(n,G,e),i(n,U,e),j(U,z),i(n,D,e),i(n,F,e),j(F,K),i(n,Q,e),i(n,V,e),j(V,X),i(n,Y,e),i(n,Z,e),Z.innerHTML='<code class="language-javascript"><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">\'learn your maths\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',i(n,nn,e),i(n,sn,e),j(sn,an),i(n,tn,e),i(n,en,e),en.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>\n  <span class="token punctuation">&#125;</span>\n\n  <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,on,e),i(n,pn,e),j(pn,cn),i(n,ln,e),i(n,un,e),un.innerHTML='<code class="language-javascript"><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',i(n,rn,e),i(n,kn,e),j(kn,dn),i(n,hn,e),i(n,fn,e),fn.innerHTML='<code class="language-javascript"><span class="token keyword">var</span> passedTestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>\n  <span class="token punctuation">&#125;</span>\n\n  passedTestCount<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,mn,e),i(n,wn,e),j(wn,gn),i(n,yn,e),i(n,bn,e),bn.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>\n  <span class="token punctuation">&#125;</span>\n\n  passedTestCount<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,vn,e),i(n,Tn,e),j(Tn,jn),i(n,En,e),i(n,qn,e),j(qn,xn)},p:E,d(n){n&&c(s),n&&c(t),n&&c(o),n&&c(u),n&&c(r),n&&c(d),n&&c(h),n&&c(f),n&&c(m),n&&c(x),n&&c(P),n&&c($),n&&c(H),n&&c(L),n&&c(W),n&&c(B),n&&c(R),n&&c(_),n&&c(C),n&&c(O),n&&c(J),n&&c(G),n&&c(U),n&&c(D),n&&c(F),n&&c(Q),n&&c(V),n&&c(Y),n&&c(Z),n&&c(nn),n&&c(sn),n&&c(tn),n&&c(en),n&&c(on),n&&c(pn),n&&c(ln),n&&c(un),n&&c(rn),n&&c(kn),n&&c(hn),n&&c(fn),n&&c(mn),n&&c(wn),n&&c(yn),n&&c(bn),n&&c(vn),n&&c(Tn),n&&c(En),n&&c(qn)}}}function P(n){let s,a,w;const g=[I];let y={$$slots:{default:[x]},$$scope:{ctx:n}};for(let e=0;e<g.length;e+=1)y=t(y,g[e]);return a=new q({props:y}),{c(){s=e(),o(a.$$.fragment),this.h()},l(n){p('[data-svelte="svelte-5rs5ll"]',document.head).forEach(c),s=l(n),u(a.$$.fragment,n),this.h()},h(){document.title="JavaScript Unit Testing - the HOW - Part I"},m(n,t){i(n,s,t),r(a,n,t),w=!0},p(n,[s]){const t=0&s?k(g,[m(I)]):{};1&s&&(t.$$scope={dirty:s,ctx:n}),a.$set(t)},i(n){w||(d(a.$$.fragment,n),w=!0)},o(n){h(a.$$.fragment,n),w=!1},d(n){n&&c(s),f(a,n)}}}const I={title:"JavaScript Unit Testing - the HOW - Part I",created:"2013-07-09",slug:"2013-07-09-javascript-unit-testing-the-how-part-I"};export default class extends n{constructor(n){super(),s(this,n,null,P,a,{})}}export{I as metadata};
