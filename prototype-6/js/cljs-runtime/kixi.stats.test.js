goog.provide('kixi.stats.test');
kixi.stats.test.p_value = kixi.stats.protocols.p_value;
kixi.stats.test.significant_QMARK_ = kixi.stats.protocols.significant_QMARK_;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {kixi.stats.protocols.PTestResult}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
kixi.stats.test.TestResult = (function (statistic,distribution,h1,__meta,__extmap,__hash){
this.statistic = statistic;
this.distribution = distribution;
this.h1 = h1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$p_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (kixi.stats.test.p_value.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.test.p_value.cljs$core$IFn$_invoke$arity$2(this$__$1,self__.h1) : kixi.stats.test.p_value.call(null,this$__$1,self__.h1));
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$p_value$arity$2 = (function (this$,alternate){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = self__.statistic;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = self__.distribution;
if(cljs.core.truth_(and__4149__auto____$1)){
return alternate;
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
var G__36531 = alternate;
var G__36531__$1 = (((G__36531 instanceof cljs.core.Keyword))?G__36531.fqn:null);
switch (G__36531__$1) {
case "<>":
return kixi.stats.math.clamp(((2) * (function (){var G__36532 = self__.distribution;
var G__36533 = (- kixi.stats.math.abs(self__.statistic));
return (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(G__36532,G__36533) : kixi.stats.distribution.cdf.call(null,G__36532,G__36533));
})()),0.0,1.0);

break;
case "<":
return (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(self__.distribution,self__.statistic) : kixi.stats.distribution.cdf.call(null,self__.distribution,self__.statistic));

break;
case ">":
return ((1) - (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(self__.distribution,self__.statistic) : kixi.stats.distribution.cdf.call(null,self__.distribution,self__.statistic)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36531__$1)].join('')));

}
} else {
return null;
}
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2 = (function (this$,alpha){
var self__ = this;
var this$__$1 = this;
var G__36534 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,alpha,self__.h1], null);
return (kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__36534) : kixi.stats.test.significant_QMARK_.call(null,G__36534));
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3 = (function (this$,alpha,alternate){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = self__.statistic;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = self__.distribution;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = alpha;
if(cljs.core.truth_(and__4149__auto____$2)){
return alternate;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
var critical = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3(self__.distribution,alpha,alternate);
var G__36535 = alternate;
var G__36535__$1 = (((G__36535 instanceof cljs.core.Keyword))?G__36535.fqn:null);
switch (G__36535__$1) {
case "<>":
return (kixi.stats.math.abs(self__.statistic) > critical);

break;
case "<":
return (self__.statistic < critical);

break;
case ">":
return (self__.statistic > critical);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36535__$1)].join('')));

}
} else {
return null;
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k36525,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__36536 = k36525;
var G__36536__$1 = (((G__36536 instanceof cljs.core.Keyword))?G__36536.fqn:null);
switch (G__36536__$1) {
case "statistic":
return self__.statistic;

break;
case "distribution":
return self__.distribution;

break;
case "h1":
return self__.h1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36525,else__4418__auto__);

}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__36537){
var vec__36538 = p__36537;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36538,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36538,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#kixi.stats.test.TestResult{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"statistic","statistic",-788899134),self__.statistic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distribution","distribution",-284555369),self__.distribution],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h1","h1",-1896887462),self__.h1],null))], null),self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36524){
var self__ = this;
var G__36524__$1 = this;
return (new cljs.core.RecordIter((0),G__36524__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statistic","statistic",-788899134),new cljs.core.Keyword(null,"distribution","distribution",-284555369),new cljs.core.Keyword(null,"h1","h1",-1896887462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,self__.__extmap,self__.__hash));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1240870390 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36526,other36527){
var self__ = this;
var this36526__$1 = this;
return (((!((other36527 == null)))) && ((this36526__$1.constructor === other36527.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36526__$1.statistic,other36527.statistic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36526__$1.distribution,other36527.distribution)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36526__$1.h1,other36527.h1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36526__$1.__extmap,other36527.__extmap)));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statistic","statistic",-788899134),null,new cljs.core.Keyword(null,"distribution","distribution",-284555369),null,new cljs.core.Keyword(null,"h1","h1",-1896887462),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__36524){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__36544 = cljs.core.keyword_identical_QMARK_;
var expr__36545 = k__4423__auto__;
if(cljs.core.truth_((pred__36544.cljs$core$IFn$_invoke$arity$2 ? pred__36544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statistic","statistic",-788899134),expr__36545) : pred__36544.call(null,new cljs.core.Keyword(null,"statistic","statistic",-788899134),expr__36545)))){
return (new kixi.stats.test.TestResult(G__36524,self__.distribution,self__.h1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36544.cljs$core$IFn$_invoke$arity$2 ? pred__36544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"distribution","distribution",-284555369),expr__36545) : pred__36544.call(null,new cljs.core.Keyword(null,"distribution","distribution",-284555369),expr__36545)))){
return (new kixi.stats.test.TestResult(self__.statistic,G__36524,self__.h1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36544.cljs$core$IFn$_invoke$arity$2 ? pred__36544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__36545) : pred__36544.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__36545)))){
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,G__36524,self__.__meta,self__.__extmap,null));
} else {
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__36524),null));
}
}
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"statistic","statistic",-788899134),self__.statistic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"distribution","distribution",-284555369),self__.distribution,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h1","h1",-1896887462),self__.h1,null))], null),self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__36524){
var self__ = this;
var this__4414__auto____$1 = this;
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,G__36524,self__.__extmap,self__.__hash));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(kixi.stats.test.TestResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statistic","statistic",851632393,null),new cljs.core.Symbol(null,"distribution","distribution",1355976158,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null)], null);
}));

(kixi.stats.test.TestResult.cljs$lang$type = true);

(kixi.stats.test.TestResult.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"kixi.stats.test/TestResult",null,(1),null));
}));

(kixi.stats.test.TestResult.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"kixi.stats.test/TestResult");
}));

/**
 * Positional factory function for kixi.stats.test/TestResult.
 */
kixi.stats.test.__GT_TestResult = (function kixi$stats$test$__GT_TestResult(statistic,distribution,h1){
return (new kixi.stats.test.TestResult(statistic,distribution,h1,null,null,null));
});

/**
 * Factory function for kixi.stats.test/TestResult, taking a map of keywords to field values.
 */
kixi.stats.test.map__GT_TestResult = (function kixi$stats$test$map__GT_TestResult(G__36528){
var extmap__4454__auto__ = (function (){var G__36548 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36528,new cljs.core.Keyword(null,"statistic","statistic",-788899134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"distribution","distribution",-284555369),new cljs.core.Keyword(null,"h1","h1",-1896887462)], 0));
if(cljs.core.record_QMARK_(G__36528)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36548);
} else {
return G__36548;
}
})();
return (new kixi.stats.test.TestResult(new cljs.core.Keyword(null,"statistic","statistic",-788899134).cljs$core$IFn$_invoke$arity$1(G__36528),new cljs.core.Keyword(null,"distribution","distribution",-284555369).cljs$core$IFn$_invoke$arity$1(G__36528),new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(G__36528),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

kixi.stats.test.test_result = (function kixi$stats$test$test_result(var_args){
var G__36550 = arguments.length;
switch (G__36550) {
case 2:
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2 = (function (statistic,distribution){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3(statistic,distribution,new cljs.core.Keyword(null,"<>","<>",1280186386));
}));

(kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3 = (function (statistic,distribution,alternate){
return kixi.stats.test.__GT_TestResult(statistic,distribution,alternate);
}));

(kixi.stats.test.test_result.cljs$lang$maxFixedArity = 3);

/**
 * Calculates the X^2 test of independence for a given contingency table.
 *   See kixi.stats.core/cross-tabulate
 */
kixi.stats.test.chi_squared_test = (function kixi$stats$test$chi_squared_test(table){
var margins = kixi.stats.protocols.margin_totals(table);
var size = kixi.stats.protocols.size(table);
var factors = cljs.core.count(size);
var total = kixi.stats.math.pow(kixi.stats.protocols.grand_total(table),(factors - (1)));
var dof = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,size),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,size));
var stat = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36552){
var vec__36553 = p__36552;
var levels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36553,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36553,(1),null);
var cell = kixi.stats.protocols.cell(table,levels);
var e = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,counts) / total);
return (acc + (kixi.stats.math.sq((e - cell)) / e));
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map,cljs.core.vector),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,margins)));
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3(stat,kixi.stats.distribution.chi_squared(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),dof], null)),new cljs.core.Keyword(null,">",">",-555517146));
});
/**
 * Calculates the z-test of statistical significance for a sample mean.
 *   mu: the population mean
 *   sd: the population standard deviation
 *   mean: the sample mean
 *   n: the sample size
 *   See also: kixi.stats.core/simple-z-test
 */
kixi.stats.test.simple_z_test = (function kixi$stats$test$simple_z_test(p__36556,p__36557){
var map__36558 = p__36556;
var map__36558__$1 = cljs.core.__destructure_map(map__36558);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36558__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36558__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var map__36559 = p__36557;
var map__36559__$1 = cljs.core.__destructure_map(map__36559);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36559__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36559__$1,new cljs.core.Keyword(null,"n","n",562130025));
if((((n > (0))) && ((sd > (0))))){
var z = ((mean - mu) / (sd / kixi.stats.math.sqrt(n)));
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(z,kixi.stats.distribution.normal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"location","location",1815599388),0.0,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0], null)));
} else {
return null;
}
});
/**
 * Calculates the z-test of statistical significance between two sample means.
 *   Requires the mean, sd and sample size (n) of both samples.
 *   See also: kixi.stats.core/z-test
 */
kixi.stats.test.z_test = (function kixi$stats$test$z_test(p__36561,p__36562){
var map__36563 = p__36561;
var map__36563__$1 = cljs.core.__destructure_map(map__36563);
var mean_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__36564 = p__36562;
var map__36564__$1 = cljs.core.__destructure_map(map__36564);
var mean_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sd_xy = (((n_x > (0)))?(((n_y > (0)))?kixi.stats.math.sqrt(((kixi.stats.math.sq(sd_x) / n_x) + (kixi.stats.math.sq(sd_y) / n_y))):false):false);
var z = (function (){var and__4149__auto__ = sd_xy;
if(cljs.core.truth_(and__4149__auto__)){
if((sd_xy > (0))){
return ((mean_x - mean_y) / sd_xy);
} else {
return false;
}
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(z)){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(z,kixi.stats.distribution.normal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"location","location",1815599388),0.0,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0], null)));
} else {
return null;
}
});
/**
 * Calculates Welch's unequal variances t-test of statistical significance.
 *   Requires the mean, sd and sample size (n) of both samples.
 *   See also: kixi.stats.core/t-test
 */
kixi.stats.test.t_test = (function kixi$stats$test$t_test(p__36567,p__36568){
var map__36569 = p__36567;
var map__36569__$1 = cljs.core.__destructure_map(map__36569);
var mean_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__36570 = p__36568;
var map__36570__$1 = cljs.core.__destructure_map(map__36570);
var mean_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sd_ab = (((n_a > (0)))?(((n_b > (0)))?((kixi.stats.math.sq(sd_a) / n_a) + (kixi.stats.math.sq(sd_b) / n_b)):false):false);
var t = (function (){var and__4149__auto__ = sd_ab;
if(cljs.core.truth_(and__4149__auto__)){
return ((mean_a - mean_b) / kixi.stats.math.sqrt(sd_ab));
} else {
return and__4149__auto__;
}
})();
var dof = (((n_a > (1)))?(((n_b > (1)))?(kixi.stats.math.sq(sd_ab) / ((kixi.stats.math.pow(sd_a,(4)) / ((n_a * n_a) * (n_a - (1)))) + (kixi.stats.math.pow(sd_b,(4)) / ((n_b * n_b) * (n_b - (1)))))):false):false);
if(cljs.core.truth_((function (){var and__4149__auto__ = t;
if(cljs.core.truth_(and__4149__auto__)){
return dof;
} else {
return and__4149__auto__;
}
})())){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(t,kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),dof], null)));
} else {
return null;
}
});
/**
 * Calculates the t-test of statistical significance for a sample mean.
 *   mu: the population mean
 *   sd: the population standard deviation
 *   mean: the sample mean
 *   n: the sample size
 *   See also: kixi.stats.core/simple-t-test
 */
kixi.stats.test.simple_t_test = (function kixi$stats$test$simple_t_test(p__36571,p__36572){
var map__36573 = p__36571;
var map__36573__$1 = cljs.core.__destructure_map(map__36573);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36573__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36573__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var map__36574 = p__36572;
var map__36574__$1 = cljs.core.__destructure_map(map__36574);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword(null,"n","n",562130025));
var dof = (n - (1));
var t = (((sd > (0)))?(((n > (0)))?((mean - mu) / (sd / kixi.stats.math.sqrt(n))):false):false);
if(cljs.core.truth_((function (){var and__4149__auto__ = t;
if(cljs.core.truth_(and__4149__auto__)){
return (dof > (0));
} else {
return and__4149__auto__;
}
})())){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(t,kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),dof], null)));
} else {
return null;
}
});

//# sourceMappingURL=kixi.stats.test.js.map