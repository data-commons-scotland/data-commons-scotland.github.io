goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36993 = arguments.length;
var i__4772__auto___36994 = (0);
while(true){
if((i__4772__auto___36994 < len__4771__auto___36993)){
args__4777__auto__.push((arguments[i__4772__auto___36994]));

var G__36995 = (i__4772__auto___36994 + (1));
i__4772__auto___36994 = G__36995;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
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
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq36739){
var G__36740 = cljs.core.first(seq36739);
var seq36739__$1 = cljs.core.next(seq36739);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36740,seq36739__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__36996 = null;
var G__36996__0 = (function (){
return init;
});
var G__36996__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__36996__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__36996 = function(acc,x){
switch(arguments.length){
case 0:
return G__36996__0.call(this);
case 1:
return G__36996__1.call(this,acc);
case 2:
return G__36996__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36996.cljs$core$IFn$_invoke$arity$0 = G__36996__0;
G__36996.cljs$core$IFn$_invoke$arity$1 = G__36996__1;
G__36996.cljs$core$IFn$_invoke$arity$2 = G__36996__2;
return G__36996;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__36745_SHARP_){
var G__36747 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__36745_SHARP_) : rf.call(null,p1__36745_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36747) : f.call(null,G__36747));
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
var args__4777__auto__ = [];
var len__4771__auto___36997 = arguments.length;
var i__4772__auto___36998 = (0);
while(true){
if((i__4772__auto___36998 < len__4771__auto___36997)){
args__4777__auto__.push((arguments[i__4772__auto___36998]));

var G__36999 = (i__4772__auto___36998 + (1));
i__4772__auto___36998 = G__36999;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic = (function (fxs){
var f = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,fxs);
var k = cljs.core.count(fxs);
var inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
return (function() {
var G__37007 = null;
var G__37007__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__37007__1 = (function (p__36750){
var vec__36760 = p__36750;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36760,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36760,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36760,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core36763 = (function (cells,p__36750,fxs,n,k,dimensions,inc,margins,vec__36760,f,meta36764){
this.cells = cells;
this.p__36750 = p__36750;
this.fxs = fxs;
this.n = n;
this.k = k;
this.dimensions = dimensions;
this.inc = inc;
this.margins = margins;
this.vec__36760 = vec__36760;
this.f = f;
this.meta36764 = meta36764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36765,meta36764__$1){
var self__ = this;
var _36765__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36763(self__.cells,self__.p__36750,self__.fxs,self__.n,self__.k,self__.dimensions,self__.inc,self__.margins,self__.vec__36760,self__.f,meta36764__$1));
}));

(kixi.stats.core.t_kixi$stats$core36763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36765){
var self__ = this;
var _36765__$1 = this;
return self__.meta36764;
}));

(kixi.stats.core.t_kixi$stats$core36763.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36763.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core36763.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core36763.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core36763.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core36763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"p__36750","p__36750",-1639293720,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"vec__36760","vec__36760",-1352520387,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36764","meta36764",-824342184,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36763.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36763.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36763");

(kixi.stats.core.t_kixi$stats$core36763.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36763");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36763.
 */
kixi.stats.core.__GT_t_kixi$stats$core36763 = (function kixi$stats$core$__GT_t_kixi$stats$core36763(cells__$1,p__36750__$1,fxs__$1,n__$1,k__$1,dimensions__$1,inc__$1,margins__$1,vec__36760__$1,f__$1,meta36764){
return (new kixi.stats.core.t_kixi$stats$core36763(cells__$1,p__36750__$1,fxs__$1,n__$1,k__$1,dimensions__$1,inc__$1,margins__$1,vec__36760__$1,f__$1,meta36764));
});

}

return (new kixi.stats.core.t_kixi$stats$core36763(cells,p__36750,fxs,n,k,dimensions,inc,margins,vec__36760,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__37007__2 = (function (p__36749,x){
var vec__36751 = p__36749;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__36755,fx){
var vec__36757 = p__36755;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36757,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36757,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__37007 = function(p__36749,x){
switch(arguments.length){
case 0:
return G__37007__0.call(this);
case 1:
return G__37007__1.call(this,p__36749);
case 2:
return G__37007__2.call(this,p__36749,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37007.cljs$core$IFn$_invoke$arity$0 = G__37007__0;
G__37007.cljs$core$IFn$_invoke$arity$1 = G__37007__1;
G__37007.cljs$core$IFn$_invoke$arity$2 = G__37007__2;
return G__37007;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq36748){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36748));
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
var kixi$stats$core$arithmetic_mean__1 = (function (p__36775){
var vec__36779 = p__36775;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__36774,e){
var vec__36776 = p__36774;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36776,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36776,(1),null);
var acc = vec__36776;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__36774,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__36774);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__36774,e);
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
var kixi$stats$core$geometric_mean__1 = (function (p__36783){
var vec__36788 = p__36783;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36788,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36788,(1),null);
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
var kixi$stats$core$geometric_mean__2 = (function (p__36782,e){
var vec__36784 = p__36782;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36784,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36784,(1),null);
var acc = vec__36784;
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
kixi$stats$core$geometric_mean = function(p__36782,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__36782);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__36782,e);
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
var kixi$stats$core$harmonic_mean__1 = (function (p__36792){
var vec__36796 = p__36792;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36796,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36796,(1),null);
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
var kixi$stats$core$harmonic_mean__2 = (function (p__36791,e){
var vec__36793 = p__36791;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793,(1),null);
var acc = vec__36793;
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
kixi$stats$core$harmonic_mean = function(p__36791,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__36791);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__36791,e);
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
var kixi$stats$core$variance_s__1 = (function (p__36800){
var vec__36804 = p__36800;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36804,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36804,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36804,(2),null);
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
var kixi$stats$core$variance_s__2 = (function (p__36799,e){
var vec__36801 = p__36799;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36801,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36801,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36801,(2),null);
var acc = vec__36801;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__36799,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__36799);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__36799,e);
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
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__36809){
var vec__36810 = p__36809;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810,(2),null);
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
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__36813){
var vec__36814 = p__36813;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814,(2),null);
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
var kixi$stats$core$skewness_s__1 = (function (p__36819){
var vec__36826 = p__36819;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__36818,e){
var vec__36820 = p__36818;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(3),null);
var acc = vec__36820;
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
kixi$stats$core$skewness_s = function(p__36818,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__36818);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__36818,e);
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
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__36829){
var vec__36830 = p__36829;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36830,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36830,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36830,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36830,(3),null);
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
var kixi$stats$core$kurtosis_s__1 = (function (p__36834){
var vec__36838 = p__36834;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__36833,e){
var vec__36835 = p__36833;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(4),null);
var acc = vec__36835;
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
kixi$stats$core$kurtosis_s = function(p__36833,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__36833);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__36833,e);
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
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__36841){
var vec__36842 = p__36841;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(4),null);
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
var G__37079 = null;
var G__37079__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__37079__1 = (function (p__36846){
var vec__36850 = p__36846;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(3),null);
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
var G__37079__2 = (function (p__36845,e){
var vec__36847 = p__36845;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847,(3),null);
var acc = vec__36847;
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
G__37079 = function(p__36845,e){
switch(arguments.length){
case 0:
return G__37079__0.call(this);
case 1:
return G__37079__1.call(this,p__36845);
case 2:
return G__37079__2.call(this,p__36845,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37079.cljs$core$IFn$_invoke$arity$0 = G__37079__0;
G__37079.cljs$core$IFn$_invoke$arity$1 = G__37079__1;
G__37079.cljs$core$IFn$_invoke$arity$2 = G__37079__2;
return G__37079;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__36853){
var vec__36854 = p__36853;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36854,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36854,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36854,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36854,(3),null);
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
var G__37080 = null;
var G__37080__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__37080__1 = (function (p__36858){
var vec__36862 = p__36858;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36862,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36862,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36862,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36862,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36862,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36862,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__37080__2 = (function (p__36857,e){
var vec__36859 = p__36857;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(5),null);
var acc = vec__36859;
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
G__37080 = function(p__36857,e){
switch(arguments.length){
case 0:
return G__37080__0.call(this);
case 1:
return G__37080__1.call(this,p__36857);
case 2:
return G__37080__2.call(this,p__36857,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37080.cljs$core$IFn$_invoke$arity$0 = G__37080__0;
G__37080.cljs$core$IFn$_invoke$arity$1 = G__37080__1;
G__37080.cljs$core$IFn$_invoke$arity$2 = G__37080__2;
return G__37080;
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
var G__37081 = null;
var G__37081__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__37081__1 = (function (p__36866){
var vec__36870 = p__36866;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36870,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36870,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36870,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36870,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__37081__2 = (function (p__36865,e){
var vec__36867 = p__36865;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(3),null);
var acc = vec__36867;
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
G__37081 = function(p__36865,e){
switch(arguments.length){
case 0:
return G__37081__0.call(this);
case 1:
return G__37081__1.call(this,p__36865);
case 2:
return G__37081__2.call(this,p__36865,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37081.cljs$core$IFn$_invoke$arity$0 = G__37081__0;
G__37081.cljs$core$IFn$_invoke$arity$1 = G__37081__1;
G__37081.cljs$core$IFn$_invoke$arity$2 = G__37081__2;
return G__37081;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__36873){
var vec__36874 = p__36873;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(3),null);
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
var G__37082 = null;
var G__37082__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__37082__1 = (function (p__36878){
var vec__36882 = p__36878;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36882,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36882,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__37082__2 = (function (p__36877,e){
var vec__36879 = p__36877;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(1),null);
var acc = vec__36879;
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
G__37082 = function(p__36877,e){
switch(arguments.length){
case 0:
return G__37082__0.call(this);
case 1:
return G__37082__1.call(this,p__36877);
case 2:
return G__37082__2.call(this,p__36877,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37082.cljs$core$IFn$_invoke$arity$0 = G__37082__0;
G__37082.cljs$core$IFn$_invoke$arity$1 = G__37082__1;
G__37082.cljs$core$IFn$_invoke$arity$2 = G__37082__2;
return G__37082;
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
var G__37083 = null;
var G__37083__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__37083__1 = (function (p__36886){
var vec__36890 = p__36886;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(3),null);
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
if(cljs.core.truth_((function (){var and__4149__auto__ = r_tilde;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = k_tilde;
if(cljs.core.truth_(and__4149__auto____$1)){
return (((r_tilde > (1))) && ((k_tilde > (1))));
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return kixi.stats.math.sqrt(((chi_squared / n) / (function (){var x__4252__auto__ = (r_tilde - (1));
var y__4253__auto__ = (k_tilde - (1));
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})()));
} else {
return null;
}
});
var G__37083__2 = (function (p__36885,row){
var vec__36887 = p__36885;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887,(3),null);
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
G__37083 = function(p__36885,row){
switch(arguments.length){
case 0:
return G__37083__0.call(this);
case 1:
return G__37083__1.call(this,p__36885);
case 2:
return G__37083__2.call(this,p__36885,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37083.cljs$core$IFn$_invoke$arity$0 = G__37083__0;
G__37083.cljs$core$IFn$_invoke$arity$1 = G__37083__1;
G__37083.cljs$core$IFn$_invoke$arity$2 = G__37083__2;
return G__37083;
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
var G__36895 = arguments.length;
switch (G__36895) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core36896 = (function (fx,fy,sum_squares,meta36897){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta36897 = meta36897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36898,meta36897__$1){
var self__ = this;
var _36898__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36896(self__.fx,self__.fy,self__.sum_squares,meta36897__$1));
}));

(kixi.stats.core.t_kixi$stats$core36896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36898){
var self__ = this;
var _36898__$1 = this;
return self__.meta36897;
}));

(kixi.stats.core.t_kixi$stats$core36896.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36896.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core36896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta36897","meta36897",1999361793,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36896.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36896.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36896");

(kixi.stats.core.t_kixi$stats$core36896.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36896");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36896.
 */
kixi.stats.core.__GT_t_kixi$stats$core36896 = (function kixi$stats$core$__GT_t_kixi$stats$core36896(fx__$1,fy__$1,sum_squares__$1,meta36897){
return (new kixi.stats.core.t_kixi$stats$core36896(fx__$1,fy__$1,sum_squares__$1,meta36897));
});

}

return (new kixi.stats.core.t_kixi$stats$core36896(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__36893_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__36893_SHARP_,x);
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
var G__36901 = arguments.length;
switch (G__36901) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core36902 = (function (fx,fy,sum_squares,meta36903){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta36903 = meta36903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36904,meta36903__$1){
var self__ = this;
var _36904__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36902(self__.fx,self__.fy,self__.sum_squares,meta36903__$1));
}));

(kixi.stats.core.t_kixi$stats$core36902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36904){
var self__ = this;
var _36904__$1 = this;
return self__.meta36903;
}));

(kixi.stats.core.t_kixi$stats$core36902.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36902.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core36902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta36903","meta36903",642236333,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36902.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36902.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36902");

(kixi.stats.core.t_kixi$stats$core36902.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36902");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36902.
 */
kixi.stats.core.__GT_t_kixi$stats$core36902 = (function kixi$stats$core$__GT_t_kixi$stats$core36902(fx__$1,fy__$1,sum_squares__$1,meta36903){
return (new kixi.stats.core.t_kixi$stats$core36902(fx__$1,fy__$1,sum_squares__$1,meta36903));
});

}

return (new kixi.stats.core.t_kixi$stats$core36902(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core36905 = (function (fx,fy,alpha,sum_squares,meta36906){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta36906 = meta36906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36907,meta36906__$1){
var self__ = this;
var _36907__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36905(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta36906__$1));
}));

(kixi.stats.core.t_kixi$stats$core36905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36907){
var self__ = this;
var _36907__$1 = this;
return self__.meta36906;
}));

(kixi.stats.core.t_kixi$stats$core36905.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36905.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core36905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta36906","meta36906",-1642517591,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36905.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36905.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36905");

(kixi.stats.core.t_kixi$stats$core36905.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36905");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36905.
 */
kixi.stats.core.__GT_t_kixi$stats$core36905 = (function kixi$stats$core$__GT_t_kixi$stats$core36905(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta36906){
return (new kixi.stats.core.t_kixi$stats$core36905(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta36906));
});

}

return (new kixi.stats.core.t_kixi$stats$core36905(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__36899_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__36899_SHARP_,x,alpha);
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
var G__36910 = arguments.length;
switch (G__36910) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core36911 = (function (fx,fy,sum_squares,meta36912){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta36912 = meta36912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36913,meta36912__$1){
var self__ = this;
var _36913__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36911(self__.fx,self__.fy,self__.sum_squares,meta36912__$1));
}));

(kixi.stats.core.t_kixi$stats$core36911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36913){
var self__ = this;
var _36913__$1 = this;
return self__.meta36912;
}));

(kixi.stats.core.t_kixi$stats$core36911.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36911.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core36911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta36912","meta36912",-676745208,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36911.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36911.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36911");

(kixi.stats.core.t_kixi$stats$core36911.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36911");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36911.
 */
kixi.stats.core.__GT_t_kixi$stats$core36911 = (function kixi$stats$core$__GT_t_kixi$stats$core36911(fx__$1,fy__$1,sum_squares__$1,meta36912){
return (new kixi.stats.core.t_kixi$stats$core36911(fx__$1,fy__$1,sum_squares__$1,meta36912));
});

}

return (new kixi.stats.core.t_kixi$stats$core36911(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__36908_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__36908_SHARP_,x);
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
var G__36916 = arguments.length;
switch (G__36916) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core36917 = (function (fx,fy,sum_squares,meta36918){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta36918 = meta36918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36919,meta36918__$1){
var self__ = this;
var _36919__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36917(self__.fx,self__.fy,self__.sum_squares,meta36918__$1));
}));

(kixi.stats.core.t_kixi$stats$core36917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36919){
var self__ = this;
var _36919__$1 = this;
return self__.meta36918;
}));

(kixi.stats.core.t_kixi$stats$core36917.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36917.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core36917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta36918","meta36918",633488675,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36917.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36917.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36917");

(kixi.stats.core.t_kixi$stats$core36917.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36917");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36917.
 */
kixi.stats.core.__GT_t_kixi$stats$core36917 = (function kixi$stats$core$__GT_t_kixi$stats$core36917(fx__$1,fy__$1,sum_squares__$1,meta36918){
return (new kixi.stats.core.t_kixi$stats$core36917(fx__$1,fy__$1,sum_squares__$1,meta36918));
});

}

return (new kixi.stats.core.t_kixi$stats$core36917(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core36920 = (function (fx,fy,alpha,sum_squares,meta36921){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta36921 = meta36921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36922,meta36921__$1){
var self__ = this;
var _36922__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36920(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta36921__$1));
}));

(kixi.stats.core.t_kixi$stats$core36920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36922){
var self__ = this;
var _36922__$1 = this;
return self__.meta36921;
}));

(kixi.stats.core.t_kixi$stats$core36920.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36920.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core36920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta36921","meta36921",-1345591613,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36920.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36920.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36920");

(kixi.stats.core.t_kixi$stats$core36920.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36920");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36920.
 */
kixi.stats.core.__GT_t_kixi$stats$core36920 = (function kixi$stats$core$__GT_t_kixi$stats$core36920(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta36921){
return (new kixi.stats.core.t_kixi$stats$core36920(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta36921));
});

}

return (new kixi.stats.core.t_kixi$stats$core36920(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__36914_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__36914_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4777__auto__ = [];
var len__4771__auto___37101 = arguments.length;
var i__4772__auto___37102 = (0);
while(true){
if((i__4772__auto___37102 < len__4771__auto___37101)){
args__4777__auto__.push((arguments[i__4772__auto___37102]));

var G__37103 = (i__4772__auto___37102 + (1));
i__4772__auto___37102 = G__37103;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic = (function (fxs){
return kixi.stats.core.post_complete(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.cross_tabulate,fxs),kixi.stats.test.chi_squared_test);
}));

(kixi.stats.core.chi_squared_test.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq36923){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36923));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__36924){
var map__36925 = p__36924;
var map__36925__$1 = cljs.core.__destructure_map(map__36925);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__36926){
var vec__36927 = p__36926;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__36930){
var vec__36931 = p__36930;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931,(2),null);
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
var G__37112 = null;
var G__37112__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__37112__1 = (function (p__36935){
var vec__36947 = p__36935;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__37112__2 = (function (p__36934,e){
var vec__36936 = p__36934;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(5),null);
var acc = vec__36936;
var x = (function (){var G__36939 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__36939 == null)){
return null;
} else {
return G__36939;
}
})();
var y = (function (){var G__36940 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__36940 == null)){
return null;
} else {
return G__36940;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__36941 = cx;
if(cljs.core.truth_(x)){
return (G__36941 + (1));
} else {
return G__36941;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__36942 = cy;
if(cljs.core.truth_(y)){
return (G__36942 + (1));
} else {
return G__36942;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__36943 = mx;
if(cljs.core.truth_(x)){
return (G__36943 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__36943;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__36944 = my;
if(cljs.core.truth_(y)){
return (G__36944 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__36944;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__36945 = ssx;
if(cljs.core.truth_(x)){
return (G__36945 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__36945;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__36946 = ssy;
if(cljs.core.truth_(y)){
return (G__36946 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__36946;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__37112 = function(p__36934,e){
switch(arguments.length){
case 0:
return G__37112__0.call(this);
case 1:
return G__37112__1.call(this,p__36934);
case 2:
return G__37112__2.call(this,p__36934,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37112.cljs$core$IFn$_invoke$arity$0 = G__37112__0;
G__37112.cljs$core$IFn$_invoke$arity$1 = G__37112__1;
G__37112.cljs$core$IFn$_invoke$arity$2 = G__37112__2;
return G__37112;
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
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__36950){
var map__36951 = p__36950;
var map__36951__$1 = cljs.core.__destructure_map(map__36951);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__36952){
var vec__36953 = p__36952;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__36956){
var vec__36957 = p__36956;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957,(2),null);
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
var G__37123 = null;
var G__37123__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__37123__1 = (function (p__36961){
var vec__36973 = p__36961;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__37123__2 = (function (p__36960,e){
var vec__36962 = p__36960;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36962,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36962,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36962,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36962,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36962,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36962,(5),null);
var acc = vec__36962;
var x = (function (){var G__36965 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__36965 == null)){
return null;
} else {
return G__36965;
}
})();
var y = (function (){var G__36966 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__36966 == null)){
return null;
} else {
return G__36966;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__36967 = cx;
if(cljs.core.truth_(x)){
return (G__36967 + (1));
} else {
return G__36967;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__36968 = cy;
if(cljs.core.truth_(y)){
return (G__36968 + (1));
} else {
return G__36968;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__36969 = mx;
if(cljs.core.truth_(x)){
return (G__36969 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__36969;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__36970 = my;
if(cljs.core.truth_(y)){
return (G__36970 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__36970;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__36971 = ssx;
if(cljs.core.truth_(x)){
return (G__36971 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__36971;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__36972 = ssy;
if(cljs.core.truth_(y)){
return (G__36972 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__36972;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__37123 = function(p__36960,e){
switch(arguments.length){
case 0:
return G__37123__0.call(this);
case 1:
return G__37123__1.call(this,p__36960);
case 2:
return G__37123__2.call(this,p__36960,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37123.cljs$core$IFn$_invoke$arity$0 = G__37123__0;
G__37123.cljs$core$IFn$_invoke$arity$1 = G__37123__1;
G__37123.cljs$core$IFn$_invoke$arity$2 = G__37123__2;
return G__37123;
})()
});
/**
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__37126 = null;
var G__37126__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__37126__1 = (function (p__36977){
var vec__36982 = p__36977;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36982,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36982,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__37126__2 = (function (p__36976,e){
var vec__36978 = p__36976;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__36981 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__36981 + (1));
} else {
return G__36981;
}
})(),(d + (1))],null));
});
G__37126 = function(p__36976,e){
switch(arguments.length){
case 0:
return G__37126__0.call(this);
case 1:
return G__37126__1.call(this,p__36976);
case 2:
return G__37126__2.call(this,p__36976,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37126.cljs$core$IFn$_invoke$arity$0 = G__37126__0;
G__37126.cljs$core$IFn$_invoke$arity$1 = G__37126__1;
G__37126.cljs$core$IFn$_invoke$arity$2 = G__37126__2;
return G__37126;
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
var x__4252__auto__ = acc;
var y__4253__auto__ = e__$1;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
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
var x__4249__auto__ = acc;
var y__4250__auto__ = e__$1;
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
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
