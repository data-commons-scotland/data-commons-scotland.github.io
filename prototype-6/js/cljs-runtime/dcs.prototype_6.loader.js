goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29113__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29114__auto__ = (function (){var switch__29043__auto__ = (function (state_30254){
var state_val_30256 = (state_30254[(1)]);
if((state_val_30256 === (1))){
var inst_30222 = dcs.prototype_6.util.now();
var inst_30227 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_30228 = [false];
var inst_30229 = cljs.core.PersistentHashMap.fromArrays(inst_30227,inst_30228);
var inst_30230 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30229], 0));
var state_30254__$1 = (function (){var statearr_30273 = state_30254;
(statearr_30273[(7)] = inst_30222);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30254__$1,(2),inst_30230);
} else {
if((state_val_30256 === (2))){
var inst_30239 = (state_30254[(8)]);
var inst_30222 = (state_30254[(7)]);
var inst_30232 = (state_30254[(2)]);
var inst_30234 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_30232);
var inst_30235 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_30232);
var inst_30236 = dcs.prototype_6.util.secs_to_now(inst_30222);
var inst_30237 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30234)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30235)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30236)].join('');
var inst_30238 = console.log(inst_30237);
var inst_30239__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30232);
var inst_30240 = typeof inst_30239__$1 === 'string';
var state_30254__$1 = (function (){var statearr_30283 = state_30254;
(statearr_30283[(9)] = inst_30238);

(statearr_30283[(8)] = inst_30239__$1);

return statearr_30283;
})();
if(cljs.core.truth_(inst_30240)){
var statearr_30289_30643 = state_30254__$1;
(statearr_30289_30643[(1)] = (3));

} else {
var statearr_30290_30644 = state_30254__$1;
(statearr_30290_30644[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (3))){
var inst_30239 = (state_30254[(8)]);
var inst_30242 = JSON.parse(inst_30239);
var inst_30243 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_30242,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_30254__$1 = state_30254;
var statearr_30297_30645 = state_30254__$1;
(statearr_30297_30645[(2)] = inst_30243);

(statearr_30297_30645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (4))){
var inst_30239 = (state_30254[(8)]);
var state_30254__$1 = state_30254;
var statearr_30303_30646 = state_30254__$1;
(statearr_30303_30646[(2)] = inst_30239);

(statearr_30303_30646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (5))){
var inst_30246 = (state_30254[(2)]);
var inst_30248 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_30246) : body_handler.call(null,inst_30246));
var state_30254__$1 = state_30254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30254__$1,inst_30248);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29044__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29044__auto____0 = (function (){
var statearr_30319 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30319[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29044__auto__);

(statearr_30319[(1)] = (1));

return statearr_30319;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29044__auto____1 = (function (state_30254){
while(true){
var ret_value__29045__auto__ = (function (){try{while(true){
var result__29046__auto__ = switch__29043__auto__(state_30254);
if(cljs.core.keyword_identical_QMARK_(result__29046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29046__auto__;
}
break;
}
}catch (e30320){var ex__29047__auto__ = e30320;
var statearr_30321_30647 = state_30254;
(statearr_30321_30647[(2)] = ex__29047__auto__);


if(cljs.core.seq((state_30254[(4)]))){
var statearr_30322_30648 = state_30254;
(statearr_30322_30648[(1)] = cljs.core.first((state_30254[(4)])));

} else {
throw ex__29047__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30649 = state_30254;
state_30254 = G__30649;
continue;
} else {
return ret_value__29045__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29044__auto__ = function(state_30254){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29044__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29044__auto____1.call(this,state_30254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29044__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29044__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29044__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29044__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29044__auto__;
})()
})();
var state__29115__auto__ = (function (){var statearr_30339 = f__29114__auto__();
(statearr_30339[(6)] = c__29113__auto__);

return statearr_30339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29115__auto__);
}));

return c__29113__auto__;
});
dcs.prototype_6.loader.load_data = (function dcs$prototype_6$loader$load_data(){
console.log("Loading data files");

dcs.prototype_6.loader.fetch("stirling-community-food-tonnes.json",(function (stirling_community_food_tonnes){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_holder,stirling_community_food_tonnes);
}));

dcs.prototype_6.loader.fetch("stirling-community-food-footfall.json",(function (stirling_community_food_footfall){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_footfall_holder,stirling_community_food_footfall);
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
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30418_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30418_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-waste-analysis.json"].join(''),(function (household_waste_analysis){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_holder,household_waste_analysis);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
