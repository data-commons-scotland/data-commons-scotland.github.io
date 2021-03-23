goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27106 = arguments.length;
var i__4737__auto___27107 = (0);
while(true){
if((i__4737__auto___27107 < len__4736__auto___27106)){
args__4742__auto__.push((arguments[i__4737__auto___27107]));

var G__27145 = (i__4737__auto___27107 + (1));
i__4737__auto___27107 = G__27145;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (x){
if((x == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,args);
}
});
}));

(kixi.stats.core.somef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq26863){
var G__26864 = cljs.core.first(seq26863);
var seq26863__$1 = cljs.core.next(seq26863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26864,seq26863__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__27146 = null;
var G__27146__0 = (function (){
return init;
});
var G__27146__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__27146__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__27146 = function(acc,x){
switch(arguments.length){
case 0:
return G__27146__0.call(this);
case 1:
return G__27146__1.call(this,acc);
case 2:
return G__27146__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27146.cljs$core$IFn$_invoke$arity$0 = G__27146__0;
G__27146.cljs$core$IFn$_invoke$arity$1 = G__27146__1;
G__27146.cljs$core$IFn$_invoke$arity$2 = G__27146__2;
return G__27146;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__26866_SHARP_){
var G__26867 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__26866_SHARP_) : rf.call(null,p1__26866_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26867) : f.call(null,G__26867));
}));
});
/**
 * Given a sequence of n functions, each of which returns a categorical value
 *   (e.g. keyword or string) of a factor, calculates an n-dimensional contingency table
 *   implementing PContingencyTable. This can be passed to kixi.stats.test/chi-squared-test
 *   to determine if the relationship between factors is significant.
 *   See also: kixi.stats.core/chi-squared-test
 */
kixi.stats.core.cross_tabulate = (function kixi$stats$core$cross_tabulate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27147 = arguments.length;
var i__4737__auto___27148 = (0);
while(true){
if((i__4737__auto___27148 < len__4736__auto___27147)){
args__4742__auto__.push((arguments[i__4737__auto___27148]));

var G__27149 = (i__4737__auto___27148 + (1));
i__4737__auto___27148 = G__27149;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic = (function (fxs){
var f = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,fxs);
var k = cljs.core.count(fxs);
var inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
return (function() {
var G__27150 = null;
var G__27150__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__27150__1 = (function (p__26871){
var vec__26887 = p__26871;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26887,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core26890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core26890 = (function (cells,vec__26887,fxs,p__26871,n,k,dimensions,inc,margins,f,meta26891){
this.cells = cells;
this.vec__26887 = vec__26887;
this.fxs = fxs;
this.p__26871 = p__26871;
this.n = n;
this.k = k;
this.dimensions = dimensions;
this.inc = inc;
this.margins = margins;
this.f = f;
this.meta26891 = meta26891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core26890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26892,meta26891__$1){
var self__ = this;
var _26892__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core26890(self__.cells,self__.vec__26887,self__.fxs,self__.p__26871,self__.n,self__.k,self__.dimensions,self__.inc,self__.margins,self__.f,meta26891__$1));
}));

(kixi.stats.core.t_kixi$stats$core26890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26892){
var self__ = this;
var _26892__$1 = this;
return self__.meta26891;
}));

(kixi.stats.core.t_kixi$stats$core26890.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core26890.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core26890.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core26890.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core26890.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core26890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"vec__26887","vec__26887",-205693658,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"p__26871","p__26871",823593296,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26891","meta26891",-1272033097,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core26890.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core26890.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core26890");

(kixi.stats.core.t_kixi$stats$core26890.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core26890");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core26890.
 */
kixi.stats.core.__GT_t_kixi$stats$core26890 = (function kixi$stats$core$__GT_t_kixi$stats$core26890(cells__$1,vec__26887__$1,fxs__$1,p__26871__$1,n__$1,k__$1,dimensions__$1,inc__$1,margins__$1,f__$1,meta26891){
return (new kixi.stats.core.t_kixi$stats$core26890(cells__$1,vec__26887__$1,fxs__$1,p__26871__$1,n__$1,k__$1,dimensions__$1,inc__$1,margins__$1,f__$1,meta26891));
});

}

return (new kixi.stats.core.t_kixi$stats$core26890(cells,vec__26887,fxs,p__26871,n,k,dimensions,inc,margins,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__27150__2 = (function (p__26870,x){
var vec__26872 = p__26870;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26875,fx){
var vec__26878 = p__26875;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26878,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__27150 = function(p__26870,x){
switch(arguments.length){
case 0:
return G__27150__0.call(this);
case 1:
return G__27150__1.call(this,p__26870);
case 2:
return G__27150__2.call(this,p__26870,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27150.cljs$core$IFn$_invoke$arity$0 = G__27150__0;
G__27150.cljs$core$IFn$_invoke$arity$1 = G__27150__1;
G__27150.cljs$core$IFn$_invoke$arity$2 = G__27150__2;
return G__27150;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq26868){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26868));
}));

/**
 * Calculates the count of inputs.
 */
kixi.stats.core.count = (function() {
var kixi$stats$core$count = null;
var kixi$stats$core$count__0 = (function (){
return (0);
});
var kixi$stats$core$count__1 = (function (n){
return n;
});
var kixi$stats$core$count__2 = (function (n,_){
return (n + (1));
});
kixi$stats$core$count = function(n,_){
switch(arguments.length){
case 0:
return kixi$stats$core$count__0.call(this);
case 1:
return kixi$stats$core$count__1.call(this,n);
case 2:
return kixi$stats$core$count__2.call(this,n,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$count.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$count__0;
kixi$stats$core$count.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$count__1;
kixi$stats$core$count.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$count__2;
return kixi$stats$core$count;
})()
;
/**
 * Calculates the arithmetic mean of numeric inputs.
 */
kixi.stats.core.arithmetic_mean = (function() {
var kixi$stats$core$arithmetic_mean = null;
var kixi$stats$core$arithmetic_mean__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,(0)], null);
});
var kixi$stats$core$arithmetic_mean__1 = (function (p__26894){
var vec__26898 = p__26894;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26898,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26898,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__26893,e){
var vec__26895 = p__26893;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26895,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26895,(1),null);
var acc = vec__26895;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__26893,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__26893);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__26893,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$arithmetic_mean.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$arithmetic_mean__0;
kixi$stats$core$arithmetic_mean.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$arithmetic_mean__1;
kixi$stats$core$arithmetic_mean.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$arithmetic_mean__2;
return kixi$stats$core$arithmetic_mean;
})()
;
/**
 * Alias for arithmetic-mean.
 */
kixi.stats.core.mean = kixi.stats.core.arithmetic_mean;
/**
 * Calculates the geometric mean of numeric inputs. Defined only for positive numbers.
 */
kixi.stats.core.geometric_mean = (function() {
var kixi$stats$core$geometric_mean = null;
var kixi$stats$core$geometric_mean__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
});
var kixi$stats$core$geometric_mean__1 = (function (p__26903){
var vec__26907 = p__26903;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(1),null);
if((c === (0))){
return null;
} else {
if((s === (0))){
return 0.0;
} else {
return kixi.stats.math.root(s,c);
}
}
});
var kixi$stats$core$geometric_mean__2 = (function (p__26902,e){
var vec__26904 = p__26902;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26904,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26904,(1),null);
var acc = vec__26904;
if((e == null)){
return acc;
} else {
if((e < (0))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s * e),(c + (1))], null);

}
}
});
kixi$stats$core$geometric_mean = function(p__26902,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__26902);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__26902,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$geometric_mean.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$geometric_mean__0;
kixi$stats$core$geometric_mean.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$geometric_mean__1;
kixi$stats$core$geometric_mean.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$geometric_mean__2;
return kixi$stats$core$geometric_mean;
})()
;
/**
 * Calculates the harmonic mean of numeric inputs.
 */
kixi.stats.core.harmonic_mean = (function() {
var kixi$stats$core$harmonic_mean = null;
var kixi$stats$core$harmonic_mean__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var kixi$stats$core$harmonic_mean__1 = (function (p__26911){
var vec__26915 = p__26911;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(1),null);
if((c === (0))){
return null;
} else {
if((s === (0))){
return 0.0;
} else {
return (c / s);
}
}
});
var kixi$stats$core$harmonic_mean__2 = (function (p__26910,e){
var vec__26912 = p__26910;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(1),null);
var acc = vec__26912;
if((e == null)){
return acc;
} else {
if((e === (0))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(c + (1))], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + ((1) / e)),(c + (1))], null);

}
}
});
kixi$stats$core$harmonic_mean = function(p__26910,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__26910);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__26910,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$harmonic_mean.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$harmonic_mean__0;
kixi$stats$core$harmonic_mean.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$harmonic_mean__1;
kixi$stats$core$harmonic_mean.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$harmonic_mean__2;
return kixi$stats$core$harmonic_mean;
})()
;
/**
 * Estimates an unbiased variance of numeric inputs.
 */
kixi.stats.core.variance_s = (function() {
var kixi$stats$core$variance_s = null;
var kixi$stats$core$variance_s__0 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.0,0.0], null);
});
var kixi$stats$core$variance_s__1 = (function (p__26919){
var vec__26923 = p__26919;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
if((c_SINGLEQUOTE_ > (0))){
return (ss / c_SINGLEQUOTE_);
} else {
return (0);
}
}
});
var kixi$stats$core$variance_s__2 = (function (p__26918,e){
var vec__26920 = p__26918;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26920,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26920,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26920,(2),null);
var acc = vec__26920;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__26918,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__26918);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__26918,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$variance_s.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$variance_s__0;
kixi$stats$core$variance_s.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$variance_s__1;
kixi$stats$core$variance_s.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$variance_s__2;
return kixi$stats$core$variance_s;
})()
;
/**
 * Alias for variance-s.
 */
kixi.stats.core.variance = kixi.stats.core.variance_s;
/**
 * Calculates the population variance of numeric inputs.
 */
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__26926){
var vec__26927 = p__26926;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927,(2),null);
if((c === (0))){
return null;
} else {
return (ss / c);
}
}));
/**
 * Estimates the sample standard deviation of numeric inputs.
 */
kixi.stats.core.standard_deviation_s = kixi.stats.core.post_complete(kixi.stats.core.variance_s,kixi.stats.core.somef(kixi.stats.math.sqrt));
/**
 * Alias for standard-deviation-s.
 */
kixi.stats.core.standard_deviation = kixi.stats.core.standard_deviation_s;
/**
 * Calculates the population standard deviation of numeric inputs.
 */
kixi.stats.core.standard_deviation_p = kixi.stats.core.post_complete(kixi.stats.core.variance_p,kixi.stats.core.somef(kixi.stats.math.sqrt));
/**
 * Calculates the standard error of sample means.
 */
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__26931){
var vec__26932 = p__26931;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26932,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26932,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26932,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
if((c_SINGLEQUOTE_ > (0))){
return kixi.stats.math.sqrt(((ss / c_SINGLEQUOTE_) / c));
} else {
return (0);
}
}
}));
/**
 * Alias for standard-error-s
 */
kixi.stats.core.standard_error = kixi.stats.core.standard_error_s;
/**
 * Estimates the sample skewness of numeric inputs.
 *   See https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance.
 */
kixi.stats.core.skewness_s = (function() {
var kixi$stats$core$skewness_s = null;
var kixi$stats$core$skewness_s__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var kixi$stats$core$skewness_s__1 = (function (p__26936){
var vec__26941 = p__26936;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__26935,e){
var vec__26937 = p__26935;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(3),null);
var acc = vec__26937;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var d = (e__$1 - m1);
var dc = (d / c_SINGLEQUOTE_);
var m1_SINGLEQUOTE_ = (m1 + dc);
var m2_SINGLEQUOTE_ = (m2 + (kixi.stats.math.sq(d) * (c / c_SINGLEQUOTE_)));
var m3_SINGLEQUOTE_ = ((m3 + (((kixi.stats.math.pow(d,(3)) * (c_SINGLEQUOTE_ - (1))) * (c_SINGLEQUOTE_ - (2))) / kixi.stats.math.sq(c_SINGLEQUOTE_))) + (((-3) * m2) * dc));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m1_SINGLEQUOTE_,m2_SINGLEQUOTE_,m3_SINGLEQUOTE_], null);
}
});
kixi$stats$core$skewness_s = function(p__26935,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__26935);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__26935,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$skewness_s.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$skewness_s__0;
kixi$stats$core$skewness_s.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$skewness_s__1;
kixi$stats$core$skewness_s.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$skewness_s__2;
return kixi$stats$core$skewness_s;
})()
;
/**
 * Alias for skewness-s.
 */
kixi.stats.core.skewness = kixi.stats.core.skewness_s;
/**
 * Calculates the population skewness of numeric inputs.
 *   See: http://www.real-statistics.com/descriptive-statistics/symmetry-skewness-kurtosis.
 */
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__26944){
var vec__26945 = p__26944;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26945,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26945,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26945,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26945,(3),null);
var d = kixi.stats.math.pow(m2,1.5);
if((d === (0))){
return null;
} else {
return ((kixi.stats.math.sqrt(c) * m3) / d);
}
}));
/**
 * Estimates the sample kurtosis of numeric inputs.
 *   See https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance
 *   and http://www.real-statistics.com/descriptive-statistics/symmetry-skewness-kurtosis.
 */
kixi.stats.core.kurtosis_s = (function() {
var kixi$stats$core$kurtosis_s = null;
var kixi$stats$core$kurtosis_s__0 = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0], null);
});
var kixi$stats$core$kurtosis_s__1 = (function (p__26949){
var vec__26957 = p__26949;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26957,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26957,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26957,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26957,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26957,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__26948,e){
var vec__26950 = p__26948;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26950,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26950,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26950,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26950,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26950,(4),null);
var acc = vec__26950;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var d = (e__$1 - m1);
var dc = (d / c_SINGLEQUOTE_);
var m1_SINGLEQUOTE_ = (m1 + dc);
var m2_SINGLEQUOTE_ = (m2 + (kixi.stats.math.sq(d) * (c / c_SINGLEQUOTE_)));
var m3_SINGLEQUOTE_ = ((m3 + (((kixi.stats.math.pow(d,(3)) * (c_SINGLEQUOTE_ - (1))) * (c_SINGLEQUOTE_ - (2))) / kixi.stats.math.sq(c_SINGLEQUOTE_))) + (((-3) * m2) * dc));
var m4_SINGLEQUOTE_ = (((m4 + (((kixi.stats.math.pow(d,(4)) * (c_SINGLEQUOTE_ - (1))) * ((kixi.stats.math.sq(c_SINGLEQUOTE_) + ((-3) * c_SINGLEQUOTE_)) + (3))) / kixi.stats.math.pow(c_SINGLEQUOTE_,(3)))) + (((6) * m2) * kixi.stats.math.sq(dc))) + (((-4) * m3) * dc));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m1_SINGLEQUOTE_,m2_SINGLEQUOTE_,m3_SINGLEQUOTE_,m4_SINGLEQUOTE_], null);
}
});
kixi$stats$core$kurtosis_s = function(p__26948,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__26948);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__26948,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$kurtosis_s.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$kurtosis_s__0;
kixi$stats$core$kurtosis_s.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$kurtosis_s__1;
kixi$stats$core$kurtosis_s.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$kurtosis_s__2;
return kixi$stats$core$kurtosis_s;
})()
;
/**
 * Alias for kurtosis-s.
 */
kixi.stats.core.kurtosis = kixi.stats.core.kurtosis_s;
/**
 * Calculates the population kurtosis of numeric inputs.
 *   See http://www.macroption.com/kurtosis-formula/
 */
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__26960){
var vec__26961 = p__26960;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26961,(4),null);
if((m2 === (0))){
return null;
} else {
return (((c * m4) / kixi.stats.math.sq(m2)) - (3));
}
}));
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, estimates the unbiased covariance of those functions over
 *   inputs.
 * 
 *   Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no
 *   inputs have both x and y, returns nil.
 */
kixi.stats.core.covariance_s = (function kixi$stats$core$covariance_s(fx,fy){
return (function() {
var G__27225 = null;
var G__27225__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__27225__1 = (function (p__26965){
var vec__26969 = p__26965;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(3),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
if((c_SINGLEQUOTE_ > (0))){
return (ss / c_SINGLEQUOTE_);
} else {
return (0);
}
}
});
var G__27225__2 = (function (p__26964,e){
var vec__26966 = p__26964;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(3),null);
var acc = vec__26966;
var x = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((x == null)) || ((y == null)))){
return acc;
} else {
var x__$1 = x;
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var mx_SINGLEQUOTE_ = (mx + ((x__$1 - mx) / c_SINGLEQUOTE_));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,(ss + ((x__$1 - mx_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__27225 = function(p__26964,e){
switch(arguments.length){
case 0:
return G__27225__0.call(this);
case 1:
return G__27225__1.call(this,p__26964);
case 2:
return G__27225__2.call(this,p__26964,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27225.cljs$core$IFn$_invoke$arity$0 = G__27225__0;
G__27225.cljs$core$IFn$_invoke$arity$1 = G__27225__1;
G__27225.cljs$core$IFn$_invoke$arity$2 = G__27225__2;
return G__27225;
})()
});
/**
 * Alias for covariance-s
 */
kixi.stats.core.covariance = kixi.stats.core.covariance_s;
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, estimates the population covariance of those functions over
 *   inputs.
 * 
 *   Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no
 *   inputs have both x and y, returns nil.
 */
kixi.stats.core.covariance_p = (function kixi$stats$core$covariance_p(fx,fy){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__26972){
var vec__26973 = p__26972;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973,(3),null);
if((c === (0))){
return null;
} else {
return (ss / c);
}
}));
});
/**
 * Given a map of key names to functions that extract values for those keys
 *   from an input, computes the covariance for each of the n^2 key pairs.
 *   For example:
 * 
 *    (covariance-matrix {:name-length #(.length (:name %))
 *                        :age         :age
 *                        :num-cats    (comp count :cats)})
 * 
 *   will, when reduced, return a map like:
 * 
 *    {[:name-length :age]      0.56
 *     [:name-length :num-cats] 0.95
 *     ...}
 */
kixi.stats.core.covariance_matrix = (function kixi$stats$core$covariance_matrix(kvs){
return redux.core.fuse_matrix(kixi.stats.core.covariance,kvs);
});
/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, estimates the unbiased linear correlation coefficient between fx and
 *   fy over inputs. Ignores any records where fx or fy are nil. If there are no
 *   records with values for fx and fy, the correlation is nil. See
 *   http://mathworld.wolfram.com/CorrelationCoefficient.html.
 */
kixi.stats.core.correlation = (function kixi$stats$core$correlation(fx,fy){
return (function() {
var G__27234 = null;
var G__27234__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__27234__1 = (function (p__26977){
var vec__26981 = p__26977;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__27234__2 = (function (p__26976,e){
var vec__26978 = p__26976;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(5),null);
var acc = vec__26978;
var x = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((x == null)) || ((y == null)))){
return acc;
} else {
var x__$1 = x;
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var mx_SINGLEQUOTE_ = (mx + ((x__$1 - mx) / c_SINGLEQUOTE_));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,(ssx + ((x__$1 - mx_SINGLEQUOTE_) * (x__$1 - mx))),(ssy + ((y__$1 - my_SINGLEQUOTE_) * (y__$1 - my))),(ssxy + ((x__$1 - mx_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__27234 = function(p__26976,e){
switch(arguments.length){
case 0:
return G__27234__0.call(this);
case 1:
return G__27234__1.call(this,p__26976);
case 2:
return G__27234__2.call(this,p__26976,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27234.cljs$core$IFn$_invoke$arity$0 = G__27234__0;
G__27234.cljs$core$IFn$_invoke$arity$1 = G__27234__1;
G__27234.cljs$core$IFn$_invoke$arity$2 = G__27234__2;
return G__27234;
})()
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, estimates
 *   the coefficient of determination R^2.
 *   This is the fraction of variance in y explained by the model.
 */
kixi.stats.core.r_squared = (function kixi$stats$core$r_squared(fy_hat,fy){
return (function() {
var G__27238 = null;
var G__27238__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__27238__1 = (function (p__26985){
var vec__26989 = p__26985;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__27238__2 = (function (p__26984,e){
var vec__26986 = p__26984;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26986,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26986,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26986,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26986,(3),null);
var acc = vec__26986;
var y_hat = (fy_hat.cljs$core$IFn$_invoke$arity$1 ? fy_hat.cljs$core$IFn$_invoke$arity$1(e) : fy_hat.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((y_hat == null)) || ((y == null)))){
return acc;
} else {
var r = (y - y_hat);
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,my_SINGLEQUOTE_,(ssr + (r * r)),(ssy + ((y__$1 - my_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__27238 = function(p__26984,e){
switch(arguments.length){
case 0:
return G__27238__0.call(this);
case 1:
return G__27238__1.call(this,p__26984);
case 2:
return G__27238__2.call(this,p__26984,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27238.cljs$core$IFn$_invoke$arity$0 = G__27238__0;
G__27238.cljs$core$IFn$_invoke$arity$1 = G__27238__1;
G__27238.cljs$core$IFn$_invoke$arity$2 = G__27238__2;
return G__27238;
})()
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, and a constant k
 *   equal to the number of terms in the model, estimates the adjusted
 *   coefficient of determination R^2 using Wherry's Formula-1.
 *   This is the fraction of variance in y explained by the model,
 *   adjusted for the number of terms in the model.
 *   https://stats.stackexchange.com/questions/48703/what-is-the-adjusted-r-squared-formula-in-lm-in-r-and-how-should-it-be-interpret
 */
kixi.stats.core.adjusted_r_squared = (function kixi$stats$core$adjusted_r_squared(fy_hat,fy,k){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__26992){
var vec__26993 = p__26992;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26993,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26993,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26993,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26993,(3),null);
if((((ssy > (0))) && ((((c - k) - (1)) > (0))))){
return ((1) - (((ssr / ssy) * (c - (1))) / ((c - k) - (1))));
} else {
return null;
}
}));
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, calculates
 *   the mean squared error of the estimate.
 */
kixi.stats.core.mse = (function kixi$stats$core$mse(fy_hat,fy){
return (function() {
var G__27239 = null;
var G__27239__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__27239__1 = (function (p__26997){
var vec__27001 = p__26997;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27001,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27001,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__27239__2 = (function (p__26996,e){
var vec__26998 = p__26996;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,(1),null);
var acc = vec__26998;
var y_hat = (fy_hat.cljs$core$IFn$_invoke$arity$1 ? fy_hat.cljs$core$IFn$_invoke$arity$1(e) : fy_hat.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((y_hat == null)) || ((y == null)))){
return acc;
} else {
var se = kixi.stats.math.sq((y - y_hat));
var c_SINGLEQUOTE_ = (c + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,(mse + ((se - mse) / c_SINGLEQUOTE_))], null);
}
});
G__27239 = function(p__26996,e){
switch(arguments.length){
case 0:
return G__27239__0.call(this);
case 1:
return G__27239__1.call(this,p__26996);
case 2:
return G__27239__2.call(this,p__26996,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27239.cljs$core$IFn$_invoke$arity$0 = G__27239__0;
G__27239.cljs$core$IFn$_invoke$arity$1 = G__27239__1;
G__27239.cljs$core$IFn$_invoke$arity$2 = G__27239__2;
return G__27239;
})()
});
/**
 * Given two functions: (fŷ input) and (fy input), returning
 *   the predicted and actual values of y respectively, calculates
 *   the root mean squared error of the estimate.
 */
kixi.stats.core.rmse = (function kixi$stats$core$rmse(fy_hat,fy){
return kixi.stats.core.post_complete(kixi.stats.core.mse(fy_hat,fy),kixi.stats.core.somef(kixi.stats.math.sqrt));
});
/**
 * Given a map of key names to functions that extract values for those keys
 *   from an input, computes the correlation for each of the n^2 key pairs.
 *   For example:
 * 
 *    (correlation-matrix {:name-length #(.length (:name %))
 *                         :age         :age
 *                         :num-cats    (comp count :cats)})
 * 
 *   will, when reduced, return a map like:
 * 
 *    {[:name-length :age]      0.56
 *     [:name-length :num-cats] 0.95
 *     ...}
 */
kixi.stats.core.correlation_matrix = (function kixi$stats$core$correlation_matrix(kvs){
return redux.core.fuse_matrix(kixi.stats.core.correlation,kvs);
});
/**
 * Cramer's Phi is the intercorrelation of two discrete variables and may be used with variables having two or more levels. It gives a value between 0 and +1 (inclusive).
 *   Given two functions: (fx input) and (fy input), each of which returns a the relevant discrete value.
 */
kixi.stats.core.cramers_v = (function kixi$stats$core$cramers_v(fx,fy){
return (function() {
var G__27240 = null;
var G__27240__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__27240__1 = (function (p__27005){
var vec__27009 = p__27005;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(3),null);
var r = cljs.core.count(f1);
var r_tilde = (((n > (1)))?(r - (kixi.stats.math.sq((r - (1))) / (n - (1)))):null);
var k = cljs.core.count(f2);
var k_tilde = (((n > (1)))?(k - (kixi.stats.math.sq((k - (1))) / (n - (1)))):null);
var chi_squared = cljs.core.reduce_kv((function (acc,k__$1,v){
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(f1,cljs.core.first(k__$1));
var n2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(f2,cljs.core.last(k__$1));
var n12 = v;
return (acc + (kixi.stats.math.sq((n12 - ((n1 * n2) / n))) / ((n1 * n2) / n)));
}),(0),f12);
if(cljs.core.truth_((function (){var and__4115__auto__ = r_tilde;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = k_tilde;
if(cljs.core.truth_(and__4115__auto____$1)){
return (((r_tilde > (1))) && ((k_tilde > (1))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return kixi.stats.math.sqrt(((chi_squared / n) / (function (){var x__4217__auto__ = (r_tilde - (1));
var y__4218__auto__ = (k_tilde - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()));
} else {
return null;
}
});
var G__27240__2 = (function (p__27004,row){
var vec__27006 = p__27004;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(3),null);
var k1 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(row) : fx.call(null,row));
var k2 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(row) : fy.call(null,row));
var k12 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null);
var increment_count = (function (m,k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
var f1_SINGLEQUOTE_ = increment_count(f1,k1);
var f2_SINGLEQUOTE_ = increment_count(f2,k2);
var f12_SINGLEQUOTE_ = increment_count(f12,k12);
var n_SINGLEQUOTE_ = (n + (1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f1_SINGLEQUOTE_,f2_SINGLEQUOTE_,f12_SINGLEQUOTE_,n_SINGLEQUOTE_], null);
});
G__27240 = function(p__27004,row){
switch(arguments.length){
case 0:
return G__27240__0.call(this);
case 1:
return G__27240__1.call(this,p__27004);
case 2:
return G__27240__2.call(this,p__27004,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27240.cljs$core$IFn$_invoke$arity$0 = G__27240__0;
G__27240.cljs$core$IFn$_invoke$arity$1 = G__27240__1;
G__27240.cljs$core$IFn$_invoke$arity$2 = G__27240__2;
return G__27240;
})()
});
kixi.stats.core.sum_squares = kixi.stats.digest.sum_squares;
/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, calculates a least squares linear model between fx and fy over inputs.
 *   Returns a vector containing the coefficients: offset and slope.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the linear relationship is nil. See
 *   https://en.wikipedia.org/wiki/Simple_linear_regression.
 */
kixi.stats.core.simple_linear_regression = (function kixi$stats$core$simple_linear_regression(fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),kixi.stats.estimate.simple_linear_regression);
});
/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_standard_error = (function kixi$stats$core$regression_standard_error(var_args){
var G__27014 = arguments.length;
switch (G__27014) {
case 2:
return kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core27015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core27015 = (function (fx,fy,sum_squares,meta27016){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta27016 = meta27016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core27015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27017,meta27016__$1){
var self__ = this;
var _27017__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core27015(self__.fx,self__.fy,self__.sum_squares,meta27016__$1));
}));

(kixi.stats.core.t_kixi$stats$core27015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27017){
var self__ = this;
var _27017__$1 = this;
return self__.meta27016;
}));

(kixi.stats.core.t_kixi$stats$core27015.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core27015.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core27015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta27016","meta27016",1643687080,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core27015.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core27015.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core27015");

(kixi.stats.core.t_kixi$stats$core27015.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core27015");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core27015.
 */
kixi.stats.core.__GT_t_kixi$stats$core27015 = (function kixi$stats$core$__GT_t_kixi$stats$core27015(fx__$1,fy__$1,sum_squares__$1,meta27016){
return (new kixi.stats.core.t_kixi$stats$core27015(fx__$1,fy__$1,sum_squares__$1,meta27016));
});

}

return (new kixi.stats.core.t_kixi$stats$core27015(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__27012_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__27012_SHARP_,x);
}));
}));

(kixi.stats.core.regression_standard_error.cljs$lang$maxFixedArity = 3);

/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_confidence_interval = (function kixi$stats$core$regression_confidence_interval(var_args){
var G__27020 = arguments.length;
switch (G__27020) {
case 2:
return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core27021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core27021 = (function (fx,fy,sum_squares,meta27022){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta27022 = meta27022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core27021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27023,meta27022__$1){
var self__ = this;
var _27023__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core27021(self__.fx,self__.fy,self__.sum_squares,meta27022__$1));
}));

(kixi.stats.core.t_kixi$stats$core27021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27023){
var self__ = this;
var _27023__$1 = this;
return self__.meta27022;
}));

(kixi.stats.core.t_kixi$stats$core27021.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core27021.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core27021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta27022","meta27022",-1165465141,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core27021.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core27021.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core27021");

(kixi.stats.core.t_kixi$stats$core27021.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core27021");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core27021.
 */
kixi.stats.core.__GT_t_kixi$stats$core27021 = (function kixi$stats$core$__GT_t_kixi$stats$core27021(fx__$1,fy__$1,sum_squares__$1,meta27022){
return (new kixi.stats.core.t_kixi$stats$core27021(fx__$1,fy__$1,sum_squares__$1,meta27022));
});

}

return (new kixi.stats.core.t_kixi$stats$core27021(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core27024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core27024 = (function (fx,fy,alpha,sum_squares,meta27025){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta27025 = meta27025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core27024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27026,meta27025__$1){
var self__ = this;
var _27026__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core27024(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta27025__$1));
}));

(kixi.stats.core.t_kixi$stats$core27024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27026){
var self__ = this;
var _27026__$1 = this;
return self__.meta27025;
}));

(kixi.stats.core.t_kixi$stats$core27024.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core27024.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core27024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta27025","meta27025",-396692054,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core27024.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core27024.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core27024");

(kixi.stats.core.t_kixi$stats$core27024.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core27024");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core27024.
 */
kixi.stats.core.__GT_t_kixi$stats$core27024 = (function kixi$stats$core$__GT_t_kixi$stats$core27024(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta27025){
return (new kixi.stats.core.t_kixi$stats$core27024(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta27025));
});

}

return (new kixi.stats.core.t_kixi$stats$core27024(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__27018_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__27018_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_prediction_standard_error = (function kixi$stats$core$regression_prediction_standard_error(var_args){
var G__27029 = arguments.length;
switch (G__27029) {
case 2:
return kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if(cljs.core.truth_(sum_squares)){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core27030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core27030 = (function (fx,fy,sum_squares,meta27031){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta27031 = meta27031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core27030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27032,meta27031__$1){
var self__ = this;
var _27032__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core27030(self__.fx,self__.fy,self__.sum_squares,meta27031__$1));
}));

(kixi.stats.core.t_kixi$stats$core27030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27032){
var self__ = this;
var _27032__$1 = this;
return self__.meta27031;
}));

(kixi.stats.core.t_kixi$stats$core27030.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core27030.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core27030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta27031","meta27031",653862118,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core27030.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core27030.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core27030");

(kixi.stats.core.t_kixi$stats$core27030.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core27030");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core27030.
 */
kixi.stats.core.__GT_t_kixi$stats$core27030 = (function kixi$stats$core$__GT_t_kixi$stats$core27030(fx__$1,fy__$1,sum_squares__$1,meta27031){
return (new kixi.stats.core.t_kixi$stats$core27030(fx__$1,fy__$1,sum_squares__$1,meta27031));
});

}

return (new kixi.stats.core.t_kixi$stats$core27030(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__27027_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__27027_SHARP_,x);
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$lang$maxFixedArity = 3);

/**
 * Given two functions: (fx input) and (fy input), each of which returns a
 *   number, and an x value, calculates the standard error of the least
 *   squares linear model of fx and fy over inputs.
 *   Ignores any records with fx or fy are nil. If there are no records with
 *   values for fx and fy, the standard error of the estimate is nil.
 */
kixi.stats.core.regression_prediction_confidence_interval = (function kixi$stats$core$regression_prediction_confidence_interval(var_args){
var G__27035 = arguments.length;
switch (G__27035) {
case 2:
return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$2 = (function (fx,fy){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core27036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core27036 = (function (fx,fy,sum_squares,meta27037){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta27037 = meta27037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core27036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27038,meta27037__$1){
var self__ = this;
var _27038__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core27036(self__.fx,self__.fy,self__.sum_squares,meta27037__$1));
}));

(kixi.stats.core.t_kixi$stats$core27036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27038){
var self__ = this;
var _27038__$1 = this;
return self__.meta27037;
}));

(kixi.stats.core.t_kixi$stats$core27036.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core27036.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core27036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta27037","meta27037",-1612193712,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core27036.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core27036.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core27036");

(kixi.stats.core.t_kixi$stats$core27036.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core27036");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core27036.
 */
kixi.stats.core.__GT_t_kixi$stats$core27036 = (function kixi$stats$core$__GT_t_kixi$stats$core27036(fx__$1,fy__$1,sum_squares__$1,meta27037){
return (new kixi.stats.core.t_kixi$stats$core27036(fx__$1,fy__$1,sum_squares__$1,meta27037));
});

}

return (new kixi.stats.core.t_kixi$stats$core27036(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core27039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core27039 = (function (fx,fy,alpha,sum_squares,meta27040){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta27040 = meta27040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core27039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27041,meta27040__$1){
var self__ = this;
var _27041__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core27039(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta27040__$1));
}));

(kixi.stats.core.t_kixi$stats$core27039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27041){
var self__ = this;
var _27041__$1 = this;
return self__.meta27040;
}));

(kixi.stats.core.t_kixi$stats$core27039.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core27039.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core27039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta27040","meta27040",1996721353,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core27039.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core27039.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core27039");

(kixi.stats.core.t_kixi$stats$core27039.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.core/t_kixi$stats$core27039");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core27039.
 */
kixi.stats.core.__GT_t_kixi$stats$core27039 = (function kixi$stats$core$__GT_t_kixi$stats$core27039(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta27040){
return (new kixi.stats.core.t_kixi$stats$core27039(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta27040));
});

}

return (new kixi.stats.core.t_kixi$stats$core27039(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__27033_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__27033_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27265 = arguments.length;
var i__4737__auto___27266 = (0);
while(true){
if((i__4737__auto___27266 < len__4736__auto___27265)){
args__4742__auto__.push((arguments[i__4737__auto___27266]));

var G__27267 = (i__4737__auto___27266 + (1));
i__4737__auto___27266 = G__27267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic = (function (fxs){
return kixi.stats.core.post_complete(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.cross_tabulate,fxs),kixi.stats.test.chi_squared_test);
}));

(kixi.stats.core.chi_squared_test.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq27042){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27042));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__27043){
var map__27044 = p__27043;
var map__27044__$1 = (((((!((map__27044 == null))))?(((((map__27044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27044):map__27044);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27044__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27044__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__27046){
var vec__27047 = p__27046;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__27050){
var vec__27051 = p__27050;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27051,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27051,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27051,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
var var$ = (((c_SINGLEQUOTE_ > (0)))?(ss / c_SINGLEQUOTE_):(0));
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt(var$)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),m,new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
}
});
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, performs the t test of mean significance of those functions over
 *   inputs.
 *   Ignores only inputs where both `(fx input)` and `(fy input)` are nil.
 */
kixi.stats.core.t_test = (function kixi$stats$core$t_test(fx,fy){
return (function() {
var G__27268 = null;
var G__27268__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__27268__1 = (function (p__27055){
var vec__27067 = p__27055;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27067,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27067,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27067,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27067,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27067,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27067,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__27268__2 = (function (p__27054,e){
var vec__27056 = p__27054;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056,(5),null);
var acc = vec__27056;
var x = (function (){var G__27059 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__27059 == null)){
return null;
} else {
return G__27059;
}
})();
var y = (function (){var G__27060 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__27060 == null)){
return null;
} else {
return G__27060;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__27061 = cx;
if(cljs.core.truth_(x)){
return (G__27061 + (1));
} else {
return G__27061;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__27062 = cy;
if(cljs.core.truth_(y)){
return (G__27062 + (1));
} else {
return G__27062;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__27063 = mx;
if(cljs.core.truth_(x)){
return (G__27063 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__27063;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__27064 = my;
if(cljs.core.truth_(y)){
return (G__27064 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__27064;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__27065 = ssx;
if(cljs.core.truth_(x)){
return (G__27065 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__27065;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__27066 = ssy;
if(cljs.core.truth_(y)){
return (G__27066 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__27066;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__27268 = function(p__27054,e){
switch(arguments.length){
case 0:
return G__27268__0.call(this);
case 1:
return G__27268__1.call(this,p__27054);
case 2:
return G__27268__2.call(this,p__27054,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27268.cljs$core$IFn$_invoke$arity$0 = G__27268__0;
G__27268.cljs$core$IFn$_invoke$arity$1 = G__27268__1;
G__27268.cljs$core$IFn$_invoke$arity$2 = G__27268__2;
return G__27268;
})()
});
/**
 * Performs a simple z test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__27070){
var map__27071 = p__27070;
var map__27071__$1 = (((((!((map__27071 == null))))?(((((map__27071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27071):map__27071);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27071__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27071__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__27073){
var vec__27074 = p__27073;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__27077){
var vec__27078 = p__27077;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27078,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27078,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27078,(2),null);
if((c === (0))){
return null;
} else {
var c_SINGLEQUOTE_ = (c - (1));
var var$ = (((c_SINGLEQUOTE_ > (0)))?(ss / c_SINGLEQUOTE_):(0));
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt(var$)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),m,new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
}
});
/**
 * Given two functions of an input `(fx input)` and `(fy input)`, each of which
 *   returns a number, performs the z-test of mean significance of those functions over
 *   inputs.
 * 
 *   Ignores only inputs where both `(fx input)` and `(fy input)` are nil.
 */
kixi.stats.core.z_test = (function kixi$stats$core$z_test(fx,fy){
return (function() {
var G__27269 = null;
var G__27269__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__27269__1 = (function (p__27082){
var vec__27094 = p__27082;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__27269__2 = (function (p__27081,e){
var vec__27083 = p__27081;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(5),null);
var acc = vec__27083;
var x = (function (){var G__27086 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__27086 == null)){
return null;
} else {
return G__27086;
}
})();
var y = (function (){var G__27087 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__27087 == null)){
return null;
} else {
return G__27087;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__27088 = cx;
if(cljs.core.truth_(x)){
return (G__27088 + (1));
} else {
return G__27088;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__27089 = cy;
if(cljs.core.truth_(y)){
return (G__27089 + (1));
} else {
return G__27089;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__27090 = mx;
if(cljs.core.truth_(x)){
return (G__27090 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__27090;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__27091 = my;
if(cljs.core.truth_(y)){
return (G__27091 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__27091;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__27092 = ssx;
if(cljs.core.truth_(x)){
return (G__27092 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__27092;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__27093 = ssy;
if(cljs.core.truth_(y)){
return (G__27093 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__27093;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__27269 = function(p__27081,e){
switch(arguments.length){
case 0:
return G__27269__0.call(this);
case 1:
return G__27269__1.call(this,p__27081);
case 2:
return G__27269__2.call(this,p__27081,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27269.cljs$core$IFn$_invoke$arity$0 = G__27269__0;
G__27269.cljs$core$IFn$_invoke$arity$1 = G__27269__1;
G__27269.cljs$core$IFn$_invoke$arity$2 = G__27269__2;
return G__27269;
})()
});
/**
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__27270 = null;
var G__27270__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__27270__1 = (function (p__27098){
var vec__27103 = p__27098;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__27270__2 = (function (p__27097,e){
var vec__27099 = p__27097;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__27102 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__27102 + (1));
} else {
return G__27102;
}
})(),(d + (1))],null));
});
G__27270 = function(p__27097,e){
switch(arguments.length){
case 0:
return G__27270__0.call(this);
case 1:
return G__27270__1.call(this,p__27097);
case 2:
return G__27270__2.call(this,p__27097,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27270.cljs$core$IFn$_invoke$arity$0 = G__27270__0;
G__27270.cljs$core$IFn$_invoke$arity$1 = G__27270__1;
G__27270.cljs$core$IFn$_invoke$arity$2 = G__27270__2;
return G__27270;
})()
});
/**
 * Alias for proportion
 */
kixi.stats.core.share = kixi.stats.core.proportion;
/**
 * Like clojure.core/min, but transducer and nil-friendly.
 */
kixi.stats.core.min = (function() {
var kixi$stats$core$min = null;
var kixi$stats$core$min__0 = (function (){
return kixi.stats.math.infinity;
});
var kixi$stats$core$min__1 = (function (acc){
if(kixi.stats.math.infinite_QMARK_(acc)){
return null;
} else {
return acc;
}
});
var kixi$stats$core$min__2 = (function (acc,e){
if((e == null)){
return acc;
} else {
var e__$1 = e;
var x__4217__auto__ = acc;
var y__4218__auto__ = e__$1;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
}
});
kixi$stats$core$min = function(acc,e){
switch(arguments.length){
case 0:
return kixi$stats$core$min__0.call(this);
case 1:
return kixi$stats$core$min__1.call(this,acc);
case 2:
return kixi$stats$core$min__2.call(this,acc,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$min.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$min__0;
kixi$stats$core$min.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$min__1;
kixi$stats$core$min.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$min__2;
return kixi$stats$core$min;
})()
;
/**
 * Like clojure.core/max, but transducer and nil-friendly.
 */
kixi.stats.core.max = (function() {
var kixi$stats$core$max = null;
var kixi$stats$core$max__0 = (function (){
return kixi.stats.math.negative_infinity;
});
var kixi$stats$core$max__1 = (function (acc){
if(kixi.stats.math.infinite_QMARK_(acc)){
return null;
} else {
return acc;
}
});
var kixi$stats$core$max__2 = (function (acc,e){
if((e == null)){
return acc;
} else {
var e__$1 = e;
var x__4214__auto__ = acc;
var y__4215__auto__ = e__$1;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}
});
kixi$stats$core$max = function(acc,e){
switch(arguments.length){
case 0:
return kixi$stats$core$max__0.call(this);
case 1:
return kixi$stats$core$max__1.call(this,acc);
case 2:
return kixi$stats$core$max__2.call(this,acc,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kixi$stats$core$max.cljs$core$IFn$_invoke$arity$0 = kixi$stats$core$max__0;
kixi$stats$core$max.cljs$core$IFn$_invoke$arity$1 = kixi$stats$core$max__1;
kixi$stats$core$max.cljs$core$IFn$_invoke$arity$2 = kixi$stats$core$max__2;
return kixi$stats$core$max;
})()
;

//# sourceMappingURL=kixi.stats.core.js.map
