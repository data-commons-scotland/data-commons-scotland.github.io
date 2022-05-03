goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46448){
var map__46452 = p__46448;
var map__46452__$1 = cljs.core.__destructure_map(map__46452);
var m = map__46452__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46457_46686 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46458_46687 = null;
var count__46459_46688 = (0);
var i__46460_46689 = (0);
while(true){
if((i__46460_46689 < count__46459_46688)){
var f_46690 = chunk__46458_46687.cljs$core$IIndexed$_nth$arity$2(null,i__46460_46689);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46690], 0));


var G__46691 = seq__46457_46686;
var G__46692 = chunk__46458_46687;
var G__46693 = count__46459_46688;
var G__46694 = (i__46460_46689 + (1));
seq__46457_46686 = G__46691;
chunk__46458_46687 = G__46692;
count__46459_46688 = G__46693;
i__46460_46689 = G__46694;
continue;
} else {
var temp__5753__auto___46695 = cljs.core.seq(seq__46457_46686);
if(temp__5753__auto___46695){
var seq__46457_46696__$1 = temp__5753__auto___46695;
if(cljs.core.chunked_seq_QMARK_(seq__46457_46696__$1)){
var c__4679__auto___46697 = cljs.core.chunk_first(seq__46457_46696__$1);
var G__46698 = cljs.core.chunk_rest(seq__46457_46696__$1);
var G__46699 = c__4679__auto___46697;
var G__46700 = cljs.core.count(c__4679__auto___46697);
var G__46701 = (0);
seq__46457_46686 = G__46698;
chunk__46458_46687 = G__46699;
count__46459_46688 = G__46700;
i__46460_46689 = G__46701;
continue;
} else {
var f_46702 = cljs.core.first(seq__46457_46696__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46702], 0));


var G__46703 = cljs.core.next(seq__46457_46696__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46457_46686 = G__46703;
chunk__46458_46687 = G__46704;
count__46459_46688 = G__46705;
i__46460_46689 = G__46706;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46707 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46707], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46707)))?cljs.core.second(arglists_46707):arglists_46707)], 0));
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
var seq__46466_46709 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46467_46710 = null;
var count__46468_46711 = (0);
var i__46469_46712 = (0);
while(true){
if((i__46469_46712 < count__46468_46711)){
var vec__46478_46714 = chunk__46467_46710.cljs$core$IIndexed$_nth$arity$2(null,i__46469_46712);
var name_46715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46478_46714,(0),null);
var map__46481_46716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46478_46714,(1),null);
var map__46481_46717__$1 = cljs.core.__destructure_map(map__46481_46716);
var doc_46718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46481_46717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46481_46717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46715], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46719], 0));

if(cljs.core.truth_(doc_46718)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46718], 0));
} else {
}


var G__46722 = seq__46466_46709;
var G__46723 = chunk__46467_46710;
var G__46724 = count__46468_46711;
var G__46725 = (i__46469_46712 + (1));
seq__46466_46709 = G__46722;
chunk__46467_46710 = G__46723;
count__46468_46711 = G__46724;
i__46469_46712 = G__46725;
continue;
} else {
var temp__5753__auto___46726 = cljs.core.seq(seq__46466_46709);
if(temp__5753__auto___46726){
var seq__46466_46727__$1 = temp__5753__auto___46726;
if(cljs.core.chunked_seq_QMARK_(seq__46466_46727__$1)){
var c__4679__auto___46728 = cljs.core.chunk_first(seq__46466_46727__$1);
var G__46729 = cljs.core.chunk_rest(seq__46466_46727__$1);
var G__46730 = c__4679__auto___46728;
var G__46731 = cljs.core.count(c__4679__auto___46728);
var G__46732 = (0);
seq__46466_46709 = G__46729;
chunk__46467_46710 = G__46730;
count__46468_46711 = G__46731;
i__46469_46712 = G__46732;
continue;
} else {
var vec__46499_46733 = cljs.core.first(seq__46466_46727__$1);
var name_46734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46499_46733,(0),null);
var map__46502_46735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46499_46733,(1),null);
var map__46502_46736__$1 = cljs.core.__destructure_map(map__46502_46735);
var doc_46737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46502_46736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46502_46736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46734], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46738], 0));

if(cljs.core.truth_(doc_46737)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46737], 0));
} else {
}


var G__46740 = cljs.core.next(seq__46466_46727__$1);
var G__46741 = null;
var G__46742 = (0);
var G__46743 = (0);
seq__46466_46709 = G__46740;
chunk__46467_46710 = G__46741;
count__46468_46711 = G__46742;
i__46469_46712 = G__46743;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46506 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46507 = null;
var count__46508 = (0);
var i__46509 = (0);
while(true){
if((i__46509 < count__46508)){
var role = chunk__46507.cljs$core$IIndexed$_nth$arity$2(null,i__46509);
var temp__5753__auto___46745__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___46745__$1)){
var spec_46746 = temp__5753__auto___46745__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46746)], 0));
} else {
}


var G__46747 = seq__46506;
var G__46748 = chunk__46507;
var G__46749 = count__46508;
var G__46750 = (i__46509 + (1));
seq__46506 = G__46747;
chunk__46507 = G__46748;
count__46508 = G__46749;
i__46509 = G__46750;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__46506);
if(temp__5753__auto____$1){
var seq__46506__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46506__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46506__$1);
var G__46751 = cljs.core.chunk_rest(seq__46506__$1);
var G__46752 = c__4679__auto__;
var G__46753 = cljs.core.count(c__4679__auto__);
var G__46754 = (0);
seq__46506 = G__46751;
chunk__46507 = G__46752;
count__46508 = G__46753;
i__46509 = G__46754;
continue;
} else {
var role = cljs.core.first(seq__46506__$1);
var temp__5753__auto___46755__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___46755__$2)){
var spec_46757 = temp__5753__auto___46755__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46757)], 0));
} else {
}


var G__46758 = cljs.core.next(seq__46506__$1);
var G__46759 = null;
var G__46760 = (0);
var G__46761 = (0);
seq__46506 = G__46758;
chunk__46507 = G__46759;
count__46508 = G__46760;
i__46509 = G__46761;
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
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__46765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46766 = cljs.core.ex_cause(t);
via = G__46765;
t = G__46766;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__46601 = datafied_throwable;
var map__46601__$1 = cljs.core.__destructure_map(map__46601);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46601__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46601__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46602 = cljs.core.last(via);
var map__46602__$1 = cljs.core.__destructure_map(map__46602);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46602__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46602__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46602__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46603 = data;
var map__46603__$1 = cljs.core.__destructure_map(map__46603);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46603__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46603__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46603__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46604 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46604__$1 = cljs.core.__destructure_map(map__46604);
var top_data = map__46604__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46612 = phase;
var G__46612__$1 = (((G__46612 instanceof cljs.core.Keyword))?G__46612.fqn:null);
switch (G__46612__$1) {
case "read-source":
var map__46615 = data;
var map__46615__$1 = cljs.core.__destructure_map(map__46615);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46616__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46616,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46616);
var G__46616__$2 = (cljs.core.truth_((function (){var fexpr__46617 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46617.cljs$core$IFn$_invoke$arity$1 ? fexpr__46617.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46617.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46616__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46616__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46616__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46618 = top_data;
var G__46618__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46618,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46618);
var G__46618__$2 = (cljs.core.truth_((function (){var fexpr__46619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46619.cljs$core$IFn$_invoke$arity$1 ? fexpr__46619.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46619.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46618__$1);
var G__46618__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46618__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46618__$2);
var G__46618__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46618__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46618__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46618__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46618__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46623 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46623,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46623,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46623,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46623,(3),null);
var G__46626 = top_data;
var G__46626__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46626,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46626);
var G__46626__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46626__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46626__$1);
var G__46626__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46626__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46626__$2);
var G__46626__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46626__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46626__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46626__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46626__$4;
}

break;
case "execution":
var vec__46627 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46627,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46627,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46627,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46627,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46599_SHARP_){
var or__4253__auto__ = (p1__46599_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__46630 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46630.cljs$core$IFn$_invoke$arity$1 ? fexpr__46630.cljs$core$IFn$_invoke$arity$1(p1__46599_SHARP_) : fexpr__46630.call(null,p1__46599_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__46631 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46631__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46631);
var G__46631__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46631__$1);
var G__46631__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46631__$2);
var G__46631__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46631__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46631__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46612__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46635){
var map__46637 = p__46635;
var map__46637__$1 = cljs.core.__destructure_map(map__46637);
var triage_data = map__46637__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46640 = phase;
var G__46640__$1 = (((G__46640 instanceof cljs.core.Keyword))?G__46640.fqn:null);
switch (G__46640__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46641 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46643 = loc;
var G__46644 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46648_46801 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46649_46802 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46650_46803 = true;
var _STAR_print_fn_STAR__temp_val__46651_46804 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46650_46803);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46651_46804);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46633_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46633_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46649_46802);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46648_46801);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46641,G__46642,G__46643,G__46644) : format.call(null,G__46641,G__46642,G__46643,G__46644));

break;
case "macroexpansion":
var G__46653 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46654 = cause_type;
var G__46655 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46656 = loc;
var G__46657 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46653,G__46654,G__46655,G__46656,G__46657) : format.call(null,G__46653,G__46654,G__46655,G__46656,G__46657));

break;
case "compile-syntax-check":
var G__46658 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46659 = cause_type;
var G__46660 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46661 = loc;
var G__46662 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46658,G__46659,G__46660,G__46661,G__46662) : format.call(null,G__46658,G__46659,G__46660,G__46661,G__46662));

break;
case "compilation":
var G__46663 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46664 = cause_type;
var G__46665 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46666 = loc;
var G__46667 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46663,G__46664,G__46665,G__46666,G__46667) : format.call(null,G__46663,G__46664,G__46665,G__46666,G__46667));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46670 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46671 = symbol;
var G__46672 = loc;
var G__46673 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46674_46805 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46675_46806 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46678_46807 = true;
var _STAR_print_fn_STAR__temp_val__46679_46808 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46678_46807);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46679_46808);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46634_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46634_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46675_46806);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46674_46805);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46670,G__46671,G__46672,G__46673) : format.call(null,G__46670,G__46671,G__46672,G__46673));
} else {
var G__46680 = "Execution error%s at %s(%s).\n%s\n";
var G__46681 = cause_type;
var G__46682 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46683 = loc;
var G__46684 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46680,G__46681,G__46682,G__46683,G__46684) : format.call(null,G__46680,G__46681,G__46682,G__46683,G__46684));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46640__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
