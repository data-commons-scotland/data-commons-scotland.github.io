goog.provide('dcs.prototype_6.ui_household_waste');
dcs.prototype_6.ui_household_waste.chart_spec = (function dcs$prototype_6$ui_household_waste$chart_spec(title,region,data){
var year_count = cljs.core.count(cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),data));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"year",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"year",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),year_count,new cljs.core.Keyword(null,"title","title",636505583),"year"], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zero","zero",-858964576),false], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"tonnes"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scotland",region], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1f77b4","#fdae6b"], null)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),"my",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),0.2], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"year",new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null),"https://vega.github.io/schema/vega/v5.json","line",(200),"floralwhite",title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"multi",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["region"], null),new cljs.core.Keyword(null,"bind","bind",-113428417),"legend"], null)], null),(100),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null)]);
});
dcs.prototype_6.ui_household_waste.chart = (function dcs$prototype_6$ui_household_waste$chart(region,household_waste,population){
var population__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(population,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26767){
var vec__26768 = p__26767;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population)));
var household_waste__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26771){
var vec__26772 = p__26771;
var vec__26775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26772,(0),null);
var region__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26775,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26775,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26772,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region__$1,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
var household_waste__$2 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_waste__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26778){
var vec__26779 = p__26778;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_waste__$1)));
var household_waste__$3 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26765_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc(["Scotland",region]),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__26765_SHARP_));
}),household_waste__$2);
var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population__$1);
var lookup_population = (function (region__$1,year){
return new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region__$1,year], null))));
});
var household_waste__$4 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26782){
var map__26783 = p__26782;
var map__26783__$1 = (((((!((map__26783 == null))))?(((((map__26783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26783):map__26783);
var region__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region__$1,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region__$1,year))], null);
}),household_waste__$3);
var household_waste__$5 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26766_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26766_SHARP_,new cljs.core.Keyword(null,"year","year",335913393),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__26766_SHARP_)));
}),household_waste__$4);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.ui_household_waste.chart_spec("Household waste per citizen",region,household_waste__$5),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),false], null)], null)], null);
});
dcs.prototype_6.ui_household_waste.create = (function dcs$prototype_6$ui_household_waste$create(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_household_waste.chart,cljs.core.deref(dcs.prototype_6.state.region_holder),cljs.core.deref(dcs.prototype_6.state.household_waste_holder),cljs.core.deref(dcs.prototype_6.state.population_holder)], null);
});

//# sourceMappingURL=dcs.prototype_6.ui_household_waste.js.map
