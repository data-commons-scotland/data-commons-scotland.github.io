goog.provide('dcs.prototype_6.data_shaping');
dcs.prototype_6.data_shaping.trend = (function dcs$prototype_6$data_shaping$trend(xy_pairs){
var rf = kixi.stats.core.simple_linear_regression(cljs.core.first,cljs.core.second);
var jsobj = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,rf,xy_pairs);
return jsobj.slope;
});
dcs.prototype_6.data_shaping.rollup_population_regions = (function dcs$prototype_6$data_shaping$rollup_population_regions(population){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37943){
var vec__37944 = p__37943;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37944,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37944,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),population));
});
dcs.prototype_6.data_shaping.rollup_household_co2e_regions = (function dcs$prototype_6$data_shaping$rollup_household_co2e_regions(household_co2e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37947){
var vec__37948 = p__37947;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),household_co2e));
});
dcs.prototype_6.data_shaping.rollup_household_waste_regions = (function dcs$prototype_6$data_shaping$rollup_household_waste_regions(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37951){
var vec__37952 = p__37951;
var vec__37955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37952,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37955,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37955,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37955,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37952,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste(household_waste_scotland){
if(cljs.core.every_QMARK_((function (p1__37958_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__37958_SHARP_));
}),household_waste_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__37958#] (= \"Scotland\" (:region p1__37958#))) household-waste-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37959_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37959_SHARP_));
}),household_waste_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__37959#] (= 2011 (:year p1__37959#))) household-waste-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37960_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37960_SHARP_));
}),household_waste_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37961(s__37962){
return (new cljs.core.LazySeq(null,(function (){
var s__37962__$1 = s__37962;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37962__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__37962__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37961_$_iter__37963(s__37964){
return (new cljs.core.LazySeq(null,((function (s__37962__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__37964__$1 = s__37964;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37964__$1);
if(temp__5735__auto____$1){
var s__37964__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37964__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37964__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37966 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37965 = (0);
while(true){
if((i__37965 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__37965);
cljs.core.chunk_append(b__37966,(function (){var map__37967 = record_2011;
var map__37967__$1 = cljs.core.__destructure_map(map__37967);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__38157 = (i__37965 + (1));
i__37965 = G__38157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37966),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37961_$_iter__37963(cljs.core.chunk_rest(s__37964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37966),null);
}
} else {
var year = cljs.core.first(s__37964__$2);
return cljs.core.cons((function (){var map__37968 = record_2011;
var map__37968__$1 = cljs.core.__destructure_map(map__37968);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"material","material",460118677));
var management = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"management","management",-516161795));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37961_$_iter__37963(cljs.core.rest(s__37964__$2)));
}
} else {
return null;
}
break;
}
});})(s__37962__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__37962__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_$_iter__37961(cljs.core.rest(s__37962__$1)));
} else {
var G__38182 = cljs.core.rest(s__37962__$1);
s__37962__$1 = G__38182;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37969){
var vec__37970 = p__37969;
var vec__37973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37970,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(0),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37970,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scotland",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_business_waste_by_region = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region(business_waste_by_region_scotland){
if(cljs.core.every_QMARK_((function (p1__37976_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__37976_SHARP_));
}),business_waste_by_region_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__37976#] (= \"Scotland\" (:region p1__37976#))) business-waste-by-region-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37977_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37977_SHARP_));
}),business_waste_by_region_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__37977#] (= 2011 (:year p1__37977#))) business-waste-by-region-scotland)"].join('')));
}

var per_year_multipler = (0.15 / ((2025) - (2011)));
var records_2011 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37978_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__37978_SHARP_));
}),business_waste_by_region_scotland);
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),business_waste_by_region_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37979(s__37980){
return (new cljs.core.LazySeq(null,(function (){
var s__37980__$1 = s__37980;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37980__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var record_2011 = cljs.core.first(xs__6292__auto__);
var iterys__4560__auto__ = ((function (s__37980__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37979_$_iter__37981(s__37982){
return (new cljs.core.LazySeq(null,((function (s__37980__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year){
return (function (){
var s__37982__$1 = s__37982;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37982__$1);
if(temp__5735__auto____$1){
var s__37982__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37982__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__37982__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__37984 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__37983 = (0);
while(true){
if((i__37983 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__37983);
cljs.core.chunk_append(b__37984,(function (){var map__37985 = record_2011;
var map__37985__$1 = cljs.core.__destructure_map(map__37985);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37985__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37985__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})());

var G__38193 = (i__37983 + (1));
i__37983 = G__38193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37984),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37979_$_iter__37981(cljs.core.chunk_rest(s__37982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37984),null);
}
} else {
var year = cljs.core.first(s__37982__$2);
return cljs.core.cons((function (){var map__37986 = record_2011;
var map__37986__$1 = cljs.core.__destructure_map(map__37986);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37986__$1,new cljs.core.Keyword(null,"material","material",460118677));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37986__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),(tonnes - ((tonnes * per_year_multipler) * (year - (2011))))], null);
})(),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37979_$_iter__37981(cljs.core.rest(s__37982__$2)));
}
} else {
return null;
}
break;
}
});})(s__37980__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
,null,null));
});})(s__37980__$1,record_2011,xs__6292__auto__,temp__5735__auto__,per_year_multipler,records_2011,max_year))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2011),((function (){var x__4252__auto__ = max_year;
var y__4253__auto__ = (2025);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})() + (1)))));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,dcs$prototype_6$data_shaping$calc_scotGovTarget_for_business_waste_by_region_$_iter__37979(cljs.core.rest(s__37980__$1)));
} else {
var G__38194 = cljs.core.rest(s__37980__$1);
s__37980__$1 = G__38194;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37987){
var vec__37988 = p__37987;
var vec__37991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37991,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37991,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_materials = (function dcs$prototype_6$data_shaping$rollup_household_waste_materials(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37994){
var vec__37995 = p__37994;
var vec__37998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998,(1),null);
var management = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"management","management",-516161795),management,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"management","management",-516161795)),household_waste));
});
dcs.prototype_6.data_shaping.rollup_household_waste_managements = (function dcs$prototype_6$data_shaping$rollup_household_waste_managements(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38001){
var vec__38002 = p__38001;
var vec__38005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38002,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38005,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38005,(1),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38005,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38002,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"material","material",460118677)),household_waste));
});
dcs.prototype_6.data_shaping.calc_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_household_waste_percentage_recycled(household_waste){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38009){
var vec__38010 = p__38009;
var vec__38013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38008_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Recycled",new cljs.core.Keyword(null,"management","management",-516161795).cljs$core$IFn$_invoke$arity$1(p1__38008_SHARP_));
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),household_waste));
});
dcs.prototype_6.data_shaping.calc_scotGovTarget_for_household_waste_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled(household_waste_percentage_recycled_scotland){
if(cljs.core.every_QMARK_((function (p1__38016_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Scotland",new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__38016_SHARP_));
}),household_waste_percentage_recycled_scotland)){
} else {
throw (new Error(["Assert failed: ","expected all :region values to be \"Scotland\"","\n","(every? (fn* [p1__38016#] (= \"Scotland\" (:region p1__38016#))) household-waste-percentage-recycled-scotland)"].join('')));
}

if(cljs.core.truth_(cljs.core.some((function (p1__38017_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__38017_SHARP_));
}),household_waste_percentage_recycled_scotland))){
} else {
throw (new Error(["Assert failed: ","expected some :year values to be 2011","\n","(some (fn* [p1__38017#] (= 2011 (:year p1__38017#))) household-waste-percentage-recycled-scotland)"].join('')));
}

var record_2011 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38018_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2011),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__38018_SHARP_));
}),household_waste_percentage_recycled_scotland));
var percentage_2011 = new cljs.core.Keyword(null,"percentage","percentage",-1610213650).cljs$core$IFn$_invoke$arity$1(record_2011);
var per_year_change = (((70) - percentage_2011) / ((2025) - (2011)));
var max_year = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),household_waste_percentage_recycled_scotland));
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__38019(s__38020){
return (new cljs.core.LazySeq(null,(function (){
var s__38020__$1 = s__38020;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38020__$1);
if(temp__5735__auto__){
var s__38020__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38020__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__38020__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__38022 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__38021 = (0);
while(true){
if((i__38021 < size__4563__auto__)){
var year = cljs.core._nth(c__4562__auto__,i__38021);
cljs.core.chunk_append(b__38022,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null));

var G__38196 = (i__38021 + (1));
i__38021 = G__38196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38022),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__38019(cljs.core.chunk_rest(s__38020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38022),null);
}
} else {
var year = cljs.core.first(s__38020__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),"Scot gov target",new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(percentage_2011 + (per_year_change * (year - (2011))))], null),dcs$prototype_6$data_shaping$calc_scotGovTarget_for_household_waste_percentage_recycled_$_iter__38019(cljs.core.rest(s__38020__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38023){
var vec__38024 = p__38023;
var vec__38027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393)),business_waste_by_region));
});
dcs.prototype_6.data_shaping.count_waste_sites_per_category_per_region = (function dcs$prototype_6$data_shaping$count_waste_sites_per_category_per_region(waste_site){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38032){
var vec__38033 = p__38032;
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38033,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38033,(1),null);
var all = cljs.core.count(coll);
var household = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38031_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"accepts","accepts",1429714104).cljs$core$IFn$_invoke$arity$1(p1__38031_SHARP_)),"Household");
}),coll));
var non_household = (all - household);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"household","household",350519699),household,new cljs.core.Keyword(null,"non-household","non-household",-1626538724),non_household], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"region","region",270415120),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38030_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Not operational",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__38030_SHARP_));
}),waste_site)));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_ma_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_ma_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38036){
var vec__38037 = p__38036;
var vec__38040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38037,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38037,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.rollup_stirling_bin_collection_re_mi = (function dcs$prototype_6$data_shaping$rollup_stirling_bin_collection_re_mi(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38043){
var vec__38044 = p__38043;
var vec__38047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38044,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(2),null);
var material = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(3),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38044,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"material","material",460118677),material,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"material","material",460118677)], 0)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_bin_collection_percentage_recycled = (function dcs$prototype_6$data_shaping$calc_stirling_bin_collection_percentage_recycled(stirling_bin_collection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38051){
var vec__38052 = p__38051;
var vec__38055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(0),null);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055,(1),null);
var quarter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (){var total_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll));
var recycled_tonnes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38050_SHARP_){
return new cljs.core.Keyword(null,"recycling?","recycling?",356606502).cljs$core$IFn$_invoke$arity$1(p1__38050_SHARP_);
}),coll)));
return ((100) * (recycled_tonnes / total_tonnes));
})()], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),stirling_bin_collection));
});
dcs.prototype_6.data_shaping.calc_stirling_community_food_flow = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow(stirling_community_food_tonnes){
var sum_counter_party_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_party_tonnes(counter_party){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38058_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__38058_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter_party,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__38058_SHARP_))));
}),stirling_community_food_tonnes)));
});
var sum_subflows_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_subflows_tonnes(subflows){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38059_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38059_SHARP_,(2));
}),subflows));
});
var sum_counter_parties_tonnes = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_sum_counter_parties_tonnes(counter_parties){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38060_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("out",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__38060_SHARP_))) && (cljs.core.contains_QMARK_(counter_parties,new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331).cljs$core$IFn$_invoke$arity$1(p1__38060_SHARP_))));
}),stirling_community_food_tonnes)));
});
var source_keys = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter-party","counter-party",-1632676331),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38061_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",new cljs.core.Keyword(null,"io-direction","io-direction",-524432834).cljs$core$IFn$_invoke$arity$1(p1__38061_SHARP_));
}),stirling_community_food_tonnes)));
var not_waste_sources = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Donated not waste",null,"Purchased",null], null), null);
var waste_sources = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38062_SHARP_){
return cljs.core.contains_QMARK_(not_waste_sources,p1__38062_SHARP_);
}),source_keys);
var used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Used as food",null], null), null);
var not_used_as_food_outcomes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Donated to animal sanctuary",null,"Used by individuals for compost",null,"Council compost, Energen biogas, etc.",null], null), null);
var subflows_1a = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38063(s__38064){
return (new cljs.core.LazySeq(null,(function (){
var s__38064__$1 = s__38064;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38064__$1);
if(temp__5735__auto__){
var s__38064__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38064__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__38064__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__38066 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__38065 = (0);
while(true){
if((i__38065 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__38065);
cljs.core.chunk_append(b__38066,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null));

var G__38222 = (i__38065 + (1));
i__38065 = G__38222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38066),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38063(cljs.core.chunk_rest(s__38064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38066),null);
}
} else {
var from = cljs.core.first(s__38064__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Would-be waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38063(cljs.core.rest(s__38064__$2)));
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
var subflows_1b = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38067(s__38068){
return (new cljs.core.LazySeq(null,(function (){
var s__38068__$1 = s__38068;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38068__$1);
if(temp__5735__auto__){
var s__38068__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38068__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__38068__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__38070 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__38069 = (0);
while(true){
if((i__38069 < size__4563__auto__)){
var from = cljs.core._nth(c__4562__auto__,i__38069);
cljs.core.chunk_append(b__38070,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null));

var G__38228 = (i__38069 + (1));
i__38069 = G__38228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38070),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38067(cljs.core.chunk_rest(s__38068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38070),null);
}
} else {
var from = cljs.core.first(s__38068__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,"Not waste",sum_counter_party_tonnes(from)], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38067(cljs.core.rest(s__38068__$2)));
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
var subflows_4 = (function (){var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38071(s__38072){
return (new cljs.core.LazySeq(null,(function (){
var s__38072__$1 = s__38072;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38072__$1);
if(temp__5735__auto__){
var s__38072__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38072__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__38072__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__38074 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__38073 = (0);
while(true){
if((i__38073 < size__4563__auto__)){
var to = cljs.core._nth(c__4562__auto__,i__38073);
cljs.core.chunk_append(b__38074,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null));

var G__38234 = (i__38073 + (1));
i__38073 = G__38234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38074),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38071(cljs.core.chunk_rest(s__38072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38074),null);
}
} else {
var to = cljs.core.first(s__38072__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not used as food",to,sum_counter_parties_tonnes(cljs.core.PersistentHashSet.createAsIfByAssoc([to]))], null),dcs$prototype_6$data_shaping$calc_stirling_community_food_flow_$_iter__38071(cljs.core.rest(s__38072__$2)));
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
var comparator = (function (p__38075,p__38076){
var vec__38077 = p__38075;
var a_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(0),null);
var a_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(1),null);
var vec__38080 = p__38076;
var b_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(0),null);
var b_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(1),null);
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
var sold_items_by_avg_count_per_month_at_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185)], 0)),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38086){
var vec__38087 = p__38086;
var vec__38090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38087,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38090,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38090,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38087,(1),null);
var iter__4564__auto__ = (function dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__38093(s__38094){
return (new cljs.core.LazySeq(null,(function (){
var s__38094__$1 = s__38094;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38094__$1);
if(temp__5735__auto__){
var s__38094__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38094__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__38094__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__38096 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__38095 = (0);
while(true){
if((i__38095 < size__4563__auto__)){
var x = cljs.core._nth(c__4562__auto__,i__38095);
cljs.core.chunk_append(b__38096,(function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__38095,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__38096,s__38094__$2,temp__5735__auto__,vec__38087,vec__38090,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__38083_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__38083_SHARP_));
});})(i__38095,yyyy_MM_dd,x,c__4562__auto__,size__4563__auto__,b__38096,s__38094__$2,temp__5735__auto__,vec__38087,vec__38090,category,item,coll,yyyy_MM_dds,month_counts))
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

var G__38237 = (i__38095 + (1));
i__38095 = G__38237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38096),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__38093(cljs.core.chunk_rest(s__38094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38096),null);
}
} else {
var x = cljs.core.first(s__38094__$2);
return cljs.core.cons((function (){var yyyy_MM_dd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dds,x);
var period_count = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (yyyy_MM_dd,x,s__38094__$2,temp__5735__auto__,vec__38087,vec__38090,category,item,coll,yyyy_MM_dds,month_counts){
return (function (p1__38083_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yyyy_MM_dd,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313).cljs$core$IFn$_invoke$arity$1(p1__38083_SHARP_));
});})(yyyy_MM_dd,x,s__38094__$2,temp__5735__auto__,vec__38087,vec__38090,category,item,coll,yyyy_MM_dds,month_counts))
,coll)));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var avg_count = (period_count / cljs.core.get.cljs$core$IFn$_invoke$arity$2(month_counts,x));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),period_count,new cljs.core.Keyword(null,"avg-count","avg-count",17957415),avg_count], null);
})(),dcs$prototype_6$data_shaping$calc_ace_furniture_trends_$_iter__38093(cljs.core.rest(s__38094__$2)));
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
var sold_categories_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38097){
var vec__38098 = p__38097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38101){
var map__38102 = p__38101;
var map__38102__$1 = cljs.core.__destructure_map(map__38102);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38084_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38084_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38103){
var vec__38104 = p__38103;
var vec__38107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(0),null);
var yyyy_MM_dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(2),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),yyyy_MM_dd,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"period-count","period-count",-5505002),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"period-count","period-count",-5505002),coll)),new cljs.core.Keyword(null,"avg-count","avg-count",17957415),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avg-count","avg-count",17957415),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"yyyy-MM-dd","yyyy-MM-dd",1955353313),new cljs.core.Keyword(null,"x","x",2099068185)),sold_items_by_avg_count_per_month_at_x)))))));
var sold_items_by_avg_count_per_month_trend = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trend","trend",54563841),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38110){
var vec__38111 = p__38110;
var vec__38114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(1),null);
var trend_val = dcs.prototype_6.data_shaping.trend(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38117){
var map__38118 = p__38117;
var map__38118__$1 = cljs.core.__destructure_map(map__38118);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var avg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"avg-count","avg-count",17957415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,avg_count], null);
}),coll));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38085_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38085_SHARP_,new cljs.core.Keyword(null,"trend","trend",54563841),trend_val);
}),coll);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_items_by_avg_count_per_month_at_x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sold_categories_by_avg_count_per_month_trend,sold_items_by_avg_count_per_month_trend], null);
});
dcs.prototype_6.data_shaping.calc_ace_furniture_flights_worth = (function dcs$prototype_6$data_shaping$calc_ace_furniture_flights_worth(sold_weights,furniture_to_scottishCarbonMetric,co2e_multiplier){
var furniture__GT_material = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38119){
var map__38120 = p__38119;
var map__38120__$1 = cljs.core.__destructure_map(map__38120);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,new cljs.core.Keyword(null,"item","item",249373802));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,new cljs.core.Keyword(null,"material","material",460118677));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null),material], null);
}),furniture_to_scottishCarbonMetric));
var material__GT_multiplier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38121){
var map__38122 = p__38121;
var map__38122__$1 = cljs.core.__destructure_map(map__38122);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38122__$1,new cljs.core.Keyword(null,"material","material",460118677));
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38122__$1,new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material,multiplier], null);
}),co2e_multiplier));
var get_co2e_multiplier = (function (category,item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(material__GT_multiplier,cljs.core.get.cljs$core$IFn$_invoke$arity$2(furniture__GT_material,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,item], null)));
});
var sold_weights_with_co2es = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38123){
var map__38124 = p__38123;
var map__38124__$1 = cljs.core.__destructure_map(map__38124);
var m = map__38124__$1;
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124__$1,new cljs.core.Keyword(null,"item","item",249373802));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"co2e","co2e",1991479358),(weight * get_co2e_multiplier(category,item)));
}),sold_weights);
var flights_per_category = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38125){
var map__38126 = p__38125;
var map__38126__$1 = cljs.core.__destructure_map(map__38126);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38127){
var map__38128 = p__38127;
var map__38128__$1 = cljs.core.__destructure_map(map__38128);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38129){
var vec__38130 = p__38129;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38130,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38130,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"category","category",-593092832),sold_weights_with_co2es)))));
var flights_per_item = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38133){
var map__38134 = p__38133;
var map__38134__$1 = cljs.core.__destructure_map(map__38134);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var flights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"flights","flights",-1637719124));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(flights,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"flights-total","flights-total",-414784945),flights,new cljs.core.Keyword(null,"flight","flight",-764860679),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38135){
var map__38136 = p__38135;
var map__38136__$1 = cljs.core.__destructure_map(map__38136);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"item","item",249373802));
var co2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e,new cljs.core.Keyword(null,"flights","flights",-1637719124),(Math.round((co2e / 202.5)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38137){
var vec__38138 = p__38137;
var vec__38141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38138,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(1),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38138,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"co2e","co2e",1991479358),coll))], null);
}),cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"item","item",249373802)),sold_weights_with_co2es)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flights_per_category,flights_per_item], null);
});

//# sourceMappingURL=dcs.prototype_6.data_shaping.js.map
