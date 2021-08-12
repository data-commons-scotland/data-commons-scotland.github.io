goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29079__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29080__auto__ = (function (){var switch__29056__auto__ = (function (state_117473){
var state_val_117474 = (state_117473[(1)]);
if((state_val_117474 === (1))){
var inst_117445 = dcs.prototype_6.util.now();
var inst_117447 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_117448 = [false];
var inst_117449 = cljs.core.PersistentHashMap.fromArrays(inst_117447,inst_117448);
var inst_117450 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_117449], 0));
var state_117473__$1 = (function (){var statearr_117475 = state_117473;
(statearr_117475[(7)] = inst_117445);

return statearr_117475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117473__$1,(2),inst_117450);
} else {
if((state_val_117474 === (2))){
var inst_117461 = (state_117473[(8)]);
var inst_117445 = (state_117473[(7)]);
var inst_117453 = (state_117473[(2)]);
var inst_117455 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_117453);
var inst_117456 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_117453);
var inst_117458 = dcs.prototype_6.util.secs_to_now(inst_117445);
var inst_117459 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_117455)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_117456)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_117458)].join('');
var inst_117460 = console.log(inst_117459);
var inst_117461__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_117453);
var inst_117462 = typeof inst_117461__$1 === 'string';
var state_117473__$1 = (function (){var statearr_117477 = state_117473;
(statearr_117477[(8)] = inst_117461__$1);

(statearr_117477[(9)] = inst_117460);

return statearr_117477;
})();
if(cljs.core.truth_(inst_117462)){
var statearr_117478_117514 = state_117473__$1;
(statearr_117478_117514[(1)] = (3));

} else {
var statearr_117480_117515 = state_117473__$1;
(statearr_117480_117515[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117474 === (3))){
var inst_117461 = (state_117473[(8)]);
var inst_117464 = JSON.parse(inst_117461);
var inst_117465 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_117464,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_117473__$1 = state_117473;
var statearr_117482_117516 = state_117473__$1;
(statearr_117482_117516[(2)] = inst_117465);

(statearr_117482_117516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117474 === (4))){
var inst_117461 = (state_117473[(8)]);
var state_117473__$1 = state_117473;
var statearr_117485_117517 = state_117473__$1;
(statearr_117485_117517[(2)] = inst_117461);

(statearr_117485_117517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117474 === (5))){
var inst_117469 = (state_117473[(2)]);
var inst_117470 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_117469) : body_handler.call(null,inst_117469));
var state_117473__$1 = state_117473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117473__$1,inst_117470);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29057__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29057__auto____0 = (function (){
var statearr_117489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_117489[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29057__auto__);

(statearr_117489[(1)] = (1));

return statearr_117489;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29057__auto____1 = (function (state_117473){
while(true){
var ret_value__29058__auto__ = (function (){try{while(true){
var result__29059__auto__ = switch__29056__auto__(state_117473);
if(cljs.core.keyword_identical_QMARK_(result__29059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29059__auto__;
}
break;
}
}catch (e117490){var ex__29060__auto__ = e117490;
var statearr_117491_117518 = state_117473;
(statearr_117491_117518[(2)] = ex__29060__auto__);


if(cljs.core.seq((state_117473[(4)]))){
var statearr_117492_117519 = state_117473;
(statearr_117492_117519[(1)] = cljs.core.first((state_117473[(4)])));

} else {
throw ex__29060__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117520 = state_117473;
state_117473 = G__117520;
continue;
} else {
return ret_value__29058__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29057__auto__ = function(state_117473){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29057__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29057__auto____1.call(this,state_117473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29057__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29057__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29057__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29057__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29057__auto__;
})()
})();
var state__29081__auto__ = (function (){var statearr_117493 = f__29080__auto__();
(statearr_117493[(6)] = c__29079__auto__);

return statearr_117493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29081__auto__);
}));

return c__29079__auto__;
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

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"co2e-multiplier.json"].join(''),(function (co2e_multiplier){
return cljs.core.reset_BANG_(dcs.prototype_6.state.co2e_multiplier_holder,co2e_multiplier);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"population.json"].join(''),(function (population){
var population_scotland = dcs.prototype_6.data_shaping.rollup_population_regions(population);
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__117498_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__117498_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"waste-site.json"].join(''),(function (waste_site){
return cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_holder,waste_site);
}));

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"stirling-bin-collection.json"].join(''),(function (stirling_bin_collection){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_holder,stirling_bin_collection);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
