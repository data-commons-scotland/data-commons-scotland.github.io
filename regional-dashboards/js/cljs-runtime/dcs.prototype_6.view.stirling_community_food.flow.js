goog.provide('dcs.prototype_6.view.stirling_community_food.flow');
dcs.prototype_6.view.stirling_community_food.flow.chart_config = (function dcs$prototype_6$view$stirling_community_food$flow$chart_config(flow){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#980f3d"], null),new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonOptions","buttonOptions",1802357592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null),new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),null,new cljs.core.Keyword(null,"accessibility","accessibility",-2088691226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDescriptionFormat","valueDescriptionFormat",-660700383),"{index}. {point.from} to {point.to}, {point.weight}."], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headerFormat","headerFormat",-1401572321),null,new cljs.core.Keyword(null,"pointFormat","pointFormat",-1370193740),"{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight:.2f} tonnes",new cljs.core.Keyword(null,"nodeFormat","nodeFormat",-1857750984),"{point.name}: {point.sum:.2f} tonnes"], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from","to","weight"], null),new cljs.core.Keyword(null,"minLinkWidth","minLinkWidth",703105857),(17),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minFontSize","minFontSize",-1728487852),(6)], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Would-be waste",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Not waste",new cljs.core.Keyword(null,"color","color",1011675173),"#00C9A9"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Stirling Community Food",new cljs.core.Keyword(null,"color","color",1011675173),"#B3AA99"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Not wasted",new cljs.core.Keyword(null,"color","color",1011675173),"#00C9A9"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Used as food",new cljs.core.Keyword(null,"color","color",1011675173),"#B6E6F6"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Donated to animal scantuary",new cljs.core.Keyword(null,"color","color",1011675173),"#AC8E00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Used for compost",new cljs.core.Keyword(null,"color","color",1011675173),"#A16A51"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Disposed of as waste",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"level","level",1290497552),(4)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),flow,new cljs.core.Keyword(null,"type","type",1174270348),"sankey",new cljs.core.Keyword(null,"name","name",1843675177),"The flow of food material"], null)], null),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null);
});
dcs.prototype_6.view.stirling_community_food.flow.did_mount = (function dcs$prototype_6$view$stirling_community_food$flow$did_mount(this$){
var flow = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
return (new Highcharts.Chart(reagent.dom.dom_node(this$),cljs.core.clj__GT_js(dcs.prototype_6.view.stirling_community_food.flow.chart_config(flow))));
});
dcs.prototype_6.view.stirling_community_food.flow.did_update = (function dcs$prototype_6$view$stirling_community_food$flow$did_update(this$,prev_props){
return dcs.prototype_6.view.stirling_community_food.flow.did_mount(this$);
});
dcs.prototype_6.view.stirling_community_food.flow.render = (function dcs$prototype_6$view$stirling_community_food$flow$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"310px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"820px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null)], null);
});
dcs.prototype_6.view.stirling_community_food.flow.component = (function dcs$prototype_6$view$stirling_community_food$flow$component(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),dcs.prototype_6.view.stirling_community_food.flow.render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),dcs.prototype_6.view.stirling_community_food.flow.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),dcs.prototype_6.view.stirling_community_food.flow.did_update], null));
});
dcs.prototype_6.view.stirling_community_food.flow.root = (function dcs$prototype_6$view$stirling_community_food$flow$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-vertical.is-parent","div.tile.is-vertical.is-parent",1401556234),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child","div.tile.is-child",-1119574467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.stirling_community_food.flow.component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(dcs.prototype_6.state.stirling_community_food_tonnes_derivation_flow_cursor)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child.has-text-primary-light.content","div.tile.is-child.has-text-primary-light.content",-1755356226),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Food materials flow left-to-right through Stirling Community Food's process."," On the left are the sources: supermarkets, collection aggregators, donors."," On the right are the outcomes, broadly: not wasted, or waste was unavoidable."," (Hover over a part to display the tonnes of food material flowing through that part of the process, during the year.)"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.stirling_community_food.flow.js.map