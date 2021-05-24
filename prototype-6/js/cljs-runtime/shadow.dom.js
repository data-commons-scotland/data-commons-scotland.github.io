goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32279 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32279(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32281 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32281(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31748 = coll;
var G__31749 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31748,G__31749) : shadow.dom.lazy_native_coll_seq.call(null,G__31748,G__31749));
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
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
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
var G__31754 = arguments.length;
switch (G__31754) {
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
var G__31757 = arguments.length;
switch (G__31757) {
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
var G__31759 = arguments.length;
switch (G__31759) {
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
var G__31762 = arguments.length;
switch (G__31762) {
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
var G__31765 = arguments.length;
switch (G__31765) {
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
var G__31770 = arguments.length;
switch (G__31770) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31771){if((e31771 instanceof Object)){
var e = e31771;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31771;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31772 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31773 = null;
var count__31774 = (0);
var i__31775 = (0);
while(true){
if((i__31775 < count__31774)){
var el = chunk__31773.cljs$core$IIndexed$_nth$arity$2(null,i__31775);
var handler_32309__$1 = ((function (seq__31772,chunk__31773,count__31774,i__31775,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31772,chunk__31773,count__31774,i__31775,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32309__$1);


var G__32313 = seq__31772;
var G__32314 = chunk__31773;
var G__32315 = count__31774;
var G__32316 = (i__31775 + (1));
seq__31772 = G__32313;
chunk__31773 = G__32314;
count__31774 = G__32315;
i__31775 = G__32316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31772);
if(temp__5735__auto__){
var seq__31772__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31772__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31772__$1);
var G__32317 = cljs.core.chunk_rest(seq__31772__$1);
var G__32318 = c__4591__auto__;
var G__32319 = cljs.core.count(c__4591__auto__);
var G__32320 = (0);
seq__31772 = G__32317;
chunk__31773 = G__32318;
count__31774 = G__32319;
i__31775 = G__32320;
continue;
} else {
var el = cljs.core.first(seq__31772__$1);
var handler_32321__$1 = ((function (seq__31772,chunk__31773,count__31774,i__31775,el,seq__31772__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31772,chunk__31773,count__31774,i__31775,el,seq__31772__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32321__$1);


var G__32322 = cljs.core.next(seq__31772__$1);
var G__32323 = null;
var G__32324 = (0);
var G__32325 = (0);
seq__31772 = G__32322;
chunk__31773 = G__32323;
count__31774 = G__32324;
i__31775 = G__32325;
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
var G__31777 = arguments.length;
switch (G__31777) {
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
var seq__31782 = cljs.core.seq(events);
var chunk__31783 = null;
var count__31784 = (0);
var i__31785 = (0);
while(true){
if((i__31785 < count__31784)){
var vec__31792 = chunk__31783.cljs$core$IIndexed$_nth$arity$2(null,i__31785);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31792,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32334 = seq__31782;
var G__32335 = chunk__31783;
var G__32336 = count__31784;
var G__32337 = (i__31785 + (1));
seq__31782 = G__32334;
chunk__31783 = G__32335;
count__31784 = G__32336;
i__31785 = G__32337;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31782);
if(temp__5735__auto__){
var seq__31782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31782__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31782__$1);
var G__32338 = cljs.core.chunk_rest(seq__31782__$1);
var G__32339 = c__4591__auto__;
var G__32340 = cljs.core.count(c__4591__auto__);
var G__32341 = (0);
seq__31782 = G__32338;
chunk__31783 = G__32339;
count__31784 = G__32340;
i__31785 = G__32341;
continue;
} else {
var vec__31796 = cljs.core.first(seq__31782__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31796,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32342 = cljs.core.next(seq__31782__$1);
var G__32343 = null;
var G__32344 = (0);
var G__32345 = (0);
seq__31782 = G__32342;
chunk__31783 = G__32343;
count__31784 = G__32344;
i__31785 = G__32345;
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
var seq__31801 = cljs.core.seq(styles);
var chunk__31802 = null;
var count__31803 = (0);
var i__31804 = (0);
while(true){
if((i__31804 < count__31803)){
var vec__31814 = chunk__31802.cljs$core$IIndexed$_nth$arity$2(null,i__31804);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32346 = seq__31801;
var G__32347 = chunk__31802;
var G__32348 = count__31803;
var G__32349 = (i__31804 + (1));
seq__31801 = G__32346;
chunk__31802 = G__32347;
count__31803 = G__32348;
i__31804 = G__32349;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31801);
if(temp__5735__auto__){
var seq__31801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31801__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31801__$1);
var G__32355 = cljs.core.chunk_rest(seq__31801__$1);
var G__32356 = c__4591__auto__;
var G__32357 = cljs.core.count(c__4591__auto__);
var G__32358 = (0);
seq__31801 = G__32355;
chunk__31802 = G__32356;
count__31803 = G__32357;
i__31804 = G__32358;
continue;
} else {
var vec__31817 = cljs.core.first(seq__31801__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31817,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31817,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32359 = cljs.core.next(seq__31801__$1);
var G__32360 = null;
var G__32361 = (0);
var G__32362 = (0);
seq__31801 = G__32359;
chunk__31802 = G__32360;
count__31803 = G__32361;
i__31804 = G__32362;
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
var G__31820_32363 = key;
var G__31820_32364__$1 = (((G__31820_32363 instanceof cljs.core.Keyword))?G__31820_32363.fqn:null);
switch (G__31820_32364__$1) {
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
var ks_32366 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_32366,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_32366,"aria-");
}
})())){
el.setAttribute(ks_32366,value);
} else {
(el[ks_32366] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31835){
var map__31836 = p__31835;
var map__31836__$1 = cljs.core.__destructure_map(map__31836);
var props = map__31836__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31836__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31837 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31842 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31842,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31842;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31845 = arguments.length;
switch (G__31845) {
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31856){
var vec__31857 = p__31856;
var seq__31858 = cljs.core.seq(vec__31857);
var first__31859 = cljs.core.first(seq__31858);
var seq__31858__$1 = cljs.core.next(seq__31858);
var nn = first__31859;
var first__31859__$1 = cljs.core.first(seq__31858__$1);
var seq__31858__$2 = cljs.core.next(seq__31858__$1);
var np = first__31859__$1;
var nc = seq__31858__$2;
var node = vec__31857;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31860 = nn;
var G__31861 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31860,G__31861) : create_fn.call(null,G__31860,G__31861));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31862 = nn;
var G__31863 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31862,G__31863) : create_fn.call(null,G__31862,G__31863));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31866 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31866,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31866,(1),null);
var seq__31874_32384 = cljs.core.seq(node_children);
var chunk__31875_32385 = null;
var count__31876_32386 = (0);
var i__31877_32387 = (0);
while(true){
if((i__31877_32387 < count__31876_32386)){
var child_struct_32394 = chunk__31875_32385.cljs$core$IIndexed$_nth$arity$2(null,i__31877_32387);
var children_32395 = shadow.dom.dom_node(child_struct_32394);
if(cljs.core.seq_QMARK_(children_32395)){
var seq__31905_32396 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32395));
var chunk__31907_32397 = null;
var count__31908_32398 = (0);
var i__31909_32399 = (0);
while(true){
if((i__31909_32399 < count__31908_32398)){
var child_32400 = chunk__31907_32397.cljs$core$IIndexed$_nth$arity$2(null,i__31909_32399);
if(cljs.core.truth_(child_32400)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32400);


var G__32401 = seq__31905_32396;
var G__32402 = chunk__31907_32397;
var G__32403 = count__31908_32398;
var G__32404 = (i__31909_32399 + (1));
seq__31905_32396 = G__32401;
chunk__31907_32397 = G__32402;
count__31908_32398 = G__32403;
i__31909_32399 = G__32404;
continue;
} else {
var G__32405 = seq__31905_32396;
var G__32406 = chunk__31907_32397;
var G__32407 = count__31908_32398;
var G__32408 = (i__31909_32399 + (1));
seq__31905_32396 = G__32405;
chunk__31907_32397 = G__32406;
count__31908_32398 = G__32407;
i__31909_32399 = G__32408;
continue;
}
} else {
var temp__5735__auto___32409 = cljs.core.seq(seq__31905_32396);
if(temp__5735__auto___32409){
var seq__31905_32410__$1 = temp__5735__auto___32409;
if(cljs.core.chunked_seq_QMARK_(seq__31905_32410__$1)){
var c__4591__auto___32411 = cljs.core.chunk_first(seq__31905_32410__$1);
var G__32412 = cljs.core.chunk_rest(seq__31905_32410__$1);
var G__32413 = c__4591__auto___32411;
var G__32414 = cljs.core.count(c__4591__auto___32411);
var G__32415 = (0);
seq__31905_32396 = G__32412;
chunk__31907_32397 = G__32413;
count__31908_32398 = G__32414;
i__31909_32399 = G__32415;
continue;
} else {
var child_32416 = cljs.core.first(seq__31905_32410__$1);
if(cljs.core.truth_(child_32416)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32416);


var G__32417 = cljs.core.next(seq__31905_32410__$1);
var G__32418 = null;
var G__32419 = (0);
var G__32420 = (0);
seq__31905_32396 = G__32417;
chunk__31907_32397 = G__32418;
count__31908_32398 = G__32419;
i__31909_32399 = G__32420;
continue;
} else {
var G__32421 = cljs.core.next(seq__31905_32410__$1);
var G__32422 = null;
var G__32423 = (0);
var G__32424 = (0);
seq__31905_32396 = G__32421;
chunk__31907_32397 = G__32422;
count__31908_32398 = G__32423;
i__31909_32399 = G__32424;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32395);
}


var G__32425 = seq__31874_32384;
var G__32426 = chunk__31875_32385;
var G__32427 = count__31876_32386;
var G__32428 = (i__31877_32387 + (1));
seq__31874_32384 = G__32425;
chunk__31875_32385 = G__32426;
count__31876_32386 = G__32427;
i__31877_32387 = G__32428;
continue;
} else {
var temp__5735__auto___32429 = cljs.core.seq(seq__31874_32384);
if(temp__5735__auto___32429){
var seq__31874_32430__$1 = temp__5735__auto___32429;
if(cljs.core.chunked_seq_QMARK_(seq__31874_32430__$1)){
var c__4591__auto___32432 = cljs.core.chunk_first(seq__31874_32430__$1);
var G__32433 = cljs.core.chunk_rest(seq__31874_32430__$1);
var G__32434 = c__4591__auto___32432;
var G__32435 = cljs.core.count(c__4591__auto___32432);
var G__32436 = (0);
seq__31874_32384 = G__32433;
chunk__31875_32385 = G__32434;
count__31876_32386 = G__32435;
i__31877_32387 = G__32436;
continue;
} else {
var child_struct_32438 = cljs.core.first(seq__31874_32430__$1);
var children_32439 = shadow.dom.dom_node(child_struct_32438);
if(cljs.core.seq_QMARK_(children_32439)){
var seq__31917_32441 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32439));
var chunk__31919_32442 = null;
var count__31920_32443 = (0);
var i__31921_32444 = (0);
while(true){
if((i__31921_32444 < count__31920_32443)){
var child_32445 = chunk__31919_32442.cljs$core$IIndexed$_nth$arity$2(null,i__31921_32444);
if(cljs.core.truth_(child_32445)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32445);


var G__32446 = seq__31917_32441;
var G__32447 = chunk__31919_32442;
var G__32448 = count__31920_32443;
var G__32449 = (i__31921_32444 + (1));
seq__31917_32441 = G__32446;
chunk__31919_32442 = G__32447;
count__31920_32443 = G__32448;
i__31921_32444 = G__32449;
continue;
} else {
var G__32450 = seq__31917_32441;
var G__32451 = chunk__31919_32442;
var G__32452 = count__31920_32443;
var G__32453 = (i__31921_32444 + (1));
seq__31917_32441 = G__32450;
chunk__31919_32442 = G__32451;
count__31920_32443 = G__32452;
i__31921_32444 = G__32453;
continue;
}
} else {
var temp__5735__auto___32454__$1 = cljs.core.seq(seq__31917_32441);
if(temp__5735__auto___32454__$1){
var seq__31917_32455__$1 = temp__5735__auto___32454__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31917_32455__$1)){
var c__4591__auto___32456 = cljs.core.chunk_first(seq__31917_32455__$1);
var G__32457 = cljs.core.chunk_rest(seq__31917_32455__$1);
var G__32458 = c__4591__auto___32456;
var G__32459 = cljs.core.count(c__4591__auto___32456);
var G__32460 = (0);
seq__31917_32441 = G__32457;
chunk__31919_32442 = G__32458;
count__31920_32443 = G__32459;
i__31921_32444 = G__32460;
continue;
} else {
var child_32461 = cljs.core.first(seq__31917_32455__$1);
if(cljs.core.truth_(child_32461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32461);


var G__32462 = cljs.core.next(seq__31917_32455__$1);
var G__32463 = null;
var G__32464 = (0);
var G__32465 = (0);
seq__31917_32441 = G__32462;
chunk__31919_32442 = G__32463;
count__31920_32443 = G__32464;
i__31921_32444 = G__32465;
continue;
} else {
var G__32466 = cljs.core.next(seq__31917_32455__$1);
var G__32467 = null;
var G__32468 = (0);
var G__32469 = (0);
seq__31917_32441 = G__32466;
chunk__31919_32442 = G__32467;
count__31920_32443 = G__32468;
i__31921_32444 = G__32469;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32439);
}


var G__32470 = cljs.core.next(seq__31874_32430__$1);
var G__32471 = null;
var G__32472 = (0);
var G__32473 = (0);
seq__31874_32384 = G__32470;
chunk__31875_32385 = G__32471;
count__31876_32386 = G__32472;
i__31877_32387 = G__32473;
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
var seq__31942 = cljs.core.seq(node);
var chunk__31943 = null;
var count__31944 = (0);
var i__31945 = (0);
while(true){
if((i__31945 < count__31944)){
var n = chunk__31943.cljs$core$IIndexed$_nth$arity$2(null,i__31945);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32474 = seq__31942;
var G__32475 = chunk__31943;
var G__32476 = count__31944;
var G__32477 = (i__31945 + (1));
seq__31942 = G__32474;
chunk__31943 = G__32475;
count__31944 = G__32476;
i__31945 = G__32477;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31942);
if(temp__5735__auto__){
var seq__31942__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31942__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31942__$1);
var G__32478 = cljs.core.chunk_rest(seq__31942__$1);
var G__32479 = c__4591__auto__;
var G__32480 = cljs.core.count(c__4591__auto__);
var G__32481 = (0);
seq__31942 = G__32478;
chunk__31943 = G__32479;
count__31944 = G__32480;
i__31945 = G__32481;
continue;
} else {
var n = cljs.core.first(seq__31942__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32482 = cljs.core.next(seq__31942__$1);
var G__32483 = null;
var G__32484 = (0);
var G__32485 = (0);
seq__31942 = G__32482;
chunk__31943 = G__32483;
count__31944 = G__32484;
i__31945 = G__32485;
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
var G__31951 = arguments.length;
switch (G__31951) {
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
var G__31958 = arguments.length;
switch (G__31958) {
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
var G__31962 = arguments.length;
switch (G__31962) {
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
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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
var args__4777__auto__ = [];
var len__4771__auto___32489 = arguments.length;
var i__4772__auto___32490 = (0);
while(true){
if((i__4772__auto___32490 < len__4771__auto___32489)){
args__4777__auto__.push((arguments[i__4772__auto___32490]));

var G__32491 = (i__4772__auto___32490 + (1));
i__4772__auto___32490 = G__32491;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31987_32492 = cljs.core.seq(nodes);
var chunk__31988_32493 = null;
var count__31989_32494 = (0);
var i__31990_32495 = (0);
while(true){
if((i__31990_32495 < count__31989_32494)){
var node_32496 = chunk__31988_32493.cljs$core$IIndexed$_nth$arity$2(null,i__31990_32495);
fragment.appendChild(shadow.dom._to_dom(node_32496));


var G__32497 = seq__31987_32492;
var G__32498 = chunk__31988_32493;
var G__32499 = count__31989_32494;
var G__32500 = (i__31990_32495 + (1));
seq__31987_32492 = G__32497;
chunk__31988_32493 = G__32498;
count__31989_32494 = G__32499;
i__31990_32495 = G__32500;
continue;
} else {
var temp__5735__auto___32502 = cljs.core.seq(seq__31987_32492);
if(temp__5735__auto___32502){
var seq__31987_32503__$1 = temp__5735__auto___32502;
if(cljs.core.chunked_seq_QMARK_(seq__31987_32503__$1)){
var c__4591__auto___32504 = cljs.core.chunk_first(seq__31987_32503__$1);
var G__32505 = cljs.core.chunk_rest(seq__31987_32503__$1);
var G__32506 = c__4591__auto___32504;
var G__32507 = cljs.core.count(c__4591__auto___32504);
var G__32508 = (0);
seq__31987_32492 = G__32505;
chunk__31988_32493 = G__32506;
count__31989_32494 = G__32507;
i__31990_32495 = G__32508;
continue;
} else {
var node_32509 = cljs.core.first(seq__31987_32503__$1);
fragment.appendChild(shadow.dom._to_dom(node_32509));


var G__32511 = cljs.core.next(seq__31987_32503__$1);
var G__32512 = null;
var G__32513 = (0);
var G__32514 = (0);
seq__31987_32492 = G__32511;
chunk__31988_32493 = G__32512;
count__31989_32494 = G__32513;
i__31990_32495 = G__32514;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31986){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31986));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31996_32516 = cljs.core.seq(scripts);
var chunk__31997_32517 = null;
var count__31998_32518 = (0);
var i__31999_32519 = (0);
while(true){
if((i__31999_32519 < count__31998_32518)){
var vec__32011_32521 = chunk__31997_32517.cljs$core$IIndexed$_nth$arity$2(null,i__31999_32519);
var script_tag_32522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32011_32521,(0),null);
var script_body_32523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32011_32521,(1),null);
eval(script_body_32523);


var G__32524 = seq__31996_32516;
var G__32525 = chunk__31997_32517;
var G__32526 = count__31998_32518;
var G__32527 = (i__31999_32519 + (1));
seq__31996_32516 = G__32524;
chunk__31997_32517 = G__32525;
count__31998_32518 = G__32526;
i__31999_32519 = G__32527;
continue;
} else {
var temp__5735__auto___32529 = cljs.core.seq(seq__31996_32516);
if(temp__5735__auto___32529){
var seq__31996_32531__$1 = temp__5735__auto___32529;
if(cljs.core.chunked_seq_QMARK_(seq__31996_32531__$1)){
var c__4591__auto___32532 = cljs.core.chunk_first(seq__31996_32531__$1);
var G__32533 = cljs.core.chunk_rest(seq__31996_32531__$1);
var G__32534 = c__4591__auto___32532;
var G__32535 = cljs.core.count(c__4591__auto___32532);
var G__32536 = (0);
seq__31996_32516 = G__32533;
chunk__31997_32517 = G__32534;
count__31998_32518 = G__32535;
i__31999_32519 = G__32536;
continue;
} else {
var vec__32014_32537 = cljs.core.first(seq__31996_32531__$1);
var script_tag_32538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32014_32537,(0),null);
var script_body_32539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32014_32537,(1),null);
eval(script_body_32539);


var G__32540 = cljs.core.next(seq__31996_32531__$1);
var G__32541 = null;
var G__32542 = (0);
var G__32543 = (0);
seq__31996_32516 = G__32540;
chunk__31997_32517 = G__32541;
count__31998_32518 = G__32542;
i__31999_32519 = G__32543;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32017){
var vec__32018 = p__32017;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32018,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32018,(1),null);
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
var G__32027 = arguments.length;
switch (G__32027) {
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
var seq__32039 = cljs.core.seq(style_keys);
var chunk__32040 = null;
var count__32041 = (0);
var i__32042 = (0);
while(true){
if((i__32042 < count__32041)){
var it = chunk__32040.cljs$core$IIndexed$_nth$arity$2(null,i__32042);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32552 = seq__32039;
var G__32553 = chunk__32040;
var G__32554 = count__32041;
var G__32555 = (i__32042 + (1));
seq__32039 = G__32552;
chunk__32040 = G__32553;
count__32041 = G__32554;
i__32042 = G__32555;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32039);
if(temp__5735__auto__){
var seq__32039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32039__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32039__$1);
var G__32556 = cljs.core.chunk_rest(seq__32039__$1);
var G__32557 = c__4591__auto__;
var G__32558 = cljs.core.count(c__4591__auto__);
var G__32559 = (0);
seq__32039 = G__32556;
chunk__32040 = G__32557;
count__32041 = G__32558;
i__32042 = G__32559;
continue;
} else {
var it = cljs.core.first(seq__32039__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32560 = cljs.core.next(seq__32039__$1);
var G__32561 = null;
var G__32562 = (0);
var G__32563 = (0);
seq__32039 = G__32560;
chunk__32040 = G__32561;
count__32041 = G__32562;
i__32042 = G__32563;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32047,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32051 = k32047;
var G__32051__$1 = (((G__32051 instanceof cljs.core.Keyword))?G__32051.fqn:null);
switch (G__32051__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32047,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32052){
var vec__32053 = p__32052;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32053,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32053,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32046){
var self__ = this;
var G__32046__$1 = this;
return (new cljs.core.RecordIter((0),G__32046__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32048,other32049){
var self__ = this;
var this32048__$1 = this;
return (((!((other32049 == null)))) && ((this32048__$1.constructor === other32049.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32048__$1.x,other32049.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32048__$1.y,other32049.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32048__$1.__extmap,other32049.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32046){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__32063 = cljs.core.keyword_identical_QMARK_;
var expr__32064 = k__4423__auto__;
if(cljs.core.truth_((pred__32063.cljs$core$IFn$_invoke$arity$2 ? pred__32063.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32064) : pred__32063.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32064)))){
return (new shadow.dom.Coordinate(G__32046,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32063.cljs$core$IFn$_invoke$arity$2 ? pred__32063.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32064) : pred__32063.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32064)))){
return (new shadow.dom.Coordinate(self__.x,G__32046,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32046),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32046){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32046,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32050){
var extmap__4454__auto__ = (function (){var G__32073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32050,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32073);
} else {
return G__32073;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32050),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32050),null,cljs.core.not_empty(extmap__4454__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32079,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32090 = k32079;
var G__32090__$1 = (((G__32090 instanceof cljs.core.Keyword))?G__32090.fqn:null);
switch (G__32090__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32079,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32091){
var vec__32092 = p__32091;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32078){
var self__ = this;
var G__32078__$1 = this;
return (new cljs.core.RecordIter((0),G__32078__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32080,other32081){
var self__ = this;
var this32080__$1 = this;
return (((!((other32081 == null)))) && ((this32080__$1.constructor === other32081.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32080__$1.w,other32081.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32080__$1.h,other32081.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32080__$1.__extmap,other32081.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32078){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__32105 = cljs.core.keyword_identical_QMARK_;
var expr__32106 = k__4423__auto__;
if(cljs.core.truth_((pred__32105.cljs$core$IFn$_invoke$arity$2 ? pred__32105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32106) : pred__32105.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32106)))){
return (new shadow.dom.Size(G__32078,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32105.cljs$core$IFn$_invoke$arity$2 ? pred__32105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32106) : pred__32105.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32106)))){
return (new shadow.dom.Size(self__.w,G__32078,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32078),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32078){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32078,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32083){
var extmap__4454__auto__ = (function (){var G__32121 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32083,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32083)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32121);
} else {
return G__32121;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32083),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32083),null,cljs.core.not_empty(extmap__4454__auto__),null));
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
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__32601 = (i + (1));
var G__32602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__32601;
ret = G__32602;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32138){
var vec__32139 = p__32138;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32139,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32145 = arguments.length;
switch (G__32145) {
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
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__32608 = ps;
var G__32609 = (i + (1));
el__$1 = G__32608;
i = G__32609;
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
var vec__32154 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32154,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32154,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32154,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32157_32617 = cljs.core.seq(props);
var chunk__32158_32618 = null;
var count__32159_32619 = (0);
var i__32160_32620 = (0);
while(true){
if((i__32160_32620 < count__32159_32619)){
var vec__32170_32621 = chunk__32158_32618.cljs$core$IIndexed$_nth$arity$2(null,i__32160_32620);
var k_32622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32170_32621,(0),null);
var v_32623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32170_32621,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_32622);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32622),v_32623);


var G__32625 = seq__32157_32617;
var G__32626 = chunk__32158_32618;
var G__32627 = count__32159_32619;
var G__32628 = (i__32160_32620 + (1));
seq__32157_32617 = G__32625;
chunk__32158_32618 = G__32626;
count__32159_32619 = G__32627;
i__32160_32620 = G__32628;
continue;
} else {
var temp__5735__auto___32629 = cljs.core.seq(seq__32157_32617);
if(temp__5735__auto___32629){
var seq__32157_32630__$1 = temp__5735__auto___32629;
if(cljs.core.chunked_seq_QMARK_(seq__32157_32630__$1)){
var c__4591__auto___32631 = cljs.core.chunk_first(seq__32157_32630__$1);
var G__32633 = cljs.core.chunk_rest(seq__32157_32630__$1);
var G__32634 = c__4591__auto___32631;
var G__32635 = cljs.core.count(c__4591__auto___32631);
var G__32636 = (0);
seq__32157_32617 = G__32633;
chunk__32158_32618 = G__32634;
count__32159_32619 = G__32635;
i__32160_32620 = G__32636;
continue;
} else {
var vec__32174_32637 = cljs.core.first(seq__32157_32630__$1);
var k_32638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32174_32637,(0),null);
var v_32639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32174_32637,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_32638);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32638),v_32639);


var G__32640 = cljs.core.next(seq__32157_32630__$1);
var G__32641 = null;
var G__32642 = (0);
var G__32643 = (0);
seq__32157_32617 = G__32640;
chunk__32158_32618 = G__32641;
count__32159_32619 = G__32642;
i__32160_32620 = G__32643;
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
var vec__32178 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32178,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32178,(1),null);
var seq__32181_32648 = cljs.core.seq(node_children);
var chunk__32183_32649 = null;
var count__32184_32650 = (0);
var i__32185_32651 = (0);
while(true){
if((i__32185_32651 < count__32184_32650)){
var child_struct_32652 = chunk__32183_32649.cljs$core$IIndexed$_nth$arity$2(null,i__32185_32651);
if((!((child_struct_32652 == null)))){
if(typeof child_struct_32652 === 'string'){
var text_32653 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32653),child_struct_32652].join(''));
} else {
var children_32654 = shadow.dom.svg_node(child_struct_32652);
if(cljs.core.seq_QMARK_(children_32654)){
var seq__32222_32655 = cljs.core.seq(children_32654);
var chunk__32224_32656 = null;
var count__32225_32657 = (0);
var i__32226_32658 = (0);
while(true){
if((i__32226_32658 < count__32225_32657)){
var child_32659 = chunk__32224_32656.cljs$core$IIndexed$_nth$arity$2(null,i__32226_32658);
if(cljs.core.truth_(child_32659)){
node.appendChild(child_32659);


var G__32660 = seq__32222_32655;
var G__32661 = chunk__32224_32656;
var G__32662 = count__32225_32657;
var G__32663 = (i__32226_32658 + (1));
seq__32222_32655 = G__32660;
chunk__32224_32656 = G__32661;
count__32225_32657 = G__32662;
i__32226_32658 = G__32663;
continue;
} else {
var G__32664 = seq__32222_32655;
var G__32665 = chunk__32224_32656;
var G__32666 = count__32225_32657;
var G__32667 = (i__32226_32658 + (1));
seq__32222_32655 = G__32664;
chunk__32224_32656 = G__32665;
count__32225_32657 = G__32666;
i__32226_32658 = G__32667;
continue;
}
} else {
var temp__5735__auto___32668 = cljs.core.seq(seq__32222_32655);
if(temp__5735__auto___32668){
var seq__32222_32669__$1 = temp__5735__auto___32668;
if(cljs.core.chunked_seq_QMARK_(seq__32222_32669__$1)){
var c__4591__auto___32670 = cljs.core.chunk_first(seq__32222_32669__$1);
var G__32671 = cljs.core.chunk_rest(seq__32222_32669__$1);
var G__32672 = c__4591__auto___32670;
var G__32673 = cljs.core.count(c__4591__auto___32670);
var G__32674 = (0);
seq__32222_32655 = G__32671;
chunk__32224_32656 = G__32672;
count__32225_32657 = G__32673;
i__32226_32658 = G__32674;
continue;
} else {
var child_32675 = cljs.core.first(seq__32222_32669__$1);
if(cljs.core.truth_(child_32675)){
node.appendChild(child_32675);


var G__32676 = cljs.core.next(seq__32222_32669__$1);
var G__32677 = null;
var G__32678 = (0);
var G__32679 = (0);
seq__32222_32655 = G__32676;
chunk__32224_32656 = G__32677;
count__32225_32657 = G__32678;
i__32226_32658 = G__32679;
continue;
} else {
var G__32680 = cljs.core.next(seq__32222_32669__$1);
var G__32681 = null;
var G__32682 = (0);
var G__32683 = (0);
seq__32222_32655 = G__32680;
chunk__32224_32656 = G__32681;
count__32225_32657 = G__32682;
i__32226_32658 = G__32683;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32654);
}
}


var G__32684 = seq__32181_32648;
var G__32685 = chunk__32183_32649;
var G__32686 = count__32184_32650;
var G__32687 = (i__32185_32651 + (1));
seq__32181_32648 = G__32684;
chunk__32183_32649 = G__32685;
count__32184_32650 = G__32686;
i__32185_32651 = G__32687;
continue;
} else {
var G__32688 = seq__32181_32648;
var G__32689 = chunk__32183_32649;
var G__32690 = count__32184_32650;
var G__32691 = (i__32185_32651 + (1));
seq__32181_32648 = G__32688;
chunk__32183_32649 = G__32689;
count__32184_32650 = G__32690;
i__32185_32651 = G__32691;
continue;
}
} else {
var temp__5735__auto___32692 = cljs.core.seq(seq__32181_32648);
if(temp__5735__auto___32692){
var seq__32181_32694__$1 = temp__5735__auto___32692;
if(cljs.core.chunked_seq_QMARK_(seq__32181_32694__$1)){
var c__4591__auto___32696 = cljs.core.chunk_first(seq__32181_32694__$1);
var G__32697 = cljs.core.chunk_rest(seq__32181_32694__$1);
var G__32698 = c__4591__auto___32696;
var G__32699 = cljs.core.count(c__4591__auto___32696);
var G__32700 = (0);
seq__32181_32648 = G__32697;
chunk__32183_32649 = G__32698;
count__32184_32650 = G__32699;
i__32185_32651 = G__32700;
continue;
} else {
var child_struct_32702 = cljs.core.first(seq__32181_32694__$1);
if((!((child_struct_32702 == null)))){
if(typeof child_struct_32702 === 'string'){
var text_32703 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32703),child_struct_32702].join(''));
} else {
var children_32704 = shadow.dom.svg_node(child_struct_32702);
if(cljs.core.seq_QMARK_(children_32704)){
var seq__32229_32706 = cljs.core.seq(children_32704);
var chunk__32231_32707 = null;
var count__32232_32708 = (0);
var i__32233_32709 = (0);
while(true){
if((i__32233_32709 < count__32232_32708)){
var child_32711 = chunk__32231_32707.cljs$core$IIndexed$_nth$arity$2(null,i__32233_32709);
if(cljs.core.truth_(child_32711)){
node.appendChild(child_32711);


var G__32712 = seq__32229_32706;
var G__32713 = chunk__32231_32707;
var G__32714 = count__32232_32708;
var G__32715 = (i__32233_32709 + (1));
seq__32229_32706 = G__32712;
chunk__32231_32707 = G__32713;
count__32232_32708 = G__32714;
i__32233_32709 = G__32715;
continue;
} else {
var G__32716 = seq__32229_32706;
var G__32717 = chunk__32231_32707;
var G__32718 = count__32232_32708;
var G__32719 = (i__32233_32709 + (1));
seq__32229_32706 = G__32716;
chunk__32231_32707 = G__32717;
count__32232_32708 = G__32718;
i__32233_32709 = G__32719;
continue;
}
} else {
var temp__5735__auto___32720__$1 = cljs.core.seq(seq__32229_32706);
if(temp__5735__auto___32720__$1){
var seq__32229_32721__$1 = temp__5735__auto___32720__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32229_32721__$1)){
var c__4591__auto___32722 = cljs.core.chunk_first(seq__32229_32721__$1);
var G__32723 = cljs.core.chunk_rest(seq__32229_32721__$1);
var G__32724 = c__4591__auto___32722;
var G__32725 = cljs.core.count(c__4591__auto___32722);
var G__32726 = (0);
seq__32229_32706 = G__32723;
chunk__32231_32707 = G__32724;
count__32232_32708 = G__32725;
i__32233_32709 = G__32726;
continue;
} else {
var child_32728 = cljs.core.first(seq__32229_32721__$1);
if(cljs.core.truth_(child_32728)){
node.appendChild(child_32728);


var G__32729 = cljs.core.next(seq__32229_32721__$1);
var G__32730 = null;
var G__32731 = (0);
var G__32732 = (0);
seq__32229_32706 = G__32729;
chunk__32231_32707 = G__32730;
count__32232_32708 = G__32731;
i__32233_32709 = G__32732;
continue;
} else {
var G__32733 = cljs.core.next(seq__32229_32721__$1);
var G__32734 = null;
var G__32735 = (0);
var G__32736 = (0);
seq__32229_32706 = G__32733;
chunk__32231_32707 = G__32734;
count__32232_32708 = G__32735;
i__32233_32709 = G__32736;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32704);
}
}


var G__32737 = cljs.core.next(seq__32181_32694__$1);
var G__32738 = null;
var G__32739 = (0);
var G__32740 = (0);
seq__32181_32648 = G__32737;
chunk__32183_32649 = G__32738;
count__32184_32650 = G__32739;
i__32185_32651 = G__32740;
continue;
} else {
var G__32741 = cljs.core.next(seq__32181_32694__$1);
var G__32742 = null;
var G__32743 = (0);
var G__32744 = (0);
seq__32181_32648 = G__32741;
chunk__32183_32649 = G__32742;
count__32184_32650 = G__32743;
i__32185_32651 = G__32744;
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
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
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

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32748 = arguments.length;
var i__4772__auto___32749 = (0);
while(true){
if((i__4772__auto___32749 < len__4771__auto___32748)){
args__4777__auto__.push((arguments[i__4772__auto___32749]));

var G__32750 = (i__4772__auto___32749 + (1));
i__4772__auto___32749 = G__32750;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32239){
var G__32240 = cljs.core.first(seq32239);
var seq32239__$1 = cljs.core.next(seq32239);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32240,seq32239__$1);
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
var G__32250 = arguments.length;
switch (G__32250) {
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

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__30267__auto___32754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_32262){
var state_val_32263 = (state_32262[(1)]);
if((state_val_32263 === (1))){
var state_32262__$1 = state_32262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32262__$1,(2),once_or_cleanup);
} else {
if((state_val_32263 === (2))){
var inst_32259 = (state_32262[(2)]);
var inst_32260 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32262__$1 = (function (){var statearr_32265 = state_32262;
(statearr_32265[(7)] = inst_32259);

return statearr_32265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32262__$1,inst_32260);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30236__auto__ = null;
var shadow$dom$state_machine__30236__auto____0 = (function (){
var statearr_32267 = [null,null,null,null,null,null,null,null];
(statearr_32267[(0)] = shadow$dom$state_machine__30236__auto__);

(statearr_32267[(1)] = (1));

return statearr_32267;
});
var shadow$dom$state_machine__30236__auto____1 = (function (state_32262){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_32262);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e32269){var ex__30239__auto__ = e32269;
var statearr_32270_32762 = state_32262;
(statearr_32270_32762[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_32262[(4)]))){
var statearr_32272_32763 = state_32262;
(statearr_32272_32763[(1)] = cljs.core.first((state_32262[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32764 = state_32262;
state_32262 = G__32764;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
shadow$dom$state_machine__30236__auto__ = function(state_32262){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30236__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30236__auto____1.call(this,state_32262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30236__auto____0;
shadow$dom$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30236__auto____1;
return shadow$dom$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_32273 = f__30268__auto__();
(statearr_32273[(6)] = c__30267__auto___32754);

return statearr_32273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
