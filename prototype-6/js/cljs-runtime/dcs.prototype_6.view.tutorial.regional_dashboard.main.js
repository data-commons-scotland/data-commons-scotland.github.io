goog.provide('dcs.prototype_6.view.tutorial.regional_dashboard.main');
dcs.prototype_6.view.tutorial.regional_dashboard.main.ele = (function dcs$prototype_6$view$tutorial$regional_dashboard$main$ele(household_waste_derivation_generation,household_waste_derivation_composition,household_waste_derivation_management,household_waste_derivation_generation_positions,household_waste_derivation_percent_recycled_positions,household_co2e_derivation_generation_positions){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero.is-small.has-background","section.hero.is-small.has-background",-512785727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.hero-background.is-transparent","img.hero-background.is-transparent",-1071871457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/home-page-top-hero.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"About the regional dashboard image"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.has-text-centered","div.content.has-text-centered",481664620),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.is-5","h1.title.is-5",1580980647),"Reading the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Regional Dashboard"], null)," page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.is-6.has-text-info","h2.subtitle.is-6.has-text-info",1010401666),"What the graphs show and what to look out for"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This page provides some information and guidance relating to the Waste Matters Scotland ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Regional Dashboard"], null)," page."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It is intended to help you:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"understand what the data are and where they come from"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"interpret the visualisations and ask questions about the data and what they mean"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title.is-5","h2.title.is-5",1452630316),"What are the data and where do they come from?"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Regional Dashboard"], null)," page displays a range of data sets relating to household"," and business waste for each of Scotland's unitary authorities."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The data are published by Scotland's Environment Protection Agency (SEPA). They are"," reported by the authorities, mostly on an annual basis. The latest available data are"," from the reports for the year 2019. The Waste Matters Scotland ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Regional Dashboard"], null)," page"," shows data going back to 2011, which means you can look for changes over time."], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you click on one of the authorities (or regions) on the map on the right-hand side of the page,"," the data associated with that region will be displayed in a series of graphs and visualisations on the left-hand side."," Data relating to household waste are shown at the top. It is important to note that these data relate to household"," waste generated ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"per person"], null)," and not to total amounts of waste. If you scroll down, you will also be able to see"," data relating to business waste."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title.is-5","h2.title.is-5",1452630316),"Interpreting the graphs and other data visualisations"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The first six data visulaisations displayed on this page relate to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"household waste"], null)," ."], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Ranking"], null)," information that tells you how this region compares to other regions"," for a series of metrics that relate to three of the Scottish Government's key aims. These aims are"," (1) to reduce the total amount of waste generated in Scotland, (2) to reduce the carbon footprint"," of the waste we generate and (3) to increase the fraction of the waste that we generate that goes to"," recycling rather than landfill.  The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Regional Dashboard"], null)," page shows you rankings for both the"," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"trend"], null)," (how quickly changes are being made) and the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"latest"], null)," reported figures."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-vcentered","div.columns.is-vcentered",-767831570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter","div.column.is-one-quarter",-204193934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.region_position.ele,"Stirling",household_waste_derivation_generation_positions,household_waste_derivation_percent_recycled_positions,household_co2e_derivation_generation_positions], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here is an example for Stirling.  We can see that this region is doing well in terms of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"latest"], null),""," figures: these tell us that, in 2019, the amount of waste generated per person was the 14th lowest in"," Scotland, the carbon footprint of that waste per person was the 7th lowest in Scotland, and the fraction"," of waste being recycled was the 10th highest in Scotland. The rankings for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"trends"], null)," may not seem"," so impressive, but perhaps this is because it is hard to keep improving when you are already doing well."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-vcentered","div.columns.is-vcentered",-767831570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"To the right of the ranking information, you can see a graph of how the household waste generated per person has"," varied in the 2011-2019 period. The data for the region you have selected are indicated by an ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fdae6b"], null)], null),"orange"], null)," trendline."," This graph also includes the overall Scottish average waste generated per person for the same period, shown in"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#1f77b4"], null)], null),"blue"], null),". We have also included a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),"grey"], null)," dashed trend line showing what your selected region would need to achieve in order"," to meet the Scottish Government's target, assuming that the region reduces its household waste generated per person"," by the same amount each year.  There are several things to look out for when reading these graphs. First, look at the"," range displayed on the y-axis.  It might look like the data are fluctuating wildly, but if the differences between each"," year are small compared to the overall amount, this might not be significant.  For example, if we look at Stirling's"," data, at first glance it might be tempting to say there was a surprising increase in 2016. However, the total amount of"," waste generated per person changed from 0.433 tonnes in 2014 to 0.472 tonnes in 2016. This is only a 6% increase.  It"," may still be worth asking why this increase happened, though!"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter","div.column.is-one-quarter",-204193934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.household_waste_derivation_generation.chart,"Stirling",household_waste_derivation_generation], null)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Once you have satisfied yourself that any variations between years are significant, it's time to start asking questions"," about why they might have happened. It may be that there was a change in how something was reported, or in a region's waste"," collections or waste management contracts.  Or it may be that there was a change in the actual waste being generated. "," The next two graphs you see may contain clues to help us understand what is going on. The first of these is the"," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Composition"], null)," graph."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-vcentered","div.columns.is-vcentered",-767831570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter","div.column.is-one-quarter",-204193934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.household_waste_derivation_composition.chart,"Stirling",household_waste_derivation_composition], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Composition"], null)," graph shows us information about the types of waste that make up the household waste stream."," The graph takes the form of a stacked bar chart, where the different colours in a single column indicate different categories"," of waste.  These are the categroies used by SEPA and by local authorities when they report to SEPA.  If you move your mouse"," up and down a column, you will see what the different waste categories are.  Stirloing's figures tell us that the dominant"," component of household waste falls into the category ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Household and similar wastes"], null),", which is probably not surprising."," The second biggest contribution to household waste falls into the category ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Vegetal wastes"], null),". It's worth asking just"," what this category means and whether it is the same for all regions.  For the period covered by the graph, Stirling operated"," separate collections for food and garden wastes.  It may be that its garden waste collections were reported as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Vegetal"], null),""," while domestic food waste may have been reported under ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Animal and mixed food wastes"], null),"."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-vcentered","div.columns.is-vcentered",-767831570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Next to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Composition"], null)," graph, you can see the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Management"], null)," graph, which shows us information about where"," our household wastes end up. This is displayed as another stacked bar chart, with just three possible destinations: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Landfilled"], null),","," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Recycled"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Other diversion"], null),". This last category can include more environmentally sustainable destinations such"," as biomass energy generation, but it can also include incineration.  The data show that Stirling doesn't send a great deal of its household"," waste to destinations other than landfill or recycling, but we can see that in some years there has been a more singificant amount of"," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Other Diversion"], null)," than others.  You might want to ask your local authority what this category means for them - and if you live"," in Stirling, you might want to ask why there was more of this reported in 2016 than in any other year."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter","div.column.is-one-quarter",-204193934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"250px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.regional_dashboard.household_waste_derivation_management.chart,"Stirling",household_waste_derivation_management], null)], null)], null)], null)], null)], null)], null)], null);
});
dcs.prototype_6.view.tutorial.regional_dashboard.main.root = (function dcs$prototype_6$view$tutorial$regional_dashboard$main$root(){
reagent.core.after_render(dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$0());

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.view.tutorial.regional_dashboard.main.ele,cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_generation_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_composition_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_management_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_generation_positions_cursor),cljs.core.deref(dcs.prototype_6.state.household_waste_derivation_percent_recycled_positions_cursor),cljs.core.deref(dcs.prototype_6.state.household_co2e_derivation_generation_positions_cursor)], null);
});

//# sourceMappingURL=dcs.prototype_6.view.tutorial.regional_dashboard.main.js.map
