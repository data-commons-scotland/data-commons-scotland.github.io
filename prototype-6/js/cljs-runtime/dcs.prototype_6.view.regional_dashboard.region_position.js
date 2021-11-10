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
dcs.prototype_6.view.regional_dashboard.region_position.ele = (function dcs$prototype_6$view$regional_dashboard$region_position$ele(region,household_waste_derivation_generation_positions,household_waste_derivation_percent_recycled_positions,household_co2e_derivation_generation_positions,annotations){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#league-table.table.is-hoverable","table#league-table.table.is-hoverable",-281087391),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null),"Position"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Aim"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Trend"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Latest"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((14),goog.string.unescapeEntities("&nbsp;"))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var latest_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44617_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44617_SHARP_));
}),new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_generation_positions))));
var trend_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44623_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44623_SHARP_));
}),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_generation_positions))));
var anno = dcs.prototype_6.annotation_mech.first_annotation_whose_record_criteria_matches(annotations,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"record-type","record-type",-997952932),new cljs.core.Keyword(null,"household-waste-derivation-generation-positions","household-waste-derivation-generation-positions",-1368312873),new cljs.core.Keyword(null,"region","region",270415120),region], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Reduce waste generation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(trend_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trend_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(trend_position)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(latest_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(latest_position)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(anno)?dcs.prototype_6.annotation_mech.vega_like_tooltip(cljs.core.get.cljs$core$IFn$_invoke$arity$3(anno,new cljs.core.Keyword(null,"emoji","emoji",1031230144),dcs.prototype_6.annotation_mech.default_annotation_symbol),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(anno)):null)], null)], null);
})(),(function (){var latest_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44626_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44626_SHARP_));
}),new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729).cljs$core$IFn$_invoke$arity$1(household_co2e_derivation_generation_positions))));
var trend_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44627_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44627_SHARP_));
}),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292).cljs$core$IFn$_invoke$arity$1(household_co2e_derivation_generation_positions))));
var anno = dcs.prototype_6.annotation_mech.first_annotation_whose_record_criteria_matches(annotations,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"record-type","record-type",-997952932),new cljs.core.Keyword(null,"household-co2e-derivation-generation-positions","household-co2e-derivation-generation-positions",969598211),new cljs.core.Keyword(null,"region","region",270415120),region], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Reduce carbon impact"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(trend_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trend_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(trend_position)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(latest_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(latest_position)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(anno)?dcs.prototype_6.annotation_mech.vega_like_tooltip(cljs.core.get.cljs$core$IFn$_invoke$arity$3(anno,new cljs.core.Keyword(null,"emoji","emoji",1031230144),dcs.prototype_6.annotation_mech.default_annotation_symbol),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(anno)):null)], null)], null);
})(),(function (){var latest_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44628_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44628_SHARP_));
}),new cljs.core.Keyword(null,"latest-positions","latest-positions",1854267729).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_percent_recycled_positions))));
var trend_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44629_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44629_SHARP_));
}),new cljs.core.Keyword(null,"trend-positions","trend-positions",254538292).cljs$core$IFn$_invoke$arity$1(household_waste_derivation_percent_recycled_positions))));
var anno = dcs.prototype_6.annotation_mech.first_annotation_whose_record_criteria_matches(annotations,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"record-type","record-type",-997952932),new cljs.core.Keyword(null,"household-waste-derivation-percent-recycled-positions","household-waste-derivation-percent-recycled-positions",2061106180),new cljs.core.Keyword(null,"region","region",270415120),region], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Increase percentage recycled"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(trend_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trend_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(trend_position)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),dcs.prototype_6.view.regional_dashboard.region_position.colour(latest_position)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_position),dcs.prototype_6.view.regional_dashboard.region_position.suffix(latest_position)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(anno)?dcs.prototype_6.annotation_mech.vega_like_tooltip(cljs.core.get.cljs$core$IFn$_invoke$arity$3(anno,new cljs.core.Keyword(null,"emoji","emoji",1031230144),dcs.prototype_6.annotation_mech.default_annotation_symbol),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(anno)):null)], null)], null);
})()], null)], null)], null);
});
dcs.prototype_6.view.regional_dashboard.region_position.root = (function dcs$prototype_6$view$regional_dashboard$region_position$root(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.region_position.ele,cljs.core.deref(dcs.prototype_6.state.region_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_generation_positions_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_percent_recycled_positions_cursor),cljs.core.deref(dcs.prototype_6.state.household_co2e_derivation_generation_positions_cursor),cljs.core.deref(dcs.prototype_6.state.annotations_derivation_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.regional_dashboard.region_position.js.map
