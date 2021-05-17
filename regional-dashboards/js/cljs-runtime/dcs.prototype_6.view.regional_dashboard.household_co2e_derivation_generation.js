goog.provide('dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation');
dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation.chart_spec = (function dcs$prototype_6$view$regional_dashboard$household_co2e_derivation_generation$chart_spec(title,region,data){
var year_count = cljs.core.count(cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),data));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"year",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"year",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),year_count,new cljs.core.Keyword(null,"title","title",636505583),"year"], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zero","zero",-858964576),false], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"tonnes"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scotland",region], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1f77b4","#fdae6b"], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),null], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),"my",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),0.2], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"year",new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null),"https://vega.github.io/schema/vega/v5.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"point","point",1813198264),false], null),(200),"floralwhite",title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"multi",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["region"], null),new cljs.core.Keyword(null,"bind","bind",-113428417),"legend"], null)], null),(100),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null)]);
});
dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation.chart = (function dcs$prototype_6$view$regional_dashboard$household_co2e_derivation_generation$chart(region,household_co2e_derivation_generation){
var household_co2e_derivation_generation_SINGLEQUOTE_ = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28073_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc(["Scotland",region]),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__28073_SHARP_));
}),household_co2e_derivation_generation);
var household_co2e_derivation_generation_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28074_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28074_SHARP_,new cljs.core.Keyword(null,"year","year",335913393),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__28074_SHARP_)));
}),household_co2e_derivation_generation_SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation.chart_spec("Carbon impact",region,household_co2e_derivation_generation_SINGLEQUOTE__SINGLEQUOTE_),dcs.prototype_6.util.vega_embed_opts], null)], null);
});
dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation.root = (function dcs$prototype_6$view$regional_dashboard$household_co2e_derivation_generation$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation.chart,cljs.core.deref(dcs.prototype_6.state.region_cursor),cljs.core.deref(dcs.prototype_6.state.household_co2e_derivation_generation_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.regional_dashboard.household_co2e_derivation_generation.js.map
