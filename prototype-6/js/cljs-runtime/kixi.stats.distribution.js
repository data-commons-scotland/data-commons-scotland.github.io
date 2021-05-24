goog.provide('kixi.stats.distribution');
kixi.stats.distribution.next_rng = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,clojure.test.check.random.split);
kixi.stats.distribution.swap = (function kixi$stats$distribution$swap(coll,p__36070){
var vec__36071 = p__36070;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coll,i2,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i1) : coll.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i2) : coll.call(null,i2))], 0));
});
kixi.stats.distribution.rand_int = (function kixi$stats$distribution$rand_int(a,b,rng){
var r = (clojure.test.check.random.rand_double(rng) * (b - a));
return ((a + r) | (0));
});
kixi.stats.distribution.rand_normal = (function kixi$stats$distribution$rand_normal(rng){
var vec__36074 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(1),null);
return (kixi.stats.math.sqrt(((-2) * kixi.stats.math.log(clojure.test.check.random.rand_double(r1)))) * kixi.stats.math.cos((((2) * kixi.stats.math.PI) * clojure.test.check.random.rand_double(r2))));
});
kixi.stats.distribution.btrd_f = (function kixi$stats$distribution$btrd_f(k){
var G__36077 = k;
switch (G__36077) {
case (0):
return 0.08106146679532726;

break;
case (1):
return 0.04134069595540929;

break;
case (2):
return 0.02767792568499834;

break;
case (3):
return 0.02079067210376509;

break;
case (4):
return 0.01664469118982119;

break;
case (5):
return 0.01387612882307075;

break;
case (6):
return 0.01189670994589177;

break;
case (7):
return 0.01041126526197209;

break;
case (8):
return 0.009255462182712733;

break;
case (9):
return 0.00833056343336287;

break;
default:
var k_SINGLEQUOTE_ = (k + (1));
var k2_SINGLEQUOTE_ = kixi.stats.math.sq(k_SINGLEQUOTE_);
return ((0.08333333333333333 - ((0.002777777777777778 - (7.936507936507937E-4 / k2_SINGLEQUOTE_)) / k2_SINGLEQUOTE_)) / k_SINGLEQUOTE_);

}
});
/**
 * Algorithm BTRD from "The Generation of Binomial Random Variates", Wolfgang Hormann, p6
 */
kixi.stats.distribution.rand_binomial_btrd = (function kixi$stats$distribution$rand_binomial_btrd(n,p,rng){
if((p > 0.5)){
return (n - (function (){var G__36078 = n;
var G__36079 = ((1) - p);
var G__36080 = rng;
return (kixi.stats.distribution.rand_binomial_btrd.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.distribution.rand_binomial_btrd.cljs$core$IFn$_invoke$arity$3(G__36078,G__36079,G__36080) : kixi.stats.distribution.rand_binomial_btrd.call(null,G__36078,G__36079,G__36080));
})());
} else {
var m = (kixi.stats.math.floor(((n + (1)) * p)) | (0));
var q = ((1) - p);
var r = (p / q);
var nr = ((n + (1)) * r);
var npq = ((n * p) * q);
var rnpq = kixi.stats.math.sqrt(npq);
var b = (1.15 + (2.53 * rnpq));
var a = ((-0.0873 + (0.0248 * b)) + (0.01 * p));
var c = ((n * p) + 0.5);
var alpha = ((2.83 + (5.1 / b)) * rnpq);
var vr = (0.92 - (4.2 / b));
var urvr = (0.86 * vr);
var rng__$1 = rng;
while(true){
var v = clojure.test.check.random.rand_double(rng__$1);
if((v <= urvr)){
var u = ((v / vr) - 0.43);
return (kixi.stats.math.floor(((((((2) * a) / (0.5 - kixi.stats.math.abs(u))) + b) * u) + c)) | (0));
} else {
var vec__36081 = clojure.test.check.random.split(rng__$1);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(1),null);
var vec__36084 = (((v >= vr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clojure.test.check.random.rand_double(r1) - 0.5),v], null):(function (){var u = ((v / vr) - 0.93);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0.5 * (((u > (0)))?(1):(-1))) - u),(clojure.test.check.random.rand_double(r1) * vr)], null);
})());
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084,(1),null);
var us = (0.5 - kixi.stats.math.abs(u));
var k = (kixi.stats.math.floor((((((2) * (a / us)) + b) * u) + c)) | (0));
if(((((0) <= k)) && ((k <= n)))){
var v__$2 = (v__$1 * (alpha / ((a / kixi.stats.math.sq(us)) + b)));
var km = kixi.stats.math.abs((k - m));
if((km <= (15))){
var f = 1.0;
var fx = ((function (rng__$1,f,v__$2,km,vec__36081,r1,r2,vec__36084,u,v__$1,us,k,v,m,q,r,nr,npq,rnpq,b,a,c,alpha,vr,urvr){
return (function (x,i){
return (x * ((nr / (i + (1))) - r));
});})(rng__$1,f,v__$2,km,vec__36081,r1,r2,vec__36084,u,v__$1,us,k,v,m,q,r,nr,npq,rnpq,b,a,c,alpha,vr,urvr))
;
var vec__36087 = (((m < k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fx,f,cljs.core.range.cljs$core$IFn$_invoke$arity$2(m,k)),v__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fx,v__$2,cljs.core.range.cljs$core$IFn$_invoke$arity$2(k,m))], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36087,(0),null);
var v__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36087,(1),null);
if((v__$3 <= f__$1)){
return k;
} else {
var G__36223 = r2;
rng__$1 = G__36223;
continue;
}
} else {
var v__$3 = kixi.stats.math.log(v__$2);
var p__$1 = ((km / npq) * ((((((km / (3)) + 0.625) * km) + 0.1666666666666667) / npq) + 0.5));
var t = (((- km) * km) / ((2) * npq));
if((v__$3 < (t - p__$1))){
return k;
} else {
if((v__$3 > (t + p__$1))){
var G__36224 = r2;
rng__$1 = G__36224;
continue;
} else {
var nm = ((n - m) + (1));
var h = ((((m + 0.5) * kixi.stats.math.log(((m + (1)) / (r * nm)))) + kixi.stats.distribution.btrd_f(m)) + kixi.stats.distribution.btrd_f((n - m)));
var nk = ((n - k) + (1));
if((v__$3 <= ((((h + ((n + (1)) * kixi.stats.math.log((nm / nk)))) + ((k + 0.5) * kixi.stats.math.log(((nk * r) / (k + (1)))))) + (- kixi.stats.distribution.btrd_f(k))) + (- kixi.stats.distribution.btrd_f((n - k)))))){
return k;
} else {
var G__36225 = r2;
rng__$1 = G__36225;
continue;
}

}
}
}
} else {
var G__36226 = r2;
rng__$1 = G__36226;
continue;
}
}
break;
}
}
});
kixi.stats.distribution.rand_binomial_binv = (function kixi$stats$distribution$rand_binomial_binv(n,p,rng){
if((p > 0.5)){
return (n - (function (){var G__36093 = n;
var G__36094 = ((1) - p);
var G__36095 = rng;
return (kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3(G__36093,G__36094,G__36095) : kixi.stats.distribution.rand_binomial_binv.call(null,G__36093,G__36094,G__36095));
})());
} else {
var cutoff = (110);
var q = ((1) - p);
var s = (p / q);
var ix = (0);
var f = kixi.stats.math.pow(q,n);
var u = clojure.test.check.random.rand_double(rng);
while(true){
if((u < f)){
return ix;
} else {
if((ix >= cutoff)){
var G__36100 = n;
var G__36101 = p;
var G__36102 = kixi.stats.distribution.next_rng(rng);
return (kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3(G__36100,G__36101,G__36102) : kixi.stats.distribution.rand_binomial_binv.call(null,G__36100,G__36101,G__36102));
} else {
var G__36227 = (ix + (1));
var G__36228 = ((f * s) * ((n - ix) / (ix + (1))));
var G__36229 = (u - f);
ix = G__36227;
f = G__36228;
u = G__36229;
continue;

}
}
break;
}
}
});
kixi.stats.distribution.rand_binomial = (function kixi$stats$distribution$rand_binomial(n,p,rng){
var p__$1 = (function (){var x__4249__auto__ = 0.0;
var y__4250__auto__ = (function (){var x__4252__auto__ = p;
var y__4253__auto__ = 1.0;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p__$1,0.0)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p__$1,1.0)){
return n;
} else {
if(((n * p__$1) < (14))){
return kixi.stats.distribution.rand_binomial_binv(n,p__$1,rng);
} else {
return kixi.stats.distribution.rand_binomial_btrd(n,p__$1,rng);

}
}
}
});
kixi.stats.distribution.rand_gamma = (function kixi$stats$distribution$rand_gamma(k,rng){
var k_SINGLEQUOTE_ = (function (){var G__36109 = k;
return (G__36109 + (1));

})();
var a1 = (k_SINGLEQUOTE_ - ((1) / (3)));
var a2 = ((1) / kixi.stats.math.sqrt(((9) * a1)));
var vec__36103 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36103,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36103,(1),null);
var vec__36106 = (function (){var rng__$1 = r1;
while(true){
var vec__36116 = clojure.test.check.random.split(rng__$1);
var r1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(0),null);
var r2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(1),null);
var vec__36119 = (function (){var rng__$2 = r2__$1;
while(true){
var x = kixi.stats.distribution.rand_normal(rng__$2);
var v = ((1) + (a2 * x));
if((v <= (0))){
var G__36235 = kixi.stats.distribution.next_rng(rng__$2);
rng__$2 = G__36235;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,v], null);
}
break;
}
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36119,(1),null);
var v__$1 = ((v * v) * v);
var u = clojure.test.check.random.rand_double(r1__$1);
if((((u > ((1) - (0.331 * kixi.stats.math.pow(x,(4)))))) && ((kixi.stats.math.log(u) > (((0.5 * x) * x) + (a1 * (((1) + (- v__$1)) + kixi.stats.math.log(v__$1)))))))){
var G__36236 = kixi.stats.distribution.next_rng(r1__$1);
rng__$1 = G__36236;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,u], null);
}
break;
}
})();
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36106,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36106,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
return (a1 * v);
} else {
return ((kixi.stats.math.pow((function (){var rng__$1 = r2;
while(true){
var r = clojure.test.check.random.rand_double(rng__$1);
if((r > (0))){
return r;
} else {
var G__36237 = kixi.stats.distribution.next_rng(rng__$1);
rng__$1 = G__36237;
continue;
}
break;
}
})(),((1) / k)) * a1) * v);
}
});
kixi.stats.distribution.rand_beta = (function kixi$stats$distribution$rand_beta(alpha,beta,rng){
var vec__36122 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36122,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36122,(1),null);
var u = kixi.stats.distribution.rand_gamma(alpha,r1);
return (u / (u + kixi.stats.distribution.rand_gamma(beta,r2)));
});
kixi.stats.distribution.rand_int_tuple = (function kixi$stats$distribution$rand_int_tuple(a,b,rng){
var vec__36125 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36125,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36125,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kixi.stats.distribution.rand_int(a,b,r1),kixi.stats.distribution.rand_int(a,b,r2)], null);
});
kixi.stats.distribution.shuffle = (function kixi$stats$distribution$shuffle(coll,rng){
var coll__$1 = ((cljs.core.vector_QMARK_(coll))?coll:cljs.core.vec(coll));
var n = cljs.core.count(coll__$1);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(kixi.stats.distribution.swap,coll__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36128_SHARP_){
return kixi.stats.distribution.rand_int_tuple((0),n,p1__36128_SHARP_);
}),clojure.test.check.random.split_n(rng,kixi.stats.distribution.rand_int((0),((2) * n),rng))));
});
kixi.stats.distribution.sampleable__GT_seq = (function kixi$stats$distribution$sampleable__GT_seq(var_args){
var G__36130 = arguments.length;
switch (G__36130) {
case 1:
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1 = (function (distribution){
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2(distribution,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0());
}));

(kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2 = (function (distribution,rng){
return (new cljs.core.LazySeq(null,(function (){
var vec__36131 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(1),null);
return cljs.core.cons(kixi.stats.protocols.sample_1(distribution,r1),kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2(distribution,r2));
}),null,null));
}));

(kixi.stats.distribution.sampleable__GT_seq.cljs$lang$maxFixedArity = 2);

kixi.stats.distribution.default_sample_n = (function kixi$stats$distribution$default_sample_n(distribution,n,rng){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2(distribution,rng));
});
kixi.stats.distribution.categorical_sample = (function kixi$stats$distribution$categorical_sample(ks,ps,n,rng){
var coll = cljs.core.List.EMPTY;
var n__$1 = n;
var rem = (1);
var rng__$1 = rng;
var ks__$1 = ks;
var ps__$1 = ps;
while(true){
if(((cljs.core.seq(ks__$1)) && ((rem > (0))))){
var k = cljs.core.first(ks__$1);
var p = cljs.core.first(ps__$1);
var x = kixi.stats.protocols.sample_1((function (){var G__36136 = n__$1;
var G__36137 = (p / rem);
return (kixi.stats.distribution.__GT_Binomial.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.__GT_Binomial.cljs$core$IFn$_invoke$arity$2(G__36136,G__36137) : kixi.stats.distribution.__GT_Binomial.call(null,G__36136,G__36137));
})(),rng__$1);
var G__36243 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(x,k));
var G__36244 = (n__$1 - x);
var G__36245 = (rem - p);
var G__36246 = kixi.stats.distribution.next_rng(rng__$1);
var G__36247 = cljs.core.rest(ks__$1);
var G__36248 = cljs.core.rest(ps__$1);
coll = G__36243;
n__$1 = G__36244;
rem = G__36245;
rng__$1 = G__36246;
ks__$1 = G__36247;
ps__$1 = G__36248;
continue;
} else {
return coll;
}
break;
}
});
kixi.stats.distribution.quantile_t = (function kixi$stats$distribution$quantile_t(dof,p){
if((p <= 0.0)){
return kixi.stats.math.negative_infinity;
} else {
if((p >= 1.0)){
return kixi.stats.math.infinity;
} else {
var x = kixi.stats.math.ibetainv(((2) * (function (){var x__4252__auto__ = p;
var y__4253__auto__ = ((1) - p);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})()),(0.5 * dof),0.5);
var x__$1 = kixi.stats.math.sqrt((dof * (((1) - x) / x)));
if((p > 0.5)){
return x__$1;
} else {
return (- x__$1);
}

}
}
});
kixi.stats.distribution.cdf_t = (function kixi$stats$distribution$cdf_t(dof,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,kixi.stats.math.negative_infinity)){
return 0.0;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,kixi.stats.math.infinity)){
return 1.0;
} else {
var dof2 = (dof * 0.5);
return kixi.stats.math.ibeta(((x + kixi.stats.math.sqrt((kixi.stats.math.sq(x) + dof))) / ((2) * kixi.stats.math.sqrt((kixi.stats.math.sq(x) + dof)))),dof2,dof2);

}
}
});

/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Uniform = (function (a,b){
this.a = a;
this.b = b;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return ((clojure.test.check.random.rand_double(rng) * (self__.b - self__.a)) + self__.a);
}));

(kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Uniform.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Uniform.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null);
}));

(kixi.stats.distribution.Uniform.cljs$lang$type = true);

(kixi.stats.distribution.Uniform.cljs$lang$ctorStr = "kixi.stats.distribution/Uniform");

(kixi.stats.distribution.Uniform.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Uniform");
}));

/**
 * Positional factory function for kixi.stats.distribution/Uniform.
 */
kixi.stats.distribution.__GT_Uniform = (function kixi$stats$distribution$__GT_Uniform(a,b){
return (new kixi.stats.distribution.Uniform(a,b));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Exponential = (function (rate){
this.rate = rate;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return ((- kixi.stats.math.log(clojure.test.check.random.rand_double(rng))) / self__.rate);
}));

(kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Exponential.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Exponential.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rate","rate",211871829,null)], null);
}));

(kixi.stats.distribution.Exponential.cljs$lang$type = true);

(kixi.stats.distribution.Exponential.cljs$lang$ctorStr = "kixi.stats.distribution/Exponential");

(kixi.stats.distribution.Exponential.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Exponential");
}));

/**
 * Positional factory function for kixi.stats.distribution/Exponential.
 */
kixi.stats.distribution.__GT_Exponential = (function kixi$stats$distribution$__GT_Exponential(rate){
return (new kixi.stats.distribution.Exponential(rate));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PDiscreteRandomVariable}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Binomial = (function (n,p){
this.n = n;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.rand_binomial(self__.n,self__.p,rng);
}));

(kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n__$1,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n__$1,rng);
}));

(kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = (function (this$,n_SINGLEQUOTE_,rng){
var self__ = this;
var this$__$1 = this;
return cljs.core.frequencies(this$__$1.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(null,n_SINGLEQUOTE_,rng));
}));

(kixi.stats.distribution.Binomial.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Binomial.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(kixi.stats.distribution.Binomial.cljs$lang$type = true);

(kixi.stats.distribution.Binomial.cljs$lang$ctorStr = "kixi.stats.distribution/Binomial");

(kixi.stats.distribution.Binomial.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Binomial");
}));

/**
 * Positional factory function for kixi.stats.distribution/Binomial.
 */
kixi.stats.distribution.__GT_Binomial = (function kixi$stats$distribution$__GT_Binomial(n,p){
return (new kixi.stats.distribution.Binomial(n,p));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PDiscreteRandomVariable}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Bernoulli = (function (p){
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return (clojure.test.check.random.rand_double(rng) < self__.p);
}));

(kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
var v = kixi.stats.distribution.__GT_Binomial(n,self__.p).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null,rng);
return kixi.stats.distribution.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,true),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - v),false)),rng);
}));

(kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
var v = kixi.stats.distribution.__GT_Binomial(n,self__.p).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null,rng);
return new cljs.core.PersistentArrayMap(null, 2, [true,v,false,(n - v)], null);
}));

(kixi.stats.distribution.Bernoulli.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Bernoulli.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(kixi.stats.distribution.Bernoulli.cljs$lang$type = true);

(kixi.stats.distribution.Bernoulli.cljs$lang$ctorStr = "kixi.stats.distribution/Bernoulli");

(kixi.stats.distribution.Bernoulli.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Bernoulli");
}));

/**
 * Positional factory function for kixi.stats.distribution/Bernoulli.
 */
kixi.stats.distribution.__GT_Bernoulli = (function kixi$stats$distribution$__GT_Bernoulli(p){
return (new kixi.stats.distribution.Bernoulli(p));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PQuantile}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Normal = (function (mu,sd){
this.mu = mu;
this.sd = sd;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return ((kixi.stats.distribution.rand_normal(rng) * self__.sd) + self__.mu);
}));

(kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PQuantile$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (0.5 * ((1) + kixi.stats.math.erf(((x - self__.mu) / kixi.stats.math.sqrt((((2) * self__.sd) * self__.sd))))));
}));

(kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = (function (this$,p){
var self__ = this;
var this$__$1 = this;
return (((-1.4142135623730951 * self__.sd) * kixi.stats.math.erfcinv(((2) * p))) + self__.mu);
}));

(kixi.stats.distribution.Normal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Normal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mu","mu",-1507966528,null),new cljs.core.Symbol(null,"sd","sd",-66592929,null)], null);
}));

(kixi.stats.distribution.Normal.cljs$lang$type = true);

(kixi.stats.distribution.Normal.cljs$lang$ctorStr = "kixi.stats.distribution/Normal");

(kixi.stats.distribution.Normal.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Normal");
}));

/**
 * Positional factory function for kixi.stats.distribution/Normal.
 */
kixi.stats.distribution.__GT_Normal = (function kixi$stats$distribution$__GT_Normal(mu,sd){
return (new kixi.stats.distribution.Normal(mu,sd));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PQuantile}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.T = (function (dof){
this.dof = dof;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.T.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.T.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var vec__36138 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(1),null);
return (kixi.stats.distribution.rand_normal(r1) * kixi.stats.math.sqrt((self__.dof / ((2) * kixi.stats.distribution.rand_gamma((0.5 * self__.dof),r2)))));
}));

(kixi.stats.distribution.T.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.T.prototype.kixi$stats$protocols$PQuantile$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.T.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.cdf_t(self__.dof,x);
}));

(kixi.stats.distribution.T.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = (function (this$,p){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.quantile_t(self__.dof,p);
}));

(kixi.stats.distribution.T.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.T.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dof","dof",1009750250,null)], null);
}));

(kixi.stats.distribution.T.cljs$lang$type = true);

(kixi.stats.distribution.T.cljs$lang$ctorStr = "kixi.stats.distribution/T");

(kixi.stats.distribution.T.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/T");
}));

/**
 * Positional factory function for kixi.stats.distribution/T.
 */
kixi.stats.distribution.__GT_T = (function kixi$stats$distribution$__GT_T(dof){
return (new kixi.stats.distribution.T(dof));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Gamma = (function (shape,scale){
this.shape = shape;
this.scale = scale;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Gamma.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Gamma.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return (kixi.stats.distribution.rand_gamma(self__.shape,rng) * self__.scale);
}));

(kixi.stats.distribution.Gamma.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Gamma.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Gamma.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null)], null);
}));

(kixi.stats.distribution.Gamma.cljs$lang$type = true);

(kixi.stats.distribution.Gamma.cljs$lang$ctorStr = "kixi.stats.distribution/Gamma");

(kixi.stats.distribution.Gamma.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Gamma");
}));

/**
 * Positional factory function for kixi.stats.distribution/Gamma.
 */
kixi.stats.distribution.__GT_Gamma = (function kixi$stats$distribution$__GT_Gamma(shape,scale){
return (new kixi.stats.distribution.Gamma(shape,scale));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Beta = (function (alpha,beta){
this.alpha = alpha;
this.beta = beta;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Beta.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Beta.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.rand_beta(self__.alpha,self__.beta,rng);
}));

(kixi.stats.distribution.Beta.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Beta.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Beta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"beta","beta",2096137419,null)], null);
}));

(kixi.stats.distribution.Beta.cljs$lang$type = true);

(kixi.stats.distribution.Beta.cljs$lang$ctorStr = "kixi.stats.distribution/Beta");

(kixi.stats.distribution.Beta.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Beta");
}));

/**
 * Positional factory function for kixi.stats.distribution/Beta.
 */
kixi.stats.distribution.__GT_Beta = (function kixi$stats$distribution$__GT_Beta(alpha,beta){
return (new kixi.stats.distribution.Beta(alpha,beta));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.BetaBinomial = (function (n,alpha,beta){
this.n = n;
this.alpha = alpha;
this.beta = beta;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.BetaBinomial.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.BetaBinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var vec__36141 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(1),null);
var p = kixi.stats.distribution.rand_beta(self__.alpha,self__.beta,r1);
return kixi.stats.distribution.rand_binomial(self__.n,p,r2);
}));

(kixi.stats.distribution.BetaBinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n__$1,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n__$1,rng);
}));

(kixi.stats.distribution.BetaBinomial.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.BetaBinomial.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"beta","beta",2096137419,null)], null);
}));

(kixi.stats.distribution.BetaBinomial.cljs$lang$type = true);

(kixi.stats.distribution.BetaBinomial.cljs$lang$ctorStr = "kixi.stats.distribution/BetaBinomial");

(kixi.stats.distribution.BetaBinomial.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/BetaBinomial");
}));

/**
 * Positional factory function for kixi.stats.distribution/BetaBinomial.
 */
kixi.stats.distribution.__GT_BetaBinomial = (function kixi$stats$distribution$__GT_BetaBinomial(n,alpha,beta){
return (new kixi.stats.distribution.BetaBinomial(n,alpha,beta));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PQuantile}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.ChiSquared = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return (kixi.stats.distribution.rand_gamma((self__.k / (2)),rng) * (2));
}));

(kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PQuantile$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return kixi.stats.math.lower_regularized_gamma((0.5 * self__.k),(0.5 * x));
}));

(kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = (function (this$,p){
var self__ = this;
var this$__$1 = this;
return (2.0 * kixi.stats.math.gamma_pinv(p,(0.5 * self__.k)));
}));

(kixi.stats.distribution.ChiSquared.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.ChiSquared.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(kixi.stats.distribution.ChiSquared.cljs$lang$type = true);

(kixi.stats.distribution.ChiSquared.cljs$lang$ctorStr = "kixi.stats.distribution/ChiSquared");

(kixi.stats.distribution.ChiSquared.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/ChiSquared");
}));

/**
 * Positional factory function for kixi.stats.distribution/ChiSquared.
 */
kixi.stats.distribution.__GT_ChiSquared = (function kixi$stats$distribution$__GT_ChiSquared(k){
return (new kixi.stats.distribution.ChiSquared(k));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.F = (function (d1,d2){
this.d1 = d1;
this.d2 = d2;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.F.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.F.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var vec__36144 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(1),null);
var x1 = (kixi.stats.distribution.rand_gamma((self__.d1 / (2)),r1) * (2));
var x2 = (kixi.stats.distribution.rand_gamma((self__.d2 / (2)),r2) * (2));
return ((x1 / self__.d1) / (x2 / self__.d2));
}));

(kixi.stats.distribution.F.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.F.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.F.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d1","d1",375811720,null),new cljs.core.Symbol(null,"d2","d2",-516033910,null)], null);
}));

(kixi.stats.distribution.F.cljs$lang$type = true);

(kixi.stats.distribution.F.cljs$lang$ctorStr = "kixi.stats.distribution/F");

(kixi.stats.distribution.F.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/F");
}));

/**
 * Positional factory function for kixi.stats.distribution/F.
 */
kixi.stats.distribution.__GT_F = (function kixi$stats$distribution$__GT_F(d1,d2){
return (new kixi.stats.distribution.F(d1,d2));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Poisson = (function (lambda){
this.lambda = lambda;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Poisson.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Poisson.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var l = kixi.stats.math.exp((- self__.lambda));
var p = (1);
var k = (0);
var rng__$1 = rng;
while(true){
var p__$1 = (p * clojure.test.check.random.rand_double(rng__$1));
if((p__$1 > l)){
var G__36259 = p__$1;
var G__36260 = (k + (1));
var G__36261 = kixi.stats.distribution.next_rng(rng__$1);
p = G__36259;
k = G__36260;
rng__$1 = G__36261;
continue;
} else {
return k;
}
break;
}
}));

(kixi.stats.distribution.Poisson.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Poisson.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Poisson.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lambda","lambda",157104302,null)], null);
}));

(kixi.stats.distribution.Poisson.cljs$lang$type = true);

(kixi.stats.distribution.Poisson.cljs$lang$ctorStr = "kixi.stats.distribution/Poisson");

(kixi.stats.distribution.Poisson.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Poisson");
}));

/**
 * Positional factory function for kixi.stats.distribution/Poisson.
 */
kixi.stats.distribution.__GT_Poisson = (function kixi$stats$distribution$__GT_Poisson(lambda){
return (new kixi.stats.distribution.Poisson(lambda));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Weibull = (function (shape,scale){
this.shape = shape;
this.scale = scale;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Weibull.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Weibull.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return (kixi.stats.math.pow((- kixi.stats.math.log(clojure.test.check.random.rand_double(rng))),((1) / self__.shape)) * self__.scale);
}));

(kixi.stats.distribution.Weibull.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Weibull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Weibull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null)], null);
}));

(kixi.stats.distribution.Weibull.cljs$lang$type = true);

(kixi.stats.distribution.Weibull.cljs$lang$ctorStr = "kixi.stats.distribution/Weibull");

(kixi.stats.distribution.Weibull.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Weibull");
}));

/**
 * Positional factory function for kixi.stats.distribution/Weibull.
 */
kixi.stats.distribution.__GT_Weibull = (function kixi$stats$distribution$__GT_Weibull(shape,scale){
return (new kixi.stats.distribution.Weibull(shape,scale));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PDiscreteRandomVariable}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Categorical = (function (ks,ps){
this.ks = ks;
this.ps = ps;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return cljs.core.first(kixi.stats.distribution.categorical_sample(self__.ks,self__.ps,(1),rng));
}));

(kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.shuffle(kixi.stats.distribution.categorical_sample(self__.ks,self__.ps,n,rng),rng);
}));

(kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
var coll = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var n__$1 = n;
var rem = (1);
var rng__$1 = rng;
var ks__$1 = self__.ks;
var ps__$1 = self__.ps;
while(true){
if(((cljs.core.seq(ks__$1)) && ((rem > (0))))){
var k = cljs.core.first(ks__$1);
var p = cljs.core.first(ps__$1);
var x = kixi.stats.distribution.rand_binomial(n__$1,(p / rem),rng__$1);
var G__36262 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(coll,k,x);
var G__36263 = (n__$1 - x);
var G__36264 = (rem - p);
var G__36265 = kixi.stats.distribution.next_rng(rng__$1);
var G__36266 = cljs.core.rest(ks__$1);
var G__36267 = cljs.core.rest(ps__$1);
coll = G__36262;
n__$1 = G__36263;
rem = G__36264;
rng__$1 = G__36265;
ks__$1 = G__36266;
ps__$1 = G__36267;
continue;
} else {
return cljs.core.persistent_BANG_(coll);
}
break;
}
}));

(kixi.stats.distribution.Categorical.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Categorical.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol(null,"ps","ps",1932889573,null)], null);
}));

(kixi.stats.distribution.Categorical.cljs$lang$type = true);

(kixi.stats.distribution.Categorical.cljs$lang$ctorStr = "kixi.stats.distribution/Categorical");

(kixi.stats.distribution.Categorical.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Categorical");
}));

/**
 * Positional factory function for kixi.stats.distribution/Categorical.
 */
kixi.stats.distribution.__GT_Categorical = (function kixi$stats$distribution$__GT_Categorical(ks,ps){
return (new kixi.stats.distribution.Categorical(ks,ps));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PDiscreteRandomVariable}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Multinomial = (function (n,ps){
this.n = n;
this.ps = ps;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var n__$1 = self__.n;
var rem = (1);
var rng__$1 = rng;
var ps__$1 = self__.ps;
while(true){
if(((cljs.core.seq(ps__$1)) && ((rem > (0))))){
var p = cljs.core.first(ps__$1);
var x = kixi.stats.distribution.rand_binomial(n__$1,(p / rem),rng__$1);
var G__36268 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__36269 = (n__$1 - x);
var G__36270 = (rem - p);
var G__36271 = kixi.stats.distribution.next_rng(rng__$1);
var G__36272 = cljs.core.rest(ps__$1);
coll = G__36268;
n__$1 = G__36269;
rem = G__36270;
rng__$1 = G__36271;
ps__$1 = G__36272;
continue;
} else {
return cljs.core.persistent_BANG_(coll);
}
break;
}
}));

(kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n__$1,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n__$1,rng);
}));

(kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = (function (this$,n__$1,rng){
var self__ = this;
var this$__$1 = this;
return cljs.core.frequencies(this$__$1.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(null,n__$1,rng));
}));

(kixi.stats.distribution.Multinomial.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Multinomial.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"ps","ps",1932889573,null)], null);
}));

(kixi.stats.distribution.Multinomial.cljs$lang$type = true);

(kixi.stats.distribution.Multinomial.cljs$lang$ctorStr = "kixi.stats.distribution/Multinomial");

(kixi.stats.distribution.Multinomial.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Multinomial");
}));

/**
 * Positional factory function for kixi.stats.distribution/Multinomial.
 */
kixi.stats.distribution.__GT_Multinomial = (function kixi$stats$distribution$__GT_Multinomial(n,ps){
return (new kixi.stats.distribution.Multinomial(n,ps));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Dirichlet = (function (as){
this.as = as;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Dirichlet.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Dirichlet.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var rs = clojure.test.check.random.split_n(rng,cljs.core.count(self__.as));
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__36147_SHARP_,p2__36148_SHARP_){
return kixi.stats.distribution.rand_gamma(p1__36147_SHARP_,p2__36148_SHARP_);
}),self__.as,rs);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36149_SHARP_){
return (p1__36149_SHARP_ / s);
}),xs);
}));

(kixi.stats.distribution.Dirichlet.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Dirichlet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Dirichlet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"as","as",-1505746128,null)], null);
}));

(kixi.stats.distribution.Dirichlet.cljs$lang$type = true);

(kixi.stats.distribution.Dirichlet.cljs$lang$ctorStr = "kixi.stats.distribution/Dirichlet");

(kixi.stats.distribution.Dirichlet.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Dirichlet");
}));

/**
 * Positional factory function for kixi.stats.distribution/Dirichlet.
 */
kixi.stats.distribution.__GT_Dirichlet = (function kixi$stats$distribution$__GT_Dirichlet(as){
return (new kixi.stats.distribution.Dirichlet(as));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PDiscreteRandomVariable}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.DirichletMultinomial = (function (n,as){
this.n = n;
this.as = as;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
var vec__36150 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(1),null);
var ps = kixi.stats.distribution.__GT_Dirichlet(self__.as).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null,r1);
return kixi.stats.distribution.__GT_Multinomial(self__.n,ps).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null,r2);
}));

(kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n__$1,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n__$1,rng);
}));

(kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = (function (this$,n__$1,rng){
var self__ = this;
var this$__$1 = this;
return cljs.core.frequencies(this$__$1.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(null,n__$1,rng));
}));

(kixi.stats.distribution.DirichletMultinomial.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.DirichletMultinomial.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"as","as",-1505746128,null)], null);
}));

(kixi.stats.distribution.DirichletMultinomial.cljs$lang$type = true);

(kixi.stats.distribution.DirichletMultinomial.cljs$lang$ctorStr = "kixi.stats.distribution/DirichletMultinomial");

(kixi.stats.distribution.DirichletMultinomial.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/DirichletMultinomial");
}));

/**
 * Positional factory function for kixi.stats.distribution/DirichletMultinomial.
 */
kixi.stats.distribution.__GT_DirichletMultinomial = (function kixi$stats$distribution$__GT_DirichletMultinomial(n,as){
return (new kixi.stats.distribution.DirichletMultinomial(n,as));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PQuantile}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Cauchy = (function (location,scale){
this.location = location;
this.scale = scale;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return (self__.location + (self__.scale * kixi.stats.math.tan((kixi.stats.math.PI * (clojure.test.check.random.rand_double(rng) - 0.5)))));
}));

(kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PQuantile$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (0.5 + (kixi.stats.math.atan(((x - self__.location) / self__.scale)) / kixi.stats.math.PI));
}));

(kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = (function (this$,p){
var self__ = this;
var this$__$1 = this;
return (self__.location + (self__.scale * kixi.stats.math.tan((kixi.stats.math.PI * (p - 0.5)))));
}));

(kixi.stats.distribution.Cauchy.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Cauchy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null)], null);
}));

(kixi.stats.distribution.Cauchy.cljs$lang$type = true);

(kixi.stats.distribution.Cauchy.cljs$lang$ctorStr = "kixi.stats.distribution/Cauchy");

(kixi.stats.distribution.Cauchy.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Cauchy");
}));

/**
 * Positional factory function for kixi.stats.distribution/Cauchy.
 */
kixi.stats.distribution.__GT_Cauchy = (function kixi$stats$distribution$__GT_Cauchy(location,scale){
return (new kixi.stats.distribution.Cauchy(location,scale));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PQuantile}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.LogNormal = (function (mu,sd){
this.mu = mu;
this.sd = sd;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.math.exp(((kixi.stats.distribution.rand_normal(rng) * self__.sd) + self__.mu));
}));

(kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PQuantile$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (0.5 * ((1) + kixi.stats.math.erf(((kixi.stats.math.log(x) - self__.mu) / kixi.stats.math.sqrt((((2) * self__.sd) * self__.sd))))));
}));

(kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = (function (this$,p){
var self__ = this;
var this$__$1 = this;
return kixi.stats.math.exp((((-1.4142135623730951 * self__.sd) * kixi.stats.math.erfcinv(((2) * p))) + self__.mu));
}));

(kixi.stats.distribution.LogNormal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.LogNormal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mu","mu",-1507966528,null),new cljs.core.Symbol(null,"sd","sd",-66592929,null)], null);
}));

(kixi.stats.distribution.LogNormal.cljs$lang$type = true);

(kixi.stats.distribution.LogNormal.cljs$lang$ctorStr = "kixi.stats.distribution/LogNormal");

(kixi.stats.distribution.LogNormal.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/LogNormal");
}));

/**
 * Positional factory function for kixi.stats.distribution/LogNormal.
 */
kixi.stats.distribution.__GT_LogNormal = (function kixi$stats$distribution$__GT_LogNormal(mu,sd){
return (new kixi.stats.distribution.LogNormal(mu,sd));
});


/**
* @constructor
 * @implements {kixi.stats.protocols.PQuantile}
 * @implements {kixi.stats.protocols.PRandomVariable}
 * @implements {cljs.core.ISeqable}
*/
kixi.stats.distribution.Pareto = (function (scale,shape){
this.scale = scale;
this.shape = shape;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PRandomVariable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = (function (this$,rng){
var self__ = this;
var this$__$1 = this;
return (self__.scale / kixi.stats.math.pow(clojure.test.check.random.rand_double(rng),((1) / self__.shape)));
}));

(kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = (function (this$,n,rng){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.default_sample_n(this$__$1,n,rng);
}));

(kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PQuantile$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if((self__.scale < x)){
return ((1) - kixi.stats.math.pow((self__.scale / x),self__.shape));
} else {
return 0.0;
}
}));

(kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = (function (this$,p){
var self__ = this;
var this$__$1 = this;
return (self__.scale / kixi.stats.math.pow(((1) - p),((1) / self__.shape)));
}));

(kixi.stats.distribution.Pareto.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(kixi.stats.distribution.Pareto.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scale","scale",1410104174,null),new cljs.core.Symbol(null,"shape","shape",-1463741763,null)], null);
}));

(kixi.stats.distribution.Pareto.cljs$lang$type = true);

(kixi.stats.distribution.Pareto.cljs$lang$ctorStr = "kixi.stats.distribution/Pareto");

(kixi.stats.distribution.Pareto.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.distribution/Pareto");
}));

/**
 * Positional factory function for kixi.stats.distribution/Pareto.
 */
kixi.stats.distribution.__GT_Pareto = (function kixi$stats$distribution$__GT_Pareto(scale,shape){
return (new kixi.stats.distribution.Pareto(scale,shape));
});

kixi.stats.distribution.minimum = kixi.stats.protocols.minimum;
kixi.stats.distribution.maximum = kixi.stats.protocols.maximum;
kixi.stats.distribution.quantile = kixi.stats.protocols.quantile;
kixi.stats.distribution.cdf = kixi.stats.protocols.cdf;
/**
 * Returns the interquartile range
 */
kixi.stats.distribution.iqr = (function kixi$stats$distribution$iqr(distribution){
return ((kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,0.75) : kixi.stats.distribution.quantile.call(null,distribution,0.75)) - (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,0.25) : kixi.stats.distribution.quantile.call(null,distribution,0.25)));
});
/**
 * Returns the median
 */
kixi.stats.distribution.median = (function kixi$stats$distribution$median(distribution){
return (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,0.5) : kixi.stats.distribution.quantile.call(null,distribution,0.5));
});
/**
 * Returns the 5-number distribution summary
 *   and the interquartile range.
 */
kixi.stats.distribution.summary = (function kixi$stats$distribution$summary(distribution){
var q1 = (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,0.25) : kixi.stats.distribution.quantile.call(null,distribution,0.25));
var q3 = (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,0.75) : kixi.stats.distribution.quantile.call(null,distribution,0.75));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min","min",444991522),(kixi.stats.distribution.minimum.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.distribution.minimum.cljs$core$IFn$_invoke$arity$1(distribution) : kixi.stats.distribution.minimum.call(null,distribution)),new cljs.core.Keyword(null,"q1","q1",163909474),q1,new cljs.core.Keyword(null,"median","median",569566131),(kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,0.5) : kixi.stats.distribution.quantile.call(null,distribution,0.5)),new cljs.core.Keyword(null,"q3","q3",1466749348),q3,new cljs.core.Keyword(null,"max","max",61366548),(kixi.stats.distribution.maximum.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.distribution.maximum.cljs$core$IFn$_invoke$arity$1(distribution) : kixi.stats.distribution.maximum.call(null,distribution)),new cljs.core.Keyword(null,"iqr","iqr",1758816648),(cljs.core.truth_((function (){var and__4149__auto__ = q1;
if(cljs.core.truth_(and__4149__auto__)){
return q3;
} else {
return and__4149__auto__;
}
})())?(q3 - q1):null)], null);
});
/**
 * Returns a uniform distribution.
 *   Params: {:a ∈ ℝ, :b ∈ ℝ}
 */
kixi.stats.distribution.uniform = (function kixi$stats$distribution$uniform(p__36153){
var map__36154 = p__36153;
var map__36154__$1 = cljs.core.__destructure_map(map__36154);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return kixi.stats.distribution.__GT_Uniform(a,b);
});
/**
 * Returns an exponential distribution.
 *   Params: {:rate ∈ ℝ > 0}
 */
kixi.stats.distribution.exponential = (function kixi$stats$distribution$exponential(p__36155){
var map__36156 = p__36155;
var map__36156__$1 = cljs.core.__destructure_map(map__36156);
var rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
return kixi.stats.distribution.__GT_Exponential(rate);
});
/**
 * Returns a Bernoulli distribution.
 *   Params: {:p ∈ [0 1]}
 */
kixi.stats.distribution.bernoulli = (function kixi$stats$distribution$bernoulli(p__36157){
var map__36158 = p__36157;
var map__36158__$1 = cljs.core.__destructure_map(map__36158);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"p","p",151049309));
return kixi.stats.distribution.__GT_Bernoulli(p);
});
/**
 * Return a binomial distribution.
 *   Params: {:n ∈ ℕ, :p ∈ [0 1]}
 */
kixi.stats.distribution.binomial = (function kixi$stats$distribution$binomial(p__36159){
var map__36160 = p__36159;
var map__36160__$1 = cljs.core.__destructure_map(map__36160);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36160__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36160__$1,new cljs.core.Keyword(null,"p","p",151049309));
return kixi.stats.distribution.__GT_Binomial(n,p);
});
/**
 * Returns a normal distribution.
 *   Params: {:location ∈ ℝ, :scale ∈ ℝ}
 */
kixi.stats.distribution.normal = (function kixi$stats$distribution$normal(p__36161){
var map__36162 = p__36161;
var map__36162__$1 = cljs.core.__destructure_map(map__36162);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
return kixi.stats.distribution.__GT_Normal((function (){var or__4160__auto__ = location;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return mu;
}
})(),(function (){var or__4160__auto__ = scale;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return sd;
}
})());
});
/**
 * Returns a t distribution.
 *   Params: {:v ∈ ℕ > 0}
 */
kixi.stats.distribution.t = (function kixi$stats$distribution$t(p__36163){
var map__36164 = p__36163;
var map__36164__$1 = cljs.core.__destructure_map(map__36164);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164__$1,new cljs.core.Keyword(null,"v","v",21465059));
return kixi.stats.distribution.__GT_T(v);
});
/**
 * Returns a gamma distribution.
 *   Params: {:shape ∈ ℝ, :scale ∈ ℝ} or {:shape ∈ ℝ, :rate ∈ ℝ}
 */
kixi.stats.distribution.gamma = (function kixi$stats$distribution$gamma(p__36165){
var map__36166 = p__36165;
var map__36166__$1 = cljs.core.__destructure_map(map__36166);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36166__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36166__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36166__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
return kixi.stats.distribution.__GT_Gamma(shape,(function (){var or__4160__auto__ = scale;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1.0 / rate);
}
})());
});
/**
 * Returns a beta distribution.
 *   Params: {:alpha ∈ ℝ, :beta ∈ ℝ}
 */
kixi.stats.distribution.beta = (function kixi$stats$distribution$beta(p__36167){
var map__36168 = p__36167;
var map__36168__$1 = cljs.core.__destructure_map(map__36168);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36168__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),1.0);
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36168__$1,new cljs.core.Keyword(null,"beta","beta",455605892),1.0);
return kixi.stats.distribution.__GT_Beta(alpha,beta);
});
/**
 * Returns a beta distribution.
 *   Params: {:n ∈ ℕ > 0, :alpha ∈ ℝ > 0, :beta ∈ ℝ > 0}
 */
kixi.stats.distribution.beta_binomial = (function kixi$stats$distribution$beta_binomial(p__36169){
var map__36170 = p__36169;
var map__36170__$1 = cljs.core.__destructure_map(map__36170);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"n","n",562130025));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36170__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),1.0);
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36170__$1,new cljs.core.Keyword(null,"beta","beta",455605892),1.0);
return kixi.stats.distribution.__GT_BetaBinomial(n,alpha,beta);
});
/**
 * Returns a weibull distribution.
 *   Params: {:shape ∈ ℝ >= 0, :scale ∈ ℝ >= 0}
 */
kixi.stats.distribution.weibull = (function kixi$stats$distribution$weibull(p__36171){
var map__36172 = p__36171;
var map__36172__$1 = cljs.core.__destructure_map(map__36172);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36172__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36172__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
return kixi.stats.distribution.__GT_Weibull(shape,scale);
});
/**
 * Returns a chi-squared distribution.
 *   Params: {:k ∈ ℕ > 0}
 */
kixi.stats.distribution.chi_squared = (function kixi$stats$distribution$chi_squared(p__36173){
var map__36174 = p__36173;
var map__36174__$1 = cljs.core.__destructure_map(map__36174);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36174__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
return kixi.stats.distribution.__GT_ChiSquared(k);
});
/**
 * Returns an F distribution.
 *   Params: {:d1 ∈ ℕ > 0, :d2 ∈ ℕ > 0}
 */
kixi.stats.distribution.f = (function kixi$stats$distribution$f(p__36175){
var map__36176 = p__36175;
var map__36176__$1 = cljs.core.__destructure_map(map__36176);
var d1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"d1","d1",-1264719807));
var d2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"d2","d2",2138401859));
return kixi.stats.distribution.__GT_F(d1,d2);
});
/**
 * Returns a Poisson distribution.
 *   Params: {:lambda ∈ ℝ > 0}
 */
kixi.stats.distribution.poisson = (function kixi$stats$distribution$poisson(p__36177){
var map__36178 = p__36177;
var map__36178__$1 = cljs.core.__destructure_map(map__36178);
var lambda = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36178__$1,new cljs.core.Keyword(null,"lambda","lambda",-1483427225));
return kixi.stats.distribution.__GT_Poisson(lambda);
});
/**
 * Returns a categorical distribution.
 *   Params: {[category] [probability], ...}
 *   Probabilities should be >= 0 and sum to 1
 */
kixi.stats.distribution.categorical = (function kixi$stats$distribution$categorical(category_probs){
var vec__36179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,category_probs);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179,(1),null);
return kixi.stats.distribution.__GT_Categorical(ks,ps);
});
/**
 * Returns a multinomial distribution.
 *   Params: {:n ∈ ℕ > 0, :probs [ℝ >= 0, ...]}
 *   Probabilities should be >= 0 and sum to 1
 */
kixi.stats.distribution.multinomial = (function kixi$stats$distribution$multinomial(p__36182){
var map__36183 = p__36182;
var map__36183__$1 = cljs.core.__destructure_map(map__36183);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36183__$1,new cljs.core.Keyword(null,"n","n",562130025));
var probs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36183__$1,new cljs.core.Keyword(null,"probs","probs",-1201894224));
return kixi.stats.distribution.__GT_Multinomial(n,probs);
});
/**
 * Returns a Dirichlet distribution.
 *   Params: {:alphas [ℝ >= 0, ...]}
 */
kixi.stats.distribution.dirichlet = (function kixi$stats$distribution$dirichlet(p__36184){
var map__36185 = p__36184;
var map__36185__$1 = cljs.core.__destructure_map(map__36185);
var alphas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36185__$1,new cljs.core.Keyword(null,"alphas","alphas",80918065));
return kixi.stats.distribution.__GT_Dirichlet(alphas);
});
/**
 * Returns a Dirichlet-multinomial distribution.
 *   Params: {:n ∈ ℕ, :alphas [ℝ >= 0, ...]}
 */
kixi.stats.distribution.dirichlet_multinomial = (function kixi$stats$distribution$dirichlet_multinomial(p__36186){
var map__36187 = p__36186;
var map__36187__$1 = cljs.core.__destructure_map(map__36187);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36187__$1,new cljs.core.Keyword(null,"n","n",562130025));
var alphas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36187__$1,new cljs.core.Keyword(null,"alphas","alphas",80918065));
return kixi.stats.distribution.__GT_DirichletMultinomial(n,alphas);
});
/**
 * Returns a Cauchy distribution.
 *   Params: {:location ∈ ℝ, :scale ∈ ℝ > 0}
 */
kixi.stats.distribution.cauchy = (function kixi$stats$distribution$cauchy(p__36188){
var map__36189 = p__36188;
var map__36189__$1 = cljs.core.__destructure_map(map__36189);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36189__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36189__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
if((scale > (0))){
} else {
throw (new Error(["Assert failed: ",["Scale (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") must be positive"].join(''),"\n","(pos? scale)"].join('')));
}

return kixi.stats.distribution.__GT_Cauchy(location,scale);
});
/**
 * Returns a Log-normal distribution.
 *   The parameters are the log of the
 *   mean and sd of this distribution.
 *   Params: {:location ∈ ℝ, :scale ∈ ℝ}
 */
kixi.stats.distribution.log_normal = (function kixi$stats$distribution$log_normal(p__36190){
var map__36191 = p__36190;
var map__36191__$1 = cljs.core.__destructure_map(map__36191);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36191__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36191__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36191__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36191__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
return kixi.stats.distribution.__GT_LogNormal((function (){var or__4160__auto__ = location;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return mu;
}
})(),(function (){var or__4160__auto__ = scale;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return sd;
}
})());
});
/**
 * Returns a Pareto distribution.
 *   Params: {:scale ∈ ℝ > 0, :shape ∈ ℝ > 0}
 */
kixi.stats.distribution.pareto = (function kixi$stats$distribution$pareto(p__36192){
var map__36193 = p__36192;
var map__36193__$1 = cljs.core.__destructure_map(map__36193);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
if((((scale > (0))) && ((shape > (0))))){
} else {
throw (new Error(["Assert failed: ",["Scale (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") and shape (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),") must be positive."].join(''),"\n","(and (pos? scale) (pos? shape))"].join('')));
}

return kixi.stats.distribution.__GT_Pareto(scale,shape);
});
/**
 * Returns a single variate from the distribution.
 *   An optional seed long will ensure deterministic results
 */
kixi.stats.distribution.draw = (function kixi$stats$distribution$draw(var_args){
var G__36195 = arguments.length;
switch (G__36195) {
case 1:
return kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$1 = (function (distribution){
return kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$2(distribution,cljs.core.PersistentArrayMap.EMPTY);
}));

(kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$2 = (function (distribution,p__36196){
var map__36197 = p__36196;
var map__36197__$1 = cljs.core.__destructure_map(map__36197);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36197__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var rng = (cljs.core.truth_(seed)?clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed):clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0());
return kixi.stats.protocols.sample_1(distribution,rng);
}));

(kixi.stats.distribution.draw.cljs$lang$maxFixedArity = 2);

/**
 * Returns n variates from the distribution.
 *   An optional seed long will ensure deterministic results
 */
kixi.stats.distribution.sample = (function kixi$stats$distribution$sample(var_args){
var G__36199 = arguments.length;
switch (G__36199) {
case 2:
return kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$2 = (function (n,distribution){
return kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$3(n,distribution,cljs.core.PersistentArrayMap.EMPTY);
}));

(kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$3 = (function (n,distribution,p__36200){
var map__36201 = p__36200;
var map__36201__$1 = cljs.core.__destructure_map(map__36201);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36201__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var rng = (cljs.core.truth_(seed)?clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed):clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0());
return kixi.stats.protocols.sample_n(distribution,n,rng);
}));

(kixi.stats.distribution.sample.cljs$lang$maxFixedArity = 3);

/**
 * Returns a summary count of each variate for a sample
 *   of a given length from a discrete distribution
 *   such as the Bernoulli, binomial or categorical.
 *   An optional seed long will ensure deterministic results
 */
kixi.stats.distribution.sample_summary = (function kixi$stats$distribution$sample_summary(var_args){
var G__36203 = arguments.length;
switch (G__36203) {
case 2:
return kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$2 = (function (n,distribution){
return kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$3(n,distribution,cljs.core.PersistentArrayMap.EMPTY);
}));

(kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$3 = (function (n,distribution,p__36204){
var map__36205 = p__36204;
var map__36205__$1 = cljs.core.__destructure_map(map__36205);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var rng = (cljs.core.truth_(seed)?clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed):clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0());
return kixi.stats.protocols.sample_frequencies(distribution,n,rng);
}));

(kixi.stats.distribution.sample_summary.cljs$lang$maxFixedArity = 3);

kixi.stats.distribution.critical_value = (function kixi$stats$distribution$critical_value(var_args){
var G__36207 = arguments.length;
switch (G__36207) {
case 1:
return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$1 = (function (distribution){
return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(distribution,0.05);
}));

(kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2 = (function (distribution,alpha){
return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3(distribution,alpha,new cljs.core.Keyword(null,"<>","<>",1280186386));
}));

(kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3 = (function (distribution,alpha,tails){
var G__36208 = tails;
var G__36208__$1 = (((G__36208 instanceof cljs.core.Keyword))?G__36208.fqn:null);
switch (G__36208__$1) {
case "<>":
var G__36209 = distribution;
var G__36210 = ((1) - (0.5 * alpha));
return (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(G__36209,G__36210) : kixi.stats.distribution.quantile.call(null,G__36209,G__36210));

break;
case "<":
return (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(distribution,alpha) : kixi.stats.distribution.quantile.call(null,distribution,alpha));

break;
case ">":
var G__36211 = distribution;
var G__36212 = ((1) - alpha);
return (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2(G__36211,G__36212) : kixi.stats.distribution.quantile.call(null,G__36211,G__36212));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36208__$1)].join('')));

}
}));

(kixi.stats.distribution.critical_value.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=kixi.stats.distribution.js.map
