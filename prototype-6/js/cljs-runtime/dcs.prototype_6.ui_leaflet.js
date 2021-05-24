goog.provide('dcs.prototype_6.ui_leaflet');
dcs.prototype_6.ui_leaflet.URL_OSM = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
dcs.prototype_6.ui_leaflet.create_map = (function dcs$prototype_6$ui_leaflet$create_map(){
var m = L.map("map-ui").setView([56.12,-3.87],(7));
var tile1 = L.tileLayer(dcs.prototype_6.ui_leaflet.URL_OSM,({"maxZoom": (18), "attribution": "OOGIS RL, OpenStreetMap &copy;"}));
var base = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["OpenStreetMap",tile1], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

return ctrl.addTo(m);
});
dcs.prototype_6.ui_leaflet.did_mount = (function dcs$prototype_6$ui_leaflet$did_mount(){
return dcs.prototype_6.ui_leaflet.create_map();
});
dcs.prototype_6.ui_leaflet.did_update = (function dcs$prototype_6$ui_leaflet$did_update(this$,prev_props){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["todo"], 0));
});
dcs.prototype_6.ui_leaflet.render = (function dcs$prototype_6$ui_leaflet$render(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map-ui.map-container","div#map-ui.map-container",-1735188125)], null);
});
dcs.prototype_6.ui_leaflet.component2 = (function dcs$prototype_6$ui_leaflet$component2(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),dcs.prototype_6.ui_leaflet.render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),dcs.prototype_6.ui_leaflet.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),dcs.prototype_6.ui_leaflet.did_update], null));
});

//# sourceMappingURL=dcs.prototype_6.ui_leaflet.js.map
