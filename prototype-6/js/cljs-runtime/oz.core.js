goog.provide('oz.core');
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
var module$node_modules$vega$build$vega_node=shadow.js.require("module$node_modules$vega$build$vega_node", {});
cljs.core.enable_console_print_BANG_();
oz.core.apply_log_level = (function oz$core$apply_log_level(p__42318){
var map__42319 = p__42318;
var map__42319__$1 = cljs.core.__destructure_map(map__42319);
var opts = map__42319__$1;
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
if((((log_level instanceof cljs.core.Keyword)) || (typeof log_level === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"log-level","log-level",862121670)),new cljs.core.Keyword(null,"logLevel","logLevel",1131406165),(function (){var G__42320 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(log_level);
var G__42320__$1 = (((G__42320 instanceof cljs.core.Keyword))?G__42320.fqn:null);
switch (G__42320__$1) {
case "debug":
return module$node_modules$vega$build$vega_node.Debug;

break;
case "info":
return module$node_modules$vega$build$vega_node.Info;

break;
case "warn":
return module$node_modules$vega$build$vega_node.Warn;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42320__$1)].join('')));

}
})());
} else {
return opts;
}
});
oz.core.embed_vega = (function oz$core$embed_vega(var_args){
var G__42348 = arguments.length;
switch (G__42348) {
case 2:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2 = (function (elem,doc){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(elem,doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3 = (function (elem,doc,opts){
if(cljs.core.truth_(doc)){
var doc__$1 = cljs.core.clj__GT_js(doc);
var opts__$1 = oz.core.apply_log_level(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null),opts], 0)));
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),opts__$1], 0));
return module$node_modules$vega_embed$build$vega_embed(elem,doc__$1,cljs.core.clj__GT_js(opts__$2)).catch((function (err){
return console.log(err);
}));
} else {
return null;
}
}));

(oz.core.embed_vega.cljs$lang$maxFixedArity = 3);

oz.core.update_vega = (function oz$core$update_vega(elem,old_doc,new_doc,old_opts,new_opts){
var G__42349 = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"always-rerender","always-rerender",1736797242).cljs$core$IFn$_invoke$arity$1(new_opts);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_doc,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_doc,new cljs.core.Keyword(null,"data","data",-232669377)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"embed-vega","embed-vega",-617762446,null),G__42349)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),G__42349)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-doc","new-doc",795331265,null),G__42349)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-opts","new-opts",-1018023265,null),G__42349)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
return null;

}
}
}
}
});
/**
 * Reagent component that renders vega
 */
oz.core.vega = (function oz$core$vega(var_args){
var G__42351 = arguments.length;
switch (G__42351) {
case 1:
return oz.core.vega.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega"], null),opts], 0));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),doc,opts__$1);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__42352){
var vec__42353 = p__42352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42353,(0),null);
var new_doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42353,(1),null);
var new_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42353,(2),null);
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),new_doc,new_opts);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (doc__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viz","div.viz",1155063891)], null);
})], null));
}));

(oz.core.vega.cljs$lang$maxFixedArity = 2);

/**
 * Reagent component that renders vega-lite.
 */
oz.core.vega_lite = (function oz$core$vega_lite(var_args){
var G__42357 = arguments.length;
switch (G__42357) {
case 1:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null)], 0)));
}));

(oz.core.vega_lite.cljs$lang$maxFixedArity = 2);

oz.core.live_viewers_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite], null));
oz.core.register_live_view = (function oz$core$register_live_view(key,component){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(oz.core.live_viewers_state,cljs.core.assoc,key,component);
});
oz.core.register_live_views = (function oz$core$register_live_views(var_args){
var args__4777__auto__ = [];
var len__4771__auto___42392 = arguments.length;
var i__4772__auto___42393 = (0);
while(true){
if((i__4772__auto___42393 < len__4771__auto___42392)){
args__4777__auto__.push((arguments[i__4772__auto___42393]));

var G__42394 = (i__4772__auto___42393 + (1));
i__4772__auto___42393 = G__42394;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic = (function (p__42359){
var map__42360 = p__42359;
var map__42360__$1 = cljs.core.__destructure_map(map__42360);
var live_views = map__42360__$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(oz.core.live_viewers_state,cljs.core.merge,live_views);
}));

(oz.core.register_live_views.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oz.core.register_live_views.cljs$lang$applyTo = (function (seq42358){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42358));
}));

oz.core.default_data_table_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"per-page","per-page",-54905429),(50),new cljs.core.Keyword(null,"tr-style","tr-style",1853585605),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"td-style","td-style",1948769874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10)], null),new cljs.core.Keyword(null,"th-style","th-style",-1504296072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null);
oz.core.data_table = (function oz$core$data_table(var_args){
var G__42362 = arguments.length;
switch (G__42362) {
case 1:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.data_table.cljs$core$IFn$_invoke$arity$1 = (function (data){
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.data_table.cljs$core$IFn$_invoke$arity$2 = (function (data,p__42363){
var map__42364 = p__42363;
var map__42364__$1 = cljs.core.__destructure_map(map__42364);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__4160__auto__ = page;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),sort_key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),(function (){var or__4160__auto__ = sort_order;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"ascending","ascending",-988350486);
}
})()], null));
var header = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),data)));
return (function (data__$1,opts){
var map__42365 = cljs.core.deref(state);
var map__42365__$1 = cljs.core.__destructure_map(map__42365);
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__42366 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (opt1,opt2){
if(((cljs.core.map_QMARK_(opt1)) && (cljs.core.map_QMARK_(opt2)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt1,opt2], 0));
} else {
return opt2;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oz.core.default_data_table_opts,opts], 0));
var map__42366__$1 = cljs.core.__destructure_map(map__42366);
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42366__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var tr_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42366__$1,new cljs.core.Keyword(null,"tr-style","tr-style",1853585605));
var td_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42366__$1,new cljs.core.Keyword(null,"td-style","td-style",1948769874));
var th_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42366__$1,new cljs.core.Keyword(null,"th-style","th-style",-1504296072));
var scoped_data = (function (){var G__42367 = data__$1;
var G__42367__$1 = (cljs.core.truth_(sort_key__$1)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key__$1,G__42367):G__42367);
var G__42367__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"descending","descending",-24766135),sort_order__$1))?cljs.core.reverse(G__42367__$1):G__42367__$1);
var G__42367__$3 = (cljs.core.truth_(per_page)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page * page__$1),G__42367__$2):G__42367__$2);
if(cljs.core.truth_(per_page)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,G__42367__$3);
} else {
return G__42367__$3;
}
})();
var last_page = cljs.core.quot(cljs.core.count(data__$1),per_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.count(data__$1) > per_page))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),"Current page: ",(page__$1 + (1))], null),(((page__$1 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__42398__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
};
var G__42398 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__42399__i = 0, G__42399__a = new Array(arguments.length -  0);
while (G__42399__i < G__42399__a.length) {G__42399__a[G__42399__i] = arguments[G__42399__i + 0]; ++G__42399__i;}
  _ = new cljs.core.IndexedSeq(G__42399__a,0,null);
} 
return G__42398__delegate.call(this,_);};
G__42398.cljs$lang$maxFixedArity = 0;
G__42398.cljs$lang$applyTo = (function (arglist__42400){
var _ = cljs.core.seq(arglist__42400);
return G__42398__delegate(_);
});
G__42398.cljs$core$IFn$_invoke$arity$variadic = G__42398__delegate;
return G__42398;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"prev"], null):null),(((page__$1 < last_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__42401__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
};
var G__42401 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__42402__i = 0, G__42402__a = new Array(arguments.length -  0);
while (G__42402__i < G__42402__a.length) {G__42402__a[G__42402__i] = arguments[G__42402__i + 0]; ++G__42402__i;}
  _ = new cljs.core.IndexedSeq(G__42402__a,0,null);
} 
return G__42401__delegate.call(this,_);};
G__42401.cljs$lang$maxFixedArity = 0;
G__42401.cljs$lang$applyTo = (function (arglist__42403){
var _ = cljs.core.seq(arglist__42403);
return G__42401__delegate(_);
});
G__42401.cljs$core$IFn$_invoke$arity$variadic = G__42401__delegate;
return G__42401;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"next"], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4564__auto__ = (function oz$core$iter__42368(s__42369){
return (new cljs.core.LazySeq(null,(function (){
var s__42369__$1 = s__42369;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42369__$1);
if(temp__5735__auto__){
var s__42369__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42369__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__42369__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__42371 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__42370 = (0);
while(true){
if((i__42370 < size__4563__auto__)){
var key = cljs.core._nth(c__4562__auto__,i__42370);
cljs.core.chunk_append(b__42371,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42370,key,c__4562__auto__,size__4563__auto__,b__42371,s__42369__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order){
return (function() { 
var G__42404__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__42404 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__42405__i = 0, G__42405__a = new Array(arguments.length -  0);
while (G__42405__i < G__42405__a.length) {G__42405__a[G__42405__i] = arguments[G__42405__i + 0]; ++G__42405__i;}
  _ = new cljs.core.IndexedSeq(G__42405__a,0,null);
} 
return G__42404__delegate.call(this,_);};
G__42404.cljs$lang$maxFixedArity = 0;
G__42404.cljs$lang$applyTo = (function (arglist__42406){
var _ = cljs.core.seq(arglist__42406);
return G__42404__delegate(_);
});
G__42404.cljs$core$IFn$_invoke$arity$variadic = G__42404__delegate;
return G__42404;
})()
;})(i__42370,key,c__4562__auto__,size__4563__auto__,b__42371,s__42369__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__42372 = sort_order__$1;
var G__42372__$1 = (((G__42372 instanceof cljs.core.Keyword))?G__42372.fqn:null);
switch (G__42372__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42372__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__42408 = (i__42370 + (1));
i__42370 = G__42408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42371),oz$core$iter__42368(cljs.core.chunk_rest(s__42369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42371),null);
}
} else {
var key = cljs.core.first(s__42369__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key,s__42369__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order){
return (function() { 
var G__42409__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__42409 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__42410__i = 0, G__42410__a = new Array(arguments.length -  0);
while (G__42410__i < G__42410__a.length) {G__42410__a[G__42410__i] = arguments[G__42410__i + 0]; ++G__42410__i;}
  _ = new cljs.core.IndexedSeq(G__42410__a,0,null);
} 
return G__42409__delegate.call(this,_);};
G__42409.cljs$lang$maxFixedArity = 0;
G__42409.cljs$lang$applyTo = (function (arglist__42411){
var _ = cljs.core.seq(arglist__42411);
return G__42409__delegate(_);
});
G__42409.cljs$core$IFn$_invoke$arity$variadic = G__42409__delegate;
return G__42409;
})()
;})(key,s__42369__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__42373 = sort_order__$1;
var G__42373__$1 = (((G__42373 instanceof cljs.core.Keyword))?G__42373.fqn:null);
switch (G__42373__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42373__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__42368(cljs.core.rest(s__42369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(header);
})()], null),(function (){var iter__4564__auto__ = (function oz$core$iter__42374(s__42375){
return (new cljs.core.LazySeq(null,(function (){
var s__42375__$1 = s__42375;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42375__$1);
if(temp__5735__auto__){
var s__42375__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42375__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__42375__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__42377 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__42376 = (0);
while(true){
if((i__42376 < size__4563__auto__)){
var row = cljs.core._nth(c__4562__auto__,i__42376);
cljs.core.chunk_append(b__42377,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4564__auto__ = ((function (i__42376,row,c__4562__auto__,size__4563__auto__,b__42377,s__42375__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order){
return (function oz$core$iter__42374_$_iter__42378(s__42379){
return (new cljs.core.LazySeq(null,((function (i__42376,row,c__4562__auto__,size__4563__auto__,b__42377,s__42375__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order){
return (function (){
var s__42379__$1 = s__42379;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42379__$1);
if(temp__5735__auto____$1){
var s__42379__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42379__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__42379__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__42381 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__42380 = (0);
while(true){
if((i__42380 < size__4563__auto____$1)){
var key = cljs.core._nth(c__4562__auto____$1,i__42380);
cljs.core.chunk_append(b__42381,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__42413 = (i__42380 + (1));
i__42380 = G__42413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42381),oz$core$iter__42374_$_iter__42378(cljs.core.chunk_rest(s__42379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42381),null);
}
} else {
var key = cljs.core.first(s__42379__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__42374_$_iter__42378(cljs.core.rest(s__42379__$2)));
}
} else {
return null;
}
break;
}
});})(i__42376,row,c__4562__auto__,size__4563__auto__,b__42377,s__42375__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order))
,null,null));
});})(i__42376,row,c__4562__auto__,size__4563__auto__,b__42377,s__42375__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order))
;
return iter__4564__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__42414 = (i__42376 + (1));
i__42376 = G__42414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42377),oz$core$iter__42374(cljs.core.chunk_rest(s__42375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42377),null);
}
} else {
var row = cljs.core.first(s__42375__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4564__auto__ = ((function (row,s__42375__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order){
return (function oz$core$iter__42374_$_iter__42382(s__42383){
return (new cljs.core.LazySeq(null,(function (){
var s__42383__$1 = s__42383;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42383__$1);
if(temp__5735__auto____$1){
var s__42383__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42383__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__42383__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__42385 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__42384 = (0);
while(true){
if((i__42384 < size__4563__auto__)){
var key = cljs.core._nth(c__4562__auto__,i__42384);
cljs.core.chunk_append(b__42385,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__42415 = (i__42384 + (1));
i__42384 = G__42415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42385),oz$core$iter__42374_$_iter__42382(cljs.core.chunk_rest(s__42383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42385),null);
}
} else {
var key = cljs.core.first(s__42383__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__42374_$_iter__42382(cljs.core.rest(s__42383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__42375__$2,temp__5735__auto__,map__42365,map__42365__$1,page__$1,sort_key__$1,sort_order__$1,map__42366,map__42366__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__42364,map__42364__$1,page,sort_key,sort_order))
;
return iter__4564__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),oz$core$iter__42374(cljs.core.rest(s__42375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(scoped_data);
})()], null)], null);
});
}));

(oz.core.data_table.cljs$lang$maxFixedArity = 2);

oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite,new cljs.core.Keyword(null,"data-table","data-table",-149582774),oz.core.data_table], 0));
oz.core.live_view = (function oz$core$live_view(doc){
var live_viewers = cljs.core.deref(oz.core.live_viewers_state);
var live_viewer_keys = cljs.core.set(cljs.core.keys(live_viewers));
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_(((cljs.core.coll_QMARK_(x))?(function (){var G__42387 = cljs.core.first(x);
return (live_viewer_keys.cljs$core$IFn$_invoke$arity$1 ? live_viewer_keys.cljs$core$IFn$_invoke$arity$1(G__42387) : live_viewer_keys.call(null,G__42387));
})():false))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(live_viewers,cljs.core.first(x))], null),cljs.core.rest(x));
} else {
return x;
}
}),doc);
});
oz.core.view_spec = oz.core.live_view;

//# sourceMappingURL=oz.core.js.map
