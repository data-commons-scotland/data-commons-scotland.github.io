goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35385 = arguments.length;
var i__4772__auto___35386 = (0);
while(true){
if((i__4772__auto___35386 < len__4771__auto___35385)){
args__4777__auto__.push((arguments[i__4772__auto___35386]));

var G__35387 = (i__4772__auto___35386 + (1));
i__4772__auto___35386 = G__35387;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35161){
var G__35162 = cljs.core.first(seq35161);
var seq35161__$1 = cljs.core.next(seq35161);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35162,seq35161__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35163 = cljs.core.seq(sources);
var chunk__35164 = null;
var count__35165 = (0);
var i__35166 = (0);
while(true){
if((i__35166 < count__35165)){
var map__35171 = chunk__35164.cljs$core$IIndexed$_nth$arity$2(null,i__35166);
var map__35171__$1 = cljs.core.__destructure_map(map__35171);
var src = map__35171__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35172){var e_35388 = e35172;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35388);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35388.message)].join('')));
}

var G__35389 = seq__35163;
var G__35390 = chunk__35164;
var G__35391 = count__35165;
var G__35392 = (i__35166 + (1));
seq__35163 = G__35389;
chunk__35164 = G__35390;
count__35165 = G__35391;
i__35166 = G__35392;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35163);
if(temp__5735__auto__){
var seq__35163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35163__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35163__$1);
var G__35393 = cljs.core.chunk_rest(seq__35163__$1);
var G__35394 = c__4591__auto__;
var G__35395 = cljs.core.count(c__4591__auto__);
var G__35396 = (0);
seq__35163 = G__35393;
chunk__35164 = G__35394;
count__35165 = G__35395;
i__35166 = G__35396;
continue;
} else {
var map__35173 = cljs.core.first(seq__35163__$1);
var map__35173__$1 = cljs.core.__destructure_map(map__35173);
var src = map__35173__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35174){var e_35397 = e35174;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35397);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35397.message)].join('')));
}

var G__35398 = cljs.core.next(seq__35163__$1);
var G__35399 = null;
var G__35400 = (0);
var G__35401 = (0);
seq__35163 = G__35398;
chunk__35164 = G__35399;
count__35165 = G__35400;
i__35166 = G__35401;
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
var seq__35181 = cljs.core.seq(js_requires);
var chunk__35182 = null;
var count__35183 = (0);
var i__35184 = (0);
while(true){
if((i__35184 < count__35183)){
var js_ns = chunk__35182.cljs$core$IIndexed$_nth$arity$2(null,i__35184);
var require_str_35402 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35402);


var G__35403 = seq__35181;
var G__35404 = chunk__35182;
var G__35405 = count__35183;
var G__35406 = (i__35184 + (1));
seq__35181 = G__35403;
chunk__35182 = G__35404;
count__35183 = G__35405;
i__35184 = G__35406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35181);
if(temp__5735__auto__){
var seq__35181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35181__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35181__$1);
var G__35407 = cljs.core.chunk_rest(seq__35181__$1);
var G__35408 = c__4591__auto__;
var G__35409 = cljs.core.count(c__4591__auto__);
var G__35410 = (0);
seq__35181 = G__35407;
chunk__35182 = G__35408;
count__35183 = G__35409;
i__35184 = G__35410;
continue;
} else {
var js_ns = cljs.core.first(seq__35181__$1);
var require_str_35411 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35411);


var G__35412 = cljs.core.next(seq__35181__$1);
var G__35413 = null;
var G__35414 = (0);
var G__35415 = (0);
seq__35181 = G__35412;
chunk__35182 = G__35413;
count__35183 = G__35414;
i__35184 = G__35415;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35222){
var map__35223 = p__35222;
var map__35223__$1 = cljs.core.__destructure_map(map__35223);
var msg = map__35223__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35223__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35223__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35224(s__35225){
return (new cljs.core.LazySeq(null,(function (){
var s__35225__$1 = s__35225;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35225__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35234 = cljs.core.first(xs__6292__auto__);
var map__35234__$1 = cljs.core.__destructure_map(map__35234);
var src = map__35234__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__35225__$1,map__35234,map__35234__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35223,map__35223__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35224_$_iter__35226(s__35227){
return (new cljs.core.LazySeq(null,((function (s__35225__$1,map__35234,map__35234__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35223,map__35223__$1,msg,info,reload_info){
return (function (){
var s__35227__$1 = s__35227;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35227__$1);
if(temp__5735__auto____$1){
var s__35227__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35227__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__35227__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__35229 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__35228 = (0);
while(true){
if((i__35228 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__35228);
cljs.core.chunk_append(b__35229,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35416 = (i__35228 + (1));
i__35228 = G__35416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35229),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35224_$_iter__35226(cljs.core.chunk_rest(s__35227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35229),null);
}
} else {
var warning = cljs.core.first(s__35227__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35224_$_iter__35226(cljs.core.rest(s__35227__$2)));
}
} else {
return null;
}
break;
}
});})(s__35225__$1,map__35234,map__35234__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35223,map__35223__$1,msg,info,reload_info))
,null,null));
});})(s__35225__$1,map__35234,map__35234__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35223,map__35223__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35224(cljs.core.rest(s__35225__$1)));
} else {
var G__35417 = cljs.core.rest(s__35225__$1);
s__35225__$1 = G__35417;
continue;
}
} else {
var G__35418 = cljs.core.rest(s__35225__$1);
s__35225__$1 = G__35418;
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
var seq__35252_35419 = cljs.core.seq(warnings);
var chunk__35253_35420 = null;
var count__35254_35421 = (0);
var i__35255_35422 = (0);
while(true){
if((i__35255_35422 < count__35254_35421)){
var map__35263_35423 = chunk__35253_35420.cljs$core$IIndexed$_nth$arity$2(null,i__35255_35422);
var map__35263_35424__$1 = cljs.core.__destructure_map(map__35263_35423);
var w_35425 = map__35263_35424__$1;
var msg_35426__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263_35424__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263_35424__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263_35424__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263_35424__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35429)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35427),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35428),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35426__$1)].join(''));


var G__35430 = seq__35252_35419;
var G__35431 = chunk__35253_35420;
var G__35432 = count__35254_35421;
var G__35433 = (i__35255_35422 + (1));
seq__35252_35419 = G__35430;
chunk__35253_35420 = G__35431;
count__35254_35421 = G__35432;
i__35255_35422 = G__35433;
continue;
} else {
var temp__5735__auto___35434 = cljs.core.seq(seq__35252_35419);
if(temp__5735__auto___35434){
var seq__35252_35435__$1 = temp__5735__auto___35434;
if(cljs.core.chunked_seq_QMARK_(seq__35252_35435__$1)){
var c__4591__auto___35436 = cljs.core.chunk_first(seq__35252_35435__$1);
var G__35437 = cljs.core.chunk_rest(seq__35252_35435__$1);
var G__35438 = c__4591__auto___35436;
var G__35439 = cljs.core.count(c__4591__auto___35436);
var G__35440 = (0);
seq__35252_35419 = G__35437;
chunk__35253_35420 = G__35438;
count__35254_35421 = G__35439;
i__35255_35422 = G__35440;
continue;
} else {
var map__35265_35441 = cljs.core.first(seq__35252_35435__$1);
var map__35265_35442__$1 = cljs.core.__destructure_map(map__35265_35441);
var w_35443 = map__35265_35442__$1;
var msg_35444__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265_35442__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265_35442__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265_35442__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265_35442__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35447)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35445),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35446),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35444__$1)].join(''));


var G__35452 = cljs.core.next(seq__35252_35435__$1);
var G__35453 = null;
var G__35454 = (0);
var G__35455 = (0);
seq__35252_35419 = G__35452;
chunk__35253_35420 = G__35453;
count__35254_35421 = G__35454;
i__35255_35422 = G__35455;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35200_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35200_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35268){
var map__35269 = p__35268;
var map__35269__$1 = cljs.core.__destructure_map(map__35269);
var msg = map__35269__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35270 = cljs.core.seq(updates);
var chunk__35272 = null;
var count__35273 = (0);
var i__35274 = (0);
while(true){
if((i__35274 < count__35273)){
var path = chunk__35272.cljs$core$IIndexed$_nth$arity$2(null,i__35274);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35322_35457 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35326_35458 = null;
var count__35327_35459 = (0);
var i__35328_35460 = (0);
while(true){
if((i__35328_35460 < count__35327_35459)){
var node_35461 = chunk__35326_35458.cljs$core$IIndexed$_nth$arity$2(null,i__35328_35460);
if(cljs.core.not(node_35461.shadow$old)){
var path_match_35462 = shadow.cljs.devtools.client.browser.match_paths(node_35461.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35462)){
var new_link_35463 = (function (){var G__35334 = node_35461.cloneNode(true);
G__35334.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35462),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35334;
})();
(node_35461.shadow$old = true);

(new_link_35463.onload = ((function (seq__35322_35457,chunk__35326_35458,count__35327_35459,i__35328_35460,seq__35270,chunk__35272,count__35273,i__35274,new_link_35463,path_match_35462,node_35461,path,map__35269,map__35269__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35461);
});})(seq__35322_35457,chunk__35326_35458,count__35327_35459,i__35328_35460,seq__35270,chunk__35272,count__35273,i__35274,new_link_35463,path_match_35462,node_35461,path,map__35269,map__35269__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35462], 0));

goog.dom.insertSiblingAfter(new_link_35463,node_35461);


var G__35464 = seq__35322_35457;
var G__35465 = chunk__35326_35458;
var G__35466 = count__35327_35459;
var G__35467 = (i__35328_35460 + (1));
seq__35322_35457 = G__35464;
chunk__35326_35458 = G__35465;
count__35327_35459 = G__35466;
i__35328_35460 = G__35467;
continue;
} else {
var G__35468 = seq__35322_35457;
var G__35469 = chunk__35326_35458;
var G__35470 = count__35327_35459;
var G__35471 = (i__35328_35460 + (1));
seq__35322_35457 = G__35468;
chunk__35326_35458 = G__35469;
count__35327_35459 = G__35470;
i__35328_35460 = G__35471;
continue;
}
} else {
var G__35472 = seq__35322_35457;
var G__35473 = chunk__35326_35458;
var G__35474 = count__35327_35459;
var G__35475 = (i__35328_35460 + (1));
seq__35322_35457 = G__35472;
chunk__35326_35458 = G__35473;
count__35327_35459 = G__35474;
i__35328_35460 = G__35475;
continue;
}
} else {
var temp__5735__auto___35476 = cljs.core.seq(seq__35322_35457);
if(temp__5735__auto___35476){
var seq__35322_35477__$1 = temp__5735__auto___35476;
if(cljs.core.chunked_seq_QMARK_(seq__35322_35477__$1)){
var c__4591__auto___35478 = cljs.core.chunk_first(seq__35322_35477__$1);
var G__35479 = cljs.core.chunk_rest(seq__35322_35477__$1);
var G__35480 = c__4591__auto___35478;
var G__35481 = cljs.core.count(c__4591__auto___35478);
var G__35482 = (0);
seq__35322_35457 = G__35479;
chunk__35326_35458 = G__35480;
count__35327_35459 = G__35481;
i__35328_35460 = G__35482;
continue;
} else {
var node_35483 = cljs.core.first(seq__35322_35477__$1);
if(cljs.core.not(node_35483.shadow$old)){
var path_match_35484 = shadow.cljs.devtools.client.browser.match_paths(node_35483.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35484)){
var new_link_35485 = (function (){var G__35335 = node_35483.cloneNode(true);
G__35335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35484),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35335;
})();
(node_35483.shadow$old = true);

(new_link_35485.onload = ((function (seq__35322_35457,chunk__35326_35458,count__35327_35459,i__35328_35460,seq__35270,chunk__35272,count__35273,i__35274,new_link_35485,path_match_35484,node_35483,seq__35322_35477__$1,temp__5735__auto___35476,path,map__35269,map__35269__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35483);
});})(seq__35322_35457,chunk__35326_35458,count__35327_35459,i__35328_35460,seq__35270,chunk__35272,count__35273,i__35274,new_link_35485,path_match_35484,node_35483,seq__35322_35477__$1,temp__5735__auto___35476,path,map__35269,map__35269__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35484], 0));

goog.dom.insertSiblingAfter(new_link_35485,node_35483);


var G__35486 = cljs.core.next(seq__35322_35477__$1);
var G__35487 = null;
var G__35488 = (0);
var G__35489 = (0);
seq__35322_35457 = G__35486;
chunk__35326_35458 = G__35487;
count__35327_35459 = G__35488;
i__35328_35460 = G__35489;
continue;
} else {
var G__35490 = cljs.core.next(seq__35322_35477__$1);
var G__35491 = null;
var G__35492 = (0);
var G__35493 = (0);
seq__35322_35457 = G__35490;
chunk__35326_35458 = G__35491;
count__35327_35459 = G__35492;
i__35328_35460 = G__35493;
continue;
}
} else {
var G__35494 = cljs.core.next(seq__35322_35477__$1);
var G__35495 = null;
var G__35496 = (0);
var G__35497 = (0);
seq__35322_35457 = G__35494;
chunk__35326_35458 = G__35495;
count__35327_35459 = G__35496;
i__35328_35460 = G__35497;
continue;
}
}
} else {
}
}
break;
}


var G__35498 = seq__35270;
var G__35499 = chunk__35272;
var G__35500 = count__35273;
var G__35501 = (i__35274 + (1));
seq__35270 = G__35498;
chunk__35272 = G__35499;
count__35273 = G__35500;
i__35274 = G__35501;
continue;
} else {
var G__35502 = seq__35270;
var G__35503 = chunk__35272;
var G__35504 = count__35273;
var G__35505 = (i__35274 + (1));
seq__35270 = G__35502;
chunk__35272 = G__35503;
count__35273 = G__35504;
i__35274 = G__35505;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35270);
if(temp__5735__auto__){
var seq__35270__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35270__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35270__$1);
var G__35506 = cljs.core.chunk_rest(seq__35270__$1);
var G__35507 = c__4591__auto__;
var G__35508 = cljs.core.count(c__4591__auto__);
var G__35509 = (0);
seq__35270 = G__35506;
chunk__35272 = G__35507;
count__35273 = G__35508;
i__35274 = G__35509;
continue;
} else {
var path = cljs.core.first(seq__35270__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35336_35510 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35340_35511 = null;
var count__35341_35512 = (0);
var i__35342_35513 = (0);
while(true){
if((i__35342_35513 < count__35341_35512)){
var node_35514 = chunk__35340_35511.cljs$core$IIndexed$_nth$arity$2(null,i__35342_35513);
if(cljs.core.not(node_35514.shadow$old)){
var path_match_35515 = shadow.cljs.devtools.client.browser.match_paths(node_35514.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35515)){
var new_link_35516 = (function (){var G__35355 = node_35514.cloneNode(true);
G__35355.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35515),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35355;
})();
(node_35514.shadow$old = true);

(new_link_35516.onload = ((function (seq__35336_35510,chunk__35340_35511,count__35341_35512,i__35342_35513,seq__35270,chunk__35272,count__35273,i__35274,new_link_35516,path_match_35515,node_35514,path,seq__35270__$1,temp__5735__auto__,map__35269,map__35269__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35514);
});})(seq__35336_35510,chunk__35340_35511,count__35341_35512,i__35342_35513,seq__35270,chunk__35272,count__35273,i__35274,new_link_35516,path_match_35515,node_35514,path,seq__35270__$1,temp__5735__auto__,map__35269,map__35269__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35515], 0));

goog.dom.insertSiblingAfter(new_link_35516,node_35514);


var G__35522 = seq__35336_35510;
var G__35523 = chunk__35340_35511;
var G__35524 = count__35341_35512;
var G__35525 = (i__35342_35513 + (1));
seq__35336_35510 = G__35522;
chunk__35340_35511 = G__35523;
count__35341_35512 = G__35524;
i__35342_35513 = G__35525;
continue;
} else {
var G__35526 = seq__35336_35510;
var G__35527 = chunk__35340_35511;
var G__35528 = count__35341_35512;
var G__35529 = (i__35342_35513 + (1));
seq__35336_35510 = G__35526;
chunk__35340_35511 = G__35527;
count__35341_35512 = G__35528;
i__35342_35513 = G__35529;
continue;
}
} else {
var G__35530 = seq__35336_35510;
var G__35531 = chunk__35340_35511;
var G__35532 = count__35341_35512;
var G__35533 = (i__35342_35513 + (1));
seq__35336_35510 = G__35530;
chunk__35340_35511 = G__35531;
count__35341_35512 = G__35532;
i__35342_35513 = G__35533;
continue;
}
} else {
var temp__5735__auto___35534__$1 = cljs.core.seq(seq__35336_35510);
if(temp__5735__auto___35534__$1){
var seq__35336_35535__$1 = temp__5735__auto___35534__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35336_35535__$1)){
var c__4591__auto___35536 = cljs.core.chunk_first(seq__35336_35535__$1);
var G__35537 = cljs.core.chunk_rest(seq__35336_35535__$1);
var G__35538 = c__4591__auto___35536;
var G__35539 = cljs.core.count(c__4591__auto___35536);
var G__35540 = (0);
seq__35336_35510 = G__35537;
chunk__35340_35511 = G__35538;
count__35341_35512 = G__35539;
i__35342_35513 = G__35540;
continue;
} else {
var node_35541 = cljs.core.first(seq__35336_35535__$1);
if(cljs.core.not(node_35541.shadow$old)){
var path_match_35542 = shadow.cljs.devtools.client.browser.match_paths(node_35541.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35542)){
var new_link_35543 = (function (){var G__35360 = node_35541.cloneNode(true);
G__35360.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35542),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35360;
})();
(node_35541.shadow$old = true);

(new_link_35543.onload = ((function (seq__35336_35510,chunk__35340_35511,count__35341_35512,i__35342_35513,seq__35270,chunk__35272,count__35273,i__35274,new_link_35543,path_match_35542,node_35541,seq__35336_35535__$1,temp__5735__auto___35534__$1,path,seq__35270__$1,temp__5735__auto__,map__35269,map__35269__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35541);
});})(seq__35336_35510,chunk__35340_35511,count__35341_35512,i__35342_35513,seq__35270,chunk__35272,count__35273,i__35274,new_link_35543,path_match_35542,node_35541,seq__35336_35535__$1,temp__5735__auto___35534__$1,path,seq__35270__$1,temp__5735__auto__,map__35269,map__35269__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35542], 0));

goog.dom.insertSiblingAfter(new_link_35543,node_35541);


var G__35546 = cljs.core.next(seq__35336_35535__$1);
var G__35547 = null;
var G__35548 = (0);
var G__35549 = (0);
seq__35336_35510 = G__35546;
chunk__35340_35511 = G__35547;
count__35341_35512 = G__35548;
i__35342_35513 = G__35549;
continue;
} else {
var G__35550 = cljs.core.next(seq__35336_35535__$1);
var G__35551 = null;
var G__35552 = (0);
var G__35553 = (0);
seq__35336_35510 = G__35550;
chunk__35340_35511 = G__35551;
count__35341_35512 = G__35552;
i__35342_35513 = G__35553;
continue;
}
} else {
var G__35554 = cljs.core.next(seq__35336_35535__$1);
var G__35555 = null;
var G__35556 = (0);
var G__35557 = (0);
seq__35336_35510 = G__35554;
chunk__35340_35511 = G__35555;
count__35341_35512 = G__35556;
i__35342_35513 = G__35557;
continue;
}
}
} else {
}
}
break;
}


var G__35558 = cljs.core.next(seq__35270__$1);
var G__35559 = null;
var G__35560 = (0);
var G__35561 = (0);
seq__35270 = G__35558;
chunk__35272 = G__35559;
count__35273 = G__35560;
i__35274 = G__35561;
continue;
} else {
var G__35562 = cljs.core.next(seq__35270__$1);
var G__35563 = null;
var G__35564 = (0);
var G__35565 = (0);
seq__35270 = G__35562;
chunk__35272 = G__35563;
count__35273 = G__35564;
i__35274 = G__35565;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35362){
var map__35363 = p__35362;
var map__35363__$1 = cljs.core.__destructure_map(map__35363);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35363__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35365){
var map__35366 = p__35365;
var map__35366__$1 = cljs.core.__destructure_map(map__35366);
var _ = map__35366__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35366__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35367,done,error){
var map__35368 = p__35367;
var map__35368__$1 = cljs.core.__destructure_map(map__35368);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35369,done,error){
var map__35370 = p__35369;
var map__35370__$1 = cljs.core.__destructure_map(map__35370);
var msg = map__35370__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35370__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35370__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35370__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35371){
var map__35372 = p__35371;
var map__35372__$1 = cljs.core.__destructure_map(map__35372);
var src = map__35372__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35373 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35373) : done.call(null,G__35373));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35374){
var map__35375 = p__35374;
var map__35375__$1 = cljs.core.__destructure_map(map__35375);
var msg__$1 = map__35375__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35375__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35376){var ex = e35376;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35377){
var map__35378 = p__35377;
var map__35378__$1 = cljs.core.__destructure_map(map__35378);
var env = map__35378__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35378__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35379){
var map__35380 = p__35379;
var map__35380__$1 = cljs.core.__destructure_map(map__35380);
var msg = map__35380__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35380__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35381){
var map__35382 = p__35381;
var map__35382__$1 = cljs.core.__destructure_map(map__35382);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35383){
var map__35384 = p__35383;
var map__35384__$1 = cljs.core.__destructure_map(map__35384);
var svc = map__35384__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
