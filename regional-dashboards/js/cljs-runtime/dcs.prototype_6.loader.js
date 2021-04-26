goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_29257){
var state_val_29258 = (state_29257[(1)]);
if((state_val_29258 === (1))){
var inst_29245 = dcs.prototype_6.util.now();
var inst_29246 = cljs_http.client.get(url);
var state_29257__$1 = (function (){var statearr_29259 = state_29257;
(statearr_29259[(7)] = inst_29245);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29257__$1,(2),inst_29246);
} else {
if((state_val_29258 === (2))){
var inst_29245 = (state_29257[(7)]);
var inst_29248 = (state_29257[(2)]);
var inst_29249 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29248);
var inst_29250 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_29248);
var inst_29251 = dcs.prototype_6.util.secs_to_now(inst_29245);
var inst_29252 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29249)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29250)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29251)].join('');
var inst_29253 = console.log(inst_29252);
var inst_29254 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29248);
var inst_29255 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_29254) : body_handler.call(null,inst_29254));
var state_29257__$1 = (function (){var statearr_29260 = state_29257;
(statearr_29260[(8)] = inst_29253);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29257__$1,inst_29255);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__25735__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__25735__auto____0 = (function (){
var statearr_29261 = [null,null,null,null,null,null,null,null,null];
(statearr_29261[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25735__auto__);

(statearr_29261[(1)] = (1));

return statearr_29261;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25735__auto____1 = (function (state_29257){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_29257);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e29262){var ex__25738__auto__ = e29262;
var statearr_29263_29266 = state_29257;
(statearr_29263_29266[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_29257[(4)]))){
var statearr_29264_29267 = state_29257;
(statearr_29264_29267[(1)] = cljs.core.first((state_29257[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29268 = state_29257;
state_29257 = G__29268;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25735__auto__ = function(state_29257){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25735__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25735__auto____1.call(this,state_29257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25735__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25735__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_29265 = f__25758__auto__();
(statearr_29265[(6)] = c__25757__auto__);

return statearr_29265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

return c__25757__auto__;
});
dcs.prototype_6.loader.load_data = (function dcs$prototype_6$loader$load_data(){
console.log("Loading data files");

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
