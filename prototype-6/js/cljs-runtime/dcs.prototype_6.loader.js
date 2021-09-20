goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29091__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29092__auto__ = (function (){var switch__29021__auto__ = (function (state_35107){
var state_val_35108 = (state_35107[(1)]);
if((state_val_35108 === (1))){
var inst_35083 = dcs.prototype_6.util.now();
var inst_35084 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_35085 = [false];
var inst_35086 = cljs.core.PersistentHashMap.fromArrays(inst_35084,inst_35085);
var inst_35087 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35086], 0));
var state_35107__$1 = (function (){var statearr_35109 = state_35107;
(statearr_35109[(7)] = inst_35083);

return statearr_35109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35107__$1,(2),inst_35087);
} else {
if((state_val_35108 === (2))){
var inst_35083 = (state_35107[(7)]);
var inst_35095 = (state_35107[(8)]);
var inst_35089 = (state_35107[(2)]);
var inst_35090 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_35089);
var inst_35091 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_35089);
var inst_35092 = dcs.prototype_6.util.secs_to_now(inst_35083);
var inst_35093 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35090)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35091)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35092)].join('');
var inst_35094 = console.log(inst_35093);
var inst_35095__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35089);
var inst_35096 = typeof inst_35095__$1 === 'string';
var state_35107__$1 = (function (){var statearr_35114 = state_35107;
(statearr_35114[(8)] = inst_35095__$1);

(statearr_35114[(9)] = inst_35094);

return statearr_35114;
})();
if(cljs.core.truth_(inst_35096)){
var statearr_35115_35190 = state_35107__$1;
(statearr_35115_35190[(1)] = (3));

} else {
var statearr_35116_35191 = state_35107__$1;
(statearr_35116_35191[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (3))){
var inst_35095 = (state_35107[(8)]);
var inst_35100 = JSON.parse(inst_35095);
var inst_35101 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_35100,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_35107__$1 = state_35107;
var statearr_35158_35192 = state_35107__$1;
(statearr_35158_35192[(2)] = inst_35101);

(statearr_35158_35192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (4))){
var inst_35095 = (state_35107[(8)]);
var state_35107__$1 = state_35107;
var statearr_35164_35193 = state_35107__$1;
(statearr_35164_35193[(2)] = inst_35095);

(statearr_35164_35193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35108 === (5))){
var inst_35104 = (state_35107[(2)]);
var inst_35105 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_35104) : body_handler.call(null,inst_35104));
var state_35107__$1 = state_35107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35107__$1,inst_35105);
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
var statearr_35173 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35173[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__);

(statearr_35173[(1)] = (1));

return statearr_35173;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____1 = (function (state_35107){
while(true){
var ret_value__29023__auto__ = (function (){try{while(true){
var result__29024__auto__ = switch__29021__auto__(state_35107);
if(cljs.core.keyword_identical_QMARK_(result__29024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29024__auto__;
}
break;
}
}catch (e35174){var ex__29025__auto__ = e35174;
var statearr_35175_35194 = state_35107;
(statearr_35175_35194[(2)] = ex__29025__auto__);


if(cljs.core.seq((state_35107[(4)]))){
var statearr_35176_35195 = state_35107;
(statearr_35176_35195[(1)] = cljs.core.first((state_35107[(4)])));

} else {
throw ex__29025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35196 = state_35107;
state_35107 = G__35196;
continue;
} else {
return ret_value__29023__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__ = function(state_35107){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____1.call(this,state_35107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29022__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29022__auto__;
})()
})();
var state__29093__auto__ = (function (){var statearr_35177 = f__29092__auto__();
(statearr_35177[(6)] = c__29091__auto__);

return statearr_35177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29093__auto__);
}));

return c__29091__auto__;
});
dcs.prototype_6.loader.load_data = (function dcs$prototype_6$loader$load_data(){
console.log("Loading data files");

dcs.prototype_6.loader.fetch("ace-furniture-sold-counts.json",(function (ace_furniture_counts){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_counts_holder,ace_furniture_counts);
}));

dcs.prototype_6.loader.fetch("ace-furniture-sold-weights.json",(function (ace_furniture_weights){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_weights_holder,ace_furniture_weights);
}));

dcs.prototype_6.loader.fetch("ace-furniture-to-waste-streams.json",(function (ace_furniture_to_waste_streams){
return cljs.core.reset_BANG_(dcs.prototype_6.state.ace_furniture_to_waste_streams_holder,ace_furniture_to_waste_streams);
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
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35178_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35178_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-waste-analysis.json"].join(''),(function (household_waste_analysis){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_holder,household_waste_analysis);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
