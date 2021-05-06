goog.provide('reitit.coercion.spec');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec42158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec42158 = (function (meta42159){
this.meta42159 = meta42159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec42158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42160,meta42159__$1){
var self__ = this;
var _42160__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec42158(meta42159__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec42158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42160){
var self__ = this;
var _42160__$1 = this;
return self__.meta42159;
}));

(reitit.coercion.spec.t_reitit$coercion$spec42158.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec42158.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec42158.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec42158.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec42158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42159","meta42159",958564355,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec42158.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec42158.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec42158");

(reitit.coercion.spec.t_reitit$coercion$spec42158.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"reitit.coercion.spec/t_reitit$coercion$spec42158");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec42158.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec42158 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec42158(meta42159){
return (new reitit.coercion.spec.t_reitit$coercion$spec42158(meta42159));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec42158(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_42196 = (function (this$,name){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4464__auto__.call(null,this$,name));
} else {
var m__4461__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4461__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_42196(this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__4160__auto__ = _QMARK_name;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

goog.object.set(reitit.coercion.spec.into_spec,"_",(function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

goog.object.set(reitit.coercion.spec.into_spec,"null",(function (this$,_){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4654__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42164 = cljs.core.get_global_hierarchy;
return (fexpr__42164.cljs$core$IFn$_invoke$arity$0 ? fexpr__42164.cljs$core$IFn$_invoke$arity$0() : fexpr__42164.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__42167){
var map__42168 = p__42167;
var map__42168__$1 = cljs.core.__destructure_map(map__42168);
var opts = map__42168__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42168__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42168__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec42169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec42169 = (function (p__42167,map__42168,opts,transformers,coerce_response_QMARK_,meta42170){
this.p__42167 = p__42167;
this.map__42168 = map__42168;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta42170 = meta42170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42171,meta42170__$1){
var self__ = this;
var _42171__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec42169(self__.p__42167,self__.map__42168,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta42170__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42171){
var self__ = this;
var _42171__$1 = this;
return self__.meta42170;
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__42172){
var self__ = this;
var map__42173 = p__42172;
var map__42173__$1 = cljs.core.__destructure_map(map__42173);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42173__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42173__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__42174 = specification;
var G__42174__$1 = (((G__42174 instanceof cljs.core.Keyword))?G__42174.fqn:null);
switch (G__42174__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__4564__auto__ = (function reitit$coercion$spec$create_$_iter__42175(s__42176){
return (new cljs.core.LazySeq(null,(function (){
var s__42176__$1 = s__42176;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42176__$1);
if(temp__5735__auto__){
var s__42176__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42176__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__42176__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__42178 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__42177 = (0);
while(true){
if((i__42177 < size__4563__auto__)){
var vec__42179 = cljs.core._nth(c__4562__auto__,i__42177);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42179,(1),null);
cljs.core.chunk_append(b__42178,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__42198 = (i__42177 + (1));
i__42177 = G__42198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42178),reitit$coercion$spec$create_$_iter__42175(cljs.core.chunk_rest(s__42176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42178),null);
}
} else {
var vec__42182 = cljs.core.first(s__42176__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42182,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$spec$create_$_iter__42175(cljs.core.rest(s__42176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4564__auto__ = (function reitit$coercion$spec$create_$_iter__42185(s__42186){
return (new cljs.core.LazySeq(null,(function (){
var s__42186__$1 = s__42186;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42186__$1);
if(temp__5735__auto__){
var s__42186__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42186__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__42186__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__42188 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__42187 = (0);
while(true){
if((i__42187 < size__4563__auto__)){
var vec__42189 = cljs.core._nth(c__4562__auto__,i__42187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42189,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42189,(1),null);
cljs.core.chunk_append(b__42188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__42187,$,$__$1,vec__42189,k,response,c__4562__auto__,size__4563__auto__,b__42188,s__42186__$2,temp__5735__auto__,G__42174,G__42174__$1,this$__$1,map__42173,map__42173__$1,parameters,responses,map__42168,map__42168__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__42165_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__42165_SHARP_,null);
});})(i__42187,$,$__$1,vec__42189,k,response,c__4562__auto__,size__4563__auto__,b__42188,s__42186__$2,temp__5735__auto__,G__42174,G__42174__$1,this$__$1,map__42173,map__42173__$1,parameters,responses,map__42168,map__42168__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__42199 = (i__42187 + (1));
i__42187 = G__42199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42188),reitit$coercion$spec$create_$_iter__42185(cljs.core.chunk_rest(s__42186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42188),null);
}
} else {
var vec__42192 = cljs.core.first(s__42186__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42192,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42192,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__42192,k,response,s__42186__$2,temp__5735__auto__,G__42174,G__42174__$1,this$__$1,map__42173,map__42173__$1,parameters,responses,map__42168,map__42168__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__42165_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__42165_SHARP_,null);
});})($,$__$1,vec__42192,k,response,s__42186__$2,temp__5735__auto__,G__42174,G__42174__$1,this$__$1,map__42173,map__42173__$1,parameters,responses,map__42168,map__42168__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__42185(cljs.core.rest(s__42186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(model,name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42166_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__42166_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,spec,null);
var map__42195 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__42195__$1 = cljs.core.__destructure_map(map__42195);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42195__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42195__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5733__auto__ = (function (){var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var transformer = temp__5733__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$1,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform(spec__$1,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__42167","p__42167",-1352091874,null),new cljs.core.Symbol(null,"map__42168","map__42168",1269519817,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta42170","meta42170",1442395139,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec42169.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec42169.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec42169");

(reitit.coercion.spec.t_reitit$coercion$spec42169.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"reitit.coercion.spec/t_reitit$coercion$spec42169");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec42169.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec42169 = (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec42169(p__42167__$1,map__42168__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta42170){
return (new reitit.coercion.spec.t_reitit$coercion$spec42169(p__42167__$1,map__42168__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta42170));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec42169(p__42167,map__42168__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

//# sourceMappingURL=reitit.coercion.spec.js.map
