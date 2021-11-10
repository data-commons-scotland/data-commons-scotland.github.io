goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34095){
var map__34098 = p__34095;
var map__34098__$1 = cljs.core.__destructure_map(map__34098);
var m = map__34098__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34098__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34098__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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
var seq__34102_34426 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34103_34427 = null;
var count__34104_34428 = (0);
var i__34105_34429 = (0);
while(true){
if((i__34105_34429 < count__34104_34428)){
var f_34430 = chunk__34103_34427.cljs$core$IIndexed$_nth$arity$2(null,i__34105_34429);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34430], 0));


var G__34431 = seq__34102_34426;
var G__34432 = chunk__34103_34427;
var G__34433 = count__34104_34428;
var G__34434 = (i__34105_34429 + (1));
seq__34102_34426 = G__34431;
chunk__34103_34427 = G__34432;
count__34104_34428 = G__34433;
i__34105_34429 = G__34434;
continue;
} else {
var temp__5735__auto___34435 = cljs.core.seq(seq__34102_34426);
if(temp__5735__auto___34435){
var seq__34102_34436__$1 = temp__5735__auto___34435;
if(cljs.core.chunked_seq_QMARK_(seq__34102_34436__$1)){
var c__4591__auto___34437 = cljs.core.chunk_first(seq__34102_34436__$1);
var G__34438 = cljs.core.chunk_rest(seq__34102_34436__$1);
var G__34439 = c__4591__auto___34437;
var G__34440 = cljs.core.count(c__4591__auto___34437);
var G__34441 = (0);
seq__34102_34426 = G__34438;
chunk__34103_34427 = G__34439;
count__34104_34428 = G__34440;
i__34105_34429 = G__34441;
continue;
} else {
var f_34442 = cljs.core.first(seq__34102_34436__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34442], 0));


var G__34443 = cljs.core.next(seq__34102_34436__$1);
var G__34444 = null;
var G__34445 = (0);
var G__34446 = (0);
seq__34102_34426 = G__34443;
chunk__34103_34427 = G__34444;
count__34104_34428 = G__34445;
i__34105_34429 = G__34446;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34447 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34447], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34447)))?cljs.core.second(arglists_34447):arglists_34447)], 0));
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
var seq__34111_34450 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34112_34451 = null;
var count__34113_34452 = (0);
var i__34114_34453 = (0);
while(true){
if((i__34114_34453 < count__34113_34452)){
var vec__34124_34454 = chunk__34112_34451.cljs$core$IIndexed$_nth$arity$2(null,i__34114_34453);
var name_34455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34124_34454,(0),null);
var map__34127_34456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34124_34454,(1),null);
var map__34127_34457__$1 = cljs.core.__destructure_map(map__34127_34456);
var doc_34458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127_34457__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127_34457__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34455], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34459], 0));

if(cljs.core.truth_(doc_34458)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34458], 0));
} else {
}


var G__34460 = seq__34111_34450;
var G__34461 = chunk__34112_34451;
var G__34462 = count__34113_34452;
var G__34463 = (i__34114_34453 + (1));
seq__34111_34450 = G__34460;
chunk__34112_34451 = G__34461;
count__34113_34452 = G__34462;
i__34114_34453 = G__34463;
continue;
} else {
var temp__5735__auto___34464 = cljs.core.seq(seq__34111_34450);
if(temp__5735__auto___34464){
var seq__34111_34465__$1 = temp__5735__auto___34464;
if(cljs.core.chunked_seq_QMARK_(seq__34111_34465__$1)){
var c__4591__auto___34466 = cljs.core.chunk_first(seq__34111_34465__$1);
var G__34467 = cljs.core.chunk_rest(seq__34111_34465__$1);
var G__34468 = c__4591__auto___34466;
var G__34469 = cljs.core.count(c__4591__auto___34466);
var G__34470 = (0);
seq__34111_34450 = G__34467;
chunk__34112_34451 = G__34468;
count__34113_34452 = G__34469;
i__34114_34453 = G__34470;
continue;
} else {
var vec__34128_34471 = cljs.core.first(seq__34111_34465__$1);
var name_34472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34128_34471,(0),null);
var map__34131_34473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34128_34471,(1),null);
var map__34131_34474__$1 = cljs.core.__destructure_map(map__34131_34473);
var doc_34475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131_34474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131_34474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34472], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34476], 0));

if(cljs.core.truth_(doc_34475)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34475], 0));
} else {
}


var G__34481 = cljs.core.next(seq__34111_34465__$1);
var G__34482 = null;
var G__34483 = (0);
var G__34484 = (0);
seq__34111_34450 = G__34481;
chunk__34112_34451 = G__34482;
count__34113_34452 = G__34483;
i__34114_34453 = G__34484;
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

var seq__34132 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34133 = null;
var count__34134 = (0);
var i__34135 = (0);
while(true){
if((i__34135 < count__34134)){
var role = chunk__34133.cljs$core$IIndexed$_nth$arity$2(null,i__34135);
var temp__5735__auto___34488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34488__$1)){
var spec_34489 = temp__5735__auto___34488__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34489)], 0));
} else {
}


var G__34492 = seq__34132;
var G__34493 = chunk__34133;
var G__34494 = count__34134;
var G__34495 = (i__34135 + (1));
seq__34132 = G__34492;
chunk__34133 = G__34493;
count__34134 = G__34494;
i__34135 = G__34495;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34132);
if(temp__5735__auto____$1){
var seq__34132__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34132__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34132__$1);
var G__34498 = cljs.core.chunk_rest(seq__34132__$1);
var G__34499 = c__4591__auto__;
var G__34500 = cljs.core.count(c__4591__auto__);
var G__34501 = (0);
seq__34132 = G__34498;
chunk__34133 = G__34499;
count__34134 = G__34500;
i__34135 = G__34501;
continue;
} else {
var role = cljs.core.first(seq__34132__$1);
var temp__5735__auto___34502__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34502__$2)){
var spec_34503 = temp__5735__auto___34502__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34503)], 0));
} else {
}


var G__34504 = cljs.core.next(seq__34132__$1);
var G__34505 = null;
var G__34506 = (0);
var G__34507 = (0);
seq__34132 = G__34504;
chunk__34133 = G__34505;
count__34134 = G__34506;
i__34135 = G__34507;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
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
var G__34523 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34524 = cljs.core.ex_cause(t);
via = G__34523;
t = G__34524;
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
var map__34199 = datafied_throwable;
var map__34199__$1 = cljs.core.__destructure_map(map__34199);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34199__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34200 = cljs.core.last(via);
var map__34200__$1 = cljs.core.__destructure_map(map__34200);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34200__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34200__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34200__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34201 = data;
var map__34201__$1 = cljs.core.__destructure_map(map__34201);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34201__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34201__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34201__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34206 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34206__$1 = cljs.core.__destructure_map(map__34206);
var top_data = map__34206__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34206__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34207 = phase;
var G__34207__$1 = (((G__34207 instanceof cljs.core.Keyword))?G__34207.fqn:null);
switch (G__34207__$1) {
case "read-source":
var map__34213 = data;
var map__34213__$1 = cljs.core.__destructure_map(map__34213);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34213__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34213__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34214 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34214__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34214,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34214);
var G__34214__$2 = (cljs.core.truth_((function (){var fexpr__34258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34258.cljs$core$IFn$_invoke$arity$1 ? fexpr__34258.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34258.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34214__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34214__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34214__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34214__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34262 = top_data;
var G__34262__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34262,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34262);
var G__34262__$2 = (cljs.core.truth_((function (){var fexpr__34274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34274.cljs$core$IFn$_invoke$arity$1 ? fexpr__34274.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34274.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34262__$1);
var G__34262__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34262__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34262__$2);
var G__34262__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34262__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34262__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34262__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34262__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34288 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34288,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34288,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34288,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34288,(3),null);
var G__34292 = top_data;
var G__34292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34292);
var G__34292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34292__$1);
var G__34292__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34292__$2);
var G__34292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34292__$4;
}

break;
case "execution":
var vec__34307 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34197_SHARP_){
var or__4160__auto__ = (p1__34197_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__34323 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34323.cljs$core$IFn$_invoke$arity$1 ? fexpr__34323.cljs$core$IFn$_invoke$arity$1(p1__34197_SHARP_) : fexpr__34323.call(null,p1__34197_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__34328 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34328__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34328);
var G__34328__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34328__$1);
var G__34328__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34328__$2);
var G__34328__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34328__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34328__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34328__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34207__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34338){
var map__34339 = p__34338;
var map__34339__$1 = cljs.core.__destructure_map(map__34339);
var triage_data = map__34339__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34341 = phase;
var G__34341__$1 = (((G__34341 instanceof cljs.core.Keyword))?G__34341.fqn:null);
switch (G__34341__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34342 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34343 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34344 = loc;
var G__34345 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34355_34600 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34356_34601 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34357_34602 = true;
var _STAR_print_fn_STAR__temp_val__34358_34603 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34357_34602);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34358_34603);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34335_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34335_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34356_34601);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34355_34600);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34342,G__34343,G__34344,G__34345) : format.call(null,G__34342,G__34343,G__34344,G__34345));

break;
case "macroexpansion":
var G__34363 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34364 = cause_type;
var G__34365 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34366 = loc;
var G__34367 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34363,G__34364,G__34365,G__34366,G__34367) : format.call(null,G__34363,G__34364,G__34365,G__34366,G__34367));

break;
case "compile-syntax-check":
var G__34368 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34369 = cause_type;
var G__34370 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34371 = loc;
var G__34372 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34368,G__34369,G__34370,G__34371,G__34372) : format.call(null,G__34368,G__34369,G__34370,G__34371,G__34372));

break;
case "compilation":
var G__34373 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34374 = cause_type;
var G__34375 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34376 = loc;
var G__34377 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34373,G__34374,G__34375,G__34376,G__34377) : format.call(null,G__34373,G__34374,G__34375,G__34376,G__34377));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34378 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34379 = symbol;
var G__34380 = loc;
var G__34381 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34406_34626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34407_34627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34408_34629 = true;
var _STAR_print_fn_STAR__temp_val__34409_34630 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34408_34629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34409_34630);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34337_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34337_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34407_34627);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34406_34626);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34378,G__34379,G__34380,G__34381) : format.call(null,G__34378,G__34379,G__34380,G__34381));
} else {
var G__34416 = "Execution error%s at %s(%s).\n%s\n";
var G__34417 = cause_type;
var G__34418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34419 = loc;
var G__34420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34416,G__34417,G__34418,G__34419,G__34420) : format.call(null,G__34416,G__34417,G__34418,G__34419,G__34420));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34341__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
