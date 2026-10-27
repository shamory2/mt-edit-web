((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={Zf:function Zf(d,e){this.a=d
this.b=e},
jD(d,e,f,g){var x,w,v,u,t=new B.uc(e)
if(g==null)g=0
if(g<0)g=0
else{x=d.length
if(g>x)g=x}w=d.length-g
if(f==null)f=w
if(f<0||f>w)f=w
v=y.g.b(d)?d:new Uint8Array(C.aZ(d))
u=J.cC(A.C.ga2(v),v.byteOffset+g,f)
t.b=u
t.d=u.length
return t},
uc:function uc(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
LD:function LD(){},
aFm:function aFm(d){this.a=d},
y5(d,e){var x=e==null?32768:e
return new B.Dk(new Uint8Array(x),d)},
Dk:function Dk(d,e){this.b=0
this.c=d
this.a=e},
lm:function lm(){},
bKv(d){return new Int16Array(d)}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[11],B)
D=c[14]
B.Zf.prototype={
I(){return"ByteOrder."+this.b}}
B.uc.prototype={
Rn(d,e,f,g){var x,w,v,u
if(g==null)g=0
if(g<0)g=0
else{x=d.length
if(g>x)g=x}w=d.length-g
if(f==null)f=w
if(f<0||f>w)f=w
v=y.g.b(d)?d:new Uint8Array(C.aZ(d))
u=J.cC(A.C.ga2(v),v.byteOffset+g,f)
this.b=u
this.d=u.length},
gbV(){return this.c},
gp(d){var x=this.b
return x==null?0:x.length-this.c},
gjy(){var x=this.c,w=this.d
w===$&&C.a()
return x>=w},
qV(d){this.c=d},
hp(){this.c=0},
a0x(d){var x=this.c-=d,w=this.d
w===$&&C.a()
this.c=A.h.aj(x,0,w)},
amV(){return this.a0x(1)},
fc(d,e){var x=this.c+=e,w=this.d
w===$&&C.a()
this.c=A.h.aj(x,0,w)},
h(d,e){return this.b[this.c+e]},
xm(d,e,f){var x,w=this,v=w.b
if(v==null)return B.jD(C.c([],y.b),D.bk,null,null)
if(f==null)f=w.c
if(e==null){x=w.d
x===$&&C.a()
e=x-f}return B.jD(v,w.a,e,f)},
xk(d,e){return this.xm(null,d,e)},
aY(){var x=this.b
x.toString
return x[this.c++]},
cF(){var x,w,v=this,u=v.b
if(u==null)return new Uint8Array(0)
x=v.gp(0)
w=u.length-v.c
if(x<0||x>w)x=w
return J.cC(A.C.ga2(u),v.b.byteOffset+v.c,x)}}
B.LD.prototype={
Y(){var x=this.aY(),w=this.aY()
if(this.a===D.fR)return(x<<8|w)>>>0
return(w<<8|x)>>>0},
R(){var x=this,w=x.aY(),v=x.aY(),u=x.aY(),t=x.aY()
if(x.a===D.fR)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
mN(){var x=this,w=x.aY(),v=x.aY(),u=x.aY(),t=x.aY(),s=x.aY(),r=x.aY(),q=x.aY(),p=x.aY()
if(x.a===D.fR)return(A.h.bO(w,56)|A.h.bO(v,48)|A.h.bO(u,40)|A.h.bO(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(A.h.bO(p,56)|A.h.bO(q,48)|A.h.bO(r,40)|A.h.bO(s,32)|t<<24|u<<16|v<<8|w)>>>0},
f2(d){var x=this,w=x.xk(d,x.gbV())
x.qV(x.gbV()+w.gp(w))
return w},
ams(d,e){return new B.aFm(e).$1(this.f2(d).cF())},
Pl(d){return this.ams(d,!0)}}
B.Dk.prototype={
C1(){},
td(){return J.cC(A.C.ga2(this.c),this.c.byteOffset,this.b)},
au(d){var x,w,v=this
if(v.b===v.c.length)v.aDm()
x=v.c
w=v.b++
x.$flags&2&&C.e(x)
x[w]=d},
tc(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
while(x=t.b,w=x+e,v=t.c,u=v.length,w>u)t.JQ(w-u)
A.C.eV(v,x,w,d)
t.b+=e},
i4(d){return this.tc(d,null)},
CX(d){var x,w,v,u,t=this
while(x=t.b,w=d.gp(d),v=t.c,x+w>v.length)t.JQ(t.b+d.gp(d)-t.c.length)
if(d instanceof B.uc){x=d.b
if(x!=null){w=t.b
A.C.cd(v,w,w+d.gp(0),x,d.c)}}else{u=d.cF()
x=t.c
w=t.b
A.C.cd(x,w,w+d.gp(d),u,0)}t.b=t.b+d.gp(d)},
anG(d,e){var x,w,v,u,t,s,r,q,p,o=this
while(x=o.b,w=x+e,v=o.c,u=v.length,w>u)o.JQ(w-u)
t=x-d
if(d>=e)A.C.cd(v,x,w,v,t)
else for(u=v.$flags|0,s=t;x<w;x=r,s=q){r=x+1
q=s+1
p=v[s]
u&2&&C.e(v)
v[x]=p}o.b+=e},
JQ(d){var x,w=this.c,v=w.length,u=v+(d==null?1:d),t=v===0?32768:v*2
if(t<u)t=u
x=new Uint8Array(t)
A.C.eV(x,0,v,w)
this.c=x},
aDm(){return this.JQ(null)},
gp(d){return this.b}}
B.lm.prototype={
ed(d){var x=this,w=d&255,v=d>>>8&255
if(x.a===D.fR){x.au(v)
x.au(w)}else{x.au(w)
x.au(v)}},
fb(d){var x=this,w=d&255
if(x.a===D.fR){x.au(A.h.J(d,24)&255)
x.au(A.h.J(d,16)&255)
x.au(A.h.J(d,8)&255)
x.au(w)}else{x.au(w)
x.au(A.h.J(d,8)&255)
x.au(A.h.J(d,16)&255)
x.au(A.h.J(d,24)&255)}},
ox(d){var x,w=this
if((d&9223372036854776e3)>>>0!==0){d=(d^9223372036854776e3)>>>0
x=128}else x=0
if(w.a===D.fR){w.au(x|A.h.J(d,56)&255)
w.au(A.h.J(d,48)&255)
w.au(A.h.J(d,40)&255)
w.au(A.h.J(d,32)&255)
w.au(A.h.J(d,24)&255)
w.au(A.h.J(d,16)&255)
w.au(A.h.J(d,8)&255)
w.au(d&255)
return}w.au(d&255)
w.au(A.h.J(d,8)&255)
w.au(A.h.J(d,16)&255)
w.au(A.h.J(d,24)&255)
w.au(A.h.J(d,32)&255)
w.au(A.h.J(d,40)&255)
w.au(A.h.J(d,48)&255)
w.au(x|A.h.J(d,56)&255)}}
var z=a.updateTypes([])
B.aFm.prototype={
$1(d){var x,w,v
try{x=this.a?A.iK.cI(d):C.dc(d,0,null)
return x}catch(w){v=C.dc(d,0,null)
return v}},
$S:837};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Zf,C.o1)
w(C.V,[B.LD,B.lm])
x(B.uc,B.LD)
x(B.aFm,C.jy)
x(B.Dk,B.lm)})()
C.vX(b.typeUniverse,JSON.parse('{"Dk":{"lm":[]}}'))
var y={b:C.a7("t<d>"),g:C.a7("ds")};(function constants(){var x=a.makeConstList
D.bk=new B.Zf(0,"littleEndian")
D.fR=new B.Zf(1,"bigEndian")
D.qa=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.b)
D.ew=x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],y.b)
D.xy=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.b)})()};
(a=>{a["B0JKDpY/BJWz+iYRbf63U8N2OKw="]=a.current})($__dart_deferred_initializers__);