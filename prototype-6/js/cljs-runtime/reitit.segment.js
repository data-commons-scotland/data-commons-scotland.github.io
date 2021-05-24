goog.provide('reitit.segment');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k26488,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__26492 = k26488;
var G__26492__$1 = (((G__26492 instanceof cljs.core.Keyword))?G__26492.fqn:null);
switch (G__26492__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26488,else__4383__auto__);

}
}));

(reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__26493){
var vec__26494 = p__26493;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26494,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26494,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#reitit.segment.Match{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26487){
var self__ = this;
var G__26487__$1 = this;
return (new cljs.core.RecordIter((0),G__26487__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26489,other26490){
var self__ = this;
var this26489__$1 = this;
return (((!((other26490 == null)))) && ((this26489__$1.constructor === other26490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26489__$1.data,other26490.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26489__$1.path_params,other26490.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26489__$1.__extmap,other26490.__extmap)));
}));

(reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__26487){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__26497 = cljs.core.keyword_identical_QMARK_;
var expr__26498 = k__4388__auto__;
if(cljs.core.truth_((pred__26497.cljs$core$IFn$_invoke$arity$2 ? pred__26497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__26498) : pred__26497.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__26498)))){
return (new reitit.segment.Match(G__26487,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26497.cljs$core$IFn$_invoke$arity$2 ? pred__26497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__26498) : pred__26497.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__26498)))){
return (new reitit.segment.Match(self__.data,G__26487,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__26487),null));
}
}
}));

(reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__26487){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__26487,self__.__extmap,self__.__hash));
}));

(reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
}));

(reitit.segment.Match.cljs$lang$type = true);

(reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
}));

(reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"reitit.segment/Match");
}));

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__26491){
var extmap__4419__auto__ = (function (){var G__26500 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26491,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-params","path-params",-48130597)], 0));
if(cljs.core.record_QMARK_(G__26491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26500);
} else {
return G__26500;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__26491),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__26491),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

var reitit$segment$Segment$_insert$dyn_26557 = (function (this$,ps,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.segment._insert[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4429__auto__.call(null,this$,ps,data));
} else {
var m__4426__auto__ = (reitit.segment._insert["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4426__auto__.call(null,this$,ps,data));
} else {
throw cljs.core.missing_protocol("Segment.-insert",this$);
}
}
});
reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_insert$arity$3 == null)))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
return reitit$segment$Segment$_insert$dyn_26557(this$,ps,data);
}
});

var reitit$segment$Segment$_lookup$dyn_26573 = (function (this$,ps,path_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.segment._lookup[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4429__auto__.call(null,this$,ps,path_params));
} else {
var m__4426__auto__ = (reitit.segment._lookup["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4426__auto__.call(null,this$,ps,path_params));
} else {
throw cljs.core.missing_protocol("Segment.-lookup",this$);
}
}
});
reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_lookup$arity$3 == null)))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
return reitit$segment$Segment$_lookup$dyn_26573(this$,ps,path_params);
}
});

goog.object.set(reitit.segment.Segment,"null",true);

goog.object.set(reitit.segment._insert,"null",(function (_,___$1,___$2){
return null;
}));

goog.object.set(reitit.segment._lookup,"null",(function (_,___$1,___$2){
return null;
}));
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup(reitit.impl.fast_get(children,catch_all),null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,catch_all,clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.cons(p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__26504 = arguments.length;
switch (G__26504) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
}));

(reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map(children);
var wilds_QMARK_ = cljs.core.seq(wilds);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment26505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment26505 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta26506){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta26506 = meta26506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment26505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26507,meta26506__$1){
var self__ = this;
var _26507__$1 = this;
return (new reitit.segment.t_reitit$segment26505(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta26506__$1));
}));

(reitit.segment.t_reitit$segment26505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26507){
var self__ = this;
var _26507__$1 = this;
return self__.meta26506;
}));

(reitit.segment.t_reitit$segment26505.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment26505.prototype.reitit$segment$Segment$_insert$arity$3 = (function (_,p__26508,d){
var self__ = this;
var vec__26509 = p__26508;
var seq__26510 = cljs.core.seq(vec__26509);
var first__26511 = cljs.core.first(seq__26510);
var seq__26510__$1 = cljs.core.next(seq__26510);
var p = first__26511;
var ps = seq__26510__$1;
var ___$1 = this;
if(cljs.core.not(p)){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__26512 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_param,reitit.impl.catch_all_param)(p);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26512,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26512,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__4126__auto__ = c;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.children,(function (){var or__4126__auto__ = w;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = c;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return p;
}
}
})(),(function (p1__26501_SHARP_){
return reitit.segment._insert((function (){var or__4126__auto__ = p1__26501_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),ps,d);
}));
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(children__$1,wilds__$1,catch_all__$1,self__.match);
}
}));

(reitit.segment.t_reitit$segment26505.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,p__26515,path_params){
var self__ = this;
var vec__26516 = p__26515;
var seq__26517 = cljs.core.seq(vec__26516);
var first__26518 = cljs.core.first(seq__26517);
var seq__26517__$1 = cljs.core.next(seq__26517);
var p = first__26518;
var ps = seq__26517__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params);
} else {
return null;
}
} else {
var or__4126__auto__ = reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.wilds_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.blank_QMARK_(p)));
} else {
return and__4115__auto__;
}
})())?cljs.core.some((function (p1__26502_SHARP_){
return reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p1__26502_SHARP_),ps,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,p1__26502_SHARP_,p));
}),self__.wilds):null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
if(cljs.core.truth_(self__.catch_all)){
return reitit.segment._catch_all(self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
} else {
return null;
}
}
}
}
}));

(reitit.segment.t_reitit$segment26505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"wilds?","wilds?",-1842060252,null),new cljs.core.Symbol(null,"meta26506","meta26506",-222803701,null)], null);
}));

(reitit.segment.t_reitit$segment26505.cljs$lang$type = true);

(reitit.segment.t_reitit$segment26505.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment26505");

(reitit.segment.t_reitit$segment26505.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.segment/t_reitit$segment26505");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment26505.
 */
reitit.segment.__GT_t_reitit$segment26505 = (function reitit$segment$__GT_t_reitit$segment26505(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta26506){
return (new reitit.segment.t_reitit$segment26505(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta26506));
});

}

return (new reitit.segment.t_reitit$segment26505(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
}));

(reitit.segment.segment.cljs$lang$maxFixedArity = 4);

reitit.segment.insert = (function reitit$segment$insert(root,path,data){
return reitit.segment._insert((function (){var or__4126__auto__ = root;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),reitit.impl.segments(path),reitit.segment.map__GT_Match(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});
reitit.segment.create = (function reitit$segment$create(paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segment,p__26519){
var vec__26520 = p__26519;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26520,(1),null);
return reitit.segment.insert(segment,p,data);
}),null,paths);
});
reitit.segment.lookup = (function reitit$segment$lookup(segment,path){
return reitit.segment._lookup(segment,reitit.impl.segments(path),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=reitit.segment.js.map
