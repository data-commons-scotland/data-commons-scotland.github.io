goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34910,p__34911){
var map__34914 = p__34910;
var map__34914__$1 = cljs.core.__destructure_map(map__34914);
var svc = map__34914__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34915 = p__34911;
var map__34915__$1 = cljs.core.__destructure_map(map__34915);
var msg = map__34915__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34915__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34915__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34915__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34915__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34922,p__34923){
var map__34924 = p__34922;
var map__34924__$1 = cljs.core.__destructure_map(map__34924);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34924__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34925 = p__34923;
var map__34925__$1 = cljs.core.__destructure_map(map__34925);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34926,p__34927){
var map__34928 = p__34926;
var map__34928__$1 = cljs.core.__destructure_map(map__34928);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34928__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34928__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34929 = p__34927;
var map__34929__$1 = cljs.core.__destructure_map(map__34929);
var msg = map__34929__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34929__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34934,tid){
var map__34935 = p__34934;
var map__34935__$1 = cljs.core.__destructure_map(map__34935);
var svc = map__34935__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34935__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34956 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34957 = null;
var count__34958 = (0);
var i__34959 = (0);
while(true){
if((i__34959 < count__34958)){
var vec__34973 = chunk__34957.cljs$core$IIndexed$_nth$arity$2(null,i__34959);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34992 = seq__34956;
var G__34993 = chunk__34957;
var G__34994 = count__34958;
var G__34995 = (i__34959 + (1));
seq__34956 = G__34992;
chunk__34957 = G__34993;
count__34958 = G__34994;
i__34959 = G__34995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34956);
if(temp__5735__auto__){
var seq__34956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34956__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34956__$1);
var G__34996 = cljs.core.chunk_rest(seq__34956__$1);
var G__34997 = c__4591__auto__;
var G__34998 = cljs.core.count(c__4591__auto__);
var G__34999 = (0);
seq__34956 = G__34996;
chunk__34957 = G__34997;
count__34958 = G__34998;
i__34959 = G__34999;
continue;
} else {
var vec__34976 = cljs.core.first(seq__34956__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35000 = cljs.core.next(seq__34956__$1);
var G__35001 = null;
var G__35002 = (0);
var G__35003 = (0);
seq__34956 = G__35000;
chunk__34957 = G__35001;
count__34958 = G__35002;
i__34959 = G__35003;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34939_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34939_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34940_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34940_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34941_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34941_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34942_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34942_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34982){
var map__34986 = p__34982;
var map__34986__$1 = cljs.core.__destructure_map(map__34986);
var svc = map__34986__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
