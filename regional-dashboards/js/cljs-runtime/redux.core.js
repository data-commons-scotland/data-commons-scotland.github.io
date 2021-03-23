goog.provide('redux.core');
redux.core.pre_step = (function redux$core$pre_step(rf,f){
return (function() {
var G__26813 = null;
var G__26813__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__26813__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__26813__2 = (function (acc,x){
var G__26792 = acc;
var G__26793 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__26792,G__26793) : rf.call(null,G__26792,G__26793));
});
G__26813 = function(acc,x){
switch(arguments.length){
case 0:
return G__26813__0.call(this);
case 1:
return G__26813__1.call(this,acc);
case 2:
return G__26813__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26813.cljs$core$IFn$_invoke$arity$0 = G__26813__0;
G__26813.cljs$core$IFn$_invoke$arity$1 = G__26813__1;
G__26813.cljs$core$IFn$_invoke$arity$2 = G__26813__2;
return G__26813;
})()
});
redux.core.post_complete = (function redux$core$post_complete(rf,f){
return (function() {
var G__26814 = null;
var G__26814__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__26814__1 = (function (acc){
var G__26794 = (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26794) : f.call(null,G__26794));
});
var G__26814__2 = (function (acc,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
});
G__26814 = function(acc,x){
switch(arguments.length){
case 0:
return G__26814__0.call(this);
case 1:
return G__26814__1.call(this,acc);
case 2:
return G__26814__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26814.cljs$core$IFn$_invoke$arity$0 = G__26814__0;
G__26814.cljs$core$IFn$_invoke$arity$1 = G__26814__1;
G__26814.cljs$core$IFn$_invoke$arity$2 = G__26814__2;
return G__26814;
})()
});
redux.core.with_xform = (function redux$core$with_xform(rf,xform){
var rfv = cljs.core.volatile_BANG_(null);
return (function() {
var G__26816 = null;
var G__26816__0 = (function (){
cljs.core.vreset_BANG_(rfv,(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf)));

var fexpr__26795 = cljs.core.deref(rfv);
return (fexpr__26795.cljs$core$IFn$_invoke$arity$0 ? fexpr__26795.cljs$core$IFn$_invoke$arity$0() : fexpr__26795.call(null));
});
var G__26816__1 = (function (acc){
var fexpr__26796 = cljs.core.deref(rfv);
return (fexpr__26796.cljs$core$IFn$_invoke$arity$1 ? fexpr__26796.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__26796.call(null,acc));
});
var G__26816__2 = (function (acc,x){
var fexpr__26797 = cljs.core.deref(rfv);
return (fexpr__26797.cljs$core$IFn$_invoke$arity$2 ? fexpr__26797.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__26797.call(null,acc,x));
});
G__26816 = function(acc,x){
switch(arguments.length){
case 0:
return G__26816__0.call(this);
case 1:
return G__26816__1.call(this,acc);
case 2:
return G__26816__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26816.cljs$core$IFn$_invoke$arity$0 = G__26816__0;
G__26816.cljs$core$IFn$_invoke$arity$1 = G__26816__1;
G__26816.cljs$core$IFn$_invoke$arity$2 = G__26816__2;
return G__26816;
})()
});
redux.core.juxt = (function redux$core$juxt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26817 = arguments.length;
var i__4737__auto___26818 = (0);
while(true){
if((i__4737__auto___26818 < len__4736__auto___26817)){
args__4742__auto__.push((arguments[i__4737__auto___26818]));

var G__26819 = (i__4737__auto___26818 + (1));
i__4737__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic = (function (rfns){
return (function() {
var G__26821 = null;
var G__26821__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),rfns);
});
var G__26821__1 = (function (acc){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,a){
var G__26800 = cljs.core.unreduced(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26800) : f.call(null,G__26800));
}),rfns,acc);
});
var G__26821__2 = (function (acc,x){
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
G__26821 = function(acc,x){
switch(arguments.length){
case 0:
return G__26821__0.call(this);
case 1:
return G__26821__1.call(this,acc);
case 2:
return G__26821__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26821.cljs$core$IFn$_invoke$arity$0 = G__26821__0;
G__26821.cljs$core$IFn$_invoke$arity$1 = G__26821__1;
G__26821.cljs$core$IFn$_invoke$arity$2 = G__26821__2;
return G__26821;
})()
}));

(redux.core.juxt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redux.core.juxt.cljs$lang$applyTo = (function (seq26799){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26799));
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
return redux.core.post_complete(redux.core.pre_step(redux.core.fuse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26806){
var vec__26807 = p__26806;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26807,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26807,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,k2], null),(function (){var G__26810 = (function (p1__26804_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26804_SHARP_,k1);
});
var G__26811 = (function (p1__26805_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26805_SHARP_,k2);
});
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__26810,G__26811) : rf.call(null,G__26810,G__26811));
})()], null);
}),redux.utils.pairs(cljs.core.keys(kvs))))),redux.utils.project(kvs)),redux.utils.complete_triangular_matrix);
});

//# sourceMappingURL=redux.core.js.map
