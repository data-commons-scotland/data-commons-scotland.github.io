goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33331 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33331(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33342 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33342(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32267 = coll;
var G__32268 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32267,G__32268) : shadow.dom.lazy_native_coll_seq.call(null,G__32267,G__32268));
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
var G__32279 = arguments.length;
switch (G__32279) {
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
var G__32293 = arguments.length;
switch (G__32293) {
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
var G__32315 = arguments.length;
switch (G__32315) {
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
var G__32324 = arguments.length;
switch (G__32324) {
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
var G__32406 = arguments.length;
switch (G__32406) {
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
var G__32471 = arguments.length;
switch (G__32471) {
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
}catch (e32498){if((e32498 instanceof Object)){
var e = e32498;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32498;

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
var seq__32504 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32505 = null;
var count__32506 = (0);
var i__32507 = (0);
while(true){
if((i__32507 < count__32506)){
var el = chunk__32505.cljs$core$IIndexed$_nth$arity$2(null,i__32507);
var handler_33368__$1 = ((function (seq__32504,chunk__32505,count__32506,i__32507,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32504,chunk__32505,count__32506,i__32507,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33368__$1);


var G__33369 = seq__32504;
var G__33370 = chunk__32505;
var G__33371 = count__32506;
var G__33372 = (i__32507 + (1));
seq__32504 = G__33369;
chunk__32505 = G__33370;
count__32506 = G__33371;
i__32507 = G__33372;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32504);
if(temp__5735__auto__){
var seq__32504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32504__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32504__$1);
var G__33373 = cljs.core.chunk_rest(seq__32504__$1);
var G__33374 = c__4591__auto__;
var G__33375 = cljs.core.count(c__4591__auto__);
var G__33376 = (0);
seq__32504 = G__33373;
chunk__32505 = G__33374;
count__32506 = G__33375;
i__32507 = G__33376;
continue;
} else {
var el = cljs.core.first(seq__32504__$1);
var handler_33377__$1 = ((function (seq__32504,chunk__32505,count__32506,i__32507,el,seq__32504__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32504,chunk__32505,count__32506,i__32507,el,seq__32504__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33377__$1);


var G__33379 = cljs.core.next(seq__32504__$1);
var G__33380 = null;
var G__33381 = (0);
var G__33382 = (0);
seq__32504 = G__33379;
chunk__32505 = G__33380;
count__32506 = G__33381;
i__32507 = G__33382;
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
var G__32529 = arguments.length;
switch (G__32529) {
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
var seq__32542 = cljs.core.seq(events);
var chunk__32543 = null;
var count__32544 = (0);
var i__32545 = (0);
while(true){
if((i__32545 < count__32544)){
var vec__32558 = chunk__32543.cljs$core$IIndexed$_nth$arity$2(null,i__32545);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32558,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32558,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33396 = seq__32542;
var G__33397 = chunk__32543;
var G__33398 = count__32544;
var G__33399 = (i__32545 + (1));
seq__32542 = G__33396;
chunk__32543 = G__33397;
count__32544 = G__33398;
i__32545 = G__33399;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32542);
if(temp__5735__auto__){
var seq__32542__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32542__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32542__$1);
var G__33400 = cljs.core.chunk_rest(seq__32542__$1);
var G__33401 = c__4591__auto__;
var G__33402 = cljs.core.count(c__4591__auto__);
var G__33403 = (0);
seq__32542 = G__33400;
chunk__32543 = G__33401;
count__32544 = G__33402;
i__32545 = G__33403;
continue;
} else {
var vec__32566 = cljs.core.first(seq__32542__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33404 = cljs.core.next(seq__32542__$1);
var G__33405 = null;
var G__33406 = (0);
var G__33407 = (0);
seq__32542 = G__33404;
chunk__32543 = G__33405;
count__32544 = G__33406;
i__32545 = G__33407;
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
var seq__32574 = cljs.core.seq(styles);
var chunk__32575 = null;
var count__32576 = (0);
var i__32577 = (0);
while(true){
if((i__32577 < count__32576)){
var vec__32600 = chunk__32575.cljs$core$IIndexed$_nth$arity$2(null,i__32577);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32600,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33408 = seq__32574;
var G__33409 = chunk__32575;
var G__33410 = count__32576;
var G__33411 = (i__32577 + (1));
seq__32574 = G__33408;
chunk__32575 = G__33409;
count__32576 = G__33410;
i__32577 = G__33411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32574);
if(temp__5735__auto__){
var seq__32574__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32574__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32574__$1);
var G__33412 = cljs.core.chunk_rest(seq__32574__$1);
var G__33413 = c__4591__auto__;
var G__33414 = cljs.core.count(c__4591__auto__);
var G__33415 = (0);
seq__32574 = G__33412;
chunk__32575 = G__33413;
count__32576 = G__33414;
i__32577 = G__33415;
continue;
} else {
var vec__32608 = cljs.core.first(seq__32574__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32608,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33416 = cljs.core.next(seq__32574__$1);
var G__33417 = null;
var G__33418 = (0);
var G__33419 = (0);
seq__32574 = G__33416;
chunk__32575 = G__33417;
count__32576 = G__33418;
i__32577 = G__33419;
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
var G__32615_33420 = key;
var G__32615_33421__$1 = (((G__32615_33420 instanceof cljs.core.Keyword))?G__32615_33420.fqn:null);
switch (G__32615_33421__$1) {
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
var ks_33423 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_33423,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_33423,"aria-");
}
})())){
el.setAttribute(ks_33423,value);
} else {
(el[ks_33423] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32631){
var map__32632 = p__32631;
var map__32632__$1 = cljs.core.__destructure_map(map__32632);
var props = map__32632__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32632__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32633 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32637 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32637,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32637;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32654){
var vec__32659 = p__32654;
var seq__32660 = cljs.core.seq(vec__32659);
var first__32661 = cljs.core.first(seq__32660);
var seq__32660__$1 = cljs.core.next(seq__32660);
var nn = first__32661;
var first__32661__$1 = cljs.core.first(seq__32660__$1);
var seq__32660__$2 = cljs.core.next(seq__32660__$1);
var np = first__32661__$1;
var nc = seq__32660__$2;
var node = vec__32659;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32669 = nn;
var G__32670 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32669,G__32670) : create_fn.call(null,G__32669,G__32670));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32671 = nn;
var G__32672 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32671,G__32672) : create_fn.call(null,G__32671,G__32672));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32678 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32678,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32678,(1),null);
var seq__32682_33425 = cljs.core.seq(node_children);
var chunk__32683_33426 = null;
var count__32684_33427 = (0);
var i__32685_33428 = (0);
while(true){
if((i__32685_33428 < count__32684_33427)){
var child_struct_33429 = chunk__32683_33426.cljs$core$IIndexed$_nth$arity$2(null,i__32685_33428);
var children_33430 = shadow.dom.dom_node(child_struct_33429);
if(cljs.core.seq_QMARK_(children_33430)){
var seq__32714_33431 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33430));
var chunk__32716_33432 = null;
var count__32717_33433 = (0);
var i__32718_33434 = (0);
while(true){
if((i__32718_33434 < count__32717_33433)){
var child_33436 = chunk__32716_33432.cljs$core$IIndexed$_nth$arity$2(null,i__32718_33434);
if(cljs.core.truth_(child_33436)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33436);


var G__33437 = seq__32714_33431;
var G__33438 = chunk__32716_33432;
var G__33439 = count__32717_33433;
var G__33440 = (i__32718_33434 + (1));
seq__32714_33431 = G__33437;
chunk__32716_33432 = G__33438;
count__32717_33433 = G__33439;
i__32718_33434 = G__33440;
continue;
} else {
var G__33441 = seq__32714_33431;
var G__33442 = chunk__32716_33432;
var G__33443 = count__32717_33433;
var G__33444 = (i__32718_33434 + (1));
seq__32714_33431 = G__33441;
chunk__32716_33432 = G__33442;
count__32717_33433 = G__33443;
i__32718_33434 = G__33444;
continue;
}
} else {
var temp__5735__auto___33445 = cljs.core.seq(seq__32714_33431);
if(temp__5735__auto___33445){
var seq__32714_33446__$1 = temp__5735__auto___33445;
if(cljs.core.chunked_seq_QMARK_(seq__32714_33446__$1)){
var c__4591__auto___33447 = cljs.core.chunk_first(seq__32714_33446__$1);
var G__33448 = cljs.core.chunk_rest(seq__32714_33446__$1);
var G__33449 = c__4591__auto___33447;
var G__33450 = cljs.core.count(c__4591__auto___33447);
var G__33451 = (0);
seq__32714_33431 = G__33448;
chunk__32716_33432 = G__33449;
count__32717_33433 = G__33450;
i__32718_33434 = G__33451;
continue;
} else {
var child_33452 = cljs.core.first(seq__32714_33446__$1);
if(cljs.core.truth_(child_33452)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33452);


var G__33453 = cljs.core.next(seq__32714_33446__$1);
var G__33454 = null;
var G__33455 = (0);
var G__33456 = (0);
seq__32714_33431 = G__33453;
chunk__32716_33432 = G__33454;
count__32717_33433 = G__33455;
i__32718_33434 = G__33456;
continue;
} else {
var G__33457 = cljs.core.next(seq__32714_33446__$1);
var G__33458 = null;
var G__33459 = (0);
var G__33460 = (0);
seq__32714_33431 = G__33457;
chunk__32716_33432 = G__33458;
count__32717_33433 = G__33459;
i__32718_33434 = G__33460;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33430);
}


var G__33461 = seq__32682_33425;
var G__33462 = chunk__32683_33426;
var G__33463 = count__32684_33427;
var G__33464 = (i__32685_33428 + (1));
seq__32682_33425 = G__33461;
chunk__32683_33426 = G__33462;
count__32684_33427 = G__33463;
i__32685_33428 = G__33464;
continue;
} else {
var temp__5735__auto___33465 = cljs.core.seq(seq__32682_33425);
if(temp__5735__auto___33465){
var seq__32682_33466__$1 = temp__5735__auto___33465;
if(cljs.core.chunked_seq_QMARK_(seq__32682_33466__$1)){
var c__4591__auto___33467 = cljs.core.chunk_first(seq__32682_33466__$1);
var G__33468 = cljs.core.chunk_rest(seq__32682_33466__$1);
var G__33469 = c__4591__auto___33467;
var G__33470 = cljs.core.count(c__4591__auto___33467);
var G__33471 = (0);
seq__32682_33425 = G__33468;
chunk__32683_33426 = G__33469;
count__32684_33427 = G__33470;
i__32685_33428 = G__33471;
continue;
} else {
var child_struct_33472 = cljs.core.first(seq__32682_33466__$1);
var children_33474 = shadow.dom.dom_node(child_struct_33472);
if(cljs.core.seq_QMARK_(children_33474)){
var seq__32726_33475 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33474));
var chunk__32728_33476 = null;
var count__32729_33477 = (0);
var i__32730_33478 = (0);
while(true){
if((i__32730_33478 < count__32729_33477)){
var child_33479 = chunk__32728_33476.cljs$core$IIndexed$_nth$arity$2(null,i__32730_33478);
if(cljs.core.truth_(child_33479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33479);


var G__33480 = seq__32726_33475;
var G__33481 = chunk__32728_33476;
var G__33482 = count__32729_33477;
var G__33483 = (i__32730_33478 + (1));
seq__32726_33475 = G__33480;
chunk__32728_33476 = G__33481;
count__32729_33477 = G__33482;
i__32730_33478 = G__33483;
continue;
} else {
var G__33484 = seq__32726_33475;
var G__33485 = chunk__32728_33476;
var G__33486 = count__32729_33477;
var G__33487 = (i__32730_33478 + (1));
seq__32726_33475 = G__33484;
chunk__32728_33476 = G__33485;
count__32729_33477 = G__33486;
i__32730_33478 = G__33487;
continue;
}
} else {
var temp__5735__auto___33488__$1 = cljs.core.seq(seq__32726_33475);
if(temp__5735__auto___33488__$1){
var seq__32726_33489__$1 = temp__5735__auto___33488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32726_33489__$1)){
var c__4591__auto___33490 = cljs.core.chunk_first(seq__32726_33489__$1);
var G__33491 = cljs.core.chunk_rest(seq__32726_33489__$1);
var G__33492 = c__4591__auto___33490;
var G__33493 = cljs.core.count(c__4591__auto___33490);
var G__33494 = (0);
seq__32726_33475 = G__33491;
chunk__32728_33476 = G__33492;
count__32729_33477 = G__33493;
i__32730_33478 = G__33494;
continue;
} else {
var child_33495 = cljs.core.first(seq__32726_33489__$1);
if(cljs.core.truth_(child_33495)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33495);


var G__33496 = cljs.core.next(seq__32726_33489__$1);
var G__33497 = null;
var G__33498 = (0);
var G__33499 = (0);
seq__32726_33475 = G__33496;
chunk__32728_33476 = G__33497;
count__32729_33477 = G__33498;
i__32730_33478 = G__33499;
continue;
} else {
var G__33500 = cljs.core.next(seq__32726_33489__$1);
var G__33501 = null;
var G__33502 = (0);
var G__33503 = (0);
seq__32726_33475 = G__33500;
chunk__32728_33476 = G__33501;
count__32729_33477 = G__33502;
i__32730_33478 = G__33503;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33474);
}


var G__33504 = cljs.core.next(seq__32682_33466__$1);
var G__33505 = null;
var G__33506 = (0);
var G__33507 = (0);
seq__32682_33425 = G__33504;
chunk__32683_33426 = G__33505;
count__32684_33427 = G__33506;
i__32685_33428 = G__33507;
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
var seq__32787 = cljs.core.seq(node);
var chunk__32788 = null;
var count__32789 = (0);
var i__32790 = (0);
while(true){
if((i__32790 < count__32789)){
var n = chunk__32788.cljs$core$IIndexed$_nth$arity$2(null,i__32790);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33509 = seq__32787;
var G__33510 = chunk__32788;
var G__33511 = count__32789;
var G__33512 = (i__32790 + (1));
seq__32787 = G__33509;
chunk__32788 = G__33510;
count__32789 = G__33511;
i__32790 = G__33512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32787);
if(temp__5735__auto__){
var seq__32787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32787__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32787__$1);
var G__33513 = cljs.core.chunk_rest(seq__32787__$1);
var G__33514 = c__4591__auto__;
var G__33515 = cljs.core.count(c__4591__auto__);
var G__33516 = (0);
seq__32787 = G__33513;
chunk__32788 = G__33514;
count__32789 = G__33515;
i__32790 = G__33516;
continue;
} else {
var n = cljs.core.first(seq__32787__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33517 = cljs.core.next(seq__32787__$1);
var G__33518 = null;
var G__33519 = (0);
var G__33520 = (0);
seq__32787 = G__33517;
chunk__32788 = G__33518;
count__32789 = G__33519;
i__32790 = G__33520;
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
var G__32793 = arguments.length;
switch (G__32793) {
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
var G__32796 = arguments.length;
switch (G__32796) {
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
var G__32799 = arguments.length;
switch (G__32799) {
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
var len__4771__auto___33525 = arguments.length;
var i__4772__auto___33526 = (0);
while(true){
if((i__4772__auto___33526 < len__4771__auto___33525)){
args__4777__auto__.push((arguments[i__4772__auto___33526]));

var G__33527 = (i__4772__auto___33526 + (1));
i__4772__auto___33526 = G__33527;
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
var seq__32802_33528 = cljs.core.seq(nodes);
var chunk__32803_33529 = null;
var count__32804_33530 = (0);
var i__32805_33531 = (0);
while(true){
if((i__32805_33531 < count__32804_33530)){
var node_33532 = chunk__32803_33529.cljs$core$IIndexed$_nth$arity$2(null,i__32805_33531);
fragment.appendChild(shadow.dom._to_dom(node_33532));


var G__33533 = seq__32802_33528;
var G__33534 = chunk__32803_33529;
var G__33535 = count__32804_33530;
var G__33536 = (i__32805_33531 + (1));
seq__32802_33528 = G__33533;
chunk__32803_33529 = G__33534;
count__32804_33530 = G__33535;
i__32805_33531 = G__33536;
continue;
} else {
var temp__5735__auto___33537 = cljs.core.seq(seq__32802_33528);
if(temp__5735__auto___33537){
var seq__32802_33538__$1 = temp__5735__auto___33537;
if(cljs.core.chunked_seq_QMARK_(seq__32802_33538__$1)){
var c__4591__auto___33539 = cljs.core.chunk_first(seq__32802_33538__$1);
var G__33540 = cljs.core.chunk_rest(seq__32802_33538__$1);
var G__33541 = c__4591__auto___33539;
var G__33542 = cljs.core.count(c__4591__auto___33539);
var G__33543 = (0);
seq__32802_33528 = G__33540;
chunk__32803_33529 = G__33541;
count__32804_33530 = G__33542;
i__32805_33531 = G__33543;
continue;
} else {
var node_33544 = cljs.core.first(seq__32802_33538__$1);
fragment.appendChild(shadow.dom._to_dom(node_33544));


var G__33545 = cljs.core.next(seq__32802_33538__$1);
var G__33546 = null;
var G__33547 = (0);
var G__33548 = (0);
seq__32802_33528 = G__33545;
chunk__32803_33529 = G__33546;
count__32804_33530 = G__33547;
i__32805_33531 = G__33548;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32801){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32801));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32808_33549 = cljs.core.seq(scripts);
var chunk__32809_33550 = null;
var count__32810_33551 = (0);
var i__32811_33552 = (0);
while(true){
if((i__32811_33552 < count__32810_33551)){
var vec__32820_33553 = chunk__32809_33550.cljs$core$IIndexed$_nth$arity$2(null,i__32811_33552);
var script_tag_33554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32820_33553,(0),null);
var script_body_33555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32820_33553,(1),null);
eval(script_body_33555);


var G__33557 = seq__32808_33549;
var G__33558 = chunk__32809_33550;
var G__33559 = count__32810_33551;
var G__33560 = (i__32811_33552 + (1));
seq__32808_33549 = G__33557;
chunk__32809_33550 = G__33558;
count__32810_33551 = G__33559;
i__32811_33552 = G__33560;
continue;
} else {
var temp__5735__auto___33561 = cljs.core.seq(seq__32808_33549);
if(temp__5735__auto___33561){
var seq__32808_33562__$1 = temp__5735__auto___33561;
if(cljs.core.chunked_seq_QMARK_(seq__32808_33562__$1)){
var c__4591__auto___33563 = cljs.core.chunk_first(seq__32808_33562__$1);
var G__33564 = cljs.core.chunk_rest(seq__32808_33562__$1);
var G__33565 = c__4591__auto___33563;
var G__33566 = cljs.core.count(c__4591__auto___33563);
var G__33567 = (0);
seq__32808_33549 = G__33564;
chunk__32809_33550 = G__33565;
count__32810_33551 = G__33566;
i__32811_33552 = G__33567;
continue;
} else {
var vec__32823_33568 = cljs.core.first(seq__32808_33562__$1);
var script_tag_33569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32823_33568,(0),null);
var script_body_33570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32823_33568,(1),null);
eval(script_body_33570);


var G__33572 = cljs.core.next(seq__32808_33562__$1);
var G__33573 = null;
var G__33574 = (0);
var G__33575 = (0);
seq__32808_33549 = G__33572;
chunk__32809_33550 = G__33573;
count__32810_33551 = G__33574;
i__32811_33552 = G__33575;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32827){
var vec__32829 = p__32827;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32829,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32829,(1),null);
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
var G__32835 = arguments.length;
switch (G__32835) {
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
var seq__32853 = cljs.core.seq(style_keys);
var chunk__32854 = null;
var count__32855 = (0);
var i__32856 = (0);
while(true){
if((i__32856 < count__32855)){
var it = chunk__32854.cljs$core$IIndexed$_nth$arity$2(null,i__32856);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33578 = seq__32853;
var G__33579 = chunk__32854;
var G__33580 = count__32855;
var G__33581 = (i__32856 + (1));
seq__32853 = G__33578;
chunk__32854 = G__33579;
count__32855 = G__33580;
i__32856 = G__33581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32853);
if(temp__5735__auto__){
var seq__32853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32853__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32853__$1);
var G__33582 = cljs.core.chunk_rest(seq__32853__$1);
var G__33583 = c__4591__auto__;
var G__33584 = cljs.core.count(c__4591__auto__);
var G__33585 = (0);
seq__32853 = G__33582;
chunk__32854 = G__33583;
count__32855 = G__33584;
i__32856 = G__33585;
continue;
} else {
var it = cljs.core.first(seq__32853__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33586 = cljs.core.next(seq__32853__$1);
var G__33587 = null;
var G__33588 = (0);
var G__33589 = (0);
seq__32853 = G__33586;
chunk__32854 = G__33587;
count__32855 = G__33588;
i__32856 = G__33589;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32872,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32882 = k32872;
var G__32882__$1 = (((G__32882 instanceof cljs.core.Keyword))?G__32882.fqn:null);
switch (G__32882__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32872,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32983){
var vec__32987 = p__32983;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32987,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32987,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32871){
var self__ = this;
var G__32871__$1 = this;
return (new cljs.core.RecordIter((0),G__32871__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32873,other32874){
var self__ = this;
var this32873__$1 = this;
return (((!((other32874 == null)))) && ((this32873__$1.constructor === other32874.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32873__$1.x,other32874.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32873__$1.y,other32874.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32873__$1.__extmap,other32874.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32871){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__33013 = cljs.core.keyword_identical_QMARK_;
var expr__33014 = k__4423__auto__;
if(cljs.core.truth_((pred__33013.cljs$core$IFn$_invoke$arity$2 ? pred__33013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33014) : pred__33013.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33014)))){
return (new shadow.dom.Coordinate(G__32871,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33013.cljs$core$IFn$_invoke$arity$2 ? pred__33013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33014) : pred__33013.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33014)))){
return (new shadow.dom.Coordinate(self__.x,G__32871,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32871),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32871){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32871,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32876){
var extmap__4454__auto__ = (function (){var G__33048 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32876,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33048);
} else {
return G__33048;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32876),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32876),null,cljs.core.not_empty(extmap__4454__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k33069,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__33099 = k33069;
var G__33099__$1 = (((G__33099 instanceof cljs.core.Keyword))?G__33099.fqn:null);
switch (G__33099__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33069,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__33103){
var vec__33105 = p__33103;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33105,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33105,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33068){
var self__ = this;
var G__33068__$1 = this;
return (new cljs.core.RecordIter((0),G__33068__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33070,other33071){
var self__ = this;
var this33070__$1 = this;
return (((!((other33071 == null)))) && ((this33070__$1.constructor === other33071.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33070__$1.w,other33071.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33070__$1.h,other33071.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33070__$1.__extmap,other33071.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__33068){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__33125 = cljs.core.keyword_identical_QMARK_;
var expr__33126 = k__4423__auto__;
if(cljs.core.truth_((pred__33125.cljs$core$IFn$_invoke$arity$2 ? pred__33125.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33126) : pred__33125.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33126)))){
return (new shadow.dom.Size(G__33068,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33125.cljs$core$IFn$_invoke$arity$2 ? pred__33125.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33126) : pred__33125.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33126)))){
return (new shadow.dom.Size(self__.w,G__33068,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__33068),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__33068){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33068,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33083){
var extmap__4454__auto__ = (function (){var G__33129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33083,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33083)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33129);
} else {
return G__33129;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33083),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33083),null,cljs.core.not_empty(extmap__4454__auto__),null));
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
var G__33609 = (i + (1));
var G__33610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33609;
ret = G__33610;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33162){
var vec__33163 = p__33162;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33167 = arguments.length;
switch (G__33167) {
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
var G__33624 = ps;
var G__33625 = (i + (1));
el__$1 = G__33624;
i = G__33625;
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
var vec__33173 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33176_33636 = cljs.core.seq(props);
var chunk__33177_33637 = null;
var count__33178_33638 = (0);
var i__33179_33639 = (0);
while(true){
if((i__33179_33639 < count__33178_33638)){
var vec__33187_33642 = chunk__33177_33637.cljs$core$IIndexed$_nth$arity$2(null,i__33179_33639);
var k_33643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187_33642,(0),null);
var v_33644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187_33642,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33643);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33643),v_33644);


var G__33645 = seq__33176_33636;
var G__33646 = chunk__33177_33637;
var G__33647 = count__33178_33638;
var G__33648 = (i__33179_33639 + (1));
seq__33176_33636 = G__33645;
chunk__33177_33637 = G__33646;
count__33178_33638 = G__33647;
i__33179_33639 = G__33648;
continue;
} else {
var temp__5735__auto___33649 = cljs.core.seq(seq__33176_33636);
if(temp__5735__auto___33649){
var seq__33176_33650__$1 = temp__5735__auto___33649;
if(cljs.core.chunked_seq_QMARK_(seq__33176_33650__$1)){
var c__4591__auto___33651 = cljs.core.chunk_first(seq__33176_33650__$1);
var G__33652 = cljs.core.chunk_rest(seq__33176_33650__$1);
var G__33653 = c__4591__auto___33651;
var G__33654 = cljs.core.count(c__4591__auto___33651);
var G__33655 = (0);
seq__33176_33636 = G__33652;
chunk__33177_33637 = G__33653;
count__33178_33638 = G__33654;
i__33179_33639 = G__33655;
continue;
} else {
var vec__33193_33656 = cljs.core.first(seq__33176_33650__$1);
var k_33657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33193_33656,(0),null);
var v_33658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33193_33656,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33657);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33657),v_33658);


var G__33661 = cljs.core.next(seq__33176_33650__$1);
var G__33662 = null;
var G__33663 = (0);
var G__33664 = (0);
seq__33176_33636 = G__33661;
chunk__33177_33637 = G__33662;
count__33178_33638 = G__33663;
i__33179_33639 = G__33664;
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
var vec__33201 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(1),null);
var seq__33204_33666 = cljs.core.seq(node_children);
var chunk__33206_33667 = null;
var count__33207_33668 = (0);
var i__33208_33669 = (0);
while(true){
if((i__33208_33669 < count__33207_33668)){
var child_struct_33670 = chunk__33206_33667.cljs$core$IIndexed$_nth$arity$2(null,i__33208_33669);
if((!((child_struct_33670 == null)))){
if(typeof child_struct_33670 === 'string'){
var text_33671 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33671),child_struct_33670].join(''));
} else {
var children_33673 = shadow.dom.svg_node(child_struct_33670);
if(cljs.core.seq_QMARK_(children_33673)){
var seq__33262_33674 = cljs.core.seq(children_33673);
var chunk__33264_33675 = null;
var count__33265_33676 = (0);
var i__33266_33677 = (0);
while(true){
if((i__33266_33677 < count__33265_33676)){
var child_33678 = chunk__33264_33675.cljs$core$IIndexed$_nth$arity$2(null,i__33266_33677);
if(cljs.core.truth_(child_33678)){
node.appendChild(child_33678);


var G__33679 = seq__33262_33674;
var G__33680 = chunk__33264_33675;
var G__33681 = count__33265_33676;
var G__33682 = (i__33266_33677 + (1));
seq__33262_33674 = G__33679;
chunk__33264_33675 = G__33680;
count__33265_33676 = G__33681;
i__33266_33677 = G__33682;
continue;
} else {
var G__33683 = seq__33262_33674;
var G__33684 = chunk__33264_33675;
var G__33685 = count__33265_33676;
var G__33686 = (i__33266_33677 + (1));
seq__33262_33674 = G__33683;
chunk__33264_33675 = G__33684;
count__33265_33676 = G__33685;
i__33266_33677 = G__33686;
continue;
}
} else {
var temp__5735__auto___33687 = cljs.core.seq(seq__33262_33674);
if(temp__5735__auto___33687){
var seq__33262_33688__$1 = temp__5735__auto___33687;
if(cljs.core.chunked_seq_QMARK_(seq__33262_33688__$1)){
var c__4591__auto___33689 = cljs.core.chunk_first(seq__33262_33688__$1);
var G__33690 = cljs.core.chunk_rest(seq__33262_33688__$1);
var G__33691 = c__4591__auto___33689;
var G__33692 = cljs.core.count(c__4591__auto___33689);
var G__33693 = (0);
seq__33262_33674 = G__33690;
chunk__33264_33675 = G__33691;
count__33265_33676 = G__33692;
i__33266_33677 = G__33693;
continue;
} else {
var child_33694 = cljs.core.first(seq__33262_33688__$1);
if(cljs.core.truth_(child_33694)){
node.appendChild(child_33694);


var G__33695 = cljs.core.next(seq__33262_33688__$1);
var G__33696 = null;
var G__33697 = (0);
var G__33698 = (0);
seq__33262_33674 = G__33695;
chunk__33264_33675 = G__33696;
count__33265_33676 = G__33697;
i__33266_33677 = G__33698;
continue;
} else {
var G__33699 = cljs.core.next(seq__33262_33688__$1);
var G__33700 = null;
var G__33701 = (0);
var G__33702 = (0);
seq__33262_33674 = G__33699;
chunk__33264_33675 = G__33700;
count__33265_33676 = G__33701;
i__33266_33677 = G__33702;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33673);
}
}


var G__33703 = seq__33204_33666;
var G__33704 = chunk__33206_33667;
var G__33705 = count__33207_33668;
var G__33706 = (i__33208_33669 + (1));
seq__33204_33666 = G__33703;
chunk__33206_33667 = G__33704;
count__33207_33668 = G__33705;
i__33208_33669 = G__33706;
continue;
} else {
var G__33707 = seq__33204_33666;
var G__33708 = chunk__33206_33667;
var G__33709 = count__33207_33668;
var G__33710 = (i__33208_33669 + (1));
seq__33204_33666 = G__33707;
chunk__33206_33667 = G__33708;
count__33207_33668 = G__33709;
i__33208_33669 = G__33710;
continue;
}
} else {
var temp__5735__auto___33712 = cljs.core.seq(seq__33204_33666);
if(temp__5735__auto___33712){
var seq__33204_33713__$1 = temp__5735__auto___33712;
if(cljs.core.chunked_seq_QMARK_(seq__33204_33713__$1)){
var c__4591__auto___33714 = cljs.core.chunk_first(seq__33204_33713__$1);
var G__33715 = cljs.core.chunk_rest(seq__33204_33713__$1);
var G__33716 = c__4591__auto___33714;
var G__33717 = cljs.core.count(c__4591__auto___33714);
var G__33718 = (0);
seq__33204_33666 = G__33715;
chunk__33206_33667 = G__33716;
count__33207_33668 = G__33717;
i__33208_33669 = G__33718;
continue;
} else {
var child_struct_33719 = cljs.core.first(seq__33204_33713__$1);
if((!((child_struct_33719 == null)))){
if(typeof child_struct_33719 === 'string'){
var text_33720 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33720),child_struct_33719].join(''));
} else {
var children_33721 = shadow.dom.svg_node(child_struct_33719);
if(cljs.core.seq_QMARK_(children_33721)){
var seq__33271_33722 = cljs.core.seq(children_33721);
var chunk__33273_33723 = null;
var count__33274_33724 = (0);
var i__33275_33725 = (0);
while(true){
if((i__33275_33725 < count__33274_33724)){
var child_33726 = chunk__33273_33723.cljs$core$IIndexed$_nth$arity$2(null,i__33275_33725);
if(cljs.core.truth_(child_33726)){
node.appendChild(child_33726);


var G__33727 = seq__33271_33722;
var G__33728 = chunk__33273_33723;
var G__33729 = count__33274_33724;
var G__33730 = (i__33275_33725 + (1));
seq__33271_33722 = G__33727;
chunk__33273_33723 = G__33728;
count__33274_33724 = G__33729;
i__33275_33725 = G__33730;
continue;
} else {
var G__33731 = seq__33271_33722;
var G__33732 = chunk__33273_33723;
var G__33733 = count__33274_33724;
var G__33734 = (i__33275_33725 + (1));
seq__33271_33722 = G__33731;
chunk__33273_33723 = G__33732;
count__33274_33724 = G__33733;
i__33275_33725 = G__33734;
continue;
}
} else {
var temp__5735__auto___33735__$1 = cljs.core.seq(seq__33271_33722);
if(temp__5735__auto___33735__$1){
var seq__33271_33736__$1 = temp__5735__auto___33735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33271_33736__$1)){
var c__4591__auto___33737 = cljs.core.chunk_first(seq__33271_33736__$1);
var G__33738 = cljs.core.chunk_rest(seq__33271_33736__$1);
var G__33739 = c__4591__auto___33737;
var G__33740 = cljs.core.count(c__4591__auto___33737);
var G__33741 = (0);
seq__33271_33722 = G__33738;
chunk__33273_33723 = G__33739;
count__33274_33724 = G__33740;
i__33275_33725 = G__33741;
continue;
} else {
var child_33742 = cljs.core.first(seq__33271_33736__$1);
if(cljs.core.truth_(child_33742)){
node.appendChild(child_33742);


var G__33743 = cljs.core.next(seq__33271_33736__$1);
var G__33744 = null;
var G__33745 = (0);
var G__33746 = (0);
seq__33271_33722 = G__33743;
chunk__33273_33723 = G__33744;
count__33274_33724 = G__33745;
i__33275_33725 = G__33746;
continue;
} else {
var G__33747 = cljs.core.next(seq__33271_33736__$1);
var G__33748 = null;
var G__33749 = (0);
var G__33750 = (0);
seq__33271_33722 = G__33747;
chunk__33273_33723 = G__33748;
count__33274_33724 = G__33749;
i__33275_33725 = G__33750;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33721);
}
}


var G__33751 = cljs.core.next(seq__33204_33713__$1);
var G__33752 = null;
var G__33753 = (0);
var G__33754 = (0);
seq__33204_33666 = G__33751;
chunk__33206_33667 = G__33752;
count__33207_33668 = G__33753;
i__33208_33669 = G__33754;
continue;
} else {
var G__33755 = cljs.core.next(seq__33204_33713__$1);
var G__33756 = null;
var G__33757 = (0);
var G__33758 = (0);
seq__33204_33666 = G__33755;
chunk__33206_33667 = G__33756;
count__33207_33668 = G__33757;
i__33208_33669 = G__33758;
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
var len__4771__auto___33759 = arguments.length;
var i__4772__auto___33760 = (0);
while(true){
if((i__4772__auto___33760 < len__4771__auto___33759)){
args__4777__auto__.push((arguments[i__4772__auto___33760]));

var G__33761 = (i__4772__auto___33760 + (1));
i__4772__auto___33760 = G__33761;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33280){
var G__33281 = cljs.core.first(seq33280);
var seq33280__$1 = cljs.core.next(seq33280);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33281,seq33280__$1);
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
var G__33283 = arguments.length;
switch (G__33283) {
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
var c__29041__auto___33763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_33299){
var state_val_33300 = (state_33299[(1)]);
if((state_val_33300 === (1))){
var state_33299__$1 = state_33299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33299__$1,(2),once_or_cleanup);
} else {
if((state_val_33300 === (2))){
var inst_33296 = (state_33299[(2)]);
var inst_33297 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33299__$1 = (function (){var statearr_33307 = state_33299;
(statearr_33307[(7)] = inst_33296);

return statearr_33307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33299__$1,inst_33297);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28972__auto__ = null;
var shadow$dom$state_machine__28972__auto____0 = (function (){
var statearr_33309 = [null,null,null,null,null,null,null,null];
(statearr_33309[(0)] = shadow$dom$state_machine__28972__auto__);

(statearr_33309[(1)] = (1));

return statearr_33309;
});
var shadow$dom$state_machine__28972__auto____1 = (function (state_33299){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_33299);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e33311){var ex__28975__auto__ = e33311;
var statearr_33312_33764 = state_33299;
(statearr_33312_33764[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_33299[(4)]))){
var statearr_33313_33765 = state_33299;
(statearr_33313_33765[(1)] = cljs.core.first((state_33299[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33766 = state_33299;
state_33299 = G__33766;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
shadow$dom$state_machine__28972__auto__ = function(state_33299){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28972__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28972__auto____1.call(this,state_33299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28972__auto____0;
shadow$dom$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28972__auto____1;
return shadow$dom$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_33314 = f__29042__auto__();
(statearr_33314[(6)] = c__29041__auto___33763);

return statearr_33314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
