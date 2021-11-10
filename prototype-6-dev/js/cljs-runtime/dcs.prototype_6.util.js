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
dcs.prototype_6.util.vega_embed_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword(null,"source","source",-433931539),false,new cljs.core.Keyword(null,"compiled","compiled",850043082),false,new cljs.core.Keyword(null,"editor","editor",-989377770),false], null),new cljs.core.Keyword(null,"downloadFileName","downloadFileName",209028182),"WasteMattersScotland-visualisation",new cljs.core.Keyword(null,"scaleFactor","scaleFactor",738753455),(2)], null);
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.5-beta/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__44588_44618 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__44589_44619 = null;
var count__44590_44620 = (0);
var i__44591_44621 = (0);
while(true){
if((i__44591_44621 < count__44590_44620)){
var tab_content_44622 = chunk__44589_44619.cljs$core$IIndexed$_nth$arity$2(null,i__44591_44621);
(tab_content_44622.style.display = "none");


var G__44630 = seq__44588_44618;
var G__44631 = chunk__44589_44619;
var G__44632 = count__44590_44620;
var G__44633 = (i__44591_44621 + (1));
seq__44588_44618 = G__44630;
chunk__44589_44619 = G__44631;
count__44590_44620 = G__44632;
i__44591_44621 = G__44633;
continue;
} else {
var temp__5735__auto___44634 = cljs.core.seq(seq__44588_44618);
if(temp__5735__auto___44634){
var seq__44588_44635__$1 = temp__5735__auto___44634;
if(cljs.core.chunked_seq_QMARK_(seq__44588_44635__$1)){
var c__4591__auto___44636 = cljs.core.chunk_first(seq__44588_44635__$1);
var G__44637 = cljs.core.chunk_rest(seq__44588_44635__$1);
var G__44638 = c__4591__auto___44636;
var G__44639 = cljs.core.count(c__4591__auto___44636);
var G__44640 = (0);
seq__44588_44618 = G__44637;
chunk__44589_44619 = G__44638;
count__44590_44620 = G__44639;
i__44591_44621 = G__44640;
continue;
} else {
var tab_content_44641 = cljs.core.first(seq__44588_44635__$1);
(tab_content_44641.style.display = "none");


var G__44642 = cljs.core.next(seq__44588_44635__$1);
var G__44643 = null;
var G__44644 = (0);
var G__44645 = (0);
seq__44588_44618 = G__44642;
chunk__44589_44619 = G__44643;
count__44590_44620 = G__44644;
i__44591_44621 = G__44645;
continue;
}
} else {
}
}
break;
}

var seq__44592_44646 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__44593_44647 = null;
var count__44594_44648 = (0);
var i__44595_44649 = (0);
while(true){
if((i__44595_44649 < count__44594_44648)){
var tab_44650 = chunk__44593_44647.cljs$core$IIndexed$_nth$arity$2(null,i__44595_44649);
(tab_44650.className = clojure.string.replace(tab_44650.className," is-active",""));


var G__44651 = seq__44592_44646;
var G__44652 = chunk__44593_44647;
var G__44653 = count__44594_44648;
var G__44654 = (i__44595_44649 + (1));
seq__44592_44646 = G__44651;
chunk__44593_44647 = G__44652;
count__44594_44648 = G__44653;
i__44595_44649 = G__44654;
continue;
} else {
var temp__5735__auto___44655 = cljs.core.seq(seq__44592_44646);
if(temp__5735__auto___44655){
var seq__44592_44656__$1 = temp__5735__auto___44655;
if(cljs.core.chunked_seq_QMARK_(seq__44592_44656__$1)){
var c__4591__auto___44657 = cljs.core.chunk_first(seq__44592_44656__$1);
var G__44658 = cljs.core.chunk_rest(seq__44592_44656__$1);
var G__44659 = c__4591__auto___44657;
var G__44660 = cljs.core.count(c__4591__auto___44657);
var G__44661 = (0);
seq__44592_44646 = G__44658;
chunk__44593_44647 = G__44659;
count__44594_44648 = G__44660;
i__44595_44649 = G__44661;
continue;
} else {
var tab_44662 = cljs.core.first(seq__44592_44656__$1);
(tab_44662.className = clojure.string.replace(tab_44662.className," is-active",""));


var G__44663 = cljs.core.next(seq__44592_44656__$1);
var G__44664 = null;
var G__44665 = (0);
var G__44666 = (0);
seq__44592_44646 = G__44663;
chunk__44593_44647 = G__44664;
count__44594_44648 = G__44665;
i__44595_44649 = G__44666;
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
dcs.prototype_6.util.scroll_fn = (function dcs$prototype_6$util$scroll_fn(var_args){
var G__44601 = arguments.length;
switch (G__44601) {
case 1:
return dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (function (){
var temp__5735__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5735__auto__)){
var ele = temp__5735__auto__;
ele.scrollIntoView(true);

ele.classList.add("is-selected");

var mousedown_handler = (function dcs$prototype_6$util$mousedown_handler(_e){
ele.classList.remove("is-selected");

return document.removeEventListener("mousedown",dcs$prototype_6$util$mousedown_handler);
});
document.addEventListener("mousedown",mousedown_handler);

var temp__5735__auto____$1 = window.scrollY;
if(cljs.core.truth_(temp__5735__auto____$1)){
var scrolledY = temp__5735__auto____$1;
return window.scroll((0),(scrolledY - (65)));
} else {
return null;
}
} else {
return null;
}
});
}));

(dcs.prototype_6.util.scroll_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (){
return window.scroll((0),(0));
});
}));

(dcs.prototype_6.util.scroll_fn.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=dcs.prototype_6.util.js.map
