goog.provide('dcs.prototype_6.view.data');
dcs.prototype_6.view.data.dataset_row = (function dcs$prototype_6$view$data$dataset_row(p__44877){
var map__44878 = p__44877;
var map__44878__$1 = cljs.core.__destructure_map(map__44878);
var licence_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"licence-url","licence-url",-365994599));
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"attribute-count","attribute-count",590825050));
var supply_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"supply-url","supply-url",1883899933));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var supplier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"supplier","supplier",18255489));
var record_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"record-count","record-count",1178959394));
var creator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var max_date_in_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"max-date-in-data","max-date-in-data",-1823832821));
var licence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"licence","licence",-492278701));
var supplied_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"supplied-date","supplied-date",-1065569580));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ace-furniture-avg-weight",null,"ace-furniture-count",null], null), null),name)){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.has-text-weight-bold","td.has-text-weight-bold",-575047036),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),max_date_in_data], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),record_count," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"x",goog.string.unescapeEntities("&nbsp;"),attribute_count], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"t.b.d."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"t.b.d."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"t.b.d."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-metadata.json"].join('')].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"CSVW"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),supplied_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),supply_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),supplier], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),creator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),licence_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),licence], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.has-text-weight-bold","td.has-text-weight-bold",-575047036),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),max_date_in_data], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),record_count," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"x",goog.string.unescapeEntities("&nbsp;"),attribute_count], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".csv"].join('')].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"CSV"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".json"].join('')].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"JSON"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".ttl"].join('')].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Turtle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-metadata.json"].join('')].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"CSVW"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),supplied_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),supply_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),supplier], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),creator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),licence_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),licence], null)], null)], null);
}
});
dcs.prototype_6.view.data.tooltip = (function dcs$prototype_6$view$data$tooltip(main_text,tooltip_text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-text","span.icon-text",1208576291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),main_text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small.has-tooltip-bottom.has-tooltip-multiline.has-tooltip-info.has-text-danger","span.icon.is-small.has-tooltip-bottom.has-tooltip-multiline.has-tooltip-info.has-text-danger",-2056123472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),tooltip_text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-info-circle.fa-xs","i.fas.fa-info-circle.fa-xs",-564832627)], null)], null)], null);
});
dcs.prototype_6.view.data.ele = (function dcs$prototype_6$view$data$ele(route,metas){
var target = (function (){var G__44879 = route;
var G__44879__$1 = (((G__44879 == null))?null:new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(G__44879));
var G__44879__$2 = (((G__44879__$1 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__44879__$1));
if((G__44879__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__44879__$2);
}
})();
if(cljs.core.truth_(target)){
reagent.core.after_render(dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$1(target));
} else {
reagent.core.after_render(dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$0());
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero.is-small.has-background","section.hero.is-small.has-background",-512785727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff1e5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.hero-background.is-transparent","img.hero-background.is-transparent",-1071871457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/home-page-top-hero.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"Datasets image"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.has-text-centered","div.content.has-text-centered",481664620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.is-5","h1.title.is-5",1580980647),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The ",cljs.core.count(metas)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","easier-open-data-view","dcs.prototype-6.router/easier-open-data-view",1190266596))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier"], null)], null)," datasets that are used on this site"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero","section.hero",-1165645886),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff1e5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-4.hero-body","div.pt-4.hero-body",737708025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#easier-table-fff1e5.table.is-hoverable.is-narrow","table#easier-table-fff1e5.table.is-hoverable.is-narrow",1646737055),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.has-text-left","tr.has-text-left",555227642),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"dataset"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"source"], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.has-text-left","tr.has-text-left",555227642),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(2)], null),"name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(2)], null),"description"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(2)], null),"max date in data"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(2)], null),"rows ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"x",goog.string.unescapeEntities("&nbsp;"),"cols"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the data"," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(3",goog.string.unescapeEntities("&nbsp;"),"formats)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(2)], null),dcs.prototype_6.view.data.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"its spec"], null),"a machine-oriented description of the data's: entity URI; column names, types, references; etc.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"supplied when"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"supplier"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"creator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"licence"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.has-text-left","tr.has-text-left",555227642),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),dcs.prototype_6.view.data.tooltip("CSV"," a simple tabular, human-oriented format")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),dcs.prototype_6.view.data.tooltip("JSON","a machine-oriented format used by many software tools")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),dcs.prototype_6.view.data.tooltip("Turtle","a machine-oriented format used by linked data (RDF) tools")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dcs.prototype_6.view.data.dataset_row,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),metas)),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"zip-bundles"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"(handy ZIP bundles)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,"all-csv.zip"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"ZIP"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,"all-json.zip"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"ZIP"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,"all-turtle.zip"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"ZIP"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,"all-csvw.zip"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"ZIP"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
dcs.prototype_6.view.data.root = (function dcs$prototype_6$view$data$root(route){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.data.ele,route,cljs.core.deref(dcs.prototype_6.state.meta_derivation_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.data.js.map
