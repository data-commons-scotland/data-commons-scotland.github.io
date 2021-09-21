goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29106__auto__ = (function (){var switch__29020__auto__ = (function (state_50959){
var state_val_50960 = (state_50959[(1)]);
if((state_val_50960 === (1))){
var inst_50929 = dcs.prototype_6.util.now();
var inst_50930 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50931 = [false];
var inst_50932 = cljs.core.PersistentHashMap.fromArrays(inst_50930,inst_50931);
var inst_50933 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50932], 0));
var state_50959__$1 = (function (){var statearr_50978 = state_50959;
(statearr_50978[(7)] = inst_50929);

return statearr_50978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50959__$1,(2),inst_50933);
} else {
if((state_val_50960 === (2))){
var inst_50949 = (state_50959[(8)]);
var inst_50929 = (state_50959[(7)]);
var inst_50935 = (state_50959[(2)]);
var inst_50944 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_50935);
var inst_50945 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_50935);
var inst_50946 = dcs.prototype_6.util.secs_to_now(inst_50929);
var inst_50947 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50944)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50945)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50946)].join('');
var inst_50948 = console.log(inst_50947);
var inst_50949__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_50935);
var inst_50950 = typeof inst_50949__$1 === 'string';
var state_50959__$1 = (function (){var statearr_50992 = state_50959;
(statearr_50992[(8)] = inst_50949__$1);

(statearr_50992[(9)] = inst_50948);

return statearr_50992;
})();
if(cljs.core.truth_(inst_50950)){
var statearr_50993_51064 = state_50959__$1;
(statearr_50993_51064[(1)] = (3));

} else {
var statearr_50994_51065 = state_50959__$1;
(statearr_50994_51065[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50960 === (3))){
var inst_50949 = (state_50959[(8)]);
var inst_50952 = JSON.parse(inst_50949);
var inst_50953 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50952,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_50959__$1 = state_50959;
var statearr_51001_51066 = state_50959__$1;
(statearr_51001_51066[(2)] = inst_50953);

(statearr_51001_51066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50960 === (4))){
var inst_50949 = (state_50959[(8)]);
var state_50959__$1 = state_50959;
var statearr_51002_51067 = state_50959__$1;
(statearr_51002_51067[(2)] = inst_50949);

(statearr_51002_51067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50960 === (5))){
var inst_50956 = (state_50959[(2)]);
var inst_50957 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_50956) : body_handler.call(null,inst_50956));
var state_50959__$1 = state_50959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50959__$1,inst_50957);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29021__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29021__auto____0 = (function (){
var statearr_51025 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51025[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29021__auto__);

(statearr_51025[(1)] = (1));

return statearr_51025;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29021__auto____1 = (function (state_50959){
while(true){
var ret_value__29022__auto__ = (function (){try{while(true){
var result__29023__auto__ = switch__29020__auto__(state_50959);
if(cljs.core.keyword_identical_QMARK_(result__29023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29023__auto__;
}
break;
}
}catch (e51040){var ex__29024__auto__ = e51040;
var statearr_51042_51068 = state_50959;
(statearr_51042_51068[(2)] = ex__29024__auto__);


if(cljs.core.seq((state_50959[(4)]))){
var statearr_51043_51069 = state_50959;
(statearr_51043_51069[(1)] = cljs.core.first((state_50959[(4)])));

} else {
throw ex__29024__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51070 = state_50959;
state_50959 = G__51070;
continue;
} else {
return ret_value__29022__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29021__auto__ = function(state_50959){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29021__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29021__auto____1.call(this,state_50959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29021__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29021__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29021__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29021__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29021__auto__;
})()
})();
var state__29107__auto__ = (function (){var statearr_51046 = f__29106__auto__();
(statearr_51046[(6)] = c__29105__auto__);

return statearr_51046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29107__auto__);
}));

return c__29105__auto__;
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

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"meta.json"].join(''),(function (meta){
return cljs.core.reset_BANG_(dcs.prototype_6.state.meta_holder,meta);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"co2e-multiplier.json"].join(''),(function (co2e_multiplier){
return cljs.core.reset_BANG_(dcs.prototype_6.state.co2e_multiplier_holder,co2e_multiplier);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"population.json"].join(''),(function (population){
var population_scotland = dcs.prototype_6.data_shaping.rollup_population_regions(population);
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51047_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51047_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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
