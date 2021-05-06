goog.provide('dcs.prototype_6.main');
dcs.prototype_6.main.page = (function dcs$prototype_6$main$page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.navbar.root], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.status.root], null),(function (){var route = cljs.core.deref(dcs.prototype_6.state.route_match_cursor);
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
console.log("page route=",route);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Built by the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Data Commons Scotland"], null)," project."], null)], null)], null);
});
dcs.prototype_6.main.start = (function dcs$prototype_6$main$start(){
console.log("Starting router");

dcs.prototype_6.router.init();

console.log("Starting render");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.main.page], null),document.getElementById("app"));
});
dcs.prototype_6.main.init = (function dcs$prototype_6$main$init(){
dcs.prototype_6.loader.load_data();

return dcs.prototype_6.main.start();
});
goog.exportSymbol('dcs.prototype_6.main.init', dcs.prototype_6.main.init);
dcs.prototype_6.main.stop = (function dcs$prototype_6$main$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.prototype_6.main.js.map
