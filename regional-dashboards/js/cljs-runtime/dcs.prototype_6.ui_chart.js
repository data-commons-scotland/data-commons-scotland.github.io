goog.provide('dcs.prototype_6.ui_chart');
dcs.prototype_6.ui_chart.chart_spec = (function dcs$prototype_6$ui_chart$chart_spec(title,data){
var year_count = cljs.core.count(cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),data));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"year",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"year",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),year_count,new cljs.core.Keyword(null,"title","title",636505583),"year"], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnage",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zero","zero",-858964576),false], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"tonnage"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),"my",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),0.2], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"region",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"year",new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"tonnage",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null),"https://vega.github.io/schema/vega/v5.json","line",(200),"floralwhite",title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my","my",-1055703269),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"multi",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["region"], null),new cljs.core.Keyword(null,"bind","bind",-113428417),"legend"], null)], null),(150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null)]);
});
dcs.prototype_6.ui_chart.chart = (function dcs$prototype_6$ui_chart$chart(region){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.ui_chart.chart_spec("Trends",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"2017",new cljs.core.Keyword(null,"tonnage","tonnage",-1095700808),(5),new cljs.core.Keyword(null,"region","region",270415120),region], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"2018",new cljs.core.Keyword(null,"tonnage","tonnage",-1095700808),(4),new cljs.core.Keyword(null,"region","region",270415120),region], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"2019",new cljs.core.Keyword(null,"tonnage","tonnage",-1095700808),(3),new cljs.core.Keyword(null,"region","region",270415120),region], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"2017",new cljs.core.Keyword(null,"tonnage","tonnage",-1095700808),(6),new cljs.core.Keyword(null,"region","region",270415120),"Average"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"2018",new cljs.core.Keyword(null,"tonnage","tonnage",-1095700808),(6),new cljs.core.Keyword(null,"region","region",270415120),"Average"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"2019",new cljs.core.Keyword(null,"tonnage","tonnage",-1095700808),(4),new cljs.core.Keyword(null,"region","region",270415120),"Average"], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),false], null)], null)], null);
});
dcs.prototype_6.ui_chart.create = (function dcs$prototype_6$ui_chart$create(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_chart.chart,cljs.core.deref(dcs.prototype_6.state.region_holder)], null);
});

//# sourceMappingURL=dcs.prototype_6.ui_chart.js.map