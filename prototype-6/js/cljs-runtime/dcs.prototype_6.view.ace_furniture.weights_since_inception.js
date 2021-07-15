goog.provide('dcs.prototype_6.view.ace_furniture.weights_since_inception');
dcs.prototype_6.view.ace_furniture.weights_since_inception.chart_spec_category_level = (function dcs$prototype_6$view$ace_furniture$weights_since_inception$chart_spec_category_level(data){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"background","background",-863952629),"#fff1e5",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dcs.prototype_6.view.ace_furniture.shared.transform_spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"as","as",1148689641),"weight"], null)], null),new cljs.core.Keyword(null,"groupby","groupby",-497368173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["period","category"], null)], null)),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"cornerRadiusTopLeft","cornerRadiusTopLeft",-1216951048),(3),new cljs.core.Keyword(null,"cornerRadiusTopRight","cornerRadiusTopRight",-2094306983),(3)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"category",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"order","order",-1254677256),"descending"], null)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"weight",new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"total kg",new cljs.core.Keyword(null,"orient","orient",1933743565),"top"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),dcs.prototype_6.view.ace_furniture.shared.color_spec,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"category",new cljs.core.Keyword(null,"field","field",-1302436500),"category",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"period",new cljs.core.Keyword(null,"field","field",-1302436500),"period",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"kg",new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null)], null);
});
dcs.prototype_6.view.ace_furniture.weights_since_inception.chart_spec_item_level = (function dcs$prototype_6$view$ace_furniture$weights_since_inception$chart_spec_item_level(data){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"background","background",-863952629),"#fff1e5",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),dcs.prototype_6.view.ace_furniture.shared.transform_spec,new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"cornerRadiusTopLeft","cornerRadiusTopLeft",-1216951048),(3),new cljs.core.Keyword(null,"cornerRadiusTopRight","cornerRadiusTopRight",-2094306983),(3)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"sub-category",new cljs.core.Keyword(null,"field","field",-1302436500),"item",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"order","order",-1254677256),"descending"], null)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"weight",new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"total kg",new cljs.core.Keyword(null,"orient","orient",1933743565),"top"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),dcs.prototype_6.view.ace_furniture.shared.color_spec,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"category",new cljs.core.Keyword(null,"field","field",-1302436500),"category",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"sub-category",new cljs.core.Keyword(null,"field","field",-1302436500),"item",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"period",new cljs.core.Keyword(null,"field","field",-1302436500),"period",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"kg",new cljs.core.Keyword(null,"field","field",-1302436500),"weight",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null)], null);
});
dcs.prototype_6.view.ace_furniture.weights_since_inception.hint = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.is-small.has-text-info-dark","div.content.is-small.has-text-info-dark",-972313698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A coloured segment of a bar represents an ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"accounting"], null)," period."," Click on it to see further detail."], null)], null);
dcs.prototype_6.view.ace_furniture.weights_since_inception.tabbed_area = (function dcs$prototype_6$view$ace_furniture$weights_since_inception$tabbed_area(weights){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs","div.tabs",-1767258748),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tab-weights-since-inception.is-active","li.tab-weights-since-inception.is-active",-1774051250),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return dcs.prototype_6.util.open_tab(e,"weights-since-inception","category-level");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"Less detail"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tab-weights-since-inception","li.tab-weights-since-inception",1288041925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return dcs.prototype_6.util.open_tab(e,"weights-since-inception","item-level");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"More detail"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#category-level-weights-since-inception.content.tab-content-weights-since-inception","div#category-level-weights-since-inception.content.tab-content-weights-since-inception",778759626),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"total weight"], null)," of the items of furniture sold in each ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"category"], null),"."], null),dcs.prototype_6.view.ace_furniture.weights_since_inception.hint,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the concern of pollution avoidance, the weight of furniture is more representative than the number of items."," So weights are depicted in the graph below."," The categories ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-warning","span.has-text-warning",-1703543736),"Large Household Appliances"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-warning","span.has-text-warning",-1703543736),"Cooling Appliances"], null)," contain weighty items such as washing machines and fridge-freezers"," so it is unsurprising that those two categories feature higher up this weights chart [below] than they did"," in the counts chart [above]."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.ace_furniture.weights_since_inception.chart_spec_category_level(weights),dcs.prototype_6.util.vega_embed_opts], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#item-level-weights-since-inception.content.tab-content-weights-since-inception","div#item-level-weights-since-inception.content.tab-content-weights-since-inception",1720522121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"total weight"], null)," of the items of furniture sold in each ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"sub-category"], null),"."], null),dcs.prototype_6.view.ace_furniture.weights_since_inception.hint,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.prototype_6.view.ace_furniture.weights_since_inception.chart_spec_item_level(weights),dcs.prototype_6.util.vega_embed_opts], null)], null)], null);
});
dcs.prototype_6.view.ace_furniture.weights_since_inception.root = (function dcs$prototype_6$view$ace_furniture$weights_since_inception$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.ace_furniture.weights_since_inception.tabbed_area,cljs.core.deref(dcs.prototype_6.state.ace_furniture_weights_derivation_orig_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.ace_furniture.weights_since_inception.js.map
