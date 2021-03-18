goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29562 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29562(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29564 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29564(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29033 = coll;
var G__29034 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29033,G__29034) : shadow.dom.lazy_native_coll_seq.call(null,G__29033,G__29034));
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
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
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
var G__29040 = arguments.length;
switch (G__29040) {
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
var G__29042 = arguments.length;
switch (G__29042) {
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
var G__29045 = arguments.length;
switch (G__29045) {
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
var G__29050 = arguments.length;
switch (G__29050) {
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
var G__29054 = arguments.length;
switch (G__29054) {
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
var G__29062 = arguments.length;
switch (G__29062) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e29069){if((e29069 instanceof Object)){
var e = e29069;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29069;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29070 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29071 = null;
var count__29072 = (0);
var i__29073 = (0);
while(true){
if((i__29073 < count__29072)){
var el = chunk__29071.cljs$core$IIndexed$_nth$arity$2(null,i__29073);
var handler_29584__$1 = ((function (seq__29070,chunk__29071,count__29072,i__29073,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29070,chunk__29071,count__29072,i__29073,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29584__$1);


var G__29590 = seq__29070;
var G__29591 = chunk__29071;
var G__29592 = count__29072;
var G__29593 = (i__29073 + (1));
seq__29070 = G__29590;
chunk__29071 = G__29591;
count__29072 = G__29592;
i__29073 = G__29593;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29070);
if(temp__5735__auto__){
var seq__29070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29070__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29070__$1);
var G__29594 = cljs.core.chunk_rest(seq__29070__$1);
var G__29595 = c__4556__auto__;
var G__29596 = cljs.core.count(c__4556__auto__);
var G__29597 = (0);
seq__29070 = G__29594;
chunk__29071 = G__29595;
count__29072 = G__29596;
i__29073 = G__29597;
continue;
} else {
var el = cljs.core.first(seq__29070__$1);
var handler_29598__$1 = ((function (seq__29070,chunk__29071,count__29072,i__29073,el,seq__29070__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29070,chunk__29071,count__29072,i__29073,el,seq__29070__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29598__$1);


var G__29599 = cljs.core.next(seq__29070__$1);
var G__29600 = null;
var G__29601 = (0);
var G__29602 = (0);
seq__29070 = G__29599;
chunk__29071 = G__29600;
count__29072 = G__29601;
i__29073 = G__29602;
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
var G__29075 = arguments.length;
switch (G__29075) {
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
var seq__29077 = cljs.core.seq(events);
var chunk__29078 = null;
var count__29079 = (0);
var i__29080 = (0);
while(true){
if((i__29080 < count__29079)){
var vec__29088 = chunk__29078.cljs$core$IIndexed$_nth$arity$2(null,i__29080);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29607 = seq__29077;
var G__29608 = chunk__29078;
var G__29609 = count__29079;
var G__29610 = (i__29080 + (1));
seq__29077 = G__29607;
chunk__29078 = G__29608;
count__29079 = G__29609;
i__29080 = G__29610;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29077);
if(temp__5735__auto__){
var seq__29077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29077__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29077__$1);
var G__29611 = cljs.core.chunk_rest(seq__29077__$1);
var G__29612 = c__4556__auto__;
var G__29613 = cljs.core.count(c__4556__auto__);
var G__29614 = (0);
seq__29077 = G__29611;
chunk__29078 = G__29612;
count__29079 = G__29613;
i__29080 = G__29614;
continue;
} else {
var vec__29094 = cljs.core.first(seq__29077__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29616 = cljs.core.next(seq__29077__$1);
var G__29617 = null;
var G__29618 = (0);
var G__29619 = (0);
seq__29077 = G__29616;
chunk__29078 = G__29617;
count__29079 = G__29618;
i__29080 = G__29619;
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
var seq__29097 = cljs.core.seq(styles);
var chunk__29098 = null;
var count__29099 = (0);
var i__29100 = (0);
while(true){
if((i__29100 < count__29099)){
var vec__29108 = chunk__29098.cljs$core$IIndexed$_nth$arity$2(null,i__29100);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29624 = seq__29097;
var G__29625 = chunk__29098;
var G__29626 = count__29099;
var G__29627 = (i__29100 + (1));
seq__29097 = G__29624;
chunk__29098 = G__29625;
count__29099 = G__29626;
i__29100 = G__29627;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29097);
if(temp__5735__auto__){
var seq__29097__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29097__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29097__$1);
var G__29628 = cljs.core.chunk_rest(seq__29097__$1);
var G__29629 = c__4556__auto__;
var G__29630 = cljs.core.count(c__4556__auto__);
var G__29631 = (0);
seq__29097 = G__29628;
chunk__29098 = G__29629;
count__29099 = G__29630;
i__29100 = G__29631;
continue;
} else {
var vec__29111 = cljs.core.first(seq__29097__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29632 = cljs.core.next(seq__29097__$1);
var G__29633 = null;
var G__29634 = (0);
var G__29635 = (0);
seq__29097 = G__29632;
chunk__29098 = G__29633;
count__29099 = G__29634;
i__29100 = G__29635;
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
var G__29114_29636 = key;
var G__29114_29637__$1 = (((G__29114_29636 instanceof cljs.core.Keyword))?G__29114_29636.fqn:null);
switch (G__29114_29637__$1) {
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
var ks_29642 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_29642,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_29642,"aria-");
}
})())){
el.setAttribute(ks_29642,value);
} else {
(el[ks_29642] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29125){
var map__29126 = p__29125;
var map__29126__$1 = (((((!((map__29126 == null))))?(((((map__29126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29126):map__29126);
var props = map__29126__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29126__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29130 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29133 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29133,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29133;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29135 = arguments.length;
switch (G__29135) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29142){
var vec__29143 = p__29142;
var seq__29144 = cljs.core.seq(vec__29143);
var first__29145 = cljs.core.first(seq__29144);
var seq__29144__$1 = cljs.core.next(seq__29144);
var nn = first__29145;
var first__29145__$1 = cljs.core.first(seq__29144__$1);
var seq__29144__$2 = cljs.core.next(seq__29144__$1);
var np = first__29145__$1;
var nc = seq__29144__$2;
var node = vec__29143;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29154 = nn;
var G__29155 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29154,G__29155) : create_fn.call(null,G__29154,G__29155));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29158 = nn;
var G__29159 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29158,G__29159) : create_fn.call(null,G__29158,G__29159));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29160 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(1),null);
var seq__29163_29663 = cljs.core.seq(node_children);
var chunk__29164_29664 = null;
var count__29165_29665 = (0);
var i__29166_29666 = (0);
while(true){
if((i__29166_29666 < count__29165_29665)){
var child_struct_29667 = chunk__29164_29664.cljs$core$IIndexed$_nth$arity$2(null,i__29166_29666);
var children_29668 = shadow.dom.dom_node(child_struct_29667);
if(cljs.core.seq_QMARK_(children_29668)){
var seq__29188_29669 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29668));
var chunk__29190_29670 = null;
var count__29191_29671 = (0);
var i__29192_29672 = (0);
while(true){
if((i__29192_29672 < count__29191_29671)){
var child_29674 = chunk__29190_29670.cljs$core$IIndexed$_nth$arity$2(null,i__29192_29672);
if(cljs.core.truth_(child_29674)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29674);


var G__29675 = seq__29188_29669;
var G__29676 = chunk__29190_29670;
var G__29677 = count__29191_29671;
var G__29678 = (i__29192_29672 + (1));
seq__29188_29669 = G__29675;
chunk__29190_29670 = G__29676;
count__29191_29671 = G__29677;
i__29192_29672 = G__29678;
continue;
} else {
var G__29679 = seq__29188_29669;
var G__29680 = chunk__29190_29670;
var G__29681 = count__29191_29671;
var G__29682 = (i__29192_29672 + (1));
seq__29188_29669 = G__29679;
chunk__29190_29670 = G__29680;
count__29191_29671 = G__29681;
i__29192_29672 = G__29682;
continue;
}
} else {
var temp__5735__auto___29683 = cljs.core.seq(seq__29188_29669);
if(temp__5735__auto___29683){
var seq__29188_29684__$1 = temp__5735__auto___29683;
if(cljs.core.chunked_seq_QMARK_(seq__29188_29684__$1)){
var c__4556__auto___29685 = cljs.core.chunk_first(seq__29188_29684__$1);
var G__29686 = cljs.core.chunk_rest(seq__29188_29684__$1);
var G__29687 = c__4556__auto___29685;
var G__29688 = cljs.core.count(c__4556__auto___29685);
var G__29689 = (0);
seq__29188_29669 = G__29686;
chunk__29190_29670 = G__29687;
count__29191_29671 = G__29688;
i__29192_29672 = G__29689;
continue;
} else {
var child_29690 = cljs.core.first(seq__29188_29684__$1);
if(cljs.core.truth_(child_29690)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29690);


var G__29691 = cljs.core.next(seq__29188_29684__$1);
var G__29692 = null;
var G__29693 = (0);
var G__29694 = (0);
seq__29188_29669 = G__29691;
chunk__29190_29670 = G__29692;
count__29191_29671 = G__29693;
i__29192_29672 = G__29694;
continue;
} else {
var G__29695 = cljs.core.next(seq__29188_29684__$1);
var G__29696 = null;
var G__29697 = (0);
var G__29698 = (0);
seq__29188_29669 = G__29695;
chunk__29190_29670 = G__29696;
count__29191_29671 = G__29697;
i__29192_29672 = G__29698;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29668);
}


var G__29704 = seq__29163_29663;
var G__29705 = chunk__29164_29664;
var G__29706 = count__29165_29665;
var G__29707 = (i__29166_29666 + (1));
seq__29163_29663 = G__29704;
chunk__29164_29664 = G__29705;
count__29165_29665 = G__29706;
i__29166_29666 = G__29707;
continue;
} else {
var temp__5735__auto___29708 = cljs.core.seq(seq__29163_29663);
if(temp__5735__auto___29708){
var seq__29163_29709__$1 = temp__5735__auto___29708;
if(cljs.core.chunked_seq_QMARK_(seq__29163_29709__$1)){
var c__4556__auto___29710 = cljs.core.chunk_first(seq__29163_29709__$1);
var G__29711 = cljs.core.chunk_rest(seq__29163_29709__$1);
var G__29712 = c__4556__auto___29710;
var G__29713 = cljs.core.count(c__4556__auto___29710);
var G__29714 = (0);
seq__29163_29663 = G__29711;
chunk__29164_29664 = G__29712;
count__29165_29665 = G__29713;
i__29166_29666 = G__29714;
continue;
} else {
var child_struct_29715 = cljs.core.first(seq__29163_29709__$1);
var children_29716 = shadow.dom.dom_node(child_struct_29715);
if(cljs.core.seq_QMARK_(children_29716)){
var seq__29199_29717 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29716));
var chunk__29201_29718 = null;
var count__29202_29719 = (0);
var i__29203_29720 = (0);
while(true){
if((i__29203_29720 < count__29202_29719)){
var child_29721 = chunk__29201_29718.cljs$core$IIndexed$_nth$arity$2(null,i__29203_29720);
if(cljs.core.truth_(child_29721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29721);


var G__29722 = seq__29199_29717;
var G__29723 = chunk__29201_29718;
var G__29724 = count__29202_29719;
var G__29725 = (i__29203_29720 + (1));
seq__29199_29717 = G__29722;
chunk__29201_29718 = G__29723;
count__29202_29719 = G__29724;
i__29203_29720 = G__29725;
continue;
} else {
var G__29726 = seq__29199_29717;
var G__29727 = chunk__29201_29718;
var G__29728 = count__29202_29719;
var G__29729 = (i__29203_29720 + (1));
seq__29199_29717 = G__29726;
chunk__29201_29718 = G__29727;
count__29202_29719 = G__29728;
i__29203_29720 = G__29729;
continue;
}
} else {
var temp__5735__auto___29730__$1 = cljs.core.seq(seq__29199_29717);
if(temp__5735__auto___29730__$1){
var seq__29199_29731__$1 = temp__5735__auto___29730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29199_29731__$1)){
var c__4556__auto___29732 = cljs.core.chunk_first(seq__29199_29731__$1);
var G__29733 = cljs.core.chunk_rest(seq__29199_29731__$1);
var G__29734 = c__4556__auto___29732;
var G__29735 = cljs.core.count(c__4556__auto___29732);
var G__29736 = (0);
seq__29199_29717 = G__29733;
chunk__29201_29718 = G__29734;
count__29202_29719 = G__29735;
i__29203_29720 = G__29736;
continue;
} else {
var child_29738 = cljs.core.first(seq__29199_29731__$1);
if(cljs.core.truth_(child_29738)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29738);


var G__29739 = cljs.core.next(seq__29199_29731__$1);
var G__29740 = null;
var G__29741 = (0);
var G__29742 = (0);
seq__29199_29717 = G__29739;
chunk__29201_29718 = G__29740;
count__29202_29719 = G__29741;
i__29203_29720 = G__29742;
continue;
} else {
var G__29743 = cljs.core.next(seq__29199_29731__$1);
var G__29744 = null;
var G__29745 = (0);
var G__29746 = (0);
seq__29199_29717 = G__29743;
chunk__29201_29718 = G__29744;
count__29202_29719 = G__29745;
i__29203_29720 = G__29746;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29716);
}


var G__29747 = cljs.core.next(seq__29163_29709__$1);
var G__29748 = null;
var G__29749 = (0);
var G__29750 = (0);
seq__29163_29663 = G__29747;
chunk__29164_29664 = G__29748;
count__29165_29665 = G__29749;
i__29166_29666 = G__29750;
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
var seq__29226 = cljs.core.seq(node);
var chunk__29227 = null;
var count__29228 = (0);
var i__29229 = (0);
while(true){
if((i__29229 < count__29228)){
var n = chunk__29227.cljs$core$IIndexed$_nth$arity$2(null,i__29229);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29754 = seq__29226;
var G__29755 = chunk__29227;
var G__29756 = count__29228;
var G__29757 = (i__29229 + (1));
seq__29226 = G__29754;
chunk__29227 = G__29755;
count__29228 = G__29756;
i__29229 = G__29757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29226);
if(temp__5735__auto__){
var seq__29226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29226__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29226__$1);
var G__29758 = cljs.core.chunk_rest(seq__29226__$1);
var G__29759 = c__4556__auto__;
var G__29760 = cljs.core.count(c__4556__auto__);
var G__29761 = (0);
seq__29226 = G__29758;
chunk__29227 = G__29759;
count__29228 = G__29760;
i__29229 = G__29761;
continue;
} else {
var n = cljs.core.first(seq__29226__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29768 = cljs.core.next(seq__29226__$1);
var G__29769 = null;
var G__29770 = (0);
var G__29771 = (0);
seq__29226 = G__29768;
chunk__29227 = G__29769;
count__29228 = G__29770;
i__29229 = G__29771;
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
var G__29234 = arguments.length;
switch (G__29234) {
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
var G__29238 = arguments.length;
switch (G__29238) {
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
var G__29256 = arguments.length;
switch (G__29256) {
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
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___29785 = arguments.length;
var i__4737__auto___29786 = (0);
while(true){
if((i__4737__auto___29786 < len__4736__auto___29785)){
args__4742__auto__.push((arguments[i__4737__auto___29786]));

var G__29787 = (i__4737__auto___29786 + (1));
i__4737__auto___29786 = G__29787;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29268_29788 = cljs.core.seq(nodes);
var chunk__29269_29789 = null;
var count__29270_29790 = (0);
var i__29271_29791 = (0);
while(true){
if((i__29271_29791 < count__29270_29790)){
var node_29792 = chunk__29269_29789.cljs$core$IIndexed$_nth$arity$2(null,i__29271_29791);
fragment.appendChild(shadow.dom._to_dom(node_29792));


var G__29793 = seq__29268_29788;
var G__29794 = chunk__29269_29789;
var G__29795 = count__29270_29790;
var G__29796 = (i__29271_29791 + (1));
seq__29268_29788 = G__29793;
chunk__29269_29789 = G__29794;
count__29270_29790 = G__29795;
i__29271_29791 = G__29796;
continue;
} else {
var temp__5735__auto___29797 = cljs.core.seq(seq__29268_29788);
if(temp__5735__auto___29797){
var seq__29268_29798__$1 = temp__5735__auto___29797;
if(cljs.core.chunked_seq_QMARK_(seq__29268_29798__$1)){
var c__4556__auto___29799 = cljs.core.chunk_first(seq__29268_29798__$1);
var G__29800 = cljs.core.chunk_rest(seq__29268_29798__$1);
var G__29801 = c__4556__auto___29799;
var G__29802 = cljs.core.count(c__4556__auto___29799);
var G__29803 = (0);
seq__29268_29788 = G__29800;
chunk__29269_29789 = G__29801;
count__29270_29790 = G__29802;
i__29271_29791 = G__29803;
continue;
} else {
var node_29804 = cljs.core.first(seq__29268_29798__$1);
fragment.appendChild(shadow.dom._to_dom(node_29804));


var G__29805 = cljs.core.next(seq__29268_29798__$1);
var G__29806 = null;
var G__29807 = (0);
var G__29808 = (0);
seq__29268_29788 = G__29805;
chunk__29269_29789 = G__29806;
count__29270_29790 = G__29807;
i__29271_29791 = G__29808;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29265){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29265));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29275_29811 = cljs.core.seq(scripts);
var chunk__29276_29812 = null;
var count__29277_29813 = (0);
var i__29278_29814 = (0);
while(true){
if((i__29278_29814 < count__29277_29813)){
var vec__29290_29815 = chunk__29276_29812.cljs$core$IIndexed$_nth$arity$2(null,i__29278_29814);
var script_tag_29816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290_29815,(0),null);
var script_body_29817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290_29815,(1),null);
eval(script_body_29817);


var G__29819 = seq__29275_29811;
var G__29820 = chunk__29276_29812;
var G__29821 = count__29277_29813;
var G__29822 = (i__29278_29814 + (1));
seq__29275_29811 = G__29819;
chunk__29276_29812 = G__29820;
count__29277_29813 = G__29821;
i__29278_29814 = G__29822;
continue;
} else {
var temp__5735__auto___29824 = cljs.core.seq(seq__29275_29811);
if(temp__5735__auto___29824){
var seq__29275_29825__$1 = temp__5735__auto___29824;
if(cljs.core.chunked_seq_QMARK_(seq__29275_29825__$1)){
var c__4556__auto___29827 = cljs.core.chunk_first(seq__29275_29825__$1);
var G__29828 = cljs.core.chunk_rest(seq__29275_29825__$1);
var G__29829 = c__4556__auto___29827;
var G__29830 = cljs.core.count(c__4556__auto___29827);
var G__29831 = (0);
seq__29275_29811 = G__29828;
chunk__29276_29812 = G__29829;
count__29277_29813 = G__29830;
i__29278_29814 = G__29831;
continue;
} else {
var vec__29293_29832 = cljs.core.first(seq__29275_29825__$1);
var script_tag_29833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29293_29832,(0),null);
var script_body_29834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29293_29832,(1),null);
eval(script_body_29834);


var G__29836 = cljs.core.next(seq__29275_29825__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__29275_29811 = G__29836;
chunk__29276_29812 = G__29837;
count__29277_29813 = G__29838;
i__29278_29814 = G__29839;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29296){
var vec__29297 = p__29296;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29297,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29297,(1),null);
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
var G__29314 = arguments.length;
switch (G__29314) {
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
var seq__29319 = cljs.core.seq(style_keys);
var chunk__29320 = null;
var count__29321 = (0);
var i__29322 = (0);
while(true){
if((i__29322 < count__29321)){
var it = chunk__29320.cljs$core$IIndexed$_nth$arity$2(null,i__29322);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29844 = seq__29319;
var G__29845 = chunk__29320;
var G__29846 = count__29321;
var G__29847 = (i__29322 + (1));
seq__29319 = G__29844;
chunk__29320 = G__29845;
count__29321 = G__29846;
i__29322 = G__29847;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29319);
if(temp__5735__auto__){
var seq__29319__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29319__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29319__$1);
var G__29848 = cljs.core.chunk_rest(seq__29319__$1);
var G__29849 = c__4556__auto__;
var G__29850 = cljs.core.count(c__4556__auto__);
var G__29851 = (0);
seq__29319 = G__29848;
chunk__29320 = G__29849;
count__29321 = G__29850;
i__29322 = G__29851;
continue;
} else {
var it = cljs.core.first(seq__29319__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29852 = cljs.core.next(seq__29319__$1);
var G__29853 = null;
var G__29854 = (0);
var G__29855 = (0);
seq__29319 = G__29852;
chunk__29320 = G__29853;
count__29321 = G__29854;
i__29322 = G__29855;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29328,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29332 = k29328;
var G__29332__$1 = (((G__29332 instanceof cljs.core.Keyword))?G__29332.fqn:null);
switch (G__29332__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29328,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__29333){
var vec__29334 = p__29333;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29334,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29334,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29327){
var self__ = this;
var G__29327__$1 = this;
return (new cljs.core.RecordIter((0),G__29327__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29329,other29330){
var self__ = this;
var this29329__$1 = this;
return (((!((other29330 == null)))) && ((this29329__$1.constructor === other29330.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29329__$1.x,other29330.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29329__$1.y,other29330.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29329__$1.__extmap,other29330.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29327){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29354 = cljs.core.keyword_identical_QMARK_;
var expr__29355 = k__4388__auto__;
if(cljs.core.truth_((pred__29354.cljs$core$IFn$_invoke$arity$2 ? pred__29354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29355) : pred__29354.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29355)))){
return (new shadow.dom.Coordinate(G__29327,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29354.cljs$core$IFn$_invoke$arity$2 ? pred__29354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29355) : pred__29354.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29355)))){
return (new shadow.dom.Coordinate(self__.x,G__29327,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__29327),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29327){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29327,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29331){
var extmap__4419__auto__ = (function (){var G__29360 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29331,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29331)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29360);
} else {
return G__29360;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29331),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29331),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29367,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29373 = k29367;
var G__29373__$1 = (((G__29373 instanceof cljs.core.Keyword))?G__29373.fqn:null);
switch (G__29373__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29367,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__29377){
var vec__29379 = p__29377;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29366){
var self__ = this;
var G__29366__$1 = this;
return (new cljs.core.RecordIter((0),G__29366__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29368,other29369){
var self__ = this;
var this29368__$1 = this;
return (((!((other29369 == null)))) && ((this29368__$1.constructor === other29369.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29368__$1.w,other29369.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29368__$1.h,other29369.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29368__$1.__extmap,other29369.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29366){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29397 = cljs.core.keyword_identical_QMARK_;
var expr__29398 = k__4388__auto__;
if(cljs.core.truth_((pred__29397.cljs$core$IFn$_invoke$arity$2 ? pred__29397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29398) : pred__29397.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29398)))){
return (new shadow.dom.Size(G__29366,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29397.cljs$core$IFn$_invoke$arity$2 ? pred__29397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29398) : pred__29397.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29398)))){
return (new shadow.dom.Size(self__.w,G__29366,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__29366),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29366){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29366,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29370){
var extmap__4419__auto__ = (function (){var G__29402 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29370,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29370)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29402);
} else {
return G__29402;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29370),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29370),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__29881 = (i + (1));
var G__29882 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29881;
ret = G__29882;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29418){
var vec__29419 = p__29418;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29419,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29424 = arguments.length;
switch (G__29424) {
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
var G__29897 = ps;
var G__29898 = (i + (1));
el__$1 = G__29897;
i = G__29898;
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
var vec__29435 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29438_29899 = cljs.core.seq(props);
var chunk__29439_29900 = null;
var count__29440_29901 = (0);
var i__29441_29902 = (0);
while(true){
if((i__29441_29902 < count__29440_29901)){
var vec__29448_29903 = chunk__29439_29900.cljs$core$IIndexed$_nth$arity$2(null,i__29441_29902);
var k_29904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29448_29903,(0),null);
var v_29905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29448_29903,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_29904);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29904),v_29905);


var G__29906 = seq__29438_29899;
var G__29907 = chunk__29439_29900;
var G__29908 = count__29440_29901;
var G__29909 = (i__29441_29902 + (1));
seq__29438_29899 = G__29906;
chunk__29439_29900 = G__29907;
count__29440_29901 = G__29908;
i__29441_29902 = G__29909;
continue;
} else {
var temp__5735__auto___29910 = cljs.core.seq(seq__29438_29899);
if(temp__5735__auto___29910){
var seq__29438_29911__$1 = temp__5735__auto___29910;
if(cljs.core.chunked_seq_QMARK_(seq__29438_29911__$1)){
var c__4556__auto___29912 = cljs.core.chunk_first(seq__29438_29911__$1);
var G__29913 = cljs.core.chunk_rest(seq__29438_29911__$1);
var G__29914 = c__4556__auto___29912;
var G__29915 = cljs.core.count(c__4556__auto___29912);
var G__29916 = (0);
seq__29438_29899 = G__29913;
chunk__29439_29900 = G__29914;
count__29440_29901 = G__29915;
i__29441_29902 = G__29916;
continue;
} else {
var vec__29451_29917 = cljs.core.first(seq__29438_29911__$1);
var k_29918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29451_29917,(0),null);
var v_29919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29451_29917,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_29918);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29918),v_29919);


var G__29920 = cljs.core.next(seq__29438_29911__$1);
var G__29921 = null;
var G__29922 = (0);
var G__29923 = (0);
seq__29438_29899 = G__29920;
chunk__29439_29900 = G__29921;
count__29440_29901 = G__29922;
i__29441_29902 = G__29923;
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
var vec__29469 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29469,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29469,(1),null);
var seq__29472_29924 = cljs.core.seq(node_children);
var chunk__29474_29925 = null;
var count__29475_29926 = (0);
var i__29476_29927 = (0);
while(true){
if((i__29476_29927 < count__29475_29926)){
var child_struct_29928 = chunk__29474_29925.cljs$core$IIndexed$_nth$arity$2(null,i__29476_29927);
if((!((child_struct_29928 == null)))){
if(typeof child_struct_29928 === 'string'){
var text_29929 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29929),child_struct_29928].join(''));
} else {
var children_29930 = shadow.dom.svg_node(child_struct_29928);
if(cljs.core.seq_QMARK_(children_29930)){
var seq__29510_29931 = cljs.core.seq(children_29930);
var chunk__29512_29932 = null;
var count__29513_29933 = (0);
var i__29514_29934 = (0);
while(true){
if((i__29514_29934 < count__29513_29933)){
var child_29942 = chunk__29512_29932.cljs$core$IIndexed$_nth$arity$2(null,i__29514_29934);
if(cljs.core.truth_(child_29942)){
node.appendChild(child_29942);


var G__29943 = seq__29510_29931;
var G__29944 = chunk__29512_29932;
var G__29945 = count__29513_29933;
var G__29946 = (i__29514_29934 + (1));
seq__29510_29931 = G__29943;
chunk__29512_29932 = G__29944;
count__29513_29933 = G__29945;
i__29514_29934 = G__29946;
continue;
} else {
var G__29947 = seq__29510_29931;
var G__29948 = chunk__29512_29932;
var G__29949 = count__29513_29933;
var G__29950 = (i__29514_29934 + (1));
seq__29510_29931 = G__29947;
chunk__29512_29932 = G__29948;
count__29513_29933 = G__29949;
i__29514_29934 = G__29950;
continue;
}
} else {
var temp__5735__auto___29951 = cljs.core.seq(seq__29510_29931);
if(temp__5735__auto___29951){
var seq__29510_29952__$1 = temp__5735__auto___29951;
if(cljs.core.chunked_seq_QMARK_(seq__29510_29952__$1)){
var c__4556__auto___29953 = cljs.core.chunk_first(seq__29510_29952__$1);
var G__29954 = cljs.core.chunk_rest(seq__29510_29952__$1);
var G__29955 = c__4556__auto___29953;
var G__29956 = cljs.core.count(c__4556__auto___29953);
var G__29957 = (0);
seq__29510_29931 = G__29954;
chunk__29512_29932 = G__29955;
count__29513_29933 = G__29956;
i__29514_29934 = G__29957;
continue;
} else {
var child_29958 = cljs.core.first(seq__29510_29952__$1);
if(cljs.core.truth_(child_29958)){
node.appendChild(child_29958);


var G__29959 = cljs.core.next(seq__29510_29952__$1);
var G__29960 = null;
var G__29961 = (0);
var G__29962 = (0);
seq__29510_29931 = G__29959;
chunk__29512_29932 = G__29960;
count__29513_29933 = G__29961;
i__29514_29934 = G__29962;
continue;
} else {
var G__29963 = cljs.core.next(seq__29510_29952__$1);
var G__29964 = null;
var G__29965 = (0);
var G__29966 = (0);
seq__29510_29931 = G__29963;
chunk__29512_29932 = G__29964;
count__29513_29933 = G__29965;
i__29514_29934 = G__29966;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29930);
}
}


var G__29967 = seq__29472_29924;
var G__29968 = chunk__29474_29925;
var G__29969 = count__29475_29926;
var G__29970 = (i__29476_29927 + (1));
seq__29472_29924 = G__29967;
chunk__29474_29925 = G__29968;
count__29475_29926 = G__29969;
i__29476_29927 = G__29970;
continue;
} else {
var G__29971 = seq__29472_29924;
var G__29972 = chunk__29474_29925;
var G__29973 = count__29475_29926;
var G__29974 = (i__29476_29927 + (1));
seq__29472_29924 = G__29971;
chunk__29474_29925 = G__29972;
count__29475_29926 = G__29973;
i__29476_29927 = G__29974;
continue;
}
} else {
var temp__5735__auto___29975 = cljs.core.seq(seq__29472_29924);
if(temp__5735__auto___29975){
var seq__29472_29976__$1 = temp__5735__auto___29975;
if(cljs.core.chunked_seq_QMARK_(seq__29472_29976__$1)){
var c__4556__auto___29977 = cljs.core.chunk_first(seq__29472_29976__$1);
var G__29978 = cljs.core.chunk_rest(seq__29472_29976__$1);
var G__29979 = c__4556__auto___29977;
var G__29980 = cljs.core.count(c__4556__auto___29977);
var G__29981 = (0);
seq__29472_29924 = G__29978;
chunk__29474_29925 = G__29979;
count__29475_29926 = G__29980;
i__29476_29927 = G__29981;
continue;
} else {
var child_struct_29982 = cljs.core.first(seq__29472_29976__$1);
if((!((child_struct_29982 == null)))){
if(typeof child_struct_29982 === 'string'){
var text_29986 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29986),child_struct_29982].join(''));
} else {
var children_29987 = shadow.dom.svg_node(child_struct_29982);
if(cljs.core.seq_QMARK_(children_29987)){
var seq__29516_29988 = cljs.core.seq(children_29987);
var chunk__29518_29989 = null;
var count__29519_29990 = (0);
var i__29520_29991 = (0);
while(true){
if((i__29520_29991 < count__29519_29990)){
var child_29992 = chunk__29518_29989.cljs$core$IIndexed$_nth$arity$2(null,i__29520_29991);
if(cljs.core.truth_(child_29992)){
node.appendChild(child_29992);


var G__29994 = seq__29516_29988;
var G__29995 = chunk__29518_29989;
var G__29996 = count__29519_29990;
var G__29997 = (i__29520_29991 + (1));
seq__29516_29988 = G__29994;
chunk__29518_29989 = G__29995;
count__29519_29990 = G__29996;
i__29520_29991 = G__29997;
continue;
} else {
var G__29998 = seq__29516_29988;
var G__29999 = chunk__29518_29989;
var G__30000 = count__29519_29990;
var G__30001 = (i__29520_29991 + (1));
seq__29516_29988 = G__29998;
chunk__29518_29989 = G__29999;
count__29519_29990 = G__30000;
i__29520_29991 = G__30001;
continue;
}
} else {
var temp__5735__auto___30002__$1 = cljs.core.seq(seq__29516_29988);
if(temp__5735__auto___30002__$1){
var seq__29516_30003__$1 = temp__5735__auto___30002__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29516_30003__$1)){
var c__4556__auto___30004 = cljs.core.chunk_first(seq__29516_30003__$1);
var G__30005 = cljs.core.chunk_rest(seq__29516_30003__$1);
var G__30006 = c__4556__auto___30004;
var G__30007 = cljs.core.count(c__4556__auto___30004);
var G__30008 = (0);
seq__29516_29988 = G__30005;
chunk__29518_29989 = G__30006;
count__29519_29990 = G__30007;
i__29520_29991 = G__30008;
continue;
} else {
var child_30009 = cljs.core.first(seq__29516_30003__$1);
if(cljs.core.truth_(child_30009)){
node.appendChild(child_30009);


var G__30010 = cljs.core.next(seq__29516_30003__$1);
var G__30011 = null;
var G__30012 = (0);
var G__30013 = (0);
seq__29516_29988 = G__30010;
chunk__29518_29989 = G__30011;
count__29519_29990 = G__30012;
i__29520_29991 = G__30013;
continue;
} else {
var G__30016 = cljs.core.next(seq__29516_30003__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29516_29988 = G__30016;
chunk__29518_29989 = G__30017;
count__29519_29990 = G__30018;
i__29520_29991 = G__30019;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29987);
}
}


var G__30023 = cljs.core.next(seq__29472_29976__$1);
var G__30024 = null;
var G__30025 = (0);
var G__30026 = (0);
seq__29472_29924 = G__30023;
chunk__29474_29925 = G__30024;
count__29475_29926 = G__30025;
i__29476_29927 = G__30026;
continue;
} else {
var G__30027 = cljs.core.next(seq__29472_29976__$1);
var G__30028 = null;
var G__30029 = (0);
var G__30030 = (0);
seq__29472_29924 = G__30027;
chunk__29474_29925 = G__30028;
count__29475_29926 = G__30029;
i__29476_29927 = G__30030;
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
var args__4742__auto__ = [];
var len__4736__auto___30032 = arguments.length;
var i__4737__auto___30033 = (0);
while(true){
if((i__4737__auto___30033 < len__4736__auto___30032)){
args__4742__auto__.push((arguments[i__4737__auto___30033]));

var G__30034 = (i__4737__auto___30033 + (1));
i__4737__auto___30033 = G__30034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29539){
var G__29540 = cljs.core.first(seq29539);
var seq29539__$1 = cljs.core.next(seq29539);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29540,seq29539__$1);
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
var G__29545 = arguments.length;
switch (G__29545) {
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

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__27484__auto___30045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_29552){
var state_val_29553 = (state_29552[(1)]);
if((state_val_29553 === (1))){
var state_29552__$1 = state_29552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29552__$1,(2),once_or_cleanup);
} else {
if((state_val_29553 === (2))){
var inst_29549 = (state_29552[(2)]);
var inst_29550 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_29552__$1 = (function (){var statearr_29554 = state_29552;
(statearr_29554[(7)] = inst_29549);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29552__$1,inst_29550);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27449__auto__ = null;
var shadow$dom$state_machine__27449__auto____0 = (function (){
var statearr_29555 = [null,null,null,null,null,null,null,null];
(statearr_29555[(0)] = shadow$dom$state_machine__27449__auto__);

(statearr_29555[(1)] = (1));

return statearr_29555;
});
var shadow$dom$state_machine__27449__auto____1 = (function (state_29552){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_29552);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e29556){var ex__27452__auto__ = e29556;
var statearr_29557_30046 = state_29552;
(statearr_29557_30046[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_29552[(4)]))){
var statearr_29558_30048 = state_29552;
(statearr_29558_30048[(1)] = cljs.core.first((state_29552[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30049 = state_29552;
state_29552 = G__30049;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
shadow$dom$state_machine__27449__auto__ = function(state_29552){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27449__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27449__auto____1.call(this,state_29552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27449__auto____0;
shadow$dom$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27449__auto____1;
return shadow$dom$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_29559 = f__27485__auto__();
(statearr_29559[(6)] = c__27484__auto___30045);

return statearr_29559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
