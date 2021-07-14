goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29112 = arguments.length;
switch (G__29112) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29124 = (function (f,blockable,meta29125){
this.f = f;
this.blockable = blockable;
this.meta29125 = meta29125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29126,meta29125__$1){
var self__ = this;
var _29126__$1 = this;
return (new cljs.core.async.t_cljs$core$async29124(self__.f,self__.blockable,meta29125__$1));
}));

(cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29126){
var self__ = this;
var _29126__$1 = this;
return self__.meta29125;
}));

(cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29125","meta29125",2117467746,null)], null);
}));

(cljs.core.async.t_cljs$core$async29124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29124");

(cljs.core.async.t_cljs$core$async29124.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29124.
 */
cljs.core.async.__GT_t_cljs$core$async29124 = (function cljs$core$async$__GT_t_cljs$core$async29124(f__$1,blockable__$1,meta29125){
return (new cljs.core.async.t_cljs$core$async29124(f__$1,blockable__$1,meta29125));
});

}

return (new cljs.core.async.t_cljs$core$async29124(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29141 = arguments.length;
switch (G__29141) {
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
var G__29148 = arguments.length;
switch (G__29148) {
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
var G__29173 = arguments.length;
switch (G__29173) {
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
var val_31567 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31567) : fn1.call(null,val_31567));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31567) : fn1.call(null,val_31567));
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
var G__29212 = arguments.length;
switch (G__29212) {
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
var n__4648__auto___31571 = n;
var x_31572 = (0);
while(true){
if((x_31572 < n__4648__auto___31571)){
(a[x_31572] = x_31572);

var G__31573 = (x_31572 + (1));
x_31572 = G__31573;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29237 = (function (flag,meta29238){
this.flag = flag;
this.meta29238 = meta29238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29239,meta29238__$1){
var self__ = this;
var _29239__$1 = this;
return (new cljs.core.async.t_cljs$core$async29237(self__.flag,meta29238__$1));
}));

(cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29239){
var self__ = this;
var _29239__$1 = this;
return self__.meta29238;
}));

(cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29238","meta29238",-1497582034,null)], null);
}));

(cljs.core.async.t_cljs$core$async29237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29237");

(cljs.core.async.t_cljs$core$async29237.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29237.
 */
cljs.core.async.__GT_t_cljs$core$async29237 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29237(flag__$1,meta29238){
return (new cljs.core.async.t_cljs$core$async29237(flag__$1,meta29238));
});

}

return (new cljs.core.async.t_cljs$core$async29237(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29250 = (function (flag,cb,meta29251){
this.flag = flag;
this.cb = cb;
this.meta29251 = meta29251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29252,meta29251__$1){
var self__ = this;
var _29252__$1 = this;
return (new cljs.core.async.t_cljs$core$async29250(self__.flag,self__.cb,meta29251__$1));
}));

(cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29252){
var self__ = this;
var _29252__$1 = this;
return self__.meta29251;
}));

(cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29251","meta29251",1276169947,null)], null);
}));

(cljs.core.async.t_cljs$core$async29250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29250");

(cljs.core.async.t_cljs$core$async29250.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29250.
 */
cljs.core.async.__GT_t_cljs$core$async29250 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29250(flag__$1,cb__$1,meta29251){
return (new cljs.core.async.t_cljs$core$async29250(flag__$1,cb__$1,meta29251));
});

}

return (new cljs.core.async.t_cljs$core$async29250(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29257_SHARP_){
var G__29265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29257_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29265) : fret.call(null,G__29265));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29258_SHARP_){
var G__29266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29258_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29266) : fret.call(null,G__29266));
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
var G__31580 = (i + (1));
i = G__31580;
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
var len__4771__auto___31583 = arguments.length;
var i__4772__auto___31584 = (0);
while(true){
if((i__4772__auto___31584 < len__4771__auto___31583)){
args__4777__auto__.push((arguments[i__4772__auto___31584]));

var G__31585 = (i__4772__auto___31584 + (1));
i__4772__auto___31584 = G__31585;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29279){
var map__29280 = p__29279;
var map__29280__$1 = cljs.core.__destructure_map(map__29280);
var opts = map__29280__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29277){
var G__29278 = cljs.core.first(seq29277);
var seq29277__$1 = cljs.core.next(seq29277);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29278,seq29277__$1);
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
var G__29290 = arguments.length;
switch (G__29290) {
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
var c__29041__auto___31590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29354){
var state_val_29356 = (state_29354[(1)]);
if((state_val_29356 === (7))){
var inst_29349 = (state_29354[(2)]);
var state_29354__$1 = state_29354;
var statearr_29364_31598 = state_29354__$1;
(statearr_29364_31598[(2)] = inst_29349);

(statearr_29364_31598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (1))){
var state_29354__$1 = state_29354;
var statearr_29365_31599 = state_29354__$1;
(statearr_29365_31599[(2)] = null);

(statearr_29365_31599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (4))){
var inst_29331 = (state_29354[(7)]);
var inst_29331__$1 = (state_29354[(2)]);
var inst_29332 = (inst_29331__$1 == null);
var state_29354__$1 = (function (){var statearr_29378 = state_29354;
(statearr_29378[(7)] = inst_29331__$1);

return statearr_29378;
})();
if(cljs.core.truth_(inst_29332)){
var statearr_29379_31600 = state_29354__$1;
(statearr_29379_31600[(1)] = (5));

} else {
var statearr_29380_31601 = state_29354__$1;
(statearr_29380_31601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (13))){
var state_29354__$1 = state_29354;
var statearr_29381_31602 = state_29354__$1;
(statearr_29381_31602[(2)] = null);

(statearr_29381_31602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (6))){
var inst_29331 = (state_29354[(7)]);
var state_29354__$1 = state_29354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29354__$1,(11),to,inst_29331);
} else {
if((state_val_29356 === (3))){
var inst_29351 = (state_29354[(2)]);
var state_29354__$1 = state_29354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29354__$1,inst_29351);
} else {
if((state_val_29356 === (12))){
var state_29354__$1 = state_29354;
var statearr_29382_31604 = state_29354__$1;
(statearr_29382_31604[(2)] = null);

(statearr_29382_31604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (2))){
var state_29354__$1 = state_29354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29354__$1,(4),from);
} else {
if((state_val_29356 === (11))){
var inst_29342 = (state_29354[(2)]);
var state_29354__$1 = state_29354;
if(cljs.core.truth_(inst_29342)){
var statearr_29383_31605 = state_29354__$1;
(statearr_29383_31605[(1)] = (12));

} else {
var statearr_29384_31606 = state_29354__$1;
(statearr_29384_31606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (9))){
var state_29354__$1 = state_29354;
var statearr_29385_31607 = state_29354__$1;
(statearr_29385_31607[(2)] = null);

(statearr_29385_31607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (5))){
var state_29354__$1 = state_29354;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29386_31608 = state_29354__$1;
(statearr_29386_31608[(1)] = (8));

} else {
var statearr_29387_31609 = state_29354__$1;
(statearr_29387_31609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (14))){
var inst_29347 = (state_29354[(2)]);
var state_29354__$1 = state_29354;
var statearr_29388_31611 = state_29354__$1;
(statearr_29388_31611[(2)] = inst_29347);

(statearr_29388_31611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (10))){
var inst_29339 = (state_29354[(2)]);
var state_29354__$1 = state_29354;
var statearr_29389_31612 = state_29354__$1;
(statearr_29389_31612[(2)] = inst_29339);

(statearr_29389_31612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (8))){
var inst_29336 = cljs.core.async.close_BANG_(to);
var state_29354__$1 = state_29354;
var statearr_29390_31613 = state_29354__$1;
(statearr_29390_31613[(2)] = inst_29336);

(statearr_29390_31613[(1)] = (10));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_29392 = [null,null,null,null,null,null,null,null];
(statearr_29392[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_29392[(1)] = (1));

return statearr_29392;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_29354){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29354);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29396){var ex__28975__auto__ = e29396;
var statearr_29397_31645 = state_29354;
(statearr_29397_31645[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29354[(4)]))){
var statearr_29398_31646 = state_29354;
(statearr_29398_31646[(1)] = cljs.core.first((state_29354[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31647 = state_29354;
state_29354 = G__31647;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_29354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_29354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29399 = f__29042__auto__();
(statearr_29399[(6)] = c__29041__auto___31590);

return statearr_29399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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
var process = (function (p__29410){
var vec__29411 = p__29410;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(1),null);
var job = vec__29411;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29041__auto___31683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29424){
var state_val_29425 = (state_29424[(1)]);
if((state_val_29425 === (1))){
var state_29424__$1 = state_29424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29424__$1,(2),res,v);
} else {
if((state_val_29425 === (2))){
var inst_29421 = (state_29424[(2)]);
var inst_29422 = cljs.core.async.close_BANG_(res);
var state_29424__$1 = (function (){var statearr_29426 = state_29424;
(statearr_29426[(7)] = inst_29421);

return statearr_29426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29424__$1,inst_29422);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0 = (function (){
var statearr_29427 = [null,null,null,null,null,null,null,null];
(statearr_29427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__);

(statearr_29427[(1)] = (1));

return statearr_29427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1 = (function (state_29424){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29424);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29433){var ex__28975__auto__ = e29433;
var statearr_29434_31686 = state_29424;
(statearr_29434_31686[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29424[(4)]))){
var statearr_29435_31687 = state_29424;
(statearr_29435_31687[(1)] = cljs.core.first((state_29424[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31689 = state_29424;
state_29424 = G__31689;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = function(state_29424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1.call(this,state_29424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29436 = f__29042__auto__();
(statearr_29436[(6)] = c__29041__auto___31683);

return statearr_29436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29437){
var vec__29438 = p__29437;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29438,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29438,(1),null);
var job = vec__29438;
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
var n__4648__auto___31693 = n;
var __31694 = (0);
while(true){
if((__31694 < n__4648__auto___31693)){
var G__29441_31695 = type;
var G__29441_31696__$1 = (((G__29441_31695 instanceof cljs.core.Keyword))?G__29441_31695.fqn:null);
switch (G__29441_31696__$1) {
case "compute":
var c__29041__auto___31699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31694,c__29041__auto___31699,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async){
return (function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = ((function (__31694,c__29041__auto___31699,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async){
return (function (state_29454){
var state_val_29455 = (state_29454[(1)]);
if((state_val_29455 === (1))){
var state_29454__$1 = state_29454;
var statearr_29456_31701 = state_29454__$1;
(statearr_29456_31701[(2)] = null);

(statearr_29456_31701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (2))){
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29454__$1,(4),jobs);
} else {
if((state_val_29455 === (3))){
var inst_29452 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29454__$1,inst_29452);
} else {
if((state_val_29455 === (4))){
var inst_29444 = (state_29454[(2)]);
var inst_29445 = process(inst_29444);
var state_29454__$1 = state_29454;
if(cljs.core.truth_(inst_29445)){
var statearr_29457_31702 = state_29454__$1;
(statearr_29457_31702[(1)] = (5));

} else {
var statearr_29458_31705 = state_29454__$1;
(statearr_29458_31705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (5))){
var state_29454__$1 = state_29454;
var statearr_29459_31709 = state_29454__$1;
(statearr_29459_31709[(2)] = null);

(statearr_29459_31709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (6))){
var state_29454__$1 = state_29454;
var statearr_29460_31710 = state_29454__$1;
(statearr_29460_31710[(2)] = null);

(statearr_29460_31710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (7))){
var inst_29450 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29461_31711 = state_29454__$1;
(statearr_29461_31711[(2)] = inst_29450);

(statearr_29461_31711[(1)] = (3));


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
});})(__31694,c__29041__auto___31699,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async))
;
return ((function (__31694,switch__28971__auto__,c__29041__auto___31699,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0 = (function (){
var statearr_29462 = [null,null,null,null,null,null,null];
(statearr_29462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__);

(statearr_29462[(1)] = (1));

return statearr_29462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1 = (function (state_29454){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29454);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29463){var ex__28975__auto__ = e29463;
var statearr_29464_31724 = state_29454;
(statearr_29464_31724[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29454[(4)]))){
var statearr_29465_31725 = state_29454;
(statearr_29465_31725[(1)] = cljs.core.first((state_29454[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31726 = state_29454;
state_29454 = G__31726;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = function(state_29454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1.call(this,state_29454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__;
})()
;})(__31694,switch__28971__auto__,c__29041__auto___31699,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async))
})();
var state__29043__auto__ = (function (){var statearr_29466 = f__29042__auto__();
(statearr_29466[(6)] = c__29041__auto___31699);

return statearr_29466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
});})(__31694,c__29041__auto___31699,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async))
);


break;
case "async":
var c__29041__auto___31727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31694,c__29041__auto___31727,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async){
return (function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = ((function (__31694,c__29041__auto___31727,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async){
return (function (state_29479){
var state_val_29480 = (state_29479[(1)]);
if((state_val_29480 === (1))){
var state_29479__$1 = state_29479;
var statearr_29483_31743 = state_29479__$1;
(statearr_29483_31743[(2)] = null);

(statearr_29483_31743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (2))){
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29479__$1,(4),jobs);
} else {
if((state_val_29480 === (3))){
var inst_29477 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29479__$1,inst_29477);
} else {
if((state_val_29480 === (4))){
var inst_29469 = (state_29479[(2)]);
var inst_29470 = async(inst_29469);
var state_29479__$1 = state_29479;
if(cljs.core.truth_(inst_29470)){
var statearr_29493_31744 = state_29479__$1;
(statearr_29493_31744[(1)] = (5));

} else {
var statearr_29494_31745 = state_29479__$1;
(statearr_29494_31745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (5))){
var state_29479__$1 = state_29479;
var statearr_29495_31747 = state_29479__$1;
(statearr_29495_31747[(2)] = null);

(statearr_29495_31747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (6))){
var state_29479__$1 = state_29479;
var statearr_29496_31748 = state_29479__$1;
(statearr_29496_31748[(2)] = null);

(statearr_29496_31748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (7))){
var inst_29475 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29497_31752 = state_29479__$1;
(statearr_29497_31752[(2)] = inst_29475);

(statearr_29497_31752[(1)] = (3));


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
});})(__31694,c__29041__auto___31727,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async))
;
return ((function (__31694,switch__28971__auto__,c__29041__auto___31727,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0 = (function (){
var statearr_29498 = [null,null,null,null,null,null,null];
(statearr_29498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__);

(statearr_29498[(1)] = (1));

return statearr_29498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1 = (function (state_29479){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29479);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29499){var ex__28975__auto__ = e29499;
var statearr_29500_31760 = state_29479;
(statearr_29500_31760[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29479[(4)]))){
var statearr_29514_31762 = state_29479;
(statearr_29514_31762[(1)] = cljs.core.first((state_29479[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31763 = state_29479;
state_29479 = G__31763;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = function(state_29479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1.call(this,state_29479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__;
})()
;})(__31694,switch__28971__auto__,c__29041__auto___31727,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async))
})();
var state__29043__auto__ = (function (){var statearr_29515 = f__29042__auto__();
(statearr_29515[(6)] = c__29041__auto___31727);

return statearr_29515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
});})(__31694,c__29041__auto___31727,G__29441_31695,G__29441_31696__$1,n__4648__auto___31693,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29441_31696__$1)].join('')));

}

var G__31764 = (__31694 + (1));
__31694 = G__31764;
continue;
} else {
}
break;
}

var c__29041__auto___31765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29540){
var state_val_29541 = (state_29540[(1)]);
if((state_val_29541 === (7))){
var inst_29536 = (state_29540[(2)]);
var state_29540__$1 = state_29540;
var statearr_29543_31779 = state_29540__$1;
(statearr_29543_31779[(2)] = inst_29536);

(statearr_29543_31779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29541 === (1))){
var state_29540__$1 = state_29540;
var statearr_29544_31780 = state_29540__$1;
(statearr_29544_31780[(2)] = null);

(statearr_29544_31780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29541 === (4))){
var inst_29521 = (state_29540[(7)]);
var inst_29521__$1 = (state_29540[(2)]);
var inst_29522 = (inst_29521__$1 == null);
var state_29540__$1 = (function (){var statearr_29547 = state_29540;
(statearr_29547[(7)] = inst_29521__$1);

return statearr_29547;
})();
if(cljs.core.truth_(inst_29522)){
var statearr_29548_31781 = state_29540__$1;
(statearr_29548_31781[(1)] = (5));

} else {
var statearr_29554_31782 = state_29540__$1;
(statearr_29554_31782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29541 === (6))){
var inst_29521 = (state_29540[(7)]);
var inst_29526 = (state_29540[(8)]);
var inst_29526__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29528 = [inst_29521,inst_29526__$1];
var inst_29529 = (new cljs.core.PersistentVector(null,2,(5),inst_29527,inst_29528,null));
var state_29540__$1 = (function (){var statearr_29555 = state_29540;
(statearr_29555[(8)] = inst_29526__$1);

return statearr_29555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29540__$1,(8),jobs,inst_29529);
} else {
if((state_val_29541 === (3))){
var inst_29538 = (state_29540[(2)]);
var state_29540__$1 = state_29540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29540__$1,inst_29538);
} else {
if((state_val_29541 === (2))){
var state_29540__$1 = state_29540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29540__$1,(4),from);
} else {
if((state_val_29541 === (9))){
var inst_29533 = (state_29540[(2)]);
var state_29540__$1 = (function (){var statearr_29566 = state_29540;
(statearr_29566[(9)] = inst_29533);

return statearr_29566;
})();
var statearr_29567_31787 = state_29540__$1;
(statearr_29567_31787[(2)] = null);

(statearr_29567_31787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29541 === (5))){
var inst_29524 = cljs.core.async.close_BANG_(jobs);
var state_29540__$1 = state_29540;
var statearr_29568_31789 = state_29540__$1;
(statearr_29568_31789[(2)] = inst_29524);

(statearr_29568_31789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29541 === (8))){
var inst_29526 = (state_29540[(8)]);
var inst_29531 = (state_29540[(2)]);
var state_29540__$1 = (function (){var statearr_29569 = state_29540;
(statearr_29569[(10)] = inst_29531);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29540__$1,(9),results,inst_29526);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0 = (function (){
var statearr_29573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__);

(statearr_29573[(1)] = (1));

return statearr_29573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1 = (function (state_29540){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29540);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29574){var ex__28975__auto__ = e29574;
var statearr_29575_31792 = state_29540;
(statearr_29575_31792[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29540[(4)]))){
var statearr_29576_31793 = state_29540;
(statearr_29576_31793[(1)] = cljs.core.first((state_29540[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31796 = state_29540;
state_29540 = G__31796;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = function(state_29540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1.call(this,state_29540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29579 = f__29042__auto__();
(statearr_29579[(6)] = c__29041__auto___31765);

return statearr_29579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


var c__29041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29629){
var state_val_29630 = (state_29629[(1)]);
if((state_val_29630 === (7))){
var inst_29625 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29631_31799 = state_29629__$1;
(statearr_29631_31799[(2)] = inst_29625);

(statearr_29631_31799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (20))){
var state_29629__$1 = state_29629;
var statearr_29632_31800 = state_29629__$1;
(statearr_29632_31800[(2)] = null);

(statearr_29632_31800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (1))){
var state_29629__$1 = state_29629;
var statearr_29633_31801 = state_29629__$1;
(statearr_29633_31801[(2)] = null);

(statearr_29633_31801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (4))){
var inst_29588 = (state_29629[(7)]);
var inst_29588__$1 = (state_29629[(2)]);
var inst_29589 = (inst_29588__$1 == null);
var state_29629__$1 = (function (){var statearr_29634 = state_29629;
(statearr_29634[(7)] = inst_29588__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29589)){
var statearr_29635_31805 = state_29629__$1;
(statearr_29635_31805[(1)] = (5));

} else {
var statearr_29636_31806 = state_29629__$1;
(statearr_29636_31806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (15))){
var inst_29601 = (state_29629[(8)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29629__$1,(18),to,inst_29601);
} else {
if((state_val_29630 === (21))){
var inst_29620 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29637_31808 = state_29629__$1;
(statearr_29637_31808[(2)] = inst_29620);

(statearr_29637_31808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (13))){
var inst_29622 = (state_29629[(2)]);
var state_29629__$1 = (function (){var statearr_29638 = state_29629;
(statearr_29638[(9)] = inst_29622);

return statearr_29638;
})();
var statearr_29639_31809 = state_29629__$1;
(statearr_29639_31809[(2)] = null);

(statearr_29639_31809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (6))){
var inst_29588 = (state_29629[(7)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29629__$1,(11),inst_29588);
} else {
if((state_val_29630 === (17))){
var inst_29615 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
if(cljs.core.truth_(inst_29615)){
var statearr_29640_31813 = state_29629__$1;
(statearr_29640_31813[(1)] = (19));

} else {
var statearr_29641_31814 = state_29629__$1;
(statearr_29641_31814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (3))){
var inst_29627 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29629__$1,inst_29627);
} else {
if((state_val_29630 === (12))){
var inst_29598 = (state_29629[(10)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29629__$1,(14),inst_29598);
} else {
if((state_val_29630 === (2))){
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29629__$1,(4),results);
} else {
if((state_val_29630 === (19))){
var state_29629__$1 = state_29629;
var statearr_29645_31816 = state_29629__$1;
(statearr_29645_31816[(2)] = null);

(statearr_29645_31816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (11))){
var inst_29598 = (state_29629[(2)]);
var state_29629__$1 = (function (){var statearr_29646 = state_29629;
(statearr_29646[(10)] = inst_29598);

return statearr_29646;
})();
var statearr_29647_31821 = state_29629__$1;
(statearr_29647_31821[(2)] = null);

(statearr_29647_31821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (9))){
var state_29629__$1 = state_29629;
var statearr_29648_31822 = state_29629__$1;
(statearr_29648_31822[(2)] = null);

(statearr_29648_31822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (5))){
var state_29629__$1 = state_29629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29649_31823 = state_29629__$1;
(statearr_29649_31823[(1)] = (8));

} else {
var statearr_29650_31824 = state_29629__$1;
(statearr_29650_31824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (14))){
var inst_29601 = (state_29629[(8)]);
var inst_29601__$1 = (state_29629[(2)]);
var inst_29608 = (inst_29601__$1 == null);
var inst_29609 = cljs.core.not(inst_29608);
var state_29629__$1 = (function (){var statearr_29651 = state_29629;
(statearr_29651[(8)] = inst_29601__$1);

return statearr_29651;
})();
if(inst_29609){
var statearr_29652_31828 = state_29629__$1;
(statearr_29652_31828[(1)] = (15));

} else {
var statearr_29653_31829 = state_29629__$1;
(statearr_29653_31829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (16))){
var state_29629__$1 = state_29629;
var statearr_29654_31830 = state_29629__$1;
(statearr_29654_31830[(2)] = false);

(statearr_29654_31830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (10))){
var inst_29595 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29655_31831 = state_29629__$1;
(statearr_29655_31831[(2)] = inst_29595);

(statearr_29655_31831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (18))){
var inst_29612 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29656_31832 = state_29629__$1;
(statearr_29656_31832[(2)] = inst_29612);

(statearr_29656_31832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (8))){
var inst_29592 = cljs.core.async.close_BANG_(to);
var state_29629__$1 = state_29629;
var statearr_29657_31833 = state_29629__$1;
(statearr_29657_31833[(2)] = inst_29592);

(statearr_29657_31833[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0 = (function (){
var statearr_29658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__);

(statearr_29658[(1)] = (1));

return statearr_29658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1 = (function (state_29629){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29629);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29659){var ex__28975__auto__ = e29659;
var statearr_29660_31836 = state_29629;
(statearr_29660_31836[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29629[(4)]))){
var statearr_29661_31837 = state_29629;
(statearr_29661_31837[(1)] = cljs.core.first((state_29629[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31838 = state_29629;
state_29629 = G__31838;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__ = function(state_29629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1.call(this,state_29629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29662 = f__29042__auto__();
(statearr_29662[(6)] = c__29041__auto__);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

return c__29041__auto__;
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
var G__29672 = arguments.length;
switch (G__29672) {
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
var G__29677 = arguments.length;
switch (G__29677) {
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
var G__29679 = arguments.length;
switch (G__29679) {
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
var c__29041__auto___31856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29717){
var state_val_29718 = (state_29717[(1)]);
if((state_val_29718 === (7))){
var inst_29713 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
var statearr_29720_31857 = state_29717__$1;
(statearr_29720_31857[(2)] = inst_29713);

(statearr_29720_31857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (1))){
var state_29717__$1 = state_29717;
var statearr_29721_31858 = state_29717__$1;
(statearr_29721_31858[(2)] = null);

(statearr_29721_31858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (4))){
var inst_29694 = (state_29717[(7)]);
var inst_29694__$1 = (state_29717[(2)]);
var inst_29695 = (inst_29694__$1 == null);
var state_29717__$1 = (function (){var statearr_29722 = state_29717;
(statearr_29722[(7)] = inst_29694__$1);

return statearr_29722;
})();
if(cljs.core.truth_(inst_29695)){
var statearr_29723_31859 = state_29717__$1;
(statearr_29723_31859[(1)] = (5));

} else {
var statearr_29724_31860 = state_29717__$1;
(statearr_29724_31860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (13))){
var state_29717__$1 = state_29717;
var statearr_29725_31861 = state_29717__$1;
(statearr_29725_31861[(2)] = null);

(statearr_29725_31861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (6))){
var inst_29694 = (state_29717[(7)]);
var inst_29700 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29694) : p.call(null,inst_29694));
var state_29717__$1 = state_29717;
if(cljs.core.truth_(inst_29700)){
var statearr_29726_31862 = state_29717__$1;
(statearr_29726_31862[(1)] = (9));

} else {
var statearr_29727_31863 = state_29717__$1;
(statearr_29727_31863[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (3))){
var inst_29715 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29717__$1,inst_29715);
} else {
if((state_val_29718 === (12))){
var state_29717__$1 = state_29717;
var statearr_29728_31865 = state_29717__$1;
(statearr_29728_31865[(2)] = null);

(statearr_29728_31865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (2))){
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29717__$1,(4),ch);
} else {
if((state_val_29718 === (11))){
var inst_29694 = (state_29717[(7)]);
var inst_29704 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29717__$1,(8),inst_29704,inst_29694);
} else {
if((state_val_29718 === (9))){
var state_29717__$1 = state_29717;
var statearr_29729_31867 = state_29717__$1;
(statearr_29729_31867[(2)] = tc);

(statearr_29729_31867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (5))){
var inst_29697 = cljs.core.async.close_BANG_(tc);
var inst_29698 = cljs.core.async.close_BANG_(fc);
var state_29717__$1 = (function (){var statearr_29730 = state_29717;
(statearr_29730[(8)] = inst_29697);

return statearr_29730;
})();
var statearr_29731_31868 = state_29717__$1;
(statearr_29731_31868[(2)] = inst_29698);

(statearr_29731_31868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (14))){
var inst_29711 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
var statearr_29732_31869 = state_29717__$1;
(statearr_29732_31869[(2)] = inst_29711);

(statearr_29732_31869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (10))){
var state_29717__$1 = state_29717;
var statearr_29734_31870 = state_29717__$1;
(statearr_29734_31870[(2)] = fc);

(statearr_29734_31870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (8))){
var inst_29706 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
if(cljs.core.truth_(inst_29706)){
var statearr_29735_31874 = state_29717__$1;
(statearr_29735_31874[(1)] = (12));

} else {
var statearr_29736_31875 = state_29717__$1;
(statearr_29736_31875[(1)] = (13));

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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_29738 = [null,null,null,null,null,null,null,null,null];
(statearr_29738[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_29738[(1)] = (1));

return statearr_29738;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_29717){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29717);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29739){var ex__28975__auto__ = e29739;
var statearr_29740_31881 = state_29717;
(statearr_29740_31881[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29717[(4)]))){
var statearr_29741_31882 = state_29717;
(statearr_29741_31882[(1)] = cljs.core.first((state_29717[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31887 = state_29717;
state_29717 = G__31887;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_29717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_29717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29749 = f__29042__auto__();
(statearr_29749[(6)] = c__29041__auto___31856);

return statearr_29749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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
var c__29041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29771){
var state_val_29772 = (state_29771[(1)]);
if((state_val_29772 === (7))){
var inst_29767 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29774_31891 = state_29771__$1;
(statearr_29774_31891[(2)] = inst_29767);

(statearr_29774_31891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (1))){
var inst_29750 = init;
var inst_29751 = inst_29750;
var state_29771__$1 = (function (){var statearr_29776 = state_29771;
(statearr_29776[(7)] = inst_29751);

return statearr_29776;
})();
var statearr_29777_31893 = state_29771__$1;
(statearr_29777_31893[(2)] = null);

(statearr_29777_31893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (4))){
var inst_29754 = (state_29771[(8)]);
var inst_29754__$1 = (state_29771[(2)]);
var inst_29755 = (inst_29754__$1 == null);
var state_29771__$1 = (function (){var statearr_29778 = state_29771;
(statearr_29778[(8)] = inst_29754__$1);

return statearr_29778;
})();
if(cljs.core.truth_(inst_29755)){
var statearr_29779_31897 = state_29771__$1;
(statearr_29779_31897[(1)] = (5));

} else {
var statearr_29780_31898 = state_29771__$1;
(statearr_29780_31898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (6))){
var inst_29751 = (state_29771[(7)]);
var inst_29758 = (state_29771[(9)]);
var inst_29754 = (state_29771[(8)]);
var inst_29758__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29751,inst_29754) : f.call(null,inst_29751,inst_29754));
var inst_29759 = cljs.core.reduced_QMARK_(inst_29758__$1);
var state_29771__$1 = (function (){var statearr_29782 = state_29771;
(statearr_29782[(9)] = inst_29758__$1);

return statearr_29782;
})();
if(inst_29759){
var statearr_29784_31900 = state_29771__$1;
(statearr_29784_31900[(1)] = (8));

} else {
var statearr_29785_31901 = state_29771__$1;
(statearr_29785_31901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (3))){
var inst_29769 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29771__$1,inst_29769);
} else {
if((state_val_29772 === (2))){
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29771__$1,(4),ch);
} else {
if((state_val_29772 === (9))){
var inst_29758 = (state_29771[(9)]);
var inst_29751 = inst_29758;
var state_29771__$1 = (function (){var statearr_29789 = state_29771;
(statearr_29789[(7)] = inst_29751);

return statearr_29789;
})();
var statearr_29790_31905 = state_29771__$1;
(statearr_29790_31905[(2)] = null);

(statearr_29790_31905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (5))){
var inst_29751 = (state_29771[(7)]);
var state_29771__$1 = state_29771;
var statearr_29797_31906 = state_29771__$1;
(statearr_29797_31906[(2)] = inst_29751);

(statearr_29797_31906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (10))){
var inst_29765 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29798_31908 = state_29771__$1;
(statearr_29798_31908[(2)] = inst_29765);

(statearr_29798_31908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (8))){
var inst_29758 = (state_29771[(9)]);
var inst_29761 = cljs.core.deref(inst_29758);
var state_29771__$1 = state_29771;
var statearr_29799_31909 = state_29771__$1;
(statearr_29799_31909[(2)] = inst_29761);

(statearr_29799_31909[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28972__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28972__auto____0 = (function (){
var statearr_29800 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29800[(0)] = cljs$core$async$reduce_$_state_machine__28972__auto__);

(statearr_29800[(1)] = (1));

return statearr_29800;
});
var cljs$core$async$reduce_$_state_machine__28972__auto____1 = (function (state_29771){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29771);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29801){var ex__28975__auto__ = e29801;
var statearr_29802_31911 = state_29771;
(statearr_29802_31911[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29771[(4)]))){
var statearr_29803_31912 = state_29771;
(statearr_29803_31912[(1)] = cljs.core.first((state_29771[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31913 = state_29771;
state_29771 = G__31913;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28972__auto__ = function(state_29771){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28972__auto____1.call(this,state_29771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28972__auto____0;
cljs$core$async$reduce_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28972__auto____1;
return cljs$core$async$reduce_$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29804 = f__29042__auto__();
(statearr_29804[(6)] = c__29041__auto__);

return statearr_29804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

return c__29041__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29812){
var state_val_29813 = (state_29812[(1)]);
if((state_val_29813 === (1))){
var inst_29807 = cljs.core.async.reduce(f__$1,init,ch);
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29812__$1,(2),inst_29807);
} else {
if((state_val_29813 === (2))){
var inst_29809 = (state_29812[(2)]);
var inst_29810 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29809) : f__$1.call(null,inst_29809));
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29812__$1,inst_29810);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28972__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28972__auto____0 = (function (){
var statearr_29815 = [null,null,null,null,null,null,null];
(statearr_29815[(0)] = cljs$core$async$transduce_$_state_machine__28972__auto__);

(statearr_29815[(1)] = (1));

return statearr_29815;
});
var cljs$core$async$transduce_$_state_machine__28972__auto____1 = (function (state_29812){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29812);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29817){var ex__28975__auto__ = e29817;
var statearr_29818_31917 = state_29812;
(statearr_29818_31917[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29812[(4)]))){
var statearr_29819_31918 = state_29812;
(statearr_29819_31918[(1)] = cljs.core.first((state_29812[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31919 = state_29812;
state_29812 = G__31919;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28972__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28972__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28972__auto____0;
cljs$core$async$transduce_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28972__auto____1;
return cljs$core$async$transduce_$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29820 = f__29042__auto__();
(statearr_29820[(6)] = c__29041__auto__);

return statearr_29820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

return c__29041__auto__;
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
var G__29822 = arguments.length;
switch (G__29822) {
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
var c__29041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_29859){
var state_val_29860 = (state_29859[(1)]);
if((state_val_29860 === (7))){
var inst_29841 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29861_31921 = state_29859__$1;
(statearr_29861_31921[(2)] = inst_29841);

(statearr_29861_31921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (1))){
var inst_29830 = cljs.core.seq(coll);
var inst_29831 = inst_29830;
var state_29859__$1 = (function (){var statearr_29863 = state_29859;
(statearr_29863[(7)] = inst_29831);

return statearr_29863;
})();
var statearr_29866_31922 = state_29859__$1;
(statearr_29866_31922[(2)] = null);

(statearr_29866_31922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (4))){
var inst_29831 = (state_29859[(7)]);
var inst_29839 = cljs.core.first(inst_29831);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29859__$1,(7),ch,inst_29839);
} else {
if((state_val_29860 === (13))){
var inst_29853 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29867_31923 = state_29859__$1;
(statearr_29867_31923[(2)] = inst_29853);

(statearr_29867_31923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (6))){
var inst_29844 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29844)){
var statearr_29868_31924 = state_29859__$1;
(statearr_29868_31924[(1)] = (8));

} else {
var statearr_29869_31925 = state_29859__$1;
(statearr_29869_31925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (3))){
var inst_29857 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29859__$1,inst_29857);
} else {
if((state_val_29860 === (12))){
var state_29859__$1 = state_29859;
var statearr_29870_31927 = state_29859__$1;
(statearr_29870_31927[(2)] = null);

(statearr_29870_31927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (2))){
var inst_29831 = (state_29859[(7)]);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29831)){
var statearr_29880_31928 = state_29859__$1;
(statearr_29880_31928[(1)] = (4));

} else {
var statearr_29881_31929 = state_29859__$1;
(statearr_29881_31929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (11))){
var inst_29850 = cljs.core.async.close_BANG_(ch);
var state_29859__$1 = state_29859;
var statearr_29882_31932 = state_29859__$1;
(statearr_29882_31932[(2)] = inst_29850);

(statearr_29882_31932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (9))){
var state_29859__$1 = state_29859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29883_31933 = state_29859__$1;
(statearr_29883_31933[(1)] = (11));

} else {
var statearr_29884_31934 = state_29859__$1;
(statearr_29884_31934[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (5))){
var inst_29831 = (state_29859[(7)]);
var state_29859__$1 = state_29859;
var statearr_29885_31936 = state_29859__$1;
(statearr_29885_31936[(2)] = inst_29831);

(statearr_29885_31936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (10))){
var inst_29855 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29886_31937 = state_29859__$1;
(statearr_29886_31937[(2)] = inst_29855);

(statearr_29886_31937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (8))){
var inst_29831 = (state_29859[(7)]);
var inst_29846 = cljs.core.next(inst_29831);
var inst_29831__$1 = inst_29846;
var state_29859__$1 = (function (){var statearr_29887 = state_29859;
(statearr_29887[(7)] = inst_29831__$1);

return statearr_29887;
})();
var statearr_29888_31939 = state_29859__$1;
(statearr_29888_31939[(2)] = null);

(statearr_29888_31939[(1)] = (2));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_29889 = [null,null,null,null,null,null,null,null];
(statearr_29889[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_29889[(1)] = (1));

return statearr_29889;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_29859){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_29859);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e29890){var ex__28975__auto__ = e29890;
var statearr_29891_31944 = state_29859;
(statearr_29891_31944[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_29859[(4)]))){
var statearr_29892_31945 = state_29859;
(statearr_29892_31945[(1)] = cljs.core.first((state_29859[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31946 = state_29859;
state_29859 = G__31946;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_29859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_29859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_29894 = f__29042__auto__();
(statearr_29894[(6)] = c__29041__auto__);

return statearr_29894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

return c__29041__auto__;
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
var G__29905 = arguments.length;
switch (G__29905) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31965 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_31965(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31979 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_31979(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31997 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_31997(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32000 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_32000(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29930 = (function (ch,cs,meta29931){
this.ch = ch;
this.cs = cs;
this.meta29931 = meta29931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29932,meta29931__$1){
var self__ = this;
var _29932__$1 = this;
return (new cljs.core.async.t_cljs$core$async29930(self__.ch,self__.cs,meta29931__$1));
}));

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29932){
var self__ = this;
var _29932__$1 = this;
return self__.meta29931;
}));

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29930.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29931","meta29931",-407197029,null)], null);
}));

(cljs.core.async.t_cljs$core$async29930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29930");

(cljs.core.async.t_cljs$core$async29930.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29930.
 */
cljs.core.async.__GT_t_cljs$core$async29930 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29930(ch__$1,cs__$1,meta29931){
return (new cljs.core.async.t_cljs$core$async29930(ch__$1,cs__$1,meta29931));
});

}

return (new cljs.core.async.t_cljs$core$async29930(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29041__auto___32040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_30087){
var state_val_30088 = (state_30087[(1)]);
if((state_val_30088 === (7))){
var inst_30082 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30093_32041 = state_30087__$1;
(statearr_30093_32041[(2)] = inst_30082);

(statearr_30093_32041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (20))){
var inst_29972 = (state_30087[(7)]);
var inst_29998 = cljs.core.first(inst_29972);
var inst_29999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29998,(0),null);
var inst_30000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29998,(1),null);
var state_30087__$1 = (function (){var statearr_30107 = state_30087;
(statearr_30107[(8)] = inst_29999);

return statearr_30107;
})();
if(cljs.core.truth_(inst_30000)){
var statearr_30108_32043 = state_30087__$1;
(statearr_30108_32043[(1)] = (22));

} else {
var statearr_30109_32044 = state_30087__$1;
(statearr_30109_32044[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (27))){
var inst_29941 = (state_30087[(9)]);
var inst_30028 = (state_30087[(10)]);
var inst_30035 = (state_30087[(11)]);
var inst_30030 = (state_30087[(12)]);
var inst_30035__$1 = cljs.core._nth(inst_30028,inst_30030);
var inst_30036 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30035__$1,inst_29941,done);
var state_30087__$1 = (function (){var statearr_30119 = state_30087;
(statearr_30119[(11)] = inst_30035__$1);

return statearr_30119;
})();
if(cljs.core.truth_(inst_30036)){
var statearr_30120_32045 = state_30087__$1;
(statearr_30120_32045[(1)] = (30));

} else {
var statearr_30121_32046 = state_30087__$1;
(statearr_30121_32046[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (1))){
var state_30087__$1 = state_30087;
var statearr_30122_32047 = state_30087__$1;
(statearr_30122_32047[(2)] = null);

(statearr_30122_32047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (24))){
var inst_29972 = (state_30087[(7)]);
var inst_30005 = (state_30087[(2)]);
var inst_30006 = cljs.core.next(inst_29972);
var inst_29950 = inst_30006;
var inst_29951 = null;
var inst_29952 = (0);
var inst_29953 = (0);
var state_30087__$1 = (function (){var statearr_30126 = state_30087;
(statearr_30126[(13)] = inst_29953);

(statearr_30126[(14)] = inst_30005);

(statearr_30126[(15)] = inst_29950);

(statearr_30126[(16)] = inst_29951);

(statearr_30126[(17)] = inst_29952);

return statearr_30126;
})();
var statearr_30127_32048 = state_30087__$1;
(statearr_30127_32048[(2)] = null);

(statearr_30127_32048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (39))){
var state_30087__$1 = state_30087;
var statearr_30137_32049 = state_30087__$1;
(statearr_30137_32049[(2)] = null);

(statearr_30137_32049[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (4))){
var inst_29941 = (state_30087[(9)]);
var inst_29941__$1 = (state_30087[(2)]);
var inst_29942 = (inst_29941__$1 == null);
var state_30087__$1 = (function (){var statearr_30138 = state_30087;
(statearr_30138[(9)] = inst_29941__$1);

return statearr_30138;
})();
if(cljs.core.truth_(inst_29942)){
var statearr_30139_32050 = state_30087__$1;
(statearr_30139_32050[(1)] = (5));

} else {
var statearr_30140_32051 = state_30087__$1;
(statearr_30140_32051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (15))){
var inst_29953 = (state_30087[(13)]);
var inst_29950 = (state_30087[(15)]);
var inst_29951 = (state_30087[(16)]);
var inst_29952 = (state_30087[(17)]);
var inst_29968 = (state_30087[(2)]);
var inst_29969 = (inst_29953 + (1));
var tmp30134 = inst_29950;
var tmp30135 = inst_29951;
var tmp30136 = inst_29952;
var inst_29950__$1 = tmp30134;
var inst_29951__$1 = tmp30135;
var inst_29952__$1 = tmp30136;
var inst_29953__$1 = inst_29969;
var state_30087__$1 = (function (){var statearr_30141 = state_30087;
(statearr_30141[(13)] = inst_29953__$1);

(statearr_30141[(18)] = inst_29968);

(statearr_30141[(15)] = inst_29950__$1);

(statearr_30141[(16)] = inst_29951__$1);

(statearr_30141[(17)] = inst_29952__$1);

return statearr_30141;
})();
var statearr_30142_32055 = state_30087__$1;
(statearr_30142_32055[(2)] = null);

(statearr_30142_32055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (21))){
var inst_30009 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30146_32057 = state_30087__$1;
(statearr_30146_32057[(2)] = inst_30009);

(statearr_30146_32057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (31))){
var inst_30035 = (state_30087[(11)]);
var inst_30039 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30035);
var state_30087__$1 = state_30087;
var statearr_30147_32058 = state_30087__$1;
(statearr_30147_32058[(2)] = inst_30039);

(statearr_30147_32058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (32))){
var inst_30028 = (state_30087[(10)]);
var inst_30030 = (state_30087[(12)]);
var inst_30027 = (state_30087[(19)]);
var inst_30029 = (state_30087[(20)]);
var inst_30041 = (state_30087[(2)]);
var inst_30042 = (inst_30030 + (1));
var tmp30143 = inst_30028;
var tmp30144 = inst_30027;
var tmp30145 = inst_30029;
var inst_30027__$1 = tmp30144;
var inst_30028__$1 = tmp30143;
var inst_30029__$1 = tmp30145;
var inst_30030__$1 = inst_30042;
var state_30087__$1 = (function (){var statearr_30148 = state_30087;
(statearr_30148[(21)] = inst_30041);

(statearr_30148[(10)] = inst_30028__$1);

(statearr_30148[(12)] = inst_30030__$1);

(statearr_30148[(19)] = inst_30027__$1);

(statearr_30148[(20)] = inst_30029__$1);

return statearr_30148;
})();
var statearr_30149_32064 = state_30087__$1;
(statearr_30149_32064[(2)] = null);

(statearr_30149_32064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (40))){
var inst_30055 = (state_30087[(22)]);
var inst_30059 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30055);
var state_30087__$1 = state_30087;
var statearr_30150_32066 = state_30087__$1;
(statearr_30150_32066[(2)] = inst_30059);

(statearr_30150_32066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (33))){
var inst_30045 = (state_30087[(23)]);
var inst_30047 = cljs.core.chunked_seq_QMARK_(inst_30045);
var state_30087__$1 = state_30087;
if(inst_30047){
var statearr_30151_32070 = state_30087__$1;
(statearr_30151_32070[(1)] = (36));

} else {
var statearr_30152_32071 = state_30087__$1;
(statearr_30152_32071[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (13))){
var inst_29962 = (state_30087[(24)]);
var inst_29965 = cljs.core.async.close_BANG_(inst_29962);
var state_30087__$1 = state_30087;
var statearr_30153_32073 = state_30087__$1;
(statearr_30153_32073[(2)] = inst_29965);

(statearr_30153_32073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (22))){
var inst_29999 = (state_30087[(8)]);
var inst_30002 = cljs.core.async.close_BANG_(inst_29999);
var state_30087__$1 = state_30087;
var statearr_30154_32076 = state_30087__$1;
(statearr_30154_32076[(2)] = inst_30002);

(statearr_30154_32076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (36))){
var inst_30045 = (state_30087[(23)]);
var inst_30050 = cljs.core.chunk_first(inst_30045);
var inst_30051 = cljs.core.chunk_rest(inst_30045);
var inst_30052 = cljs.core.count(inst_30050);
var inst_30027 = inst_30051;
var inst_30028 = inst_30050;
var inst_30029 = inst_30052;
var inst_30030 = (0);
var state_30087__$1 = (function (){var statearr_30157 = state_30087;
(statearr_30157[(10)] = inst_30028);

(statearr_30157[(12)] = inst_30030);

(statearr_30157[(19)] = inst_30027);

(statearr_30157[(20)] = inst_30029);

return statearr_30157;
})();
var statearr_30158_32080 = state_30087__$1;
(statearr_30158_32080[(2)] = null);

(statearr_30158_32080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (41))){
var inst_30045 = (state_30087[(23)]);
var inst_30061 = (state_30087[(2)]);
var inst_30062 = cljs.core.next(inst_30045);
var inst_30027 = inst_30062;
var inst_30028 = null;
var inst_30029 = (0);
var inst_30030 = (0);
var state_30087__$1 = (function (){var statearr_30159 = state_30087;
(statearr_30159[(10)] = inst_30028);

(statearr_30159[(25)] = inst_30061);

(statearr_30159[(12)] = inst_30030);

(statearr_30159[(19)] = inst_30027);

(statearr_30159[(20)] = inst_30029);

return statearr_30159;
})();
var statearr_30163_32082 = state_30087__$1;
(statearr_30163_32082[(2)] = null);

(statearr_30163_32082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (43))){
var state_30087__$1 = state_30087;
var statearr_30164_32083 = state_30087__$1;
(statearr_30164_32083[(2)] = null);

(statearr_30164_32083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (29))){
var inst_30070 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30165_32084 = state_30087__$1;
(statearr_30165_32084[(2)] = inst_30070);

(statearr_30165_32084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (44))){
var inst_30079 = (state_30087[(2)]);
var state_30087__$1 = (function (){var statearr_30166 = state_30087;
(statearr_30166[(26)] = inst_30079);

return statearr_30166;
})();
var statearr_30167_32085 = state_30087__$1;
(statearr_30167_32085[(2)] = null);

(statearr_30167_32085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (6))){
var inst_30019 = (state_30087[(27)]);
var inst_30018 = cljs.core.deref(cs);
var inst_30019__$1 = cljs.core.keys(inst_30018);
var inst_30020 = cljs.core.count(inst_30019__$1);
var inst_30021 = cljs.core.reset_BANG_(dctr,inst_30020);
var inst_30026 = cljs.core.seq(inst_30019__$1);
var inst_30027 = inst_30026;
var inst_30028 = null;
var inst_30029 = (0);
var inst_30030 = (0);
var state_30087__$1 = (function (){var statearr_30172 = state_30087;
(statearr_30172[(28)] = inst_30021);

(statearr_30172[(10)] = inst_30028);

(statearr_30172[(12)] = inst_30030);

(statearr_30172[(19)] = inst_30027);

(statearr_30172[(20)] = inst_30029);

(statearr_30172[(27)] = inst_30019__$1);

return statearr_30172;
})();
var statearr_30176_32091 = state_30087__$1;
(statearr_30176_32091[(2)] = null);

(statearr_30176_32091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (28))){
var inst_30045 = (state_30087[(23)]);
var inst_30027 = (state_30087[(19)]);
var inst_30045__$1 = cljs.core.seq(inst_30027);
var state_30087__$1 = (function (){var statearr_30177 = state_30087;
(statearr_30177[(23)] = inst_30045__$1);

return statearr_30177;
})();
if(inst_30045__$1){
var statearr_30178_32094 = state_30087__$1;
(statearr_30178_32094[(1)] = (33));

} else {
var statearr_30179_32095 = state_30087__$1;
(statearr_30179_32095[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (25))){
var inst_30030 = (state_30087[(12)]);
var inst_30029 = (state_30087[(20)]);
var inst_30032 = (inst_30030 < inst_30029);
var inst_30033 = inst_30032;
var state_30087__$1 = state_30087;
if(cljs.core.truth_(inst_30033)){
var statearr_30180_32097 = state_30087__$1;
(statearr_30180_32097[(1)] = (27));

} else {
var statearr_30181_32098 = state_30087__$1;
(statearr_30181_32098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (34))){
var state_30087__$1 = state_30087;
var statearr_30182_32100 = state_30087__$1;
(statearr_30182_32100[(2)] = null);

(statearr_30182_32100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (17))){
var state_30087__$1 = state_30087;
var statearr_30183_32101 = state_30087__$1;
(statearr_30183_32101[(2)] = null);

(statearr_30183_32101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (3))){
var inst_30084 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30087__$1,inst_30084);
} else {
if((state_val_30088 === (12))){
var inst_30014 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30186_32107 = state_30087__$1;
(statearr_30186_32107[(2)] = inst_30014);

(statearr_30186_32107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (2))){
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30087__$1,(4),ch);
} else {
if((state_val_30088 === (23))){
var state_30087__$1 = state_30087;
var statearr_30187_32108 = state_30087__$1;
(statearr_30187_32108[(2)] = null);

(statearr_30187_32108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (35))){
var inst_30068 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30188_32114 = state_30087__$1;
(statearr_30188_32114[(2)] = inst_30068);

(statearr_30188_32114[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (19))){
var inst_29972 = (state_30087[(7)]);
var inst_29987 = cljs.core.chunk_first(inst_29972);
var inst_29991 = cljs.core.chunk_rest(inst_29972);
var inst_29992 = cljs.core.count(inst_29987);
var inst_29950 = inst_29991;
var inst_29951 = inst_29987;
var inst_29952 = inst_29992;
var inst_29953 = (0);
var state_30087__$1 = (function (){var statearr_30189 = state_30087;
(statearr_30189[(13)] = inst_29953);

(statearr_30189[(15)] = inst_29950);

(statearr_30189[(16)] = inst_29951);

(statearr_30189[(17)] = inst_29952);

return statearr_30189;
})();
var statearr_30190_32126 = state_30087__$1;
(statearr_30190_32126[(2)] = null);

(statearr_30190_32126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (11))){
var inst_29972 = (state_30087[(7)]);
var inst_29950 = (state_30087[(15)]);
var inst_29972__$1 = cljs.core.seq(inst_29950);
var state_30087__$1 = (function (){var statearr_30191 = state_30087;
(statearr_30191[(7)] = inst_29972__$1);

return statearr_30191;
})();
if(inst_29972__$1){
var statearr_30192_32134 = state_30087__$1;
(statearr_30192_32134[(1)] = (16));

} else {
var statearr_30193_32135 = state_30087__$1;
(statearr_30193_32135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (9))){
var inst_30016 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30196_32140 = state_30087__$1;
(statearr_30196_32140[(2)] = inst_30016);

(statearr_30196_32140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (5))){
var inst_29948 = cljs.core.deref(cs);
var inst_29949 = cljs.core.seq(inst_29948);
var inst_29950 = inst_29949;
var inst_29951 = null;
var inst_29952 = (0);
var inst_29953 = (0);
var state_30087__$1 = (function (){var statearr_30197 = state_30087;
(statearr_30197[(13)] = inst_29953);

(statearr_30197[(15)] = inst_29950);

(statearr_30197[(16)] = inst_29951);

(statearr_30197[(17)] = inst_29952);

return statearr_30197;
})();
var statearr_30198_32144 = state_30087__$1;
(statearr_30198_32144[(2)] = null);

(statearr_30198_32144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (14))){
var state_30087__$1 = state_30087;
var statearr_30199_32146 = state_30087__$1;
(statearr_30199_32146[(2)] = null);

(statearr_30199_32146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (45))){
var inst_30076 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30200_32147 = state_30087__$1;
(statearr_30200_32147[(2)] = inst_30076);

(statearr_30200_32147[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (26))){
var inst_30019 = (state_30087[(27)]);
var inst_30072 = (state_30087[(2)]);
var inst_30073 = cljs.core.seq(inst_30019);
var state_30087__$1 = (function (){var statearr_30203 = state_30087;
(statearr_30203[(29)] = inst_30072);

return statearr_30203;
})();
if(inst_30073){
var statearr_30206_32151 = state_30087__$1;
(statearr_30206_32151[(1)] = (42));

} else {
var statearr_30207_32152 = state_30087__$1;
(statearr_30207_32152[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (16))){
var inst_29972 = (state_30087[(7)]);
var inst_29976 = cljs.core.chunked_seq_QMARK_(inst_29972);
var state_30087__$1 = state_30087;
if(inst_29976){
var statearr_30208_32153 = state_30087__$1;
(statearr_30208_32153[(1)] = (19));

} else {
var statearr_30209_32154 = state_30087__$1;
(statearr_30209_32154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (38))){
var inst_30065 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30210_32155 = state_30087__$1;
(statearr_30210_32155[(2)] = inst_30065);

(statearr_30210_32155[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (30))){
var state_30087__$1 = state_30087;
var statearr_30211_32156 = state_30087__$1;
(statearr_30211_32156[(2)] = null);

(statearr_30211_32156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (10))){
var inst_29953 = (state_30087[(13)]);
var inst_29951 = (state_30087[(16)]);
var inst_29961 = cljs.core._nth(inst_29951,inst_29953);
var inst_29962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29961,(0),null);
var inst_29963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29961,(1),null);
var state_30087__$1 = (function (){var statearr_30212 = state_30087;
(statearr_30212[(24)] = inst_29962);

return statearr_30212;
})();
if(cljs.core.truth_(inst_29963)){
var statearr_30213_32158 = state_30087__$1;
(statearr_30213_32158[(1)] = (13));

} else {
var statearr_30214_32160 = state_30087__$1;
(statearr_30214_32160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (18))){
var inst_30012 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30220_32162 = state_30087__$1;
(statearr_30220_32162[(2)] = inst_30012);

(statearr_30220_32162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (42))){
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30087__$1,(45),dchan);
} else {
if((state_val_30088 === (37))){
var inst_30045 = (state_30087[(23)]);
var inst_29941 = (state_30087[(9)]);
var inst_30055 = (state_30087[(22)]);
var inst_30055__$1 = cljs.core.first(inst_30045);
var inst_30056 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30055__$1,inst_29941,done);
var state_30087__$1 = (function (){var statearr_30221 = state_30087;
(statearr_30221[(22)] = inst_30055__$1);

return statearr_30221;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30222_32164 = state_30087__$1;
(statearr_30222_32164[(1)] = (39));

} else {
var statearr_30223_32165 = state_30087__$1;
(statearr_30223_32165[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (8))){
var inst_29953 = (state_30087[(13)]);
var inst_29952 = (state_30087[(17)]);
var inst_29955 = (inst_29953 < inst_29952);
var inst_29956 = inst_29955;
var state_30087__$1 = state_30087;
if(cljs.core.truth_(inst_29956)){
var statearr_30224_32166 = state_30087__$1;
(statearr_30224_32166[(1)] = (10));

} else {
var statearr_30225_32167 = state_30087__$1;
(statearr_30225_32167[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28972__auto__ = null;
var cljs$core$async$mult_$_state_machine__28972__auto____0 = (function (){
var statearr_30227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30227[(0)] = cljs$core$async$mult_$_state_machine__28972__auto__);

(statearr_30227[(1)] = (1));

return statearr_30227;
});
var cljs$core$async$mult_$_state_machine__28972__auto____1 = (function (state_30087){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_30087);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e30228){var ex__28975__auto__ = e30228;
var statearr_30229_32173 = state_30087;
(statearr_30229_32173[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_30087[(4)]))){
var statearr_30242_32174 = state_30087;
(statearr_30242_32174[(1)] = cljs.core.first((state_30087[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32175 = state_30087;
state_30087 = G__32175;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28972__auto__ = function(state_30087){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28972__auto____1.call(this,state_30087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28972__auto____0;
cljs$core$async$mult_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28972__auto____1;
return cljs$core$async$mult_$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_30243 = f__29042__auto__();
(statearr_30243[(6)] = c__29041__auto___32040);

return statearr_30243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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
var G__30245 = arguments.length;
switch (G__30245) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32183 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_32183(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32186 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_32186(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32190 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32190(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32192 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_32192(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32197 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32197(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32201 = arguments.length;
var i__4772__auto___32202 = (0);
while(true){
if((i__4772__auto___32202 < len__4771__auto___32201)){
args__4777__auto__.push((arguments[i__4772__auto___32202]));

var G__32203 = (i__4772__auto___32202 + (1));
i__4772__auto___32202 = G__32203;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30291){
var map__30292 = p__30291;
var map__30292__$1 = cljs.core.__destructure_map(map__30292);
var opts = map__30292__$1;
var statearr_30294_32207 = state;
(statearr_30294_32207[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30295_32210 = state;
(statearr_30295_32210[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30296_32212 = state;
(statearr_30296_32212[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30278){
var G__30279 = cljs.core.first(seq30278);
var seq30278__$1 = cljs.core.next(seq30278);
var G__30280 = cljs.core.first(seq30278__$1);
var seq30278__$2 = cljs.core.next(seq30278__$1);
var G__30281 = cljs.core.first(seq30278__$2);
var seq30278__$3 = cljs.core.next(seq30278__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30279,G__30280,G__30281,seq30278__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30333 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30334){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30334 = meta30334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30335,meta30334__$1){
var self__ = this;
var _30335__$1 = this;
return (new cljs.core.async.t_cljs$core$async30333(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30334__$1));
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30335){
var self__ = this;
var _30335__$1 = this;
return self__.meta30334;
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30334","meta30334",672286945,null)], null);
}));

(cljs.core.async.t_cljs$core$async30333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30333");

(cljs.core.async.t_cljs$core$async30333.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30333.
 */
cljs.core.async.__GT_t_cljs$core$async30333 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30333(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30334){
return (new cljs.core.async.t_cljs$core$async30333(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30334));
});

}

return (new cljs.core.async.t_cljs$core$async30333(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29041__auto___32229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_30441){
var state_val_30442 = (state_30441[(1)]);
if((state_val_30442 === (7))){
var inst_30434 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30443_32230 = state_30441__$1;
(statearr_30443_32230[(2)] = inst_30434);

(statearr_30443_32230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (20))){
var inst_30428 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30444_32231 = state_30441__$1;
(statearr_30444_32231[(2)] = inst_30428);

(statearr_30444_32231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (1))){
var inst_30377 = calc_state();
var inst_30378 = cljs.core.__destructure_map(inst_30377);
var inst_30379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30378,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30378,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30378,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30382 = inst_30377;
var state_30441__$1 = (function (){var statearr_30445 = state_30441;
(statearr_30445[(7)] = inst_30380);

(statearr_30445[(8)] = inst_30382);

(statearr_30445[(9)] = inst_30381);

(statearr_30445[(10)] = inst_30379);

return statearr_30445;
})();
var statearr_30447_32238 = state_30441__$1;
(statearr_30447_32238[(2)] = null);

(statearr_30447_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (4))){
var inst_30394 = (state_30441[(11)]);
var inst_30395 = (state_30441[(12)]);
var inst_30393 = (state_30441[(2)]);
var inst_30394__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30393,(0),null);
var inst_30395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30393,(1),null);
var inst_30399 = (inst_30394__$1 == null);
var inst_30400 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30395__$1,change);
var inst_30401 = ((inst_30399) || (inst_30400));
var state_30441__$1 = (function (){var statearr_30448 = state_30441;
(statearr_30448[(11)] = inst_30394__$1);

(statearr_30448[(12)] = inst_30395__$1);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30401)){
var statearr_30449_32239 = state_30441__$1;
(statearr_30449_32239[(1)] = (5));

} else {
var statearr_30450_32240 = state_30441__$1;
(statearr_30450_32240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (15))){
var inst_30385 = (state_30441[(13)]);
var inst_30382 = inst_30385;
var state_30441__$1 = (function (){var statearr_30451 = state_30441;
(statearr_30451[(8)] = inst_30382);

return statearr_30451;
})();
var statearr_30460_32241 = state_30441__$1;
(statearr_30460_32241[(2)] = null);

(statearr_30460_32241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (13))){
var inst_30420 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30420)){
var statearr_30461_32242 = state_30441__$1;
(statearr_30461_32242[(1)] = (14));

} else {
var statearr_30462_32243 = state_30441__$1;
(statearr_30462_32243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (6))){
var inst_30386 = (state_30441[(14)]);
var inst_30395 = (state_30441[(12)]);
var inst_30412 = (state_30441[(15)]);
var inst_30412__$1 = (inst_30386.cljs$core$IFn$_invoke$arity$1 ? inst_30386.cljs$core$IFn$_invoke$arity$1(inst_30395) : inst_30386.call(null,inst_30395));
var state_30441__$1 = (function (){var statearr_30467 = state_30441;
(statearr_30467[(15)] = inst_30412__$1);

return statearr_30467;
})();
if(cljs.core.truth_(inst_30412__$1)){
var statearr_30468_32245 = state_30441__$1;
(statearr_30468_32245[(1)] = (11));

} else {
var statearr_30469_32248 = state_30441__$1;
(statearr_30469_32248[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (17))){
var inst_30423 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30423)){
var statearr_30470_32249 = state_30441__$1;
(statearr_30470_32249[(1)] = (18));

} else {
var statearr_30471_32250 = state_30441__$1;
(statearr_30471_32250[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (3))){
var inst_30436 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30441__$1,inst_30436);
} else {
if((state_val_30442 === (12))){
var inst_30387 = (state_30441[(16)]);
var inst_30386 = (state_30441[(14)]);
var inst_30395 = (state_30441[(12)]);
var inst_30415 = cljs.core.empty_QMARK_(inst_30386);
var inst_30416 = (inst_30387.cljs$core$IFn$_invoke$arity$1 ? inst_30387.cljs$core$IFn$_invoke$arity$1(inst_30395) : inst_30387.call(null,inst_30395));
var inst_30417 = cljs.core.not(inst_30416);
var inst_30418 = ((inst_30415) && (inst_30417));
var state_30441__$1 = state_30441;
var statearr_30472_32251 = state_30441__$1;
(statearr_30472_32251[(2)] = inst_30418);

(statearr_30472_32251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (2))){
var inst_30382 = (state_30441[(8)]);
var inst_30385 = (state_30441[(13)]);
var inst_30385__$1 = cljs.core.__destructure_map(inst_30382);
var inst_30386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30385__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30385__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30385__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30441__$1 = (function (){var statearr_30473 = state_30441;
(statearr_30473[(16)] = inst_30387);

(statearr_30473[(13)] = inst_30385__$1);

(statearr_30473[(14)] = inst_30386);

return statearr_30473;
})();
return cljs.core.async.ioc_alts_BANG_(state_30441__$1,(4),inst_30388);
} else {
if((state_val_30442 === (19))){
var state_30441__$1 = state_30441;
var statearr_30474_32252 = state_30441__$1;
(statearr_30474_32252[(2)] = null);

(statearr_30474_32252[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (11))){
var inst_30412 = (state_30441[(15)]);
var state_30441__$1 = state_30441;
var statearr_30475_32253 = state_30441__$1;
(statearr_30475_32253[(2)] = inst_30412);

(statearr_30475_32253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (9))){
var state_30441__$1 = state_30441;
var statearr_30476_32254 = state_30441__$1;
(statearr_30476_32254[(2)] = null);

(statearr_30476_32254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (5))){
var inst_30394 = (state_30441[(11)]);
var inst_30403 = (inst_30394 == null);
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30403)){
var statearr_30477_32255 = state_30441__$1;
(statearr_30477_32255[(1)] = (8));

} else {
var statearr_30478_32256 = state_30441__$1;
(statearr_30478_32256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (14))){
var inst_30394 = (state_30441[(11)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30441__$1,(17),out,inst_30394);
} else {
if((state_val_30442 === (16))){
var inst_30432 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30482_32257 = state_30441__$1;
(statearr_30482_32257[(2)] = inst_30432);

(statearr_30482_32257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (10))){
var inst_30408 = (state_30441[(2)]);
var inst_30409 = calc_state();
var inst_30382 = inst_30409;
var state_30441__$1 = (function (){var statearr_30483 = state_30441;
(statearr_30483[(8)] = inst_30382);

(statearr_30483[(17)] = inst_30408);

return statearr_30483;
})();
var statearr_30484_32261 = state_30441__$1;
(statearr_30484_32261[(2)] = null);

(statearr_30484_32261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (18))){
var inst_30385 = (state_30441[(13)]);
var inst_30382 = inst_30385;
var state_30441__$1 = (function (){var statearr_30486 = state_30441;
(statearr_30486[(8)] = inst_30382);

return statearr_30486;
})();
var statearr_30491_32262 = state_30441__$1;
(statearr_30491_32262[(2)] = null);

(statearr_30491_32262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (8))){
var inst_30395 = (state_30441[(12)]);
var inst_30405 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30395);
var state_30441__$1 = state_30441;
var statearr_30495_32263 = state_30441__$1;
(statearr_30495_32263[(2)] = inst_30405);

(statearr_30495_32263[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28972__auto__ = null;
var cljs$core$async$mix_$_state_machine__28972__auto____0 = (function (){
var statearr_30535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30535[(0)] = cljs$core$async$mix_$_state_machine__28972__auto__);

(statearr_30535[(1)] = (1));

return statearr_30535;
});
var cljs$core$async$mix_$_state_machine__28972__auto____1 = (function (state_30441){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_30441);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e30536){var ex__28975__auto__ = e30536;
var statearr_30537_32264 = state_30441;
(statearr_30537_32264[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_30441[(4)]))){
var statearr_30538_32265 = state_30441;
(statearr_30538_32265[(1)] = cljs.core.first((state_30441[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32266 = state_30441;
state_30441 = G__32266;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28972__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28972__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28972__auto____0;
cljs$core$async$mix_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28972__auto____1;
return cljs$core$async$mix_$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_30539 = f__29042__auto__();
(statearr_30539[(6)] = c__29041__auto___32229);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32269 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_32269(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32270 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_32270(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32271 = (function() {
var G__32272 = null;
var G__32272__1 = (function (p){
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
var G__32272__2 = (function (p,v){
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
G__32272 = function(p,v){
switch(arguments.length){
case 1:
return G__32272__1.call(this,p);
case 2:
return G__32272__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32272.cljs$core$IFn$_invoke$arity$1 = G__32272__1;
G__32272.cljs$core$IFn$_invoke$arity$2 = G__32272__2;
return G__32272;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30544 = arguments.length;
switch (G__30544) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32271(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32271(p,v);
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
var G__30549 = arguments.length;
switch (G__30549) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30547_SHARP_){
if(cljs.core.truth_((p1__30547_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30547_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30547_SHARP_.call(null,topic)))){
return p1__30547_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30547_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30550 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30551){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30551 = meta30551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30552,meta30551__$1){
var self__ = this;
var _30552__$1 = this;
return (new cljs.core.async.t_cljs$core$async30550(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30551__$1));
}));

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30552){
var self__ = this;
var _30552__$1 = this;
return self__.meta30551;
}));

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30550.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30551","meta30551",-1561932078,null)], null);
}));

(cljs.core.async.t_cljs$core$async30550.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30550");

(cljs.core.async.t_cljs$core$async30550.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30550");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30550.
 */
cljs.core.async.__GT_t_cljs$core$async30550 = (function cljs$core$async$__GT_t_cljs$core$async30550(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30551){
return (new cljs.core.async.t_cljs$core$async30550(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30551));
});

}

return (new cljs.core.async.t_cljs$core$async30550(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29041__auto___32277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_30646){
var state_val_30647 = (state_30646[(1)]);
if((state_val_30647 === (7))){
var inst_30640 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30649_32280 = state_30646__$1;
(statearr_30649_32280[(2)] = inst_30640);

(statearr_30649_32280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (20))){
var state_30646__$1 = state_30646;
var statearr_30650_32281 = state_30646__$1;
(statearr_30650_32281[(2)] = null);

(statearr_30650_32281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (1))){
var state_30646__$1 = state_30646;
var statearr_30651_32282 = state_30646__$1;
(statearr_30651_32282[(2)] = null);

(statearr_30651_32282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (24))){
var inst_30623 = (state_30646[(7)]);
var inst_30632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30623);
var state_30646__$1 = state_30646;
var statearr_30652_32283 = state_30646__$1;
(statearr_30652_32283[(2)] = inst_30632);

(statearr_30652_32283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (4))){
var inst_30567 = (state_30646[(8)]);
var inst_30567__$1 = (state_30646[(2)]);
var inst_30568 = (inst_30567__$1 == null);
var state_30646__$1 = (function (){var statearr_30653 = state_30646;
(statearr_30653[(8)] = inst_30567__$1);

return statearr_30653;
})();
if(cljs.core.truth_(inst_30568)){
var statearr_30654_32284 = state_30646__$1;
(statearr_30654_32284[(1)] = (5));

} else {
var statearr_30655_32285 = state_30646__$1;
(statearr_30655_32285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (15))){
var inst_30617 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30656_32286 = state_30646__$1;
(statearr_30656_32286[(2)] = inst_30617);

(statearr_30656_32286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (21))){
var inst_30637 = (state_30646[(2)]);
var state_30646__$1 = (function (){var statearr_30657 = state_30646;
(statearr_30657[(9)] = inst_30637);

return statearr_30657;
})();
var statearr_30658_32287 = state_30646__$1;
(statearr_30658_32287[(2)] = null);

(statearr_30658_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (13))){
var inst_30593 = (state_30646[(10)]);
var inst_30598 = cljs.core.chunked_seq_QMARK_(inst_30593);
var state_30646__$1 = state_30646;
if(inst_30598){
var statearr_30659_32288 = state_30646__$1;
(statearr_30659_32288[(1)] = (16));

} else {
var statearr_30660_32289 = state_30646__$1;
(statearr_30660_32289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (22))){
var inst_30629 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
if(cljs.core.truth_(inst_30629)){
var statearr_30661_32290 = state_30646__$1;
(statearr_30661_32290[(1)] = (23));

} else {
var statearr_30662_32292 = state_30646__$1;
(statearr_30662_32292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (6))){
var inst_30567 = (state_30646[(8)]);
var inst_30623 = (state_30646[(7)]);
var inst_30625 = (state_30646[(11)]);
var inst_30623__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30567) : topic_fn.call(null,inst_30567));
var inst_30624 = cljs.core.deref(mults);
var inst_30625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30624,inst_30623__$1);
var state_30646__$1 = (function (){var statearr_30663 = state_30646;
(statearr_30663[(7)] = inst_30623__$1);

(statearr_30663[(11)] = inst_30625__$1);

return statearr_30663;
})();
if(cljs.core.truth_(inst_30625__$1)){
var statearr_30664_32294 = state_30646__$1;
(statearr_30664_32294[(1)] = (19));

} else {
var statearr_30665_32295 = state_30646__$1;
(statearr_30665_32295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (25))){
var inst_30634 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30666_32296 = state_30646__$1;
(statearr_30666_32296[(2)] = inst_30634);

(statearr_30666_32296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (17))){
var inst_30593 = (state_30646[(10)]);
var inst_30605 = cljs.core.first(inst_30593);
var inst_30606 = cljs.core.async.muxch_STAR_(inst_30605);
var inst_30607 = cljs.core.async.close_BANG_(inst_30606);
var inst_30608 = cljs.core.next(inst_30593);
var inst_30578 = inst_30608;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30646__$1 = (function (){var statearr_30667 = state_30646;
(statearr_30667[(12)] = inst_30580);

(statearr_30667[(13)] = inst_30607);

(statearr_30667[(14)] = inst_30578);

(statearr_30667[(15)] = inst_30579);

(statearr_30667[(16)] = inst_30581);

return statearr_30667;
})();
var statearr_30668_32298 = state_30646__$1;
(statearr_30668_32298[(2)] = null);

(statearr_30668_32298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (3))){
var inst_30642 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30646__$1,inst_30642);
} else {
if((state_val_30647 === (12))){
var inst_30619 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30669_32299 = state_30646__$1;
(statearr_30669_32299[(2)] = inst_30619);

(statearr_30669_32299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (2))){
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30646__$1,(4),ch);
} else {
if((state_val_30647 === (23))){
var state_30646__$1 = state_30646;
var statearr_30671_32300 = state_30646__$1;
(statearr_30671_32300[(2)] = null);

(statearr_30671_32300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (19))){
var inst_30567 = (state_30646[(8)]);
var inst_30625 = (state_30646[(11)]);
var inst_30627 = cljs.core.async.muxch_STAR_(inst_30625);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30646__$1,(22),inst_30627,inst_30567);
} else {
if((state_val_30647 === (11))){
var inst_30593 = (state_30646[(10)]);
var inst_30578 = (state_30646[(14)]);
var inst_30593__$1 = cljs.core.seq(inst_30578);
var state_30646__$1 = (function (){var statearr_30675 = state_30646;
(statearr_30675[(10)] = inst_30593__$1);

return statearr_30675;
})();
if(inst_30593__$1){
var statearr_30676_32301 = state_30646__$1;
(statearr_30676_32301[(1)] = (13));

} else {
var statearr_30677_32302 = state_30646__$1;
(statearr_30677_32302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (9))){
var inst_30621 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30678_32303 = state_30646__$1;
(statearr_30678_32303[(2)] = inst_30621);

(statearr_30678_32303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (5))){
var inst_30574 = cljs.core.deref(mults);
var inst_30575 = cljs.core.vals(inst_30574);
var inst_30576 = cljs.core.seq(inst_30575);
var inst_30578 = inst_30576;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30646__$1 = (function (){var statearr_30679 = state_30646;
(statearr_30679[(12)] = inst_30580);

(statearr_30679[(14)] = inst_30578);

(statearr_30679[(15)] = inst_30579);

(statearr_30679[(16)] = inst_30581);

return statearr_30679;
})();
var statearr_30680_32304 = state_30646__$1;
(statearr_30680_32304[(2)] = null);

(statearr_30680_32304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (14))){
var state_30646__$1 = state_30646;
var statearr_30684_32305 = state_30646__$1;
(statearr_30684_32305[(2)] = null);

(statearr_30684_32305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (16))){
var inst_30593 = (state_30646[(10)]);
var inst_30600 = cljs.core.chunk_first(inst_30593);
var inst_30601 = cljs.core.chunk_rest(inst_30593);
var inst_30602 = cljs.core.count(inst_30600);
var inst_30578 = inst_30601;
var inst_30579 = inst_30600;
var inst_30580 = inst_30602;
var inst_30581 = (0);
var state_30646__$1 = (function (){var statearr_30685 = state_30646;
(statearr_30685[(12)] = inst_30580);

(statearr_30685[(14)] = inst_30578);

(statearr_30685[(15)] = inst_30579);

(statearr_30685[(16)] = inst_30581);

return statearr_30685;
})();
var statearr_30686_32306 = state_30646__$1;
(statearr_30686_32306[(2)] = null);

(statearr_30686_32306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (10))){
var inst_30580 = (state_30646[(12)]);
var inst_30578 = (state_30646[(14)]);
var inst_30579 = (state_30646[(15)]);
var inst_30581 = (state_30646[(16)]);
var inst_30586 = cljs.core._nth(inst_30579,inst_30581);
var inst_30587 = cljs.core.async.muxch_STAR_(inst_30586);
var inst_30588 = cljs.core.async.close_BANG_(inst_30587);
var inst_30589 = (inst_30581 + (1));
var tmp30681 = inst_30580;
var tmp30682 = inst_30578;
var tmp30683 = inst_30579;
var inst_30578__$1 = tmp30682;
var inst_30579__$1 = tmp30683;
var inst_30580__$1 = tmp30681;
var inst_30581__$1 = inst_30589;
var state_30646__$1 = (function (){var statearr_30687 = state_30646;
(statearr_30687[(12)] = inst_30580__$1);

(statearr_30687[(17)] = inst_30588);

(statearr_30687[(14)] = inst_30578__$1);

(statearr_30687[(15)] = inst_30579__$1);

(statearr_30687[(16)] = inst_30581__$1);

return statearr_30687;
})();
var statearr_30688_32307 = state_30646__$1;
(statearr_30688_32307[(2)] = null);

(statearr_30688_32307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (18))){
var inst_30611 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30689_32308 = state_30646__$1;
(statearr_30689_32308[(2)] = inst_30611);

(statearr_30689_32308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (8))){
var inst_30580 = (state_30646[(12)]);
var inst_30581 = (state_30646[(16)]);
var inst_30583 = (inst_30581 < inst_30580);
var inst_30584 = inst_30583;
var state_30646__$1 = state_30646;
if(cljs.core.truth_(inst_30584)){
var statearr_30690_32309 = state_30646__$1;
(statearr_30690_32309[(1)] = (10));

} else {
var statearr_30691_32310 = state_30646__$1;
(statearr_30691_32310[(1)] = (11));

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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30692[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_30646){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_30646);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e30697){var ex__28975__auto__ = e30697;
var statearr_30698_32312 = state_30646;
(statearr_30698_32312[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_30646[(4)]))){
var statearr_30699_32313 = state_30646;
(statearr_30699_32313[(1)] = cljs.core.first((state_30646[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32314 = state_30646;
state_30646 = G__32314;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_30646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_30646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_30701 = f__29042__auto__();
(statearr_30701[(6)] = c__29041__auto___32277);

return statearr_30701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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
var G__30706 = arguments.length;
switch (G__30706) {
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
var G__30708 = arguments.length;
switch (G__30708) {
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
var G__30715 = arguments.length;
switch (G__30715) {
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
var c__29041__auto___32320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_30769){
var state_val_30770 = (state_30769[(1)]);
if((state_val_30770 === (7))){
var state_30769__$1 = state_30769;
var statearr_30790_32321 = state_30769__$1;
(statearr_30790_32321[(2)] = null);

(statearr_30790_32321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (1))){
var state_30769__$1 = state_30769;
var statearr_30791_32323 = state_30769__$1;
(statearr_30791_32323[(2)] = null);

(statearr_30791_32323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (4))){
var inst_30726 = (state_30769[(7)]);
var inst_30727 = (state_30769[(8)]);
var inst_30732 = (inst_30727 < inst_30726);
var state_30769__$1 = state_30769;
if(cljs.core.truth_(inst_30732)){
var statearr_30792_32325 = state_30769__$1;
(statearr_30792_32325[(1)] = (6));

} else {
var statearr_30793_32326 = state_30769__$1;
(statearr_30793_32326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (15))){
var inst_30755 = (state_30769[(9)]);
var inst_30760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30755);
var state_30769__$1 = state_30769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30769__$1,(17),out,inst_30760);
} else {
if((state_val_30770 === (13))){
var inst_30755 = (state_30769[(9)]);
var inst_30755__$1 = (state_30769[(2)]);
var inst_30756 = cljs.core.some(cljs.core.nil_QMARK_,inst_30755__$1);
var state_30769__$1 = (function (){var statearr_30794 = state_30769;
(statearr_30794[(9)] = inst_30755__$1);

return statearr_30794;
})();
if(cljs.core.truth_(inst_30756)){
var statearr_30795_32327 = state_30769__$1;
(statearr_30795_32327[(1)] = (14));

} else {
var statearr_30796_32328 = state_30769__$1;
(statearr_30796_32328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (6))){
var state_30769__$1 = state_30769;
var statearr_30797_32329 = state_30769__$1;
(statearr_30797_32329[(2)] = null);

(statearr_30797_32329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (17))){
var inst_30762 = (state_30769[(2)]);
var state_30769__$1 = (function (){var statearr_30800 = state_30769;
(statearr_30800[(10)] = inst_30762);

return statearr_30800;
})();
var statearr_30804_32330 = state_30769__$1;
(statearr_30804_32330[(2)] = null);

(statearr_30804_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (3))){
var inst_30767 = (state_30769[(2)]);
var state_30769__$1 = state_30769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30769__$1,inst_30767);
} else {
if((state_val_30770 === (12))){
var _ = (function (){var statearr_30805 = state_30769;
(statearr_30805[(4)] = cljs.core.rest((state_30769[(4)])));

return statearr_30805;
})();
var state_30769__$1 = state_30769;
var ex30799 = (state_30769__$1[(2)]);
var statearr_30806_32332 = state_30769__$1;
(statearr_30806_32332[(5)] = ex30799);


if((ex30799 instanceof Object)){
var statearr_30807_32333 = state_30769__$1;
(statearr_30807_32333[(1)] = (11));

(statearr_30807_32333[(5)] = null);

} else {
throw ex30799;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (2))){
var inst_30722 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30726 = cnt;
var inst_30727 = (0);
var state_30769__$1 = (function (){var statearr_30808 = state_30769;
(statearr_30808[(7)] = inst_30726);

(statearr_30808[(11)] = inst_30722);

(statearr_30808[(8)] = inst_30727);

return statearr_30808;
})();
var statearr_30809_32334 = state_30769__$1;
(statearr_30809_32334[(2)] = null);

(statearr_30809_32334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (11))){
var inst_30734 = (state_30769[(2)]);
var inst_30735 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30769__$1 = (function (){var statearr_30814 = state_30769;
(statearr_30814[(12)] = inst_30734);

return statearr_30814;
})();
var statearr_30815_32335 = state_30769__$1;
(statearr_30815_32335[(2)] = inst_30735);

(statearr_30815_32335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (9))){
var inst_30727 = (state_30769[(8)]);
var _ = (function (){var statearr_30822 = state_30769;
(statearr_30822[(4)] = cljs.core.cons((12),(state_30769[(4)])));

return statearr_30822;
})();
var inst_30741 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30727) : chs__$1.call(null,inst_30727));
var inst_30742 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30727) : done.call(null,inst_30727));
var inst_30743 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30741,inst_30742);
var ___$1 = (function (){var statearr_30823 = state_30769;
(statearr_30823[(4)] = cljs.core.rest((state_30769[(4)])));

return statearr_30823;
})();
var state_30769__$1 = state_30769;
var statearr_30824_32336 = state_30769__$1;
(statearr_30824_32336[(2)] = inst_30743);

(statearr_30824_32336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (5))){
var inst_30753 = (state_30769[(2)]);
var state_30769__$1 = (function (){var statearr_30825 = state_30769;
(statearr_30825[(13)] = inst_30753);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30769__$1,(13),dchan);
} else {
if((state_val_30770 === (14))){
var inst_30758 = cljs.core.async.close_BANG_(out);
var state_30769__$1 = state_30769;
var statearr_30826_32337 = state_30769__$1;
(statearr_30826_32337[(2)] = inst_30758);

(statearr_30826_32337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (16))){
var inst_30765 = (state_30769[(2)]);
var state_30769__$1 = state_30769;
var statearr_30829_32338 = state_30769__$1;
(statearr_30829_32338[(2)] = inst_30765);

(statearr_30829_32338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (10))){
var inst_30727 = (state_30769[(8)]);
var inst_30746 = (state_30769[(2)]);
var inst_30747 = (inst_30727 + (1));
var inst_30727__$1 = inst_30747;
var state_30769__$1 = (function (){var statearr_30830 = state_30769;
(statearr_30830[(14)] = inst_30746);

(statearr_30830[(8)] = inst_30727__$1);

return statearr_30830;
})();
var statearr_30831_32339 = state_30769__$1;
(statearr_30831_32339[(2)] = null);

(statearr_30831_32339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (8))){
var inst_30751 = (state_30769[(2)]);
var state_30769__$1 = state_30769;
var statearr_30832_32340 = state_30769__$1;
(statearr_30832_32340[(2)] = inst_30751);

(statearr_30832_32340[(1)] = (5));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_30769){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_30769);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e30838){var ex__28975__auto__ = e30838;
var statearr_30839_32341 = state_30769;
(statearr_30839_32341[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_30769[(4)]))){
var statearr_30840_32342 = state_30769;
(statearr_30840_32342[(1)] = cljs.core.first((state_30769[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32343 = state_30769;
state_30769 = G__32343;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_30769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_30769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_30841 = f__29042__auto__();
(statearr_30841[(6)] = c__29041__auto___32320);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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
var G__30844 = arguments.length;
switch (G__30844) {
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
var c__29041__auto___32351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_30879){
var state_val_30880 = (state_30879[(1)]);
if((state_val_30880 === (7))){
var inst_30858 = (state_30879[(7)]);
var inst_30859 = (state_30879[(8)]);
var inst_30858__$1 = (state_30879[(2)]);
var inst_30859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30858__$1,(0),null);
var inst_30860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30858__$1,(1),null);
var inst_30861 = (inst_30859__$1 == null);
var state_30879__$1 = (function (){var statearr_30883 = state_30879;
(statearr_30883[(7)] = inst_30858__$1);

(statearr_30883[(9)] = inst_30860);

(statearr_30883[(8)] = inst_30859__$1);

return statearr_30883;
})();
if(cljs.core.truth_(inst_30861)){
var statearr_30884_32352 = state_30879__$1;
(statearr_30884_32352[(1)] = (8));

} else {
var statearr_30891_32353 = state_30879__$1;
(statearr_30891_32353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (1))){
var inst_30847 = cljs.core.vec(chs);
var inst_30848 = inst_30847;
var state_30879__$1 = (function (){var statearr_30892 = state_30879;
(statearr_30892[(10)] = inst_30848);

return statearr_30892;
})();
var statearr_30893_32354 = state_30879__$1;
(statearr_30893_32354[(2)] = null);

(statearr_30893_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (4))){
var inst_30848 = (state_30879[(10)]);
var state_30879__$1 = state_30879;
return cljs.core.async.ioc_alts_BANG_(state_30879__$1,(7),inst_30848);
} else {
if((state_val_30880 === (6))){
var inst_30875 = (state_30879[(2)]);
var state_30879__$1 = state_30879;
var statearr_30894_32355 = state_30879__$1;
(statearr_30894_32355[(2)] = inst_30875);

(statearr_30894_32355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (3))){
var inst_30877 = (state_30879[(2)]);
var state_30879__$1 = state_30879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30879__$1,inst_30877);
} else {
if((state_val_30880 === (2))){
var inst_30848 = (state_30879[(10)]);
var inst_30851 = cljs.core.count(inst_30848);
var inst_30852 = (inst_30851 > (0));
var state_30879__$1 = state_30879;
if(cljs.core.truth_(inst_30852)){
var statearr_30896_32356 = state_30879__$1;
(statearr_30896_32356[(1)] = (4));

} else {
var statearr_30897_32357 = state_30879__$1;
(statearr_30897_32357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (11))){
var inst_30848 = (state_30879[(10)]);
var inst_30868 = (state_30879[(2)]);
var tmp30895 = inst_30848;
var inst_30848__$1 = tmp30895;
var state_30879__$1 = (function (){var statearr_30898 = state_30879;
(statearr_30898[(10)] = inst_30848__$1);

(statearr_30898[(11)] = inst_30868);

return statearr_30898;
})();
var statearr_30899_32358 = state_30879__$1;
(statearr_30899_32358[(2)] = null);

(statearr_30899_32358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (9))){
var inst_30859 = (state_30879[(8)]);
var state_30879__$1 = state_30879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30879__$1,(11),out,inst_30859);
} else {
if((state_val_30880 === (5))){
var inst_30873 = cljs.core.async.close_BANG_(out);
var state_30879__$1 = state_30879;
var statearr_30901_32359 = state_30879__$1;
(statearr_30901_32359[(2)] = inst_30873);

(statearr_30901_32359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (10))){
var inst_30871 = (state_30879[(2)]);
var state_30879__$1 = state_30879;
var statearr_30902_32360 = state_30879__$1;
(statearr_30902_32360[(2)] = inst_30871);

(statearr_30902_32360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (8))){
var inst_30848 = (state_30879[(10)]);
var inst_30858 = (state_30879[(7)]);
var inst_30860 = (state_30879[(9)]);
var inst_30859 = (state_30879[(8)]);
var inst_30863 = (function (){var cs = inst_30848;
var vec__30854 = inst_30858;
var v = inst_30859;
var c = inst_30860;
return (function (p1__30842_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30842_SHARP_);
});
})();
var inst_30864 = cljs.core.filterv(inst_30863,inst_30848);
var inst_30848__$1 = inst_30864;
var state_30879__$1 = (function (){var statearr_30907 = state_30879;
(statearr_30907[(10)] = inst_30848__$1);

return statearr_30907;
})();
var statearr_30908_32361 = state_30879__$1;
(statearr_30908_32361[(2)] = null);

(statearr_30908_32361[(1)] = (2));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_30910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30910[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_30910[(1)] = (1));

return statearr_30910;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_30879){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_30879);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e30911){var ex__28975__auto__ = e30911;
var statearr_30912_32366 = state_30879;
(statearr_30912_32366[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_30879[(4)]))){
var statearr_30913_32367 = state_30879;
(statearr_30913_32367[(1)] = cljs.core.first((state_30879[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32372 = state_30879;
state_30879 = G__32372;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_30879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_30879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_30914 = f__29042__auto__();
(statearr_30914[(6)] = c__29041__auto___32351);

return statearr_30914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
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
var G__30916 = arguments.length;
switch (G__30916) {
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
var c__29041__auto___32374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_30959){
var state_val_30960 = (state_30959[(1)]);
if((state_val_30960 === (7))){
var inst_30934 = (state_30959[(7)]);
var inst_30934__$1 = (state_30959[(2)]);
var inst_30935 = (inst_30934__$1 == null);
var inst_30936 = cljs.core.not(inst_30935);
var state_30959__$1 = (function (){var statearr_30965 = state_30959;
(statearr_30965[(7)] = inst_30934__$1);

return statearr_30965;
})();
if(inst_30936){
var statearr_30966_32375 = state_30959__$1;
(statearr_30966_32375[(1)] = (8));

} else {
var statearr_30967_32376 = state_30959__$1;
(statearr_30967_32376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (1))){
var inst_30929 = (0);
var state_30959__$1 = (function (){var statearr_30968 = state_30959;
(statearr_30968[(8)] = inst_30929);

return statearr_30968;
})();
var statearr_30969_32377 = state_30959__$1;
(statearr_30969_32377[(2)] = null);

(statearr_30969_32377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (4))){
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30959__$1,(7),ch);
} else {
if((state_val_30960 === (6))){
var inst_30950 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30970_32378 = state_30959__$1;
(statearr_30970_32378[(2)] = inst_30950);

(statearr_30970_32378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (3))){
var inst_30952 = (state_30959[(2)]);
var inst_30953 = cljs.core.async.close_BANG_(out);
var state_30959__$1 = (function (){var statearr_30971 = state_30959;
(statearr_30971[(9)] = inst_30952);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30959__$1,inst_30953);
} else {
if((state_val_30960 === (2))){
var inst_30929 = (state_30959[(8)]);
var inst_30931 = (inst_30929 < n);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30931)){
var statearr_30973_32379 = state_30959__$1;
(statearr_30973_32379[(1)] = (4));

} else {
var statearr_30974_32380 = state_30959__$1;
(statearr_30974_32380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (11))){
var inst_30929 = (state_30959[(8)]);
var inst_30942 = (state_30959[(2)]);
var inst_30943 = (inst_30929 + (1));
var inst_30929__$1 = inst_30943;
var state_30959__$1 = (function (){var statearr_30975 = state_30959;
(statearr_30975[(8)] = inst_30929__$1);

(statearr_30975[(10)] = inst_30942);

return statearr_30975;
})();
var statearr_30976_32383 = state_30959__$1;
(statearr_30976_32383[(2)] = null);

(statearr_30976_32383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (9))){
var state_30959__$1 = state_30959;
var statearr_30977_32384 = state_30959__$1;
(statearr_30977_32384[(2)] = null);

(statearr_30977_32384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (5))){
var state_30959__$1 = state_30959;
var statearr_30978_32388 = state_30959__$1;
(statearr_30978_32388[(2)] = null);

(statearr_30978_32388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (10))){
var inst_30947 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30979_32389 = state_30959__$1;
(statearr_30979_32389[(2)] = inst_30947);

(statearr_30979_32389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (8))){
var inst_30934 = (state_30959[(7)]);
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30959__$1,(11),out,inst_30934);
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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_30980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30980[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_30980[(1)] = (1));

return statearr_30980;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_30959){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_30959);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e30985){var ex__28975__auto__ = e30985;
var statearr_30986_32393 = state_30959;
(statearr_30986_32393[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_30959[(4)]))){
var statearr_30988_32394 = state_30959;
(statearr_30988_32394[(1)] = cljs.core.first((state_30959[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32395 = state_30959;
state_30959 = G__32395;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_30959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_30959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_30989 = f__29042__auto__();
(statearr_30989[(6)] = c__29041__auto___32374);

return statearr_30989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30991 = (function (f,ch,meta30992){
this.f = f;
this.ch = ch;
this.meta30992 = meta30992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30993,meta30992__$1){
var self__ = this;
var _30993__$1 = this;
return (new cljs.core.async.t_cljs$core$async30991(self__.f,self__.ch,meta30992__$1));
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30993){
var self__ = this;
var _30993__$1 = this;
return self__.meta30992;
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30998 = (function (f,ch,meta30992,_,fn1,meta30999){
this.f = f;
this.ch = ch;
this.meta30992 = meta30992;
this._ = _;
this.fn1 = fn1;
this.meta30999 = meta30999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31000,meta30999__$1){
var self__ = this;
var _31000__$1 = this;
return (new cljs.core.async.t_cljs$core$async30998(self__.f,self__.ch,self__.meta30992,self__._,self__.fn1,meta30999__$1));
}));

(cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31000){
var self__ = this;
var _31000__$1 = this;
return self__.meta30999;
}));

(cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30990_SHARP_){
var G__31001 = (((p1__30990_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30990_SHARP_) : self__.f.call(null,p1__30990_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31001) : f1.call(null,G__31001));
});
}));

(cljs.core.async.t_cljs$core$async30998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30992","meta30992",-142435253,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30991","cljs.core.async/t_cljs$core$async30991",201207727,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30999","meta30999",242880733,null)], null);
}));

(cljs.core.async.t_cljs$core$async30998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30998");

(cljs.core.async.t_cljs$core$async30998.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30998.
 */
cljs.core.async.__GT_t_cljs$core$async30998 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30998(f__$1,ch__$1,meta30992__$1,___$2,fn1__$1,meta30999){
return (new cljs.core.async.t_cljs$core$async30998(f__$1,ch__$1,meta30992__$1,___$2,fn1__$1,meta30999));
});

}

return (new cljs.core.async.t_cljs$core$async30998(self__.f,self__.ch,self__.meta30992,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31006 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31006) : self__.f.call(null,G__31006));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30992","meta30992",-142435253,null)], null);
}));

(cljs.core.async.t_cljs$core$async30991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30991");

(cljs.core.async.t_cljs$core$async30991.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30991.
 */
cljs.core.async.__GT_t_cljs$core$async30991 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30991(f__$1,ch__$1,meta30992){
return (new cljs.core.async.t_cljs$core$async30991(f__$1,ch__$1,meta30992));
});

}

return (new cljs.core.async.t_cljs$core$async30991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31010 = (function (f,ch,meta31011){
this.f = f;
this.ch = ch;
this.meta31011 = meta31011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31012,meta31011__$1){
var self__ = this;
var _31012__$1 = this;
return (new cljs.core.async.t_cljs$core$async31010(self__.f,self__.ch,meta31011__$1));
}));

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31012){
var self__ = this;
var _31012__$1 = this;
return self__.meta31011;
}));

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31011","meta31011",2132920617,null)], null);
}));

(cljs.core.async.t_cljs$core$async31010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31010");

(cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31010.
 */
cljs.core.async.__GT_t_cljs$core$async31010 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31010(f__$1,ch__$1,meta31011){
return (new cljs.core.async.t_cljs$core$async31010(f__$1,ch__$1,meta31011));
});

}

return (new cljs.core.async.t_cljs$core$async31010(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31014 = (function (p,ch,meta31015){
this.p = p;
this.ch = ch;
this.meta31015 = meta31015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31016,meta31015__$1){
var self__ = this;
var _31016__$1 = this;
return (new cljs.core.async.t_cljs$core$async31014(self__.p,self__.ch,meta31015__$1));
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31016){
var self__ = this;
var _31016__$1 = this;
return self__.meta31015;
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31015","meta31015",-1670462585,null)], null);
}));

(cljs.core.async.t_cljs$core$async31014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31014");

(cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31014.
 */
cljs.core.async.__GT_t_cljs$core$async31014 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31014(p__$1,ch__$1,meta31015){
return (new cljs.core.async.t_cljs$core$async31014(p__$1,ch__$1,meta31015));
});

}

return (new cljs.core.async.t_cljs$core$async31014(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31020 = arguments.length;
switch (G__31020) {
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
var c__29041__auto___32411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (7))){
var inst_31058 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31064_32412 = state_31062__$1;
(statearr_31064_32412[(2)] = inst_31058);

(statearr_31064_32412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var state_31062__$1 = state_31062;
var statearr_31065_32413 = state_31062__$1;
(statearr_31065_32413[(2)] = null);

(statearr_31065_32413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var inst_31044 = (state_31062[(7)]);
var inst_31044__$1 = (state_31062[(2)]);
var inst_31045 = (inst_31044__$1 == null);
var state_31062__$1 = (function (){var statearr_31067 = state_31062;
(statearr_31067[(7)] = inst_31044__$1);

return statearr_31067;
})();
if(cljs.core.truth_(inst_31045)){
var statearr_31068_32414 = state_31062__$1;
(statearr_31068_32414[(1)] = (5));

} else {
var statearr_31069_32415 = state_31062__$1;
(statearr_31069_32415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var inst_31044 = (state_31062[(7)]);
var inst_31049 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31044) : p.call(null,inst_31044));
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31049)){
var statearr_31071_32416 = state_31062__$1;
(statearr_31071_32416[(1)] = (8));

} else {
var statearr_31073_32417 = state_31062__$1;
(statearr_31073_32417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (3))){
var inst_31060 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31062__$1,inst_31060);
} else {
if((state_val_31063 === (2))){
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31062__$1,(4),ch);
} else {
if((state_val_31063 === (11))){
var inst_31052 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31074_32418 = state_31062__$1;
(statearr_31074_32418[(2)] = inst_31052);

(statearr_31074_32418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (9))){
var state_31062__$1 = state_31062;
var statearr_31076_32419 = state_31062__$1;
(statearr_31076_32419[(2)] = null);

(statearr_31076_32419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var inst_31047 = cljs.core.async.close_BANG_(out);
var state_31062__$1 = state_31062;
var statearr_31077_32420 = state_31062__$1;
(statearr_31077_32420[(2)] = inst_31047);

(statearr_31077_32420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (10))){
var inst_31055 = (state_31062[(2)]);
var state_31062__$1 = (function (){var statearr_31078 = state_31062;
(statearr_31078[(8)] = inst_31055);

return statearr_31078;
})();
var statearr_31079_32421 = state_31062__$1;
(statearr_31079_32421[(2)] = null);

(statearr_31079_32421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_31044 = (state_31062[(7)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31062__$1,(11),out,inst_31044);
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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_31080 = [null,null,null,null,null,null,null,null,null];
(statearr_31080[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_31080[(1)] = (1));

return statearr_31080;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_31062){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_31062);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e31081){var ex__28975__auto__ = e31081;
var statearr_31082_32432 = state_31062;
(statearr_31082_32432[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_31062[(4)]))){
var statearr_31084_32436 = state_31062;
(statearr_31084_32436[(1)] = cljs.core.first((state_31062[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32457 = state_31062;
state_31062 = G__32457;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_31085 = f__29042__auto__();
(statearr_31085[(6)] = c__29041__auto___32411);

return statearr_31085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31090 = arguments.length;
switch (G__31090) {
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
var c__29041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_31166){
var state_val_31167 = (state_31166[(1)]);
if((state_val_31167 === (7))){
var inst_31161 = (state_31166[(2)]);
var state_31166__$1 = state_31166;
var statearr_31168_32459 = state_31166__$1;
(statearr_31168_32459[(2)] = inst_31161);

(statearr_31168_32459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (20))){
var inst_31119 = (state_31166[(7)]);
var inst_31142 = (state_31166[(2)]);
var inst_31143 = cljs.core.next(inst_31119);
var inst_31105 = inst_31143;
var inst_31106 = null;
var inst_31107 = (0);
var inst_31108 = (0);
var state_31166__$1 = (function (){var statearr_31169 = state_31166;
(statearr_31169[(8)] = inst_31107);

(statearr_31169[(9)] = inst_31105);

(statearr_31169[(10)] = inst_31106);

(statearr_31169[(11)] = inst_31108);

(statearr_31169[(12)] = inst_31142);

return statearr_31169;
})();
var statearr_31170_32460 = state_31166__$1;
(statearr_31170_32460[(2)] = null);

(statearr_31170_32460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (1))){
var state_31166__$1 = state_31166;
var statearr_31171_32466 = state_31166__$1;
(statearr_31171_32466[(2)] = null);

(statearr_31171_32466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (4))){
var inst_31094 = (state_31166[(13)]);
var inst_31094__$1 = (state_31166[(2)]);
var inst_31095 = (inst_31094__$1 == null);
var state_31166__$1 = (function (){var statearr_31173 = state_31166;
(statearr_31173[(13)] = inst_31094__$1);

return statearr_31173;
})();
if(cljs.core.truth_(inst_31095)){
var statearr_31174_32468 = state_31166__$1;
(statearr_31174_32468[(1)] = (5));

} else {
var statearr_31175_32469 = state_31166__$1;
(statearr_31175_32469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (15))){
var state_31166__$1 = state_31166;
var statearr_31179_32472 = state_31166__$1;
(statearr_31179_32472[(2)] = null);

(statearr_31179_32472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (21))){
var state_31166__$1 = state_31166;
var statearr_31180_32473 = state_31166__$1;
(statearr_31180_32473[(2)] = null);

(statearr_31180_32473[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (13))){
var inst_31107 = (state_31166[(8)]);
var inst_31105 = (state_31166[(9)]);
var inst_31106 = (state_31166[(10)]);
var inst_31108 = (state_31166[(11)]);
var inst_31115 = (state_31166[(2)]);
var inst_31116 = (inst_31108 + (1));
var tmp31176 = inst_31107;
var tmp31177 = inst_31105;
var tmp31178 = inst_31106;
var inst_31105__$1 = tmp31177;
var inst_31106__$1 = tmp31178;
var inst_31107__$1 = tmp31176;
var inst_31108__$1 = inst_31116;
var state_31166__$1 = (function (){var statearr_31181 = state_31166;
(statearr_31181[(14)] = inst_31115);

(statearr_31181[(8)] = inst_31107__$1);

(statearr_31181[(9)] = inst_31105__$1);

(statearr_31181[(10)] = inst_31106__$1);

(statearr_31181[(11)] = inst_31108__$1);

return statearr_31181;
})();
var statearr_31182_32474 = state_31166__$1;
(statearr_31182_32474[(2)] = null);

(statearr_31182_32474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (22))){
var state_31166__$1 = state_31166;
var statearr_31183_32476 = state_31166__$1;
(statearr_31183_32476[(2)] = null);

(statearr_31183_32476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (6))){
var inst_31094 = (state_31166[(13)]);
var inst_31103 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31094) : f.call(null,inst_31094));
var inst_31104 = cljs.core.seq(inst_31103);
var inst_31105 = inst_31104;
var inst_31106 = null;
var inst_31107 = (0);
var inst_31108 = (0);
var state_31166__$1 = (function (){var statearr_31184 = state_31166;
(statearr_31184[(8)] = inst_31107);

(statearr_31184[(9)] = inst_31105);

(statearr_31184[(10)] = inst_31106);

(statearr_31184[(11)] = inst_31108);

return statearr_31184;
})();
var statearr_31186_32477 = state_31166__$1;
(statearr_31186_32477[(2)] = null);

(statearr_31186_32477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (17))){
var inst_31119 = (state_31166[(7)]);
var inst_31135 = cljs.core.chunk_first(inst_31119);
var inst_31136 = cljs.core.chunk_rest(inst_31119);
var inst_31137 = cljs.core.count(inst_31135);
var inst_31105 = inst_31136;
var inst_31106 = inst_31135;
var inst_31107 = inst_31137;
var inst_31108 = (0);
var state_31166__$1 = (function (){var statearr_31187 = state_31166;
(statearr_31187[(8)] = inst_31107);

(statearr_31187[(9)] = inst_31105);

(statearr_31187[(10)] = inst_31106);

(statearr_31187[(11)] = inst_31108);

return statearr_31187;
})();
var statearr_31188_32478 = state_31166__$1;
(statearr_31188_32478[(2)] = null);

(statearr_31188_32478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (3))){
var inst_31163 = (state_31166[(2)]);
var state_31166__$1 = state_31166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31166__$1,inst_31163);
} else {
if((state_val_31167 === (12))){
var inst_31151 = (state_31166[(2)]);
var state_31166__$1 = state_31166;
var statearr_31189_32479 = state_31166__$1;
(statearr_31189_32479[(2)] = inst_31151);

(statearr_31189_32479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (2))){
var state_31166__$1 = state_31166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31166__$1,(4),in$);
} else {
if((state_val_31167 === (23))){
var inst_31159 = (state_31166[(2)]);
var state_31166__$1 = state_31166;
var statearr_31190_32480 = state_31166__$1;
(statearr_31190_32480[(2)] = inst_31159);

(statearr_31190_32480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (19))){
var inst_31146 = (state_31166[(2)]);
var state_31166__$1 = state_31166;
var statearr_31191_32481 = state_31166__$1;
(statearr_31191_32481[(2)] = inst_31146);

(statearr_31191_32481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (11))){
var inst_31119 = (state_31166[(7)]);
var inst_31105 = (state_31166[(9)]);
var inst_31119__$1 = cljs.core.seq(inst_31105);
var state_31166__$1 = (function (){var statearr_31196 = state_31166;
(statearr_31196[(7)] = inst_31119__$1);

return statearr_31196;
})();
if(inst_31119__$1){
var statearr_31197_32482 = state_31166__$1;
(statearr_31197_32482[(1)] = (14));

} else {
var statearr_31198_32483 = state_31166__$1;
(statearr_31198_32483[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (9))){
var inst_31153 = (state_31166[(2)]);
var inst_31154 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31166__$1 = (function (){var statearr_31205 = state_31166;
(statearr_31205[(15)] = inst_31153);

return statearr_31205;
})();
if(cljs.core.truth_(inst_31154)){
var statearr_31206_32484 = state_31166__$1;
(statearr_31206_32484[(1)] = (21));

} else {
var statearr_31207_32485 = state_31166__$1;
(statearr_31207_32485[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (5))){
var inst_31097 = cljs.core.async.close_BANG_(out);
var state_31166__$1 = state_31166;
var statearr_31208_32489 = state_31166__$1;
(statearr_31208_32489[(2)] = inst_31097);

(statearr_31208_32489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (14))){
var inst_31119 = (state_31166[(7)]);
var inst_31121 = cljs.core.chunked_seq_QMARK_(inst_31119);
var state_31166__$1 = state_31166;
if(inst_31121){
var statearr_31213_32490 = state_31166__$1;
(statearr_31213_32490[(1)] = (17));

} else {
var statearr_31214_32491 = state_31166__$1;
(statearr_31214_32491[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (16))){
var inst_31149 = (state_31166[(2)]);
var state_31166__$1 = state_31166;
var statearr_31215_32492 = state_31166__$1;
(statearr_31215_32492[(2)] = inst_31149);

(statearr_31215_32492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31167 === (10))){
var inst_31106 = (state_31166[(10)]);
var inst_31108 = (state_31166[(11)]);
var inst_31113 = cljs.core._nth(inst_31106,inst_31108);
var state_31166__$1 = state_31166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31166__$1,(13),out,inst_31113);
} else {
if((state_val_31167 === (18))){
var inst_31119 = (state_31166[(7)]);
var inst_31140 = cljs.core.first(inst_31119);
var state_31166__$1 = state_31166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31166__$1,(20),out,inst_31140);
} else {
if((state_val_31167 === (8))){
var inst_31107 = (state_31166[(8)]);
var inst_31108 = (state_31166[(11)]);
var inst_31110 = (inst_31108 < inst_31107);
var inst_31111 = inst_31110;
var state_31166__$1 = state_31166;
if(cljs.core.truth_(inst_31111)){
var statearr_31216_32493 = state_31166__$1;
(statearr_31216_32493[(1)] = (10));

} else {
var statearr_31217_32494 = state_31166__$1;
(statearr_31217_32494[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28972__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28972__auto____0 = (function (){
var statearr_31219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31219[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28972__auto__);

(statearr_31219[(1)] = (1));

return statearr_31219;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28972__auto____1 = (function (state_31166){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_31166);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e31220){var ex__28975__auto__ = e31220;
var statearr_31221_32495 = state_31166;
(statearr_31221_32495[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_31166[(4)]))){
var statearr_31222_32496 = state_31166;
(statearr_31222_32496[(1)] = cljs.core.first((state_31166[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32497 = state_31166;
state_31166 = G__32497;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28972__auto__ = function(state_31166){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28972__auto____1.call(this,state_31166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28972__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28972__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_31223 = f__29042__auto__();
(statearr_31223[(6)] = c__29041__auto__);

return statearr_31223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

return c__29041__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31231 = arguments.length;
switch (G__31231) {
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
var G__31238 = arguments.length;
switch (G__31238) {
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
var G__31246 = arguments.length;
switch (G__31246) {
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
var c__29041__auto___32502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_31281){
var state_val_31282 = (state_31281[(1)]);
if((state_val_31282 === (7))){
var inst_31276 = (state_31281[(2)]);
var state_31281__$1 = state_31281;
var statearr_31294_32503 = state_31281__$1;
(statearr_31294_32503[(2)] = inst_31276);

(statearr_31294_32503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (1))){
var inst_31258 = null;
var state_31281__$1 = (function (){var statearr_31296 = state_31281;
(statearr_31296[(7)] = inst_31258);

return statearr_31296;
})();
var statearr_31297_32508 = state_31281__$1;
(statearr_31297_32508[(2)] = null);

(statearr_31297_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (4))){
var inst_31261 = (state_31281[(8)]);
var inst_31261__$1 = (state_31281[(2)]);
var inst_31262 = (inst_31261__$1 == null);
var inst_31263 = cljs.core.not(inst_31262);
var state_31281__$1 = (function (){var statearr_31298 = state_31281;
(statearr_31298[(8)] = inst_31261__$1);

return statearr_31298;
})();
if(inst_31263){
var statearr_31299_32509 = state_31281__$1;
(statearr_31299_32509[(1)] = (5));

} else {
var statearr_31300_32510 = state_31281__$1;
(statearr_31300_32510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (6))){
var state_31281__$1 = state_31281;
var statearr_31301_32512 = state_31281__$1;
(statearr_31301_32512[(2)] = null);

(statearr_31301_32512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (3))){
var inst_31278 = (state_31281[(2)]);
var inst_31279 = cljs.core.async.close_BANG_(out);
var state_31281__$1 = (function (){var statearr_31302 = state_31281;
(statearr_31302[(9)] = inst_31278);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31281__$1,inst_31279);
} else {
if((state_val_31282 === (2))){
var state_31281__$1 = state_31281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31281__$1,(4),ch);
} else {
if((state_val_31282 === (11))){
var inst_31261 = (state_31281[(8)]);
var inst_31270 = (state_31281[(2)]);
var inst_31258 = inst_31261;
var state_31281__$1 = (function (){var statearr_31303 = state_31281;
(statearr_31303[(7)] = inst_31258);

(statearr_31303[(10)] = inst_31270);

return statearr_31303;
})();
var statearr_31304_32514 = state_31281__$1;
(statearr_31304_32514[(2)] = null);

(statearr_31304_32514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (9))){
var inst_31261 = (state_31281[(8)]);
var state_31281__$1 = state_31281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31281__$1,(11),out,inst_31261);
} else {
if((state_val_31282 === (5))){
var inst_31258 = (state_31281[(7)]);
var inst_31261 = (state_31281[(8)]);
var inst_31265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31261,inst_31258);
var state_31281__$1 = state_31281;
if(inst_31265){
var statearr_31307_32515 = state_31281__$1;
(statearr_31307_32515[(1)] = (8));

} else {
var statearr_31308_32516 = state_31281__$1;
(statearr_31308_32516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (10))){
var inst_31273 = (state_31281[(2)]);
var state_31281__$1 = state_31281;
var statearr_31309_32517 = state_31281__$1;
(statearr_31309_32517[(2)] = inst_31273);

(statearr_31309_32517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31282 === (8))){
var inst_31258 = (state_31281[(7)]);
var tmp31306 = inst_31258;
var inst_31258__$1 = tmp31306;
var state_31281__$1 = (function (){var statearr_31311 = state_31281;
(statearr_31311[(7)] = inst_31258__$1);

return statearr_31311;
})();
var statearr_31313_32518 = state_31281__$1;
(statearr_31313_32518[(2)] = null);

(statearr_31313_32518[(1)] = (2));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_31323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31323[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_31323[(1)] = (1));

return statearr_31323;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_31281){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_31281);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e31324){var ex__28975__auto__ = e31324;
var statearr_31325_32519 = state_31281;
(statearr_31325_32519[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_31281[(4)]))){
var statearr_31326_32520 = state_31281;
(statearr_31326_32520[(1)] = cljs.core.first((state_31281[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32521 = state_31281;
state_31281 = G__32521;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_31281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_31281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_31331 = f__29042__auto__();
(statearr_31331[(6)] = c__29041__auto___32502);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31334 = arguments.length;
switch (G__31334) {
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
var c__29041__auto___32526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_31378){
var state_val_31379 = (state_31378[(1)]);
if((state_val_31379 === (7))){
var inst_31374 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31380_32528 = state_31378__$1;
(statearr_31380_32528[(2)] = inst_31374);

(statearr_31380_32528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (1))){
var inst_31340 = (new Array(n));
var inst_31341 = inst_31340;
var inst_31342 = (0);
var state_31378__$1 = (function (){var statearr_31382 = state_31378;
(statearr_31382[(7)] = inst_31341);

(statearr_31382[(8)] = inst_31342);

return statearr_31382;
})();
var statearr_31383_32532 = state_31378__$1;
(statearr_31383_32532[(2)] = null);

(statearr_31383_32532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (4))){
var inst_31346 = (state_31378[(9)]);
var inst_31346__$1 = (state_31378[(2)]);
var inst_31347 = (inst_31346__$1 == null);
var inst_31348 = cljs.core.not(inst_31347);
var state_31378__$1 = (function (){var statearr_31384 = state_31378;
(statearr_31384[(9)] = inst_31346__$1);

return statearr_31384;
})();
if(inst_31348){
var statearr_31385_32533 = state_31378__$1;
(statearr_31385_32533[(1)] = (5));

} else {
var statearr_31386_32534 = state_31378__$1;
(statearr_31386_32534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (15))){
var inst_31368 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31387_32535 = state_31378__$1;
(statearr_31387_32535[(2)] = inst_31368);

(statearr_31387_32535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (13))){
var state_31378__$1 = state_31378;
var statearr_31388_32536 = state_31378__$1;
(statearr_31388_32536[(2)] = null);

(statearr_31388_32536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (6))){
var inst_31342 = (state_31378[(8)]);
var inst_31364 = (inst_31342 > (0));
var state_31378__$1 = state_31378;
if(cljs.core.truth_(inst_31364)){
var statearr_31389_32537 = state_31378__$1;
(statearr_31389_32537[(1)] = (12));

} else {
var statearr_31390_32538 = state_31378__$1;
(statearr_31390_32538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (3))){
var inst_31376 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31378__$1,inst_31376);
} else {
if((state_val_31379 === (12))){
var inst_31341 = (state_31378[(7)]);
var inst_31366 = cljs.core.vec(inst_31341);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31378__$1,(15),out,inst_31366);
} else {
if((state_val_31379 === (2))){
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31378__$1,(4),ch);
} else {
if((state_val_31379 === (11))){
var inst_31358 = (state_31378[(2)]);
var inst_31359 = (new Array(n));
var inst_31341 = inst_31359;
var inst_31342 = (0);
var state_31378__$1 = (function (){var statearr_31393 = state_31378;
(statearr_31393[(7)] = inst_31341);

(statearr_31393[(8)] = inst_31342);

(statearr_31393[(10)] = inst_31358);

return statearr_31393;
})();
var statearr_31394_32546 = state_31378__$1;
(statearr_31394_32546[(2)] = null);

(statearr_31394_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (9))){
var inst_31341 = (state_31378[(7)]);
var inst_31356 = cljs.core.vec(inst_31341);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31378__$1,(11),out,inst_31356);
} else {
if((state_val_31379 === (5))){
var inst_31341 = (state_31378[(7)]);
var inst_31342 = (state_31378[(8)]);
var inst_31351 = (state_31378[(11)]);
var inst_31346 = (state_31378[(9)]);
var inst_31350 = (inst_31341[inst_31342] = inst_31346);
var inst_31351__$1 = (inst_31342 + (1));
var inst_31352 = (inst_31351__$1 < n);
var state_31378__$1 = (function (){var statearr_31395 = state_31378;
(statearr_31395[(12)] = inst_31350);

(statearr_31395[(11)] = inst_31351__$1);

return statearr_31395;
})();
if(cljs.core.truth_(inst_31352)){
var statearr_31396_32552 = state_31378__$1;
(statearr_31396_32552[(1)] = (8));

} else {
var statearr_31397_32553 = state_31378__$1;
(statearr_31397_32553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (14))){
var inst_31371 = (state_31378[(2)]);
var inst_31372 = cljs.core.async.close_BANG_(out);
var state_31378__$1 = (function (){var statearr_31399 = state_31378;
(statearr_31399[(13)] = inst_31371);

return statearr_31399;
})();
var statearr_31400_32557 = state_31378__$1;
(statearr_31400_32557[(2)] = inst_31372);

(statearr_31400_32557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (10))){
var inst_31362 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31402_32561 = state_31378__$1;
(statearr_31402_32561[(2)] = inst_31362);

(statearr_31402_32561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (8))){
var inst_31341 = (state_31378[(7)]);
var inst_31351 = (state_31378[(11)]);
var tmp31398 = inst_31341;
var inst_31341__$1 = tmp31398;
var inst_31342 = inst_31351;
var state_31378__$1 = (function (){var statearr_31403 = state_31378;
(statearr_31403[(7)] = inst_31341__$1);

(statearr_31403[(8)] = inst_31342);

return statearr_31403;
})();
var statearr_31404_32562 = state_31378__$1;
(statearr_31404_32562[(2)] = null);

(statearr_31404_32562[(1)] = (2));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_31405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31405[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_31405[(1)] = (1));

return statearr_31405;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_31378){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_31378);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e31408){var ex__28975__auto__ = e31408;
var statearr_31410_32569 = state_31378;
(statearr_31410_32569[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_31378[(4)]))){
var statearr_31411_32570 = state_31378;
(statearr_31411_32570[(1)] = cljs.core.first((state_31378[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_31378;
state_31378 = G__32571;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_31378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_31378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_31415 = f__29042__auto__();
(statearr_31415[(6)] = c__29041__auto___32526);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31417 = arguments.length;
switch (G__31417) {
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
var c__29041__auto___32573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_31486){
var state_val_31487 = (state_31486[(1)]);
if((state_val_31487 === (7))){
var inst_31473 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
var statearr_31488_32578 = state_31486__$1;
(statearr_31488_32578[(2)] = inst_31473);

(statearr_31488_32578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (1))){
var inst_31428 = [];
var inst_31429 = inst_31428;
var inst_31430 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31486__$1 = (function (){var statearr_31489 = state_31486;
(statearr_31489[(7)] = inst_31429);

(statearr_31489[(8)] = inst_31430);

return statearr_31489;
})();
var statearr_31490_32582 = state_31486__$1;
(statearr_31490_32582[(2)] = null);

(statearr_31490_32582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (4))){
var inst_31438 = (state_31486[(9)]);
var inst_31438__$1 = (state_31486[(2)]);
var inst_31439 = (inst_31438__$1 == null);
var inst_31440 = cljs.core.not(inst_31439);
var state_31486__$1 = (function (){var statearr_31491 = state_31486;
(statearr_31491[(9)] = inst_31438__$1);

return statearr_31491;
})();
if(inst_31440){
var statearr_31492_32583 = state_31486__$1;
(statearr_31492_32583[(1)] = (5));

} else {
var statearr_31493_32587 = state_31486__$1;
(statearr_31493_32587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (15))){
var inst_31467 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
var statearr_31495_32592 = state_31486__$1;
(statearr_31495_32592[(2)] = inst_31467);

(statearr_31495_32592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (13))){
var state_31486__$1 = state_31486;
var statearr_31496_32593 = state_31486__$1;
(statearr_31496_32593[(2)] = null);

(statearr_31496_32593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (6))){
var inst_31429 = (state_31486[(7)]);
var inst_31462 = inst_31429.length;
var inst_31463 = (inst_31462 > (0));
var state_31486__$1 = state_31486;
if(cljs.core.truth_(inst_31463)){
var statearr_31497_32594 = state_31486__$1;
(statearr_31497_32594[(1)] = (12));

} else {
var statearr_31498_32595 = state_31486__$1;
(statearr_31498_32595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (3))){
var inst_31475 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31486__$1,inst_31475);
} else {
if((state_val_31487 === (12))){
var inst_31429 = (state_31486[(7)]);
var inst_31465 = cljs.core.vec(inst_31429);
var state_31486__$1 = state_31486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31486__$1,(15),out,inst_31465);
} else {
if((state_val_31487 === (2))){
var state_31486__$1 = state_31486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31486__$1,(4),ch);
} else {
if((state_val_31487 === (11))){
var inst_31442 = (state_31486[(10)]);
var inst_31438 = (state_31486[(9)]);
var inst_31452 = (state_31486[(2)]);
var inst_31453 = [];
var inst_31454 = inst_31453.push(inst_31438);
var inst_31429 = inst_31453;
var inst_31430 = inst_31442;
var state_31486__$1 = (function (){var statearr_31501 = state_31486;
(statearr_31501[(7)] = inst_31429);

(statearr_31501[(11)] = inst_31454);

(statearr_31501[(8)] = inst_31430);

(statearr_31501[(12)] = inst_31452);

return statearr_31501;
})();
var statearr_31502_32603 = state_31486__$1;
(statearr_31502_32603[(2)] = null);

(statearr_31502_32603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (9))){
var inst_31429 = (state_31486[(7)]);
var inst_31450 = cljs.core.vec(inst_31429);
var state_31486__$1 = state_31486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31486__$1,(11),out,inst_31450);
} else {
if((state_val_31487 === (5))){
var inst_31442 = (state_31486[(10)]);
var inst_31430 = (state_31486[(8)]);
var inst_31438 = (state_31486[(9)]);
var inst_31442__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31438) : f.call(null,inst_31438));
var inst_31443 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31442__$1,inst_31430);
var inst_31444 = cljs.core.keyword_identical_QMARK_(inst_31430,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31445 = ((inst_31443) || (inst_31444));
var state_31486__$1 = (function (){var statearr_31506 = state_31486;
(statearr_31506[(10)] = inst_31442__$1);

return statearr_31506;
})();
if(cljs.core.truth_(inst_31445)){
var statearr_31507_32604 = state_31486__$1;
(statearr_31507_32604[(1)] = (8));

} else {
var statearr_31511_32605 = state_31486__$1;
(statearr_31511_32605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (14))){
var inst_31470 = (state_31486[(2)]);
var inst_31471 = cljs.core.async.close_BANG_(out);
var state_31486__$1 = (function (){var statearr_31514 = state_31486;
(statearr_31514[(13)] = inst_31470);

return statearr_31514;
})();
var statearr_31515_32606 = state_31486__$1;
(statearr_31515_32606[(2)] = inst_31471);

(statearr_31515_32606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (10))){
var inst_31460 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
var statearr_31516_32607 = state_31486__$1;
(statearr_31516_32607[(2)] = inst_31460);

(statearr_31516_32607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (8))){
var inst_31429 = (state_31486[(7)]);
var inst_31442 = (state_31486[(10)]);
var inst_31438 = (state_31486[(9)]);
var inst_31447 = inst_31429.push(inst_31438);
var tmp31512 = inst_31429;
var inst_31429__$1 = tmp31512;
var inst_31430 = inst_31442;
var state_31486__$1 = (function (){var statearr_31517 = state_31486;
(statearr_31517[(7)] = inst_31429__$1);

(statearr_31517[(8)] = inst_31430);

(statearr_31517[(14)] = inst_31447);

return statearr_31517;
})();
var statearr_31518_32611 = state_31486__$1;
(statearr_31518_32611[(2)] = null);

(statearr_31518_32611[(1)] = (2));


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
var cljs$core$async$state_machine__28972__auto__ = null;
var cljs$core$async$state_machine__28972__auto____0 = (function (){
var statearr_31519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31519[(0)] = cljs$core$async$state_machine__28972__auto__);

(statearr_31519[(1)] = (1));

return statearr_31519;
});
var cljs$core$async$state_machine__28972__auto____1 = (function (state_31486){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_31486);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e31521){var ex__28975__auto__ = e31521;
var statearr_31522_32612 = state_31486;
(statearr_31522_32612[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_31486[(4)]))){
var statearr_31523_32613 = state_31486;
(statearr_31523_32613[(1)] = cljs.core.first((state_31486[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_31486;
state_31486 = G__32614;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs$core$async$state_machine__28972__auto__ = function(state_31486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28972__auto____1.call(this,state_31486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28972__auto____0;
cljs$core$async$state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28972__auto____1;
return cljs$core$async$state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_31525 = f__29042__auto__();
(statearr_31525[(6)] = c__29041__auto___32573);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
