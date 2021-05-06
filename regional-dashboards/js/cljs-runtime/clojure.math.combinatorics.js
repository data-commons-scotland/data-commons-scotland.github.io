goog.provide('clojure.math.combinatorics');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq(colls);
if(temp__5735__auto__){
var s = temp__5735__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__36273 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__36273) : clojure.math.combinatorics.join.call(null,G__36273));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__36274(s__36275){
return (new cljs.core.LazySeq(null,(function (){
var s__36275__$1 = s__36275;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36275__$1);
if(temp__5735__auto__){
var s__36275__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36275__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36275__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36277 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36276 = (0);
while(true){
if((i__36276 < size__4563__auto__)){
var j = cljs.core._nth(c__4562__auto__,i__36276);
cljs.core.chunk_append(b__36277,((j + cnt) + (- (n + (1)))));

var G__36523 = (i__36276 + (1));
i__36276 = G__36523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36277),clojure$math$combinatorics$index_combinations_$_iter__36274(cljs.core.chunk_rest(s__36275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36277),null);
}
} else {
var j = cljs.core.first(s__36275__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__36274(cljs.core.rest(s__36275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__36529 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__36530 = (j__$1 - (1));
c__$3 = G__36529;
j__$1 = G__36530;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
}),null,null)));
});
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__36541 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__36542 = (index__$1 + (1));
var G__36543 = (already_distributed__$1 + mi);
distribution__$1 = G__36541;
index__$1 = G__36542;
already_distributed__$1 = G__36543;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__36278 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__36281 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__36547 = distribution__$2;
distribution__$1 = G__36547;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5735__auto__)){
var next_step = temp__5735__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__36284(s__36285){
return (new cljs.core.LazySeq(null,(function (){
var s__36285__$1 = s__36285;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36285__$1);
if(temp__5735__auto__){
var s__36285__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36285__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36285__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36287 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36286 = (0);
while(true){
if((i__36286 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36286);
cljs.core.chunk_append(b__36287,(function (){var G__36288 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36288) : f.call(null,G__36288));
})());

var G__36551 = (i__36286 + (1));
i__36286 = G__36551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36287),clojure$math$combinatorics$multi_comb_$_iter__36284(cljs.core.chunk_rest(s__36285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36287),null);
}
} else {
var i = cljs.core.first(s__36285__$2);
return cljs.core.cons((function (){var G__36289 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36289) : f.call(null,G__36289));
})(),clojure$math$combinatorics$multi_comb_$_iter__36284(cljs.core.rest(s__36285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4564__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__36290(s__36291){
return (new cljs.core.LazySeq(null,(function (){
var s__36291__$1 = s__36291;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36291__$1);
if(temp__5735__auto__){
var s__36291__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36291__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36291__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36293 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36292 = (0);
while(true){
if((i__36292 < size__4563__auto__)){
var q = cljs.core._nth(c__4562__auto__,i__36292);
cljs.core.chunk_append(b__36293,clojure.math.combinatorics.join((function (){var iter__4564__auto__ = ((function (i__36292,q,c__4562__auto__,size__4563__auto__,b__36293,s__36291__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__36290_$_iter__36294(s__36295){
return (new cljs.core.LazySeq(null,((function (i__36292,q,c__4562__auto__,size__4563__auto__,b__36293,s__36291__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function (){
var s__36295__$1 = s__36295;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36295__$1);
if(temp__5735__auto____$1){
var s__36295__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36295__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36295__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36297 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36296 = (0);
while(true){
if((i__36296 < size__4563__auto____$1)){
var vec__36298 = cljs.core._nth(c__4562__auto____$1,i__36296);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36298,(2),null);
cljs.core.chunk_append(b__36297,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__36560 = (i__36296 + (1));
i__36296 = G__36560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36297),clojure$math$combinatorics$multi_comb_$_iter__36290_$_iter__36294(cljs.core.chunk_rest(s__36295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36297),null);
}
} else {
var vec__36301 = cljs.core.first(s__36295__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36301,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36301,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36301,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__36290_$_iter__36294(cljs.core.rest(s__36295__$2)));
}
} else {
return null;
}
break;
}
});})(i__36292,q,c__4562__auto__,size__4563__auto__,b__36293,s__36291__$2,temp__5735__auto__,f,v,domain,m,qs))
,null,null));
});})(i__36292,q,c__4562__auto__,size__4563__auto__,b__36293,s__36291__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4564__auto__(q);
})()));

var G__36565 = (i__36292 + (1));
i__36292 = G__36565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36293),clojure$math$combinatorics$multi_comb_$_iter__36290(cljs.core.chunk_rest(s__36291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36293),null);
}
} else {
var q = cljs.core.first(s__36291__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4564__auto__ = ((function (q,s__36291__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__36290_$_iter__36304(s__36305){
return (new cljs.core.LazySeq(null,(function (){
var s__36305__$1 = s__36305;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36305__$1);
if(temp__5735__auto____$1){
var s__36305__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36305__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36305__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36307 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36306 = (0);
while(true){
if((i__36306 < size__4563__auto__)){
var vec__36308 = cljs.core._nth(c__4562__auto__,i__36306);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(2),null);
cljs.core.chunk_append(b__36307,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__36566 = (i__36306 + (1));
i__36306 = G__36566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36307),clojure$math$combinatorics$multi_comb_$_iter__36290_$_iter__36304(cljs.core.chunk_rest(s__36305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36307),null);
}
} else {
var vec__36311 = cljs.core.first(s__36305__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__36290_$_iter__36304(cljs.core.rest(s__36305__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__36291__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4564__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__36290(cljs.core.rest(s__36291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__4564__auto__ = (function clojure$math$combinatorics$combinations_$_iter__36315(s__36316){
return (new cljs.core.LazySeq(null,(function (){
var s__36316__$1 = s__36316;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36316__$1);
if(temp__5735__auto__){
var s__36316__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36316__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36316__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36318 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36317 = (0);
while(true){
if((i__36317 < size__4563__auto__)){
var item = cljs.core._nth(c__4562__auto__,i__36317);
cljs.core.chunk_append(b__36318,(new cljs.core.List(null,item,null,(1),null)));

var G__36579 = (i__36317 + (1));
i__36317 = G__36579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36318),clojure$math$combinatorics$combinations_$_iter__36315(cljs.core.chunk_rest(s__36316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36318),null);
}
} else {
var item = cljs.core.first(s__36316__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__36315(cljs.core.rest(s__36316__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36314_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__36314_SHARP_);
}),clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__36322 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__36322) : clojure.math.combinatorics.unchunk.call(null,G__36322));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36580 = arguments.length;
var i__4772__auto___36581 = (0);
while(true){
if((i__4772__auto___36581 < len__4771__auto___36580)){
args__4777__auto__.push((arguments[i__4772__auto___36581]));

var G__36582 = (i__4772__auto___36581 + (1));
i__4772__auto___36581 = G__36582;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__36583 = (i - (1));
var G__36584 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__36583;
v_seqs__$2 = G__36584;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq36325){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36325));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__36326 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__36326) : v.call(null,G__36326));
})())){
return i;
} else {
var G__36585 = (i - (1));
i = G__36585;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__36586 = (i - (1));
i = G__36586;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__36587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__36588 = (k + (1));
var G__36589 = (l__$1 - (1));
v__$1 = G__36587;
k = G__36588;
l__$1 = G__36589;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__36327 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__36327) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__36327));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,s)){
var or__4160__auto__ = cljs.core.empty_QMARK_(s);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return false;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__36328(s__36329){
return (new cljs.core.LazySeq(null,(function (){
var s__36329__$1 = s__36329;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36329__$1);
if(temp__5735__auto__){
var s__36329__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36329__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36329__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36331 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36330 = (0);
while(true){
if((i__36330 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36330);
cljs.core.chunk_append(b__36331,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36332 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36332) : f.call(null,G__36332));
})(),i));

var G__36590 = (i__36330 + (1));
i__36330 = G__36590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36331),clojure$math$combinatorics$multi_perm_$_iter__36328(cljs.core.chunk_rest(s__36329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36331),null);
}
} else {
var i = cljs.core.first(s__36329__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36333 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36333) : f.call(null,G__36333));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__36328(cljs.core.rest(s__36329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36334_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__36334_SHARP_);
}),clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__36591 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__36592 = (n__$1 - (1));
acc = G__36591;
n__$1 = G__36592;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__36593 = q;
var G__36594 = cljs.core.cons(r,digits);
var G__36595 = (divisor + (1));
n__$1 = G__36593;
digits = G__36594;
divisor = G__36595;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__36596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__36597 = cljs.core.rest(l__$1);
var G__36598 = (n__$1 - (1));
acc = G__36596;
l__$1 = G__36597;
n__$1 = G__36598;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__36599 = cljs.core.rest(indices);
var G__36600 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__36601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__36599;
l__$1 = G__36600;
perm = G__36601;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__36335(s__36336){
return (new cljs.core.LazySeq(null,(function (){
var s__36336__$1 = s__36336;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36336__$1);
if(temp__5735__auto__){
var s__36336__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36336__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36336__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36338 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36337 = (0);
while(true){
if((i__36337 < size__4563__auto__)){
var vec__36339 = cljs.core._nth(c__4562__auto__,i__36337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(1),null);
cljs.core.chunk_append(b__36338,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__36602 = (i__36337 + (1));
i__36337 = G__36602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36338),clojure$math$combinatorics$initial_perm_numbers_$_iter__36335(cljs.core.chunk_rest(s__36336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36338),null);
}
} else {
var vec__36342 = cljs.core.first(s__36336__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36342,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__36335(cljs.core.rest(s__36336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__36603 = cljs.core.rest(perm_numbers__$1);
var G__36604 = (index + (1));
perm_numbers__$1 = G__36603;
index = G__36604;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__36348 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36348,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36348,(1),null);
var G__36605 = remainder;
var G__36606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__36607 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__36605;
digits = G__36606;
freqs__$1 = G__36607;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__36608 = clojure.math.combinatorics.dec_key(freqs,item);
var G__36609 = cljs.core.rest(indices);
var G__36610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__36608;
indices = G__36609;
perm = G__36610;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__36351(s__36352){
return (new cljs.core.LazySeq(null,(function (){
var s__36352__$1 = s__36352;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36352__$1);
if(temp__5735__auto__){
var s__36352__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36352__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36352__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36354 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36353 = (0);
while(true){
if((i__36353 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36353);
cljs.core.chunk_append(b__36354,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36355 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36355) : f.call(null,G__36355));
})(),i));

var G__36611 = (i__36353 + (1));
i__36353 = G__36611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36354),clojure$math$combinatorics$nth_permutation_$_iter__36351(cljs.core.chunk_rest(s__36352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36354),null);
}
} else {
var i = cljs.core.first(s__36352__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36356 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36356) : f.call(null,G__36356));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__36351(cljs.core.rest(s__36352__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__36357(s__36358){
return (new cljs.core.LazySeq(null,(function (){
var s__36358__$1 = s__36358;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36358__$1);
if(temp__5735__auto__){
var s__36358__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36358__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36358__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36360 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36359 = (0);
while(true){
if((i__36359 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36359);
cljs.core.chunk_append(b__36360,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36361 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36361) : f.call(null,G__36361));
})(),i));

var G__36612 = (i__36359 + (1));
i__36359 = G__36612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36360),clojure$math$combinatorics$drop_permutations_$_iter__36357(cljs.core.chunk_rest(s__36358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36360),null);
}
} else {
var i = cljs.core.first(s__36358__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36362 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36362) : f.call(null,G__36362));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__36357(cljs.core.rest(s__36358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__36613 = n;
var G__36614 = (n - k);
n = G__36613;
k = G__36614;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__36363 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__36364 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__36363,G__36364) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__36363,G__36364));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__36365 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__36366 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__36366);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__36365);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__36623 = n__$1;
var G__36624 = y;
var G__36625 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__36623;
y = G__36624;
z = G__36625;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__36626 = n__$1;
var G__36627 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__36628 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__36626;
y = G__36627;
z = G__36628;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__36367(s__36368){
return (new cljs.core.LazySeq(null,(function (){
var s__36368__$1 = s__36368;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36368__$1);
if(temp__5735__auto__){
var s__36368__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36368__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36368__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36370 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36369 = (0);
while(true){
if((i__36369 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36369);
cljs.core.chunk_append(b__36370,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__36629 = (i__36369 + (1));
i__36369 = G__36629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36370),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__36367(cljs.core.chunk_rest(s__36368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36370),null);
}
} else {
var i = cljs.core.first(s__36368__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__36367(cljs.core.rest(s__36368__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__36371 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__36372 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__36372);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__36371);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__36630 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__36631 = cljs.core.rest(items__$1);
var G__36632 = (t__$1 - (1));
var G__36633 = n__$1;
comb = G__36630;
items__$1 = G__36631;
t__$1 = G__36632;
n__$1 = G__36633;
continue;
} else {
var G__36634 = comb;
var G__36635 = cljs.core.rest(items__$1);
var G__36636 = t__$1;
var G__36637 = (n__$1 - dc_dt);
comb = G__36634;
items__$1 = G__36635;
t__$1 = G__36636;
n__$1 = G__36637;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4564__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__36383(s__36384){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__36384__$1 = s__36384;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36384__$1);
if(temp__5735__auto__){
var s__36384__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36384__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36384__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36386 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36385 = (0);
while(true){
if((i__36385 < size__4563__auto__)){
var vec__36387 = cljs.core._nth(c__4562__auto__,i__36385);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(1),null);
cljs.core.chunk_append(b__36386,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__36638 = (i__36385 + (1));
i__36385 = G__36638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36386),clojure$math$combinatorics$nth_combination_freqs_$_iter__36383(cljs.core.chunk_rest(s__36384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36386),null);
}
} else {
var vec__36390 = cljs.core.first(s__36384__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36390,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__36383(cljs.core.rest(s__36384__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4564__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__36639 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__36640 = remove_one_key;
var G__36641 = (t__$1 - (1));
var G__36642 = n__$1;
comb = G__36639;
freqs__$1 = G__36640;
t__$1 = G__36641;
n__$1 = G__36642;
continue;
} else {
var G__36643 = comb;
var G__36644 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__36645 = t__$1;
var G__36646 = (n__$1 - dc_dt);
comb = G__36643;
freqs__$1 = G__36644;
t__$1 = G__36645;
n__$1 = G__36646;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__36393 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__36394 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__36394);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__36395(s__36396){
return (new cljs.core.LazySeq(null,(function (){
var s__36396__$1 = s__36396;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36396__$1);
if(temp__5735__auto__){
var s__36396__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36396__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36396__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36398 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36397 = (0);
while(true){
if((i__36397 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36397);
cljs.core.chunk_append(b__36398,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36399 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36399) : f.call(null,G__36399));
})(),i));

var G__36647 = (i__36397 + (1));
i__36397 = G__36647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36398),clojure$math$combinatorics$nth_combination_$_iter__36395(cljs.core.chunk_rest(s__36396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36398),null);
}
} else {
var i = cljs.core.first(s__36396__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36400 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36400) : f.call(null,G__36400));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__36395(cljs.core.rest(s__36396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__36393);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__36648 = (size + (1));
var G__36649 = (n__$1 - num_combinations);
size = G__36648;
n__$1 = G__36649;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__36650 = cljs.core.rest(l__$1);
var G__36651 = (n + (1));
l__$1 = G__36650;
n = G__36651;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__36652 = cljs.core.rest(l__$1);
var G__36653 = (function (){var G__36405 = index;
var G__36406 = (function (){var G__36407 = clojure.math.combinatorics.factorial(n);
var G__36408 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__36407,G__36408) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__36407,G__36408));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__36405,G__36406) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__36405,G__36406));
})();
var G__36654 = (n - (1));
l__$1 = G__36652;
index = G__36653;
n = G__36654;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__36655 = cljs.core.rest(l__$1);
var G__36656 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4564__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__36414(s__36415){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__36415__$1 = s__36415;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36415__$1);
if(temp__5735__auto__){
var s__36415__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36415__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36415__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36417 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36416 = (0);
while(true){
if((i__36416 < size__4563__auto__)){
var k = cljs.core._nth(c__4562__auto__,i__36416);
cljs.core.chunk_append(b__36417,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__36660 = (i__36416 + (1));
i__36416 = G__36660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36417),clojure$math$combinatorics$permutation_index_duplicates_$_iter__36414(cljs.core.chunk_rest(s__36415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36417),null);
}
} else {
var k = cljs.core.first(s__36415__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__36414(cljs.core.rest(s__36415__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4564__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4564__auto__){
return (function (p1__36409_SHARP_){
return (cljs.core.compare(p1__36409_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4564__auto__))
,cljs.core.keys(freqs)));
})());
var G__36657 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__36655;
index = G__36656;
freqs = G__36657;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$init_$_iter__36418(s__36419){
return (new cljs.core.LazySeq(null,(function (){
var s__36419__$1 = s__36419;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36419__$1);
if(temp__5735__auto__){
var s__36419__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36419__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36419__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36421 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36420 = (0);
while(true){
if((i__36420 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36420);
cljs.core.chunk_append(b__36421,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (i - ((n - s) - (-1)));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());

var G__36667 = (i__36420 + (1));
i__36420 = G__36667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36421),clojure$math$combinatorics$init_$_iter__36418(cljs.core.chunk_rest(s__36419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36421),null);
}
} else {
var i = cljs.core.first(s__36419__$2);
return cljs.core.cons((function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (i - ((n - s) - (-1)));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})(),clojure$math$combinatorics$init_$_iter__36418(cljs.core.rest(s__36419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__36423 = arguments.length;
switch (G__36423) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((((cljs.core.peek(b) > cljs.core.peek(a)))?(cljs.core.truth_(r)?(cljs.core.peek(a) < (r - (1))):true):false)){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if(((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))?(((cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true))?(cljs.core.truth_(s)?(((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j)):true):false):false)){
return j;
} else {
var G__36677 = (j - (1));
j = G__36677;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__36424 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = s;
if(cljs.core.truth_(and__4149__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4149__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__36679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__36680 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__36681 = (i + (1));
var G__36682 = (function (){var x__4249__auto__ = current_max;
var y__4250__auto__ = (new_a_i + (1));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
a__$2 = G__36679;
b__$1 = G__36680;
i = G__36681;
current_max = G__36682;
continue;
} else {
var G__36684 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__36685 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__36686 = (i + (1));
var G__36687 = current_max;
a__$2 = G__36684;
b__$1 = G__36685;
i = G__36686;
current_max = G__36687;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36689 = arguments.length;
var i__4772__auto___36690 = (0);
while(true){
if((i__4772__auto___36690 < len__4771__auto___36689)){
args__4777__auto__.push((arguments[i__4772__auto___36690]));

var G__36691 = (i__4772__auto___36690 + (1));
i__4772__auto___36690 = G__36691;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__36429){
var map__36430 = p__36429;
var map__36430__$1 = cljs.core.__destructure_map(map__36430);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36430__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36430__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4160__auto__ = from;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4160__auto__ = to;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = from;
if(cljs.core.truth_(and__4149__auto__)){
return (from <= (1));
} else {
return and__4149__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = to;
if(cljs.core.truth_(and__4149__auto__)){
return (to >= N);
} else {
return and__4149__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4160__auto__ = from__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4160__auto__ = from__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})() <= (function (){var or__4160__auto__ = to__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return N;
}
})())) && (((function (){var or__4160__auto__ = to__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36431(s__36432){
return (new cljs.core.LazySeq(null,(function (){
var s__36432__$1 = s__36432;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36432__$1);
if(temp__5735__auto__){
var s__36432__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36432__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36432__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36434 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36433 = (0);
while(true){
if((i__36433 < size__4563__auto__)){
var growth_string = cljs.core._nth(c__4562__auto__,i__36433);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__36434,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__36692 = (i__36433 + (1));
i__36433 = G__36692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36434),clojure$math$combinatorics$iter__36431(cljs.core.chunk_rest(s__36432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36434),null);
}
} else {
var growth_string = cljs.core.first(s__36432__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__36431(cljs.core.rest(s__36432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq36427){
var G__36428 = cljs.core.first(seq36427);
var seq36427__$1 = cljs.core.next(seq36427);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36428,seq36427__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36697 = arguments.length;
var i__4772__auto___36698 = (0);
while(true){
if((i__4772__auto___36698 < len__4771__auto___36697)){
args__4777__auto__.push((arguments[i__4772__auto___36698]));

var G__36699 = (i__4772__auto___36698 + (1));
i__4772__auto___36698 = G__36699;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36437(s__36438){
return (new cljs.core.LazySeq(null,(function (){
var s__36438__$1 = s__36438;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36438__$1);
if(temp__5735__auto__){
var s__36438__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36438__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36438__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36440 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36439 = (0);
while(true){
if((i__36439 < size__4563__auto__)){
var parts = cljs.core._nth(c__4562__auto__,i__36439);
cljs.core.chunk_append(b__36440,(function (){var iter__4564__auto__ = ((function (i__36439,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__36437_$_iter__36441(s__36442){
return (new cljs.core.LazySeq(null,((function (i__36439,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function (){
var s__36442__$1 = s__36442;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36442__$1);
if(temp__5735__auto____$1){
var s__36442__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36442__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36442__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36444 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36443 = (0);
while(true){
if((i__36443 < size__4563__auto____$1)){
var part = cljs.core._nth(c__4562__auto____$1,i__36443);
cljs.core.chunk_append(b__36444,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__36443,i__36439,part,c__4562__auto____$1,size__4563__auto____$1,b__36444,s__36442__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__36443,i__36439,part,c__4562__auto____$1,size__4563__auto____$1,b__36444,s__36442__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__36700 = (i__36443 + (1));
i__36443 = G__36700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36444),clojure$math$combinatorics$iter__36437_$_iter__36441(cljs.core.chunk_rest(s__36442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36444),null);
}
} else {
var part = cljs.core.first(s__36442__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__36439,part,s__36442__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__36439,part,s__36442__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__36437_$_iter__36441(cljs.core.rest(s__36442__$2)));
}
} else {
return null;
}
break;
}
});})(i__36439,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
,null,null));
});})(i__36439,parts,c__4562__auto__,size__4563__auto__,b__36440,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4564__auto__(parts);
})());

var G__36701 = (i__36439 + (1));
i__36439 = G__36701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36440),clojure$math$combinatorics$iter__36437(cljs.core.chunk_rest(s__36438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36440),null);
}
} else {
var parts = cljs.core.first(s__36438__$2);
return cljs.core.cons((function (){var iter__4564__auto__ = ((function (parts,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__36437_$_iter__36445(s__36446){
return (new cljs.core.LazySeq(null,(function (){
var s__36446__$1 = s__36446;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36446__$1);
if(temp__5735__auto____$1){
var s__36446__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36446__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36446__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36448 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36447 = (0);
while(true){
if((i__36447 < size__4563__auto__)){
var part = cljs.core._nth(c__4562__auto__,i__36447);
cljs.core.chunk_append(b__36448,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__36447,part,c__4562__auto__,size__4563__auto__,b__36448,s__36446__$2,temp__5735__auto____$1,parts,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__36447,part,c__4562__auto__,size__4563__auto__,b__36448,s__36446__$2,temp__5735__auto____$1,parts,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__36702 = (i__36447 + (1));
i__36447 = G__36702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36448),clojure$math$combinatorics$iter__36437_$_iter__36445(cljs.core.chunk_rest(s__36446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36448),null);
}
} else {
var part = cljs.core.first(s__36446__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__36446__$2,temp__5735__auto____$1,parts,s__36438__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__36446__$2,temp__5735__auto____$1,parts,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__36437_$_iter__36445(cljs.core.rest(s__36446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__36438__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4564__auto__(parts);
})(),clojure$math$combinatorics$iter__36437(cljs.core.rest(s__36438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq36435){
var G__36436 = cljs.core.first(seq36435);
var seq36435__$1 = cljs.core.next(seq36435);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36436,seq36435__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__36450 = arguments.length;
switch (G__36450) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__36451 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__36704 = (j + (1));
var G__36705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__36706 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__36456 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__36456) : multiset.call(null,G__36456));
})());
var G__36707 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__36457 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__36457) : multiset.call(null,G__36457));
})());
j = G__36704;
c__$1 = G__36705;
u__$1 = G__36706;
v__$1 = G__36707;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36451,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36451,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36451,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__36458 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__36708 = (j + (1));
var G__36709 = k;
var G__36710 = true;
var G__36711 = u__$2;
var G__36712 = v__$1;
var G__36713 = c__$1;
j = G__36708;
k = G__36709;
x = G__36710;
u__$1 = G__36711;
v__$1 = G__36712;
c__$1 = G__36713;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4252__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4253__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__36714 = j__$1;
var G__36715 = k__$1;
var G__36716 = x__$1;
var G__36717 = u__$2;
var G__36718 = v__$2;
var G__36719 = c__$2;
j = G__36714;
k = G__36715;
x = G__36716;
u__$1 = G__36717;
v__$1 = G__36718;
c__$1 = G__36719;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__36720 = j__$1;
var G__36721 = k__$1;
var G__36722 = x;
var G__36723 = u__$2;
var G__36724 = v__$2;
var G__36725 = c__$2;
j = G__36720;
k = G__36721;
x = G__36722;
u__$1 = G__36723;
v__$1 = G__36724;
c__$1 = G__36725;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458,(4),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = r;
if(cljs.core.truth_(and__4149__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4149__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = s;
if(cljs.core.truth_(and__4149__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4149__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__36726 = n;
var G__36727 = m;
var G__36728 = f__$1;
var G__36729 = c__$1;
var G__36730 = u__$1;
var G__36731 = v__$1;
var G__36732 = a__$1;
var G__36733 = b__$1;
var G__36734 = l__$1;
var G__36735 = r;
var G__36736 = s;
n = G__36726;
m = G__36727;
f = G__36728;
c = G__36729;
u = G__36730;
v = G__36731;
a = G__36732;
b = G__36733;
l = G__36734;
r = G__36735;
s = G__36736;
continue;
} else {
var part = (function (){var iter__4564__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__36461(s__36462){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__36462__$1 = s__36462;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36462__$1);
if(temp__5735__auto__){
var s__36462__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36462__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36462__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36464 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36463 = (0);
while(true){
if((i__36463 < size__4563__auto__)){
var y = cljs.core._nth(c__4562__auto__,i__36463);
cljs.core.chunk_append(b__36464,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__36465 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36465) : f.call(null,G__36465));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = ((function (i__36463,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36464,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__36461_$_iter__36466(s__36467){
return (new cljs.core.LazySeq(null,((function (i__36463,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36464,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__36467__$1 = s__36467;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36467__$1);
if(temp__5735__auto____$1){
var s__36467__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36467__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36467__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36469 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36468 = (0);
while(true){
if((i__36468 < size__4563__auto____$1)){
var z = cljs.core._nth(c__4562__auto____$1,i__36468);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__36469,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__36737 = (i__36468 + (1));
i__36468 = G__36737;
continue;
} else {
var G__36738 = (i__36468 + (1));
i__36468 = G__36738;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36469),clojure$math$combinatorics$iter__36461_$_iter__36466(cljs.core.chunk_rest(s__36467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36469),null);
}
} else {
var z = cljs.core.first(s__36467__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__36461_$_iter__36466(cljs.core.rest(s__36467__$2)));
} else {
var G__36741 = cljs.core.rest(s__36467__$2);
s__36467__$1 = G__36741;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__36463,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36464,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__36463,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36464,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k))
;
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__36742 = (i__36463 + (1));
i__36463 = G__36742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36464),clojure$math$combinatorics$iter__36461(cljs.core.chunk_rest(s__36462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36464),null);
}
} else {
var y = cljs.core.first(s__36462__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__36470 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36470) : f.call(null,G__36470));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__36461_$_iter__36471(s__36472){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__36472__$1 = s__36472;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36472__$1);
if(temp__5735__auto____$1){
var s__36472__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36472__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36472__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36474 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36473 = (0);
while(true){
if((i__36473 < size__4563__auto__)){
var z = cljs.core._nth(c__4562__auto__,i__36473);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__36474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__36743 = (i__36473 + (1));
i__36473 = G__36743;
continue;
} else {
var G__36744 = (i__36473 + (1));
i__36473 = G__36744;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36474),clojure$math$combinatorics$iter__36461_$_iter__36471(cljs.core.chunk_rest(s__36472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36474),null);
}
} else {
var z = cljs.core.first(s__36472__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__36461_$_iter__36471(cljs.core.rest(s__36472__$2)));
} else {
var G__36746 = cljs.core.rest(s__36472__$2);
s__36472__$1 = G__36746;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36462__$2,temp__5735__auto__,vec__36458,u__$1,v__$1,c__$1,j,k))
;
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__36461(cljs.core.rest(s__36462__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__36458,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__36458,u__$1,v__$1,c__$1,j,k))
;
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__36458,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__36458,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__36754 = (j - (1));
j = G__36754;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4149__auto__ = r;
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4149__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$m5_$_iter__36475(s__36476){
return (new cljs.core.LazySeq(null,(function (){
var s__36476__$1 = s__36476;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36476__$1);
if(temp__5735__auto__){
var s__36476__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36476__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36476__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36478 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36477 = (0);
while(true){
if((i__36477 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36477);
cljs.core.chunk_append(b__36478,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__36756 = (i__36477 + (1));
i__36477 = G__36756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36478),clojure$math$combinatorics$m5_$_iter__36475(cljs.core.chunk_rest(s__36476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36478),null);
}
} else {
var i = cljs.core.first(s__36476__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__36475(cljs.core.rest(s__36476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__36766 = cljs.core.rest(ks);
var G__36767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__36766;
v__$2 = G__36767;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__36768 = (k_1 - (1));
var G__36769 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__36770 = (amount - vk);
k_1 = G__36768;
v__$3 = G__36769;
amount = G__36770;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36771 = arguments.length;
var i__4772__auto___36772 = (0);
while(true){
if((i__4772__auto___36772 < len__4771__auto___36771)){
args__4777__auto__.push((arguments[i__4772__auto___36772]));

var G__36773 = (i__4772__auto___36772 + (1));
i__4772__auto___36772 = G__36773;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__36481){
var map__36482 = p__36481;
var map__36482__$1 = cljs.core.__destructure_map(map__36482);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4160__auto__ = from;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4160__auto__ = to;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = from;
if(cljs.core.truth_(and__4149__auto__)){
return (from <= (1));
} else {
return and__4149__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = to;
if(cljs.core.truth_(and__4149__auto__)){
return (to >= N);
} else {
return and__4149__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4160__auto__ = from__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4160__auto__ = from__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})() <= (function (){var or__4160__auto__ = to__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return N;
}
})())) && (((function (){var or__4160__auto__ = to__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36483(s__36484){
return (new cljs.core.LazySeq(null,(function (){
var s__36484__$1 = s__36484;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36484__$1);
if(temp__5735__auto__){
var s__36484__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36484__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36484__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36486 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36485 = (0);
while(true){
if((i__36485 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36485);
var j = (i + (1));
cljs.core.chunk_append(b__36486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__36487 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__36487) : freqs.call(null,G__36487));
})()], null));

var G__36787 = (i__36485 + (1));
i__36485 = G__36787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36486),clojure$math$combinatorics$iter__36483(cljs.core.chunk_rest(s__36484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36486),null);
}
} else {
var i = cljs.core.first(s__36484__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__36488 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__36488) : freqs.call(null,G__36488));
})()], null),clojure$math$combinatorics$iter__36483(cljs.core.rest(s__36484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36489(s__36490){
return (new cljs.core.LazySeq(null,(function (){
var s__36490__$1 = s__36490;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36490__$1);
if(temp__5735__auto__){
var s__36490__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36490__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36490__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36492 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36491 = (0);
while(true){
if((i__36491 < size__4563__auto__)){
var part = cljs.core._nth(c__4562__auto__,i__36491);
cljs.core.chunk_append(b__36492,(function (){var iter__4564__auto__ = ((function (i__36491,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function clojure$math$combinatorics$iter__36489_$_iter__36493(s__36494){
return (new cljs.core.LazySeq(null,((function (i__36491,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function (){
var s__36494__$1 = s__36494;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36494__$1);
if(temp__5735__auto____$1){
var s__36494__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36494__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36494__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36496 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36495 = (0);
while(true){
if((i__36495 < size__4563__auto____$1)){
var multiset = cljs.core._nth(c__4562__auto____$1,i__36495);
cljs.core.chunk_append(b__36496,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__36495,i__36491,multiset,c__4562__auto____$1,size__4563__auto____$1,b__36496,s__36494__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function (p__36497){
var vec__36498 = p__36497;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36498,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36498,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36501 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36501) : ditems.call(null,G__36501));
})());
});})(i__36495,i__36491,multiset,c__4562__auto____$1,size__4563__auto____$1,b__36496,s__36494__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
,multiset)));

var G__36807 = (i__36495 + (1));
i__36495 = G__36807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36496),clojure$math$combinatorics$iter__36489_$_iter__36493(cljs.core.chunk_rest(s__36494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36496),null);
}
} else {
var multiset = cljs.core.first(s__36494__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__36491,multiset,s__36494__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function (p__36502){
var vec__36503 = p__36502;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36506 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36506) : ditems.call(null,G__36506));
})());
});})(i__36491,multiset,s__36494__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__36489_$_iter__36493(cljs.core.rest(s__36494__$2)));
}
} else {
return null;
}
break;
}
});})(i__36491,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
,null,null));
});})(i__36491,part,c__4562__auto__,size__4563__auto__,b__36492,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
;
return iter__4564__auto__(part);
})());

var G__36808 = (i__36491 + (1));
i__36491 = G__36808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36492),clojure$math$combinatorics$iter__36489(cljs.core.chunk_rest(s__36490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36492),null);
}
} else {
var part = cljs.core.first(s__36490__$2);
return cljs.core.cons((function (){var iter__4564__auto__ = ((function (part,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function clojure$math$combinatorics$iter__36489_$_iter__36507(s__36508){
return (new cljs.core.LazySeq(null,(function (){
var s__36508__$1 = s__36508;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36508__$1);
if(temp__5735__auto____$1){
var s__36508__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36508__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36508__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36510 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36509 = (0);
while(true){
if((i__36509 < size__4563__auto__)){
var multiset = cljs.core._nth(c__4562__auto__,i__36509);
cljs.core.chunk_append(b__36510,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__36509,multiset,c__4562__auto__,size__4563__auto__,b__36510,s__36508__$2,temp__5735__auto____$1,part,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function (p__36511){
var vec__36512 = p__36511;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36512,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36512,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36515 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36515) : ditems.call(null,G__36515));
})());
});})(i__36509,multiset,c__4562__auto__,size__4563__auto__,b__36510,s__36508__$2,temp__5735__auto____$1,part,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
,multiset)));

var G__36817 = (i__36509 + (1));
i__36509 = G__36817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36510),clojure$math$combinatorics$iter__36489_$_iter__36507(cljs.core.chunk_rest(s__36508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36510),null);
}
} else {
var multiset = cljs.core.first(s__36508__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__36508__$2,temp__5735__auto____$1,part,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to){
return (function (p__36516){
var vec__36517 = p__36516;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36520 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36520) : ditems.call(null,G__36520));
})());
});})(multiset,s__36508__$2,temp__5735__auto____$1,part,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__36489_$_iter__36507(cljs.core.rest(s__36508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__36490__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36482,map__36482__$1,from,to))
;
return iter__4564__auto__(part);
})(),clojure$math$combinatorics$iter__36489(cljs.core.rest(s__36490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq36479){
var G__36480 = cljs.core.first(seq36479);
var seq36479__$1 = cljs.core.next(seq36479);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36480,seq36479__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36823 = arguments.length;
var i__4772__auto___36824 = (0);
while(true){
if((i__4772__auto___36824 < len__4771__auto___36823)){
args__4777__auto__.push((arguments[i__4772__auto___36824]));

var G__36825 = (i__4772__auto___36824 + (1));
i__4772__auto___36824 = G__36825;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq36521){
var G__36522 = cljs.core.first(seq36521);
var seq36521__$1 = cljs.core.next(seq36521);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36522,seq36521__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
