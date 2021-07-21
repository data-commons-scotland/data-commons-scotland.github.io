goog.provide('dcs.prototype_6.view.regional_dashboard.region_position');
dcs.prototype_6.view.regional_dashboard.region_position.colour = (function dcs$prototype_6$view$regional_dashboard$region_position$colour(n){
if((n < (17))){
return "has-text-success-dark";
} else {
return "has-text-danger-dark";
}
});
dcs.prototype_6.view.regional_dashboard.region_position.suffix = (function dcs$prototype_6$view$regional_dashboard$region_position$suffix(n){
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
dcs.prototype_6.view.regional_dashboard.region_position.ele = (function dcs$prototype_6$view$regional_dashboard$region_position$ele(region,household_waste_derivation_generation_positions,household_waste_derivation_percent_recycled_positions,household_co2e_derivation_generation_positions){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#league-table.table.is-hoverable","table#league-table.table.is-hoverable",-281087391),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null),"Position"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Aim"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Trend"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Latest"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var latest_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34560_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34560_SHARP_));
}),new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_generation_positions))));
var trend_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34561_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34561_SHARP_));
}),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_generation_positions))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Reduce waste generation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(trend_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trend_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(trend_position)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(latest_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(latest_position)].join('')], null)], null);
})(),(function (){var latest_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34562_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34562_SHARP_));
}),new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729).cljs$core$IFn$_invoke$arity$1(household_co2e_derivation_generation_positions))));
var trend_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34563_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34563_SHARP_));
}),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292).cljs$core$IFn$_invoke$arity$1(household_co2e_derivation_generation_positions))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Reduce carbon impact"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(trend_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trend_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(trend_position)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(latest_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(latest_position)].join('')], null)], null);
})(),(function (){var latest_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34564_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34564_SHARP_));
}),new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_percent_recycled_positions))));
var trend_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34565_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34565_SHARP_));
}),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_percent_recycled_positions))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Increase percentage recycled"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(trend_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trend_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(trend_position)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(latest_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(latest_position)].join('')], null)], null);
})()], null)], null)], null);
});
dcs.prototype_6.view.regional_dashboard.region_position.root = (function dcs$prototype_6$view$regional_dashboard$region_position$root(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.region_position.ele,cljs.core.deref(dcs.prototype_6.state.region_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_generation_positions_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_percent_recycled_positions_cursor),cljs.core.deref(dcs.prototype_6.state.household_co2e_derivation_generation_positions_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.regional_dashboard.region_position.js.map
