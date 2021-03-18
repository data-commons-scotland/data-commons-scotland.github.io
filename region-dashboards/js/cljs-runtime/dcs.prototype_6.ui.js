goog.provide('dcs.prototype_6.ui');
dcs.prototype_6.ui.header = (function dcs$prototype_6$ui$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"A template for reagent apps"], null)], null);
});
dcs.prototype_6.ui.counter = (function dcs$prototype_6$ui$counter(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26044_SHARP_){
return dcs.prototype_6.events.decrement(p1__26044_SHARP_);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dcs.prototype_6.state.app_state),new cljs.core.Keyword(null,"count","count",2139924085))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26045_SHARP_){
return dcs.prototype_6.events.increment(p1__26045_SHARP_);
})], null),"+"], null)], null);
});
dcs.prototype_6.ui.map_ui = (function dcs$prototype_6$ui$map_ui(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map-ui.map-container","div#map-ui.map-container",-1735188125)], null);
});
dcs.prototype_6.ui.app = (function dcs$prototype_6$ui$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui.counter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui.map_ui], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.ui.js.map
