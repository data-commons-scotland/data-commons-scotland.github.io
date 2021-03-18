goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__32312,p__32313){
var map__32314 = p__32312;
var map__32314__$1 = (((((!((map__32314 == null))))?(((((map__32314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32314):map__32314);
var svc = map__32314__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32314__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32314__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32314__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32315 = p__32313;
var map__32315__$1 = (((((!((map__32315 == null))))?(((((map__32315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32315):map__32315);
var msg = map__32315__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32315__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32315__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32315__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32315__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__32318,p__32319){
var map__32320 = p__32318;
var map__32320__$1 = (((((!((map__32320 == null))))?(((((map__32320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32320):map__32320);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32320__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__32321 = p__32319;
var map__32321__$1 = (((((!((map__32321 == null))))?(((((map__32321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32321):map__32321);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32321__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__32324,p__32325){
var map__32326 = p__32324;
var map__32326__$1 = (((((!((map__32326 == null))))?(((((map__32326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32326):map__32326);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32326__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32326__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32327 = p__32325;
var map__32327__$1 = (((((!((map__32327 == null))))?(((((map__32327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32327):map__32327);
var msg = map__32327__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32327__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__32330,tid){
var map__32331 = p__32330;
var map__32331__$1 = (((((!((map__32331 == null))))?(((((map__32331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32331):map__32331);
var svc = map__32331__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32331__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__32337 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__32338 = null;
var count__32339 = (0);
var i__32340 = (0);
while(true){
if((i__32340 < count__32339)){
var vec__32347 = chunk__32338.cljs$core$IIndexed$_nth$arity$2(null,i__32340);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32347,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32347,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32356 = seq__32337;
var G__32357 = chunk__32338;
var G__32358 = count__32339;
var G__32359 = (i__32340 + (1));
seq__32337 = G__32356;
chunk__32338 = G__32357;
count__32339 = G__32358;
i__32340 = G__32359;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32337);
if(temp__5735__auto__){
var seq__32337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32337__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32337__$1);
var G__32360 = cljs.core.chunk_rest(seq__32337__$1);
var G__32361 = c__4556__auto__;
var G__32362 = cljs.core.count(c__4556__auto__);
var G__32363 = (0);
seq__32337 = G__32360;
chunk__32338 = G__32361;
count__32339 = G__32362;
i__32340 = G__32363;
continue;
} else {
var vec__32350 = cljs.core.first(seq__32337__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32364 = cljs.core.next(seq__32337__$1);
var G__32365 = null;
var G__32366 = (0);
var G__32367 = (0);
seq__32337 = G__32364;
chunk__32338 = G__32365;
count__32339 = G__32366;
i__32340 = G__32367;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__32333_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__32333_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__32334_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__32334_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__32335_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__32335_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__32336_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__32336_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__32353){
var map__32354 = p__32353;
var map__32354__$1 = (((((!((map__32354 == null))))?(((((map__32354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32354):map__32354);
var svc = map__32354__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32354__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32354__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
