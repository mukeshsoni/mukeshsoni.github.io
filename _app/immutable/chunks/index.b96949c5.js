function x(){}const K=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(Q)}function O(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function qt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Rt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function zt(t,e,n,r){if(t){const i=W(t,e,n,r);return t[0](i)}}function W(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function Bt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|i[u];return o}return e.dirty|i}return e.dirty}function Ht(t,e,n,r,i,o){if(i){const s=W(e,n,r,o);t.p(s,i)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Lt(t){return t??""}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),H=U?t=>requestAnimationFrame(t):x;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(X)}function Y(t){let e;return w.size===0&&H(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=c?i+1:pt(1,i,_=>e[n[_]].claim_order,c))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],s=[];let u=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return $t(Z(t),e),e.sheet}function $t(t,e){return gt(t.head||t,e),e.sheet}function bt(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){P&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Jt(){return F(" ")}function Kt(){return F("")}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,r,i=!1){vt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Et(t,e,n,r){return nt(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const u=i.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Wt(t,e,n){return Et(t,e,n,et)}function Nt(t,e){return nt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function Ut(t){return Nt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function Yt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Zt(t,e){return new t(e)}const D=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:xt(e),rules:{}};return D.set(t,n),n}function it(t,e,n,r,i,o,s,u=0){const l=16.666/r;let c=`{
`;for(let m=0;m<=1;m+=l){const p=e+(n-e)*o(m);c+=m*100+`%{${s(p,1-p)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=D.get(_)||Ct(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${r}ms linear ${i}ms 1 both`,M+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),M-=i,M||St())}function St(){H(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),D.clear())})}let A;function N(t){A=t}function rt(){if(!A)throw new Error("Function called outside component initialization");return A}function te(t){rt().$$.on_mount.push(t)}function ee(t){rt().$$.after_update.push(t)}const b=[],I=[],S=[],J=[],st=Promise.resolve();let B=!1;function ot(){B||(B=!0,st.then(ct))}function ne(){return ot(),st}function k(t){S.push(t)}const R=new Set;let $=0;function ct(){if($!==0)return;const t=A;do{try{for(;$<b.length;){const e=b[$];$++,N(e),jt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(N(null),b.length=0,$=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];R.has(n)||(R.add(n),n())}S.length=0}while(b.length);for(;J.length;)J.pop()();B=!1,R.clear(),N(t)}function jt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let E;function lt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function T(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function ie(){g={r:0,c:[],p:g}}function re(){g.r||v(g.c),g=g.p}function Dt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function se(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ut={duration:0};function oe(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,u,l=0;function c(){s&&z(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=K,tick:y=x,css:m}=i||ut;m&&(s=it(t,0,1,d,_,h,m,l++)),y(0,1);const p=V()+_,at=p+d;u&&u.abort(),o=!0,k(()=>T(t,!0,"start")),u=Y(q=>{if(o){if(q>=at)return y(1,0),T(t,!0,"end"),c(),o=!1;if(q>=p){const L=h((q-p)/d);y(L,1-L)}}return o})}let a=!1;return{start(){a||(a=!0,z(t),O(i)?(i=i(r),lt().then(f)):f())},invalidate(){a=!1},end(){o&&(c(),o=!1)}}}function ce(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const u=g;u.r+=1;function l(){const{delay:c=0,duration:f=300,easing:a=K,tick:_=x,css:d}=i||ut;d&&(s=it(t,1,0,f,c,a,d));const h=V()+c,y=h+f;k(()=>T(t,!1,"start")),Y(m=>{if(o){if(m>=y)return _(0,1),T(t,!1,"end"),--u.r||v(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return o})}return O(i)?lt().then(()=>{i=i(r),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),o&&(s&&z(t,s),o=!1)}}}function le(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function Mt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||k(()=>{const s=t.$$.on_mount.map(Q).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(k)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(b.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,r,i,o,s,u=[-1]){const l=A;N(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&i(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Ot(t,a)),_}):[],c.update(),f=!0,v(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){ht();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(tt)}else c.fragment&&c.fragment.c();e.intro&&Dt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),mt(),ct()}N(l)}class fe{$destroy(){Tt(this,1),this.$destroy=x}$on(e,n){if(!O(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as A,Mt as B,Tt as C,K as D,zt as E,Lt as F,bt as G,Ht as H,Ft as I,Bt as J,k as K,oe as L,ce as M,Rt as N,qt as O,Yt as P,It as Q,fe as S,Jt as a,Gt as b,Ut as c,se as d,Kt as e,re as f,Dt as g,tt as h,ae as i,ee as j,et as k,Wt as l,wt as m,x as n,te as o,Qt as p,Xt as q,F as r,Pt as s,ne as t,Nt as u,Vt as v,ie as w,I as x,Zt as y,le as z};
