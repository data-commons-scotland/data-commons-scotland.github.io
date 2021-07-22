goog.provide('dcs.prototype_6.util');
/**
 * Milliseconds since epoch
 */
dcs.prototype_6.util.now = (function dcs$prototype_6$util$now(){
return Date.now();
});
dcs.prototype_6.util.secs_to_now = (function dcs$prototype_6$util$secs_to_now(start_time){
return ((dcs.prototype_6.util.now() - start_time) / (1000));
});
dcs.prototype_6.util.date_str = (function dcs$prototype_6$util$date_str(year,quarter){
var q_map = new cljs.core.PersistentArrayMap(null, 4, [(1),"31 Mar",(2),"30 Jun",(3),"31 Aug",(4),"31 Dec"], null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((q_map.cljs$core$IFn$_invoke$arity$1 ? q_map.cljs$core$IFn$_invoke$arity$1(quarter) : q_map.call(null,quarter)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
dcs.prototype_6.util.vega_embed_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),false], null);
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.2-beta/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.easier_repo_metadata = [dcs.prototype_6.util.easier_repo,"metadata/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__34596_34604 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__34597_34605 = null;
var count__34598_34606 = (0);
var i__34599_34607 = (0);
while(true){
if((i__34599_34607 < count__34598_34606)){
var tab_content_34608 = chunk__34597_34605.cljs$core$IIndexed$_nth$arity$2(null,i__34599_34607);
(tab_content_34608.style.display = "none");


var G__34616 = seq__34596_34604;
var G__34617 = chunk__34597_34605;
var G__34618 = count__34598_34606;
var G__34619 = (i__34599_34607 + (1));
seq__34596_34604 = G__34616;
chunk__34597_34605 = G__34617;
count__34598_34606 = G__34618;
i__34599_34607 = G__34619;
continue;
} else {
var temp__5735__auto___34620 = cljs.core.seq(seq__34596_34604);
if(temp__5735__auto___34620){
var seq__34596_34621__$1 = temp__5735__auto___34620;
if(cljs.core.chunked_seq_QMARK_(seq__34596_34621__$1)){
var c__4591__auto___34622 = cljs.core.chunk_first(seq__34596_34621__$1);
var G__34623 = cljs.core.chunk_rest(seq__34596_34621__$1);
var G__34624 = c__4591__auto___34622;
var G__34625 = cljs.core.count(c__4591__auto___34622);
var G__34626 = (0);
seq__34596_34604 = G__34623;
chunk__34597_34605 = G__34624;
count__34598_34606 = G__34625;
i__34599_34607 = G__34626;
continue;
} else {
var tab_content_34627 = cljs.core.first(seq__34596_34621__$1);
(tab_content_34627.style.display = "none");


var G__34628 = cljs.core.next(seq__34596_34621__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34596_34604 = G__34628;
chunk__34597_34605 = G__34629;
count__34598_34606 = G__34630;
i__34599_34607 = G__34631;
continue;
}
} else {
}
}
break;
}

var seq__34600_34632 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__34601_34633 = null;
var count__34602_34634 = (0);
var i__34603_34635 = (0);
while(true){
if((i__34603_34635 < count__34602_34634)){
var tab_34636 = chunk__34601_34633.cljs$core$IIndexed$_nth$arity$2(null,i__34603_34635);
(tab_34636.className = clojure.string.replace(tab_34636.className," is-active",""));


var G__34638 = seq__34600_34632;
var G__34639 = chunk__34601_34633;
var G__34640 = count__34602_34634;
var G__34641 = (i__34603_34635 + (1));
seq__34600_34632 = G__34638;
chunk__34601_34633 = G__34639;
count__34602_34634 = G__34640;
i__34603_34635 = G__34641;
continue;
} else {
var temp__5735__auto___34645 = cljs.core.seq(seq__34600_34632);
if(temp__5735__auto___34645){
var seq__34600_34647__$1 = temp__5735__auto___34645;
if(cljs.core.chunked_seq_QMARK_(seq__34600_34647__$1)){
var c__4591__auto___34648 = cljs.core.chunk_first(seq__34600_34647__$1);
var G__34650 = cljs.core.chunk_rest(seq__34600_34647__$1);
var G__34651 = c__4591__auto___34648;
var G__34652 = cljs.core.count(c__4591__auto___34648);
var G__34653 = (0);
seq__34600_34632 = G__34650;
chunk__34601_34633 = G__34651;
count__34602_34634 = G__34652;
i__34603_34635 = G__34653;
continue;
} else {
var tab_34655 = cljs.core.first(seq__34600_34647__$1);
(tab_34655.className = clojure.string.replace(tab_34655.className," is-active",""));


var G__34656 = cljs.core.next(seq__34600_34647__$1);
var G__34657 = null;
var G__34658 = (0);
var G__34659 = (0);
seq__34600_34632 = G__34656;
chunk__34601_34633 = G__34657;
count__34602_34634 = G__34658;
i__34603_34635 = G__34659;
continue;
}
} else {
}
}
break;
}

(document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')).style.display = "block");

return (event.currentTarget.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.currentTarget.className)," is-active"].join(''));
});

//# sourceMappingURL=dcs.prototype_6.util.js.map
