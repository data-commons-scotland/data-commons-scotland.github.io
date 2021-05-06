goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33595,res){
var map__33596 = p__33595;
var map__33596__$1 = cljs.core.__destructure_map(map__33596);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33596__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33596__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33597 = res;
var G__33597__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33597,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33597);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33597__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33597__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33599 = arguments.length;
switch (G__33599) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33600,msg,handlers,timeout_after_ms){
var map__33601 = p__33600;
var map__33601__$1 = cljs.core.__destructure_map(map__33601);
var runtime = map__33601__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33601__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33655 = arguments.length;
var i__4772__auto___33656 = (0);
while(true){
if((i__4772__auto___33656 < len__4771__auto___33655)){
args__4777__auto__.push((arguments[i__4772__auto___33656]));

var G__33657 = (i__4772__auto___33656 + (1));
i__4772__auto___33656 = G__33657;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33605,ev,args){
var map__33606 = p__33605;
var map__33606__$1 = cljs.core.__destructure_map(map__33606);
var runtime = map__33606__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33606__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33607 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33610 = null;
var count__33611 = (0);
var i__33612 = (0);
while(true){
if((i__33612 < count__33611)){
var ext = chunk__33610.cljs$core$IIndexed$_nth$arity$2(null,i__33612);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33658 = seq__33607;
var G__33659 = chunk__33610;
var G__33660 = count__33611;
var G__33661 = (i__33612 + (1));
seq__33607 = G__33658;
chunk__33610 = G__33659;
count__33611 = G__33660;
i__33612 = G__33661;
continue;
} else {
var G__33662 = seq__33607;
var G__33663 = chunk__33610;
var G__33664 = count__33611;
var G__33665 = (i__33612 + (1));
seq__33607 = G__33662;
chunk__33610 = G__33663;
count__33611 = G__33664;
i__33612 = G__33665;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33607);
if(temp__5735__auto__){
var seq__33607__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33607__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33607__$1);
var G__33666 = cljs.core.chunk_rest(seq__33607__$1);
var G__33667 = c__4591__auto__;
var G__33668 = cljs.core.count(c__4591__auto__);
var G__33669 = (0);
seq__33607 = G__33666;
chunk__33610 = G__33667;
count__33611 = G__33668;
i__33612 = G__33669;
continue;
} else {
var ext = cljs.core.first(seq__33607__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33670 = cljs.core.next(seq__33607__$1);
var G__33671 = null;
var G__33672 = (0);
var G__33673 = (0);
seq__33607 = G__33670;
chunk__33610 = G__33671;
count__33611 = G__33672;
i__33612 = G__33673;
continue;
} else {
var G__33674 = cljs.core.next(seq__33607__$1);
var G__33675 = null;
var G__33676 = (0);
var G__33677 = (0);
seq__33607 = G__33674;
chunk__33610 = G__33675;
count__33611 = G__33676;
i__33612 = G__33677;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33602){
var G__33603 = cljs.core.first(seq33602);
var seq33602__$1 = cljs.core.next(seq33602);
var G__33604 = cljs.core.first(seq33602__$1);
var seq33602__$2 = cljs.core.next(seq33602__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33603,G__33604,seq33602__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33615,p__33616){
var map__33617 = p__33615;
var map__33617__$1 = cljs.core.__destructure_map(map__33617);
var runtime = map__33617__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33618 = p__33616;
var map__33618__$1 = cljs.core.__destructure_map(map__33618);
var msg = map__33618__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33618__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33619 = cljs.core.deref(state_ref);
var map__33619__$1 = cljs.core.__destructure_map(map__33619);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33619__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33619__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33620){
var map__33621 = p__33620;
var map__33621__$1 = cljs.core.__destructure_map(map__33621);
var runtime = map__33621__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33621__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33622,msg){
var map__33623 = p__33622;
var map__33623__$1 = cljs.core.__destructure_map(map__33623);
var runtime = map__33623__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33623__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33624,key,p__33625){
var map__33626 = p__33624;
var map__33626__$1 = cljs.core.__destructure_map(map__33626);
var state = map__33626__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33626__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33627 = p__33625;
var map__33627__$1 = cljs.core.__destructure_map(map__33627);
var spec = map__33627__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33627__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33629,key,spec){
var map__33630 = p__33629;
var map__33630__$1 = cljs.core.__destructure_map(map__33630);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33630__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33631_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33631_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33632_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33632_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33633_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33633_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33634_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33634_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33635_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33635_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33636,key){
var map__33637 = p__33636;
var map__33637__$1 = cljs.core.__destructure_map(map__33637);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33637__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33638,msg){
var map__33639 = p__33638;
var map__33639__$1 = cljs.core.__destructure_map(map__33639);
var runtime = map__33639__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33639__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33640,p__33641){
var map__33642 = p__33640;
var map__33642__$1 = cljs.core.__destructure_map(map__33642);
var runtime = map__33642__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33642__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33643 = p__33641;
var map__33643__$1 = cljs.core.__destructure_map(map__33643);
var msg = map__33643__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33644 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33646 = null;
var count__33647 = (0);
var i__33648 = (0);
while(true){
if((i__33648 < count__33647)){
var map__33652 = chunk__33646.cljs$core$IIndexed$_nth$arity$2(null,i__33648);
var map__33652__$1 = cljs.core.__destructure_map(map__33652);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33652__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33693 = seq__33644;
var G__33694 = chunk__33646;
var G__33695 = count__33647;
var G__33696 = (i__33648 + (1));
seq__33644 = G__33693;
chunk__33646 = G__33694;
count__33647 = G__33695;
i__33648 = G__33696;
continue;
} else {
var G__33697 = seq__33644;
var G__33698 = chunk__33646;
var G__33699 = count__33647;
var G__33700 = (i__33648 + (1));
seq__33644 = G__33697;
chunk__33646 = G__33698;
count__33647 = G__33699;
i__33648 = G__33700;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33644);
if(temp__5735__auto__){
var seq__33644__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33644__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33644__$1);
var G__33701 = cljs.core.chunk_rest(seq__33644__$1);
var G__33702 = c__4591__auto__;
var G__33703 = cljs.core.count(c__4591__auto__);
var G__33704 = (0);
seq__33644 = G__33701;
chunk__33646 = G__33702;
count__33647 = G__33703;
i__33648 = G__33704;
continue;
} else {
var map__33653 = cljs.core.first(seq__33644__$1);
var map__33653__$1 = cljs.core.__destructure_map(map__33653);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33653__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33705 = cljs.core.next(seq__33644__$1);
var G__33706 = null;
var G__33707 = (0);
var G__33708 = (0);
seq__33644 = G__33705;
chunk__33646 = G__33706;
count__33647 = G__33707;
i__33648 = G__33708;
continue;
} else {
var G__33709 = cljs.core.next(seq__33644__$1);
var G__33710 = null;
var G__33711 = (0);
var G__33712 = (0);
seq__33644 = G__33709;
chunk__33646 = G__33710;
count__33647 = G__33711;
i__33648 = G__33712;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
