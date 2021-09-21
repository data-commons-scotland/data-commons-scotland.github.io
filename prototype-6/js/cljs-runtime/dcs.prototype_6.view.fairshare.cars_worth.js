goog.provide('dcs.prototype_6.view.fairshare.cars_worth');
dcs.prototype_6.view.fairshare.cars_worth.chart_spec_cars_worth = (function dcs$prototype_6$view$fairshare$cars_worth$chart_spec_cars_worth(data,title){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"year",new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),"%Y",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(45),new cljs.core.Keyword(null,"labelBound","labelBound",-886739653),(50)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"cars",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"equivalent number of cars"], null)], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"emoji",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(15)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"year",new cljs.core.Keyword(null,"field","field",-1302436500),"date",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"format","format",-1306924766),"%Y"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"tonnes of CO2e",new cljs.core.Keyword(null,"field","field",-1302436500),"year-co2e",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"equivalent number of cars",new cljs.core.Keyword(null,"field","field",-1302436500),"year-cars",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null),"https://vega.github.io/schema/vega/v5.json",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403),"datum.car==1 ? '\uD83D\uDE97' : ''",new cljs.core.Keyword(null,"as","as",1148689641),"emoji"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"car",new cljs.core.Keyword(null,"as","as",1148689641),"cars"], null)], null),new cljs.core.Keyword(null,"groupby","groupby",-497368173),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axisX","axisX",-305600017),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),(300),"#f2dfce",title,(450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null)]);
});
dcs.prototype_6.view.fairshare.cars_worth.charts = (function dcs$prototype_6$view$fairshare$cars_worth$charts(co2e){
var car_co2e = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01",new cljs.core.Keyword(null,"year-co2e","year-co2e",1689383853),(0),new cljs.core.Keyword(null,"year-cars","year-cars",-1490572307),(0),new cljs.core.Keyword(null,"car","car",-1555651612),(0)], null),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"2012-01-01",new cljs.core.Keyword(null,"year-co2e","year-co2e",1689383853),(0),new cljs.core.Keyword(null,"year-cars","year-cars",-1490572307),(0),new cljs.core.Keyword(null,"car","car",-1555651612),(0)], null),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51048){
var map__51049 = p__51048;
var map__51049__$1 = cljs.core.__destructure_map(map__51049);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword(null,"year","year",335913393));
var co2e__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword(null,"cars","cars",676735556));
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cars,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-01-01"].join(''),new cljs.core.Keyword(null,"year-co2e","year-co2e",1689383853),co2e__$1,new cljs.core.Keyword(null,"year-cars","year-cars",-1490572307),cars,new cljs.core.Keyword(null,"car","car",-1555651612),(1)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51050){
var map__51051 = p__51050;
var map__51051__$1 = cljs.core.__destructure_map(map__51051);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"year","year",335913393));
var co2e__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"co2e","co2e",1991479358));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"co2e","co2e",1991479358),co2e__$1,new cljs.core.Keyword(null,"cars","cars",676735556),(Math.round((co2e__$1 / 4.1)) | (0))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51052){
var vec__51053 = p__51052;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51053,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51053,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"co2e","co2e",1991479358),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"year","year",335913393),co2e)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.fairshare.cars_worth.chart_spec_cars_worth(car_co2e,"Graph 1: Cars-worth of CO2e avoided per year"),dcs.prototype_6.util.vega_embed_opts], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.m-4.content","div.m-4.content",-442104821),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each item reused through The Fair Share, is an item that has avoided becoming waste/pollution."," Pollution is often estimated in terms of CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e,"," and The Fair Share data contains CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"a"], null)," values for this avoided waste/pollution."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," But by themselves, CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e values can be difficult to relate to so"," we convert them into in a more relatable measure: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"cars worth"], null)," of CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e (as shown in Graph 1)."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The average cost of using one car for one year is 4.1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"b"], null)," tonnes of CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e."," This incorporates as exhaust emissions, fuel supply chain and amortised car material for the average UK car."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"So, we divide The Fair Share's CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e values by 4.1 to yield our ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"cars worth"], null)," of CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e values"," then use these to plot this graph."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-success","p.has-text-success",43314468),"This small store has enabled an impressive amount of CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e avoidance."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-grey","p.has-text-grey",1493593580),"The 2014 spike was caused by an unusually large donation of textiles",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"c"], null)," (duvet covers, sheets, pillowcases)"," from the student halls of residence."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.is-small.has-text-info","div.content.is-small.has-text-info",-2020744079),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.is-lower-alpha","ol.is-lower-alpha",802736213),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The Fair Share have calculated their CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e values using ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://ghgprotocol.org/Third-Party-Databases/Defra",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Defra"], null)," formulae."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"A rough approximation based on figures from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.brusselsblog.co.uk/carbon-emissions-in-the-lifetimes-of-cars/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Carbon emissions in the lifetimes of cars"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.ovoenergy.com/ovo-newsroom/press-releases/2019/november/think-before-you-thank-if-every-brit-sent-one-less-thank-you-email-a-day-we-would-save-16433-tonnes-of-carbon-a-year-the-same-as-81152-flights-to-madrid.html",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"OVO Energy"], null),".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"And textiles have the highest CO2e weighting according to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dcs.prototype-6.router","data-view","dcs.prototype-6.router/data-view",1255890014),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),"co2e-multiplier"], null))], null),"The Scottish Carbon Metric multiplier table"], null),"."], null)], null)], null)], null)], null)], null);
});
dcs.prototype_6.view.fairshare.cars_worth.root = (function dcs$prototype_6$view$fairshare$cars_worth$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.fairshare.cars_worth.charts,cljs.core.deref(dcs.prototype_6.state.fairshare_derivation_co2e_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.fairshare.cars_worth.js.map
