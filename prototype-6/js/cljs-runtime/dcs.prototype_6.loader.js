goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_25943){
var state_val_25944 = (state_25943[(1)]);
if((state_val_25944 === (1))){
var inst_25921 = dcs.prototype_6.util.now();
var inst_25922 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25923 = [false];
var inst_25924 = cljs.core.PersistentHashMap.fromArrays(inst_25922,inst_25923);
var inst_25925 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_25924], 0));
var state_25943__$1 = (function (){var statearr_25945 = state_25943;
(statearr_25945[(7)] = inst_25921);

return statearr_25945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25943__$1,(2),inst_25925);
} else {
if((state_val_25944 === (2))){
var inst_25933 = (state_25943[(8)]);
var inst_25921 = (state_25943[(7)]);
var inst_25927 = (state_25943[(2)]);
var inst_25928 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_25927);
var inst_25929 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_25927);
var inst_25930 = dcs.prototype_6.util.secs_to_now(inst_25921);
var inst_25931 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25928)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25929)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25930)].join('');
var inst_25932 = console.log(inst_25931);
var inst_25933__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_25927);
var inst_25934 = typeof inst_25933__$1 === 'string';
var state_25943__$1 = (function (){var statearr_25946 = state_25943;
(statearr_25946[(9)] = inst_25932);

(statearr_25946[(8)] = inst_25933__$1);

return statearr_25946;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_25947_25956 = state_25943__$1;
(statearr_25947_25956[(1)] = (3));

} else {
var statearr_25948_25957 = state_25943__$1;
(statearr_25948_25957[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (3))){
var inst_25933 = (state_25943[(8)]);
var inst_25936 = JSON.parse(inst_25933);
var inst_25937 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_25936,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_25943__$1 = state_25943;
var statearr_25949_25958 = state_25943__$1;
(statearr_25949_25958[(2)] = inst_25937);

(statearr_25949_25958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (4))){
var inst_25933 = (state_25943[(8)]);
var state_25943__$1 = state_25943;
var statearr_25950_25959 = state_25943__$1;
(statearr_25950_25959[(2)] = inst_25933);

(statearr_25950_25959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25944 === (5))){
var inst_25940 = (state_25943[(2)]);
var inst_25941 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_25940) : body_handler.call(null,inst_25940));
var state_25943__$1 = state_25943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25943__$1,inst_25941);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0 = (function (){
var statearr_25951 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25951[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_25951[(1)] = (1));

return statearr_25951;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_25943){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_25943);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e25952){var ex__25560__auto__ = e25952;
var statearr_25953_25960 = state_25943;
(statearr_25953_25960[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_25943[(4)]))){
var statearr_25954_25961 = state_25943;
(statearr_25954_25961[(1)] = cljs.core.first((state_25943[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25962 = state_25943;
state_25943 = G__25962;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_25943){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_25943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_25955 = f__25580__auto__();
(statearr_25955[(6)] = c__25579__auto__);

return statearr_25955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25581__auto__);
}));

return c__25579__auto__;
});
dcs.prototype_6.loader.load_data = (function dcs$prototype_6$loader$load_data(){
console.log("Loading data files");

dcs.prototype_6.loader.fetch("stirling-community-food-tonnes.json",(function (stirling_community_food_tonnes){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_tonnes_holder,stirling_community_food_tonnes);
}));

dcs.prototype_6.loader.fetch("stirling-community-food-footfall.json",(function (stirling_community_food_footfall){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_community_food_footfall_holder,stirling_community_food_footfall);
}));

dcs.prototype_6.loader.fetch("fairshare-donations.json",(function (fairshare_donations){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_donations_holder,fairshare_donations);
}));

dcs.prototype_6.loader.fetch("fairshare-co2e.json",(function (fairshare_co2e){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_co2e_holder,fairshare_co2e);
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
