goog.provide('dcs.prototype_6.browser');
dcs.prototype_6.browser.view1 = (function dcs$prototype_6$browser$view1(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"VIEW - 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.browser","home-view","dcs.prototype-6.browser/home-view",-2126204050))], null),"Home page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.browser","dashboard-page","dcs.prototype-6.browser/dashboard-page",1056027832))], null),"Dashboard page"], null)], null)], null)], null);
});
dcs.prototype_6.browser.page = (function dcs$prototype_6$browser$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_nav.navbar], null),(function (){var route = cljs.core.deref(dcs.prototype_6.state.route_match);
var _ = console.log("route=",route);
var view = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return dcs.prototype_6.view.home.create;
}
})();
console.log("view = ",view);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(dcs.prototype_6.state.route_match)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Built by the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Data Commons Scotland"], null)," project."], null)], null)], null);
});
dcs.prototype_6.browser.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.browser","home-view","dcs.prototype-6.browser/home-view",-2126204050),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.home.create], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/dashboard",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.browser","dashboard-page","dcs.prototype-6.browser/dashboard-page",1056027832),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.ui_root.app], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/route1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.browser","route1-page","dcs.prototype-6.browser/route1-page",1875253016),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.browser.view1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/todo",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.browser","todo-view","dcs.prototype-6.browser/todo-view",892714681),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.todo.create], null)], null)], null);
dcs.prototype_6.browser.start = (function dcs$prototype_6$browser$start(){
console.log("Starting router");

reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(dcs.prototype_6.browser.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (m){
return cljs.core.reset_BANG_(dcs.prototype_6.state.route_match,m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

console.log("Starting render");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.browser.page], null),document.getElementById("app"));
});
dcs.prototype_6.browser.init = (function dcs$prototype_6$browser$init(){
dcs.prototype_6.state.load_data();

return dcs.prototype_6.browser.start();
});
goog.exportSymbol('dcs.prototype_6.browser.init', dcs.prototype_6.browser.init);
dcs.prototype_6.browser.stop = (function dcs$prototype_6$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.prototype_6.browser.js.map
