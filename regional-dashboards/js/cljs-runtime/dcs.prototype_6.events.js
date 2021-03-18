goog.provide('dcs.prototype_6.events');
dcs.prototype_6.events.increment = (function dcs$prototype_6$events$increment(event){
event.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dcs.prototype_6.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});
dcs.prototype_6.events.decrement = (function dcs$prototype_6$events$decrement(event){
event.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dcs.prototype_6.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.dec);
});

//# sourceMappingURL=dcs.prototype_6.events.js.map
