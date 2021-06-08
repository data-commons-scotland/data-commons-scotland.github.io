goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25855){
var vec__25856 = p__25855;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25856,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25856,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25859){
var vec__25860 = p__25859;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25863){
var vec__25864 = p__25863;
var vec__25867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25864,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25867,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25867,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25867,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25864,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25870){
var vec__25871 = p__25870;
var vec__25874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25877){
var vec__25878 = p__25877;
var vec__25881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25881,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25881,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25884){
var vec__25885 = p__25884;
var vec__25888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25891){
var vec__25892 = p__25891;
var vec__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25892,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25895,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25895,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25895,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25892,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25899){
var vec__25900 = p__25899;
var vec__25903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25900,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25903,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25903,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25900,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25898_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__25898_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25906){
var vec__25907 = p__25906;
var vec__25910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25907,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25907,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25915){
var vec__25916 = p__25915;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25914_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__25914_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25913_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__25913_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25919){
var vec__25920 = p__25919;
var vec__25923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25920,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25920,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25926){
var vec__25927 = p__25926;
var vec__25930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25927,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25930,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25930,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25930,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25930,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25927,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25934){
var vec__25935 = p__25934;
var vec__25938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25935,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25938,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25938,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25938,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25935,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25933_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__25933_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25941_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__25941_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__25941_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25942_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__25942_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25943_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__25943_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__25943_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25944_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__25944_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25945_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__25945_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25946(s__25947){
return (new cljs.core.LazySeq(null,(function (){
var s__25947__$1 = s__25947;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25947__$1);
if(temp__5735__auto__){
var s__25947__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25947__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__25947__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__25949 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__25948 = (0);
while(true){
if((i__25948 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__25948);
cljs.core.chunk_append(b__25949,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__26010 = (i__25948 + (1));
i__25948 = G__26010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25949),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25946(cljs.core.chunk_rest(s__25947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25949),null);
}
} else {
var from = cljs.core.first(s__25947__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25946(cljs.core.rest(s__25947__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25950(s__25951){
return (new cljs.core.LazySeq(null,(function (){
var s__25951__$1 = s__25951;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25951__$1);
if(temp__5735__auto__){
var s__25951__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25951__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__25951__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__25953 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__25952 = (0);
while(true){
if((i__25952 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__25952);
cljs.core.chunk_append(b__25953,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__26011 = (i__25952 + (1));
i__25952 = G__26011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25953),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25950(cljs.core.chunk_rest(s__25951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25953),null);
}
} else {
var from = cljs.core.first(s__25951__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25950(cljs.core.rest(s__25951__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25954(s__25955){
return (new cljs.core.LazySeq(null,(function (){
var s__25955__$1 = s__25955;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25955__$1);
if(temp__5735__auto__){
var s__25955__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25955__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__25955__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__25957 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__25956 = (0);
while(true){
if((i__25956 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__25956);
cljs.core.chunk_append(b__25957,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__26012 = (i__25956 + (1));
i__25956 = G__26012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25957),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25954(cljs.core.chunk_rest(s__25955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25957),null);
}
} else {
var to = cljs.core.first(s__25955__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__25954(cljs.core.rest(s__25955__$2)));
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
var comparator = (function (p__25958,p__25959){
var vec__25960 = p__25958;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(1),null);
var vec__25963 = p__25959;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25963,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25963,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a_from,b_from)){
return (ordered_froms.indexOf(a_from) < ordered_froms.indexOf(b_from));
} else {
return (ordered_tos.indexOf(a_to) < ordered_tos.indexOf(b_to));
}
});
var flow = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),comparator,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(subflows_1a,subflows_1b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subflows_2,subflows_3,subflows_4], 0)));
return flow;
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
