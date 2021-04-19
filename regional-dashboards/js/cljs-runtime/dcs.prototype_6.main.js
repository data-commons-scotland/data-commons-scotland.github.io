goog.provide('dcs.prototype_6.main');
dcs.prototype_6.main.page = (function dcs$prototype_6$main$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.navbar.root], null),(function (){var route = cljs.core.deref(dcs.prototype_6.state.route_match);
console.log("route=",route);

var view = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return dcs.prototype_6.view.home.root;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(dcs.prototype_6.state.route_match)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Built by the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Data Commons Scotland"], null)," project."], null)], null)], null);
});
dcs.prototype_6.main.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.main","home-view","dcs.prototype-6.main/home-view",-587741119),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.home.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/todo",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.main","todo-view","dcs.prototype-6.main/todo-view",1927965668),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.todo.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/regional-dashboard",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.main","dashboard-view","dcs.prototype-6.main/dashboard-view",1256271784),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.regional_dashboard.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*path",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.main","catch-all","dcs.prototype-6.main/catch-all",-1774366192),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.regional_dashboard.main.root], null)], null)], null);
dcs.prototype_6.main.start = (function dcs$prototype_6$main$start(){
console.log("Starting router");

reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(dcs.prototype_6.main.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),null], null)),(function (m){
return cljs.core.reset_BANG_(dcs.prototype_6.state.route_match,m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

console.log("Starting render");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.main.page], null),document.getElementById("app"));
});
dcs.prototype_6.main.init = (function dcs$prototype_6$main$init(){
dcs.prototype_6.state.load_data();

return dcs.prototype_6.main.start();
});
goog.exportSymbol('dcs.prototype_6.main.init', dcs.prototype_6.main.init);
dcs.prototype_6.main.stop = (function dcs$prototype_6$main$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.prototype_6.main.js.map
