goog.provide('dcs.prototype_6.deriver');
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
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,year], null))));
});
var household_waste_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50942){
var map__50943 = p__50942;
var map__50943__$1 = cljs.core.__destructure_map(map__50943);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_generation0);
var household_waste_derivation_management = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50961){
var map__50962 = p__50961;
var map__50962__$1 = cljs.core.__destructure_map(map__50962);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"year","year",335913393));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50962__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_management0);
var household_waste_derivation_composition = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50963){
var map__50964 = p__50963;
var map__50964__$1 = cljs.core.__destructure_map(map__50964);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"year","year",335913393));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_composition0);
var household_waste_derivation_percent_recycled = (function (){var household_waste_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50913_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scot gov target",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50913_SHARP_));
}),household_waste);
var regions_and_scotland = dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled(household_waste_SINGLEQUOTE_);
var household_waste_percentage_recycled_scotland = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50914_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50914_SHARP_));
}),regions_and_scotland);
var scotGovTarget = dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste_percentage_recycled(household_waste_percentage_recycled_scotland);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(regions_and_scotland,scotGovTarget);
})();
var latest_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste));
var household_waste_derivation_generation_positions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"year","year",335913393),latest_year], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50916_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_year,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__50916_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50915_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50915_SHARP_));
}),household_waste_derivation_generation)))),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.data_shaping.trend)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50972){
var vec__50973 = p__50972;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50973,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50973,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"trend","trend",54563841),dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50918_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__50918_SHARP_),new cljs.core.Keyword(null,"tonnes","tonnes",-913468653).cljs$core$IFn$_invoke$arity$1(p1__50918_SHARP_)],null));
}),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50917_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50917_SHARP_));
}),household_waste_derivation_generation)))))], null);
var household_waste_derivation_percent_recycled_positions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"year","year",335913393),latest_year], null);
}),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percentage","percentage",-1610213650),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50920_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_year,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__50920_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50919_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50919_SHARP_));
}),household_waste_derivation_percent_recycled))))),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.data_shaping.trend)], null);
}),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50977){
var vec__50979 = p__50977;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50979,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50979,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"trend","trend",54563841),dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50922_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__50922_SHARP_),new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(p1__50922_SHARP_)],null));
}),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50921_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50921_SHARP_));
}),household_waste_derivation_percent_recycled))))))], null);
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
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,year], null))));
});
var household_co2e_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51003){
var map__51004 = p__51003;
var map__51004__$1 = cljs.core.__destructure_map(map__51004);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51004__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51004__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51004__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_co2e);
var latest_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
var household_co2e_derivation_generation_positions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"year","year",335913393),latest_year], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50986_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_year,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__50986_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50985_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50985_SHARP_));
}),household_co2e_derivation_generation)))),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (ix,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"position","position",-2011731912),(ix + (1)),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.data_shaping.trend)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51006){
var vec__51007 = p__51006;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51007,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51007,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"trend","trend",54563841),dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50991_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__50991_SHARP_),new cljs.core.Keyword(null,"tonnes","tonnes",-913468653).cljs$core$IFn$_invoke$arity$1(p1__50991_SHARP_)],null));
}),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50987_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__50987_SHARP_));
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
console.log("Calculating business-waste-by-region-derivations");

var start_time = dcs.prototype_6.util.now();
var region_count = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),business_waste_by_region)));
var business_waste_by_region_derivation_generation0 = dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials(business_waste_by_region);
var business_waste_by_region_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51016){
var map__51017 = p__51016;
var map__51017__$1 = cljs.core.__destructure_map(map__51017);
var original = map__51017__$1;
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Scotland",null,"Scot gov target",null], null), null),region)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",region))?"Scotland average":"Scot gov target"),new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / region_count)], null);
} else {
return original;
}
}),business_waste_by_region_derivation_generation0);
var business_waste_by_region_derivation_composition = business_waste_by_region;
cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_derivation_generation_cursor,business_waste_by_region_derivation_generation);

cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_derivation_composition_cursor,business_waste_by_region_derivation_composition);

return console.log(["Calculating business-waste-by-region-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_waste_site_derivations = (function dcs$prototype_6$deriver$maybe_calc_waste_site_derivations(){
var waste_site = cljs.core.deref(dcs.prototype_6.state.waste_site_holder);
if((!((waste_site == null)))){
console.log("Calculating waste-site-derivations");

var start_time = dcs.prototype_6.util.now();
var waste_site_derivation = dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region(waste_site);
cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_derivation_cursor,waste_site_derivation);

return console.log(["Calculating waste-site-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
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
var derivation_missed = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51028){
var vec__51029 = p__51028;
var vec__51032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51029,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51032,(0),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51032,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51029,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missed-bin?","missed-bin?",-238072209),stirling_bin_collection)));
var population_max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),population));
var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population);
var lookup_population = (function (region,year){
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,(function (){var x__4252__auto__ = year;
var y__4253__auto__ = population_max_year;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})()], null))));
});
var derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51039){
var map__51041 = p__51039;
var map__51041__$1 = cljs.core.__destructure_map(map__51041);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51041__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51041__$1,new cljs.core.Keyword(null,"year","year",335913393));
var quarter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51041__$1,new cljs.core.Keyword(null,"quarter","quarter",-508147616));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51041__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),derivation_generation0);
var derivation_composition = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51044){
var map__51045 = p__51044;
var map__51045__$1 = cljs.core.__destructure_map(map__51045);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"year","year",335913393));
var quarter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"quarter","quarter",-508147616));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
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
console.log("Calculating stirling-community-food-tonnes-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation_tonnes = tonnes;
var derivation_flow = dcs.prototype_6.data_shaping.calc_stirling_community_food_flow(tonnes);
cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_derivation_tonnes_cursor,derivation_tonnes);

cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_derivation_flow_cursor,derivation_flow);

return console.log(["Calculating stirling-community-food-tonnes-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_stirling_community_food_footfall_derivations = (function dcs$prototype_6$deriver$maybe_calc_stirling_community_food_footfall_derivations(){
var footfall = cljs.core.deref(dcs.prototype_6.state.stirling_community_food_footfall_holder);
if((!((footfall == null)))){
console.log("Calculating stirling-community-food-footfall-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation = footfall;
cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_footfall_derivation_cursor,derivation);

return console.log(["Calculating stirling-community-food-footfall-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_fairshare_derivations = (function dcs$prototype_6$deriver$maybe_calc_fairshare_derivations(){
var raw = cljs.core.deref(dcs.prototype_6.state.fairshare_holder);
if((!((raw == null)))){
console.log("Calculating fairshare-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation_material = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),new cljs.core.Keyword(null,"tonnes-weight","tonnes-weight",-1717473171).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Keyword(null,"tonnes-weight","tonnes-weight",-1717473171),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tonnes-co2e","tonnes-co2e",-775606366)], 0));
}),raw);
var derivation_co2e = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),new cljs.core.Keyword(null,"tonnes-co2e","tonnes-co2e",-775606366).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Keyword(null,"tonnes-weight","tonnes-weight",-1717473171),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tonnes-co2e","tonnes-co2e",-775606366)], 0));
}),raw);
cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_derivation_material_cursor,derivation_material);

cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_derivation_co2e_cursor,derivation_co2e);

return console.log(["Calculating fairshare-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_ace_furniture_derivations = (function dcs$prototype_6$deriver$maybe_calc_ace_furniture_derivations(){
var counts = cljs.core.deref(dcs.prototype_6.state.ace_furniture_count_holder);
var avg_weights = cljs.core.deref(dcs.prototype_6.state.ace_furniture_avg_weight_holder);
var furniture_to_scottishCarbonMetric = cljs.core.deref(dcs.prototype_6.state.ace_furniture_to_scottishCarbonMetric_holder);
var co2e_multiplier = cljs.core.deref(dcs.prototype_6.state.co2e_multiplier_holder);
if((((!((counts == null)))) && ((!((avg_weights == null)))) && ((!((furniture_to_scottishCarbonMetric == null)))) && ((!((co2e_multiplier == null)))))){
console.log("Calculating ace-furniture-derivations");

var start_time = dcs.prototype_6.util.now();
var vec__51056 = dcs.prototype_6.data_shaping.calc_ace_furniture_trends(counts);
var category_trends = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51056,(0),null);
var item_trends = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51056,(1),null);
var avg_weights_lookup_map = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),avg_weights);
var lookup_avg_weight = (function (category,item){
return new cljs.core.Keyword(null,"avg-kg","avg-kg",1937253584).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(avg_weights_lookup_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null))));
});
var weights = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51062){
var map__51063 = p__51062;
var map__51063__$1 = cljs.core.__destructure_map(map__51063);
var m = map__51063__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51063__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51063__$1,new cljs.core.Keyword(null,"item","item",249373802));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51063__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"weight","weight",-1262796205),(lookup_avg_weight(category,item) * count));
}),counts);
var vec__51059 = dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth(weights,furniture_to_scottishCarbonMetric,co2e_multiplier);
var flights_per_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(0),null);
var flights_per_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(1),null);
cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_derivation_count_cursor,counts);

cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_derivation_category_trends_cursor,category_trends);

cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_derivation_item_trends_cursor,item_trends);

cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_derivation_weight_cursor,weights);

cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_derivation_flights_per_category_cursor,flights_per_category);

cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_derivation_flights_per_item_cursor,flights_per_item);

return console.log(["Calculating ace-furniture-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_household_waste_analysis_derivations = (function dcs$prototype_6$deriver$maybe_calc_household_waste_analysis_derivations(){
var household_waste_analysis = cljs.core.deref(dcs.prototype_6.state.household_waste_analysis_holder);
if((!((household_waste_analysis == null)))){
console.log("Calculating household-waste-analysis-derivations");

var start_time = dcs.prototype_6.util.now();
var household_waste_analysis_derivation = household_waste_analysis;
cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_derivation_cursor,household_waste_analysis_derivation);

return console.log(["Calculating household-waste-analysis-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
dcs.prototype_6.deriver.maybe_calc_meta_derivations = (function dcs$prototype_6$deriver$maybe_calc_meta_derivations(){
var meta = cljs.core.deref(dcs.prototype_6.state.meta_holder);
if((!((meta == null)))){
console.log("Calculating meta-derivations");

var start_time = dcs.prototype_6.util.now();
var derivation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51071_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__51071_SHARP_,new cljs.core.Keyword(null,"record-count","record-count",1178959394),(-1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attribute-count","attribute-count",590825050),(-1)], 0));
}),meta);
cljs.core.reset_BANG_(dcs.prototype_6.state.meta_derivation_cursor,derivation);

return console.log(["Calculating meta-derivations: secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.util.secs_to_now(start_time))].join(''));
} else {
return null;
}
});
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"household-waste-derivations-dependency","household-waste-derivations-dependency",1237970348),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_waste_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"household-co2e-derivations-dependency","household-co2e-derivations-dependency",-155623698),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_co2e_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"stirling-bin-collection-derivations-dependency","stirling-bin-collection-derivations-dependency",1665364382),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_bin_collection_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_waste_holder,new cljs.core.Keyword(null,"household-waste-derivations-dependency","household-waste-derivations-dependency",1237970348),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_waste_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_co2e_holder,new cljs.core.Keyword(null,"household-co2e-derivations-dependency","household-co2e-derivations-dependency",-155623698),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_co2e_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.business_waste_by_region_holder,new cljs.core.Keyword(null,"business-waste-by-region-derivations-dependency","business-waste-by-region-derivations-dependency",869918158),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_business_waste_by_region_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.waste_site_holder,new cljs.core.Keyword(null,"waste-site-derivations-dependency","waste-site-derivations-dependency",-357300318),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_waste_site_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.stirling_bin_collection_holder,new cljs.core.Keyword(null,"stirling-bin-collection-derivations-dependency","stirling-bin-collection-derivations-dependency",1665364382),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_bin_collection_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.stirling_community_food_tonnes_holder,new cljs.core.Keyword(null,"stirling-community-food-tonnes-derivations-dependency","stirling-community-food-tonnes-derivations-dependency",-1907769725),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_community_food_tonnes_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.stirling_community_food_footfall_holder,new cljs.core.Keyword(null,"stirling-community-food-footfall-derivations-dependency","stirling-community-food-footfall-derivations-dependency",683220095),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_stirling_community_food_footfall_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.fairshare_holder,new cljs.core.Keyword(null,"fairshare-derivations-dependency","fairshare-derivations-dependency",-806610648),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_fairshare_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.ace_furniture_count_holder,new cljs.core.Keyword(null,"ace-furniture-count-derivations-dependency","ace-furniture-count-derivations-dependency",904108674),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_ace_furniture_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.ace_furniture_avg_weight_holder,new cljs.core.Keyword(null,"ace-furniture-avg-weight-derivations-dependency","ace-furniture-avg-weight-derivations-dependency",800551235),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_ace_furniture_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.ace_furniture_to_scottishCarbonMetric_holder,new cljs.core.Keyword(null,"ace-furniture-avg-weight-derivations-dependency","ace-furniture-avg-weight-derivations-dependency",800551235),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_ace_furniture_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.co2e_multiplier_holder,new cljs.core.Keyword(null,"ace-furniture-avg-weight-derivations-dependency","ace-furniture-avg-weight-derivations-dependency",800551235),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_ace_furniture_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_waste_analysis_holder,new cljs.core.Keyword(null,"household-waste-analysis-derivations-dependency","household-waste-analysis-derivations-dependency",1711231100),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_household_waste_analysis_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.meta_holder,new cljs.core.Keyword(null,"meta-derivations-dependency","meta-derivations-dependency",1601117234),(function (_key,_atom,_old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.deriver.maybe_calc_meta_derivations();
} else {
return null;
}
}));

//# sourceMappingURL=dcs.prototype_6.deriver.js.map
