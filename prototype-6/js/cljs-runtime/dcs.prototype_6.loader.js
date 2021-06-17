goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25619__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25620__auto__ = (function (){var switch__25596__auto__ = (function (state_29189){
var state_val_29190 = (state_29189[(1)]);
if((state_val_29190 === (1))){
var inst_29167 = dcs.prototype_6.util.now();
var inst_29168 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_29169 = [false];
var inst_29170 = cljs.core.PersistentHashMap.fromArrays(inst_29168,inst_29169);
var inst_29171 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_29170], 0));
var state_29189__$1 = (function (){var statearr_29191 = state_29189;
(statearr_29191[(7)] = inst_29167);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29189__$1,(2),inst_29171);
} else {
if((state_val_29190 === (2))){
var inst_29167 = (state_29189[(7)]);
var inst_29179 = (state_29189[(8)]);
var inst_29173 = (state_29189[(2)]);
var inst_29174 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29173);
var inst_29175 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_29173);
var inst_29176 = dcs.prototype_6.util.secs_to_now(inst_29167);
var inst_29177 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29174)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29175)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29176)].join('');
var inst_29178 = console.log(inst_29177);
var inst_29179__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29173);
var inst_29180 = typeof inst_29179__$1 === 'string';
var state_29189__$1 = (function (){var statearr_29192 = state_29189;
(statearr_29192[(9)] = inst_29178);

(statearr_29192[(8)] = inst_29179__$1);

return statearr_29192;
})();
if(cljs.core.truth_(inst_29180)){
var statearr_29193_29202 = state_29189__$1;
(statearr_29193_29202[(1)] = (3));

} else {
var statearr_29194_29203 = state_29189__$1;
(statearr_29194_29203[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (3))){
var inst_29179 = (state_29189[(8)]);
var inst_29182 = JSON.parse(inst_29179);
var inst_29183 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_29182,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_29189__$1 = state_29189;
var statearr_29195_29204 = state_29189__$1;
(statearr_29195_29204[(2)] = inst_29183);

(statearr_29195_29204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (4))){
var inst_29179 = (state_29189[(8)]);
var state_29189__$1 = state_29189;
var statearr_29196_29205 = state_29189__$1;
(statearr_29196_29205[(2)] = inst_29179);

(statearr_29196_29205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (5))){
var inst_29186 = (state_29189[(2)]);
var inst_29187 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_29186) : body_handler.call(null,inst_29186));
var state_29189__$1 = state_29189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29189__$1,inst_29187);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__25597__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__25597__auto____0 = (function (){
var statearr_29197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29197[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25597__auto__);

(statearr_29197[(1)] = (1));

return statearr_29197;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25597__auto____1 = (function (state_29189){
while(true){
var ret_value__25598__auto__ = (function (){try{while(true){
var result__25599__auto__ = switch__25596__auto__(state_29189);
if(cljs.core.keyword_identical_QMARK_(result__25599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25599__auto__;
}
break;
}
}catch (e29198){var ex__25600__auto__ = e29198;
var statearr_29199_29206 = state_29189;
(statearr_29199_29206[(2)] = ex__25600__auto__);


if(cljs.core.seq((state_29189[(4)]))){
var statearr_29200_29207 = state_29189;
(statearr_29200_29207[(1)] = cljs.core.first((state_29189[(4)])));

} else {
throw ex__25600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29189;
state_29189 = G__29208;
continue;
} else {
return ret_value__25598__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25597__auto__ = function(state_29189){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25597__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25597__auto____1.call(this,state_29189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25597__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25597__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25597__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25597__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25597__auto__;
})()
})();
var state__25621__auto__ = (function (){var statearr_29201 = f__25620__auto__();
(statearr_29201[(6)] = c__25619__auto__);

return statearr_29201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25621__auto__);
}));

return c__25619__auto__;
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
