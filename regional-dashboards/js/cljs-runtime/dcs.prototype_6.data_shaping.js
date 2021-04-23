goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31096){
var vec__31097 = p__31096;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31100){
var vec__31101 = p__31100;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31101,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31101,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31104){
var vec__31105 = p__31104;
var vec__31108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31105,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31108,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31108,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31108,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31105,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31111){
var vec__31112 = p__31111;
var vec__31115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31115,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31115,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31118){
var vec__31119 = p__31118;
var vec__31122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31119,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31119,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31125){
var vec__31126 = p__31125;
var vec__31129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31126,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31129,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31129,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31129,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31126,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31132){
var vec__31133 = p__31132;
var vec__31136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31133,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31133,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31140){
var vec__31141 = p__31140;
var vec__31144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__31139_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31147){
var vec__31148 = p__31147;
var vec__31151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31151,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31151,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31156){
var vec__31157 = p__31156;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31157,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31157,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31155_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__31155_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__31154_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_qu_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_qu_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31160){
var vec__31161 = p__31160;
var vec__31164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31164,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31164,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__31167){
var vec__31168 = p__31167;
var vec__31171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31168,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31171,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31171,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31168,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quarter","quarter",-508147616),coll))));
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),stirling_bin_collection)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_qu_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_qu_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31174){
var vec__31175 = p__31174;
var vec__31178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31178,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31178,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31178,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31182){
var vec__31183 = p__31182;
var vec__31186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31183,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31186,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31186,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31183,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31181_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__31181_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),stirling_bin_collection));
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
