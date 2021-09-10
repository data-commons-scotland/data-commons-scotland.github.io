goog.provide('dcs.prototype_6.view.experiment.region_title');
dcs.prototype_6.view.experiment.region_title.toggle_is_activate = (function dcs$prototype_6$view$experiment$region_title$toggle_is_activate(id){
var myClass = document.getElementById(cljs.core.name(id)).classList;
return myClass.toggle("is-active");
});
dcs.prototype_6.view.experiment.region_title.dropdown = (function dcs$prototype_6$view$experiment$region_title$dropdown(prompt,values){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#region-dropdown.dropdown","div#region-dropdown.dropdown",-379515769),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-trigger","div.dropdown-trigger",646734844),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
event.preventDefault();

return dcs.prototype_6.view.experiment.region_title.toggle_is_activate(new cljs.core.Keyword(null,"region-dropdown","region-dropdown",-1657436534));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),prompt], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small","span.icon.is-small",1815318948),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-down","i.fas.fa-angle-down",596435338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu","div.dropdown-menu",-1884774306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"menu","menu",352255198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-content","div.dropdown-content",1846372776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(item));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40058){
var vec__40059 = p__40058;
var m_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40059,(0),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40059,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),m_name,new cljs.core.Keyword(null,"key","key",-1516042587),m_code,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
event.preventDefault();

dcs.prototype_6.view.experiment.region_title.toggle_is_activate(new cljs.core.Keyword(null,"region-dropdown","region-dropdown",-1657436534));

console.log(["Do something with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_code),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_name)].join(''));

console.log(["before: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dcs.prototype_6.state.region_cursor))].join(''));

cljs.core.reset_BANG_(dcs.prototype_6.state.region_cursor,m_name);

return console.log(["after: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dcs.prototype_6.state.region_cursor))].join(''));
})], null),m_name], null);
}),values))], null)], null)], null);
});
dcs.prototype_6.view.experiment.region_title.root = (function dcs$prototype_6$view$experiment$region_title$root(){
var region = cljs.core.deref(dcs.prototype_6.state.region_cursor);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.has-text-centered","div.has-text-centered",-391524314),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),region], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.experiment.region_title.dropdown,region,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c1","Stirling"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c2","Moray"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c3","Highland"], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.experiment.region_title.js.map
