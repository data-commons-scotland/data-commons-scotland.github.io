goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29146){
var vec__29147 = p__29146;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29147,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29147,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29150){
var vec__29151 = p__29150;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29151,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29151,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29154){
var vec__29155 = p__29154;
var vec__29158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29155,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29158,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29158,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29158,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29155,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29161){
var vec__29162 = p__29161;
var vec__29165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29162,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29165,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29165,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29162,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29168){
var vec__29169 = p__29168;
var vec__29172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29172,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29172,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29175){
var vec__29176 = p__29175;
var vec__29179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29176,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29179,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29179,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29179,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29176,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29182){
var vec__29183 = p__29182;
var vec__29186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29183,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29183,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29190){
var vec__29191 = p__29190;
var vec__29194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29191,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29191,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29189_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__29189_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29197){
var vec__29198 = p__29197;
var vec__29201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29198,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29201,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29201,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29198,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29206){
var vec__29207 = p__29206;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29207,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29207,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29205_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__29205_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29204_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29210){
var vec__29211 = p__29210;
var vec__29214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29217){
var vec__29218 = p__29217;
var vec__29221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29218,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29221,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29221,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29221,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29221,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29218,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29225){
var vec__29226 = p__29225;
var vec__29229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29226,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29226,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29224_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__29224_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29232_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__29232_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__29232_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29233_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29233_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29234_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__29234_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__29234_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29235_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__29235_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29236_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__29236_SHARP_);
}),source_keys);
var non_waste_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Used as food",null,"Donated to animal scantuary",null,"Used for compost",null], null), null);
var waste_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Disposed of as waste",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29237(s__29238){
return (new cljs.core.LazySeq(null,(function (){
var s__29238__$1 = s__29238;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29238__$1);
if(temp__5735__auto__){
var s__29238__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29238__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29238__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29240 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29239 = (0);
while(true){
if((i__29239 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__29239);
cljs.core.chunk_append(b__29240,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__29280 = (i__29239 + (1));
i__29239 = G__29280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29240),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29237(cljs.core.chunk_rest(s__29238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29240),null);
}
} else {
var from = cljs.core.first(s__29238__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29237(cljs.core.rest(s__29238__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29241(s__29242){
return (new cljs.core.LazySeq(null,(function (){
var s__29242__$1 = s__29242;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29242__$1);
if(temp__5735__auto__){
var s__29242__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29242__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29242__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29244 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29243 = (0);
while(true){
if((i__29243 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__29243);
cljs.core.chunk_append(b__29244,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__29283 = (i__29243 + (1));
i__29243 = G__29283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29244),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29241(cljs.core.chunk_rest(s__29242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29244),null);
}
} else {
var from = cljs.core.first(s__29242__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29241(cljs.core.rest(s__29242__$2)));
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
var subflows_2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Would-be waste","Stirling Community Food",sum_subflows_tonnes(subflows_1a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not waste","Stirling Community Food",sum_subflows_tonnes(subflows_1b)], null)], null);
var subflows_3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Not wasted",sum_counter_parties_tonnes(non_waste_outcomes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Disposed of as waste",sum_counter_parties_tonnes(waste_outcomes)], null)], null);
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29245(s__29246){
return (new cljs.core.LazySeq(null,(function (){
var s__29246__$1 = s__29246;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29246__$1);
if(temp__5735__auto__){
var s__29246__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29246__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29246__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29248 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29247 = (0);
while(true){
if((i__29247 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__29247);
cljs.core.chunk_append(b__29248,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not wasted",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__29293 = (i__29247 + (1));
i__29247 = G__29293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29248),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29245(cljs.core.chunk_rest(s__29246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29248),null);
}
} else {
var to = cljs.core.first(s__29246__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not wasted",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__29245(cljs.core.rest(s__29246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(non_waste_outcomes);
})();
var flow = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(subflows_1a,subflows_1b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subflows_2,subflows_4,subflows_3], 0));
return flow;
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
