goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_25925){
var state_val_25926 = (state_25925[(1)]);
if((state_val_25926 === (1))){
var inst_25895 = dcs.prototype_6.util.now();
var inst_25896 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25897 = [false];
var inst_25898 = cljs.core.PersistentHashMap.fromArrays(inst_25896,inst_25897);
var inst_25899 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_25898], 0));
var state_25925__$1 = (function (){var statearr_25943 = state_25925;
(statearr_25943[(7)] = inst_25895);

return statearr_25943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25925__$1,(2),inst_25899);
} else {
if((state_val_25926 === (2))){
var inst_25914 = (state_25925[(8)]);
var inst_25895 = (state_25925[(7)]);
var inst_25901 = (state_25925[(2)]);
var inst_25909 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_25901);
var inst_25910 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_25901);
var inst_25911 = dcs.prototype_6.util.secs_to_now(inst_25895);
var inst_25912 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25909)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25910)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25911)].join('');
var inst_25913 = console.log(inst_25912);
var inst_25914__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_25901);
var inst_25915 = typeof inst_25914__$1 === 'string';
var state_25925__$1 = (function (){var statearr_25946 = state_25925;
(statearr_25946[(9)] = inst_25913);

(statearr_25946[(8)] = inst_25914__$1);

return statearr_25946;
})();
if(cljs.core.truth_(inst_25915)){
var statearr_25947_26061 = state_25925__$1;
(statearr_25947_26061[(1)] = (3));

} else {
var statearr_25948_26062 = state_25925__$1;
(statearr_25948_26062[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25926 === (3))){
var inst_25914 = (state_25925[(8)]);
var inst_25918 = JSON.parse(inst_25914);
var inst_25919 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_25918,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_25925__$1 = state_25925;
var statearr_25953_26063 = state_25925__$1;
(statearr_25953_26063[(2)] = inst_25919);

(statearr_25953_26063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25926 === (4))){
var inst_25914 = (state_25925[(8)]);
var state_25925__$1 = state_25925;
var statearr_25963_26064 = state_25925__$1;
(statearr_25963_26064[(2)] = inst_25914);

(statearr_25963_26064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25926 === (5))){
var inst_25922 = (state_25925[(2)]);
var inst_25923 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_25922) : body_handler.call(null,inst_25922));
var state_25925__$1 = state_25925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25925__$1,inst_25923);
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
var statearr_25974 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25974[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_25974[(1)] = (1));

return statearr_25974;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_25925){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_25925);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e25980){var ex__25560__auto__ = e25980;
var statearr_25992_26070 = state_25925;
(statearr_25992_26070[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_25925[(4)]))){
var statearr_25996_26071 = state_25925;
(statearr_25996_26071[(1)] = cljs.core.first((state_25925[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26072 = state_25925;
state_25925 = G__26072;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_25925){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_25925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_26013 = f__25580__auto__();
(statearr_26013[(6)] = c__25579__auto__);

return statearr_26013;
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
