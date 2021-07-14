goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__35968 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35969 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35969);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__35971 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35972 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35972);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35971);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35968);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__35976 = arguments.length;
switch (G__35976) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__35977 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__35991_36028 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__35992_36029 = null;
var count__35993_36030 = (0);
var i__35994_36031 = (0);
while(true){
if((i__35994_36031 < count__35993_36030)){
var vec__36013_36032 = chunk__35992_36029.cljs$core$IIndexed$_nth$arity$2(null,i__35994_36031);
var container_36033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013_36032,(0),null);
var comp_36034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013_36032,(1),null);
reagent.dom.re_render_component(comp_36034,container_36033);


var G__36036 = seq__35991_36028;
var G__36037 = chunk__35992_36029;
var G__36038 = count__35993_36030;
var G__36039 = (i__35994_36031 + (1));
seq__35991_36028 = G__36036;
chunk__35992_36029 = G__36037;
count__35993_36030 = G__36038;
i__35994_36031 = G__36039;
continue;
} else {
var temp__5735__auto___36040 = cljs.core.seq(seq__35991_36028);
if(temp__5735__auto___36040){
var seq__35991_36041__$1 = temp__5735__auto___36040;
if(cljs.core.chunked_seq_QMARK_(seq__35991_36041__$1)){
var c__4591__auto___36043 = cljs.core.chunk_first(seq__35991_36041__$1);
var G__36044 = cljs.core.chunk_rest(seq__35991_36041__$1);
var G__36045 = c__4591__auto___36043;
var G__36046 = cljs.core.count(c__4591__auto___36043);
var G__36047 = (0);
seq__35991_36028 = G__36044;
chunk__35992_36029 = G__36045;
count__35993_36030 = G__36046;
i__35994_36031 = G__36047;
continue;
} else {
var vec__36018_36048 = cljs.core.first(seq__35991_36041__$1);
var container_36049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36018_36048,(0),null);
var comp_36050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36018_36048,(1),null);
reagent.dom.re_render_component(comp_36050,container_36049);


var G__36052 = cljs.core.next(seq__35991_36041__$1);
var G__36053 = null;
var G__36054 = (0);
var G__36055 = (0);
seq__35991_36028 = G__36052;
chunk__35992_36029 = G__36053;
count__35993_36030 = G__36054;
i__35994_36031 = G__36055;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
