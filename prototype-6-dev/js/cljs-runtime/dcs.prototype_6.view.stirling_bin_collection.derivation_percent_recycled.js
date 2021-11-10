goog.provide('dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled');
dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled.chart_spec = (function dcs$prototype_6$view$stirling_bin_collection$derivation_percent_recycled$chart_spec(_title,data){
var quarter_count = cljs.core.count(cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616)),data));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"background","background",-863952629),"floralwhite",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filled","filled",1908725116),false,new cljs.core.Keyword(null,"fill","fill",883462889),"floralwhite"], null)], null),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"multi",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["region"], null),new cljs.core.Keyword(null,"bind","bind",-113428417),"legend"], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"yearquarter",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),quarter_count,new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(60),new cljs.core.Keyword(null,"labelBound","labelBound",-886739653),(40)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"percentage",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scotland (recycled overall)","Stirling (recycled overall)","Stirling (recycling bin collection)"], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bcd6e9","#fedfc4","#BF5748"], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"category"], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),"my",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),0.2], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"category"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"percentage",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"format","format",-1306924766),".3f"], null)], null)], null)], null);
});
dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled.chart = (function dcs$prototype_6$view$stirling_bin_collection$derivation_percent_recycled$chart(stirling_bin_collection_derivation_percent_recycled,household_waste_derivation_percent_recycled){
var ctx_min_year = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),stirling_bin_collection_derivation_percent_recycled)) - (1));
var household_waste_derivation_percent_recycled_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44822_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44822_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44822_SHARP_))," (recycled overall)"].join(''));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44821_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Stirling",null,"Scotland",null], null), null),new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(p1__44821_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44820_SHARP_){
return (new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__44820_SHARP_) >= ctx_min_year);
}),household_waste_derivation_percent_recycled)));
var household_waste_derivation_percent_recycled_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44832){
var map__44833 = p__44832;
var map__44833__$1 = cljs.core.__destructure_map(map__44833);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44833__$1,new cljs.core.Keyword(null,"region","region",270415120));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44833__$1,new cljs.core.Keyword(null,"year","year",335913393));
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44833__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
var quarterly_percentage = percentage;
var iter__4564__auto__ = (function dcs$prototype_6$view$stirling_bin_collection$derivation_percent_recycled$chart_$_iter__44834(s__44835){
return (new cljs.core.LazySeq(null,(function (){
var s__44835__$1 = s__44835;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44835__$1);
if(temp__5735__auto__){
var s__44835__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44835__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__44835__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__44837 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__44836 = (0);
while(true){
if((i__44836 < size__4563__auto__)){
var quarter = cljs.core._nth(c__4562__auto__,i__44836);
cljs.core.chunk_append(b__44837,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),quarterly_percentage], null));

var G__44845 = (i__44836 + (1));
i__44836 = G__44845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44837),dcs$prototype_6$view$stirling_bin_collection$derivation_percent_recycled$chart_$_iter__44834(cljs.core.chunk_rest(s__44835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44837),null);
}
} else {
var quarter = cljs.core.first(s__44835__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"quarter","quarter",-508147616),quarter,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),quarterly_percentage], null),dcs$prototype_6$view$stirling_bin_collection$derivation_percent_recycled$chart_$_iter__44834(cljs.core.rest(s__44835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
}),household_waste_derivation_percent_recycled_SINGLEQUOTE_));
var stirling_bin_collection_derivation_percent_recycled_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44823_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44823_SHARP_,new cljs.core.Keyword(null,"region","region",270415120),"Stirling (recycling bin collection)");
}),stirling_bin_collection_derivation_percent_recycled);
var derivation_percent_recycled_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stirling_bin_collection_derivation_percent_recycled_SINGLEQUOTE_,household_waste_derivation_percent_recycled_SINGLEQUOTE__SINGLEQUOTE_);
var derivation_percent_recycled_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44824_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44824_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462),dcs.prototype_6.util.date_str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__44824_SHARP_),new cljs.core.Keyword(null,"quarter","quarter",-508147616).cljs$core$IFn$_invoke$arity$1(p1__44824_SHARP_)));
}),derivation_percent_recycled_SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled.chart_spec("% for the recycling bin collection",derivation_percent_recycled_SINGLEQUOTE__SINGLEQUOTE_),dcs.prototype_6.util.vega_embed_opts], null)], null);
});
dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled.root = (function dcs$prototype_6$view$stirling_bin_collection$derivation_percent_recycled$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled.chart,cljs.core.deref(dcs.prototype_6.state.stirling_bin_collection_derivation_percent_recycled_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_percent_recycled_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.stirling_bin_collection.derivation_percent_recycled.js.map