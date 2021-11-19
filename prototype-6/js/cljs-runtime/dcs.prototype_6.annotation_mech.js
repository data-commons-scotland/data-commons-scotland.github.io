goog.provide('dcs.prototype_6.annotation_mech');
dcs.prototype_6.annotation_mech.layer_annotations = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"datum.annotation != null"], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),new cljs.core.Keyword(null,"fontSize","fontSize",919623033)],[(0),"left","white","blue","text",(1),(5),"bold",(14)]),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"annotation"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"annotation-text",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),":"], null)], null)], null)], null);
dcs.prototype_6.annotation_mech.default_annotation_symbol = "\uD83D\uDCCD";
dcs.prototype_6.annotation_mech.record_matches_QMARK_ = (function dcs$prototype_6$annotation_mech$record_matches_QMARK_(criteria,record){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37459){
var vec__37460 = p__37459;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(record) : k.call(null,record)));
}),criteria));
});
dcs.prototype_6.annotation_mech.non_coord_keys = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
dcs.prototype_6.annotation_mech.apply_annotation = (function dcs$prototype_6$annotation_mech$apply_annotation(annotation,target_coll){
var criteria = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,annotation,dcs.prototype_6.annotation_mech.non_coord_keys);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (record){
if(dcs.prototype_6.annotation_mech.record_matches_QMARK_(criteria,record)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(record,new cljs.core.Keyword(null,"annotation","annotation",-344661666),cljs.core.get.cljs$core$IFn$_invoke$arity$3(annotation,new cljs.core.Keyword(null,"emoji","emoji",1031230144),dcs.prototype_6.annotation_mech.default_annotation_symbol)),new cljs.core.Keyword(null,"annotation-text","annotation-text",-1981375420),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(annotation,new cljs.core.Keyword(null,"emoji","emoji",1031230144),dcs.prototype_6.annotation_mech.default_annotation_symbol))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(annotation))].join('')),new cljs.core.Keyword(null,"annotation-url","annotation-url",-634435462),"#");
} else {
return record;
}
}),target_coll);
});
dcs.prototype_6.annotation_mech.apply_annotations = (function dcs$prototype_6$annotation_mech$apply_annotations(var_args){
var G__37465 = arguments.length;
switch (G__37465) {
case 2:
return dcs.prototype_6.annotation_mech.apply_annotations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dcs.prototype_6.annotation_mech.apply_annotations.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dcs.prototype_6.annotation_mech.apply_annotations.cljs$core$IFn$_invoke$arity$2 = (function (annotations,target_coll){
var annotations_todo = annotations;
var target_coll_updated = target_coll;
while(true){
if(cljs.core.empty_QMARK_(annotations_todo)){
return target_coll_updated;
} else {
var G__37467 = cljs.core.rest(annotations_todo);
var G__37468 = dcs.prototype_6.annotation_mech.apply_annotation(cljs.core.first(annotations_todo),target_coll_updated);
annotations_todo = G__37467;
target_coll_updated = G__37468;
continue;
}
break;
}
}));

(dcs.prototype_6.annotation_mech.apply_annotations.cljs$core$IFn$_invoke$arity$3 = (function (annotations,target_coll,record_type){
return dcs.prototype_6.annotation_mech.apply_annotations.cljs$core$IFn$_invoke$arity$2(annotations,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37463_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37463_SHARP_,new cljs.core.Keyword(null,"record-type","record-type",-997952932),record_type);
}),target_coll));
}));

(dcs.prototype_6.annotation_mech.apply_annotations.cljs$lang$maxFixedArity = 3);

dcs.prototype_6.annotation_mech.first_annotation_whose_record_criteria_matches = (function dcs$prototype_6$annotation_mech$first_annotation_whose_record_criteria_matches(annotations,record){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (annotation){
return dcs.prototype_6.annotation_mech.record_matches_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,annotation,dcs.prototype_6.annotation_mech.non_coord_keys),record);
}),annotations));
});
dcs.prototype_6.annotation_mech.vega_like_tooltip = (function dcs$prototype_6$annotation_mech$vega_like_tooltip(anchor,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown.is-hoverable","span.dropdown.is-hoverable",156003916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-trigger","span.dropdown-trigger",1018539664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.is-ghost","span.is-ghost",835497135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null),anchor], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-menu","span.dropdown-menu",-1619649233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#vg-tooltip-like","div#vg-tooltip-like",1456183344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.key","td.key",685127406),"::"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(anchor)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.prototype_6.annotation_mech.js.map
