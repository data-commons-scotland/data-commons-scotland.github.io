goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__25579__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25580__auto__ = (function (){var switch__25556__auto__ = (function (state_28192){
var state_val_28193 = (state_28192[(1)]);
if((state_val_28193 === (1))){
var inst_28170 = dcs.prototype_6.util.now();
var inst_28171 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28172 = [false];
var inst_28173 = cljs.core.PersistentHashMap.fromArrays(inst_28171,inst_28172);
var inst_28174 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28173], 0));
var state_28192__$1 = (function (){var statearr_28194 = state_28192;
(statearr_28194[(7)] = inst_28170);

return statearr_28194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28192__$1,(2),inst_28174);
} else {
if((state_val_28193 === (2))){
var inst_28170 = (state_28192[(7)]);
var inst_28182 = (state_28192[(8)]);
var inst_28176 = (state_28192[(2)]);
var inst_28177 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_28176);
var inst_28178 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_28176);
var inst_28179 = dcs.prototype_6.util.secs_to_now(inst_28170);
var inst_28180 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28177)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28178)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28179)].join('');
var inst_28181 = console.log(inst_28180);
var inst_28182__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28176);
var inst_28183 = typeof inst_28182__$1 === 'string';
var state_28192__$1 = (function (){var statearr_28195 = state_28192;
(statearr_28195[(9)] = inst_28181);

(statearr_28195[(8)] = inst_28182__$1);

return statearr_28195;
})();
if(cljs.core.truth_(inst_28183)){
var statearr_28196_28205 = state_28192__$1;
(statearr_28196_28205[(1)] = (3));

} else {
var statearr_28197_28206 = state_28192__$1;
(statearr_28197_28206[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (3))){
var inst_28182 = (state_28192[(8)]);
var inst_28185 = JSON.parse(inst_28182);
var inst_28186 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_28185,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_28192__$1 = state_28192;
var statearr_28198_28207 = state_28192__$1;
(statearr_28198_28207[(2)] = inst_28186);

(statearr_28198_28207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (4))){
var inst_28182 = (state_28192[(8)]);
var state_28192__$1 = state_28192;
var statearr_28199_28208 = state_28192__$1;
(statearr_28199_28208[(2)] = inst_28182);

(statearr_28199_28208[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (5))){
var inst_28189 = (state_28192[(2)]);
var inst_28190 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_28189) : body_handler.call(null,inst_28189));
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28192__$1,inst_28190);
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
var statearr_28200 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28200[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__);

(statearr_28200[(1)] = (1));

return statearr_28200;
});
var dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1 = (function (state_28192){
while(true){
var ret_value__25558__auto__ = (function (){try{while(true){
var result__25559__auto__ = switch__25556__auto__(state_28192);
if(cljs.core.keyword_identical_QMARK_(result__25559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25559__auto__;
}
break;
}
}catch (e28201){var ex__25560__auto__ = e28201;
var statearr_28202_28209 = state_28192;
(statearr_28202_28209[(2)] = ex__25560__auto__);


if(cljs.core.seq((state_28192[(4)]))){
var statearr_28203_28210 = state_28192;
(statearr_28203_28210[(1)] = cljs.core.first((state_28192[(4)])));

} else {
throw ex__25560__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28211 = state_28192;
state_28192 = G__28211;
continue;
} else {
return ret_value__25558__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__ = function(state_28192){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1.call(this,state_28192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__25557__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__25557__auto__;
})()
})();
var state__25581__auto__ = (function (){var statearr_28204 = f__25580__auto__();
(statearr_28204[(6)] = c__25579__auto__);

return statearr_28204;
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
