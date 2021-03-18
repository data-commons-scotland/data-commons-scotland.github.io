goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27542 = arguments.length;
switch (G__27542) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27543 = (function (f,blockable,meta27544){
this.f = f;
this.blockable = blockable;
this.meta27544 = meta27544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27545,meta27544__$1){
var self__ = this;
var _27545__$1 = this;
return (new cljs.core.async.t_cljs$core$async27543(self__.f,self__.blockable,meta27544__$1));
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27545){
var self__ = this;
var _27545__$1 = this;
return self__.meta27544;
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27544","meta27544",1342978798,null)], null);
}));

(cljs.core.async.t_cljs$core$async27543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27543");

(cljs.core.async.t_cljs$core$async27543.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async27543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27543.
 */
cljs.core.async.__GT_t_cljs$core$async27543 = (function cljs$core$async$__GT_t_cljs$core$async27543(f__$1,blockable__$1,meta27544){
return (new cljs.core.async.t_cljs$core$async27543(f__$1,blockable__$1,meta27544));
});

}

return (new cljs.core.async.t_cljs$core$async27543(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27548 = arguments.length;
switch (G__27548) {
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
var G__27550 = arguments.length;
switch (G__27550) {
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
var G__27552 = arguments.length;
switch (G__27552) {
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
var val_29031 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29031) : fn1.call(null,val_29031));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29031) : fn1.call(null,val_29031));
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
var G__27554 = arguments.length;
switch (G__27554) {
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
var n__4613__auto___29035 = n;
var x_29036 = (0);
while(true){
if((x_29036 < n__4613__auto___29035)){
(a[x_29036] = x_29036);

var G__29037 = (x_29036 + (1));
x_29036 = G__29037;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27555 = (function (flag,meta27556){
this.flag = flag;
this.meta27556 = meta27556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27557,meta27556__$1){
var self__ = this;
var _27557__$1 = this;
return (new cljs.core.async.t_cljs$core$async27555(self__.flag,meta27556__$1));
}));

(cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27557){
var self__ = this;
var _27557__$1 = this;
return self__.meta27556;
}));

(cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27556","meta27556",1294018618,null)], null);
}));

(cljs.core.async.t_cljs$core$async27555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27555");

(cljs.core.async.t_cljs$core$async27555.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async27555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27555.
 */
cljs.core.async.__GT_t_cljs$core$async27555 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27555(flag__$1,meta27556){
return (new cljs.core.async.t_cljs$core$async27555(flag__$1,meta27556));
});

}

return (new cljs.core.async.t_cljs$core$async27555(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27558 = (function (flag,cb,meta27559){
this.flag = flag;
this.cb = cb;
this.meta27559 = meta27559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27560,meta27559__$1){
var self__ = this;
var _27560__$1 = this;
return (new cljs.core.async.t_cljs$core$async27558(self__.flag,self__.cb,meta27559__$1));
}));

(cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27560){
var self__ = this;
var _27560__$1 = this;
return self__.meta27559;
}));

(cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27559","meta27559",1147443439,null)], null);
}));

(cljs.core.async.t_cljs$core$async27558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27558");

(cljs.core.async.t_cljs$core$async27558.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async27558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27558.
 */
cljs.core.async.__GT_t_cljs$core$async27558 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27558(flag__$1,cb__$1,meta27559){
return (new cljs.core.async.t_cljs$core$async27558(flag__$1,cb__$1,meta27559));
});

}

return (new cljs.core.async.t_cljs$core$async27558(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27561_SHARP_){
var G__27563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27561_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27563) : fret.call(null,G__27563));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27562_SHARP_){
var G__27564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27562_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27564) : fret.call(null,G__27564));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29043 = (i + (1));
i = G__29043;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___29046 = arguments.length;
var i__4737__auto___29047 = (0);
while(true){
if((i__4737__auto___29047 < len__4736__auto___29046)){
args__4742__auto__.push((arguments[i__4737__auto___29047]));

var G__29048 = (i__4737__auto___29047 + (1));
i__4737__auto___29047 = G__29048;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27567){
var map__27568 = p__27567;
var map__27568__$1 = (((((!((map__27568 == null))))?(((((map__27568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27568):map__27568);
var opts = map__27568__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27565){
var G__27566 = cljs.core.first(seq27565);
var seq27565__$1 = cljs.core.next(seq27565);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27566,seq27565__$1);
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
var G__27571 = arguments.length;
switch (G__27571) {
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
var c__27484__auto___29053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27595){
var state_val_27596 = (state_27595[(1)]);
if((state_val_27596 === (7))){
var inst_27591 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27597_29055 = state_27595__$1;
(statearr_27597_29055[(2)] = inst_27591);

(statearr_27597_29055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (1))){
var state_27595__$1 = state_27595;
var statearr_27598_29056 = state_27595__$1;
(statearr_27598_29056[(2)] = null);

(statearr_27598_29056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (4))){
var inst_27574 = (state_27595[(7)]);
var inst_27574__$1 = (state_27595[(2)]);
var inst_27575 = (inst_27574__$1 == null);
var state_27595__$1 = (function (){var statearr_27599 = state_27595;
(statearr_27599[(7)] = inst_27574__$1);

return statearr_27599;
})();
if(cljs.core.truth_(inst_27575)){
var statearr_27600_29057 = state_27595__$1;
(statearr_27600_29057[(1)] = (5));

} else {
var statearr_27601_29058 = state_27595__$1;
(statearr_27601_29058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (13))){
var state_27595__$1 = state_27595;
var statearr_27602_29059 = state_27595__$1;
(statearr_27602_29059[(2)] = null);

(statearr_27602_29059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (6))){
var inst_27574 = (state_27595[(7)]);
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27595__$1,(11),to,inst_27574);
} else {
if((state_val_27596 === (3))){
var inst_27593 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27595__$1,inst_27593);
} else {
if((state_val_27596 === (12))){
var state_27595__$1 = state_27595;
var statearr_27603_29061 = state_27595__$1;
(statearr_27603_29061[(2)] = null);

(statearr_27603_29061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (2))){
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27595__$1,(4),from);
} else {
if((state_val_27596 === (11))){
var inst_27584 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
if(cljs.core.truth_(inst_27584)){
var statearr_27604_29063 = state_27595__$1;
(statearr_27604_29063[(1)] = (12));

} else {
var statearr_27605_29064 = state_27595__$1;
(statearr_27605_29064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (9))){
var state_27595__$1 = state_27595;
var statearr_27606_29065 = state_27595__$1;
(statearr_27606_29065[(2)] = null);

(statearr_27606_29065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (5))){
var state_27595__$1 = state_27595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27607_29066 = state_27595__$1;
(statearr_27607_29066[(1)] = (8));

} else {
var statearr_27608_29067 = state_27595__$1;
(statearr_27608_29067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (14))){
var inst_27589 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27609_29068 = state_27595__$1;
(statearr_27609_29068[(2)] = inst_27589);

(statearr_27609_29068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (10))){
var inst_27581 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27610_29076 = state_27595__$1;
(statearr_27610_29076[(2)] = inst_27581);

(statearr_27610_29076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (8))){
var inst_27578 = cljs.core.async.close_BANG_(to);
var state_27595__$1 = state_27595;
var statearr_27611_29084 = state_27595__$1;
(statearr_27611_29084[(2)] = inst_27578);

(statearr_27611_29084[(1)] = (10));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_27612 = [null,null,null,null,null,null,null,null];
(statearr_27612[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_27612[(1)] = (1));

return statearr_27612;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_27595){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27595);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27613){var ex__27452__auto__ = e27613;
var statearr_27614_29091 = state_27595;
(statearr_27614_29091[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27595[(4)]))){
var statearr_27615_29092 = state_27595;
(statearr_27615_29092[(1)] = cljs.core.first((state_27595[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29093 = state_27595;
state_27595 = G__29093;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_27595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_27595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27616 = f__27485__auto__();
(statearr_27616[(6)] = c__27484__auto___29053);

return statearr_27616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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
var process = (function (p__27617){
var vec__27618 = p__27617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618,(1),null);
var job = vec__27618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27484__auto___29104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27625){
var state_val_27626 = (state_27625[(1)]);
if((state_val_27626 === (1))){
var state_27625__$1 = state_27625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27625__$1,(2),res,v);
} else {
if((state_val_27626 === (2))){
var inst_27622 = (state_27625[(2)]);
var inst_27623 = cljs.core.async.close_BANG_(res);
var state_27625__$1 = (function (){var statearr_27627 = state_27625;
(statearr_27627[(7)] = inst_27622);

return statearr_27627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27625__$1,inst_27623);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0 = (function (){
var statearr_27628 = [null,null,null,null,null,null,null,null];
(statearr_27628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__);

(statearr_27628[(1)] = (1));

return statearr_27628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1 = (function (state_27625){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27625);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27629){var ex__27452__auto__ = e27629;
var statearr_27630_29115 = state_27625;
(statearr_27630_29115[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27625[(4)]))){
var statearr_27631_29116 = state_27625;
(statearr_27631_29116[(1)] = cljs.core.first((state_27625[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29117 = state_27625;
state_27625 = G__29117;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = function(state_27625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1.call(this,state_27625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27632 = f__27485__auto__();
(statearr_27632[(6)] = c__27484__auto___29104);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__27633){
var vec__27634 = p__27633;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27634,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27634,(1),null);
var job = vec__27634;
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
var n__4613__auto___29118 = n;
var __29119 = (0);
while(true){
if((__29119 < n__4613__auto___29118)){
var G__27637_29120 = type;
var G__27637_29121__$1 = (((G__27637_29120 instanceof cljs.core.Keyword))?G__27637_29120.fqn:null);
switch (G__27637_29121__$1) {
case "compute":
var c__27484__auto___29123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29119,c__27484__auto___29123,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async){
return (function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = ((function (__29119,c__27484__auto___29123,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async){
return (function (state_27650){
var state_val_27651 = (state_27650[(1)]);
if((state_val_27651 === (1))){
var state_27650__$1 = state_27650;
var statearr_27652_29124 = state_27650__$1;
(statearr_27652_29124[(2)] = null);

(statearr_27652_29124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (2))){
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27650__$1,(4),jobs);
} else {
if((state_val_27651 === (3))){
var inst_27648 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27650__$1,inst_27648);
} else {
if((state_val_27651 === (4))){
var inst_27640 = (state_27650[(2)]);
var inst_27641 = process(inst_27640);
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27641)){
var statearr_27653_29128 = state_27650__$1;
(statearr_27653_29128[(1)] = (5));

} else {
var statearr_27654_29129 = state_27650__$1;
(statearr_27654_29129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (5))){
var state_27650__$1 = state_27650;
var statearr_27655_29136 = state_27650__$1;
(statearr_27655_29136[(2)] = null);

(statearr_27655_29136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (6))){
var state_27650__$1 = state_27650;
var statearr_27656_29137 = state_27650__$1;
(statearr_27656_29137[(2)] = null);

(statearr_27656_29137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (7))){
var inst_27646 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27657_29138 = state_27650__$1;
(statearr_27657_29138[(2)] = inst_27646);

(statearr_27657_29138[(1)] = (3));


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
});})(__29119,c__27484__auto___29123,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async))
;
return ((function (__29119,switch__27448__auto__,c__27484__auto___29123,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0 = (function (){
var statearr_27658 = [null,null,null,null,null,null,null];
(statearr_27658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__);

(statearr_27658[(1)] = (1));

return statearr_27658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1 = (function (state_27650){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27650);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27659){var ex__27452__auto__ = e27659;
var statearr_27660_29139 = state_27650;
(statearr_27660_29139[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27650[(4)]))){
var statearr_27661_29140 = state_27650;
(statearr_27661_29140[(1)] = cljs.core.first((state_27650[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29141 = state_27650;
state_27650 = G__29141;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = function(state_27650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1.call(this,state_27650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__;
})()
;})(__29119,switch__27448__auto__,c__27484__auto___29123,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async))
})();
var state__27486__auto__ = (function (){var statearr_27662 = f__27485__auto__();
(statearr_27662[(6)] = c__27484__auto___29123);

return statearr_27662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
});})(__29119,c__27484__auto___29123,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async))
);


break;
case "async":
var c__27484__auto___29146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29119,c__27484__auto___29146,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async){
return (function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = ((function (__29119,c__27484__auto___29146,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async){
return (function (state_27675){
var state_val_27676 = (state_27675[(1)]);
if((state_val_27676 === (1))){
var state_27675__$1 = state_27675;
var statearr_27677_29147 = state_27675__$1;
(statearr_27677_29147[(2)] = null);

(statearr_27677_29147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (2))){
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27675__$1,(4),jobs);
} else {
if((state_val_27676 === (3))){
var inst_27673 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27675__$1,inst_27673);
} else {
if((state_val_27676 === (4))){
var inst_27665 = (state_27675[(2)]);
var inst_27666 = async(inst_27665);
var state_27675__$1 = state_27675;
if(cljs.core.truth_(inst_27666)){
var statearr_27678_29148 = state_27675__$1;
(statearr_27678_29148[(1)] = (5));

} else {
var statearr_27679_29149 = state_27675__$1;
(statearr_27679_29149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (5))){
var state_27675__$1 = state_27675;
var statearr_27680_29150 = state_27675__$1;
(statearr_27680_29150[(2)] = null);

(statearr_27680_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (6))){
var state_27675__$1 = state_27675;
var statearr_27681_29151 = state_27675__$1;
(statearr_27681_29151[(2)] = null);

(statearr_27681_29151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (7))){
var inst_27671 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27682_29152 = state_27675__$1;
(statearr_27682_29152[(2)] = inst_27671);

(statearr_27682_29152[(1)] = (3));


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
});})(__29119,c__27484__auto___29146,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async))
;
return ((function (__29119,switch__27448__auto__,c__27484__auto___29146,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0 = (function (){
var statearr_27683 = [null,null,null,null,null,null,null];
(statearr_27683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__);

(statearr_27683[(1)] = (1));

return statearr_27683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1 = (function (state_27675){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27675);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27684){var ex__27452__auto__ = e27684;
var statearr_27685_29153 = state_27675;
(statearr_27685_29153[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27675[(4)]))){
var statearr_27686_29156 = state_27675;
(statearr_27686_29156[(1)] = cljs.core.first((state_27675[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29157 = state_27675;
state_27675 = G__29157;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = function(state_27675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1.call(this,state_27675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__;
})()
;})(__29119,switch__27448__auto__,c__27484__auto___29146,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async))
})();
var state__27486__auto__ = (function (){var statearr_27687 = f__27485__auto__();
(statearr_27687[(6)] = c__27484__auto___29146);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
});})(__29119,c__27484__auto___29146,G__27637_29120,G__27637_29121__$1,n__4613__auto___29118,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27637_29121__$1)].join('')));

}

var G__29173 = (__29119 + (1));
__29119 = G__29173;
continue;
} else {
}
break;
}

var c__27484__auto___29174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27709){
var state_val_27710 = (state_27709[(1)]);
if((state_val_27710 === (7))){
var inst_27705 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27711_29175 = state_27709__$1;
(statearr_27711_29175[(2)] = inst_27705);

(statearr_27711_29175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (1))){
var state_27709__$1 = state_27709;
var statearr_27712_29176 = state_27709__$1;
(statearr_27712_29176[(2)] = null);

(statearr_27712_29176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (4))){
var inst_27690 = (state_27709[(7)]);
var inst_27690__$1 = (state_27709[(2)]);
var inst_27691 = (inst_27690__$1 == null);
var state_27709__$1 = (function (){var statearr_27713 = state_27709;
(statearr_27713[(7)] = inst_27690__$1);

return statearr_27713;
})();
if(cljs.core.truth_(inst_27691)){
var statearr_27714_29177 = state_27709__$1;
(statearr_27714_29177[(1)] = (5));

} else {
var statearr_27715_29178 = state_27709__$1;
(statearr_27715_29178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (6))){
var inst_27690 = (state_27709[(7)]);
var inst_27695 = (state_27709[(8)]);
var inst_27695__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27696 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27697 = [inst_27690,inst_27695__$1];
var inst_27698 = (new cljs.core.PersistentVector(null,2,(5),inst_27696,inst_27697,null));
var state_27709__$1 = (function (){var statearr_27716 = state_27709;
(statearr_27716[(8)] = inst_27695__$1);

return statearr_27716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27709__$1,(8),jobs,inst_27698);
} else {
if((state_val_27710 === (3))){
var inst_27707 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27709__$1,inst_27707);
} else {
if((state_val_27710 === (2))){
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27709__$1,(4),from);
} else {
if((state_val_27710 === (9))){
var inst_27702 = (state_27709[(2)]);
var state_27709__$1 = (function (){var statearr_27717 = state_27709;
(statearr_27717[(9)] = inst_27702);

return statearr_27717;
})();
var statearr_27718_29185 = state_27709__$1;
(statearr_27718_29185[(2)] = null);

(statearr_27718_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (5))){
var inst_27693 = cljs.core.async.close_BANG_(jobs);
var state_27709__$1 = state_27709;
var statearr_27719_29186 = state_27709__$1;
(statearr_27719_29186[(2)] = inst_27693);

(statearr_27719_29186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27710 === (8))){
var inst_27695 = (state_27709[(8)]);
var inst_27700 = (state_27709[(2)]);
var state_27709__$1 = (function (){var statearr_27720 = state_27709;
(statearr_27720[(10)] = inst_27700);

return statearr_27720;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27709__$1,(9),results,inst_27695);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0 = (function (){
var statearr_27721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__);

(statearr_27721[(1)] = (1));

return statearr_27721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1 = (function (state_27709){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27709);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27722){var ex__27452__auto__ = e27722;
var statearr_27723_29187 = state_27709;
(statearr_27723_29187[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27709[(4)]))){
var statearr_27724_29194 = state_27709;
(statearr_27724_29194[(1)] = cljs.core.first((state_27709[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29195 = state_27709;
state_27709 = G__29195;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = function(state_27709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1.call(this,state_27709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27725 = f__27485__auto__();
(statearr_27725[(6)] = c__27484__auto___29174);

return statearr_27725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


var c__27484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27763){
var state_val_27764 = (state_27763[(1)]);
if((state_val_27764 === (7))){
var inst_27759 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
var statearr_27765_29196 = state_27763__$1;
(statearr_27765_29196[(2)] = inst_27759);

(statearr_27765_29196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (20))){
var state_27763__$1 = state_27763;
var statearr_27766_29197 = state_27763__$1;
(statearr_27766_29197[(2)] = null);

(statearr_27766_29197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (1))){
var state_27763__$1 = state_27763;
var statearr_27767_29198 = state_27763__$1;
(statearr_27767_29198[(2)] = null);

(statearr_27767_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (4))){
var inst_27728 = (state_27763[(7)]);
var inst_27728__$1 = (state_27763[(2)]);
var inst_27729 = (inst_27728__$1 == null);
var state_27763__$1 = (function (){var statearr_27768 = state_27763;
(statearr_27768[(7)] = inst_27728__$1);

return statearr_27768;
})();
if(cljs.core.truth_(inst_27729)){
var statearr_27769_29205 = state_27763__$1;
(statearr_27769_29205[(1)] = (5));

} else {
var statearr_27770_29206 = state_27763__$1;
(statearr_27770_29206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (15))){
var inst_27741 = (state_27763[(8)]);
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27763__$1,(18),to,inst_27741);
} else {
if((state_val_27764 === (21))){
var inst_27754 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
var statearr_27771_29207 = state_27763__$1;
(statearr_27771_29207[(2)] = inst_27754);

(statearr_27771_29207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (13))){
var inst_27756 = (state_27763[(2)]);
var state_27763__$1 = (function (){var statearr_27772 = state_27763;
(statearr_27772[(9)] = inst_27756);

return statearr_27772;
})();
var statearr_27773_29208 = state_27763__$1;
(statearr_27773_29208[(2)] = null);

(statearr_27773_29208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (6))){
var inst_27728 = (state_27763[(7)]);
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27763__$1,(11),inst_27728);
} else {
if((state_val_27764 === (17))){
var inst_27749 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
if(cljs.core.truth_(inst_27749)){
var statearr_27774_29209 = state_27763__$1;
(statearr_27774_29209[(1)] = (19));

} else {
var statearr_27775_29210 = state_27763__$1;
(statearr_27775_29210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (3))){
var inst_27761 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27763__$1,inst_27761);
} else {
if((state_val_27764 === (12))){
var inst_27738 = (state_27763[(10)]);
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27763__$1,(14),inst_27738);
} else {
if((state_val_27764 === (2))){
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27763__$1,(4),results);
} else {
if((state_val_27764 === (19))){
var state_27763__$1 = state_27763;
var statearr_27776_29211 = state_27763__$1;
(statearr_27776_29211[(2)] = null);

(statearr_27776_29211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (11))){
var inst_27738 = (state_27763[(2)]);
var state_27763__$1 = (function (){var statearr_27777 = state_27763;
(statearr_27777[(10)] = inst_27738);

return statearr_27777;
})();
var statearr_27778_29212 = state_27763__$1;
(statearr_27778_29212[(2)] = null);

(statearr_27778_29212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (9))){
var state_27763__$1 = state_27763;
var statearr_27779_29213 = state_27763__$1;
(statearr_27779_29213[(2)] = null);

(statearr_27779_29213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (5))){
var state_27763__$1 = state_27763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27780_29214 = state_27763__$1;
(statearr_27780_29214[(1)] = (8));

} else {
var statearr_27781_29215 = state_27763__$1;
(statearr_27781_29215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (14))){
var inst_27741 = (state_27763[(8)]);
var inst_27741__$1 = (state_27763[(2)]);
var inst_27742 = (inst_27741__$1 == null);
var inst_27743 = cljs.core.not(inst_27742);
var state_27763__$1 = (function (){var statearr_27782 = state_27763;
(statearr_27782[(8)] = inst_27741__$1);

return statearr_27782;
})();
if(inst_27743){
var statearr_27783_29216 = state_27763__$1;
(statearr_27783_29216[(1)] = (15));

} else {
var statearr_27784_29217 = state_27763__$1;
(statearr_27784_29217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (16))){
var state_27763__$1 = state_27763;
var statearr_27785_29218 = state_27763__$1;
(statearr_27785_29218[(2)] = false);

(statearr_27785_29218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (10))){
var inst_27735 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
var statearr_27786_29219 = state_27763__$1;
(statearr_27786_29219[(2)] = inst_27735);

(statearr_27786_29219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (18))){
var inst_27746 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
var statearr_27787_29220 = state_27763__$1;
(statearr_27787_29220[(2)] = inst_27746);

(statearr_27787_29220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (8))){
var inst_27732 = cljs.core.async.close_BANG_(to);
var state_27763__$1 = state_27763;
var statearr_27788_29221 = state_27763__$1;
(statearr_27788_29221[(2)] = inst_27732);

(statearr_27788_29221[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0 = (function (){
var statearr_27789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__);

(statearr_27789[(1)] = (1));

return statearr_27789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1 = (function (state_27763){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27763);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27790){var ex__27452__auto__ = e27790;
var statearr_27791_29222 = state_27763;
(statearr_27791_29222[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27763[(4)]))){
var statearr_27792_29223 = state_27763;
(statearr_27792_29223[(1)] = cljs.core.first((state_27763[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29225 = state_27763;
state_27763 = G__29225;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__ = function(state_27763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1.call(this,state_27763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27793 = f__27485__auto__();
(statearr_27793[(6)] = c__27484__auto__);

return statearr_27793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));

return c__27484__auto__;
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
var G__27795 = arguments.length;
switch (G__27795) {
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
var G__27797 = arguments.length;
switch (G__27797) {
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
var G__27799 = arguments.length;
switch (G__27799) {
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
var c__27484__auto___29235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27825){
var state_val_27826 = (state_27825[(1)]);
if((state_val_27826 === (7))){
var inst_27821 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27827_29237 = state_27825__$1;
(statearr_27827_29237[(2)] = inst_27821);

(statearr_27827_29237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (1))){
var state_27825__$1 = state_27825;
var statearr_27828_29239 = state_27825__$1;
(statearr_27828_29239[(2)] = null);

(statearr_27828_29239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (4))){
var inst_27802 = (state_27825[(7)]);
var inst_27802__$1 = (state_27825[(2)]);
var inst_27803 = (inst_27802__$1 == null);
var state_27825__$1 = (function (){var statearr_27829 = state_27825;
(statearr_27829[(7)] = inst_27802__$1);

return statearr_27829;
})();
if(cljs.core.truth_(inst_27803)){
var statearr_27830_29240 = state_27825__$1;
(statearr_27830_29240[(1)] = (5));

} else {
var statearr_27831_29241 = state_27825__$1;
(statearr_27831_29241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (13))){
var state_27825__$1 = state_27825;
var statearr_27832_29242 = state_27825__$1;
(statearr_27832_29242[(2)] = null);

(statearr_27832_29242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (6))){
var inst_27802 = (state_27825[(7)]);
var inst_27808 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27802) : p.call(null,inst_27802));
var state_27825__$1 = state_27825;
if(cljs.core.truth_(inst_27808)){
var statearr_27833_29243 = state_27825__$1;
(statearr_27833_29243[(1)] = (9));

} else {
var statearr_27834_29244 = state_27825__$1;
(statearr_27834_29244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (3))){
var inst_27823 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27825__$1,inst_27823);
} else {
if((state_val_27826 === (12))){
var state_27825__$1 = state_27825;
var statearr_27835_29245 = state_27825__$1;
(statearr_27835_29245[(2)] = null);

(statearr_27835_29245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (2))){
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27825__$1,(4),ch);
} else {
if((state_val_27826 === (11))){
var inst_27802 = (state_27825[(7)]);
var inst_27812 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27825__$1,(8),inst_27812,inst_27802);
} else {
if((state_val_27826 === (9))){
var state_27825__$1 = state_27825;
var statearr_27836_29246 = state_27825__$1;
(statearr_27836_29246[(2)] = tc);

(statearr_27836_29246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (5))){
var inst_27805 = cljs.core.async.close_BANG_(tc);
var inst_27806 = cljs.core.async.close_BANG_(fc);
var state_27825__$1 = (function (){var statearr_27837 = state_27825;
(statearr_27837[(8)] = inst_27805);

return statearr_27837;
})();
var statearr_27838_29247 = state_27825__$1;
(statearr_27838_29247[(2)] = inst_27806);

(statearr_27838_29247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (14))){
var inst_27819 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27839_29248 = state_27825__$1;
(statearr_27839_29248[(2)] = inst_27819);

(statearr_27839_29248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (10))){
var state_27825__$1 = state_27825;
var statearr_27840_29249 = state_27825__$1;
(statearr_27840_29249[(2)] = fc);

(statearr_27840_29249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (8))){
var inst_27814 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
if(cljs.core.truth_(inst_27814)){
var statearr_27841_29250 = state_27825__$1;
(statearr_27841_29250[(1)] = (12));

} else {
var statearr_27842_29251 = state_27825__$1;
(statearr_27842_29251[(1)] = (13));

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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_27843 = [null,null,null,null,null,null,null,null,null];
(statearr_27843[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_27843[(1)] = (1));

return statearr_27843;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_27825){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27825);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27844){var ex__27452__auto__ = e27844;
var statearr_27845_29252 = state_27825;
(statearr_27845_29252[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27825[(4)]))){
var statearr_27846_29253 = state_27825;
(statearr_27846_29253[(1)] = cljs.core.first((state_27825[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29254 = state_27825;
state_27825 = G__29254;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_27825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_27825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27847 = f__27485__auto__();
(statearr_27847[(6)] = c__27484__auto___29235);

return statearr_27847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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
var c__27484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27869){
var state_val_27870 = (state_27869[(1)]);
if((state_val_27870 === (7))){
var inst_27865 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
var statearr_27871_29257 = state_27869__$1;
(statearr_27871_29257[(2)] = inst_27865);

(statearr_27871_29257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (1))){
var inst_27848 = init;
var inst_27849 = inst_27848;
var state_27869__$1 = (function (){var statearr_27872 = state_27869;
(statearr_27872[(7)] = inst_27849);

return statearr_27872;
})();
var statearr_27873_29258 = state_27869__$1;
(statearr_27873_29258[(2)] = null);

(statearr_27873_29258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (4))){
var inst_27852 = (state_27869[(8)]);
var inst_27852__$1 = (state_27869[(2)]);
var inst_27853 = (inst_27852__$1 == null);
var state_27869__$1 = (function (){var statearr_27874 = state_27869;
(statearr_27874[(8)] = inst_27852__$1);

return statearr_27874;
})();
if(cljs.core.truth_(inst_27853)){
var statearr_27875_29259 = state_27869__$1;
(statearr_27875_29259[(1)] = (5));

} else {
var statearr_27876_29260 = state_27869__$1;
(statearr_27876_29260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (6))){
var inst_27849 = (state_27869[(7)]);
var inst_27852 = (state_27869[(8)]);
var inst_27856 = (state_27869[(9)]);
var inst_27856__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27849,inst_27852) : f.call(null,inst_27849,inst_27852));
var inst_27857 = cljs.core.reduced_QMARK_(inst_27856__$1);
var state_27869__$1 = (function (){var statearr_27877 = state_27869;
(statearr_27877[(9)] = inst_27856__$1);

return statearr_27877;
})();
if(inst_27857){
var statearr_27878_29261 = state_27869__$1;
(statearr_27878_29261[(1)] = (8));

} else {
var statearr_27879_29262 = state_27869__$1;
(statearr_27879_29262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (3))){
var inst_27867 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27869__$1,inst_27867);
} else {
if((state_val_27870 === (2))){
var state_27869__$1 = state_27869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27869__$1,(4),ch);
} else {
if((state_val_27870 === (9))){
var inst_27856 = (state_27869[(9)]);
var inst_27849 = inst_27856;
var state_27869__$1 = (function (){var statearr_27880 = state_27869;
(statearr_27880[(7)] = inst_27849);

return statearr_27880;
})();
var statearr_27881_29263 = state_27869__$1;
(statearr_27881_29263[(2)] = null);

(statearr_27881_29263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (5))){
var inst_27849 = (state_27869[(7)]);
var state_27869__$1 = state_27869;
var statearr_27882_29264 = state_27869__$1;
(statearr_27882_29264[(2)] = inst_27849);

(statearr_27882_29264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (10))){
var inst_27863 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
var statearr_27883_29266 = state_27869__$1;
(statearr_27883_29266[(2)] = inst_27863);

(statearr_27883_29266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (8))){
var inst_27856 = (state_27869[(9)]);
var inst_27859 = cljs.core.deref(inst_27856);
var state_27869__$1 = state_27869;
var statearr_27884_29267 = state_27869__$1;
(statearr_27884_29267[(2)] = inst_27859);

(statearr_27884_29267[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27449__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27449__auto____0 = (function (){
var statearr_27885 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27885[(0)] = cljs$core$async$reduce_$_state_machine__27449__auto__);

(statearr_27885[(1)] = (1));

return statearr_27885;
});
var cljs$core$async$reduce_$_state_machine__27449__auto____1 = (function (state_27869){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27869);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27886){var ex__27452__auto__ = e27886;
var statearr_27887_29272 = state_27869;
(statearr_27887_29272[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27869[(4)]))){
var statearr_27888_29273 = state_27869;
(statearr_27888_29273[(1)] = cljs.core.first((state_27869[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_27869;
state_27869 = G__29274;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27449__auto__ = function(state_27869){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27449__auto____1.call(this,state_27869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27449__auto____0;
cljs$core$async$reduce_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27449__auto____1;
return cljs$core$async$reduce_$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27889 = f__27485__auto__();
(statearr_27889[(6)] = c__27484__auto__);

return statearr_27889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));

return c__27484__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27895){
var state_val_27896 = (state_27895[(1)]);
if((state_val_27896 === (1))){
var inst_27890 = cljs.core.async.reduce(f__$1,init,ch);
var state_27895__$1 = state_27895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27895__$1,(2),inst_27890);
} else {
if((state_val_27896 === (2))){
var inst_27892 = (state_27895[(2)]);
var inst_27893 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27892) : f__$1.call(null,inst_27892));
var state_27895__$1 = state_27895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27895__$1,inst_27893);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27449__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27449__auto____0 = (function (){
var statearr_27897 = [null,null,null,null,null,null,null];
(statearr_27897[(0)] = cljs$core$async$transduce_$_state_machine__27449__auto__);

(statearr_27897[(1)] = (1));

return statearr_27897;
});
var cljs$core$async$transduce_$_state_machine__27449__auto____1 = (function (state_27895){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27895);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27898){var ex__27452__auto__ = e27898;
var statearr_27899_29282 = state_27895;
(statearr_27899_29282[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27895[(4)]))){
var statearr_27900_29283 = state_27895;
(statearr_27900_29283[(1)] = cljs.core.first((state_27895[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29284 = state_27895;
state_27895 = G__29284;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27449__auto__ = function(state_27895){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27449__auto____1.call(this,state_27895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27449__auto____0;
cljs$core$async$transduce_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27449__auto____1;
return cljs$core$async$transduce_$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27901 = f__27485__auto__();
(statearr_27901[(6)] = c__27484__auto__);

return statearr_27901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));

return c__27484__auto__;
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
var G__27903 = arguments.length;
switch (G__27903) {
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
var c__27484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_27928){
var state_val_27929 = (state_27928[(1)]);
if((state_val_27929 === (7))){
var inst_27910 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27930_29286 = state_27928__$1;
(statearr_27930_29286[(2)] = inst_27910);

(statearr_27930_29286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (1))){
var inst_27904 = cljs.core.seq(coll);
var inst_27905 = inst_27904;
var state_27928__$1 = (function (){var statearr_27931 = state_27928;
(statearr_27931[(7)] = inst_27905);

return statearr_27931;
})();
var statearr_27932_29300 = state_27928__$1;
(statearr_27932_29300[(2)] = null);

(statearr_27932_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (4))){
var inst_27905 = (state_27928[(7)]);
var inst_27908 = cljs.core.first(inst_27905);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27928__$1,(7),ch,inst_27908);
} else {
if((state_val_27929 === (13))){
var inst_27922 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27933_29301 = state_27928__$1;
(statearr_27933_29301[(2)] = inst_27922);

(statearr_27933_29301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (6))){
var inst_27913 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
if(cljs.core.truth_(inst_27913)){
var statearr_27934_29302 = state_27928__$1;
(statearr_27934_29302[(1)] = (8));

} else {
var statearr_27935_29303 = state_27928__$1;
(statearr_27935_29303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (3))){
var inst_27926 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27928__$1,inst_27926);
} else {
if((state_val_27929 === (12))){
var state_27928__$1 = state_27928;
var statearr_27936_29304 = state_27928__$1;
(statearr_27936_29304[(2)] = null);

(statearr_27936_29304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (2))){
var inst_27905 = (state_27928[(7)]);
var state_27928__$1 = state_27928;
if(cljs.core.truth_(inst_27905)){
var statearr_27937_29305 = state_27928__$1;
(statearr_27937_29305[(1)] = (4));

} else {
var statearr_27938_29306 = state_27928__$1;
(statearr_27938_29306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (11))){
var inst_27919 = cljs.core.async.close_BANG_(ch);
var state_27928__$1 = state_27928;
var statearr_27939_29307 = state_27928__$1;
(statearr_27939_29307[(2)] = inst_27919);

(statearr_27939_29307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (9))){
var state_27928__$1 = state_27928;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27940_29308 = state_27928__$1;
(statearr_27940_29308[(1)] = (11));

} else {
var statearr_27941_29309 = state_27928__$1;
(statearr_27941_29309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (5))){
var inst_27905 = (state_27928[(7)]);
var state_27928__$1 = state_27928;
var statearr_27942_29310 = state_27928__$1;
(statearr_27942_29310[(2)] = inst_27905);

(statearr_27942_29310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (10))){
var inst_27924 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27943_29311 = state_27928__$1;
(statearr_27943_29311[(2)] = inst_27924);

(statearr_27943_29311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (8))){
var inst_27905 = (state_27928[(7)]);
var inst_27915 = cljs.core.next(inst_27905);
var inst_27905__$1 = inst_27915;
var state_27928__$1 = (function (){var statearr_27944 = state_27928;
(statearr_27944[(7)] = inst_27905__$1);

return statearr_27944;
})();
var statearr_27945_29312 = state_27928__$1;
(statearr_27945_29312[(2)] = null);

(statearr_27945_29312[(1)] = (2));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_27946 = [null,null,null,null,null,null,null,null];
(statearr_27946[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_27946[(1)] = (1));

return statearr_27946;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_27928){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_27928);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e27947){var ex__27452__auto__ = e27947;
var statearr_27948_29315 = state_27928;
(statearr_27948_29315[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_27928[(4)]))){
var statearr_27949_29316 = state_27928;
(statearr_27949_29316[(1)] = cljs.core.first((state_27928[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29317 = state_27928;
state_27928 = G__29317;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_27928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_27928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_27950 = f__27485__auto__();
(statearr_27950[(6)] = c__27484__auto__);

return statearr_27950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));

return c__27484__auto__;
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
var G__27952 = arguments.length;
switch (G__27952) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_29323 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29323(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29324 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29324(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29325 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29325(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29326 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29326(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27953 = (function (ch,cs,meta27954){
this.ch = ch;
this.cs = cs;
this.meta27954 = meta27954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27955,meta27954__$1){
var self__ = this;
var _27955__$1 = this;
return (new cljs.core.async.t_cljs$core$async27953(self__.ch,self__.cs,meta27954__$1));
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27955){
var self__ = this;
var _27955__$1 = this;
return self__.meta27954;
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27954","meta27954",286106582,null)], null);
}));

(cljs.core.async.t_cljs$core$async27953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27953");

(cljs.core.async.t_cljs$core$async27953.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async27953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27953.
 */
cljs.core.async.__GT_t_cljs$core$async27953 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27953(ch__$1,cs__$1,meta27954){
return (new cljs.core.async.t_cljs$core$async27953(ch__$1,cs__$1,meta27954));
});

}

return (new cljs.core.async.t_cljs$core$async27953(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27484__auto___29337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28088){
var state_val_28089 = (state_28088[(1)]);
if((state_val_28089 === (7))){
var inst_28084 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28090_29338 = state_28088__$1;
(statearr_28090_29338[(2)] = inst_28084);

(statearr_28090_29338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (20))){
var inst_27989 = (state_28088[(7)]);
var inst_28001 = cljs.core.first(inst_27989);
var inst_28002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28001,(0),null);
var inst_28003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28001,(1),null);
var state_28088__$1 = (function (){var statearr_28091 = state_28088;
(statearr_28091[(8)] = inst_28002);

return statearr_28091;
})();
if(cljs.core.truth_(inst_28003)){
var statearr_28092_29339 = state_28088__$1;
(statearr_28092_29339[(1)] = (22));

} else {
var statearr_28093_29340 = state_28088__$1;
(statearr_28093_29340[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (27))){
var inst_28038 = (state_28088[(9)]);
var inst_28033 = (state_28088[(10)]);
var inst_27958 = (state_28088[(11)]);
var inst_28031 = (state_28088[(12)]);
var inst_28038__$1 = cljs.core._nth(inst_28031,inst_28033);
var inst_28039 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28038__$1,inst_27958,done);
var state_28088__$1 = (function (){var statearr_28094 = state_28088;
(statearr_28094[(9)] = inst_28038__$1);

return statearr_28094;
})();
if(cljs.core.truth_(inst_28039)){
var statearr_28095_29341 = state_28088__$1;
(statearr_28095_29341[(1)] = (30));

} else {
var statearr_28096_29342 = state_28088__$1;
(statearr_28096_29342[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (1))){
var state_28088__$1 = state_28088;
var statearr_28097_29343 = state_28088__$1;
(statearr_28097_29343[(2)] = null);

(statearr_28097_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (24))){
var inst_27989 = (state_28088[(7)]);
var inst_28008 = (state_28088[(2)]);
var inst_28009 = cljs.core.next(inst_27989);
var inst_27967 = inst_28009;
var inst_27968 = null;
var inst_27969 = (0);
var inst_27970 = (0);
var state_28088__$1 = (function (){var statearr_28098 = state_28088;
(statearr_28098[(13)] = inst_27969);

(statearr_28098[(14)] = inst_27970);

(statearr_28098[(15)] = inst_27968);

(statearr_28098[(16)] = inst_27967);

(statearr_28098[(17)] = inst_28008);

return statearr_28098;
})();
var statearr_28099_29344 = state_28088__$1;
(statearr_28099_29344[(2)] = null);

(statearr_28099_29344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (39))){
var state_28088__$1 = state_28088;
var statearr_28103_29345 = state_28088__$1;
(statearr_28103_29345[(2)] = null);

(statearr_28103_29345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (4))){
var inst_27958 = (state_28088[(11)]);
var inst_27958__$1 = (state_28088[(2)]);
var inst_27959 = (inst_27958__$1 == null);
var state_28088__$1 = (function (){var statearr_28104 = state_28088;
(statearr_28104[(11)] = inst_27958__$1);

return statearr_28104;
})();
if(cljs.core.truth_(inst_27959)){
var statearr_28105_29346 = state_28088__$1;
(statearr_28105_29346[(1)] = (5));

} else {
var statearr_28106_29347 = state_28088__$1;
(statearr_28106_29347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (15))){
var inst_27969 = (state_28088[(13)]);
var inst_27970 = (state_28088[(14)]);
var inst_27968 = (state_28088[(15)]);
var inst_27967 = (state_28088[(16)]);
var inst_27985 = (state_28088[(2)]);
var inst_27986 = (inst_27970 + (1));
var tmp28100 = inst_27969;
var tmp28101 = inst_27968;
var tmp28102 = inst_27967;
var inst_27967__$1 = tmp28102;
var inst_27968__$1 = tmp28101;
var inst_27969__$1 = tmp28100;
var inst_27970__$1 = inst_27986;
var state_28088__$1 = (function (){var statearr_28107 = state_28088;
(statearr_28107[(13)] = inst_27969__$1);

(statearr_28107[(14)] = inst_27970__$1);

(statearr_28107[(15)] = inst_27968__$1);

(statearr_28107[(16)] = inst_27967__$1);

(statearr_28107[(18)] = inst_27985);

return statearr_28107;
})();
var statearr_28108_29348 = state_28088__$1;
(statearr_28108_29348[(2)] = null);

(statearr_28108_29348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (21))){
var inst_28012 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28112_29349 = state_28088__$1;
(statearr_28112_29349[(2)] = inst_28012);

(statearr_28112_29349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (31))){
var inst_28038 = (state_28088[(9)]);
var inst_28042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28038);
var state_28088__$1 = state_28088;
var statearr_28113_29350 = state_28088__$1;
(statearr_28113_29350[(2)] = inst_28042);

(statearr_28113_29350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (32))){
var inst_28033 = (state_28088[(10)]);
var inst_28032 = (state_28088[(19)]);
var inst_28030 = (state_28088[(20)]);
var inst_28031 = (state_28088[(12)]);
var inst_28044 = (state_28088[(2)]);
var inst_28045 = (inst_28033 + (1));
var tmp28109 = inst_28032;
var tmp28110 = inst_28030;
var tmp28111 = inst_28031;
var inst_28030__$1 = tmp28110;
var inst_28031__$1 = tmp28111;
var inst_28032__$1 = tmp28109;
var inst_28033__$1 = inst_28045;
var state_28088__$1 = (function (){var statearr_28114 = state_28088;
(statearr_28114[(10)] = inst_28033__$1);

(statearr_28114[(19)] = inst_28032__$1);

(statearr_28114[(20)] = inst_28030__$1);

(statearr_28114[(12)] = inst_28031__$1);

(statearr_28114[(21)] = inst_28044);

return statearr_28114;
})();
var statearr_28115_29351 = state_28088__$1;
(statearr_28115_29351[(2)] = null);

(statearr_28115_29351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (40))){
var inst_28057 = (state_28088[(22)]);
var inst_28061 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28057);
var state_28088__$1 = state_28088;
var statearr_28116_29352 = state_28088__$1;
(statearr_28116_29352[(2)] = inst_28061);

(statearr_28116_29352[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (33))){
var inst_28048 = (state_28088[(23)]);
var inst_28050 = cljs.core.chunked_seq_QMARK_(inst_28048);
var state_28088__$1 = state_28088;
if(inst_28050){
var statearr_28117_29353 = state_28088__$1;
(statearr_28117_29353[(1)] = (36));

} else {
var statearr_28118_29357 = state_28088__$1;
(statearr_28118_29357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (13))){
var inst_27979 = (state_28088[(24)]);
var inst_27982 = cljs.core.async.close_BANG_(inst_27979);
var state_28088__$1 = state_28088;
var statearr_28119_29358 = state_28088__$1;
(statearr_28119_29358[(2)] = inst_27982);

(statearr_28119_29358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (22))){
var inst_28002 = (state_28088[(8)]);
var inst_28005 = cljs.core.async.close_BANG_(inst_28002);
var state_28088__$1 = state_28088;
var statearr_28120_29359 = state_28088__$1;
(statearr_28120_29359[(2)] = inst_28005);

(statearr_28120_29359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (36))){
var inst_28048 = (state_28088[(23)]);
var inst_28052 = cljs.core.chunk_first(inst_28048);
var inst_28053 = cljs.core.chunk_rest(inst_28048);
var inst_28054 = cljs.core.count(inst_28052);
var inst_28030 = inst_28053;
var inst_28031 = inst_28052;
var inst_28032 = inst_28054;
var inst_28033 = (0);
var state_28088__$1 = (function (){var statearr_28121 = state_28088;
(statearr_28121[(10)] = inst_28033);

(statearr_28121[(19)] = inst_28032);

(statearr_28121[(20)] = inst_28030);

(statearr_28121[(12)] = inst_28031);

return statearr_28121;
})();
var statearr_28122_29361 = state_28088__$1;
(statearr_28122_29361[(2)] = null);

(statearr_28122_29361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (41))){
var inst_28048 = (state_28088[(23)]);
var inst_28063 = (state_28088[(2)]);
var inst_28064 = cljs.core.next(inst_28048);
var inst_28030 = inst_28064;
var inst_28031 = null;
var inst_28032 = (0);
var inst_28033 = (0);
var state_28088__$1 = (function (){var statearr_28123 = state_28088;
(statearr_28123[(10)] = inst_28033);

(statearr_28123[(19)] = inst_28032);

(statearr_28123[(20)] = inst_28030);

(statearr_28123[(12)] = inst_28031);

(statearr_28123[(25)] = inst_28063);

return statearr_28123;
})();
var statearr_28124_29362 = state_28088__$1;
(statearr_28124_29362[(2)] = null);

(statearr_28124_29362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (43))){
var state_28088__$1 = state_28088;
var statearr_28125_29363 = state_28088__$1;
(statearr_28125_29363[(2)] = null);

(statearr_28125_29363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (29))){
var inst_28072 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28126_29364 = state_28088__$1;
(statearr_28126_29364[(2)] = inst_28072);

(statearr_28126_29364[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (44))){
var inst_28081 = (state_28088[(2)]);
var state_28088__$1 = (function (){var statearr_28127 = state_28088;
(statearr_28127[(26)] = inst_28081);

return statearr_28127;
})();
var statearr_28128_29365 = state_28088__$1;
(statearr_28128_29365[(2)] = null);

(statearr_28128_29365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (6))){
var inst_28022 = (state_28088[(27)]);
var inst_28021 = cljs.core.deref(cs);
var inst_28022__$1 = cljs.core.keys(inst_28021);
var inst_28023 = cljs.core.count(inst_28022__$1);
var inst_28024 = cljs.core.reset_BANG_(dctr,inst_28023);
var inst_28029 = cljs.core.seq(inst_28022__$1);
var inst_28030 = inst_28029;
var inst_28031 = null;
var inst_28032 = (0);
var inst_28033 = (0);
var state_28088__$1 = (function (){var statearr_28129 = state_28088;
(statearr_28129[(28)] = inst_28024);

(statearr_28129[(27)] = inst_28022__$1);

(statearr_28129[(10)] = inst_28033);

(statearr_28129[(19)] = inst_28032);

(statearr_28129[(20)] = inst_28030);

(statearr_28129[(12)] = inst_28031);

return statearr_28129;
})();
var statearr_28130_29371 = state_28088__$1;
(statearr_28130_29371[(2)] = null);

(statearr_28130_29371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (28))){
var inst_28030 = (state_28088[(20)]);
var inst_28048 = (state_28088[(23)]);
var inst_28048__$1 = cljs.core.seq(inst_28030);
var state_28088__$1 = (function (){var statearr_28131 = state_28088;
(statearr_28131[(23)] = inst_28048__$1);

return statearr_28131;
})();
if(inst_28048__$1){
var statearr_28132_29372 = state_28088__$1;
(statearr_28132_29372[(1)] = (33));

} else {
var statearr_28133_29374 = state_28088__$1;
(statearr_28133_29374[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (25))){
var inst_28033 = (state_28088[(10)]);
var inst_28032 = (state_28088[(19)]);
var inst_28035 = (inst_28033 < inst_28032);
var inst_28036 = inst_28035;
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_28036)){
var statearr_28134_29375 = state_28088__$1;
(statearr_28134_29375[(1)] = (27));

} else {
var statearr_28135_29376 = state_28088__$1;
(statearr_28135_29376[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (34))){
var state_28088__$1 = state_28088;
var statearr_28136_29378 = state_28088__$1;
(statearr_28136_29378[(2)] = null);

(statearr_28136_29378[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (17))){
var state_28088__$1 = state_28088;
var statearr_28137_29382 = state_28088__$1;
(statearr_28137_29382[(2)] = null);

(statearr_28137_29382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (3))){
var inst_28086 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28088__$1,inst_28086);
} else {
if((state_val_28089 === (12))){
var inst_28017 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28138_29383 = state_28088__$1;
(statearr_28138_29383[(2)] = inst_28017);

(statearr_28138_29383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (2))){
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28088__$1,(4),ch);
} else {
if((state_val_28089 === (23))){
var state_28088__$1 = state_28088;
var statearr_28139_29384 = state_28088__$1;
(statearr_28139_29384[(2)] = null);

(statearr_28139_29384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (35))){
var inst_28070 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28140_29385 = state_28088__$1;
(statearr_28140_29385[(2)] = inst_28070);

(statearr_28140_29385[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (19))){
var inst_27989 = (state_28088[(7)]);
var inst_27993 = cljs.core.chunk_first(inst_27989);
var inst_27994 = cljs.core.chunk_rest(inst_27989);
var inst_27995 = cljs.core.count(inst_27993);
var inst_27967 = inst_27994;
var inst_27968 = inst_27993;
var inst_27969 = inst_27995;
var inst_27970 = (0);
var state_28088__$1 = (function (){var statearr_28141 = state_28088;
(statearr_28141[(13)] = inst_27969);

(statearr_28141[(14)] = inst_27970);

(statearr_28141[(15)] = inst_27968);

(statearr_28141[(16)] = inst_27967);

return statearr_28141;
})();
var statearr_28142_29386 = state_28088__$1;
(statearr_28142_29386[(2)] = null);

(statearr_28142_29386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (11))){
var inst_27989 = (state_28088[(7)]);
var inst_27967 = (state_28088[(16)]);
var inst_27989__$1 = cljs.core.seq(inst_27967);
var state_28088__$1 = (function (){var statearr_28143 = state_28088;
(statearr_28143[(7)] = inst_27989__$1);

return statearr_28143;
})();
if(inst_27989__$1){
var statearr_28144_29387 = state_28088__$1;
(statearr_28144_29387[(1)] = (16));

} else {
var statearr_28145_29388 = state_28088__$1;
(statearr_28145_29388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (9))){
var inst_28019 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28146_29389 = state_28088__$1;
(statearr_28146_29389[(2)] = inst_28019);

(statearr_28146_29389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (5))){
var inst_27965 = cljs.core.deref(cs);
var inst_27966 = cljs.core.seq(inst_27965);
var inst_27967 = inst_27966;
var inst_27968 = null;
var inst_27969 = (0);
var inst_27970 = (0);
var state_28088__$1 = (function (){var statearr_28147 = state_28088;
(statearr_28147[(13)] = inst_27969);

(statearr_28147[(14)] = inst_27970);

(statearr_28147[(15)] = inst_27968);

(statearr_28147[(16)] = inst_27967);

return statearr_28147;
})();
var statearr_28148_29390 = state_28088__$1;
(statearr_28148_29390[(2)] = null);

(statearr_28148_29390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (14))){
var state_28088__$1 = state_28088;
var statearr_28149_29391 = state_28088__$1;
(statearr_28149_29391[(2)] = null);

(statearr_28149_29391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (45))){
var inst_28078 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28150_29392 = state_28088__$1;
(statearr_28150_29392[(2)] = inst_28078);

(statearr_28150_29392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (26))){
var inst_28022 = (state_28088[(27)]);
var inst_28074 = (state_28088[(2)]);
var inst_28075 = cljs.core.seq(inst_28022);
var state_28088__$1 = (function (){var statearr_28151 = state_28088;
(statearr_28151[(29)] = inst_28074);

return statearr_28151;
})();
if(inst_28075){
var statearr_28152_29393 = state_28088__$1;
(statearr_28152_29393[(1)] = (42));

} else {
var statearr_28153_29394 = state_28088__$1;
(statearr_28153_29394[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (16))){
var inst_27989 = (state_28088[(7)]);
var inst_27991 = cljs.core.chunked_seq_QMARK_(inst_27989);
var state_28088__$1 = state_28088;
if(inst_27991){
var statearr_28154_29395 = state_28088__$1;
(statearr_28154_29395[(1)] = (19));

} else {
var statearr_28155_29396 = state_28088__$1;
(statearr_28155_29396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (38))){
var inst_28067 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28156_29400 = state_28088__$1;
(statearr_28156_29400[(2)] = inst_28067);

(statearr_28156_29400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (30))){
var state_28088__$1 = state_28088;
var statearr_28157_29401 = state_28088__$1;
(statearr_28157_29401[(2)] = null);

(statearr_28157_29401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (10))){
var inst_27970 = (state_28088[(14)]);
var inst_27968 = (state_28088[(15)]);
var inst_27978 = cljs.core._nth(inst_27968,inst_27970);
var inst_27979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27978,(0),null);
var inst_27980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27978,(1),null);
var state_28088__$1 = (function (){var statearr_28158 = state_28088;
(statearr_28158[(24)] = inst_27979);

return statearr_28158;
})();
if(cljs.core.truth_(inst_27980)){
var statearr_28159_29403 = state_28088__$1;
(statearr_28159_29403[(1)] = (13));

} else {
var statearr_28160_29404 = state_28088__$1;
(statearr_28160_29404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (18))){
var inst_28015 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28161_29405 = state_28088__$1;
(statearr_28161_29405[(2)] = inst_28015);

(statearr_28161_29405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (42))){
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28088__$1,(45),dchan);
} else {
if((state_val_28089 === (37))){
var inst_28057 = (state_28088[(22)]);
var inst_27958 = (state_28088[(11)]);
var inst_28048 = (state_28088[(23)]);
var inst_28057__$1 = cljs.core.first(inst_28048);
var inst_28058 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28057__$1,inst_27958,done);
var state_28088__$1 = (function (){var statearr_28162 = state_28088;
(statearr_28162[(22)] = inst_28057__$1);

return statearr_28162;
})();
if(cljs.core.truth_(inst_28058)){
var statearr_28163_29406 = state_28088__$1;
(statearr_28163_29406[(1)] = (39));

} else {
var statearr_28164_29407 = state_28088__$1;
(statearr_28164_29407[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (8))){
var inst_27969 = (state_28088[(13)]);
var inst_27970 = (state_28088[(14)]);
var inst_27972 = (inst_27970 < inst_27969);
var inst_27973 = inst_27972;
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_27973)){
var statearr_28165_29408 = state_28088__$1;
(statearr_28165_29408[(1)] = (10));

} else {
var statearr_28166_29409 = state_28088__$1;
(statearr_28166_29409[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27449__auto__ = null;
var cljs$core$async$mult_$_state_machine__27449__auto____0 = (function (){
var statearr_28167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28167[(0)] = cljs$core$async$mult_$_state_machine__27449__auto__);

(statearr_28167[(1)] = (1));

return statearr_28167;
});
var cljs$core$async$mult_$_state_machine__27449__auto____1 = (function (state_28088){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28088);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28168){var ex__27452__auto__ = e28168;
var statearr_28169_29410 = state_28088;
(statearr_28169_29410[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28088[(4)]))){
var statearr_28170_29411 = state_28088;
(statearr_28170_29411[(1)] = cljs.core.first((state_28088[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29412 = state_28088;
state_28088 = G__29412;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27449__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27449__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27449__auto____0;
cljs$core$async$mult_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27449__auto____1;
return cljs$core$async$mult_$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28171 = f__27485__auto__();
(statearr_28171[(6)] = c__27484__auto___29337);

return statearr_28171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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
var G__28173 = arguments.length;
switch (G__28173) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_29422 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29422(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29425 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29425(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29426 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29426(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29427 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29427(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29428 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29428(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29429 = arguments.length;
var i__4737__auto___29430 = (0);
while(true){
if((i__4737__auto___29430 < len__4736__auto___29429)){
args__4742__auto__.push((arguments[i__4737__auto___29430]));

var G__29431 = (i__4737__auto___29430 + (1));
i__4737__auto___29430 = G__29431;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28178){
var map__28179 = p__28178;
var map__28179__$1 = (((((!((map__28179 == null))))?(((((map__28179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28179):map__28179);
var opts = map__28179__$1;
var statearr_28181_29432 = state;
(statearr_28181_29432[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28182_29433 = state;
(statearr_28182_29433[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28183_29434 = state;
(statearr_28183_29434[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28174){
var G__28175 = cljs.core.first(seq28174);
var seq28174__$1 = cljs.core.next(seq28174);
var G__28176 = cljs.core.first(seq28174__$1);
var seq28174__$2 = cljs.core.next(seq28174__$1);
var G__28177 = cljs.core.first(seq28174__$2);
var seq28174__$3 = cljs.core.next(seq28174__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28175,G__28176,G__28177,seq28174__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28184 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28185){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28185 = meta28185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28186,meta28185__$1){
var self__ = this;
var _28186__$1 = this;
return (new cljs.core.async.t_cljs$core$async28184(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28185__$1));
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28186){
var self__ = this;
var _28186__$1 = this;
return self__.meta28185;
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28185","meta28185",-1854548780,null)], null);
}));

(cljs.core.async.t_cljs$core$async28184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28184");

(cljs.core.async.t_cljs$core$async28184.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28184.
 */
cljs.core.async.__GT_t_cljs$core$async28184 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28184(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28185){
return (new cljs.core.async.t_cljs$core$async28184(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28185));
});

}

return (new cljs.core.async.t_cljs$core$async28184(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27484__auto___29455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28288){
var state_val_28289 = (state_28288[(1)]);
if((state_val_28289 === (7))){
var inst_28203 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28290_29456 = state_28288__$1;
(statearr_28290_29456[(2)] = inst_28203);

(statearr_28290_29456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (20))){
var inst_28215 = (state_28288[(7)]);
var state_28288__$1 = state_28288;
var statearr_28291_29457 = state_28288__$1;
(statearr_28291_29457[(2)] = inst_28215);

(statearr_28291_29457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (27))){
var state_28288__$1 = state_28288;
var statearr_28292_29458 = state_28288__$1;
(statearr_28292_29458[(2)] = null);

(statearr_28292_29458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (1))){
var inst_28190 = (state_28288[(8)]);
var inst_28190__$1 = calc_state();
var inst_28192 = (inst_28190__$1 == null);
var inst_28193 = cljs.core.not(inst_28192);
var state_28288__$1 = (function (){var statearr_28293 = state_28288;
(statearr_28293[(8)] = inst_28190__$1);

return statearr_28293;
})();
if(inst_28193){
var statearr_28294_29459 = state_28288__$1;
(statearr_28294_29459[(1)] = (2));

} else {
var statearr_28295_29460 = state_28288__$1;
(statearr_28295_29460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (24))){
var inst_28239 = (state_28288[(9)]);
var inst_28248 = (state_28288[(10)]);
var inst_28262 = (state_28288[(11)]);
var inst_28262__$1 = (inst_28239.cljs$core$IFn$_invoke$arity$1 ? inst_28239.cljs$core$IFn$_invoke$arity$1(inst_28248) : inst_28239.call(null,inst_28248));
var state_28288__$1 = (function (){var statearr_28296 = state_28288;
(statearr_28296[(11)] = inst_28262__$1);

return statearr_28296;
})();
if(cljs.core.truth_(inst_28262__$1)){
var statearr_28297_29461 = state_28288__$1;
(statearr_28297_29461[(1)] = (29));

} else {
var statearr_28298_29462 = state_28288__$1;
(statearr_28298_29462[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (4))){
var inst_28206 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28206)){
var statearr_28299_29463 = state_28288__$1;
(statearr_28299_29463[(1)] = (8));

} else {
var statearr_28300_29464 = state_28288__$1;
(statearr_28300_29464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (15))){
var inst_28233 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28233)){
var statearr_28301_29465 = state_28288__$1;
(statearr_28301_29465[(1)] = (19));

} else {
var statearr_28302_29466 = state_28288__$1;
(statearr_28302_29466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (21))){
var inst_28238 = (state_28288[(12)]);
var inst_28238__$1 = (state_28288[(2)]);
var inst_28239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28238__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28238__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28238__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28288__$1 = (function (){var statearr_28303 = state_28288;
(statearr_28303[(12)] = inst_28238__$1);

(statearr_28303[(9)] = inst_28239);

(statearr_28303[(13)] = inst_28240);

return statearr_28303;
})();
return cljs.core.async.ioc_alts_BANG_(state_28288__$1,(22),inst_28241);
} else {
if((state_val_28289 === (31))){
var inst_28270 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28270)){
var statearr_28304_29467 = state_28288__$1;
(statearr_28304_29467[(1)] = (32));

} else {
var statearr_28305_29468 = state_28288__$1;
(statearr_28305_29468[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (32))){
var inst_28247 = (state_28288[(14)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28288__$1,(35),out,inst_28247);
} else {
if((state_val_28289 === (33))){
var inst_28238 = (state_28288[(12)]);
var inst_28215 = inst_28238;
var state_28288__$1 = (function (){var statearr_28306 = state_28288;
(statearr_28306[(7)] = inst_28215);

return statearr_28306;
})();
var statearr_28307_29484 = state_28288__$1;
(statearr_28307_29484[(2)] = null);

(statearr_28307_29484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (13))){
var inst_28215 = (state_28288[(7)]);
var inst_28222 = inst_28215.cljs$lang$protocol_mask$partition0$;
var inst_28223 = (inst_28222 & (64));
var inst_28224 = inst_28215.cljs$core$ISeq$;
var inst_28225 = (cljs.core.PROTOCOL_SENTINEL === inst_28224);
var inst_28226 = ((inst_28223) || (inst_28225));
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28226)){
var statearr_28308_29485 = state_28288__$1;
(statearr_28308_29485[(1)] = (16));

} else {
var statearr_28309_29486 = state_28288__$1;
(statearr_28309_29486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (22))){
var inst_28247 = (state_28288[(14)]);
var inst_28248 = (state_28288[(10)]);
var inst_28246 = (state_28288[(2)]);
var inst_28247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28246,(0),null);
var inst_28248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28246,(1),null);
var inst_28249 = (inst_28247__$1 == null);
var inst_28250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28248__$1,change);
var inst_28251 = ((inst_28249) || (inst_28250));
var state_28288__$1 = (function (){var statearr_28310 = state_28288;
(statearr_28310[(14)] = inst_28247__$1);

(statearr_28310[(10)] = inst_28248__$1);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28251)){
var statearr_28311_29487 = state_28288__$1;
(statearr_28311_29487[(1)] = (23));

} else {
var statearr_28312_29488 = state_28288__$1;
(statearr_28312_29488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (36))){
var inst_28238 = (state_28288[(12)]);
var inst_28215 = inst_28238;
var state_28288__$1 = (function (){var statearr_28313 = state_28288;
(statearr_28313[(7)] = inst_28215);

return statearr_28313;
})();
var statearr_28314_29489 = state_28288__$1;
(statearr_28314_29489[(2)] = null);

(statearr_28314_29489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (29))){
var inst_28262 = (state_28288[(11)]);
var state_28288__$1 = state_28288;
var statearr_28315_29490 = state_28288__$1;
(statearr_28315_29490[(2)] = inst_28262);

(statearr_28315_29490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (6))){
var state_28288__$1 = state_28288;
var statearr_28316_29491 = state_28288__$1;
(statearr_28316_29491[(2)] = false);

(statearr_28316_29491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (28))){
var inst_28258 = (state_28288[(2)]);
var inst_28259 = calc_state();
var inst_28215 = inst_28259;
var state_28288__$1 = (function (){var statearr_28317 = state_28288;
(statearr_28317[(15)] = inst_28258);

(statearr_28317[(7)] = inst_28215);

return statearr_28317;
})();
var statearr_28318_29492 = state_28288__$1;
(statearr_28318_29492[(2)] = null);

(statearr_28318_29492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (25))){
var inst_28284 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28319_29493 = state_28288__$1;
(statearr_28319_29493[(2)] = inst_28284);

(statearr_28319_29493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (34))){
var inst_28282 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28320_29500 = state_28288__$1;
(statearr_28320_29500[(2)] = inst_28282);

(statearr_28320_29500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (17))){
var state_28288__$1 = state_28288;
var statearr_28321_29501 = state_28288__$1;
(statearr_28321_29501[(2)] = false);

(statearr_28321_29501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (3))){
var state_28288__$1 = state_28288;
var statearr_28322_29502 = state_28288__$1;
(statearr_28322_29502[(2)] = false);

(statearr_28322_29502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (12))){
var inst_28286 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28288__$1,inst_28286);
} else {
if((state_val_28289 === (2))){
var inst_28190 = (state_28288[(8)]);
var inst_28195 = inst_28190.cljs$lang$protocol_mask$partition0$;
var inst_28196 = (inst_28195 & (64));
var inst_28197 = inst_28190.cljs$core$ISeq$;
var inst_28198 = (cljs.core.PROTOCOL_SENTINEL === inst_28197);
var inst_28199 = ((inst_28196) || (inst_28198));
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28199)){
var statearr_28323_29503 = state_28288__$1;
(statearr_28323_29503[(1)] = (5));

} else {
var statearr_28324_29504 = state_28288__$1;
(statearr_28324_29504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (23))){
var inst_28247 = (state_28288[(14)]);
var inst_28253 = (inst_28247 == null);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28253)){
var statearr_28325_29505 = state_28288__$1;
(statearr_28325_29505[(1)] = (26));

} else {
var statearr_28326_29506 = state_28288__$1;
(statearr_28326_29506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (35))){
var inst_28273 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28273)){
var statearr_28327_29507 = state_28288__$1;
(statearr_28327_29507[(1)] = (36));

} else {
var statearr_28328_29508 = state_28288__$1;
(statearr_28328_29508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (19))){
var inst_28215 = (state_28288[(7)]);
var inst_28235 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28215);
var state_28288__$1 = state_28288;
var statearr_28329_29509 = state_28288__$1;
(statearr_28329_29509[(2)] = inst_28235);

(statearr_28329_29509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (11))){
var inst_28215 = (state_28288[(7)]);
var inst_28219 = (inst_28215 == null);
var inst_28220 = cljs.core.not(inst_28219);
var state_28288__$1 = state_28288;
if(inst_28220){
var statearr_28330_29522 = state_28288__$1;
(statearr_28330_29522[(1)] = (13));

} else {
var statearr_28331_29523 = state_28288__$1;
(statearr_28331_29523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (9))){
var inst_28190 = (state_28288[(8)]);
var state_28288__$1 = state_28288;
var statearr_28332_29524 = state_28288__$1;
(statearr_28332_29524[(2)] = inst_28190);

(statearr_28332_29524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (5))){
var state_28288__$1 = state_28288;
var statearr_28333_29525 = state_28288__$1;
(statearr_28333_29525[(2)] = true);

(statearr_28333_29525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (14))){
var state_28288__$1 = state_28288;
var statearr_28334_29526 = state_28288__$1;
(statearr_28334_29526[(2)] = false);

(statearr_28334_29526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (26))){
var inst_28248 = (state_28288[(10)]);
var inst_28255 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28248);
var state_28288__$1 = state_28288;
var statearr_28335_29527 = state_28288__$1;
(statearr_28335_29527[(2)] = inst_28255);

(statearr_28335_29527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (16))){
var state_28288__$1 = state_28288;
var statearr_28336_29528 = state_28288__$1;
(statearr_28336_29528[(2)] = true);

(statearr_28336_29528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (38))){
var inst_28278 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28337_29529 = state_28288__$1;
(statearr_28337_29529[(2)] = inst_28278);

(statearr_28337_29529[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (30))){
var inst_28239 = (state_28288[(9)]);
var inst_28248 = (state_28288[(10)]);
var inst_28240 = (state_28288[(13)]);
var inst_28265 = cljs.core.empty_QMARK_(inst_28239);
var inst_28266 = (inst_28240.cljs$core$IFn$_invoke$arity$1 ? inst_28240.cljs$core$IFn$_invoke$arity$1(inst_28248) : inst_28240.call(null,inst_28248));
var inst_28267 = cljs.core.not(inst_28266);
var inst_28268 = ((inst_28265) && (inst_28267));
var state_28288__$1 = state_28288;
var statearr_28338_29530 = state_28288__$1;
(statearr_28338_29530[(2)] = inst_28268);

(statearr_28338_29530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (10))){
var inst_28190 = (state_28288[(8)]);
var inst_28211 = (state_28288[(2)]);
var inst_28212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28211,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28211,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28211,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28215 = inst_28190;
var state_28288__$1 = (function (){var statearr_28339 = state_28288;
(statearr_28339[(16)] = inst_28212);

(statearr_28339[(17)] = inst_28213);

(statearr_28339[(18)] = inst_28214);

(statearr_28339[(7)] = inst_28215);

return statearr_28339;
})();
var statearr_28340_29531 = state_28288__$1;
(statearr_28340_29531[(2)] = null);

(statearr_28340_29531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (18))){
var inst_28230 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28341_29532 = state_28288__$1;
(statearr_28341_29532[(2)] = inst_28230);

(statearr_28341_29532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (37))){
var state_28288__$1 = state_28288;
var statearr_28342_29533 = state_28288__$1;
(statearr_28342_29533[(2)] = null);

(statearr_28342_29533[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (8))){
var inst_28190 = (state_28288[(8)]);
var inst_28208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28190);
var state_28288__$1 = state_28288;
var statearr_28343_29534 = state_28288__$1;
(statearr_28343_29534[(2)] = inst_28208);

(statearr_28343_29534[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__27449__auto__ = null;
var cljs$core$async$mix_$_state_machine__27449__auto____0 = (function (){
var statearr_28344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28344[(0)] = cljs$core$async$mix_$_state_machine__27449__auto__);

(statearr_28344[(1)] = (1));

return statearr_28344;
});
var cljs$core$async$mix_$_state_machine__27449__auto____1 = (function (state_28288){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28288);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28345){var ex__27452__auto__ = e28345;
var statearr_28346_29535 = state_28288;
(statearr_28346_29535[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28288[(4)]))){
var statearr_28347_29536 = state_28288;
(statearr_28347_29536[(1)] = cljs.core.first((state_28288[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_28288;
state_28288 = G__29537;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27449__auto__ = function(state_28288){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27449__auto____1.call(this,state_28288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27449__auto____0;
cljs$core$async$mix_$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27449__auto____1;
return cljs$core$async$mix_$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28348 = f__27485__auto__();
(statearr_28348[(6)] = c__27484__auto___29455);

return statearr_28348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_29538 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29538(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29541 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29541(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29542 = (function() {
var G__29543 = null;
var G__29543__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__29543__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__29543 = function(p,v){
switch(arguments.length){
case 1:
return G__29543__1.call(this,p);
case 2:
return G__29543__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29543.cljs$core$IFn$_invoke$arity$1 = G__29543__1;
G__29543.cljs$core$IFn$_invoke$arity$2 = G__29543__2;
return G__29543;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28350 = arguments.length;
switch (G__28350) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29542(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29542(p,v);
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
var G__28353 = arguments.length;
switch (G__28353) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__28351_SHARP_){
if(cljs.core.truth_((p1__28351_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28351_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28351_SHARP_.call(null,topic)))){
return p1__28351_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28351_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28354 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28355){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28355 = meta28355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28356,meta28355__$1){
var self__ = this;
var _28356__$1 = this;
return (new cljs.core.async.t_cljs$core$async28354(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28355__$1));
}));

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28356){
var self__ = this;
var _28356__$1 = this;
return self__.meta28355;
}));

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28355","meta28355",-1663827707,null)], null);
}));

(cljs.core.async.t_cljs$core$async28354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28354");

(cljs.core.async.t_cljs$core$async28354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28354.
 */
cljs.core.async.__GT_t_cljs$core$async28354 = (function cljs$core$async$__GT_t_cljs$core$async28354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28355){
return (new cljs.core.async.t_cljs$core$async28354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28355));
});

}

return (new cljs.core.async.t_cljs$core$async28354(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27484__auto___29560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28428){
var state_val_28429 = (state_28428[(1)]);
if((state_val_28429 === (7))){
var inst_28424 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28430_29561 = state_28428__$1;
(statearr_28430_29561[(2)] = inst_28424);

(statearr_28430_29561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (20))){
var state_28428__$1 = state_28428;
var statearr_28431_29563 = state_28428__$1;
(statearr_28431_29563[(2)] = null);

(statearr_28431_29563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (1))){
var state_28428__$1 = state_28428;
var statearr_28432_29565 = state_28428__$1;
(statearr_28432_29565[(2)] = null);

(statearr_28432_29565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (24))){
var inst_28407 = (state_28428[(7)]);
var inst_28416 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28407);
var state_28428__$1 = state_28428;
var statearr_28433_29566 = state_28428__$1;
(statearr_28433_29566[(2)] = inst_28416);

(statearr_28433_29566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (4))){
var inst_28359 = (state_28428[(8)]);
var inst_28359__$1 = (state_28428[(2)]);
var inst_28360 = (inst_28359__$1 == null);
var state_28428__$1 = (function (){var statearr_28434 = state_28428;
(statearr_28434[(8)] = inst_28359__$1);

return statearr_28434;
})();
if(cljs.core.truth_(inst_28360)){
var statearr_28435_29567 = state_28428__$1;
(statearr_28435_29567[(1)] = (5));

} else {
var statearr_28436_29568 = state_28428__$1;
(statearr_28436_29568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (15))){
var inst_28401 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28437_29569 = state_28428__$1;
(statearr_28437_29569[(2)] = inst_28401);

(statearr_28437_29569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (21))){
var inst_28421 = (state_28428[(2)]);
var state_28428__$1 = (function (){var statearr_28438 = state_28428;
(statearr_28438[(9)] = inst_28421);

return statearr_28438;
})();
var statearr_28439_29570 = state_28428__$1;
(statearr_28439_29570[(2)] = null);

(statearr_28439_29570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (13))){
var inst_28383 = (state_28428[(10)]);
var inst_28385 = cljs.core.chunked_seq_QMARK_(inst_28383);
var state_28428__$1 = state_28428;
if(inst_28385){
var statearr_28440_29575 = state_28428__$1;
(statearr_28440_29575[(1)] = (16));

} else {
var statearr_28441_29576 = state_28428__$1;
(statearr_28441_29576[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (22))){
var inst_28413 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28413)){
var statearr_28442_29577 = state_28428__$1;
(statearr_28442_29577[(1)] = (23));

} else {
var statearr_28443_29578 = state_28428__$1;
(statearr_28443_29578[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (6))){
var inst_28409 = (state_28428[(11)]);
var inst_28407 = (state_28428[(7)]);
var inst_28359 = (state_28428[(8)]);
var inst_28407__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28359) : topic_fn.call(null,inst_28359));
var inst_28408 = cljs.core.deref(mults);
var inst_28409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28408,inst_28407__$1);
var state_28428__$1 = (function (){var statearr_28444 = state_28428;
(statearr_28444[(11)] = inst_28409__$1);

(statearr_28444[(7)] = inst_28407__$1);

return statearr_28444;
})();
if(cljs.core.truth_(inst_28409__$1)){
var statearr_28445_29579 = state_28428__$1;
(statearr_28445_29579[(1)] = (19));

} else {
var statearr_28446_29581 = state_28428__$1;
(statearr_28446_29581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (25))){
var inst_28418 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28447_29582 = state_28428__$1;
(statearr_28447_29582[(2)] = inst_28418);

(statearr_28447_29582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (17))){
var inst_28383 = (state_28428[(10)]);
var inst_28392 = cljs.core.first(inst_28383);
var inst_28393 = cljs.core.async.muxch_STAR_(inst_28392);
var inst_28394 = cljs.core.async.close_BANG_(inst_28393);
var inst_28395 = cljs.core.next(inst_28383);
var inst_28369 = inst_28395;
var inst_28370 = null;
var inst_28371 = (0);
var inst_28372 = (0);
var state_28428__$1 = (function (){var statearr_28448 = state_28428;
(statearr_28448[(12)] = inst_28372);

(statearr_28448[(13)] = inst_28371);

(statearr_28448[(14)] = inst_28370);

(statearr_28448[(15)] = inst_28394);

(statearr_28448[(16)] = inst_28369);

return statearr_28448;
})();
var statearr_28449_29585 = state_28428__$1;
(statearr_28449_29585[(2)] = null);

(statearr_28449_29585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (3))){
var inst_28426 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28428__$1,inst_28426);
} else {
if((state_val_28429 === (12))){
var inst_28403 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28450_29586 = state_28428__$1;
(statearr_28450_29586[(2)] = inst_28403);

(statearr_28450_29586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (2))){
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28428__$1,(4),ch);
} else {
if((state_val_28429 === (23))){
var state_28428__$1 = state_28428;
var statearr_28451_29587 = state_28428__$1;
(statearr_28451_29587[(2)] = null);

(statearr_28451_29587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (19))){
var inst_28409 = (state_28428[(11)]);
var inst_28359 = (state_28428[(8)]);
var inst_28411 = cljs.core.async.muxch_STAR_(inst_28409);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28428__$1,(22),inst_28411,inst_28359);
} else {
if((state_val_28429 === (11))){
var inst_28383 = (state_28428[(10)]);
var inst_28369 = (state_28428[(16)]);
var inst_28383__$1 = cljs.core.seq(inst_28369);
var state_28428__$1 = (function (){var statearr_28452 = state_28428;
(statearr_28452[(10)] = inst_28383__$1);

return statearr_28452;
})();
if(inst_28383__$1){
var statearr_28453_29588 = state_28428__$1;
(statearr_28453_29588[(1)] = (13));

} else {
var statearr_28454_29589 = state_28428__$1;
(statearr_28454_29589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (9))){
var inst_28405 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28455_29604 = state_28428__$1;
(statearr_28455_29604[(2)] = inst_28405);

(statearr_28455_29604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (5))){
var inst_28366 = cljs.core.deref(mults);
var inst_28367 = cljs.core.vals(inst_28366);
var inst_28368 = cljs.core.seq(inst_28367);
var inst_28369 = inst_28368;
var inst_28370 = null;
var inst_28371 = (0);
var inst_28372 = (0);
var state_28428__$1 = (function (){var statearr_28456 = state_28428;
(statearr_28456[(12)] = inst_28372);

(statearr_28456[(13)] = inst_28371);

(statearr_28456[(14)] = inst_28370);

(statearr_28456[(16)] = inst_28369);

return statearr_28456;
})();
var statearr_28457_29605 = state_28428__$1;
(statearr_28457_29605[(2)] = null);

(statearr_28457_29605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (14))){
var state_28428__$1 = state_28428;
var statearr_28461_29606 = state_28428__$1;
(statearr_28461_29606[(2)] = null);

(statearr_28461_29606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (16))){
var inst_28383 = (state_28428[(10)]);
var inst_28387 = cljs.core.chunk_first(inst_28383);
var inst_28388 = cljs.core.chunk_rest(inst_28383);
var inst_28389 = cljs.core.count(inst_28387);
var inst_28369 = inst_28388;
var inst_28370 = inst_28387;
var inst_28371 = inst_28389;
var inst_28372 = (0);
var state_28428__$1 = (function (){var statearr_28462 = state_28428;
(statearr_28462[(12)] = inst_28372);

(statearr_28462[(13)] = inst_28371);

(statearr_28462[(14)] = inst_28370);

(statearr_28462[(16)] = inst_28369);

return statearr_28462;
})();
var statearr_28463_29615 = state_28428__$1;
(statearr_28463_29615[(2)] = null);

(statearr_28463_29615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (10))){
var inst_28372 = (state_28428[(12)]);
var inst_28371 = (state_28428[(13)]);
var inst_28370 = (state_28428[(14)]);
var inst_28369 = (state_28428[(16)]);
var inst_28377 = cljs.core._nth(inst_28370,inst_28372);
var inst_28378 = cljs.core.async.muxch_STAR_(inst_28377);
var inst_28379 = cljs.core.async.close_BANG_(inst_28378);
var inst_28380 = (inst_28372 + (1));
var tmp28458 = inst_28371;
var tmp28459 = inst_28370;
var tmp28460 = inst_28369;
var inst_28369__$1 = tmp28460;
var inst_28370__$1 = tmp28459;
var inst_28371__$1 = tmp28458;
var inst_28372__$1 = inst_28380;
var state_28428__$1 = (function (){var statearr_28464 = state_28428;
(statearr_28464[(12)] = inst_28372__$1);

(statearr_28464[(13)] = inst_28371__$1);

(statearr_28464[(14)] = inst_28370__$1);

(statearr_28464[(17)] = inst_28379);

(statearr_28464[(16)] = inst_28369__$1);

return statearr_28464;
})();
var statearr_28465_29620 = state_28428__$1;
(statearr_28465_29620[(2)] = null);

(statearr_28465_29620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (18))){
var inst_28398 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28466_29621 = state_28428__$1;
(statearr_28466_29621[(2)] = inst_28398);

(statearr_28466_29621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (8))){
var inst_28372 = (state_28428[(12)]);
var inst_28371 = (state_28428[(13)]);
var inst_28374 = (inst_28372 < inst_28371);
var inst_28375 = inst_28374;
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28375)){
var statearr_28467_29622 = state_28428__$1;
(statearr_28467_29622[(1)] = (10));

} else {
var statearr_28468_29623 = state_28428__$1;
(statearr_28468_29623[(1)] = (11));

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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28469[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28469[(1)] = (1));

return statearr_28469;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28428){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28428);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28470){var ex__27452__auto__ = e28470;
var statearr_28471_29639 = state_28428;
(statearr_28471_29639[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28428[(4)]))){
var statearr_28472_29640 = state_28428;
(statearr_28472_29640[(1)] = cljs.core.first((state_28428[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29641 = state_28428;
state_28428 = G__29641;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28473 = f__27485__auto__();
(statearr_28473[(6)] = c__27484__auto___29560);

return statearr_28473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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
var G__28475 = arguments.length;
switch (G__28475) {
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
var G__28477 = arguments.length;
switch (G__28477) {
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
var G__28479 = arguments.length;
switch (G__28479) {
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
var c__27484__auto___29646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28522){
var state_val_28523 = (state_28522[(1)]);
if((state_val_28523 === (7))){
var state_28522__$1 = state_28522;
var statearr_28524_29647 = state_28522__$1;
(statearr_28524_29647[(2)] = null);

(statearr_28524_29647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (1))){
var state_28522__$1 = state_28522;
var statearr_28525_29648 = state_28522__$1;
(statearr_28525_29648[(2)] = null);

(statearr_28525_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (4))){
var inst_28483 = (state_28522[(7)]);
var inst_28482 = (state_28522[(8)]);
var inst_28485 = (inst_28483 < inst_28482);
var state_28522__$1 = state_28522;
if(cljs.core.truth_(inst_28485)){
var statearr_28526_29649 = state_28522__$1;
(statearr_28526_29649[(1)] = (6));

} else {
var statearr_28527_29650 = state_28522__$1;
(statearr_28527_29650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (15))){
var inst_28508 = (state_28522[(9)]);
var inst_28513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28508);
var state_28522__$1 = state_28522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28522__$1,(17),out,inst_28513);
} else {
if((state_val_28523 === (13))){
var inst_28508 = (state_28522[(9)]);
var inst_28508__$1 = (state_28522[(2)]);
var inst_28509 = cljs.core.some(cljs.core.nil_QMARK_,inst_28508__$1);
var state_28522__$1 = (function (){var statearr_28528 = state_28522;
(statearr_28528[(9)] = inst_28508__$1);

return statearr_28528;
})();
if(cljs.core.truth_(inst_28509)){
var statearr_28529_29651 = state_28522__$1;
(statearr_28529_29651[(1)] = (14));

} else {
var statearr_28530_29652 = state_28522__$1;
(statearr_28530_29652[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (6))){
var state_28522__$1 = state_28522;
var statearr_28531_29653 = state_28522__$1;
(statearr_28531_29653[(2)] = null);

(statearr_28531_29653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (17))){
var inst_28515 = (state_28522[(2)]);
var state_28522__$1 = (function (){var statearr_28533 = state_28522;
(statearr_28533[(10)] = inst_28515);

return statearr_28533;
})();
var statearr_28534_29655 = state_28522__$1;
(statearr_28534_29655[(2)] = null);

(statearr_28534_29655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (3))){
var inst_28520 = (state_28522[(2)]);
var state_28522__$1 = state_28522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28522__$1,inst_28520);
} else {
if((state_val_28523 === (12))){
var _ = (function (){var statearr_28535 = state_28522;
(statearr_28535[(4)] = cljs.core.rest((state_28522[(4)])));

return statearr_28535;
})();
var state_28522__$1 = state_28522;
var ex28532 = (state_28522__$1[(2)]);
var statearr_28536_29656 = state_28522__$1;
(statearr_28536_29656[(5)] = ex28532);


if((ex28532 instanceof Object)){
var statearr_28537_29657 = state_28522__$1;
(statearr_28537_29657[(1)] = (11));

(statearr_28537_29657[(5)] = null);

} else {
throw ex28532;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (2))){
var inst_28481 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28482 = cnt;
var inst_28483 = (0);
var state_28522__$1 = (function (){var statearr_28538 = state_28522;
(statearr_28538[(7)] = inst_28483);

(statearr_28538[(8)] = inst_28482);

(statearr_28538[(11)] = inst_28481);

return statearr_28538;
})();
var statearr_28539_29658 = state_28522__$1;
(statearr_28539_29658[(2)] = null);

(statearr_28539_29658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (11))){
var inst_28487 = (state_28522[(2)]);
var inst_28488 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28522__$1 = (function (){var statearr_28540 = state_28522;
(statearr_28540[(12)] = inst_28487);

return statearr_28540;
})();
var statearr_28541_29659 = state_28522__$1;
(statearr_28541_29659[(2)] = inst_28488);

(statearr_28541_29659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (9))){
var inst_28483 = (state_28522[(7)]);
var _ = (function (){var statearr_28542 = state_28522;
(statearr_28542[(4)] = cljs.core.cons((12),(state_28522[(4)])));

return statearr_28542;
})();
var inst_28494 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28483) : chs__$1.call(null,inst_28483));
var inst_28495 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28483) : done.call(null,inst_28483));
var inst_28496 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28494,inst_28495);
var ___$1 = (function (){var statearr_28543 = state_28522;
(statearr_28543[(4)] = cljs.core.rest((state_28522[(4)])));

return statearr_28543;
})();
var state_28522__$1 = state_28522;
var statearr_28544_29660 = state_28522__$1;
(statearr_28544_29660[(2)] = inst_28496);

(statearr_28544_29660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (5))){
var inst_28506 = (state_28522[(2)]);
var state_28522__$1 = (function (){var statearr_28545 = state_28522;
(statearr_28545[(13)] = inst_28506);

return statearr_28545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28522__$1,(13),dchan);
} else {
if((state_val_28523 === (14))){
var inst_28511 = cljs.core.async.close_BANG_(out);
var state_28522__$1 = state_28522;
var statearr_28546_29661 = state_28522__$1;
(statearr_28546_29661[(2)] = inst_28511);

(statearr_28546_29661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (16))){
var inst_28518 = (state_28522[(2)]);
var state_28522__$1 = state_28522;
var statearr_28547_29662 = state_28522__$1;
(statearr_28547_29662[(2)] = inst_28518);

(statearr_28547_29662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (10))){
var inst_28483 = (state_28522[(7)]);
var inst_28499 = (state_28522[(2)]);
var inst_28500 = (inst_28483 + (1));
var inst_28483__$1 = inst_28500;
var state_28522__$1 = (function (){var statearr_28548 = state_28522;
(statearr_28548[(14)] = inst_28499);

(statearr_28548[(7)] = inst_28483__$1);

return statearr_28548;
})();
var statearr_28549_29673 = state_28522__$1;
(statearr_28549_29673[(2)] = null);

(statearr_28549_29673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (8))){
var inst_28504 = (state_28522[(2)]);
var state_28522__$1 = state_28522;
var statearr_28550_29699 = state_28522__$1;
(statearr_28550_29699[(2)] = inst_28504);

(statearr_28550_29699[(1)] = (5));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28551[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28551[(1)] = (1));

return statearr_28551;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28522){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28522);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28552){var ex__27452__auto__ = e28552;
var statearr_28553_29700 = state_28522;
(statearr_28553_29700[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28522[(4)]))){
var statearr_28554_29701 = state_28522;
(statearr_28554_29701[(1)] = cljs.core.first((state_28522[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29702 = state_28522;
state_28522 = G__29702;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28555 = f__27485__auto__();
(statearr_28555[(6)] = c__27484__auto___29646);

return statearr_28555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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
var G__28558 = arguments.length;
switch (G__28558) {
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
var c__27484__auto___29737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28590){
var state_val_28591 = (state_28590[(1)]);
if((state_val_28591 === (7))){
var inst_28569 = (state_28590[(7)]);
var inst_28570 = (state_28590[(8)]);
var inst_28569__$1 = (state_28590[(2)]);
var inst_28570__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28569__$1,(0),null);
var inst_28571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28569__$1,(1),null);
var inst_28572 = (inst_28570__$1 == null);
var state_28590__$1 = (function (){var statearr_28592 = state_28590;
(statearr_28592[(7)] = inst_28569__$1);

(statearr_28592[(8)] = inst_28570__$1);

(statearr_28592[(9)] = inst_28571);

return statearr_28592;
})();
if(cljs.core.truth_(inst_28572)){
var statearr_28593_29751 = state_28590__$1;
(statearr_28593_29751[(1)] = (8));

} else {
var statearr_28594_29752 = state_28590__$1;
(statearr_28594_29752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (1))){
var inst_28559 = cljs.core.vec(chs);
var inst_28560 = inst_28559;
var state_28590__$1 = (function (){var statearr_28595 = state_28590;
(statearr_28595[(10)] = inst_28560);

return statearr_28595;
})();
var statearr_28596_29753 = state_28590__$1;
(statearr_28596_29753[(2)] = null);

(statearr_28596_29753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (4))){
var inst_28560 = (state_28590[(10)]);
var state_28590__$1 = state_28590;
return cljs.core.async.ioc_alts_BANG_(state_28590__$1,(7),inst_28560);
} else {
if((state_val_28591 === (6))){
var inst_28586 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28597_29762 = state_28590__$1;
(statearr_28597_29762[(2)] = inst_28586);

(statearr_28597_29762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (3))){
var inst_28588 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28590__$1,inst_28588);
} else {
if((state_val_28591 === (2))){
var inst_28560 = (state_28590[(10)]);
var inst_28562 = cljs.core.count(inst_28560);
var inst_28563 = (inst_28562 > (0));
var state_28590__$1 = state_28590;
if(cljs.core.truth_(inst_28563)){
var statearr_28599_29763 = state_28590__$1;
(statearr_28599_29763[(1)] = (4));

} else {
var statearr_28600_29764 = state_28590__$1;
(statearr_28600_29764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (11))){
var inst_28560 = (state_28590[(10)]);
var inst_28579 = (state_28590[(2)]);
var tmp28598 = inst_28560;
var inst_28560__$1 = tmp28598;
var state_28590__$1 = (function (){var statearr_28601 = state_28590;
(statearr_28601[(10)] = inst_28560__$1);

(statearr_28601[(11)] = inst_28579);

return statearr_28601;
})();
var statearr_28602_29765 = state_28590__$1;
(statearr_28602_29765[(2)] = null);

(statearr_28602_29765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (9))){
var inst_28570 = (state_28590[(8)]);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28590__$1,(11),out,inst_28570);
} else {
if((state_val_28591 === (5))){
var inst_28584 = cljs.core.async.close_BANG_(out);
var state_28590__$1 = state_28590;
var statearr_28603_29766 = state_28590__$1;
(statearr_28603_29766[(2)] = inst_28584);

(statearr_28603_29766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (10))){
var inst_28582 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28604_29767 = state_28590__$1;
(statearr_28604_29767[(2)] = inst_28582);

(statearr_28604_29767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (8))){
var inst_28569 = (state_28590[(7)]);
var inst_28560 = (state_28590[(10)]);
var inst_28570 = (state_28590[(8)]);
var inst_28571 = (state_28590[(9)]);
var inst_28574 = (function (){var cs = inst_28560;
var vec__28565 = inst_28569;
var v = inst_28570;
var c = inst_28571;
return (function (p1__28556_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28556_SHARP_);
});
})();
var inst_28575 = cljs.core.filterv(inst_28574,inst_28560);
var inst_28560__$1 = inst_28575;
var state_28590__$1 = (function (){var statearr_28605 = state_28590;
(statearr_28605[(10)] = inst_28560__$1);

return statearr_28605;
})();
var statearr_28606_29774 = state_28590__$1;
(statearr_28606_29774[(2)] = null);

(statearr_28606_29774[(1)] = (2));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28607[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28607[(1)] = (1));

return statearr_28607;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28590){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28590);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28608){var ex__27452__auto__ = e28608;
var statearr_28609_29775 = state_28590;
(statearr_28609_29775[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28590[(4)]))){
var statearr_28610_29776 = state_28590;
(statearr_28610_29776[(1)] = cljs.core.first((state_28590[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29777 = state_28590;
state_28590 = G__29777;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28611 = f__27485__auto__();
(statearr_28611[(6)] = c__27484__auto___29737);

return statearr_28611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
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
var G__28613 = arguments.length;
switch (G__28613) {
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
var c__27484__auto___29779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28637){
var state_val_28638 = (state_28637[(1)]);
if((state_val_28638 === (7))){
var inst_28619 = (state_28637[(7)]);
var inst_28619__$1 = (state_28637[(2)]);
var inst_28620 = (inst_28619__$1 == null);
var inst_28621 = cljs.core.not(inst_28620);
var state_28637__$1 = (function (){var statearr_28639 = state_28637;
(statearr_28639[(7)] = inst_28619__$1);

return statearr_28639;
})();
if(inst_28621){
var statearr_28640_29780 = state_28637__$1;
(statearr_28640_29780[(1)] = (8));

} else {
var statearr_28641_29781 = state_28637__$1;
(statearr_28641_29781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (1))){
var inst_28614 = (0);
var state_28637__$1 = (function (){var statearr_28642 = state_28637;
(statearr_28642[(8)] = inst_28614);

return statearr_28642;
})();
var statearr_28643_29783 = state_28637__$1;
(statearr_28643_29783[(2)] = null);

(statearr_28643_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (4))){
var state_28637__$1 = state_28637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28637__$1,(7),ch);
} else {
if((state_val_28638 === (6))){
var inst_28632 = (state_28637[(2)]);
var state_28637__$1 = state_28637;
var statearr_28644_29784 = state_28637__$1;
(statearr_28644_29784[(2)] = inst_28632);

(statearr_28644_29784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (3))){
var inst_28634 = (state_28637[(2)]);
var inst_28635 = cljs.core.async.close_BANG_(out);
var state_28637__$1 = (function (){var statearr_28645 = state_28637;
(statearr_28645[(9)] = inst_28634);

return statearr_28645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28637__$1,inst_28635);
} else {
if((state_val_28638 === (2))){
var inst_28614 = (state_28637[(8)]);
var inst_28616 = (inst_28614 < n);
var state_28637__$1 = state_28637;
if(cljs.core.truth_(inst_28616)){
var statearr_28646_29809 = state_28637__$1;
(statearr_28646_29809[(1)] = (4));

} else {
var statearr_28647_29810 = state_28637__$1;
(statearr_28647_29810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (11))){
var inst_28614 = (state_28637[(8)]);
var inst_28624 = (state_28637[(2)]);
var inst_28625 = (inst_28614 + (1));
var inst_28614__$1 = inst_28625;
var state_28637__$1 = (function (){var statearr_28648 = state_28637;
(statearr_28648[(8)] = inst_28614__$1);

(statearr_28648[(10)] = inst_28624);

return statearr_28648;
})();
var statearr_28649_29818 = state_28637__$1;
(statearr_28649_29818[(2)] = null);

(statearr_28649_29818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (9))){
var state_28637__$1 = state_28637;
var statearr_28650_29823 = state_28637__$1;
(statearr_28650_29823[(2)] = null);

(statearr_28650_29823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (5))){
var state_28637__$1 = state_28637;
var statearr_28651_29826 = state_28637__$1;
(statearr_28651_29826[(2)] = null);

(statearr_28651_29826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (10))){
var inst_28629 = (state_28637[(2)]);
var state_28637__$1 = state_28637;
var statearr_28652_29835 = state_28637__$1;
(statearr_28652_29835[(2)] = inst_28629);

(statearr_28652_29835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (8))){
var inst_28619 = (state_28637[(7)]);
var state_28637__$1 = state_28637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28637__$1,(11),out,inst_28619);
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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28653[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28653[(1)] = (1));

return statearr_28653;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28637){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28637);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28654){var ex__27452__auto__ = e28654;
var statearr_28655_29840 = state_28637;
(statearr_28655_29840[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28637[(4)]))){
var statearr_28656_29841 = state_28637;
(statearr_28656_29841[(1)] = cljs.core.first((state_28637[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29842 = state_28637;
state_28637 = G__29842;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28657 = f__27485__auto__();
(statearr_28657[(6)] = c__27484__auto___29779);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28659 = (function (f,ch,meta28660){
this.f = f;
this.ch = ch;
this.meta28660 = meta28660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28661,meta28660__$1){
var self__ = this;
var _28661__$1 = this;
return (new cljs.core.async.t_cljs$core$async28659(self__.f,self__.ch,meta28660__$1));
}));

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28661){
var self__ = this;
var _28661__$1 = this;
return self__.meta28660;
}));

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28662 = (function (f,ch,meta28660,_,fn1,meta28663){
this.f = f;
this.ch = ch;
this.meta28660 = meta28660;
this._ = _;
this.fn1 = fn1;
this.meta28663 = meta28663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28664,meta28663__$1){
var self__ = this;
var _28664__$1 = this;
return (new cljs.core.async.t_cljs$core$async28662(self__.f,self__.ch,self__.meta28660,self__._,self__.fn1,meta28663__$1));
}));

(cljs.core.async.t_cljs$core$async28662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28664){
var self__ = this;
var _28664__$1 = this;
return self__.meta28663;
}));

(cljs.core.async.t_cljs$core$async28662.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__28658_SHARP_){
var G__28665 = (((p1__28658_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28658_SHARP_) : self__.f.call(null,p1__28658_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28665) : f1.call(null,G__28665));
});
}));

(cljs.core.async.t_cljs$core$async28662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28660","meta28660",551608084,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28659","cljs.core.async/t_cljs$core$async28659",-3150171,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28663","meta28663",1180032944,null)], null);
}));

(cljs.core.async.t_cljs$core$async28662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28662");

(cljs.core.async.t_cljs$core$async28662.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28662.
 */
cljs.core.async.__GT_t_cljs$core$async28662 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28662(f__$1,ch__$1,meta28660__$1,___$2,fn1__$1,meta28663){
return (new cljs.core.async.t_cljs$core$async28662(f__$1,ch__$1,meta28660__$1,___$2,fn1__$1,meta28663));
});

}

return (new cljs.core.async.t_cljs$core$async28662(self__.f,self__.ch,self__.meta28660,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28666 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28666) : self__.f.call(null,G__28666));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28660","meta28660",551608084,null)], null);
}));

(cljs.core.async.t_cljs$core$async28659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28659");

(cljs.core.async.t_cljs$core$async28659.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28659.
 */
cljs.core.async.__GT_t_cljs$core$async28659 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28659(f__$1,ch__$1,meta28660){
return (new cljs.core.async.t_cljs$core$async28659(f__$1,ch__$1,meta28660));
});

}

return (new cljs.core.async.t_cljs$core$async28659(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28667 = (function (f,ch,meta28668){
this.f = f;
this.ch = ch;
this.meta28668 = meta28668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28669,meta28668__$1){
var self__ = this;
var _28669__$1 = this;
return (new cljs.core.async.t_cljs$core$async28667(self__.f,self__.ch,meta28668__$1));
}));

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28669){
var self__ = this;
var _28669__$1 = this;
return self__.meta28668;
}));

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async28667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28668","meta28668",-1275035100,null)], null);
}));

(cljs.core.async.t_cljs$core$async28667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28667");

(cljs.core.async.t_cljs$core$async28667.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28667.
 */
cljs.core.async.__GT_t_cljs$core$async28667 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28667(f__$1,ch__$1,meta28668){
return (new cljs.core.async.t_cljs$core$async28667(f__$1,ch__$1,meta28668));
});

}

return (new cljs.core.async.t_cljs$core$async28667(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28670 = (function (p,ch,meta28671){
this.p = p;
this.ch = ch;
this.meta28671 = meta28671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28672,meta28671__$1){
var self__ = this;
var _28672__$1 = this;
return (new cljs.core.async.t_cljs$core$async28670(self__.p,self__.ch,meta28671__$1));
}));

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28672){
var self__ = this;
var _28672__$1 = this;
return self__.meta28671;
}));

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28671","meta28671",-1871706037,null)], null);
}));

(cljs.core.async.t_cljs$core$async28670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28670");

(cljs.core.async.t_cljs$core$async28670.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28670.
 */
cljs.core.async.__GT_t_cljs$core$async28670 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28670(p__$1,ch__$1,meta28671){
return (new cljs.core.async.t_cljs$core$async28670(p__$1,ch__$1,meta28671));
});

}

return (new cljs.core.async.t_cljs$core$async28670(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28674 = arguments.length;
switch (G__28674) {
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
var c__27484__auto___29858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28695){
var state_val_28696 = (state_28695[(1)]);
if((state_val_28696 === (7))){
var inst_28691 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28697_29859 = state_28695__$1;
(statearr_28697_29859[(2)] = inst_28691);

(statearr_28697_29859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (1))){
var state_28695__$1 = state_28695;
var statearr_28698_29861 = state_28695__$1;
(statearr_28698_29861[(2)] = null);

(statearr_28698_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (4))){
var inst_28677 = (state_28695[(7)]);
var inst_28677__$1 = (state_28695[(2)]);
var inst_28678 = (inst_28677__$1 == null);
var state_28695__$1 = (function (){var statearr_28699 = state_28695;
(statearr_28699[(7)] = inst_28677__$1);

return statearr_28699;
})();
if(cljs.core.truth_(inst_28678)){
var statearr_28700_29862 = state_28695__$1;
(statearr_28700_29862[(1)] = (5));

} else {
var statearr_28701_29863 = state_28695__$1;
(statearr_28701_29863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (6))){
var inst_28677 = (state_28695[(7)]);
var inst_28682 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28677) : p.call(null,inst_28677));
var state_28695__$1 = state_28695;
if(cljs.core.truth_(inst_28682)){
var statearr_28702_29864 = state_28695__$1;
(statearr_28702_29864[(1)] = (8));

} else {
var statearr_28703_29865 = state_28695__$1;
(statearr_28703_29865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (3))){
var inst_28693 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28695__$1,inst_28693);
} else {
if((state_val_28696 === (2))){
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28695__$1,(4),ch);
} else {
if((state_val_28696 === (11))){
var inst_28685 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28704_29866 = state_28695__$1;
(statearr_28704_29866[(2)] = inst_28685);

(statearr_28704_29866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (9))){
var state_28695__$1 = state_28695;
var statearr_28705_29867 = state_28695__$1;
(statearr_28705_29867[(2)] = null);

(statearr_28705_29867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (5))){
var inst_28680 = cljs.core.async.close_BANG_(out);
var state_28695__$1 = state_28695;
var statearr_28706_29868 = state_28695__$1;
(statearr_28706_29868[(2)] = inst_28680);

(statearr_28706_29868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (10))){
var inst_28688 = (state_28695[(2)]);
var state_28695__$1 = (function (){var statearr_28707 = state_28695;
(statearr_28707[(8)] = inst_28688);

return statearr_28707;
})();
var statearr_28708_29869 = state_28695__$1;
(statearr_28708_29869[(2)] = null);

(statearr_28708_29869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (8))){
var inst_28677 = (state_28695[(7)]);
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28695__$1,(11),out,inst_28677);
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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28695){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28695);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28710){var ex__27452__auto__ = e28710;
var statearr_28711_29870 = state_28695;
(statearr_28711_29870[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28695[(4)]))){
var statearr_28712_29871 = state_28695;
(statearr_28712_29871[(1)] = cljs.core.first((state_28695[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29872 = state_28695;
state_28695 = G__29872;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28713 = f__27485__auto__();
(statearr_28713[(6)] = c__27484__auto___29858);

return statearr_28713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28715 = arguments.length;
switch (G__28715) {
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
var c__27484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28777){
var state_val_28778 = (state_28777[(1)]);
if((state_val_28778 === (7))){
var inst_28773 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28779_29874 = state_28777__$1;
(statearr_28779_29874[(2)] = inst_28773);

(statearr_28779_29874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (20))){
var inst_28743 = (state_28777[(7)]);
var inst_28754 = (state_28777[(2)]);
var inst_28755 = cljs.core.next(inst_28743);
var inst_28729 = inst_28755;
var inst_28730 = null;
var inst_28731 = (0);
var inst_28732 = (0);
var state_28777__$1 = (function (){var statearr_28780 = state_28777;
(statearr_28780[(8)] = inst_28729);

(statearr_28780[(9)] = inst_28754);

(statearr_28780[(10)] = inst_28731);

(statearr_28780[(11)] = inst_28732);

(statearr_28780[(12)] = inst_28730);

return statearr_28780;
})();
var statearr_28781_29875 = state_28777__$1;
(statearr_28781_29875[(2)] = null);

(statearr_28781_29875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (1))){
var state_28777__$1 = state_28777;
var statearr_28782_29876 = state_28777__$1;
(statearr_28782_29876[(2)] = null);

(statearr_28782_29876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (4))){
var inst_28718 = (state_28777[(13)]);
var inst_28718__$1 = (state_28777[(2)]);
var inst_28719 = (inst_28718__$1 == null);
var state_28777__$1 = (function (){var statearr_28783 = state_28777;
(statearr_28783[(13)] = inst_28718__$1);

return statearr_28783;
})();
if(cljs.core.truth_(inst_28719)){
var statearr_28784_29877 = state_28777__$1;
(statearr_28784_29877[(1)] = (5));

} else {
var statearr_28785_29878 = state_28777__$1;
(statearr_28785_29878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (15))){
var state_28777__$1 = state_28777;
var statearr_28789_29879 = state_28777__$1;
(statearr_28789_29879[(2)] = null);

(statearr_28789_29879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (21))){
var state_28777__$1 = state_28777;
var statearr_28790_29880 = state_28777__$1;
(statearr_28790_29880[(2)] = null);

(statearr_28790_29880[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (13))){
var inst_28729 = (state_28777[(8)]);
var inst_28731 = (state_28777[(10)]);
var inst_28732 = (state_28777[(11)]);
var inst_28730 = (state_28777[(12)]);
var inst_28739 = (state_28777[(2)]);
var inst_28740 = (inst_28732 + (1));
var tmp28786 = inst_28729;
var tmp28787 = inst_28731;
var tmp28788 = inst_28730;
var inst_28729__$1 = tmp28786;
var inst_28730__$1 = tmp28788;
var inst_28731__$1 = tmp28787;
var inst_28732__$1 = inst_28740;
var state_28777__$1 = (function (){var statearr_28791 = state_28777;
(statearr_28791[(14)] = inst_28739);

(statearr_28791[(8)] = inst_28729__$1);

(statearr_28791[(10)] = inst_28731__$1);

(statearr_28791[(11)] = inst_28732__$1);

(statearr_28791[(12)] = inst_28730__$1);

return statearr_28791;
})();
var statearr_28792_29883 = state_28777__$1;
(statearr_28792_29883[(2)] = null);

(statearr_28792_29883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (22))){
var state_28777__$1 = state_28777;
var statearr_28793_29884 = state_28777__$1;
(statearr_28793_29884[(2)] = null);

(statearr_28793_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (6))){
var inst_28718 = (state_28777[(13)]);
var inst_28727 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28718) : f.call(null,inst_28718));
var inst_28728 = cljs.core.seq(inst_28727);
var inst_28729 = inst_28728;
var inst_28730 = null;
var inst_28731 = (0);
var inst_28732 = (0);
var state_28777__$1 = (function (){var statearr_28794 = state_28777;
(statearr_28794[(8)] = inst_28729);

(statearr_28794[(10)] = inst_28731);

(statearr_28794[(11)] = inst_28732);

(statearr_28794[(12)] = inst_28730);

return statearr_28794;
})();
var statearr_28795_29886 = state_28777__$1;
(statearr_28795_29886[(2)] = null);

(statearr_28795_29886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (17))){
var inst_28743 = (state_28777[(7)]);
var inst_28747 = cljs.core.chunk_first(inst_28743);
var inst_28748 = cljs.core.chunk_rest(inst_28743);
var inst_28749 = cljs.core.count(inst_28747);
var inst_28729 = inst_28748;
var inst_28730 = inst_28747;
var inst_28731 = inst_28749;
var inst_28732 = (0);
var state_28777__$1 = (function (){var statearr_28796 = state_28777;
(statearr_28796[(8)] = inst_28729);

(statearr_28796[(10)] = inst_28731);

(statearr_28796[(11)] = inst_28732);

(statearr_28796[(12)] = inst_28730);

return statearr_28796;
})();
var statearr_28797_29887 = state_28777__$1;
(statearr_28797_29887[(2)] = null);

(statearr_28797_29887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (3))){
var inst_28775 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28777__$1,inst_28775);
} else {
if((state_val_28778 === (12))){
var inst_28763 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28798_29888 = state_28777__$1;
(statearr_28798_29888[(2)] = inst_28763);

(statearr_28798_29888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (2))){
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28777__$1,(4),in$);
} else {
if((state_val_28778 === (23))){
var inst_28771 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28799_29889 = state_28777__$1;
(statearr_28799_29889[(2)] = inst_28771);

(statearr_28799_29889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (19))){
var inst_28758 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28800_29890 = state_28777__$1;
(statearr_28800_29890[(2)] = inst_28758);

(statearr_28800_29890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (11))){
var inst_28729 = (state_28777[(8)]);
var inst_28743 = (state_28777[(7)]);
var inst_28743__$1 = cljs.core.seq(inst_28729);
var state_28777__$1 = (function (){var statearr_28801 = state_28777;
(statearr_28801[(7)] = inst_28743__$1);

return statearr_28801;
})();
if(inst_28743__$1){
var statearr_28802_29891 = state_28777__$1;
(statearr_28802_29891[(1)] = (14));

} else {
var statearr_28803_29892 = state_28777__$1;
(statearr_28803_29892[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (9))){
var inst_28765 = (state_28777[(2)]);
var inst_28766 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28777__$1 = (function (){var statearr_28804 = state_28777;
(statearr_28804[(15)] = inst_28765);

return statearr_28804;
})();
if(cljs.core.truth_(inst_28766)){
var statearr_28805_29893 = state_28777__$1;
(statearr_28805_29893[(1)] = (21));

} else {
var statearr_28806_29894 = state_28777__$1;
(statearr_28806_29894[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (5))){
var inst_28721 = cljs.core.async.close_BANG_(out);
var state_28777__$1 = state_28777;
var statearr_28807_29895 = state_28777__$1;
(statearr_28807_29895[(2)] = inst_28721);

(statearr_28807_29895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (14))){
var inst_28743 = (state_28777[(7)]);
var inst_28745 = cljs.core.chunked_seq_QMARK_(inst_28743);
var state_28777__$1 = state_28777;
if(inst_28745){
var statearr_28808_29896 = state_28777__$1;
(statearr_28808_29896[(1)] = (17));

} else {
var statearr_28809_29935 = state_28777__$1;
(statearr_28809_29935[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (16))){
var inst_28761 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28810_29936 = state_28777__$1;
(statearr_28810_29936[(2)] = inst_28761);

(statearr_28810_29936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (10))){
var inst_28732 = (state_28777[(11)]);
var inst_28730 = (state_28777[(12)]);
var inst_28737 = cljs.core._nth(inst_28730,inst_28732);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28777__$1,(13),out,inst_28737);
} else {
if((state_val_28778 === (18))){
var inst_28743 = (state_28777[(7)]);
var inst_28752 = cljs.core.first(inst_28743);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28777__$1,(20),out,inst_28752);
} else {
if((state_val_28778 === (8))){
var inst_28731 = (state_28777[(10)]);
var inst_28732 = (state_28777[(11)]);
var inst_28734 = (inst_28732 < inst_28731);
var inst_28735 = inst_28734;
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28735)){
var statearr_28811_29937 = state_28777__$1;
(statearr_28811_29937[(1)] = (10));

} else {
var statearr_28812_29938 = state_28777__$1;
(statearr_28812_29938[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27449__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27449__auto____0 = (function (){
var statearr_28813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27449__auto__);

(statearr_28813[(1)] = (1));

return statearr_28813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27449__auto____1 = (function (state_28777){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28777);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28814){var ex__27452__auto__ = e28814;
var statearr_28815_29939 = state_28777;
(statearr_28815_29939[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28777[(4)]))){
var statearr_28816_29940 = state_28777;
(statearr_28816_29940[(1)] = cljs.core.first((state_28777[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29941 = state_28777;
state_28777 = G__29941;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27449__auto__ = function(state_28777){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27449__auto____1.call(this,state_28777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27449__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27449__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28817 = f__27485__auto__();
(statearr_28817[(6)] = c__27484__auto__);

return statearr_28817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));

return c__27484__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28819 = arguments.length;
switch (G__28819) {
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
var G__28821 = arguments.length;
switch (G__28821) {
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
var G__28823 = arguments.length;
switch (G__28823) {
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
var c__27484__auto___29993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28847){
var state_val_28848 = (state_28847[(1)]);
if((state_val_28848 === (7))){
var inst_28842 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28849_30014 = state_28847__$1;
(statearr_28849_30014[(2)] = inst_28842);

(statearr_28849_30014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (1))){
var inst_28824 = null;
var state_28847__$1 = (function (){var statearr_28850 = state_28847;
(statearr_28850[(7)] = inst_28824);

return statearr_28850;
})();
var statearr_28851_30015 = state_28847__$1;
(statearr_28851_30015[(2)] = null);

(statearr_28851_30015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (4))){
var inst_28827 = (state_28847[(8)]);
var inst_28827__$1 = (state_28847[(2)]);
var inst_28828 = (inst_28827__$1 == null);
var inst_28829 = cljs.core.not(inst_28828);
var state_28847__$1 = (function (){var statearr_28852 = state_28847;
(statearr_28852[(8)] = inst_28827__$1);

return statearr_28852;
})();
if(inst_28829){
var statearr_28853_30020 = state_28847__$1;
(statearr_28853_30020[(1)] = (5));

} else {
var statearr_28854_30021 = state_28847__$1;
(statearr_28854_30021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (6))){
var state_28847__$1 = state_28847;
var statearr_28855_30022 = state_28847__$1;
(statearr_28855_30022[(2)] = null);

(statearr_28855_30022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (3))){
var inst_28844 = (state_28847[(2)]);
var inst_28845 = cljs.core.async.close_BANG_(out);
var state_28847__$1 = (function (){var statearr_28856 = state_28847;
(statearr_28856[(9)] = inst_28844);

return statearr_28856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28847__$1,inst_28845);
} else {
if((state_val_28848 === (2))){
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28847__$1,(4),ch);
} else {
if((state_val_28848 === (11))){
var inst_28827 = (state_28847[(8)]);
var inst_28836 = (state_28847[(2)]);
var inst_28824 = inst_28827;
var state_28847__$1 = (function (){var statearr_28857 = state_28847;
(statearr_28857[(7)] = inst_28824);

(statearr_28857[(10)] = inst_28836);

return statearr_28857;
})();
var statearr_28858_30031 = state_28847__$1;
(statearr_28858_30031[(2)] = null);

(statearr_28858_30031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (9))){
var inst_28827 = (state_28847[(8)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28847__$1,(11),out,inst_28827);
} else {
if((state_val_28848 === (5))){
var inst_28824 = (state_28847[(7)]);
var inst_28827 = (state_28847[(8)]);
var inst_28831 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28827,inst_28824);
var state_28847__$1 = state_28847;
if(inst_28831){
var statearr_28860_30035 = state_28847__$1;
(statearr_28860_30035[(1)] = (8));

} else {
var statearr_28861_30036 = state_28847__$1;
(statearr_28861_30036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (10))){
var inst_28839 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28862_30037 = state_28847__$1;
(statearr_28862_30037[(2)] = inst_28839);

(statearr_28862_30037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (8))){
var inst_28824 = (state_28847[(7)]);
var tmp28859 = inst_28824;
var inst_28824__$1 = tmp28859;
var state_28847__$1 = (function (){var statearr_28863 = state_28847;
(statearr_28863[(7)] = inst_28824__$1);

return statearr_28863;
})();
var statearr_28864_30039 = state_28847__$1;
(statearr_28864_30039[(2)] = null);

(statearr_28864_30039[(1)] = (2));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28865[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28865[(1)] = (1));

return statearr_28865;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28847){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28847);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28866){var ex__27452__auto__ = e28866;
var statearr_28867_30040 = state_28847;
(statearr_28867_30040[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28847[(4)]))){
var statearr_28868_30041 = state_28847;
(statearr_28868_30041[(1)] = cljs.core.first((state_28847[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30042 = state_28847;
state_28847 = G__30042;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28869 = f__27485__auto__();
(statearr_28869[(6)] = c__27484__auto___29993);

return statearr_28869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28871 = arguments.length;
switch (G__28871) {
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
var c__27484__auto___30044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28909){
var state_val_28910 = (state_28909[(1)]);
if((state_val_28910 === (7))){
var inst_28905 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28911_30047 = state_28909__$1;
(statearr_28911_30047[(2)] = inst_28905);

(statearr_28911_30047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (1))){
var inst_28872 = (new Array(n));
var inst_28873 = inst_28872;
var inst_28874 = (0);
var state_28909__$1 = (function (){var statearr_28912 = state_28909;
(statearr_28912[(7)] = inst_28873);

(statearr_28912[(8)] = inst_28874);

return statearr_28912;
})();
var statearr_28913_30050 = state_28909__$1;
(statearr_28913_30050[(2)] = null);

(statearr_28913_30050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (4))){
var inst_28877 = (state_28909[(9)]);
var inst_28877__$1 = (state_28909[(2)]);
var inst_28878 = (inst_28877__$1 == null);
var inst_28879 = cljs.core.not(inst_28878);
var state_28909__$1 = (function (){var statearr_28914 = state_28909;
(statearr_28914[(9)] = inst_28877__$1);

return statearr_28914;
})();
if(inst_28879){
var statearr_28915_30051 = state_28909__$1;
(statearr_28915_30051[(1)] = (5));

} else {
var statearr_28916_30052 = state_28909__$1;
(statearr_28916_30052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (15))){
var inst_28899 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28917_30053 = state_28909__$1;
(statearr_28917_30053[(2)] = inst_28899);

(statearr_28917_30053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (13))){
var state_28909__$1 = state_28909;
var statearr_28918_30054 = state_28909__$1;
(statearr_28918_30054[(2)] = null);

(statearr_28918_30054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (6))){
var inst_28874 = (state_28909[(8)]);
var inst_28895 = (inst_28874 > (0));
var state_28909__$1 = state_28909;
if(cljs.core.truth_(inst_28895)){
var statearr_28919_30055 = state_28909__$1;
(statearr_28919_30055[(1)] = (12));

} else {
var statearr_28920_30056 = state_28909__$1;
(statearr_28920_30056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (3))){
var inst_28907 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28909__$1,inst_28907);
} else {
if((state_val_28910 === (12))){
var inst_28873 = (state_28909[(7)]);
var inst_28897 = cljs.core.vec(inst_28873);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28909__$1,(15),out,inst_28897);
} else {
if((state_val_28910 === (2))){
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28909__$1,(4),ch);
} else {
if((state_val_28910 === (11))){
var inst_28889 = (state_28909[(2)]);
var inst_28890 = (new Array(n));
var inst_28873 = inst_28890;
var inst_28874 = (0);
var state_28909__$1 = (function (){var statearr_28921 = state_28909;
(statearr_28921[(10)] = inst_28889);

(statearr_28921[(7)] = inst_28873);

(statearr_28921[(8)] = inst_28874);

return statearr_28921;
})();
var statearr_28922_30057 = state_28909__$1;
(statearr_28922_30057[(2)] = null);

(statearr_28922_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (9))){
var inst_28873 = (state_28909[(7)]);
var inst_28887 = cljs.core.vec(inst_28873);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28909__$1,(11),out,inst_28887);
} else {
if((state_val_28910 === (5))){
var inst_28877 = (state_28909[(9)]);
var inst_28873 = (state_28909[(7)]);
var inst_28882 = (state_28909[(11)]);
var inst_28874 = (state_28909[(8)]);
var inst_28881 = (inst_28873[inst_28874] = inst_28877);
var inst_28882__$1 = (inst_28874 + (1));
var inst_28883 = (inst_28882__$1 < n);
var state_28909__$1 = (function (){var statearr_28923 = state_28909;
(statearr_28923[(12)] = inst_28881);

(statearr_28923[(11)] = inst_28882__$1);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28883)){
var statearr_28924_30058 = state_28909__$1;
(statearr_28924_30058[(1)] = (8));

} else {
var statearr_28925_30059 = state_28909__$1;
(statearr_28925_30059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (14))){
var inst_28902 = (state_28909[(2)]);
var inst_28903 = cljs.core.async.close_BANG_(out);
var state_28909__$1 = (function (){var statearr_28927 = state_28909;
(statearr_28927[(13)] = inst_28902);

return statearr_28927;
})();
var statearr_28928_30060 = state_28909__$1;
(statearr_28928_30060[(2)] = inst_28903);

(statearr_28928_30060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (10))){
var inst_28893 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28929_30061 = state_28909__$1;
(statearr_28929_30061[(2)] = inst_28893);

(statearr_28929_30061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (8))){
var inst_28873 = (state_28909[(7)]);
var inst_28882 = (state_28909[(11)]);
var tmp28926 = inst_28873;
var inst_28873__$1 = tmp28926;
var inst_28874 = inst_28882;
var state_28909__$1 = (function (){var statearr_28930 = state_28909;
(statearr_28930[(7)] = inst_28873__$1);

(statearr_28930[(8)] = inst_28874);

return statearr_28930;
})();
var statearr_28931_30062 = state_28909__$1;
(statearr_28931_30062[(2)] = null);

(statearr_28931_30062[(1)] = (2));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_28932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28932[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_28932[(1)] = (1));

return statearr_28932;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28909){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28909);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e28933){var ex__27452__auto__ = e28933;
var statearr_28934_30063 = state_28909;
(statearr_28934_30063[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28909[(4)]))){
var statearr_28935_30064 = state_28909;
(statearr_28935_30064[(1)] = cljs.core.first((state_28909[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30065 = state_28909;
state_28909 = G__30065;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_28936 = f__27485__auto__();
(statearr_28936[(6)] = c__27484__auto___30044);

return statearr_28936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28938 = arguments.length;
switch (G__28938) {
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
var c__27484__auto___30067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27485__auto__ = (function (){var switch__27448__auto__ = (function (state_28980){
var state_val_28981 = (state_28980[(1)]);
if((state_val_28981 === (7))){
var inst_28976 = (state_28980[(2)]);
var state_28980__$1 = state_28980;
var statearr_28982_30068 = state_28980__$1;
(statearr_28982_30068[(2)] = inst_28976);

(statearr_28982_30068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (1))){
var inst_28939 = [];
var inst_28940 = inst_28939;
var inst_28941 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28980__$1 = (function (){var statearr_28983 = state_28980;
(statearr_28983[(7)] = inst_28941);

(statearr_28983[(8)] = inst_28940);

return statearr_28983;
})();
var statearr_28984_30069 = state_28980__$1;
(statearr_28984_30069[(2)] = null);

(statearr_28984_30069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (4))){
var inst_28944 = (state_28980[(9)]);
var inst_28944__$1 = (state_28980[(2)]);
var inst_28945 = (inst_28944__$1 == null);
var inst_28946 = cljs.core.not(inst_28945);
var state_28980__$1 = (function (){var statearr_28985 = state_28980;
(statearr_28985[(9)] = inst_28944__$1);

return statearr_28985;
})();
if(inst_28946){
var statearr_28986_30070 = state_28980__$1;
(statearr_28986_30070[(1)] = (5));

} else {
var statearr_28987_30071 = state_28980__$1;
(statearr_28987_30071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (15))){
var inst_28970 = (state_28980[(2)]);
var state_28980__$1 = state_28980;
var statearr_28988_30072 = state_28980__$1;
(statearr_28988_30072[(2)] = inst_28970);

(statearr_28988_30072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (13))){
var state_28980__$1 = state_28980;
var statearr_28989_30073 = state_28980__$1;
(statearr_28989_30073[(2)] = null);

(statearr_28989_30073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (6))){
var inst_28940 = (state_28980[(8)]);
var inst_28965 = inst_28940.length;
var inst_28966 = (inst_28965 > (0));
var state_28980__$1 = state_28980;
if(cljs.core.truth_(inst_28966)){
var statearr_28990_30074 = state_28980__$1;
(statearr_28990_30074[(1)] = (12));

} else {
var statearr_28991_30075 = state_28980__$1;
(statearr_28991_30075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (3))){
var inst_28978 = (state_28980[(2)]);
var state_28980__$1 = state_28980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28980__$1,inst_28978);
} else {
if((state_val_28981 === (12))){
var inst_28940 = (state_28980[(8)]);
var inst_28968 = cljs.core.vec(inst_28940);
var state_28980__$1 = state_28980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28980__$1,(15),out,inst_28968);
} else {
if((state_val_28981 === (2))){
var state_28980__$1 = state_28980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28980__$1,(4),ch);
} else {
if((state_val_28981 === (11))){
var inst_28948 = (state_28980[(10)]);
var inst_28944 = (state_28980[(9)]);
var inst_28958 = (state_28980[(2)]);
var inst_28959 = [];
var inst_28960 = inst_28959.push(inst_28944);
var inst_28940 = inst_28959;
var inst_28941 = inst_28948;
var state_28980__$1 = (function (){var statearr_28992 = state_28980;
(statearr_28992[(7)] = inst_28941);

(statearr_28992[(11)] = inst_28960);

(statearr_28992[(8)] = inst_28940);

(statearr_28992[(12)] = inst_28958);

return statearr_28992;
})();
var statearr_28993_30076 = state_28980__$1;
(statearr_28993_30076[(2)] = null);

(statearr_28993_30076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (9))){
var inst_28940 = (state_28980[(8)]);
var inst_28956 = cljs.core.vec(inst_28940);
var state_28980__$1 = state_28980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28980__$1,(11),out,inst_28956);
} else {
if((state_val_28981 === (5))){
var inst_28941 = (state_28980[(7)]);
var inst_28948 = (state_28980[(10)]);
var inst_28944 = (state_28980[(9)]);
var inst_28948__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28944) : f.call(null,inst_28944));
var inst_28949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28948__$1,inst_28941);
var inst_28950 = cljs.core.keyword_identical_QMARK_(inst_28941,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28951 = ((inst_28949) || (inst_28950));
var state_28980__$1 = (function (){var statearr_28994 = state_28980;
(statearr_28994[(10)] = inst_28948__$1);

return statearr_28994;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_28995_30077 = state_28980__$1;
(statearr_28995_30077[(1)] = (8));

} else {
var statearr_28996_30078 = state_28980__$1;
(statearr_28996_30078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (14))){
var inst_28973 = (state_28980[(2)]);
var inst_28974 = cljs.core.async.close_BANG_(out);
var state_28980__$1 = (function (){var statearr_28998 = state_28980;
(statearr_28998[(13)] = inst_28973);

return statearr_28998;
})();
var statearr_28999_30079 = state_28980__$1;
(statearr_28999_30079[(2)] = inst_28974);

(statearr_28999_30079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (10))){
var inst_28963 = (state_28980[(2)]);
var state_28980__$1 = state_28980;
var statearr_29000_30080 = state_28980__$1;
(statearr_29000_30080[(2)] = inst_28963);

(statearr_29000_30080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28981 === (8))){
var inst_28940 = (state_28980[(8)]);
var inst_28948 = (state_28980[(10)]);
var inst_28944 = (state_28980[(9)]);
var inst_28953 = inst_28940.push(inst_28944);
var tmp28997 = inst_28940;
var inst_28940__$1 = tmp28997;
var inst_28941 = inst_28948;
var state_28980__$1 = (function (){var statearr_29001 = state_28980;
(statearr_29001[(7)] = inst_28941);

(statearr_29001[(8)] = inst_28940__$1);

(statearr_29001[(14)] = inst_28953);

return statearr_29001;
})();
var statearr_29002_30081 = state_28980__$1;
(statearr_29002_30081[(2)] = null);

(statearr_29002_30081[(1)] = (2));


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
var cljs$core$async$state_machine__27449__auto__ = null;
var cljs$core$async$state_machine__27449__auto____0 = (function (){
var statearr_29003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29003[(0)] = cljs$core$async$state_machine__27449__auto__);

(statearr_29003[(1)] = (1));

return statearr_29003;
});
var cljs$core$async$state_machine__27449__auto____1 = (function (state_28980){
while(true){
var ret_value__27450__auto__ = (function (){try{while(true){
var result__27451__auto__ = switch__27448__auto__(state_28980);
if(cljs.core.keyword_identical_QMARK_(result__27451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27451__auto__;
}
break;
}
}catch (e29004){var ex__27452__auto__ = e29004;
var statearr_29005_30082 = state_28980;
(statearr_29005_30082[(2)] = ex__27452__auto__);


if(cljs.core.seq((state_28980[(4)]))){
var statearr_29006_30083 = state_28980;
(statearr_29006_30083[(1)] = cljs.core.first((state_28980[(4)])));

} else {
throw ex__27452__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_28980;
state_28980 = G__30084;
continue;
} else {
return ret_value__27450__auto__;
}
break;
}
});
cljs$core$async$state_machine__27449__auto__ = function(state_28980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27449__auto____1.call(this,state_28980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27449__auto____0;
cljs$core$async$state_machine__27449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27449__auto____1;
return cljs$core$async$state_machine__27449__auto__;
})()
})();
var state__27486__auto__ = (function (){var statearr_29007 = f__27485__auto__();
(statearr_29007[(6)] = c__27484__auto___30067);

return statearr_29007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27486__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
