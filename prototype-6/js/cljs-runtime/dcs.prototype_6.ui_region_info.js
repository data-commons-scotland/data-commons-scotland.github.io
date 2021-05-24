goog.provide('dcs.prototype_6.ui_region_info');
dcs.prototype_6.ui_region_info.panel_a = (function dcs$prototype_6$ui_region_info$panel_a(region){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.region-title","div.region-title",2134805048),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),region], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Top waste facts about ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(region)].join('')], null)], null);
});
dcs.prototype_6.ui_region_info.panel_b = (function dcs$prototype_6$ui_region_info$panel_b(region){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Other waste facts (including infographics) about ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(region)].join('')], null)], null);
});
dcs.prototype_6.ui_region_info.create_panel_a = (function dcs$prototype_6$ui_region_info$create_panel_a(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_region_info.panel_a,cljs.core.deref(dcs.prototype_6.state.region_holder)], null);
});
dcs.prototype_6.ui_region_info.create_panel_b = (function dcs$prototype_6$ui_region_info$create_panel_b(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_region_info.panel_b,cljs.core.deref(dcs.prototype_6.state.region_holder)], null);
});

//# sourceMappingURL=dcs.prototype_6.ui_region_info.js.map
