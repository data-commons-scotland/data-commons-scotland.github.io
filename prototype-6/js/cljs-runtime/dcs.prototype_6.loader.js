goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_32842){
var state_val_32843 = (state_32842[(1)]);
if((state_val_32843 === (1))){
var inst_32820 = dcs.prototype_6.util.now();
var inst_32821 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_32822 = [false];
var inst_32823 = cljs.core.PersistentHashMap.fromArrays(inst_32821,inst_32822);
var inst_32824 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32823], 0));
var state_32842__$1 = (function (){var statearr_32844 = state_32842;
(statearr_32844[(7)] = inst_32820);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32842__$1,(2),inst_32824);
} else {
if((state_val_32843 === (2))){
var inst_32832 = (state_32842[(8)]);
var inst_32820 = (state_32842[(7)]);
var inst_32826 = (state_32842[(2)]);
var inst_32827 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_32826);
var inst_32828 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_32826);
var inst_32829 = dcs.prototype_6.util.secs_to_now(inst_32820);
var inst_32830 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32827)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32828)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32829)].join('');
var inst_32831 = console.log(inst_32830);
var inst_32832__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32826);
var inst_32833 = typeof inst_32832__$1 === 'string';
var state_32842__$1 = (function (){var statearr_32845 = state_32842;
(statearr_32845[(9)] = inst_32831);

(statearr_32845[(8)] = inst_32832__$1);

return statearr_32845;
})();
if(cljs.core.truth_(inst_32833)){
var statearr_32846_32855 = state_32842__$1;
(statearr_32846_32855[(1)] = (3));

} else {
var statearr_32847_32856 = state_32842__$1;
(statearr_32847_32856[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (3))){
var inst_32832 = (state_32842[(8)]);
var inst_32835 = JSON.parse(inst_32832);
var inst_32836 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32835,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_32842__$1 = state_32842;
var statearr_32848_32857 = state_32842__$1;
(statearr_32848_32857[(2)] = inst_32836);

(statearr_32848_32857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (4))){
var inst_32832 = (state_32842[(8)]);
var state_32842__$1 = state_32842;
var statearr_32849_32858 = state_32842__$1;
(statearr_32849_32858[(2)] = inst_32832);

(statearr_32849_32858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (5))){
var inst_32839 = (state_32842[(2)]);
var inst_32840 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_32839) : body_handler.call(null,inst_32839));
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32842__$1,inst_32840);
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
var statearr_32850 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32850[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_32850[(1)] = (1));

return statearr_32850;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_32842){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_32842);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e32851){var ex__25560__auto__ = e32851;
var statearr_32852_32859 = state_32842;
(statearr_32852_32859[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_32842[(4)]))){
var statearr_32853_32860 = state_32842;
(statearr_32853_32860[(1)] = cljs.core.first((state_32842[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_32842;
state_32842 = G__32861;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_32842){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_32842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_32854 = f__25580__auto__();
(statearr_32854[(6)] = c__25579__auto__);

return statearr_32854;
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
