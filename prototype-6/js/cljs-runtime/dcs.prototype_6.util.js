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
var seq__35838_35846 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__35839_35847 = null;
var count__35840_35848 = (0);
var i__35841_35849 = (0);
while(true){
if((i__35841_35849 < count__35840_35848)){
var tab_content_35850 = chunk__35839_35847.cljs$core$IIndexed$_nth$arity$2(null,i__35841_35849);
(tab_content_35850.style.display = "none");


var G__35851 = seq__35838_35846;
var G__35852 = chunk__35839_35847;
var G__35853 = count__35840_35848;
var G__35854 = (i__35841_35849 + (1));
seq__35838_35846 = G__35851;
chunk__35839_35847 = G__35852;
count__35840_35848 = G__35853;
i__35841_35849 = G__35854;
continue;
} else {
var temp__5735__auto___35855 = cljs.core.seq(seq__35838_35846);
if(temp__5735__auto___35855){
var seq__35838_35856__$1 = temp__5735__auto___35855;
if(cljs.core.chunked_seq_QMARK_(seq__35838_35856__$1)){
var c__4591__auto___35857 = cljs.core.chunk_first(seq__35838_35856__$1);
var G__35858 = cljs.core.chunk_rest(seq__35838_35856__$1);
var G__35859 = c__4591__auto___35857;
var G__35860 = cljs.core.count(c__4591__auto___35857);
var G__35861 = (0);
seq__35838_35846 = G__35858;
chunk__35839_35847 = G__35859;
count__35840_35848 = G__35860;
i__35841_35849 = G__35861;
continue;
} else {
var tab_content_35862 = cljs.core.first(seq__35838_35856__$1);
(tab_content_35862.style.display = "none");


var G__35863 = cljs.core.next(seq__35838_35856__$1);
var G__35864 = null;
var G__35865 = (0);
var G__35866 = (0);
seq__35838_35846 = G__35863;
chunk__35839_35847 = G__35864;
count__35840_35848 = G__35865;
i__35841_35849 = G__35866;
continue;
}
} else {
}
}
break;
}

var seq__35842_35867 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__35843_35868 = null;
var count__35844_35869 = (0);
var i__35845_35870 = (0);
while(true){
if((i__35845_35870 < count__35844_35869)){
var tab_35871 = chunk__35843_35868.cljs$core$IIndexed$_nth$arity$2(null,i__35845_35870);
(tab_35871.className = clojure.string.replace(tab_35871.className," is-active",""));


var G__35872 = seq__35842_35867;
var G__35873 = chunk__35843_35868;
var G__35874 = count__35844_35869;
var G__35875 = (i__35845_35870 + (1));
seq__35842_35867 = G__35872;
chunk__35843_35868 = G__35873;
count__35844_35869 = G__35874;
i__35845_35870 = G__35875;
continue;
} else {
var temp__5735__auto___35876 = cljs.core.seq(seq__35842_35867);
if(temp__5735__auto___35876){
var seq__35842_35877__$1 = temp__5735__auto___35876;
if(cljs.core.chunked_seq_QMARK_(seq__35842_35877__$1)){
var c__4591__auto___35878 = cljs.core.chunk_first(seq__35842_35877__$1);
var G__35879 = cljs.core.chunk_rest(seq__35842_35877__$1);
var G__35880 = c__4591__auto___35878;
var G__35881 = cljs.core.count(c__4591__auto___35878);
var G__35882 = (0);
seq__35842_35867 = G__35879;
chunk__35843_35868 = G__35880;
count__35844_35869 = G__35881;
i__35845_35870 = G__35882;
continue;
} else {
var tab_35883 = cljs.core.first(seq__35842_35877__$1);
(tab_35883.className = clojure.string.replace(tab_35883.className," is-active",""));


var G__35884 = cljs.core.next(seq__35842_35877__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35842_35867 = G__35884;
chunk__35843_35868 = G__35885;
count__35844_35869 = G__35886;
i__35845_35870 = G__35887;
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
