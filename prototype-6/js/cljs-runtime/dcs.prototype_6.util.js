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
var seq__31786_31829 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__31787_31835 = null;
var count__31788_31836 = (0);
var i__31789_31837 = (0);
while(true){
if((i__31789_31837 < count__31788_31836)){
var tab_content_31838 = chunk__31787_31835.cljs$core$IIndexed$_nth$arity$2(null,i__31789_31837);
(tab_content_31838.style.display = "none");


var G__31850 = seq__31786_31829;
var G__31851 = chunk__31787_31835;
var G__31852 = count__31788_31836;
var G__31853 = (i__31789_31837 + (1));
seq__31786_31829 = G__31850;
chunk__31787_31835 = G__31851;
count__31788_31836 = G__31852;
i__31789_31837 = G__31853;
continue;
} else {
var temp__5735__auto___31854 = cljs.core.seq(seq__31786_31829);
if(temp__5735__auto___31854){
var seq__31786_31855__$1 = temp__5735__auto___31854;
if(cljs.core.chunked_seq_QMARK_(seq__31786_31855__$1)){
var c__4591__auto___31856 = cljs.core.chunk_first(seq__31786_31855__$1);
var G__31857 = cljs.core.chunk_rest(seq__31786_31855__$1);
var G__31858 = c__4591__auto___31856;
var G__31859 = cljs.core.count(c__4591__auto___31856);
var G__31860 = (0);
seq__31786_31829 = G__31857;
chunk__31787_31835 = G__31858;
count__31788_31836 = G__31859;
i__31789_31837 = G__31860;
continue;
} else {
var tab_content_31861 = cljs.core.first(seq__31786_31855__$1);
(tab_content_31861.style.display = "none");


var G__31862 = cljs.core.next(seq__31786_31855__$1);
var G__31863 = null;
var G__31864 = (0);
var G__31865 = (0);
seq__31786_31829 = G__31862;
chunk__31787_31835 = G__31863;
count__31788_31836 = G__31864;
i__31789_31837 = G__31865;
continue;
}
} else {
}
}
break;
}

var seq__31790_31866 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__31791_31867 = null;
var count__31792_31868 = (0);
var i__31793_31869 = (0);
while(true){
if((i__31793_31869 < count__31792_31868)){
var tab_31870 = chunk__31791_31867.cljs$core$IIndexed$_nth$arity$2(null,i__31793_31869);
(tab_31870.className = clojure.string.replace(tab_31870.className," is-active",""));


var G__31871 = seq__31790_31866;
var G__31872 = chunk__31791_31867;
var G__31873 = count__31792_31868;
var G__31874 = (i__31793_31869 + (1));
seq__31790_31866 = G__31871;
chunk__31791_31867 = G__31872;
count__31792_31868 = G__31873;
i__31793_31869 = G__31874;
continue;
} else {
var temp__5735__auto___31875 = cljs.core.seq(seq__31790_31866);
if(temp__5735__auto___31875){
var seq__31790_31876__$1 = temp__5735__auto___31875;
if(cljs.core.chunked_seq_QMARK_(seq__31790_31876__$1)){
var c__4591__auto___31877 = cljs.core.chunk_first(seq__31790_31876__$1);
var G__31878 = cljs.core.chunk_rest(seq__31790_31876__$1);
var G__31879 = c__4591__auto___31877;
var G__31880 = cljs.core.count(c__4591__auto___31877);
var G__31881 = (0);
seq__31790_31866 = G__31878;
chunk__31791_31867 = G__31879;
count__31792_31868 = G__31880;
i__31793_31869 = G__31881;
continue;
} else {
var tab_31882 = cljs.core.first(seq__31790_31876__$1);
(tab_31882.className = clojure.string.replace(tab_31882.className," is-active",""));


var G__31883 = cljs.core.next(seq__31790_31876__$1);
var G__31884 = null;
var G__31885 = (0);
var G__31886 = (0);
seq__31790_31866 = G__31883;
chunk__31791_31867 = G__31884;
count__31792_31868 = G__31885;
i__31793_31869 = G__31886;
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
var G__31795 = arguments.length;
switch (G__31795) {
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
