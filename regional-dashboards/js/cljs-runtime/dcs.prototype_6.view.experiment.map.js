goog.provide('dcs.prototype_6.view.experiment.map');
var module$node_modules$leaflet$dist$leaflet_src=shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
var module$node_modules$react_leaflet$cjs$index=shadow.js.require("module$node_modules$react_leaflet$cjs$index", {});
dcs.prototype_6.view.experiment.map.copy_osm = "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors";
dcs.prototype_6.view.experiment.map.osm_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"].join('');
dcs.prototype_6.view.experiment.map.Map = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.Map);
dcs.prototype_6.view.experiment.map.Marker = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.Marker);
dcs.prototype_6.view.experiment.map.Popup = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.Popup);
dcs.prototype_6.view.experiment.map.TileLayer = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.TileLayer);
dcs.prototype_6.view.experiment.map.LayerGroup = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.LayerGroup);
dcs.prototype_6.view.experiment.map.Circle = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.Circle);
dcs.prototype_6.view.experiment.map.CircleMarker = reagent.core.adapt_react_class(module$node_modules$react_leaflet$cjs$index.CircleMarker);
dcs.prototype_6.view.experiment.map.make_icon = (function dcs$prototype_6$view$experiment$map$make_icon(image_url,opts){
return module$node_modules$leaflet$dist$leaflet_src.icon(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"iconUrl","iconUrl",-1868537869),image_url)));
});
dcs.prototype_6.view.experiment.map.latLng__GT_latlon = (function dcs$prototype_6$view$experiment$map$latLng__GT_latlon(lat_lng){
if(cljs.core.truth_(lat_lng)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat_lng.lat,lat_lng.lng], null);
} else {
return null;
}
});
dcs.prototype_6.view.experiment.map.make_bounds = (function dcs$prototype_6$view$experiment$map$make_bounds(p__9709){
var map__9710 = p__9709;
var map__9710__$1 = cljs.core.__destructure_map(map__9710);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9710__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9710__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
return module$node_modules$leaflet$dist$leaflet_src.latLngBounds(cljs.core.clj__GT_js(sw),cljs.core.clj__GT_js(ne));
});
dcs.prototype_6.view.experiment.map.map_bounds = (function dcs$prototype_6$view$experiment$map$map_bounds(map){
var b = map.getBounds();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sw","sw",833113913),dcs.prototype_6.view.experiment.map.latLng__GT_latlon(b.getSouthWest()),new cljs.core.Keyword(null,"nw","nw",487743706),dcs.prototype_6.view.experiment.map.latLng__GT_latlon(b.getNorthWest()),new cljs.core.Keyword(null,"ne","ne",-1792628743),dcs.prototype_6.view.experiment.map.latLng__GT_latlon(b.getNorthEast()),new cljs.core.Keyword(null,"se","se",-1419643721),dcs.prototype_6.view.experiment.map.latLng__GT_latlon(b.getSouthEast())], null);
});
dcs.prototype_6.view.experiment.map.default_bounds = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.7121,14.9854], null),new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [70.5102,14.9854], null),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [70.5102,37.3096], null),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.7121,37.3096], null)], null);
dcs.prototype_6.view.experiment.map.default_center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [65.6583,26.1475], null);
dcs.prototype_6.view.experiment.map.default_highlight_opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),true,new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"weight","weight",-1262796205),(5),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3,new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.1], null);
dcs.prototype_6.view.experiment.map.hover_highlight_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dcs.prototype_6.view.experiment.map.default_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),false,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#555555",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.25], null)], 0));
dcs.prototype_6.view.experiment.map.select_highlight_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dcs.prototype_6.view.experiment.map.default_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#0494D2",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#0494D2"], null)], 0));
dcs.prototype_6.view.experiment.map.random_coordinates = (function dcs$prototype_6$view$experiment$map$random_coordinates(){
var vec__9711 = new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.view.experiment.map.default_bounds);
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9711,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9711,(1),null);
var vec__9714 = new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(dcs.prototype_6.view.experiment.map.default_bounds);
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9714,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9714,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$((lat1 + ((lat2 - lat1) * Math.random()))),cljs.core.long$((lng1 + ((lng2 - lng1) * Math.random())))], null);
})));
});
dcs.prototype_6.view.experiment.map.root = (function dcs$prototype_6$view$experiment$map$root(){
var x_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),dcs.prototype_6.view.experiment.map.random_coordinates())),new cljs.core.Keyword(null,"bounds","bounds",1691609455),dcs.prototype_6.view.experiment.map.default_bounds,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"hover","hover",-341141711),null,new cljs.core.Keyword(null,"leaflet","leaflet",1547983976),null], null));
console.log(x_state);

return (function (state,_){
var ref_fn = (function (el){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"leaflet","leaflet",1547983976),(cljs.core.truth_(el)?el.leafletElement:null));
});

return x_state;
});
});

//# sourceMappingURL=dcs.prototype_6.view.experiment.map.js.map
