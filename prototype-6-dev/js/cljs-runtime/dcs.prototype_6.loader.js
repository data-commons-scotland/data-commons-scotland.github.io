goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.DEV_DATA_REPO = "https://raw.githubusercontent.com/data-commons-scotland/dcs-dev-data/main/";
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29324__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29325__auto__ = (function (){var switch__29239__auto__ = (function (state_31798){
var state_val_31799 = (state_31798[(1)]);
if((state_val_31799 === (7))){
var state_31798__$1 = state_31798;
var statearr_31800_31820 = state_31798__$1;
(statearr_31800_31820[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (1))){
var inst_31765 = dcs.prototype_6.util.now();
var inst_31766 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31767 = [false];
var inst_31768 = cljs.core.PersistentHashMap.fromArrays(inst_31766,inst_31767);
var inst_31769 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31768], 0));
var state_31798__$1 = (function (){var statearr_31802 = state_31798;
(statearr_31802[(7)] = inst_31765);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31798__$1,(2),inst_31769);
} else {
if((state_val_31799 === (4))){
var inst_31777 = (state_31798[(8)]);
var inst_31783 = typeof inst_31777 === 'string';
var state_31798__$1 = state_31798;
if(cljs.core.truth_(inst_31783)){
var statearr_31803_31821 = state_31798__$1;
(statearr_31803_31821[(1)] = (6));

} else {
var statearr_31804_31822 = state_31798__$1;
(statearr_31804_31822[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (6))){
var inst_31777 = (state_31798[(8)]);
var inst_31785 = JSON.parse(inst_31777);
var inst_31786 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_31785,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_31798__$1 = state_31798;
var statearr_31805_31823 = state_31798__$1;
(statearr_31805_31823[(2)] = inst_31786);

(statearr_31805_31823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (3))){
var inst_31777 = (state_31798[(8)]);
var inst_31780 = clojure.string.replace(inst_31777,"\r","");
var inst_31781 = testdouble.cljs.csv.read_csv(inst_31780);
var state_31798__$1 = state_31798;
var statearr_31806_31824 = state_31798__$1;
(statearr_31806_31824[(2)] = inst_31781);

(statearr_31806_31824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (2))){
var inst_31765 = (state_31798[(7)]);
var inst_31771 = (state_31798[(2)]);
var inst_31772 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_31771);
var inst_31773 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_31771);
var inst_31774 = dcs.prototype_6.util.secs_to_now(inst_31765);
var inst_31775 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31772)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31773)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31774)].join('');
var inst_31776 = console.log(inst_31775);
var inst_31777 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31771);
var inst_31778 = clojure.string.ends_with_QMARK_(url,".csv");
var state_31798__$1 = (function (){var statearr_31807 = state_31798;
(statearr_31807[(8)] = inst_31777);

(statearr_31807[(9)] = inst_31776);

return statearr_31807;
})();
if(inst_31778){
var statearr_31808_31825 = state_31798__$1;
(statearr_31808_31825[(1)] = (3));

} else {
var statearr_31809_31826 = state_31798__$1;
(statearr_31809_31826[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (11))){
var inst_31791 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31810_31827 = state_31798__$1;
(statearr_31810_31827[(2)] = inst_31791);

(statearr_31810_31827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (9))){
var inst_31777 = (state_31798[(8)]);
var state_31798__$1 = state_31798;
var statearr_31811_31828 = state_31798__$1;
(statearr_31811_31828[(2)] = inst_31777);

(statearr_31811_31828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (5))){
var inst_31795 = (state_31798[(2)]);
var inst_31796 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_31795) : body_handler.call(null,inst_31795));
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31798__$1,inst_31796);
} else {
if((state_val_31799 === (10))){
var state_31798__$1 = state_31798;
var statearr_31812_31829 = state_31798__$1;
(statearr_31812_31829[(2)] = null);

(statearr_31812_31829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (8))){
var inst_31793 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31813_31830 = state_31798__$1;
(statearr_31813_31830[(2)] = inst_31793);

(statearr_31813_31830[(1)] = (5));


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
var dcs$prototype_6$loader$fetch_$_state_machine__29240__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29240__auto____0 = (function (){
var statearr_31814 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31814[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29240__auto__);

(statearr_31814[(1)] = (1));

return statearr_31814;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29240__auto____1 = (function (state_31798){
while(true){
var ret_value__29241__auto__ = (function (){try{while(true){
var result__29242__auto__ = switch__29239__auto__(state_31798);
if(cljs.core.keyword_identical_QMARK_(result__29242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29242__auto__;
}
break;
}
}catch (e31815){var ex__29243__auto__ = e31815;
var statearr_31816_31831 = state_31798;
(statearr_31816_31831[(2)] = ex__29243__auto__);


if(cljs.core.seq((state_31798[(4)]))){
var statearr_31817_31832 = state_31798;
(statearr_31817_31832[(1)] = cljs.core.first((state_31798[(4)])));

} else {
throw ex__29243__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31833 = state_31798;
state_31798 = G__31833;
continue;
} else {
return ret_value__29241__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29240__auto__ = function(state_31798){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29240__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29240__auto____1.call(this,state_31798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29240__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29240__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29240__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29240__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29240__auto__;
})()
})();
var state__29326__auto__ = (function (){var statearr_31818 = f__29325__auto__();
(statearr_31818[(6)] = c__29324__auto__);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29326__auto__);
}));

return c__29324__auto__;
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

dcs.prototype_6.loader.fetch([dcs.prototype_6.loader.DEV_DATA_REPO,"regional-dashboard-annotations.csv"].join(''),(function (regional_dashboard_annotations){
return cljs.core.reset_BANG_(dcs.prototype_6.state.regional_dashboard_annotations_holder,regional_dashboard_annotations);
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.loader.DEV_DATA_REPO,"household-waste-analysis-annotations.csv"].join(''),(function (household_waste_analysis_annotations){
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
var population_scotGovTarget = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31819_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31819_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target");
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
