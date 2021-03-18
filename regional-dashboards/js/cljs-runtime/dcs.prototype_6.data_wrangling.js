goog.provide('dcs.prototype_6.data_wrangling');
dcs.prototype_6.data_wrangling.population_values_for_scotland = (function dcs$prototype_6$data_wrangling$population_values_for_scotland(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26459){
var vec__26460 = p__26459;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_wrangling.household_co2e_values_for_scotland = (function dcs$prototype_6$data_wrangling$household_co2e_values_for_scotland(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26463){
var vec__26464 = p__26463;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26464,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26464,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_wrangling.household_waste_3dim = (function dcs$prototype_6$data_wrangling$household_waste_3dim(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26467){
var vec__26468 = p__26467;
var vec__26471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26468,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26468,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_wrangling.household_waste_3dim_values_for_scotland = (function dcs$prototype_6$data_wrangling$household_waste_3dim_values_for_scotland(household_waste_3dim){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26474){
var vec__26475 = p__26474;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26475,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26475,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_waste_3dim));
});

//# sourceMappingURL=dcs.prototype_6.data_wrangling.js.map
