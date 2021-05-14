goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_27916){
var state_val_27919 = (state_27916[(1)]);
if((state_val_27919 === (1))){
var inst_27901 = dcs.prototype_6.util.now();
var inst_27905 = cljs_http.client.get(url);
var state_27916__$1 = (function (){var statearr_27928 = state_27916;
(statearr_27928[(7)] = inst_27901);

return statearr_27928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27916__$1,(2),inst_27905);
} else {
if((state_val_27919 === (2))){
var inst_27901 = (state_27916[(7)]);
var inst_27907 = (state_27916[(2)]);
var inst_27908 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27907);
var inst_27909 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27907);
var inst_27910 = dcs.prototype_6.util.secs_to_now(inst_27901);
var inst_27911 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27908)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27909)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27910)].join('');
var inst_27912 = console.log(inst_27911);
var inst_27913 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27907);
var inst_27914 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_27913) : body_handler.call(null,inst_27913));
var state_27916__$1 = (function (){var statearr_27929 = state_27916;
(statearr_27929[(8)] = inst_27912);

return statearr_27929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27916__$1,inst_27914);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0 = (function (){
var statearr_27930 = [null,null,null,null,null,null,null,null,null];
(statearr_27930[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_27930[(1)] = (1));

return statearr_27930;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_27916){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_27916);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e27933){var ex__25560__auto__ = e27933;
var statearr_27934_27948 = state_27916;
(statearr_27934_27948[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_27916[(4)]))){
var statearr_27935_27949 = state_27916;
(statearr_27935_27949[(1)] = cljs.core.first((state_27916[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27950 = state_27916;
state_27916 = G__27950;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_27916){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_27916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_27936 = f__25580__auto__();
(statearr_27936[(6)] = c__25579__auto__);

return statearr_27936;
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

dcs.prototype_6.loader.fetch("population.json",(function (population){
return cljs.core.reset_BANG_(dcs.prototype_6.state.population_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(population,dcs.prototype_6.data_shaping.rollup_population_regions(population)));
}));

dcs.prototype_6.loader.fetch("household-waste.json",(function (household_waste){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_waste,dcs.prototype_6.data_shaping.rollup_household_waste_regions(household_waste)));
}));

dcs.prototype_6.loader.fetch("household-co2e.json",(function (household_co2e){
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(household_co2e,dcs.prototype_6.data_shaping.rollup_household_co2e_regions(household_co2e)));
}));

dcs.prototype_6.loader.fetch("business-waste-by-region.json",(function (business_waste_by_region){
return cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_holder,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(business_waste_by_region,dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions(business_waste_by_region)));
}));

dcs.prototype_6.loader.fetch("waste-site.json",(function (waste_site){
return cljs.core.reset_BANG_(dcs.prototype_6.state.waste_site_holder,waste_site);
}));

return dcs.prototype_6.loader.fetch("stirling-bin-collection.json",(function (stirling_bin_collection){
return cljs.core.reset_BANG_(dcs.prototype_6.state.stirling_bin_collection_holder,stirling_bin_collection);
}));
});

//# sourceMappingURL=dcs.prototype_6.loader.js.map
