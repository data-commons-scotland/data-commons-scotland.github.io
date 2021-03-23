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
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.statistic;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = self__.distribution;
if(cljs.core.truth_(and__4115__auto____$1)){
return alternate;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var G__26645 = alternate;
var G__26645__$1 = (((G__26645 instanceof cljs.core.Keyword))?G__26645.fqn:null);
switch (G__26645__$1) {
case "<>":
return kixi.stats.math.clamp(((2) * (function (){var G__26646 = self__.distribution;
var G__26647 = (- kixi.stats.math.abs(self__.statistic));
return (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(G__26646,G__26647) : kixi.stats.distribution.cdf.call(null,G__26646,G__26647));
})()),0.0,1.0);

break;
case "<":
return (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(self__.distribution,self__.statistic) : kixi.stats.distribution.cdf.call(null,self__.distribution,self__.statistic));

break;
case ">":
return ((1) - (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2(self__.distribution,self__.statistic) : kixi.stats.distribution.cdf.call(null,self__.distribution,self__.statistic)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26645__$1)].join('')));

}
} else {
return null;
}
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2 = (function (this$,alpha){
var self__ = this;
var this$__$1 = this;
var G__26648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,alpha,self__.h1], null);
return (kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26648) : kixi.stats.test.significant_QMARK_.call(null,G__26648));
}));

(kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3 = (function (this$,alpha,alternate){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.statistic;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = self__.distribution;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = alpha;
if(cljs.core.truth_(and__4115__auto____$2)){
return alternate;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var critical = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3(self__.distribution,alpha,alternate);
var G__26649 = alternate;
var G__26649__$1 = (((G__26649 instanceof cljs.core.Keyword))?G__26649.fqn:null);
switch (G__26649__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26649__$1)].join('')));

}
} else {
return null;
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k26636,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__26650 = k26636;
var G__26650__$1 = (((G__26650 instanceof cljs.core.Keyword))?G__26650.fqn:null);
switch (G__26650__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26636,else__4383__auto__);

}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__26651){
var vec__26652 = p__26651;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26652,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26652,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#kixi.stats.test.TestResult{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"statistic","statistic",-788899134),self__.statistic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distribution","distribution",-284555369),self__.distribution],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h1","h1",-1896887462),self__.h1],null))], null),self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26635){
var self__ = this;
var G__26635__$1 = this;
return (new cljs.core.RecordIter((0),G__26635__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statistic","statistic",-788899134),new cljs.core.Keyword(null,"distribution","distribution",-284555369),new cljs.core.Keyword(null,"h1","h1",-1896887462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,self__.__extmap,self__.__hash));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1240870390 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26637,other26638){
var self__ = this;
var this26637__$1 = this;
return (((!((other26638 == null)))) && ((this26637__$1.constructor === other26638.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26637__$1.statistic,other26638.statistic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26637__$1.distribution,other26638.distribution)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26637__$1.h1,other26638.h1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26637__$1.__extmap,other26638.__extmap)));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statistic","statistic",-788899134),null,new cljs.core.Keyword(null,"distribution","distribution",-284555369),null,new cljs.core.Keyword(null,"h1","h1",-1896887462),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__26635){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__26655 = cljs.core.keyword_identical_QMARK_;
var expr__26656 = k__4388__auto__;
if(cljs.core.truth_((pred__26655.cljs$core$IFn$_invoke$arity$2 ? pred__26655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statistic","statistic",-788899134),expr__26656) : pred__26655.call(null,new cljs.core.Keyword(null,"statistic","statistic",-788899134),expr__26656)))){
return (new kixi.stats.test.TestResult(G__26635,self__.distribution,self__.h1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26655.cljs$core$IFn$_invoke$arity$2 ? pred__26655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"distribution","distribution",-284555369),expr__26656) : pred__26655.call(null,new cljs.core.Keyword(null,"distribution","distribution",-284555369),expr__26656)))){
return (new kixi.stats.test.TestResult(self__.statistic,G__26635,self__.h1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26655.cljs$core$IFn$_invoke$arity$2 ? pred__26655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__26656) : pred__26655.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__26656)))){
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,G__26635,self__.__meta,self__.__extmap,null));
} else {
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__26635),null));
}
}
}
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"statistic","statistic",-788899134),self__.statistic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"distribution","distribution",-284555369),self__.distribution,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h1","h1",-1896887462),self__.h1,null))], null),self__.__extmap));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__26635){
var self__ = this;
var this__4379__auto____$1 = this;
return (new kixi.stats.test.TestResult(self__.statistic,self__.distribution,self__.h1,G__26635,self__.__extmap,self__.__hash));
}));

(kixi.stats.test.TestResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(kixi.stats.test.TestResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statistic","statistic",851632393,null),new cljs.core.Symbol(null,"distribution","distribution",1355976158,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null)], null);
}));

(kixi.stats.test.TestResult.cljs$lang$type = true);

(kixi.stats.test.TestResult.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"kixi.stats.test/TestResult",null,(1),null));
}));

(kixi.stats.test.TestResult.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"kixi.stats.test/TestResult");
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
kixi.stats.test.map__GT_TestResult = (function kixi$stats$test$map__GT_TestResult(G__26641){
var extmap__4419__auto__ = (function (){var G__26659 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26641,new cljs.core.Keyword(null,"statistic","statistic",-788899134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"distribution","distribution",-284555369),new cljs.core.Keyword(null,"h1","h1",-1896887462)], 0));
if(cljs.core.record_QMARK_(G__26641)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26659);
} else {
return G__26659;
}
})();
return (new kixi.stats.test.TestResult(new cljs.core.Keyword(null,"statistic","statistic",-788899134).cljs$core$IFn$_invoke$arity$1(G__26641),new cljs.core.Keyword(null,"distribution","distribution",-284555369).cljs$core$IFn$_invoke$arity$1(G__26641),new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(G__26641),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

kixi.stats.test.test_result = (function kixi$stats$test$test_result(var_args){
var G__26661 = arguments.length;
switch (G__26661) {
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
var stat = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__26663){
var vec__26664 = p__26663;
var levels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26664,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26664,(1),null);
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
kixi.stats.test.simple_z_test = (function kixi$stats$test$simple_z_test(p__26667,p__26668){
var map__26669 = p__26667;
var map__26669__$1 = (((((!((map__26669 == null))))?(((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26669):map__26669);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var map__26670 = p__26668;
var map__26670__$1 = (((((!((map__26670 == null))))?(((((map__26670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26670):map__26670);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"n","n",562130025));
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
kixi.stats.test.z_test = (function kixi$stats$test$z_test(p__26673,p__26674){
var map__26675 = p__26673;
var map__26675__$1 = (((((!((map__26675 == null))))?(((((map__26675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26675):map__26675);
var mean_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26675__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26675__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26675__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__26676 = p__26674;
var map__26676__$1 = (((((!((map__26676 == null))))?(((((map__26676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26676):map__26676);
var mean_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26676__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26676__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26676__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sd_xy = (((n_x > (0)))?(((n_y > (0)))?kixi.stats.math.sqrt(((kixi.stats.math.sq(sd_x) / n_x) + (kixi.stats.math.sq(sd_y) / n_y))):false):false);
var z = (function (){var and__4115__auto__ = sd_xy;
if(cljs.core.truth_(and__4115__auto__)){
if((sd_xy > (0))){
return ((mean_x - mean_y) / sd_xy);
} else {
return false;
}
} else {
return and__4115__auto__;
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
kixi.stats.test.t_test = (function kixi$stats$test$t_test(p__26681,p__26682){
var map__26683 = p__26681;
var map__26683__$1 = (((((!((map__26683 == null))))?(((((map__26683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26683):map__26683);
var mean_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26683__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26683__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26683__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__26684 = p__26682;
var map__26684__$1 = (((((!((map__26684 == null))))?(((((map__26684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26684):map__26684);
var mean_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26684__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var sd_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26684__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var n_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26684__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sd_ab = (((n_a > (0)))?(((n_b > (0)))?((kixi.stats.math.sq(sd_a) / n_a) + (kixi.stats.math.sq(sd_b) / n_b)):false):false);
var t = (function (){var and__4115__auto__ = sd_ab;
if(cljs.core.truth_(and__4115__auto__)){
return ((mean_a - mean_b) / kixi.stats.math.sqrt(sd_ab));
} else {
return and__4115__auto__;
}
})();
var dof = (((n_a > (1)))?(((n_b > (1)))?(kixi.stats.math.sq(sd_ab) / ((kixi.stats.math.pow(sd_a,(4)) / ((n_a * n_a) * (n_a - (1)))) + (kixi.stats.math.pow(sd_b,(4)) / ((n_b * n_b) * (n_b - (1)))))):false):false);
if(cljs.core.truth_((function (){var and__4115__auto__ = t;
if(cljs.core.truth_(and__4115__auto__)){
return dof;
} else {
return and__4115__auto__;
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
kixi.stats.test.simple_t_test = (function kixi$stats$test$simple_t_test(p__26687,p__26688){
var map__26689 = p__26687;
var map__26689__$1 = (((((!((map__26689 == null))))?(((((map__26689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26689):map__26689);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26689__$1,new cljs.core.Keyword(null,"mu","mu",1146469241));
var sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26689__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));
var map__26690 = p__26688;
var map__26690__$1 = (((((!((map__26690 == null))))?(((((map__26690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26690):map__26690);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26690__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26690__$1,new cljs.core.Keyword(null,"n","n",562130025));
var dof = (n - (1));
var t = (((sd > (0)))?(((n > (0)))?((mean - mu) / (sd / kixi.stats.math.sqrt(n))):false):false);
if(cljs.core.truth_((function (){var and__4115__auto__ = t;
if(cljs.core.truth_(and__4115__auto__)){
return (dof > (0));
} else {
return and__4115__auto__;
}
})())){
return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(t,kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),dof], null)));
} else {
return null;
}
});

//# sourceMappingURL=kixi.stats.test.js.map
