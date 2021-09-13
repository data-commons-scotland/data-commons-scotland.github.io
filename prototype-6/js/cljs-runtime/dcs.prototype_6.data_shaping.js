goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33938){
var vec__33939 = p__33938;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33942){
var vec__33943 = p__33942;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33943,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33943,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33946){
var vec__33947 = p__33946;
var vec__33950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33947,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33950,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33950,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33950,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33947,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste(household_waste_scotland){
if(cljs.core.every_QMARK_((function (p1__33953_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__33953_SHARP_));
}),household_waste_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__33953#] (= \"Scotland\" (:region p1__33953#))) household-waste-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__33954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__33954_SHARP_));
}),household_waste_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__33954#] (= 2011 (:year p1__33954#))) household-waste-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33955_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__33955_SHARP_));
}),household_waste_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__33956(s__33957){
return (new cljs.core.LazySeq(null,(function (){
var s__33957__$1 = s__33957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33957__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__33957__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__33956_$_iter__33958(s__33959){
return (new cljs.core.LazySeq(null,((function (s__33957__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__33959__$1 = s__33959;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__33959__$1);
if(temp__5735__auto____$1){
var s__33959__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33959__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__33959__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__33961 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__33960 = (0);
while(true){
if((i__33960 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__33960);
cljs.core.chunk_append(b__33961,(function (){var map__33962 = record_2011;
var map__33962__$1 = cljs.core.__destructure_map(map__33962);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__34149 = (i__33960 + (1));
i__33960 = G__34149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33961),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__33956_$_iter__33958(cljs.core.chunk_rest(s__33959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33961),null);
}
} else {
var year = cljs.core.first(s__33959__$2);
return cljs.core.cons((function (){var map__33963 = record_2011;
var map__33963__$1 = cljs.core.__destructure_map(map__33963);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33963__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33963__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33963__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__33956_$_iter__33958(cljs.core.rest(s__33959__$2)));
}
} else {
return null;
}
break;
}
});})(s__33957__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__33957__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__33956(cljs.core.rest(s__33957__$1)));
} else {
var G__34151 = cljs.core.rest(s__33957__$1);
s__33957__$1 = G__34151;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33964){
var vec__33965 = p__33964;
var vec__33968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33968,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33968,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_business_waste_by_region = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region(business_waste_by_region_scotland){
if(cljs.core.every_QMARK_((function (p1__33971_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__33971_SHARP_));
}),business_waste_by_region_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__33971#] (= \"Scotland\" (:region p1__33971#))) business-waste-by-region-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__33972_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__33972_SHARP_));
}),business_waste_by_region_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__33972#] (= 2011 (:year p1__33972#))) business-waste-by-region-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33973_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__33973_SHARP_));
}),business_waste_by_region_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),business_waste_by_region_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__33974(s__33975){
return (new cljs.core.LazySeq(null,(function (){
var s__33975__$1 = s__33975;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33975__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__33975__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__33974_$_iter__33976(s__33977){
return (new cljs.core.LazySeq(null,((function (s__33975__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__33977__$1 = s__33977;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__33977__$1);
if(temp__5735__auto____$1){
var s__33977__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33977__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__33977__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__33979 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__33978 = (0);
while(true){
if((i__33978 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__33978);
cljs.core.chunk_append(b__33979,(function (){var map__33980 = record_2011;
var map__33980__$1 = cljs.core.__destructure_map(map__33980);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33980__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33980__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__34204 = (i__33978 + (1));
i__33978 = G__34204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33979),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__33974_$_iter__33976(cljs.core.chunk_rest(s__33977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33979),null);
}
} else {
var year = cljs.core.first(s__33977__$2);
return cljs.core.cons((function (){var map__33981 = record_2011;
var map__33981__$1 = cljs.core.__destructure_map(map__33981);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33981__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33981__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__33974_$_iter__33976(cljs.core.rest(s__33977__$2)));
}
} else {
return null;
}
break;
}
});})(s__33975__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__33975__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__33974(cljs.core.rest(s__33975__$1)));
} else {
var G__34208 = cljs.core.rest(s__33975__$1);
s__33975__$1 = G__34208;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33982){
var vec__33983 = p__33982;
var vec__33986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33989){
var vec__33990 = p__33989;
var vec__33993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33996){
var vec__33997 = p__33996;
var vec__34000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33997,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34000,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34000,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34000,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33997,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34004){
var vec__34005 = p__34004;
var vec__34008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34005,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34008,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34008,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34005,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34003_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__34003_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled(household_waste_percentage_recycled_scotland){
if(cljs.core.every_QMARK_((function (p1__34011_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__34011_SHARP_));
}),household_waste_percentage_recycled_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__34011#] (= \"Scotland\" (:region p1__34011#))) household-waste-percentage-recycled-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__34012_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__34012_SHARP_));
}),household_waste_percentage_recycled_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__34012#] (= 2011 (:year p1__34012#))) household-waste-percentage-recycled-scotland)"].join('')));
}

var record_2011 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__34013_SHARP_));
}),household_waste_percentage_recycled_scotland));
var percentage_2011 = new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(record_2011);
var per_year_change = (((70) - percentage_2011) / ((2025) - (2011)));
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_percentage_recycled_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__34014(s__34015){
return (new cljs.core.LazySeq(null,(function (){
var s__34015__$1 = s__34015;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34015__$1);
if(temp__5735__auto__){
var s__34015__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34015__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__34015__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__34017 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__34016 = (0);
while(true){
if((i__34016 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__34016);
cljs.core.chunk_append(b__34017,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null));

var G__34215 = (i__34016 + (1));
i__34016 = G__34215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34017),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__34014(cljs.core.chunk_rest(s__34015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34017),null);
}
} else {
var year = cljs.core.first(s__34015__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__34014(cljs.core.rest(s__34015__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34018){
var vec__34019 = p__34018;
var vec__34022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34022,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34022,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34027){
var vec__34028 = p__34027;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34026_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__34026_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__34025_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34031){
var vec__34032 = p__34031;
var vec__34035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34032,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34035,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34035,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34035,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34032,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34038){
var vec__34039 = p__34038;
var vec__34042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34039,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34039,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34046){
var vec__34047 = p__34046;
var vec__34050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34047,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34050,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34050,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34050,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34047,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34045_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__34045_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34053_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__34053_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__34053_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34054_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__34054_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34055_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__34055_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__34055_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34056_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__34056_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34057_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__34057_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34058(s__34059){
return (new cljs.core.LazySeq(null,(function (){
var s__34059__$1 = s__34059;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34059__$1);
if(temp__5735__auto__){
var s__34059__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34059__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__34059__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__34061 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__34060 = (0);
while(true){
if((i__34060 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__34060);
cljs.core.chunk_append(b__34061,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__34227 = (i__34060 + (1));
i__34060 = G__34227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34061),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34058(cljs.core.chunk_rest(s__34059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34061),null);
}
} else {
var from = cljs.core.first(s__34059__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34058(cljs.core.rest(s__34059__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34062(s__34063){
return (new cljs.core.LazySeq(null,(function (){
var s__34063__$1 = s__34063;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34063__$1);
if(temp__5735__auto__){
var s__34063__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34063__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__34063__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__34065 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__34064 = (0);
while(true){
if((i__34064 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__34064);
cljs.core.chunk_append(b__34065,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__34230 = (i__34064 + (1));
i__34064 = G__34230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34065),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34062(cljs.core.chunk_rest(s__34063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34065),null);
}
} else {
var from = cljs.core.first(s__34063__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34062(cljs.core.rest(s__34063__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34066(s__34067){
return (new cljs.core.LazySeq(null,(function (){
var s__34067__$1 = s__34067;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34067__$1);
if(temp__5735__auto__){
var s__34067__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34067__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__34067__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__34069 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__34068 = (0);
while(true){
if((i__34068 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__34068);
cljs.core.chunk_append(b__34069,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__34235 = (i__34068 + (1));
i__34068 = G__34235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34069),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34066(cljs.core.chunk_rest(s__34067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34069),null);
}
} else {
var to = cljs.core.first(s__34067__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__34066(cljs.core.rest(s__34067__$2)));
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
var comparator = (function (p__34070,p__34071){
var vec__34072 = p__34070;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34072,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34072,(1),null);
var vec__34075 = p__34071;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075,(1),null);
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
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34081){
var vec__34082 = p__34081;
var vec__34085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34082,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34085,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34085,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34082,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__34088(s__34089){
return (new cljs.core.LazySeq(null,(function (){
var s__34089__$1 = s__34089;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34089__$1);
if(temp__5735__auto__){
var s__34089__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34089__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__34089__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__34091 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__34090 = (0);
while(true){
if((i__34090 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__34090);
cljs.core.chunk_append(b__34091,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__34090,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__34091,s__34089__$2,temp__5735__auto__,vec__34082,vec__34085,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__34078_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__34078_SHARP_));
});})(i__34090,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__34091,s__34089__$2,temp__5735__auto__,vec__34082,vec__34085,category,item,coll,yyyy_MM_dds,month_counts))
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

var G__34240 = (i__34090 + (1));
i__34090 = G__34240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34091),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__34088(cljs.core.chunk_rest(s__34089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34091),null);
}
} else {
var x = cljs.core.first(s__34089__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__34089__$2,temp__5735__auto__,vec__34082,vec__34085,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__34078_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__34078_SHARP_));
});})(yyyy_MM_dd,x,s__34089__$2,temp__5735__auto__,vec__34082,vec__34085,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__34088(cljs.core.rest(s__34089__$2)));
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
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34092){
var vec__34093 = p__34092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34096){
var map__34097 = p__34096;
var map__34097__$1 = cljs.core.__destructure_map(map__34097);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34097__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34097__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34079_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34079_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34098){
var vec__34099 = p__34098;
var vec__34102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34099,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34102,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34102,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34102,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34099,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34105){
var vec__34106 = p__34105;
var vec__34109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34109,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34109,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34112){
var map__34113 = p__34112;
var map__34113__$1 = cljs.core.__destructure_map(map__34113);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34113__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34113__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34080_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34080_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});
dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth = (function dcs$prototype_6$data_shaping$calc_ace_furniture_flights_worth(sold_weights,furniture_to_waste_streams,co2e_multiplier){
var furniture__GT_waste_stream = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34114){
var map__34115 = p__34114;
var map__34115__$1 = cljs.core.__destructure_map(map__34115);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34115__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34115__$1,new cljs.core.Keyword(null,"item","item",249373802));
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34115__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null),waste_stream], null);
}),furniture_to_waste_streams));
var waste_stream__GT_multiplier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34116){
var map__34117 = p__34116;
var map__34117__$1 = cljs.core.__destructure_map(map__34117);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34117__$1,new cljs.core.Keyword(null,"material","material",460118677));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34117__$1,new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material,multiplier], null);
}),co2e_multiplier));
var get_co2e_multiplier = (function (category,item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(waste_stream__GT_multiplier,cljs.core.get.cljs$core$IFn$_invoke$arity$2(furniture__GT_waste_stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null)));
});
var sold_weights_with_co2es = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34118){
var map__34119 = p__34118;
var map__34119__$1 = cljs.core.__destructure_map(map__34119);
var m = map__34119__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34119__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34119__$1,new cljs.core.Keyword(null,"item","item",249373802));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34119__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"co2e","co2e",1991479358),(weight * get_co2e_multiplier(category,item)));
}),sold_weights);
var flights_per_category = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34120){
var map__34121 = p__34120;
var map__34121__$1 = cljs.core.__destructure_map(map__34121);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34121__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34121__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34121__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34122){
var map__34123 = p__34122;
var map__34123__$1 = cljs.core.__destructure_map(map__34123);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34123__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34123__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34124){
var vec__34125 = p__34124;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),sold_weights_with_co2es)))));
var flights_per_item = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34128){
var map__34129 = p__34128;
var map__34129__$1 = cljs.core.__destructure_map(map__34129);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34129__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34129__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34129__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34129__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34130){
var map__34131 = p__34130;
var map__34131__$1 = cljs.core.__destructure_map(map__34131);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34132){
var vec__34133 = p__34132;
var vec__34136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34133,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34133,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_weights_with_co2es)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flights_per_category,flights_per_item], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
