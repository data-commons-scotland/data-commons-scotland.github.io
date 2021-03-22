goog.provide('dcs.prototype_6.ui_region_position');
dcs.prototype_6.ui_region_position.suffix = (function dcs$prototype_6$ui_region_position$suffix(n){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
if(clojure.string.ends_with_QMARK_(s,"11")){
return "th";
} else {
if(clojure.string.ends_with_QMARK_(s,"12")){
return "th";
} else {
if(clojure.string.ends_with_QMARK_(s,"13")){
return "th";
} else {
if(clojure.string.ends_with_QMARK_(s,"1")){
return "st";
} else {
if(clojure.string.ends_with_QMARK_(s,"2")){
return "nd";
} else {
return "th";

}
}
}
}
}
});
dcs.prototype_6.ui_region_position.ele = (function dcs$prototype_6$ui_region_position$ele(region,household_waste_derivation_positions,household_co2e_derivation_positions,business_waste_by_region_derivation_positions){
var household_waste_generation_latest_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29010_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__29010_SHARP_));
}),new cljs.core.Keyword(null,"latest","latest",24323665).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_positions))));
var household_waste_percent_recycled_latest_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29011_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__29011_SHARP_));
}),new cljs.core.Keyword(null,"latest","latest",24323665).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"percent-recycled","percent-recycled",-587162431).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_positions))));
var household_co2e_generation_latest_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29012_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__29012_SHARP_));
}),new cljs.core.Keyword(null,"latest","latest",24323665).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(household_co2e_derivation_positions))));
var household_waste_generation_trend_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__29013_SHARP_));
}),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_positions))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(household_waste_generation_latest_position);
var year = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(household_waste_generation_latest_position);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(position),dcs.prototype_6.ui_region_position.suffix(position)," for the lowest generation of household waste per citizen in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(household_waste_percent_recycled_latest_position);
var year = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(household_waste_percent_recycled_latest_position);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(position),dcs.prototype_6.ui_region_position.suffix(position)," highest % recycled of household waste in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(household_co2e_generation_latest_position);
var year = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(household_co2e_generation_latest_position);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(position),dcs.prototype_6.ui_region_position.suffix(position)," for the lowest carbon impact of household waste per citizen in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(household_waste_generation_trend_position);
var min_year = new cljs.core.Keyword(null,"min-year","min-year",1697978760).cljs$core$IFn$_invoke$arity$1(household_waste_generation_trend_position);
var max_year = new cljs.core.Keyword(null,"max-year","max-year",1757230141).cljs$core$IFn$_invoke$arity$1(household_waste_generation_trend_position);
return "TODO: each of the trends";
})()], null)], null);
});
dcs.prototype_6.ui_region_position.create = (function dcs$prototype_6$ui_region_position$create(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_region_position.ele,cljs.core.deref(dcs.prototype_6.state.region_holder),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_positions_holder),cljs.core.deref(dcs.prototype_6.state.household_co2e_derivation_positions_holder),cljs.core.deref(dcs.prototype_6.state.business_waste_by_region_derivation_positions_holder)], null);
});

//# sourceMappingURL=dcs.prototype_6.ui_region_position.js.map
