goog.provide('dcs.prototype_6.loader');
dcs.prototype_6.loader.fetch = (function dcs$prototype_6$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__29079__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29080__auto__ = (function (){var switch__29041__auto__ = (function (state_34683){
var state_val_34684 = (state_34683[(1)]);
if((state_val_34684 === (1))){
var inst_34637 = dcs.prototype_6.util.now();
var inst_34642 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_34643 = [false];
var inst_34644 = cljs.core.PersistentHashMap.fromArrays(inst_34642,inst_34643);
var inst_34646 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34644], 0));
var state_34683__$1 = (function (){var statearr_34695 = state_34683;
(statearr_34695[(7)] = inst_34637);

return statearr_34695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34683__$1,(2),inst_34646);
} else {
if((state_val_34684 === (2))){
var inst_34667 = (state_34683[(8)]);
var inst_34637 = (state_34683[(7)]);
var inst_34654 = (state_34683[(2)]);
var inst_34662 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_34654);
var inst_34663 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_34654);
var inst_34664 = dcs.prototype_6.util.secs_to_now(inst_34637);
var inst_34665 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34662)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34663)," secs-taken=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34664)].join('');
var inst_34666 = console.log(inst_34665);
var inst_34667__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_34654);
var inst_34668 = typeof inst_34667__$1 === 'string';
var state_34683__$1 = (function (){var statearr_34696 = state_34683;
(statearr_34696[(9)] = inst_34666);

(statearr_34696[(8)] = inst_34667__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34668)){
var statearr_34697_34759 = state_34683__$1;
(statearr_34697_34759[(1)] = (3));

} else {
var statearr_34698_34760 = state_34683__$1;
(statearr_34698_34760[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (3))){
var inst_34667 = (state_34683[(8)]);
var inst_34670 = JSON.parse(inst_34667);
var inst_34671 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_34670,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_34683__$1 = state_34683;
var statearr_34703_34770 = state_34683__$1;
(statearr_34703_34770[(2)] = inst_34671);

(statearr_34703_34770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (4))){
var inst_34667 = (state_34683[(8)]);
var state_34683__$1 = state_34683;
var statearr_34704_34771 = state_34683__$1;
(statearr_34704_34771[(2)] = inst_34667);

(statearr_34704_34771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34684 === (5))){
var inst_34674 = (state_34683[(2)]);
var inst_34675 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_34674) : body_handler.call(null,inst_34674));
var state_34683__$1 = state_34683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34683__$1,inst_34675);
} else {
return null;
}
}
}
}
}
});
return (function() {
var dcs$prototype_6$loader$fetch_$_state_machine__29042__auto__ = null;
var dcs$prototype_6$loader$fetch_$_state_machine__29042__auto____0 = (function (){
var statearr_34710 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34710[(0)] = dcs$prototype_6$loader$fetch_$_state_machine__29042__auto__);

(statearr_34710[(1)] = (1));

return statearr_34710;
});
var dcs$prototype_6$loader$fetch_$_state_machine__29042__auto____1 = (function (state_34683){
while(true){
var ret_value__29043__auto__ = (function (){try{while(true){
var result__29044__auto__ = switch__29041__auto__(state_34683);
if(cljs.core.keyword_identical_QMARK_(result__29044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29044__auto__;
}
break;
}
}catch (e34726){var ex__29045__auto__ = e34726;
var statearr_34727_34783 = state_34683;
(statearr_34727_34783[(2)] = ex__29045__auto__);


if(cljs.core.seq((state_34683[(4)]))){
var statearr_34730_34784 = state_34683;
(statearr_34730_34784[(1)] = cljs.core.first((state_34683[(4)])));

} else {
throw ex__29045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34785 = state_34683;
state_34683 = G__34785;
continue;
} else {
return ret_value__29043__auto__;
}
break;
}
});
dcs$prototype_6$loader$fetch_$_state_machine__29042__auto__ = function(state_34683){
switch(arguments.length){
case 0:
return dcs$prototype_6$loader$fetch_$_state_machine__29042__auto____0.call(this);
case 1:
return dcs$prototype_6$loader$fetch_$_state_machine__29042__auto____1.call(this,state_34683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$prototype_6$loader$fetch_$_state_machine__29042__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$prototype_6$loader$fetch_$_state_machine__29042__auto____0;
dcs$prototype_6$loader$fetch_$_state_machine__29042__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$prototype_6$loader$fetch_$_state_machine__29042__auto____1;
return dcs$prototype_6$loader$fetch_$_state_machine__29042__auto__;
})()
})();
var state__29081__auto__ = (function (){var statearr_34747 = f__29080__auto__();
(statearr_34747[(6)] = c__29079__auto__);

return statearr_34747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29081__auto__);
}));

return c__29079__auto__;
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
