goog.provide('dcs.prototype_6.navbar');
/**
 * Close-up the burger's dropdowns and the burger itself
 */
dcs.prototype_6.navbar.close_burger = (function dcs$prototype_6$navbar$close_burger(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27911 = arguments.length;
var i__4772__auto___27912 = (0);
while(true){
if((i__4772__auto___27912 < len__4771__auto___27911)){
args__4777__auto__.push((arguments[i__4772__auto___27912]));

var G__27913 = (i__4772__auto___27912 + (1));
i__4772__auto___27912 = G__27913;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return dcs.prototype_6.navbar.close_burger.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(dcs.prototype_6.navbar.close_burger.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var seq__27903 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["explore-checkbox","data-checkbox","about-checkbox","toggler"], null));
var chunk__27904 = null;
var count__27905 = (0);
var i__27906 = (0);
while(true){
if((i__27906 < count__27905)){
var id = chunk__27904.cljs$core$IIndexed$_nth$arity$2(null,i__27906);
(document.getElementById(id).checked = false);


var G__27914 = seq__27903;
var G__27915 = chunk__27904;
var G__27916 = count__27905;
var G__27917 = (i__27906 + (1));
seq__27903 = G__27914;
chunk__27904 = G__27915;
count__27905 = G__27916;
i__27906 = G__27917;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27903);
if(temp__5735__auto__){
var seq__27903__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27903__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__27903__$1);
var G__27918 = cljs.core.chunk_rest(seq__27903__$1);
var G__27919 = c__4591__auto__;
var G__27920 = cljs.core.count(c__4591__auto__);
var G__27921 = (0);
seq__27903 = G__27918;
chunk__27904 = G__27919;
count__27905 = G__27920;
i__27906 = G__27921;
continue;
} else {
var id = cljs.core.first(seq__27903__$1);
(document.getElementById(id).checked = false);


var G__27922 = cljs.core.next(seq__27903__$1);
var G__27923 = null;
var G__27924 = (0);
var G__27925 = (0);
seq__27903 = G__27922;
chunk__27904 = G__27923;
count__27905 = G__27924;
i__27906 = G__27925;
continue;
}
} else {
return null;
}
}
break;
}
}));

(dcs.prototype_6.navbar.close_burger.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dcs.prototype_6.navbar.close_burger.cljs$lang$applyTo = (function (seq27902){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27902));
}));

dcs.prototype_6.navbar.navbar_clickable = (function dcs$prototype_6$navbar$navbar_clickable(var_args){
var G__27910 = arguments.length;
switch (G__27910) {
case 2:
return dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2 = (function (title,href){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),dcs.prototype_6.navbar.close_burger], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-content","span.navbar-content",1860514845),title], null)], null);
}));

(dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3 = (function (title,subtitle,href){
return cljs.core.assoc_in(dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(title,href),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.is-size-7.has-text-info","p.is-size-7.has-text-info",1070896102),subtitle], null));
}));

(dcs.prototype_6.navbar.navbar_clickable.cljs$lang$maxFixedArity = 3);

dcs.prototype_6.navbar.root = (function dcs$prototype_6$navbar$root(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.is-fixed-top.is-primary","nav.navbar.is-fixed-top.is-primary",1589340089),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggler.toggler","input#toggler.toggler",-706852671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","home-view","dcs.prototype-6.router/home-view",-1047320911))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.brand-logo","img.brand-logo",-1229406639),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/dcs-circle.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Waste Matters Scotland logo"], null)], null),"Waste Matters Scotland"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-burger.burger","label.navbar-burger.burger",535665878),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-target","data-target",-113904678),"topnavbar",new cljs.core.Keyword(null,"for","for",-1323786319),"toggler",new cljs.core.Keyword(null,"role","role",-736691072),"button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topnavbar.navbar-menu","div#topnavbar.navbar-menu",570653980),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-start","div.navbar-start",1801160723)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-end","div.navbar-end",-365075861),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#explore-checkbox","input#explore-checkbox",2139562323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-link","label.navbar-link",847249563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"explore-checkbox"], null),"Explore"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#explore-dropdown.navbar-dropdown.is-right","div#explore-dropdown.navbar-dropdown.is-right",-1035142866),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Waste by region",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Discover and compare regional",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"waste figures"], null),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","dashboard-view","dcs.prototype-6.router/dashboard-view",1282925944))),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Stirling's bin collection",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Interesting facts about Stirling's",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"bin collection of household waste"], null),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","stirling-bin-collection-view","dcs.prototype-6.router/stirling-bin-collection-view",1993053231))),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Stirling Community Food",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Graphs indicating how this organisation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"is reducing a community's food waste"], null),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","stirling-community-food-view","dcs.prototype-6.router/stirling-community-food-view",2069488221))),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Household waste analysis",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"What do households put into their bins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"and how appropriate are their disposal",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"decisions?"], null),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","household-waste-analysis-view","dcs.prototype-6.router/household-waste-analysis-view",-1691121018))),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Waste sites",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Waste sites and the quantities of",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"incoming materials through time, on a map"], null),"https://data-commons-scotland.github.io/cluster-map-of-materials-incoming/"),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Household waste",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household quanitites through time"], null),"https://data-commons-scotland.github.io/waste-quants-thru-time-on-a-map/index.html?preset=hw-mgmt"),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"<sub>2</sub>"], null)], null)], null),"e"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"<sub>2</sub>"], null)], null)], null),"e through time,",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"on a map"], null),"https://data-commons-scotland.github.io/waste-quants-thru-time-on-a-map/index.html?preset=hw-co2e"),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Household vs business quantities",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household vs business quantities",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"through time, on a map"], null),"https://data-commons-scotland.github.io/waste-quants-thru-time-on-a-map/index.html?preset=hvb")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#data-checkbox","input#data-checkbox",1481401228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-link","label.navbar-link",847249563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"data-checkbox"], null),"Data"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#data-dropdown.navbar-dropdown.is-right","div#data-dropdown.navbar-dropdown.is-right",-1734907849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-link.has-text-weight-bold","p.has-text-link.has-text-weight-bold",-1501957296),"About the data that is used on this site"], null)], null),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Datasets",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"An introduction to our ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier-to-use"], null)," datasets"], null),"https://data-commons-scotland.github.io/dcs-wcs-prototype-3/pages-output/data/about/"),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Dimensions","Descriptions of the dimensions of the datasets","https://data-commons-scotland.github.io/dcs-wcs-prototype-3/pages-output/data/about/index.html#dimensions"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.navbar-divider","hr.navbar-divider",1589717640)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-link.has-text-weight-bold","p.has-text-link.has-text-weight-bold",-1501957296),"Directly access the datasets",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-weight-normal.has-text-info","span.has-text-weight-normal.has-text-info",2056910399)," (as CSVs)"], null)], null)], null),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household waste ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(19,008 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"household-waste.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"<sub>2</sub>"], null)], null)], null),"e ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(208 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"household-co2e.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Business waste by region ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(8,976 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"business-waste-by-region.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Business waste by sector ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(2,640 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"business-waste-by-sector.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Waste site ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(1254 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"waste-site.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Waste site ins & outs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(2,667,914 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"waste-site-io.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Stirling bin collection ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(127 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"stirling-bin-collection.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Material coding ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(557 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"material-coding.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"EWC coding ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(973 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"ewc-coding.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Households ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(288 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"households.csv"].join('')),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Population ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"(288 records)"], null)], null),[dcs.prototype_6.util.easier_url_stem,"population.csv"].join(''))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#about-checkbox","input#about-checkbox",1797962712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-link","label.navbar-link",847249563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"about-checkbox"], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#about-dropdown.navbar-dropdown.is-right","div#about-dropdown.navbar-dropdown.is-right",495856363),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$2("About the encompassing project","https://github.com/data-commons-scotland"),dcs.prototype_6.navbar.navbar_clickable.cljs$core$IFn$_invoke$arity$3("GitHub repositories",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"For some of the project\u2019s longer-lifespan outputs",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"such as concepts/models, standards, research output",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"and open source code."], null),"https://github.com/data-commons-scotland")], null)], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.navbar.js.map
