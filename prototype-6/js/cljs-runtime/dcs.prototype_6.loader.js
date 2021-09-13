goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29059__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29060__auto__ = (function (){var switch__28974__auto__ = (function (state_39827){
var state_val_39828 = (state_39827[(1)]);
if((state_val_39828 === (1))){
var inst_39805 = dcs.prototype_6.util.now();
var inst_39806 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_39807 = [false];
var inst_39808 = cljs.core.PersistentHashMap.fromArrays(inst_39806,inst_39807);
var inst_39809 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39808], 0));
var state_39827__$1 = (function (){var statearr_39833 = state_39827;
(statearr_39833[(7)] = inst_39805);

return statearr_39833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39827__$1,(2),inst_39809);
} else {
if((state_val_39828 === (2))){
var inst_39817 = (state_39827[(8)]);
var inst_39805 = (state_39827[(7)]);
var inst_39811 = (state_39827[(2)]);
var inst_39812 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_39811);
var inst_39813 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_39811);
var inst_39814 = dcs.prototype_6.util.secs_to_now(inst_39805);
var inst_39815 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39812)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39813)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39814)].join('');
var inst_39816 = console.log(inst_39815);
var inst_39817__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39811);
var inst_39818 = typeof inst_39817__$1 === 'string';
var state_39827__$1 = (function (){var statearr_39842 = state_39827;
(statearr_39842[(8)] = inst_39817__$1);

(statearr_39842[(9)] = inst_39816);

return statearr_39842;
})();
if(cljs.core.truth_(inst_39818)){
var statearr_39843_39892 = state_39827__$1;
(statearr_39843_39892[(1)] = (3));

} else {
var statearr_39844_39893 = state_39827__$1;
(statearr_39844_39893[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (3))){
var inst_39817 = (state_39827[(8)]);
var inst_39820 = JSON.parse(inst_39817);
var inst_39821 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_39820,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_39827__$1 = state_39827;
var statearr_39845_39894 = state_39827__$1;
(statearr_39845_39894[(2)] = inst_39821);

(statearr_39845_39894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (4))){
var inst_39817 = (state_39827[(8)]);
var state_39827__$1 = state_39827;
var statearr_39846_39895 = state_39827__$1;
(statearr_39846_39895[(2)] = inst_39817);

(statearr_39846_39895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (5))){
var inst_39824 = (state_39827[(2)]);
var inst_39825 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_39824) : body_handler.call(null,inst_39824));
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39827__$1,inst_39825);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__28975__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__28975__auto____0 = (function (){
var statearr_39859 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39859[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__28975__auto__);

(statearr_39859[(1)] = (1));

return statearr_39859;
});
var dcs$prototype_6$loader$fetch_$_state_machine__28975__auto____1 = (function (state_39827){
while(true){
var ret_value__28976__auto__ = (function (){try{while(true){
var result__28977__auto__ = switch__28974__auto__(state_39827);
if(cljs.core.keyword_identical_QMARK_(result__28977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28977__auto__;
}
break;
}
}catch (e39860){var ex__28978__auto__ = e39860;
var statearr_39861_39898 = state_39827;
(statearr_39861_39898[(2)] = ex__28978__auto__);


if(cljs.core.seq((state_39827[(4)]))){
var statearr_39862_39899 = state_39827;
(statearr_39862_39899[(1)] = cljs.core.first((state_39827[(4)])));

} else {
throw ex__28978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39900 = state_39827;
state_39827 = G__39900;
continue;
} else {
return ret_value__28976__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__28975__auto__ = function(state_39827){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__28975__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__28975__auto____1.call(this,state_39827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__28975__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__28975__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__28975__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__28975__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__28975__auto__;
})()
})();
var state__29061__auto__ = (function (){var statearr_39863 = f__29060__auto__();
(statearr_39863[(6)] = c__29059__auto__);

return statearr_39863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29061__auto__);
}));

return c__29059__auto__;
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
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39866_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39866_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_repo_data,"fairshare.json"].join(''),(function (fairshare){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_holder,fairshare);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
