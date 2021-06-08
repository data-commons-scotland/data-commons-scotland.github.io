goog.provide('dcs.prototype_6.view.fairshare.per_quarter');
dcs.prototype_6.view.fairshare.per_quarter.chart_spec_per_season = (function dcs$prototype_6$view$fairshare$per_quarter$chart_spec_per_season(data){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"width","width",-384071477),(370),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"background","background",-863952629),"#f2dfce",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"yearquarter",new cljs.core.Keyword(null,"field","field",-1302436500),"yyyy-MM-dd",new cljs.core.Keyword(null,"as","as",1148689641),"quarter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"as","as",1148689641),"tonnes"], null)], null),new cljs.core.Keyword(null,"groupby","groupby",-497368173),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quarter"], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"cornerRadiusTopLeft","cornerRadiusTopLeft",-1216951048),(3),new cljs.core.Keyword(null,"cornerRadiusTopRight","cornerRadiusTopRight",-2094306983),(3)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"field","field",-1302436500),"quarter",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelExpr","labelExpr",897707185),"timeFormat(datum.value, '%q') == '1' ? timeFormat(datum.value, 'Q%q %Y') : timeFormat(datum.value, 'Q%q')",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(90),new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval","interval",1708495417),"month",new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"start","start",-355208981),(0)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"#A2CAC1"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"field","field",-1302436500),"quarter",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"format","format",-1306924766),"Q%q %Y"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnes",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null)], null);
});
dcs.prototype_6.view.fairshare.per_quarter.charts = (function dcs$prototype_6$view$fairshare$per_quarter$charts(material){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child.is-5","div.tile.is-child.is-5",-757011727),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.fairshare.per_quarter.chart_spec_per_season(material),dcs.prototype_6.util.vega_embed_opts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tilee","div.tilee",-2004836263),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Q3 donations are, by far, the most pronounced."," Q3 starts in June which - at Stirling, the host university - is the end of the academic year for most courses."," So the high Q3 donations are likely to be the results of students donating possessions before leaving for the summer."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the period Q2 2013 to Q1 2014 the data has less date resolution which partially accounts for the irregular donation pattern during this period."," The other factor in this was, the unusually large donation of textiles"," (duvet covers, sheets, pillowcases) from the student halls of residence [also evident in this page's first graph]."], null)], null)], null);
});
dcs.prototype_6.view.fairshare.per_quarter.root = (function dcs$prototype_6$view$fairshare$per_quarter$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.fairshare.per_quarter.charts,cljs.core.deref(dcs.prototype_6.state.fairshare_material_derivation_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.fairshare.per_quarter.js.map
