goog.provide('dcs.prototype_6.view.regional_dashboard.map');
dcs.prototype_6.view.regional_dashboard.map.dom_id = "map-ui";
dcs.prototype_6.view.regional_dashboard.map.init_lat = 58.3;
dcs.prototype_6.view.regional_dashboard.map.init_lng = -3.7;
dcs.prototype_6.view.regional_dashboard.map.init_zoom = (6);
dcs.prototype_6.view.regional_dashboard.map.basemap_url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
dcs.prototype_6.view.regional_dashboard.map.basemap_maxzoom = (18);
dcs.prototype_6.view.regional_dashboard.map.basemap_attribution = "<a href='https://data-commons-scotland.github.io/dcs-wcs-prototype-3/pages-output/data/about/'>Data</a>";
dcs.prototype_6.view.regional_dashboard.map.component_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
dcs.prototype_6.view.regional_dashboard.map.geojson_layer_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
dcs.prototype_6.view.regional_dashboard.map.x_for_region_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
dcs.prototype_6.view.regional_dashboard.map.style_neutral = ({"weight": (1), "opacity": 0.7, "color": "gray", "fillOpacity": 0.2});
dcs.prototype_6.view.regional_dashboard.map.style_selected = ({"weight": (1), "color": "#fdae6b", "dashArray": "", "fillOpacity": 0.2});
dcs.prototype_6.view.regional_dashboard.map.style_highlighted = ({"weight": (2), "color": "#666", "dashArray": "", "fillOpacity": 0.4});
dcs.prototype_6.view.regional_dashboard.map.style = (function dcs$prototype_6$view$regional_dashboard$map$style(feature){
var properties_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(feature.properties);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_map,"LAD13NM");
if((((!((cljs.core.deref(dcs.prototype_6.state.region_holder) == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dcs.prototype_6.state.region_holder),region)))){
return dcs.prototype_6.view.regional_dashboard.map.style_selected;
} else {
return dcs.prototype_6.view.regional_dashboard.map.style_neutral;
}
});
dcs.prototype_6.view.regional_dashboard.map.highlight_feature = (function dcs$prototype_6$view$regional_dashboard$map$highlight_feature(e){
var x = e.target;
var properties_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x.feature.properties);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_map,"LAD13NM");
x.openTooltip();

x.setStyle(dcs.prototype_6.view.regional_dashboard.map.style_highlighted);

return x.bringToFront();
});
dcs.prototype_6.view.regional_dashboard.map.reset_highlight = (function dcs$prototype_6$view$regional_dashboard$map$reset_highlight(e){
var x = e.target;
var geojson_layer = cljs.core.deref(dcs.prototype_6.view.regional_dashboard.map.geojson_layer_holder);
x.closeTooltip();

return geojson_layer.resetStyle(x);
});
dcs.prototype_6.view.regional_dashboard.map.style_neutral_the_previously_selected = (function dcs$prototype_6$view$regional_dashboard$map$style_neutral_the_previously_selected(){
var temp__5735__auto__ = cljs.core.deref(dcs.prototype_6.view.regional_dashboard.map.x_for_region_holder);
if(cljs.core.truth_(temp__5735__auto__)){
var x_for_region = temp__5735__auto__;
return x_for_region.setStyle(dcs.prototype_6.view.regional_dashboard.map.style_neutral);
} else {
return null;
}
});
dcs.prototype_6.view.regional_dashboard.map.zoom_to_feature = (function dcs$prototype_6$view$regional_dashboard$map$zoom_to_feature(e){
var x = e.target;
var component = cljs.core.deref(dcs.prototype_6.view.regional_dashboard.map.component_holder);
var properties_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x.feature.properties);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_map,"LAD13NM");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dcs.prototype_6.state.region_holder),region)){
dcs.prototype_6.view.regional_dashboard.map.style_neutral_the_previously_selected();

x.setStyle(dcs.prototype_6.view.regional_dashboard.map.style_selected);

cljs.core.reset_BANG_(dcs.prototype_6.state.region_holder,region);

return cljs.core.reset_BANG_(dcs.prototype_6.view.regional_dashboard.map.x_for_region_holder,x);
} else {
return null;
}
});
dcs.prototype_6.view.regional_dashboard.map.on_each_feature = (function dcs$prototype_6$view$regional_dashboard$map$on_each_feature(feature,layer){
var properties_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(feature.properties);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_map,"LAD13NM");
layer.bindTooltip(region);

return layer.on(({"mouseover": dcs.prototype_6.view.regional_dashboard.map.highlight_feature, "mouseout": dcs.prototype_6.view.regional_dashboard.map.reset_highlight, "click": dcs.prototype_6.view.regional_dashboard.map.zoom_to_feature}));
});
dcs.prototype_6.view.regional_dashboard.map.did_mount = (function dcs$prototype_6$view$regional_dashboard$map$did_mount(){
var component = L.map(dcs.prototype_6.view.regional_dashboard.map.dom_id);
var basemap_layer = L.tileLayer(dcs.prototype_6.view.regional_dashboard.map.basemap_url,({"maxZoom": dcs.prototype_6.view.regional_dashboard.map.basemap_maxzoom, "attribution": dcs.prototype_6.view.regional_dashboard.map.basemap_attribution}));
cljs.core.reset_BANG_(dcs.prototype_6.view.regional_dashboard.map.component_holder,component);

component.setView([dcs.prototype_6.view.regional_dashboard.map.init_lat,dcs.prototype_6.view.regional_dashboard.map.init_lng],dcs.prototype_6.view.regional_dashboard.map.init_zoom);

basemap_layer.addTo(component);

var temp__5735__auto__ = cljs.core.deref(dcs.prototype_6.state.geojson_holder);
if(cljs.core.truth_(temp__5735__auto__)){
var geojson = temp__5735__auto__;
var geojson_layer = L.geoJson(cljs.core.deref(dcs.prototype_6.state.geojson_holder),({"style": dcs.prototype_6.view.regional_dashboard.map.style, "onEachFeature": dcs.prototype_6.view.regional_dashboard.map.on_each_feature}));
var component__$1 = cljs.core.deref(dcs.prototype_6.view.regional_dashboard.map.component_holder);
cljs.core.reset_BANG_(dcs.prototype_6.view.regional_dashboard.map.geojson_layer_holder,geojson_layer);

return geojson_layer.addTo(component__$1);
} else {
return null;
}
});
dcs.prototype_6.view.regional_dashboard.map.did_update = (function dcs$prototype_6$view$regional_dashboard$map$did_update(this$,prev_props){
var geojson = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
var geojson_layer = L.geoJson(cljs.core.deref(dcs.prototype_6.state.geojson_holder),({"style": dcs.prototype_6.view.regional_dashboard.map.style, "onEachFeature": dcs.prototype_6.view.regional_dashboard.map.on_each_feature}));
var component = cljs.core.deref(dcs.prototype_6.view.regional_dashboard.map.component_holder);
cljs.core.reset_BANG_(dcs.prototype_6.view.regional_dashboard.map.geojson_layer_holder,geojson_layer);

return geojson_layer.addTo(component);
});
dcs.prototype_6.view.regional_dashboard.map.render = (function dcs$prototype_6$view$regional_dashboard$map$render(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map-ui","div#map-ui",-251424517)], null);
});
dcs.prototype_6.view.regional_dashboard.map.component = (function dcs$prototype_6$view$regional_dashboard$map$component(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),dcs.prototype_6.view.regional_dashboard.map.render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),dcs.prototype_6.view.regional_dashboard.map.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),dcs.prototype_6.view.regional_dashboard.map.did_update], null));
});
dcs.prototype_6.view.regional_dashboard.map.root = (function dcs$prototype_6$view$regional_dashboard$map$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.map.component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(dcs.prototype_6.state.geojson_holder)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.regional_dashboard.map.js.map
