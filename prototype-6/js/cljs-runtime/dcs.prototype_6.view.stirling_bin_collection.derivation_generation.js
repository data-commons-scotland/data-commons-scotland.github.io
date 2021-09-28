goog.provide('dcs.prototype_6.view.stirling_bin_collection.derivation_generation');
dcs.prototype_6.view.stirling_bin_collection.derivation_generation.chart_spec = (function dcs$prototype_6$view$stirling_bin_collection$derivation_generation$chart_spec(_title,data){
var quarter_count = cljs.core.count(cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),data));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"background","background",-863952629),"floralwhite",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filled","filled",1908725116),false,new cljs.core.Keyword(null,"fill","fill",883462889),"floralwhite"], null)], null),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"multi",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["region"], null),new cljs.core.Keyword(null,"bind","bind",-113428417),"legend"], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"yearquarter",new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),quarter_count,new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(60),new cljs.core.Keyword(null,"labelBound","labelBound",-886739653),(45)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"tonnes per citizen"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scotland (all means)","Stirling (all means)","Stirling (bin collection)"], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bcd6e9","#fedfc4","#BF5748"], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"category"], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),"my",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),0.2], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"category"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"format","format",-1306924766),".3f",new cljs.core.Keyword(null,"title","title",636505583),"tonnes per citizen"], null)], null)], null)], null);
});
dcs.prototype_6.view.stirling_bin_collection.derivation_generation.chart = (function dcs$prototype_6$view$stirling_bin_collection$derivation_generation$chart(stirling_bin_collection_derivation_generation,household_waste_derivation_generation){
var ctx_min_year = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),stirling_bin_collection_derivation_generation)) - (1));
var household_waste_derivation_generation_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33367_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33367_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__33367_SHARP_))," (all means)"].join(''));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33366_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Stirling",null,"Scotland",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__33366_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33365_SHARP_){
return (new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__33365_SHARP_) >= ctx_min_year);
}),household_waste_derivation_generation)));
var household_waste_derivation_generation_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33370){
var map__33371 = p__33370;
var map__33371__$1 = cljs.core.__destructure_map(map__33371);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33371__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33371__$1,new cljs.core.Keyword(null,"year","year",335913393));
var tonnes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33371__$1,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653));
var quarterly_tonnes = (tonnes / (4));
var iter__4564__auto__ = (function dcs$prototype_6$view$stirling_bin_collection$derivation_generation$chart_$_iter__33372(s__33373){
return (new cljs.core.LazySeq(null,(function (){
var s__33373__$1 = s__33373;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33373__$1);
if(temp__5735__auto__){
var s__33373__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33373__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__33373__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__33375 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__33374 = (0);
while(true){
if((i__33374 < size__4563__auto__)){
var quarter = cljs.core._nth(c__4562__auto__,i__33374);
cljs.core.chunk_append(b__33375,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),quarterly_tonnes], null));

var G__33376 = (i__33374 + (1));
i__33374 = G__33376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33375),dcs$prototype_6$view$stirling_bin_collection$derivation_generation$chart_$_iter__33372(cljs.core.chunk_rest(s__33373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33375),null);
}
} else {
var quarter = cljs.core.first(s__33373__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),quarterly_tonnes], null),dcs$prototype_6$view$stirling_bin_collection$derivation_generation$chart_$_iter__33372(cljs.core.rest(s__33373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
}),household_waste_derivation_generation_SINGLEQUOTE_));
var stirling_bin_collection_derivation_generation_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33368_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33368_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Stirling (bin collection)");
}),stirling_bin_collection_derivation_generation);
var derivation_generation_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stirling_bin_collection_derivation_generation_SINGLEQUOTE_,household_waste_derivation_generation_SINGLEQUOTE__SINGLEQUOTE_);
var derivation_generation_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33369_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33369_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462),dcs.prototype_6.util.date_str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__33369_SHARP_),new cljs.core.Keyword(null,"quarter","quarter",-508147616).cljs$core$IFn$_invoke$arity$1(p1__33369_SHARP_)));
}),derivation_generation_SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.stirling_bin_collection.derivation_generation.chart_spec("Amount",derivation_generation_SINGLEQUOTE__SINGLEQUOTE_),dcs.prototype_6.util.vega_embed_opts], null)], null);
});
dcs.prototype_6.view.stirling_bin_collection.derivation_generation.root = (function dcs$prototype_6$view$stirling_bin_collection$derivation_generation$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.stirling_bin_collection.derivation_generation.chart,cljs.core.deref(dcs.prototype_6.state.stirling_bin_collection_derivation_generation_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_generation_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.stirling_bin_collection.derivation_generation.js.map
