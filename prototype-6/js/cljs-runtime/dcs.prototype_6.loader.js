goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_27913){
var state_val_27914 = (state_27913[(1)]);
if((state_val_27914 === (1))){
var inst_27885 = dcs.prototype_6.util.now();
var inst_27888 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27889 = [false];
var inst_27890 = cljs.core.PersistentHashMap.fromArrays(inst_27888,inst_27889);
var inst_27891 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27890], 0));
var state_27913__$1 = (function (){var statearr_27917 = state_27913;
(statearr_27917[(7)] = inst_27885);

return statearr_27917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27913__$1,(2),inst_27891);
} else {
if((state_val_27914 === (2))){
var inst_27900 = (state_27913[(8)]);
var inst_27885 = (state_27913[(7)]);
var inst_27893 = (state_27913[(2)]);
var inst_27894 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27893);
var inst_27895 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27893);
var inst_27896 = dcs.prototype_6.util.secs_to_now(inst_27885);
var inst_27897 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27894)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27895)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27896)].join('');
var inst_27898 = console.log(inst_27897);
var inst_27900__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27893);
var inst_27904 = typeof inst_27900__$1 === 'string';
var state_27913__$1 = (function (){var statearr_27918 = state_27913;
(statearr_27918[(9)] = inst_27898);

(statearr_27918[(8)] = inst_27900__$1);

return statearr_27918;
})();
if(cljs.core.truth_(inst_27904)){
var statearr_27919_27939 = state_27913__$1;
(statearr_27919_27939[(1)] = (3));

} else {
var statearr_27920_27940 = state_27913__$1;
(statearr_27920_27940[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (3))){
var inst_27900 = (state_27913[(8)]);
var inst_27906 = JSON.parse(inst_27900);
var inst_27907 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_27906,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_27913__$1 = state_27913;
var statearr_27921_27941 = state_27913__$1;
(statearr_27921_27941[(2)] = inst_27907);

(statearr_27921_27941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (4))){
var inst_27900 = (state_27913[(8)]);
var state_27913__$1 = state_27913;
var statearr_27922_27942 = state_27913__$1;
(statearr_27922_27942[(2)] = inst_27900);

(statearr_27922_27942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (5))){
var inst_27910 = (state_27913[(2)]);
var inst_27911 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_27910) : body_handler.call(null,inst_27910));
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27913__$1,inst_27911);
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
var statearr_27930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27930[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_27930[(1)] = (1));

return statearr_27930;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_27913){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_27913);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e27935){var ex__25560__auto__ = e27935;
var statearr_27936_27943 = state_27913;
(statearr_27936_27943[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_27913[(4)]))){
var statearr_27937_27944 = state_27913;
(statearr_27937_27944[(1)] = cljs.core.first((state_27913[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27945 = state_27913;
state_27913 = G__27945;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_27938 = f__25580__auto__();
(statearr_27938[(6)] = c__25579__auto__);

return statearr_27938;
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

dcs.prototype_6.loader.fetch("fairshare-material.json",(function (fairshare_material){
return cljs.core.reset_BANG_(dcs.prototype_6.state.fairshare_material_holder,fairshare_material);
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
