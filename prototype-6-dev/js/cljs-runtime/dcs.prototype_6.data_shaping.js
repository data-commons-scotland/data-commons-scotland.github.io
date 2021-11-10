goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49604){
var vec__49605 = p__49604;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49608){
var vec__49609 = p__49608;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49609,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49609,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49612){
var vec__49613 = p__49612;
var vec__49616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49613,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49616,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49616,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49616,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49613,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste(household_waste_scotland){
if(cljs.core.every_QMARK_((function (p1__49619_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__49619_SHARP_));
}),household_waste_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__49619#] (= \"Scotland\" (:region p1__49619#))) household-waste-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__49620_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__49620_SHARP_));
}),household_waste_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__49620#] (= 2011 (:year p1__49620#))) household-waste-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49621_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__49621_SHARP_));
}),household_waste_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__49622(s__49623){
return (new cljs.core.LazySeq(null,(function (){
var s__49623__$1 = s__49623;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49623__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__49623__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__49622_$_iter__49624(s__49625){
return (new cljs.core.LazySeq(null,((function (s__49623__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__49625__$1 = s__49625;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49625__$1);
if(temp__5735__auto____$1){
var s__49625__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49625__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49625__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49627 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49626 = (0);
while(true){
if((i__49626 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__49626);
cljs.core.chunk_append(b__49627,(function (){var map__49628 = record_2011;
var map__49628__$1 = cljs.core.__destructure_map(map__49628);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__49805 = (i__49626 + (1));
i__49626 = G__49805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49627),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__49622_$_iter__49624(cljs.core.chunk_rest(s__49625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49627),null);
}
} else {
var year = cljs.core.first(s__49625__$2);
return cljs.core.cons((function (){var map__49629 = record_2011;
var map__49629__$1 = cljs.core.__destructure_map(map__49629);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__49622_$_iter__49624(cljs.core.rest(s__49625__$2)));
}
} else {
return null;
}
break;
}
});})(s__49623__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__49623__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__49622(cljs.core.rest(s__49623__$1)));
} else {
var G__49806 = cljs.core.rest(s__49623__$1);
s__49623__$1 = G__49806;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49630){
var vec__49631 = p__49630;
var vec__49634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49631,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49634,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49634,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49631,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_business_waste_by_region = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region(business_waste_by_region_scotland){
if(cljs.core.every_QMARK_((function (p1__49637_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__49637_SHARP_));
}),business_waste_by_region_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__49637#] (= \"Scotland\" (:region p1__49637#))) business-waste-by-region-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__49638_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__49638_SHARP_));
}),business_waste_by_region_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__49638#] (= 2011 (:year p1__49638#))) business-waste-by-region-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49639_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__49639_SHARP_));
}),business_waste_by_region_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),business_waste_by_region_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__49640(s__49641){
return (new cljs.core.LazySeq(null,(function (){
var s__49641__$1 = s__49641;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49641__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__49641__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__49640_$_iter__49642(s__49643){
return (new cljs.core.LazySeq(null,((function (s__49641__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__49643__$1 = s__49643;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49643__$1);
if(temp__5735__auto____$1){
var s__49643__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49643__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49643__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49645 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49644 = (0);
while(true){
if((i__49644 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__49644);
cljs.core.chunk_append(b__49645,(function (){var map__49646 = record_2011;
var map__49646__$1 = cljs.core.__destructure_map(map__49646);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__49841 = (i__49644 + (1));
i__49644 = G__49841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49645),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__49640_$_iter__49642(cljs.core.chunk_rest(s__49643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49645),null);
}
} else {
var year = cljs.core.first(s__49643__$2);
return cljs.core.cons((function (){var map__49647 = record_2011;
var map__49647__$1 = cljs.core.__destructure_map(map__49647);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49647__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49647__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__49640_$_iter__49642(cljs.core.rest(s__49643__$2)));
}
} else {
return null;
}
break;
}
});})(s__49641__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__49641__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__49640(cljs.core.rest(s__49641__$1)));
} else {
var G__49843 = cljs.core.rest(s__49641__$1);
s__49641__$1 = G__49843;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49648){
var vec__49649 = p__49648;
var vec__49652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49649,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49652,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49652,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49649,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49655){
var vec__49656 = p__49655;
var vec__49659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49656,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49659,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49659,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49659,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49656,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49662){
var vec__49663 = p__49662;
var vec__49666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49663,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49666,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49666,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49666,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49663,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49670){
var vec__49671 = p__49670;
var vec__49674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49674,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49674,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49669_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__49669_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled(household_waste_percentage_recycled_scotland){
if(cljs.core.every_QMARK_((function (p1__49677_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__49677_SHARP_));
}),household_waste_percentage_recycled_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__49677#] (= \"Scotland\" (:region p1__49677#))) household-waste-percentage-recycled-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__49678_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__49678_SHARP_));
}),household_waste_percentage_recycled_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__49678#] (= 2011 (:year p1__49678#))) household-waste-percentage-recycled-scotland)"].join('')));
}

var record_2011 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49679_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__49679_SHARP_));
}),household_waste_percentage_recycled_scotland));
var percentage_2011 = new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(record_2011);
var per_year_change = (((70) - percentage_2011) / ((2025) - (2011)));
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_percentage_recycled_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__49680(s__49681){
return (new cljs.core.LazySeq(null,(function (){
var s__49681__$1 = s__49681;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49681__$1);
if(temp__5735__auto__){
var s__49681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49681__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49681__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49683 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49682 = (0);
while(true){
if((i__49682 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__49682);
cljs.core.chunk_append(b__49683,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null));

var G__49869 = (i__49682 + (1));
i__49682 = G__49869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49683),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__49680(cljs.core.chunk_rest(s__49681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49683),null);
}
} else {
var year = cljs.core.first(s__49681__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__49680(cljs.core.rest(s__49681__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49684){
var vec__49685 = p__49684;
var vec__49688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49685,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49688,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49688,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49685,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49693){
var vec__49694 = p__49693;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49694,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49694,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49692_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__49692_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49691_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__49691_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49697){
var vec__49698 = p__49697;
var vec__49701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49698,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49701,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49701,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49701,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49698,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49704){
var vec__49705 = p__49704;
var vec__49708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49705,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49705,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49712){
var vec__49713 = p__49712;
var vec__49716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49713,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49713,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49711_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__49711_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49719_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__49719_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__49719_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49720_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__49720_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49721_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__49721_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__49721_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__49722_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49723_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__49723_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49724(s__49725){
return (new cljs.core.LazySeq(null,(function (){
var s__49725__$1 = s__49725;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49725__$1);
if(temp__5735__auto__){
var s__49725__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49725__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49725__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49727 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49726 = (0);
while(true){
if((i__49726 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__49726);
cljs.core.chunk_append(b__49727,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__49889 = (i__49726 + (1));
i__49726 = G__49889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49727),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49724(cljs.core.chunk_rest(s__49725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49727),null);
}
} else {
var from = cljs.core.first(s__49725__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49724(cljs.core.rest(s__49725__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49728(s__49729){
return (new cljs.core.LazySeq(null,(function (){
var s__49729__$1 = s__49729;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49729__$1);
if(temp__5735__auto__){
var s__49729__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49729__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49729__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49731 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49730 = (0);
while(true){
if((i__49730 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__49730);
cljs.core.chunk_append(b__49731,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__49890 = (i__49730 + (1));
i__49730 = G__49890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49731),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49728(cljs.core.chunk_rest(s__49729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49731),null);
}
} else {
var from = cljs.core.first(s__49729__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49728(cljs.core.rest(s__49729__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49732(s__49733){
return (new cljs.core.LazySeq(null,(function (){
var s__49733__$1 = s__49733;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49733__$1);
if(temp__5735__auto__){
var s__49733__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49733__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49733__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49735 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49734 = (0);
while(true){
if((i__49734 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__49734);
cljs.core.chunk_append(b__49735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__49898 = (i__49734 + (1));
i__49734 = G__49898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49735),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49732(cljs.core.chunk_rest(s__49733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49735),null);
}
} else {
var to = cljs.core.first(s__49733__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__49732(cljs.core.rest(s__49733__$2)));
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
var comparator = (function (p__49736,p__49737){
var vec__49738 = p__49736;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49738,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49738,(1),null);
var vec__49741 = p__49737;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49741,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49741,(1),null);
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
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49747){
var vec__49748 = p__49747;
var vec__49751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49748,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49751,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49751,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49748,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__49754(s__49755){
return (new cljs.core.LazySeq(null,(function (){
var s__49755__$1 = s__49755;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49755__$1);
if(temp__5735__auto__){
var s__49755__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49755__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49755__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49757 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49756 = (0);
while(true){
if((i__49756 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__49756);
cljs.core.chunk_append(b__49757,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49756,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__49757,s__49755__$2,temp__5735__auto__,vec__49748,vec__49751,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__49744_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__49744_SHARP_));
});})(i__49756,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__49757,s__49755__$2,temp__5735__auto__,vec__49748,vec__49751,category,item,coll,yyyy_MM_dds,month_counts))
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

var G__49903 = (i__49756 + (1));
i__49756 = G__49903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49757),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__49754(cljs.core.chunk_rest(s__49755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49757),null);
}
} else {
var x = cljs.core.first(s__49755__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__49755__$2,temp__5735__auto__,vec__49748,vec__49751,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__49744_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__49744_SHARP_));
});})(yyyy_MM_dd,x,s__49755__$2,temp__5735__auto__,vec__49748,vec__49751,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__49754(cljs.core.rest(s__49755__$2)));
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
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49758){
var vec__49759 = p__49758;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49762){
var map__49763 = p__49762;
var map__49763__$1 = cljs.core.__destructure_map(map__49763);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49763__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49763__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49745_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49745_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49764){
var vec__49765 = p__49764;
var vec__49768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49765,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49768,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49768,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49768,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49765,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49771){
var vec__49772 = p__49771;
var vec__49775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49772,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49775,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49775,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49772,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49778){
var map__49779 = p__49778;
var map__49779__$1 = cljs.core.__destructure_map(map__49779);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49746_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49746_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});
dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth = (function dcs$prototype_6$data_shaping$calc_ace_furniture_flights_worth(sold_weights,furniture_to_scottishCarbonMetric,co2e_multiplier){
var furniture__GT_material = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49780){
var map__49781 = p__49780;
var map__49781__$1 = cljs.core.__destructure_map(map__49781);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49781__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49781__$1,new cljs.core.Keyword(null,"item","item",249373802));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49781__$1,new cljs.core.Keyword(null,"material","material",460118677));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null),material], null);
}),furniture_to_scottishCarbonMetric));
var material__GT_multiplier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49782){
var map__49783 = p__49782;
var map__49783__$1 = cljs.core.__destructure_map(map__49783);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"material","material",460118677));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material,multiplier], null);
}),co2e_multiplier));
var get_co2e_multiplier = (function (category,item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(material__GT_multiplier,cljs.core.get.cljs$core$IFn$_invoke$arity$2(furniture__GT_material,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null)));
});
var sold_weights_with_co2es = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49784){
var map__49785 = p__49784;
var map__49785__$1 = cljs.core.__destructure_map(map__49785);
var m = map__49785__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"item","item",249373802));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"co2e","co2e",1991479358),(weight * get_co2e_multiplier(category,item)));
}),sold_weights);
var flights_per_category = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49786){
var map__49787 = p__49786;
var map__49787__$1 = cljs.core.__destructure_map(map__49787);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49788){
var map__49789 = p__49788;
var map__49789__$1 = cljs.core.__destructure_map(map__49789);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49789__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49789__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49790){
var vec__49791 = p__49790;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49791,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49791,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),sold_weights_with_co2es)))));
var flights_per_item = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49794){
var map__49795 = p__49794;
var map__49795__$1 = cljs.core.__destructure_map(map__49795);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49795__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49795__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49795__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49795__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49796){
var map__49797 = p__49796;
var map__49797__$1 = cljs.core.__destructure_map(map__49797);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49797__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49797__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49797__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49798){
var vec__49799 = p__49798;
var vec__49802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49799,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49802,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49802,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49799,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_weights_with_co2es)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flights_per_category,flights_per_item], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
