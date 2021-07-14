goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37332){
var vec__37333 = p__37332;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37333,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37333,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37336){
var vec__37337 = p__37336;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37337,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37337,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37340){
var vec__37342 = p__37340;
var vec__37345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37342,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37342,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37352){
var vec__37353 = p__37352;
var vec__37356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37356,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37356,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37359){
var vec__37360 = p__37359;
var vec__37363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37363,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37363,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37367){
var vec__37369 = p__37367;
var vec__37372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37369,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37369,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37381){
var vec__37385 = p__37381;
var vec__37388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37385,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37388,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37388,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37388,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37385,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37392){
var vec__37393 = p__37392;
var vec__37396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37396,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37396,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37391_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__37391_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37405){
var vec__37406 = p__37405;
var vec__37409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37406,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37409,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37409,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37406,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37419){
var vec__37420 = p__37419;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37420,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37420,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37418_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__37418_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37416_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__37416_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37423){
var vec__37424 = p__37423;
var vec__37427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37424,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37427,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37427,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37427,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37424,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37432){
var vec__37439 = p__37432;
var vec__37442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37439,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37439,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37454){
var vec__37456 = p__37454;
var vec__37459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37456,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37456,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37449_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__37449_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37466_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__37466_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__37466_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37467_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__37467_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37468_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__37468_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__37468_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37469_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__37469_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37471_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__37471_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37480(s__37481){
return (new cljs.core.LazySeq(null,(function (){
var s__37481__$1 = s__37481;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37481__$1);
if(temp__5735__auto__){
var s__37481__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37481__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37481__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37483 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37482 = (0);
while(true){
if((i__37482 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__37482);
cljs.core.chunk_append(b__37483,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__37581 = (i__37482 + (1));
i__37482 = G__37581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37483),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37480(cljs.core.chunk_rest(s__37481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37483),null);
}
} else {
var from = cljs.core.first(s__37481__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37480(cljs.core.rest(s__37481__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37485(s__37486){
return (new cljs.core.LazySeq(null,(function (){
var s__37486__$1 = s__37486;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37486__$1);
if(temp__5735__auto__){
var s__37486__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37486__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37486__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37488 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37487 = (0);
while(true){
if((i__37487 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__37487);
cljs.core.chunk_append(b__37488,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__37588 = (i__37487 + (1));
i__37487 = G__37588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37488),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37485(cljs.core.chunk_rest(s__37486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37488),null);
}
} else {
var from = cljs.core.first(s__37486__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37485(cljs.core.rest(s__37486__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37489(s__37490){
return (new cljs.core.LazySeq(null,(function (){
var s__37490__$1 = s__37490;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37490__$1);
if(temp__5735__auto__){
var s__37490__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37490__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37490__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37492 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37491 = (0);
while(true){
if((i__37491 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__37491);
cljs.core.chunk_append(b__37492,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__37589 = (i__37491 + (1));
i__37491 = G__37589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37492),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37489(cljs.core.chunk_rest(s__37490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37492),null);
}
} else {
var to = cljs.core.first(s__37490__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37489(cljs.core.rest(s__37490__$2)));
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
var comparator = (function (p__37493,p__37494){
var vec__37495 = p__37493;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(1),null);
var vec__37498 = p__37494;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37498,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37498,(1),null);
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
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37506){
var vec__37507 = p__37506;
var vec__37510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37510,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37510,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__37513(s__37514){
return (new cljs.core.LazySeq(null,(function (){
var s__37514__$1 = s__37514;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37514__$1);
if(temp__5735__auto__){
var s__37514__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37514__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37514__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37516 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37515 = (0);
while(true){
if((i__37515 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__37515);
cljs.core.chunk_append(b__37516,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__37515,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__37516,s__37514__$2,temp__5735__auto__,vec__37507,vec__37510,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__37502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__37502_SHARP_));
});})(i__37515,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__37516,s__37514__$2,temp__5735__auto__,vec__37507,vec__37510,category,item,coll,yyyy_MM_dds,month_counts))
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

var G__37598 = (i__37515 + (1));
i__37515 = G__37598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37516),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__37513(cljs.core.chunk_rest(s__37514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37516),null);
}
} else {
var x = cljs.core.first(s__37514__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__37514__$2,temp__5735__auto__,vec__37507,vec__37510,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__37502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__37502_SHARP_));
});})(yyyy_MM_dd,x,s__37514__$2,temp__5735__auto__,vec__37507,vec__37510,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__37513(cljs.core.rest(s__37514__$2)));
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
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37518){
var vec__37519 = p__37518;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37519,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37519,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37527){
var map__37529 = p__37527;
var map__37529__$1 = cljs.core.__destructure_map(map__37529);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37503_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37503_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37536){
var vec__37537 = p__37536;
var vec__37540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37537,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37540,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37540,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37540,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37537,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37543){
var vec__37544 = p__37543;
var vec__37547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37550){
var map__37551 = p__37550;
var map__37551__$1 = cljs.core.__destructure_map(map__37551);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37504_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37504_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
