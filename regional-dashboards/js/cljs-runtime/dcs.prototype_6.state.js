goog.provide('dcs.prototype_6.state');
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.app_state !== 'undefined')){
} else {
dcs.prototype_6.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.region_holder !== 'undefined')){
} else {
dcs.prototype_6.state.region_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Please select a region...");
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.geojson_holder !== 'undefined')){
} else {
dcs.prototype_6.state.geojson_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_generation_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_generation_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_percent_recycled_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_percent_recycled_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_management_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_management_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_composition_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_composition_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_co2e_derivation_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_co2e_derivation_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.business_waste_by_region_derivation_generation_holder !== 'undefined')){
} else {
dcs.prototype_6.state.business_waste_by_region_derivation_generation_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.business_waste_by_region_derivation_composition_holder !== 'undefined')){
} else {
dcs.prototype_6.state.business_waste_by_region_derivation_composition_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.population_holder !== 'undefined')){
} else {
dcs.prototype_6.state.population_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_co2e_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_co2e_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.business_waste_by_region_holder !== 'undefined')){
} else {
dcs.prototype_6.state.business_waste_by_region_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
console.log("load geojson");
var c__25757__auto___27416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_27313){
var state_val_27314 = (state_27313[(1)]);
if((state_val_27314 === (1))){
var inst_27302 = cljs_http.client.get("geojson.json");
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27313__$1,(2),inst_27302);
} else {
if((state_val_27314 === (2))){
var inst_27304 = (state_27313[(2)]);
var inst_27305 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27304);
var inst_27306 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27304);
var inst_27307 = ["geojson, status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27305),", success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27306)].join('');
var inst_27308 = console.log(inst_27307);
var inst_27309 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27304);
var inst_27310 = cljs.core.clj__GT_js(inst_27309);
var inst_27311 = cljs.core.reset_BANG_(dcs.prototype_6.state.geojson_holder,inst_27310);
var state_27313__$1 = (function (){var statearr_27315 = state_27313;
(statearr_27315[(7)] = inst_27308);

return statearr_27315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27313__$1,inst_27311);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$state$state_machine__25735__auto__ = null;
var dcs$prototype_6$state$state_machine__25735__auto____0 = (function (){
var statearr_27316 = [null,null,null,null,null,null,null,null];
(statearr_27316[(0)] = dcs$prototype_6$state$state_machine__25735__auto__);

(statearr_27316[(1)] = (1));

return statearr_27316;
});
var dcs$prototype_6$state$state_machine__25735__auto____1 = (function (state_27313){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_27313);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e27317){var ex__25738__auto__ = e27317;
var statearr_27318_27417 = state_27313;
(statearr_27318_27417[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_27313[(4)]))){
var statearr_27319_27418 = state_27313;
(statearr_27319_27418[(1)] = cljs.core.first((state_27313[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27419 = state_27313;
state_27313 = G__27419;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
dcs$prototype_6$state$state_machine__25735__auto__ = function(state_27313){
switch(arguments.length){
case 0:
return dcs$prototype_6$state$state_machine__25735__auto____0.call(this);
case 1:
return dcs$prototype_6$state$state_machine__25735__auto____1.call(this,state_27313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$state$state_machine__25735__auto____0;
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$state$state_machine__25735__auto____1;
return dcs$prototype_6$state$state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_27320 = f__25758__auto__();
(statearr_27320[(6)] = c__25757__auto___27416);

return statearr_27320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

console.log("load population");
var c__25757__auto___27420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_27333){
var state_val_27334 = (state_27333[(1)]);
if((state_val_27334 === (1))){
var inst_27321 = cljs_http.client.get("population.json");
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27333__$1,(2),inst_27321);
} else {
if((state_val_27334 === (2))){
var inst_27323 = (state_27333[(2)]);
var inst_27324 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27323);
var inst_27325 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27323);
var inst_27326 = ["population, status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27324),", success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27325)].join('');
var inst_27327 = console.log(inst_27326);
var inst_27328 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27323);
var inst_27329 = dcs.prototype_6.data_shaping.rollup_population_regions(inst_27328);
var inst_27330 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_27328,inst_27329);
var inst_27331 = cljs.core.reset_BANG_(dcs.prototype_6.state.population_holder,inst_27330);
var state_27333__$1 = (function (){var statearr_27335 = state_27333;
(statearr_27335[(7)] = inst_27327);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27333__$1,inst_27331);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$state$state_machine__25735__auto__ = null;
var dcs$prototype_6$state$state_machine__25735__auto____0 = (function (){
var statearr_27336 = [null,null,null,null,null,null,null,null];
(statearr_27336[(0)] = dcs$prototype_6$state$state_machine__25735__auto__);

(statearr_27336[(1)] = (1));

return statearr_27336;
});
var dcs$prototype_6$state$state_machine__25735__auto____1 = (function (state_27333){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_27333);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e27337){var ex__25738__auto__ = e27337;
var statearr_27338_27421 = state_27333;
(statearr_27338_27421[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_27333[(4)]))){
var statearr_27339_27422 = state_27333;
(statearr_27339_27422[(1)] = cljs.core.first((state_27333[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27423 = state_27333;
state_27333 = G__27423;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
dcs$prototype_6$state$state_machine__25735__auto__ = function(state_27333){
switch(arguments.length){
case 0:
return dcs$prototype_6$state$state_machine__25735__auto____0.call(this);
case 1:
return dcs$prototype_6$state$state_machine__25735__auto____1.call(this,state_27333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$state$state_machine__25735__auto____0;
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$state$state_machine__25735__auto____1;
return dcs$prototype_6$state$state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_27340 = f__25758__auto__();
(statearr_27340[(6)] = c__25757__auto___27420);

return statearr_27340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

console.log("load household-waste");
var c__25757__auto___27424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_27353){
var state_val_27354 = (state_27353[(1)]);
if((state_val_27354 === (1))){
var inst_27341 = cljs_http.client.get("household-waste.json");
var state_27353__$1 = state_27353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27353__$1,(2),inst_27341);
} else {
if((state_val_27354 === (2))){
var inst_27343 = (state_27353[(2)]);
var inst_27344 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27343);
var inst_27345 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27343);
var inst_27346 = ["household-waste, status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27344),", success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27345)].join('');
var inst_27347 = console.log(inst_27346);
var inst_27348 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27343);
var inst_27349 = dcs.prototype_6.data_shaping.rollup_household_waste_regions(inst_27348);
var inst_27350 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_27348,inst_27349);
var inst_27351 = cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_holder,inst_27350);
var state_27353__$1 = (function (){var statearr_27355 = state_27353;
(statearr_27355[(7)] = inst_27347);

return statearr_27355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27353__$1,inst_27351);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$state$state_machine__25735__auto__ = null;
var dcs$prototype_6$state$state_machine__25735__auto____0 = (function (){
var statearr_27356 = [null,null,null,null,null,null,null,null];
(statearr_27356[(0)] = dcs$prototype_6$state$state_machine__25735__auto__);

(statearr_27356[(1)] = (1));

return statearr_27356;
});
var dcs$prototype_6$state$state_machine__25735__auto____1 = (function (state_27353){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_27353);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e27357){var ex__25738__auto__ = e27357;
var statearr_27358_27425 = state_27353;
(statearr_27358_27425[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_27353[(4)]))){
var statearr_27359_27426 = state_27353;
(statearr_27359_27426[(1)] = cljs.core.first((state_27353[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27427 = state_27353;
state_27353 = G__27427;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
dcs$prototype_6$state$state_machine__25735__auto__ = function(state_27353){
switch(arguments.length){
case 0:
return dcs$prototype_6$state$state_machine__25735__auto____0.call(this);
case 1:
return dcs$prototype_6$state$state_machine__25735__auto____1.call(this,state_27353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$state$state_machine__25735__auto____0;
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$state$state_machine__25735__auto____1;
return dcs$prototype_6$state$state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_27360 = f__25758__auto__();
(statearr_27360[(6)] = c__25757__auto___27424);

return statearr_27360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

console.log("load household-co2e");
var c__25757__auto___27428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (1))){
var inst_27361 = cljs_http.client.get("household-co2e.json");
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27373__$1,(2),inst_27361);
} else {
if((state_val_27374 === (2))){
var inst_27363 = (state_27373[(2)]);
var inst_27364 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27363);
var inst_27365 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27363);
var inst_27366 = ["household-co2e, status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27364),", success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27365)].join('');
var inst_27367 = console.log(inst_27366);
var inst_27368 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27363);
var inst_27369 = dcs.prototype_6.data_shaping.rollup_household_co2e_regions(inst_27368);
var inst_27370 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_27368,inst_27369);
var inst_27371 = cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_holder,inst_27370);
var state_27373__$1 = (function (){var statearr_27375 = state_27373;
(statearr_27375[(7)] = inst_27367);

return statearr_27375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27373__$1,inst_27371);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$state$state_machine__25735__auto__ = null;
var dcs$prototype_6$state$state_machine__25735__auto____0 = (function (){
var statearr_27376 = [null,null,null,null,null,null,null,null];
(statearr_27376[(0)] = dcs$prototype_6$state$state_machine__25735__auto__);

(statearr_27376[(1)] = (1));

return statearr_27376;
});
var dcs$prototype_6$state$state_machine__25735__auto____1 = (function (state_27373){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_27373);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e27377){var ex__25738__auto__ = e27377;
var statearr_27378_27429 = state_27373;
(statearr_27378_27429[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_27373[(4)]))){
var statearr_27379_27430 = state_27373;
(statearr_27379_27430[(1)] = cljs.core.first((state_27373[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27431 = state_27373;
state_27373 = G__27431;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
dcs$prototype_6$state$state_machine__25735__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return dcs$prototype_6$state$state_machine__25735__auto____0.call(this);
case 1:
return dcs$prototype_6$state$state_machine__25735__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$state$state_machine__25735__auto____0;
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$state$state_machine__25735__auto____1;
return dcs$prototype_6$state$state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_27380 = f__25758__auto__();
(statearr_27380[(6)] = c__25757__auto___27428);

return statearr_27380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

console.log("load business-waste-by-region");
var c__25757__auto___27432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_27393){
var state_val_27394 = (state_27393[(1)]);
if((state_val_27394 === (1))){
var inst_27381 = cljs_http.client.get("business-waste-by-region.json");
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27393__$1,(2),inst_27381);
} else {
if((state_val_27394 === (2))){
var inst_27383 = (state_27393[(2)]);
var inst_27384 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27383);
var inst_27385 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27383);
var inst_27386 = ["business-waste-by-region, status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27384),", success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27385)].join('');
var inst_27387 = console.log(inst_27386);
var inst_27388 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27383);
var inst_27389 = dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions(inst_27388);
var inst_27390 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_27388,inst_27389);
var inst_27391 = cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_holder,inst_27390);
var state_27393__$1 = (function (){var statearr_27395 = state_27393;
(statearr_27395[(7)] = inst_27387);

return statearr_27395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27393__$1,inst_27391);
} else {
return null;
}
}
});
return (function() {
var dcs$prototype_6$state$state_machine__25735__auto__ = null;
var dcs$prototype_6$state$state_machine__25735__auto____0 = (function (){
var statearr_27396 = [null,null,null,null,null,null,null,null];
(statearr_27396[(0)] = dcs$prototype_6$state$state_machine__25735__auto__);

(statearr_27396[(1)] = (1));

return statearr_27396;
});
var dcs$prototype_6$state$state_machine__25735__auto____1 = (function (state_27393){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_27393);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e27397){var ex__25738__auto__ = e27397;
var statearr_27398_27433 = state_27393;
(statearr_27398_27433[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_27393[(4)]))){
var statearr_27399_27434 = state_27393;
(statearr_27399_27434[(1)] = cljs.core.first((state_27393[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27435 = state_27393;
state_27393 = G__27435;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
dcs$prototype_6$state$state_machine__25735__auto__ = function(state_27393){
switch(arguments.length){
case 0:
return dcs$prototype_6$state$state_machine__25735__auto____0.call(this);
case 1:
return dcs$prototype_6$state$state_machine__25735__auto____1.call(this,state_27393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$state$state_machine__25735__auto____0;
dcs$prototype_6$state$state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$state$state_machine__25735__auto____1;
return dcs$prototype_6$state$state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_27400 = f__25758__auto__();
(statearr_27400[(6)] = c__25757__auto___27432);

return statearr_27400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

dcs.prototype_6.state.maybe_calc_household_waste_derivations = (function dcs$prototype_6$state$maybe_calc_household_waste_derivations(){
var household_waste = cljs.core.deref(dcs.prototype_6.state.household_waste_holder);
var population = cljs.core.deref(dcs.prototype_6.state.population_holder);
if((((!((household_waste == null)))) && ((!((population == null)))))){
console.log("calculating household-waste-derivations");

var household_waste_derivation_generation0 = dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management(household_waste);
var household_waste_derivation_management0 = dcs.prototype_6.data_shaping.rollup_household_waste_materials(household_waste);
var household_waste_derivation_composition0 = dcs.prototype_6.data_shaping.rollup_household_waste_managements(household_waste);
var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population);
var lookup_population = (function (region,year){
return new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,year], null))));
});
var household_waste_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27401){
var map__27402 = p__27401;
var map__27402__$1 = (((((!((map__27402 == null))))?(((((map__27402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27402):map__27402);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27402__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27402__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27402__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_generation0);
var household_waste_derivation_management = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27404){
var map__27405 = p__27404;
var map__27405__$1 = (((((!((map__27405 == null))))?(((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27405):map__27405);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27405__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27405__$1,new cljs.core.Keyword(null,"year","year",335913393));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27405__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27405__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_management0);
var household_waste_derivation_composition = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27407){
var map__27408 = p__27407;
var map__27408__$1 = (((((!((map__27408 == null))))?(((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27408):map__27408);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27408__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27408__$1,new cljs.core.Keyword(null,"year","year",335913393));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27408__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27408__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_waste_derivation_composition0);
var household_waste_derivation_percent_recycled = dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled(household_waste);
cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_generation_holder,household_waste_derivation_generation);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_percent_recycled_holder,household_waste_derivation_percent_recycled);

cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_management_holder,household_waste_derivation_management);

return cljs.core.reset_BANG_(dcs.prototype_6.state.household_waste_derivation_composition_holder,household_waste_derivation_composition);
} else {
return null;
}
});
dcs.prototype_6.state.maybe_calc_household_co2e_derivation = (function dcs$prototype_6$state$maybe_calc_household_co2e_derivation(){
var household_co2e = cljs.core.deref(dcs.prototype_6.state.household_co2e_holder);
var population = cljs.core.deref(dcs.prototype_6.state.population_holder);
if((((!((household_co2e == null)))) && ((!((population == null)))))){
console.log("calculating household-co2e-derivation");

var population_for_lookup = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),population);
var lookup_population = (function (region,year){
return new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(population_for_lookup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [region,year], null))));
});
var household_co2e_derivation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27410){
var map__27411 = p__27410;
var map__27411__$1 = (((((!((map__27411 == null))))?(((((map__27411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27411):map__27411);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27411__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27411__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27411__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / lookup_population(region,year))], null);
}),household_co2e);
return cljs.core.reset_BANG_(dcs.prototype_6.state.household_co2e_derivation_holder,household_co2e_derivation);
} else {
return null;
}
});
dcs.prototype_6.state.maybe_calc_business_waste_by_region_derivations = (function dcs$prototype_6$state$maybe_calc_business_waste_by_region_derivations(){
var business_waste_by_region = cljs.core.deref(dcs.prototype_6.state.business_waste_by_region_holder);
if((!((business_waste_by_region == null)))){
} else {
}

console.log("calculating business-waste-by-region-derivations");

var region_count = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),business_waste_by_region)));
var business_waste_by_region_derivation_generation0 = dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials(business_waste_by_region);
var business_waste_by_region_derivation_generation = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27413){
var map__27414 = p__27413;
var map__27414__$1 = (((((!((map__27414 == null))))?(((((map__27414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27414):map__27414);
var original = map__27414__$1;
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27414__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27414__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27414__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",region)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland average",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes / region_count)], null);
} else {
return original;
}
}),business_waste_by_region_derivation_generation0);
var business_waste_by_region_derivation_composition = business_waste_by_region;
cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_derivation_generation_holder,business_waste_by_region_derivation_generation);

return cljs.core.reset_BANG_(dcs.prototype_6.state.business_waste_by_region_derivation_composition_holder,business_waste_by_region_derivation_composition);
});
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"household-waste-derivations-dependency","household-waste-derivations-dependency",1237970348),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.state.maybe_calc_household_waste_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.population_holder,new cljs.core.Keyword(null,"household-co2e-derivation-dependency","household-co2e-derivation-dependency",1258774414),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.state.maybe_calc_household_co2e_derivation();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_waste_holder,new cljs.core.Keyword(null,"household-waste-derivations-dependency","household-waste-derivations-dependency",1237970348),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.state.maybe_calc_household_waste_derivations();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.household_co2e_holder,new cljs.core.Keyword(null,"household-co2e-derivation-dependency","household-co2e-derivation-dependency",1258774414),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.state.maybe_calc_household_co2e_derivation();
} else {
return null;
}
}));
cljs.core.add_watch(dcs.prototype_6.state.business_waste_by_region_holder,new cljs.core.Keyword(null,"business-waste-by-region-derivations-dependency","business-waste-by-region-derivations-dependency",869918158),(function (_key,_atom,old_state,new_state){
if(cljs.core.truth_(new_state)){
return dcs.prototype_6.state.maybe_calc_business_waste_by_region_derivations();
} else {
return null;
}
}));

//# sourceMappingURL=dcs.prototype_6.state.js.map
