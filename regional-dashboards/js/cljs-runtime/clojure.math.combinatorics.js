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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__26371 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__26371) : clojure.math.combinatorics.join.call(null,G__26371));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__26372(s__26373){
return (new cljs.core.LazySeq(null,(function (){
var s__26373__$1 = s__26373;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26373__$1);
if(temp__5735__auto__){
var s__26373__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26373__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26373__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26375 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26374 = (0);
while(true){
if((i__26374 < size__4528__auto__)){
var j = cljs.core._nth(c__4527__auto__,i__26374);
cljs.core.chunk_append(b__26375,((j + cnt) + (- (n + (1)))));

var G__26634 = (i__26374 + (1));
i__26374 = G__26634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26375),clojure$math$combinatorics$index_combinations_$_iter__26372(cljs.core.chunk_rest(s__26373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26375),null);
}
} else {
var j = cljs.core.first(s__26373__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__26372(cljs.core.rest(s__26373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
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
var G__26639 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__26640 = (j__$1 - (1));
c__$3 = G__26639;
j__$1 = G__26640;
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
var G__26642 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__26643 = (index__$1 + (1));
var G__26644 = (already_distributed__$1 + mi);
distribution__$1 = G__26642;
index__$1 = G__26643;
already_distributed__$1 = G__26644;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__26387 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387,(2),null);
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
var vec__26390 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__26658 = distribution__$2;
distribution__$1 = G__26658;
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
var m = cljs.core.vec((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__26393(s__26394){
return (new cljs.core.LazySeq(null,(function (){
var s__26394__$1 = s__26394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26394__$1);
if(temp__5735__auto__){
var s__26394__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26394__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26394__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26396 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26395 = (0);
while(true){
if((i__26395 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26395);
cljs.core.chunk_append(b__26396,(function (){var G__26397 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26397) : f.call(null,G__26397));
})());

var G__26662 = (i__26395 + (1));
i__26395 = G__26662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26396),clojure$math$combinatorics$multi_comb_$_iter__26393(cljs.core.chunk_rest(s__26394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26396),null);
}
} else {
var i = cljs.core.first(s__26394__$2);
return cljs.core.cons((function (){var G__26398 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26398) : f.call(null,G__26398));
})(),clojure$math$combinatorics$multi_comb_$_iter__26393(cljs.core.rest(s__26394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4529__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__26399(s__26400){
return (new cljs.core.LazySeq(null,(function (){
var s__26400__$1 = s__26400;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26400__$1);
if(temp__5735__auto__){
var s__26400__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26400__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26400__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26402 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26401 = (0);
while(true){
if((i__26401 < size__4528__auto__)){
var q = cljs.core._nth(c__4527__auto__,i__26401);
cljs.core.chunk_append(b__26402,clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (i__26401,q,c__4527__auto__,size__4528__auto__,b__26402,s__26400__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__26399_$_iter__26403(s__26404){
return (new cljs.core.LazySeq(null,((function (i__26401,q,c__4527__auto__,size__4528__auto__,b__26402,s__26400__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function (){
var s__26404__$1 = s__26404;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26404__$1);
if(temp__5735__auto____$1){
var s__26404__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26404__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__26404__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__26406 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__26405 = (0);
while(true){
if((i__26405 < size__4528__auto____$1)){
var vec__26407 = cljs.core._nth(c__4527__auto____$1,i__26405);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26407,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26407,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26407,(2),null);
cljs.core.chunk_append(b__26406,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__26679 = (i__26405 + (1));
i__26405 = G__26679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26406),clojure$math$combinatorics$multi_comb_$_iter__26399_$_iter__26403(cljs.core.chunk_rest(s__26404__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26406),null);
}
} else {
var vec__26410 = cljs.core.first(s__26404__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26410,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26410,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26410,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__26399_$_iter__26403(cljs.core.rest(s__26404__$2)));
}
} else {
return null;
}
break;
}
});})(i__26401,q,c__4527__auto__,size__4528__auto__,b__26402,s__26400__$2,temp__5735__auto__,f,v,domain,m,qs))
,null,null));
});})(i__26401,q,c__4527__auto__,size__4528__auto__,b__26402,s__26400__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4529__auto__(q);
})()));

var G__26680 = (i__26401 + (1));
i__26401 = G__26680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26402),clojure$math$combinatorics$multi_comb_$_iter__26399(cljs.core.chunk_rest(s__26400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26402),null);
}
} else {
var q = cljs.core.first(s__26400__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (q,s__26400__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__26399_$_iter__26413(s__26414){
return (new cljs.core.LazySeq(null,(function (){
var s__26414__$1 = s__26414;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26414__$1);
if(temp__5735__auto____$1){
var s__26414__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26414__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26414__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26416 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26415 = (0);
while(true){
if((i__26415 < size__4528__auto__)){
var vec__26417 = cljs.core._nth(c__4527__auto__,i__26415);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417,(2),null);
cljs.core.chunk_append(b__26416,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__26693 = (i__26415 + (1));
i__26415 = G__26693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26416),clojure$math$combinatorics$multi_comb_$_iter__26399_$_iter__26413(cljs.core.chunk_rest(s__26414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26416),null);
}
} else {
var vec__26420 = cljs.core.first(s__26414__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__26399_$_iter__26413(cljs.core.rest(s__26414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__26400__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4529__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__26399(cljs.core.rest(s__26400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(qs);
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
var iter__4529__auto__ = (function clojure$math$combinatorics$combinations_$_iter__26424(s__26425){
return (new cljs.core.LazySeq(null,(function (){
var s__26425__$1 = s__26425;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26425__$1);
if(temp__5735__auto__){
var s__26425__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26425__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26425__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26427 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26426 = (0);
while(true){
if((i__26426 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__26426);
cljs.core.chunk_append(b__26427,(new cljs.core.List(null,item,null,(1),null)));

var G__26694 = (i__26426 + (1));
i__26426 = G__26694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26427),clojure$math$combinatorics$combinations_$_iter__26424(cljs.core.chunk_rest(s__26425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26427),null);
}
} else {
var item = cljs.core.first(s__26425__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__26424(cljs.core.rest(s__26425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26423_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__26423_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__26428 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__26428) : clojure.math.combinatorics.unchunk.call(null,G__26428));
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
var args__4742__auto__ = [];
var len__4736__auto___26696 = arguments.length;
var i__4737__auto___26697 = (0);
while(true){
if((i__4737__auto___26697 < len__4736__auto___26696)){
args__4742__auto__.push((arguments[i__4737__auto___26697]));

var G__26698 = (i__4737__auto___26697 + (1));
i__4737__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
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
var G__26701 = (i - (1));
var G__26702 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__26701;
v_seqs__$2 = G__26702;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq26429){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26429));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__26430 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__26430) : v.call(null,G__26430));
})())){
return i;
} else {
var G__26703 = (i - (1));
i = G__26703;
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
var G__26704 = (i - (1));
i = G__26704;
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
var G__26705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__26706 = (k + (1));
var G__26707 = (l__$1 - (1));
v__$1 = G__26705;
k = G__26706;
l__$1 = G__26707;
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
var G__26431 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__26431) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__26431));
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
var or__4126__auto__ = cljs.core.empty_QMARK_(s);
if(or__4126__auto__){
return or__4126__auto__;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__26435(s__26436){
return (new cljs.core.LazySeq(null,(function (){
var s__26436__$1 = s__26436;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26436__$1);
if(temp__5735__auto__){
var s__26436__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26436__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26436__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26438 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26437 = (0);
while(true){
if((i__26437 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26437);
cljs.core.chunk_append(b__26438,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26440 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26440) : f.call(null,G__26440));
})(),i));

var G__26709 = (i__26437 + (1));
i__26437 = G__26709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26438),clojure$math$combinatorics$multi_perm_$_iter__26435(cljs.core.chunk_rest(s__26436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26438),null);
}
} else {
var i = cljs.core.first(s__26436__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26441 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26441) : f.call(null,G__26441));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__26435(cljs.core.rest(s__26436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26442_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__26442_SHARP_);
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
var G__26710 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__26711 = (n__$1 - (1));
acc = G__26710;
n__$1 = G__26711;
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
var G__26712 = q;
var G__26713 = cljs.core.cons(r,digits);
var G__26714 = (divisor + (1));
n__$1 = G__26712;
digits = G__26713;
divisor = G__26714;
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
var G__26715 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__26716 = cljs.core.rest(l__$1);
var G__26717 = (n__$1 - (1));
acc = G__26715;
l__$1 = G__26716;
n__$1 = G__26717;
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
var G__26718 = cljs.core.rest(indices);
var G__26719 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__26720 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__26718;
l__$1 = G__26719;
perm = G__26720;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__26444(s__26445){
return (new cljs.core.LazySeq(null,(function (){
var s__26445__$1 = s__26445;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26445__$1);
if(temp__5735__auto__){
var s__26445__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26445__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26445__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26447 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26446 = (0);
while(true){
if((i__26446 < size__4528__auto__)){
var vec__26448 = cljs.core._nth(c__4527__auto__,i__26446);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26448,(1),null);
cljs.core.chunk_append(b__26447,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__26721 = (i__26446 + (1));
i__26446 = G__26721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26447),clojure$math$combinatorics$initial_perm_numbers_$_iter__26444(cljs.core.chunk_rest(s__26445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26447),null);
}
} else {
var vec__26451 = cljs.core.first(s__26445__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26451,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__26444(cljs.core.rest(s__26445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(freqs);
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
var G__26722 = cljs.core.rest(perm_numbers__$1);
var G__26723 = (index + (1));
perm_numbers__$1 = G__26722;
index = G__26723;
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
var vec__26457 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26457,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26457,(1),null);
var G__26724 = remainder;
var G__26725 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__26726 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__26724;
digits = G__26725;
freqs__$1 = G__26726;
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
var G__26727 = clojure.math.combinatorics.dec_key(freqs,item);
var G__26728 = cljs.core.rest(indices);
var G__26729 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__26727;
indices = G__26728;
perm = G__26729;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__26460(s__26461){
return (new cljs.core.LazySeq(null,(function (){
var s__26461__$1 = s__26461;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26461__$1);
if(temp__5735__auto__){
var s__26461__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26461__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26461__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26463 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26462 = (0);
while(true){
if((i__26462 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26462);
cljs.core.chunk_append(b__26463,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26464 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26464) : f.call(null,G__26464));
})(),i));

var G__26730 = (i__26462 + (1));
i__26462 = G__26730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26463),clojure$math$combinatorics$nth_permutation_$_iter__26460(cljs.core.chunk_rest(s__26461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26463),null);
}
} else {
var i = cljs.core.first(s__26461__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26465 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26465) : f.call(null,G__26465));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__26460(cljs.core.rest(s__26461__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__26466(s__26467){
return (new cljs.core.LazySeq(null,(function (){
var s__26467__$1 = s__26467;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26467__$1);
if(temp__5735__auto__){
var s__26467__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26467__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26467__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26469 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26468 = (0);
while(true){
if((i__26468 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26468);
cljs.core.chunk_append(b__26469,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26470 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26470) : f.call(null,G__26470));
})(),i));

var G__26731 = (i__26468 + (1));
i__26468 = G__26731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26469),clojure$math$combinatorics$drop_permutations_$_iter__26466(cljs.core.chunk_rest(s__26467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26469),null);
}
} else {
var i = cljs.core.first(s__26467__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26471 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26471) : f.call(null,G__26471));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__26466(cljs.core.rest(s__26467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
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
var G__26732 = n;
var G__26733 = (n - k);
n = G__26732;
k = G__26733;
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
var G__26472 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__26473 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__26472,G__26473) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__26472,G__26473));

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
var count_combinations_from_frequencies_orig_val__26474 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__26475 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__26475);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__26474);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__26734 = n__$1;
var G__26735 = y;
var G__26736 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__26734;
y = G__26735;
z = G__26736;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__26737 = n__$1;
var G__26738 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__26739 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__26737;
y = G__26738;
z = G__26739;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__26476(s__26477){
return (new cljs.core.LazySeq(null,(function (){
var s__26477__$1 = s__26477;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26477__$1);
if(temp__5735__auto__){
var s__26477__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26477__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26477__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26479 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26478 = (0);
while(true){
if((i__26478 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26478);
cljs.core.chunk_append(b__26479,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__26740 = (i__26478 + (1));
i__26478 = G__26740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26479),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__26476(cljs.core.chunk_rest(s__26477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26479),null);
}
} else {
var i = cljs.core.first(s__26477__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__26476(cljs.core.rest(s__26477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__26480 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__26481 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__26481);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__26480);
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
var G__26741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__26742 = cljs.core.rest(items__$1);
var G__26743 = (t__$1 - (1));
var G__26744 = n__$1;
comb = G__26741;
items__$1 = G__26742;
t__$1 = G__26743;
n__$1 = G__26744;
continue;
} else {
var G__26745 = comb;
var G__26746 = cljs.core.rest(items__$1);
var G__26747 = t__$1;
var G__26748 = (n__$1 - dc_dt);
comb = G__26745;
items__$1 = G__26746;
t__$1 = G__26747;
n__$1 = G__26748;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__26492(s__26493){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__26493__$1 = s__26493;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26493__$1);
if(temp__5735__auto__){
var s__26493__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26493__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26493__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26495 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26494 = (0);
while(true){
if((i__26494 < size__4528__auto__)){
var vec__26496 = cljs.core._nth(c__4527__auto__,i__26494);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26496,(1),null);
cljs.core.chunk_append(b__26495,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__26749 = (i__26494 + (1));
i__26494 = G__26749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26495),clojure$math$combinatorics$nth_combination_freqs_$_iter__26492(cljs.core.chunk_rest(s__26493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26495),null);
}
} else {
var vec__26499 = cljs.core.first(s__26493__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26499,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__26492(cljs.core.rest(s__26493__$2)));
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
return iter__4529__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__26750 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__26751 = remove_one_key;
var G__26752 = (t__$1 - (1));
var G__26753 = n__$1;
comb = G__26750;
freqs__$1 = G__26751;
t__$1 = G__26752;
n__$1 = G__26753;
continue;
} else {
var G__26754 = comb;
var G__26755 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__26756 = t__$1;
var G__26757 = (n__$1 - dc_dt);
comb = G__26754;
freqs__$1 = G__26755;
t__$1 = G__26756;
n__$1 = G__26757;
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
var count_combinations_from_frequencies_orig_val__26502 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__26503 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__26503);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__26504(s__26505){
return (new cljs.core.LazySeq(null,(function (){
var s__26505__$1 = s__26505;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26505__$1);
if(temp__5735__auto__){
var s__26505__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26505__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26505__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26507 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26506 = (0);
while(true){
if((i__26506 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26506);
cljs.core.chunk_append(b__26507,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26508 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26508) : f.call(null,G__26508));
})(),i));

var G__26758 = (i__26506 + (1));
i__26506 = G__26758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26507),clojure$math$combinatorics$nth_combination_$_iter__26504(cljs.core.chunk_rest(s__26505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26507),null);
}
} else {
var i = cljs.core.first(s__26505__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__26509 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26509) : f.call(null,G__26509));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__26504(cljs.core.rest(s__26505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__26502);
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
var G__26759 = (size + (1));
var G__26760 = (n__$1 - num_combinations);
size = G__26759;
n__$1 = G__26760;
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
var G__26761 = cljs.core.rest(l__$1);
var G__26762 = (n + (1));
l__$1 = G__26761;
n = G__26762;
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
var G__26771 = cljs.core.rest(l__$1);
var G__26772 = (function (){var G__26514 = index;
var G__26515 = (function (){var G__26516 = clojure.math.combinatorics.factorial(n);
var G__26517 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__26516,G__26517) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__26516,G__26517));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__26514,G__26515) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__26514,G__26515));
})();
var G__26773 = (n - (1));
l__$1 = G__26771;
index = G__26772;
n = G__26773;
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
var G__26774 = cljs.core.rest(l__$1);
var G__26775 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4529__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__26523(s__26524){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__26524__$1 = s__26524;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26524__$1);
if(temp__5735__auto__){
var s__26524__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26524__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26524__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26526 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26525 = (0);
while(true){
if((i__26525 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__26525);
cljs.core.chunk_append(b__26526,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__26777 = (i__26525 + (1));
i__26525 = G__26777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26526),clojure$math$combinatorics$permutation_index_duplicates_$_iter__26523(cljs.core.chunk_rest(s__26524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26526),null);
}
} else {
var k = cljs.core.first(s__26524__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__26523(cljs.core.rest(s__26524__$2)));
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
return iter__4529__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4529__auto__){
return (function (p1__26518_SHARP_){
return (cljs.core.compare(p1__26518_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4529__auto__))
,cljs.core.keys(freqs)));
})());
var G__26776 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__26774;
index = G__26775;
freqs = G__26776;
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
return cljs.core.vec((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$init_$_iter__26527(s__26528){
return (new cljs.core.LazySeq(null,(function (){
var s__26528__$1 = s__26528;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26528__$1);
if(temp__5735__auto__){
var s__26528__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26528__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26528__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26530 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26529 = (0);
while(true){
if((i__26529 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26529);
cljs.core.chunk_append(b__26530,(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (i - ((n - s) - (-1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

var G__26778 = (i__26529 + (1));
i__26529 = G__26778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26530),clojure$math$combinatorics$init_$_iter__26527(cljs.core.chunk_rest(s__26528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26530),null);
}
} else {
var i = cljs.core.first(s__26528__$2);
return cljs.core.cons((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (i - ((n - s) - (-1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),clojure$math$combinatorics$init_$_iter__26527(cljs.core.rest(s__26528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__26532 = arguments.length;
switch (G__26532) {
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
var G__26780 = (j - (1));
j = G__26780;
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
var vec__26533 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = s;
if(cljs.core.truth_(and__4115__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4115__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__26781 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__26782 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__26783 = (i + (1));
var G__26784 = (function (){var x__4214__auto__ = current_max;
var y__4215__auto__ = (new_a_i + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
a__$2 = G__26781;
b__$1 = G__26782;
i = G__26783;
current_max = G__26784;
continue;
} else {
var G__26785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__26786 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__26787 = (i + (1));
var G__26788 = current_max;
a__$2 = G__26785;
b__$1 = G__26786;
i = G__26787;
current_max = G__26788;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26533,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26533,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26789 = arguments.length;
var i__4737__auto___26790 = (0);
while(true){
if((i__4737__auto___26790 < len__4736__auto___26789)){
args__4742__auto__.push((arguments[i__4737__auto___26790]));

var G__26791 = (i__4737__auto___26790 + (1));
i__4737__auto___26790 = G__26791;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__26538){
var map__26539 = p__26538;
var map__26539__$1 = (((((!((map__26539 == null))))?(((((map__26539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26539):map__26539);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26539__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26539__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4126__auto__ = from;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4126__auto__ = to;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = from;
if(cljs.core.truth_(and__4115__auto__)){
return (from <= (1));
} else {
return and__4115__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = to;
if(cljs.core.truth_(and__4115__auto__)){
return (to >= N);
} else {
return and__4115__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() <= (function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})())) && (((function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__26541(s__26542){
return (new cljs.core.LazySeq(null,(function (){
var s__26542__$1 = s__26542;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26542__$1);
if(temp__5735__auto__){
var s__26542__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26542__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26542__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26544 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26543 = (0);
while(true){
if((i__26543 < size__4528__auto__)){
var growth_string = cljs.core._nth(c__4527__auto__,i__26543);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__26544,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__26798 = (i__26543 + (1));
i__26543 = G__26798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26544),clojure$math$combinatorics$iter__26541(cljs.core.chunk_rest(s__26542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26544),null);
}
} else {
var growth_string = cljs.core.first(s__26542__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__26541(cljs.core.rest(s__26542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq26536){
var G__26537 = cljs.core.first(seq26536);
var seq26536__$1 = cljs.core.next(seq26536);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26537,seq26536__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26801 = arguments.length;
var i__4737__auto___26802 = (0);
while(true){
if((i__4737__auto___26802 < len__4736__auto___26801)){
args__4742__auto__.push((arguments[i__4737__auto___26802]));

var G__26803 = (i__4737__auto___26802 + (1));
i__4737__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__26547(s__26548){
return (new cljs.core.LazySeq(null,(function (){
var s__26548__$1 = s__26548;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26548__$1);
if(temp__5735__auto__){
var s__26548__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26548__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26548__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26550 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26549 = (0);
while(true){
if((i__26549 < size__4528__auto__)){
var parts = cljs.core._nth(c__4527__auto__,i__26549);
cljs.core.chunk_append(b__26550,(function (){var iter__4529__auto__ = ((function (i__26549,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__26547_$_iter__26551(s__26552){
return (new cljs.core.LazySeq(null,((function (i__26549,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function (){
var s__26552__$1 = s__26552;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26552__$1);
if(temp__5735__auto____$1){
var s__26552__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26552__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__26552__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__26554 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__26553 = (0);
while(true){
if((i__26553 < size__4528__auto____$1)){
var part = cljs.core._nth(c__4527__auto____$1,i__26553);
cljs.core.chunk_append(b__26554,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__26553,i__26549,part,c__4527__auto____$1,size__4528__auto____$1,b__26554,s__26552__$2,temp__5735__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__26553,i__26549,part,c__4527__auto____$1,size__4528__auto____$1,b__26554,s__26552__$2,temp__5735__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__26812 = (i__26553 + (1));
i__26553 = G__26812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26554),clojure$math$combinatorics$iter__26547_$_iter__26551(cljs.core.chunk_rest(s__26552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26554),null);
}
} else {
var part = cljs.core.first(s__26552__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__26549,part,s__26552__$2,temp__5735__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__26549,part,s__26552__$2,temp__5735__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__26547_$_iter__26551(cljs.core.rest(s__26552__$2)));
}
} else {
return null;
}
break;
}
});})(i__26549,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
,null,null));
});})(i__26549,parts,c__4527__auto__,size__4528__auto__,b__26550,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4529__auto__(parts);
})());

var G__26815 = (i__26549 + (1));
i__26549 = G__26815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26550),clojure$math$combinatorics$iter__26547(cljs.core.chunk_rest(s__26548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26550),null);
}
} else {
var parts = cljs.core.first(s__26548__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (parts,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__26547_$_iter__26555(s__26556){
return (new cljs.core.LazySeq(null,(function (){
var s__26556__$1 = s__26556;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26556__$1);
if(temp__5735__auto____$1){
var s__26556__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26556__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26556__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26558 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26557 = (0);
while(true){
if((i__26557 < size__4528__auto__)){
var part = cljs.core._nth(c__4527__auto__,i__26557);
cljs.core.chunk_append(b__26558,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__26557,part,c__4527__auto__,size__4528__auto__,b__26558,s__26556__$2,temp__5735__auto____$1,parts,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__26557,part,c__4527__auto__,size__4528__auto__,b__26558,s__26556__$2,temp__5735__auto____$1,parts,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__26820 = (i__26557 + (1));
i__26557 = G__26820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26558),clojure$math$combinatorics$iter__26547_$_iter__26555(cljs.core.chunk_rest(s__26556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26558),null);
}
} else {
var part = cljs.core.first(s__26556__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__26556__$2,temp__5735__auto____$1,parts,s__26548__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__26556__$2,temp__5735__auto____$1,parts,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__26547_$_iter__26555(cljs.core.rest(s__26556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__26548__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4529__auto__(parts);
})(),clojure$math$combinatorics$iter__26547(cljs.core.rest(s__26548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq26545){
var G__26546 = cljs.core.first(seq26545);
var seq26545__$1 = cljs.core.next(seq26545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26546,seq26545__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__26560 = arguments.length;
switch (G__26560) {
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
var vec__26561 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__26823 = (j + (1));
var G__26824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__26825 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__26566 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__26566) : multiset.call(null,G__26566));
})());
var G__26826 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__26567 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__26567) : multiset.call(null,G__26567));
})());
j = G__26823;
c__$1 = G__26824;
u__$1 = G__26825;
v__$1 = G__26826;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__26568 = (function (){var j = a;
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
var G__26827 = (j + (1));
var G__26828 = k;
var G__26829 = true;
var G__26830 = u__$2;
var G__26831 = v__$1;
var G__26832 = c__$1;
j = G__26827;
k = G__26828;
x = G__26829;
u__$1 = G__26830;
v__$1 = G__26831;
c__$1 = G__26832;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4217__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4218__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__26833 = j__$1;
var G__26834 = k__$1;
var G__26835 = x__$1;
var G__26836 = u__$2;
var G__26837 = v__$2;
var G__26838 = c__$2;
j = G__26833;
k = G__26834;
x = G__26835;
u__$1 = G__26836;
v__$1 = G__26837;
c__$1 = G__26838;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__26839 = j__$1;
var G__26840 = k__$1;
var G__26841 = x;
var G__26842 = u__$2;
var G__26843 = v__$2;
var G__26844 = c__$2;
j = G__26839;
k = G__26840;
x = G__26841;
u__$1 = G__26842;
v__$1 = G__26843;
c__$1 = G__26844;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(4),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = r;
if(cljs.core.truth_(and__4115__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4115__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = s;
if(cljs.core.truth_(and__4115__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4115__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__26845 = n;
var G__26846 = m;
var G__26847 = f__$1;
var G__26848 = c__$1;
var G__26849 = u__$1;
var G__26850 = v__$1;
var G__26851 = a__$1;
var G__26852 = b__$1;
var G__26853 = l__$1;
var G__26854 = r;
var G__26855 = s;
n = G__26845;
m = G__26846;
f = G__26847;
c = G__26848;
u = G__26849;
v = G__26850;
a = G__26851;
b = G__26852;
l = G__26853;
r = G__26854;
s = G__26855;
continue;
} else {
var part = (function (){var iter__4529__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__26571(s__26572){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__26572__$1 = s__26572;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26572__$1);
if(temp__5735__auto__){
var s__26572__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26572__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26572__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26574 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26573 = (0);
while(true){
if((i__26573 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__26573);
cljs.core.chunk_append(b__26574,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__26575 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26575) : f.call(null,G__26575));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__26573,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__26574,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__26571_$_iter__26576(s__26577){
return (new cljs.core.LazySeq(null,((function (i__26573,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__26574,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__26577__$1 = s__26577;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26577__$1);
if(temp__5735__auto____$1){
var s__26577__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26577__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__26577__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__26579 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__26578 = (0);
while(true){
if((i__26578 < size__4528__auto____$1)){
var z = cljs.core._nth(c__4527__auto____$1,i__26578);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__26579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__26856 = (i__26578 + (1));
i__26578 = G__26856;
continue;
} else {
var G__26857 = (i__26578 + (1));
i__26578 = G__26857;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26579),clojure$math$combinatorics$iter__26571_$_iter__26576(cljs.core.chunk_rest(s__26577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26579),null);
}
} else {
var z = cljs.core.first(s__26577__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__26571_$_iter__26576(cljs.core.rest(s__26577__$2)));
} else {
var G__26858 = cljs.core.rest(s__26577__$2);
s__26577__$1 = G__26858;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__26573,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__26574,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__26573,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__26574,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__26859 = (i__26573 + (1));
i__26573 = G__26859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26574),clojure$math$combinatorics$iter__26571(cljs.core.chunk_rest(s__26572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26574),null);
}
} else {
var y = cljs.core.first(s__26572__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__26580 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26580) : f.call(null,G__26580));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__26571_$_iter__26581(s__26582){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__26582__$1 = s__26582;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26582__$1);
if(temp__5735__auto____$1){
var s__26582__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26582__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26582__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26584 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26583 = (0);
while(true){
if((i__26583 < size__4528__auto__)){
var z = cljs.core._nth(c__4527__auto__,i__26583);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__26584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__26860 = (i__26583 + (1));
i__26583 = G__26860;
continue;
} else {
var G__26861 = (i__26583 + (1));
i__26583 = G__26861;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26584),clojure$math$combinatorics$iter__26571_$_iter__26581(cljs.core.chunk_rest(s__26582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26584),null);
}
} else {
var z = cljs.core.first(s__26582__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__26571_$_iter__26581(cljs.core.rest(s__26582__$2)));
} else {
var G__26862 = cljs.core.rest(s__26582__$2);
s__26582__$1 = G__26862;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__26572__$2,temp__5735__auto__,vec__26568,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__26571(cljs.core.rest(s__26572__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__26568,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__26568,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__26568,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__26568,u__$1,v__$1,c__$1,j,k))
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
var G__26865 = (j - (1));
j = G__26865;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = r;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4115__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$m5_$_iter__26585(s__26586){
return (new cljs.core.LazySeq(null,(function (){
var s__26586__$1 = s__26586;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26586__$1);
if(temp__5735__auto__){
var s__26586__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26586__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26586__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26588 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26587 = (0);
while(true){
if((i__26587 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26587);
cljs.core.chunk_append(b__26588,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__26869 = (i__26587 + (1));
i__26587 = G__26869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26588),clojure$math$combinatorics$m5_$_iter__26585(cljs.core.chunk_rest(s__26586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26588),null);
}
} else {
var i = cljs.core.first(s__26586__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__26585(cljs.core.rest(s__26586__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__26876 = cljs.core.rest(ks);
var G__26877 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__26876;
v__$2 = G__26877;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__26881 = (k_1 - (1));
var G__26882 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__26883 = (amount - vk);
k_1 = G__26881;
v__$3 = G__26882;
amount = G__26883;
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
var args__4742__auto__ = [];
var len__4736__auto___26884 = arguments.length;
var i__4737__auto___26885 = (0);
while(true){
if((i__4737__auto___26885 < len__4736__auto___26884)){
args__4742__auto__.push((arguments[i__4737__auto___26885]));

var G__26886 = (i__4737__auto___26885 + (1));
i__4737__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__26591){
var map__26592 = p__26591;
var map__26592__$1 = (((((!((map__26592 == null))))?(((((map__26592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26592):map__26592);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26592__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26592__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4126__auto__ = from;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4126__auto__ = to;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var from__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = from;
if(cljs.core.truth_(and__4115__auto__)){
return (from <= (1));
} else {
return and__4115__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = to;
if(cljs.core.truth_(and__4115__auto__)){
return (to >= N);
} else {
return and__4115__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() <= (function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})())) && (((function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$iter__26594(s__26595){
return (new cljs.core.LazySeq(null,(function (){
var s__26595__$1 = s__26595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26595__$1);
if(temp__5735__auto__){
var s__26595__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26595__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26595__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26597 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26596 = (0);
while(true){
if((i__26596 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__26596);
var j = (i + (1));
cljs.core.chunk_append(b__26597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__26598 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__26598) : freqs.call(null,G__26598));
})()], null));

var G__26901 = (i__26596 + (1));
i__26596 = G__26901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26597),clojure$math$combinatorics$iter__26594(cljs.core.chunk_rest(s__26595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26597),null);
}
} else {
var i = cljs.core.first(s__26595__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__26599 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__26599) : freqs.call(null,G__26599));
})()], null),clojure$math$combinatorics$iter__26594(cljs.core.rest(s__26595__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__26600(s__26601){
return (new cljs.core.LazySeq(null,(function (){
var s__26601__$1 = s__26601;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26601__$1);
if(temp__5735__auto__){
var s__26601__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26601__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26601__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26603 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26602 = (0);
while(true){
if((i__26602 < size__4528__auto__)){
var part = cljs.core._nth(c__4527__auto__,i__26602);
cljs.core.chunk_append(b__26603,(function (){var iter__4529__auto__ = ((function (i__26602,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function clojure$math$combinatorics$iter__26600_$_iter__26604(s__26605){
return (new cljs.core.LazySeq(null,((function (i__26602,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function (){
var s__26605__$1 = s__26605;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26605__$1);
if(temp__5735__auto____$1){
var s__26605__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26605__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__26605__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__26607 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__26606 = (0);
while(true){
if((i__26606 < size__4528__auto____$1)){
var multiset = cljs.core._nth(c__4527__auto____$1,i__26606);
cljs.core.chunk_append(b__26607,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__26606,i__26602,multiset,c__4527__auto____$1,size__4528__auto____$1,b__26607,s__26605__$2,temp__5735__auto____$1,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function (p__26608){
var vec__26609 = p__26608;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26609,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26609,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__26612 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__26612) : ditems.call(null,G__26612));
})());
});})(i__26606,i__26602,multiset,c__4527__auto____$1,size__4528__auto____$1,b__26607,s__26605__$2,temp__5735__auto____$1,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
,multiset)));

var G__26930 = (i__26606 + (1));
i__26606 = G__26930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26607),clojure$math$combinatorics$iter__26600_$_iter__26604(cljs.core.chunk_rest(s__26605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26607),null);
}
} else {
var multiset = cljs.core.first(s__26605__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__26602,multiset,s__26605__$2,temp__5735__auto____$1,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function (p__26613){
var vec__26614 = p__26613;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26614,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26614,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__26617 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__26617) : ditems.call(null,G__26617));
})());
});})(i__26602,multiset,s__26605__$2,temp__5735__auto____$1,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__26600_$_iter__26604(cljs.core.rest(s__26605__$2)));
}
} else {
return null;
}
break;
}
});})(i__26602,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
,null,null));
});})(i__26602,part,c__4527__auto__,size__4528__auto__,b__26603,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
;
return iter__4529__auto__(part);
})());

var G__26940 = (i__26602 + (1));
i__26602 = G__26940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26603),clojure$math$combinatorics$iter__26600(cljs.core.chunk_rest(s__26601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26603),null);
}
} else {
var part = cljs.core.first(s__26601__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (part,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function clojure$math$combinatorics$iter__26600_$_iter__26618(s__26619){
return (new cljs.core.LazySeq(null,(function (){
var s__26619__$1 = s__26619;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26619__$1);
if(temp__5735__auto____$1){
var s__26619__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26619__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26619__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26621 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26620 = (0);
while(true){
if((i__26620 < size__4528__auto__)){
var multiset = cljs.core._nth(c__4527__auto__,i__26620);
cljs.core.chunk_append(b__26621,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__26620,multiset,c__4527__auto__,size__4528__auto__,b__26621,s__26619__$2,temp__5735__auto____$1,part,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function (p__26622){
var vec__26623 = p__26622;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26623,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26623,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__26626 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__26626) : ditems.call(null,G__26626));
})());
});})(i__26620,multiset,c__4527__auto__,size__4528__auto__,b__26621,s__26619__$2,temp__5735__auto____$1,part,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
,multiset)));

var G__26953 = (i__26620 + (1));
i__26620 = G__26953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26621),clojure$math$combinatorics$iter__26600_$_iter__26618(cljs.core.chunk_rest(s__26619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26621),null);
}
} else {
var multiset = cljs.core.first(s__26619__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__26619__$2,temp__5735__auto____$1,part,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to){
return (function (p__26627){
var vec__26628 = p__26627;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26628,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26628,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__26631 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__26631) : ditems.call(null,G__26631));
})());
});})(multiset,s__26619__$2,temp__5735__auto____$1,part,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__26600_$_iter__26618(cljs.core.rest(s__26619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__26601__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__26592,map__26592__$1,from,to))
;
return iter__4529__auto__(part);
})(),clojure$math$combinatorics$iter__26600(cljs.core.rest(s__26601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq26589){
var G__26590 = cljs.core.first(seq26589);
var seq26589__$1 = cljs.core.next(seq26589);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26590,seq26589__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26954 = arguments.length;
var i__4737__auto___26955 = (0);
while(true){
if((i__4737__auto___26955 < len__4736__auto___26954)){
args__4742__auto__.push((arguments[i__4737__auto___26955]));

var G__26956 = (i__4737__auto___26955 + (1));
i__4737__auto___26955 = G__26956;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq26632){
var G__26633 = cljs.core.first(seq26632);
var seq26632__$1 = cljs.core.next(seq26632);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26633,seq26632__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
