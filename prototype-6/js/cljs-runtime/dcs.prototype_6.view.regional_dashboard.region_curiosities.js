goog.provide('dcs.prototype_6.view.regional_dashboard.region_curiosities');
dcs.prototype_6.view.regional_dashboard.region_curiosities.ele = (function dcs$prototype_6$view$regional_dashboard$region_curiosities$ele(region){
var points_of_interest = cljs.core.PersistentHashMap.fromArrays(["Aberdeenshire","Aberdeen City","Glasgow City","East Renfrewshire","City of Edinburgh","Fife","Stirling","Dundee City","Perth and Kinross","Inverclyde","Highland","Clackmannanshire","Outer Hebrides"],[new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Aberdeenshire's household waste data shows what the region has been achieving \n                               in terms of waste generated per person since 2011.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-success","span.has-text-success",1804041919)," It is now approaching the Scottish average"], null),", although the rate of this reduction will need to increase further if it is going to meet the Government's overall target by 2025."," However, Aberdeenshire's business waste data shows that it is not only \n                                significantly higher than the Scottish average - it has also been generally increasing since around 2012."," This increase seems to be largely driven by increases in waste in the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Vegetal"], null)," and \n                              ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Animal and mixed food waste"], null)," categories."," The data also show that both the total amount of domestic waste going to recycling and the fraction of all waste\n                              being managed has remained fairly static for the past few years."," This raises some intersting questions. Aberdeenshire is a rich farming area, which may account for the significant \n                              contributions of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Vegetal"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Animal and mixed food waste"], null)," to the business waste figures. \n                              So, could a reduction in \n                              business waste be achieved by targeting the agricultural sector? And what can be done to increase \n                              the fraction of domestic waste going to recycling, to help aberdeenshire head towards the Government's targets?\n                              Is it simply a matter of education, or do we need to accept that some regions have contextual factors such as\n                              geography, access to recycling facilities, etc., and make the targets more sensitive to these factors?"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-success","span.has-text-success",1804041919),"The available data on Aberdeen City's household waste suggests that \n                               it is moving in the right direction in relation to reaching the Scottish Government's \n                               waste reduction targets."], null)," In 2017/18 the fraction of household waste that went to recycling overtook the Scottish average. \n                              However, it still has a way to go before it reaches the Government's goal of 70% recycling, \n                              which is set for 2025."," The data raise some interesting questions. For example, they show that in 2017, a significant \n                              proportion of Aberdeen City's household waste that was previously going to landfill was instead\n                              managed through ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Other Diversion"], null),". We might ask, \n                              what is happening to this waste - is it going to, e.g., energy generation, or is it simply being \n                              incinerated?"," Another, related questio relates to the increasing percentage of recycled waste after 2017. Looking at \n                              the absolute numbers, there has been a small increase in the amounts of waste going to recycling. However, \n                              there has also been a reduction in the total amount of non-recycled waste (i.e. the sum of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Landfill"], null)," and \n                              ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Other Diversion"], null),"). What has caused these changes? Is it something other regions can learn from, such \n                              as changes to waste collections or public awareness and education campaigns?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-danger","span.has-text-danger",793686875),"Glasgow City doesn't seem to be doing so great"], null)," Although their latest data about the generation of household waste (an important metric) does place them noticably better than the Scottish average."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-success","span.has-text-success",1804041919),"East Renfrewshire's recycling of household waste is impressive."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-warning","span.has-text-warning",-1703543736)," However, that acheivement is tempered by its high household waste generation figures."], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-grey","span.has-text-grey",-1658302344),"The City of Edinburgh is broadly following the trends of Scotland as a whole, for household waste."], null)," But there are a few noticable peaks and toughs in its data graphs."," In household waste during 2019, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Combustable wastes"], null)," spiked as did, as did waste management by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Other Diversion"], null)," (i.e. through inceneration, bio gas generation, etc.)."," And in 2016, its % recycled reeached the Scottish average but then fell away in subsequent years."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-warning","span.has-text-warning",-1703543736),"Fife's latest household waste figures aren't so good."], null)," But, it does have the best trend in household waste reduction."," Also interesting is that the signature of Fife's Longannet power station (including its closing in 2016) can be seen in its business ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Combustion wastes"], null)," data.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"Related: "], null),"the Fife region in ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dcs.prototype-6.router","waste-through-time-map-view","dcs.prototype-6.router/waste-through-time-map-view",-656682454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preset","preset",777387345),"hvb"], null))], null),"Waste through the decade"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-grey","span.has-text-grey",-1658302344),"Stirling is broadly following the trends of Scotland as a whole, for household waste."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"Related: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","stirling-bin-collection-view","dcs.prototype-6.router/stirling-bin-collection-view",1993053231))], null),"Stirling's bin collection"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","stirling-community-food-view","dcs.prototype-6.router/stirling-community-food-view",2069488221))], null),"Stirling Community Food"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","fairshare-view","dcs.prototype-6.router/fairshare-view",1225940928))], null),"The Fair Share"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-warning","span.has-text-warning",-1703543736),"Dundee City's household waste trends look concerning."], null)," But these trends are adversely affected by its irregular 2011 figures which might be due to an old accounting method."," Also, in its management of household waste, its sends the majority to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Other Diversion"], null)," (i.e. to inceneration, bio gas generation, etc.)"," and surprisingly low proportions are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Landfilled"], null),"."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-grey","span.has-text-grey",-1658302344),"Perth and Kinross is broadly following the trends of Scotland as a whole, for household waste."], null)," Its data shows an anomaly in its business waste ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Common sludges"], null)," in 2016 (perhaps some of the 2017 amount ought to have been accounted against the 2015 year?)."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-success","span.has-text-success",1804041919),"Inverclyde is doing well."], null)," In the latest data (2019), it generates the fewest tonnes of household waste (per citizen) of any of the council areas."," And its same 1st position for CO",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),"2"], null),"e indicates the close relation between the amount of waste generated and its carbon impact."," Also, in its latest year's business waste data, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Common sludges"], null)," has reduced significantly."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-danger","span.has-text-danger",793686875),"Highland doesn't seem to be doing so well."], null)," But its positions are similar to most of the other rural and island regions."," In particular, its % recycled of household waste is falling behind the Scottish average."], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-danger","span.has-text-danger",793686875),"Clackmannanshire's graphs show curious spikes."], null)," In 2016 there were spikes in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Mixed and undifferentiated materials"], null)," for both household and business waste."," There is also a noticable drip in household waste recyling around 2016.\u200B",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-grey","span.has-text-grey",-1658302344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Why?"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"Also see: "], null)," the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","ace-furniture-view","dcs.prototype-6.router/ace-furniture-view",1517928476))], null),"ACE Furniture"], null)," reuse initative"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-danger","span.has-text-danger",793686875),"The Outer Hebrides doesn't seem to be doing so well."], null)," But its positions are similar to most of the other rural and island regions."," One curiousity is the large amount of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Soils"], null)," that came into the Bennadrove landfill site on the Isle of Lewis in 2019.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-info","span.has-text-info",-819636370),"Related: "], null),"the Isle of Lewis in ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dcs.prototype-6.router","waste-sites-map-view","dcs.prototype-6.router/waste-sites-map-view",776786687))], null),"Waste sites"], null)], null)], null)]);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(points_of_interest,region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)," "], null));
});
dcs.prototype_6.view.regional_dashboard.region_curiosities.root = (function dcs$prototype_6$view$regional_dashboard$region_curiosities$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.region_curiosities.ele,cljs.core.deref(dcs.prototype_6.state.region_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.regional_dashboard.region_curiosities.js.map
