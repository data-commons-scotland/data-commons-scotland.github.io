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
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/master/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__34992_35028 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__34993_35029 = null;
var count__34994_35030 = (0);
var i__34995_35031 = (0);
while(true){
if((i__34995_35031 < count__34994_35030)){
var tab_content_35032 = chunk__34993_35029.cljs$core$IIndexed$_nth$arity$2(null,i__34995_35031);
(tab_content_35032.style.display = "none");


var G__35033 = seq__34992_35028;
var G__35034 = chunk__34993_35029;
var G__35035 = count__34994_35030;
var G__35036 = (i__34995_35031 + (1));
seq__34992_35028 = G__35033;
chunk__34993_35029 = G__35034;
count__34994_35030 = G__35035;
i__34995_35031 = G__35036;
continue;
} else {
var temp__5735__auto___35037 = cljs.core.seq(seq__34992_35028);
if(temp__5735__auto___35037){
var seq__34992_35038__$1 = temp__5735__auto___35037;
if(cljs.core.chunked_seq_QMARK_(seq__34992_35038__$1)){
var c__4591__auto___35039 = cljs.core.chunk_first(seq__34992_35038__$1);
var G__35040 = cljs.core.chunk_rest(seq__34992_35038__$1);
var G__35041 = c__4591__auto___35039;
var G__35042 = cljs.core.count(c__4591__auto___35039);
var G__35043 = (0);
seq__34992_35028 = G__35040;
chunk__34993_35029 = G__35041;
count__34994_35030 = G__35042;
i__34995_35031 = G__35043;
continue;
} else {
var tab_content_35044 = cljs.core.first(seq__34992_35038__$1);
(tab_content_35044.style.display = "none");


var G__35045 = cljs.core.next(seq__34992_35038__$1);
var G__35050 = null;
var G__35051 = (0);
var G__35052 = (0);
seq__34992_35028 = G__35045;
chunk__34993_35029 = G__35050;
count__34994_35030 = G__35051;
i__34995_35031 = G__35052;
continue;
}
} else {
}
}
break;
}

var seq__34996_35053 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__34997_35054 = null;
var count__34998_35055 = (0);
var i__34999_35056 = (0);
while(true){
if((i__34999_35056 < count__34998_35055)){
var tab_35057 = chunk__34997_35054.cljs$core$IIndexed$_nth$arity$2(null,i__34999_35056);
(tab_35057.className = clojure.string.replace(tab_35057.className," is-active",""));


var G__35059 = seq__34996_35053;
var G__35060 = chunk__34997_35054;
var G__35061 = count__34998_35055;
var G__35062 = (i__34999_35056 + (1));
seq__34996_35053 = G__35059;
chunk__34997_35054 = G__35060;
count__34998_35055 = G__35061;
i__34999_35056 = G__35062;
continue;
} else {
var temp__5735__auto___35066 = cljs.core.seq(seq__34996_35053);
if(temp__5735__auto___35066){
var seq__34996_35067__$1 = temp__5735__auto___35066;
if(cljs.core.chunked_seq_QMARK_(seq__34996_35067__$1)){
var c__4591__auto___35068 = cljs.core.chunk_first(seq__34996_35067__$1);
var G__35069 = cljs.core.chunk_rest(seq__34996_35067__$1);
var G__35070 = c__4591__auto___35068;
var G__35071 = cljs.core.count(c__4591__auto___35068);
var G__35072 = (0);
seq__34996_35053 = G__35069;
chunk__34997_35054 = G__35070;
count__34998_35055 = G__35071;
i__34999_35056 = G__35072;
continue;
} else {
var tab_35073 = cljs.core.first(seq__34996_35067__$1);
(tab_35073.className = clojure.string.replace(tab_35073.className," is-active",""));


var G__35074 = cljs.core.next(seq__34996_35067__$1);
var G__35075 = null;
var G__35076 = (0);
var G__35077 = (0);
seq__34996_35053 = G__35074;
chunk__34997_35054 = G__35075;
count__34998_35055 = G__35076;
i__34999_35056 = G__35077;
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
var G__35001 = arguments.length;
switch (G__35001) {
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
