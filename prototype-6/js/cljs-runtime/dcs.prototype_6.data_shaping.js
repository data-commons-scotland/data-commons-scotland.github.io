goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32662){
var vec__32663 = p__32662;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32663,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32663,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32666){
var vec__32667 = p__32666;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32670){
var vec__32671 = p__32670;
var vec__32674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32671,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32671,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32677){
var vec__32678 = p__32677;
var vec__32681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32678,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32681,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32681,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32678,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32684){
var vec__32685 = p__32684;
var vec__32688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32685,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32688,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32688,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32685,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32691){
var vec__32692 = p__32691;
var vec__32695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32695,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32695,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32695,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32698){
var vec__32699 = p__32698;
var vec__32702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32702,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32702,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32702,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32706){
var vec__32707 = p__32706;
var vec__32710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32707,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32707,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32705_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__32705_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32713){
var vec__32714 = p__32713;
var vec__32717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32717,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32717,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32722){
var vec__32723 = p__32722;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32723,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32723,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32721_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__32721_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32720_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__32720_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32726){
var vec__32727 = p__32726;
var vec__32730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32733){
var vec__32734 = p__32733;
var vec__32737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32741){
var vec__32742 = p__32741;
var vec__32745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32742,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32742,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32740_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__32740_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32748_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__32748_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__32748_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32749_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__32749_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32750_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__32750_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__32750_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32751_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__32751_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32752_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__32752_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Used by individuals for compost",null,"Donated to animal scantuary",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32753(s__32754){
return (new cljs.core.LazySeq(null,(function (){
var s__32754__$1 = s__32754;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32754__$1);
if(temp__5735__auto__){
var s__32754__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32754__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__32754__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__32756 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__32755 = (0);
while(true){
if((i__32755 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__32755);
cljs.core.chunk_append(b__32756,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__32817 = (i__32755 + (1));
i__32755 = G__32817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32756),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32753(cljs.core.chunk_rest(s__32754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32756),null);
}
} else {
var from = cljs.core.first(s__32754__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32753(cljs.core.rest(s__32754__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32757(s__32758){
return (new cljs.core.LazySeq(null,(function (){
var s__32758__$1 = s__32758;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32758__$1);
if(temp__5735__auto__){
var s__32758__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32758__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__32758__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__32760 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__32759 = (0);
while(true){
if((i__32759 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__32759);
cljs.core.chunk_append(b__32760,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__32818 = (i__32759 + (1));
i__32759 = G__32818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32760),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32757(cljs.core.chunk_rest(s__32758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32760),null);
}
} else {
var from = cljs.core.first(s__32758__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32757(cljs.core.rest(s__32758__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32761(s__32762){
return (new cljs.core.LazySeq(null,(function (){
var s__32762__$1 = s__32762;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32762__$1);
if(temp__5735__auto__){
var s__32762__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32762__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__32762__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__32764 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__32763 = (0);
while(true){
if((i__32763 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__32763);
cljs.core.chunk_append(b__32764,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__32819 = (i__32763 + (1));
i__32763 = G__32819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32764),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32761(cljs.core.chunk_rest(s__32762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32764),null);
}
} else {
var to = cljs.core.first(s__32762__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__32761(cljs.core.rest(s__32762__$2)));
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
var ordered_tos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Used as food","Not used as food","Donated to animal scantuary","Used by individuals for compost","Council compost, Energen biogas, etc."], null);
var comparator = (function (p__32765,p__32766){
var vec__32767 = p__32765;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767,(1),null);
var vec__32770 = p__32766;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770,(1),null);
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
