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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__36075 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__36075) : clojure.math.combinatorics.join.call(null,G__36075));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__36081(s__36082){
return (new cljs.core.LazySeq(null,(function (){
var s__36082__$1 = s__36082;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36082__$1);
if(temp__5735__auto__){
var s__36082__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36082__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36082__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36084 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36083 = (0);
while(true){
if((i__36083 < size__4563__auto__)){
var j = cljs.core._nth(c__4562__auto__,i__36083);
cljs.core.chunk_append(b__36084,((j + cnt) + (- (n + (1)))));

var G__36672 = (i__36083 + (1));
i__36083 = G__36672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36084),clojure$math$combinatorics$index_combinations_$_iter__36081(cljs.core.chunk_rest(s__36082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36084),null);
}
} else {
var j = cljs.core.first(s__36082__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__36081(cljs.core.rest(s__36082__$2)));
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
var G__36673 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__36674 = (j__$1 - (1));
c__$3 = G__36673;
j__$1 = G__36674;
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
var G__36675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__36676 = (index__$1 + (1));
var G__36677 = (already_distributed__$1 + mi);
distribution__$1 = G__36675;
index__$1 = G__36676;
already_distributed__$1 = G__36677;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__36094 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(2),null);
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
var vec__36102 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36102,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36102,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36102,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__36678 = distribution__$2;
distribution__$1 = G__36678;
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
var m = cljs.core.vec((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__36109(s__36110){
return (new cljs.core.LazySeq(null,(function (){
var s__36110__$1 = s__36110;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36110__$1);
if(temp__5735__auto__){
var s__36110__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36110__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36110__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36112 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36111 = (0);
while(true){
if((i__36111 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36111);
cljs.core.chunk_append(b__36112,(function (){var G__36114 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36114) : f.call(null,G__36114));
})());

var G__36679 = (i__36111 + (1));
i__36111 = G__36679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36112),clojure$math$combinatorics$multi_comb_$_iter__36109(cljs.core.chunk_rest(s__36110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36112),null);
}
} else {
var i = cljs.core.first(s__36110__$2);
return cljs.core.cons((function (){var G__36116 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36116) : f.call(null,G__36116));
})(),clojure$math$combinatorics$multi_comb_$_iter__36109(cljs.core.rest(s__36110__$2)));
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
var iter__4564__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__36117(s__36118){
return (new cljs.core.LazySeq(null,(function (){
var s__36118__$1 = s__36118;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36118__$1);
if(temp__5735__auto__){
var s__36118__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36118__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36118__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36120 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36119 = (0);
while(true){
if((i__36119 < size__4563__auto__)){
var q = cljs.core._nth(c__4562__auto__,i__36119);
cljs.core.chunk_append(b__36120,clojure.math.combinatorics.join((function (){var iter__4564__auto__ = ((function (i__36119,q,c__4562__auto__,size__4563__auto__,b__36120,s__36118__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__36117_$_iter__36125(s__36126){
return (new cljs.core.LazySeq(null,((function (i__36119,q,c__4562__auto__,size__4563__auto__,b__36120,s__36118__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function (){
var s__36126__$1 = s__36126;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36126__$1);
if(temp__5735__auto____$1){
var s__36126__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36126__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36126__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36128 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36127 = (0);
while(true){
if((i__36127 < size__4563__auto____$1)){
var vec__36141 = cljs.core._nth(c__4562__auto____$1,i__36127);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(2),null);
cljs.core.chunk_append(b__36128,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__36680 = (i__36127 + (1));
i__36127 = G__36680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36128),clojure$math$combinatorics$multi_comb_$_iter__36117_$_iter__36125(cljs.core.chunk_rest(s__36126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36128),null);
}
} else {
var vec__36144 = cljs.core.first(s__36126__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__36117_$_iter__36125(cljs.core.rest(s__36126__$2)));
}
} else {
return null;
}
break;
}
});})(i__36119,q,c__4562__auto__,size__4563__auto__,b__36120,s__36118__$2,temp__5735__auto__,f,v,domain,m,qs))
,null,null));
});})(i__36119,q,c__4562__auto__,size__4563__auto__,b__36120,s__36118__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4564__auto__(q);
})()));

var G__36681 = (i__36119 + (1));
i__36119 = G__36681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36120),clojure$math$combinatorics$multi_comb_$_iter__36117(cljs.core.chunk_rest(s__36118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36120),null);
}
} else {
var q = cljs.core.first(s__36118__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4564__auto__ = ((function (q,s__36118__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__36117_$_iter__36147(s__36148){
return (new cljs.core.LazySeq(null,(function (){
var s__36148__$1 = s__36148;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36148__$1);
if(temp__5735__auto____$1){
var s__36148__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36148__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36148__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36150 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36149 = (0);
while(true){
if((i__36149 < size__4563__auto__)){
var vec__36155 = cljs.core._nth(c__4562__auto__,i__36149);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36155,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36155,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36155,(2),null);
cljs.core.chunk_append(b__36150,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__36683 = (i__36149 + (1));
i__36149 = G__36683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36150),clojure$math$combinatorics$multi_comb_$_iter__36117_$_iter__36147(cljs.core.chunk_rest(s__36148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36150),null);
}
} else {
var vec__36158 = cljs.core.first(s__36148__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__36117_$_iter__36147(cljs.core.rest(s__36148__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__36118__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4564__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__36117(cljs.core.rest(s__36118__$2)));
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
var iter__4564__auto__ = (function clojure$math$combinatorics$combinations_$_iter__36172(s__36173){
return (new cljs.core.LazySeq(null,(function (){
var s__36173__$1 = s__36173;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36173__$1);
if(temp__5735__auto__){
var s__36173__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36173__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36173__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36175 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36174 = (0);
while(true){
if((i__36174 < size__4563__auto__)){
var item = cljs.core._nth(c__4562__auto__,i__36174);
cljs.core.chunk_append(b__36175,(new cljs.core.List(null,item,null,(1),null)));

var G__36684 = (i__36174 + (1));
i__36174 = G__36684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36175),clojure$math$combinatorics$combinations_$_iter__36172(cljs.core.chunk_rest(s__36173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36175),null);
}
} else {
var item = cljs.core.first(s__36173__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__36172(cljs.core.rest(s__36173__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36167_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__36167_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__36202 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__36202) : clojure.math.combinatorics.unchunk.call(null,G__36202));
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
var len__4771__auto___36688 = arguments.length;
var i__4772__auto___36689 = (0);
while(true){
if((i__4772__auto___36689 < len__4771__auto___36688)){
args__4777__auto__.push((arguments[i__4772__auto___36689]));

var G__36690 = (i__4772__auto___36689 + (1));
i__4772__auto___36689 = G__36690;
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
var G__36696 = (i - (1));
var G__36697 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__36696;
v_seqs__$2 = G__36697;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq36203){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36203));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__36228 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__36228) : v.call(null,G__36228));
})())){
return i;
} else {
var G__36698 = (i - (1));
i = G__36698;
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
var G__36700 = (i - (1));
i = G__36700;
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
var G__36701 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__36702 = (k + (1));
var G__36703 = (l__$1 - (1));
v__$1 = G__36701;
k = G__36702;
l__$1 = G__36703;
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
var G__36236 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__36236) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__36236));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__36254(s__36255){
return (new cljs.core.LazySeq(null,(function (){
var s__36255__$1 = s__36255;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36255__$1);
if(temp__5735__auto__){
var s__36255__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36255__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36255__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36257 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36256 = (0);
while(true){
if((i__36256 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36256);
cljs.core.chunk_append(b__36257,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36258 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36258) : f.call(null,G__36258));
})(),i));

var G__36705 = (i__36256 + (1));
i__36256 = G__36705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36257),clojure$math$combinatorics$multi_perm_$_iter__36254(cljs.core.chunk_rest(s__36255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36257),null);
}
} else {
var i = cljs.core.first(s__36255__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36259 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36259) : f.call(null,G__36259));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__36254(cljs.core.rest(s__36255__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36260_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__36260_SHARP_);
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
var G__36709 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__36710 = (n__$1 - (1));
acc = G__36709;
n__$1 = G__36710;
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
var G__36712 = q;
var G__36713 = cljs.core.cons(r,digits);
var G__36714 = (divisor + (1));
n__$1 = G__36712;
digits = G__36713;
divisor = G__36714;
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
var G__36716 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__36717 = cljs.core.rest(l__$1);
var G__36718 = (n__$1 - (1));
acc = G__36716;
l__$1 = G__36717;
n__$1 = G__36718;
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
var G__36724 = cljs.core.rest(indices);
var G__36725 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__36726 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__36724;
l__$1 = G__36725;
perm = G__36726;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__36270(s__36271){
return (new cljs.core.LazySeq(null,(function (){
var s__36271__$1 = s__36271;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36271__$1);
if(temp__5735__auto__){
var s__36271__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36271__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36271__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36273 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36272 = (0);
while(true){
if((i__36272 < size__4563__auto__)){
var vec__36274 = cljs.core._nth(c__4562__auto__,i__36272);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274,(1),null);
cljs.core.chunk_append(b__36273,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__36728 = (i__36272 + (1));
i__36272 = G__36728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36273),clojure$math$combinatorics$initial_perm_numbers_$_iter__36270(cljs.core.chunk_rest(s__36271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36273),null);
}
} else {
var vec__36278 = cljs.core.first(s__36271__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__36270(cljs.core.rest(s__36271__$2)));
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
var G__36731 = cljs.core.rest(perm_numbers__$1);
var G__36732 = (index + (1));
perm_numbers__$1 = G__36731;
index = G__36732;
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
var vec__36285 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36285,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36285,(1),null);
var G__36733 = remainder;
var G__36734 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__36735 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__36733;
digits = G__36734;
freqs__$1 = G__36735;
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
var G__36738 = clojure.math.combinatorics.dec_key(freqs,item);
var G__36739 = cljs.core.rest(indices);
var G__36740 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__36738;
indices = G__36739;
perm = G__36740;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__36289(s__36290){
return (new cljs.core.LazySeq(null,(function (){
var s__36290__$1 = s__36290;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36290__$1);
if(temp__5735__auto__){
var s__36290__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36290__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36290__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36292 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36291 = (0);
while(true){
if((i__36291 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36291);
cljs.core.chunk_append(b__36292,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36293 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36293) : f.call(null,G__36293));
})(),i));

var G__36751 = (i__36291 + (1));
i__36291 = G__36751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36292),clojure$math$combinatorics$nth_permutation_$_iter__36289(cljs.core.chunk_rest(s__36290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36292),null);
}
} else {
var i = cljs.core.first(s__36290__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36297 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36297) : f.call(null,G__36297));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__36289(cljs.core.rest(s__36290__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__36316(s__36317){
return (new cljs.core.LazySeq(null,(function (){
var s__36317__$1 = s__36317;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36317__$1);
if(temp__5735__auto__){
var s__36317__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36317__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36317__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36319 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36318 = (0);
while(true){
if((i__36318 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36318);
cljs.core.chunk_append(b__36319,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36326 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36326) : f.call(null,G__36326));
})(),i));

var G__36755 = (i__36318 + (1));
i__36318 = G__36755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36319),clojure$math$combinatorics$drop_permutations_$_iter__36316(cljs.core.chunk_rest(s__36317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36319),null);
}
} else {
var i = cljs.core.first(s__36317__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36328 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36328) : f.call(null,G__36328));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__36316(cljs.core.rest(s__36317__$2)));
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
var G__36756 = n;
var G__36757 = (n - k);
n = G__36756;
k = G__36757;
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
var G__36337 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__36338 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__36337,G__36338) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__36337,G__36338));

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
var count_combinations_from_frequencies_orig_val__36353 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__36354 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__36354);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__36353);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__36761 = n__$1;
var G__36762 = y;
var G__36763 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__36761;
y = G__36762;
z = G__36763;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__36764 = n__$1;
var G__36765 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__36766 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__36764;
y = G__36765;
z = G__36766;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__36361(s__36362){
return (new cljs.core.LazySeq(null,(function (){
var s__36362__$1 = s__36362;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36362__$1);
if(temp__5735__auto__){
var s__36362__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36362__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36362__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36364 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36363 = (0);
while(true){
if((i__36363 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36363);
cljs.core.chunk_append(b__36364,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__36769 = (i__36363 + (1));
i__36363 = G__36769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36364),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__36361(cljs.core.chunk_rest(s__36362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36364),null);
}
} else {
var i = cljs.core.first(s__36362__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__36361(cljs.core.rest(s__36362__$2)));
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
var count_combinations_from_frequencies_orig_val__36366 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__36367 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__36367);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__36366);
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
var G__36773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__36774 = cljs.core.rest(items__$1);
var G__36775 = (t__$1 - (1));
var G__36776 = n__$1;
comb = G__36773;
items__$1 = G__36774;
t__$1 = G__36775;
n__$1 = G__36776;
continue;
} else {
var G__36777 = comb;
var G__36778 = cljs.core.rest(items__$1);
var G__36779 = t__$1;
var G__36780 = (n__$1 - dc_dt);
comb = G__36777;
items__$1 = G__36778;
t__$1 = G__36779;
n__$1 = G__36780;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__36381(s__36382){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__36382__$1 = s__36382;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36382__$1);
if(temp__5735__auto__){
var s__36382__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36382__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36382__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36384 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36383 = (0);
while(true){
if((i__36383 < size__4563__auto__)){
var vec__36385 = cljs.core._nth(c__4562__auto__,i__36383);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36385,(1),null);
cljs.core.chunk_append(b__36384,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__36782 = (i__36383 + (1));
i__36383 = G__36782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36384),clojure$math$combinatorics$nth_combination_freqs_$_iter__36381(cljs.core.chunk_rest(s__36382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36384),null);
}
} else {
var vec__36391 = cljs.core.first(s__36382__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__36381(cljs.core.rest(s__36382__$2)));
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
var G__36785 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__36786 = remove_one_key;
var G__36787 = (t__$1 - (1));
var G__36788 = n__$1;
comb = G__36785;
freqs__$1 = G__36786;
t__$1 = G__36787;
n__$1 = G__36788;
continue;
} else {
var G__36789 = comb;
var G__36790 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__36791 = t__$1;
var G__36792 = (n__$1 - dc_dt);
comb = G__36789;
freqs__$1 = G__36790;
t__$1 = G__36791;
n__$1 = G__36792;
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
var count_combinations_from_frequencies_orig_val__36394 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__36395 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__36395);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__36396(s__36397){
return (new cljs.core.LazySeq(null,(function (){
var s__36397__$1 = s__36397;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36397__$1);
if(temp__5735__auto__){
var s__36397__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36397__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36397__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36399 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36398 = (0);
while(true){
if((i__36398 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36398);
cljs.core.chunk_append(b__36399,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36400 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36400) : f.call(null,G__36400));
})(),i));

var G__36801 = (i__36398 + (1));
i__36398 = G__36801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36399),clojure$math$combinatorics$nth_combination_$_iter__36396(cljs.core.chunk_rest(s__36397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36399),null);
}
} else {
var i = cljs.core.first(s__36397__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__36401 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36401) : f.call(null,G__36401));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__36396(cljs.core.rest(s__36397__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__36394);
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
var G__36804 = (size + (1));
var G__36805 = (n__$1 - num_combinations);
size = G__36804;
n__$1 = G__36805;
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
var G__36806 = cljs.core.rest(l__$1);
var G__36807 = (n + (1));
l__$1 = G__36806;
n = G__36807;
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
var G__36808 = cljs.core.rest(l__$1);
var G__36809 = (function (){var G__36408 = index;
var G__36409 = (function (){var G__36411 = clojure.math.combinatorics.factorial(n);
var G__36412 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__36411,G__36412) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__36411,G__36412));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__36408,G__36409) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__36408,G__36409));
})();
var G__36810 = (n - (1));
l__$1 = G__36808;
index = G__36809;
n = G__36810;
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
var G__36813 = cljs.core.rest(l__$1);
var G__36814 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4564__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__36418(s__36419){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
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
var k = cljs.core._nth(c__4562__auto__,i__36420);
cljs.core.chunk_append(b__36421,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__36820 = (i__36420 + (1));
i__36420 = G__36820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36421),clojure$math$combinatorics$permutation_index_duplicates_$_iter__36418(cljs.core.chunk_rest(s__36419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36421),null);
}
} else {
var k = cljs.core.first(s__36419__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__36418(cljs.core.rest(s__36419__$2)));
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
return (function (p1__36413_SHARP_){
return (cljs.core.compare(p1__36413_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4564__auto__))
,cljs.core.keys(freqs)));
})());
var G__36815 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__36813;
index = G__36814;
freqs = G__36815;
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
return cljs.core.vec((function (){var iter__4564__auto__ = (function clojure$math$combinatorics$init_$_iter__36425(s__36426){
return (new cljs.core.LazySeq(null,(function (){
var s__36426__$1 = s__36426;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36426__$1);
if(temp__5735__auto__){
var s__36426__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36426__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36426__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36428 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36427 = (0);
while(true){
if((i__36427 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36427);
cljs.core.chunk_append(b__36428,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (i - ((n - s) - (-1)));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());

var G__36823 = (i__36427 + (1));
i__36427 = G__36823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36428),clojure$math$combinatorics$init_$_iter__36425(cljs.core.chunk_rest(s__36426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36428),null);
}
} else {
var i = cljs.core.first(s__36426__$2);
return cljs.core.cons((function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (i - ((n - s) - (-1)));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})(),clojure$math$combinatorics$init_$_iter__36425(cljs.core.rest(s__36426__$2)));
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
var G__36430 = arguments.length;
switch (G__36430) {
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
var G__36836 = (j - (1));
j = G__36836;
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
var vec__36435 = (function (){var a__$2 = a__$1;
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
var G__36840 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__36841 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__36842 = (i + (1));
var G__36843 = (function (){var x__4249__auto__ = current_max;
var y__4250__auto__ = (new_a_i + (1));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
a__$2 = G__36840;
b__$1 = G__36841;
i = G__36842;
current_max = G__36843;
continue;
} else {
var G__36845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__36846 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__36847 = (i + (1));
var G__36848 = current_max;
a__$2 = G__36845;
b__$1 = G__36846;
i = G__36847;
current_max = G__36848;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36435,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36435,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36851 = arguments.length;
var i__4772__auto___36852 = (0);
while(true){
if((i__4772__auto___36852 < len__4771__auto___36851)){
args__4777__auto__.push((arguments[i__4772__auto___36852]));

var G__36853 = (i__4772__auto___36852 + (1));
i__4772__auto___36852 = G__36853;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__36452){
var map__36453 = p__36452;
var map__36453__$1 = cljs.core.__destructure_map(map__36453);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36469(s__36470){
return (new cljs.core.LazySeq(null,(function (){
var s__36470__$1 = s__36470;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36470__$1);
if(temp__5735__auto__){
var s__36470__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36470__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36470__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36472 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36471 = (0);
while(true){
if((i__36471 < size__4563__auto__)){
var growth_string = cljs.core._nth(c__4562__auto__,i__36471);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__36472,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__36858 = (i__36471 + (1));
i__36471 = G__36858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36472),clojure$math$combinatorics$iter__36469(cljs.core.chunk_rest(s__36470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36472),null);
}
} else {
var growth_string = cljs.core.first(s__36470__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__36469(cljs.core.rest(s__36470__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq36448){
var G__36449 = cljs.core.first(seq36448);
var seq36448__$1 = cljs.core.next(seq36448);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36449,seq36448__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36866 = arguments.length;
var i__4772__auto___36867 = (0);
while(true){
if((i__4772__auto___36867 < len__4771__auto___36866)){
args__4777__auto__.push((arguments[i__4772__auto___36867]));

var G__36868 = (i__4772__auto___36867 + (1));
i__4772__auto___36867 = G__36868;
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
var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36485(s__36486){
return (new cljs.core.LazySeq(null,(function (){
var s__36486__$1 = s__36486;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36486__$1);
if(temp__5735__auto__){
var s__36486__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36486__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36486__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36488 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36487 = (0);
while(true){
if((i__36487 < size__4563__auto__)){
var parts = cljs.core._nth(c__4562__auto__,i__36487);
cljs.core.chunk_append(b__36488,(function (){var iter__4564__auto__ = ((function (i__36487,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__36485_$_iter__36489(s__36490){
return (new cljs.core.LazySeq(null,((function (i__36487,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function (){
var s__36490__$1 = s__36490;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36490__$1);
if(temp__5735__auto____$1){
var s__36490__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36490__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36490__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36492 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36491 = (0);
while(true){
if((i__36491 < size__4563__auto____$1)){
var part = cljs.core._nth(c__4562__auto____$1,i__36491);
cljs.core.chunk_append(b__36492,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__36491,i__36487,part,c__4562__auto____$1,size__4563__auto____$1,b__36492,s__36490__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__36491,i__36487,part,c__4562__auto____$1,size__4563__auto____$1,b__36492,s__36490__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__36872 = (i__36491 + (1));
i__36491 = G__36872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36492),clojure$math$combinatorics$iter__36485_$_iter__36489(cljs.core.chunk_rest(s__36490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36492),null);
}
} else {
var part = cljs.core.first(s__36490__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__36487,part,s__36490__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__36487,part,s__36490__$2,temp__5735__auto____$1,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__36485_$_iter__36489(cljs.core.rest(s__36490__$2)));
}
} else {
return null;
}
break;
}
});})(i__36487,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
,null,null));
});})(i__36487,parts,c__4562__auto__,size__4563__auto__,b__36488,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4564__auto__(parts);
})());

var G__36878 = (i__36487 + (1));
i__36487 = G__36878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36488),clojure$math$combinatorics$iter__36485(cljs.core.chunk_rest(s__36486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36488),null);
}
} else {
var parts = cljs.core.first(s__36486__$2);
return cljs.core.cons((function (){var iter__4564__auto__ = ((function (parts,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__36485_$_iter__36497(s__36498){
return (new cljs.core.LazySeq(null,(function (){
var s__36498__$1 = s__36498;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36498__$1);
if(temp__5735__auto____$1){
var s__36498__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36498__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36498__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36500 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36499 = (0);
while(true){
if((i__36499 < size__4563__auto__)){
var part = cljs.core._nth(c__4562__auto__,i__36499);
cljs.core.chunk_append(b__36500,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__36499,part,c__4562__auto__,size__4563__auto__,b__36500,s__36498__$2,temp__5735__auto____$1,parts,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__36499,part,c__4562__auto__,size__4563__auto__,b__36500,s__36498__$2,temp__5735__auto____$1,parts,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__36881 = (i__36499 + (1));
i__36499 = G__36881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36500),clojure$math$combinatorics$iter__36485_$_iter__36497(cljs.core.chunk_rest(s__36498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36500),null);
}
} else {
var part = cljs.core.first(s__36498__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__36498__$2,temp__5735__auto____$1,parts,s__36486__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__36498__$2,temp__5735__auto____$1,parts,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__36485_$_iter__36497(cljs.core.rest(s__36498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__36486__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4564__auto__(parts);
})(),clojure$math$combinatorics$iter__36485(cljs.core.rest(s__36486__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq36481){
var G__36482 = cljs.core.first(seq36481);
var seq36481__$1 = cljs.core.next(seq36481);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36482,seq36481__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__36510 = arguments.length;
switch (G__36510) {
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
var vec__36513 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__36887 = (j + (1));
var G__36888 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__36889 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__36523 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__36523) : multiset.call(null,G__36523));
})());
var G__36890 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__36524 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__36524) : multiset.call(null,G__36524));
})());
j = G__36887;
c__$1 = G__36888;
u__$1 = G__36889;
v__$1 = G__36890;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__36525 = (function (){var j = a;
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
var G__36891 = (j + (1));
var G__36892 = k;
var G__36893 = true;
var G__36894 = u__$2;
var G__36895 = v__$1;
var G__36896 = c__$1;
j = G__36891;
k = G__36892;
x = G__36893;
u__$1 = G__36894;
v__$1 = G__36895;
c__$1 = G__36896;
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
var G__36897 = j__$1;
var G__36898 = k__$1;
var G__36899 = x__$1;
var G__36900 = u__$2;
var G__36901 = v__$2;
var G__36902 = c__$2;
j = G__36897;
k = G__36898;
x = G__36899;
u__$1 = G__36900;
v__$1 = G__36901;
c__$1 = G__36902;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__36903 = j__$1;
var G__36904 = k__$1;
var G__36905 = x;
var G__36906 = u__$2;
var G__36907 = v__$2;
var G__36908 = c__$2;
j = G__36903;
k = G__36904;
x = G__36905;
u__$1 = G__36906;
v__$1 = G__36907;
c__$1 = G__36908;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525,(4),null);
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
var G__36911 = n;
var G__36912 = m;
var G__36913 = f__$1;
var G__36914 = c__$1;
var G__36915 = u__$1;
var G__36916 = v__$1;
var G__36917 = a__$1;
var G__36918 = b__$1;
var G__36919 = l__$1;
var G__36920 = r;
var G__36921 = s;
n = G__36911;
m = G__36912;
f = G__36913;
c = G__36914;
u = G__36915;
v = G__36916;
a = G__36917;
b = G__36918;
l = G__36919;
r = G__36920;
s = G__36921;
continue;
} else {
var part = (function (){var iter__4564__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__36534(s__36535){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__36535__$1 = s__36535;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36535__$1);
if(temp__5735__auto__){
var s__36535__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36535__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36535__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36537 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36536 = (0);
while(true){
if((i__36536 < size__4563__auto__)){
var y = cljs.core._nth(c__4562__auto__,i__36536);
cljs.core.chunk_append(b__36537,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__36538 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36538) : f.call(null,G__36538));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = ((function (i__36536,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36537,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__36534_$_iter__36539(s__36540){
return (new cljs.core.LazySeq(null,((function (i__36536,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36537,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__36540__$1 = s__36540;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36540__$1);
if(temp__5735__auto____$1){
var s__36540__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36540__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36540__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36542 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36541 = (0);
while(true){
if((i__36541 < size__4563__auto____$1)){
var z = cljs.core._nth(c__4562__auto____$1,i__36541);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__36542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__36923 = (i__36541 + (1));
i__36541 = G__36923;
continue;
} else {
var G__36924 = (i__36541 + (1));
i__36541 = G__36924;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36542),clojure$math$combinatorics$iter__36534_$_iter__36539(cljs.core.chunk_rest(s__36540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36542),null);
}
} else {
var z = cljs.core.first(s__36540__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__36534_$_iter__36539(cljs.core.rest(s__36540__$2)));
} else {
var G__36926 = cljs.core.rest(s__36540__$2);
s__36540__$1 = G__36926;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__36536,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36537,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__36536,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4562__auto__,size__4563__auto__,b__36537,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k))
;
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__36927 = (i__36536 + (1));
i__36536 = G__36927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36537),clojure$math$combinatorics$iter__36534(cljs.core.chunk_rest(s__36535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36537),null);
}
} else {
var y = cljs.core.first(s__36535__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__36550 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36550) : f.call(null,G__36550));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__36534_$_iter__36551(s__36552){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__36552__$1 = s__36552;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36552__$1);
if(temp__5735__auto____$1){
var s__36552__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36552__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36552__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36554 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36553 = (0);
while(true){
if((i__36553 < size__4563__auto__)){
var z = cljs.core._nth(c__4562__auto__,i__36553);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__36554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__36928 = (i__36553 + (1));
i__36553 = G__36928;
continue;
} else {
var G__36929 = (i__36553 + (1));
i__36553 = G__36929;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36554),clojure$math$combinatorics$iter__36534_$_iter__36551(cljs.core.chunk_rest(s__36552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36554),null);
}
} else {
var z = cljs.core.first(s__36552__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__36534_$_iter__36551(cljs.core.rest(s__36552__$2)));
} else {
var G__36930 = cljs.core.rest(s__36552__$2);
s__36552__$1 = G__36930;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36535__$2,temp__5735__auto__,vec__36525,u__$1,v__$1,c__$1,j,k))
;
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__36534(cljs.core.rest(s__36535__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__36525,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__36525,u__$1,v__$1,c__$1,j,k))
;
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__36525,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__36525,u__$1,v__$1,c__$1,j,k))
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
var G__36932 = (j - (1));
j = G__36932;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$m5_$_iter__36558(s__36559){
return (new cljs.core.LazySeq(null,(function (){
var s__36559__$1 = s__36559;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36559__$1);
if(temp__5735__auto__){
var s__36559__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36559__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36559__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36561 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36560 = (0);
while(true){
if((i__36560 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36560);
cljs.core.chunk_append(b__36561,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__36934 = (i__36560 + (1));
i__36560 = G__36934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36561),clojure$math$combinatorics$m5_$_iter__36558(cljs.core.chunk_rest(s__36559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36561),null);
}
} else {
var i = cljs.core.first(s__36559__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__36558(cljs.core.rest(s__36559__$2)));
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
var G__36935 = cljs.core.rest(ks);
var G__36936 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__36935;
v__$2 = G__36936;
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
var G__36937 = (k_1 - (1));
var G__36938 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__36939 = (amount - vk);
k_1 = G__36937;
v__$3 = G__36938;
amount = G__36939;
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
var len__4771__auto___36940 = arguments.length;
var i__4772__auto___36941 = (0);
while(true){
if((i__4772__auto___36941 < len__4771__auto___36940)){
args__4777__auto__.push((arguments[i__4772__auto___36941]));

var G__36942 = (i__4772__auto___36941 + (1));
i__4772__auto___36941 = G__36942;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__36577){
var map__36578 = p__36577;
var map__36578__$1 = cljs.core.__destructure_map(map__36578);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36578__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36578__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36598(s__36599){
return (new cljs.core.LazySeq(null,(function (){
var s__36599__$1 = s__36599;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36599__$1);
if(temp__5735__auto__){
var s__36599__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36599__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36599__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36601 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36600 = (0);
while(true){
if((i__36600 < size__4563__auto__)){
var i = cljs.core._nth(c__4562__auto__,i__36600);
var j = (i + (1));
cljs.core.chunk_append(b__36601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__36602 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__36602) : freqs.call(null,G__36602));
})()], null));

var G__36944 = (i__36600 + (1));
i__36600 = G__36944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36601),clojure$math$combinatorics$iter__36598(cljs.core.chunk_rest(s__36599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36601),null);
}
} else {
var i = cljs.core.first(s__36599__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__36604 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__36604) : freqs.call(null,G__36604));
})()], null),clojure$math$combinatorics$iter__36598(cljs.core.rest(s__36599__$2)));
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
var iter__4564__auto__ = (function clojure$math$combinatorics$iter__36609(s__36610){
return (new cljs.core.LazySeq(null,(function (){
var s__36610__$1 = s__36610;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36610__$1);
if(temp__5735__auto__){
var s__36610__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36610__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36610__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36612 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36611 = (0);
while(true){
if((i__36611 < size__4563__auto__)){
var part = cljs.core._nth(c__4562__auto__,i__36611);
cljs.core.chunk_append(b__36612,(function (){var iter__4564__auto__ = ((function (i__36611,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function clojure$math$combinatorics$iter__36609_$_iter__36615(s__36616){
return (new cljs.core.LazySeq(null,((function (i__36611,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function (){
var s__36616__$1 = s__36616;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36616__$1);
if(temp__5735__auto____$1){
var s__36616__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36616__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__36616__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__36618 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__36617 = (0);
while(true){
if((i__36617 < size__4563__auto____$1)){
var multiset = cljs.core._nth(c__4562__auto____$1,i__36617);
cljs.core.chunk_append(b__36618,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__36617,i__36611,multiset,c__4562__auto____$1,size__4563__auto____$1,b__36618,s__36616__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function (p__36619){
var vec__36620 = p__36619;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36623 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36623) : ditems.call(null,G__36623));
})());
});})(i__36617,i__36611,multiset,c__4562__auto____$1,size__4563__auto____$1,b__36618,s__36616__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
,multiset)));

var G__36953 = (i__36617 + (1));
i__36617 = G__36953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36618),clojure$math$combinatorics$iter__36609_$_iter__36615(cljs.core.chunk_rest(s__36616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36618),null);
}
} else {
var multiset = cljs.core.first(s__36616__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__36611,multiset,s__36616__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function (p__36624){
var vec__36625 = p__36624;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36625,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36625,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36628 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36628) : ditems.call(null,G__36628));
})());
});})(i__36611,multiset,s__36616__$2,temp__5735__auto____$1,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__36609_$_iter__36615(cljs.core.rest(s__36616__$2)));
}
} else {
return null;
}
break;
}
});})(i__36611,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
,null,null));
});})(i__36611,part,c__4562__auto__,size__4563__auto__,b__36612,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
;
return iter__4564__auto__(part);
})());

var G__36954 = (i__36611 + (1));
i__36611 = G__36954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36612),clojure$math$combinatorics$iter__36609(cljs.core.chunk_rest(s__36610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36612),null);
}
} else {
var part = cljs.core.first(s__36610__$2);
return cljs.core.cons((function (){var iter__4564__auto__ = ((function (part,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function clojure$math$combinatorics$iter__36609_$_iter__36629(s__36630){
return (new cljs.core.LazySeq(null,(function (){
var s__36630__$1 = s__36630;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36630__$1);
if(temp__5735__auto____$1){
var s__36630__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36630__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36630__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36632 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36631 = (0);
while(true){
if((i__36631 < size__4563__auto__)){
var multiset = cljs.core._nth(c__4562__auto__,i__36631);
cljs.core.chunk_append(b__36632,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__36631,multiset,c__4562__auto__,size__4563__auto__,b__36632,s__36630__$2,temp__5735__auto____$1,part,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function (p__36633){
var vec__36634 = p__36633;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36634,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36634,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36637 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36637) : ditems.call(null,G__36637));
})());
});})(i__36631,multiset,c__4562__auto__,size__4563__auto__,b__36632,s__36630__$2,temp__5735__auto____$1,part,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
,multiset)));

var G__36968 = (i__36631 + (1));
i__36631 = G__36968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36632),clojure$math$combinatorics$iter__36609_$_iter__36629(cljs.core.chunk_rest(s__36630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36632),null);
}
} else {
var multiset = cljs.core.first(s__36630__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__36630__$2,temp__5735__auto____$1,part,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to){
return (function (p__36638){
var vec__36639 = p__36638;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__36645 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__36645) : ditems.call(null,G__36645));
})());
});})(multiset,s__36630__$2,temp__5735__auto____$1,part,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__36609_$_iter__36629(cljs.core.rest(s__36630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__36610__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__36578,map__36578__$1,from,to))
;
return iter__4564__auto__(part);
})(),clojure$math$combinatorics$iter__36609(cljs.core.rest(s__36610__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq36572){
var G__36573 = cljs.core.first(seq36572);
var seq36572__$1 = cljs.core.next(seq36572);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36573,seq36572__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36969 = arguments.length;
var i__4772__auto___36970 = (0);
while(true){
if((i__4772__auto___36970 < len__4771__auto___36969)){
args__4777__auto__.push((arguments[i__4772__auto___36970]));

var G__36971 = (i__4772__auto___36970 + (1));
i__4772__auto___36970 = G__36971;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq36651){
var G__36652 = cljs.core.first(seq36651);
var seq36651__$1 = cljs.core.next(seq36651);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36652,seq36651__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
