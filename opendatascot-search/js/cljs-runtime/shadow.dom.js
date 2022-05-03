goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45074 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45074(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45075 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45075(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__43658 = coll;
var G__43659 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__43658,G__43659) : shadow.dom.lazy_native_coll_seq.call(null,G__43658,G__43659));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__43799 = arguments.length;
switch (G__43799) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__43822 = arguments.length;
switch (G__43822) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__43828 = arguments.length;
switch (G__43828) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__43830 = arguments.length;
switch (G__43830) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__43876 = arguments.length;
switch (G__43876) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__43920 = arguments.length;
switch (G__43920) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e43932){if((e43932 instanceof Object)){
var e = e43932;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43932;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__43933 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43934 = null;
var count__43935 = (0);
var i__43936 = (0);
while(true){
if((i__43936 < count__43935)){
var el = chunk__43934.cljs$core$IIndexed$_nth$arity$2(null,i__43936);
var handler_45093__$1 = ((function (seq__43933,chunk__43934,count__43935,i__43936,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43933,chunk__43934,count__43935,i__43936,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45093__$1);


var G__45096 = seq__43933;
var G__45097 = chunk__43934;
var G__45098 = count__43935;
var G__45099 = (i__43936 + (1));
seq__43933 = G__45096;
chunk__43934 = G__45097;
count__43935 = G__45098;
i__43936 = G__45099;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43933);
if(temp__5753__auto__){
var seq__43933__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43933__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43933__$1);
var G__45102 = cljs.core.chunk_rest(seq__43933__$1);
var G__45103 = c__4679__auto__;
var G__45104 = cljs.core.count(c__4679__auto__);
var G__45105 = (0);
seq__43933 = G__45102;
chunk__43934 = G__45103;
count__43935 = G__45104;
i__43936 = G__45105;
continue;
} else {
var el = cljs.core.first(seq__43933__$1);
var handler_45106__$1 = ((function (seq__43933,chunk__43934,count__43935,i__43936,el,seq__43933__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43933,chunk__43934,count__43935,i__43936,el,seq__43933__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45106__$1);


var G__45107 = cljs.core.next(seq__43933__$1);
var G__45108 = null;
var G__45109 = (0);
var G__45110 = (0);
seq__43933 = G__45107;
chunk__43934 = G__45108;
count__43935 = G__45109;
i__43936 = G__45110;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__43944 = arguments.length;
switch (G__43944) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__43950 = cljs.core.seq(events);
var chunk__43951 = null;
var count__43952 = (0);
var i__43953 = (0);
while(true){
if((i__43953 < count__43952)){
var vec__43965 = chunk__43951.cljs$core$IIndexed$_nth$arity$2(null,i__43953);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43965,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45122 = seq__43950;
var G__45123 = chunk__43951;
var G__45124 = count__43952;
var G__45125 = (i__43953 + (1));
seq__43950 = G__45122;
chunk__43951 = G__45123;
count__43952 = G__45124;
i__43953 = G__45125;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43950);
if(temp__5753__auto__){
var seq__43950__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43950__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43950__$1);
var G__45127 = cljs.core.chunk_rest(seq__43950__$1);
var G__45128 = c__4679__auto__;
var G__45129 = cljs.core.count(c__4679__auto__);
var G__45130 = (0);
seq__43950 = G__45127;
chunk__43951 = G__45128;
count__43952 = G__45129;
i__43953 = G__45130;
continue;
} else {
var vec__43972 = cljs.core.first(seq__43950__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43972,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45132 = cljs.core.next(seq__43950__$1);
var G__45133 = null;
var G__45134 = (0);
var G__45135 = (0);
seq__43950 = G__45132;
chunk__43951 = G__45133;
count__43952 = G__45134;
i__43953 = G__45135;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__43977 = cljs.core.seq(styles);
var chunk__43978 = null;
var count__43979 = (0);
var i__43980 = (0);
while(true){
if((i__43980 < count__43979)){
var vec__43990 = chunk__43978.cljs$core$IIndexed$_nth$arity$2(null,i__43980);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43990,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45137 = seq__43977;
var G__45138 = chunk__43978;
var G__45139 = count__43979;
var G__45140 = (i__43980 + (1));
seq__43977 = G__45137;
chunk__43978 = G__45138;
count__43979 = G__45139;
i__43980 = G__45140;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43977);
if(temp__5753__auto__){
var seq__43977__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43977__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43977__$1);
var G__45141 = cljs.core.chunk_rest(seq__43977__$1);
var G__45142 = c__4679__auto__;
var G__45143 = cljs.core.count(c__4679__auto__);
var G__45144 = (0);
seq__43977 = G__45141;
chunk__43978 = G__45142;
count__43979 = G__45143;
i__43980 = G__45144;
continue;
} else {
var vec__43993 = cljs.core.first(seq__43977__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43993,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45145 = cljs.core.next(seq__43977__$1);
var G__45146 = null;
var G__45147 = (0);
var G__45148 = (0);
seq__43977 = G__45145;
chunk__43978 = G__45146;
count__43979 = G__45147;
i__43980 = G__45148;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44002_45149 = key;
var G__44002_45150__$1 = (((G__44002_45149 instanceof cljs.core.Keyword))?G__44002_45149.fqn:null);
switch (G__44002_45150__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45162 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_45162,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_45162,"aria-");
}
})())){
el.setAttribute(ks_45162,value);
} else {
(el[ks_45162] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44039){
var map__44044 = p__44039;
var map__44044__$1 = cljs.core.__destructure_map(map__44044);
var props = map__44044__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44044__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44046 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44050 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44050,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44050;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44053 = arguments.length;
switch (G__44053) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44099){
var vec__44100 = p__44099;
var seq__44101 = cljs.core.seq(vec__44100);
var first__44102 = cljs.core.first(seq__44101);
var seq__44101__$1 = cljs.core.next(seq__44101);
var nn = first__44102;
var first__44102__$1 = cljs.core.first(seq__44101__$1);
var seq__44101__$2 = cljs.core.next(seq__44101__$1);
var np = first__44102__$1;
var nc = seq__44101__$2;
var node = vec__44100;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44157 = nn;
var G__44158 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44157,G__44158) : create_fn.call(null,G__44157,G__44158));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44176 = nn;
var G__44177 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44176,G__44177) : create_fn.call(null,G__44176,G__44177));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44178 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44178,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44178,(1),null);
var seq__44181_45182 = cljs.core.seq(node_children);
var chunk__44182_45183 = null;
var count__44183_45184 = (0);
var i__44184_45185 = (0);
while(true){
if((i__44184_45185 < count__44183_45184)){
var child_struct_45186 = chunk__44182_45183.cljs$core$IIndexed$_nth$arity$2(null,i__44184_45185);
var children_45187 = shadow.dom.dom_node(child_struct_45186);
if(cljs.core.seq_QMARK_(children_45187)){
var seq__44213_45188 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45187));
var chunk__44215_45189 = null;
var count__44216_45190 = (0);
var i__44217_45191 = (0);
while(true){
if((i__44217_45191 < count__44216_45190)){
var child_45192 = chunk__44215_45189.cljs$core$IIndexed$_nth$arity$2(null,i__44217_45191);
if(cljs.core.truth_(child_45192)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45192);


var G__45193 = seq__44213_45188;
var G__45194 = chunk__44215_45189;
var G__45195 = count__44216_45190;
var G__45196 = (i__44217_45191 + (1));
seq__44213_45188 = G__45193;
chunk__44215_45189 = G__45194;
count__44216_45190 = G__45195;
i__44217_45191 = G__45196;
continue;
} else {
var G__45201 = seq__44213_45188;
var G__45202 = chunk__44215_45189;
var G__45203 = count__44216_45190;
var G__45204 = (i__44217_45191 + (1));
seq__44213_45188 = G__45201;
chunk__44215_45189 = G__45202;
count__44216_45190 = G__45203;
i__44217_45191 = G__45204;
continue;
}
} else {
var temp__5753__auto___45205 = cljs.core.seq(seq__44213_45188);
if(temp__5753__auto___45205){
var seq__44213_45207__$1 = temp__5753__auto___45205;
if(cljs.core.chunked_seq_QMARK_(seq__44213_45207__$1)){
var c__4679__auto___45208 = cljs.core.chunk_first(seq__44213_45207__$1);
var G__45209 = cljs.core.chunk_rest(seq__44213_45207__$1);
var G__45210 = c__4679__auto___45208;
var G__45211 = cljs.core.count(c__4679__auto___45208);
var G__45212 = (0);
seq__44213_45188 = G__45209;
chunk__44215_45189 = G__45210;
count__44216_45190 = G__45211;
i__44217_45191 = G__45212;
continue;
} else {
var child_45215 = cljs.core.first(seq__44213_45207__$1);
if(cljs.core.truth_(child_45215)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45215);


var G__45217 = cljs.core.next(seq__44213_45207__$1);
var G__45218 = null;
var G__45219 = (0);
var G__45220 = (0);
seq__44213_45188 = G__45217;
chunk__44215_45189 = G__45218;
count__44216_45190 = G__45219;
i__44217_45191 = G__45220;
continue;
} else {
var G__45221 = cljs.core.next(seq__44213_45207__$1);
var G__45222 = null;
var G__45223 = (0);
var G__45224 = (0);
seq__44213_45188 = G__45221;
chunk__44215_45189 = G__45222;
count__44216_45190 = G__45223;
i__44217_45191 = G__45224;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45187);
}


var G__45225 = seq__44181_45182;
var G__45226 = chunk__44182_45183;
var G__45227 = count__44183_45184;
var G__45228 = (i__44184_45185 + (1));
seq__44181_45182 = G__45225;
chunk__44182_45183 = G__45226;
count__44183_45184 = G__45227;
i__44184_45185 = G__45228;
continue;
} else {
var temp__5753__auto___45230 = cljs.core.seq(seq__44181_45182);
if(temp__5753__auto___45230){
var seq__44181_45232__$1 = temp__5753__auto___45230;
if(cljs.core.chunked_seq_QMARK_(seq__44181_45232__$1)){
var c__4679__auto___45234 = cljs.core.chunk_first(seq__44181_45232__$1);
var G__45235 = cljs.core.chunk_rest(seq__44181_45232__$1);
var G__45236 = c__4679__auto___45234;
var G__45237 = cljs.core.count(c__4679__auto___45234);
var G__45238 = (0);
seq__44181_45182 = G__45235;
chunk__44182_45183 = G__45236;
count__44183_45184 = G__45237;
i__44184_45185 = G__45238;
continue;
} else {
var child_struct_45240 = cljs.core.first(seq__44181_45232__$1);
var children_45241 = shadow.dom.dom_node(child_struct_45240);
if(cljs.core.seq_QMARK_(children_45241)){
var seq__44230_45245 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45241));
var chunk__44232_45246 = null;
var count__44233_45247 = (0);
var i__44234_45248 = (0);
while(true){
if((i__44234_45248 < count__44233_45247)){
var child_45253 = chunk__44232_45246.cljs$core$IIndexed$_nth$arity$2(null,i__44234_45248);
if(cljs.core.truth_(child_45253)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45253);


var G__45254 = seq__44230_45245;
var G__45255 = chunk__44232_45246;
var G__45256 = count__44233_45247;
var G__45257 = (i__44234_45248 + (1));
seq__44230_45245 = G__45254;
chunk__44232_45246 = G__45255;
count__44233_45247 = G__45256;
i__44234_45248 = G__45257;
continue;
} else {
var G__45258 = seq__44230_45245;
var G__45259 = chunk__44232_45246;
var G__45260 = count__44233_45247;
var G__45261 = (i__44234_45248 + (1));
seq__44230_45245 = G__45258;
chunk__44232_45246 = G__45259;
count__44233_45247 = G__45260;
i__44234_45248 = G__45261;
continue;
}
} else {
var temp__5753__auto___45262__$1 = cljs.core.seq(seq__44230_45245);
if(temp__5753__auto___45262__$1){
var seq__44230_45263__$1 = temp__5753__auto___45262__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44230_45263__$1)){
var c__4679__auto___45264 = cljs.core.chunk_first(seq__44230_45263__$1);
var G__45265 = cljs.core.chunk_rest(seq__44230_45263__$1);
var G__45266 = c__4679__auto___45264;
var G__45267 = cljs.core.count(c__4679__auto___45264);
var G__45268 = (0);
seq__44230_45245 = G__45265;
chunk__44232_45246 = G__45266;
count__44233_45247 = G__45267;
i__44234_45248 = G__45268;
continue;
} else {
var child_45273 = cljs.core.first(seq__44230_45263__$1);
if(cljs.core.truth_(child_45273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45273);


var G__45274 = cljs.core.next(seq__44230_45263__$1);
var G__45275 = null;
var G__45276 = (0);
var G__45277 = (0);
seq__44230_45245 = G__45274;
chunk__44232_45246 = G__45275;
count__44233_45247 = G__45276;
i__44234_45248 = G__45277;
continue;
} else {
var G__45278 = cljs.core.next(seq__44230_45263__$1);
var G__45279 = null;
var G__45280 = (0);
var G__45281 = (0);
seq__44230_45245 = G__45278;
chunk__44232_45246 = G__45279;
count__44233_45247 = G__45280;
i__44234_45248 = G__45281;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45241);
}


var G__45282 = cljs.core.next(seq__44181_45232__$1);
var G__45283 = null;
var G__45284 = (0);
var G__45285 = (0);
seq__44181_45182 = G__45282;
chunk__44182_45183 = G__45283;
count__44183_45184 = G__45284;
i__44184_45185 = G__45285;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44303 = cljs.core.seq(node);
var chunk__44304 = null;
var count__44305 = (0);
var i__44306 = (0);
while(true){
if((i__44306 < count__44305)){
var n = chunk__44304.cljs$core$IIndexed$_nth$arity$2(null,i__44306);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45296 = seq__44303;
var G__45297 = chunk__44304;
var G__45298 = count__44305;
var G__45299 = (i__44306 + (1));
seq__44303 = G__45296;
chunk__44304 = G__45297;
count__44305 = G__45298;
i__44306 = G__45299;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44303);
if(temp__5753__auto__){
var seq__44303__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44303__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44303__$1);
var G__45301 = cljs.core.chunk_rest(seq__44303__$1);
var G__45302 = c__4679__auto__;
var G__45303 = cljs.core.count(c__4679__auto__);
var G__45304 = (0);
seq__44303 = G__45301;
chunk__44304 = G__45302;
count__44305 = G__45303;
i__44306 = G__45304;
continue;
} else {
var n = cljs.core.first(seq__44303__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45305 = cljs.core.next(seq__44303__$1);
var G__45306 = null;
var G__45307 = (0);
var G__45308 = (0);
seq__44303 = G__45305;
chunk__44304 = G__45306;
count__44305 = G__45307;
i__44306 = G__45308;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44324 = arguments.length;
switch (G__44324) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44335 = arguments.length;
switch (G__44335) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44354 = arguments.length;
switch (G__44354) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45337 = arguments.length;
var i__4865__auto___45338 = (0);
while(true){
if((i__4865__auto___45338 < len__4864__auto___45337)){
args__4870__auto__.push((arguments[i__4865__auto___45338]));

var G__45341 = (i__4865__auto___45338 + (1));
i__4865__auto___45338 = G__45341;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44367_45342 = cljs.core.seq(nodes);
var chunk__44368_45343 = null;
var count__44369_45344 = (0);
var i__44370_45345 = (0);
while(true){
if((i__44370_45345 < count__44369_45344)){
var node_45347 = chunk__44368_45343.cljs$core$IIndexed$_nth$arity$2(null,i__44370_45345);
fragment.appendChild(shadow.dom._to_dom(node_45347));


var G__45405 = seq__44367_45342;
var G__45406 = chunk__44368_45343;
var G__45407 = count__44369_45344;
var G__45408 = (i__44370_45345 + (1));
seq__44367_45342 = G__45405;
chunk__44368_45343 = G__45406;
count__44369_45344 = G__45407;
i__44370_45345 = G__45408;
continue;
} else {
var temp__5753__auto___45449 = cljs.core.seq(seq__44367_45342);
if(temp__5753__auto___45449){
var seq__44367_45450__$1 = temp__5753__auto___45449;
if(cljs.core.chunked_seq_QMARK_(seq__44367_45450__$1)){
var c__4679__auto___45451 = cljs.core.chunk_first(seq__44367_45450__$1);
var G__45452 = cljs.core.chunk_rest(seq__44367_45450__$1);
var G__45453 = c__4679__auto___45451;
var G__45454 = cljs.core.count(c__4679__auto___45451);
var G__45455 = (0);
seq__44367_45342 = G__45452;
chunk__44368_45343 = G__45453;
count__44369_45344 = G__45454;
i__44370_45345 = G__45455;
continue;
} else {
var node_45461 = cljs.core.first(seq__44367_45450__$1);
fragment.appendChild(shadow.dom._to_dom(node_45461));


var G__45463 = cljs.core.next(seq__44367_45450__$1);
var G__45464 = null;
var G__45465 = (0);
var G__45466 = (0);
seq__44367_45342 = G__45463;
chunk__44368_45343 = G__45464;
count__44369_45344 = G__45465;
i__44370_45345 = G__45466;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44365){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44365));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44389_45475 = cljs.core.seq(scripts);
var chunk__44390_45476 = null;
var count__44391_45477 = (0);
var i__44392_45478 = (0);
while(true){
if((i__44392_45478 < count__44391_45477)){
var vec__44422_45479 = chunk__44390_45476.cljs$core$IIndexed$_nth$arity$2(null,i__44392_45478);
var script_tag_45480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44422_45479,(0),null);
var script_body_45481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44422_45479,(1),null);
eval(script_body_45481);


var G__45482 = seq__44389_45475;
var G__45483 = chunk__44390_45476;
var G__45484 = count__44391_45477;
var G__45485 = (i__44392_45478 + (1));
seq__44389_45475 = G__45482;
chunk__44390_45476 = G__45483;
count__44391_45477 = G__45484;
i__44392_45478 = G__45485;
continue;
} else {
var temp__5753__auto___45486 = cljs.core.seq(seq__44389_45475);
if(temp__5753__auto___45486){
var seq__44389_45487__$1 = temp__5753__auto___45486;
if(cljs.core.chunked_seq_QMARK_(seq__44389_45487__$1)){
var c__4679__auto___45488 = cljs.core.chunk_first(seq__44389_45487__$1);
var G__45489 = cljs.core.chunk_rest(seq__44389_45487__$1);
var G__45490 = c__4679__auto___45488;
var G__45491 = cljs.core.count(c__4679__auto___45488);
var G__45492 = (0);
seq__44389_45475 = G__45489;
chunk__44390_45476 = G__45490;
count__44391_45477 = G__45491;
i__44392_45478 = G__45492;
continue;
} else {
var vec__44427_45494 = cljs.core.first(seq__44389_45487__$1);
var script_tag_45495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427_45494,(0),null);
var script_body_45496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427_45494,(1),null);
eval(script_body_45496);


var G__45498 = cljs.core.next(seq__44389_45487__$1);
var G__45499 = null;
var G__45500 = (0);
var G__45501 = (0);
seq__44389_45475 = G__45498;
chunk__44390_45476 = G__45499;
count__44391_45477 = G__45500;
i__44392_45478 = G__45501;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44437){
var vec__44438 = p__44437;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44438,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44438,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44498 = arguments.length;
switch (G__44498) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44542 = cljs.core.seq(style_keys);
var chunk__44543 = null;
var count__44544 = (0);
var i__44545 = (0);
while(true){
if((i__44545 < count__44544)){
var it = chunk__44543.cljs$core$IIndexed$_nth$arity$2(null,i__44545);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45521 = seq__44542;
var G__45522 = chunk__44543;
var G__45523 = count__44544;
var G__45524 = (i__44545 + (1));
seq__44542 = G__45521;
chunk__44543 = G__45522;
count__44544 = G__45523;
i__44545 = G__45524;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44542);
if(temp__5753__auto__){
var seq__44542__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44542__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44542__$1);
var G__45527 = cljs.core.chunk_rest(seq__44542__$1);
var G__45528 = c__4679__auto__;
var G__45529 = cljs.core.count(c__4679__auto__);
var G__45530 = (0);
seq__44542 = G__45527;
chunk__44543 = G__45528;
count__44544 = G__45529;
i__44545 = G__45530;
continue;
} else {
var it = cljs.core.first(seq__44542__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45531 = cljs.core.next(seq__44542__$1);
var G__45532 = null;
var G__45533 = (0);
var G__45534 = (0);
seq__44542 = G__45531;
chunk__44543 = G__45532;
count__44544 = G__45533;
i__44545 = G__45534;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k44556,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__44565 = k44556;
var G__44565__$1 = (((G__44565 instanceof cljs.core.Keyword))?G__44565.fqn:null);
switch (G__44565__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44556,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__44567){
var vec__44568 = p__44567;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44555){
var self__ = this;
var G__44555__$1 = this;
return (new cljs.core.RecordIter((0),G__44555__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44557,other44558){
var self__ = this;
var this44557__$1 = this;
return (((!((other44558 == null)))) && ((((this44557__$1.constructor === other44558.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44557__$1.x,other44558.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44557__$1.y,other44558.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44557__$1.__extmap,other44558.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k44556){
var self__ = this;
var this__4509__auto____$1 = this;
var G__44633 = k44556;
var G__44633__$1 = (((G__44633 instanceof cljs.core.Keyword))?G__44633.fqn:null);
switch (G__44633__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44556);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__44555){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__44650 = cljs.core.keyword_identical_QMARK_;
var expr__44651 = k__4511__auto__;
if(cljs.core.truth_((pred__44650.cljs$core$IFn$_invoke$arity$2 ? pred__44650.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44651) : pred__44650.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44651)))){
return (new shadow.dom.Coordinate(G__44555,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44650.cljs$core$IFn$_invoke$arity$2 ? pred__44650.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44651) : pred__44650.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44651)))){
return (new shadow.dom.Coordinate(self__.x,G__44555,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__44555),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__44555){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44555,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44559){
var extmap__4542__auto__ = (function (){var G__44671 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44559,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44559)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44671);
} else {
return G__44671;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44559),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44559),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k44690,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__44702 = k44690;
var G__44702__$1 = (((G__44702 instanceof cljs.core.Keyword))?G__44702.fqn:null);
switch (G__44702__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44690,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__44714){
var vec__44715 = p__44714;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44715,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44715,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44689){
var self__ = this;
var G__44689__$1 = this;
return (new cljs.core.RecordIter((0),G__44689__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44691,other44692){
var self__ = this;
var this44691__$1 = this;
return (((!((other44692 == null)))) && ((((this44691__$1.constructor === other44692.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44691__$1.w,other44692.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44691__$1.h,other44692.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44691__$1.__extmap,other44692.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k44690){
var self__ = this;
var this__4509__auto____$1 = this;
var G__44719 = k44690;
var G__44719__$1 = (((G__44719 instanceof cljs.core.Keyword))?G__44719.fqn:null);
switch (G__44719__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44690);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__44689){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__44720 = cljs.core.keyword_identical_QMARK_;
var expr__44721 = k__4511__auto__;
if(cljs.core.truth_((pred__44720.cljs$core$IFn$_invoke$arity$2 ? pred__44720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44721) : pred__44720.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44721)))){
return (new shadow.dom.Size(G__44689,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44720.cljs$core$IFn$_invoke$arity$2 ? pred__44720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44721) : pred__44720.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44721)))){
return (new shadow.dom.Size(self__.w,G__44689,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__44689),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__44689){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44689,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44701){
var extmap__4542__auto__ = (function (){var G__44727 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44701,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44701)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44727);
} else {
return G__44727;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44701),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44701),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__45580 = (i + (1));
var G__45581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45580;
ret = G__45581;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44847){
var vec__44848 = p__44847;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44848,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44860 = arguments.length;
switch (G__44860) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45586 = ps;
var G__45587 = (i + (1));
el__$1 = G__45586;
i = G__45587;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__44910 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44910,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44910,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44910,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44913_45591 = cljs.core.seq(props);
var chunk__44914_45592 = null;
var count__44915_45593 = (0);
var i__44916_45594 = (0);
while(true){
if((i__44916_45594 < count__44915_45593)){
var vec__44955_45595 = chunk__44914_45592.cljs$core$IIndexed$_nth$arity$2(null,i__44916_45594);
var k_45596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44955_45595,(0),null);
var v_45597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44955_45595,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_45596);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45596),v_45597);


var G__45598 = seq__44913_45591;
var G__45599 = chunk__44914_45592;
var G__45600 = count__44915_45593;
var G__45601 = (i__44916_45594 + (1));
seq__44913_45591 = G__45598;
chunk__44914_45592 = G__45599;
count__44915_45593 = G__45600;
i__44916_45594 = G__45601;
continue;
} else {
var temp__5753__auto___45602 = cljs.core.seq(seq__44913_45591);
if(temp__5753__auto___45602){
var seq__44913_45603__$1 = temp__5753__auto___45602;
if(cljs.core.chunked_seq_QMARK_(seq__44913_45603__$1)){
var c__4679__auto___45604 = cljs.core.chunk_first(seq__44913_45603__$1);
var G__45605 = cljs.core.chunk_rest(seq__44913_45603__$1);
var G__45606 = c__4679__auto___45604;
var G__45607 = cljs.core.count(c__4679__auto___45604);
var G__45608 = (0);
seq__44913_45591 = G__45605;
chunk__44914_45592 = G__45606;
count__44915_45593 = G__45607;
i__44916_45594 = G__45608;
continue;
} else {
var vec__44959_45609 = cljs.core.first(seq__44913_45603__$1);
var k_45610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44959_45609,(0),null);
var v_45611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44959_45609,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_45610);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45610),v_45611);


var G__45612 = cljs.core.next(seq__44913_45603__$1);
var G__45613 = null;
var G__45614 = (0);
var G__45615 = (0);
seq__44913_45591 = G__45612;
chunk__44914_45592 = G__45613;
count__44915_45593 = G__45614;
i__44916_45594 = G__45615;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__44985 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44985,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44985,(1),null);
var seq__44988_45616 = cljs.core.seq(node_children);
var chunk__44990_45617 = null;
var count__44991_45618 = (0);
var i__44992_45619 = (0);
while(true){
if((i__44992_45619 < count__44991_45618)){
var child_struct_45620 = chunk__44990_45617.cljs$core$IIndexed$_nth$arity$2(null,i__44992_45619);
if((!((child_struct_45620 == null)))){
if(typeof child_struct_45620 === 'string'){
var text_45621 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45621),child_struct_45620].join(''));
} else {
var children_45622 = shadow.dom.svg_node(child_struct_45620);
if(cljs.core.seq_QMARK_(children_45622)){
var seq__45018_45623 = cljs.core.seq(children_45622);
var chunk__45020_45624 = null;
var count__45021_45625 = (0);
var i__45022_45626 = (0);
while(true){
if((i__45022_45626 < count__45021_45625)){
var child_45627 = chunk__45020_45624.cljs$core$IIndexed$_nth$arity$2(null,i__45022_45626);
if(cljs.core.truth_(child_45627)){
node.appendChild(child_45627);


var G__45628 = seq__45018_45623;
var G__45629 = chunk__45020_45624;
var G__45630 = count__45021_45625;
var G__45631 = (i__45022_45626 + (1));
seq__45018_45623 = G__45628;
chunk__45020_45624 = G__45629;
count__45021_45625 = G__45630;
i__45022_45626 = G__45631;
continue;
} else {
var G__45632 = seq__45018_45623;
var G__45633 = chunk__45020_45624;
var G__45634 = count__45021_45625;
var G__45635 = (i__45022_45626 + (1));
seq__45018_45623 = G__45632;
chunk__45020_45624 = G__45633;
count__45021_45625 = G__45634;
i__45022_45626 = G__45635;
continue;
}
} else {
var temp__5753__auto___45636 = cljs.core.seq(seq__45018_45623);
if(temp__5753__auto___45636){
var seq__45018_45637__$1 = temp__5753__auto___45636;
if(cljs.core.chunked_seq_QMARK_(seq__45018_45637__$1)){
var c__4679__auto___45638 = cljs.core.chunk_first(seq__45018_45637__$1);
var G__45639 = cljs.core.chunk_rest(seq__45018_45637__$1);
var G__45640 = c__4679__auto___45638;
var G__45641 = cljs.core.count(c__4679__auto___45638);
var G__45642 = (0);
seq__45018_45623 = G__45639;
chunk__45020_45624 = G__45640;
count__45021_45625 = G__45641;
i__45022_45626 = G__45642;
continue;
} else {
var child_45643 = cljs.core.first(seq__45018_45637__$1);
if(cljs.core.truth_(child_45643)){
node.appendChild(child_45643);


var G__45644 = cljs.core.next(seq__45018_45637__$1);
var G__45645 = null;
var G__45646 = (0);
var G__45647 = (0);
seq__45018_45623 = G__45644;
chunk__45020_45624 = G__45645;
count__45021_45625 = G__45646;
i__45022_45626 = G__45647;
continue;
} else {
var G__45648 = cljs.core.next(seq__45018_45637__$1);
var G__45649 = null;
var G__45650 = (0);
var G__45651 = (0);
seq__45018_45623 = G__45648;
chunk__45020_45624 = G__45649;
count__45021_45625 = G__45650;
i__45022_45626 = G__45651;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45622);
}
}


var G__45652 = seq__44988_45616;
var G__45653 = chunk__44990_45617;
var G__45654 = count__44991_45618;
var G__45655 = (i__44992_45619 + (1));
seq__44988_45616 = G__45652;
chunk__44990_45617 = G__45653;
count__44991_45618 = G__45654;
i__44992_45619 = G__45655;
continue;
} else {
var G__45656 = seq__44988_45616;
var G__45657 = chunk__44990_45617;
var G__45658 = count__44991_45618;
var G__45659 = (i__44992_45619 + (1));
seq__44988_45616 = G__45656;
chunk__44990_45617 = G__45657;
count__44991_45618 = G__45658;
i__44992_45619 = G__45659;
continue;
}
} else {
var temp__5753__auto___45660 = cljs.core.seq(seq__44988_45616);
if(temp__5753__auto___45660){
var seq__44988_45661__$1 = temp__5753__auto___45660;
if(cljs.core.chunked_seq_QMARK_(seq__44988_45661__$1)){
var c__4679__auto___45662 = cljs.core.chunk_first(seq__44988_45661__$1);
var G__45663 = cljs.core.chunk_rest(seq__44988_45661__$1);
var G__45664 = c__4679__auto___45662;
var G__45665 = cljs.core.count(c__4679__auto___45662);
var G__45666 = (0);
seq__44988_45616 = G__45663;
chunk__44990_45617 = G__45664;
count__44991_45618 = G__45665;
i__44992_45619 = G__45666;
continue;
} else {
var child_struct_45667 = cljs.core.first(seq__44988_45661__$1);
if((!((child_struct_45667 == null)))){
if(typeof child_struct_45667 === 'string'){
var text_45668 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45668),child_struct_45667].join(''));
} else {
var children_45669 = shadow.dom.svg_node(child_struct_45667);
if(cljs.core.seq_QMARK_(children_45669)){
var seq__45026_45670 = cljs.core.seq(children_45669);
var chunk__45028_45671 = null;
var count__45029_45672 = (0);
var i__45030_45673 = (0);
while(true){
if((i__45030_45673 < count__45029_45672)){
var child_45674 = chunk__45028_45671.cljs$core$IIndexed$_nth$arity$2(null,i__45030_45673);
if(cljs.core.truth_(child_45674)){
node.appendChild(child_45674);


var G__45675 = seq__45026_45670;
var G__45676 = chunk__45028_45671;
var G__45677 = count__45029_45672;
var G__45678 = (i__45030_45673 + (1));
seq__45026_45670 = G__45675;
chunk__45028_45671 = G__45676;
count__45029_45672 = G__45677;
i__45030_45673 = G__45678;
continue;
} else {
var G__45679 = seq__45026_45670;
var G__45680 = chunk__45028_45671;
var G__45681 = count__45029_45672;
var G__45682 = (i__45030_45673 + (1));
seq__45026_45670 = G__45679;
chunk__45028_45671 = G__45680;
count__45029_45672 = G__45681;
i__45030_45673 = G__45682;
continue;
}
} else {
var temp__5753__auto___45683__$1 = cljs.core.seq(seq__45026_45670);
if(temp__5753__auto___45683__$1){
var seq__45026_45684__$1 = temp__5753__auto___45683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45026_45684__$1)){
var c__4679__auto___45685 = cljs.core.chunk_first(seq__45026_45684__$1);
var G__45686 = cljs.core.chunk_rest(seq__45026_45684__$1);
var G__45687 = c__4679__auto___45685;
var G__45688 = cljs.core.count(c__4679__auto___45685);
var G__45689 = (0);
seq__45026_45670 = G__45686;
chunk__45028_45671 = G__45687;
count__45029_45672 = G__45688;
i__45030_45673 = G__45689;
continue;
} else {
var child_45690 = cljs.core.first(seq__45026_45684__$1);
if(cljs.core.truth_(child_45690)){
node.appendChild(child_45690);


var G__45691 = cljs.core.next(seq__45026_45684__$1);
var G__45692 = null;
var G__45693 = (0);
var G__45694 = (0);
seq__45026_45670 = G__45691;
chunk__45028_45671 = G__45692;
count__45029_45672 = G__45693;
i__45030_45673 = G__45694;
continue;
} else {
var G__45695 = cljs.core.next(seq__45026_45684__$1);
var G__45696 = null;
var G__45697 = (0);
var G__45698 = (0);
seq__45026_45670 = G__45695;
chunk__45028_45671 = G__45696;
count__45029_45672 = G__45697;
i__45030_45673 = G__45698;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45669);
}
}


var G__45699 = cljs.core.next(seq__44988_45661__$1);
var G__45700 = null;
var G__45701 = (0);
var G__45702 = (0);
seq__44988_45616 = G__45699;
chunk__44990_45617 = G__45700;
count__44991_45618 = G__45701;
i__44992_45619 = G__45702;
continue;
} else {
var G__45703 = cljs.core.next(seq__44988_45661__$1);
var G__45704 = null;
var G__45705 = (0);
var G__45706 = (0);
seq__44988_45616 = G__45703;
chunk__44990_45617 = G__45704;
count__44991_45618 = G__45705;
i__44992_45619 = G__45706;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45707 = arguments.length;
var i__4865__auto___45708 = (0);
while(true){
if((i__4865__auto___45708 < len__4864__auto___45707)){
args__4870__auto__.push((arguments[i__4865__auto___45708]));

var G__45709 = (i__4865__auto___45708 + (1));
i__4865__auto___45708 = G__45709;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45038){
var G__45039 = cljs.core.first(seq45038);
var seq45038__$1 = cljs.core.next(seq45038);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45039,seq45038__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45041 = arguments.length;
switch (G__45041) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__41046__auto___45711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_45058){
var state_val_45059 = (state_45058[(1)]);
if((state_val_45059 === (1))){
var state_45058__$1 = state_45058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45058__$1,(2),once_or_cleanup);
} else {
if((state_val_45059 === (2))){
var inst_45052 = (state_45058[(2)]);
var inst_45053 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45058__$1 = (function (){var statearr_45060 = state_45058;
(statearr_45060[(7)] = inst_45052);

return statearr_45060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45058__$1,inst_45053);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40958__auto__ = null;
var shadow$dom$state_machine__40958__auto____0 = (function (){
var statearr_45061 = [null,null,null,null,null,null,null,null];
(statearr_45061[(0)] = shadow$dom$state_machine__40958__auto__);

(statearr_45061[(1)] = (1));

return statearr_45061;
});
var shadow$dom$state_machine__40958__auto____1 = (function (state_45058){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_45058);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e45062){var ex__40961__auto__ = e45062;
var statearr_45063_45712 = state_45058;
(statearr_45063_45712[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_45058[(4)]))){
var statearr_45064_45713 = state_45058;
(statearr_45064_45713[(1)] = cljs.core.first((state_45058[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45714 = state_45058;
state_45058 = G__45714;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
shadow$dom$state_machine__40958__auto__ = function(state_45058){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40958__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40958__auto____1.call(this,state_45058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40958__auto____0;
shadow$dom$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40958__auto____1;
return shadow$dom$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_45065 = f__41047__auto__();
(statearr_45065[(6)] = c__41046__auto___45711);

return statearr_45065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
