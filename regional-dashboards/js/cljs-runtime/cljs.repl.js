goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31815){
var map__31816 = p__31815;
var map__31816__$1 = (((((!((map__31816 == null))))?(((((map__31816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31816):map__31816);
var m = map__31816__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31816__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31818_31931 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31819_31932 = null;
var count__31820_31933 = (0);
var i__31821_31934 = (0);
while(true){
if((i__31821_31934 < count__31820_31933)){
var f_31935 = chunk__31819_31932.cljs$core$IIndexed$_nth$arity$2(null,i__31821_31934);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31935], 0));


var G__31936 = seq__31818_31931;
var G__31937 = chunk__31819_31932;
var G__31938 = count__31820_31933;
var G__31939 = (i__31821_31934 + (1));
seq__31818_31931 = G__31936;
chunk__31819_31932 = G__31937;
count__31820_31933 = G__31938;
i__31821_31934 = G__31939;
continue;
} else {
var temp__5735__auto___31940 = cljs.core.seq(seq__31818_31931);
if(temp__5735__auto___31940){
var seq__31818_31941__$1 = temp__5735__auto___31940;
if(cljs.core.chunked_seq_QMARK_(seq__31818_31941__$1)){
var c__4556__auto___31942 = cljs.core.chunk_first(seq__31818_31941__$1);
var G__31943 = cljs.core.chunk_rest(seq__31818_31941__$1);
var G__31944 = c__4556__auto___31942;
var G__31945 = cljs.core.count(c__4556__auto___31942);
var G__31946 = (0);
seq__31818_31931 = G__31943;
chunk__31819_31932 = G__31944;
count__31820_31933 = G__31945;
i__31821_31934 = G__31946;
continue;
} else {
var f_31947 = cljs.core.first(seq__31818_31941__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31947], 0));


var G__31948 = cljs.core.next(seq__31818_31941__$1);
var G__31949 = null;
var G__31950 = (0);
var G__31951 = (0);
seq__31818_31931 = G__31948;
chunk__31819_31932 = G__31949;
count__31820_31933 = G__31950;
i__31821_31934 = G__31951;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31952 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31952], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31952)))?cljs.core.second(arglists_31952):arglists_31952)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31822_31970 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31823_31971 = null;
var count__31824_31972 = (0);
var i__31825_31973 = (0);
while(true){
if((i__31825_31973 < count__31824_31972)){
var vec__31836_31974 = chunk__31823_31971.cljs$core$IIndexed$_nth$arity$2(null,i__31825_31973);
var name_31975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836_31974,(0),null);
var map__31839_31976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836_31974,(1),null);
var map__31839_31977__$1 = (((((!((map__31839_31976 == null))))?(((((map__31839_31976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31839_31976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31839_31976):map__31839_31976);
var doc_31978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31839_31977__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31839_31977__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31975], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31979], 0));

if(cljs.core.truth_(doc_31978)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31978], 0));
} else {
}


var G__31987 = seq__31822_31970;
var G__31988 = chunk__31823_31971;
var G__31989 = count__31824_31972;
var G__31990 = (i__31825_31973 + (1));
seq__31822_31970 = G__31987;
chunk__31823_31971 = G__31988;
count__31824_31972 = G__31989;
i__31825_31973 = G__31990;
continue;
} else {
var temp__5735__auto___31991 = cljs.core.seq(seq__31822_31970);
if(temp__5735__auto___31991){
var seq__31822_31992__$1 = temp__5735__auto___31991;
if(cljs.core.chunked_seq_QMARK_(seq__31822_31992__$1)){
var c__4556__auto___31993 = cljs.core.chunk_first(seq__31822_31992__$1);
var G__31994 = cljs.core.chunk_rest(seq__31822_31992__$1);
var G__31995 = c__4556__auto___31993;
var G__31996 = cljs.core.count(c__4556__auto___31993);
var G__31997 = (0);
seq__31822_31970 = G__31994;
chunk__31823_31971 = G__31995;
count__31824_31972 = G__31996;
i__31825_31973 = G__31997;
continue;
} else {
var vec__31841_32002 = cljs.core.first(seq__31822_31992__$1);
var name_32003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31841_32002,(0),null);
var map__31844_32004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31841_32002,(1),null);
var map__31844_32005__$1 = (((((!((map__31844_32004 == null))))?(((((map__31844_32004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31844_32004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31844_32004):map__31844_32004);
var doc_32006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31844_32005__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31844_32005__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32003], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32007], 0));

if(cljs.core.truth_(doc_32006)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32006], 0));
} else {
}


var G__32026 = cljs.core.next(seq__31822_31992__$1);
var G__32027 = null;
var G__32028 = (0);
var G__32029 = (0);
seq__31822_31970 = G__32026;
chunk__31823_31971 = G__32027;
count__31824_31972 = G__32028;
i__31825_31973 = G__32029;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31846 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31847 = null;
var count__31848 = (0);
var i__31849 = (0);
while(true){
if((i__31849 < count__31848)){
var role = chunk__31847.cljs$core$IIndexed$_nth$arity$2(null,i__31849);
var temp__5735__auto___32030__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32030__$1)){
var spec_32031 = temp__5735__auto___32030__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32031)], 0));
} else {
}


var G__32032 = seq__31846;
var G__32033 = chunk__31847;
var G__32034 = count__31848;
var G__32035 = (i__31849 + (1));
seq__31846 = G__32032;
chunk__31847 = G__32033;
count__31848 = G__32034;
i__31849 = G__32035;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31846);
if(temp__5735__auto____$1){
var seq__31846__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31846__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31846__$1);
var G__32036 = cljs.core.chunk_rest(seq__31846__$1);
var G__32037 = c__4556__auto__;
var G__32038 = cljs.core.count(c__4556__auto__);
var G__32039 = (0);
seq__31846 = G__32036;
chunk__31847 = G__32037;
count__31848 = G__32038;
i__31849 = G__32039;
continue;
} else {
var role = cljs.core.first(seq__31846__$1);
var temp__5735__auto___32040__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32040__$2)){
var spec_32057 = temp__5735__auto___32040__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32057)], 0));
} else {
}


var G__32058 = cljs.core.next(seq__31846__$1);
var G__32059 = null;
var G__32060 = (0);
var G__32061 = (0);
seq__31846 = G__32058;
chunk__31847 = G__32059;
count__31848 = G__32060;
i__31849 = G__32061;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32062 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32063 = cljs.core.ex_cause(t);
via = G__32062;
t = G__32063;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31853 = datafied_throwable;
var map__31853__$1 = (((((!((map__31853 == null))))?(((((map__31853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31853):map__31853);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31853__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31853__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31853__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31854 = cljs.core.last(via);
var map__31854__$1 = (((((!((map__31854 == null))))?(((((map__31854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31854):map__31854);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31854__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31854__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31854__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31855 = data;
var map__31855__$1 = (((((!((map__31855 == null))))?(((((map__31855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31855):map__31855);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31855__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31855__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31855__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31856 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31856__$1 = (((((!((map__31856 == null))))?(((((map__31856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31856):map__31856);
var top_data = map__31856__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31863 = phase;
var G__31863__$1 = (((G__31863 instanceof cljs.core.Keyword))?G__31863.fqn:null);
switch (G__31863__$1) {
case "read-source":
var map__31864 = data;
var map__31864__$1 = (((((!((map__31864 == null))))?(((((map__31864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31864):map__31864);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31864__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31864__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31867 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31867__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31867,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31867);
var G__31867__$2 = (cljs.core.truth_((function (){var fexpr__31868 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31868.cljs$core$IFn$_invoke$arity$1 ? fexpr__31868.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31868.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31867__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31867__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31867__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31869 = top_data;
var G__31869__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31869,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31869);
var G__31869__$2 = (cljs.core.truth_((function (){var fexpr__31870 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31870.cljs$core$IFn$_invoke$arity$1 ? fexpr__31870.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31870.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31869__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31869__$1);
var G__31869__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31869__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31869__$2);
var G__31869__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31869__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31869__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31869__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31869__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31871 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31871,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31871,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31871,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31871,(3),null);
var G__31877 = top_data;
var G__31877__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31877,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31877);
var G__31877__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31877__$1);
var G__31877__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31877__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31877__$2);
var G__31877__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31877__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31877__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31877__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31877__$4;
}

break;
case "execution":
var vec__31878 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31878,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31878,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31878,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31878,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31852_SHARP_){
var or__4126__auto__ = (p1__31852_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__31882 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31882.cljs$core$IFn$_invoke$arity$1 ? fexpr__31882.cljs$core$IFn$_invoke$arity$1(p1__31852_SHARP_) : fexpr__31882.call(null,p1__31852_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31883__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31883);
var G__31883__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31883__$1);
var G__31883__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31883__$2);
var G__31883__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31883__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31883__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31863__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31886){
var map__31887 = p__31886;
var map__31887__$1 = (((((!((map__31887 == null))))?(((((map__31887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31887):map__31887);
var triage_data = map__31887__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31891 = phase;
var G__31891__$1 = (((G__31891 instanceof cljs.core.Keyword))?G__31891.fqn:null);
switch (G__31891__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31892 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31893 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31894 = loc;
var G__31895 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31897_32103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31898_32104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31899_32105 = true;
var _STAR_print_fn_STAR__temp_val__31900_32106 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31899_32105);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31900_32106);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31884_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31884_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31898_32104);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31897_32103);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31892,G__31893,G__31894,G__31895) : format.call(null,G__31892,G__31893,G__31894,G__31895));

break;
case "macroexpansion":
var G__31901 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31902 = cause_type;
var G__31903 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31904 = loc;
var G__31905 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31901,G__31902,G__31903,G__31904,G__31905) : format.call(null,G__31901,G__31902,G__31903,G__31904,G__31905));

break;
case "compile-syntax-check":
var G__31906 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31907 = cause_type;
var G__31908 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31909 = loc;
var G__31910 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31906,G__31907,G__31908,G__31909,G__31910) : format.call(null,G__31906,G__31907,G__31908,G__31909,G__31910));

break;
case "compilation":
var G__31911 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31912 = cause_type;
var G__31913 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31914 = loc;
var G__31915 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31911,G__31912,G__31913,G__31914,G__31915) : format.call(null,G__31911,G__31912,G__31913,G__31914,G__31915));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31916 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31917 = symbol;
var G__31918 = loc;
var G__31919 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31920_32109 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31921_32110 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31922_32111 = true;
var _STAR_print_fn_STAR__temp_val__31923_32112 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31922_32111);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31923_32112);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31885_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31885_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31921_32110);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31920_32109);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31916,G__31917,G__31918,G__31919) : format.call(null,G__31916,G__31917,G__31918,G__31919));
} else {
var G__31926 = "Execution error%s at %s(%s).\n%s\n";
var G__31927 = cause_type;
var G__31928 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31929 = loc;
var G__31930 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31926,G__31927,G__31928,G__31929,G__31930) : format.call(null,G__31926,G__31927,G__31928,G__31929,G__31930));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31891__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
