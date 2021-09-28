goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29086__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29087__auto__ = (function (){var switch__29063__auto__ = (function (state_31819){
var state_val_31820 = (state_31819[(1)]);
if((state_val_31820 === (1))){
var inst_31796 = dcs.prototype_6.util.now();
var inst_31797 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31799 = [false];
var inst_31800 = cljs.core.PersistentHashMap.fromArrays(inst_31797,inst_31799);
var inst_31801 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31800], 0));
var state_31819__$1 = (function (){var statearr_31847 = state_31819;
(statearr_31847[(7)] = inst_31796);

return statearr_31847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31819__$1,(2),inst_31801);
} else {
if((state_val_31820 === (2))){
var inst_31809 = (state_31819[(8)]);
var inst_31796 = (state_31819[(7)]);
var inst_31803 = (state_31819[(2)]);
var inst_31804 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_31803);
var inst_31805 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_31803);
var inst_31806 = dcs.prototype_6.util.secs_to_now(inst_31796);
var inst_31807 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31804)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31805)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31806)].join('');
var inst_31808 = console.log(inst_31807);
var inst_31809__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31803);
var inst_31810 = typeof inst_31809__$1 === 'string';
var state_31819__$1 = (function (){var statearr_31888 = state_31819;
(statearr_31888[(8)] = inst_31809__$1);

(statearr_31888[(9)] = inst_31808);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31810)){
var statearr_31889_31949 = state_31819__$1;
(statearr_31889_31949[(1)] = (3));

} else {
var statearr_31890_31950 = state_31819__$1;
(statearr_31890_31950[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (3))){
var inst_31809 = (state_31819[(8)]);
var inst_31812 = JSON.parse(inst_31809);
var inst_31813 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_31812,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_31819__$1 = state_31819;
var statearr_31891_31951 = state_31819__$1;
(statearr_31891_31951[(2)] = inst_31813);

(statearr_31891_31951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (4))){
var inst_31809 = (state_31819[(8)]);
var state_31819__$1 = state_31819;
var statearr_31892_31952 = state_31819__$1;
(statearr_31892_31952[(2)] = inst_31809);

(statearr_31892_31952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31820 === (5))){
var inst_31816 = (state_31819[(2)]);
var inst_31817 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_31816) : body_handler.call(null,inst_31816));
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31819__$1,inst_31817);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29064__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29064__auto____0 = (function (){
var statearr_31902 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31902[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29064__auto__);

(statearr_31902[(1)] = (1));

return statearr_31902;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29064__auto____1 = (function (state_31819){
while(true){
var ret_value__29065__auto__ = (function (){try{while(true){
var result__29066__auto__ = switch__29063__auto__(state_31819);
if(cljs.core.keyword_identical_QMARK_(result__29066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29066__auto__;
}
break;
}
}catch (e31907){var ex__29067__auto__ = e31907;
var statearr_31908_31966 = state_31819;
(statearr_31908_31966[(2)] = ex__29067__auto__);


if(cljs.core.seq((state_31819[(4)]))){
var statearr_31913_31967 = state_31819;
(statearr_31913_31967[(1)] = cljs.core.first((state_31819[(4)])));

} else {
throw ex__29067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31968 = state_31819;
state_31819 = G__31968;
continue;
} else {
return ret_value__29065__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29064__auto__ = function(state_31819){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29064__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29064__auto____1.call(this,state_31819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29064__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29064__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29064__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29064__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29064__auto__;
})()
})();
var state__29088__auto__ = (function (){var statearr_31918 = f__29087__auto__();
(statearr_31918[(6)] = c__29086__auto__);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29088__auto__);
}));

return c__29086__auto__;
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
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31920_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31920_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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
