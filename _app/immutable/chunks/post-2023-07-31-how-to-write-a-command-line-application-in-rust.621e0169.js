import{S as Yt,i as Zt,s as se,R as jn,a as u,z as ae,O as ne,h as a,c as i,A as te,b as e,B as ee,T as pe,U as gt,g as oe,d as le,C as re,V as Pt,k as l,r as p,l as r,m as c,u as o,p as k,G as n,n as ce}from"./index.bc8fed38.js";import{P as ue}from"./post_layout.75190885.js";function ie(ss){let m,h,E,d,N,f,v,as,ks,Ca,Ta,ns,Oa,La,Ns,Us,$s,ts,Da,As,es,Ha,js,U,Tt=`<code class="language-bash"><span class="token function">cargo</span> new add-machine
<span class="token builtin class-name">cd</span> add-machine
<span class="token function">cargo</span> run</code>`,Ss,T,Ma,ms,xa,Ra,Bs,ps,Wa,Vs,$,Ot=`<code class="language-bash">add-machine <span class="token number">2</span> <span class="token number">3</span>
// prints <span class="token number">5</span></code>`,zs,A,Ia,ds,Na,Fs,j,Lt=`<code class="language-bash"><span class="token function">cargo</span> run <span class="token number">2</span> <span class="token number">3</span>
// prints <span class="token number">5</span></code>`,qs,b,Ua,hs,$a,Aa,ws,ja,Sa,vs,Ba,Va,Gs,S,Dt=`<code class="language-rust"><span class="token comment">// file src/main.rs</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>env<span class="token punctuation">;</span> <span class="token comment">// bring the env module in scope</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> args<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token namespace">std<span class="token punctuation">::</span></span>args<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"&#123;:?&#125;"</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Js,os,za,Ks,ls,Fa,Qs,B,Ht=`<code class="language-bash"><span class="token function">cargo</span> run <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">[</span><span class="token string">"target/debug/rust-cli"</span>, <span class="token string">"2"</span>, <span class="token string">"3"</span><span class="token punctuation">]</span></code>`,Xs,rs,qa,Ys,V,Mt=`<code class="language-rust"><span class="token comment">// file src/main.rs</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>env<span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> args<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token namespace">env<span class="token punctuation">::</span></span><span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 1. Get the arguments which start from 1st index</span>
    <span class="token comment">// 2. Map over the arguments and parse the strings into numbers</span>
    <span class="token comment">// 3. TODO: User's might input non-numbers. Or less than 2 arguments. Hanlde those</span>
    <span class="token comment">// error cases later.</span>
    <span class="token keyword">let</span> nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">></span> <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>x<span class="token closure-punctuation punctuation">|</span></span> x<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"&#123;:?&#125; &#123;:?&#125;"</span><span class="token punctuation">,</span>  args<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Zs,cs,Ga,sa,z,xt=`<code class="language-rust"><span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"The sum of &#123;&#125; and &#123;&#125; is &#123;&#125;"</span><span class="token punctuation">,</span>  nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`,aa,us,Ja,na,F,Rt=`<code class="language-bash"><span class="token function">cargo</span> run <span class="token number">2</span> <span class="token number">3</span>
// should print <span class="token string">"The sum of 2 and 3 is 5"</span></code>`,ta,C,O,bs,Ka,_s,Qa,ea,L,Xa,q,Es,Ya,Za,pa,y,sn,G,ys,an,nn,gs,tn,en,oa,J,Wt='<code class="language-bash"><span class="token function">cargo</span> <span class="token function">add</span> clap <span class="token parameter variable">--feature</span> derive</code>',la,g,pn,Ps,on,ln,Cs,rn,cn,ra,D,un,Ts,fn,kn,ca,K,It=`<code class="language-rust"><span class="token keyword">use</span> <span class="token namespace">clap<span class="token punctuation">::</span></span><span class="token class-name">Parser</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[derive(Debug, Parser)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Cli</span> <span class="token punctuation">&#123;</span>
    num1<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    num2<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Cli</span><span class="token punctuation">::</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"&#123;:?&#125;"</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"The sum of &#123;&#125; and &#123;&#125; is &#123;&#125;"</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>num1<span class="token punctuation">,</span> args<span class="token punctuation">.</span>num2<span class="token punctuation">,</span> args<span class="token punctuation">.</span>num1 <span class="token operator">+</span> args<span class="token punctuation">.</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,ua,w,mn,Os,dn,hn,Ls,wn,vn,Ds,bn,_n,Hs,En,yn,ia,H,gn,Ms,Pn,Cn,fa,Q,Nt=`<code class="language-bash"><span class="token function">cargo</span> run <span class="token number">2</span> <span class="token number">3</span>
// should print <span class="token string">"The sum of 2 and 3 is 5"</span></code>`,ka,M,Tn,xs,On,Ln,ma,X,Ut=`<code class="language-bash">% <span class="token function">cargo</span> run -- <span class="token parameter variable">--help</span>
    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span>.07s
     Running <span class="token variable"><span class="token variable">&#96;</span>target/debug/rust-cli <span class="token parameter variable">--help</span><span class="token variable">&#96;</span></span>
Usage: rust-cli <span class="token operator">&lt;</span>NUM<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token operator">&lt;</span>NUM<span class="token operator"><span class="token file-descriptor important">2</span>></span>

Arguments:
  <span class="token operator">&lt;</span>NUM<span class="token operator"><span class="token file-descriptor important">1</span>></span>
  <span class="token operator">&lt;</span>NUM<span class="token operator"><span class="token file-descriptor important">2</span>></span>

Options:
  -h, <span class="token parameter variable">--help</span>  Print <span class="token builtin class-name">help</span></code>`,da,x,Dn,Rs,Hn,Mn,ha,Y,$t=`<code class="language-bash">% <span class="token function">cargo</span> run <span class="token number">2</span> three
    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span>.02s
     Running <span class="token variable"><span class="token variable">&#96;</span>target/debug/rust-cli <span class="token number">2</span> three<span class="token variable">&#96;</span></span>
error: invalid value <span class="token string">'three'</span> <span class="token keyword">for</span> <span class="token string">'&lt;NUM2>'</span><span class="token builtin class-name">:</span> invalid digit found <span class="token keyword">in</span> string

For <span class="token function">more</span> information, try <span class="token string">'--help'</span><span class="token builtin class-name">.</span></code>`,wa,_,xn,Ws,Rn,Wn,Is,In,Nn,Z,Un,$n;return{c(){m=l("p"),h=p("Writing a command line application in rust in not that hard. Mainly because of the library ecosystem for writing CLI apps in rust."),E=u(),d=l("p"),N=p("Before we get started, make sure you have "),f=l("code"),v=p("rustc"),as=p(" and "),ks=l("code"),Ca=p("cargo"),Ta=p(" installed on your machine. If you don’t know how to do that, check this "),ns=l("a"),Oa=p("link"),La=p("."),Ns=u(),Us=l("hr"),$s=u(),ts=l("p"),Da=p("Let’s build a small CLI app which takes 2 numbers as inputs and prints the sum of the numbers. We will not use any library for this one."),As=u(),es=l("p"),Ha=p("Let’s create our rust app first -"),js=u(),U=l("pre"),Ss=u(),T=l("p"),Ma=p("When we build a "),ms=l("code"),xa=p("rust"),Ra=p(" app, it’s already a CLI app. The app we created above just prints “Hello, world!“. But it’s a CLI app nevertheless, i.e. it’s an executable which can be run in a shell."),Bs=u(),ps=l("p"),Wa=p("We want to finally call our app like this -"),Vs=u(),$=l("pre"),zs=u(),A=l("p"),Ia=p("During development we will run the same app with "),ds=l("code"),Na=p("cargo"),Fs=u(),j=l("pre"),qs=u(),b=l("p"),Ua=p("The first step is to get the input from the terminal from the user inside our program. "),hs=l("code"),$a=p("rust"),Aa=p(" standard library has a "),ws=l("code"),ja=p("env"),Sa=p(" module which has an "),vs=l("code"),Ba=p("args"),Va=p(" function which can provide us the input after the command as a list of strings."),Gs=u(),S=l("pre"),Js=u(),os=l("p"),za=p("This program when run should print a vector whose first value is the path to the program itself and the rest of the values are all the arguments we pass to the command (separated by space)."),Ks=u(),ls=l("p"),Fa=p("Something like this"),Qs=u(),B=l("pre"),Xs=u(),rs=l("p"),qa=p("Now that we have the input from the user, we need to first transform them from strings to numbers."),Ys=u(),V=l("pre"),Zs=u(),cs=l("p"),Ga=p("We have gotten hold of the arguments. Let’s add them up and print it out."),sa=u(),z=l("pre"),aa=u(),us=l("p"),Ja=p("Our program should now be able to add 2 numbers -"),na=u(),F=l("pre"),ta=u(),C=l("h3"),O=l("a"),bs=l("span"),Ka=p("Using a library to build our CLI application - "),_s=l("code"),Qa=p("clap"),ea=u(),L=l("p"),Xa=p("Let’s build the same application using a library called "),q=l("a"),Es=l("code"),Ya=p("clap"),Za=p(", which helps with a lot more than just parsing the arguments."),pa=u(),y=l("p"),sn=p("We will use "),G=l("a"),ys=l("code"),an=p("cargo-edit"),nn=p(" to add the library instead of directly editing "),gs=l("code"),tn=p("Cargo.toml"),en=p(" file."),oa=u(),J=l("pre"),la=u(),g=l("p"),pn=p("Our "),Ps=l("code"),on=p("Cargo.toml"),ln=p(" should now have an entry for the "),Cs=l("code"),rn=p("clap"),cn=p(" library and it’s ready to use in our program."),ra=u(),D=l("p"),un=p("Now we will use "),Ts=l("code"),fn=p("clap"),kn=p(" to parse the arguments we pass to our app/program -"),ca=u(),K=l("pre"),ua=u(),w=l("p"),mn=p("In the above program, we create a struct where we define 2 properties where we will hold our numbers to be added. We annotate the struct with "),Os=l("code"),dn=p("#[derive(Parser)]"),hn=p(" attribute. That piece of code will enhance our "),Ls=l("code"),wn=p("Cli"),vn=p(" struct with the ability to read our command line arguments and parse them as per our type definitions for "),Ds=l("code"),bn=p("num1"),_n=p(" and "),Hs=l("code"),En=p("num2"),yn=p(". This seems like magic and probably is."),ia=u(),H=l("p"),gn=p("This program should now work exactly as our program without "),Ms=l("code"),Pn=p("clap"),Cn=p("."),fa=u(),Q=l("pre"),ka=u(),M=l("p"),Tn=p("The great thing about using "),xs=l("code"),On=p("clap"),Ln=p(" is that we now get free help instructions for our program."),ma=u(),X=l("pre"),da=u(),x=l("p"),Dn=p("Not just that, we also get some free error handling. What if the user who invokes our command provides something other than a number as input? The "),Rs=l("code"),Hn=p("clap"),Mn=p(" parser will catch it and let the user know -"),ha=u(),Y=l("pre"),wa=u(),_=l("p"),xn=p("Of course "),Ws=l("code"),Rn=p("clap"),Wn=p(" provides much more than this. Head over to "),Is=l("code"),In=p("clap's"),Nn=p(" crate page for details on how cool it is - "),Z=l("a"),Un=p("https://docs.rs/clap/latest/clap/"),$n=p("."),this.h()},l(s){m=r(s,"P",{});var t=c(m);h=o(t,"Writing a command line application in rust in not that hard. Mainly because of the library ecosystem for writing CLI apps in rust."),t.forEach(a),E=i(s),d=r(s,"P",{});var R=c(d);N=o(R,"Before we get started, make sure you have "),f=r(R,"CODE",{});var Sn=c(f);v=o(Sn,"rustc"),Sn.forEach(a),as=o(R," and "),ks=r(R,"CODE",{});var Bn=c(ks);Ca=o(Bn,"cargo"),Bn.forEach(a),Ta=o(R," installed on your machine. If you don’t know how to do that, check this "),ns=r(R,"A",{href:!0});var Vn=c(ns);Oa=o(Vn,"link"),Vn.forEach(a),La=o(R,"."),R.forEach(a),Ns=i(s),Us=r(s,"HR",{}),$s=i(s),ts=r(s,"P",{});var zn=c(ts);Da=o(zn,"Let’s build a small CLI app which takes 2 numbers as inputs and prints the sum of the numbers. We will not use any library for this one."),zn.forEach(a),As=i(s),es=r(s,"P",{});var Fn=c(es);Ha=o(Fn,"Let’s create our rust app first -"),Fn.forEach(a),js=i(s),U=r(s,"PRE",{class:!0});var At=c(U);At.forEach(a),Ss=i(s),T=r(s,"P",{});var va=c(T);Ma=o(va,"When we build a "),ms=r(va,"CODE",{});var qn=c(ms);xa=o(qn,"rust"),qn.forEach(a),Ra=o(va," app, it’s already a CLI app. The app we created above just prints “Hello, world!“. But it’s a CLI app nevertheless, i.e. it’s an executable which can be run in a shell."),va.forEach(a),Bs=i(s),ps=r(s,"P",{});var Gn=c(ps);Wa=o(Gn,"We want to finally call our app like this -"),Gn.forEach(a),Vs=i(s),$=r(s,"PRE",{class:!0});var jt=c($);jt.forEach(a),zs=i(s),A=r(s,"P",{});var An=c(A);Ia=o(An,"During development we will run the same app with "),ds=r(An,"CODE",{});var Jn=c(ds);Na=o(Jn,"cargo"),Jn.forEach(a),An.forEach(a),Fs=i(s),j=r(s,"PRE",{class:!0});var St=c(j);St.forEach(a),qs=i(s),b=r(s,"P",{});var W=c(b);Ua=o(W,"The first step is to get the input from the terminal from the user inside our program. "),hs=r(W,"CODE",{});var Kn=c(hs);$a=o(Kn,"rust"),Kn.forEach(a),Aa=o(W," standard library has a "),ws=r(W,"CODE",{});var Qn=c(ws);ja=o(Qn,"env"),Qn.forEach(a),Sa=o(W," module which has an "),vs=r(W,"CODE",{});var Xn=c(vs);Ba=o(Xn,"args"),Xn.forEach(a),Va=o(W," function which can provide us the input after the command as a list of strings."),W.forEach(a),Gs=i(s),S=r(s,"PRE",{class:!0});var Bt=c(S);Bt.forEach(a),Js=i(s),os=r(s,"P",{});var Yn=c(os);za=o(Yn,"This program when run should print a vector whose first value is the path to the program itself and the rest of the values are all the arguments we pass to the command (separated by space)."),Yn.forEach(a),Ks=i(s),ls=r(s,"P",{});var Zn=c(ls);Fa=o(Zn,"Something like this"),Zn.forEach(a),Qs=i(s),B=r(s,"PRE",{class:!0});var Vt=c(B);Vt.forEach(a),Xs=i(s),rs=r(s,"P",{});var st=c(rs);qa=o(st,"Now that we have the input from the user, we need to first transform them from strings to numbers."),st.forEach(a),Ys=i(s),V=r(s,"PRE",{class:!0});var zt=c(V);zt.forEach(a),Zs=i(s),cs=r(s,"P",{});var at=c(cs);Ga=o(at,"We have gotten hold of the arguments. Let’s add them up and print it out."),at.forEach(a),sa=i(s),z=r(s,"PRE",{class:!0});var Ft=c(z);Ft.forEach(a),aa=i(s),us=r(s,"P",{});var nt=c(us);Ja=o(nt,"Our program should now be able to add 2 numbers -"),nt.forEach(a),na=i(s),F=r(s,"PRE",{class:!0});var qt=c(F);qt.forEach(a),ta=i(s),C=r(s,"H3",{id:!0});var ba=c(C);O=r(ba,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var tt=c(O);bs=r(tt,"SPAN",{class:!0}),c(bs).forEach(a),tt.forEach(a),Ka=o(ba,"Using a library to build our CLI application - "),_s=r(ba,"CODE",{});var et=c(_s);Qa=o(et,"clap"),et.forEach(a),ba.forEach(a),ea=i(s),L=r(s,"P",{});var _a=c(L);Xa=o(_a,"Let’s build the same application using a library called "),q=r(_a,"A",{href:!0,rel:!0});var pt=c(q);Es=r(pt,"CODE",{});var ot=c(Es);Ya=o(ot,"clap"),ot.forEach(a),pt.forEach(a),Za=o(_a,", which helps with a lot more than just parsing the arguments."),_a.forEach(a),pa=i(s),y=r(s,"P",{});var is=c(y);sn=o(is,"We will use "),G=r(is,"A",{href:!0,rel:!0});var lt=c(G);ys=r(lt,"CODE",{});var rt=c(ys);an=o(rt,"cargo-edit"),rt.forEach(a),lt.forEach(a),nn=o(is," to add the library instead of directly editing "),gs=r(is,"CODE",{});var ct=c(gs);tn=o(ct,"Cargo.toml"),ct.forEach(a),en=o(is," file."),is.forEach(a),oa=i(s),J=r(s,"PRE",{class:!0});var Gt=c(J);Gt.forEach(a),la=i(s),g=r(s,"P",{});var fs=c(g);pn=o(fs,"Our "),Ps=r(fs,"CODE",{});var ut=c(Ps);on=o(ut,"Cargo.toml"),ut.forEach(a),ln=o(fs," should now have an entry for the "),Cs=r(fs,"CODE",{});var it=c(Cs);rn=o(it,"clap"),it.forEach(a),cn=o(fs," library and it’s ready to use in our program."),fs.forEach(a),ra=i(s),D=r(s,"P",{});var Ea=c(D);un=o(Ea,"Now we will use "),Ts=r(Ea,"CODE",{});var ft=c(Ts);fn=o(ft,"clap"),ft.forEach(a),kn=o(Ea," to parse the arguments we pass to our app/program -"),Ea.forEach(a),ca=i(s),K=r(s,"PRE",{class:!0});var Jt=c(K);Jt.forEach(a),ua=i(s),w=r(s,"P",{});var P=c(w);mn=o(P,"In the above program, we create a struct where we define 2 properties where we will hold our numbers to be added. We annotate the struct with "),Os=r(P,"CODE",{});var kt=c(Os);dn=o(kt,"#[derive(Parser)]"),kt.forEach(a),hn=o(P," attribute. That piece of code will enhance our "),Ls=r(P,"CODE",{});var mt=c(Ls);wn=o(mt,"Cli"),mt.forEach(a),vn=o(P," struct with the ability to read our command line arguments and parse them as per our type definitions for "),Ds=r(P,"CODE",{});var dt=c(Ds);bn=o(dt,"num1"),dt.forEach(a),_n=o(P," and "),Hs=r(P,"CODE",{});var ht=c(Hs);En=o(ht,"num2"),ht.forEach(a),yn=o(P,". This seems like magic and probably is."),P.forEach(a),ia=i(s),H=r(s,"P",{});var ya=c(H);gn=o(ya,"This program should now work exactly as our program without "),Ms=r(ya,"CODE",{});var wt=c(Ms);Pn=o(wt,"clap"),wt.forEach(a),Cn=o(ya,"."),ya.forEach(a),fa=i(s),Q=r(s,"PRE",{class:!0});var Kt=c(Q);Kt.forEach(a),ka=i(s),M=r(s,"P",{});var ga=c(M);Tn=o(ga,"The great thing about using "),xs=r(ga,"CODE",{});var vt=c(xs);On=o(vt,"clap"),vt.forEach(a),Ln=o(ga," is that we now get free help instructions for our program."),ga.forEach(a),ma=i(s),X=r(s,"PRE",{class:!0});var Qt=c(X);Qt.forEach(a),da=i(s),x=r(s,"P",{});var Pa=c(x);Dn=o(Pa,"Not just that, we also get some free error handling. What if the user who invokes our command provides something other than a number as input? The "),Rs=r(Pa,"CODE",{});var bt=c(Rs);Hn=o(bt,"clap"),bt.forEach(a),Mn=o(Pa," parser will catch it and let the user know -"),Pa.forEach(a),ha=i(s),Y=r(s,"PRE",{class:!0});var Xt=c(Y);Xt.forEach(a),wa=i(s),_=r(s,"P",{});var I=c(_);xn=o(I,"Of course "),Ws=r(I,"CODE",{});var _t=c(Ws);Rn=o(_t,"clap"),_t.forEach(a),Wn=o(I," provides much more than this. Head over to "),Is=r(I,"CODE",{});var Et=c(Is);In=o(Et,"clap's"),Et.forEach(a),Nn=o(I," crate page for details on how cool it is - "),Z=r(I,"A",{href:!0,rel:!0});var yt=c(Z);Un=o(yt,"https://docs.rs/clap/latest/clap/"),yt.forEach(a),$n=o(I,"."),I.forEach(a),this.h()},h(){k(ns,"href","/blog/2023-07-31-rust-quick-setup-macos"),k(U,"class","language-bash"),k($,"class","language-bash"),k(j,"class","language-bash"),k(S,"class","language-rust"),k(B,"class","language-bash"),k(V,"class","language-rust"),k(z,"class","language-rust"),k(F,"class","language-bash"),k(bs,"class","icon icon-link"),k(O,"aria-hidden","true"),k(O,"tabindex","-1"),k(O,"href","#using-a-library-to-build-our-cli-application---clap"),k(C,"id","using-a-library-to-build-our-cli-application---clap"),k(q,"href","https://docs.rs/clap/latest/clap/"),k(q,"rel","nofollow"),k(G,"href","https://github.com/killercup/cargo-edit"),k(G,"rel","nofollow"),k(J,"class","language-bash"),k(K,"class","language-rust"),k(Q,"class","language-bash"),k(X,"class","language-bash"),k(Y,"class","language-bash"),k(Z,"href","https://docs.rs/clap/latest/clap/"),k(Z,"rel","nofollow")},m(s,t){e(s,m,t),n(m,h),e(s,E,t),e(s,d,t),n(d,N),n(d,f),n(f,v),n(d,as),n(d,ks),n(ks,Ca),n(d,Ta),n(d,ns),n(ns,Oa),n(d,La),e(s,Ns,t),e(s,Us,t),e(s,$s,t),e(s,ts,t),n(ts,Da),e(s,As,t),e(s,es,t),n(es,Ha),e(s,js,t),e(s,U,t),U.innerHTML=Tt,e(s,Ss,t),e(s,T,t),n(T,Ma),n(T,ms),n(ms,xa),n(T,Ra),e(s,Bs,t),e(s,ps,t),n(ps,Wa),e(s,Vs,t),e(s,$,t),$.innerHTML=Ot,e(s,zs,t),e(s,A,t),n(A,Ia),n(A,ds),n(ds,Na),e(s,Fs,t),e(s,j,t),j.innerHTML=Lt,e(s,qs,t),e(s,b,t),n(b,Ua),n(b,hs),n(hs,$a),n(b,Aa),n(b,ws),n(ws,ja),n(b,Sa),n(b,vs),n(vs,Ba),n(b,Va),e(s,Gs,t),e(s,S,t),S.innerHTML=Dt,e(s,Js,t),e(s,os,t),n(os,za),e(s,Ks,t),e(s,ls,t),n(ls,Fa),e(s,Qs,t),e(s,B,t),B.innerHTML=Ht,e(s,Xs,t),e(s,rs,t),n(rs,qa),e(s,Ys,t),e(s,V,t),V.innerHTML=Mt,e(s,Zs,t),e(s,cs,t),n(cs,Ga),e(s,sa,t),e(s,z,t),z.innerHTML=xt,e(s,aa,t),e(s,us,t),n(us,Ja),e(s,na,t),e(s,F,t),F.innerHTML=Rt,e(s,ta,t),e(s,C,t),n(C,O),n(O,bs),n(C,Ka),n(C,_s),n(_s,Qa),e(s,ea,t),e(s,L,t),n(L,Xa),n(L,q),n(q,Es),n(Es,Ya),n(L,Za),e(s,pa,t),e(s,y,t),n(y,sn),n(y,G),n(G,ys),n(ys,an),n(y,nn),n(y,gs),n(gs,tn),n(y,en),e(s,oa,t),e(s,J,t),J.innerHTML=Wt,e(s,la,t),e(s,g,t),n(g,pn),n(g,Ps),n(Ps,on),n(g,ln),n(g,Cs),n(Cs,rn),n(g,cn),e(s,ra,t),e(s,D,t),n(D,un),n(D,Ts),n(Ts,fn),n(D,kn),e(s,ca,t),e(s,K,t),K.innerHTML=It,e(s,ua,t),e(s,w,t),n(w,mn),n(w,Os),n(Os,dn),n(w,hn),n(w,Ls),n(Ls,wn),n(w,vn),n(w,Ds),n(Ds,bn),n(w,_n),n(w,Hs),n(Hs,En),n(w,yn),e(s,ia,t),e(s,H,t),n(H,gn),n(H,Ms),n(Ms,Pn),n(H,Cn),e(s,fa,t),e(s,Q,t),Q.innerHTML=Nt,e(s,ka,t),e(s,M,t),n(M,Tn),n(M,xs),n(xs,On),n(M,Ln),e(s,ma,t),e(s,X,t),X.innerHTML=Ut,e(s,da,t),e(s,x,t),n(x,Dn),n(x,Rs),n(Rs,Hn),n(x,Mn),e(s,ha,t),e(s,Y,t),Y.innerHTML=$t,e(s,wa,t),e(s,_,t),n(_,xn),n(_,Ws),n(Ws,Rn),n(_,Wn),n(_,Is),n(Is,In),n(_,Nn),n(_,Z),n(Z,Un),n(_,$n)},p:ce,d(s){s&&a(m),s&&a(E),s&&a(d),s&&a(Ns),s&&a(Us),s&&a($s),s&&a(ts),s&&a(As),s&&a(es),s&&a(js),s&&a(U),s&&a(Ss),s&&a(T),s&&a(Bs),s&&a(ps),s&&a(Vs),s&&a($),s&&a(zs),s&&a(A),s&&a(Fs),s&&a(j),s&&a(qs),s&&a(b),s&&a(Gs),s&&a(S),s&&a(Js),s&&a(os),s&&a(Ks),s&&a(ls),s&&a(Qs),s&&a(B),s&&a(Xs),s&&a(rs),s&&a(Ys),s&&a(V),s&&a(Zs),s&&a(cs),s&&a(sa),s&&a(z),s&&a(aa),s&&a(us),s&&a(na),s&&a(F),s&&a(ta),s&&a(C),s&&a(ea),s&&a(L),s&&a(pa),s&&a(y),s&&a(oa),s&&a(J),s&&a(la),s&&a(g),s&&a(ra),s&&a(D),s&&a(ca),s&&a(K),s&&a(ua),s&&a(w),s&&a(ia),s&&a(H),s&&a(fa),s&&a(Q),s&&a(ka),s&&a(M),s&&a(ma),s&&a(X),s&&a(da),s&&a(x),s&&a(ha),s&&a(Y),s&&a(wa),s&&a(_)}}}function fe(ss){let m,h,E;const d=[ss[0],Ct];let N={$$slots:{default:[ie]},$$scope:{ctx:ss}};for(let f=0;f<d.length;f+=1)N=jn(N,d[f]);return h=new ue({props:N}),{c(){m=u(),ae(h.$$.fragment),this.h()},l(f){ne("svelte-xvt9is",document.head).forEach(a),m=i(f),te(h.$$.fragment,f),this.h()},h(){document.title="How to write a command line application in rust"},m(f,v){e(f,m,v),ee(h,f,v),E=!0},p(f,[v]){const as=v&1?pe(d,[v&1&&gt(f[0]),v&0&&gt(Ct)]):{};v&2&&(as.$$scope={dirty:v,ctx:f}),h.$set(as)},i(f){E||(oe(h.$$.fragment,f),E=!0)},o(f){le(h.$$.fragment,f),E=!1},d(f){f&&a(m),re(h,f)}}}const Ct={title:"How to write a command line application in rust",created:"2023-07-31",slug:"2023-07-31-how-to-write-a-command-line-application-in-rust",categories:["rust","beginner","command line application","cli","clap"]};function ke(ss,m,h){return ss.$$set=E=>{h(0,m=jn(jn({},m),Pt(E)))},m=Pt(m),[m]}class he extends Yt{constructor(m){super(),Zt(this,m,ke,fe,se,{})}}export{he as default,Ct as metadata};
