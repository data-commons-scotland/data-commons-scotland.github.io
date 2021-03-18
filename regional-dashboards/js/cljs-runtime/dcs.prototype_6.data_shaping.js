goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26870){
var vec__26871 = p__26870;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26871,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26871,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26874){
var vec__26875 = p__26874;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26875,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26875,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26878){
var vec__26879 = p__26878;
var vec__26882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26879,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26882,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26882,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26882,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26879,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26885){
var vec__26886 = p__26885;
var vec__26889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26886,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26889,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26889,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26886,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26892){
var vec__26893 = p__26892;
var vec__26896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26896,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26896,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26899){
var vec__26900 = p__26899;
var vec__26903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26900,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26903,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26903,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26903,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26900,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26906){
var vec__26907 = p__26906;
var vec__26910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26914){
var vec__26915 = p__26914;
var vec__26918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26918,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26918,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26913_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__26913_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26921){
var vec__26922 = p__26921;
var vec__26925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26925,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26925,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
