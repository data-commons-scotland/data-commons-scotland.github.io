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
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.6-beta/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__38578_38598 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__38579_38599 = null;
var count__38580_38600 = (0);
var i__38581_38601 = (0);
while(true){
if((i__38581_38601 < count__38580_38600)){
var tab_content_38608 = chunk__38579_38599.cljs$core$IIndexed$_nth$arity$2(null,i__38581_38601);
(tab_content_38608.style.display = "none");


var G__38611 = seq__38578_38598;
var G__38612 = chunk__38579_38599;
var G__38613 = count__38580_38600;
var G__38614 = (i__38581_38601 + (1));
seq__38578_38598 = G__38611;
chunk__38579_38599 = G__38612;
count__38580_38600 = G__38613;
i__38581_38601 = G__38614;
continue;
} else {
var temp__5735__auto___38615 = cljs.core.seq(seq__38578_38598);
if(temp__5735__auto___38615){
var seq__38578_38616__$1 = temp__5735__auto___38615;
if(cljs.core.chunked_seq_QMARK_(seq__38578_38616__$1)){
var c__4591__auto___38617 = cljs.core.chunk_first(seq__38578_38616__$1);
var G__38618 = cljs.core.chunk_rest(seq__38578_38616__$1);
var G__38619 = c__4591__auto___38617;
var G__38620 = cljs.core.count(c__4591__auto___38617);
var G__38621 = (0);
seq__38578_38598 = G__38618;
chunk__38579_38599 = G__38619;
count__38580_38600 = G__38620;
i__38581_38601 = G__38621;
continue;
} else {
var tab_content_38622 = cljs.core.first(seq__38578_38616__$1);
(tab_content_38622.style.display = "none");


var G__38623 = cljs.core.next(seq__38578_38616__$1);
var G__38624 = null;
var G__38625 = (0);
var G__38626 = (0);
seq__38578_38598 = G__38623;
chunk__38579_38599 = G__38624;
count__38580_38600 = G__38625;
i__38581_38601 = G__38626;
continue;
}
} else {
}
}
break;
}

var seq__38582_38627 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__38583_38628 = null;
var count__38584_38629 = (0);
var i__38585_38630 = (0);
while(true){
if((i__38585_38630 < count__38584_38629)){
var tab_38631 = chunk__38583_38628.cljs$core$IIndexed$_nth$arity$2(null,i__38585_38630);
(tab_38631.className = clojure.string.replace(tab_38631.className," is-active",""));


var G__38632 = seq__38582_38627;
var G__38633 = chunk__38583_38628;
var G__38634 = count__38584_38629;
var G__38635 = (i__38585_38630 + (1));
seq__38582_38627 = G__38632;
chunk__38583_38628 = G__38633;
count__38584_38629 = G__38634;
i__38585_38630 = G__38635;
continue;
} else {
var temp__5735__auto___38636 = cljs.core.seq(seq__38582_38627);
if(temp__5735__auto___38636){
var seq__38582_38637__$1 = temp__5735__auto___38636;
if(cljs.core.chunked_seq_QMARK_(seq__38582_38637__$1)){
var c__4591__auto___38638 = cljs.core.chunk_first(seq__38582_38637__$1);
var G__38639 = cljs.core.chunk_rest(seq__38582_38637__$1);
var G__38640 = c__4591__auto___38638;
var G__38641 = cljs.core.count(c__4591__auto___38638);
var G__38642 = (0);
seq__38582_38627 = G__38639;
chunk__38583_38628 = G__38640;
count__38584_38629 = G__38641;
i__38585_38630 = G__38642;
continue;
} else {
var tab_38643 = cljs.core.first(seq__38582_38637__$1);
(tab_38643.className = clojure.string.replace(tab_38643.className," is-active",""));


var G__38644 = cljs.core.next(seq__38582_38637__$1);
var G__38645 = null;
var G__38646 = (0);
var G__38647 = (0);
seq__38582_38627 = G__38644;
chunk__38583_38628 = G__38645;
count__38584_38629 = G__38646;
i__38585_38630 = G__38647;
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
var G__38587 = arguments.length;
switch (G__38587) {
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
