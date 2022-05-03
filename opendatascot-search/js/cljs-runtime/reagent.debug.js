goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19940__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19945__i = 0, G__19945__a = new Array(arguments.length -  0);
while (G__19945__i < G__19945__a.length) {G__19945__a[G__19945__i] = arguments[G__19945__i + 0]; ++G__19945__i;}
  args = new cljs.core.IndexedSeq(G__19945__a,0,null);
} 
return G__19940__delegate.call(this,args);};
G__19940.cljs$lang$maxFixedArity = 0;
G__19940.cljs$lang$applyTo = (function (arglist__19946){
var args = cljs.core.seq(arglist__19946);
return G__19940__delegate(args);
});
G__19940.cljs$core$IFn$_invoke$arity$variadic = G__19940__delegate;
return G__19940;
})()
);

(o.error = (function() { 
var G__19947__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19948__i = 0, G__19948__a = new Array(arguments.length -  0);
while (G__19948__i < G__19948__a.length) {G__19948__a[G__19948__i] = arguments[G__19948__i + 0]; ++G__19948__i;}
  args = new cljs.core.IndexedSeq(G__19948__a,0,null);
} 
return G__19947__delegate.call(this,args);};
G__19947.cljs$lang$maxFixedArity = 0;
G__19947.cljs$lang$applyTo = (function (arglist__19949){
var args = cljs.core.seq(arglist__19949);
return G__19947__delegate(args);
});
G__19947.cljs$core$IFn$_invoke$arity$variadic = G__19947__delegate;
return G__19947;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
