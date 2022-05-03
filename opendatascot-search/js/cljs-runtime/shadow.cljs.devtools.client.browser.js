goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47613 = arguments.length;
var i__4865__auto___47614 = (0);
while(true){
if((i__4865__auto___47614 < len__4864__auto___47613)){
args__4870__auto__.push((arguments[i__4865__auto___47614]));

var G__47615 = (i__4865__auto___47614 + (1));
i__4865__auto___47614 = G__47615;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47329){
var G__47330 = cljs.core.first(seq47329);
var seq47329__$1 = cljs.core.next(seq47329);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47330,seq47329__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47333 = cljs.core.seq(sources);
var chunk__47334 = null;
var count__47335 = (0);
var i__47336 = (0);
while(true){
if((i__47336 < count__47335)){
var map__47343 = chunk__47334.cljs$core$IIndexed$_nth$arity$2(null,i__47336);
var map__47343__$1 = cljs.core.__destructure_map(map__47343);
var src = map__47343__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47344){var e_47616 = e47344;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47616);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47616.message)].join('')));
}

var G__47617 = seq__47333;
var G__47618 = chunk__47334;
var G__47619 = count__47335;
var G__47620 = (i__47336 + (1));
seq__47333 = G__47617;
chunk__47334 = G__47618;
count__47335 = G__47619;
i__47336 = G__47620;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47333);
if(temp__5753__auto__){
var seq__47333__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47333__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47333__$1);
var G__47621 = cljs.core.chunk_rest(seq__47333__$1);
var G__47622 = c__4679__auto__;
var G__47623 = cljs.core.count(c__4679__auto__);
var G__47624 = (0);
seq__47333 = G__47621;
chunk__47334 = G__47622;
count__47335 = G__47623;
i__47336 = G__47624;
continue;
} else {
var map__47345 = cljs.core.first(seq__47333__$1);
var map__47345__$1 = cljs.core.__destructure_map(map__47345);
var src = map__47345__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47345__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47345__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47345__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47345__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47346){var e_47625 = e47346;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47625);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47625.message)].join('')));
}

var G__47626 = cljs.core.next(seq__47333__$1);
var G__47627 = null;
var G__47628 = (0);
var G__47629 = (0);
seq__47333 = G__47626;
chunk__47334 = G__47627;
count__47335 = G__47628;
i__47336 = G__47629;
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
var seq__47347 = cljs.core.seq(js_requires);
var chunk__47348 = null;
var count__47349 = (0);
var i__47350 = (0);
while(true){
if((i__47350 < count__47349)){
var js_ns = chunk__47348.cljs$core$IIndexed$_nth$arity$2(null,i__47350);
var require_str_47630 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47630);


var G__47631 = seq__47347;
var G__47632 = chunk__47348;
var G__47633 = count__47349;
var G__47634 = (i__47350 + (1));
seq__47347 = G__47631;
chunk__47348 = G__47632;
count__47349 = G__47633;
i__47350 = G__47634;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47347);
if(temp__5753__auto__){
var seq__47347__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47347__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47347__$1);
var G__47635 = cljs.core.chunk_rest(seq__47347__$1);
var G__47636 = c__4679__auto__;
var G__47637 = cljs.core.count(c__4679__auto__);
var G__47638 = (0);
seq__47347 = G__47635;
chunk__47348 = G__47636;
count__47349 = G__47637;
i__47350 = G__47638;
continue;
} else {
var js_ns = cljs.core.first(seq__47347__$1);
var require_str_47639 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47639);


var G__47640 = cljs.core.next(seq__47347__$1);
var G__47641 = null;
var G__47642 = (0);
var G__47643 = (0);
seq__47347 = G__47640;
chunk__47348 = G__47641;
count__47349 = G__47642;
i__47350 = G__47643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47352){
var map__47353 = p__47352;
var map__47353__$1 = cljs.core.__destructure_map(map__47353);
var msg = map__47353__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47354(s__47355){
return (new cljs.core.LazySeq(null,(function (){
var s__47355__$1 = s__47355;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47355__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__47360 = cljs.core.first(xs__6308__auto__);
var map__47360__$1 = cljs.core.__destructure_map(map__47360);
var src = map__47360__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__47355__$1,map__47360,map__47360__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47353,map__47353__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47354_$_iter__47356(s__47357){
return (new cljs.core.LazySeq(null,((function (s__47355__$1,map__47360,map__47360__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47353,map__47353__$1,msg,info,reload_info){
return (function (){
var s__47357__$1 = s__47357;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47357__$1);
if(temp__5753__auto____$1){
var s__47357__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47357__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__47357__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__47359 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__47358 = (0);
while(true){
if((i__47358 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__47358);
cljs.core.chunk_append(b__47359,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47644 = (i__47358 + (1));
i__47358 = G__47644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47359),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47354_$_iter__47356(cljs.core.chunk_rest(s__47357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47359),null);
}
} else {
var warning = cljs.core.first(s__47357__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47354_$_iter__47356(cljs.core.rest(s__47357__$2)));
}
} else {
return null;
}
break;
}
});})(s__47355__$1,map__47360,map__47360__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47353,map__47353__$1,msg,info,reload_info))
,null,null));
});})(s__47355__$1,map__47360,map__47360__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47353,map__47353__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47354(cljs.core.rest(s__47355__$1)));
} else {
var G__47645 = cljs.core.rest(s__47355__$1);
s__47355__$1 = G__47645;
continue;
}
} else {
var G__47646 = cljs.core.rest(s__47355__$1);
s__47355__$1 = G__47646;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47361_47647 = cljs.core.seq(warnings);
var chunk__47362_47648 = null;
var count__47363_47649 = (0);
var i__47364_47650 = (0);
while(true){
if((i__47364_47650 < count__47363_47649)){
var map__47367_47651 = chunk__47362_47648.cljs$core$IIndexed$_nth$arity$2(null,i__47364_47650);
var map__47367_47652__$1 = cljs.core.__destructure_map(map__47367_47651);
var w_47653 = map__47367_47652__$1;
var msg_47654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47367_47652__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47367_47652__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47367_47652__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47367_47652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47657)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47655),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47656),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47654__$1)].join(''));


var G__47658 = seq__47361_47647;
var G__47659 = chunk__47362_47648;
var G__47660 = count__47363_47649;
var G__47661 = (i__47364_47650 + (1));
seq__47361_47647 = G__47658;
chunk__47362_47648 = G__47659;
count__47363_47649 = G__47660;
i__47364_47650 = G__47661;
continue;
} else {
var temp__5753__auto___47662 = cljs.core.seq(seq__47361_47647);
if(temp__5753__auto___47662){
var seq__47361_47663__$1 = temp__5753__auto___47662;
if(cljs.core.chunked_seq_QMARK_(seq__47361_47663__$1)){
var c__4679__auto___47664 = cljs.core.chunk_first(seq__47361_47663__$1);
var G__47665 = cljs.core.chunk_rest(seq__47361_47663__$1);
var G__47666 = c__4679__auto___47664;
var G__47667 = cljs.core.count(c__4679__auto___47664);
var G__47668 = (0);
seq__47361_47647 = G__47665;
chunk__47362_47648 = G__47666;
count__47363_47649 = G__47667;
i__47364_47650 = G__47668;
continue;
} else {
var map__47368_47669 = cljs.core.first(seq__47361_47663__$1);
var map__47368_47670__$1 = cljs.core.__destructure_map(map__47368_47669);
var w_47671 = map__47368_47670__$1;
var msg_47672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368_47670__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368_47670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368_47670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47368_47670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47675)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47673),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47674),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47672__$1)].join(''));


var G__47676 = cljs.core.next(seq__47361_47663__$1);
var G__47677 = null;
var G__47678 = (0);
var G__47679 = (0);
seq__47361_47647 = G__47676;
chunk__47362_47648 = G__47677;
count__47363_47649 = G__47678;
i__47364_47650 = G__47679;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47351_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47351_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47369){
var map__47370 = p__47369;
var map__47370__$1 = cljs.core.__destructure_map(map__47370);
var msg = map__47370__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47370__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47370__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47371 = cljs.core.seq(updates);
var chunk__47373 = null;
var count__47374 = (0);
var i__47375 = (0);
while(true){
if((i__47375 < count__47374)){
var path = chunk__47373.cljs$core$IIndexed$_nth$arity$2(null,i__47375);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47485_47680 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47489_47681 = null;
var count__47490_47682 = (0);
var i__47491_47683 = (0);
while(true){
if((i__47491_47683 < count__47490_47682)){
var node_47684 = chunk__47489_47681.cljs$core$IIndexed$_nth$arity$2(null,i__47491_47683);
if(cljs.core.not(node_47684.shadow$old)){
var path_match_47685 = shadow.cljs.devtools.client.browser.match_paths(node_47684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47685)){
var new_link_47686 = (function (){var G__47517 = node_47684.cloneNode(true);
G__47517.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47685),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47517;
})();
(node_47684.shadow$old = true);

(new_link_47686.onload = ((function (seq__47485_47680,chunk__47489_47681,count__47490_47682,i__47491_47683,seq__47371,chunk__47373,count__47374,i__47375,new_link_47686,path_match_47685,node_47684,path,map__47370,map__47370__$1,msg,updates,reload_info){
return (function (e){
var seq__47518_47687 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47520_47688 = null;
var count__47521_47689 = (0);
var i__47522_47690 = (0);
while(true){
if((i__47522_47690 < count__47521_47689)){
var map__47526_47691 = chunk__47520_47688.cljs$core$IIndexed$_nth$arity$2(null,i__47522_47690);
var map__47526_47692__$1 = cljs.core.__destructure_map(map__47526_47691);
var task_47693 = map__47526_47692__$1;
var fn_str_47694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47526_47692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47526_47692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47696 = goog.getObjectByName(fn_str_47694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47695)].join(''));

(fn_obj_47696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47696.cljs$core$IFn$_invoke$arity$2(path,new_link_47686) : fn_obj_47696.call(null,path,new_link_47686));


var G__47697 = seq__47518_47687;
var G__47698 = chunk__47520_47688;
var G__47699 = count__47521_47689;
var G__47700 = (i__47522_47690 + (1));
seq__47518_47687 = G__47697;
chunk__47520_47688 = G__47698;
count__47521_47689 = G__47699;
i__47522_47690 = G__47700;
continue;
} else {
var temp__5753__auto___47701 = cljs.core.seq(seq__47518_47687);
if(temp__5753__auto___47701){
var seq__47518_47702__$1 = temp__5753__auto___47701;
if(cljs.core.chunked_seq_QMARK_(seq__47518_47702__$1)){
var c__4679__auto___47703 = cljs.core.chunk_first(seq__47518_47702__$1);
var G__47704 = cljs.core.chunk_rest(seq__47518_47702__$1);
var G__47705 = c__4679__auto___47703;
var G__47706 = cljs.core.count(c__4679__auto___47703);
var G__47707 = (0);
seq__47518_47687 = G__47704;
chunk__47520_47688 = G__47705;
count__47521_47689 = G__47706;
i__47522_47690 = G__47707;
continue;
} else {
var map__47527_47708 = cljs.core.first(seq__47518_47702__$1);
var map__47527_47709__$1 = cljs.core.__destructure_map(map__47527_47708);
var task_47710 = map__47527_47709__$1;
var fn_str_47711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47527_47709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47527_47709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47713 = goog.getObjectByName(fn_str_47711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47712)].join(''));

(fn_obj_47713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47713.cljs$core$IFn$_invoke$arity$2(path,new_link_47686) : fn_obj_47713.call(null,path,new_link_47686));


var G__47714 = cljs.core.next(seq__47518_47702__$1);
var G__47715 = null;
var G__47716 = (0);
var G__47717 = (0);
seq__47518_47687 = G__47714;
chunk__47520_47688 = G__47715;
count__47521_47689 = G__47716;
i__47522_47690 = G__47717;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47684);
});})(seq__47485_47680,chunk__47489_47681,count__47490_47682,i__47491_47683,seq__47371,chunk__47373,count__47374,i__47375,new_link_47686,path_match_47685,node_47684,path,map__47370,map__47370__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47685], 0));

goog.dom.insertSiblingAfter(new_link_47686,node_47684);


var G__47718 = seq__47485_47680;
var G__47719 = chunk__47489_47681;
var G__47720 = count__47490_47682;
var G__47721 = (i__47491_47683 + (1));
seq__47485_47680 = G__47718;
chunk__47489_47681 = G__47719;
count__47490_47682 = G__47720;
i__47491_47683 = G__47721;
continue;
} else {
var G__47722 = seq__47485_47680;
var G__47723 = chunk__47489_47681;
var G__47724 = count__47490_47682;
var G__47725 = (i__47491_47683 + (1));
seq__47485_47680 = G__47722;
chunk__47489_47681 = G__47723;
count__47490_47682 = G__47724;
i__47491_47683 = G__47725;
continue;
}
} else {
var G__47726 = seq__47485_47680;
var G__47727 = chunk__47489_47681;
var G__47728 = count__47490_47682;
var G__47729 = (i__47491_47683 + (1));
seq__47485_47680 = G__47726;
chunk__47489_47681 = G__47727;
count__47490_47682 = G__47728;
i__47491_47683 = G__47729;
continue;
}
} else {
var temp__5753__auto___47730 = cljs.core.seq(seq__47485_47680);
if(temp__5753__auto___47730){
var seq__47485_47731__$1 = temp__5753__auto___47730;
if(cljs.core.chunked_seq_QMARK_(seq__47485_47731__$1)){
var c__4679__auto___47732 = cljs.core.chunk_first(seq__47485_47731__$1);
var G__47733 = cljs.core.chunk_rest(seq__47485_47731__$1);
var G__47734 = c__4679__auto___47732;
var G__47735 = cljs.core.count(c__4679__auto___47732);
var G__47736 = (0);
seq__47485_47680 = G__47733;
chunk__47489_47681 = G__47734;
count__47490_47682 = G__47735;
i__47491_47683 = G__47736;
continue;
} else {
var node_47737 = cljs.core.first(seq__47485_47731__$1);
if(cljs.core.not(node_47737.shadow$old)){
var path_match_47738 = shadow.cljs.devtools.client.browser.match_paths(node_47737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47738)){
var new_link_47739 = (function (){var G__47528 = node_47737.cloneNode(true);
G__47528.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47738),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47528;
})();
(node_47737.shadow$old = true);

(new_link_47739.onload = ((function (seq__47485_47680,chunk__47489_47681,count__47490_47682,i__47491_47683,seq__47371,chunk__47373,count__47374,i__47375,new_link_47739,path_match_47738,node_47737,seq__47485_47731__$1,temp__5753__auto___47730,path,map__47370,map__47370__$1,msg,updates,reload_info){
return (function (e){
var seq__47529_47740 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47531_47741 = null;
var count__47532_47742 = (0);
var i__47533_47743 = (0);
while(true){
if((i__47533_47743 < count__47532_47742)){
var map__47537_47744 = chunk__47531_47741.cljs$core$IIndexed$_nth$arity$2(null,i__47533_47743);
var map__47537_47745__$1 = cljs.core.__destructure_map(map__47537_47744);
var task_47746 = map__47537_47745__$1;
var fn_str_47747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47537_47745__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47537_47745__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47749 = goog.getObjectByName(fn_str_47747,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47748)].join(''));

(fn_obj_47749.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47749.cljs$core$IFn$_invoke$arity$2(path,new_link_47739) : fn_obj_47749.call(null,path,new_link_47739));


var G__47750 = seq__47529_47740;
var G__47751 = chunk__47531_47741;
var G__47752 = count__47532_47742;
var G__47753 = (i__47533_47743 + (1));
seq__47529_47740 = G__47750;
chunk__47531_47741 = G__47751;
count__47532_47742 = G__47752;
i__47533_47743 = G__47753;
continue;
} else {
var temp__5753__auto___47754__$1 = cljs.core.seq(seq__47529_47740);
if(temp__5753__auto___47754__$1){
var seq__47529_47755__$1 = temp__5753__auto___47754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47529_47755__$1)){
var c__4679__auto___47756 = cljs.core.chunk_first(seq__47529_47755__$1);
var G__47757 = cljs.core.chunk_rest(seq__47529_47755__$1);
var G__47758 = c__4679__auto___47756;
var G__47759 = cljs.core.count(c__4679__auto___47756);
var G__47760 = (0);
seq__47529_47740 = G__47757;
chunk__47531_47741 = G__47758;
count__47532_47742 = G__47759;
i__47533_47743 = G__47760;
continue;
} else {
var map__47538_47761 = cljs.core.first(seq__47529_47755__$1);
var map__47538_47762__$1 = cljs.core.__destructure_map(map__47538_47761);
var task_47763 = map__47538_47762__$1;
var fn_str_47764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47538_47762__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47538_47762__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47766 = goog.getObjectByName(fn_str_47764,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47765)].join(''));

(fn_obj_47766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47766.cljs$core$IFn$_invoke$arity$2(path,new_link_47739) : fn_obj_47766.call(null,path,new_link_47739));


var G__47767 = cljs.core.next(seq__47529_47755__$1);
var G__47768 = null;
var G__47769 = (0);
var G__47770 = (0);
seq__47529_47740 = G__47767;
chunk__47531_47741 = G__47768;
count__47532_47742 = G__47769;
i__47533_47743 = G__47770;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47737);
});})(seq__47485_47680,chunk__47489_47681,count__47490_47682,i__47491_47683,seq__47371,chunk__47373,count__47374,i__47375,new_link_47739,path_match_47738,node_47737,seq__47485_47731__$1,temp__5753__auto___47730,path,map__47370,map__47370__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47738], 0));

goog.dom.insertSiblingAfter(new_link_47739,node_47737);


var G__47771 = cljs.core.next(seq__47485_47731__$1);
var G__47772 = null;
var G__47773 = (0);
var G__47774 = (0);
seq__47485_47680 = G__47771;
chunk__47489_47681 = G__47772;
count__47490_47682 = G__47773;
i__47491_47683 = G__47774;
continue;
} else {
var G__47775 = cljs.core.next(seq__47485_47731__$1);
var G__47776 = null;
var G__47777 = (0);
var G__47778 = (0);
seq__47485_47680 = G__47775;
chunk__47489_47681 = G__47776;
count__47490_47682 = G__47777;
i__47491_47683 = G__47778;
continue;
}
} else {
var G__47779 = cljs.core.next(seq__47485_47731__$1);
var G__47780 = null;
var G__47781 = (0);
var G__47782 = (0);
seq__47485_47680 = G__47779;
chunk__47489_47681 = G__47780;
count__47490_47682 = G__47781;
i__47491_47683 = G__47782;
continue;
}
}
} else {
}
}
break;
}


var G__47783 = seq__47371;
var G__47784 = chunk__47373;
var G__47785 = count__47374;
var G__47786 = (i__47375 + (1));
seq__47371 = G__47783;
chunk__47373 = G__47784;
count__47374 = G__47785;
i__47375 = G__47786;
continue;
} else {
var G__47787 = seq__47371;
var G__47788 = chunk__47373;
var G__47789 = count__47374;
var G__47790 = (i__47375 + (1));
seq__47371 = G__47787;
chunk__47373 = G__47788;
count__47374 = G__47789;
i__47375 = G__47790;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47371);
if(temp__5753__auto__){
var seq__47371__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47371__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47371__$1);
var G__47791 = cljs.core.chunk_rest(seq__47371__$1);
var G__47792 = c__4679__auto__;
var G__47793 = cljs.core.count(c__4679__auto__);
var G__47794 = (0);
seq__47371 = G__47791;
chunk__47373 = G__47792;
count__47374 = G__47793;
i__47375 = G__47794;
continue;
} else {
var path = cljs.core.first(seq__47371__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47539_47795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47543_47796 = null;
var count__47544_47797 = (0);
var i__47545_47798 = (0);
while(true){
if((i__47545_47798 < count__47544_47797)){
var node_47799 = chunk__47543_47796.cljs$core$IIndexed$_nth$arity$2(null,i__47545_47798);
if(cljs.core.not(node_47799.shadow$old)){
var path_match_47800 = shadow.cljs.devtools.client.browser.match_paths(node_47799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47800)){
var new_link_47801 = (function (){var G__47571 = node_47799.cloneNode(true);
G__47571.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47571;
})();
(node_47799.shadow$old = true);

(new_link_47801.onload = ((function (seq__47539_47795,chunk__47543_47796,count__47544_47797,i__47545_47798,seq__47371,chunk__47373,count__47374,i__47375,new_link_47801,path_match_47800,node_47799,path,seq__47371__$1,temp__5753__auto__,map__47370,map__47370__$1,msg,updates,reload_info){
return (function (e){
var seq__47572_47802 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47574_47803 = null;
var count__47575_47804 = (0);
var i__47576_47805 = (0);
while(true){
if((i__47576_47805 < count__47575_47804)){
var map__47580_47806 = chunk__47574_47803.cljs$core$IIndexed$_nth$arity$2(null,i__47576_47805);
var map__47580_47807__$1 = cljs.core.__destructure_map(map__47580_47806);
var task_47808 = map__47580_47807__$1;
var fn_str_47809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47580_47807__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47580_47807__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47811 = goog.getObjectByName(fn_str_47809,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47810)].join(''));

(fn_obj_47811.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47811.cljs$core$IFn$_invoke$arity$2(path,new_link_47801) : fn_obj_47811.call(null,path,new_link_47801));


var G__47812 = seq__47572_47802;
var G__47813 = chunk__47574_47803;
var G__47814 = count__47575_47804;
var G__47815 = (i__47576_47805 + (1));
seq__47572_47802 = G__47812;
chunk__47574_47803 = G__47813;
count__47575_47804 = G__47814;
i__47576_47805 = G__47815;
continue;
} else {
var temp__5753__auto___47816__$1 = cljs.core.seq(seq__47572_47802);
if(temp__5753__auto___47816__$1){
var seq__47572_47817__$1 = temp__5753__auto___47816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47572_47817__$1)){
var c__4679__auto___47818 = cljs.core.chunk_first(seq__47572_47817__$1);
var G__47819 = cljs.core.chunk_rest(seq__47572_47817__$1);
var G__47820 = c__4679__auto___47818;
var G__47821 = cljs.core.count(c__4679__auto___47818);
var G__47822 = (0);
seq__47572_47802 = G__47819;
chunk__47574_47803 = G__47820;
count__47575_47804 = G__47821;
i__47576_47805 = G__47822;
continue;
} else {
var map__47581_47823 = cljs.core.first(seq__47572_47817__$1);
var map__47581_47824__$1 = cljs.core.__destructure_map(map__47581_47823);
var task_47825 = map__47581_47824__$1;
var fn_str_47826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47581_47824__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47581_47824__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47828 = goog.getObjectByName(fn_str_47826,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47827)].join(''));

(fn_obj_47828.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47828.cljs$core$IFn$_invoke$arity$2(path,new_link_47801) : fn_obj_47828.call(null,path,new_link_47801));


var G__47829 = cljs.core.next(seq__47572_47817__$1);
var G__47830 = null;
var G__47831 = (0);
var G__47832 = (0);
seq__47572_47802 = G__47829;
chunk__47574_47803 = G__47830;
count__47575_47804 = G__47831;
i__47576_47805 = G__47832;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47799);
});})(seq__47539_47795,chunk__47543_47796,count__47544_47797,i__47545_47798,seq__47371,chunk__47373,count__47374,i__47375,new_link_47801,path_match_47800,node_47799,path,seq__47371__$1,temp__5753__auto__,map__47370,map__47370__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47800], 0));

goog.dom.insertSiblingAfter(new_link_47801,node_47799);


var G__47833 = seq__47539_47795;
var G__47834 = chunk__47543_47796;
var G__47835 = count__47544_47797;
var G__47836 = (i__47545_47798 + (1));
seq__47539_47795 = G__47833;
chunk__47543_47796 = G__47834;
count__47544_47797 = G__47835;
i__47545_47798 = G__47836;
continue;
} else {
var G__47837 = seq__47539_47795;
var G__47838 = chunk__47543_47796;
var G__47839 = count__47544_47797;
var G__47840 = (i__47545_47798 + (1));
seq__47539_47795 = G__47837;
chunk__47543_47796 = G__47838;
count__47544_47797 = G__47839;
i__47545_47798 = G__47840;
continue;
}
} else {
var G__47841 = seq__47539_47795;
var G__47842 = chunk__47543_47796;
var G__47843 = count__47544_47797;
var G__47844 = (i__47545_47798 + (1));
seq__47539_47795 = G__47841;
chunk__47543_47796 = G__47842;
count__47544_47797 = G__47843;
i__47545_47798 = G__47844;
continue;
}
} else {
var temp__5753__auto___47845__$1 = cljs.core.seq(seq__47539_47795);
if(temp__5753__auto___47845__$1){
var seq__47539_47846__$1 = temp__5753__auto___47845__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47539_47846__$1)){
var c__4679__auto___47847 = cljs.core.chunk_first(seq__47539_47846__$1);
var G__47848 = cljs.core.chunk_rest(seq__47539_47846__$1);
var G__47849 = c__4679__auto___47847;
var G__47850 = cljs.core.count(c__4679__auto___47847);
var G__47851 = (0);
seq__47539_47795 = G__47848;
chunk__47543_47796 = G__47849;
count__47544_47797 = G__47850;
i__47545_47798 = G__47851;
continue;
} else {
var node_47852 = cljs.core.first(seq__47539_47846__$1);
if(cljs.core.not(node_47852.shadow$old)){
var path_match_47853 = shadow.cljs.devtools.client.browser.match_paths(node_47852.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47853)){
var new_link_47854 = (function (){var G__47582 = node_47852.cloneNode(true);
G__47582.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47853),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47582;
})();
(node_47852.shadow$old = true);

(new_link_47854.onload = ((function (seq__47539_47795,chunk__47543_47796,count__47544_47797,i__47545_47798,seq__47371,chunk__47373,count__47374,i__47375,new_link_47854,path_match_47853,node_47852,seq__47539_47846__$1,temp__5753__auto___47845__$1,path,seq__47371__$1,temp__5753__auto__,map__47370,map__47370__$1,msg,updates,reload_info){
return (function (e){
var seq__47583_47855 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47585_47856 = null;
var count__47586_47857 = (0);
var i__47587_47858 = (0);
while(true){
if((i__47587_47858 < count__47586_47857)){
var map__47591_47859 = chunk__47585_47856.cljs$core$IIndexed$_nth$arity$2(null,i__47587_47858);
var map__47591_47860__$1 = cljs.core.__destructure_map(map__47591_47859);
var task_47861 = map__47591_47860__$1;
var fn_str_47862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47591_47860__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47591_47860__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47864 = goog.getObjectByName(fn_str_47862,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47863)].join(''));

(fn_obj_47864.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47864.cljs$core$IFn$_invoke$arity$2(path,new_link_47854) : fn_obj_47864.call(null,path,new_link_47854));


var G__47865 = seq__47583_47855;
var G__47866 = chunk__47585_47856;
var G__47867 = count__47586_47857;
var G__47868 = (i__47587_47858 + (1));
seq__47583_47855 = G__47865;
chunk__47585_47856 = G__47866;
count__47586_47857 = G__47867;
i__47587_47858 = G__47868;
continue;
} else {
var temp__5753__auto___47869__$2 = cljs.core.seq(seq__47583_47855);
if(temp__5753__auto___47869__$2){
var seq__47583_47870__$1 = temp__5753__auto___47869__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47583_47870__$1)){
var c__4679__auto___47871 = cljs.core.chunk_first(seq__47583_47870__$1);
var G__47872 = cljs.core.chunk_rest(seq__47583_47870__$1);
var G__47873 = c__4679__auto___47871;
var G__47874 = cljs.core.count(c__4679__auto___47871);
var G__47875 = (0);
seq__47583_47855 = G__47872;
chunk__47585_47856 = G__47873;
count__47586_47857 = G__47874;
i__47587_47858 = G__47875;
continue;
} else {
var map__47592_47876 = cljs.core.first(seq__47583_47870__$1);
var map__47592_47877__$1 = cljs.core.__destructure_map(map__47592_47876);
var task_47878 = map__47592_47877__$1;
var fn_str_47879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47592_47877__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47592_47877__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47881 = goog.getObjectByName(fn_str_47879,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47880)].join(''));

(fn_obj_47881.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47881.cljs$core$IFn$_invoke$arity$2(path,new_link_47854) : fn_obj_47881.call(null,path,new_link_47854));


var G__47882 = cljs.core.next(seq__47583_47870__$1);
var G__47883 = null;
var G__47884 = (0);
var G__47885 = (0);
seq__47583_47855 = G__47882;
chunk__47585_47856 = G__47883;
count__47586_47857 = G__47884;
i__47587_47858 = G__47885;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47852);
});})(seq__47539_47795,chunk__47543_47796,count__47544_47797,i__47545_47798,seq__47371,chunk__47373,count__47374,i__47375,new_link_47854,path_match_47853,node_47852,seq__47539_47846__$1,temp__5753__auto___47845__$1,path,seq__47371__$1,temp__5753__auto__,map__47370,map__47370__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47853], 0));

goog.dom.insertSiblingAfter(new_link_47854,node_47852);


var G__47886 = cljs.core.next(seq__47539_47846__$1);
var G__47887 = null;
var G__47888 = (0);
var G__47889 = (0);
seq__47539_47795 = G__47886;
chunk__47543_47796 = G__47887;
count__47544_47797 = G__47888;
i__47545_47798 = G__47889;
continue;
} else {
var G__47890 = cljs.core.next(seq__47539_47846__$1);
var G__47891 = null;
var G__47892 = (0);
var G__47893 = (0);
seq__47539_47795 = G__47890;
chunk__47543_47796 = G__47891;
count__47544_47797 = G__47892;
i__47545_47798 = G__47893;
continue;
}
} else {
var G__47894 = cljs.core.next(seq__47539_47846__$1);
var G__47895 = null;
var G__47896 = (0);
var G__47897 = (0);
seq__47539_47795 = G__47894;
chunk__47543_47796 = G__47895;
count__47544_47797 = G__47896;
i__47545_47798 = G__47897;
continue;
}
}
} else {
}
}
break;
}


var G__47898 = cljs.core.next(seq__47371__$1);
var G__47899 = null;
var G__47900 = (0);
var G__47901 = (0);
seq__47371 = G__47898;
chunk__47373 = G__47899;
count__47374 = G__47900;
i__47375 = G__47901;
continue;
} else {
var G__47902 = cljs.core.next(seq__47371__$1);
var G__47903 = null;
var G__47904 = (0);
var G__47905 = (0);
seq__47371 = G__47902;
chunk__47373 = G__47903;
count__47374 = G__47904;
i__47375 = G__47905;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47593){
var map__47594 = p__47593;
var map__47594__$1 = cljs.core.__destructure_map(map__47594);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47594__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47595){
var map__47596 = p__47595;
var map__47596__$1 = cljs.core.__destructure_map(map__47596);
var _ = map__47596__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47596__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47597,done,error){
var map__47598 = p__47597;
var map__47598__$1 = cljs.core.__destructure_map(map__47598);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47598__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47599,done,error){
var map__47600 = p__47599;
var map__47600__$1 = cljs.core.__destructure_map(map__47600);
var msg = map__47600__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47600__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47600__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47600__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47601){
var map__47602 = p__47601;
var map__47602__$1 = cljs.core.__destructure_map(map__47602);
var src = map__47602__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47602__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47603 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47603) : done.call(null,G__47603));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47604){
var map__47605 = p__47604;
var map__47605__$1 = cljs.core.__destructure_map(map__47605);
var msg__$1 = map__47605__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47605__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47606){var ex = e47606;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47607){
var map__47608 = p__47607;
var map__47608__$1 = cljs.core.__destructure_map(map__47608);
var env = map__47608__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47608__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47609){
var map__47610 = p__47609;
var map__47610__$1 = cljs.core.__destructure_map(map__47610);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47610__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47610__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__47611){
var map__47612 = p__47611;
var map__47612__$1 = cljs.core.__destructure_map(map__47612);
var svc = map__47612__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47612__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
