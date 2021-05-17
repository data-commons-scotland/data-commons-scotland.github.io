goog.provide('dcs.prototype_6.view.stirling_bin_collection.derivation_missed');
dcs.prototype_6.view.stirling_bin_collection.derivation_missed.chart_spec = (function dcs$prototype_6$view$stirling_bin_collection$derivation_missed$chart_spec(title,data){
var year_count = cljs.core.count(cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),data));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"background","background",-863952629),"floralwhite",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"bar"], null),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"multi",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tonnes"], null),new cljs.core.Keyword(null,"bind","bind",-113428417),"legend"], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"yearquarter",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(60),new cljs.core.Keyword(null,"labelOffset","labelOffset",-2058215956),(10),new cljs.core.Keyword(null,"labelBound","labelBound",-886739653),(25)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zero","zero",-858964576),false], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"tonnes"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"#BF5748"], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),"my",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),0.2], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null)], null);
});
dcs.prototype_6.view.stirling_bin_collection.derivation_missed.chart = (function dcs$prototype_6$view$stirling_bin_collection$derivation_missed$chart(derivation_missed){
var derivation_missed_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27966_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27966_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462),dcs.prototype_6.util.date_str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__27966_SHARP_),new cljs.core.Keyword(null,"quarter","quarter",-508147616).cljs$core$IFn$_invoke$arity$1(p1__27966_SHARP_)));
}),derivation_missed);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.stirling_bin_collection.derivation_missed.chart_spec("Missed bins",derivation_missed_SINGLEQUOTE_),dcs.prototype_6.util.vega_embed_opts], null)], null);
});
dcs.prototype_6.view.stirling_bin_collection.derivation_missed.root = (function dcs$prototype_6$view$stirling_bin_collection$derivation_missed$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.stirling_bin_collection.derivation_missed.chart,cljs.core.deref(dcs.prototype_6.state.stirling_bin_collection_derivation_missed_bins_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.stirling_bin_collection.derivation_missed.js.map
