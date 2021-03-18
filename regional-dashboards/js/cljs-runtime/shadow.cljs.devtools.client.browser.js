goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32899 = arguments.length;
var i__4737__auto___32900 = (0);
while(true){
if((i__4737__auto___32900 < len__4736__auto___32899)){
args__4742__auto__.push((arguments[i__4737__auto___32900]));

var G__32901 = (i__4737__auto___32900 + (1));
i__4737__auto___32900 = G__32901;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32592){
var G__32593 = cljs.core.first(seq32592);
var seq32592__$1 = cljs.core.next(seq32592);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32593,seq32592__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32601 = cljs.core.seq(sources);
var chunk__32602 = null;
var count__32603 = (0);
var i__32604 = (0);
while(true){
if((i__32604 < count__32603)){
var map__32629 = chunk__32602.cljs$core$IIndexed$_nth$arity$2(null,i__32604);
var map__32629__$1 = (((((!((map__32629 == null))))?(((((map__32629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32629):map__32629);
var src = map__32629__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32632){var e_32902 = e32632;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32902);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32902.message)].join('')));
}

var G__32903 = seq__32601;
var G__32904 = chunk__32602;
var G__32905 = count__32603;
var G__32906 = (i__32604 + (1));
seq__32601 = G__32903;
chunk__32602 = G__32904;
count__32603 = G__32905;
i__32604 = G__32906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32601);
if(temp__5735__auto__){
var seq__32601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32601__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32601__$1);
var G__32907 = cljs.core.chunk_rest(seq__32601__$1);
var G__32908 = c__4556__auto__;
var G__32909 = cljs.core.count(c__4556__auto__);
var G__32910 = (0);
seq__32601 = G__32907;
chunk__32602 = G__32908;
count__32603 = G__32909;
i__32604 = G__32910;
continue;
} else {
var map__32642 = cljs.core.first(seq__32601__$1);
var map__32642__$1 = (((((!((map__32642 == null))))?(((((map__32642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32642):map__32642);
var src = map__32642__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32642__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32649){var e_32911 = e32649;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32911);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32911.message)].join('')));
}

var G__32912 = cljs.core.next(seq__32601__$1);
var G__32913 = null;
var G__32914 = (0);
var G__32915 = (0);
seq__32601 = G__32912;
chunk__32602 = G__32913;
count__32603 = G__32914;
i__32604 = G__32915;
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
var seq__32656 = cljs.core.seq(js_requires);
var chunk__32657 = null;
var count__32658 = (0);
var i__32659 = (0);
while(true){
if((i__32659 < count__32658)){
var js_ns = chunk__32657.cljs$core$IIndexed$_nth$arity$2(null,i__32659);
var require_str_32916 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32916);


var G__32917 = seq__32656;
var G__32918 = chunk__32657;
var G__32919 = count__32658;
var G__32920 = (i__32659 + (1));
seq__32656 = G__32917;
chunk__32657 = G__32918;
count__32658 = G__32919;
i__32659 = G__32920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32656);
if(temp__5735__auto__){
var seq__32656__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32656__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32656__$1);
var G__32921 = cljs.core.chunk_rest(seq__32656__$1);
var G__32922 = c__4556__auto__;
var G__32923 = cljs.core.count(c__4556__auto__);
var G__32924 = (0);
seq__32656 = G__32921;
chunk__32657 = G__32922;
count__32658 = G__32923;
i__32659 = G__32924;
continue;
} else {
var js_ns = cljs.core.first(seq__32656__$1);
var require_str_32925 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32925);


var G__32926 = cljs.core.next(seq__32656__$1);
var G__32927 = null;
var G__32928 = (0);
var G__32929 = (0);
seq__32656 = G__32926;
chunk__32657 = G__32927;
count__32658 = G__32928;
i__32659 = G__32929;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__32673){
var map__32678 = p__32673;
var map__32678__$1 = (((((!((map__32678 == null))))?(((((map__32678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32678):map__32678);
var msg = map__32678__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32678__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32678__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32682(s__32683){
return (new cljs.core.LazySeq(null,(function (){
var s__32683__$1 = s__32683;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32683__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__32692 = cljs.core.first(xs__6292__auto__);
var map__32692__$1 = (((((!((map__32692 == null))))?(((((map__32692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32692):map__32692);
var src = map__32692__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32692__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__32683__$1,map__32692,map__32692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32678,map__32678__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32682_$_iter__32684(s__32685){
return (new cljs.core.LazySeq(null,((function (s__32683__$1,map__32692,map__32692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32678,map__32678__$1,msg,info,reload_info){
return (function (){
var s__32685__$1 = s__32685;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__32685__$1);
if(temp__5735__auto____$1){
var s__32685__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32685__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32685__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32687 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32686 = (0);
while(true){
if((i__32686 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__32686);
cljs.core.chunk_append(b__32687,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32930 = (i__32686 + (1));
i__32686 = G__32930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32687),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32682_$_iter__32684(cljs.core.chunk_rest(s__32685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32687),null);
}
} else {
var warning = cljs.core.first(s__32685__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32682_$_iter__32684(cljs.core.rest(s__32685__$2)));
}
} else {
return null;
}
break;
}
});})(s__32683__$1,map__32692,map__32692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32678,map__32678__$1,msg,info,reload_info))
,null,null));
});})(s__32683__$1,map__32692,map__32692__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32678,map__32678__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32682(cljs.core.rest(s__32683__$1)));
} else {
var G__32931 = cljs.core.rest(s__32683__$1);
s__32683__$1 = G__32931;
continue;
}
} else {
var G__32932 = cljs.core.rest(s__32683__$1);
s__32683__$1 = G__32932;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__32709_32933 = cljs.core.seq(warnings);
var chunk__32710_32934 = null;
var count__32711_32935 = (0);
var i__32712_32936 = (0);
while(true){
if((i__32712_32936 < count__32711_32935)){
var map__32723_32937 = chunk__32710_32934.cljs$core$IIndexed$_nth$arity$2(null,i__32712_32936);
var map__32723_32938__$1 = (((((!((map__32723_32937 == null))))?(((((map__32723_32937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32723_32937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32723_32937):map__32723_32937);
var w_32939 = map__32723_32938__$1;
var msg_32940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723_32938__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723_32938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723_32938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723_32938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32943)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32941),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32942),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32940__$1)].join(''));


var G__32944 = seq__32709_32933;
var G__32945 = chunk__32710_32934;
var G__32946 = count__32711_32935;
var G__32947 = (i__32712_32936 + (1));
seq__32709_32933 = G__32944;
chunk__32710_32934 = G__32945;
count__32711_32935 = G__32946;
i__32712_32936 = G__32947;
continue;
} else {
var temp__5735__auto___32948 = cljs.core.seq(seq__32709_32933);
if(temp__5735__auto___32948){
var seq__32709_32949__$1 = temp__5735__auto___32948;
if(cljs.core.chunked_seq_QMARK_(seq__32709_32949__$1)){
var c__4556__auto___32950 = cljs.core.chunk_first(seq__32709_32949__$1);
var G__32951 = cljs.core.chunk_rest(seq__32709_32949__$1);
var G__32952 = c__4556__auto___32950;
var G__32953 = cljs.core.count(c__4556__auto___32950);
var G__32954 = (0);
seq__32709_32933 = G__32951;
chunk__32710_32934 = G__32952;
count__32711_32935 = G__32953;
i__32712_32936 = G__32954;
continue;
} else {
var map__32725_32955 = cljs.core.first(seq__32709_32949__$1);
var map__32725_32956__$1 = (((((!((map__32725_32955 == null))))?(((((map__32725_32955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32725_32955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32725_32955):map__32725_32955);
var w_32957 = map__32725_32956__$1;
var msg_32958__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725_32956__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725_32956__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725_32956__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725_32956__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32961)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32959),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32960),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32958__$1)].join(''));


var G__32962 = cljs.core.next(seq__32709_32949__$1);
var G__32963 = null;
var G__32964 = (0);
var G__32965 = (0);
seq__32709_32933 = G__32962;
chunk__32710_32934 = G__32963;
count__32711_32935 = G__32964;
i__32712_32936 = G__32965;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__32672_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32672_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__32742){
var map__32743 = p__32742;
var map__32743__$1 = (((((!((map__32743 == null))))?(((((map__32743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32743):map__32743);
var msg = map__32743__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__32745 = cljs.core.seq(updates);
var chunk__32747 = null;
var count__32748 = (0);
var i__32749 = (0);
while(true){
if((i__32749 < count__32748)){
var path = chunk__32747.cljs$core$IIndexed$_nth$arity$2(null,i__32749);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32800_32966 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32804_32967 = null;
var count__32805_32968 = (0);
var i__32806_32969 = (0);
while(true){
if((i__32806_32969 < count__32805_32968)){
var node_32970 = chunk__32804_32967.cljs$core$IIndexed$_nth$arity$2(null,i__32806_32969);
if(cljs.core.not(node_32970.shadow$old)){
var path_match_32971 = shadow.cljs.devtools.client.browser.match_paths(node_32970.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32971)){
var new_link_32972 = (function (){var G__32830 = node_32970.cloneNode(true);
G__32830.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32971),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32830;
})();
(node_32970.shadow$old = true);

(new_link_32972.onload = ((function (seq__32800_32966,chunk__32804_32967,count__32805_32968,i__32806_32969,seq__32745,chunk__32747,count__32748,i__32749,new_link_32972,path_match_32971,node_32970,path,map__32743,map__32743__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_32970);
});})(seq__32800_32966,chunk__32804_32967,count__32805_32968,i__32806_32969,seq__32745,chunk__32747,count__32748,i__32749,new_link_32972,path_match_32971,node_32970,path,map__32743,map__32743__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32971], 0));

goog.dom.insertSiblingAfter(new_link_32972,node_32970);


var G__32973 = seq__32800_32966;
var G__32974 = chunk__32804_32967;
var G__32975 = count__32805_32968;
var G__32976 = (i__32806_32969 + (1));
seq__32800_32966 = G__32973;
chunk__32804_32967 = G__32974;
count__32805_32968 = G__32975;
i__32806_32969 = G__32976;
continue;
} else {
var G__32977 = seq__32800_32966;
var G__32978 = chunk__32804_32967;
var G__32979 = count__32805_32968;
var G__32980 = (i__32806_32969 + (1));
seq__32800_32966 = G__32977;
chunk__32804_32967 = G__32978;
count__32805_32968 = G__32979;
i__32806_32969 = G__32980;
continue;
}
} else {
var G__32981 = seq__32800_32966;
var G__32982 = chunk__32804_32967;
var G__32983 = count__32805_32968;
var G__32984 = (i__32806_32969 + (1));
seq__32800_32966 = G__32981;
chunk__32804_32967 = G__32982;
count__32805_32968 = G__32983;
i__32806_32969 = G__32984;
continue;
}
} else {
var temp__5735__auto___32985 = cljs.core.seq(seq__32800_32966);
if(temp__5735__auto___32985){
var seq__32800_32986__$1 = temp__5735__auto___32985;
if(cljs.core.chunked_seq_QMARK_(seq__32800_32986__$1)){
var c__4556__auto___32987 = cljs.core.chunk_first(seq__32800_32986__$1);
var G__32988 = cljs.core.chunk_rest(seq__32800_32986__$1);
var G__32989 = c__4556__auto___32987;
var G__32990 = cljs.core.count(c__4556__auto___32987);
var G__32991 = (0);
seq__32800_32966 = G__32988;
chunk__32804_32967 = G__32989;
count__32805_32968 = G__32990;
i__32806_32969 = G__32991;
continue;
} else {
var node_32992 = cljs.core.first(seq__32800_32986__$1);
if(cljs.core.not(node_32992.shadow$old)){
var path_match_32993 = shadow.cljs.devtools.client.browser.match_paths(node_32992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32993)){
var new_link_32994 = (function (){var G__32837 = node_32992.cloneNode(true);
G__32837.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32837;
})();
(node_32992.shadow$old = true);

(new_link_32994.onload = ((function (seq__32800_32966,chunk__32804_32967,count__32805_32968,i__32806_32969,seq__32745,chunk__32747,count__32748,i__32749,new_link_32994,path_match_32993,node_32992,seq__32800_32986__$1,temp__5735__auto___32985,path,map__32743,map__32743__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_32992);
});})(seq__32800_32966,chunk__32804_32967,count__32805_32968,i__32806_32969,seq__32745,chunk__32747,count__32748,i__32749,new_link_32994,path_match_32993,node_32992,seq__32800_32986__$1,temp__5735__auto___32985,path,map__32743,map__32743__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32993], 0));

goog.dom.insertSiblingAfter(new_link_32994,node_32992);


var G__32995 = cljs.core.next(seq__32800_32986__$1);
var G__32996 = null;
var G__32997 = (0);
var G__32998 = (0);
seq__32800_32966 = G__32995;
chunk__32804_32967 = G__32996;
count__32805_32968 = G__32997;
i__32806_32969 = G__32998;
continue;
} else {
var G__32999 = cljs.core.next(seq__32800_32986__$1);
var G__33000 = null;
var G__33001 = (0);
var G__33002 = (0);
seq__32800_32966 = G__32999;
chunk__32804_32967 = G__33000;
count__32805_32968 = G__33001;
i__32806_32969 = G__33002;
continue;
}
} else {
var G__33003 = cljs.core.next(seq__32800_32986__$1);
var G__33004 = null;
var G__33005 = (0);
var G__33006 = (0);
seq__32800_32966 = G__33003;
chunk__32804_32967 = G__33004;
count__32805_32968 = G__33005;
i__32806_32969 = G__33006;
continue;
}
}
} else {
}
}
break;
}


var G__33007 = seq__32745;
var G__33008 = chunk__32747;
var G__33009 = count__32748;
var G__33010 = (i__32749 + (1));
seq__32745 = G__33007;
chunk__32747 = G__33008;
count__32748 = G__33009;
i__32749 = G__33010;
continue;
} else {
var G__33011 = seq__32745;
var G__33012 = chunk__32747;
var G__33013 = count__32748;
var G__33014 = (i__32749 + (1));
seq__32745 = G__33011;
chunk__32747 = G__33012;
count__32748 = G__33013;
i__32749 = G__33014;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32745);
if(temp__5735__auto__){
var seq__32745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32745__$1);
var G__33015 = cljs.core.chunk_rest(seq__32745__$1);
var G__33016 = c__4556__auto__;
var G__33017 = cljs.core.count(c__4556__auto__);
var G__33018 = (0);
seq__32745 = G__33015;
chunk__32747 = G__33016;
count__32748 = G__33017;
i__32749 = G__33018;
continue;
} else {
var path = cljs.core.first(seq__32745__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32838_33019 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32842_33020 = null;
var count__32843_33021 = (0);
var i__32844_33022 = (0);
while(true){
if((i__32844_33022 < count__32843_33021)){
var node_33023 = chunk__32842_33020.cljs$core$IIndexed$_nth$arity$2(null,i__32844_33022);
if(cljs.core.not(node_33023.shadow$old)){
var path_match_33024 = shadow.cljs.devtools.client.browser.match_paths(node_33023.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33024)){
var new_link_33025 = (function (){var G__32850 = node_33023.cloneNode(true);
G__32850.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33024),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32850;
})();
(node_33023.shadow$old = true);

(new_link_33025.onload = ((function (seq__32838_33019,chunk__32842_33020,count__32843_33021,i__32844_33022,seq__32745,chunk__32747,count__32748,i__32749,new_link_33025,path_match_33024,node_33023,path,seq__32745__$1,temp__5735__auto__,map__32743,map__32743__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_33023);
});})(seq__32838_33019,chunk__32842_33020,count__32843_33021,i__32844_33022,seq__32745,chunk__32747,count__32748,i__32749,new_link_33025,path_match_33024,node_33023,path,seq__32745__$1,temp__5735__auto__,map__32743,map__32743__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33024], 0));

goog.dom.insertSiblingAfter(new_link_33025,node_33023);


var G__33026 = seq__32838_33019;
var G__33027 = chunk__32842_33020;
var G__33028 = count__32843_33021;
var G__33029 = (i__32844_33022 + (1));
seq__32838_33019 = G__33026;
chunk__32842_33020 = G__33027;
count__32843_33021 = G__33028;
i__32844_33022 = G__33029;
continue;
} else {
var G__33030 = seq__32838_33019;
var G__33031 = chunk__32842_33020;
var G__33032 = count__32843_33021;
var G__33033 = (i__32844_33022 + (1));
seq__32838_33019 = G__33030;
chunk__32842_33020 = G__33031;
count__32843_33021 = G__33032;
i__32844_33022 = G__33033;
continue;
}
} else {
var G__33034 = seq__32838_33019;
var G__33035 = chunk__32842_33020;
var G__33036 = count__32843_33021;
var G__33037 = (i__32844_33022 + (1));
seq__32838_33019 = G__33034;
chunk__32842_33020 = G__33035;
count__32843_33021 = G__33036;
i__32844_33022 = G__33037;
continue;
}
} else {
var temp__5735__auto___33038__$1 = cljs.core.seq(seq__32838_33019);
if(temp__5735__auto___33038__$1){
var seq__32838_33039__$1 = temp__5735__auto___33038__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32838_33039__$1)){
var c__4556__auto___33040 = cljs.core.chunk_first(seq__32838_33039__$1);
var G__33041 = cljs.core.chunk_rest(seq__32838_33039__$1);
var G__33042 = c__4556__auto___33040;
var G__33043 = cljs.core.count(c__4556__auto___33040);
var G__33044 = (0);
seq__32838_33019 = G__33041;
chunk__32842_33020 = G__33042;
count__32843_33021 = G__33043;
i__32844_33022 = G__33044;
continue;
} else {
var node_33045 = cljs.core.first(seq__32838_33039__$1);
if(cljs.core.not(node_33045.shadow$old)){
var path_match_33046 = shadow.cljs.devtools.client.browser.match_paths(node_33045.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33046)){
var new_link_33047 = (function (){var G__32851 = node_33045.cloneNode(true);
G__32851.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33046),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32851;
})();
(node_33045.shadow$old = true);

(new_link_33047.onload = ((function (seq__32838_33019,chunk__32842_33020,count__32843_33021,i__32844_33022,seq__32745,chunk__32747,count__32748,i__32749,new_link_33047,path_match_33046,node_33045,seq__32838_33039__$1,temp__5735__auto___33038__$1,path,seq__32745__$1,temp__5735__auto__,map__32743,map__32743__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_33045);
});})(seq__32838_33019,chunk__32842_33020,count__32843_33021,i__32844_33022,seq__32745,chunk__32747,count__32748,i__32749,new_link_33047,path_match_33046,node_33045,seq__32838_33039__$1,temp__5735__auto___33038__$1,path,seq__32745__$1,temp__5735__auto__,map__32743,map__32743__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33046], 0));

goog.dom.insertSiblingAfter(new_link_33047,node_33045);


var G__33048 = cljs.core.next(seq__32838_33039__$1);
var G__33049 = null;
var G__33050 = (0);
var G__33051 = (0);
seq__32838_33019 = G__33048;
chunk__32842_33020 = G__33049;
count__32843_33021 = G__33050;
i__32844_33022 = G__33051;
continue;
} else {
var G__33052 = cljs.core.next(seq__32838_33039__$1);
var G__33053 = null;
var G__33054 = (0);
var G__33055 = (0);
seq__32838_33019 = G__33052;
chunk__32842_33020 = G__33053;
count__32843_33021 = G__33054;
i__32844_33022 = G__33055;
continue;
}
} else {
var G__33056 = cljs.core.next(seq__32838_33039__$1);
var G__33057 = null;
var G__33058 = (0);
var G__33059 = (0);
seq__32838_33019 = G__33056;
chunk__32842_33020 = G__33057;
count__32843_33021 = G__33058;
i__32844_33022 = G__33059;
continue;
}
}
} else {
}
}
break;
}


var G__33060 = cljs.core.next(seq__32745__$1);
var G__33061 = null;
var G__33062 = (0);
var G__33063 = (0);
seq__32745 = G__33060;
chunk__32747 = G__33061;
count__32748 = G__33062;
i__32749 = G__33063;
continue;
} else {
var G__33064 = cljs.core.next(seq__32745__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__32745 = G__33064;
chunk__32747 = G__33065;
count__32748 = G__33066;
i__32749 = G__33067;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__32852){
var map__32853 = p__32852;
var map__32853__$1 = (((((!((map__32853 == null))))?(((((map__32853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32853):map__32853);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32853__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__32861){
var map__32862 = p__32861;
var map__32862__$1 = (((((!((map__32862 == null))))?(((((map__32862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32862):map__32862);
var _ = map__32862__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32862__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__32864,done,error){
var map__32865 = p__32864;
var map__32865__$1 = (((((!((map__32865 == null))))?(((((map__32865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32865):map__32865);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32865__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__32868,done,error){
var map__32871 = p__32868;
var map__32871__$1 = (((((!((map__32871 == null))))?(((((map__32871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32871):map__32871);
var msg = map__32871__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32871__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32871__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32871__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32874){
var map__32875 = p__32874;
var map__32875__$1 = (((((!((map__32875 == null))))?(((((map__32875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32875):map__32875);
var src = map__32875__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32875__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__32877 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32877) : done.call(null,G__32877));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__32878){
var map__32879 = p__32878;
var map__32879__$1 = (((((!((map__32879 == null))))?(((((map__32879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32879):map__32879);
var msg__$1 = map__32879__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32879__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e32881){var ex = e32881;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__32883){
var map__32884 = p__32883;
var map__32884__$1 = (((((!((map__32884 == null))))?(((((map__32884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32884):map__32884);
var env = map__32884__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32884__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__32890){
var map__32891 = p__32890;
var map__32891__$1 = (((((!((map__32891 == null))))?(((((map__32891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32891):map__32891);
var msg = map__32891__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32891__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__32893){
var map__32894 = p__32893;
var map__32894__$1 = (((((!((map__32894 == null))))?(((((map__32894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32894):map__32894);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32894__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32894__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__32896){
var map__32897 = p__32896;
var map__32897__$1 = (((((!((map__32897 == null))))?(((((map__32897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32897):map__32897);
var svc = map__32897__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32897__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
