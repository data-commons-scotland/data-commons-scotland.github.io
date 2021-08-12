goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117238){
var vec__117239 = p__117238;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117239,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117239,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"population","population",-1209901867),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"population","population",-1209901867),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117242){
var vec__117243 = p__117242;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117243,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117243,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117246){
var vec__117247 = p__117246;
var vec__117250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117247,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117250,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117250,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117250,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117247,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste(household_waste_scotland){
if(cljs.core.every_QMARK_((function (p1__117253_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__117253_SHARP_));
}),household_waste_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__117253#] (= \"Scotland\" (:region p1__117253#))) household-waste-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__117254_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__117254_SHARP_));
}),household_waste_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__117254#] (= 2011 (:year p1__117254#))) household-waste-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117255_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__117255_SHARP_));
}),household_waste_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__117256(s__117257){
return (new cljs.core.LazySeq(null,(function (){
var s__117257__$1 = s__117257;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117257__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__117257__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__117256_$_iter__117258(s__117259){
return (new cljs.core.LazySeq(null,((function (s__117257__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__117259__$1 = s__117259;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__117259__$1);
if(temp__5735__auto____$1){
var s__117259__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117259__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117259__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117261 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117260 = (0);
while(true){
if((i__117260 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__117260);
cljs.core.chunk_append(b__117261,(function (){var map__117262 = record_2011;
var map__117262__$1 = cljs.core.__destructure_map(map__117262);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117262__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117262__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117262__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__117439 = (i__117260 + (1));
i__117260 = G__117439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117261),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__117256_$_iter__117258(cljs.core.chunk_rest(s__117259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117261),null);
}
} else {
var year = cljs.core.first(s__117259__$2);
return cljs.core.cons((function (){var map__117263 = record_2011;
var map__117263__$1 = cljs.core.__destructure_map(map__117263);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117263__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117263__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117263__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__117256_$_iter__117258(cljs.core.rest(s__117259__$2)));
}
} else {
return null;
}
break;
}
});})(s__117257__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__117257__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__117256(cljs.core.rest(s__117257__$1)));
} else {
var G__117440 = cljs.core.rest(s__117257__$1);
s__117257__$1 = G__117440;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(records_2011);
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_regions = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_regions(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117264){
var vec__117265 = p__117264;
var vec__117268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117265,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117268,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117268,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117265,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_business_waste_by_region = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region(business_waste_by_region_scotland){
if(cljs.core.every_QMARK_((function (p1__117271_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__117271_SHARP_));
}),business_waste_by_region_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__117271#] (= \"Scotland\" (:region p1__117271#))) business-waste-by-region-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__117272_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__117272_SHARP_));
}),business_waste_by_region_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__117272#] (= 2011 (:year p1__117272#))) business-waste-by-region-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117273_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__117273_SHARP_));
}),business_waste_by_region_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),business_waste_by_region_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__117274(s__117275){
return (new cljs.core.LazySeq(null,(function (){
var s__117275__$1 = s__117275;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117275__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__117275__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__117274_$_iter__117276(s__117277){
return (new cljs.core.LazySeq(null,((function (s__117275__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__117277__$1 = s__117277;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__117277__$1);
if(temp__5735__auto____$1){
var s__117277__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117277__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117277__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117279 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117278 = (0);
while(true){
if((i__117278 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__117278);
cljs.core.chunk_append(b__117279,(function (){var map__117280 = record_2011;
var map__117280__$1 = cljs.core.__destructure_map(map__117280);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117280__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117280__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__117476 = (i__117278 + (1));
i__117278 = G__117476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117279),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__117274_$_iter__117276(cljs.core.chunk_rest(s__117277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117279),null);
}
} else {
var year = cljs.core.first(s__117277__$2);
return cljs.core.cons((function (){var map__117281 = record_2011;
var map__117281__$1 = cljs.core.__destructure_map(map__117281);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117281__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117281__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__117274_$_iter__117276(cljs.core.rest(s__117277__$2)));
}
} else {
return null;
}
break;
}
});})(s__117275__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__117275__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__117274(cljs.core.rest(s__117275__$1)));
} else {
var G__117488 = cljs.core.rest(s__117275__$1);
s__117275__$1 = G__117488;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(records_2011);
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials_and_management = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials_and_management(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117282){
var vec__117283 = p__117282;
var vec__117286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117283,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117286,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117286,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117283,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117289){
var vec__117290 = p__117289;
var vec__117293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117290,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117293,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117293,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117293,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117290,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117296){
var vec__117297 = p__117296;
var vec__117300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117297,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117300,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117300,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117300,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117297,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117304){
var vec__117305 = p__117304;
var vec__117308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117305,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117308,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117308,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117305,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117303_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__117303_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled(household_waste_percentage_recycled_scotland){
if(cljs.core.every_QMARK_((function (p1__117311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__117311_SHARP_));
}),household_waste_percentage_recycled_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__117311#] (= \"Scotland\" (:region p1__117311#))) household-waste-percentage-recycled-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__117312_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__117312_SHARP_));
}),household_waste_percentage_recycled_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__117312#] (= 2011 (:year p1__117312#))) household-waste-percentage-recycled-scotland)"].join('')));
}

var record_2011 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117313_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__117313_SHARP_));
}),household_waste_percentage_recycled_scotland));
var percentage_2011 = new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(record_2011);
var per_year_change = (((70) - percentage_2011) / ((2025) - (2011)));
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_percentage_recycled_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__117314(s__117315){
return (new cljs.core.LazySeq(null,(function (){
var s__117315__$1 = s__117315;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117315__$1);
if(temp__5735__auto__){
var s__117315__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117315__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117315__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117317 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117316 = (0);
while(true){
if((i__117316 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__117316);
cljs.core.chunk_append(b__117317,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null));

var G__117507 = (i__117316 + (1));
i__117316 = G__117507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117317),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__117314(cljs.core.chunk_rest(s__117315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117317),null);
}
} else {
var year = cljs.core.first(s__117315__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__117314(cljs.core.rest(s__117315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1))));
});
dcs.prototype_6.data_shaping.rollup_business_waste_by_region_materials = (function dcs$prototype_6$data_shaping$rollup_business_waste_by_region_materials(business_waste_by_region){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117318){
var vec__117319 = p__117318;
var vec__117322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117319,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117322,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117322,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117319,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117327){
var vec__117328 = p__117327;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117328,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117328,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117326_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__117326_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__117325_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__117325_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117331){
var vec__117332 = p__117331;
var vec__117335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117332,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117335,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117335,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117335,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117332,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117338){
var vec__117339 = p__117338;
var vec__117342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117339,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117342,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117342,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117342,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117342,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117339,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117346){
var vec__117347 = p__117346;
var vec__117350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117347,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117350,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117350,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117350,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117347,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117345_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__117345_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117353_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__117353_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__117353_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__117354_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__117354_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117355_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__117355_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__117355_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__117356_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__117356_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__117357_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__117357_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117358(s__117359){
return (new cljs.core.LazySeq(null,(function (){
var s__117359__$1 = s__117359;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117359__$1);
if(temp__5735__auto__){
var s__117359__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117359__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117359__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117361 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117360 = (0);
while(true){
if((i__117360 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__117360);
cljs.core.chunk_append(b__117361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__117523 = (i__117360 + (1));
i__117360 = G__117523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117361),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117358(cljs.core.chunk_rest(s__117359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117361),null);
}
} else {
var from = cljs.core.first(s__117359__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117358(cljs.core.rest(s__117359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(waste_sources);
})();
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117362(s__117363){
return (new cljs.core.LazySeq(null,(function (){
var s__117363__$1 = s__117363;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117363__$1);
if(temp__5735__auto__){
var s__117363__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117363__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117363__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117365 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117364 = (0);
while(true){
if((i__117364 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__117364);
cljs.core.chunk_append(b__117365,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__117531 = (i__117364 + (1));
i__117364 = G__117531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117365),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117362(cljs.core.chunk_rest(s__117363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117365),null);
}
} else {
var from = cljs.core.first(s__117363__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117362(cljs.core.rest(s__117363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(not_waste_sources);
})();
var subflows_2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not waste","Stirling Community Food",sum_subflows_tonnes(subflows_1b)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Would-be waste","Stirling Community Food",sum_subflows_tonnes(subflows_1a)], null)], null);
var subflows_3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Used as food",sum_counter_parties_tonnes(used_as_food_outcomes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stirling Community Food","Not used as food",sum_counter_parties_tonnes(not_used_as_food_outcomes)], null)], null);
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117366(s__117367){
return (new cljs.core.LazySeq(null,(function (){
var s__117367__$1 = s__117367;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117367__$1);
if(temp__5735__auto__){
var s__117367__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117367__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117367__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117369 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117368 = (0);
while(true){
if((i__117368 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__117368);
cljs.core.chunk_append(b__117369,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__117535 = (i__117368 + (1));
i__117368 = G__117535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117369),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117366(cljs.core.chunk_rest(s__117367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117369),null);
}
} else {
var to = cljs.core.first(s__117367__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__117366(cljs.core.rest(s__117367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(not_used_as_food_outcomes);
})();
var ordered_froms = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Purchased","Donated not waste","Local supermarkets","Fareshare","Donated as waste","Other","Not waste","Would-be waste","Stirling Community Food"], null);
var ordered_tos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Used as food","Not used as food","Donated to animal sanctuary","Used by individuals for compost","Council compost, Energen biogas, etc."], null);
var comparator = (function (p__117370,p__117371){
var vec__117372 = p__117370;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117372,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117372,(1),null);
var vec__117375 = p__117371;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117375,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117375,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a_from,b_from)){
return (ordered_froms.indexOf(a_from) < ordered_froms.indexOf(b_from));
} else {
return (ordered_tos.indexOf(a_to) < ordered_tos.indexOf(b_to));
}
});
var flow = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),comparator,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(subflows_1a,subflows_1b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subflows_2,subflows_3,subflows_4], 0)));
return flow;
});
dcs.prototype_6.data_shaping.calc_ace_furniture_trends = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends(sold_counts){
var yyyy_MM_dds = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2018-02-28","2019-02-28","2019-08-31"], null);
var month_counts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(12),(6)], null);
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117381){
var vec__117382 = p__117381;
var vec__117385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117382,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117385,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117385,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117382,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__117388(s__117389){
return (new cljs.core.LazySeq(null,(function (){
var s__117389__$1 = s__117389;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__117389__$1);
if(temp__5735__auto__){
var s__117389__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117389__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__117389__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__117391 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__117390 = (0);
while(true){
if((i__117390 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__117390);
cljs.core.chunk_append(b__117391,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__117390,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__117391,s__117389__$2,temp__5735__auto__,vec__117382,vec__117385,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__117378_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__117378_SHARP_));
});})(i__117390,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__117391,s__117389__$2,temp__5735__auto__,vec__117382,vec__117385,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})());

var G__117537 = (i__117390 + (1));
i__117390 = G__117537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117391),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__117388(cljs.core.chunk_rest(s__117389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117391),null);
}
} else {
var x = cljs.core.first(s__117389__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__117389__$2,temp__5735__auto__,vec__117382,vec__117385,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__117378_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__117378_SHARP_));
});})(yyyy_MM_dd,x,s__117389__$2,temp__5735__auto__,vec__117382,vec__117385,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__117388(cljs.core.rest(s__117389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_counts))));
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117392){
var vec__117393 = p__117392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117393,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117393,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117396){
var map__117397 = p__117396;
var map__117397__$1 = cljs.core.__destructure_map(map__117397);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117397__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117397__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__117379_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__117379_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117398){
var vec__117399 = p__117398;
var vec__117402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117399,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117402,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117402,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117402,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117399,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117405){
var vec__117406 = p__117405;
var vec__117409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117406,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117409,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117409,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117406,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117412){
var map__117413 = p__117412;
var map__117413__$1 = cljs.core.__destructure_map(map__117413);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117413__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117413__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__117380_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__117380_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});
dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth = (function dcs$prototype_6$data_shaping$calc_ace_furniture_flights_worth(sold_weights,furniture_to_waste_streams,co2e_multiplier){
var furniture__GT_waste_stream = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117414){
var map__117415 = p__117414;
var map__117415__$1 = cljs.core.__destructure_map(map__117415);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117415__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117415__$1,new cljs.core.Keyword(null,"item","item",249373802));
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117415__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null),waste_stream], null);
}),furniture_to_waste_streams));
var waste_stream__GT_multiplier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117416){
var map__117417 = p__117416;
var map__117417__$1 = cljs.core.__destructure_map(map__117417);
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117417__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117417__$1,new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [waste_stream,multiplier], null);
}),co2e_multiplier));
var get_co2e_multiplier = (function (category,item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(waste_stream__GT_multiplier,cljs.core.get.cljs$core$IFn$_invoke$arity$2(furniture__GT_waste_stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null)));
});
var sold_weights_with_co2es = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117418){
var map__117419 = p__117418;
var map__117419__$1 = cljs.core.__destructure_map(map__117419);
var m = map__117419__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117419__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117419__$1,new cljs.core.Keyword(null,"item","item",249373802));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117419__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"co2e","co2e",1991479358),(weight * get_co2e_multiplier(category,item)));
}),sold_weights);
var flights_per_category = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117420){
var map__117421 = p__117420;
var map__117421__$1 = cljs.core.__destructure_map(map__117421);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117421__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117421__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117421__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117422){
var map__117423 = p__117422;
var map__117423__$1 = cljs.core.__destructure_map(map__117423);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117423__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117423__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117424){
var vec__117425 = p__117424;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117425,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117425,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),sold_weights_with_co2es)))));
var flights_per_item = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117428){
var map__117429 = p__117428;
var map__117429__$1 = cljs.core.__destructure_map(map__117429);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117429__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117429__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117429__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117429__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117430){
var map__117431 = p__117430;
var map__117431__$1 = cljs.core.__destructure_map(map__117431);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117431__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117431__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117431__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__117432){
var vec__117433 = p__117432;
var vec__117436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117433,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117436,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117436,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117433,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_weights_with_co2es)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flights_per_category,flights_per_item], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
