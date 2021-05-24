goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28556){
var vec__28557 = p__28556;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28560){
var vec__28561 = p__28560;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28564){
var vec__28565 = p__28564;
var vec__28568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28565,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28565,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28571){
var vec__28572 = p__28571;
var vec__28575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28575,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28575,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28578){
var vec__28579 = p__28578;
var vec__28582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28579,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28582,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28582,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28579,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28585){
var vec__28586 = p__28585;
var vec__28589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28586,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28586,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28592){
var vec__28593 = p__28592;
var vec__28596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28593,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28596,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28596,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28596,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28593,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28600){
var vec__28601 = p__28600;
var vec__28604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28604,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28604,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28599_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__28599_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28607){
var vec__28608 = p__28607;
var vec__28611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28611,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28611,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28616){
var vec__28617 = p__28616;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28617,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28617,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28615_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__28615_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28614_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__28614_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28620){
var vec__28621 = p__28620;
var vec__28624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28621,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28624,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28624,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28624,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28621,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28627){
var vec__28628 = p__28627;
var vec__28631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28635){
var vec__28636 = p__28635;
var vec__28639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28636,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28636,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28634_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__28634_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28642_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__28642_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__28642_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28643_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28643_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28644_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__28644_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__28644_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28645_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__28645_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28646_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__28646_SHARP_);
}),source_keys);
var non_waste_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Used as food",null,"Donated to animal scantuary",null,"Used for compost",null], null), null);
var waste_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Disposed of as waste",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28647(s__28648){
return (new cljs.core.LazySeq(null,(function (){
var s__28648__$1 = s__28648;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28648__$1);
if(temp__5735__auto__){
var s__28648__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28648__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__28648__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__28650 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__28649 = (0);
while(true){
if((i__28649 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__28649);
cljs.core.chunk_append(b__28650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__28703 = (i__28649 + (1));
i__28649 = G__28703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28650),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28647(cljs.core.chunk_rest(s__28648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28650),null);
}
} else {
var from = cljs.core.first(s__28648__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28647(cljs.core.rest(s__28648__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28651(s__28652){
return (new cljs.core.LazySeq(null,(function (){
var s__28652__$1 = s__28652;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28652__$1);
if(temp__5735__auto__){
var s__28652__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28652__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__28652__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__28654 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__28653 = (0);
while(true){
if((i__28653 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__28653);
cljs.core.chunk_append(b__28654,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__28704 = (i__28653 + (1));
i__28653 = G__28704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28654),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28651(cljs.core.chunk_rest(s__28652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28654),null);
}
} else {
var from = cljs.core.first(s__28652__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28651(cljs.core.rest(s__28652__$2)));
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
var subflows_3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Not wasted",sum_counter_parties_tonnes(non_waste_outcomes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Disposed of as waste",sum_counter_parties_tonnes(waste_outcomes)], null)], null);
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28655(s__28656){
return (new cljs.core.LazySeq(null,(function (){
var s__28656__$1 = s__28656;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28656__$1);
if(temp__5735__auto__){
var s__28656__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28656__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__28656__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__28658 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__28657 = (0);
while(true){
if((i__28657 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__28657);
cljs.core.chunk_append(b__28658,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not wasted",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__28705 = (i__28657 + (1));
i__28657 = G__28705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28658),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28655(cljs.core.chunk_rest(s__28656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28658),null);
}
} else {
var to = cljs.core.first(s__28656__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not wasted",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__28655(cljs.core.rest(s__28656__$2)));
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
var flow = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(subflows_1b,subflows_1a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subflows_2,subflows_4,subflows_3], 0));
return flow;
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
