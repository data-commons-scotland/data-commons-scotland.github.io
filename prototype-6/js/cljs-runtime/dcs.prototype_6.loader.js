goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29107__auto__ = (function (){var switch__29021__auto__ = (function (state_55648){
var state_val_55649 = (state_55648[(1)]);
if((state_val_55649 === (1))){
var inst_55619 = dcs.prototype_6.util.now();
var inst_55622 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_55623 = [false];
var inst_55625 = cljs.core.PersistentHashMap.fromArrays(inst_55622,inst_55623);
var inst_55626 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55625], 0));
var state_55648__$1 = (function (){var statearr_55657 = state_55648;
(statearr_55657[(7)] = inst_55619);

return statearr_55657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55648__$1,(2),inst_55626);
} else {
if((state_val_55649 === (2))){
var inst_55619 = (state_55648[(7)]);
var inst_55638 = (state_55648[(8)]);
var inst_55628 = (state_55648[(2)]);
var inst_55633 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_55628);
var inst_55634 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_55628);
var inst_55635 = dcs.prototype_6.util.secs_to_now(inst_55619);
var inst_55636 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55633)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55634)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55635)].join('');
var inst_55637 = console.log(inst_55636);
var inst_55638__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55628);
var inst_55639 = typeof inst_55638__$1 === 'string';
var state_55648__$1 = (function (){var statearr_55661 = state_55648;
(statearr_55661[(9)] = inst_55637);

(statearr_55661[(8)] = inst_55638__$1);

return statearr_55661;
})();
if(cljs.core.truth_(inst_55639)){
var statearr_55663_55696 = state_55648__$1;
(statearr_55663_55696[(1)] = (3));

} else {
var statearr_55665_55697 = state_55648__$1;
(statearr_55665_55697[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55649 === (3))){
var inst_55638 = (state_55648[(8)]);
var inst_55641 = JSON.parse(inst_55638);
var inst_55642 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_55641,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_55648__$1 = state_55648;
var statearr_55666_55698 = state_55648__$1;
(statearr_55666_55698[(2)] = inst_55642);

(statearr_55666_55698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55649 === (4))){
var inst_55638 = (state_55648[(8)]);
var state_55648__$1 = state_55648;
var statearr_55669_55699 = state_55648__$1;
(statearr_55669_55699[(2)] = inst_55638);

(statearr_55669_55699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55649 === (5))){
var inst_55645 = (state_55648[(2)]);
var inst_55646 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_55645) : body_handler.call(null,inst_55645));
var state_55648__$1 = state_55648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55648__$1,inst_55646);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____0 = (function (){
var statearr_55670 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55670[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__);

(statearr_55670[(1)] = (1));

return statearr_55670;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____1 = (function (state_55648){
while(true){
var ret_value__29023__auto__ = (function (){try{while(true){
var result__29024__auto__ = switch__29021__auto__(state_55648);
if(cljs.core.keyword_identical_QMARK_(result__29024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29024__auto__;
}
break;
}
}catch (e55671){var ex__29025__auto__ = e55671;
var statearr_55672_55702 = state_55648;
(statearr_55672_55702[(2)] = ex__29025__auto__);


if(cljs.core.seq((state_55648[(4)]))){
var statearr_55673_55703 = state_55648;
(statearr_55673_55703[(1)] = cljs.core.first((state_55648[(4)])));

} else {
throw ex__29025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55704 = state_55648;
state_55648 = G__55704;
continue;
} else {
return ret_value__29023__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__ = function(state_55648){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____1.call(this,state_55648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__;
})()
})();
var state__29108__auto__ = (function (){var statearr_55674 = f__29107__auto__();
(statearr_55674[(6)] = c__29106__auto__);

return statearr_55674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29108__auto__);
}));

return c__29106__auto__;
});
dcs.prototype_6.loader.load_data = (function dcs$prototype_6$loader$load_data(){
console.log("Loading data files");

dcs.prototype_6.loader.fetch("stirling-community-food-tonnes.json",(function (stirling_community_food_tonnes){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_holder,stirling_community_food_tonnes);
}));

dcs.prototype_6.loader.fetch("stirling-community-food-footfall.json",(function (stirling_community_food_footfall){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_footfall_holder,stirling_community_food_footfall);
}));

dcs.prototype_6.loader.fetch("fairshare-material.json",(function (fairshare_material){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_material_holder,fairshare_material);
}));

dcs.prototype_6.loader.fetch("fairshare-co2e.json",(function (fairshare_co2e){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_co2e_holder,fairshare_co2e);
}));

dcs.prototype_6.loader.fetch("ace-furniture-sold-counts.json",(function (ace_furniture_counts){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_counts_holder,ace_furniture_counts);
}));

dcs.prototype_6.loader.fetch("ace-furniture-sold-weights.json",(function (ace_furniture_weights){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_weights_holder,ace_furniture_weights);
}));

dcs.prototype_6.loader.fetch("ace-furniture-to-waste-streams.json",(function (ace_furniture_to_waste_streams){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_to_waste_streams_holder,ace_furniture_to_waste_streams);
}));

dcs.prototype_6.loader.fetch("household-waste-analysis.json",(function (household_waste_analysis){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_holder,household_waste_analysis);
}));

dcs.prototype_6.loader.fetch("geojson.json",(function (geojson){
return cljs.core.reset_BANG_(dcs.prototype_6.state.geojson_cursor,cljs.core.clj__GT_js(geojson));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"meta.json"].join(''),(function (meta){
return cljs.core.reset_BANG_(dcs.prototype_6.state.meta_holder,meta);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"co2e-multiplier.json"].join(''),(function (co2e_multiplier){
return cljs.core.reset_BANG_(dcs.prototype_6.state.co2e_multiplier_holder,co2e_multiplier);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"population.json"].join(''),(function (population){
var population_scotland = dcs.prototype_6.data_shaping.rollup_population_regions(population);
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55679_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55679_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"bin-collection.json"].join(''),(function (stirling_bin_collection){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_holder,stirling_bin_collection);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
