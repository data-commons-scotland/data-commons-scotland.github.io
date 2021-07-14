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
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.1-beta/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.easier_repo_metadata = [dcs.prototype_6.util.easier_repo,"metadata/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__41374_41382 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__41375_41383 = null;
var count__41376_41384 = (0);
var i__41377_41385 = (0);
while(true){
if((i__41377_41385 < count__41376_41384)){
var tab_content_41390 = chunk__41375_41383.cljs$core$IIndexed$_nth$arity$2(null,i__41377_41385);
(tab_content_41390.style.display = "none");


var G__41392 = seq__41374_41382;
var G__41393 = chunk__41375_41383;
var G__41394 = count__41376_41384;
var G__41395 = (i__41377_41385 + (1));
seq__41374_41382 = G__41392;
chunk__41375_41383 = G__41393;
count__41376_41384 = G__41394;
i__41377_41385 = G__41395;
continue;
} else {
var temp__5735__auto___41396 = cljs.core.seq(seq__41374_41382);
if(temp__5735__auto___41396){
var seq__41374_41401__$1 = temp__5735__auto___41396;
if(cljs.core.chunked_seq_QMARK_(seq__41374_41401__$1)){
var c__4591__auto___41402 = cljs.core.chunk_first(seq__41374_41401__$1);
var G__41403 = cljs.core.chunk_rest(seq__41374_41401__$1);
var G__41404 = c__4591__auto___41402;
var G__41405 = cljs.core.count(c__4591__auto___41402);
var G__41406 = (0);
seq__41374_41382 = G__41403;
chunk__41375_41383 = G__41404;
count__41376_41384 = G__41405;
i__41377_41385 = G__41406;
continue;
} else {
var tab_content_41407 = cljs.core.first(seq__41374_41401__$1);
(tab_content_41407.style.display = "none");


var G__41421 = cljs.core.next(seq__41374_41401__$1);
var G__41422 = null;
var G__41423 = (0);
var G__41424 = (0);
seq__41374_41382 = G__41421;
chunk__41375_41383 = G__41422;
count__41376_41384 = G__41423;
i__41377_41385 = G__41424;
continue;
}
} else {
}
}
break;
}

var seq__41378_41447 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__41379_41448 = null;
var count__41380_41449 = (0);
var i__41381_41450 = (0);
while(true){
if((i__41381_41450 < count__41380_41449)){
var tab_41452 = chunk__41379_41448.cljs$core$IIndexed$_nth$arity$2(null,i__41381_41450);
(tab_41452.className = clojure.string.replace(tab_41452.className," is-active",""));


var G__41453 = seq__41378_41447;
var G__41454 = chunk__41379_41448;
var G__41455 = count__41380_41449;
var G__41456 = (i__41381_41450 + (1));
seq__41378_41447 = G__41453;
chunk__41379_41448 = G__41454;
count__41380_41449 = G__41455;
i__41381_41450 = G__41456;
continue;
} else {
var temp__5735__auto___41457 = cljs.core.seq(seq__41378_41447);
if(temp__5735__auto___41457){
var seq__41378_41458__$1 = temp__5735__auto___41457;
if(cljs.core.chunked_seq_QMARK_(seq__41378_41458__$1)){
var c__4591__auto___41459 = cljs.core.chunk_first(seq__41378_41458__$1);
var G__41460 = cljs.core.chunk_rest(seq__41378_41458__$1);
var G__41461 = c__4591__auto___41459;
var G__41462 = cljs.core.count(c__4591__auto___41459);
var G__41463 = (0);
seq__41378_41447 = G__41460;
chunk__41379_41448 = G__41461;
count__41380_41449 = G__41462;
i__41381_41450 = G__41463;
continue;
} else {
var tab_41464 = cljs.core.first(seq__41378_41458__$1);
(tab_41464.className = clojure.string.replace(tab_41464.className," is-active",""));


var G__41465 = cljs.core.next(seq__41378_41458__$1);
var G__41466 = null;
var G__41467 = (0);
var G__41468 = (0);
seq__41378_41447 = G__41465;
chunk__41379_41448 = G__41466;
count__41380_41449 = G__41467;
i__41381_41450 = G__41468;
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
