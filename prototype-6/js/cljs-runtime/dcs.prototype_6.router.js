goog.provide('dcs.prototype_6.router');
dcs.prototype_6.router.routes = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","home-view","dcs.prototype-6.router/home-view",-1047320911),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.home.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/todo",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","todo-view","dcs.prototype-6.router/todo-view",1969441300),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.todo.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/regional-dashboard",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","dashboard-view","dcs.prototype-6.router/dashboard-view",1282925944),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.regional_dashboard.main.root,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.PersistentArrayMap.createAsIfByAssoc([spec_tools.data_spec.opt(new cljs.core.Keyword(null,"region","region",270415120)),cljs.core.string_QMARK_])], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/stirling-bin-collection",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","stirling-bin-collection-view","dcs.prototype-6.router/stirling-bin-collection-view",1993053231),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.stirling_bin_collection.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/stirling-community-food",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","stirling-community-food-view","dcs.prototype-6.router/stirling-community-food-view",2069488221),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.stirling_community_food.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/fairshare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","fairshare-view","dcs.prototype-6.router/fairshare-view",1225940928),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.fairshare.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/ace-furniture",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","ace-furniture-view","dcs.prototype-6.router/ace-furniture-view",1517928476),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.ace_furniture.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/household-waste-analysis",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","household-waste-analysis-view","dcs.prototype-6.router/household-waste-analysis-view",-1691121018),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.household_waste_analysis.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/waste-sites-map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","waste-sites-map-view","dcs.prototype-6.router/waste-sites-map-view",776786687),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.waste_sites_map.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/waste-through-time-map/:preset",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","waste-through-time-map-view","dcs.prototype-6.router/waste-through-time-map-view",-656682454),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.waste_through_time_map.root,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preset","preset",777387345),cljs.core.string_QMARK_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/pivot-drilldown-and-plot/:preset",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","pivot-drilldown-and-plot-view","dcs.prototype-6.router/pivot-drilldown-and-plot-view",-306358018),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.pivot_drilldown_and_plot.root,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preset","preset",777387345),cljs.core.string_QMARK_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/guide/easier-open-data",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","easier-open-data-view","dcs.prototype-6.router/easier-open-data-view",1190266596),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.guide.easier_open_data.main.root,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.PersistentArrayMap.createAsIfByAssoc([spec_tools.data_spec.opt(new cljs.core.Keyword(null,"target","target",253001721)),cljs.core.string_QMARK_])], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/guide/include-notebook-experiment",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","include-notebook-experiment-view","dcs.prototype-6.router/include-notebook-experiment-view",-380073296),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.guide.include_notebook_experiment.main.root,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.PersistentArrayMap.createAsIfByAssoc([spec_tools.data_spec.opt(new cljs.core.Keyword(null,"target","target",253001721)),cljs.core.string_QMARK_])], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/guide/regional-dashboard",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","regional-dashboard-tutorial-view","dcs.prototype-6.router/regional-dashboard-tutorial-view",-1854811286),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.guide.regional_dashboard.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/data",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","data-view","dcs.prototype-6.router/data-view",1255890014),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.data.root,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.PersistentArrayMap.createAsIfByAssoc([spec_tools.data_spec.opt(new cljs.core.Keyword(null,"target","target",253001721)),cljs.core.string_QMARK_])], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","about-view","dcs.prototype-6.router/about-view",476186926),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.about.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/x",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","experiment-view","dcs.prototype-6.router/experiment-view",-792500273),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.experiment.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*path",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dcs.prototype-6.router","catch-all","dcs.prototype-6.router/catch-all",-1817070688),new cljs.core.Keyword(null,"view","view",1247994814),dcs.prototype_6.view.home.root], null)], null)], null);
dcs.prototype_6.router.init = (function dcs$prototype_6$router$init(){
return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(dcs.prototype_6.router.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),null], null)),(function (m){
return cljs.core.reset_BANG_(dcs.prototype_6.state.route_match_cursor,m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=dcs.prototype_6.router.js.map
