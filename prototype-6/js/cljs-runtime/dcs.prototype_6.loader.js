goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29031__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29032__auto__ = (function (){var switch__28993__auto__ = (function (state_58596){
var state_val_58597 = (state_58596[(1)]);
if((state_val_58597 === (1))){
var inst_58571 = dcs.prototype_6.util.now();
var inst_58574 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58575 = [false];
var inst_58576 = cljs.core.PersistentHashMap.fromArrays(inst_58574,inst_58575);
var inst_58577 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58576], 0));
var state_58596__$1 = (function (){var statearr_58598 = state_58596;
(statearr_58598[(7)] = inst_58571);

return statearr_58598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58596__$1,(2),inst_58577);
} else {
if((state_val_58597 === (2))){
var inst_58586 = (state_58596[(8)]);
var inst_58571 = (state_58596[(7)]);
var inst_58579 = (state_58596[(2)]);
var inst_58581 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_58579);
var inst_58582 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_58579);
var inst_58583 = dcs.prototype_6.util.secs_to_now(inst_58571);
var inst_58584 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58581)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58582)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58583)].join('');
var inst_58585 = console.log(inst_58584);
var inst_58586__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_58579);
var inst_58587 = typeof inst_58586__$1 === 'string';
var state_58596__$1 = (function (){var statearr_58601 = state_58596;
(statearr_58601[(8)] = inst_58586__$1);

(statearr_58601[(9)] = inst_58585);

return statearr_58601;
})();
if(cljs.core.truth_(inst_58587)){
var statearr_58604_58636 = state_58596__$1;
(statearr_58604_58636[(1)] = (3));

} else {
var statearr_58605_58637 = state_58596__$1;
(statearr_58605_58637[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58597 === (3))){
var inst_58586 = (state_58596[(8)]);
var inst_58589 = JSON.parse(inst_58586);
var inst_58590 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_58589,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_58596__$1 = state_58596;
var statearr_58608_58638 = state_58596__$1;
(statearr_58608_58638[(2)] = inst_58590);

(statearr_58608_58638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58597 === (4))){
var inst_58586 = (state_58596[(8)]);
var state_58596__$1 = state_58596;
var statearr_58609_58639 = state_58596__$1;
(statearr_58609_58639[(2)] = inst_58586);

(statearr_58609_58639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58597 === (5))){
var inst_58593 = (state_58596[(2)]);
var inst_58594 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_58593) : body_handler.call(null,inst_58593));
var state_58596__$1 = state_58596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58596__$1,inst_58594);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__28994__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__28994__auto____0 = (function (){
var statearr_58614 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58614[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__28994__auto__);

(statearr_58614[(1)] = (1));

return statearr_58614;
});
var dcs$prototype_6$loader$fetch_$_state_machine__28994__auto____1 = (function (state_58596){
while(true){
var ret_value__28995__auto__ = (function (){try{while(true){
var result__28996__auto__ = switch__28993__auto__(state_58596);
if(cljs.core.keyword_identical_QMARK_(result__28996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28996__auto__;
}
break;
}
}catch (e58615){var ex__28997__auto__ = e58615;
var statearr_58616_58642 = state_58596;
(statearr_58616_58642[(2)] = ex__28997__auto__);


if(cljs.core.seq((state_58596[(4)]))){
var statearr_58617_58643 = state_58596;
(statearr_58617_58643[(1)] = cljs.core.first((state_58596[(4)])));

} else {
throw ex__28997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58644 = state_58596;
state_58596 = G__58644;
continue;
} else {
return ret_value__28995__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__28994__auto__ = function(state_58596){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__28994__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__28994__auto____1.call(this,state_58596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__28994__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__28994__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__28994__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__28994__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__28994__auto__;
})()
})();
var state__29033__auto__ = (function (){var statearr_58618 = f__29032__auto__();
(statearr_58618[(6)] = c__29031__auto__);

return statearr_58618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29033__auto__);
}));

return c__29031__auto__;
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
