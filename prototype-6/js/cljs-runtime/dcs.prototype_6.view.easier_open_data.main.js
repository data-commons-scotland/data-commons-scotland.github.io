goog.provide('dcs.prototype_6.view.easier_open_data.main');
dcs.prototype_6.view.easier_open_data.main.dataset_row = (function dcs$prototype_6$view$easier_open_data$main$dataset_row(dataset_ele_id,dataset,description,csv,json,number,creator,supplier,supplier_url,licence_url,licence){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),dataset_ele_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),dataset], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),description], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(csv)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"CSV"], null),"  ",(((json == null))?"":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(json)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"JSON"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),number], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),creator], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),supplier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),supplier_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),goog.string.unescapeEntities("&nbsp;"),"URL"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),licence_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),licence], null)], null)], null);
});
dcs.prototype_6.view.easier_open_data.main.scroll_fn = (function dcs$prototype_6$view$easier_open_data$main$scroll_fn(id){
return (function (){
var ele = document.getElementById(id);
ele.scrollIntoView(true);

ele.classList.add("is-selected");

var temp__5735__auto__ = window.scrollY;
if(cljs.core.truth_(temp__5735__auto__)){
var scrolledY = temp__5735__auto__;
return window.scroll((0),(scrolledY - (50)));
} else {
return null;
}
});
});
dcs.prototype_6.view.easier_open_data.main.dimension_row = (function dcs$prototype_6$view$easier_open_data$main$dimension_row(var_args){
var G__41587 = arguments.length;
switch (G__41587) {
case 6:
return dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 10:
return dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6 = (function (dataset_ele_id,dataset,example,count,min,max){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:;",new cljs.core.Keyword(null,"on-click","on-click",1632826543),dcs.prototype_6.view.easier_open_data.main.scroll_fn(dataset_ele_id)], null),dataset], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),example], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),count], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),min], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),max], null)], null);
}));

(dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10 = (function (dimension_row_span,dimension,description_row_span,description,dataset_ele_id,dataset,example,count,min,max){
var basic_row = dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6(dataset_ele_id,dataset,example,count,min,max);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(basic_row),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),dimension_row_span], null),dimension], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),description_row_span], null),description], null)], null),cljs.core.rest(basic_row)));
}));

(dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$lang$maxFixedArity = 10);

dcs.prototype_6.view.easier_open_data.main.root = (function dcs$prototype_6$view$easier_open_data$main$root(route){
var target = (function (){var G__41592 = route;
var G__41592__$1 = (((G__41592 == null))?null:new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(G__41592));
var G__41592__$2 = (((G__41592__$1 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__41592__$1));
if((G__41592__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__41592__$2);
}
})();
if(cljs.core.truth_(target)){
reagent.core.after_render(dcs.prototype_6.view.easier_open_data.main.scroll_fn(target));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero","section.hero",-1165645886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.has-text-centered","div.content.has-text-centered",481664620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.is-5","h1.title.is-5",1580980647),"About the data on this site"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.is-4.has-text-danger","h2.subtitle.is-4.has-text-danger",-346681083),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Easier"], null)," open data about waste in Scotland"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Several organisations are doing a very good job of curating & publishing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"open data"], null)," about waste in Scotland but,\n          the published data is not always \"easy to use\" for non-experts.\n          We have see several references to this at open data conference events and on social media platforms:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190),"Whilst statisticians/coders may think that it is reasonably simple to knead together these\n          somewhat diverse datasets into a coherent knowledge, the interested layman doesn't find it so easy."], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"One of the objectives of the Data Commons Scotland project is to address\n          the \"ease of use\" issue over open data.\n          The contents of this repository are the result of us ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"re-working"], null)," some of the\n          existing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"source"], null)," open data\n          so that it is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier"], null)], null)," to use, understand, consume, parse, and all in one place.\n          It may not be as detailed or have all the nuances as the source data - but aims to be\n          better for the purposes of making the information accessible to non-experts."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We have processed the source data just enough to:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"provide value-based cross-referencing between datasets"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"add a few fields whose values are generally useful but not easily derivable by a\n           simple calculation (such as latitude & longitude)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"make it available as simple CSV and JSON files in a Git repository."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We have not augmented the data with derived values that can be simply calculated,\n          such as per-population amounts, averages, trends, totals, etc."], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero","section.hero",-1165645886),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff1e5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.is-4.has-text-danger","h2.subtitle.is-4.has-text-danger",-346681083),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The 12 ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier"], null)," datasets"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#easier-table-fff1e5.table.is-hoverable.is-narrow","table#easier-table-fff1e5.table.is-hoverable.is-narrow",1646737055),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.has-text-left","tr.has-text-left",555227642),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"dataset",goog.string.unescapeEntities("&nbsp;"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.has-text-info","sup.has-text-info",-982050481),"(generated February 2021)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"data source",goog.string.unescapeEntities("&nbsp;"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.has-text-info","sup.has-text-info",-982050481),"(sourced January 2021)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.has-text-left","tr.has-text-left",555227642),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"number of records"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"creator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"supplier"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"licence"], null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),dcs.prototype_6.view.easier_open_data.main.dataset_row("household-waste","household-waste","The categorised quantities of the ('managed') waste generated by households.","household-waste.csv","household-waste.json","19008","SEPA","statistics.gov.scot","http://statistics.gov.scot/data/household-waste","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/","OGL v3.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("household-co2e","household-co2e","The carbon impact of the waste generated by households.","household-co2e.csv","household-co2e.json","288","SEPA","SEPA","https://www.environment.gov.scot/data/data-analysis/household-waste","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/","OGL v2.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("business-waste-by-region","business-waste-by-region","The categorised quantities of the waste generated by industry & commerce.","business-waste-by-region.csv","business-waste-by-region.json","8976","SEPA","SEPA","https://www.sepa.org.uk/environment/waste/waste-data/waste-data-reporting/business-waste-data","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/","OGL v2.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("business-waste-by-sector","business-waste-by-sector","The categorised quantities of the waste generated by industry & commerce.","business-waste-by-sector.csv","business-waste-by-sector.json","2640","SEPA","SEPA","https://www.sepa.org.uk/environment/waste/waste-data/waste-data-reporting/business-waste-data","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/","OGL v2.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("waste-site","waste-site","The locations, services & capacities of waste sites.","waste-site.csv","waste-site.json","1254","SEPA","SEPA","https://www.sepa.org.uk/data-visualisation/waste-sites-and-capacity-tool","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/","OGL v2.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("waste-site-io","waste-site-io","The categorised quantities of waste going in and out of waste sites.","waste-site-io.csv",null,"2667914","SEPA","SEPA","https://www.sepa.org.uk/data-visualisation/waste-sites-and-capacity-tool","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/","OGL v2.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("stirling-bin-collection","stirling-bin-collection","The categorised quantities of the waste collected from household bins.","stirling-bin-collection.csv","stirling-bin-collection.json","127","Stirling council","Stirling council","https://data.stirling.gov.uk/dataset/waste-management","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/","OGL v3.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("material-coding","material-coding","A mapping between the EWC codes and SEPA's materials classification (as used in these datasets).","material-coding.csv","material-coding.json","557","SEPA","SEPA","https://www.sepa.org.uk/data-visualisation/waste-sites-and-capacity-tool","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/","OGL v2.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("ewc-coding","ewc-coding","EWC (European Waste Classification) codes and descriptions.","ewc-coding.csv","ewc-coding.json","973","European Commission of the EU","Publications Office of the EU","https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02000D0532-20150601&from=EN#tocId7","https://creativecommons.org/licenses/by/4.0/","CC BY 4.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("co2e-multiplier","co2e-multiplier","Per-material weight-multipliers to calaculate CO2e amounts. This data has been copied from section 6.2 of The Scottish Carbon Metric.","co2e-multiplier.csv","co2e-multiplier.json","37","Zero Waste Scotland","Zero Waste Scotland","https://www.zerowastescotland.org.uk/sites/default/files/The%20Scottish%20Carbon%20Metric.pdf","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/","OGL v3.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("households","households","Occupied residential dwelling counts. Useful for calculating per-household amounts.","households.csv","households.json","288","NRS","statistics.gov.scot","http://statistics.gov.scot/data/household-estimates","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/","OGL v3.0"),dcs.prototype_6.view.easier_open_data.main.dataset_row("population","population","People counts. Useful for calculating per-citizen amounts.","population.csv","population.json","288","NRS","statistics.gov.scot","http://statistics.gov.scot/data/population-estimates-current-geographic-boundaries","http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/","OGL v3.0")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.is-size-7","p.is-size-7",-1880698093),"(The fuller, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_metadata,"datasets.csv"].join('')], null),"CSV version of the table"], null)," above.)"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero","section.hero",-1165645886),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#f2dfce"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.is-4.has-text-success","h2.subtitle.is-4.has-text-success",-631767333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The dimensions of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier"], null)," datasets"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"One of the things that makes these datasets ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"easier"], null)," to use\n           is that they use consistent dimension values/controlled code-lists.\n           This makes it easier to join/link datasets."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We have tried to rectify the inconsistencies that occur in the source data;\n           in particular, the inconsistent labelling of waste materials and regions.\n           This is still \"work-in-progress\"\n           because we have yet to tease out and make consistent further useful dimensions."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#easier-table-f2dfce.table.is-hoverable.is-narrow","table#easier-table-f2dfce.table.is-hoverable.is-narrow",-1264718991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.has-text-left","tr.has-text-left",555227642),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"dimension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"dataset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"example value of dimension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"count of values of dimension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"min value of dimension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.has-text-danger","th.has-text-danger",615149477),"max value of dimension"], null)], null)], null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tbody","tbody",-80678300),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("7","region","7","The name of a council area.","household-waste","household-waste","Falkirk","32","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("household-co2e","household-co2e","Aberdeen City","32","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-region","business-waste-by-region","Falkirk","34","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("waste-site","waste-site","North Lanarkshire","32","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("stirling-bin-collection","stirling-bin-collection","Stirling","1","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("households","households","West Dunbartonshire","32","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("population","population","West Dunbartonshire","32","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","business-sector","1","The label representing the business/economic sector.","business-waste-by-sector","business-waste-by-sector","Water industry","10","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("9","year","9","The integer representation of a year.","household-waste","household-waste","2011","9","2011","2019"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("household-co2e","household-co2e","2013","9","2011","2019"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-region","business-waste-by-region","2018","8","2011","2018"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-sector","business-waste-by-sector","2018","8","2011","2018"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("waste-site","waste-site","2019","1","2019","2019"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("waste-site-io","waste-site-io","2013","14","2007","2020"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("stirling-bin-collection","stirling-bin-collection","2020","4","2018","2021"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("households","households","2011","9","2011","2019"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("population","population","2013","9","2011","2019"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("2","quarter","2","The integer representation of the year's quarter.","waste-site-io","waste-site-io","4","4","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("stirling-bin-collection","stirling-bin-collection","2","4","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","site-name","1","The name of the waste site.","waste-site","waste-site","Bellshill H/care Waste Treatment & Transfer","1246","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("2","permit","2","The waste site operator's official permit or licence.","waste-site","waste-site","PPC/A/1180708","1254","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("waste-site-io","waste-site-io","PPC/A/1000060","1401","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","status","1","The label indicating the open/closed status of the waste site in the record's timeframe. ","waste-site","waste-site","Not applicable","4","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","latitude","1","The signed decimal representing a latitude.","waste-site","waste-site","55.824871489601804","1227","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","longitude","1","The signed decimal representing a longitude.","waste-site","waste-site","-4.035165962797409","1227","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","io-direction","1","The label indicating the direction of travel of the waste from the PoV of a waste site.","waste-site-io","waste-site-io","in","2","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("5","material","5","The name of a waste material in SEPA's classification.","household-waste","household-waste","Animal and mixed food waste","22","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-region","business-waste-by-region","Spent solvents","33","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-sector","business-waste-by-sector","Spent solvents","33","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("stirling-bin-collection","stirling-bin-collection","Household and similar wastes","6","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("material-coding","material-coding","Acid, alkaline or saline wastes","34","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","management","1","The label indicating how the waste was managed/processed (i.e. what its end-state was).","household-waste","household-waste","Other Diversion","3","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","recycling?","1","True if the waste was categorised as 'for recycling' when collected.","stirling-bin-collection","stirling-bin-collection","false","2","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","missed-bin?","1","True if the waste was in a missed bin.","stirling-bin-collection","stirling-bin-collection","true","2","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("3","ewc-code","3","The code from the European Waste Classification hierarchy.","waste-site-io","waste-site-io","00 00 00","787","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("material-coding","material-coding","11 01 06*","557","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("ewc-coding","ewc-coding","01","973","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","ewc-description","1","The description from the European Waste Classification hierarchy.","ewc-coding","ewc-coding","WASTES RESULTING FROM EXPLORATION, MINING, QUARRYING, AND PHYSICAL AND CHEMICAL TREATMENT OF MINERALS","774","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","waste-stream","1","The name of a waste stream in ZWS' classification.","co2e-multiplier","co2e-multiplier","Textiles","37","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("2","operator","2","The name of the waste site operator.","waste-site","waste-site","TRADEBE UK","753","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("waste-site-io","waste-site-io","ABERDEENSHIRE COUNCIL","1003","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","activities","1","The waste processing activities supported by the waste site.","waste-site","waste-site","Other treatment","50","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","accepts","1","The kinds of clients/wastes accepted by the waste site.","waste-site","waste-site","Other special","42","",""),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","multiplier","1","The value to multiply a weight by to calculate the C02e amount.","co2e-multiplier","co2e-multiplier","100.00","36","0.03","100.00"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","population","1","The population count as an integer.","population","population","89800","","21420","633120"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","households","1","The households count as an integer.","households","households","42962","","9424","307161"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("6","tonnes","6","The waste related quantity as a decimal.","household-waste","household-waste","0","","0","183691"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("household-co2e","household-co2e","251386.54","","24768.53","762399.92"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-region","business-waste-by-region","488","","0","486432"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("business-waste-by-sector","business-waste-by-sector","6","","0","1039179"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("waste-site-io","waste-site-io","0","","-8.56","2325652.83"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$6("stirling-bin-collection","stirling-bin-collection","60.42","","0.3","5447.70"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","tonnes-input","1","The quantity of incoming waste as a decimal.","waste-site","waste-site","154.55","","0","1476044"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","tonnes-treated-recovered","1","The quantity of waste treated or recovered as a decimal.","waste-site","waste-site","133.04","","0","1476044"),dcs.prototype_6.view.easier_open_data.main.dimension_row.cljs$core$IFn$_invoke$arity$10("1","tonnes-output","1","The quantity of outgoing waste as a decimal.","waste-site","waste-site","152.8","","0","235354.51")], true)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.is-size-7","p.is-size-7",-1880698093),"(The ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[dcs.prototype_6.util.easier_repo_metadata,"dimensions.csv"].join('')], null),"CSV version of the table"], null)," above.)"], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.easier_open_data.main.js.map
