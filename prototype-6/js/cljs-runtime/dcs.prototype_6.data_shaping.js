goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37161){
var vec__37162 = p__37161;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37162,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37162,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37165){
var vec__37166 = p__37165;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37166,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37166,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37169){
var vec__37170 = p__37169;
var vec__37173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste(household_waste_scotland){
if(cljs.core.every_QMARK_((function (p1__37176_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__37176_SHARP_));
}),household_waste_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__37176#] (= \"Scotland\" (:region p1__37176#))) household-waste-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37177_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37177_SHARP_));
}),household_waste_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__37177#] (= 2011 (:year p1__37177#))) household-waste-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37178_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37178_SHARP_));
}),household_waste_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37179(s__37180){
return (new cljs.core.LazySeq(null,(function (){
var s__37180__$1 = s__37180;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37180__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__37180__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37179_$_iter__37181(s__37182){
return (new cljs.core.LazySeq(null,((function (s__37180__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__37182__$1 = s__37182;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37182__$1);
if(temp__5735__auto____$1){
var s__37182__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37182__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37182__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37184 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37183 = (0);
while(true){
if((i__37183 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__37183);
cljs.core.chunk_append(b__37184,(function (){var map__37185 = record_2011;
var map__37185__$1 = cljs.core.__destructure_map(map__37185);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37185__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37185__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37185__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__37396 = (i__37183 + (1));
i__37183 = G__37396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37184),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37179_$_iter__37181(cljs.core.chunk_rest(s__37182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37184),null);
}
} else {
var year = cljs.core.first(s__37182__$2);
return cljs.core.cons((function (){var map__37186 = record_2011;
var map__37186__$1 = cljs.core.__destructure_map(map__37186);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37179_$_iter__37181(cljs.core.rest(s__37182__$2)));
}
} else {
return null;
}
break;
}
});})(s__37180__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__37180__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37179(cljs.core.rest(s__37180__$1)));
} else {
var G__37404 = cljs.core.rest(s__37180__$1);
s__37180__$1 = G__37404;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37187){
var vec__37188 = p__37187;
var vec__37191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37191,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37191,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_business_waste_by_region = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region(business_waste_by_region_scotland){
if(cljs.core.every_QMARK_((function (p1__37194_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__37194_SHARP_));
}),business_waste_by_region_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__37194#] (= \"Scotland\" (:region p1__37194#))) business-waste-by-region-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37195_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37195_SHARP_));
}),business_waste_by_region_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__37195#] (= 2011 (:year p1__37195#))) business-waste-by-region-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37196_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37196_SHARP_));
}),business_waste_by_region_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),business_waste_by_region_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37197(s__37198){
return (new cljs.core.LazySeq(null,(function (){
var s__37198__$1 = s__37198;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37198__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__37198__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37197_$_iter__37199(s__37200){
return (new cljs.core.LazySeq(null,((function (s__37198__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__37200__$1 = s__37200;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37200__$1);
if(temp__5735__auto____$1){
var s__37200__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37200__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37200__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37202 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37201 = (0);
while(true){
if((i__37201 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__37201);
cljs.core.chunk_append(b__37202,(function (){var map__37203 = record_2011;
var map__37203__$1 = cljs.core.__destructure_map(map__37203);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__37419 = (i__37201 + (1));
i__37201 = G__37419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37202),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37197_$_iter__37199(cljs.core.chunk_rest(s__37200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37202),null);
}
} else {
var year = cljs.core.first(s__37200__$2);
return cljs.core.cons((function (){var map__37204 = record_2011;
var map__37204__$1 = cljs.core.__destructure_map(map__37204);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37197_$_iter__37199(cljs.core.rest(s__37200__$2)));
}
} else {
return null;
}
break;
}
});})(s__37198__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__37198__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37197(cljs.core.rest(s__37198__$1)));
} else {
var G__37425 = cljs.core.rest(s__37198__$1);
s__37198__$1 = G__37425;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37205){
var vec__37206 = p__37205;
var vec__37209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37206,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37206,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37212){
var vec__37213 = p__37212;
var vec__37216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37213,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37213,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37219){
var vec__37220 = p__37219;
var vec__37223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37227){
var vec__37228 = p__37227;
var vec__37231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__37226_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled(household_waste_percentage_recycled_scotland){
if(cljs.core.every_QMARK_((function (p1__37234_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__37234_SHARP_));
}),household_waste_percentage_recycled_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__37234#] (= \"Scotland\" (:region p1__37234#))) household-waste-percentage-recycled-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37235_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37235_SHARP_));
}),household_waste_percentage_recycled_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__37235#] (= 2011 (:year p1__37235#))) household-waste-percentage-recycled-scotland)"].join('')));
}

var record_2011 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37236_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37236_SHARP_));
}),household_waste_percentage_recycled_scotland));
var percentage_2011 = new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(record_2011);
var per_year_change = (((70) - percentage_2011) / ((2025) - (2011)));
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_percentage_recycled_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__37237(s__37238){
return (new cljs.core.LazySeq(null,(function (){
var s__37238__$1 = s__37238;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37238__$1);
if(temp__5735__auto__){
var s__37238__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37238__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37238__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37240 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37239 = (0);
while(true){
if((i__37239 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__37239);
cljs.core.chunk_append(b__37240,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null));

var G__37436 = (i__37239 + (1));
i__37239 = G__37436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37240),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__37237(cljs.core.chunk_rest(s__37238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37240),null);
}
} else {
var year = cljs.core.first(s__37238__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__37237(cljs.core.rest(s__37238__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37241){
var vec__37242 = p__37241;
var vec__37245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37250){
var vec__37251 = p__37250;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37251,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37251,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37249_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__37249_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37248_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__37248_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37254){
var vec__37255 = p__37254;
var vec__37258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37255,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37255,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37261){
var vec__37262 = p__37261;
var vec__37265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37262,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37262,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37269){
var vec__37270 = p__37269;
var vec__37273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37270,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37270,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37268_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__37268_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37276_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__37276_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__37276_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37277_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__37277_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37278_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__37278_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__37278_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37279_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__37279_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37280_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__37280_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37281(s__37282){
return (new cljs.core.LazySeq(null,(function (){
var s__37282__$1 = s__37282;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37282__$1);
if(temp__5735__auto__){
var s__37282__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37282__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37282__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37284 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37283 = (0);
while(true){
if((i__37283 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__37283);
cljs.core.chunk_append(b__37284,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__37455 = (i__37283 + (1));
i__37283 = G__37455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37284),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37281(cljs.core.chunk_rest(s__37282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37284),null);
}
} else {
var from = cljs.core.first(s__37282__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37281(cljs.core.rest(s__37282__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37285(s__37286){
return (new cljs.core.LazySeq(null,(function (){
var s__37286__$1 = s__37286;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37286__$1);
if(temp__5735__auto__){
var s__37286__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37286__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37286__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37288 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37287 = (0);
while(true){
if((i__37287 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__37287);
cljs.core.chunk_append(b__37288,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__37458 = (i__37287 + (1));
i__37287 = G__37458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37288),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37285(cljs.core.chunk_rest(s__37286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37288),null);
}
} else {
var from = cljs.core.first(s__37286__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37285(cljs.core.rest(s__37286__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37289(s__37290){
return (new cljs.core.LazySeq(null,(function (){
var s__37290__$1 = s__37290;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37290__$1);
if(temp__5735__auto__){
var s__37290__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37290__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37290__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37292 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37291 = (0);
while(true){
if((i__37291 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__37291);
cljs.core.chunk_append(b__37292,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__37459 = (i__37291 + (1));
i__37291 = G__37459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37292),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37289(cljs.core.chunk_rest(s__37290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37292),null);
}
} else {
var to = cljs.core.first(s__37290__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__37289(cljs.core.rest(s__37290__$2)));
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
var comparator = (function (p__37293,p__37294){
var vec__37295 = p__37293;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37295,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37295,(1),null);
var vec__37298 = p__37294;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(1),null);
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
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37304){
var vec__37305 = p__37304;
var vec__37308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37308,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37308,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__37311(s__37312){
return (new cljs.core.LazySeq(null,(function (){
var s__37312__$1 = s__37312;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37312__$1);
if(temp__5735__auto__){
var s__37312__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37312__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37312__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37314 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37313 = (0);
while(true){
if((i__37313 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__37313);
cljs.core.chunk_append(b__37314,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__37313,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__37314,s__37312__$2,temp__5735__auto__,vec__37305,vec__37308,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__37301_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__37301_SHARP_));
});})(i__37313,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__37314,s__37312__$2,temp__5735__auto__,vec__37305,vec__37308,category,item,coll,yyyy_MM_dds,month_counts))
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

var G__37460 = (i__37313 + (1));
i__37313 = G__37460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37314),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__37311(cljs.core.chunk_rest(s__37312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37314),null);
}
} else {
var x = cljs.core.first(s__37312__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__37312__$2,temp__5735__auto__,vec__37305,vec__37308,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__37301_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__37301_SHARP_));
});})(yyyy_MM_dd,x,s__37312__$2,temp__5735__auto__,vec__37305,vec__37308,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__37311(cljs.core.rest(s__37312__$2)));
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
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37315){
var vec__37316 = p__37315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37316,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37316,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37319){
var map__37320 = p__37319;
var map__37320__$1 = cljs.core.__destructure_map(map__37320);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37320__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37320__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37302_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37302_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37321){
var vec__37322 = p__37321;
var vec__37325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37325,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37325,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37325,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37328){
var vec__37329 = p__37328;
var vec__37332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37332,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37332,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37335){
var map__37336 = p__37335;
var map__37336__$1 = cljs.core.__destructure_map(map__37336);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37336__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37336__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37303_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37303_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});
dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth = (function dcs$prototype_6$data_shaping$calc_ace_furniture_flights_worth(sold_weights,furniture_to_waste_streams,co2e_multiplier){
var furniture__GT_waste_stream = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37337){
var map__37338 = p__37337;
var map__37338__$1 = cljs.core.__destructure_map(map__37338);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,new cljs.core.Keyword(null,"item","item",249373802));
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null),waste_stream], null);
}),furniture_to_waste_streams));
var waste_stream__GT_multiplier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37339){
var map__37340 = p__37339;
var map__37340__$1 = cljs.core.__destructure_map(map__37340);
var waste_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword(null,"waste-stream","waste-stream",-248699992));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [waste_stream,multiplier], null);
}),co2e_multiplier));
var get_co2e_multiplier = (function (category,item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(waste_stream__GT_multiplier,cljs.core.get.cljs$core$IFn$_invoke$arity$2(furniture__GT_waste_stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null)));
});
var sold_weights_with_co2es = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37341){
var map__37342 = p__37341;
var map__37342__$1 = cljs.core.__destructure_map(map__37342);
var m = map__37342__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,new cljs.core.Keyword(null,"item","item",249373802));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"co2e","co2e",1991479358),(weight * get_co2e_multiplier(category,item)));
}),sold_weights);
var flights_per_category = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37343){
var map__37344 = p__37343;
var map__37344__$1 = cljs.core.__destructure_map(map__37344);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37345){
var map__37346 = p__37345;
var map__37346__$1 = cljs.core.__destructure_map(map__37346);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37347){
var vec__37348 = p__37347;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37348,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37348,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),sold_weights_with_co2es)))));
var flights_per_item = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37351){
var map__37352 = p__37351;
var map__37352__$1 = cljs.core.__destructure_map(map__37352);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37353){
var map__37354 = p__37353;
var map__37354__$1 = cljs.core.__destructure_map(map__37354);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37354__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37354__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37354__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37355){
var vec__37356 = p__37355;
var vec__37359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37356,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37356,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_weights_with_co2es)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flights_per_category,flights_per_item], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
