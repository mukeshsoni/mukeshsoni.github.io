import{S as n,i as s,s as a,k as t,j as e,e as o,t as p,J as c,d as l,n as u,m as i,c as r,a as k,g as d,b as h,f,o as m,G as w,I as g,v as y,r as b,w as v}from"../../chunks/vendor-ab208dc6.js";import{P as T}from"../../chunks/PostHeader-ff0a5535.js";function j(n){let s,a,j,E,x,I,H,L,W,M,A,R,$,S,B,_,C,N,O,J,G,U,z,D,F,K,Q,V,X,Y,Z,nn,sn,an,tn,en,on,pn,cn,ln,un,rn,kn,dn,hn,fn,mn,wn,gn,yn,bn,vn,Tn,jn,En,Pn,qn,xn,In,Hn,Ln,Wn,Mn,An,Rn,$n,Sn,Bn,_n,Cn,Nn;return a=new T({props:{title:P,date:q}}),{c(){s=t(),e(a.$$.fragment),j=t(),E=o("p"),x=p("Testing javascript is a tricky affair. Mainly because you can’t directly run your javascript written for a browser us something like ‘js myjstest.js’ in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it’s a lot of plumbing to get going.\nThe second reason it’s tough to test javascript is because of it’s async nature. Testing asynchronous functions is kind of a pain in the ass."),I=t(),H=o("p"),L=p("There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks."),W=t(),M=o("p"),A=p("Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function."),R=t(),$=o("pre"),S=t(),B=o("p"),_=p("How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on."),C=t(),N=o("p"),O=p("One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the ‘add’ function in the console."),J=t(),G=o("pre"),U=t(),z=o("p"),D=o("img"),K=t(),Q=o("p"),V=p("That is unit testing for you. The problem - it’s not “automated”."),X=t(),Y=o("p"),Z=p("How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity."),nn=t(),sn=o("pre"),an=t(),tn=o("p"),en=p("We can do one better by putting the actual code and the test code in external files and link them in our html file."),on=t(),pn=o("p"),cn=p("But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in “adding 2 and 5 passed” twice)."),ln=t(),un=o("p"),rn=p("Assertions -\nAll we wanted to do above was something like “i am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard”. And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -"),kn=t(),dn=o("pre"),hn=t(),fn=o("p"),mn=p("And the assert function should throw out pass and fail messages accordingly. Let’s try writing one -"),wn=t(),gn=o("pre"),yn=t(),bn=o("p"),vn=p("Now we can drop this function whenever we want to test stuff. In our case -"),Tn=t(),jn=o("pre"),En=t(),Pn=o("p"),qn=p("We can go ahead and enhance the assert function to tell us the number of test cases which passed -"),xn=t(),In=o("pre"),Hn=t(),Ln=o("p"),Wn=p("That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception."),Mn=t(),An=o("pre"),Rn=t(),$n=o("p"),Sn=p("If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you."),Bn=t(),_n=o("p"),Cn=p("In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!"),this.h()},l(n){c('[data-svelte="svelte-1tjcprc"]',document.head).forEach(l),s=u(n),i(a.$$.fragment,n),j=u(n),E=r(n,"P",{});var t=k(E);x=d(t,"Testing javascript is a tricky affair. Mainly because you can’t directly run your javascript written for a browser us something like ‘js myjstest.js’ in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it’s a lot of plumbing to get going.\nThe second reason it’s tough to test javascript is because of it’s async nature. Testing asynchronous functions is kind of a pain in the ass."),t.forEach(l),I=u(n),H=r(n,"P",{});var e=k(H);L=d(e,"There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks."),e.forEach(l),W=u(n),M=r(n,"P",{});var o=k(M);A=d(o,"Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function."),o.forEach(l),R=u(n),$=r(n,"PRE",{class:!0}),k($).forEach(l),S=u(n),B=r(n,"P",{});var p=k(B);_=d(p,"How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on."),p.forEach(l),C=u(n),N=r(n,"P",{});var h=k(N);O=d(h,"One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the ‘add’ function in the console."),h.forEach(l),J=u(n),G=r(n,"PRE",{class:!0}),k(G).forEach(l),U=u(n),z=r(n,"P",{});var f=k(z);D=r(f,"IMG",{src:!0,alt:!0}),f.forEach(l),K=u(n),Q=r(n,"P",{});var m=k(Q);V=d(m,"That is unit testing for you. The problem - it’s not “automated”."),m.forEach(l),X=u(n),Y=r(n,"P",{});var w=k(Y);Z=d(w,"How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity."),w.forEach(l),nn=u(n),sn=r(n,"PRE",{class:!0}),k(sn).forEach(l),an=u(n),tn=r(n,"P",{});var g=k(tn);en=d(g,"We can do one better by putting the actual code and the test code in external files and link them in our html file."),g.forEach(l),on=u(n),pn=r(n,"P",{});var y=k(pn);cn=d(y,"But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in “adding 2 and 5 passed” twice)."),y.forEach(l),ln=u(n),un=r(n,"P",{});var b=k(un);rn=d(b,"Assertions -\nAll we wanted to do above was something like “i am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard”. And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -"),b.forEach(l),kn=u(n),dn=r(n,"PRE",{class:!0}),k(dn).forEach(l),hn=u(n),fn=r(n,"P",{});var v=k(fn);mn=d(v,"And the assert function should throw out pass and fail messages accordingly. Let’s try writing one -"),v.forEach(l),wn=u(n),gn=r(n,"PRE",{class:!0}),k(gn).forEach(l),yn=u(n),bn=r(n,"P",{});var T=k(bn);vn=d(T,"Now we can drop this function whenever we want to test stuff. In our case -"),T.forEach(l),Tn=u(n),jn=r(n,"PRE",{class:!0}),k(jn).forEach(l),En=u(n),Pn=r(n,"P",{});var P=k(Pn);qn=d(P,"We can go ahead and enhance the assert function to tell us the number of test cases which passed -"),P.forEach(l),xn=u(n),In=r(n,"PRE",{class:!0}),k(In).forEach(l),Hn=u(n),Ln=r(n,"P",{});var q=k(Ln);Wn=d(q,"That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception."),q.forEach(l),Mn=u(n),An=r(n,"PRE",{class:!0}),k(An).forEach(l),Rn=u(n),$n=r(n,"P",{});var F=k($n);Sn=d(F,"If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you."),F.forEach(l),Bn=u(n),_n=r(n,"P",{});var Nn=k(_n);Cn=d(Nn,"In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!"),Nn.forEach(l),this.h()},h(){document.title="JavaScript Unit Testing - the HOW - Part I",h($,"class","language-svelte"),h(G,"class","language-javascript"),D.src!==(F="/_app/assets/_console_add.7bd53041.jpeg")&&h(D,"src","/_app/assets/_console_add.7bd53041.jpeg"),h(D,"alt","Running the test in the browser"),h(sn,"class","language-javascript"),h(dn,"class","language-javascript"),h(gn,"class","language-javascript"),h(jn,"class","language-javascript"),h(In,"class","language-javascript"),h(An,"class","language-javascript")},m(n,t){f(n,s,t),m(a,n,t),f(n,j,t),f(n,E,t),w(E,x),f(n,I,t),f(n,H,t),w(H,L),f(n,W,t),f(n,M,t),w(M,A),f(n,R,t),f(n,$,t),$.innerHTML='<code class="language-svelte">function add(x, y) <span class="token language-javascript"><span class="token punctuation">&#123;</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></span></code>',f(n,S,t),f(n,B,t),w(B,_),f(n,C,t),f(n,N,t),w(N,O),f(n,J,t),f(n,G,t),G.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',f(n,U,t),f(n,z,t),w(z,D),f(n,K,t),f(n,Q,t),w(Q,V),f(n,X,t),f(n,Y,t),w(Y,Z),f(n,nn,t),f(n,sn,t),sn.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token comment">// start test code</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token number">2</span> and <span class="token number">5</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token number">2</span> and <span class="token number">5</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token operator">-</span><span class="token number">1</span> and <span class="token number">3</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>adding <span class="token operator">-</span><span class="token number">1</span> and <span class="token number">3</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n<span class="token comment">// end test code</span></code>',f(n,an,t),f(n,tn,t),w(tn,en),f(n,on,t),f(n,pn,t),w(pn,cn),f(n,ln,t),f(n,un,t),w(un,rn),f(n,kn,t),f(n,dn,t),dn.innerHTML='<code class="language-javascript"><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"learn your maths"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',f(n,hn,t),f(n,fn,t),w(fn,mn),f(n,wn,t),f(n,gn,t),gn.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>\n  <span class="token punctuation">&#125;</span>\n\n  <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',f(n,yn,t),f(n,bn,t),w(bn,vn),f(n,Tn,t),f(n,jn,t),jn.innerHTML='<code class="language-javascript"><span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>learn your maths<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',f(n,En,t),f(n,Pn,t),w(Pn,qn),f(n,xn,t),f(n,In,t),In.innerHTML='<code class="language-javascript"><span class="token keyword">var</span> passedTestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>\n  <span class="token punctuation">&#125;</span>\n\n  passedTestCount<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> passed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',f(n,Hn,t),f(n,Ln,t),w(Ln,Wn),f(n,Mn,t),f(n,An,t),An.innerHTML='<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">expression<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>expression<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message <span class="token operator">||</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Test <span class="token keyword">case</span> failed<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if no fail message was passed by the function caller</span>\n  <span class="token punctuation">&#125;</span>\n\n  passedTestCount<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',f(n,Rn,t),f(n,$n,t),w($n,Sn),f(n,Bn,t),f(n,_n,t),w(_n,Cn),Nn=!0},p:g,i(n){Nn||(y(a.$$.fragment,n),Nn=!0)},o(n){b(a.$$.fragment,n),Nn=!1},d(n){n&&l(s),v(a,n),n&&l(j),n&&l(E),n&&l(I),n&&l(H),n&&l(W),n&&l(M),n&&l(R),n&&l($),n&&l(S),n&&l(B),n&&l(C),n&&l(N),n&&l(J),n&&l(G),n&&l(U),n&&l(z),n&&l(K),n&&l(Q),n&&l(X),n&&l(Y),n&&l(nn),n&&l(sn),n&&l(an),n&&l(tn),n&&l(on),n&&l(pn),n&&l(ln),n&&l(un),n&&l(kn),n&&l(dn),n&&l(hn),n&&l(fn),n&&l(wn),n&&l(gn),n&&l(yn),n&&l(bn),n&&l(Tn),n&&l(jn),n&&l(En),n&&l(Pn),n&&l(xn),n&&l(In),n&&l(Hn),n&&l(Ln),n&&l(Mn),n&&l(An),n&&l(Rn),n&&l($n),n&&l(Bn),n&&l(_n)}}}const E={title:"JavaScript Unit Testing - the HOW - Part I",date:"2013-07-09",slug:"2013-07-09-javascript-unit-testing-the-how-part-I"},{title:P,date:q,slug:x}=E;export default class extends n{constructor(n){super(),s(this,n,null,j,a,{})}}export{E as metadata};
