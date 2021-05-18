goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_28541){
var state_val_28542 = (state_28541[(1)]);
if((state_val_28542 === (1))){
var inst_28513 = dcs.prototype_6.util.now();
var inst_28514 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28515 = [false];
var inst_28516 = cljs.core.PersistentHashMap.fromArrays(inst_28514,inst_28515);
var inst_28517 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28516], 0));
var state_28541__$1 = (function (){var statearr_28544 = state_28541;
(statearr_28544[(7)] = inst_28513);

return statearr_28544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28541__$1,(2),inst_28517);
} else {
if((state_val_28542 === (2))){
var inst_28525 = (state_28541[(8)]);
var inst_28513 = (state_28541[(7)]);
var inst_28519 = (state_28541[(2)]);
var inst_28520 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_28519);
var inst_28521 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_28519);
var inst_28522 = dcs.prototype_6.util.secs_to_now(inst_28513);
var inst_28523 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28520)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28521)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28522)].join('');
var inst_28524 = console.log(inst_28523);
var inst_28525__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28519);
var inst_28526 = typeof inst_28525__$1 === 'string';
var state_28541__$1 = (function (){var statearr_28545 = state_28541;
(statearr_28545[(8)] = inst_28525__$1);

(statearr_28545[(9)] = inst_28524);

return statearr_28545;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28546_28565 = state_28541__$1;
(statearr_28546_28565[(1)] = (3));

} else {
var statearr_28547_28566 = state_28541__$1;
(statearr_28547_28566[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (3))){
var inst_28525 = (state_28541[(8)]);
var inst_28528 = JSON.parse(inst_28525);
var inst_28529 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_28528,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_28541__$1 = state_28541;
var statearr_28548_28571 = state_28541__$1;
(statearr_28548_28571[(2)] = inst_28529);

(statearr_28548_28571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (4))){
var inst_28525 = (state_28541[(8)]);
var state_28541__$1 = state_28541;
var statearr_28549_28572 = state_28541__$1;
(statearr_28549_28572[(2)] = inst_28525);

(statearr_28549_28572[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (5))){
var inst_28525 = (state_28541[(8)]);
var inst_28532 = (state_28541[(2)]);
var inst_28533 = typeof inst_28525 === 'string';
var inst_28534 = ["got body was a string?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28533)].join('');
var inst_28535 = console.log(inst_28534);
var inst_28536 = cljs.core.first(inst_28532);
var inst_28537 = ["first ele in clj-body is",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28536)].join('');
var inst_28538 = console.log(inst_28537);
var inst_28539 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_28532) : body_handler.call(null,inst_28532));
var state_28541__$1 = (function (){var statearr_28550 = state_28541;
(statearr_28550[(10)] = inst_28538);

(statearr_28550[(11)] = inst_28535);

return statearr_28550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28541__$1,inst_28539);
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
var statearr_28551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28551[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_28551[(1)] = (1));

return statearr_28551;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_28541){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_28541);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e28552){var ex__25560__auto__ = e28552;
var statearr_28553_28573 = state_28541;
(statearr_28553_28573[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_28541[(4)]))){
var statearr_28555_28574 = state_28541;
(statearr_28555_28574[(1)] = cljs.core.first((state_28541[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28575 = state_28541;
state_28541 = G__28575;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_28541){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_28541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_28560 = f__25580__auto__();
(statearr_28560[(6)] = c__25579__auto__);

return statearr_28560;
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

dcs.prototype_6.loader.fetch("household-waste-analysis.json",(function (household_waste_analysis){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_analysis_holder,household_waste_analysis);
}));

dcs.prototype_6.loader.fetch("geojson.json",(function (geojson){
return cljs.core.reset_BANG_(dcs.prototype_6.state.geojson_cursor,cljs.core.clj__GT_js(geojson));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_url_stem,"population.json"].join(''),(function (population){
return cljs.core.reset_BANG_(dcs.prototype_6.state.population_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(population,dcs.prototype_6.data_shaping.rollup_population_regions(population)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_url_stem,"household-waste.json"].join(''),(function (household_waste){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_waste,dcs.prototype_6.data_shaping.rollup_household_waste_regions(household_waste)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_url_stem,"household-co2e.json"].join(''),(function (household_co2e){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_co2e,dcs.prototype_6.data_shaping.rollup_household_co2e_regions(household_co2e)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_url_stem,"business-waste-by-region.json"].join(''),(function (business_waste_by_region){
return cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(business_waste_by_region,dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions(business_waste_by_region)));
}));

dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_url_stem,"waste-site.json"].join(''),(function (waste_site){
return cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_holder,waste_site);
}));

return dcs.prototype_6.loader.fetch([dcs.prototype_6.util.easier_url_stem,"stirling-bin-collection.json"].join(''),(function (stirling_bin_collection){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_holder,stirling_bin_collection);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
