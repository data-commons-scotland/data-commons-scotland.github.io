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
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/master/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__55564_55572 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__55565_55573 = null;
var count__55566_55574 = (0);
var i__55567_55575 = (0);
while(true){
if((i__55567_55575 < count__55566_55574)){
var tab_content_55576 = chunk__55565_55573.cljs$core$IIndexed$_nth$arity$2(null,i__55567_55575);
(tab_content_55576.style.display = "none");


var G__55577 = seq__55564_55572;
var G__55578 = chunk__55565_55573;
var G__55579 = count__55566_55574;
var G__55580 = (i__55567_55575 + (1));
seq__55564_55572 = G__55577;
chunk__55565_55573 = G__55578;
count__55566_55574 = G__55579;
i__55567_55575 = G__55580;
continue;
} else {
var temp__5735__auto___55581 = cljs.core.seq(seq__55564_55572);
if(temp__5735__auto___55581){
var seq__55564_55582__$1 = temp__5735__auto___55581;
if(cljs.core.chunked_seq_QMARK_(seq__55564_55582__$1)){
var c__4591__auto___55583 = cljs.core.chunk_first(seq__55564_55582__$1);
var G__55584 = cljs.core.chunk_rest(seq__55564_55582__$1);
var G__55585 = c__4591__auto___55583;
var G__55586 = cljs.core.count(c__4591__auto___55583);
var G__55587 = (0);
seq__55564_55572 = G__55584;
chunk__55565_55573 = G__55585;
count__55566_55574 = G__55586;
i__55567_55575 = G__55587;
continue;
} else {
var tab_content_55589 = cljs.core.first(seq__55564_55582__$1);
(tab_content_55589.style.display = "none");


var G__55591 = cljs.core.next(seq__55564_55582__$1);
var G__55592 = null;
var G__55593 = (0);
var G__55594 = (0);
seq__55564_55572 = G__55591;
chunk__55565_55573 = G__55592;
count__55566_55574 = G__55593;
i__55567_55575 = G__55594;
continue;
}
} else {
}
}
break;
}

var seq__55568_55595 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__55569_55596 = null;
var count__55570_55597 = (0);
var i__55571_55598 = (0);
while(true){
if((i__55571_55598 < count__55570_55597)){
var tab_55601 = chunk__55569_55596.cljs$core$IIndexed$_nth$arity$2(null,i__55571_55598);
(tab_55601.className = clojure.string.replace(tab_55601.className," is-active",""));


var G__55603 = seq__55568_55595;
var G__55604 = chunk__55569_55596;
var G__55605 = count__55570_55597;
var G__55606 = (i__55571_55598 + (1));
seq__55568_55595 = G__55603;
chunk__55569_55596 = G__55604;
count__55570_55597 = G__55605;
i__55571_55598 = G__55606;
continue;
} else {
var temp__5735__auto___55608 = cljs.core.seq(seq__55568_55595);
if(temp__5735__auto___55608){
var seq__55568_55609__$1 = temp__5735__auto___55608;
if(cljs.core.chunked_seq_QMARK_(seq__55568_55609__$1)){
var c__4591__auto___55612 = cljs.core.chunk_first(seq__55568_55609__$1);
var G__55615 = cljs.core.chunk_rest(seq__55568_55609__$1);
var G__55616 = c__4591__auto___55612;
var G__55617 = cljs.core.count(c__4591__auto___55612);
var G__55618 = (0);
seq__55568_55595 = G__55615;
chunk__55569_55596 = G__55616;
count__55570_55597 = G__55617;
i__55571_55598 = G__55618;
continue;
} else {
var tab_55621 = cljs.core.first(seq__55568_55609__$1);
(tab_55621.className = clojure.string.replace(tab_55621.className," is-active",""));


var G__55629 = cljs.core.next(seq__55568_55609__$1);
var G__55630 = null;
var G__55631 = (0);
var G__55632 = (0);
seq__55568_55595 = G__55629;
chunk__55569_55596 = G__55630;
count__55570_55597 = G__55631;
i__55571_55598 = G__55632;
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
dcs.prototype_6.util.scroll_fn = (function dcs$prototype_6$util$scroll_fn(id){
return (function (){
var temp__5735__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5735__auto__)){
var ele = temp__5735__auto__;
ele.scrollIntoView(true);

ele.classList.add("is-selected");

var mousedown_handler = (function dcs$prototype_6$util$scroll_fn_$_mousedown_handler(_e){
ele.classList.remove("is-selected");

return document.removeEventListener("mousedown",dcs$prototype_6$util$scroll_fn_$_mousedown_handler);
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
});

//# sourceMappingURL=dcs.prototype_6.util.js.map
