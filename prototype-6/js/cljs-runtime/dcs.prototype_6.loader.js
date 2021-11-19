goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29103__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29104__auto__ = (function (){var switch__29018__auto__ = (function (state_38692){
var state_val_38697 = (state_38692[(1)]);
if((state_val_38697 === (7))){
var state_38692__$1 = state_38692;
var statearr_38716_38769 = state_38692__$1;
(statearr_38716_38769[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (1))){
var inst_38653 = dcs.prototype_6.util.now();
var inst_38656 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_38657 = [false];
var inst_38658 = cljs.core.PersistentHashMap.fromArrays(inst_38656,inst_38657);
var inst_38659 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38658], 0));
var state_38692__$1 = (function (){var statearr_38724 = state_38692;
(statearr_38724[(7)] = inst_38653);

return statearr_38724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38692__$1,(2),inst_38659);
} else {
if((state_val_38697 === (4))){
var inst_38668 = (state_38692[(8)]);
var inst_38677 = typeof inst_38668 === 'string';
var state_38692__$1 = state_38692;
if(cljs.core.truth_(inst_38677)){
var statearr_38725_38781 = state_38692__$1;
(statearr_38725_38781[(1)] = (6));

} else {
var statearr_38726_38782 = state_38692__$1;
(statearr_38726_38782[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (6))){
var inst_38668 = (state_38692[(8)]);
var inst_38679 = JSON.parse(inst_38668);
var inst_38680 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_38679,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_38692__$1 = state_38692;
var statearr_38728_38783 = state_38692__$1;
(statearr_38728_38783[(2)] = inst_38680);

(statearr_38728_38783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (3))){
var inst_38668 = (state_38692[(8)]);
var inst_38674 = clojure.string.replace(inst_38668,"\r","");
var inst_38675 = testdouble.cljs.csv.read_csv(inst_38674);
var state_38692__$1 = state_38692;
var statearr_38729_38784 = state_38692__$1;
(statearr_38729_38784[(2)] = inst_38675);

(statearr_38729_38784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (2))){
var inst_38653 = (state_38692[(7)]);
var inst_38661 = (state_38692[(2)]);
var inst_38663 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_38661);
var inst_38664 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_38661);
var inst_38665 = dcs.prototype_6.util.secs_to_now(inst_38653);
var inst_38666 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38663)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38664)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38665)].join('');
var inst_38667 = console.log(inst_38666);
var inst_38668 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38661);
var inst_38672 = clojure.string.ends_with_QMARK_(url,".csv");
var state_38692__$1 = (function (){var statearr_38730 = state_38692;
(statearr_38730[(8)] = inst_38668);

(statearr_38730[(9)] = inst_38667);

return statearr_38730;
})();
if(inst_38672){
var statearr_38731_38786 = state_38692__$1;
(statearr_38731_38786[(1)] = (3));

} else {
var statearr_38733_38787 = state_38692__$1;
(statearr_38733_38787[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (11))){
var inst_38685 = (state_38692[(2)]);
var state_38692__$1 = state_38692;
var statearr_38734_38788 = state_38692__$1;
(statearr_38734_38788[(2)] = inst_38685);

(statearr_38734_38788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (9))){
var inst_38668 = (state_38692[(8)]);
var state_38692__$1 = state_38692;
var statearr_38736_38789 = state_38692__$1;
(statearr_38736_38789[(2)] = inst_38668);

(statearr_38736_38789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (5))){
var inst_38689 = (state_38692[(2)]);
var inst_38690 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_38689) : body_handler.call(null,inst_38689));
var state_38692__$1 = state_38692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38692__$1,inst_38690);
} else {
if((state_val_38697 === (10))){
var state_38692__$1 = state_38692;
var statearr_38740_38790 = state_38692__$1;
(statearr_38740_38790[(2)] = null);

(statearr_38740_38790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (8))){
var inst_38687 = (state_38692[(2)]);
var state_38692__$1 = state_38692;
var statearr_38741_38791 = state_38692__$1;
(statearr_38741_38791[(2)] = inst_38687);

(statearr_38741_38791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29019__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29019__auto____0 = (function (){
var statearr_38742 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38742[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29019__auto__);

(statearr_38742[(1)] = (1));

return statearr_38742;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29019__auto____1 = (function (state_38692){
while(true){
var ret_value__29020__auto__ = (function (){try{while(true){
var result__29021__auto__ = switch__29018__auto__(state_38692);
if(cljs.core.keyword_identical_QMARK_(result__29021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29021__auto__;
}
break;
}
}catch (e38743){var ex__29022__auto__ = e38743;
var statearr_38744_38792 = state_38692;
(statearr_38744_38792[(2)] = ex__29022__auto__);


if(cljs.core.seq((state_38692[(4)]))){
var statearr_38745_38793 = state_38692;
(statearr_38745_38793[(1)] = cljs.core.first((state_38692[(4)])));

} else {
throw ex__29022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38802 = state_38692;
state_38692 = G__38802;
continue;
} else {
return ret_value__29020__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29019__auto__ = function(state_38692){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29019__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29019__auto____1.call(this,state_38692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29019__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29019__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29019__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29019__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29019__auto__;
})()
})();
var state__29105__auto__ = (function (){var statearr_38746 = f__29104__auto__();
(statearr_38746[(6)] = c__29103__auto__);

return statearr_38746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29105__auto__);
}));

return c__29103__auto__;
});
dcs.prototype_6.loader.load_data = (function dcs$prototype_6$loader$load_data(){
console.log("Loading data files");

dcs.prototype_6.loader.fetch("ace-furniture-count.json",(function (ace_furniture_count){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_count_holder,ace_furniture_count);
}));

dcs.prototype_6.loader.fetch("ace-furniture-avg-weight.json",(function (ace_furniture_avg_weight){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_avg_weight_holder,ace_furniture_avg_weight);
}));

dcs.prototype_6.loader.fetch("geojson.json",(function (geojson){
return cljs.core.reset_BANG_(dcs.prototype_6.state.geojson_cursor,cljs.core.clj__GT_js(geojson));
}));

dcs.prototype_6.loader.fetch("regional-dashboard-annotations.csv",(function (regional_dashboard_annotations){
return cljs.core.reset_BANG_(dcs.prototype_6.state.regional_dashboard_annotations_holder,regional_dashboard_annotations);
}));

dcs.prototype_6.loader.fetch("household-waste-analysis-annotations.csv",(function (household_waste_analysis_annotations){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_annotations_holder,household_waste_analysis_annotations);
}));

dcs.prototype_6.loader.fetch("fairshare-annotations.csv",(function (fairshare_annotations){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_annotations_holder,fairshare_annotations);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"meta.json"].join(''),(function (meta){
return cljs.core.reset_BANG_(dcs.prototype_6.state.meta_holder,meta);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"co2e-multiplier.json"].join(''),(function (co2e_multiplier){
return cljs.core.reset_BANG_(dcs.prototype_6.state.co2e_multiplier_holder,co2e_multiplier);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"population.json"].join(''),(function (population){
var population_scotland = dcs.prototype_6.data_shaping.rollup_population_regions(population);
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38747_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38747_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
}),population_scotland);
return cljs.core.reset_BANG_(dcs.prototype_6.state.population_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(population,population_scotland,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([population_scotGovTarget], 0)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-waste.json"].join(''),(function (household_waste){
var household_waste_scotland = dcs.prototype_6.data_shaping.rollup_household_waste_regions(household_waste);
var household_waste_scotGovTarget = dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste(household_waste_scotland);
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(household_waste,household_waste_scotland,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([household_waste_scotGovTarget], 0)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-co2e.json"].join(''),(function (household_co2e){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_co2e,dcs.prototype_6.data_shaping.rollup_household_co2e_regions(household_co2e)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"business-waste-by-region.json"].join(''),(function (business_waste_by_region){
var business_waste_by_region_scotland = dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions(business_waste_by_region);
var business_waste_by_region_scotGovTarget = dcs.prototype_6.data_shaping.calc_scotGovTarget_for_business_waste_by_region(business_waste_by_region_scotland);
return cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(business_waste_by_region,business_waste_by_region_scotland,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([business_waste_by_region_scotGovTarget], 0)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"waste-site-io.json"].join(''),(function (waste_site){
return cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_holder,waste_site);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"bin-collection.json"].join(''),(function (stirling_bin_collection){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_holder,stirling_bin_collection);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"fairshare.json"].join(''),(function (fairshare){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_holder,fairshare);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"stirling-community-food-tonnes.json"].join(''),(function (stirling_community_food_tonnes){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_holder,stirling_community_food_tonnes);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"stirling-community-food-footfall.json"].join(''),(function (stirling_community_food_footfall){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_footfall_holder,stirling_community_food_footfall);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"ace-furniture-to-scottishCarbonMetric.json"].join(''),(function (ace_furniture_to_scottishCarbonMetric){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_to_scottishCarbonMetric_holder,ace_furniture_to_scottishCarbonMetric);
}));

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-waste-analysis.json"].join(''),(function (household_waste_analysis){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_holder,household_waste_analysis);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
