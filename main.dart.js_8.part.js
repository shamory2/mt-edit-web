((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,F,E,A={
a4d(d){var x=new A.aDM()
x.awl(d)
return x},
aDM:function aDM(){this.a=$
this.b=0
this.c=2147483647},
Lu:function Lu(d,e){this.a=d
this.b=e},
a53:function a53(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0
_.f=f},
GU:function GU(d,e){this.a=d
this.b=e},
aZN:function aZN(){},
beR:function beR(){},
a52:function a52(d,e){var _=this
_.a=d
_.b=null
_.c=e
_.d=!1
_.f=_.e=0},
aZM:function aZM(){},
aZO:function aZO(d,e,f){this.a=d
this.b=e
this.c=f},
bi4(d,e,f){var x,w,v,u="The decoded data is larger than the "
if(e==null)return f.$1(d)
x=new A.a5P(d,e,d.a)
w=null
try{w=f.$1(x)}catch(v){if(x.e)throw B.i(A.fm(u+B.m(e)+" bytes allowed"))
throw v}if(x.e)throw B.i(A.fm(u+B.m(e)+" bytes allowed"))
return w},
a5P:function a5P(d,e,f){var _=this
_.b=d
_.c=e
_.d=0
_.e=!1
_.a=f},
fm(d){return new A.wn(d,null,null)},
wn:function wn(d,e,f){this.a=d
this.b=e
this.c=f},
btB(d){return new A.a5a(new A.aiU(d,0,new Uint8Array(65536),E.bk),0,null,E.bk)},
btC(d,e,f){return new A.a5a(d.b,d.c+e,f,d.a)},
a5a:function a5a(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=0
_.a=g},
aiU:function aiU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.r=_.f=_.e=0
_.w=!1
_.a=g}},C
J=c[1]
B=c[0]
D=c[2]
F=c[11]
E=c[14]
A=a.updateHolder(c[9],A)
C=c[16]
A.aDM.prototype={
awl(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.h.aL(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.Lu.prototype={
I(){return"InflateFormat."+this.b}}
A.a53.prototype={
gb3G(){return 32768},
G2(d){var x,w,v,u,t,s,r=this,q="Truncated zlib stream"
switch(r.f.a){case 0:x=r.a
w=x.c
v=x.d
v===$&&B.a()
if(w>=v){if(r.d===0&&r.b!==C.ala)throw B.i(A.fm("Empty input is not a "+r.b.b+" stream"))
r.f=C.a7a
return!1}if(r.b===C.wr)if(!r.aPR()){if(r.d!==0)throw B.i(A.fm("Data after the last gzip member"))
x.c=w
r.b=C.lu}if(r.b===C.lu){if(x.gp(0)<2)B.z(A.fm(q))
u=x.aY()
t=x.aY()
if((u&15)!==8)B.z(A.fm("Only deflate compression is supported"))
if(D.h.ba(u*256+t,31)!==0)B.z(A.fm("Invalid zlib header"))
if((t&32)!==0)B.z(A.fm("zlib preset dictionaries are not supported"))}r.e=d.e+d.f
r.c=new A.a52(x,d)
r.f=C.c9K
return!0
case 1:x=r.c
w=!x.aaD()
if(w&&x.d)B.z(A.fm("Invalid deflate data"))
if(w)r.f=C.c9L
return!0
case 2:x=r.b
if(x===C.wr){x=r.a
if(x.gp(0)<8)throw B.i(A.fm("Truncated gzip stream"))
x.R()
s=x.R()
if(D.h.ba(d.e+d.f-r.e,4294967296)!==s)throw B.i(A.fm("gzip member length does not match"))}else if(x===C.lu){x=r.a
if(x.gp(0)<4)throw B.i(A.fm(q))
x.R()}++r.d
x=r.b===C.wr
r.f=x?C.Bf:C.a7a
return x
case 3:return!1}},
aPR(){var x,w,v=this.a
if(v.gp(0)<10)return!1
if(v.Y()!==35615)return!1
if(v.aY()!==8)return!1
x=v.aY()
v.R()
v.aY()
v.aY()
if((x&4)!==0){if(v.gp(0)<2)return!1
w=v.Y()
if(v.gp(0)<w)return!1
v.fc(0,w)}if((x&8)!==0&&!this.acV())return!1
if((x&16)!==0&&!this.acV())return!1
if((x&2)!==0){if(v.gp(0)<2)return!1
v.Y()}return!0},
acV(){var x,w,v=this.a
for(;;){x=v.c
w=v.d
w===$&&B.a()
if(!(x<w))break
w=v.b
w.toString
v.c=x+1
if(w[x]===0)return!0}return!1}}
A.GU.prototype={
I(){return"_State."+this.b}}
A.aZN.prototype={}
A.beR.prototype={
b_X(d,e,f,g){var x,w
for(x=null;!d.gjy();){if(x!=null)e.i4(x)
w=new F.Dk(new Uint8Array(32768),E.bk)
new A.a52(d,w).aK_()
x=w.td()}if(x!=null)e.i4(x)
return!0}}
A.a52.prototype={
gr8(){var x=this.a
if(x==null)return x
x.gjy()
return this.a},
aK_(){var x=this
x.f=x.e=0
if(x.gr8()==null)return
while(!x.gr8().gjy())if(!x.aaD())return},
aaD(){var x,w=this,v=w.gr8()
if(v==null||v.gjy())return!1
x=w.oQ(3)
switch(D.h.J(x,1)){case 0:if(w.aOk()===-1){w.d=!0
return!1}break
case 1:if(w.a6i($.bBJ(),$.bBI())===-1){w.d=!0
return!1}break
case 2:if(w.aO4()===-1){w.d=!0
return!1}break
default:w.d=!0
return!1}return(x&1)===0},
oQ(d){var x,w,v,u,t=this
if(d===0)return 0
while(x=t.f,x<d){if(t.gr8().gjy())return-1
w=t.gr8().aY()
x=t.e
v=t.f
t.e=(x|D.h.aL(w,v))>>>0
t.f=v+8}v=t.e
u=D.h.bO(1,d)
t.e=D.h.fA(v,d)
t.f=x-d
return(v&u-1)>>>0},
UU(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&B.a()
x=d.b
while(w=r.f,w<x){if(r.gr8().gjy())return-1
v=r.gr8().aY()
w=r.e
u=r.f
r.e=(w|D.h.aL(v,u))>>>0
r.f=u+8}u=r.e
t=q[(u&D.h.aL(1,x)-1)>>>0]
s=t>>>16
if(s===0)return-1
r.e=D.h.fA(u,s)
r.f=w-s
return t&65535},
aOk(){var x,w,v=this
v.f=v.e=0
x=v.oQ(16)
w=v.oQ(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
w=v.gr8()
if(x>w.gp(w))return-1
v.c.CX(v.gr8().f2(x))
return 0},
aO4(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.oQ(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.oQ(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.oQ(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.oQ(3)
if(t===-1)return-1
v[E.xy[u]]=t}s=A.a4d(v)
r=m+x
q=new Uint8Array(r)
p=J.cC(D.C.ga2(q),0,m)
o=J.cC(D.C.ga2(q),m,x)
if(n.aAU(r,s,q)===-1)return-1
return n.a6i(A.a4d(p),A.a4d(o))},
a6i(d,e){var x,w,v,u,t,s,r,q=this
for(x=q.c;;){w=q.UU(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.au(w&255)
continue}v=w-257
u=C.bfv[v]
t=q.oQ(C.bhA[v])
s=q.UU(e)
if(s<0||s>29)return-1
r=C.bfH[s]+q.oQ(E.qa[s])
if(r<1||r>x.gp(x))return-1
x.anG(r,u+t)}while(x=q.f,x>=8){q.f=x-8
q.gr8().amV()}return 0},
aAU(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.UU(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.oQ(2)
if(s===-1)return-1
s+=3
if(v+s>d)return-1
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.e(f)
f[v]=w}break
case 17:s=p.oQ(3)
if(s===-1)return-1
s+=3
if(v+s>d)return-1
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.e(f)
f[v]=0}w=t
break
case 18:s=p.oQ(7)
if(s===-1)return-1
s+=11
if(v+s>d)return-1
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&B.e(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&B.e(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.aZM.prototype={
b_V(d,e,f){return A.bi4(e,null,new A.aZO(d,!1,!0))}}
A.a5P.prototype={
Rq(d){var x=this.c
if((this.d+=d)>x){this.e=!0
throw B.i(A.fm("The decoded data is larger than the "+x+" bytes allowed"))}},
gp(d){var x=this.b
return x.gp(x)},
C1(){return this.b.C1()},
au(d){this.Rq(1)
this.b.au(d)},
tc(d,e){this.Rq(d.length)
this.b.tc(d,e)},
i4(d){return this.tc(d,null)},
CX(d){this.Rq(d.gp(d))
this.b.CX(d)}}
A.wn.prototype={}
A.a5a.prototype={
gbV(){return this.e},
qV(d){return this.e=d},
hp(){return this.e=0},
a0x(d){this.e=Math.max(0,this.e-d)},
amV(){return this.a0x(1)},
fc(d,e){this.e+=e},
gp(d){var x=this,w=x.d
if(w!=null)return Math.max(0,w-x.e)
return x.b.amz(x.c+x.e)},
gjy(){var x,w,v=this,u=v.d
if(u!=null&&v.e>=u)return!0
x=v.b
w=v.c+v.e
x.JP(w,1)
return w>=x.e+x.f},
Mx(){if(this.c===0&&this.d==null){var x=this.b
x.d=new Uint8Array(0)
x.e=x.e+x.f
x.f=0
x.w=!0}},
xm(d,e,f){var x,w
if(f==null)f=this.e
x=this.d
if(x!=null){w=Math.max(0,x-f)
e=e==null?w:Math.min(e,w)}return A.btC(this,f,e)},
xk(d,e){return this.xm(null,d,e)},
aY(){var x,w=this
if(w.gjy())return 0
x=w.b.aY_(w.c+w.e);++w.e
return x},
f2(d){var x,w,v=this,u=v.d
if(u!=null)d=Math.max(0,Math.min(d,u-v.e))
x=v.e
w=A.btC(v,x,d)
v.e=x+d
return w},
cF(){var x,w,v=this,u=v.d
if(u!=null){x=v.e
return v.b.amp(v.c+x,Math.max(0,u-x))}x=v.b
w=v.c+v.e
return x.amp(w,x.amz(w))}}
A.aiU.prototype={
gp(d){return this.e+this.f},
JP(d,e){var x,w=this,v=w.e
if(d<v)throw B.i(A.fm("Position "+d+" of the decoded data has already been read past, only the last "+w.f+" bytes from "+v+" are still held"))
w.r=d
v=w.b
x=d+e
for(;;){if(!(!w.w&&w.e+w.f<x))break
if(!v.G2(w))w.w=!0}},
aY_(d){var x,w=this
w.JP(d,1)
x=w.e
if(d>=x+w.f)return 0
return w.d[d-x]},
amp(d,e){var x,w,v=this
v.JP(d,e)
x=v.e
w=Math.max(0,Math.min(e,x+v.f-d))
x=d-x
return D.C.c9(v.d,x,x+w)},
amz(d){this.JP(d,0)
return Math.max(0,this.e+this.f-d)},
Vb(d){var x,w,v,u,t,s=this,r=s.f
if(r+d<=s.d.length)return
x=s.e
w=Math.max(x,Math.min(s.r-s.c,x+r-s.b.gb3G()))-s.e
if(w>0){r=s.d
D.C.cd(r,0,s.f-w,r,w)
s.f-=w
s.e+=w}r=s.f
x=r+d
v=s.d
u=v.length
if(x>u){x=Math.max(u*2,x)
t=new Uint8Array(x)
D.C.eV(t,0,r,v)
s.d=t}},
au(d){var x,w,v=this
if(v.f===v.d.length)v.Vb(1)
x=v.d
w=v.f++
x.$flags&2&&B.e(x)
x[w]=d},
tc(d,e){var x,w,v=this
e=d.length
v.Vb(e)
x=v.d
w=v.f
D.C.eV(x,w,w+e,d)
v.f+=e},
i4(d){return this.tc(d,null)},
CX(d){return this.i4(d.cF())},
anG(d,e){var x,w,v,u,t,s,r,q,p,o=this
o.Vb(e)
x=o.f
w=x-d
if(w<0)throw B.i(A.fm("Back reference before the start of the data"))
v=x+e
if(d>=e){u=o.d
D.C.cd(u,x,v,u,w)}else for(u=o.d,t=u.$flags|0,s=w;x<v;x=r,s=q){r=x+1
q=s+1
p=u[s]
t&2&&B.e(u)
u[x]=p}o.f+=e}}
var z=a.updateTypes(["x(lm)"])
A.aZO.prototype={
$1(d){return C.ab9.b_X(this.a,d,this.c,this.b)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.V,[A.aDM,A.a53,A.aZN,A.a52,A.aZM])
x(B.o1,[A.Lu,A.GU])
w(A.beR,A.aZN)
w(A.aZO,B.jy)
x(F.lm,[A.a5P,A.aiU])
w(A.wn,B.eQ)
w(A.a5a,F.LD)})()
B.vX(b.typeUniverse,JSON.parse('{"a5P":{"lm":[]},"wn":{"eQ":[],"c6":[]},"aiU":{"lm":[]},"zP":{"fi":[],"zQ":["fi"]}}'))
var y={b:B.a7("t<d>")};(function constants(){var x=a.makeConstList
C.ab9=new A.beR()
C.wr=new A.Lu(0,"gzip")
C.lu=new A.Lu(1,"zlib")
C.ala=new A.Lu(2,"raw")
C.b4w=x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],y.b)
C.i7=x([0,1,3,7,15,31,63,127,255],y.b)
C.bfv=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.b)
C.bfH=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.b)
C.bhc=x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],y.b)
C.bhA=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],y.b)
C.Bf=new A.GU(0,"header")
C.c9K=new A.GU(1,"blocks")
C.c9L=new A.GU(2,"trailer")
C.a7a=new A.GU(3,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bYz","bBJ",()=>A.a4d(C.bhc))
x($,"bYy","bBI",()=>A.a4d(C.b4w))})()};
(a=>{a["NUiFc3tYaKu739p6GvXRv+aYyJA="]=a.current})($__dart_deferred_initializers__);