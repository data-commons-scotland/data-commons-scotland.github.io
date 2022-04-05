// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_22080 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._header[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,value);
} else {
var m__4519__auto__ = (devtools.format._header["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_22080.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_22081 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._has_body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,value);
} else {
var m__4519__auto__ = (devtools.format._has_body["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_22081.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_22082 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,value);
} else {
var m__4519__auto__ = (devtools.format._body["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_22082.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22083 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22083["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22084 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22084["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22085 = temp__5751__auto____$2;
return (o22085["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22086 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22086["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22087 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22087["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22088 = temp__5751__auto____$2;
return (o22088["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22089 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22089["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22090 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22090["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22091 = temp__5751__auto____$2;
return (o22091["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22092 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22092["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22093 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22093["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22094 = temp__5751__auto____$2;
return (o22094["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22095 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22095["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22096 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22096["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22097 = temp__5751__auto____$2;
return (o22097["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22098 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22098["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22099 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22099["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22100 = temp__5751__auto____$2;
return (o22100["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o22101 = temp__5751__auto__;
var temp__5751__auto____$1 = (o22101["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o22102 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o22102["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o22103 = temp__5751__auto____$2;
return (o22103["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22105 = arguments.length;
var i__4830__auto___22106 = (0);
while(true){
if((i__4830__auto___22106 < len__4829__auto___22105)){
args__4835__auto__.push((arguments[i__4830__auto___22106]));

var G__22107 = (i__4830__auto___22106 + (1));
i__4830__auto___22106 = G__22107;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq22104){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22104));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22109 = arguments.length;
var i__4830__auto___22110 = (0);
while(true){
if((i__4830__auto___22110 < len__4829__auto___22109)){
args__4835__auto__.push((arguments[i__4830__auto___22110]));

var G__22111 = (i__4830__auto___22110 + (1));
i__4830__auto___22110 = G__22111;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq22108){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22108));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22113 = arguments.length;
var i__4830__auto___22114 = (0);
while(true){
if((i__4830__auto___22114 < len__4829__auto___22113)){
args__4835__auto__.push((arguments[i__4830__auto___22114]));

var G__22115 = (i__4830__auto___22114 + (1));
i__4830__auto___22114 = G__22115;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq22112){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22112));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22117 = arguments.length;
var i__4830__auto___22118 = (0);
while(true){
if((i__4830__auto___22118 < len__4829__auto___22117)){
args__4835__auto__.push((arguments[i__4830__auto___22118]));

var G__22119 = (i__4830__auto___22118 + (1));
i__4830__auto___22118 = G__22119;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22116){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22116));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22121 = arguments.length;
var i__4830__auto___22122 = (0);
while(true){
if((i__4830__auto___22122 < len__4829__auto___22121)){
args__4835__auto__.push((arguments[i__4830__auto___22122]));

var G__22123 = (i__4830__auto___22122 + (1));
i__4830__auto___22122 = G__22123;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq22120){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22120));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22125 = arguments.length;
var i__4830__auto___22126 = (0);
while(true){
if((i__4830__auto___22126 < len__4829__auto___22125)){
args__4835__auto__.push((arguments[i__4830__auto___22126]));

var G__22127 = (i__4830__auto___22126 + (1));
i__4830__auto___22126 = G__22127;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq22124){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22124));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22129 = arguments.length;
var i__4830__auto___22130 = (0);
while(true){
if((i__4830__auto___22130 < len__4829__auto___22129)){
args__4835__auto__.push((arguments[i__4830__auto___22130]));

var G__22131 = (i__4830__auto___22130 + (1));
i__4830__auto___22130 = G__22131;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq22128){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22128));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22139 = arguments.length;
var i__4830__auto___22140 = (0);
while(true){
if((i__4830__auto___22140 < len__4829__auto___22139)){
args__4835__auto__.push((arguments[i__4830__auto___22140]));

var G__22141 = (i__4830__auto___22140 + (1));
i__4830__auto___22140 = G__22141;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22135){
var vec__22136 = p__22135;
var state_override = cljs.core.nth.call(null,vec__22136,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__22132_SHARP_){
return cljs.core.merge.call(null,p1__22132_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq22133){
var G__22134 = cljs.core.first.call(null,seq22133);
var seq22133__$1 = cljs.core.next.call(null,seq22133);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22134,seq22133__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22143 = arguments.length;
var i__4830__auto___22144 = (0);
while(true){
if((i__4830__auto___22144 < len__4829__auto___22143)){
args__4835__auto__.push((arguments[i__4830__auto___22144]));

var G__22145 = (i__4830__auto___22144 + (1));
i__4830__auto___22144 = G__22145;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq22142){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22142));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22148 = arguments.length;
var i__4830__auto___22149 = (0);
while(true){
if((i__4830__auto___22149 < len__4829__auto___22148)){
args__4835__auto__.push((arguments[i__4830__auto___22149]));

var G__22150 = (i__4830__auto___22149 + (1));
i__4830__auto___22149 = G__22150;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22146){
var G__22147 = cljs.core.first.call(null,seq22146);
var seq22146__$1 = cljs.core.next.call(null,seq22146);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22147,seq22146__$1);
}));


//# sourceMappingURL=format.js.map
