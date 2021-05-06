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
var _STAR_always_update_STAR__orig_val__42293 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42294 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42294);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__42295 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42296 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42296);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42295);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42293);
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
var G__42298 = arguments.length;
switch (G__42298) {
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

var vec__42299 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(1),null);
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

var seq__42302_42322 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__42303_42323 = null;
var count__42304_42324 = (0);
var i__42305_42325 = (0);
while(true){
if((i__42305_42325 < count__42304_42324)){
var vec__42312_42326 = chunk__42303_42323.cljs$core$IIndexed$_nth$arity$2(null,i__42305_42325);
var container_42327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42312_42326,(0),null);
var comp_42328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42312_42326,(1),null);
reagent.dom.re_render_component(comp_42328,container_42327);


var G__42329 = seq__42302_42322;
var G__42330 = chunk__42303_42323;
var G__42331 = count__42304_42324;
var G__42332 = (i__42305_42325 + (1));
seq__42302_42322 = G__42329;
chunk__42303_42323 = G__42330;
count__42304_42324 = G__42331;
i__42305_42325 = G__42332;
continue;
} else {
var temp__5735__auto___42333 = cljs.core.seq(seq__42302_42322);
if(temp__5735__auto___42333){
var seq__42302_42334__$1 = temp__5735__auto___42333;
if(cljs.core.chunked_seq_QMARK_(seq__42302_42334__$1)){
var c__4591__auto___42335 = cljs.core.chunk_first(seq__42302_42334__$1);
var G__42336 = cljs.core.chunk_rest(seq__42302_42334__$1);
var G__42337 = c__4591__auto___42335;
var G__42338 = cljs.core.count(c__4591__auto___42335);
var G__42339 = (0);
seq__42302_42322 = G__42336;
chunk__42303_42323 = G__42337;
count__42304_42324 = G__42338;
i__42305_42325 = G__42339;
continue;
} else {
var vec__42315_42340 = cljs.core.first(seq__42302_42334__$1);
var container_42341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42315_42340,(0),null);
var comp_42342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42315_42340,(1),null);
reagent.dom.re_render_component(comp_42342,container_42341);


var G__42343 = cljs.core.next(seq__42302_42334__$1);
var G__42344 = null;
var G__42345 = (0);
var G__42346 = (0);
seq__42302_42322 = G__42343;
chunk__42303_42323 = G__42344;
count__42304_42324 = G__42345;
i__42305_42325 = G__42346;
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
