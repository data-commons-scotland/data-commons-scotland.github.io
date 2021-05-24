goog.provide('redux.core');
redux.core.pre_step = (function redux$core$pre_step(rf,f){
return (function() {
var G__36678 = null;
var G__36678__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__36678__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__36678__2 = (function (acc,x){
var G__36658 = acc;
var G__36659 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__36658,G__36659) : rf.call(null,G__36658,G__36659));
});
G__36678 = function(acc,x){
switch(arguments.length){
case 0:
return G__36678__0.call(this);
case 1:
return G__36678__1.call(this,acc);
case 2:
return G__36678__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36678.cljs$core$IFn$_invoke$arity$0 = G__36678__0;
G__36678.cljs$core$IFn$_invoke$arity$1 = G__36678__1;
G__36678.cljs$core$IFn$_invoke$arity$2 = G__36678__2;
return G__36678;
})()
});
redux.core.post_complete = (function redux$core$post_complete(rf,f){
return (function() {
var G__36683 = null;
var G__36683__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__36683__1 = (function (acc){
var G__36661 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36661) : f.call(null,G__36661));
});
var G__36683__2 = (function (acc,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
});
G__36683 = function(acc,x){
switch(arguments.length){
case 0:
return G__36683__0.call(this);
case 1:
return G__36683__1.call(this,acc);
case 2:
return G__36683__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36683.cljs$core$IFn$_invoke$arity$0 = G__36683__0;
G__36683.cljs$core$IFn$_invoke$arity$1 = G__36683__1;
G__36683.cljs$core$IFn$_invoke$arity$2 = G__36683__2;
return G__36683;
})()
});
redux.core.with_xform = (function redux$core$with_xform(rf,xform){
var rfv = cljs.core.volatile_BANG_(null);
return (function() {
var G__36688 = null;
var G__36688__0 = (function (){
cljs.core.vreset_BANG_(rfv,(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf)));

var fexpr__36662 = cljs.core.deref(rfv);
return (fexpr__36662.cljs$core$IFn$_invoke$arity$0 ? fexpr__36662.cljs$core$IFn$_invoke$arity$0() : fexpr__36662.call(null));
});
var G__36688__1 = (function (acc){
var fexpr__36663 = cljs.core.deref(rfv);
return (fexpr__36663.cljs$core$IFn$_invoke$arity$1 ? fexpr__36663.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__36663.call(null,acc));
});
var G__36688__2 = (function (acc,x){
var fexpr__36664 = cljs.core.deref(rfv);
return (fexpr__36664.cljs$core$IFn$_invoke$arity$2 ? fexpr__36664.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__36664.call(null,acc,x));
});
G__36688 = function(acc,x){
switch(arguments.length){
case 0:
return G__36688__0.call(this);
case 1:
return G__36688__1.call(this,acc);
case 2:
return G__36688__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36688.cljs$core$IFn$_invoke$arity$0 = G__36688__0;
G__36688.cljs$core$IFn$_invoke$arity$1 = G__36688__1;
G__36688.cljs$core$IFn$_invoke$arity$2 = G__36688__2;
return G__36688;
})()
});
redux.core.juxt = (function redux$core$juxt(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36693 = arguments.length;
var i__4772__auto___36694 = (0);
while(true){
if((i__4772__auto___36694 < len__4771__auto___36693)){
args__4777__auto__.push((arguments[i__4772__auto___36694]));

var G__36695 = (i__4772__auto___36694 + (1));
i__4772__auto___36694 = G__36695;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic = (function (rfns){
return (function() {
var G__36696 = null;
var G__36696__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),rfns);
});
var G__36696__1 = (function (acc){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
var G__36666 = cljs.core.unreduced(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36666) : f.call(null,G__36666));
}),rfns,acc);
});
var G__36696__2 = (function (acc,x){
var all_reduced_QMARK_ = cljs.core.volatile_BANG_(true);
var results = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
if((!(cljs.core.reduced_QMARK_(a)))){
cljs.core.vreset_BANG_(all_reduced_QMARK_,false);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,x) : f.call(null,a,x));
} else {
return a;
}
}),rfns,acc);
if(cljs.core.truth_(cljs.core.deref(all_reduced_QMARK_))){
return cljs.core.reduced(results);
} else {
return results;
}
});
G__36696 = function(acc,x){
switch(arguments.length){
case 0:
return G__36696__0.call(this);
case 1:
return G__36696__1.call(this,acc);
case 2:
return G__36696__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36696.cljs$core$IFn$_invoke$arity$0 = G__36696__0;
G__36696.cljs$core$IFn$_invoke$arity$1 = G__36696__1;
G__36696.cljs$core$IFn$_invoke$arity$2 = G__36696__2;
return G__36696;
})()
}));

(redux.core.juxt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redux.core.juxt.cljs$lang$applyTo = (function (seq36665){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36665));
}));

redux.core.facet = (function redux$core$facet(rf,fns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(redux.core.juxt,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return redux.core.pre_step(rf,f);
}),fns));
});
redux.core.fuse = (function redux$core$fuse(kvs){
return redux.core.post_complete(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(redux.core.juxt,cljs.core.vals(kvs)),(function (acc){
return cljs.core.zipmap(cljs.core.keys(kvs),acc);
}));
});
redux.core.fuse_matrix = (function redux$core$fuse_matrix(rf,kvs){
return redux.core.post_complete(redux.core.pre_step(redux.core.fuse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36671){
var vec__36672 = p__36671;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36672,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36672,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null),(function (){var G__36675 = (function (p1__36669_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36669_SHARP_,k1);
});
var G__36676 = (function (p1__36670_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36670_SHARP_,k2);
});
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__36675,G__36676) : rf.call(null,G__36675,G__36676));
})()], null);
}),redux.utils.pairs(cljs.core.keys(kvs))))),redux.utils.project(kvs)),redux.utils.complete_triangular_matrix);
});

//# sourceMappingURL=redux.core.js.map
