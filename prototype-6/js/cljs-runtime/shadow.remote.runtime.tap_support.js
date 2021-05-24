goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34935,p__34936){
var map__34937 = p__34935;
var map__34937__$1 = cljs.core.__destructure_map(map__34937);
var svc = map__34937__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34938 = p__34936;
var map__34938__$1 = cljs.core.__destructure_map(map__34938);
var msg = map__34938__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34938__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34939,p__34940){
var map__34941 = p__34939;
var map__34941__$1 = cljs.core.__destructure_map(map__34941);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34941__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34942 = p__34940;
var map__34942__$1 = cljs.core.__destructure_map(map__34942);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34942__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34943,p__34944){
var map__34945 = p__34943;
var map__34945__$1 = cljs.core.__destructure_map(map__34945);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34945__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34945__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34946 = p__34944;
var map__34946__$1 = cljs.core.__destructure_map(map__34946);
var msg = map__34946__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34946__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34947,tid){
var map__34948 = p__34947;
var map__34948__$1 = cljs.core.__destructure_map(map__34948);
var svc = map__34948__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34948__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34953 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34954 = null;
var count__34955 = (0);
var i__34956 = (0);
while(true){
if((i__34956 < count__34955)){
var vec__34963 = chunk__34954.cljs$core$IIndexed$_nth$arity$2(null,i__34956);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34971 = seq__34953;
var G__34972 = chunk__34954;
var G__34973 = count__34955;
var G__34974 = (i__34956 + (1));
seq__34953 = G__34971;
chunk__34954 = G__34972;
count__34955 = G__34973;
i__34956 = G__34974;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34953);
if(temp__5735__auto__){
var seq__34953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34953__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34953__$1);
var G__34975 = cljs.core.chunk_rest(seq__34953__$1);
var G__34976 = c__4591__auto__;
var G__34977 = cljs.core.count(c__4591__auto__);
var G__34978 = (0);
seq__34953 = G__34975;
chunk__34954 = G__34976;
count__34955 = G__34977;
i__34956 = G__34978;
continue;
} else {
var vec__34966 = cljs.core.first(seq__34953__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34979 = cljs.core.next(seq__34953__$1);
var G__34980 = null;
var G__34981 = (0);
var G__34982 = (0);
seq__34953 = G__34979;
chunk__34954 = G__34980;
count__34955 = G__34981;
i__34956 = G__34982;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34949_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34949_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34950_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34950_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34951_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34951_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34952_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34952_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34969){
var map__34970 = p__34969;
var map__34970__$1 = cljs.core.__destructure_map(map__34970);
var svc = map__34970__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
