goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30329 = arguments.length;
switch (G__30329) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30330 = (function (f,blockable,meta30331){
this.f = f;
this.blockable = blockable;
this.meta30331 = meta30331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30332,meta30331__$1){
var self__ = this;
var _30332__$1 = this;
return (new cljs.core.async.t_cljs$core$async30330(self__.f,self__.blockable,meta30331__$1));
}));

(cljs.core.async.t_cljs$core$async30330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30332){
var self__ = this;
var _30332__$1 = this;
return self__.meta30331;
}));

(cljs.core.async.t_cljs$core$async30330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30331","meta30331",1563782070,null)], null);
}));

(cljs.core.async.t_cljs$core$async30330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30330");

(cljs.core.async.t_cljs$core$async30330.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30330.
 */
cljs.core.async.__GT_t_cljs$core$async30330 = (function cljs$core$async$__GT_t_cljs$core$async30330(f__$1,blockable__$1,meta30331){
return (new cljs.core.async.t_cljs$core$async30330(f__$1,blockable__$1,meta30331));
});

}

return (new cljs.core.async.t_cljs$core$async30330(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30335 = arguments.length;
switch (G__30335) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30337 = arguments.length;
switch (G__30337) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30339 = arguments.length;
switch (G__30339) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31760 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31760) : fn1.call(null,val_31760));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31760) : fn1.call(null,val_31760));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30341 = arguments.length;
switch (G__30341) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___31766 = n;
var x_31767 = (0);
while(true){
if((x_31767 < n__4648__auto___31766)){
(a[x_31767] = x_31767);

var G__31768 = (x_31767 + (1));
x_31767 = G__31768;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30342 = (function (flag,meta30343){
this.flag = flag;
this.meta30343 = meta30343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30344,meta30343__$1){
var self__ = this;
var _30344__$1 = this;
return (new cljs.core.async.t_cljs$core$async30342(self__.flag,meta30343__$1));
}));

(cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30344){
var self__ = this;
var _30344__$1 = this;
return self__.meta30343;
}));

(cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30343","meta30343",36646886,null)], null);
}));

(cljs.core.async.t_cljs$core$async30342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30342");

(cljs.core.async.t_cljs$core$async30342.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30342.
 */
cljs.core.async.__GT_t_cljs$core$async30342 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30342(flag__$1,meta30343){
return (new cljs.core.async.t_cljs$core$async30342(flag__$1,meta30343));
});

}

return (new cljs.core.async.t_cljs$core$async30342(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30345 = (function (flag,cb,meta30346){
this.flag = flag;
this.cb = cb;
this.meta30346 = meta30346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30347,meta30346__$1){
var self__ = this;
var _30347__$1 = this;
return (new cljs.core.async.t_cljs$core$async30345(self__.flag,self__.cb,meta30346__$1));
}));

(cljs.core.async.t_cljs$core$async30345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30347){
var self__ = this;
var _30347__$1 = this;
return self__.meta30346;
}));

(cljs.core.async.t_cljs$core$async30345.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30346","meta30346",-1584261209,null)], null);
}));

(cljs.core.async.t_cljs$core$async30345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30345");

(cljs.core.async.t_cljs$core$async30345.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30345.
 */
cljs.core.async.__GT_t_cljs$core$async30345 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30345(flag__$1,cb__$1,meta30346){
return (new cljs.core.async.t_cljs$core$async30345(flag__$1,cb__$1,meta30346));
});

}

return (new cljs.core.async.t_cljs$core$async30345(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30348_SHARP_){
var G__30350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30348_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30350) : fret.call(null,G__30350));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30349_SHARP_){
var G__30351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30349_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30351) : fret.call(null,G__30351));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31778 = (i + (1));
i = G__31778;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31779 = arguments.length;
var i__4772__auto___31780 = (0);
while(true){
if((i__4772__auto___31780 < len__4771__auto___31779)){
args__4777__auto__.push((arguments[i__4772__auto___31780]));

var G__31781 = (i__4772__auto___31780 + (1));
i__4772__auto___31780 = G__31781;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30354){
var map__30355 = p__30354;
var map__30355__$1 = cljs.core.__destructure_map(map__30355);
var opts = map__30355__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30352){
var G__30353 = cljs.core.first(seq30352);
var seq30352__$1 = cljs.core.next(seq30352);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30353,seq30352__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30357 = arguments.length;
switch (G__30357) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30267__auto___31799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30377 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30383_31800 = state_30381__$1;
(statearr_30383_31800[(2)] = inst_30377);

(statearr_30383_31800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (1))){
var state_30381__$1 = state_30381;
var statearr_30384_31805 = state_30381__$1;
(statearr_30384_31805[(2)] = null);

(statearr_30384_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (4))){
var inst_30360 = (state_30381[(7)]);
var inst_30360__$1 = (state_30381[(2)]);
var inst_30361 = (inst_30360__$1 == null);
var state_30381__$1 = (function (){var statearr_30385 = state_30381;
(statearr_30385[(7)] = inst_30360__$1);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30361)){
var statearr_30386_31809 = state_30381__$1;
(statearr_30386_31809[(1)] = (5));

} else {
var statearr_30387_31810 = state_30381__$1;
(statearr_30387_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (13))){
var state_30381__$1 = state_30381;
var statearr_30388_31821 = state_30381__$1;
(statearr_30388_31821[(2)] = null);

(statearr_30388_31821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (6))){
var inst_30360 = (state_30381[(7)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30381__$1,(11),to,inst_30360);
} else {
if((state_val_30382 === (3))){
var inst_30379 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (12))){
var state_30381__$1 = state_30381;
var statearr_30389_31822 = state_30381__$1;
(statearr_30389_31822[(2)] = null);

(statearr_30389_31822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (2))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(4),from);
} else {
if((state_val_30382 === (11))){
var inst_30370 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30370)){
var statearr_30390_31823 = state_30381__$1;
(statearr_30390_31823[(1)] = (12));

} else {
var statearr_30391_31824 = state_30381__$1;
(statearr_30391_31824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (9))){
var state_30381__$1 = state_30381;
var statearr_30392_31825 = state_30381__$1;
(statearr_30392_31825[(2)] = null);

(statearr_30392_31825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (5))){
var state_30381__$1 = state_30381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30393_31826 = state_30381__$1;
(statearr_30393_31826[(1)] = (8));

} else {
var statearr_30394_31827 = state_30381__$1;
(statearr_30394_31827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (14))){
var inst_30375 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30395_31828 = state_30381__$1;
(statearr_30395_31828[(2)] = inst_30375);

(statearr_30395_31828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (10))){
var inst_30367 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30396_31829 = state_30381__$1;
(statearr_30396_31829[(2)] = inst_30367);

(statearr_30396_31829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (8))){
var inst_30364 = cljs.core.async.close_BANG_(to);
var state_30381__$1 = state_30381;
var statearr_30397_31830 = state_30381__$1;
(statearr_30397_31830[(2)] = inst_30364);

(statearr_30397_31830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_30398 = [null,null,null,null,null,null,null,null];
(statearr_30398[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_30398[(1)] = (1));

return statearr_30398;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_30381){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30381);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30399){var ex__30239__auto__ = e30399;
var statearr_30400_31831 = state_30381;
(statearr_30400_31831[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30381[(4)]))){
var statearr_30401_31832 = state_30381;
(statearr_30401_31832[(1)] = cljs.core.first((state_30381[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31833 = state_30381;
state_30381 = G__31833;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30402 = f__30268__auto__();
(statearr_30402[(6)] = c__30267__auto___31799);

return statearr_30402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30403){
var vec__30404 = p__30403;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(1),null);
var job = vec__30404;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30267__auto___31834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30411){
var state_val_30412 = (state_30411[(1)]);
if((state_val_30412 === (1))){
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30411__$1,(2),res,v);
} else {
if((state_val_30412 === (2))){
var inst_30408 = (state_30411[(2)]);
var inst_30409 = cljs.core.async.close_BANG_(res);
var state_30411__$1 = (function (){var statearr_30413 = state_30411;
(statearr_30413[(7)] = inst_30408);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30411__$1,inst_30409);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0 = (function (){
var statearr_30414 = [null,null,null,null,null,null,null,null];
(statearr_30414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__);

(statearr_30414[(1)] = (1));

return statearr_30414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1 = (function (state_30411){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30411);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30415){var ex__30239__auto__ = e30415;
var statearr_30416_31840 = state_30411;
(statearr_30416_31840[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30411[(4)]))){
var statearr_30417_31841 = state_30411;
(statearr_30417_31841[(1)] = cljs.core.first((state_30411[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31843 = state_30411;
state_30411 = G__31843;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30418 = f__30268__auto__();
(statearr_30418[(6)] = c__30267__auto___31834);

return statearr_30418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30419){
var vec__30420 = p__30419;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30420,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30420,(1),null);
var job = vec__30420;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___31846 = n;
var __31847 = (0);
while(true){
if((__31847 < n__4648__auto___31846)){
var G__30423_31848 = type;
var G__30423_31849__$1 = (((G__30423_31848 instanceof cljs.core.Keyword))?G__30423_31848.fqn:null);
switch (G__30423_31849__$1) {
case "compute":
var c__30267__auto___31851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31847,c__30267__auto___31851,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async){
return (function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = ((function (__31847,c__30267__auto___31851,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async){
return (function (state_30436){
var state_val_30437 = (state_30436[(1)]);
if((state_val_30437 === (1))){
var state_30436__$1 = state_30436;
var statearr_30438_31852 = state_30436__$1;
(statearr_30438_31852[(2)] = null);

(statearr_30438_31852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (2))){
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30436__$1,(4),jobs);
} else {
if((state_val_30437 === (3))){
var inst_30434 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30436__$1,inst_30434);
} else {
if((state_val_30437 === (4))){
var inst_30426 = (state_30436[(2)]);
var inst_30427 = process(inst_30426);
var state_30436__$1 = state_30436;
if(cljs.core.truth_(inst_30427)){
var statearr_30439_31853 = state_30436__$1;
(statearr_30439_31853[(1)] = (5));

} else {
var statearr_30440_31854 = state_30436__$1;
(statearr_30440_31854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (5))){
var state_30436__$1 = state_30436;
var statearr_30441_31855 = state_30436__$1;
(statearr_30441_31855[(2)] = null);

(statearr_30441_31855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (6))){
var state_30436__$1 = state_30436;
var statearr_30442_31864 = state_30436__$1;
(statearr_30442_31864[(2)] = null);

(statearr_30442_31864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (7))){
var inst_30432 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30443_31865 = state_30436__$1;
(statearr_30443_31865[(2)] = inst_30432);

(statearr_30443_31865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31847,c__30267__auto___31851,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async))
;
return ((function (__31847,switch__30235__auto__,c__30267__auto___31851,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0 = (function (){
var statearr_30444 = [null,null,null,null,null,null,null];
(statearr_30444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__);

(statearr_30444[(1)] = (1));

return statearr_30444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1 = (function (state_30436){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30436);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30445){var ex__30239__auto__ = e30445;
var statearr_30446_31869 = state_30436;
(statearr_30446_31869[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30436[(4)]))){
var statearr_30447_31870 = state_30436;
(statearr_30447_31870[(1)] = cljs.core.first((state_30436[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31871 = state_30436;
state_30436 = G__31871;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = function(state_30436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1.call(this,state_30436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__;
})()
;})(__31847,switch__30235__auto__,c__30267__auto___31851,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async))
})();
var state__30269__auto__ = (function (){var statearr_30448 = f__30268__auto__();
(statearr_30448[(6)] = c__30267__auto___31851);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
});})(__31847,c__30267__auto___31851,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async))
);


break;
case "async":
var c__30267__auto___31872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31847,c__30267__auto___31872,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async){
return (function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = ((function (__31847,c__30267__auto___31872,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async){
return (function (state_30461){
var state_val_30462 = (state_30461[(1)]);
if((state_val_30462 === (1))){
var state_30461__$1 = state_30461;
var statearr_30463_31873 = state_30461__$1;
(statearr_30463_31873[(2)] = null);

(statearr_30463_31873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (2))){
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30461__$1,(4),jobs);
} else {
if((state_val_30462 === (3))){
var inst_30459 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30461__$1,inst_30459);
} else {
if((state_val_30462 === (4))){
var inst_30451 = (state_30461[(2)]);
var inst_30452 = async(inst_30451);
var state_30461__$1 = state_30461;
if(cljs.core.truth_(inst_30452)){
var statearr_30464_31884 = state_30461__$1;
(statearr_30464_31884[(1)] = (5));

} else {
var statearr_30465_31885 = state_30461__$1;
(statearr_30465_31885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (5))){
var state_30461__$1 = state_30461;
var statearr_30466_31886 = state_30461__$1;
(statearr_30466_31886[(2)] = null);

(statearr_30466_31886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (6))){
var state_30461__$1 = state_30461;
var statearr_30467_31887 = state_30461__$1;
(statearr_30467_31887[(2)] = null);

(statearr_30467_31887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (7))){
var inst_30457 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
var statearr_30468_31888 = state_30461__$1;
(statearr_30468_31888[(2)] = inst_30457);

(statearr_30468_31888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31847,c__30267__auto___31872,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async))
;
return ((function (__31847,switch__30235__auto__,c__30267__auto___31872,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0 = (function (){
var statearr_30469 = [null,null,null,null,null,null,null];
(statearr_30469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__);

(statearr_30469[(1)] = (1));

return statearr_30469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1 = (function (state_30461){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30461);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30470){var ex__30239__auto__ = e30470;
var statearr_30471_31889 = state_30461;
(statearr_30471_31889[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30461[(4)]))){
var statearr_30472_31890 = state_30461;
(statearr_30472_31890[(1)] = cljs.core.first((state_30461[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31891 = state_30461;
state_30461 = G__31891;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = function(state_30461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1.call(this,state_30461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__;
})()
;})(__31847,switch__30235__auto__,c__30267__auto___31872,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async))
})();
var state__30269__auto__ = (function (){var statearr_30473 = f__30268__auto__();
(statearr_30473[(6)] = c__30267__auto___31872);

return statearr_30473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
});})(__31847,c__30267__auto___31872,G__30423_31848,G__30423_31849__$1,n__4648__auto___31846,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30423_31849__$1)].join('')));

}

var G__31898 = (__31847 + (1));
__31847 = G__31898;
continue;
} else {
}
break;
}

var c__30267__auto___31899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30495){
var state_val_30496 = (state_30495[(1)]);
if((state_val_30496 === (7))){
var inst_30491 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
var statearr_30497_31900 = state_30495__$1;
(statearr_30497_31900[(2)] = inst_30491);

(statearr_30497_31900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (1))){
var state_30495__$1 = state_30495;
var statearr_30498_31901 = state_30495__$1;
(statearr_30498_31901[(2)] = null);

(statearr_30498_31901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (4))){
var inst_30476 = (state_30495[(7)]);
var inst_30476__$1 = (state_30495[(2)]);
var inst_30477 = (inst_30476__$1 == null);
var state_30495__$1 = (function (){var statearr_30499 = state_30495;
(statearr_30499[(7)] = inst_30476__$1);

return statearr_30499;
})();
if(cljs.core.truth_(inst_30477)){
var statearr_30500_31902 = state_30495__$1;
(statearr_30500_31902[(1)] = (5));

} else {
var statearr_30501_31903 = state_30495__$1;
(statearr_30501_31903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (6))){
var inst_30476 = (state_30495[(7)]);
var inst_30481 = (state_30495[(8)]);
var inst_30481__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30483 = [inst_30476,inst_30481__$1];
var inst_30484 = (new cljs.core.PersistentVector(null,2,(5),inst_30482,inst_30483,null));
var state_30495__$1 = (function (){var statearr_30502 = state_30495;
(statearr_30502[(8)] = inst_30481__$1);

return statearr_30502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30495__$1,(8),jobs,inst_30484);
} else {
if((state_val_30496 === (3))){
var inst_30493 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30495__$1,inst_30493);
} else {
if((state_val_30496 === (2))){
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30495__$1,(4),from);
} else {
if((state_val_30496 === (9))){
var inst_30488 = (state_30495[(2)]);
var state_30495__$1 = (function (){var statearr_30503 = state_30495;
(statearr_30503[(9)] = inst_30488);

return statearr_30503;
})();
var statearr_30504_31904 = state_30495__$1;
(statearr_30504_31904[(2)] = null);

(statearr_30504_31904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (5))){
var inst_30479 = cljs.core.async.close_BANG_(jobs);
var state_30495__$1 = state_30495;
var statearr_30505_31911 = state_30495__$1;
(statearr_30505_31911[(2)] = inst_30479);

(statearr_30505_31911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (8))){
var inst_30481 = (state_30495[(8)]);
var inst_30486 = (state_30495[(2)]);
var state_30495__$1 = (function (){var statearr_30506 = state_30495;
(statearr_30506[(10)] = inst_30486);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30495__$1,(9),results,inst_30481);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0 = (function (){
var statearr_30507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__);

(statearr_30507[(1)] = (1));

return statearr_30507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1 = (function (state_30495){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30495);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30508){var ex__30239__auto__ = e30508;
var statearr_30509_31912 = state_30495;
(statearr_30509_31912[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30495[(4)]))){
var statearr_30510_31913 = state_30495;
(statearr_30510_31913[(1)] = cljs.core.first((state_30495[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31914 = state_30495;
state_30495 = G__31914;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = function(state_30495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1.call(this,state_30495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30511 = f__30268__auto__();
(statearr_30511[(6)] = c__30267__auto___31899);

return statearr_30511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


var c__30267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30549){
var state_val_30550 = (state_30549[(1)]);
if((state_val_30550 === (7))){
var inst_30545 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
var statearr_30551_31915 = state_30549__$1;
(statearr_30551_31915[(2)] = inst_30545);

(statearr_30551_31915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (20))){
var state_30549__$1 = state_30549;
var statearr_30552_31916 = state_30549__$1;
(statearr_30552_31916[(2)] = null);

(statearr_30552_31916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (1))){
var state_30549__$1 = state_30549;
var statearr_30553_31923 = state_30549__$1;
(statearr_30553_31923[(2)] = null);

(statearr_30553_31923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (4))){
var inst_30514 = (state_30549[(7)]);
var inst_30514__$1 = (state_30549[(2)]);
var inst_30515 = (inst_30514__$1 == null);
var state_30549__$1 = (function (){var statearr_30554 = state_30549;
(statearr_30554[(7)] = inst_30514__$1);

return statearr_30554;
})();
if(cljs.core.truth_(inst_30515)){
var statearr_30555_31924 = state_30549__$1;
(statearr_30555_31924[(1)] = (5));

} else {
var statearr_30556_31925 = state_30549__$1;
(statearr_30556_31925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (15))){
var inst_30527 = (state_30549[(8)]);
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30549__$1,(18),to,inst_30527);
} else {
if((state_val_30550 === (21))){
var inst_30540 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
var statearr_30557_31926 = state_30549__$1;
(statearr_30557_31926[(2)] = inst_30540);

(statearr_30557_31926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (13))){
var inst_30542 = (state_30549[(2)]);
var state_30549__$1 = (function (){var statearr_30558 = state_30549;
(statearr_30558[(9)] = inst_30542);

return statearr_30558;
})();
var statearr_30559_31927 = state_30549__$1;
(statearr_30559_31927[(2)] = null);

(statearr_30559_31927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (6))){
var inst_30514 = (state_30549[(7)]);
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30549__$1,(11),inst_30514);
} else {
if((state_val_30550 === (17))){
var inst_30535 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
if(cljs.core.truth_(inst_30535)){
var statearr_30560_31928 = state_30549__$1;
(statearr_30560_31928[(1)] = (19));

} else {
var statearr_30561_31929 = state_30549__$1;
(statearr_30561_31929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (3))){
var inst_30547 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30549__$1,inst_30547);
} else {
if((state_val_30550 === (12))){
var inst_30524 = (state_30549[(10)]);
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30549__$1,(14),inst_30524);
} else {
if((state_val_30550 === (2))){
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30549__$1,(4),results);
} else {
if((state_val_30550 === (19))){
var state_30549__$1 = state_30549;
var statearr_30562_31930 = state_30549__$1;
(statearr_30562_31930[(2)] = null);

(statearr_30562_31930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (11))){
var inst_30524 = (state_30549[(2)]);
var state_30549__$1 = (function (){var statearr_30563 = state_30549;
(statearr_30563[(10)] = inst_30524);

return statearr_30563;
})();
var statearr_30564_31931 = state_30549__$1;
(statearr_30564_31931[(2)] = null);

(statearr_30564_31931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (9))){
var state_30549__$1 = state_30549;
var statearr_30565_31932 = state_30549__$1;
(statearr_30565_31932[(2)] = null);

(statearr_30565_31932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (5))){
var state_30549__$1 = state_30549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30566_31933 = state_30549__$1;
(statearr_30566_31933[(1)] = (8));

} else {
var statearr_30567_31934 = state_30549__$1;
(statearr_30567_31934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (14))){
var inst_30527 = (state_30549[(8)]);
var inst_30527__$1 = (state_30549[(2)]);
var inst_30528 = (inst_30527__$1 == null);
var inst_30529 = cljs.core.not(inst_30528);
var state_30549__$1 = (function (){var statearr_30568 = state_30549;
(statearr_30568[(8)] = inst_30527__$1);

return statearr_30568;
})();
if(inst_30529){
var statearr_30569_31935 = state_30549__$1;
(statearr_30569_31935[(1)] = (15));

} else {
var statearr_30570_31936 = state_30549__$1;
(statearr_30570_31936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (16))){
var state_30549__$1 = state_30549;
var statearr_30571_31937 = state_30549__$1;
(statearr_30571_31937[(2)] = false);

(statearr_30571_31937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (10))){
var inst_30521 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
var statearr_30572_31938 = state_30549__$1;
(statearr_30572_31938[(2)] = inst_30521);

(statearr_30572_31938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (18))){
var inst_30532 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
var statearr_30573_31939 = state_30549__$1;
(statearr_30573_31939[(2)] = inst_30532);

(statearr_30573_31939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (8))){
var inst_30518 = cljs.core.async.close_BANG_(to);
var state_30549__$1 = state_30549;
var statearr_30574_31940 = state_30549__$1;
(statearr_30574_31940[(2)] = inst_30518);

(statearr_30574_31940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30575[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1 = (function (state_30549){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30549);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30576){var ex__30239__auto__ = e30576;
var statearr_30577_31946 = state_30549;
(statearr_30577_31946[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30549[(4)]))){
var statearr_30578_31947 = state_30549;
(statearr_30578_31947[(1)] = cljs.core.first((state_30549[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31948 = state_30549;
state_30549 = G__31948;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__ = function(state_30549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1.call(this,state_30549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30579 = f__30268__auto__();
(statearr_30579[(6)] = c__30267__auto__);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

return c__30267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30581 = arguments.length;
switch (G__30581) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30583 = arguments.length;
switch (G__30583) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30585 = arguments.length;
switch (G__30585) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30267__auto___31954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30611){
var state_val_30612 = (state_30611[(1)]);
if((state_val_30612 === (7))){
var inst_30607 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30613_31955 = state_30611__$1;
(statearr_30613_31955[(2)] = inst_30607);

(statearr_30613_31955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (1))){
var state_30611__$1 = state_30611;
var statearr_30614_31956 = state_30611__$1;
(statearr_30614_31956[(2)] = null);

(statearr_30614_31956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (4))){
var inst_30588 = (state_30611[(7)]);
var inst_30588__$1 = (state_30611[(2)]);
var inst_30589 = (inst_30588__$1 == null);
var state_30611__$1 = (function (){var statearr_30615 = state_30611;
(statearr_30615[(7)] = inst_30588__$1);

return statearr_30615;
})();
if(cljs.core.truth_(inst_30589)){
var statearr_30616_31959 = state_30611__$1;
(statearr_30616_31959[(1)] = (5));

} else {
var statearr_30617_31960 = state_30611__$1;
(statearr_30617_31960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (13))){
var state_30611__$1 = state_30611;
var statearr_30618_31963 = state_30611__$1;
(statearr_30618_31963[(2)] = null);

(statearr_30618_31963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (6))){
var inst_30588 = (state_30611[(7)]);
var inst_30594 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30588) : p.call(null,inst_30588));
var state_30611__$1 = state_30611;
if(cljs.core.truth_(inst_30594)){
var statearr_30619_31964 = state_30611__$1;
(statearr_30619_31964[(1)] = (9));

} else {
var statearr_30620_31965 = state_30611__$1;
(statearr_30620_31965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (3))){
var inst_30609 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30611__$1,inst_30609);
} else {
if((state_val_30612 === (12))){
var state_30611__$1 = state_30611;
var statearr_30621_31966 = state_30611__$1;
(statearr_30621_31966[(2)] = null);

(statearr_30621_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (2))){
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30611__$1,(4),ch);
} else {
if((state_val_30612 === (11))){
var inst_30588 = (state_30611[(7)]);
var inst_30598 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30611__$1,(8),inst_30598,inst_30588);
} else {
if((state_val_30612 === (9))){
var state_30611__$1 = state_30611;
var statearr_30622_31967 = state_30611__$1;
(statearr_30622_31967[(2)] = tc);

(statearr_30622_31967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (5))){
var inst_30591 = cljs.core.async.close_BANG_(tc);
var inst_30592 = cljs.core.async.close_BANG_(fc);
var state_30611__$1 = (function (){var statearr_30623 = state_30611;
(statearr_30623[(8)] = inst_30591);

return statearr_30623;
})();
var statearr_30624_31968 = state_30611__$1;
(statearr_30624_31968[(2)] = inst_30592);

(statearr_30624_31968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (14))){
var inst_30605 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30625_31969 = state_30611__$1;
(statearr_30625_31969[(2)] = inst_30605);

(statearr_30625_31969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (10))){
var state_30611__$1 = state_30611;
var statearr_30626_31970 = state_30611__$1;
(statearr_30626_31970[(2)] = fc);

(statearr_30626_31970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (8))){
var inst_30600 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
if(cljs.core.truth_(inst_30600)){
var statearr_30627_31971 = state_30611__$1;
(statearr_30627_31971[(1)] = (12));

} else {
var statearr_30628_31972 = state_30611__$1;
(statearr_30628_31972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null,null,null];
(statearr_30629[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_30611){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30611);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30630){var ex__30239__auto__ = e30630;
var statearr_30631_31973 = state_30611;
(statearr_30631_31973[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30611[(4)]))){
var statearr_30632_31974 = state_30611;
(statearr_30632_31974[(1)] = cljs.core.first((state_30611[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31975 = state_30611;
state_30611 = G__31975;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_30611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_30611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30633 = f__30268__auto__();
(statearr_30633[(6)] = c__30267__auto___31954);

return statearr_30633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30655){
var state_val_30656 = (state_30655[(1)]);
if((state_val_30656 === (7))){
var inst_30651 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30657_31976 = state_30655__$1;
(statearr_30657_31976[(2)] = inst_30651);

(statearr_30657_31976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (1))){
var inst_30634 = init;
var inst_30635 = inst_30634;
var state_30655__$1 = (function (){var statearr_30658 = state_30655;
(statearr_30658[(7)] = inst_30635);

return statearr_30658;
})();
var statearr_30659_31977 = state_30655__$1;
(statearr_30659_31977[(2)] = null);

(statearr_30659_31977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (4))){
var inst_30638 = (state_30655[(8)]);
var inst_30638__$1 = (state_30655[(2)]);
var inst_30639 = (inst_30638__$1 == null);
var state_30655__$1 = (function (){var statearr_30660 = state_30655;
(statearr_30660[(8)] = inst_30638__$1);

return statearr_30660;
})();
if(cljs.core.truth_(inst_30639)){
var statearr_30661_31978 = state_30655__$1;
(statearr_30661_31978[(1)] = (5));

} else {
var statearr_30662_31979 = state_30655__$1;
(statearr_30662_31979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (6))){
var inst_30635 = (state_30655[(7)]);
var inst_30642 = (state_30655[(9)]);
var inst_30638 = (state_30655[(8)]);
var inst_30642__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30635,inst_30638) : f.call(null,inst_30635,inst_30638));
var inst_30643 = cljs.core.reduced_QMARK_(inst_30642__$1);
var state_30655__$1 = (function (){var statearr_30663 = state_30655;
(statearr_30663[(9)] = inst_30642__$1);

return statearr_30663;
})();
if(inst_30643){
var statearr_30664_31980 = state_30655__$1;
(statearr_30664_31980[(1)] = (8));

} else {
var statearr_30665_31981 = state_30655__$1;
(statearr_30665_31981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (3))){
var inst_30653 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30655__$1,inst_30653);
} else {
if((state_val_30656 === (2))){
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30655__$1,(4),ch);
} else {
if((state_val_30656 === (9))){
var inst_30642 = (state_30655[(9)]);
var inst_30635 = inst_30642;
var state_30655__$1 = (function (){var statearr_30666 = state_30655;
(statearr_30666[(7)] = inst_30635);

return statearr_30666;
})();
var statearr_30667_31982 = state_30655__$1;
(statearr_30667_31982[(2)] = null);

(statearr_30667_31982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (5))){
var inst_30635 = (state_30655[(7)]);
var state_30655__$1 = state_30655;
var statearr_30668_31983 = state_30655__$1;
(statearr_30668_31983[(2)] = inst_30635);

(statearr_30668_31983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (10))){
var inst_30649 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30669_31984 = state_30655__$1;
(statearr_30669_31984[(2)] = inst_30649);

(statearr_30669_31984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (8))){
var inst_30642 = (state_30655[(9)]);
var inst_30645 = cljs.core.deref(inst_30642);
var state_30655__$1 = state_30655;
var statearr_30670_31985 = state_30655__$1;
(statearr_30670_31985[(2)] = inst_30645);

(statearr_30670_31985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30236__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30236__auto____0 = (function (){
var statearr_30671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30671[(0)] = cljs$core$async$reduce_$_state_machine__30236__auto__);

(statearr_30671[(1)] = (1));

return statearr_30671;
});
var cljs$core$async$reduce_$_state_machine__30236__auto____1 = (function (state_30655){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30655);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30672){var ex__30239__auto__ = e30672;
var statearr_30673_31991 = state_30655;
(statearr_30673_31991[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30655[(4)]))){
var statearr_30674_31992 = state_30655;
(statearr_30674_31992[(1)] = cljs.core.first((state_30655[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31993 = state_30655;
state_30655 = G__31993;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30236__auto__ = function(state_30655){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30236__auto____1.call(this,state_30655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30236__auto____0;
cljs$core$async$reduce_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30236__auto____1;
return cljs$core$async$reduce_$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30675 = f__30268__auto__();
(statearr_30675[(6)] = c__30267__auto__);

return statearr_30675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

return c__30267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30681){
var state_val_30682 = (state_30681[(1)]);
if((state_val_30682 === (1))){
var inst_30676 = cljs.core.async.reduce(f__$1,init,ch);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30681__$1,(2),inst_30676);
} else {
if((state_val_30682 === (2))){
var inst_30678 = (state_30681[(2)]);
var inst_30679 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30678) : f__$1.call(null,inst_30678));
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30681__$1,inst_30679);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30236__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30236__auto____0 = (function (){
var statearr_30683 = [null,null,null,null,null,null,null];
(statearr_30683[(0)] = cljs$core$async$transduce_$_state_machine__30236__auto__);

(statearr_30683[(1)] = (1));

return statearr_30683;
});
var cljs$core$async$transduce_$_state_machine__30236__auto____1 = (function (state_30681){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30681);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30684){var ex__30239__auto__ = e30684;
var statearr_30685_31994 = state_30681;
(statearr_30685_31994[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30681[(4)]))){
var statearr_30686_31995 = state_30681;
(statearr_30686_31995[(1)] = cljs.core.first((state_30681[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32003 = state_30681;
state_30681 = G__32003;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30236__auto__ = function(state_30681){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30236__auto____1.call(this,state_30681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30236__auto____0;
cljs$core$async$transduce_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30236__auto____1;
return cljs$core$async$transduce_$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30687 = f__30268__auto__();
(statearr_30687[(6)] = c__30267__auto__);

return statearr_30687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

return c__30267__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30689 = arguments.length;
switch (G__30689) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30714){
var state_val_30715 = (state_30714[(1)]);
if((state_val_30715 === (7))){
var inst_30696 = (state_30714[(2)]);
var state_30714__$1 = state_30714;
var statearr_30716_32008 = state_30714__$1;
(statearr_30716_32008[(2)] = inst_30696);

(statearr_30716_32008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (1))){
var inst_30690 = cljs.core.seq(coll);
var inst_30691 = inst_30690;
var state_30714__$1 = (function (){var statearr_30717 = state_30714;
(statearr_30717[(7)] = inst_30691);

return statearr_30717;
})();
var statearr_30718_32009 = state_30714__$1;
(statearr_30718_32009[(2)] = null);

(statearr_30718_32009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (4))){
var inst_30691 = (state_30714[(7)]);
var inst_30694 = cljs.core.first(inst_30691);
var state_30714__$1 = state_30714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30714__$1,(7),ch,inst_30694);
} else {
if((state_val_30715 === (13))){
var inst_30708 = (state_30714[(2)]);
var state_30714__$1 = state_30714;
var statearr_30719_32010 = state_30714__$1;
(statearr_30719_32010[(2)] = inst_30708);

(statearr_30719_32010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (6))){
var inst_30699 = (state_30714[(2)]);
var state_30714__$1 = state_30714;
if(cljs.core.truth_(inst_30699)){
var statearr_30720_32021 = state_30714__$1;
(statearr_30720_32021[(1)] = (8));

} else {
var statearr_30721_32022 = state_30714__$1;
(statearr_30721_32022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (3))){
var inst_30712 = (state_30714[(2)]);
var state_30714__$1 = state_30714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30714__$1,inst_30712);
} else {
if((state_val_30715 === (12))){
var state_30714__$1 = state_30714;
var statearr_30722_32023 = state_30714__$1;
(statearr_30722_32023[(2)] = null);

(statearr_30722_32023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (2))){
var inst_30691 = (state_30714[(7)]);
var state_30714__$1 = state_30714;
if(cljs.core.truth_(inst_30691)){
var statearr_30723_32024 = state_30714__$1;
(statearr_30723_32024[(1)] = (4));

} else {
var statearr_30724_32025 = state_30714__$1;
(statearr_30724_32025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (11))){
var inst_30705 = cljs.core.async.close_BANG_(ch);
var state_30714__$1 = state_30714;
var statearr_30725_32028 = state_30714__$1;
(statearr_30725_32028[(2)] = inst_30705);

(statearr_30725_32028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (9))){
var state_30714__$1 = state_30714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30726_32029 = state_30714__$1;
(statearr_30726_32029[(1)] = (11));

} else {
var statearr_30727_32030 = state_30714__$1;
(statearr_30727_32030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (5))){
var inst_30691 = (state_30714[(7)]);
var state_30714__$1 = state_30714;
var statearr_30728_32031 = state_30714__$1;
(statearr_30728_32031[(2)] = inst_30691);

(statearr_30728_32031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (10))){
var inst_30710 = (state_30714[(2)]);
var state_30714__$1 = state_30714;
var statearr_30729_32032 = state_30714__$1;
(statearr_30729_32032[(2)] = inst_30710);

(statearr_30729_32032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30715 === (8))){
var inst_30691 = (state_30714[(7)]);
var inst_30701 = cljs.core.next(inst_30691);
var inst_30691__$1 = inst_30701;
var state_30714__$1 = (function (){var statearr_30730 = state_30714;
(statearr_30730[(7)] = inst_30691__$1);

return statearr_30730;
})();
var statearr_30731_32033 = state_30714__$1;
(statearr_30731_32033[(2)] = null);

(statearr_30731_32033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_30732 = [null,null,null,null,null,null,null,null];
(statearr_30732[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_30732[(1)] = (1));

return statearr_30732;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_30714){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30714);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30733){var ex__30239__auto__ = e30733;
var statearr_30734_32034 = state_30714;
(statearr_30734_32034[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30714[(4)]))){
var statearr_30735_32035 = state_30714;
(statearr_30735_32035[(1)] = cljs.core.first((state_30714[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32036 = state_30714;
state_30714 = G__32036;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_30714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_30714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30736 = f__30268__auto__();
(statearr_30736[(6)] = c__30267__auto__);

return statearr_30736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

return c__30267__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30738 = arguments.length;
switch (G__30738) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32038 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32038(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32043 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32043(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32044 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32044(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32045 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32045(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30739 = (function (ch,cs,meta30740){
this.ch = ch;
this.cs = cs;
this.meta30740 = meta30740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30741,meta30740__$1){
var self__ = this;
var _30741__$1 = this;
return (new cljs.core.async.t_cljs$core$async30739(self__.ch,self__.cs,meta30740__$1));
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30741){
var self__ = this;
var _30741__$1 = this;
return self__.meta30740;
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30740","meta30740",127460115,null)], null);
}));

(cljs.core.async.t_cljs$core$async30739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30739");

(cljs.core.async.t_cljs$core$async30739.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30739.
 */
cljs.core.async.__GT_t_cljs$core$async30739 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30739(ch__$1,cs__$1,meta30740){
return (new cljs.core.async.t_cljs$core$async30739(ch__$1,cs__$1,meta30740));
});

}

return (new cljs.core.async.t_cljs$core$async30739(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30267__auto___32056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_30874){
var state_val_30875 = (state_30874[(1)]);
if((state_val_30875 === (7))){
var inst_30870 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30876_32057 = state_30874__$1;
(statearr_30876_32057[(2)] = inst_30870);

(statearr_30876_32057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (20))){
var inst_30775 = (state_30874[(7)]);
var inst_30787 = cljs.core.first(inst_30775);
var inst_30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30787,(0),null);
var inst_30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30787,(1),null);
var state_30874__$1 = (function (){var statearr_30877 = state_30874;
(statearr_30877[(8)] = inst_30788);

return statearr_30877;
})();
if(cljs.core.truth_(inst_30789)){
var statearr_30878_32058 = state_30874__$1;
(statearr_30878_32058[(1)] = (22));

} else {
var statearr_30879_32059 = state_30874__$1;
(statearr_30879_32059[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (27))){
var inst_30824 = (state_30874[(9)]);
var inst_30819 = (state_30874[(10)]);
var inst_30744 = (state_30874[(11)]);
var inst_30817 = (state_30874[(12)]);
var inst_30824__$1 = cljs.core._nth(inst_30817,inst_30819);
var inst_30825 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30824__$1,inst_30744,done);
var state_30874__$1 = (function (){var statearr_30880 = state_30874;
(statearr_30880[(9)] = inst_30824__$1);

return statearr_30880;
})();
if(cljs.core.truth_(inst_30825)){
var statearr_30881_32060 = state_30874__$1;
(statearr_30881_32060[(1)] = (30));

} else {
var statearr_30882_32061 = state_30874__$1;
(statearr_30882_32061[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (1))){
var state_30874__$1 = state_30874;
var statearr_30883_32062 = state_30874__$1;
(statearr_30883_32062[(2)] = null);

(statearr_30883_32062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (24))){
var inst_30775 = (state_30874[(7)]);
var inst_30794 = (state_30874[(2)]);
var inst_30795 = cljs.core.next(inst_30775);
var inst_30753 = inst_30795;
var inst_30754 = null;
var inst_30755 = (0);
var inst_30756 = (0);
var state_30874__$1 = (function (){var statearr_30884 = state_30874;
(statearr_30884[(13)] = inst_30753);

(statearr_30884[(14)] = inst_30794);

(statearr_30884[(15)] = inst_30754);

(statearr_30884[(16)] = inst_30755);

(statearr_30884[(17)] = inst_30756);

return statearr_30884;
})();
var statearr_30885_32066 = state_30874__$1;
(statearr_30885_32066[(2)] = null);

(statearr_30885_32066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (39))){
var state_30874__$1 = state_30874;
var statearr_30889_32067 = state_30874__$1;
(statearr_30889_32067[(2)] = null);

(statearr_30889_32067[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (4))){
var inst_30744 = (state_30874[(11)]);
var inst_30744__$1 = (state_30874[(2)]);
var inst_30745 = (inst_30744__$1 == null);
var state_30874__$1 = (function (){var statearr_30890 = state_30874;
(statearr_30890[(11)] = inst_30744__$1);

return statearr_30890;
})();
if(cljs.core.truth_(inst_30745)){
var statearr_30891_32068 = state_30874__$1;
(statearr_30891_32068[(1)] = (5));

} else {
var statearr_30892_32069 = state_30874__$1;
(statearr_30892_32069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (15))){
var inst_30753 = (state_30874[(13)]);
var inst_30754 = (state_30874[(15)]);
var inst_30755 = (state_30874[(16)]);
var inst_30756 = (state_30874[(17)]);
var inst_30771 = (state_30874[(2)]);
var inst_30772 = (inst_30756 + (1));
var tmp30886 = inst_30753;
var tmp30887 = inst_30754;
var tmp30888 = inst_30755;
var inst_30753__$1 = tmp30886;
var inst_30754__$1 = tmp30887;
var inst_30755__$1 = tmp30888;
var inst_30756__$1 = inst_30772;
var state_30874__$1 = (function (){var statearr_30893 = state_30874;
(statearr_30893[(13)] = inst_30753__$1);

(statearr_30893[(18)] = inst_30771);

(statearr_30893[(15)] = inst_30754__$1);

(statearr_30893[(16)] = inst_30755__$1);

(statearr_30893[(17)] = inst_30756__$1);

return statearr_30893;
})();
var statearr_30894_32070 = state_30874__$1;
(statearr_30894_32070[(2)] = null);

(statearr_30894_32070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (21))){
var inst_30798 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30898_32071 = state_30874__$1;
(statearr_30898_32071[(2)] = inst_30798);

(statearr_30898_32071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (31))){
var inst_30824 = (state_30874[(9)]);
var inst_30828 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30824);
var state_30874__$1 = state_30874;
var statearr_30899_32072 = state_30874__$1;
(statearr_30899_32072[(2)] = inst_30828);

(statearr_30899_32072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (32))){
var inst_30816 = (state_30874[(19)]);
var inst_30819 = (state_30874[(10)]);
var inst_30817 = (state_30874[(12)]);
var inst_30818 = (state_30874[(20)]);
var inst_30830 = (state_30874[(2)]);
var inst_30831 = (inst_30819 + (1));
var tmp30895 = inst_30816;
var tmp30896 = inst_30817;
var tmp30897 = inst_30818;
var inst_30816__$1 = tmp30895;
var inst_30817__$1 = tmp30896;
var inst_30818__$1 = tmp30897;
var inst_30819__$1 = inst_30831;
var state_30874__$1 = (function (){var statearr_30900 = state_30874;
(statearr_30900[(21)] = inst_30830);

(statearr_30900[(19)] = inst_30816__$1);

(statearr_30900[(10)] = inst_30819__$1);

(statearr_30900[(12)] = inst_30817__$1);

(statearr_30900[(20)] = inst_30818__$1);

return statearr_30900;
})();
var statearr_30901_32074 = state_30874__$1;
(statearr_30901_32074[(2)] = null);

(statearr_30901_32074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (40))){
var inst_30843 = (state_30874[(22)]);
var inst_30847 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30843);
var state_30874__$1 = state_30874;
var statearr_30902_32075 = state_30874__$1;
(statearr_30902_32075[(2)] = inst_30847);

(statearr_30902_32075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (33))){
var inst_30834 = (state_30874[(23)]);
var inst_30836 = cljs.core.chunked_seq_QMARK_(inst_30834);
var state_30874__$1 = state_30874;
if(inst_30836){
var statearr_30903_32076 = state_30874__$1;
(statearr_30903_32076[(1)] = (36));

} else {
var statearr_30904_32077 = state_30874__$1;
(statearr_30904_32077[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (13))){
var inst_30765 = (state_30874[(24)]);
var inst_30768 = cljs.core.async.close_BANG_(inst_30765);
var state_30874__$1 = state_30874;
var statearr_30905_32082 = state_30874__$1;
(statearr_30905_32082[(2)] = inst_30768);

(statearr_30905_32082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (22))){
var inst_30788 = (state_30874[(8)]);
var inst_30791 = cljs.core.async.close_BANG_(inst_30788);
var state_30874__$1 = state_30874;
var statearr_30906_32084 = state_30874__$1;
(statearr_30906_32084[(2)] = inst_30791);

(statearr_30906_32084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (36))){
var inst_30834 = (state_30874[(23)]);
var inst_30838 = cljs.core.chunk_first(inst_30834);
var inst_30839 = cljs.core.chunk_rest(inst_30834);
var inst_30840 = cljs.core.count(inst_30838);
var inst_30816 = inst_30839;
var inst_30817 = inst_30838;
var inst_30818 = inst_30840;
var inst_30819 = (0);
var state_30874__$1 = (function (){var statearr_30907 = state_30874;
(statearr_30907[(19)] = inst_30816);

(statearr_30907[(10)] = inst_30819);

(statearr_30907[(12)] = inst_30817);

(statearr_30907[(20)] = inst_30818);

return statearr_30907;
})();
var statearr_30908_32085 = state_30874__$1;
(statearr_30908_32085[(2)] = null);

(statearr_30908_32085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (41))){
var inst_30834 = (state_30874[(23)]);
var inst_30849 = (state_30874[(2)]);
var inst_30850 = cljs.core.next(inst_30834);
var inst_30816 = inst_30850;
var inst_30817 = null;
var inst_30818 = (0);
var inst_30819 = (0);
var state_30874__$1 = (function (){var statearr_30909 = state_30874;
(statearr_30909[(25)] = inst_30849);

(statearr_30909[(19)] = inst_30816);

(statearr_30909[(10)] = inst_30819);

(statearr_30909[(12)] = inst_30817);

(statearr_30909[(20)] = inst_30818);

return statearr_30909;
})();
var statearr_30910_32086 = state_30874__$1;
(statearr_30910_32086[(2)] = null);

(statearr_30910_32086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (43))){
var state_30874__$1 = state_30874;
var statearr_30911_32087 = state_30874__$1;
(statearr_30911_32087[(2)] = null);

(statearr_30911_32087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (29))){
var inst_30858 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30912_32088 = state_30874__$1;
(statearr_30912_32088[(2)] = inst_30858);

(statearr_30912_32088[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (44))){
var inst_30867 = (state_30874[(2)]);
var state_30874__$1 = (function (){var statearr_30913 = state_30874;
(statearr_30913[(26)] = inst_30867);

return statearr_30913;
})();
var statearr_30914_32089 = state_30874__$1;
(statearr_30914_32089[(2)] = null);

(statearr_30914_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (6))){
var inst_30808 = (state_30874[(27)]);
var inst_30807 = cljs.core.deref(cs);
var inst_30808__$1 = cljs.core.keys(inst_30807);
var inst_30809 = cljs.core.count(inst_30808__$1);
var inst_30810 = cljs.core.reset_BANG_(dctr,inst_30809);
var inst_30815 = cljs.core.seq(inst_30808__$1);
var inst_30816 = inst_30815;
var inst_30817 = null;
var inst_30818 = (0);
var inst_30819 = (0);
var state_30874__$1 = (function (){var statearr_30915 = state_30874;
(statearr_30915[(27)] = inst_30808__$1);

(statearr_30915[(19)] = inst_30816);

(statearr_30915[(28)] = inst_30810);

(statearr_30915[(10)] = inst_30819);

(statearr_30915[(12)] = inst_30817);

(statearr_30915[(20)] = inst_30818);

return statearr_30915;
})();
var statearr_30916_32095 = state_30874__$1;
(statearr_30916_32095[(2)] = null);

(statearr_30916_32095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (28))){
var inst_30834 = (state_30874[(23)]);
var inst_30816 = (state_30874[(19)]);
var inst_30834__$1 = cljs.core.seq(inst_30816);
var state_30874__$1 = (function (){var statearr_30917 = state_30874;
(statearr_30917[(23)] = inst_30834__$1);

return statearr_30917;
})();
if(inst_30834__$1){
var statearr_30918_32096 = state_30874__$1;
(statearr_30918_32096[(1)] = (33));

} else {
var statearr_30919_32097 = state_30874__$1;
(statearr_30919_32097[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (25))){
var inst_30819 = (state_30874[(10)]);
var inst_30818 = (state_30874[(20)]);
var inst_30821 = (inst_30819 < inst_30818);
var inst_30822 = inst_30821;
var state_30874__$1 = state_30874;
if(cljs.core.truth_(inst_30822)){
var statearr_30920_32098 = state_30874__$1;
(statearr_30920_32098[(1)] = (27));

} else {
var statearr_30921_32099 = state_30874__$1;
(statearr_30921_32099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (34))){
var state_30874__$1 = state_30874;
var statearr_30922_32100 = state_30874__$1;
(statearr_30922_32100[(2)] = null);

(statearr_30922_32100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (17))){
var state_30874__$1 = state_30874;
var statearr_30923_32101 = state_30874__$1;
(statearr_30923_32101[(2)] = null);

(statearr_30923_32101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (3))){
var inst_30872 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30874__$1,inst_30872);
} else {
if((state_val_30875 === (12))){
var inst_30803 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30924_32102 = state_30874__$1;
(statearr_30924_32102[(2)] = inst_30803);

(statearr_30924_32102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (2))){
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30874__$1,(4),ch);
} else {
if((state_val_30875 === (23))){
var state_30874__$1 = state_30874;
var statearr_30925_32103 = state_30874__$1;
(statearr_30925_32103[(2)] = null);

(statearr_30925_32103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (35))){
var inst_30856 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30926_32104 = state_30874__$1;
(statearr_30926_32104[(2)] = inst_30856);

(statearr_30926_32104[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (19))){
var inst_30775 = (state_30874[(7)]);
var inst_30779 = cljs.core.chunk_first(inst_30775);
var inst_30780 = cljs.core.chunk_rest(inst_30775);
var inst_30781 = cljs.core.count(inst_30779);
var inst_30753 = inst_30780;
var inst_30754 = inst_30779;
var inst_30755 = inst_30781;
var inst_30756 = (0);
var state_30874__$1 = (function (){var statearr_30927 = state_30874;
(statearr_30927[(13)] = inst_30753);

(statearr_30927[(15)] = inst_30754);

(statearr_30927[(16)] = inst_30755);

(statearr_30927[(17)] = inst_30756);

return statearr_30927;
})();
var statearr_30928_32108 = state_30874__$1;
(statearr_30928_32108[(2)] = null);

(statearr_30928_32108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (11))){
var inst_30753 = (state_30874[(13)]);
var inst_30775 = (state_30874[(7)]);
var inst_30775__$1 = cljs.core.seq(inst_30753);
var state_30874__$1 = (function (){var statearr_30929 = state_30874;
(statearr_30929[(7)] = inst_30775__$1);

return statearr_30929;
})();
if(inst_30775__$1){
var statearr_30930_32109 = state_30874__$1;
(statearr_30930_32109[(1)] = (16));

} else {
var statearr_30931_32110 = state_30874__$1;
(statearr_30931_32110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (9))){
var inst_30805 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30932_32111 = state_30874__$1;
(statearr_30932_32111[(2)] = inst_30805);

(statearr_30932_32111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (5))){
var inst_30751 = cljs.core.deref(cs);
var inst_30752 = cljs.core.seq(inst_30751);
var inst_30753 = inst_30752;
var inst_30754 = null;
var inst_30755 = (0);
var inst_30756 = (0);
var state_30874__$1 = (function (){var statearr_30933 = state_30874;
(statearr_30933[(13)] = inst_30753);

(statearr_30933[(15)] = inst_30754);

(statearr_30933[(16)] = inst_30755);

(statearr_30933[(17)] = inst_30756);

return statearr_30933;
})();
var statearr_30934_32112 = state_30874__$1;
(statearr_30934_32112[(2)] = null);

(statearr_30934_32112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (14))){
var state_30874__$1 = state_30874;
var statearr_30935_32113 = state_30874__$1;
(statearr_30935_32113[(2)] = null);

(statearr_30935_32113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (45))){
var inst_30864 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30936_32114 = state_30874__$1;
(statearr_30936_32114[(2)] = inst_30864);

(statearr_30936_32114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (26))){
var inst_30808 = (state_30874[(27)]);
var inst_30860 = (state_30874[(2)]);
var inst_30861 = cljs.core.seq(inst_30808);
var state_30874__$1 = (function (){var statearr_30937 = state_30874;
(statearr_30937[(29)] = inst_30860);

return statearr_30937;
})();
if(inst_30861){
var statearr_30938_32115 = state_30874__$1;
(statearr_30938_32115[(1)] = (42));

} else {
var statearr_30939_32116 = state_30874__$1;
(statearr_30939_32116[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (16))){
var inst_30775 = (state_30874[(7)]);
var inst_30777 = cljs.core.chunked_seq_QMARK_(inst_30775);
var state_30874__$1 = state_30874;
if(inst_30777){
var statearr_30940_32117 = state_30874__$1;
(statearr_30940_32117[(1)] = (19));

} else {
var statearr_30941_32118 = state_30874__$1;
(statearr_30941_32118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (38))){
var inst_30853 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30942_32119 = state_30874__$1;
(statearr_30942_32119[(2)] = inst_30853);

(statearr_30942_32119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (30))){
var state_30874__$1 = state_30874;
var statearr_30943_32120 = state_30874__$1;
(statearr_30943_32120[(2)] = null);

(statearr_30943_32120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (10))){
var inst_30754 = (state_30874[(15)]);
var inst_30756 = (state_30874[(17)]);
var inst_30764 = cljs.core._nth(inst_30754,inst_30756);
var inst_30765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30764,(0),null);
var inst_30766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30764,(1),null);
var state_30874__$1 = (function (){var statearr_30944 = state_30874;
(statearr_30944[(24)] = inst_30765);

return statearr_30944;
})();
if(cljs.core.truth_(inst_30766)){
var statearr_30945_32122 = state_30874__$1;
(statearr_30945_32122[(1)] = (13));

} else {
var statearr_30946_32123 = state_30874__$1;
(statearr_30946_32123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (18))){
var inst_30801 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30947_32124 = state_30874__$1;
(statearr_30947_32124[(2)] = inst_30801);

(statearr_30947_32124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (42))){
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30874__$1,(45),dchan);
} else {
if((state_val_30875 === (37))){
var inst_30834 = (state_30874[(23)]);
var inst_30744 = (state_30874[(11)]);
var inst_30843 = (state_30874[(22)]);
var inst_30843__$1 = cljs.core.first(inst_30834);
var inst_30844 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30843__$1,inst_30744,done);
var state_30874__$1 = (function (){var statearr_30948 = state_30874;
(statearr_30948[(22)] = inst_30843__$1);

return statearr_30948;
})();
if(cljs.core.truth_(inst_30844)){
var statearr_30949_32125 = state_30874__$1;
(statearr_30949_32125[(1)] = (39));

} else {
var statearr_30950_32126 = state_30874__$1;
(statearr_30950_32126[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30875 === (8))){
var inst_30755 = (state_30874[(16)]);
var inst_30756 = (state_30874[(17)]);
var inst_30758 = (inst_30756 < inst_30755);
var inst_30759 = inst_30758;
var state_30874__$1 = state_30874;
if(cljs.core.truth_(inst_30759)){
var statearr_30951_32127 = state_30874__$1;
(statearr_30951_32127[(1)] = (10));

} else {
var statearr_30952_32128 = state_30874__$1;
(statearr_30952_32128[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30236__auto__ = null;
var cljs$core$async$mult_$_state_machine__30236__auto____0 = (function (){
var statearr_30953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30953[(0)] = cljs$core$async$mult_$_state_machine__30236__auto__);

(statearr_30953[(1)] = (1));

return statearr_30953;
});
var cljs$core$async$mult_$_state_machine__30236__auto____1 = (function (state_30874){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_30874);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e30954){var ex__30239__auto__ = e30954;
var statearr_30955_32129 = state_30874;
(statearr_30955_32129[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_30874[(4)]))){
var statearr_30956_32130 = state_30874;
(statearr_30956_32130[(1)] = cljs.core.first((state_30874[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32131 = state_30874;
state_30874 = G__32131;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30236__auto__ = function(state_30874){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30236__auto____1.call(this,state_30874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30236__auto____0;
cljs$core$async$mult_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30236__auto____1;
return cljs$core$async$mult_$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_30957 = f__30268__auto__();
(statearr_30957[(6)] = c__30267__auto___32056);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30959 = arguments.length;
switch (G__30959) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32133 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32133(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32142 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32142(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32144 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32144(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32146 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32146(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32147 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32147(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32148 = arguments.length;
var i__4772__auto___32149 = (0);
while(true){
if((i__4772__auto___32149 < len__4771__auto___32148)){
args__4777__auto__.push((arguments[i__4772__auto___32149]));

var G__32150 = (i__4772__auto___32149 + (1));
i__4772__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30964){
var map__30965 = p__30964;
var map__30965__$1 = cljs.core.__destructure_map(map__30965);
var opts = map__30965__$1;
var statearr_30966_32151 = state;
(statearr_30966_32151[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30967_32152 = state;
(statearr_30967_32152[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30968_32153 = state;
(statearr_30968_32153[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30960){
var G__30961 = cljs.core.first(seq30960);
var seq30960__$1 = cljs.core.next(seq30960);
var G__30962 = cljs.core.first(seq30960__$1);
var seq30960__$2 = cljs.core.next(seq30960__$1);
var G__30963 = cljs.core.first(seq30960__$2);
var seq30960__$3 = cljs.core.next(seq30960__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30961,G__30962,G__30963,seq30960__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30969 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30970){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30970 = meta30970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30971,meta30970__$1){
var self__ = this;
var _30971__$1 = this;
return (new cljs.core.async.t_cljs$core$async30969(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30970__$1));
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30971){
var self__ = this;
var _30971__$1 = this;
return self__.meta30970;
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30969.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30970","meta30970",-1866707177,null)], null);
}));

(cljs.core.async.t_cljs$core$async30969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30969");

(cljs.core.async.t_cljs$core$async30969.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30969.
 */
cljs.core.async.__GT_t_cljs$core$async30969 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30969(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30970){
return (new cljs.core.async.t_cljs$core$async30969(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30970));
});

}

return (new cljs.core.async.t_cljs$core$async30969(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30267__auto___32164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31033){
var state_val_31034 = (state_31033[(1)]);
if((state_val_31034 === (7))){
var inst_31029 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31035_32168 = state_31033__$1;
(statearr_31035_32168[(2)] = inst_31029);

(statearr_31035_32168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (20))){
var inst_31023 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31036_32169 = state_31033__$1;
(statearr_31036_32169[(2)] = inst_31023);

(statearr_31036_32169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (1))){
var inst_30975 = calc_state();
var inst_30976 = cljs.core.__destructure_map(inst_30975);
var inst_30977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30976,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30976,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30976,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30980 = inst_30975;
var state_31033__$1 = (function (){var statearr_31037 = state_31033;
(statearr_31037[(7)] = inst_30978);

(statearr_31037[(8)] = inst_30977);

(statearr_31037[(9)] = inst_30980);

(statearr_31037[(10)] = inst_30979);

return statearr_31037;
})();
var statearr_31038_32173 = state_31033__$1;
(statearr_31038_32173[(2)] = null);

(statearr_31038_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (4))){
var inst_30992 = (state_31033[(11)]);
var inst_30993 = (state_31033[(12)]);
var inst_30991 = (state_31033[(2)]);
var inst_30992__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30991,(0),null);
var inst_30993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30991,(1),null);
var inst_30994 = (inst_30992__$1 == null);
var inst_30995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30993__$1,change);
var inst_30996 = ((inst_30994) || (inst_30995));
var state_31033__$1 = (function (){var statearr_31039 = state_31033;
(statearr_31039[(11)] = inst_30992__$1);

(statearr_31039[(12)] = inst_30993__$1);

return statearr_31039;
})();
if(cljs.core.truth_(inst_30996)){
var statearr_31040_32187 = state_31033__$1;
(statearr_31040_32187[(1)] = (5));

} else {
var statearr_31041_32188 = state_31033__$1;
(statearr_31041_32188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (15))){
var inst_30983 = (state_31033[(13)]);
var inst_30980 = inst_30983;
var state_31033__$1 = (function (){var statearr_31042 = state_31033;
(statearr_31042[(9)] = inst_30980);

return statearr_31042;
})();
var statearr_31043_32189 = state_31033__$1;
(statearr_31043_32189[(2)] = null);

(statearr_31043_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (13))){
var inst_31015 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_31015)){
var statearr_31044_32190 = state_31033__$1;
(statearr_31044_32190[(1)] = (14));

} else {
var statearr_31045_32191 = state_31033__$1;
(statearr_31045_32191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (6))){
var inst_31007 = (state_31033[(14)]);
var inst_30984 = (state_31033[(15)]);
var inst_30993 = (state_31033[(12)]);
var inst_31007__$1 = (inst_30984.cljs$core$IFn$_invoke$arity$1 ? inst_30984.cljs$core$IFn$_invoke$arity$1(inst_30993) : inst_30984.call(null,inst_30993));
var state_31033__$1 = (function (){var statearr_31046 = state_31033;
(statearr_31046[(14)] = inst_31007__$1);

return statearr_31046;
})();
if(cljs.core.truth_(inst_31007__$1)){
var statearr_31047_32192 = state_31033__$1;
(statearr_31047_32192[(1)] = (11));

} else {
var statearr_31048_32193 = state_31033__$1;
(statearr_31048_32193[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (17))){
var inst_31018 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_31018)){
var statearr_31049_32194 = state_31033__$1;
(statearr_31049_32194[(1)] = (18));

} else {
var statearr_31050_32195 = state_31033__$1;
(statearr_31050_32195[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (3))){
var inst_31031 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31033__$1,inst_31031);
} else {
if((state_val_31034 === (12))){
var inst_30985 = (state_31033[(16)]);
var inst_30984 = (state_31033[(15)]);
var inst_30993 = (state_31033[(12)]);
var inst_31010 = cljs.core.empty_QMARK_(inst_30984);
var inst_31011 = (inst_30985.cljs$core$IFn$_invoke$arity$1 ? inst_30985.cljs$core$IFn$_invoke$arity$1(inst_30993) : inst_30985.call(null,inst_30993));
var inst_31012 = cljs.core.not(inst_31011);
var inst_31013 = ((inst_31010) && (inst_31012));
var state_31033__$1 = state_31033;
var statearr_31051_32202 = state_31033__$1;
(statearr_31051_32202[(2)] = inst_31013);

(statearr_31051_32202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (2))){
var inst_30980 = (state_31033[(9)]);
var inst_30983 = (state_31033[(13)]);
var inst_30983__$1 = cljs.core.__destructure_map(inst_30980);
var inst_30984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30983__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30983__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30983__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31033__$1 = (function (){var statearr_31052 = state_31033;
(statearr_31052[(16)] = inst_30985);

(statearr_31052[(13)] = inst_30983__$1);

(statearr_31052[(15)] = inst_30984);

return statearr_31052;
})();
return cljs.core.async.ioc_alts_BANG_(state_31033__$1,(4),inst_30986);
} else {
if((state_val_31034 === (19))){
var state_31033__$1 = state_31033;
var statearr_31053_32203 = state_31033__$1;
(statearr_31053_32203[(2)] = null);

(statearr_31053_32203[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (11))){
var inst_31007 = (state_31033[(14)]);
var state_31033__$1 = state_31033;
var statearr_31054_32204 = state_31033__$1;
(statearr_31054_32204[(2)] = inst_31007);

(statearr_31054_32204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (9))){
var state_31033__$1 = state_31033;
var statearr_31055_32205 = state_31033__$1;
(statearr_31055_32205[(2)] = null);

(statearr_31055_32205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (5))){
var inst_30992 = (state_31033[(11)]);
var inst_30998 = (inst_30992 == null);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_30998)){
var statearr_31056_32206 = state_31033__$1;
(statearr_31056_32206[(1)] = (8));

} else {
var statearr_31057_32207 = state_31033__$1;
(statearr_31057_32207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (14))){
var inst_30992 = (state_31033[(11)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31033__$1,(17),out,inst_30992);
} else {
if((state_val_31034 === (16))){
var inst_31027 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31058_32214 = state_31033__$1;
(statearr_31058_32214[(2)] = inst_31027);

(statearr_31058_32214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (10))){
var inst_31003 = (state_31033[(2)]);
var inst_31004 = calc_state();
var inst_30980 = inst_31004;
var state_31033__$1 = (function (){var statearr_31059 = state_31033;
(statearr_31059[(9)] = inst_30980);

(statearr_31059[(17)] = inst_31003);

return statearr_31059;
})();
var statearr_31060_32215 = state_31033__$1;
(statearr_31060_32215[(2)] = null);

(statearr_31060_32215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (18))){
var inst_30983 = (state_31033[(13)]);
var inst_30980 = inst_30983;
var state_31033__$1 = (function (){var statearr_31061 = state_31033;
(statearr_31061[(9)] = inst_30980);

return statearr_31061;
})();
var statearr_31062_32216 = state_31033__$1;
(statearr_31062_32216[(2)] = null);

(statearr_31062_32216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (8))){
var inst_30993 = (state_31033[(12)]);
var inst_31000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30993);
var state_31033__$1 = state_31033;
var statearr_31063_32217 = state_31033__$1;
(statearr_31063_32217[(2)] = inst_31000);

(statearr_31063_32217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30236__auto__ = null;
var cljs$core$async$mix_$_state_machine__30236__auto____0 = (function (){
var statearr_31064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31064[(0)] = cljs$core$async$mix_$_state_machine__30236__auto__);

(statearr_31064[(1)] = (1));

return statearr_31064;
});
var cljs$core$async$mix_$_state_machine__30236__auto____1 = (function (state_31033){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31033);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31065){var ex__30239__auto__ = e31065;
var statearr_31066_32218 = state_31033;
(statearr_31066_32218[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31033[(4)]))){
var statearr_31067_32219 = state_31033;
(statearr_31067_32219[(1)] = cljs.core.first((state_31033[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32220 = state_31033;
state_31033 = G__32220;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30236__auto__ = function(state_31033){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30236__auto____1.call(this,state_31033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30236__auto____0;
cljs$core$async$mix_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30236__auto____1;
return cljs$core$async$mix_$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31068 = f__30268__auto__();
(statearr_31068[(6)] = c__30267__auto___32164);

return statearr_31068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32221 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32221(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32228 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32228(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32235 = (function() {
var G__32236 = null;
var G__32236__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32236__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32236 = function(p,v){
switch(arguments.length){
case 1:
return G__32236__1.call(this,p);
case 2:
return G__32236__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32236.cljs$core$IFn$_invoke$arity$1 = G__32236__1;
G__32236.cljs$core$IFn$_invoke$arity$2 = G__32236__2;
return G__32236;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31070 = arguments.length;
switch (G__31070) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32235(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32235(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31073 = arguments.length;
switch (G__31073) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31071_SHARP_){
if(cljs.core.truth_((p1__31071_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31071_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31071_SHARP_.call(null,topic)))){
return p1__31071_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31071_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31074 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31075){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31075 = meta31075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31076,meta31075__$1){
var self__ = this;
var _31076__$1 = this;
return (new cljs.core.async.t_cljs$core$async31074(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31075__$1));
}));

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31076){
var self__ = this;
var _31076__$1 = this;
return self__.meta31075;
}));

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31075","meta31075",-690650088,null)], null);
}));

(cljs.core.async.t_cljs$core$async31074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31074");

(cljs.core.async.t_cljs$core$async31074.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31074.
 */
cljs.core.async.__GT_t_cljs$core$async31074 = (function cljs$core$async$__GT_t_cljs$core$async31074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31075){
return (new cljs.core.async.t_cljs$core$async31074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31075));
});

}

return (new cljs.core.async.t_cljs$core$async31074(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30267__auto___32241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31148){
var state_val_31149 = (state_31148[(1)]);
if((state_val_31149 === (7))){
var inst_31144 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31150_32242 = state_31148__$1;
(statearr_31150_32242[(2)] = inst_31144);

(statearr_31150_32242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (20))){
var state_31148__$1 = state_31148;
var statearr_31151_32243 = state_31148__$1;
(statearr_31151_32243[(2)] = null);

(statearr_31151_32243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (1))){
var state_31148__$1 = state_31148;
var statearr_31152_32244 = state_31148__$1;
(statearr_31152_32244[(2)] = null);

(statearr_31152_32244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (24))){
var inst_31127 = (state_31148[(7)]);
var inst_31136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31127);
var state_31148__$1 = state_31148;
var statearr_31153_32245 = state_31148__$1;
(statearr_31153_32245[(2)] = inst_31136);

(statearr_31153_32245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (4))){
var inst_31079 = (state_31148[(8)]);
var inst_31079__$1 = (state_31148[(2)]);
var inst_31080 = (inst_31079__$1 == null);
var state_31148__$1 = (function (){var statearr_31154 = state_31148;
(statearr_31154[(8)] = inst_31079__$1);

return statearr_31154;
})();
if(cljs.core.truth_(inst_31080)){
var statearr_31155_32246 = state_31148__$1;
(statearr_31155_32246[(1)] = (5));

} else {
var statearr_31156_32247 = state_31148__$1;
(statearr_31156_32247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (15))){
var inst_31121 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31157_32248 = state_31148__$1;
(statearr_31157_32248[(2)] = inst_31121);

(statearr_31157_32248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (21))){
var inst_31141 = (state_31148[(2)]);
var state_31148__$1 = (function (){var statearr_31158 = state_31148;
(statearr_31158[(9)] = inst_31141);

return statearr_31158;
})();
var statearr_31159_32251 = state_31148__$1;
(statearr_31159_32251[(2)] = null);

(statearr_31159_32251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (13))){
var inst_31103 = (state_31148[(10)]);
var inst_31105 = cljs.core.chunked_seq_QMARK_(inst_31103);
var state_31148__$1 = state_31148;
if(inst_31105){
var statearr_31160_32252 = state_31148__$1;
(statearr_31160_32252[(1)] = (16));

} else {
var statearr_31161_32253 = state_31148__$1;
(statearr_31161_32253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (22))){
var inst_31133 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31133)){
var statearr_31162_32254 = state_31148__$1;
(statearr_31162_32254[(1)] = (23));

} else {
var statearr_31163_32255 = state_31148__$1;
(statearr_31163_32255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (6))){
var inst_31129 = (state_31148[(11)]);
var inst_31127 = (state_31148[(7)]);
var inst_31079 = (state_31148[(8)]);
var inst_31127__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31079) : topic_fn.call(null,inst_31079));
var inst_31128 = cljs.core.deref(mults);
var inst_31129__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31128,inst_31127__$1);
var state_31148__$1 = (function (){var statearr_31164 = state_31148;
(statearr_31164[(11)] = inst_31129__$1);

(statearr_31164[(7)] = inst_31127__$1);

return statearr_31164;
})();
if(cljs.core.truth_(inst_31129__$1)){
var statearr_31165_32256 = state_31148__$1;
(statearr_31165_32256[(1)] = (19));

} else {
var statearr_31166_32257 = state_31148__$1;
(statearr_31166_32257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (25))){
var inst_31138 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31167_32264 = state_31148__$1;
(statearr_31167_32264[(2)] = inst_31138);

(statearr_31167_32264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (17))){
var inst_31103 = (state_31148[(10)]);
var inst_31112 = cljs.core.first(inst_31103);
var inst_31113 = cljs.core.async.muxch_STAR_(inst_31112);
var inst_31114 = cljs.core.async.close_BANG_(inst_31113);
var inst_31115 = cljs.core.next(inst_31103);
var inst_31089 = inst_31115;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31148__$1 = (function (){var statearr_31168 = state_31148;
(statearr_31168[(12)] = inst_31091);

(statearr_31168[(13)] = inst_31092);

(statearr_31168[(14)] = inst_31089);

(statearr_31168[(15)] = inst_31114);

(statearr_31168[(16)] = inst_31090);

return statearr_31168;
})();
var statearr_31169_32266 = state_31148__$1;
(statearr_31169_32266[(2)] = null);

(statearr_31169_32266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (3))){
var inst_31146 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31148__$1,inst_31146);
} else {
if((state_val_31149 === (12))){
var inst_31123 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31170_32268 = state_31148__$1;
(statearr_31170_32268[(2)] = inst_31123);

(statearr_31170_32268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (2))){
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31148__$1,(4),ch);
} else {
if((state_val_31149 === (23))){
var state_31148__$1 = state_31148;
var statearr_31171_32271 = state_31148__$1;
(statearr_31171_32271[(2)] = null);

(statearr_31171_32271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (19))){
var inst_31129 = (state_31148[(11)]);
var inst_31079 = (state_31148[(8)]);
var inst_31131 = cljs.core.async.muxch_STAR_(inst_31129);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31148__$1,(22),inst_31131,inst_31079);
} else {
if((state_val_31149 === (11))){
var inst_31103 = (state_31148[(10)]);
var inst_31089 = (state_31148[(14)]);
var inst_31103__$1 = cljs.core.seq(inst_31089);
var state_31148__$1 = (function (){var statearr_31172 = state_31148;
(statearr_31172[(10)] = inst_31103__$1);

return statearr_31172;
})();
if(inst_31103__$1){
var statearr_31173_32274 = state_31148__$1;
(statearr_31173_32274[(1)] = (13));

} else {
var statearr_31174_32275 = state_31148__$1;
(statearr_31174_32275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (9))){
var inst_31125 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31175_32276 = state_31148__$1;
(statearr_31175_32276[(2)] = inst_31125);

(statearr_31175_32276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (5))){
var inst_31086 = cljs.core.deref(mults);
var inst_31087 = cljs.core.vals(inst_31086);
var inst_31088 = cljs.core.seq(inst_31087);
var inst_31089 = inst_31088;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31148__$1 = (function (){var statearr_31176 = state_31148;
(statearr_31176[(12)] = inst_31091);

(statearr_31176[(13)] = inst_31092);

(statearr_31176[(14)] = inst_31089);

(statearr_31176[(16)] = inst_31090);

return statearr_31176;
})();
var statearr_31177_32277 = state_31148__$1;
(statearr_31177_32277[(2)] = null);

(statearr_31177_32277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (14))){
var state_31148__$1 = state_31148;
var statearr_31181_32278 = state_31148__$1;
(statearr_31181_32278[(2)] = null);

(statearr_31181_32278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (16))){
var inst_31103 = (state_31148[(10)]);
var inst_31107 = cljs.core.chunk_first(inst_31103);
var inst_31108 = cljs.core.chunk_rest(inst_31103);
var inst_31109 = cljs.core.count(inst_31107);
var inst_31089 = inst_31108;
var inst_31090 = inst_31107;
var inst_31091 = inst_31109;
var inst_31092 = (0);
var state_31148__$1 = (function (){var statearr_31182 = state_31148;
(statearr_31182[(12)] = inst_31091);

(statearr_31182[(13)] = inst_31092);

(statearr_31182[(14)] = inst_31089);

(statearr_31182[(16)] = inst_31090);

return statearr_31182;
})();
var statearr_31183_32280 = state_31148__$1;
(statearr_31183_32280[(2)] = null);

(statearr_31183_32280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (10))){
var inst_31091 = (state_31148[(12)]);
var inst_31092 = (state_31148[(13)]);
var inst_31089 = (state_31148[(14)]);
var inst_31090 = (state_31148[(16)]);
var inst_31097 = cljs.core._nth(inst_31090,inst_31092);
var inst_31098 = cljs.core.async.muxch_STAR_(inst_31097);
var inst_31099 = cljs.core.async.close_BANG_(inst_31098);
var inst_31100 = (inst_31092 + (1));
var tmp31178 = inst_31091;
var tmp31179 = inst_31089;
var tmp31180 = inst_31090;
var inst_31089__$1 = tmp31179;
var inst_31090__$1 = tmp31180;
var inst_31091__$1 = tmp31178;
var inst_31092__$1 = inst_31100;
var state_31148__$1 = (function (){var statearr_31184 = state_31148;
(statearr_31184[(12)] = inst_31091__$1);

(statearr_31184[(13)] = inst_31092__$1);

(statearr_31184[(14)] = inst_31089__$1);

(statearr_31184[(17)] = inst_31099);

(statearr_31184[(16)] = inst_31090__$1);

return statearr_31184;
})();
var statearr_31185_32282 = state_31148__$1;
(statearr_31185_32282[(2)] = null);

(statearr_31185_32282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (18))){
var inst_31118 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31186_32283 = state_31148__$1;
(statearr_31186_32283[(2)] = inst_31118);

(statearr_31186_32283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (8))){
var inst_31091 = (state_31148[(12)]);
var inst_31092 = (state_31148[(13)]);
var inst_31094 = (inst_31092 < inst_31091);
var inst_31095 = inst_31094;
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31095)){
var statearr_31187_32284 = state_31148__$1;
(statearr_31187_32284[(1)] = (10));

} else {
var statearr_31188_32285 = state_31148__$1;
(statearr_31188_32285[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31189[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31189[(1)] = (1));

return statearr_31189;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31148){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31148);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31190){var ex__30239__auto__ = e31190;
var statearr_31191_32286 = state_31148;
(statearr_31191_32286[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31148[(4)]))){
var statearr_31192_32287 = state_31148;
(statearr_31192_32287[(1)] = cljs.core.first((state_31148[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32288 = state_31148;
state_31148 = G__32288;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31193 = f__30268__auto__();
(statearr_31193[(6)] = c__30267__auto___32241);

return statearr_31193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31195 = arguments.length;
switch (G__31195) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31197 = arguments.length;
switch (G__31197) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31199 = arguments.length;
switch (G__31199) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30267__auto___32295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31242){
var state_val_31243 = (state_31242[(1)]);
if((state_val_31243 === (7))){
var state_31242__$1 = state_31242;
var statearr_31244_32297 = state_31242__$1;
(statearr_31244_32297[(2)] = null);

(statearr_31244_32297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (1))){
var state_31242__$1 = state_31242;
var statearr_31245_32298 = state_31242__$1;
(statearr_31245_32298[(2)] = null);

(statearr_31245_32298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (4))){
var inst_31203 = (state_31242[(7)]);
var inst_31202 = (state_31242[(8)]);
var inst_31205 = (inst_31203 < inst_31202);
var state_31242__$1 = state_31242;
if(cljs.core.truth_(inst_31205)){
var statearr_31246_32299 = state_31242__$1;
(statearr_31246_32299[(1)] = (6));

} else {
var statearr_31247_32300 = state_31242__$1;
(statearr_31247_32300[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (15))){
var inst_31228 = (state_31242[(9)]);
var inst_31233 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31228);
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31242__$1,(17),out,inst_31233);
} else {
if((state_val_31243 === (13))){
var inst_31228 = (state_31242[(9)]);
var inst_31228__$1 = (state_31242[(2)]);
var inst_31229 = cljs.core.some(cljs.core.nil_QMARK_,inst_31228__$1);
var state_31242__$1 = (function (){var statearr_31248 = state_31242;
(statearr_31248[(9)] = inst_31228__$1);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31229)){
var statearr_31249_32302 = state_31242__$1;
(statearr_31249_32302[(1)] = (14));

} else {
var statearr_31250_32303 = state_31242__$1;
(statearr_31250_32303[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (6))){
var state_31242__$1 = state_31242;
var statearr_31251_32304 = state_31242__$1;
(statearr_31251_32304[(2)] = null);

(statearr_31251_32304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (17))){
var inst_31235 = (state_31242[(2)]);
var state_31242__$1 = (function (){var statearr_31253 = state_31242;
(statearr_31253[(10)] = inst_31235);

return statearr_31253;
})();
var statearr_31254_32306 = state_31242__$1;
(statearr_31254_32306[(2)] = null);

(statearr_31254_32306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (3))){
var inst_31240 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31242__$1,inst_31240);
} else {
if((state_val_31243 === (12))){
var _ = (function (){var statearr_31255 = state_31242;
(statearr_31255[(4)] = cljs.core.rest((state_31242[(4)])));

return statearr_31255;
})();
var state_31242__$1 = state_31242;
var ex31252 = (state_31242__$1[(2)]);
var statearr_31256_32307 = state_31242__$1;
(statearr_31256_32307[(5)] = ex31252);


if((ex31252 instanceof Object)){
var statearr_31257_32308 = state_31242__$1;
(statearr_31257_32308[(1)] = (11));

(statearr_31257_32308[(5)] = null);

} else {
throw ex31252;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (2))){
var inst_31201 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31202 = cnt;
var inst_31203 = (0);
var state_31242__$1 = (function (){var statearr_31258 = state_31242;
(statearr_31258[(7)] = inst_31203);

(statearr_31258[(11)] = inst_31201);

(statearr_31258[(8)] = inst_31202);

return statearr_31258;
})();
var statearr_31259_32310 = state_31242__$1;
(statearr_31259_32310[(2)] = null);

(statearr_31259_32310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (11))){
var inst_31207 = (state_31242[(2)]);
var inst_31208 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31242__$1 = (function (){var statearr_31260 = state_31242;
(statearr_31260[(12)] = inst_31207);

return statearr_31260;
})();
var statearr_31261_32311 = state_31242__$1;
(statearr_31261_32311[(2)] = inst_31208);

(statearr_31261_32311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (9))){
var inst_31203 = (state_31242[(7)]);
var _ = (function (){var statearr_31262 = state_31242;
(statearr_31262[(4)] = cljs.core.cons((12),(state_31242[(4)])));

return statearr_31262;
})();
var inst_31214 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31203) : chs__$1.call(null,inst_31203));
var inst_31215 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31203) : done.call(null,inst_31203));
var inst_31216 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31214,inst_31215);
var ___$1 = (function (){var statearr_31263 = state_31242;
(statearr_31263[(4)] = cljs.core.rest((state_31242[(4)])));

return statearr_31263;
})();
var state_31242__$1 = state_31242;
var statearr_31264_32312 = state_31242__$1;
(statearr_31264_32312[(2)] = inst_31216);

(statearr_31264_32312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (5))){
var inst_31226 = (state_31242[(2)]);
var state_31242__$1 = (function (){var statearr_31265 = state_31242;
(statearr_31265[(13)] = inst_31226);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31242__$1,(13),dchan);
} else {
if((state_val_31243 === (14))){
var inst_31231 = cljs.core.async.close_BANG_(out);
var state_31242__$1 = state_31242;
var statearr_31266_32327 = state_31242__$1;
(statearr_31266_32327[(2)] = inst_31231);

(statearr_31266_32327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (16))){
var inst_31238 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
var statearr_31267_32328 = state_31242__$1;
(statearr_31267_32328[(2)] = inst_31238);

(statearr_31267_32328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (10))){
var inst_31203 = (state_31242[(7)]);
var inst_31219 = (state_31242[(2)]);
var inst_31220 = (inst_31203 + (1));
var inst_31203__$1 = inst_31220;
var state_31242__$1 = (function (){var statearr_31268 = state_31242;
(statearr_31268[(7)] = inst_31203__$1);

(statearr_31268[(14)] = inst_31219);

return statearr_31268;
})();
var statearr_31269_32329 = state_31242__$1;
(statearr_31269_32329[(2)] = null);

(statearr_31269_32329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (8))){
var inst_31224 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
var statearr_31270_32330 = state_31242__$1;
(statearr_31270_32330[(2)] = inst_31224);

(statearr_31270_32330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31271[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31271[(1)] = (1));

return statearr_31271;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31242){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31242);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31272){var ex__30239__auto__ = e31272;
var statearr_31273_32331 = state_31242;
(statearr_31273_32331[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31242[(4)]))){
var statearr_31274_32332 = state_31242;
(statearr_31274_32332[(1)] = cljs.core.first((state_31242[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32333 = state_31242;
state_31242 = G__32333;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31275 = f__30268__auto__();
(statearr_31275[(6)] = c__30267__auto___32295);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31278 = arguments.length;
switch (G__31278) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30267__auto___32351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31310){
var state_val_31311 = (state_31310[(1)]);
if((state_val_31311 === (7))){
var inst_31289 = (state_31310[(7)]);
var inst_31290 = (state_31310[(8)]);
var inst_31289__$1 = (state_31310[(2)]);
var inst_31290__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31289__$1,(0),null);
var inst_31291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31289__$1,(1),null);
var inst_31292 = (inst_31290__$1 == null);
var state_31310__$1 = (function (){var statearr_31312 = state_31310;
(statearr_31312[(9)] = inst_31291);

(statearr_31312[(7)] = inst_31289__$1);

(statearr_31312[(8)] = inst_31290__$1);

return statearr_31312;
})();
if(cljs.core.truth_(inst_31292)){
var statearr_31313_32352 = state_31310__$1;
(statearr_31313_32352[(1)] = (8));

} else {
var statearr_31314_32353 = state_31310__$1;
(statearr_31314_32353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (1))){
var inst_31279 = cljs.core.vec(chs);
var inst_31280 = inst_31279;
var state_31310__$1 = (function (){var statearr_31315 = state_31310;
(statearr_31315[(10)] = inst_31280);

return statearr_31315;
})();
var statearr_31316_32354 = state_31310__$1;
(statearr_31316_32354[(2)] = null);

(statearr_31316_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (4))){
var inst_31280 = (state_31310[(10)]);
var state_31310__$1 = state_31310;
return cljs.core.async.ioc_alts_BANG_(state_31310__$1,(7),inst_31280);
} else {
if((state_val_31311 === (6))){
var inst_31306 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
var statearr_31317_32367 = state_31310__$1;
(statearr_31317_32367[(2)] = inst_31306);

(statearr_31317_32367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (3))){
var inst_31308 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31310__$1,inst_31308);
} else {
if((state_val_31311 === (2))){
var inst_31280 = (state_31310[(10)]);
var inst_31282 = cljs.core.count(inst_31280);
var inst_31283 = (inst_31282 > (0));
var state_31310__$1 = state_31310;
if(cljs.core.truth_(inst_31283)){
var statearr_31319_32368 = state_31310__$1;
(statearr_31319_32368[(1)] = (4));

} else {
var statearr_31320_32369 = state_31310__$1;
(statearr_31320_32369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (11))){
var inst_31280 = (state_31310[(10)]);
var inst_31299 = (state_31310[(2)]);
var tmp31318 = inst_31280;
var inst_31280__$1 = tmp31318;
var state_31310__$1 = (function (){var statearr_31321 = state_31310;
(statearr_31321[(10)] = inst_31280__$1);

(statearr_31321[(11)] = inst_31299);

return statearr_31321;
})();
var statearr_31322_32370 = state_31310__$1;
(statearr_31322_32370[(2)] = null);

(statearr_31322_32370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (9))){
var inst_31290 = (state_31310[(8)]);
var state_31310__$1 = state_31310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31310__$1,(11),out,inst_31290);
} else {
if((state_val_31311 === (5))){
var inst_31304 = cljs.core.async.close_BANG_(out);
var state_31310__$1 = state_31310;
var statearr_31323_32371 = state_31310__$1;
(statearr_31323_32371[(2)] = inst_31304);

(statearr_31323_32371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (10))){
var inst_31302 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
var statearr_31324_32372 = state_31310__$1;
(statearr_31324_32372[(2)] = inst_31302);

(statearr_31324_32372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (8))){
var inst_31291 = (state_31310[(9)]);
var inst_31280 = (state_31310[(10)]);
var inst_31289 = (state_31310[(7)]);
var inst_31290 = (state_31310[(8)]);
var inst_31294 = (function (){var cs = inst_31280;
var vec__31285 = inst_31289;
var v = inst_31290;
var c = inst_31291;
return (function (p1__31276_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31276_SHARP_);
});
})();
var inst_31295 = cljs.core.filterv(inst_31294,inst_31280);
var inst_31280__$1 = inst_31295;
var state_31310__$1 = (function (){var statearr_31325 = state_31310;
(statearr_31325[(10)] = inst_31280__$1);

return statearr_31325;
})();
var statearr_31326_32373 = state_31310__$1;
(statearr_31326_32373[(2)] = null);

(statearr_31326_32373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31327[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31327[(1)] = (1));

return statearr_31327;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31310){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31310);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31328){var ex__30239__auto__ = e31328;
var statearr_31329_32374 = state_31310;
(statearr_31329_32374[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31310[(4)]))){
var statearr_31330_32375 = state_31310;
(statearr_31330_32375[(1)] = cljs.core.first((state_31310[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32376 = state_31310;
state_31310 = G__32376;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31331 = f__30268__auto__();
(statearr_31331[(6)] = c__30267__auto___32351);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31333 = arguments.length;
switch (G__31333) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30267__auto___32379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31357){
var state_val_31358 = (state_31357[(1)]);
if((state_val_31358 === (7))){
var inst_31339 = (state_31357[(7)]);
var inst_31339__$1 = (state_31357[(2)]);
var inst_31340 = (inst_31339__$1 == null);
var inst_31341 = cljs.core.not(inst_31340);
var state_31357__$1 = (function (){var statearr_31359 = state_31357;
(statearr_31359[(7)] = inst_31339__$1);

return statearr_31359;
})();
if(inst_31341){
var statearr_31360_32380 = state_31357__$1;
(statearr_31360_32380[(1)] = (8));

} else {
var statearr_31361_32381 = state_31357__$1;
(statearr_31361_32381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (1))){
var inst_31334 = (0);
var state_31357__$1 = (function (){var statearr_31362 = state_31357;
(statearr_31362[(8)] = inst_31334);

return statearr_31362;
})();
var statearr_31363_32382 = state_31357__$1;
(statearr_31363_32382[(2)] = null);

(statearr_31363_32382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (4))){
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31357__$1,(7),ch);
} else {
if((state_val_31358 === (6))){
var inst_31352 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31364_32383 = state_31357__$1;
(statearr_31364_32383[(2)] = inst_31352);

(statearr_31364_32383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (3))){
var inst_31354 = (state_31357[(2)]);
var inst_31355 = cljs.core.async.close_BANG_(out);
var state_31357__$1 = (function (){var statearr_31365 = state_31357;
(statearr_31365[(9)] = inst_31354);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31357__$1,inst_31355);
} else {
if((state_val_31358 === (2))){
var inst_31334 = (state_31357[(8)]);
var inst_31336 = (inst_31334 < n);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31336)){
var statearr_31366_32388 = state_31357__$1;
(statearr_31366_32388[(1)] = (4));

} else {
var statearr_31367_32389 = state_31357__$1;
(statearr_31367_32389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (11))){
var inst_31334 = (state_31357[(8)]);
var inst_31344 = (state_31357[(2)]);
var inst_31345 = (inst_31334 + (1));
var inst_31334__$1 = inst_31345;
var state_31357__$1 = (function (){var statearr_31368 = state_31357;
(statearr_31368[(8)] = inst_31334__$1);

(statearr_31368[(10)] = inst_31344);

return statearr_31368;
})();
var statearr_31369_32390 = state_31357__$1;
(statearr_31369_32390[(2)] = null);

(statearr_31369_32390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (9))){
var state_31357__$1 = state_31357;
var statearr_31370_32391 = state_31357__$1;
(statearr_31370_32391[(2)] = null);

(statearr_31370_32391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (5))){
var state_31357__$1 = state_31357;
var statearr_31371_32392 = state_31357__$1;
(statearr_31371_32392[(2)] = null);

(statearr_31371_32392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (10))){
var inst_31349 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31372_32393 = state_31357__$1;
(statearr_31372_32393[(2)] = inst_31349);

(statearr_31372_32393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (8))){
var inst_31339 = (state_31357[(7)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31357__$1,(11),out,inst_31339);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31373[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31373[(1)] = (1));

return statearr_31373;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31357){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31357);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31374){var ex__30239__auto__ = e31374;
var statearr_31375_32431 = state_31357;
(statearr_31375_32431[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31357[(4)]))){
var statearr_31376_32437 = state_31357;
(statearr_31376_32437[(1)] = cljs.core.first((state_31357[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32440 = state_31357;
state_31357 = G__32440;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31377 = f__30268__auto__();
(statearr_31377[(6)] = c__30267__auto___32379);

return statearr_31377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31379 = (function (f,ch,meta31380){
this.f = f;
this.ch = ch;
this.meta31380 = meta31380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31381,meta31380__$1){
var self__ = this;
var _31381__$1 = this;
return (new cljs.core.async.t_cljs$core$async31379(self__.f,self__.ch,meta31380__$1));
}));

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31381){
var self__ = this;
var _31381__$1 = this;
return self__.meta31380;
}));

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31382 = (function (f,ch,meta31380,_,fn1,meta31383){
this.f = f;
this.ch = ch;
this.meta31380 = meta31380;
this._ = _;
this.fn1 = fn1;
this.meta31383 = meta31383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31384,meta31383__$1){
var self__ = this;
var _31384__$1 = this;
return (new cljs.core.async.t_cljs$core$async31382(self__.f,self__.ch,self__.meta31380,self__._,self__.fn1,meta31383__$1));
}));

(cljs.core.async.t_cljs$core$async31382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31384){
var self__ = this;
var _31384__$1 = this;
return self__.meta31383;
}));

(cljs.core.async.t_cljs$core$async31382.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31378_SHARP_){
var G__31385 = (((p1__31378_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31378_SHARP_) : self__.f.call(null,p1__31378_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31385) : f1.call(null,G__31385));
});
}));

(cljs.core.async.t_cljs$core$async31382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31380","meta31380",-62968425,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31379","cljs.core.async/t_cljs$core$async31379",-733185544,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31383","meta31383",1082997295,null)], null);
}));

(cljs.core.async.t_cljs$core$async31382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31382");

(cljs.core.async.t_cljs$core$async31382.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31382.
 */
cljs.core.async.__GT_t_cljs$core$async31382 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31382(f__$1,ch__$1,meta31380__$1,___$2,fn1__$1,meta31383){
return (new cljs.core.async.t_cljs$core$async31382(f__$1,ch__$1,meta31380__$1,___$2,fn1__$1,meta31383));
});

}

return (new cljs.core.async.t_cljs$core$async31382(self__.f,self__.ch,self__.meta31380,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31386 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31386) : self__.f.call(null,G__31386));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31380","meta31380",-62968425,null)], null);
}));

(cljs.core.async.t_cljs$core$async31379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31379");

(cljs.core.async.t_cljs$core$async31379.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31379.
 */
cljs.core.async.__GT_t_cljs$core$async31379 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31379(f__$1,ch__$1,meta31380){
return (new cljs.core.async.t_cljs$core$async31379(f__$1,ch__$1,meta31380));
});

}

return (new cljs.core.async.t_cljs$core$async31379(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31387 = (function (f,ch,meta31388){
this.f = f;
this.ch = ch;
this.meta31388 = meta31388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31389,meta31388__$1){
var self__ = this;
var _31389__$1 = this;
return (new cljs.core.async.t_cljs$core$async31387(self__.f,self__.ch,meta31388__$1));
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31389){
var self__ = this;
var _31389__$1 = this;
return self__.meta31388;
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31388","meta31388",-1769290576,null)], null);
}));

(cljs.core.async.t_cljs$core$async31387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31387");

(cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31387.
 */
cljs.core.async.__GT_t_cljs$core$async31387 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31387(f__$1,ch__$1,meta31388){
return (new cljs.core.async.t_cljs$core$async31387(f__$1,ch__$1,meta31388));
});

}

return (new cljs.core.async.t_cljs$core$async31387(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31390 = (function (p,ch,meta31391){
this.p = p;
this.ch = ch;
this.meta31391 = meta31391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31392,meta31391__$1){
var self__ = this;
var _31392__$1 = this;
return (new cljs.core.async.t_cljs$core$async31390(self__.p,self__.ch,meta31391__$1));
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31392){
var self__ = this;
var _31392__$1 = this;
return self__.meta31391;
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31391","meta31391",-2059744173,null)], null);
}));

(cljs.core.async.t_cljs$core$async31390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31390");

(cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31390.
 */
cljs.core.async.__GT_t_cljs$core$async31390 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31390(p__$1,ch__$1,meta31391){
return (new cljs.core.async.t_cljs$core$async31390(p__$1,ch__$1,meta31391));
});

}

return (new cljs.core.async.t_cljs$core$async31390(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31394 = arguments.length;
switch (G__31394) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30267__auto___32510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31415){
var state_val_31416 = (state_31415[(1)]);
if((state_val_31416 === (7))){
var inst_31411 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31417_32515 = state_31415__$1;
(statearr_31417_32515[(2)] = inst_31411);

(statearr_31417_32515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (1))){
var state_31415__$1 = state_31415;
var statearr_31418_32520 = state_31415__$1;
(statearr_31418_32520[(2)] = null);

(statearr_31418_32520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (4))){
var inst_31397 = (state_31415[(7)]);
var inst_31397__$1 = (state_31415[(2)]);
var inst_31398 = (inst_31397__$1 == null);
var state_31415__$1 = (function (){var statearr_31419 = state_31415;
(statearr_31419[(7)] = inst_31397__$1);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31398)){
var statearr_31420_32528 = state_31415__$1;
(statearr_31420_32528[(1)] = (5));

} else {
var statearr_31421_32530 = state_31415__$1;
(statearr_31421_32530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (6))){
var inst_31397 = (state_31415[(7)]);
var inst_31402 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31397) : p.call(null,inst_31397));
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31402)){
var statearr_31422_32544 = state_31415__$1;
(statearr_31422_32544[(1)] = (8));

} else {
var statearr_31423_32545 = state_31415__$1;
(statearr_31423_32545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (3))){
var inst_31413 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31415__$1,inst_31413);
} else {
if((state_val_31416 === (2))){
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31415__$1,(4),ch);
} else {
if((state_val_31416 === (11))){
var inst_31405 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31424_32546 = state_31415__$1;
(statearr_31424_32546[(2)] = inst_31405);

(statearr_31424_32546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (9))){
var state_31415__$1 = state_31415;
var statearr_31425_32547 = state_31415__$1;
(statearr_31425_32547[(2)] = null);

(statearr_31425_32547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (5))){
var inst_31400 = cljs.core.async.close_BANG_(out);
var state_31415__$1 = state_31415;
var statearr_31426_32548 = state_31415__$1;
(statearr_31426_32548[(2)] = inst_31400);

(statearr_31426_32548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (10))){
var inst_31408 = (state_31415[(2)]);
var state_31415__$1 = (function (){var statearr_31427 = state_31415;
(statearr_31427[(8)] = inst_31408);

return statearr_31427;
})();
var statearr_31428_32549 = state_31415__$1;
(statearr_31428_32549[(2)] = null);

(statearr_31428_32549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (8))){
var inst_31397 = (state_31415[(7)]);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31415__$1,(11),out,inst_31397);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31429 = [null,null,null,null,null,null,null,null,null];
(statearr_31429[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31429[(1)] = (1));

return statearr_31429;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31415){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31415);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31430){var ex__30239__auto__ = e31430;
var statearr_31431_32551 = state_31415;
(statearr_31431_32551[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31415[(4)]))){
var statearr_31432_32565 = state_31415;
(statearr_31432_32565[(1)] = cljs.core.first((state_31415[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32566 = state_31415;
state_31415 = G__32566;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31433 = f__30268__auto__();
(statearr_31433[(6)] = c__30267__auto___32510);

return statearr_31433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31435 = arguments.length;
switch (G__31435) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31497){
var state_val_31498 = (state_31497[(1)]);
if((state_val_31498 === (7))){
var inst_31493 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31499_32568 = state_31497__$1;
(statearr_31499_32568[(2)] = inst_31493);

(statearr_31499_32568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (20))){
var inst_31463 = (state_31497[(7)]);
var inst_31474 = (state_31497[(2)]);
var inst_31475 = cljs.core.next(inst_31463);
var inst_31449 = inst_31475;
var inst_31450 = null;
var inst_31451 = (0);
var inst_31452 = (0);
var state_31497__$1 = (function (){var statearr_31500 = state_31497;
(statearr_31500[(8)] = inst_31450);

(statearr_31500[(9)] = inst_31474);

(statearr_31500[(10)] = inst_31451);

(statearr_31500[(11)] = inst_31449);

(statearr_31500[(12)] = inst_31452);

return statearr_31500;
})();
var statearr_31501_32569 = state_31497__$1;
(statearr_31501_32569[(2)] = null);

(statearr_31501_32569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (1))){
var state_31497__$1 = state_31497;
var statearr_31502_32570 = state_31497__$1;
(statearr_31502_32570[(2)] = null);

(statearr_31502_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (4))){
var inst_31438 = (state_31497[(13)]);
var inst_31438__$1 = (state_31497[(2)]);
var inst_31439 = (inst_31438__$1 == null);
var state_31497__$1 = (function (){var statearr_31503 = state_31497;
(statearr_31503[(13)] = inst_31438__$1);

return statearr_31503;
})();
if(cljs.core.truth_(inst_31439)){
var statearr_31504_32571 = state_31497__$1;
(statearr_31504_32571[(1)] = (5));

} else {
var statearr_31505_32572 = state_31497__$1;
(statearr_31505_32572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (15))){
var state_31497__$1 = state_31497;
var statearr_31509_32573 = state_31497__$1;
(statearr_31509_32573[(2)] = null);

(statearr_31509_32573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (21))){
var state_31497__$1 = state_31497;
var statearr_31510_32574 = state_31497__$1;
(statearr_31510_32574[(2)] = null);

(statearr_31510_32574[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (13))){
var inst_31450 = (state_31497[(8)]);
var inst_31451 = (state_31497[(10)]);
var inst_31449 = (state_31497[(11)]);
var inst_31452 = (state_31497[(12)]);
var inst_31459 = (state_31497[(2)]);
var inst_31460 = (inst_31452 + (1));
var tmp31506 = inst_31450;
var tmp31507 = inst_31451;
var tmp31508 = inst_31449;
var inst_31449__$1 = tmp31508;
var inst_31450__$1 = tmp31506;
var inst_31451__$1 = tmp31507;
var inst_31452__$1 = inst_31460;
var state_31497__$1 = (function (){var statearr_31511 = state_31497;
(statearr_31511[(8)] = inst_31450__$1);

(statearr_31511[(14)] = inst_31459);

(statearr_31511[(10)] = inst_31451__$1);

(statearr_31511[(11)] = inst_31449__$1);

(statearr_31511[(12)] = inst_31452__$1);

return statearr_31511;
})();
var statearr_31512_32575 = state_31497__$1;
(statearr_31512_32575[(2)] = null);

(statearr_31512_32575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (22))){
var state_31497__$1 = state_31497;
var statearr_31513_32576 = state_31497__$1;
(statearr_31513_32576[(2)] = null);

(statearr_31513_32576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (6))){
var inst_31438 = (state_31497[(13)]);
var inst_31447 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31438) : f.call(null,inst_31438));
var inst_31448 = cljs.core.seq(inst_31447);
var inst_31449 = inst_31448;
var inst_31450 = null;
var inst_31451 = (0);
var inst_31452 = (0);
var state_31497__$1 = (function (){var statearr_31514 = state_31497;
(statearr_31514[(8)] = inst_31450);

(statearr_31514[(10)] = inst_31451);

(statearr_31514[(11)] = inst_31449);

(statearr_31514[(12)] = inst_31452);

return statearr_31514;
})();
var statearr_31515_32577 = state_31497__$1;
(statearr_31515_32577[(2)] = null);

(statearr_31515_32577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (17))){
var inst_31463 = (state_31497[(7)]);
var inst_31467 = cljs.core.chunk_first(inst_31463);
var inst_31468 = cljs.core.chunk_rest(inst_31463);
var inst_31469 = cljs.core.count(inst_31467);
var inst_31449 = inst_31468;
var inst_31450 = inst_31467;
var inst_31451 = inst_31469;
var inst_31452 = (0);
var state_31497__$1 = (function (){var statearr_31516 = state_31497;
(statearr_31516[(8)] = inst_31450);

(statearr_31516[(10)] = inst_31451);

(statearr_31516[(11)] = inst_31449);

(statearr_31516[(12)] = inst_31452);

return statearr_31516;
})();
var statearr_31517_32578 = state_31497__$1;
(statearr_31517_32578[(2)] = null);

(statearr_31517_32578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (3))){
var inst_31495 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31497__$1,inst_31495);
} else {
if((state_val_31498 === (12))){
var inst_31483 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31518_32579 = state_31497__$1;
(statearr_31518_32579[(2)] = inst_31483);

(statearr_31518_32579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (2))){
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31497__$1,(4),in$);
} else {
if((state_val_31498 === (23))){
var inst_31491 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31519_32580 = state_31497__$1;
(statearr_31519_32580[(2)] = inst_31491);

(statearr_31519_32580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (19))){
var inst_31478 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31520_32581 = state_31497__$1;
(statearr_31520_32581[(2)] = inst_31478);

(statearr_31520_32581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (11))){
var inst_31463 = (state_31497[(7)]);
var inst_31449 = (state_31497[(11)]);
var inst_31463__$1 = cljs.core.seq(inst_31449);
var state_31497__$1 = (function (){var statearr_31521 = state_31497;
(statearr_31521[(7)] = inst_31463__$1);

return statearr_31521;
})();
if(inst_31463__$1){
var statearr_31522_32583 = state_31497__$1;
(statearr_31522_32583[(1)] = (14));

} else {
var statearr_31523_32584 = state_31497__$1;
(statearr_31523_32584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (9))){
var inst_31485 = (state_31497[(2)]);
var inst_31486 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31497__$1 = (function (){var statearr_31524 = state_31497;
(statearr_31524[(15)] = inst_31485);

return statearr_31524;
})();
if(cljs.core.truth_(inst_31486)){
var statearr_31525_32585 = state_31497__$1;
(statearr_31525_32585[(1)] = (21));

} else {
var statearr_31526_32586 = state_31497__$1;
(statearr_31526_32586[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (5))){
var inst_31441 = cljs.core.async.close_BANG_(out);
var state_31497__$1 = state_31497;
var statearr_31527_32587 = state_31497__$1;
(statearr_31527_32587[(2)] = inst_31441);

(statearr_31527_32587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (14))){
var inst_31463 = (state_31497[(7)]);
var inst_31465 = cljs.core.chunked_seq_QMARK_(inst_31463);
var state_31497__$1 = state_31497;
if(inst_31465){
var statearr_31528_32588 = state_31497__$1;
(statearr_31528_32588[(1)] = (17));

} else {
var statearr_31529_32589 = state_31497__$1;
(statearr_31529_32589[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (16))){
var inst_31481 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31530_32590 = state_31497__$1;
(statearr_31530_32590[(2)] = inst_31481);

(statearr_31530_32590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (10))){
var inst_31450 = (state_31497[(8)]);
var inst_31452 = (state_31497[(12)]);
var inst_31457 = cljs.core._nth(inst_31450,inst_31452);
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31497__$1,(13),out,inst_31457);
} else {
if((state_val_31498 === (18))){
var inst_31463 = (state_31497[(7)]);
var inst_31472 = cljs.core.first(inst_31463);
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31497__$1,(20),out,inst_31472);
} else {
if((state_val_31498 === (8))){
var inst_31451 = (state_31497[(10)]);
var inst_31452 = (state_31497[(12)]);
var inst_31454 = (inst_31452 < inst_31451);
var inst_31455 = inst_31454;
var state_31497__$1 = state_31497;
if(cljs.core.truth_(inst_31455)){
var statearr_31531_32591 = state_31497__$1;
(statearr_31531_32591[(1)] = (10));

} else {
var statearr_31532_32592 = state_31497__$1;
(statearr_31532_32592[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30236__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30236__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30236__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30236__auto____1 = (function (state_31497){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31497);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31534){var ex__30239__auto__ = e31534;
var statearr_31535_32593 = state_31497;
(statearr_31535_32593[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31497[(4)]))){
var statearr_31536_32594 = state_31497;
(statearr_31536_32594[(1)] = cljs.core.first((state_31497[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32595 = state_31497;
state_31497 = G__32595;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30236__auto__ = function(state_31497){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30236__auto____1.call(this,state_31497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30236__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30236__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31537 = f__30268__auto__();
(statearr_31537[(6)] = c__30267__auto__);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

return c__30267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31539 = arguments.length;
switch (G__31539) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31541 = arguments.length;
switch (G__31541) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31543 = arguments.length;
switch (G__31543) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30267__auto___32599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31567){
var state_val_31568 = (state_31567[(1)]);
if((state_val_31568 === (7))){
var inst_31562 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31569_32600 = state_31567__$1;
(statearr_31569_32600[(2)] = inst_31562);

(statearr_31569_32600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (1))){
var inst_31544 = null;
var state_31567__$1 = (function (){var statearr_31570 = state_31567;
(statearr_31570[(7)] = inst_31544);

return statearr_31570;
})();
var statearr_31571_32603 = state_31567__$1;
(statearr_31571_32603[(2)] = null);

(statearr_31571_32603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (4))){
var inst_31547 = (state_31567[(8)]);
var inst_31547__$1 = (state_31567[(2)]);
var inst_31548 = (inst_31547__$1 == null);
var inst_31549 = cljs.core.not(inst_31548);
var state_31567__$1 = (function (){var statearr_31572 = state_31567;
(statearr_31572[(8)] = inst_31547__$1);

return statearr_31572;
})();
if(inst_31549){
var statearr_31573_32604 = state_31567__$1;
(statearr_31573_32604[(1)] = (5));

} else {
var statearr_31574_32606 = state_31567__$1;
(statearr_31574_32606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (6))){
var state_31567__$1 = state_31567;
var statearr_31575_32607 = state_31567__$1;
(statearr_31575_32607[(2)] = null);

(statearr_31575_32607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (3))){
var inst_31564 = (state_31567[(2)]);
var inst_31565 = cljs.core.async.close_BANG_(out);
var state_31567__$1 = (function (){var statearr_31576 = state_31567;
(statearr_31576[(9)] = inst_31564);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31567__$1,inst_31565);
} else {
if((state_val_31568 === (2))){
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31567__$1,(4),ch);
} else {
if((state_val_31568 === (11))){
var inst_31547 = (state_31567[(8)]);
var inst_31556 = (state_31567[(2)]);
var inst_31544 = inst_31547;
var state_31567__$1 = (function (){var statearr_31577 = state_31567;
(statearr_31577[(7)] = inst_31544);

(statearr_31577[(10)] = inst_31556);

return statearr_31577;
})();
var statearr_31578_32610 = state_31567__$1;
(statearr_31578_32610[(2)] = null);

(statearr_31578_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (9))){
var inst_31547 = (state_31567[(8)]);
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31567__$1,(11),out,inst_31547);
} else {
if((state_val_31568 === (5))){
var inst_31547 = (state_31567[(8)]);
var inst_31544 = (state_31567[(7)]);
var inst_31551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31547,inst_31544);
var state_31567__$1 = state_31567;
if(inst_31551){
var statearr_31580_32611 = state_31567__$1;
(statearr_31580_32611[(1)] = (8));

} else {
var statearr_31581_32612 = state_31567__$1;
(statearr_31581_32612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (10))){
var inst_31559 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31582_32613 = state_31567__$1;
(statearr_31582_32613[(2)] = inst_31559);

(statearr_31582_32613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (8))){
var inst_31544 = (state_31567[(7)]);
var tmp31579 = inst_31544;
var inst_31544__$1 = tmp31579;
var state_31567__$1 = (function (){var statearr_31583 = state_31567;
(statearr_31583[(7)] = inst_31544__$1);

return statearr_31583;
})();
var statearr_31584_32614 = state_31567__$1;
(statearr_31584_32614[(2)] = null);

(statearr_31584_32614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31585[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31585[(1)] = (1));

return statearr_31585;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31567){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31567);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31586){var ex__30239__auto__ = e31586;
var statearr_31587_32615 = state_31567;
(statearr_31587_32615[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31567[(4)]))){
var statearr_31588_32616 = state_31567;
(statearr_31588_32616[(1)] = cljs.core.first((state_31567[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32624 = state_31567;
state_31567 = G__32624;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31589 = f__30268__auto__();
(statearr_31589[(6)] = c__30267__auto___32599);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31591 = arguments.length;
switch (G__31591) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30267__auto___32644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31629){
var state_val_31630 = (state_31629[(1)]);
if((state_val_31630 === (7))){
var inst_31625 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31631_32645 = state_31629__$1;
(statearr_31631_32645[(2)] = inst_31625);

(statearr_31631_32645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (1))){
var inst_31592 = (new Array(n));
var inst_31593 = inst_31592;
var inst_31594 = (0);
var state_31629__$1 = (function (){var statearr_31632 = state_31629;
(statearr_31632[(7)] = inst_31594);

(statearr_31632[(8)] = inst_31593);

return statearr_31632;
})();
var statearr_31633_32646 = state_31629__$1;
(statearr_31633_32646[(2)] = null);

(statearr_31633_32646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (4))){
var inst_31597 = (state_31629[(9)]);
var inst_31597__$1 = (state_31629[(2)]);
var inst_31598 = (inst_31597__$1 == null);
var inst_31599 = cljs.core.not(inst_31598);
var state_31629__$1 = (function (){var statearr_31634 = state_31629;
(statearr_31634[(9)] = inst_31597__$1);

return statearr_31634;
})();
if(inst_31599){
var statearr_31635_32647 = state_31629__$1;
(statearr_31635_32647[(1)] = (5));

} else {
var statearr_31636_32693 = state_31629__$1;
(statearr_31636_32693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (15))){
var inst_31619 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31637_32695 = state_31629__$1;
(statearr_31637_32695[(2)] = inst_31619);

(statearr_31637_32695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (13))){
var state_31629__$1 = state_31629;
var statearr_31638_32701 = state_31629__$1;
(statearr_31638_32701[(2)] = null);

(statearr_31638_32701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (6))){
var inst_31594 = (state_31629[(7)]);
var inst_31615 = (inst_31594 > (0));
var state_31629__$1 = state_31629;
if(cljs.core.truth_(inst_31615)){
var statearr_31639_32705 = state_31629__$1;
(statearr_31639_32705[(1)] = (12));

} else {
var statearr_31640_32710 = state_31629__$1;
(statearr_31640_32710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (3))){
var inst_31627 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31629__$1,inst_31627);
} else {
if((state_val_31630 === (12))){
var inst_31593 = (state_31629[(8)]);
var inst_31617 = cljs.core.vec(inst_31593);
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31629__$1,(15),out,inst_31617);
} else {
if((state_val_31630 === (2))){
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31629__$1,(4),ch);
} else {
if((state_val_31630 === (11))){
var inst_31609 = (state_31629[(2)]);
var inst_31610 = (new Array(n));
var inst_31593 = inst_31610;
var inst_31594 = (0);
var state_31629__$1 = (function (){var statearr_31641 = state_31629;
(statearr_31641[(7)] = inst_31594);

(statearr_31641[(8)] = inst_31593);

(statearr_31641[(10)] = inst_31609);

return statearr_31641;
})();
var statearr_31642_32727 = state_31629__$1;
(statearr_31642_32727[(2)] = null);

(statearr_31642_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (9))){
var inst_31593 = (state_31629[(8)]);
var inst_31607 = cljs.core.vec(inst_31593);
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31629__$1,(11),out,inst_31607);
} else {
if((state_val_31630 === (5))){
var inst_31597 = (state_31629[(9)]);
var inst_31594 = (state_31629[(7)]);
var inst_31593 = (state_31629[(8)]);
var inst_31602 = (state_31629[(11)]);
var inst_31601 = (inst_31593[inst_31594] = inst_31597);
var inst_31602__$1 = (inst_31594 + (1));
var inst_31603 = (inst_31602__$1 < n);
var state_31629__$1 = (function (){var statearr_31643 = state_31629;
(statearr_31643[(12)] = inst_31601);

(statearr_31643[(11)] = inst_31602__$1);

return statearr_31643;
})();
if(cljs.core.truth_(inst_31603)){
var statearr_31644_32745 = state_31629__$1;
(statearr_31644_32745[(1)] = (8));

} else {
var statearr_31645_32746 = state_31629__$1;
(statearr_31645_32746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (14))){
var inst_31622 = (state_31629[(2)]);
var inst_31623 = cljs.core.async.close_BANG_(out);
var state_31629__$1 = (function (){var statearr_31647 = state_31629;
(statearr_31647[(13)] = inst_31622);

return statearr_31647;
})();
var statearr_31648_32747 = state_31629__$1;
(statearr_31648_32747[(2)] = inst_31623);

(statearr_31648_32747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (10))){
var inst_31613 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31649_32751 = state_31629__$1;
(statearr_31649_32751[(2)] = inst_31613);

(statearr_31649_32751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (8))){
var inst_31593 = (state_31629[(8)]);
var inst_31602 = (state_31629[(11)]);
var tmp31646 = inst_31593;
var inst_31593__$1 = tmp31646;
var inst_31594 = inst_31602;
var state_31629__$1 = (function (){var statearr_31650 = state_31629;
(statearr_31650[(7)] = inst_31594);

(statearr_31650[(8)] = inst_31593__$1);

return statearr_31650;
})();
var statearr_31651_32752 = state_31629__$1;
(statearr_31651_32752[(2)] = null);

(statearr_31651_32752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31652[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31652[(1)] = (1));

return statearr_31652;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31629){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31629);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31653){var ex__30239__auto__ = e31653;
var statearr_31654_32755 = state_31629;
(statearr_31654_32755[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31629[(4)]))){
var statearr_31655_32756 = state_31629;
(statearr_31655_32756[(1)] = cljs.core.first((state_31629[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_31629;
state_31629 = G__32757;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31656 = f__30268__auto__();
(statearr_31656[(6)] = c__30267__auto___32644);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31658 = arguments.length;
switch (G__31658) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30267__auto___32759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_31700){
var state_val_31701 = (state_31700[(1)]);
if((state_val_31701 === (7))){
var inst_31696 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31702_32760 = state_31700__$1;
(statearr_31702_32760[(2)] = inst_31696);

(statearr_31702_32760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (1))){
var inst_31659 = [];
var inst_31660 = inst_31659;
var inst_31661 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31700__$1 = (function (){var statearr_31703 = state_31700;
(statearr_31703[(7)] = inst_31661);

(statearr_31703[(8)] = inst_31660);

return statearr_31703;
})();
var statearr_31704_32761 = state_31700__$1;
(statearr_31704_32761[(2)] = null);

(statearr_31704_32761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (4))){
var inst_31664 = (state_31700[(9)]);
var inst_31664__$1 = (state_31700[(2)]);
var inst_31665 = (inst_31664__$1 == null);
var inst_31666 = cljs.core.not(inst_31665);
var state_31700__$1 = (function (){var statearr_31705 = state_31700;
(statearr_31705[(9)] = inst_31664__$1);

return statearr_31705;
})();
if(inst_31666){
var statearr_31706_32765 = state_31700__$1;
(statearr_31706_32765[(1)] = (5));

} else {
var statearr_31707_32766 = state_31700__$1;
(statearr_31707_32766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (15))){
var inst_31690 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31708_32767 = state_31700__$1;
(statearr_31708_32767[(2)] = inst_31690);

(statearr_31708_32767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (13))){
var state_31700__$1 = state_31700;
var statearr_31709_32768 = state_31700__$1;
(statearr_31709_32768[(2)] = null);

(statearr_31709_32768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (6))){
var inst_31660 = (state_31700[(8)]);
var inst_31685 = inst_31660.length;
var inst_31686 = (inst_31685 > (0));
var state_31700__$1 = state_31700;
if(cljs.core.truth_(inst_31686)){
var statearr_31710_32769 = state_31700__$1;
(statearr_31710_32769[(1)] = (12));

} else {
var statearr_31711_32770 = state_31700__$1;
(statearr_31711_32770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (3))){
var inst_31698 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31700__$1,inst_31698);
} else {
if((state_val_31701 === (12))){
var inst_31660 = (state_31700[(8)]);
var inst_31688 = cljs.core.vec(inst_31660);
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31700__$1,(15),out,inst_31688);
} else {
if((state_val_31701 === (2))){
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31700__$1,(4),ch);
} else {
if((state_val_31701 === (11))){
var inst_31668 = (state_31700[(10)]);
var inst_31664 = (state_31700[(9)]);
var inst_31678 = (state_31700[(2)]);
var inst_31679 = [];
var inst_31680 = inst_31679.push(inst_31664);
var inst_31660 = inst_31679;
var inst_31661 = inst_31668;
var state_31700__$1 = (function (){var statearr_31712 = state_31700;
(statearr_31712[(11)] = inst_31678);

(statearr_31712[(7)] = inst_31661);

(statearr_31712[(8)] = inst_31660);

(statearr_31712[(12)] = inst_31680);

return statearr_31712;
})();
var statearr_31713_32771 = state_31700__$1;
(statearr_31713_32771[(2)] = null);

(statearr_31713_32771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (9))){
var inst_31660 = (state_31700[(8)]);
var inst_31676 = cljs.core.vec(inst_31660);
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31700__$1,(11),out,inst_31676);
} else {
if((state_val_31701 === (5))){
var inst_31668 = (state_31700[(10)]);
var inst_31664 = (state_31700[(9)]);
var inst_31661 = (state_31700[(7)]);
var inst_31668__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31664) : f.call(null,inst_31664));
var inst_31669 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31668__$1,inst_31661);
var inst_31670 = cljs.core.keyword_identical_QMARK_(inst_31661,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31671 = ((inst_31669) || (inst_31670));
var state_31700__$1 = (function (){var statearr_31714 = state_31700;
(statearr_31714[(10)] = inst_31668__$1);

return statearr_31714;
})();
if(cljs.core.truth_(inst_31671)){
var statearr_31715_32772 = state_31700__$1;
(statearr_31715_32772[(1)] = (8));

} else {
var statearr_31716_32773 = state_31700__$1;
(statearr_31716_32773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (14))){
var inst_31693 = (state_31700[(2)]);
var inst_31694 = cljs.core.async.close_BANG_(out);
var state_31700__$1 = (function (){var statearr_31718 = state_31700;
(statearr_31718[(13)] = inst_31693);

return statearr_31718;
})();
var statearr_31719_32774 = state_31700__$1;
(statearr_31719_32774[(2)] = inst_31694);

(statearr_31719_32774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (10))){
var inst_31683 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31720_32775 = state_31700__$1;
(statearr_31720_32775[(2)] = inst_31683);

(statearr_31720_32775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (8))){
var inst_31668 = (state_31700[(10)]);
var inst_31664 = (state_31700[(9)]);
var inst_31660 = (state_31700[(8)]);
var inst_31673 = inst_31660.push(inst_31664);
var tmp31717 = inst_31660;
var inst_31660__$1 = tmp31717;
var inst_31661 = inst_31668;
var state_31700__$1 = (function (){var statearr_31721 = state_31700;
(statearr_31721[(7)] = inst_31661);

(statearr_31721[(8)] = inst_31660__$1);

(statearr_31721[(14)] = inst_31673);

return statearr_31721;
})();
var statearr_31722_32776 = state_31700__$1;
(statearr_31722_32776[(2)] = null);

(statearr_31722_32776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30236__auto__ = null;
var cljs$core$async$state_machine__30236__auto____0 = (function (){
var statearr_31723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31723[(0)] = cljs$core$async$state_machine__30236__auto__);

(statearr_31723[(1)] = (1));

return statearr_31723;
});
var cljs$core$async$state_machine__30236__auto____1 = (function (state_31700){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_31700);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e31724){var ex__30239__auto__ = e31724;
var statearr_31725_32777 = state_31700;
(statearr_31725_32777[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_31700[(4)]))){
var statearr_31726_32778 = state_31700;
(statearr_31726_32778[(1)] = cljs.core.first((state_31700[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32779 = state_31700;
state_31700 = G__32779;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs$core$async$state_machine__30236__auto__ = function(state_31700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30236__auto____1.call(this,state_31700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30236__auto____0;
cljs$core$async$state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30236__auto____1;
return cljs$core$async$state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_31727 = f__30268__auto__();
(statearr_31727[(6)] = c__30267__auto___32759);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
