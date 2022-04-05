// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16424){
var map__16425 = p__16424;
var map__16425__$1 = cljs.core.__destructure_map.call(null,map__16425);
var m = map__16425__$1;
var n = cljs.core.get.call(null,map__16425__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16426_16454 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16427_16455 = null;
var count__16428_16456 = (0);
var i__16429_16457 = (0);
while(true){
if((i__16429_16457 < count__16428_16456)){
var f_16458 = cljs.core._nth.call(null,chunk__16427_16455,i__16429_16457);
cljs.core.println.call(null,"  ",f_16458);


var G__16459 = seq__16426_16454;
var G__16460 = chunk__16427_16455;
var G__16461 = count__16428_16456;
var G__16462 = (i__16429_16457 + (1));
seq__16426_16454 = G__16459;
chunk__16427_16455 = G__16460;
count__16428_16456 = G__16461;
i__16429_16457 = G__16462;
continue;
} else {
var temp__5753__auto___16463 = cljs.core.seq.call(null,seq__16426_16454);
if(temp__5753__auto___16463){
var seq__16426_16464__$1 = temp__5753__auto___16463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16426_16464__$1)){
var c__4649__auto___16465 = cljs.core.chunk_first.call(null,seq__16426_16464__$1);
var G__16466 = cljs.core.chunk_rest.call(null,seq__16426_16464__$1);
var G__16467 = c__4649__auto___16465;
var G__16468 = cljs.core.count.call(null,c__4649__auto___16465);
var G__16469 = (0);
seq__16426_16454 = G__16466;
chunk__16427_16455 = G__16467;
count__16428_16456 = G__16468;
i__16429_16457 = G__16469;
continue;
} else {
var f_16470 = cljs.core.first.call(null,seq__16426_16464__$1);
cljs.core.println.call(null,"  ",f_16470);


var G__16471 = cljs.core.next.call(null,seq__16426_16464__$1);
var G__16472 = null;
var G__16473 = (0);
var G__16474 = (0);
seq__16426_16454 = G__16471;
chunk__16427_16455 = G__16472;
count__16428_16456 = G__16473;
i__16429_16457 = G__16474;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16475 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16475);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16475)))?cljs.core.second.call(null,arglists_16475):arglists_16475));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16430_16476 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16431_16477 = null;
var count__16432_16478 = (0);
var i__16433_16479 = (0);
while(true){
if((i__16433_16479 < count__16432_16478)){
var vec__16442_16480 = cljs.core._nth.call(null,chunk__16431_16477,i__16433_16479);
var name_16481 = cljs.core.nth.call(null,vec__16442_16480,(0),null);
var map__16445_16482 = cljs.core.nth.call(null,vec__16442_16480,(1),null);
var map__16445_16483__$1 = cljs.core.__destructure_map.call(null,map__16445_16482);
var doc_16484 = cljs.core.get.call(null,map__16445_16483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16485 = cljs.core.get.call(null,map__16445_16483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16481);

cljs.core.println.call(null," ",arglists_16485);

if(cljs.core.truth_(doc_16484)){
cljs.core.println.call(null," ",doc_16484);
} else {
}


var G__16486 = seq__16430_16476;
var G__16487 = chunk__16431_16477;
var G__16488 = count__16432_16478;
var G__16489 = (i__16433_16479 + (1));
seq__16430_16476 = G__16486;
chunk__16431_16477 = G__16487;
count__16432_16478 = G__16488;
i__16433_16479 = G__16489;
continue;
} else {
var temp__5753__auto___16490 = cljs.core.seq.call(null,seq__16430_16476);
if(temp__5753__auto___16490){
var seq__16430_16491__$1 = temp__5753__auto___16490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16430_16491__$1)){
var c__4649__auto___16492 = cljs.core.chunk_first.call(null,seq__16430_16491__$1);
var G__16493 = cljs.core.chunk_rest.call(null,seq__16430_16491__$1);
var G__16494 = c__4649__auto___16492;
var G__16495 = cljs.core.count.call(null,c__4649__auto___16492);
var G__16496 = (0);
seq__16430_16476 = G__16493;
chunk__16431_16477 = G__16494;
count__16432_16478 = G__16495;
i__16433_16479 = G__16496;
continue;
} else {
var vec__16446_16497 = cljs.core.first.call(null,seq__16430_16491__$1);
var name_16498 = cljs.core.nth.call(null,vec__16446_16497,(0),null);
var map__16449_16499 = cljs.core.nth.call(null,vec__16446_16497,(1),null);
var map__16449_16500__$1 = cljs.core.__destructure_map.call(null,map__16449_16499);
var doc_16501 = cljs.core.get.call(null,map__16449_16500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16502 = cljs.core.get.call(null,map__16449_16500__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16498);

cljs.core.println.call(null," ",arglists_16502);

if(cljs.core.truth_(doc_16501)){
cljs.core.println.call(null," ",doc_16501);
} else {
}


var G__16503 = cljs.core.next.call(null,seq__16430_16491__$1);
var G__16504 = null;
var G__16505 = (0);
var G__16506 = (0);
seq__16430_16476 = G__16503;
chunk__16431_16477 = G__16504;
count__16432_16478 = G__16505;
i__16433_16479 = G__16506;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__16450 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16451 = null;
var count__16452 = (0);
var i__16453 = (0);
while(true){
if((i__16453 < count__16452)){
var role = cljs.core._nth.call(null,chunk__16451,i__16453);
var temp__5753__auto___16507__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___16507__$1)){
var spec_16508 = temp__5753__auto___16507__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16508));
} else {
}


var G__16509 = seq__16450;
var G__16510 = chunk__16451;
var G__16511 = count__16452;
var G__16512 = (i__16453 + (1));
seq__16450 = G__16509;
chunk__16451 = G__16510;
count__16452 = G__16511;
i__16453 = G__16512;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__16450);
if(temp__5753__auto____$1){
var seq__16450__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16450__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__16450__$1);
var G__16513 = cljs.core.chunk_rest.call(null,seq__16450__$1);
var G__16514 = c__4649__auto__;
var G__16515 = cljs.core.count.call(null,c__4649__auto__);
var G__16516 = (0);
seq__16450 = G__16513;
chunk__16451 = G__16514;
count__16452 = G__16515;
i__16453 = G__16516;
continue;
} else {
var role = cljs.core.first.call(null,seq__16450__$1);
var temp__5753__auto___16517__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___16517__$2)){
var spec_16518 = temp__5753__auto___16517__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16518));
} else {
}


var G__16519 = cljs.core.next.call(null,seq__16450__$1);
var G__16520 = null;
var G__16521 = (0);
var G__16522 = (0);
seq__16450 = G__16519;
chunk__16451 = G__16520;
count__16452 = G__16521;
i__16453 = G__16522;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__16523 = cljs.core.conj.call(null,via,t);
var G__16524 = cljs.core.ex_cause.call(null,t);
via = G__16523;
t = G__16524;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__16527 = datafied_throwable;
var map__16527__$1 = cljs.core.__destructure_map.call(null,map__16527);
var via = cljs.core.get.call(null,map__16527__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16527__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16527__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16528 = cljs.core.last.call(null,via);
var map__16528__$1 = cljs.core.__destructure_map.call(null,map__16528);
var type = cljs.core.get.call(null,map__16528__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16528__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16528__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16529 = data;
var map__16529__$1 = cljs.core.__destructure_map.call(null,map__16529);
var problems = cljs.core.get.call(null,map__16529__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16529__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16529__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16530 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16530__$1 = cljs.core.__destructure_map.call(null,map__16530);
var top_data = map__16530__$1;
var source = cljs.core.get.call(null,map__16530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16531 = phase;
var G__16531__$1 = (((G__16531 instanceof cljs.core.Keyword))?G__16531.fqn:null);
switch (G__16531__$1) {
case "read-source":
var map__16532 = data;
var map__16532__$1 = cljs.core.__destructure_map.call(null,map__16532);
var line = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16533 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16533__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16533,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16533);
var G__16533__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16533__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16533__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16533__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16534 = top_data;
var G__16534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16534);
var G__16534__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16534__$1);
var G__16534__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16534__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16534__$2);
var G__16534__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16534__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16534__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16534__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16534__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16535 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16535,(0),null);
var method = cljs.core.nth.call(null,vec__16535,(1),null);
var file = cljs.core.nth.call(null,vec__16535,(2),null);
var line = cljs.core.nth.call(null,vec__16535,(3),null);
var G__16538 = top_data;
var G__16538__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16538,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16538);
var G__16538__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16538__$1);
var G__16538__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.call(null,G__16538__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16538__$2);
var G__16538__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16538__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16538__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16538__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16538__$4;
}

break;
case "execution":
var vec__16539 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16539,(0),null);
var method = cljs.core.nth.call(null,vec__16539,(1),null);
var file = cljs.core.nth.call(null,vec__16539,(2),null);
var line = cljs.core.nth.call(null,vec__16539,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__16526_SHARP_){
var or__4223__auto__ = (p1__16526_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16526_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__16542 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16542__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16542);
var G__16542__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16542__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16542__$1);
var G__16542__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.call(null,G__16542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16542__$2);
var G__16542__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16542__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16542__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16542__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16542__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16531__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16546){
var map__16547 = p__16546;
var map__16547__$1 = cljs.core.__destructure_map.call(null,map__16547);
var triage_data = map__16547__$1;
var phase = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16548 = phase;
var G__16548__$1 = (((G__16548 instanceof cljs.core.Keyword))?G__16548.fqn:null);
switch (G__16548__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16549_16558 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16550_16559 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16551_16560 = true;
var _STAR_print_fn_STAR__temp_val__16552_16561 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16551_16560);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16552_16561);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16544_SHARP_){
return cljs.core.dissoc.call(null,p1__16544_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16550_16559);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16549_16558);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16553_16562 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16554_16563 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16555_16564 = true;
var _STAR_print_fn_STAR__temp_val__16556_16565 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16555_16564);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16556_16565);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16545_SHARP_){
return cljs.core.dissoc.call(null,p1__16545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16554_16563);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16553_16562);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16548__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
