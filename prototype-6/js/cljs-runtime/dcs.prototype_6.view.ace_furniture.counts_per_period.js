goog.provide('dcs.prototype_6.view.ace_furniture.counts_per_period');
dcs.prototype_6.view.ace_furniture.counts_per_period.chart_spec_category_level = (function dcs$prototype_6$view$ace_furniture$counts_per_period$chart_spec_category_level(data){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"data","data",-232669377)],["https://vega.github.io/schema/vega/v5.json",cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(dcs.prototype_6.view.ace_furniture.shared.transform_spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"as","as",1148689641),"count"], null)], null),new cljs.core.Keyword(null,"groupby","groupby",-497368173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["instant","period","category"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"truncate(datum.category, 30)",new cljs.core.Keyword(null,"as","as",1148689641),"categorytruncated"], null)], 0)),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"categorytruncated",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"order","order",-1254677256),"descending"], null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"category",new cljs.core.Keyword(null,"titlePadding","titlePadding",668470772),(30)], null)], null),"floralwhite","flush",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(130),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filled","filled",1908725116),false,new cljs.core.Keyword(null,"fill","fill",883462889),"#f2dfce"], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"instant",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"format","format",-1306924766),"%b %y",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(90)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"log"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"#B46E6F"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"category",new cljs.core.Keyword(null,"field","field",-1302436500),"category",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"period",new cljs.core.Keyword(null,"field","field",-1302436500),"period",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"count",new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null)], null)], null)], null),(35),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null)]);
});
dcs.prototype_6.view.ace_furniture.counts_per_period.chart_spec_item_level = (function dcs$prototype_6$view$ace_furniture$counts_per_period$chart_spec_item_level(data){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"data","data",-232669377)],["https://vega.github.io/schema/vega/v5.json",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dcs.prototype_6.view.ace_furniture.shared.transform_spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"truncate(datum.item, 30)",new cljs.core.Keyword(null,"as","as",1148689641),"itemtruncated"], null)),(5),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"itemtruncated",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"order","order",-1254677256),"descending"], null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"item",new cljs.core.Keyword(null,"titlePadding","titlePadding",668470772),(30)], null)], null),"floralwhite","flush",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(130),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filled","filled",1908725116),false,new cljs.core.Keyword(null,"fill","fill",883462889),"#f2dfce"], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"instant",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"format","format",-1306924766),"%b %y",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(90)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),null], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"log"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"#B46E6F"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"category",new cljs.core.Keyword(null,"field","field",-1302436500),"category",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"item",new cljs.core.Keyword(null,"field","field",-1302436500),"item",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"period",new cljs.core.Keyword(null,"field","field",-1302436500),"period",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"count",new cljs.core.Keyword(null,"field","field",-1302436500),"count",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null)], null)], null)], null),(35),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null)]);
});
dcs.prototype_6.view.ace_furniture.counts_per_period.tabbed_area = (function dcs$prototype_6$view$ace_furniture$counts_per_period$tabbed_area(counts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs","div.tabs",-1767258748),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tab-counts-per-period.is-active","li.tab-counts-per-period.is-active",-47388097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return dcs.prototype_6.util.open_tab(e,"counts-per-period","category-level");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Less detail"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tab-counts-per-period","li.tab-counts-per-period",770888356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return dcs.prototype_6.util.open_tab(e,"counts-per-period","item-level");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"More detail"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#category-level-counts-per-period.content.tab-content-counts-per-period","div#category-level-counts-per-period.content.tab-content-counts-per-period",-1030528507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Less detail"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.ace_furniture.counts_per_period.chart_spec_category_level(counts),dcs.prototype_6.util.vega_embed_opts], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#item-level-counts-per-period.content.tab-content-counts-per-period","div#item-level-counts-per-period.content.tab-content-counts-per-period",1866387042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"More detail"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.ace_furniture.counts_per_period.chart_spec_item_level(counts),dcs.prototype_6.util.vega_embed_opts], null)], null)], null);
});
dcs.prototype_6.view.ace_furniture.counts_per_period.root = (function dcs$prototype_6$view$ace_furniture$counts_per_period$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.ace_furniture.counts_per_period.tabbed_area,cljs.core.deref(dcs.prototype_6.state.ace_furniture_counts_derivation_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.ace_furniture.counts_per_period.js.map
