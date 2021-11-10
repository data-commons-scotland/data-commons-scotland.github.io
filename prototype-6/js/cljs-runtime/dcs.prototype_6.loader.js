goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29094__auto__ = (function (){var switch__29023__auto__ = (function (state_44724){
var state_val_44726 = (state_44724[(1)]);
if((state_val_44726 === (7))){
var state_44724__$1 = state_44724;
var statearr_44735_44776 = state_44724__$1;
(statearr_44735_44776[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (1))){
var inst_44672 = dcs.prototype_6.util.now();
var inst_44677 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_44678 = [false];
var inst_44679 = cljs.core.PersistentHashMap.fromArrays(inst_44677,inst_44678);
var inst_44680 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44679], 0));
var state_44724__$1 = (function (){var statearr_44737 = state_44724;
(statearr_44737[(7)] = inst_44672);

return statearr_44737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44724__$1,(2),inst_44680);
} else {
if((state_val_44726 === (4))){
var inst_44692 = (state_44724[(8)]);
var inst_44698 = typeof inst_44692 === 'string';
var state_44724__$1 = state_44724;
if(cljs.core.truth_(inst_44698)){
var statearr_44738_44777 = state_44724__$1;
(statearr_44738_44777[(1)] = (6));

} else {
var statearr_44739_44778 = state_44724__$1;
(statearr_44739_44778[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (6))){
var inst_44692 = (state_44724[(8)]);
var inst_44700 = JSON.parse(inst_44692);
var inst_44701 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_44700,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44724__$1 = state_44724;
var statearr_44742_44781 = state_44724__$1;
(statearr_44742_44781[(2)] = inst_44701);

(statearr_44742_44781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (3))){
var inst_44692 = (state_44724[(8)]);
var inst_44695 = clojure.string.replace(inst_44692,"\r","");
var inst_44696 = testdouble.cljs.csv.read_csv(inst_44695);
var state_44724__$1 = state_44724;
var statearr_44743_44785 = state_44724__$1;
(statearr_44743_44785[(2)] = inst_44696);

(statearr_44743_44785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (2))){
var inst_44672 = (state_44724[(7)]);
var inst_44682 = (state_44724[(2)]);
var inst_44687 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_44682);
var inst_44688 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_44682);
var inst_44689 = dcs.prototype_6.util.secs_to_now(inst_44672);
var inst_44690 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44687)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44688)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44689)].join('');
var inst_44691 = console.log(inst_44690);
var inst_44692 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44682);
var inst_44693 = clojure.string.ends_with_QMARK_(url,".csv");
var state_44724__$1 = (function (){var statearr_44744 = state_44724;
(statearr_44744[(9)] = inst_44691);

(statearr_44744[(8)] = inst_44692);

return statearr_44744;
})();
if(inst_44693){
var statearr_44745_44788 = state_44724__$1;
(statearr_44745_44788[(1)] = (3));

} else {
var statearr_44746_44791 = state_44724__$1;
(statearr_44746_44791[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (11))){
var inst_44706 = (state_44724[(2)]);
var state_44724__$1 = state_44724;
var statearr_44747_44793 = state_44724__$1;
(statearr_44747_44793[(2)] = inst_44706);

(statearr_44747_44793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (9))){
var inst_44692 = (state_44724[(8)]);
var state_44724__$1 = state_44724;
var statearr_44748_44795 = state_44724__$1;
(statearr_44748_44795[(2)] = inst_44692);

(statearr_44748_44795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (5))){
var inst_44710 = (state_44724[(2)]);
var inst_44711 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_44710) : body_handler.call(null,inst_44710));
var state_44724__$1 = state_44724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44724__$1,inst_44711);
} else {
if((state_val_44726 === (10))){
var state_44724__$1 = state_44724;
var statearr_44749_44796 = state_44724__$1;
(statearr_44749_44796[(2)] = null);

(statearr_44749_44796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (8))){
var inst_44708 = (state_44724[(2)]);
var state_44724__$1 = state_44724;
var statearr_44750_44797 = state_44724__$1;
(statearr_44750_44797[(2)] = inst_44708);

(statearr_44750_44797[(1)] = (5));


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
var dcs$prototype_6$loader$fetch_$_state_machine__29024__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29024__auto____0 = (function (){
var statearr_44751 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44751[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29024__auto__);

(statearr_44751[(1)] = (1));

return statearr_44751;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29024__auto____1 = (function (state_44724){
while(true){
var ret_value__29025__auto__ = (function (){try{while(true){
var result__29026__auto__ = switch__29023__auto__(state_44724);
if(cljs.core.keyword_identical_QMARK_(result__29026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29026__auto__;
}
break;
}
}catch (e44752){var ex__29027__auto__ = e44752;
var statearr_44753_44809 = state_44724;
(statearr_44753_44809[(2)] = ex__29027__auto__);


if(cljs.core.seq((state_44724[(4)]))){
var statearr_44754_44810 = state_44724;
(statearr_44754_44810[(1)] = cljs.core.first((state_44724[(4)])));

} else {
throw ex__29027__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44811 = state_44724;
state_44724 = G__44811;
continue;
} else {
return ret_value__29025__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29024__auto__ = function(state_44724){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29024__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29024__auto____1.call(this,state_44724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29024__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29024__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29024__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29024__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29024__auto__;
})()
})();
var state__29095__auto__ = (function (){var statearr_44766 = f__29094__auto__();
(statearr_44766[(6)] = c__29093__auto__);

return statearr_44766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29095__auto__);
}));

return c__29093__auto__;
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

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"meta.json"].join(''),(function (meta){
return cljs.core.reset_BANG_(dcs.prototype_6.state.meta_holder,meta);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"co2e-multiplier.json"].join(''),(function (co2e_multiplier){
return cljs.core.reset_BANG_(dcs.prototype_6.state.co2e_multiplier_holder,co2e_multiplier);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"population.json"].join(''),(function (population){
var population_scotland = dcs.prototype_6.data_shaping.rollup_population_regions(population);
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44767_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44767_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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
