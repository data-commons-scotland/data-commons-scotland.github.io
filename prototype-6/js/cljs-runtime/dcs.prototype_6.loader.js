goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29110__auto__ = (function (){var switch__29024__auto__ = (function (state_34177){
var state_val_34179 = (state_34177[(1)]);
if((state_val_34179 === (1))){
var inst_34150 = dcs.prototype_6.util.now();
var inst_34152 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_34153 = [false];
var inst_34154 = cljs.core.PersistentHashMap.fromArrays(inst_34152,inst_34153);
var inst_34155 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34154], 0));
var state_34177__$1 = (function (){var statearr_34181 = state_34177;
(statearr_34181[(7)] = inst_34150);

return statearr_34181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34177__$1,(2),inst_34155);
} else {
if((state_val_34179 === (2))){
var inst_34163 = (state_34177[(8)]);
var inst_34150 = (state_34177[(7)]);
var inst_34157 = (state_34177[(2)]);
var inst_34158 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_34157);
var inst_34159 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_34157);
var inst_34160 = dcs.prototype_6.util.secs_to_now(inst_34150);
var inst_34161 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34158)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34159)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34160)].join('');
var inst_34162 = console.log(inst_34161);
var inst_34163__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_34157);
var inst_34165 = typeof inst_34163__$1 === 'string';
var state_34177__$1 = (function (){var statearr_34186 = state_34177;
(statearr_34186[(9)] = inst_34162);

(statearr_34186[(8)] = inst_34163__$1);

return statearr_34186;
})();
if(cljs.core.truth_(inst_34165)){
var statearr_34187_34216 = state_34177__$1;
(statearr_34187_34216[(1)] = (3));

} else {
var statearr_34188_34217 = state_34177__$1;
(statearr_34188_34217[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (3))){
var inst_34163 = (state_34177[(8)]);
var inst_34168 = JSON.parse(inst_34163);
var inst_34169 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_34168,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_34177__$1 = state_34177;
var statearr_34189_34218 = state_34177__$1;
(statearr_34189_34218[(2)] = inst_34169);

(statearr_34189_34218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (4))){
var inst_34163 = (state_34177[(8)]);
var state_34177__$1 = state_34177;
var statearr_34191_34219 = state_34177__$1;
(statearr_34191_34219[(2)] = inst_34163);

(statearr_34191_34219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34179 === (5))){
var inst_34172 = (state_34177[(2)]);
var inst_34173 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_34172) : body_handler.call(null,inst_34172));
var state_34177__$1 = state_34177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34177__$1,inst_34173);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29025__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29025__auto____0 = (function (){
var statearr_34195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34195[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29025__auto__);

(statearr_34195[(1)] = (1));

return statearr_34195;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29025__auto____1 = (function (state_34177){
while(true){
var ret_value__29026__auto__ = (function (){try{while(true){
var result__29027__auto__ = switch__29024__auto__(state_34177);
if(cljs.core.keyword_identical_QMARK_(result__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29027__auto__;
}
break;
}
}catch (e34198){var ex__29028__auto__ = e34198;
var statearr_34200_34233 = state_34177;
(statearr_34200_34233[(2)] = ex__29028__auto__);


if(cljs.core.seq((state_34177[(4)]))){
var statearr_34202_34234 = state_34177;
(statearr_34202_34234[(1)] = cljs.core.first((state_34177[(4)])));

} else {
throw ex__29028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34236 = state_34177;
state_34177 = G__34236;
continue;
} else {
return ret_value__29026__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29025__auto__ = function(state_34177){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29025__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29025__auto____1.call(this,state_34177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29025__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29025__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29025__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29025__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29025__auto__;
})()
})();
var state__29111__auto__ = (function (){var statearr_34203 = f__29110__auto__();
(statearr_34203[(6)] = c__29109__auto__);

return statearr_34203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29111__auto__);
}));

return c__29109__auto__;
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
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34205_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34205_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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
