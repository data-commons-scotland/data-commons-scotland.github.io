goog.provide('dcs.prototype_6.deriver');
dcs.prototype_6.deriver.trend = (function dcs$prototype_6$deriver$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.deriver.maybe_calc_household_waste_derivations = (function dcs$prototype_6$deriver$maybe_calc_household_waste_derivations(){
var household_waste = cljs.core.deref(dcs.prototype_6.state.household_waste_holder);
var population = cljs.core.deref(dcs.prototype_6.state.population_holder);
if((((!((household_waste == null)))) && ((!((population == null)))))){
console.log("Calculating household-waste-derivations");

var start_time = dcs.prototype_6.util.now();
var household_waste_derivation_generation0 = dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management(household_waste);
var household_waste_derivation_management0 = dcs.prototype_6.data_shaping.rollup_household_waste_materials(household_waste);
var household_waste_derivation_composition0 = dcs.prototype_6.data_shaping.rollup_household_waste_managements(household_waste);
var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population);
var lookup_population = (function (region,year){
return new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,year], null))));
});
var household_waste_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25973){
var map__25974 = p__25973;
var map__25974__$1 = cljs.core.__destructure_map(map__25974);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_generation0);
var household_waste_derivation_management = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25975){
var map__25976 = p__25975;
var map__25976__$1 = cljs.core.__destructure_map(map__25976);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,new cljs.core.Keyword(null,"year","year",335913393));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_management0);
var household_waste_derivation_composition = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25977){
var map__25978 = p__25977;
var map__25978__$1 = cljs.core.__destructure_map(map__25978);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"year","year",335913393));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_composition0);
var household_waste_derivation_percent_recycled = dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled(household_waste);
var latest_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste));
var household_waste_derivation_generation_positions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"year","year",335913393),latest_year], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25967_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_year,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__25967_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25966_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__25966_SHARP_));
}),household_waste_derivation_generation)))),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.deriver.trend)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25979){
var vec__25980 = p__25979;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25980,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25980,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"trend","trend",54563841),dcs.prototype_6.deriver.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25969_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__25969_SHARP_),new cljs.core.Keyword(null,"tonnes","tonnes",-913468653).cljs$core$IFn$_invoke$arity$1(p1__25969_SHARP_)],null));
}),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25968_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__25968_SHARP_));
}),household_waste_derivation_generation)))))], null);
var household_waste_derivation_percent_recycled_positions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"year","year",335913393),latest_year], null);
}),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percentage","percentage",-1610213650),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25971_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_year,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__25971_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25970_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__25970_SHARP_));
}),household_waste_derivation_percent_recycled))))),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.deriver.trend)], null);
}),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25983){
var vec__25984 = p__25983;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25984,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25984,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"trend","trend",54563841),dcs.prototype_6.deriver.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25972_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__25972_SHARP_),new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(p1__25972_SHARP_)],null));
}),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),household_waste_derivation_percent_recycled)))))], null);
cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_generation_cursor,household_waste_derivation_generation);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_percent_recycled_cursor,household_waste_derivation_percent_recycled);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_management_cursor,household_waste_derivation_management);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_composition_cursor,household_waste_derivation_composition);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_generation_positions_cursor,household_waste_derivation_generation_positions);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_percent_recycled_positions_cursor,household_waste_derivation_percent_recycled_positions);

return console.log(["Calculating household-waste-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_household_co2e_derivations = (function dcs$prototype_6$deriver$maybe_calc_household_co2e_derivations(){
var household_co2e = cljs.core.deref(dcs.prototype_6.state.household_co2e_holder);
var population = cljs.core.deref(dcs.prototype_6.state.population_holder);
if((((!((household_co2e == null)))) && ((!((population == null)))))){
console.log("Calculating household-co2e-derivations");

var start_time = dcs.prototype_6.util.now();
var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population);
var lookup_population = (function (region,year){
return new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,year], null))));
});
var household_co2e_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25991){
var map__25992 = p__25991;
var map__25992__$1 = cljs.core.__destructure_map(map__25992);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_co2e);
var latest_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
var household_co2e_derivation_generation_positions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"year","year",335913393),latest_year], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25988_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_year,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__25988_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25987_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__25987_SHARP_));
}),household_co2e_derivation_generation)))),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.deriver.trend)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25993){
var vec__25994 = p__25993;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"trend","trend",54563841),dcs.prototype_6.deriver.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25990_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__25990_SHARP_),new cljs.core.Keyword(null,"tonnes","tonnes",-913468653).cljs$core$IFn$_invoke$arity$1(p1__25990_SHARP_)],null));
}),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25989_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__25989_SHARP_));
}),household_co2e_derivation_generation)))))], null);
cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_derivation_generation_cursor,household_co2e_derivation_generation);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_derivation_generation_positions_cursor,household_co2e_derivation_generation_positions);

return console.log(["Calculating household-co2e-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_business_waste_by_region_derivations = (function dcs$prototype_6$deriver$maybe_calc_business_waste_by_region_derivations(){
var business_waste_by_region = cljs.core.deref(dcs.prototype_6.state.business_waste_by_region_holder);
if((!((business_waste_by_region == null)))){
} else {
}

console.log("Calculating business-waste-by-region-derivations");

var start_time = dcs.prototype_6.util.now();
var region_count = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),business_waste_by_region)));
var business_waste_by_region_derivation_generation0 = dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials(business_waste_by_region);
var business_waste_by_region_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25997){
var map__25998 = p__25997;
var map__25998__$1 = cljs.core.__destructure_map(map__25998);
var original = map__25998__$1;
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",region)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland average",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / region_count)], null);
} else {
return original;
}
}),business_waste_by_region_derivation_generation0);
var business_waste_by_region_derivation_composition = business_waste_by_region;
cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_derivation_generation_cursor,business_waste_by_region_derivation_generation);

cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_derivation_composition_cursor,business_waste_by_region_derivation_composition);

return console.log(["Calculating business-waste-by-region-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
dcs.prototype_6.deriver.maybe_calc_waste_site_derivations = (function dcs$prototype_6$deriver$maybe_calc_waste_site_derivations(){
var waste_site = cljs.core.deref(dcs.prototype_6.state.waste_site_holder);
if((!((waste_site == null)))){
} else {
}

console.log("Calculating waste-site-derivations");

var start_time = dcs.prototype_6.util.now();
var waste_site_derivation = dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region(waste_site);
cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_derivation_cursor,waste_site_derivation);

return console.log(["Calculating waste-site-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
dcs.prototype_6.deriver.maybe_calc_stirling_bin_collection_derivations = (function dcs$prototype_6$deriver$maybe_calc_stirling_bin_collection_derivations(){
var stirling_bin_collection = cljs.core.deref(dcs.prototype_6.state.stirling_bin_collection_holder);
var population = cljs.core.deref(dcs.prototype_6.state.population_holder);
if((((!((stirling_bin_collection == null)))) && ((!((population == null)))))){
console.log("Calculating stirling-bin-collection-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation_generation0 = dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection);
var derivation_composition0 = dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi(stirling_bin_collection);
var derivation_percent_recycled = dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection);
var derivation_missed = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25999){
var vec__26000 = p__25999;
var vec__26003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26000,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26003,(0),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26003,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26000,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missed-bin?","missed-bin?",-238072209),stirling_bin_collection)));
var population_max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),population));
var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population);
var lookup_population = (function (region,year){
return new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,(function (){var x__4252__auto__ = year;
var y__4253__auto__ = population_max_year;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})()], null))));
});
var derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26006){
var map__26007 = p__26006;
var map__26007__$1 = cljs.core.__destructure_map(map__26007);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26007__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26007__$1,new cljs.core.Keyword(null,"year","year",335913393));
var quarter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26007__$1,new cljs.core.Keyword(null,"quarter","quarter",-508147616));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26007__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),derivation_generation0);
var derivation_composition = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26008){
var map__26009 = p__26008;
var map__26009__$1 = cljs.core.__destructure_map(map__26009);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"year","year",335913393));
var quarter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"quarter","quarter",-508147616));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),derivation_composition0);
cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_derivation_generation_cursor,derivation_generation);

cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_derivation_composition_cursor,derivation_composition);

cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_derivation_percent_recycled_cursor,derivation_percent_recycled);

cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_derivation_missed_bins_cursor,derivation_missed);

return console.log(["Calculating stirling-bin-collection-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_stirling_community_food_tonnes_derivations = (function dcs$prototype_6$deriver$maybe_calc_stirling_community_food_tonnes_derivations(){
var tonnes = cljs.core.deref(dcs.prototype_6.state.stirling_community_food_tonnes_holder);
if((!((tonnes == null)))){
} else {
}

console.log("Calculating stirling-community-food-tonnes-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation_tonnes = tonnes;
var derivation_flow = dcs.prototype_6.data_shaping.calc_stirling_community_food_flow(tonnes);
cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_derivation_tonnes_cursor,derivation_tonnes);

cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_derivation_flow_cursor,derivation_flow);

return console.log(["Calculating stirling-community-food-tonnes-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
dcs.prototype_6.deriver.maybe_calc_stirling_community_food_footfall_derivations = (function dcs$prototype_6$deriver$maybe_calc_stirling_community_food_footfall_derivations(){
var footfall = cljs.core.deref(dcs.prototype_6.state.stirling_community_food_footfall_holder);
if((!((footfall == null)))){
} else {
}

console.log("Calculating stirling-community-food-footfall-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation = footfall;
cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_footfall_derivation_cursor,derivation);

return console.log(["Calculating stirling-community-food-footfall-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
dcs.prototype_6.deriver.maybe_calc_fairshare_material_derivations = (function dcs$prototype_6$deriver$maybe_calc_fairshare_material_derivations(){
var raw = cljs.core.deref(dcs.prototype_6.state.fairshare_material_holder);
if((!((raw == null)))){
} else {
}

console.log("Calculating fairshare-material-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation = raw;
cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_material_derivation_cursor,derivation);

return console.log(["Calculating fairshare-material-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
dcs.prototype_6.deriver.maybe_calc_fairshare_co2e_derivations = (function dcs$prototype_6$deriver$maybe_calc_fairshare_co2e_derivations(){
var raw = cljs.core.deref(dcs.prototype_6.state.fairshare_co2e_holder);
if((!((raw == null)))){
} else {
}

console.log("Calculating fairshare-co2e-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation = raw;
cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_co2e_derivation_cursor,derivation);

return console.log(["Calculating fairshare-co2e-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
dcs.prototype_6.deriver.maybe_calc_household_waste_analysis_derivations = (function dcs$prototype_6$deriver$maybe_calc_household_waste_analysis_derivations(){
var household_waste_analysis = cljs.core.deref(dcs.prototype_6.state.household_waste_analysis_holder);
if((!((household_waste_analysis == null)))){
} else {
}

console.log("Calculating household-waste-analysis-derivations");

var start_time = dcs.prototype_6.util.now();
var household_waste_analysis_derivation = household_waste_analysis;
cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_derivation_cursor,household_waste_analysis_derivation);

return console.log(["Calculating household-waste-analysis-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
});
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"household-waste-derivations-dependency","household-waste-derivations-dependency",1237970348),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_waste_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"household-co2e-derivations-dependency","household-co2e-derivations-dependency",-155623698),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_co2e_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"stirling-bin-collection-derivations-dependency","stirling-bin-collection-derivations-dependency",1665364382),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_bin_collection_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_waste_holder,new cljs.core.Keyword(null,"household-waste-derivations-dependency","household-waste-derivations-dependency",1237970348),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_waste_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_co2e_holder,new cljs.core.Keyword(null,"household-co2e-derivations-dependency","household-co2e-derivations-dependency",-155623698),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_co2e_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.business_waste_by_region_holder,new cljs.core.Keyword(null,"business-waste-by-region-derivations-dependency","business-waste-by-region-derivations-dependency",869918158),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_business_waste_by_region_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.waste_site_holder,new cljs.core.Keyword(null,"waste-site-derivations-dependency","waste-site-derivations-dependency",-357300318),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_waste_site_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.stirling_bin_collection_holder,new cljs.core.Keyword(null,"stirling-bin-collection-derivations-dependency","stirling-bin-collection-derivations-dependency",1665364382),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_bin_collection_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.stirling_community_food_tonnes_holder,new cljs.core.Keyword(null,"stirling-community-food-tonnes-derivations-dependency","stirling-community-food-tonnes-derivations-dependency",-1907769725),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_community_food_tonnes_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.stirling_community_food_footfall_holder,new cljs.core.Keyword(null,"stirling-community-food-footfall-derivations-dependency","stirling-community-food-footfall-derivations-dependency",683220095),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_community_food_footfall_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.fairshare_material_holder,new cljs.core.Keyword(null,"fairshare-material-derivations-dependency","fairshare-material-derivations-dependency",-119006216),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_fairshare_material_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.fairshare_co2e_holder,new cljs.core.Keyword(null,"fairshare-co2e-derivations-dependency","fairshare-co2e-derivations-dependency",-1633294802),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_fairshare_co2e_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_waste_analysis_holder,new cljs.core.Keyword(null,"household-waste-analysis-derivations-dependency","household-waste-analysis-derivations-dependency",1711231100),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_waste_analysis_derivations();
} else {
return null;
}
}));

//# sourceMappingURL=dcs.prototype_6.deriver.js.map
