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
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.0-beta/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.easier_repo_metadata = [dcs.prototype_6.util.easier_repo,"metadata/"].join('');
dcs.prototype_6.util.open_tab = (function dcs$prototype_6$util$open_tab(event,tab_group_suffix,tab_id){
var seq__29341_29366 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__29342_29367 = null;
var count__29343_29368 = (0);
var i__29344_29369 = (0);
while(true){
if((i__29344_29369 < count__29343_29368)){
var tab_content_29370 = chunk__29342_29367.cljs$core$IIndexed$_nth$arity$2(null,i__29344_29369);
(tab_content_29370.style.display = "none");


var G__29375 = seq__29341_29366;
var G__29376 = chunk__29342_29367;
var G__29377 = count__29343_29368;
var G__29378 = (i__29344_29369 + (1));
seq__29341_29366 = G__29375;
chunk__29342_29367 = G__29376;
count__29343_29368 = G__29377;
i__29344_29369 = G__29378;
continue;
} else {
var temp__5735__auto___29379 = cljs.core.seq(seq__29341_29366);
if(temp__5735__auto___29379){
var seq__29341_29380__$1 = temp__5735__auto___29379;
if(cljs.core.chunked_seq_QMARK_(seq__29341_29380__$1)){
var c__4591__auto___29381 = cljs.core.chunk_first(seq__29341_29380__$1);
var G__29382 = cljs.core.chunk_rest(seq__29341_29380__$1);
var G__29383 = c__4591__auto___29381;
var G__29384 = cljs.core.count(c__4591__auto___29381);
var G__29385 = (0);
seq__29341_29366 = G__29382;
chunk__29342_29367 = G__29383;
count__29343_29368 = G__29384;
i__29344_29369 = G__29385;
continue;
} else {
var tab_content_29386 = cljs.core.first(seq__29341_29380__$1);
(tab_content_29386.style.display = "none");


var G__29387 = cljs.core.next(seq__29341_29380__$1);
var G__29388 = null;
var G__29389 = (0);
var G__29390 = (0);
seq__29341_29366 = G__29387;
chunk__29342_29367 = G__29388;
count__29343_29368 = G__29389;
i__29344_29369 = G__29390;
continue;
}
} else {
}
}
break;
}

var seq__29345_29391 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__29346_29392 = null;
var count__29347_29393 = (0);
var i__29348_29394 = (0);
while(true){
if((i__29348_29394 < count__29347_29393)){
var tab_29395 = chunk__29346_29392.cljs$core$IIndexed$_nth$arity$2(null,i__29348_29394);
(tab_29395.className = clojure.string.replace(tab_29395.className," is-active",""));


var G__29396 = seq__29345_29391;
var G__29397 = chunk__29346_29392;
var G__29398 = count__29347_29393;
var G__29399 = (i__29348_29394 + (1));
seq__29345_29391 = G__29396;
chunk__29346_29392 = G__29397;
count__29347_29393 = G__29398;
i__29348_29394 = G__29399;
continue;
} else {
var temp__5735__auto___29400 = cljs.core.seq(seq__29345_29391);
if(temp__5735__auto___29400){
var seq__29345_29401__$1 = temp__5735__auto___29400;
if(cljs.core.chunked_seq_QMARK_(seq__29345_29401__$1)){
var c__4591__auto___29402 = cljs.core.chunk_first(seq__29345_29401__$1);
var G__29403 = cljs.core.chunk_rest(seq__29345_29401__$1);
var G__29404 = c__4591__auto___29402;
var G__29405 = cljs.core.count(c__4591__auto___29402);
var G__29406 = (0);
seq__29345_29391 = G__29403;
chunk__29346_29392 = G__29404;
count__29347_29393 = G__29405;
i__29348_29394 = G__29406;
continue;
} else {
var tab_29407 = cljs.core.first(seq__29345_29401__$1);
(tab_29407.className = clojure.string.replace(tab_29407.className," is-active",""));


var G__29408 = cljs.core.next(seq__29345_29401__$1);
var G__29409 = null;
var G__29410 = (0);
var G__29411 = (0);
seq__29345_29391 = G__29408;
chunk__29346_29392 = G__29409;
count__29347_29393 = G__29410;
i__29348_29394 = G__29411;
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
