goog.provide('spec_tools.visitor');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol(spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29163 = cljs.core.get_global_hierarchy;
return (fexpr__29163.cljs$core$IFn$_invoke$arity$0 ? fexpr__29163.cljs$core$IFn$_invoke$arity$0() : fexpr__29163.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__29165 = arguments.length;
switch (G__29165) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__29166){
var map__29167 = p__29166;
var map__29167__$1 = (((((!((map__29167 == null))))?(((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29167):map__29167);
var options = map__29167__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29167__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1);
} else {
return spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options);
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
var G__29169 = new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
var G__29170 = spec;
var G__29171 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__29172 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29169,G__29170,G__29171,G__29172) : accept.call(null,G__29169,G__29170,G__29171,G__29172));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__29174 = new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null);
var G__29175 = spec;
var G__29176 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29173_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29173_SHARP_,accept,options);
}),keys);
var G__29177 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29174,G__29175,G__29176,G__29177) : accept.call(null,G__29174,G__29175,G__29176,G__29177));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__29179 = spec_tools.impl.extract_form(spec);
var seq__29180 = cljs.core.seq(vec__29179);
var first__29181 = cljs.core.first(seq__29180);
var seq__29180__$1 = cljs.core.next(seq__29180);
var _ = first__29181;
var map__29182 = seq__29180__$1;
var map__29182__$1 = (((((!((map__29182 == null))))?(((((map__29182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29182):map__29182);
var inner_spec_map = map__29182__$1;
var G__29184 = new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null);
var G__29185 = spec;
var G__29186 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29178_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29178_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__29187 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29184,G__29185,G__29186,G__29187) : accept.call(null,G__29184,G__29185,G__29186,G__29187));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__29189 = spec_tools.impl.extract_form(spec);
var seq__29190 = cljs.core.seq(vec__29189);
var first__29191 = cljs.core.first(seq__29190);
var seq__29190__$1 = cljs.core.next(seq__29190);
var _ = first__29191;
var inner_specs = seq__29190__$1;
var G__29192 = new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null);
var G__29193 = spec;
var G__29194 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29188_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29188_SHARP_,accept,options);
}),inner_specs);
var G__29195 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29192,G__29193,G__29194,G__29195) : accept.call(null,G__29192,G__29193,G__29194,G__29195));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__29197 = spec_tools.impl.extract_form(spec);
var seq__29198 = cljs.core.seq(vec__29197);
var first__29199 = cljs.core.first(seq__29198);
var seq__29198__$1 = cljs.core.next(seq__29198);
var _ = first__29199;
var inner_specs = seq__29198__$1;
var G__29200 = new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null);
var G__29201 = spec;
var G__29202 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29196_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29196_SHARP_,accept,options);
}),inner_specs);
var G__29203 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29200,G__29201,G__29202,G__29203) : accept.call(null,G__29200,G__29201,G__29202,G__29203));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__29204 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29204,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29204,(1),null);
var G__29207 = new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null);
var G__29208 = spec;
var G__29209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29210 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29207,G__29208,G__29209,G__29210) : accept.call(null,G__29207,G__29208,G__29209,G__29210));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__29212 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29212,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29212,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29212,(2),null);
var G__29215 = new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null);
var G__29216 = spec;
var G__29217 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29211_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29211_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__29218 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29215,G__29216,G__29217,G__29218) : accept.call(null,G__29215,G__29216,G__29217,G__29218));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__29219 = spec_tools.parse.parse_spec.cljs$core$IFn$_invoke$arity$1(form);
var map__29219__$1 = (((((!((map__29219 == null))))?(((((map__29219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29219):map__29219);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29219__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__29221 = type;
var G__29221__$1 = (((G__29221 instanceof cljs.core.Keyword))?G__29221.fqn:null);
switch (G__29221__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29221__$1)].join('')));

}
})();
var G__29222 = dispatch;
var G__29223 = spec;
var G__29224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__29225 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29222,G__29223,G__29224,G__29225) : accept.call(null,G__29222,G__29223,G__29224,G__29225));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__29227 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29227,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29227,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29227,(2),null);
var G__29230 = new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);
var G__29231 = spec;
var G__29232 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29226_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29226_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__29233 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29230,G__29231,G__29232,G__29233) : accept.call(null,G__29230,G__29231,G__29232,G__29233));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__29234 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(1),null);
var G__29237 = new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null);
var G__29238 = spec;
var G__29239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29240 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29237,G__29238,G__29239,G__29240) : accept.call(null,G__29237,G__29238,G__29239,G__29240));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__29241 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241,(1),null);
var G__29244 = new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null);
var G__29245 = spec;
var G__29246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29247 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29244,G__29245,G__29246,G__29247) : accept.call(null,G__29244,G__29245,G__29246,G__29247));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__29248 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29248,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29248,(1),null);
var G__29251 = new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null);
var G__29252 = spec;
var G__29253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29254 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29251,G__29252,G__29253,G__29254) : accept.call(null,G__29251,G__29252,G__29253,G__29254));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__29256 = spec_tools.impl.extract_form(spec);
var seq__29257 = cljs.core.seq(vec__29256);
var first__29258 = cljs.core.first(seq__29257);
var seq__29257__$1 = cljs.core.next(seq__29257);
var _ = first__29258;
var map__29259 = seq__29257__$1;
var map__29259__$1 = (((((!((map__29259 == null))))?(((((map__29259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29259):map__29259);
var inner_spec_map = map__29259__$1;
var G__29261 = new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null);
var G__29262 = spec;
var G__29263 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29255_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29255_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__29264 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29261,G__29262,G__29263,G__29264) : accept.call(null,G__29261,G__29262,G__29263,G__29264));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__29266 = spec_tools.impl.extract_form(spec);
var seq__29267 = cljs.core.seq(vec__29266);
var first__29268 = cljs.core.first(seq__29267);
var seq__29267__$1 = cljs.core.next(seq__29267);
var _ = first__29268;
var map__29269 = seq__29267__$1;
var map__29269__$1 = (((((!((map__29269 == null))))?(((((map__29269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29269):map__29269);
var inner_spec_map = map__29269__$1;
var G__29271 = new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null);
var G__29272 = spec;
var G__29273 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29265_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29265_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__29274 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29271,G__29272,G__29273,G__29274) : accept.call(null,G__29271,G__29272,G__29273,G__29274));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__29275 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29275,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29275,(1),null);
var G__29278 = new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null);
var G__29279 = spec;
var G__29280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29281 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29278,G__29279,G__29280,G__29281) : accept.call(null,G__29278,G__29279,G__29280,G__29281));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__29283 = spec_tools.impl.extract_form(spec);
var seq__29284 = cljs.core.seq(vec__29283);
var first__29285 = cljs.core.first(seq__29284);
var seq__29284__$1 = cljs.core.next(seq__29284);
var _ = first__29285;
var inner_specs = seq__29284__$1;
var G__29286 = new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null);
var G__29287 = spec;
var G__29288 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29282_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29282_SHARP_,accept,options);
}),inner_specs);
var G__29289 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29286,G__29287,G__29288,G__29289) : accept.call(null,G__29286,G__29287,G__29288,G__29289));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__29291 = new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null);
var G__29292 = spec;
var G__29293 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29290_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__29290_SHARP_,accept,options);
}),keys);
var G__29294 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29291,G__29292,G__29293,G__29294) : accept.call(null,G__29291,G__29292,G__29293,G__29294));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__29295 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29295,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29295,(1),null);
var G__29298 = new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null);
var G__29299 = spec;
var G__29300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29301 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29298,G__29299,G__29300,G__29301) : accept.call(null,G__29298,G__29299,G__29300,G__29301));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__29302 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29302,(0),null);
var map__29305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29302,(1),null);
var map__29305__$1 = (((((!((map__29305 == null))))?(((((map__29305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29305):map__29305);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29305__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var G__29307 = new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200);
var G__29308 = spec;
var G__29309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__29310 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29307,G__29308,G__29309,G__29310) : accept.call(null,G__29307,G__29308,G__29309,G__29310));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
var G__29311 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__29312 = spec;
var G__29313 = null;
var G__29314 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__29311,G__29312,G__29313,G__29314) : accept.call(null,G__29311,G__29312,G__29313,G__29314));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5733__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
});

//# sourceMappingURL=spec_tools.visitor.js.map
