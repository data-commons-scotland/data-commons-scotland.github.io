goog.provide('kixi.stats.core');
kixi.stats.core.somef = (function kixi$stats$core$somef(var_args){
var args__4777__auto__ = [];
var len__4771__auto___37315 = arguments.length;
var i__4772__auto___37316 = (0);
while(true){
if((i__4772__auto___37316 < len__4771__auto___37315)){
args__4777__auto__.push((arguments[i__4772__auto___37316]));

var G__37317 = (i__4772__auto___37316 + (1));
i__4772__auto___37316 = G__37317;
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
(kixi.stats.core.somef.cljs$lang$applyTo = (function (seq36909){
var G__36910 = cljs.core.first(seq36909);
var seq36909__$1 = cljs.core.next(seq36909);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36910,seq36909__$1);
}));

/**
 * Add 0-arity returning `init` to `f`.
 */
kixi.stats.core.monoid = (function kixi$stats$core$monoid(f,init){
return (function() {
var G__37321 = null;
var G__37321__0 = (function (){
return init;
});
var G__37321__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__37321__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__37321 = function(acc,x){
switch(arguments.length){
case 0:
return G__37321__0.call(this);
case 1:
return G__37321__1.call(this,acc);
case 2:
return G__37321__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37321.cljs$core$IFn$_invoke$arity$0 = G__37321__0;
G__37321.cljs$core$IFn$_invoke$arity$1 = G__37321__1;
G__37321.cljs$core$IFn$_invoke$arity$2 = G__37321__2;
return G__37321;
})()
});
kixi.stats.core.post_complete = (function kixi$stats$core$post_complete(rf,f){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(rf,(function (p1__36931_SHARP_){
var G__36933 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(p1__36931_SHARP_) : rf.call(null,p1__36931_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36933) : f.call(null,G__36933));
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
var len__4771__auto___37327 = arguments.length;
var i__4772__auto___37328 = (0);
while(true){
if((i__4772__auto___37328 < len__4771__auto___37327)){
args__4777__auto__.push((arguments[i__4772__auto___37328]));

var G__37329 = (i__4772__auto___37328 + (1));
i__4772__auto___37328 = G__37329;
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
var G__37330 = null;
var G__37330__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(k,cljs.core.PersistentArrayMap.EMPTY)),(0)],null));
});
var G__37330__1 = (function (p__36946){
var vec__36959 = p__36946;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(2),null);
var dimensions = (2);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core36965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PContingencyTable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core36965 = (function (cells,fxs,n,k,dimensions,p__36946,vec__36959,inc,margins,f,meta36966){
this.cells = cells;
this.fxs = fxs;
this.n = n;
this.k = k;
this.dimensions = dimensions;
this.p__36946 = p__36946;
this.vec__36959 = vec__36959;
this.inc = inc;
this.margins = margins;
this.f = f;
this.meta36966 = meta36966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core36965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36967,meta36966__$1){
var self__ = this;
var _36967__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core36965(self__.cells,self__.fxs,self__.n,self__.k,self__.dimensions,self__.p__36946,self__.vec__36959,self__.inc,self__.margins,self__.f,meta36966__$1));
}));

(kixi.stats.core.t_kixi$stats$core36965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36967){
var self__ = this;
var _36967__$1 = this;
return self__.meta36966;
}));

(kixi.stats.core.t_kixi$stats$core36965.prototype.kixi$stats$protocols$PContingencyTable$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core36965.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = (function (_,coordinates){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cells,coordinates,(0));
}));

(kixi.stats.core.t_kixi$stats$core36965.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.n;
}));

(kixi.stats.core.t_kixi$stats$core36965.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.margins;
}));

(kixi.stats.core.t_kixi$stats$core36965.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.margins);
}));

(kixi.stats.core.t_kixi$stats$core36965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"fxs","fxs",-749353879,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"dimensions","dimensions",1385713430,null),new cljs.core.Symbol(null,"p__36946","p__36946",901259319,null),new cljs.core.Symbol(null,"vec__36959","vec__36959",1717841945,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"margins","margins",804589980,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36966","meta36966",-1861608359,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core36965.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core36965.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core36965");

(kixi.stats.core.t_kixi$stats$core36965.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core36965");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core36965.
 */
kixi.stats.core.__GT_t_kixi$stats$core36965 = (function kixi$stats$core$__GT_t_kixi$stats$core36965(cells__$1,fxs__$1,n__$1,k__$1,dimensions__$1,p__36946__$1,vec__36959__$1,inc__$1,margins__$1,f__$1,meta36966){
return (new kixi.stats.core.t_kixi$stats$core36965(cells__$1,fxs__$1,n__$1,k__$1,dimensions__$1,p__36946__$1,vec__36959__$1,inc__$1,margins__$1,f__$1,meta36966));
});

}

return (new kixi.stats.core.t_kixi$stats$core36965(cells,fxs,n,k,dimensions,p__36946,vec__36959,inc,margins,f,cljs.core.PersistentArrayMap.EMPTY));
});
var G__37330__2 = (function (p__36945,x){
var vec__36950 = p__36945;
var cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(0),null);
var margins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(cells,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),inc),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__36955,fx){
var vec__36956 = p__36955;
var margins__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36956,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36956,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(margins__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(x) : fx.call(null,x))], null),inc),inc(i)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [margins,(0)], null),fxs)),inc(n)], null);
});
G__37330 = function(p__36945,x){
switch(arguments.length){
case 0:
return G__37330__0.call(this);
case 1:
return G__37330__1.call(this,p__36945);
case 2:
return G__37330__2.call(this,p__36945,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37330.cljs$core$IFn$_invoke$arity$0 = G__37330__0;
G__37330.cljs$core$IFn$_invoke$arity$1 = G__37330__1;
G__37330.cljs$core$IFn$_invoke$arity$2 = G__37330__2;
return G__37330;
})()
}));

(kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kixi.stats.core.cross_tabulate.cljs$lang$applyTo = (function (seq36943){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36943));
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
var kixi$stats$core$arithmetic_mean__1 = (function (p__36973){
var vec__36977 = p__36973;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(1),null);
if((c === (0))){
return null;
} else {
return (s / c);
}
});
var kixi$stats$core$arithmetic_mean__2 = (function (p__36972,e){
var vec__36974 = p__36972;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974,(1),null);
var acc = vec__36974;
if((e == null)){
return acc;
} else {
var e__$1 = e;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s + e__$1),(c + (1))], null);
}
});
kixi$stats$core$arithmetic_mean = function(p__36972,e){
switch(arguments.length){
case 0:
return kixi$stats$core$arithmetic_mean__0.call(this);
case 1:
return kixi$stats$core$arithmetic_mean__1.call(this,p__36972);
case 2:
return kixi$stats$core$arithmetic_mean__2.call(this,p__36972,e);
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
var kixi$stats$core$geometric_mean__1 = (function (p__36981){
var vec__36989 = p__36981;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36989,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36989,(1),null);
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
var kixi$stats$core$geometric_mean__2 = (function (p__36980,e){
var vec__36982 = p__36980;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36982,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36982,(1),null);
var acc = vec__36982;
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
kixi$stats$core$geometric_mean = function(p__36980,e){
switch(arguments.length){
case 0:
return kixi$stats$core$geometric_mean__0.call(this);
case 1:
return kixi$stats$core$geometric_mean__1.call(this,p__36980);
case 2:
return kixi$stats$core$geometric_mean__2.call(this,p__36980,e);
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
var kixi$stats$core$harmonic_mean__1 = (function (p__36993){
var vec__36997 = p__36993;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36997,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36997,(1),null);
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
var kixi$stats$core$harmonic_mean__2 = (function (p__36992,e){
var vec__36994 = p__36992;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(1),null);
var acc = vec__36994;
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
kixi$stats$core$harmonic_mean = function(p__36992,e){
switch(arguments.length){
case 0:
return kixi$stats$core$harmonic_mean__0.call(this);
case 1:
return kixi$stats$core$harmonic_mean__1.call(this,p__36992);
case 2:
return kixi$stats$core$harmonic_mean__2.call(this,p__36992,e);
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
var kixi$stats$core$variance_s__1 = (function (p__37003){
var vec__37014 = p__37003;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(2),null);
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
var kixi$stats$core$variance_s__2 = (function (p__37002,e){
var vec__37011 = p__37002;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011,(2),null);
var acc = vec__37011;
if((e == null)){
return acc;
} else {
var e__$1 = e;
var c_SINGLEQUOTE_ = (c + (1));
var m_SINGLEQUOTE_ = (m + ((e__$1 - m) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,m_SINGLEQUOTE_,(ss + ((e__$1 - m_SINGLEQUOTE_) * (e__$1 - m)))], null);
}
});
kixi$stats$core$variance_s = function(p__37002,e){
switch(arguments.length){
case 0:
return kixi$stats$core$variance_s__0.call(this);
case 1:
return kixi$stats$core$variance_s__1.call(this,p__37002);
case 2:
return kixi$stats$core$variance_s__2.call(this,p__37002,e);
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
kixi.stats.core.variance_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s,(function (p__37020){
var vec__37024 = p__37020;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(2),null);
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
kixi.stats.core.standard_error_s = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s,(function (p__37030){
var vec__37031 = p__37030;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(2),null);
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
var kixi$stats$core$skewness_s__1 = (function (p__37035){
var vec__37039 = p__37035;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37039,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37039,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37039,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37039,(3),null);
var d = (kixi.stats.math.pow(m2,1.5) * (c - (2)));
if((d === (0))){
return null;
} else {
return (((kixi.stats.math.sqrt((c - (1))) * m3) * c) / d);
}
});
var kixi$stats$core$skewness_s__2 = (function (p__37034,e){
var vec__37036 = p__37034;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(3),null);
var acc = vec__37036;
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
kixi$stats$core$skewness_s = function(p__37034,e){
switch(arguments.length){
case 0:
return kixi$stats$core$skewness_s__0.call(this);
case 1:
return kixi$stats$core$skewness_s__1.call(this,p__37034);
case 2:
return kixi$stats$core$skewness_s__2.call(this,p__37034,e);
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
kixi.stats.core.skewness_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s,(function (p__37044){
var vec__37045 = p__37044;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(3),null);
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
var kixi$stats$core$kurtosis_s__1 = (function (p__37051){
var vec__37056 = p__37051;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(4),null);
if((((m2 === (0))) || ((c < (4))))){
return null;
} else {
var v = (m2 / (c - (1)));
return ((((c * (c + (1))) * m4) / ((((c - (1)) * (c - (2))) * (c - (3))) * kixi.stats.math.sq(v))) - (((3) * kixi.stats.math.sq((c - (1)))) / ((c - (2)) * (c - (3)))));
}
});
var kixi$stats$core$kurtosis_s__2 = (function (p__37050,e){
var vec__37052 = p__37050;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(2),null);
var m3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(4),null);
var acc = vec__37052;
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
kixi$stats$core$kurtosis_s = function(p__37050,e){
switch(arguments.length){
case 0:
return kixi$stats$core$kurtosis_s__0.call(this);
case 1:
return kixi$stats$core$kurtosis_s__1.call(this,p__37050);
case 2:
return kixi$stats$core$kurtosis_s__2.call(this,p__37050,e);
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
kixi.stats.core.kurtosis_p = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s,(function (p__37059){
var vec__37060 = p__37059;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37060,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37060,(1),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37060,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37060,(3),null);
var m4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37060,(4),null);
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
var G__37378 = null;
var G__37378__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__37378__1 = (function (p__37065){
var vec__37069 = p__37065;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(3),null);
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
var G__37378__2 = (function (p__37064,e){
var vec__37066 = p__37064;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(3),null);
var acc = vec__37066;
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
G__37378 = function(p__37064,e){
switch(arguments.length){
case 0:
return G__37378__0.call(this);
case 1:
return G__37378__1.call(this,p__37064);
case 2:
return G__37378__2.call(this,p__37064,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37378.cljs$core$IFn$_invoke$arity$0 = G__37378__0;
G__37378.cljs$core$IFn$_invoke$arity$1 = G__37378__1;
G__37378.cljs$core$IFn$_invoke$arity$2 = G__37378__2;
return G__37378;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s(fx,fy),(function (p__37072){
var vec__37073 = p__37072;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(2),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(3),null);
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
var G__37379 = null;
var G__37379__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__37379__1 = (function (p__37077){
var vec__37081 = p__37077;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(5),null);
var d = kixi.stats.math.sqrt((ssx * ssy));
if((d === (0))){
return null;
} else {
return (ssxy / d);
}
});
var G__37379__2 = (function (p__37076,e){
var vec__37078 = p__37076;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(5),null);
var acc = vec__37078;
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
G__37379 = function(p__37076,e){
switch(arguments.length){
case 0:
return G__37379__0.call(this);
case 1:
return G__37379__1.call(this,p__37076);
case 2:
return G__37379__2.call(this,p__37076,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37379.cljs$core$IFn$_invoke$arity$0 = G__37379__0;
G__37379.cljs$core$IFn$_invoke$arity$1 = G__37379__1;
G__37379.cljs$core$IFn$_invoke$arity$2 = G__37379__2;
return G__37379;
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
var G__37382 = null;
var G__37382__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
});
var G__37382__1 = (function (p__37085){
var vec__37089 = p__37085;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089,(3),null);
if((((c === (0))) || ((ssy === (0))))){
return null;
} else {
return ((1) - (ssr / ssy));
}
});
var G__37382__2 = (function (p__37084,e){
var vec__37086 = p__37084;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37086,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37086,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37086,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37086,(3),null);
var acc = vec__37086;
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
G__37382 = function(p__37084,e){
switch(arguments.length){
case 0:
return G__37382__0.call(this);
case 1:
return G__37382__1.call(this,p__37084);
case 2:
return G__37382__2.call(this,p__37084,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37382.cljs$core$IFn$_invoke$arity$0 = G__37382__0;
G__37382.cljs$core$IFn$_invoke$arity$1 = G__37382__1;
G__37382.cljs$core$IFn$_invoke$arity$2 = G__37382__2;
return G__37382;
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
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared(fy_hat,fy),(function (p__37092){
var vec__37093 = p__37092;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37093,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37093,(1),null);
var ssr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37093,(2),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37093,(3),null);
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
var G__37384 = null;
var G__37384__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
});
var G__37384__1 = (function (p__37097){
var vec__37101 = p__37097;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37101,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37101,(1),null);
if((c > (0))){
return mse;
} else {
return null;
}
});
var G__37384__2 = (function (p__37096,e){
var vec__37098 = p__37096;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37098,(0),null);
var mse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37098,(1),null);
var acc = vec__37098;
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
G__37384 = function(p__37096,e){
switch(arguments.length){
case 0:
return G__37384__0.call(this);
case 1:
return G__37384__1.call(this,p__37096);
case 2:
return G__37384__2.call(this,p__37096,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37384.cljs$core$IFn$_invoke$arity$0 = G__37384__0;
G__37384.cljs$core$IFn$_invoke$arity$1 = G__37384__1;
G__37384.cljs$core$IFn$_invoke$arity$2 = G__37384__2;
return G__37384;
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
var G__37399 = null;
var G__37399__0 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0)], null);
});
var G__37399__1 = (function (p__37107){
var vec__37111 = p__37107;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(3),null);
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
var G__37399__2 = (function (p__37106,row){
var vec__37108 = p__37106;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(1),null);
var f12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(3),null);
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
G__37399 = function(p__37106,row){
switch(arguments.length){
case 0:
return G__37399__0.call(this);
case 1:
return G__37399__1.call(this,p__37106);
case 2:
return G__37399__2.call(this,p__37106,row);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37399.cljs$core$IFn$_invoke$arity$0 = G__37399__0;
G__37399.cljs$core$IFn$_invoke$arity$1 = G__37399__1;
G__37399.cljs$core$IFn$_invoke$arity$2 = G__37399__2;
return G__37399;
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
var G__37126 = arguments.length;
switch (G__37126) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core37130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core37130 = (function (fx,fy,sum_squares,meta37131){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta37131 = meta37131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core37130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37132,meta37131__$1){
var self__ = this;
var _37132__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core37130(self__.fx,self__.fy,self__.sum_squares,meta37131__$1));
}));

(kixi.stats.core.t_kixi$stats$core37130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37132){
var self__ = this;
var _37132__$1 = this;
return self__.meta37131;
}));

(kixi.stats.core.t_kixi$stats$core37130.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core37130.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core37130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta37131","meta37131",-715273559,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core37130.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core37130.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core37130");

(kixi.stats.core.t_kixi$stats$core37130.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core37130");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core37130.
 */
kixi.stats.core.__GT_t_kixi$stats$core37130 = (function kixi$stats$core$__GT_t_kixi$stats$core37130(fx__$1,fy__$1,sum_squares__$1,meta37131){
return (new kixi.stats.core.t_kixi$stats$core37130(fx__$1,fy__$1,sum_squares__$1,meta37131));
});

}

return (new kixi.stats.core.t_kixi$stats$core37130(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__37124_SHARP_){
return kixi.stats.estimate.regression_standard_error(p1__37124_SHARP_,x);
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
var G__37138 = arguments.length;
switch (G__37138) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core37141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core37141 = (function (fx,fy,sum_squares,meta37142){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta37142 = meta37142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core37141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37143,meta37142__$1){
var self__ = this;
var _37143__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core37141(self__.fx,self__.fy,self__.sum_squares,meta37142__$1));
}));

(kixi.stats.core.t_kixi$stats$core37141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37143){
var self__ = this;
var _37143__$1 = this;
return self__.meta37142;
}));

(kixi.stats.core.t_kixi$stats$core37141.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core37141.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core37141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta37142","meta37142",1897424930,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core37141.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core37141.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core37141");

(kixi.stats.core.t_kixi$stats$core37141.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core37141");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core37141.
 */
kixi.stats.core.__GT_t_kixi$stats$core37141 = (function kixi$stats$core$__GT_t_kixi$stats$core37141(fx__$1,fy__$1,sum_squares__$1,meta37142){
return (new kixi.stats.core.t_kixi$stats$core37141(fx__$1,fy__$1,sum_squares__$1,meta37142));
});

}

return (new kixi.stats.core.t_kixi$stats$core37141(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core37147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core37147 = (function (fx,fy,alpha,sum_squares,meta37148){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta37148 = meta37148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core37147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37149,meta37148__$1){
var self__ = this;
var _37149__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core37147(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta37148__$1));
}));

(kixi.stats.core.t_kixi$stats$core37147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37149){
var self__ = this;
var _37149__$1 = this;
return self__.meta37148;
}));

(kixi.stats.core.t_kixi$stats$core37147.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core37147.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_confidence_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core37147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta37148","meta37148",836982933,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core37147.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core37147.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core37147");

(kixi.stats.core.t_kixi$stats$core37147.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core37147");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core37147.
 */
kixi.stats.core.__GT_t_kixi$stats$core37147 = (function kixi$stats$core$__GT_t_kixi$stats$core37147(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta37148){
return (new kixi.stats.core.t_kixi$stats$core37147(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta37148));
});

}

return (new kixi.stats.core.t_kixi$stats$core37147(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__37135_SHARP_){
return kixi.stats.estimate.regression_confidence_interval(p1__37135_SHARP_,x,alpha);
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
var G__37200 = arguments.length;
switch (G__37200) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core37202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core37202 = (function (fx,fy,sum_squares,meta37203){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta37203 = meta37203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core37202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37204,meta37203__$1){
var self__ = this;
var _37204__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core37202(self__.fx,self__.fy,self__.sum_squares,meta37203__$1));
}));

(kixi.stats.core.t_kixi$stats$core37202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37204){
var self__ = this;
var _37204__$1 = this;
return self__.meta37203;
}));

(kixi.stats.core.t_kixi$stats$core37202.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core37202.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_standard_error(self__.sum_squares,x);
}));

(kixi.stats.core.t_kixi$stats$core37202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta37203","meta37203",736343787,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core37202.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core37202.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core37202");

(kixi.stats.core.t_kixi$stats$core37202.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core37202");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core37202.
 */
kixi.stats.core.__GT_t_kixi$stats$core37202 = (function kixi$stats$core$__GT_t_kixi$stats$core37202(fx__$1,fy__$1,sum_squares__$1,meta37203){
return (new kixi.stats.core.t_kixi$stats$core37202(fx__$1,fy__$1,sum_squares__$1,meta37203));
});

}

return (new kixi.stats.core.t_kixi$stats$core37202(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));
}));

(kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__37180_SHARP_){
return kixi.stats.estimate.regression_prediction_standard_error(p1__37180_SHARP_,x);
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
var G__37210 = arguments.length;
switch (G__37210) {
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
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core37214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {kixi.stats.protocols.PDependentWithSignificance}
*/
kixi.stats.core.t_kixi$stats$core37214 = (function (fx,fy,sum_squares,meta37215){
this.fx = fx;
this.fy = fy;
this.sum_squares = sum_squares;
this.meta37215 = meta37215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core37214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37216,meta37215__$1){
var self__ = this;
var _37216__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core37214(self__.fx,self__.fy,self__.sum_squares,meta37215__$1));
}));

(kixi.stats.core.t_kixi$stats$core37214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37216){
var self__ = this;
var _37216__$1 = this;
return self__.meta37215;
}));

(kixi.stats.core.t_kixi$stats$core37214.prototype.kixi$stats$protocols$PDependentWithSignificance$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core37214.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = (function (_,x,alpha){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,alpha);
}));

(kixi.stats.core.t_kixi$stats$core37214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta37215","meta37215",2021653244,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core37214.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core37214.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core37214");

(kixi.stats.core.t_kixi$stats$core37214.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core37214");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core37214.
 */
kixi.stats.core.__GT_t_kixi$stats$core37214 = (function kixi$stats$core$__GT_t_kixi$stats$core37214(fx__$1,fy__$1,sum_squares__$1,meta37215){
return (new kixi.stats.core.t_kixi$stats$core37214(fx__$1,fy__$1,sum_squares__$1,meta37215));
});

}

return (new kixi.stats.core.t_kixi$stats$core37214(fx,fy,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = (function (fx,fy,alpha){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (sum_squares){
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.core !== 'undefined') && (typeof kixi.stats.core.t_kixi$stats$core37217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.core.t_kixi$stats$core37217 = (function (fx,fy,alpha,sum_squares,meta37218){
this.fx = fx;
this.fy = fy;
this.alpha = alpha;
this.sum_squares = sum_squares;
this.meta37218 = meta37218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.core.t_kixi$stats$core37217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37219,meta37218__$1){
var self__ = this;
var _37219__$1 = this;
return (new kixi.stats.core.t_kixi$stats$core37217(self__.fx,self__.fy,self__.alpha,self__.sum_squares,meta37218__$1));
}));

(kixi.stats.core.t_kixi$stats$core37217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37219){
var self__ = this;
var _37219__$1 = this;
return self__.meta37218;
}));

(kixi.stats.core.t_kixi$stats$core37217.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.core.t_kixi$stats$core37217.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return kixi.stats.estimate.regression_prediction_interval(self__.sum_squares,x,self__.alpha);
}));

(kixi.stats.core.t_kixi$stats$core37217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fx","fx",402701955,null),new cljs.core.Symbol(null,"fy","fy",-2103646785,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"meta37218","meta37218",-1577928574,null)], null);
}));

(kixi.stats.core.t_kixi$stats$core37217.cljs$lang$type = true);

(kixi.stats.core.t_kixi$stats$core37217.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core37217");

(kixi.stats.core.t_kixi$stats$core37217.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.core/t_kixi$stats$core37217");
}));

/**
 * Positional factory function for kixi.stats.core/t_kixi$stats$core37217.
 */
kixi.stats.core.__GT_t_kixi$stats$core37217 = (function kixi$stats$core$__GT_t_kixi$stats$core37217(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta37218){
return (new kixi.stats.core.t_kixi$stats$core37217(fx__$1,fy__$1,alpha__$1,sum_squares__$1,meta37218));
});

}

return (new kixi.stats.core.t_kixi$stats$core37217(fx,fy,alpha,sum_squares,cljs.core.PersistentArrayMap.EMPTY));
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = (function (fx,fy,alpha,x){
return kixi.stats.core.post_complete((kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2(fx,fy) : kixi.stats.core.sum_squares.call(null,fx,fy)),(function (p1__37207_SHARP_){
return kixi.stats.estimate.regression_prediction_interval(p1__37207_SHARP_,x,alpha);
}));
}));

(kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of functions, each of which returns the categorical value
 *   (e.g. keyword or string) of a factor, performs a X^2 test of independence.
 */
kixi.stats.core.chi_squared_test = (function kixi$stats$core$chi_squared_test(var_args){
var args__4777__auto__ = [];
var len__4771__auto___37477 = arguments.length;
var i__4772__auto___37478 = (0);
while(true){
if((i__4772__auto___37478 < len__4771__auto___37477)){
args__4777__auto__.push((arguments[i__4772__auto___37478]));

var G__37479 = (i__4772__auto___37478 + (1));
i__4772__auto___37478 = G__37479;
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
(kixi.stats.core.chi_squared_test.cljs$lang$applyTo = (function (seq37223){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37223));
}));

/**
 * Performs a simple t test against a specified population mean
 *   and standard deviation. The standard deviation is optional,
 *   if not provided, a 'plug-in' test using the sample's sd
 *   will be performed instead.
 *   mu: the population mean
 *   sd: (optional) the population standard deviation
 */
kixi.stats.core.simple_t_test = (function kixi$stats$core$simple_t_test(p__37224){
var map__37225 = p__37224;
var map__37225__$1 = cljs.core.__destructure_map(map__37225);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__37229){
var vec__37230 = p__37229;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37230,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37230,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_t_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__37237){
var vec__37238 = p__37237;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(2),null);
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
var G__37501 = null;
var G__37501__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__37501__1 = (function (p__37244){
var vec__37256 = p__37244;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37256,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37256,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37256,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37256,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37256,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37256,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.t_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__37501__2 = (function (p__37243,e){
var vec__37245 = p__37243;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(5),null);
var acc = vec__37245;
var x = (function (){var G__37248 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__37248 == null)){
return null;
} else {
return G__37248;
}
})();
var y = (function (){var G__37249 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__37249 == null)){
return null;
} else {
return G__37249;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__37250 = cx;
if(cljs.core.truth_(x)){
return (G__37250 + (1));
} else {
return G__37250;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__37251 = cy;
if(cljs.core.truth_(y)){
return (G__37251 + (1));
} else {
return G__37251;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__37252 = mx;
if(cljs.core.truth_(x)){
return (G__37252 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__37252;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__37253 = my;
if(cljs.core.truth_(y)){
return (G__37253 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__37253;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__37254 = ssx;
if(cljs.core.truth_(x)){
return (G__37254 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__37254;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__37255 = ssy;
if(cljs.core.truth_(y)){
return (G__37255 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__37255;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__37501 = function(p__37243,e){
switch(arguments.length){
case 0:
return G__37501__0.call(this);
case 1:
return G__37501__1.call(this,p__37243);
case 2:
return G__37501__2.call(this,p__37243,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37501.cljs$core$IFn$_invoke$arity$0 = G__37501__0;
G__37501.cljs$core$IFn$_invoke$arity$1 = G__37501__1;
G__37501.cljs$core$IFn$_invoke$arity$2 = G__37501__2;
return G__37501;
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
kixi.stats.core.simple_z_test = (function kixi$stats$core$simple_z_test(p__37259){
var map__37260 = p__37259;
var map__37260__$1 = cljs.core.__destructure_map(map__37260);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37260__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37260__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
if(cljs.core.truth_(sd)){
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean,(function (p__37261){
var vec__37265 = p__37261;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(1),null);
if((c === (0))){
return null;
} else {
return kixi.stats.test.simple_z_test(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mu","mu",1146469241),mu,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mean","mean",-1359234715),(s / c),new cljs.core.Keyword(null,"n","n",562130025),c], null));
}
}));
} else {
return cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance,(function (p__37268){
var vec__37269 = p__37268;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37269,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37269,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37269,(2),null);
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
var G__37505 = null;
var G__37505__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__37505__1 = (function (p__37282){
var vec__37297 = p__37282;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297,(5),null);
var cx_SINGLEQUOTE_ = (cx - (1));
var cy_SINGLEQUOTE_ = (cy - (1));
if((((cx_SINGLEQUOTE_ > (0))) && ((cy_SINGLEQUOTE_ > (0))))){
return kixi.stats.test.z_test(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),mx,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssx / cx_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mean","mean",-1359234715),my,new cljs.core.Keyword(null,"sd","sd",-1707124456),kixi.stats.math.sqrt((ssy / cy_SINGLEQUOTE_)),new cljs.core.Keyword(null,"n","n",562130025),cy], null));
} else {
return null;
}
});
var G__37505__2 = (function (p__37281,e){
var vec__37283 = p__37281;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(1),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(2),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(3),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(4),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(5),null);
var acc = vec__37283;
var x = (function (){var G__37287 = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
if((G__37287 == null)){
return null;
} else {
return G__37287;
}
})();
var y = (function (){var G__37288 = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((G__37288 == null)){
return null;
} else {
return G__37288;
}
})();
if((((x == null)) && ((y == null)))){
return acc;
} else {
var cx_SINGLEQUOTE_ = (function (){var G__37289 = cx;
if(cljs.core.truth_(x)){
return (G__37289 + (1));
} else {
return G__37289;
}
})();
var cy_SINGLEQUOTE_ = (function (){var G__37292 = cy;
if(cljs.core.truth_(y)){
return (G__37292 + (1));
} else {
return G__37292;
}
})();
var mx_SINGLEQUOTE_ = (function (){var G__37293 = mx;
if(cljs.core.truth_(x)){
return (G__37293 + ((x - mx) / cx_SINGLEQUOTE_));
} else {
return G__37293;
}
})();
var my_SINGLEQUOTE_ = (function (){var G__37294 = my;
if(cljs.core.truth_(y)){
return (G__37294 + ((y - my) / cy_SINGLEQUOTE_));
} else {
return G__37294;
}
})();
var ssx_SINGLEQUOTE_ = (function (){var G__37295 = ssx;
if(cljs.core.truth_(x)){
return (G__37295 + ((x - mx_SINGLEQUOTE_) * (x - mx)));
} else {
return G__37295;
}
})();
var ssy_SINGLEQUOTE_ = (function (){var G__37296 = ssy;
if(cljs.core.truth_(y)){
return (G__37296 + ((y - my_SINGLEQUOTE_) * (y - my)));
} else {
return G__37296;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx_SINGLEQUOTE_,cy_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,ssx_SINGLEQUOTE_,ssy_SINGLEQUOTE_], null);
}
});
G__37505 = function(p__37281,e){
switch(arguments.length){
case 0:
return G__37505__0.call(this);
case 1:
return G__37505__1.call(this,p__37281);
case 2:
return G__37505__2.call(this,p__37281,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37505.cljs$core$IFn$_invoke$arity$0 = G__37505__0;
G__37505.cljs$core$IFn$_invoke$arity$1 = G__37505__1;
G__37505.cljs$core$IFn$_invoke$arity$2 = G__37505__2;
return G__37505;
})()
});
/**
 * Calculate the proportion of inputs for which `pred` returns true.
 */
kixi.stats.core.proportion = (function kixi$stats$core$proportion(pred){
return (function() {
var G__37517 = null;
var G__37517__0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});
var G__37517__1 = (function (p__37301){
var vec__37306 = p__37301;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(1),null);
if((d > (0))){
return (n / d);
} else {
return null;
}
});
var G__37517__2 = (function (p__37300,e){
var vec__37302 = p__37300;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__37305 = n;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(e) : pred.call(null,e)))){
return (G__37305 + (1));
} else {
return G__37305;
}
})(),(d + (1))],null));
});
G__37517 = function(p__37300,e){
switch(arguments.length){
case 0:
return G__37517__0.call(this);
case 1:
return G__37517__1.call(this,p__37300);
case 2:
return G__37517__2.call(this,p__37300,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37517.cljs$core$IFn$_invoke$arity$0 = G__37517__0;
G__37517.cljs$core$IFn$_invoke$arity$1 = G__37517__1;
G__37517.cljs$core$IFn$_invoke$arity$2 = G__37517__2;
return G__37517;
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
