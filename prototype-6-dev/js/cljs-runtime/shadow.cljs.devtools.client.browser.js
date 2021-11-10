goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35498 = arguments.length;
var i__4772__auto___35499 = (0);
while(true){
if((i__4772__auto___35499 < len__4771__auto___35498)){
args__4777__auto__.push((arguments[i__4772__auto___35499]));

var G__35500 = (i__4772__auto___35499 + (1));
i__4772__auto___35499 = G__35500;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35280){
var G__35281 = cljs.core.first(seq35280);
var seq35280__$1 = cljs.core.next(seq35280);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35281,seq35280__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35283 = cljs.core.seq(sources);
var chunk__35284 = null;
var count__35285 = (0);
var i__35286 = (0);
while(true){
if((i__35286 < count__35285)){
var map__35295 = chunk__35284.cljs$core$IIndexed$_nth$arity$2(null,i__35286);
var map__35295__$1 = cljs.core.__destructure_map(map__35295);
var src = map__35295__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35296){var e_35504 = e35296;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35504);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35504.message)].join('')));
}

var G__35505 = seq__35283;
var G__35506 = chunk__35284;
var G__35507 = count__35285;
var G__35508 = (i__35286 + (1));
seq__35283 = G__35505;
chunk__35284 = G__35506;
count__35285 = G__35507;
i__35286 = G__35508;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35283);
if(temp__5735__auto__){
var seq__35283__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35283__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35283__$1);
var G__35509 = cljs.core.chunk_rest(seq__35283__$1);
var G__35510 = c__4591__auto__;
var G__35511 = cljs.core.count(c__4591__auto__);
var G__35512 = (0);
seq__35283 = G__35509;
chunk__35284 = G__35510;
count__35285 = G__35511;
i__35286 = G__35512;
continue;
} else {
var map__35298 = cljs.core.first(seq__35283__$1);
var map__35298__$1 = cljs.core.__destructure_map(map__35298);
var src = map__35298__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35299){var e_35513 = e35299;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35513);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35513.message)].join('')));
}

var G__35514 = cljs.core.next(seq__35283__$1);
var G__35515 = null;
var G__35516 = (0);
var G__35517 = (0);
seq__35283 = G__35514;
chunk__35284 = G__35515;
count__35285 = G__35516;
i__35286 = G__35517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35301 = cljs.core.seq(js_requires);
var chunk__35302 = null;
var count__35303 = (0);
var i__35304 = (0);
while(true){
if((i__35304 < count__35303)){
var js_ns = chunk__35302.cljs$core$IIndexed$_nth$arity$2(null,i__35304);
var require_str_35518 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35518);


var G__35519 = seq__35301;
var G__35520 = chunk__35302;
var G__35521 = count__35303;
var G__35522 = (i__35304 + (1));
seq__35301 = G__35519;
chunk__35302 = G__35520;
count__35303 = G__35521;
i__35304 = G__35522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35301);
if(temp__5735__auto__){
var seq__35301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35301__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35301__$1);
var G__35523 = cljs.core.chunk_rest(seq__35301__$1);
var G__35524 = c__4591__auto__;
var G__35525 = cljs.core.count(c__4591__auto__);
var G__35526 = (0);
seq__35301 = G__35523;
chunk__35302 = G__35524;
count__35303 = G__35525;
i__35304 = G__35526;
continue;
} else {
var js_ns = cljs.core.first(seq__35301__$1);
var require_str_35527 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35527);


var G__35528 = cljs.core.next(seq__35301__$1);
var G__35529 = null;
var G__35530 = (0);
var G__35531 = (0);
seq__35301 = G__35528;
chunk__35302 = G__35529;
count__35303 = G__35530;
i__35304 = G__35531;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35310){
var map__35311 = p__35310;
var map__35311__$1 = cljs.core.__destructure_map(map__35311);
var msg = map__35311__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35312(s__35313){
return (new cljs.core.LazySeq(null,(function (){
var s__35313__$1 = s__35313;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35313__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35318 = cljs.core.first(xs__6292__auto__);
var map__35318__$1 = cljs.core.__destructure_map(map__35318);
var src = map__35318__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35318__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35318__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__35313__$1,map__35318,map__35318__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35311,map__35311__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35312_$_iter__35314(s__35315){
return (new cljs.core.LazySeq(null,((function (s__35313__$1,map__35318,map__35318__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35311,map__35311__$1,msg,info,reload_info){
return (function (){
var s__35315__$1 = s__35315;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35315__$1);
if(temp__5735__auto____$1){
var s__35315__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35315__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__35315__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__35317 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__35316 = (0);
while(true){
if((i__35316 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__35316);
cljs.core.chunk_append(b__35317,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35535 = (i__35316 + (1));
i__35316 = G__35535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35317),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35312_$_iter__35314(cljs.core.chunk_rest(s__35315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35317),null);
}
} else {
var warning = cljs.core.first(s__35315__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35312_$_iter__35314(cljs.core.rest(s__35315__$2)));
}
} else {
return null;
}
break;
}
});})(s__35313__$1,map__35318,map__35318__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35311,map__35311__$1,msg,info,reload_info))
,null,null));
});})(s__35313__$1,map__35318,map__35318__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35311,map__35311__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35312(cljs.core.rest(s__35313__$1)));
} else {
var G__35538 = cljs.core.rest(s__35313__$1);
s__35313__$1 = G__35538;
continue;
}
} else {
var G__35539 = cljs.core.rest(s__35313__$1);
s__35313__$1 = G__35539;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35327_35540 = cljs.core.seq(warnings);
var chunk__35328_35541 = null;
var count__35329_35542 = (0);
var i__35330_35543 = (0);
while(true){
if((i__35330_35543 < count__35329_35542)){
var map__35337_35544 = chunk__35328_35541.cljs$core$IIndexed$_nth$arity$2(null,i__35330_35543);
var map__35337_35545__$1 = cljs.core.__destructure_map(map__35337_35544);
var w_35546 = map__35337_35545__$1;
var msg_35547__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337_35545__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337_35545__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337_35545__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337_35545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35550)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35548),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35549),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35547__$1)].join(''));


var G__35551 = seq__35327_35540;
var G__35552 = chunk__35328_35541;
var G__35553 = count__35329_35542;
var G__35554 = (i__35330_35543 + (1));
seq__35327_35540 = G__35551;
chunk__35328_35541 = G__35552;
count__35329_35542 = G__35553;
i__35330_35543 = G__35554;
continue;
} else {
var temp__5735__auto___35555 = cljs.core.seq(seq__35327_35540);
if(temp__5735__auto___35555){
var seq__35327_35556__$1 = temp__5735__auto___35555;
if(cljs.core.chunked_seq_QMARK_(seq__35327_35556__$1)){
var c__4591__auto___35557 = cljs.core.chunk_first(seq__35327_35556__$1);
var G__35558 = cljs.core.chunk_rest(seq__35327_35556__$1);
var G__35559 = c__4591__auto___35557;
var G__35560 = cljs.core.count(c__4591__auto___35557);
var G__35561 = (0);
seq__35327_35540 = G__35558;
chunk__35328_35541 = G__35559;
count__35329_35542 = G__35560;
i__35330_35543 = G__35561;
continue;
} else {
var map__35338_35562 = cljs.core.first(seq__35327_35556__$1);
var map__35338_35563__$1 = cljs.core.__destructure_map(map__35338_35562);
var w_35564 = map__35338_35563__$1;
var msg_35565__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338_35563__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338_35563__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338_35563__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338_35563__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35568)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35566),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35567),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35565__$1)].join(''));


var G__35569 = cljs.core.next(seq__35327_35556__$1);
var G__35570 = null;
var G__35571 = (0);
var G__35572 = (0);
seq__35327_35540 = G__35569;
chunk__35328_35541 = G__35570;
count__35329_35542 = G__35571;
i__35330_35543 = G__35572;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35306_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35306_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35339){
var map__35340 = p__35339;
var map__35340__$1 = cljs.core.__destructure_map(map__35340);
var msg = map__35340__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35340__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35341 = cljs.core.seq(updates);
var chunk__35343 = null;
var count__35344 = (0);
var i__35345 = (0);
while(true){
if((i__35345 < count__35344)){
var path = chunk__35343.cljs$core$IIndexed$_nth$arity$2(null,i__35345);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35434_35575 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35438_35576 = null;
var count__35439_35577 = (0);
var i__35440_35578 = (0);
while(true){
if((i__35440_35578 < count__35439_35577)){
var node_35579 = chunk__35438_35576.cljs$core$IIndexed$_nth$arity$2(null,i__35440_35578);
if(cljs.core.not(node_35579.shadow$old)){
var path_match_35580 = shadow.cljs.devtools.client.browser.match_paths(node_35579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35580)){
var new_link_35581 = (function (){var G__35446 = node_35579.cloneNode(true);
G__35446.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35580),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35446;
})();
(node_35579.shadow$old = true);

(new_link_35581.onload = ((function (seq__35434_35575,chunk__35438_35576,count__35439_35577,i__35440_35578,seq__35341,chunk__35343,count__35344,i__35345,new_link_35581,path_match_35580,node_35579,path,map__35340,map__35340__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35579);
});})(seq__35434_35575,chunk__35438_35576,count__35439_35577,i__35440_35578,seq__35341,chunk__35343,count__35344,i__35345,new_link_35581,path_match_35580,node_35579,path,map__35340,map__35340__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35580], 0));

goog.dom.insertSiblingAfter(new_link_35581,node_35579);


var G__35582 = seq__35434_35575;
var G__35583 = chunk__35438_35576;
var G__35584 = count__35439_35577;
var G__35585 = (i__35440_35578 + (1));
seq__35434_35575 = G__35582;
chunk__35438_35576 = G__35583;
count__35439_35577 = G__35584;
i__35440_35578 = G__35585;
continue;
} else {
var G__35586 = seq__35434_35575;
var G__35587 = chunk__35438_35576;
var G__35588 = count__35439_35577;
var G__35589 = (i__35440_35578 + (1));
seq__35434_35575 = G__35586;
chunk__35438_35576 = G__35587;
count__35439_35577 = G__35588;
i__35440_35578 = G__35589;
continue;
}
} else {
var G__35590 = seq__35434_35575;
var G__35591 = chunk__35438_35576;
var G__35592 = count__35439_35577;
var G__35593 = (i__35440_35578 + (1));
seq__35434_35575 = G__35590;
chunk__35438_35576 = G__35591;
count__35439_35577 = G__35592;
i__35440_35578 = G__35593;
continue;
}
} else {
var temp__5735__auto___35594 = cljs.core.seq(seq__35434_35575);
if(temp__5735__auto___35594){
var seq__35434_35595__$1 = temp__5735__auto___35594;
if(cljs.core.chunked_seq_QMARK_(seq__35434_35595__$1)){
var c__4591__auto___35596 = cljs.core.chunk_first(seq__35434_35595__$1);
var G__35597 = cljs.core.chunk_rest(seq__35434_35595__$1);
var G__35598 = c__4591__auto___35596;
var G__35599 = cljs.core.count(c__4591__auto___35596);
var G__35600 = (0);
seq__35434_35575 = G__35597;
chunk__35438_35576 = G__35598;
count__35439_35577 = G__35599;
i__35440_35578 = G__35600;
continue;
} else {
var node_35601 = cljs.core.first(seq__35434_35595__$1);
if(cljs.core.not(node_35601.shadow$old)){
var path_match_35602 = shadow.cljs.devtools.client.browser.match_paths(node_35601.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35602)){
var new_link_35603 = (function (){var G__35447 = node_35601.cloneNode(true);
G__35447.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35602),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35447;
})();
(node_35601.shadow$old = true);

(new_link_35603.onload = ((function (seq__35434_35575,chunk__35438_35576,count__35439_35577,i__35440_35578,seq__35341,chunk__35343,count__35344,i__35345,new_link_35603,path_match_35602,node_35601,seq__35434_35595__$1,temp__5735__auto___35594,path,map__35340,map__35340__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35601);
});})(seq__35434_35575,chunk__35438_35576,count__35439_35577,i__35440_35578,seq__35341,chunk__35343,count__35344,i__35345,new_link_35603,path_match_35602,node_35601,seq__35434_35595__$1,temp__5735__auto___35594,path,map__35340,map__35340__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35602], 0));

goog.dom.insertSiblingAfter(new_link_35603,node_35601);


var G__35606 = cljs.core.next(seq__35434_35595__$1);
var G__35607 = null;
var G__35608 = (0);
var G__35609 = (0);
seq__35434_35575 = G__35606;
chunk__35438_35576 = G__35607;
count__35439_35577 = G__35608;
i__35440_35578 = G__35609;
continue;
} else {
var G__35610 = cljs.core.next(seq__35434_35595__$1);
var G__35611 = null;
var G__35612 = (0);
var G__35613 = (0);
seq__35434_35575 = G__35610;
chunk__35438_35576 = G__35611;
count__35439_35577 = G__35612;
i__35440_35578 = G__35613;
continue;
}
} else {
var G__35614 = cljs.core.next(seq__35434_35595__$1);
var G__35615 = null;
var G__35616 = (0);
var G__35617 = (0);
seq__35434_35575 = G__35614;
chunk__35438_35576 = G__35615;
count__35439_35577 = G__35616;
i__35440_35578 = G__35617;
continue;
}
}
} else {
}
}
break;
}


var G__35618 = seq__35341;
var G__35619 = chunk__35343;
var G__35620 = count__35344;
var G__35621 = (i__35345 + (1));
seq__35341 = G__35618;
chunk__35343 = G__35619;
count__35344 = G__35620;
i__35345 = G__35621;
continue;
} else {
var G__35622 = seq__35341;
var G__35623 = chunk__35343;
var G__35624 = count__35344;
var G__35625 = (i__35345 + (1));
seq__35341 = G__35622;
chunk__35343 = G__35623;
count__35344 = G__35624;
i__35345 = G__35625;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35341);
if(temp__5735__auto__){
var seq__35341__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35341__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35341__$1);
var G__35626 = cljs.core.chunk_rest(seq__35341__$1);
var G__35627 = c__4591__auto__;
var G__35628 = cljs.core.count(c__4591__auto__);
var G__35629 = (0);
seq__35341 = G__35626;
chunk__35343 = G__35627;
count__35344 = G__35628;
i__35345 = G__35629;
continue;
} else {
var path = cljs.core.first(seq__35341__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35450_35630 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35454_35631 = null;
var count__35455_35632 = (0);
var i__35456_35633 = (0);
while(true){
if((i__35456_35633 < count__35455_35632)){
var node_35634 = chunk__35454_35631.cljs$core$IIndexed$_nth$arity$2(null,i__35456_35633);
if(cljs.core.not(node_35634.shadow$old)){
var path_match_35635 = shadow.cljs.devtools.client.browser.match_paths(node_35634.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35635)){
var new_link_35636 = (function (){var G__35462 = node_35634.cloneNode(true);
G__35462.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35635),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35462;
})();
(node_35634.shadow$old = true);

(new_link_35636.onload = ((function (seq__35450_35630,chunk__35454_35631,count__35455_35632,i__35456_35633,seq__35341,chunk__35343,count__35344,i__35345,new_link_35636,path_match_35635,node_35634,path,seq__35341__$1,temp__5735__auto__,map__35340,map__35340__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35634);
});})(seq__35450_35630,chunk__35454_35631,count__35455_35632,i__35456_35633,seq__35341,chunk__35343,count__35344,i__35345,new_link_35636,path_match_35635,node_35634,path,seq__35341__$1,temp__5735__auto__,map__35340,map__35340__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35635], 0));

goog.dom.insertSiblingAfter(new_link_35636,node_35634);


var G__35638 = seq__35450_35630;
var G__35639 = chunk__35454_35631;
var G__35640 = count__35455_35632;
var G__35641 = (i__35456_35633 + (1));
seq__35450_35630 = G__35638;
chunk__35454_35631 = G__35639;
count__35455_35632 = G__35640;
i__35456_35633 = G__35641;
continue;
} else {
var G__35642 = seq__35450_35630;
var G__35643 = chunk__35454_35631;
var G__35644 = count__35455_35632;
var G__35645 = (i__35456_35633 + (1));
seq__35450_35630 = G__35642;
chunk__35454_35631 = G__35643;
count__35455_35632 = G__35644;
i__35456_35633 = G__35645;
continue;
}
} else {
var G__35646 = seq__35450_35630;
var G__35647 = chunk__35454_35631;
var G__35648 = count__35455_35632;
var G__35649 = (i__35456_35633 + (1));
seq__35450_35630 = G__35646;
chunk__35454_35631 = G__35647;
count__35455_35632 = G__35648;
i__35456_35633 = G__35649;
continue;
}
} else {
var temp__5735__auto___35650__$1 = cljs.core.seq(seq__35450_35630);
if(temp__5735__auto___35650__$1){
var seq__35450_35651__$1 = temp__5735__auto___35650__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35450_35651__$1)){
var c__4591__auto___35652 = cljs.core.chunk_first(seq__35450_35651__$1);
var G__35653 = cljs.core.chunk_rest(seq__35450_35651__$1);
var G__35654 = c__4591__auto___35652;
var G__35655 = cljs.core.count(c__4591__auto___35652);
var G__35656 = (0);
seq__35450_35630 = G__35653;
chunk__35454_35631 = G__35654;
count__35455_35632 = G__35655;
i__35456_35633 = G__35656;
continue;
} else {
var node_35657 = cljs.core.first(seq__35450_35651__$1);
if(cljs.core.not(node_35657.shadow$old)){
var path_match_35658 = shadow.cljs.devtools.client.browser.match_paths(node_35657.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35658)){
var new_link_35659 = (function (){var G__35463 = node_35657.cloneNode(true);
G__35463.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35658),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35463;
})();
(node_35657.shadow$old = true);

(new_link_35659.onload = ((function (seq__35450_35630,chunk__35454_35631,count__35455_35632,i__35456_35633,seq__35341,chunk__35343,count__35344,i__35345,new_link_35659,path_match_35658,node_35657,seq__35450_35651__$1,temp__5735__auto___35650__$1,path,seq__35341__$1,temp__5735__auto__,map__35340,map__35340__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35657);
});})(seq__35450_35630,chunk__35454_35631,count__35455_35632,i__35456_35633,seq__35341,chunk__35343,count__35344,i__35345,new_link_35659,path_match_35658,node_35657,seq__35450_35651__$1,temp__5735__auto___35650__$1,path,seq__35341__$1,temp__5735__auto__,map__35340,map__35340__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35658], 0));

goog.dom.insertSiblingAfter(new_link_35659,node_35657);


var G__35663 = cljs.core.next(seq__35450_35651__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35450_35630 = G__35663;
chunk__35454_35631 = G__35664;
count__35455_35632 = G__35665;
i__35456_35633 = G__35666;
continue;
} else {
var G__35667 = cljs.core.next(seq__35450_35651__$1);
var G__35668 = null;
var G__35669 = (0);
var G__35670 = (0);
seq__35450_35630 = G__35667;
chunk__35454_35631 = G__35668;
count__35455_35632 = G__35669;
i__35456_35633 = G__35670;
continue;
}
} else {
var G__35674 = cljs.core.next(seq__35450_35651__$1);
var G__35675 = null;
var G__35676 = (0);
var G__35677 = (0);
seq__35450_35630 = G__35674;
chunk__35454_35631 = G__35675;
count__35455_35632 = G__35676;
i__35456_35633 = G__35677;
continue;
}
}
} else {
}
}
break;
}


var G__35678 = cljs.core.next(seq__35341__$1);
var G__35679 = null;
var G__35680 = (0);
var G__35681 = (0);
seq__35341 = G__35678;
chunk__35343 = G__35679;
count__35344 = G__35680;
i__35345 = G__35681;
continue;
} else {
var G__35682 = cljs.core.next(seq__35341__$1);
var G__35683 = null;
var G__35684 = (0);
var G__35685 = (0);
seq__35341 = G__35682;
chunk__35343 = G__35683;
count__35344 = G__35684;
i__35345 = G__35685;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35468){
var map__35469 = p__35468;
var map__35469__$1 = cljs.core.__destructure_map(map__35469);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35469__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35472){
var map__35473 = p__35472;
var map__35473__$1 = cljs.core.__destructure_map(map__35473);
var _ = map__35473__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35473__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35474,done,error){
var map__35475 = p__35474;
var map__35475__$1 = cljs.core.__destructure_map(map__35475);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35475__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35476,done,error){
var map__35477 = p__35476;
var map__35477__$1 = cljs.core.__destructure_map(map__35477);
var msg = map__35477__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35478){
var map__35479 = p__35478;
var map__35479__$1 = cljs.core.__destructure_map(map__35479);
var src = map__35479__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35480 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35480) : done.call(null,G__35480));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35481){
var map__35482 = p__35481;
var map__35482__$1 = cljs.core.__destructure_map(map__35482);
var msg__$1 = map__35482__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35483){var ex = e35483;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35484){
var map__35485 = p__35484;
var map__35485__$1 = cljs.core.__destructure_map(map__35485);
var env = map__35485__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35485__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35487){
var map__35488 = p__35487;
var map__35488__$1 = cljs.core.__destructure_map(map__35488);
var msg = map__35488__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35488__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35492){
var map__35493 = p__35492;
var map__35493__$1 = cljs.core.__destructure_map(map__35493);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35493__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35493__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35494){
var map__35495 = p__35494;
var map__35495__$1 = cljs.core.__destructure_map(map__35495);
var svc = map__35495__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35495__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
