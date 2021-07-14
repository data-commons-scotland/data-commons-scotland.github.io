goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29109__auto__ = (function (){var switch__29085__auto__ = (function (state_43924){
var state_val_43925 = (state_43924[(1)]);
if((state_val_43925 === (1))){
var inst_43902 = dcs.prototype_6.util.now();
var inst_43903 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_43904 = [false];
var inst_43905 = cljs.core.PersistentHashMap.fromArrays(inst_43903,inst_43904);
var inst_43906 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43905], 0));
var state_43924__$1 = (function (){var statearr_43926 = state_43924;
(statearr_43926[(7)] = inst_43902);

return statearr_43926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43924__$1,(2),inst_43906);
} else {
if((state_val_43925 === (2))){
var inst_43914 = (state_43924[(8)]);
var inst_43902 = (state_43924[(7)]);
var inst_43908 = (state_43924[(2)]);
var inst_43909 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_43908);
var inst_43910 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_43908);
var inst_43911 = dcs.prototype_6.util.secs_to_now(inst_43902);
var inst_43912 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43909)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43910)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43911)].join('');
var inst_43913 = console.log(inst_43912);
var inst_43914__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43908);
var inst_43915 = typeof inst_43914__$1 === 'string';
var state_43924__$1 = (function (){var statearr_43927 = state_43924;
(statearr_43927[(8)] = inst_43914__$1);

(statearr_43927[(9)] = inst_43913);

return statearr_43927;
})();
if(cljs.core.truth_(inst_43915)){
var statearr_43928_43937 = state_43924__$1;
(statearr_43928_43937[(1)] = (3));

} else {
var statearr_43929_43938 = state_43924__$1;
(statearr_43929_43938[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43925 === (3))){
var inst_43914 = (state_43924[(8)]);
var inst_43917 = JSON.parse(inst_43914);
var inst_43918 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_43917,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_43924__$1 = state_43924;
var statearr_43930_43939 = state_43924__$1;
(statearr_43930_43939[(2)] = inst_43918);

(statearr_43930_43939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43925 === (4))){
var inst_43914 = (state_43924[(8)]);
var state_43924__$1 = state_43924;
var statearr_43931_43940 = state_43924__$1;
(statearr_43931_43940[(2)] = inst_43914);

(statearr_43931_43940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43925 === (5))){
var inst_43921 = (state_43924[(2)]);
var inst_43922 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_43921) : body_handler.call(null,inst_43921));
var state_43924__$1 = state_43924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43924__$1,inst_43922);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29086__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29086__auto____0 = (function (){
var statearr_43932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43932[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29086__auto__);

(statearr_43932[(1)] = (1));

return statearr_43932;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29086__auto____1 = (function (state_43924){
while(true){
var ret_value__29087__auto__ = (function (){try{while(true){
var result__29088__auto__ = switch__29085__auto__(state_43924);
if(cljs.core.keyword_identical_QMARK_(result__29088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29088__auto__;
}
break;
}
}catch (e43933){var ex__29089__auto__ = e43933;
var statearr_43934_43941 = state_43924;
(statearr_43934_43941[(2)] = ex__29089__auto__);


if(cljs.core.seq((state_43924[(4)]))){
var statearr_43935_43942 = state_43924;
(statearr_43935_43942[(1)] = cljs.core.first((state_43924[(4)])));

} else {
throw ex__29089__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43943 = state_43924;
state_43924 = G__43943;
continue;
} else {
return ret_value__29087__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29086__auto__ = function(state_43924){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29086__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29086__auto____1.call(this,state_43924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29086__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29086__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29086__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29086__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29086__auto__;
})()
})();
var state__29110__auto__ = (function (){var statearr_43936 = f__29109__auto__();
(statearr_43936[(6)] = c__29108__auto__);

return statearr_43936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29110__auto__);
}));

return c__29108__auto__;
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

dcs.prototype_6.loader.fetch("household-waste-analysis.json",(function (household_waste_analysis){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_holder,household_waste_analysis);
}));

dcs.prototype_6.loader.fetch("geojson.json",(function (geojson){
return cljs.core.reset_BANG_(dcs.prototype_6.state.geojson_cursor,cljs.core.clj__GT_js(geojson));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"population.json"].join(''),(function (population){
return cljs.core.reset_BANG_(dcs.prototype_6.state.population_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(population,dcs.prototype_6.data_shaping.rollup_population_regions(population)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-waste.json"].join(''),(function (household_waste){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_waste,dcs.prototype_6.data_shaping.rollup_household_waste_regions(household_waste)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"household-co2e.json"].join(''),(function (household_co2e){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_co2e,dcs.prototype_6.data_shaping.rollup_household_co2e_regions(household_co2e)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"business-waste-by-region.json"].join(''),(function (business_waste_by_region){
return cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(business_waste_by_region,dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions(business_waste_by_region)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"waste-site.json"].join(''),(function (waste_site){
return cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_holder,waste_site);
}));

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"stirling-bin-collection.json"].join(''),(function (stirling_bin_collection){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_holder,stirling_bin_collection);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
