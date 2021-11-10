goog.provide('dcs.prototype_6.state');
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.root !== 'undefined')){
} else {
dcs.prototype_6.state.root = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fairshare-derivation","fairshare-derivation",-1762662848),new cljs.core.Keyword(null,"business-waste-by-region-derivation","business-waste-by-region-derivation",-1497440959),new cljs.core.Keyword(null,"waste-site-derivation","waste-site-derivation",1441716515),new cljs.core.Keyword(null,"stirling-community-food-tonnes-derivation","stirling-community-food-tonnes-derivation",329935397),new cljs.core.Keyword(null,"stirling-bin-collection-derivation","stirling-bin-collection-derivation",1070247527),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"household-co2e-derivation","household-co2e-derivation",626105776),new cljs.core.Keyword(null,"meta-derivation","meta-derivation",-1841955659),new cljs.core.Keyword(null,"annotations","annotations",1640956248),new cljs.core.Keyword(null,"stirling-community-food-footfall-derivation","stirling-community-food-footfall-derivation",145481436)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"material","material",460118677),null,new cljs.core.Keyword(null,"co2e","co2e",1991479358),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"composition","composition",1834198617),null], null),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tonnes","tonnes",-913468653),null,new cljs.core.Keyword(null,"flow","flow",590489032),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"percent-recycled","percent-recycled",-587162431),null,new cljs.core.Keyword(null,"composition","composition",1834198617),null,new cljs.core.Keyword(null,"missed-bins","missed-bins",-732942122),null], null),null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"percent-recycled","percent-recycled",-587162431),null,new cljs.core.Keyword(null,"management","management",-516161795),null,new cljs.core.Keyword(null,"composition","composition",1834198617),null,new cljs.core.Keyword(null,"generation-positions","generation-positions",634586232),null,new cljs.core.Keyword(null,"percent-recycled-positions","percent-recycled-positions",1205146183),null], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"count","count",2139924085),null,new cljs.core.Keyword(null,"category-trends","category-trends",-1581889015),null,new cljs.core.Keyword(null,"item-trends","item-trends",-1085058419),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"flights-worth-per-category","flights-worth-per-category",-1723898859),null,new cljs.core.Keyword(null,"flights-worth-per-item","flights-worth-per-item",623874458),null], null),null,"Please select a region...",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"generation-positions","generation-positions",634586232),null], null),null,null,null]));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.route_match_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.route_match_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.geojson_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.geojson_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geojson","geojson",-719473398)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.region_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.region_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"region","region",270415120)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.meta_derivation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.meta_derivation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-derivation","meta-derivation",-1841955659)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_generation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_generation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"generation","generation",-2132542044)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_percent_recycled_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_percent_recycled_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"percent-recycled","percent-recycled",-587162431)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_management_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_management_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"management","management",-516161795)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_composition_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_composition_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"composition","composition",1834198617)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_generation_positions_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_generation_positions_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"generation-positions","generation-positions",634586232)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_derivation_percent_recycled_positions_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_derivation_percent_recycled_positions_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-derivation","household-waste-derivation",-738825683),new cljs.core.Keyword(null,"percent-recycled-positions","percent-recycled-positions",1205146183)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_co2e_derivation_generation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_co2e_derivation_generation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-co2e-derivation","household-co2e-derivation",626105776),new cljs.core.Keyword(null,"generation","generation",-2132542044)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_co2e_derivation_generation_positions_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_co2e_derivation_generation_positions_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-co2e-derivation","household-co2e-derivation",626105776),new cljs.core.Keyword(null,"generation-positions","generation-positions",634586232)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.business_waste_by_region_derivation_generation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.business_waste_by_region_derivation_generation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"business-waste-by-region-derivation","business-waste-by-region-derivation",-1497440959),new cljs.core.Keyword(null,"generation","generation",-2132542044)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.business_waste_by_region_derivation_composition_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.business_waste_by_region_derivation_composition_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"business-waste-by-region-derivation","business-waste-by-region-derivation",-1497440959),new cljs.core.Keyword(null,"composition","composition",1834198617)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.waste_site_derivation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.waste_site_derivation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"waste-site-derivation","waste-site-derivation",1441716515)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_bin_collection_derivation_generation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_bin_collection_derivation_generation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-bin-collection-derivation","stirling-bin-collection-derivation",1070247527),new cljs.core.Keyword(null,"generation","generation",-2132542044)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_bin_collection_derivation_percent_recycled_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_bin_collection_derivation_percent_recycled_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-bin-collection-derivation","stirling-bin-collection-derivation",1070247527),new cljs.core.Keyword(null,"percent-recycled","percent-recycled",-587162431)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_bin_collection_derivation_composition_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_bin_collection_derivation_composition_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-bin-collection-derivation","stirling-bin-collection-derivation",1070247527),new cljs.core.Keyword(null,"composition","composition",1834198617)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_bin_collection_derivation_missed_bins_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_bin_collection_derivation_missed_bins_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-bin-collection-derivation","stirling-bin-collection-derivation",1070247527),new cljs.core.Keyword(null,"missed-bins","missed-bins",-732942122)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_community_food_tonnes_derivation_tonnes_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_community_food_tonnes_derivation_tonnes_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-community-food-tonnes-derivation","stirling-community-food-tonnes-derivation",329935397),new cljs.core.Keyword(null,"tonnes","tonnes",-913468653)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_community_food_tonnes_derivation_flow_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_community_food_tonnes_derivation_flow_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-community-food-tonnes-derivation","stirling-community-food-tonnes-derivation",329935397),new cljs.core.Keyword(null,"flow","flow",590489032)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_community_food_footfall_derivation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_community_food_footfall_derivation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stirling-community-food-footfall-derivation","stirling-community-food-footfall-derivation",145481436)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.fairshare_derivation_material_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.fairshare_derivation_material_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fairshare-derivation","fairshare-derivation",-1762662848),new cljs.core.Keyword(null,"material","material",460118677)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.fairshare_derivation_co2e_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.fairshare_derivation_co2e_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fairshare-derivation","fairshare-derivation",-1762662848),new cljs.core.Keyword(null,"co2e","co2e",1991479358)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_derivation_count_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_derivation_count_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"count","count",2139924085)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_derivation_category_trends_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_derivation_category_trends_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"category-trends","category-trends",-1581889015)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_derivation_item_trends_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_derivation_item_trends_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"item-trends","item-trends",-1085058419)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_derivation_weight_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_derivation_weight_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_derivation_flights_per_category_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_derivation_flights_per_category_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"flights-worth-per-category","flights-worth-per-category",-1723898859)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_derivation_flights_per_item_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_derivation_flights_per_item_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ace-furniture-derivation","ace-furniture-derivation",298247535),new cljs.core.Keyword(null,"flights-worth-per-item","flights-worth-per-item",623874458)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_analysis_derivation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_analysis_derivation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"household-waste-analysis-derivation","household-waste-analysis-derivation",-22446818)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.annotations_derivation_cursor !== 'undefined')){
} else {
dcs.prototype_6.state.annotations_derivation_cursor = reagent.core.cursor(dcs.prototype_6.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"annotations","annotations",1640956248)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.meta_holder !== 'undefined')){
} else {
dcs.prototype_6.state.meta_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.population_holder !== 'undefined')){
} else {
dcs.prototype_6.state.population_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.co2e_multiplier_holder !== 'undefined')){
} else {
dcs.prototype_6.state.co2e_multiplier_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_co2e_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_co2e_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.business_waste_by_region_holder !== 'undefined')){
} else {
dcs.prototype_6.state.business_waste_by_region_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.waste_site_holder !== 'undefined')){
} else {
dcs.prototype_6.state.waste_site_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_bin_collection_holder !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_bin_collection_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_community_food_tonnes_holder !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_community_food_tonnes_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.stirling_community_food_footfall_holder !== 'undefined')){
} else {
dcs.prototype_6.state.stirling_community_food_footfall_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.fairshare_holder !== 'undefined')){
} else {
dcs.prototype_6.state.fairshare_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_count_holder !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_count_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_avg_weight_holder !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_avg_weight_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.ace_furniture_to_scottishCarbonMetric_holder !== 'undefined')){
} else {
dcs.prototype_6.state.ace_furniture_to_scottishCarbonMetric_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_analysis_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_analysis_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.regional_dashboard_annotations_holder !== 'undefined')){
} else {
dcs.prototype_6.state.regional_dashboard_annotations_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dcs !== 'undefined') && (typeof dcs.prototype_6 !== 'undefined') && (typeof dcs.prototype_6.state !== 'undefined') && (typeof dcs.prototype_6.state.household_waste_analysis_annotations_holder !== 'undefined')){
} else {
dcs.prototype_6.state.household_waste_analysis_annotations_holder = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}

//# sourceMappingURL=dcs.prototype_6.state.js.map
