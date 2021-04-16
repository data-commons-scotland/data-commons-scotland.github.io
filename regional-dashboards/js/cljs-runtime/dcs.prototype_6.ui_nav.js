goog.provide('dcs.prototype_6.ui_nav');
/**
 * Close-up the burger's dropdowns and the burger itself
 */
dcs.prototype_6.ui_nav.close_burger = (function dcs$prototype_6$ui_nav$close_burger(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28461 = arguments.length;
var i__4737__auto___28462 = (0);
while(true){
if((i__4737__auto___28462 < len__4736__auto___28461)){
args__4742__auto__.push((arguments[i__4737__auto___28462]));

var G__28463 = (i__4737__auto___28462 + (1));
i__4737__auto___28462 = G__28463;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return dcs.prototype_6.ui_nav.close_burger.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(dcs.prototype_6.ui_nav.close_burger.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var seq__28455 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["explore-checkbox","data-checkbox","about-checkbox","toggler"], null));
var chunk__28456 = null;
var count__28457 = (0);
var i__28458 = (0);
while(true){
if((i__28458 < count__28457)){
var id = chunk__28456.cljs$core$IIndexed$_nth$arity$2(null,i__28458);
(document.getElementById(id).checked = false);


var G__28464 = seq__28455;
var G__28465 = chunk__28456;
var G__28466 = count__28457;
var G__28467 = (i__28458 + (1));
seq__28455 = G__28464;
chunk__28456 = G__28465;
count__28457 = G__28466;
i__28458 = G__28467;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28455);
if(temp__5735__auto__){
var seq__28455__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28455__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28455__$1);
var G__28468 = cljs.core.chunk_rest(seq__28455__$1);
var G__28469 = c__4556__auto__;
var G__28470 = cljs.core.count(c__4556__auto__);
var G__28471 = (0);
seq__28455 = G__28468;
chunk__28456 = G__28469;
count__28457 = G__28470;
i__28458 = G__28471;
continue;
} else {
var id = cljs.core.first(seq__28455__$1);
(document.getElementById(id).checked = false);


var G__28472 = cljs.core.next(seq__28455__$1);
var G__28473 = null;
var G__28474 = (0);
var G__28475 = (0);
seq__28455 = G__28472;
chunk__28456 = G__28473;
count__28457 = G__28474;
i__28458 = G__28475;
continue;
}
} else {
return null;
}
}
break;
}
}));

(dcs.prototype_6.ui_nav.close_burger.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dcs.prototype_6.ui_nav.close_burger.cljs$lang$applyTo = (function (seq28454){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28454));
}));

dcs.prototype_6.ui_nav.navbar_clickable = (function dcs$prototype_6$ui_nav$navbar_clickable(var_args){
var G__28460 = arguments.length;
switch (G__28460) {
case 2:
return dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2 = (function (title,href){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),dcs.prototype_6.ui_nav.close_burger], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-content","div.navbar-content",-1480292377),title], null)], null);
}));

(dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$3 = (function (title,subtitle,href){
return cljs.core.assoc_in(dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(title,href),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.is-size-7.has-text-info","p.is-size-7.has-text-info",1070896102),subtitle], null));
}));

(dcs.prototype_6.ui_nav.navbar_clickable.cljs$lang$maxFixedArity = 3);

dcs.prototype_6.ui_nav.navbar = (function dcs$prototype_6$ui_nav$navbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.is-fixed-top.is-primary","nav.navbar.is-fixed-top.is-primary",1589340089),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggler.toggler","input#toggler.toggler",-706852671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.browser","home-page","dcs.prototype-6.browser/home-page",-687522931))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.brand-logo","img.brand-logo",-1229406639),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/dcs-circle.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Waste Matters Scotland logo"], null)], null),"Waste Matters Scotland"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-burger.burger","label.navbar-burger.burger",535665878),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-target","data-target",-113904678),"topnavbar",new cljs.core.Keyword(null,"for","for",-1323786319),"toggler",new cljs.core.Keyword(null,"role","role",-736691072),"button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topnavbar.navbar-menu","div#topnavbar.navbar-menu",570653980),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-start","div.navbar-start",1801160723)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-end","div.navbar-end",-365075861),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable.is-right","div.navbar-item.has-dropdown.is-hoverable.is-right",1340998722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#explore-checkbox","input#explore-checkbox",2139562323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-link","label.navbar-link",847249563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"explore-checkbox"], null),"Explore"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#explore-dropdown.navbar-dropdown.is-right","div#explore-dropdown.navbar-dropdown.is-right",-1035142866),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Waste by region","Discover and compare regional waste figures",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.browser","dashboard-page","dcs.prototype-6.browser/dashboard-page",1056027832))),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2("Waste sites and the quantities of incoming materials","https://data-commons-scotland.github.io/cluster-map-of-materials-incoming/"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2("Household quanitites through time","https://data-commons-scotland.github.io/waste-quants-thru-time-on-a-map/index.html?preset=hw-mgmt"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"<sub>2</sub>"], null)], null)], null),"e through time"], null),"https://data-commons-scotland.github.io/waste-quants-thru-time-on-a-map/index.html?preset=hw-co2e"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2("Household vs business quantities through time","https://data-commons-scotland.github.io/waste-quants-thru-time-on-a-map/index.html?preset=hvb")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#data-checkbox","input#data-checkbox",1481401228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-link","label.navbar-link",847249563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"data-checkbox"], null),"Data"], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#data-dropdown.navbar-dropdown.is-right","div#data-dropdown.navbar-dropdown.is-right",-1734907849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-link.has-text-weight-bold","p.has-text-link.has-text-weight-bold",-1501957296),"About the datasets on this site"], null)], null),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Datasets",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"An introduction to our ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier-to-use"], null)," datasets"], null),"https://data-commons-scotland.github.io/dcs-wcs-prototype-3/pages-output/data/about/"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$3("Dimensions","Descriptions of the dimensions of the datasets","https://data-commons-scotland.github.io/dcs-wcs-prototype-3/pages-output/data/about/index.html#dimensions"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.navbar-divider","hr.navbar-divider",1589717640)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-link.has-text-weight-bold","p.has-text-link.has-text-weight-bold",-1501957296),"Directly access the datasets"], null)], null),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household waste ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(19,008 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/household-waste.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Household CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"<sub>2</sub>"], null)], null)], null),"e ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(208 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/household-co2e.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Business waste by region ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(8,976 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/business-waste-by-region.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Business waste by sector ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(2,640 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/business-waste-by-sector.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Waste site ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(1254 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/waste-site.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Waste site ins ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amp","amp",271690571)], null)," outs ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(2,667,914 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/waste-site-io.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Material coding ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(557 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/material-coding.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"EWC coding ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(973 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/ewc-coding.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Households ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(288 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/households.csv"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Population ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content.has-text-info","content.has-text-info",-1201287987),"(288 records)"], null)], null),"https://github.com/data-commons-scotland/dcs-easier-open-data/raw/master/data/population.csv")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#about-checkbox","input#about-checkbox",1797962712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.navbar-link","label.navbar-link",847249563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"about-checkbox"], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#about-dropdown.navbar-dropdown.is-right","div#about-dropdown.navbar-dropdown.is-right",495856363),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$2("About the encompassing project","https://github.com/data-commons-scotland"),dcs.prototype_6.ui_nav.navbar_clickable.cljs$core$IFn$_invoke$arity$3("GitHub repositories","For some of the project\u2019s longer-lifespan outputs such as concepts/models, standards, research output and open source code.","https://github.com/data-commons-scotland")], null)], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.ui_nav.js.map
