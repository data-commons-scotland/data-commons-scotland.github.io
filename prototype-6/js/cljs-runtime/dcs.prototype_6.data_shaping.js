goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58395){
var vec__58396 = p__58395;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58396,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58396,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58399){
var vec__58400 = p__58399;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58400,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58400,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58403){
var vec__58404 = p__58403;
var vec__58407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58404,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58407,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58407,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58407,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58404,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58410){
var vec__58411 = p__58410;
var vec__58414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58411,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58414,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58414,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58411,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58417){
var vec__58418 = p__58417;
var vec__58421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58418,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58421,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58421,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58418,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58424){
var vec__58425 = p__58424;
var vec__58428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58425,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58425,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58431){
var vec__58432 = p__58431;
var vec__58435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58432,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58435,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58435,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58435,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58432,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58439){
var vec__58440 = p__58439;
var vec__58443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58443,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58443,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58438_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__58438_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58446){
var vec__58447 = p__58446;
var vec__58450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58447,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58450,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58450,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58447,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58455){
var vec__58456 = p__58455;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58456,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58456,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58454_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__58454_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58453_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__58453_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58459){
var vec__58460 = p__58459;
var vec__58463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58460,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58463,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58463,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58463,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58460,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58466){
var vec__58467 = p__58466;
var vec__58470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58467,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58467,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58474){
var vec__58475 = p__58474;
var vec__58478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58475,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58478,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58478,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58478,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58475,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58473_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__58473_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58481_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__58481_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__58481_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58482_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__58482_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58483_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__58483_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__58483_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58484_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__58484_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58485_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__58485_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58486(s__58487){
return (new cljs.core.LazySeq(null,(function (){
var s__58487__$1 = s__58487;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58487__$1);
if(temp__5735__auto__){
var s__58487__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58487__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__58487__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__58489 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__58488 = (0);
while(true){
if((i__58488 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__58488);
cljs.core.chunk_append(b__58489,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__58627 = (i__58488 + (1));
i__58488 = G__58627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58489),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58486(cljs.core.chunk_rest(s__58487__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58489),null);
}
} else {
var from = cljs.core.first(s__58487__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58486(cljs.core.rest(s__58487__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(waste_sources);
})();
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58490(s__58491){
return (new cljs.core.LazySeq(null,(function (){
var s__58491__$1 = s__58491;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58491__$1);
if(temp__5735__auto__){
var s__58491__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58491__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__58491__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__58493 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__58492 = (0);
while(true){
if((i__58492 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__58492);
cljs.core.chunk_append(b__58493,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__58630 = (i__58492 + (1));
i__58492 = G__58630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58493),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58490(cljs.core.chunk_rest(s__58491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58493),null);
}
} else {
var from = cljs.core.first(s__58491__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58490(cljs.core.rest(s__58491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(not_waste_sources);
})();
var subflows_2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not waste","Stirling Community Food",sum_subflows_tonnes(subflows_1b)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Would-be waste","Stirling Community Food",sum_subflows_tonnes(subflows_1a)], null)], null);
var subflows_3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Used as food",sum_counter_parties_tonnes(used_as_food_outcomes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Not used as food",sum_counter_parties_tonnes(not_used_as_food_outcomes)], null)], null);
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58494(s__58495){
return (new cljs.core.LazySeq(null,(function (){
var s__58495__$1 = s__58495;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58495__$1);
if(temp__5735__auto__){
var s__58495__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58495__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__58495__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__58497 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__58496 = (0);
while(true){
if((i__58496 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__58496);
cljs.core.chunk_append(b__58497,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__58632 = (i__58496 + (1));
i__58496 = G__58632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58497),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58494(cljs.core.chunk_rest(s__58495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58497),null);
}
} else {
var to = cljs.core.first(s__58495__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__58494(cljs.core.rest(s__58495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(not_used_as_food_outcomes);
})();
var ordered_froms = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Purchased","Donated not waste","Local supermarkets","Fareshare","Donated as waste","Other","Not waste","Would-be waste","Stirling Community Food"], null);
var ordered_tos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Used as food","Not used as food","Donated to animal sanctuary","Used by individuals for compost","Council compost, Energen biogas, etc."], null);
var comparator = (function (p__58498,p__58499){
var vec__58500 = p__58498;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58500,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58500,(1),null);
var vec__58503 = p__58499;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a_from,b_from)){
return (ordered_froms.indexOf(a_from) < ordered_froms.indexOf(b_from));
} else {
return (ordered_tos.indexOf(a_to) < ordered_tos.indexOf(b_to));
}
});
var flow = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),comparator,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(subflows_1a,subflows_1b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subflows_2,subflows_3,subflows_4], 0)));
return flow;
});
dcs.prototype_6.data_shaping.calc_ace_furniture_trends = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends(sold_counts){
var yyyy_MM_dds = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2018-02-28","2019-02-28","2019-08-31"], null);
var month_counts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(12),(6)], null);
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58509){
var vec__58510 = p__58509;
var vec__58513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58510,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58513,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58513,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58510,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__58516(s__58517){
return (new cljs.core.LazySeq(null,(function (){
var s__58517__$1 = s__58517;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58517__$1);
if(temp__5735__auto__){
var s__58517__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58517__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__58517__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__58519 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__58518 = (0);
while(true){
if((i__58518 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__58518);
cljs.core.chunk_append(b__58519,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__58518,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__58519,s__58517__$2,temp__5735__auto__,vec__58510,vec__58513,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__58506_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__58506_SHARP_));
});})(i__58518,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__58519,s__58517__$2,temp__5735__auto__,vec__58510,vec__58513,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})());

var G__58645 = (i__58518 + (1));
i__58518 = G__58645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58519),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__58516(cljs.core.chunk_rest(s__58517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58519),null);
}
} else {
var x = cljs.core.first(s__58517__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__58517__$2,temp__5735__auto__,vec__58510,vec__58513,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__58506_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__58506_SHARP_));
});})(yyyy_MM_dd,x,s__58517__$2,temp__5735__auto__,vec__58510,vec__58513,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__58516(cljs.core.rest(s__58517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_counts))));
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58520){
var vec__58521 = p__58520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58524){
var map__58525 = p__58524;
var map__58525__$1 = cljs.core.__destructure_map(map__58525);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58525__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58525__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58507_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58507_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58526){
var vec__58527 = p__58526;
var vec__58530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58527,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58530,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58530,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58530,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58527,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58533){
var vec__58534 = p__58533;
var vec__58537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58540){
var map__58541 = p__58540;
var map__58541__$1 = cljs.core.__destructure_map(map__58541);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58508_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58508_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});
dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth = (function dcs$prototype_6$data_shaping$calc_ace_furniture_flights_worth(sold_weights,furniture_to_waste_streams,co2e_multiplier){
var furniture__GT_waste_stream = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58542){
var map__58543 = p__58542;
var map__58543__$1 = cljs.core.__destructure_map(map__58543);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"item","item",249373802));
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null),waste_stream], null);
}),furniture_to_waste_streams));
var waste_stream__GT_multiplier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58544){
var map__58545 = p__58544;
var map__58545__$1 = cljs.core.__destructure_map(map__58545);
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58545__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58545__$1,new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [waste_stream,multiplier], null);
}),co2e_multiplier));
var get_co2e_multiplier = (function (category,item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(waste_stream__GT_multiplier,cljs.core.get.cljs$core$IFn$_invoke$arity$2(furniture__GT_waste_stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null)));
});
var sold_weights_with_co2es = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58546){
var map__58547 = p__58546;
var map__58547__$1 = cljs.core.__destructure_map(map__58547);
var m = map__58547__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"item","item",249373802));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"co2e","co2e",1991479358),(weight * get_co2e_multiplier(category,item)));
}),sold_weights);
var flights_per_category = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58548){
var map__58549 = p__58548;
var map__58549__$1 = cljs.core.__destructure_map(map__58549);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58550){
var map__58551 = p__58550;
var map__58551__$1 = cljs.core.__destructure_map(map__58551);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58552){
var vec__58553 = p__58552;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58553,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58553,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),sold_weights_with_co2es)))));
var flights_per_item = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58556){
var map__58557 = p__58556;
var map__58557__$1 = cljs.core.__destructure_map(map__58557);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58557__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58557__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58557__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58557__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58558){
var map__58559 = p__58558;
var map__58559__$1 = cljs.core.__destructure_map(map__58559);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58560){
var vec__58561 = p__58560;
var vec__58564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58561,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58564,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58564,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58561,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_weights_with_co2es)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flights_per_category,flights_per_item], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
