goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41118 = arguments.length;
switch (G__41118) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41162 = (function (f,blockable,meta41163){
this.f = f;
this.blockable = blockable;
this.meta41163 = meta41163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41164,meta41163__$1){
var self__ = this;
var _41164__$1 = this;
return (new cljs.core.async.t_cljs$core$async41162(self__.f,self__.blockable,meta41163__$1));
}));

(cljs.core.async.t_cljs$core$async41162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41164){
var self__ = this;
var _41164__$1 = this;
return self__.meta41163;
}));

(cljs.core.async.t_cljs$core$async41162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41163","meta41163",39534339,null)], null);
}));

(cljs.core.async.t_cljs$core$async41162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41162");

(cljs.core.async.t_cljs$core$async41162.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41162.
 */
cljs.core.async.__GT_t_cljs$core$async41162 = (function cljs$core$async$__GT_t_cljs$core$async41162(f__$1,blockable__$1,meta41163){
return (new cljs.core.async.t_cljs$core$async41162(f__$1,blockable__$1,meta41163));
});

}

return (new cljs.core.async.t_cljs$core$async41162(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41182 = arguments.length;
switch (G__41182) {
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
var G__41191 = arguments.length;
switch (G__41191) {
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
var G__41196 = arguments.length;
switch (G__41196) {
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
var val_43510 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43510) : fn1.call(null,val_43510));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43510) : fn1.call(null,val_43510));
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
var G__41201 = arguments.length;
switch (G__41201) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___43513 = n;
var x_43514 = (0);
while(true){
if((x_43514 < n__4741__auto___43513)){
(a[x_43514] = x_43514);

var G__43515 = (x_43514 + (1));
x_43514 = G__43515;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41212 = (function (flag,meta41213){
this.flag = flag;
this.meta41213 = meta41213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41214,meta41213__$1){
var self__ = this;
var _41214__$1 = this;
return (new cljs.core.async.t_cljs$core$async41212(self__.flag,meta41213__$1));
}));

(cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41214){
var self__ = this;
var _41214__$1 = this;
return self__.meta41213;
}));

(cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41213","meta41213",-174301059,null)], null);
}));

(cljs.core.async.t_cljs$core$async41212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41212");

(cljs.core.async.t_cljs$core$async41212.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41212.
 */
cljs.core.async.__GT_t_cljs$core$async41212 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41212(flag__$1,meta41213){
return (new cljs.core.async.t_cljs$core$async41212(flag__$1,meta41213));
});

}

return (new cljs.core.async.t_cljs$core$async41212(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41227 = (function (flag,cb,meta41228){
this.flag = flag;
this.cb = cb;
this.meta41228 = meta41228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41229,meta41228__$1){
var self__ = this;
var _41229__$1 = this;
return (new cljs.core.async.t_cljs$core$async41227(self__.flag,self__.cb,meta41228__$1));
}));

(cljs.core.async.t_cljs$core$async41227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41229){
var self__ = this;
var _41229__$1 = this;
return self__.meta41228;
}));

(cljs.core.async.t_cljs$core$async41227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41228","meta41228",1989178323,null)], null);
}));

(cljs.core.async.t_cljs$core$async41227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41227");

(cljs.core.async.t_cljs$core$async41227.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41227.
 */
cljs.core.async.__GT_t_cljs$core$async41227 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41227(flag__$1,cb__$1,meta41228){
return (new cljs.core.async.t_cljs$core$async41227(flag__$1,cb__$1,meta41228));
});

}

return (new cljs.core.async.t_cljs$core$async41227(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41240_SHARP_){
var G__41247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41240_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41247) : fret.call(null,G__41247));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41241_SHARP_){
var G__41248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41241_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41248) : fret.call(null,G__41248));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43554 = (i + (1));
i = G__43554;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___43555 = arguments.length;
var i__4865__auto___43556 = (0);
while(true){
if((i__4865__auto___43556 < len__4864__auto___43555)){
args__4870__auto__.push((arguments[i__4865__auto___43556]));

var G__43557 = (i__4865__auto___43556 + (1));
i__4865__auto___43556 = G__43557;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41261){
var map__41262 = p__41261;
var map__41262__$1 = cljs.core.__destructure_map(map__41262);
var opts = map__41262__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41255){
var G__41256 = cljs.core.first(seq41255);
var seq41255__$1 = cljs.core.next(seq41255);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41256,seq41255__$1);
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
var G__41264 = arguments.length;
switch (G__41264) {
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
var c__41046__auto___43582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41300){
var state_val_41304 = (state_41300[(1)]);
if((state_val_41304 === (7))){
var inst_41295 = (state_41300[(2)]);
var state_41300__$1 = state_41300;
var statearr_41308_43586 = state_41300__$1;
(statearr_41308_43586[(2)] = inst_41295);

(statearr_41308_43586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (1))){
var state_41300__$1 = state_41300;
var statearr_41309_43587 = state_41300__$1;
(statearr_41309_43587[(2)] = null);

(statearr_41309_43587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (4))){
var inst_41274 = (state_41300[(7)]);
var inst_41274__$1 = (state_41300[(2)]);
var inst_41278 = (inst_41274__$1 == null);
var state_41300__$1 = (function (){var statearr_41310 = state_41300;
(statearr_41310[(7)] = inst_41274__$1);

return statearr_41310;
})();
if(cljs.core.truth_(inst_41278)){
var statearr_41311_43591 = state_41300__$1;
(statearr_41311_43591[(1)] = (5));

} else {
var statearr_41312_43592 = state_41300__$1;
(statearr_41312_43592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (13))){
var state_41300__$1 = state_41300;
var statearr_41313_43593 = state_41300__$1;
(statearr_41313_43593[(2)] = null);

(statearr_41313_43593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (6))){
var inst_41274 = (state_41300[(7)]);
var state_41300__$1 = state_41300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41300__$1,(11),to,inst_41274);
} else {
if((state_val_41304 === (3))){
var inst_41297 = (state_41300[(2)]);
var state_41300__$1 = state_41300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41300__$1,inst_41297);
} else {
if((state_val_41304 === (12))){
var state_41300__$1 = state_41300;
var statearr_41321_43594 = state_41300__$1;
(statearr_41321_43594[(2)] = null);

(statearr_41321_43594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (2))){
var state_41300__$1 = state_41300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41300__$1,(4),from);
} else {
if((state_val_41304 === (11))){
var inst_41288 = (state_41300[(2)]);
var state_41300__$1 = state_41300;
if(cljs.core.truth_(inst_41288)){
var statearr_41322_43597 = state_41300__$1;
(statearr_41322_43597[(1)] = (12));

} else {
var statearr_41323_43598 = state_41300__$1;
(statearr_41323_43598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (9))){
var state_41300__$1 = state_41300;
var statearr_41324_43599 = state_41300__$1;
(statearr_41324_43599[(2)] = null);

(statearr_41324_43599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (5))){
var state_41300__$1 = state_41300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41326_43601 = state_41300__$1;
(statearr_41326_43601[(1)] = (8));

} else {
var statearr_41327_43602 = state_41300__$1;
(statearr_41327_43602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (14))){
var inst_41293 = (state_41300[(2)]);
var state_41300__$1 = state_41300;
var statearr_41328_43603 = state_41300__$1;
(statearr_41328_43603[(2)] = inst_41293);

(statearr_41328_43603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (10))){
var inst_41285 = (state_41300[(2)]);
var state_41300__$1 = state_41300;
var statearr_41330_43605 = state_41300__$1;
(statearr_41330_43605[(2)] = inst_41285);

(statearr_41330_43605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41304 === (8))){
var inst_41282 = cljs.core.async.close_BANG_(to);
var state_41300__$1 = state_41300;
var statearr_41331_43606 = state_41300__$1;
(statearr_41331_43606[(2)] = inst_41282);

(statearr_41331_43606[(1)] = (10));


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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_41334 = [null,null,null,null,null,null,null,null];
(statearr_41334[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_41334[(1)] = (1));

return statearr_41334;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_41300){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41300);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41335){var ex__40961__auto__ = e41335;
var statearr_41336_43617 = state_41300;
(statearr_41336_43617[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41300[(4)]))){
var statearr_41337_43619 = state_41300;
(statearr_41337_43619[(1)] = cljs.core.first((state_41300[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43621 = state_41300;
state_41300 = G__43621;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_41300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_41300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41362 = f__41047__auto__();
(statearr_41362[(6)] = c__41046__auto___43582);

return statearr_41362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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
var process = (function (p__41367){
var vec__41368 = p__41367;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41368,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41368,(1),null);
var job = vec__41368;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41046__auto___43695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41375){
var state_val_41376 = (state_41375[(1)]);
if((state_val_41376 === (1))){
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41375__$1,(2),res,v);
} else {
if((state_val_41376 === (2))){
var inst_41372 = (state_41375[(2)]);
var inst_41373 = cljs.core.async.close_BANG_(res);
var state_41375__$1 = (function (){var statearr_41379 = state_41375;
(statearr_41379[(7)] = inst_41372);

return statearr_41379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41375__$1,inst_41373);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0 = (function (){
var statearr_41388 = [null,null,null,null,null,null,null,null];
(statearr_41388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__);

(statearr_41388[(1)] = (1));

return statearr_41388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1 = (function (state_41375){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41375);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41389){var ex__40961__auto__ = e41389;
var statearr_41390_43704 = state_41375;
(statearr_41390_43704[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41375[(4)]))){
var statearr_41391_43705 = state_41375;
(statearr_41391_43705[(1)] = cljs.core.first((state_41375[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43707 = state_41375;
state_41375 = G__43707;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = function(state_41375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1.call(this,state_41375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41394 = f__41047__auto__();
(statearr_41394[(6)] = c__41046__auto___43695);

return statearr_41394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__41395){
var vec__41396 = p__41395;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396,(1),null);
var job = vec__41396;
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
var n__4741__auto___43723 = n;
var __43724 = (0);
while(true){
if((__43724 < n__4741__auto___43723)){
var G__41407_43725 = type;
var G__41407_43726__$1 = (((G__41407_43725 instanceof cljs.core.Keyword))?G__41407_43725.fqn:null);
switch (G__41407_43726__$1) {
case "compute":
var c__41046__auto___43729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43724,c__41046__auto___43729,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async){
return (function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = ((function (__43724,c__41046__auto___43729,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async){
return (function (state_41429){
var state_val_41430 = (state_41429[(1)]);
if((state_val_41430 === (1))){
var state_41429__$1 = state_41429;
var statearr_41431_43730 = state_41429__$1;
(statearr_41431_43730[(2)] = null);

(statearr_41431_43730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (2))){
var state_41429__$1 = state_41429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41429__$1,(4),jobs);
} else {
if((state_val_41430 === (3))){
var inst_41427 = (state_41429[(2)]);
var state_41429__$1 = state_41429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41429__$1,inst_41427);
} else {
if((state_val_41430 === (4))){
var inst_41419 = (state_41429[(2)]);
var inst_41420 = process(inst_41419);
var state_41429__$1 = state_41429;
if(cljs.core.truth_(inst_41420)){
var statearr_41432_43733 = state_41429__$1;
(statearr_41432_43733[(1)] = (5));

} else {
var statearr_41433_43735 = state_41429__$1;
(statearr_41433_43735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (5))){
var state_41429__$1 = state_41429;
var statearr_41434_43736 = state_41429__$1;
(statearr_41434_43736[(2)] = null);

(statearr_41434_43736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (6))){
var state_41429__$1 = state_41429;
var statearr_41435_43737 = state_41429__$1;
(statearr_41435_43737[(2)] = null);

(statearr_41435_43737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (7))){
var inst_41425 = (state_41429[(2)]);
var state_41429__$1 = state_41429;
var statearr_41436_43741 = state_41429__$1;
(statearr_41436_43741[(2)] = inst_41425);

(statearr_41436_43741[(1)] = (3));


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
});})(__43724,c__41046__auto___43729,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async))
;
return ((function (__43724,switch__40957__auto__,c__41046__auto___43729,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0 = (function (){
var statearr_41437 = [null,null,null,null,null,null,null];
(statearr_41437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__);

(statearr_41437[(1)] = (1));

return statearr_41437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1 = (function (state_41429){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41429);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41438){var ex__40961__auto__ = e41438;
var statearr_41439_43742 = state_41429;
(statearr_41439_43742[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41429[(4)]))){
var statearr_41440_43743 = state_41429;
(statearr_41440_43743[(1)] = cljs.core.first((state_41429[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43744 = state_41429;
state_41429 = G__43744;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = function(state_41429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1.call(this,state_41429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__;
})()
;})(__43724,switch__40957__auto__,c__41046__auto___43729,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async))
})();
var state__41048__auto__ = (function (){var statearr_41442 = f__41047__auto__();
(statearr_41442[(6)] = c__41046__auto___43729);

return statearr_41442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
});})(__43724,c__41046__auto___43729,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async))
);


break;
case "async":
var c__41046__auto___43745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43724,c__41046__auto___43745,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async){
return (function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = ((function (__43724,c__41046__auto___43745,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async){
return (function (state_41455){
var state_val_41456 = (state_41455[(1)]);
if((state_val_41456 === (1))){
var state_41455__$1 = state_41455;
var statearr_41457_43746 = state_41455__$1;
(statearr_41457_43746[(2)] = null);

(statearr_41457_43746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41456 === (2))){
var state_41455__$1 = state_41455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41455__$1,(4),jobs);
} else {
if((state_val_41456 === (3))){
var inst_41453 = (state_41455[(2)]);
var state_41455__$1 = state_41455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41455__$1,inst_41453);
} else {
if((state_val_41456 === (4))){
var inst_41445 = (state_41455[(2)]);
var inst_41446 = async(inst_41445);
var state_41455__$1 = state_41455;
if(cljs.core.truth_(inst_41446)){
var statearr_41458_43747 = state_41455__$1;
(statearr_41458_43747[(1)] = (5));

} else {
var statearr_41459_43748 = state_41455__$1;
(statearr_41459_43748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41456 === (5))){
var state_41455__$1 = state_41455;
var statearr_41460_43749 = state_41455__$1;
(statearr_41460_43749[(2)] = null);

(statearr_41460_43749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41456 === (6))){
var state_41455__$1 = state_41455;
var statearr_41461_43750 = state_41455__$1;
(statearr_41461_43750[(2)] = null);

(statearr_41461_43750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41456 === (7))){
var inst_41451 = (state_41455[(2)]);
var state_41455__$1 = state_41455;
var statearr_41462_43751 = state_41455__$1;
(statearr_41462_43751[(2)] = inst_41451);

(statearr_41462_43751[(1)] = (3));


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
});})(__43724,c__41046__auto___43745,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async))
;
return ((function (__43724,switch__40957__auto__,c__41046__auto___43745,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0 = (function (){
var statearr_41463 = [null,null,null,null,null,null,null];
(statearr_41463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__);

(statearr_41463[(1)] = (1));

return statearr_41463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1 = (function (state_41455){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41455);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41464){var ex__40961__auto__ = e41464;
var statearr_41465_43752 = state_41455;
(statearr_41465_43752[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41455[(4)]))){
var statearr_41466_43753 = state_41455;
(statearr_41466_43753[(1)] = cljs.core.first((state_41455[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43754 = state_41455;
state_41455 = G__43754;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = function(state_41455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1.call(this,state_41455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__;
})()
;})(__43724,switch__40957__auto__,c__41046__auto___43745,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async))
})();
var state__41048__auto__ = (function (){var statearr_41467 = f__41047__auto__();
(statearr_41467[(6)] = c__41046__auto___43745);

return statearr_41467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
});})(__43724,c__41046__auto___43745,G__41407_43725,G__41407_43726__$1,n__4741__auto___43723,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41407_43726__$1)].join('')));

}

var G__43755 = (__43724 + (1));
__43724 = G__43755;
continue;
} else {
}
break;
}

var c__41046__auto___43756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41489){
var state_val_41490 = (state_41489[(1)]);
if((state_val_41490 === (7))){
var inst_41485 = (state_41489[(2)]);
var state_41489__$1 = state_41489;
var statearr_41493_43757 = state_41489__$1;
(statearr_41493_43757[(2)] = inst_41485);

(statearr_41493_43757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41490 === (1))){
var state_41489__$1 = state_41489;
var statearr_41494_43758 = state_41489__$1;
(statearr_41494_43758[(2)] = null);

(statearr_41494_43758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41490 === (4))){
var inst_41470 = (state_41489[(7)]);
var inst_41470__$1 = (state_41489[(2)]);
var inst_41471 = (inst_41470__$1 == null);
var state_41489__$1 = (function (){var statearr_41497 = state_41489;
(statearr_41497[(7)] = inst_41470__$1);

return statearr_41497;
})();
if(cljs.core.truth_(inst_41471)){
var statearr_41498_43759 = state_41489__$1;
(statearr_41498_43759[(1)] = (5));

} else {
var statearr_41499_43760 = state_41489__$1;
(statearr_41499_43760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41490 === (6))){
var inst_41475 = (state_41489[(8)]);
var inst_41470 = (state_41489[(7)]);
var inst_41475__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41477 = [inst_41470,inst_41475__$1];
var inst_41478 = (new cljs.core.PersistentVector(null,2,(5),inst_41476,inst_41477,null));
var state_41489__$1 = (function (){var statearr_41502 = state_41489;
(statearr_41502[(8)] = inst_41475__$1);

return statearr_41502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41489__$1,(8),jobs,inst_41478);
} else {
if((state_val_41490 === (3))){
var inst_41487 = (state_41489[(2)]);
var state_41489__$1 = state_41489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41489__$1,inst_41487);
} else {
if((state_val_41490 === (2))){
var state_41489__$1 = state_41489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41489__$1,(4),from);
} else {
if((state_val_41490 === (9))){
var inst_41482 = (state_41489[(2)]);
var state_41489__$1 = (function (){var statearr_41503 = state_41489;
(statearr_41503[(9)] = inst_41482);

return statearr_41503;
})();
var statearr_41504_43761 = state_41489__$1;
(statearr_41504_43761[(2)] = null);

(statearr_41504_43761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41490 === (5))){
var inst_41473 = cljs.core.async.close_BANG_(jobs);
var state_41489__$1 = state_41489;
var statearr_41505_43762 = state_41489__$1;
(statearr_41505_43762[(2)] = inst_41473);

(statearr_41505_43762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41490 === (8))){
var inst_41475 = (state_41489[(8)]);
var inst_41480 = (state_41489[(2)]);
var state_41489__$1 = (function (){var statearr_41506 = state_41489;
(statearr_41506[(10)] = inst_41480);

return statearr_41506;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41489__$1,(9),results,inst_41475);
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
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0 = (function (){
var statearr_41507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__);

(statearr_41507[(1)] = (1));

return statearr_41507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1 = (function (state_41489){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41489);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41508){var ex__40961__auto__ = e41508;
var statearr_41512_43763 = state_41489;
(statearr_41512_43763[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41489[(4)]))){
var statearr_41513_43764 = state_41489;
(statearr_41513_43764[(1)] = cljs.core.first((state_41489[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43765 = state_41489;
state_41489 = G__43765;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = function(state_41489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1.call(this,state_41489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41514 = f__41047__auto__();
(statearr_41514[(6)] = c__41046__auto___43756);

return statearr_41514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


var c__41046__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41560){
var state_val_41561 = (state_41560[(1)]);
if((state_val_41561 === (7))){
var inst_41556 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41562_43766 = state_41560__$1;
(statearr_41562_43766[(2)] = inst_41556);

(statearr_41562_43766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (20))){
var state_41560__$1 = state_41560;
var statearr_41563_43767 = state_41560__$1;
(statearr_41563_43767[(2)] = null);

(statearr_41563_43767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (1))){
var state_41560__$1 = state_41560;
var statearr_41564_43768 = state_41560__$1;
(statearr_41564_43768[(2)] = null);

(statearr_41564_43768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (4))){
var inst_41517 = (state_41560[(7)]);
var inst_41517__$1 = (state_41560[(2)]);
var inst_41518 = (inst_41517__$1 == null);
var state_41560__$1 = (function (){var statearr_41565 = state_41560;
(statearr_41565[(7)] = inst_41517__$1);

return statearr_41565;
})();
if(cljs.core.truth_(inst_41518)){
var statearr_41566_43769 = state_41560__$1;
(statearr_41566_43769[(1)] = (5));

} else {
var statearr_41567_43770 = state_41560__$1;
(statearr_41567_43770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (15))){
var inst_41532 = (state_41560[(8)]);
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41560__$1,(18),to,inst_41532);
} else {
if((state_val_41561 === (21))){
var inst_41551 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41568_43771 = state_41560__$1;
(statearr_41568_43771[(2)] = inst_41551);

(statearr_41568_43771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (13))){
var inst_41553 = (state_41560[(2)]);
var state_41560__$1 = (function (){var statearr_41569 = state_41560;
(statearr_41569[(9)] = inst_41553);

return statearr_41569;
})();
var statearr_41570_43772 = state_41560__$1;
(statearr_41570_43772[(2)] = null);

(statearr_41570_43772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (6))){
var inst_41517 = (state_41560[(7)]);
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41560__$1,(11),inst_41517);
} else {
if((state_val_41561 === (17))){
var inst_41545 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
if(cljs.core.truth_(inst_41545)){
var statearr_41571_43773 = state_41560__$1;
(statearr_41571_43773[(1)] = (19));

} else {
var statearr_41572_43774 = state_41560__$1;
(statearr_41572_43774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (3))){
var inst_41558 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41560__$1,inst_41558);
} else {
if((state_val_41561 === (12))){
var inst_41529 = (state_41560[(10)]);
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41560__$1,(14),inst_41529);
} else {
if((state_val_41561 === (2))){
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41560__$1,(4),results);
} else {
if((state_val_41561 === (19))){
var state_41560__$1 = state_41560;
var statearr_41573_43775 = state_41560__$1;
(statearr_41573_43775[(2)] = null);

(statearr_41573_43775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (11))){
var inst_41529 = (state_41560[(2)]);
var state_41560__$1 = (function (){var statearr_41574 = state_41560;
(statearr_41574[(10)] = inst_41529);

return statearr_41574;
})();
var statearr_41575_43776 = state_41560__$1;
(statearr_41575_43776[(2)] = null);

(statearr_41575_43776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (9))){
var state_41560__$1 = state_41560;
var statearr_41576_43777 = state_41560__$1;
(statearr_41576_43777[(2)] = null);

(statearr_41576_43777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (5))){
var state_41560__$1 = state_41560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41577_43778 = state_41560__$1;
(statearr_41577_43778[(1)] = (8));

} else {
var statearr_41578_43779 = state_41560__$1;
(statearr_41578_43779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (14))){
var inst_41539 = (state_41560[(11)]);
var inst_41532 = (state_41560[(8)]);
var inst_41532__$1 = (state_41560[(2)]);
var inst_41533 = (inst_41532__$1 == null);
var inst_41539__$1 = cljs.core.not(inst_41533);
var state_41560__$1 = (function (){var statearr_41579 = state_41560;
(statearr_41579[(11)] = inst_41539__$1);

(statearr_41579[(8)] = inst_41532__$1);

return statearr_41579;
})();
if(inst_41539__$1){
var statearr_41580_43780 = state_41560__$1;
(statearr_41580_43780[(1)] = (15));

} else {
var statearr_41581_43781 = state_41560__$1;
(statearr_41581_43781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (16))){
var inst_41539 = (state_41560[(11)]);
var state_41560__$1 = state_41560;
var statearr_41586_43782 = state_41560__$1;
(statearr_41586_43782[(2)] = inst_41539);

(statearr_41586_43782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (10))){
var inst_41526 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41587_43783 = state_41560__$1;
(statearr_41587_43783[(2)] = inst_41526);

(statearr_41587_43783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (18))){
var inst_41542 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41588_43784 = state_41560__$1;
(statearr_41588_43784[(2)] = inst_41542);

(statearr_41588_43784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41561 === (8))){
var inst_41523 = cljs.core.async.close_BANG_(to);
var state_41560__$1 = state_41560;
var statearr_41589_43785 = state_41560__$1;
(statearr_41589_43785[(2)] = inst_41523);

(statearr_41589_43785[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0 = (function (){
var statearr_41590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__);

(statearr_41590[(1)] = (1));

return statearr_41590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1 = (function (state_41560){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41560);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41591){var ex__40961__auto__ = e41591;
var statearr_41592_43786 = state_41560;
(statearr_41592_43786[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41560[(4)]))){
var statearr_41593_43787 = state_41560;
(statearr_41593_43787[(1)] = cljs.core.first((state_41560[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43788 = state_41560;
state_41560 = G__43788;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__ = function(state_41560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1.call(this,state_41560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41598 = f__41047__auto__();
(statearr_41598[(6)] = c__41046__auto__);

return statearr_41598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));

return c__41046__auto__;
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
var G__41602 = arguments.length;
switch (G__41602) {
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
var G__41609 = arguments.length;
switch (G__41609) {
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
var G__41615 = arguments.length;
switch (G__41615) {
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
var c__41046__auto___43792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41641){
var state_val_41642 = (state_41641[(1)]);
if((state_val_41642 === (7))){
var inst_41637 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41643_43794 = state_41641__$1;
(statearr_41643_43794[(2)] = inst_41637);

(statearr_41643_43794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (1))){
var state_41641__$1 = state_41641;
var statearr_41644_43795 = state_41641__$1;
(statearr_41644_43795[(2)] = null);

(statearr_41644_43795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (4))){
var inst_41618 = (state_41641[(7)]);
var inst_41618__$1 = (state_41641[(2)]);
var inst_41619 = (inst_41618__$1 == null);
var state_41641__$1 = (function (){var statearr_41646 = state_41641;
(statearr_41646[(7)] = inst_41618__$1);

return statearr_41646;
})();
if(cljs.core.truth_(inst_41619)){
var statearr_41647_43796 = state_41641__$1;
(statearr_41647_43796[(1)] = (5));

} else {
var statearr_41648_43797 = state_41641__$1;
(statearr_41648_43797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (13))){
var state_41641__$1 = state_41641;
var statearr_41649_43798 = state_41641__$1;
(statearr_41649_43798[(2)] = null);

(statearr_41649_43798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (6))){
var inst_41618 = (state_41641[(7)]);
var inst_41624 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41618) : p.call(null,inst_41618));
var state_41641__$1 = state_41641;
if(cljs.core.truth_(inst_41624)){
var statearr_41650_43800 = state_41641__$1;
(statearr_41650_43800[(1)] = (9));

} else {
var statearr_41652_43801 = state_41641__$1;
(statearr_41652_43801[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (3))){
var inst_41639 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41641__$1,inst_41639);
} else {
if((state_val_41642 === (12))){
var state_41641__$1 = state_41641;
var statearr_41653_43802 = state_41641__$1;
(statearr_41653_43802[(2)] = null);

(statearr_41653_43802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (2))){
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41641__$1,(4),ch);
} else {
if((state_val_41642 === (11))){
var inst_41618 = (state_41641[(7)]);
var inst_41628 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41641__$1,(8),inst_41628,inst_41618);
} else {
if((state_val_41642 === (9))){
var state_41641__$1 = state_41641;
var statearr_41658_43803 = state_41641__$1;
(statearr_41658_43803[(2)] = tc);

(statearr_41658_43803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (5))){
var inst_41621 = cljs.core.async.close_BANG_(tc);
var inst_41622 = cljs.core.async.close_BANG_(fc);
var state_41641__$1 = (function (){var statearr_41659 = state_41641;
(statearr_41659[(8)] = inst_41621);

return statearr_41659;
})();
var statearr_41660_43804 = state_41641__$1;
(statearr_41660_43804[(2)] = inst_41622);

(statearr_41660_43804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (14))){
var inst_41635 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41662_43805 = state_41641__$1;
(statearr_41662_43805[(2)] = inst_41635);

(statearr_41662_43805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (10))){
var state_41641__$1 = state_41641;
var statearr_41663_43806 = state_41641__$1;
(statearr_41663_43806[(2)] = fc);

(statearr_41663_43806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (8))){
var inst_41630 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
if(cljs.core.truth_(inst_41630)){
var statearr_41664_43807 = state_41641__$1;
(statearr_41664_43807[(1)] = (12));

} else {
var statearr_41665_43808 = state_41641__$1;
(statearr_41665_43808[(1)] = (13));

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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_41666 = [null,null,null,null,null,null,null,null,null];
(statearr_41666[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_41666[(1)] = (1));

return statearr_41666;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_41641){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41641);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41670){var ex__40961__auto__ = e41670;
var statearr_41671_43809 = state_41641;
(statearr_41671_43809[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41641[(4)]))){
var statearr_41672_43810 = state_41641;
(statearr_41672_43810[(1)] = cljs.core.first((state_41641[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43811 = state_41641;
state_41641 = G__43811;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_41641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_41641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41673 = f__41047__auto__();
(statearr_41673[(6)] = c__41046__auto___43792);

return statearr_41673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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
var c__41046__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41695){
var state_val_41696 = (state_41695[(1)]);
if((state_val_41696 === (7))){
var inst_41691 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
var statearr_41698_43812 = state_41695__$1;
(statearr_41698_43812[(2)] = inst_41691);

(statearr_41698_43812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (1))){
var inst_41674 = init;
var inst_41675 = inst_41674;
var state_41695__$1 = (function (){var statearr_41700 = state_41695;
(statearr_41700[(7)] = inst_41675);

return statearr_41700;
})();
var statearr_41701_43813 = state_41695__$1;
(statearr_41701_43813[(2)] = null);

(statearr_41701_43813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (4))){
var inst_41678 = (state_41695[(8)]);
var inst_41678__$1 = (state_41695[(2)]);
var inst_41679 = (inst_41678__$1 == null);
var state_41695__$1 = (function (){var statearr_41702 = state_41695;
(statearr_41702[(8)] = inst_41678__$1);

return statearr_41702;
})();
if(cljs.core.truth_(inst_41679)){
var statearr_41703_43814 = state_41695__$1;
(statearr_41703_43814[(1)] = (5));

} else {
var statearr_41704_43815 = state_41695__$1;
(statearr_41704_43815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (6))){
var inst_41682 = (state_41695[(9)]);
var inst_41678 = (state_41695[(8)]);
var inst_41675 = (state_41695[(7)]);
var inst_41682__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41675,inst_41678) : f.call(null,inst_41675,inst_41678));
var inst_41683 = cljs.core.reduced_QMARK_(inst_41682__$1);
var state_41695__$1 = (function (){var statearr_41705 = state_41695;
(statearr_41705[(9)] = inst_41682__$1);

return statearr_41705;
})();
if(inst_41683){
var statearr_41706_43816 = state_41695__$1;
(statearr_41706_43816[(1)] = (8));

} else {
var statearr_41708_43817 = state_41695__$1;
(statearr_41708_43817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (3))){
var inst_41693 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41695__$1,inst_41693);
} else {
if((state_val_41696 === (2))){
var state_41695__$1 = state_41695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41695__$1,(4),ch);
} else {
if((state_val_41696 === (9))){
var inst_41682 = (state_41695[(9)]);
var inst_41675 = inst_41682;
var state_41695__$1 = (function (){var statearr_41712 = state_41695;
(statearr_41712[(7)] = inst_41675);

return statearr_41712;
})();
var statearr_41713_43819 = state_41695__$1;
(statearr_41713_43819[(2)] = null);

(statearr_41713_43819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (5))){
var inst_41675 = (state_41695[(7)]);
var state_41695__$1 = state_41695;
var statearr_41714_43820 = state_41695__$1;
(statearr_41714_43820[(2)] = inst_41675);

(statearr_41714_43820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (10))){
var inst_41689 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
var statearr_41715_43821 = state_41695__$1;
(statearr_41715_43821[(2)] = inst_41689);

(statearr_41715_43821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (8))){
var inst_41682 = (state_41695[(9)]);
var inst_41685 = cljs.core.deref(inst_41682);
var state_41695__$1 = state_41695;
var statearr_41716_43823 = state_41695__$1;
(statearr_41716_43823[(2)] = inst_41685);

(statearr_41716_43823[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__40958__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40958__auto____0 = (function (){
var statearr_41717 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41717[(0)] = cljs$core$async$reduce_$_state_machine__40958__auto__);

(statearr_41717[(1)] = (1));

return statearr_41717;
});
var cljs$core$async$reduce_$_state_machine__40958__auto____1 = (function (state_41695){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41695);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41721){var ex__40961__auto__ = e41721;
var statearr_41722_43824 = state_41695;
(statearr_41722_43824[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41695[(4)]))){
var statearr_41723_43825 = state_41695;
(statearr_41723_43825[(1)] = cljs.core.first((state_41695[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43826 = state_41695;
state_41695 = G__43826;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40958__auto__ = function(state_41695){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40958__auto____1.call(this,state_41695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40958__auto____0;
cljs$core$async$reduce_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40958__auto____1;
return cljs$core$async$reduce_$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41726 = f__41047__auto__();
(statearr_41726[(6)] = c__41046__auto__);

return statearr_41726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));

return c__41046__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41046__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41737){
var state_val_41738 = (state_41737[(1)]);
if((state_val_41738 === (1))){
var inst_41732 = cljs.core.async.reduce(f__$1,init,ch);
var state_41737__$1 = state_41737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41737__$1,(2),inst_41732);
} else {
if((state_val_41738 === (2))){
var inst_41734 = (state_41737[(2)]);
var inst_41735 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41734) : f__$1.call(null,inst_41734));
var state_41737__$1 = state_41737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41737__$1,inst_41735);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40958__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40958__auto____0 = (function (){
var statearr_41746 = [null,null,null,null,null,null,null];
(statearr_41746[(0)] = cljs$core$async$transduce_$_state_machine__40958__auto__);

(statearr_41746[(1)] = (1));

return statearr_41746;
});
var cljs$core$async$transduce_$_state_machine__40958__auto____1 = (function (state_41737){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41737);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41747){var ex__40961__auto__ = e41747;
var statearr_41748_43831 = state_41737;
(statearr_41748_43831[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41737[(4)]))){
var statearr_41752_43832 = state_41737;
(statearr_41752_43832[(1)] = cljs.core.first((state_41737[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43833 = state_41737;
state_41737 = G__43833;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40958__auto__ = function(state_41737){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40958__auto____1.call(this,state_41737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40958__auto____0;
cljs$core$async$transduce_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40958__auto____1;
return cljs$core$async$transduce_$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41756 = f__41047__auto__();
(statearr_41756[(6)] = c__41046__auto__);

return statearr_41756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));

return c__41046__auto__;
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
var G__41766 = arguments.length;
switch (G__41766) {
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
var c__41046__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_41804){
var state_val_41805 = (state_41804[(1)]);
if((state_val_41805 === (7))){
var inst_41786 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41813_43835 = state_41804__$1;
(statearr_41813_43835[(2)] = inst_41786);

(statearr_41813_43835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (1))){
var inst_41780 = cljs.core.seq(coll);
var inst_41781 = inst_41780;
var state_41804__$1 = (function (){var statearr_41814 = state_41804;
(statearr_41814[(7)] = inst_41781);

return statearr_41814;
})();
var statearr_41815_43836 = state_41804__$1;
(statearr_41815_43836[(2)] = null);

(statearr_41815_43836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (4))){
var inst_41781 = (state_41804[(7)]);
var inst_41784 = cljs.core.first(inst_41781);
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41804__$1,(7),ch,inst_41784);
} else {
if((state_val_41805 === (13))){
var inst_41798 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41816_43837 = state_41804__$1;
(statearr_41816_43837[(2)] = inst_41798);

(statearr_41816_43837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (6))){
var inst_41789 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
if(cljs.core.truth_(inst_41789)){
var statearr_41817_43838 = state_41804__$1;
(statearr_41817_43838[(1)] = (8));

} else {
var statearr_41818_43839 = state_41804__$1;
(statearr_41818_43839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (3))){
var inst_41802 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41804__$1,inst_41802);
} else {
if((state_val_41805 === (12))){
var state_41804__$1 = state_41804;
var statearr_41819_43840 = state_41804__$1;
(statearr_41819_43840[(2)] = null);

(statearr_41819_43840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (2))){
var inst_41781 = (state_41804[(7)]);
var state_41804__$1 = state_41804;
if(cljs.core.truth_(inst_41781)){
var statearr_41820_43841 = state_41804__$1;
(statearr_41820_43841[(1)] = (4));

} else {
var statearr_41821_43842 = state_41804__$1;
(statearr_41821_43842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (11))){
var inst_41795 = cljs.core.async.close_BANG_(ch);
var state_41804__$1 = state_41804;
var statearr_41822_43843 = state_41804__$1;
(statearr_41822_43843[(2)] = inst_41795);

(statearr_41822_43843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (9))){
var state_41804__$1 = state_41804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41825_43844 = state_41804__$1;
(statearr_41825_43844[(1)] = (11));

} else {
var statearr_41826_43845 = state_41804__$1;
(statearr_41826_43845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (5))){
var inst_41781 = (state_41804[(7)]);
var state_41804__$1 = state_41804;
var statearr_41827_43846 = state_41804__$1;
(statearr_41827_43846[(2)] = inst_41781);

(statearr_41827_43846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (10))){
var inst_41800 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41828_43847 = state_41804__$1;
(statearr_41828_43847[(2)] = inst_41800);

(statearr_41828_43847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (8))){
var inst_41781 = (state_41804[(7)]);
var inst_41791 = cljs.core.next(inst_41781);
var inst_41781__$1 = inst_41791;
var state_41804__$1 = (function (){var statearr_41829 = state_41804;
(statearr_41829[(7)] = inst_41781__$1);

return statearr_41829;
})();
var statearr_41830_43848 = state_41804__$1;
(statearr_41830_43848[(2)] = null);

(statearr_41830_43848[(1)] = (2));


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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_41832 = [null,null,null,null,null,null,null,null];
(statearr_41832[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_41832[(1)] = (1));

return statearr_41832;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_41804){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_41804);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e41833){var ex__40961__auto__ = e41833;
var statearr_41834_43849 = state_41804;
(statearr_41834_43849[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_41804[(4)]))){
var statearr_41835_43850 = state_41804;
(statearr_41835_43850[(1)] = cljs.core.first((state_41804[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43851 = state_41804;
state_41804 = G__43851;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_41804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_41804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_41837 = f__41047__auto__();
(statearr_41837[(6)] = c__41046__auto__);

return statearr_41837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));

return c__41046__auto__;
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
var G__41843 = arguments.length;
switch (G__41843) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_43857 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43857(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43858 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43858(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43859 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43859(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43860 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43860(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41871 = (function (ch,cs,meta41872){
this.ch = ch;
this.cs = cs;
this.meta41872 = meta41872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41873,meta41872__$1){
var self__ = this;
var _41873__$1 = this;
return (new cljs.core.async.t_cljs$core$async41871(self__.ch,self__.cs,meta41872__$1));
}));

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41873){
var self__ = this;
var _41873__$1 = this;
return self__.meta41872;
}));

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41871.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41872","meta41872",994560089,null)], null);
}));

(cljs.core.async.t_cljs$core$async41871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41871");

(cljs.core.async.t_cljs$core$async41871.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41871.
 */
cljs.core.async.__GT_t_cljs$core$async41871 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41871(ch__$1,cs__$1,meta41872){
return (new cljs.core.async.t_cljs$core$async41871(ch__$1,cs__$1,meta41872));
});

}

return (new cljs.core.async.t_cljs$core$async41871(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41046__auto___43861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42109){
var state_val_42110 = (state_42109[(1)]);
if((state_val_42110 === (7))){
var inst_42105 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42111_43862 = state_42109__$1;
(statearr_42111_43862[(2)] = inst_42105);

(statearr_42111_43862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (20))){
var inst_41916 = (state_42109[(7)]);
var inst_41958 = cljs.core.first(inst_41916);
var inst_41959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41958,(0),null);
var inst_41960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41958,(1),null);
var state_42109__$1 = (function (){var statearr_42112 = state_42109;
(statearr_42112[(8)] = inst_41959);

return statearr_42112;
})();
if(cljs.core.truth_(inst_41960)){
var statearr_42113_43863 = state_42109__$1;
(statearr_42113_43863[(1)] = (22));

} else {
var statearr_42114_43864 = state_42109__$1;
(statearr_42114_43864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (27))){
var inst_41995 = (state_42109[(9)]);
var inst_41990 = (state_42109[(10)]);
var inst_41885 = (state_42109[(11)]);
var inst_41988 = (state_42109[(12)]);
var inst_41995__$1 = cljs.core._nth(inst_41988,inst_41990);
var inst_41996 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41995__$1,inst_41885,done);
var state_42109__$1 = (function (){var statearr_42117 = state_42109;
(statearr_42117[(9)] = inst_41995__$1);

return statearr_42117;
})();
if(cljs.core.truth_(inst_41996)){
var statearr_42118_43865 = state_42109__$1;
(statearr_42118_43865[(1)] = (30));

} else {
var statearr_42119_43866 = state_42109__$1;
(statearr_42119_43866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (1))){
var state_42109__$1 = state_42109;
var statearr_42121_43867 = state_42109__$1;
(statearr_42121_43867[(2)] = null);

(statearr_42121_43867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (24))){
var inst_41916 = (state_42109[(7)]);
var inst_41965 = (state_42109[(2)]);
var inst_41966 = cljs.core.next(inst_41916);
var inst_41894 = inst_41966;
var inst_41895 = null;
var inst_41896 = (0);
var inst_41897 = (0);
var state_42109__$1 = (function (){var statearr_42122 = state_42109;
(statearr_42122[(13)] = inst_41894);

(statearr_42122[(14)] = inst_41897);

(statearr_42122[(15)] = inst_41965);

(statearr_42122[(16)] = inst_41895);

(statearr_42122[(17)] = inst_41896);

return statearr_42122;
})();
var statearr_42123_43868 = state_42109__$1;
(statearr_42123_43868[(2)] = null);

(statearr_42123_43868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (39))){
var state_42109__$1 = state_42109;
var statearr_42127_43869 = state_42109__$1;
(statearr_42127_43869[(2)] = null);

(statearr_42127_43869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (4))){
var inst_41885 = (state_42109[(11)]);
var inst_41885__$1 = (state_42109[(2)]);
var inst_41886 = (inst_41885__$1 == null);
var state_42109__$1 = (function (){var statearr_42129 = state_42109;
(statearr_42129[(11)] = inst_41885__$1);

return statearr_42129;
})();
if(cljs.core.truth_(inst_41886)){
var statearr_42132_43870 = state_42109__$1;
(statearr_42132_43870[(1)] = (5));

} else {
var statearr_42136_43871 = state_42109__$1;
(statearr_42136_43871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (15))){
var inst_41894 = (state_42109[(13)]);
var inst_41897 = (state_42109[(14)]);
var inst_41895 = (state_42109[(16)]);
var inst_41896 = (state_42109[(17)]);
var inst_41912 = (state_42109[(2)]);
var inst_41913 = (inst_41897 + (1));
var tmp42124 = inst_41894;
var tmp42125 = inst_41895;
var tmp42126 = inst_41896;
var inst_41894__$1 = tmp42124;
var inst_41895__$1 = tmp42125;
var inst_41896__$1 = tmp42126;
var inst_41897__$1 = inst_41913;
var state_42109__$1 = (function (){var statearr_42138 = state_42109;
(statearr_42138[(13)] = inst_41894__$1);

(statearr_42138[(14)] = inst_41897__$1);

(statearr_42138[(16)] = inst_41895__$1);

(statearr_42138[(17)] = inst_41896__$1);

(statearr_42138[(18)] = inst_41912);

return statearr_42138;
})();
var statearr_42139_43872 = state_42109__$1;
(statearr_42139_43872[(2)] = null);

(statearr_42139_43872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (21))){
var inst_41969 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42143_43873 = state_42109__$1;
(statearr_42143_43873[(2)] = inst_41969);

(statearr_42143_43873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (31))){
var inst_41995 = (state_42109[(9)]);
var inst_41999 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41995);
var state_42109__$1 = state_42109;
var statearr_42144_43877 = state_42109__$1;
(statearr_42144_43877[(2)] = inst_41999);

(statearr_42144_43877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (32))){
var inst_41990 = (state_42109[(10)]);
var inst_41989 = (state_42109[(19)]);
var inst_41988 = (state_42109[(12)]);
var inst_41987 = (state_42109[(20)]);
var inst_42001 = (state_42109[(2)]);
var inst_42006 = (inst_41990 + (1));
var tmp42140 = inst_41989;
var tmp42141 = inst_41988;
var tmp42142 = inst_41987;
var inst_41987__$1 = tmp42142;
var inst_41988__$1 = tmp42141;
var inst_41989__$1 = tmp42140;
var inst_41990__$1 = inst_42006;
var state_42109__$1 = (function (){var statearr_42145 = state_42109;
(statearr_42145[(10)] = inst_41990__$1);

(statearr_42145[(19)] = inst_41989__$1);

(statearr_42145[(21)] = inst_42001);

(statearr_42145[(12)] = inst_41988__$1);

(statearr_42145[(20)] = inst_41987__$1);

return statearr_42145;
})();
var statearr_42150_43878 = state_42109__$1;
(statearr_42150_43878[(2)] = null);

(statearr_42150_43878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (40))){
var inst_42068 = (state_42109[(22)]);
var inst_42078 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42068);
var state_42109__$1 = state_42109;
var statearr_42151_43879 = state_42109__$1;
(statearr_42151_43879[(2)] = inst_42078);

(statearr_42151_43879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (33))){
var inst_42035 = (state_42109[(23)]);
var inst_42054 = cljs.core.chunked_seq_QMARK_(inst_42035);
var state_42109__$1 = state_42109;
if(inst_42054){
var statearr_42159_43882 = state_42109__$1;
(statearr_42159_43882[(1)] = (36));

} else {
var statearr_42165_43885 = state_42109__$1;
(statearr_42165_43885[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (13))){
var inst_41906 = (state_42109[(24)]);
var inst_41909 = cljs.core.async.close_BANG_(inst_41906);
var state_42109__$1 = state_42109;
var statearr_42166_43886 = state_42109__$1;
(statearr_42166_43886[(2)] = inst_41909);

(statearr_42166_43886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (22))){
var inst_41959 = (state_42109[(8)]);
var inst_41962 = cljs.core.async.close_BANG_(inst_41959);
var state_42109__$1 = state_42109;
var statearr_42167_43887 = state_42109__$1;
(statearr_42167_43887[(2)] = inst_41962);

(statearr_42167_43887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (36))){
var inst_42035 = (state_42109[(23)]);
var inst_42057 = cljs.core.chunk_first(inst_42035);
var inst_42058 = cljs.core.chunk_rest(inst_42035);
var inst_42059 = cljs.core.count(inst_42057);
var inst_41987 = inst_42058;
var inst_41988 = inst_42057;
var inst_41989 = inst_42059;
var inst_41990 = (0);
var state_42109__$1 = (function (){var statearr_42168 = state_42109;
(statearr_42168[(10)] = inst_41990);

(statearr_42168[(19)] = inst_41989);

(statearr_42168[(12)] = inst_41988);

(statearr_42168[(20)] = inst_41987);

return statearr_42168;
})();
var statearr_42169_43888 = state_42109__$1;
(statearr_42169_43888[(2)] = null);

(statearr_42169_43888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (41))){
var inst_42035 = (state_42109[(23)]);
var inst_42080 = (state_42109[(2)]);
var inst_42085 = cljs.core.next(inst_42035);
var inst_41987 = inst_42085;
var inst_41988 = null;
var inst_41989 = (0);
var inst_41990 = (0);
var state_42109__$1 = (function (){var statearr_42170 = state_42109;
(statearr_42170[(25)] = inst_42080);

(statearr_42170[(10)] = inst_41990);

(statearr_42170[(19)] = inst_41989);

(statearr_42170[(12)] = inst_41988);

(statearr_42170[(20)] = inst_41987);

return statearr_42170;
})();
var statearr_42171_43889 = state_42109__$1;
(statearr_42171_43889[(2)] = null);

(statearr_42171_43889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (43))){
var state_42109__$1 = state_42109;
var statearr_42172_43890 = state_42109__$1;
(statearr_42172_43890[(2)] = null);

(statearr_42172_43890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (29))){
var inst_42093 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42173_43891 = state_42109__$1;
(statearr_42173_43891[(2)] = inst_42093);

(statearr_42173_43891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (44))){
var inst_42102 = (state_42109[(2)]);
var state_42109__$1 = (function (){var statearr_42174 = state_42109;
(statearr_42174[(26)] = inst_42102);

return statearr_42174;
})();
var statearr_42175_43892 = state_42109__$1;
(statearr_42175_43892[(2)] = null);

(statearr_42175_43892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (6))){
var inst_41979 = (state_42109[(27)]);
var inst_41978 = cljs.core.deref(cs);
var inst_41979__$1 = cljs.core.keys(inst_41978);
var inst_41980 = cljs.core.count(inst_41979__$1);
var inst_41981 = cljs.core.reset_BANG_(dctr,inst_41980);
var inst_41986 = cljs.core.seq(inst_41979__$1);
var inst_41987 = inst_41986;
var inst_41988 = null;
var inst_41989 = (0);
var inst_41990 = (0);
var state_42109__$1 = (function (){var statearr_42176 = state_42109;
(statearr_42176[(10)] = inst_41990);

(statearr_42176[(19)] = inst_41989);

(statearr_42176[(27)] = inst_41979__$1);

(statearr_42176[(28)] = inst_41981);

(statearr_42176[(12)] = inst_41988);

(statearr_42176[(20)] = inst_41987);

return statearr_42176;
})();
var statearr_42177_43893 = state_42109__$1;
(statearr_42177_43893[(2)] = null);

(statearr_42177_43893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (28))){
var inst_42035 = (state_42109[(23)]);
var inst_41987 = (state_42109[(20)]);
var inst_42035__$1 = cljs.core.seq(inst_41987);
var state_42109__$1 = (function (){var statearr_42178 = state_42109;
(statearr_42178[(23)] = inst_42035__$1);

return statearr_42178;
})();
if(inst_42035__$1){
var statearr_42179_43894 = state_42109__$1;
(statearr_42179_43894[(1)] = (33));

} else {
var statearr_42180_43895 = state_42109__$1;
(statearr_42180_43895[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (25))){
var inst_41990 = (state_42109[(10)]);
var inst_41989 = (state_42109[(19)]);
var inst_41992 = (inst_41990 < inst_41989);
var inst_41993 = inst_41992;
var state_42109__$1 = state_42109;
if(cljs.core.truth_(inst_41993)){
var statearr_42181_43896 = state_42109__$1;
(statearr_42181_43896[(1)] = (27));

} else {
var statearr_42182_43897 = state_42109__$1;
(statearr_42182_43897[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (34))){
var state_42109__$1 = state_42109;
var statearr_42183_43898 = state_42109__$1;
(statearr_42183_43898[(2)] = null);

(statearr_42183_43898[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (17))){
var state_42109__$1 = state_42109;
var statearr_42184_43899 = state_42109__$1;
(statearr_42184_43899[(2)] = null);

(statearr_42184_43899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (3))){
var inst_42107 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42109__$1,inst_42107);
} else {
if((state_val_42110 === (12))){
var inst_41974 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42185_43900 = state_42109__$1;
(statearr_42185_43900[(2)] = inst_41974);

(statearr_42185_43900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (2))){
var state_42109__$1 = state_42109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42109__$1,(4),ch);
} else {
if((state_val_42110 === (23))){
var state_42109__$1 = state_42109;
var statearr_42186_43901 = state_42109__$1;
(statearr_42186_43901[(2)] = null);

(statearr_42186_43901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (35))){
var inst_42091 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42187_43902 = state_42109__$1;
(statearr_42187_43902[(2)] = inst_42091);

(statearr_42187_43902[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (19))){
var inst_41916 = (state_42109[(7)]);
var inst_41948 = cljs.core.chunk_first(inst_41916);
var inst_41949 = cljs.core.chunk_rest(inst_41916);
var inst_41950 = cljs.core.count(inst_41948);
var inst_41894 = inst_41949;
var inst_41895 = inst_41948;
var inst_41896 = inst_41950;
var inst_41897 = (0);
var state_42109__$1 = (function (){var statearr_42188 = state_42109;
(statearr_42188[(13)] = inst_41894);

(statearr_42188[(14)] = inst_41897);

(statearr_42188[(16)] = inst_41895);

(statearr_42188[(17)] = inst_41896);

return statearr_42188;
})();
var statearr_42189_43903 = state_42109__$1;
(statearr_42189_43903[(2)] = null);

(statearr_42189_43903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (11))){
var inst_41916 = (state_42109[(7)]);
var inst_41894 = (state_42109[(13)]);
var inst_41916__$1 = cljs.core.seq(inst_41894);
var state_42109__$1 = (function (){var statearr_42193 = state_42109;
(statearr_42193[(7)] = inst_41916__$1);

return statearr_42193;
})();
if(inst_41916__$1){
var statearr_42194_43904 = state_42109__$1;
(statearr_42194_43904[(1)] = (16));

} else {
var statearr_42195_43905 = state_42109__$1;
(statearr_42195_43905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (9))){
var inst_41976 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42196_43906 = state_42109__$1;
(statearr_42196_43906[(2)] = inst_41976);

(statearr_42196_43906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (5))){
var inst_41892 = cljs.core.deref(cs);
var inst_41893 = cljs.core.seq(inst_41892);
var inst_41894 = inst_41893;
var inst_41895 = null;
var inst_41896 = (0);
var inst_41897 = (0);
var state_42109__$1 = (function (){var statearr_42201 = state_42109;
(statearr_42201[(13)] = inst_41894);

(statearr_42201[(14)] = inst_41897);

(statearr_42201[(16)] = inst_41895);

(statearr_42201[(17)] = inst_41896);

return statearr_42201;
})();
var statearr_42202_43907 = state_42109__$1;
(statearr_42202_43907[(2)] = null);

(statearr_42202_43907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (14))){
var state_42109__$1 = state_42109;
var statearr_42203_43908 = state_42109__$1;
(statearr_42203_43908[(2)] = null);

(statearr_42203_43908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (45))){
var inst_42099 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42204_43909 = state_42109__$1;
(statearr_42204_43909[(2)] = inst_42099);

(statearr_42204_43909[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (26))){
var inst_41979 = (state_42109[(27)]);
var inst_42095 = (state_42109[(2)]);
var inst_42096 = cljs.core.seq(inst_41979);
var state_42109__$1 = (function (){var statearr_42205 = state_42109;
(statearr_42205[(29)] = inst_42095);

return statearr_42205;
})();
if(inst_42096){
var statearr_42206_43910 = state_42109__$1;
(statearr_42206_43910[(1)] = (42));

} else {
var statearr_42207_43911 = state_42109__$1;
(statearr_42207_43911[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (16))){
var inst_41916 = (state_42109[(7)]);
var inst_41946 = cljs.core.chunked_seq_QMARK_(inst_41916);
var state_42109__$1 = state_42109;
if(inst_41946){
var statearr_42208_43912 = state_42109__$1;
(statearr_42208_43912[(1)] = (19));

} else {
var statearr_42209_43913 = state_42109__$1;
(statearr_42209_43913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (38))){
var inst_42088 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42210_43914 = state_42109__$1;
(statearr_42210_43914[(2)] = inst_42088);

(statearr_42210_43914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (30))){
var state_42109__$1 = state_42109;
var statearr_42211_43915 = state_42109__$1;
(statearr_42211_43915[(2)] = null);

(statearr_42211_43915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (10))){
var inst_41897 = (state_42109[(14)]);
var inst_41895 = (state_42109[(16)]);
var inst_41905 = cljs.core._nth(inst_41895,inst_41897);
var inst_41906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41905,(0),null);
var inst_41907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41905,(1),null);
var state_42109__$1 = (function (){var statearr_42214 = state_42109;
(statearr_42214[(24)] = inst_41906);

return statearr_42214;
})();
if(cljs.core.truth_(inst_41907)){
var statearr_42215_43917 = state_42109__$1;
(statearr_42215_43917[(1)] = (13));

} else {
var statearr_42216_43918 = state_42109__$1;
(statearr_42216_43918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (18))){
var inst_41972 = (state_42109[(2)]);
var state_42109__$1 = state_42109;
var statearr_42217_43919 = state_42109__$1;
(statearr_42217_43919[(2)] = inst_41972);

(statearr_42217_43919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (42))){
var state_42109__$1 = state_42109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42109__$1,(45),dchan);
} else {
if((state_val_42110 === (37))){
var inst_42035 = (state_42109[(23)]);
var inst_41885 = (state_42109[(11)]);
var inst_42068 = (state_42109[(22)]);
var inst_42068__$1 = cljs.core.first(inst_42035);
var inst_42074 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42068__$1,inst_41885,done);
var state_42109__$1 = (function (){var statearr_42218 = state_42109;
(statearr_42218[(22)] = inst_42068__$1);

return statearr_42218;
})();
if(cljs.core.truth_(inst_42074)){
var statearr_42219_43921 = state_42109__$1;
(statearr_42219_43921[(1)] = (39));

} else {
var statearr_42220_43922 = state_42109__$1;
(statearr_42220_43922[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42110 === (8))){
var inst_41897 = (state_42109[(14)]);
var inst_41896 = (state_42109[(17)]);
var inst_41899 = (inst_41897 < inst_41896);
var inst_41900 = inst_41899;
var state_42109__$1 = state_42109;
if(cljs.core.truth_(inst_41900)){
var statearr_42221_43923 = state_42109__$1;
(statearr_42221_43923[(1)] = (10));

} else {
var statearr_42222_43924 = state_42109__$1;
(statearr_42222_43924[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__40958__auto__ = null;
var cljs$core$async$mult_$_state_machine__40958__auto____0 = (function (){
var statearr_42226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42226[(0)] = cljs$core$async$mult_$_state_machine__40958__auto__);

(statearr_42226[(1)] = (1));

return statearr_42226;
});
var cljs$core$async$mult_$_state_machine__40958__auto____1 = (function (state_42109){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42109);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e42227){var ex__40961__auto__ = e42227;
var statearr_42228_43925 = state_42109;
(statearr_42228_43925[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42109[(4)]))){
var statearr_42229_43926 = state_42109;
(statearr_42229_43926[(1)] = cljs.core.first((state_42109[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43929 = state_42109;
state_42109 = G__43929;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40958__auto__ = function(state_42109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40958__auto____1.call(this,state_42109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40958__auto____0;
cljs$core$async$mult_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40958__auto____1;
return cljs$core$async$mult_$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_42230 = f__41047__auto__();
(statearr_42230[(6)] = c__41046__auto___43861);

return statearr_42230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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
var G__42232 = arguments.length;
switch (G__42232) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_43949 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43949(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43954 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43954(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43958 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43958(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43962 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43962(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43963 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43963(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43964 = arguments.length;
var i__4865__auto___43968 = (0);
while(true){
if((i__4865__auto___43968 < len__4864__auto___43964)){
args__4870__auto__.push((arguments[i__4865__auto___43968]));

var G__43969 = (i__4865__auto___43968 + (1));
i__4865__auto___43968 = G__43969;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42266){
var map__42267 = p__42266;
var map__42267__$1 = cljs.core.__destructure_map(map__42267);
var opts = map__42267__$1;
var statearr_42271_43970 = state;
(statearr_42271_43970[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42272_43971 = state;
(statearr_42272_43971[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_42273_43976 = state;
(statearr_42273_43976[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42261){
var G__42262 = cljs.core.first(seq42261);
var seq42261__$1 = cljs.core.next(seq42261);
var G__42263 = cljs.core.first(seq42261__$1);
var seq42261__$2 = cljs.core.next(seq42261__$1);
var G__42264 = cljs.core.first(seq42261__$2);
var seq42261__$3 = cljs.core.next(seq42261__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42262,G__42263,G__42264,seq42261__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42280 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42281){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42281 = meta42281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42282,meta42281__$1){
var self__ = this;
var _42282__$1 = this;
return (new cljs.core.async.t_cljs$core$async42280(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42281__$1));
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42282){
var self__ = this;
var _42282__$1 = this;
return self__.meta42281;
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42281","meta42281",196034079,null)], null);
}));

(cljs.core.async.t_cljs$core$async42280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42280");

(cljs.core.async.t_cljs$core$async42280.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42280.
 */
cljs.core.async.__GT_t_cljs$core$async42280 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42280(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42281){
return (new cljs.core.async.t_cljs$core$async42280(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42281));
});

}

return (new cljs.core.async.t_cljs$core$async42280(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41046__auto___43996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42377){
var state_val_42378 = (state_42377[(1)]);
if((state_val_42378 === (7))){
var inst_42327 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42327)){
var statearr_42385_43998 = state_42377__$1;
(statearr_42385_43998[(1)] = (8));

} else {
var statearr_42386_43999 = state_42377__$1;
(statearr_42386_43999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (20))){
var inst_42320 = (state_42377[(7)]);
var state_42377__$1 = state_42377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42377__$1,(23),out,inst_42320);
} else {
if((state_val_42378 === (1))){
var inst_42302 = calc_state();
var inst_42303 = cljs.core.__destructure_map(inst_42302);
var inst_42304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42303,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42303,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42303,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42308 = inst_42302;
var state_42377__$1 = (function (){var statearr_42387 = state_42377;
(statearr_42387[(8)] = inst_42308);

(statearr_42387[(9)] = inst_42306);

(statearr_42387[(10)] = inst_42304);

(statearr_42387[(11)] = inst_42305);

return statearr_42387;
})();
var statearr_42388_44000 = state_42377__$1;
(statearr_42388_44000[(2)] = null);

(statearr_42388_44000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (24))){
var inst_42311 = (state_42377[(12)]);
var inst_42308 = inst_42311;
var state_42377__$1 = (function (){var statearr_42389 = state_42377;
(statearr_42389[(8)] = inst_42308);

return statearr_42389;
})();
var statearr_42390_44001 = state_42377__$1;
(statearr_42390_44001[(2)] = null);

(statearr_42390_44001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (4))){
var inst_42320 = (state_42377[(7)]);
var inst_42322 = (state_42377[(13)]);
var inst_42319 = (state_42377[(2)]);
var inst_42320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42319,(0),null);
var inst_42321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42319,(1),null);
var inst_42322__$1 = (inst_42320__$1 == null);
var state_42377__$1 = (function (){var statearr_42391 = state_42377;
(statearr_42391[(14)] = inst_42321);

(statearr_42391[(7)] = inst_42320__$1);

(statearr_42391[(13)] = inst_42322__$1);

return statearr_42391;
})();
if(cljs.core.truth_(inst_42322__$1)){
var statearr_42392_44003 = state_42377__$1;
(statearr_42392_44003[(1)] = (5));

} else {
var statearr_42393_44004 = state_42377__$1;
(statearr_42393_44004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (15))){
var inst_42341 = (state_42377[(15)]);
var inst_42312 = (state_42377[(16)]);
var inst_42341__$1 = cljs.core.empty_QMARK_(inst_42312);
var state_42377__$1 = (function (){var statearr_42394 = state_42377;
(statearr_42394[(15)] = inst_42341__$1);

return statearr_42394;
})();
if(inst_42341__$1){
var statearr_42395_44005 = state_42377__$1;
(statearr_42395_44005[(1)] = (17));

} else {
var statearr_42396_44006 = state_42377__$1;
(statearr_42396_44006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (21))){
var inst_42311 = (state_42377[(12)]);
var inst_42308 = inst_42311;
var state_42377__$1 = (function (){var statearr_42397 = state_42377;
(statearr_42397[(8)] = inst_42308);

return statearr_42397;
})();
var statearr_42398_44007 = state_42377__$1;
(statearr_42398_44007[(2)] = null);

(statearr_42398_44007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (13))){
var inst_42334 = (state_42377[(2)]);
var inst_42335 = calc_state();
var inst_42308 = inst_42335;
var state_42377__$1 = (function (){var statearr_42399 = state_42377;
(statearr_42399[(8)] = inst_42308);

(statearr_42399[(17)] = inst_42334);

return statearr_42399;
})();
var statearr_42400_44008 = state_42377__$1;
(statearr_42400_44008[(2)] = null);

(statearr_42400_44008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (22))){
var inst_42361 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42402_44009 = state_42377__$1;
(statearr_42402_44009[(2)] = inst_42361);

(statearr_42402_44009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (6))){
var inst_42321 = (state_42377[(14)]);
var inst_42325 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42321,change);
var state_42377__$1 = state_42377;
var statearr_42404_44010 = state_42377__$1;
(statearr_42404_44010[(2)] = inst_42325);

(statearr_42404_44010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (25))){
var state_42377__$1 = state_42377;
var statearr_42405_44011 = state_42377__$1;
(statearr_42405_44011[(2)] = null);

(statearr_42405_44011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (17))){
var inst_42321 = (state_42377[(14)]);
var inst_42313 = (state_42377[(18)]);
var inst_42343 = (inst_42313.cljs$core$IFn$_invoke$arity$1 ? inst_42313.cljs$core$IFn$_invoke$arity$1(inst_42321) : inst_42313.call(null,inst_42321));
var inst_42344 = cljs.core.not(inst_42343);
var state_42377__$1 = state_42377;
var statearr_42407_44012 = state_42377__$1;
(statearr_42407_44012[(2)] = inst_42344);

(statearr_42407_44012[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (3))){
var inst_42365 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42377__$1,inst_42365);
} else {
if((state_val_42378 === (12))){
var state_42377__$1 = state_42377;
var statearr_42408_44013 = state_42377__$1;
(statearr_42408_44013[(2)] = null);

(statearr_42408_44013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (2))){
var inst_42308 = (state_42377[(8)]);
var inst_42311 = (state_42377[(12)]);
var inst_42311__$1 = cljs.core.__destructure_map(inst_42308);
var inst_42312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42311__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42311__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42311__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42377__$1 = (function (){var statearr_42410 = state_42377;
(statearr_42410[(18)] = inst_42313);

(statearr_42410[(12)] = inst_42311__$1);

(statearr_42410[(16)] = inst_42312);

return statearr_42410;
})();
return cljs.core.async.ioc_alts_BANG_(state_42377__$1,(4),inst_42314);
} else {
if((state_val_42378 === (23))){
var inst_42352 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42352)){
var statearr_42412_44014 = state_42377__$1;
(statearr_42412_44014[(1)] = (24));

} else {
var statearr_42414_44015 = state_42377__$1;
(statearr_42414_44015[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (19))){
var inst_42347 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42415_44016 = state_42377__$1;
(statearr_42415_44016[(2)] = inst_42347);

(statearr_42415_44016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (11))){
var inst_42321 = (state_42377[(14)]);
var inst_42331 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42321);
var state_42377__$1 = state_42377;
var statearr_42416_44017 = state_42377__$1;
(statearr_42416_44017[(2)] = inst_42331);

(statearr_42416_44017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (9))){
var inst_42321 = (state_42377[(14)]);
var inst_42312 = (state_42377[(16)]);
var inst_42338 = (state_42377[(19)]);
var inst_42338__$1 = (inst_42312.cljs$core$IFn$_invoke$arity$1 ? inst_42312.cljs$core$IFn$_invoke$arity$1(inst_42321) : inst_42312.call(null,inst_42321));
var state_42377__$1 = (function (){var statearr_42417 = state_42377;
(statearr_42417[(19)] = inst_42338__$1);

return statearr_42417;
})();
if(cljs.core.truth_(inst_42338__$1)){
var statearr_42418_44018 = state_42377__$1;
(statearr_42418_44018[(1)] = (14));

} else {
var statearr_42419_44019 = state_42377__$1;
(statearr_42419_44019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (5))){
var inst_42322 = (state_42377[(13)]);
var state_42377__$1 = state_42377;
var statearr_42423_44020 = state_42377__$1;
(statearr_42423_44020[(2)] = inst_42322);

(statearr_42423_44020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (14))){
var inst_42338 = (state_42377[(19)]);
var state_42377__$1 = state_42377;
var statearr_42427_44021 = state_42377__$1;
(statearr_42427_44021[(2)] = inst_42338);

(statearr_42427_44021[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (26))){
var inst_42357 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42437_44022 = state_42377__$1;
(statearr_42437_44022[(2)] = inst_42357);

(statearr_42437_44022[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (16))){
var inst_42349 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42349)){
var statearr_42438_44023 = state_42377__$1;
(statearr_42438_44023[(1)] = (20));

} else {
var statearr_42439_44024 = state_42377__$1;
(statearr_42439_44024[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (10))){
var inst_42363 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42440_44025 = state_42377__$1;
(statearr_42440_44025[(2)] = inst_42363);

(statearr_42440_44025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (18))){
var inst_42341 = (state_42377[(15)]);
var state_42377__$1 = state_42377;
var statearr_42441_44026 = state_42377__$1;
(statearr_42441_44026[(2)] = inst_42341);

(statearr_42441_44026[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (8))){
var inst_42320 = (state_42377[(7)]);
var inst_42329 = (inst_42320 == null);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42329)){
var statearr_42442_44027 = state_42377__$1;
(statearr_42442_44027[(1)] = (11));

} else {
var statearr_42443_44028 = state_42377__$1;
(statearr_42443_44028[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__40958__auto__ = null;
var cljs$core$async$mix_$_state_machine__40958__auto____0 = (function (){
var statearr_42444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42444[(0)] = cljs$core$async$mix_$_state_machine__40958__auto__);

(statearr_42444[(1)] = (1));

return statearr_42444;
});
var cljs$core$async$mix_$_state_machine__40958__auto____1 = (function (state_42377){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42377);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e42448){var ex__40961__auto__ = e42448;
var statearr_42449_44029 = state_42377;
(statearr_42449_44029[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42377[(4)]))){
var statearr_42450_44030 = state_42377;
(statearr_42450_44030[(1)] = cljs.core.first((state_42377[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44031 = state_42377;
state_42377 = G__44031;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40958__auto__ = function(state_42377){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40958__auto____1.call(this,state_42377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40958__auto____0;
cljs$core$async$mix_$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40958__auto____1;
return cljs$core$async$mix_$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_42451 = f__41047__auto__();
(statearr_42451[(6)] = c__41046__auto___43996);

return statearr_42451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44032 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44032(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44035 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44035(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44036 = (function() {
var G__44037 = null;
var G__44037__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44037__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44037 = function(p,v){
switch(arguments.length){
case 1:
return G__44037__1.call(this,p);
case 2:
return G__44037__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44037.cljs$core$IFn$_invoke$arity$1 = G__44037__1;
G__44037.cljs$core$IFn$_invoke$arity$2 = G__44037__2;
return G__44037;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42468 = arguments.length;
switch (G__42468) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44036(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44036(p,v);
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
var G__42477 = arguments.length;
switch (G__42477) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42469_SHARP_){
if(cljs.core.truth_((p1__42469_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42469_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42469_SHARP_.call(null,topic)))){
return p1__42469_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42469_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42479 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42480){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42480 = meta42480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42481,meta42480__$1){
var self__ = this;
var _42481__$1 = this;
return (new cljs.core.async.t_cljs$core$async42479(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42480__$1));
}));

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42481){
var self__ = this;
var _42481__$1 = this;
return self__.meta42480;
}));

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42480","meta42480",1678523219,null)], null);
}));

(cljs.core.async.t_cljs$core$async42479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42479");

(cljs.core.async.t_cljs$core$async42479.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42479.
 */
cljs.core.async.__GT_t_cljs$core$async42479 = (function cljs$core$async$__GT_t_cljs$core$async42479(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42480){
return (new cljs.core.async.t_cljs$core$async42479(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42480));
});

}

return (new cljs.core.async.t_cljs$core$async42479(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41046__auto___44054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42562){
var state_val_42563 = (state_42562[(1)]);
if((state_val_42563 === (7))){
var inst_42552 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42567_44055 = state_42562__$1;
(statearr_42567_44055[(2)] = inst_42552);

(statearr_42567_44055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (20))){
var state_42562__$1 = state_42562;
var statearr_42568_44057 = state_42562__$1;
(statearr_42568_44057[(2)] = null);

(statearr_42568_44057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (1))){
var state_42562__$1 = state_42562;
var statearr_42569_44058 = state_42562__$1;
(statearr_42569_44058[(2)] = null);

(statearr_42569_44058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (24))){
var inst_42535 = (state_42562[(7)]);
var inst_42544 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42535);
var state_42562__$1 = state_42562;
var statearr_42570_44059 = state_42562__$1;
(statearr_42570_44059[(2)] = inst_42544);

(statearr_42570_44059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (4))){
var inst_42487 = (state_42562[(8)]);
var inst_42487__$1 = (state_42562[(2)]);
var inst_42488 = (inst_42487__$1 == null);
var state_42562__$1 = (function (){var statearr_42571 = state_42562;
(statearr_42571[(8)] = inst_42487__$1);

return statearr_42571;
})();
if(cljs.core.truth_(inst_42488)){
var statearr_42572_44064 = state_42562__$1;
(statearr_42572_44064[(1)] = (5));

} else {
var statearr_42573_44065 = state_42562__$1;
(statearr_42573_44065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (15))){
var inst_42529 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42574_44066 = state_42562__$1;
(statearr_42574_44066[(2)] = inst_42529);

(statearr_42574_44066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (21))){
var inst_42549 = (state_42562[(2)]);
var state_42562__$1 = (function (){var statearr_42575 = state_42562;
(statearr_42575[(9)] = inst_42549);

return statearr_42575;
})();
var statearr_42576_44067 = state_42562__$1;
(statearr_42576_44067[(2)] = null);

(statearr_42576_44067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (13))){
var inst_42511 = (state_42562[(10)]);
var inst_42513 = cljs.core.chunked_seq_QMARK_(inst_42511);
var state_42562__$1 = state_42562;
if(inst_42513){
var statearr_42577_44077 = state_42562__$1;
(statearr_42577_44077[(1)] = (16));

} else {
var statearr_42578_44078 = state_42562__$1;
(statearr_42578_44078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (22))){
var inst_42541 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
if(cljs.core.truth_(inst_42541)){
var statearr_42579_44083 = state_42562__$1;
(statearr_42579_44083[(1)] = (23));

} else {
var statearr_42583_44084 = state_42562__$1;
(statearr_42583_44084[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (6))){
var inst_42535 = (state_42562[(7)]);
var inst_42487 = (state_42562[(8)]);
var inst_42537 = (state_42562[(11)]);
var inst_42535__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42487) : topic_fn.call(null,inst_42487));
var inst_42536 = cljs.core.deref(mults);
var inst_42537__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42536,inst_42535__$1);
var state_42562__$1 = (function (){var statearr_42586 = state_42562;
(statearr_42586[(7)] = inst_42535__$1);

(statearr_42586[(11)] = inst_42537__$1);

return statearr_42586;
})();
if(cljs.core.truth_(inst_42537__$1)){
var statearr_42587_44085 = state_42562__$1;
(statearr_42587_44085[(1)] = (19));

} else {
var statearr_42588_44086 = state_42562__$1;
(statearr_42588_44086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (25))){
var inst_42546 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42592_44087 = state_42562__$1;
(statearr_42592_44087[(2)] = inst_42546);

(statearr_42592_44087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (17))){
var inst_42511 = (state_42562[(10)]);
var inst_42520 = cljs.core.first(inst_42511);
var inst_42521 = cljs.core.async.muxch_STAR_(inst_42520);
var inst_42522 = cljs.core.async.close_BANG_(inst_42521);
var inst_42523 = cljs.core.next(inst_42511);
var inst_42497 = inst_42523;
var inst_42498 = null;
var inst_42499 = (0);
var inst_42500 = (0);
var state_42562__$1 = (function (){var statearr_42595 = state_42562;
(statearr_42595[(12)] = inst_42499);

(statearr_42595[(13)] = inst_42498);

(statearr_42595[(14)] = inst_42500);

(statearr_42595[(15)] = inst_42522);

(statearr_42595[(16)] = inst_42497);

return statearr_42595;
})();
var statearr_42596_44088 = state_42562__$1;
(statearr_42596_44088[(2)] = null);

(statearr_42596_44088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (3))){
var inst_42560 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42562__$1,inst_42560);
} else {
if((state_val_42563 === (12))){
var inst_42531 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42597_44089 = state_42562__$1;
(statearr_42597_44089[(2)] = inst_42531);

(statearr_42597_44089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (2))){
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42562__$1,(4),ch);
} else {
if((state_val_42563 === (23))){
var state_42562__$1 = state_42562;
var statearr_42598_44090 = state_42562__$1;
(statearr_42598_44090[(2)] = null);

(statearr_42598_44090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (19))){
var inst_42487 = (state_42562[(8)]);
var inst_42537 = (state_42562[(11)]);
var inst_42539 = cljs.core.async.muxch_STAR_(inst_42537);
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42562__$1,(22),inst_42539,inst_42487);
} else {
if((state_val_42563 === (11))){
var inst_42497 = (state_42562[(16)]);
var inst_42511 = (state_42562[(10)]);
var inst_42511__$1 = cljs.core.seq(inst_42497);
var state_42562__$1 = (function (){var statearr_42599 = state_42562;
(statearr_42599[(10)] = inst_42511__$1);

return statearr_42599;
})();
if(inst_42511__$1){
var statearr_42600_44091 = state_42562__$1;
(statearr_42600_44091[(1)] = (13));

} else {
var statearr_42601_44092 = state_42562__$1;
(statearr_42601_44092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (9))){
var inst_42533 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42602_44093 = state_42562__$1;
(statearr_42602_44093[(2)] = inst_42533);

(statearr_42602_44093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (5))){
var inst_42494 = cljs.core.deref(mults);
var inst_42495 = cljs.core.vals(inst_42494);
var inst_42496 = cljs.core.seq(inst_42495);
var inst_42497 = inst_42496;
var inst_42498 = null;
var inst_42499 = (0);
var inst_42500 = (0);
var state_42562__$1 = (function (){var statearr_42603 = state_42562;
(statearr_42603[(12)] = inst_42499);

(statearr_42603[(13)] = inst_42498);

(statearr_42603[(14)] = inst_42500);

(statearr_42603[(16)] = inst_42497);

return statearr_42603;
})();
var statearr_42607_44094 = state_42562__$1;
(statearr_42607_44094[(2)] = null);

(statearr_42607_44094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (14))){
var state_42562__$1 = state_42562;
var statearr_42620_44095 = state_42562__$1;
(statearr_42620_44095[(2)] = null);

(statearr_42620_44095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (16))){
var inst_42511 = (state_42562[(10)]);
var inst_42515 = cljs.core.chunk_first(inst_42511);
var inst_42516 = cljs.core.chunk_rest(inst_42511);
var inst_42517 = cljs.core.count(inst_42515);
var inst_42497 = inst_42516;
var inst_42498 = inst_42515;
var inst_42499 = inst_42517;
var inst_42500 = (0);
var state_42562__$1 = (function (){var statearr_42621 = state_42562;
(statearr_42621[(12)] = inst_42499);

(statearr_42621[(13)] = inst_42498);

(statearr_42621[(14)] = inst_42500);

(statearr_42621[(16)] = inst_42497);

return statearr_42621;
})();
var statearr_42622_44103 = state_42562__$1;
(statearr_42622_44103[(2)] = null);

(statearr_42622_44103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (10))){
var inst_42499 = (state_42562[(12)]);
var inst_42498 = (state_42562[(13)]);
var inst_42500 = (state_42562[(14)]);
var inst_42497 = (state_42562[(16)]);
var inst_42505 = cljs.core._nth(inst_42498,inst_42500);
var inst_42506 = cljs.core.async.muxch_STAR_(inst_42505);
var inst_42507 = cljs.core.async.close_BANG_(inst_42506);
var inst_42508 = (inst_42500 + (1));
var tmp42617 = inst_42499;
var tmp42618 = inst_42498;
var tmp42619 = inst_42497;
var inst_42497__$1 = tmp42619;
var inst_42498__$1 = tmp42618;
var inst_42499__$1 = tmp42617;
var inst_42500__$1 = inst_42508;
var state_42562__$1 = (function (){var statearr_42624 = state_42562;
(statearr_42624[(12)] = inst_42499__$1);

(statearr_42624[(17)] = inst_42507);

(statearr_42624[(13)] = inst_42498__$1);

(statearr_42624[(14)] = inst_42500__$1);

(statearr_42624[(16)] = inst_42497__$1);

return statearr_42624;
})();
var statearr_42625_44104 = state_42562__$1;
(statearr_42625_44104[(2)] = null);

(statearr_42625_44104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (18))){
var inst_42526 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42626_44105 = state_42562__$1;
(statearr_42626_44105[(2)] = inst_42526);

(statearr_42626_44105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (8))){
var inst_42499 = (state_42562[(12)]);
var inst_42500 = (state_42562[(14)]);
var inst_42502 = (inst_42500 < inst_42499);
var inst_42503 = inst_42502;
var state_42562__$1 = state_42562;
if(cljs.core.truth_(inst_42503)){
var statearr_42627_44106 = state_42562__$1;
(statearr_42627_44106[(1)] = (10));

} else {
var statearr_42628_44107 = state_42562__$1;
(statearr_42628_44107[(1)] = (11));

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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_42629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42629[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_42629[(1)] = (1));

return statearr_42629;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_42562){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42562);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e42630){var ex__40961__auto__ = e42630;
var statearr_42631_44108 = state_42562;
(statearr_42631_44108[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42562[(4)]))){
var statearr_42632_44109 = state_42562;
(statearr_42632_44109[(1)] = cljs.core.first((state_42562[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44110 = state_42562;
state_42562 = G__44110;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_42562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_42562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_42633 = f__41047__auto__();
(statearr_42633[(6)] = c__41046__auto___44054);

return statearr_42633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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
var G__42635 = arguments.length;
switch (G__42635) {
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
var G__42643 = arguments.length;
switch (G__42643) {
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
var G__42648 = arguments.length;
switch (G__42648) {
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
var c__41046__auto___44114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42694){
var state_val_42695 = (state_42694[(1)]);
if((state_val_42695 === (7))){
var state_42694__$1 = state_42694;
var statearr_42696_44115 = state_42694__$1;
(statearr_42696_44115[(2)] = null);

(statearr_42696_44115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (1))){
var state_42694__$1 = state_42694;
var statearr_42697_44116 = state_42694__$1;
(statearr_42697_44116[(2)] = null);

(statearr_42697_44116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (4))){
var inst_42652 = (state_42694[(7)]);
var inst_42651 = (state_42694[(8)]);
var inst_42654 = (inst_42652 < inst_42651);
var state_42694__$1 = state_42694;
if(cljs.core.truth_(inst_42654)){
var statearr_42698_44117 = state_42694__$1;
(statearr_42698_44117[(1)] = (6));

} else {
var statearr_42699_44118 = state_42694__$1;
(statearr_42699_44118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (15))){
var inst_42680 = (state_42694[(9)]);
var inst_42685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42680);
var state_42694__$1 = state_42694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42694__$1,(17),out,inst_42685);
} else {
if((state_val_42695 === (13))){
var inst_42680 = (state_42694[(9)]);
var inst_42680__$1 = (state_42694[(2)]);
var inst_42681 = cljs.core.some(cljs.core.nil_QMARK_,inst_42680__$1);
var state_42694__$1 = (function (){var statearr_42700 = state_42694;
(statearr_42700[(9)] = inst_42680__$1);

return statearr_42700;
})();
if(cljs.core.truth_(inst_42681)){
var statearr_42701_44119 = state_42694__$1;
(statearr_42701_44119[(1)] = (14));

} else {
var statearr_42702_44120 = state_42694__$1;
(statearr_42702_44120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (6))){
var state_42694__$1 = state_42694;
var statearr_42703_44121 = state_42694__$1;
(statearr_42703_44121[(2)] = null);

(statearr_42703_44121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (17))){
var inst_42687 = (state_42694[(2)]);
var state_42694__$1 = (function (){var statearr_42705 = state_42694;
(statearr_42705[(10)] = inst_42687);

return statearr_42705;
})();
var statearr_42706_44122 = state_42694__$1;
(statearr_42706_44122[(2)] = null);

(statearr_42706_44122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (3))){
var inst_42692 = (state_42694[(2)]);
var state_42694__$1 = state_42694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42694__$1,inst_42692);
} else {
if((state_val_42695 === (12))){
var _ = (function (){var statearr_42707 = state_42694;
(statearr_42707[(4)] = cljs.core.rest((state_42694[(4)])));

return statearr_42707;
})();
var state_42694__$1 = state_42694;
var ex42704 = (state_42694__$1[(2)]);
var statearr_42708_44123 = state_42694__$1;
(statearr_42708_44123[(5)] = ex42704);


if((ex42704 instanceof Object)){
var statearr_42709_44124 = state_42694__$1;
(statearr_42709_44124[(1)] = (11));

(statearr_42709_44124[(5)] = null);

} else {
throw ex42704;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (2))){
var inst_42650 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42651 = cnt;
var inst_42652 = (0);
var state_42694__$1 = (function (){var statearr_42713 = state_42694;
(statearr_42713[(7)] = inst_42652);

(statearr_42713[(8)] = inst_42651);

(statearr_42713[(11)] = inst_42650);

return statearr_42713;
})();
var statearr_42714_44125 = state_42694__$1;
(statearr_42714_44125[(2)] = null);

(statearr_42714_44125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (11))){
var inst_42659 = (state_42694[(2)]);
var inst_42660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42694__$1 = (function (){var statearr_42715 = state_42694;
(statearr_42715[(12)] = inst_42659);

return statearr_42715;
})();
var statearr_42716_44126 = state_42694__$1;
(statearr_42716_44126[(2)] = inst_42660);

(statearr_42716_44126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (9))){
var inst_42652 = (state_42694[(7)]);
var _ = (function (){var statearr_42717 = state_42694;
(statearr_42717[(4)] = cljs.core.cons((12),(state_42694[(4)])));

return statearr_42717;
})();
var inst_42666 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42652) : chs__$1.call(null,inst_42652));
var inst_42667 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42652) : done.call(null,inst_42652));
var inst_42668 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42666,inst_42667);
var ___$1 = (function (){var statearr_42721 = state_42694;
(statearr_42721[(4)] = cljs.core.rest((state_42694[(4)])));

return statearr_42721;
})();
var state_42694__$1 = state_42694;
var statearr_42722_44127 = state_42694__$1;
(statearr_42722_44127[(2)] = inst_42668);

(statearr_42722_44127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (5))){
var inst_42678 = (state_42694[(2)]);
var state_42694__$1 = (function (){var statearr_42723 = state_42694;
(statearr_42723[(13)] = inst_42678);

return statearr_42723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42694__$1,(13),dchan);
} else {
if((state_val_42695 === (14))){
var inst_42683 = cljs.core.async.close_BANG_(out);
var state_42694__$1 = state_42694;
var statearr_42724_44128 = state_42694__$1;
(statearr_42724_44128[(2)] = inst_42683);

(statearr_42724_44128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (16))){
var inst_42690 = (state_42694[(2)]);
var state_42694__$1 = state_42694;
var statearr_42725_44129 = state_42694__$1;
(statearr_42725_44129[(2)] = inst_42690);

(statearr_42725_44129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (10))){
var inst_42652 = (state_42694[(7)]);
var inst_42671 = (state_42694[(2)]);
var inst_42672 = (inst_42652 + (1));
var inst_42652__$1 = inst_42672;
var state_42694__$1 = (function (){var statearr_42726 = state_42694;
(statearr_42726[(7)] = inst_42652__$1);

(statearr_42726[(14)] = inst_42671);

return statearr_42726;
})();
var statearr_42727_44130 = state_42694__$1;
(statearr_42727_44130[(2)] = null);

(statearr_42727_44130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (8))){
var inst_42676 = (state_42694[(2)]);
var state_42694__$1 = state_42694;
var statearr_42728_44131 = state_42694__$1;
(statearr_42728_44131[(2)] = inst_42676);

(statearr_42728_44131[(1)] = (5));


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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_42729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42729[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_42729[(1)] = (1));

return statearr_42729;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_42694){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42694);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e42733){var ex__40961__auto__ = e42733;
var statearr_42734_44132 = state_42694;
(statearr_42734_44132[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42694[(4)]))){
var statearr_42735_44133 = state_42694;
(statearr_42735_44133[(1)] = cljs.core.first((state_42694[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44134 = state_42694;
state_42694 = G__44134;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_42694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_42694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_42736 = f__41047__auto__();
(statearr_42736[(6)] = c__41046__auto___44114);

return statearr_42736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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
var G__42742 = arguments.length;
switch (G__42742) {
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
var c__41046__auto___44139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42777){
var state_val_42778 = (state_42777[(1)]);
if((state_val_42778 === (7))){
var inst_42755 = (state_42777[(7)]);
var inst_42756 = (state_42777[(8)]);
var inst_42755__$1 = (state_42777[(2)]);
var inst_42756__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42755__$1,(0),null);
var inst_42757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42755__$1,(1),null);
var inst_42758 = (inst_42756__$1 == null);
var state_42777__$1 = (function (){var statearr_42780 = state_42777;
(statearr_42780[(9)] = inst_42757);

(statearr_42780[(7)] = inst_42755__$1);

(statearr_42780[(8)] = inst_42756__$1);

return statearr_42780;
})();
if(cljs.core.truth_(inst_42758)){
var statearr_42781_44140 = state_42777__$1;
(statearr_42781_44140[(1)] = (8));

} else {
var statearr_42782_44141 = state_42777__$1;
(statearr_42782_44141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (1))){
var inst_42745 = cljs.core.vec(chs);
var inst_42746 = inst_42745;
var state_42777__$1 = (function (){var statearr_42783 = state_42777;
(statearr_42783[(10)] = inst_42746);

return statearr_42783;
})();
var statearr_42784_44142 = state_42777__$1;
(statearr_42784_44142[(2)] = null);

(statearr_42784_44142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (4))){
var inst_42746 = (state_42777[(10)]);
var state_42777__$1 = state_42777;
return cljs.core.async.ioc_alts_BANG_(state_42777__$1,(7),inst_42746);
} else {
if((state_val_42778 === (6))){
var inst_42772 = (state_42777[(2)]);
var state_42777__$1 = state_42777;
var statearr_42788_44143 = state_42777__$1;
(statearr_42788_44143[(2)] = inst_42772);

(statearr_42788_44143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (3))){
var inst_42774 = (state_42777[(2)]);
var state_42777__$1 = state_42777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42777__$1,inst_42774);
} else {
if((state_val_42778 === (2))){
var inst_42746 = (state_42777[(10)]);
var inst_42748 = cljs.core.count(inst_42746);
var inst_42749 = (inst_42748 > (0));
var state_42777__$1 = state_42777;
if(cljs.core.truth_(inst_42749)){
var statearr_42790_44144 = state_42777__$1;
(statearr_42790_44144[(1)] = (4));

} else {
var statearr_42795_44145 = state_42777__$1;
(statearr_42795_44145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (11))){
var inst_42746 = (state_42777[(10)]);
var inst_42765 = (state_42777[(2)]);
var tmp42789 = inst_42746;
var inst_42746__$1 = tmp42789;
var state_42777__$1 = (function (){var statearr_42797 = state_42777;
(statearr_42797[(10)] = inst_42746__$1);

(statearr_42797[(11)] = inst_42765);

return statearr_42797;
})();
var statearr_42798_44146 = state_42777__$1;
(statearr_42798_44146[(2)] = null);

(statearr_42798_44146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (9))){
var inst_42756 = (state_42777[(8)]);
var state_42777__$1 = state_42777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42777__$1,(11),out,inst_42756);
} else {
if((state_val_42778 === (5))){
var inst_42770 = cljs.core.async.close_BANG_(out);
var state_42777__$1 = state_42777;
var statearr_42812_44147 = state_42777__$1;
(statearr_42812_44147[(2)] = inst_42770);

(statearr_42812_44147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (10))){
var inst_42768 = (state_42777[(2)]);
var state_42777__$1 = state_42777;
var statearr_42813_44148 = state_42777__$1;
(statearr_42813_44148[(2)] = inst_42768);

(statearr_42813_44148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42778 === (8))){
var inst_42746 = (state_42777[(10)]);
var inst_42757 = (state_42777[(9)]);
var inst_42755 = (state_42777[(7)]);
var inst_42756 = (state_42777[(8)]);
var inst_42760 = (function (){var cs = inst_42746;
var vec__42751 = inst_42755;
var v = inst_42756;
var c = inst_42757;
return (function (p1__42740_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42740_SHARP_);
});
})();
var inst_42761 = cljs.core.filterv(inst_42760,inst_42746);
var inst_42746__$1 = inst_42761;
var state_42777__$1 = (function (){var statearr_42816 = state_42777;
(statearr_42816[(10)] = inst_42746__$1);

return statearr_42816;
})();
var statearr_42817_44149 = state_42777__$1;
(statearr_42817_44149[(2)] = null);

(statearr_42817_44149[(1)] = (2));


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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_42819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42819[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_42819[(1)] = (1));

return statearr_42819;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_42777){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42777);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e42820){var ex__40961__auto__ = e42820;
var statearr_42821_44151 = state_42777;
(statearr_42821_44151[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42777[(4)]))){
var statearr_42822_44152 = state_42777;
(statearr_42822_44152[(1)] = cljs.core.first((state_42777[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44153 = state_42777;
state_42777 = G__44153;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_42777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_42777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_42823 = f__41047__auto__();
(statearr_42823[(6)] = c__41046__auto___44139);

return statearr_42823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
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
var G__42854 = arguments.length;
switch (G__42854) {
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
var c__41046__auto___44156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42882){
var state_val_42883 = (state_42882[(1)]);
if((state_val_42883 === (7))){
var inst_42863 = (state_42882[(7)]);
var inst_42863__$1 = (state_42882[(2)]);
var inst_42864 = (inst_42863__$1 == null);
var inst_42865 = cljs.core.not(inst_42864);
var state_42882__$1 = (function (){var statearr_42884 = state_42882;
(statearr_42884[(7)] = inst_42863__$1);

return statearr_42884;
})();
if(inst_42865){
var statearr_42885_44159 = state_42882__$1;
(statearr_42885_44159[(1)] = (8));

} else {
var statearr_42886_44160 = state_42882__$1;
(statearr_42886_44160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (1))){
var inst_42858 = (0);
var state_42882__$1 = (function (){var statearr_42887 = state_42882;
(statearr_42887[(8)] = inst_42858);

return statearr_42887;
})();
var statearr_42888_44161 = state_42882__$1;
(statearr_42888_44161[(2)] = null);

(statearr_42888_44161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (4))){
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42882__$1,(7),ch);
} else {
if((state_val_42883 === (6))){
var inst_42876 = (state_42882[(2)]);
var state_42882__$1 = state_42882;
var statearr_42889_44162 = state_42882__$1;
(statearr_42889_44162[(2)] = inst_42876);

(statearr_42889_44162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (3))){
var inst_42878 = (state_42882[(2)]);
var inst_42879 = cljs.core.async.close_BANG_(out);
var state_42882__$1 = (function (){var statearr_42890 = state_42882;
(statearr_42890[(9)] = inst_42878);

return statearr_42890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42882__$1,inst_42879);
} else {
if((state_val_42883 === (2))){
var inst_42858 = (state_42882[(8)]);
var inst_42860 = (inst_42858 < n);
var state_42882__$1 = state_42882;
if(cljs.core.truth_(inst_42860)){
var statearr_42891_44163 = state_42882__$1;
(statearr_42891_44163[(1)] = (4));

} else {
var statearr_42892_44164 = state_42882__$1;
(statearr_42892_44164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (11))){
var inst_42858 = (state_42882[(8)]);
var inst_42868 = (state_42882[(2)]);
var inst_42869 = (inst_42858 + (1));
var inst_42858__$1 = inst_42869;
var state_42882__$1 = (function (){var statearr_42894 = state_42882;
(statearr_42894[(8)] = inst_42858__$1);

(statearr_42894[(10)] = inst_42868);

return statearr_42894;
})();
var statearr_42895_44165 = state_42882__$1;
(statearr_42895_44165[(2)] = null);

(statearr_42895_44165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (9))){
var state_42882__$1 = state_42882;
var statearr_42896_44166 = state_42882__$1;
(statearr_42896_44166[(2)] = null);

(statearr_42896_44166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (5))){
var state_42882__$1 = state_42882;
var statearr_42897_44167 = state_42882__$1;
(statearr_42897_44167[(2)] = null);

(statearr_42897_44167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (10))){
var inst_42873 = (state_42882[(2)]);
var state_42882__$1 = state_42882;
var statearr_42898_44168 = state_42882__$1;
(statearr_42898_44168[(2)] = inst_42873);

(statearr_42898_44168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42883 === (8))){
var inst_42863 = (state_42882[(7)]);
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42882__$1,(11),out,inst_42863);
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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_42899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42899[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_42899[(1)] = (1));

return statearr_42899;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_42882){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42882);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e42900){var ex__40961__auto__ = e42900;
var statearr_42901_44169 = state_42882;
(statearr_42901_44169[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42882[(4)]))){
var statearr_42902_44170 = state_42882;
(statearr_42902_44170[(1)] = cljs.core.first((state_42882[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44171 = state_42882;
state_42882 = G__44171;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_42882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_42882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_42904 = f__41047__auto__();
(statearr_42904[(6)] = c__41046__auto___44156);

return statearr_42904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42906 = (function (f,ch,meta42907){
this.f = f;
this.ch = ch;
this.meta42907 = meta42907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42908,meta42907__$1){
var self__ = this;
var _42908__$1 = this;
return (new cljs.core.async.t_cljs$core$async42906(self__.f,self__.ch,meta42907__$1));
}));

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42908){
var self__ = this;
var _42908__$1 = this;
return self__.meta42907;
}));

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42911 = (function (f,ch,meta42907,_,fn1,meta42912){
this.f = f;
this.ch = ch;
this.meta42907 = meta42907;
this._ = _;
this.fn1 = fn1;
this.meta42912 = meta42912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42913,meta42912__$1){
var self__ = this;
var _42913__$1 = this;
return (new cljs.core.async.t_cljs$core$async42911(self__.f,self__.ch,self__.meta42907,self__._,self__.fn1,meta42912__$1));
}));

(cljs.core.async.t_cljs$core$async42911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42913){
var self__ = this;
var _42913__$1 = this;
return self__.meta42912;
}));

(cljs.core.async.t_cljs$core$async42911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42905_SHARP_){
var G__42917 = (((p1__42905_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42905_SHARP_) : self__.f.call(null,p1__42905_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42917) : f1.call(null,G__42917));
});
}));

(cljs.core.async.t_cljs$core$async42911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42907","meta42907",-2090564539,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42906","cljs.core.async/t_cljs$core$async42906",-1262878350,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42912","meta42912",-1699298475,null)], null);
}));

(cljs.core.async.t_cljs$core$async42911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42911");

(cljs.core.async.t_cljs$core$async42911.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42911.
 */
cljs.core.async.__GT_t_cljs$core$async42911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42911(f__$1,ch__$1,meta42907__$1,___$2,fn1__$1,meta42912){
return (new cljs.core.async.t_cljs$core$async42911(f__$1,ch__$1,meta42907__$1,___$2,fn1__$1,meta42912));
});

}

return (new cljs.core.async.t_cljs$core$async42911(self__.f,self__.ch,self__.meta42907,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42921 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42921) : self__.f.call(null,G__42921));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42907","meta42907",-2090564539,null)], null);
}));

(cljs.core.async.t_cljs$core$async42906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42906");

(cljs.core.async.t_cljs$core$async42906.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42906.
 */
cljs.core.async.__GT_t_cljs$core$async42906 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42906(f__$1,ch__$1,meta42907){
return (new cljs.core.async.t_cljs$core$async42906(f__$1,ch__$1,meta42907));
});

}

return (new cljs.core.async.t_cljs$core$async42906(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42932 = (function (f,ch,meta42933){
this.f = f;
this.ch = ch;
this.meta42933 = meta42933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42934,meta42933__$1){
var self__ = this;
var _42934__$1 = this;
return (new cljs.core.async.t_cljs$core$async42932(self__.f,self__.ch,meta42933__$1));
}));

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42934){
var self__ = this;
var _42934__$1 = this;
return self__.meta42933;
}));

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42933","meta42933",-1512190832,null)], null);
}));

(cljs.core.async.t_cljs$core$async42932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42932");

(cljs.core.async.t_cljs$core$async42932.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42932.
 */
cljs.core.async.__GT_t_cljs$core$async42932 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42932(f__$1,ch__$1,meta42933){
return (new cljs.core.async.t_cljs$core$async42932(f__$1,ch__$1,meta42933));
});

}

return (new cljs.core.async.t_cljs$core$async42932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42944 = (function (p,ch,meta42945){
this.p = p;
this.ch = ch;
this.meta42945 = meta42945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42946,meta42945__$1){
var self__ = this;
var _42946__$1 = this;
return (new cljs.core.async.t_cljs$core$async42944(self__.p,self__.ch,meta42945__$1));
}));

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42946){
var self__ = this;
var _42946__$1 = this;
return self__.meta42945;
}));

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42945","meta42945",129509371,null)], null);
}));

(cljs.core.async.t_cljs$core$async42944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42944");

(cljs.core.async.t_cljs$core$async42944.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42944.
 */
cljs.core.async.__GT_t_cljs$core$async42944 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42944(p__$1,ch__$1,meta42945){
return (new cljs.core.async.t_cljs$core$async42944(p__$1,ch__$1,meta42945));
});

}

return (new cljs.core.async.t_cljs$core$async42944(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42950 = arguments.length;
switch (G__42950) {
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
var c__41046__auto___44192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_42980){
var state_val_42982 = (state_42980[(1)]);
if((state_val_42982 === (7))){
var inst_42972 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_42983_44193 = state_42980__$1;
(statearr_42983_44193[(2)] = inst_42972);

(statearr_42983_44193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (1))){
var state_42980__$1 = state_42980;
var statearr_42984_44194 = state_42980__$1;
(statearr_42984_44194[(2)] = null);

(statearr_42984_44194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (4))){
var inst_42958 = (state_42980[(7)]);
var inst_42958__$1 = (state_42980[(2)]);
var inst_42959 = (inst_42958__$1 == null);
var state_42980__$1 = (function (){var statearr_42985 = state_42980;
(statearr_42985[(7)] = inst_42958__$1);

return statearr_42985;
})();
if(cljs.core.truth_(inst_42959)){
var statearr_42990_44195 = state_42980__$1;
(statearr_42990_44195[(1)] = (5));

} else {
var statearr_42991_44196 = state_42980__$1;
(statearr_42991_44196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (6))){
var inst_42958 = (state_42980[(7)]);
var inst_42963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42958) : p.call(null,inst_42958));
var state_42980__$1 = state_42980;
if(cljs.core.truth_(inst_42963)){
var statearr_42992_44197 = state_42980__$1;
(statearr_42992_44197[(1)] = (8));

} else {
var statearr_42993_44198 = state_42980__$1;
(statearr_42993_44198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (3))){
var inst_42975 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42980__$1,inst_42975);
} else {
if((state_val_42982 === (2))){
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42980__$1,(4),ch);
} else {
if((state_val_42982 === (11))){
var inst_42966 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_42994_44199 = state_42980__$1;
(statearr_42994_44199[(2)] = inst_42966);

(statearr_42994_44199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (9))){
var state_42980__$1 = state_42980;
var statearr_42996_44200 = state_42980__$1;
(statearr_42996_44200[(2)] = null);

(statearr_42996_44200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (5))){
var inst_42961 = cljs.core.async.close_BANG_(out);
var state_42980__$1 = state_42980;
var statearr_42997_44201 = state_42980__$1;
(statearr_42997_44201[(2)] = inst_42961);

(statearr_42997_44201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (10))){
var inst_42969 = (state_42980[(2)]);
var state_42980__$1 = (function (){var statearr_42998 = state_42980;
(statearr_42998[(8)] = inst_42969);

return statearr_42998;
})();
var statearr_42999_44202 = state_42980__$1;
(statearr_42999_44202[(2)] = null);

(statearr_42999_44202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (8))){
var inst_42958 = (state_42980[(7)]);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42980__$1,(11),out,inst_42958);
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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_43000 = [null,null,null,null,null,null,null,null,null];
(statearr_43000[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_43000[(1)] = (1));

return statearr_43000;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_42980){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_42980);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e43001){var ex__40961__auto__ = e43001;
var statearr_43002_44209 = state_42980;
(statearr_43002_44209[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_42980[(4)]))){
var statearr_43003_44210 = state_42980;
(statearr_43003_44210[(1)] = cljs.core.first((state_42980[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44211 = state_42980;
state_42980 = G__44211;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_42980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_42980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_43005 = f__41047__auto__();
(statearr_43005[(6)] = c__41046__auto___44192);

return statearr_43005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43012 = arguments.length;
switch (G__43012) {
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
var c__41046__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_43107){
var state_val_43108 = (state_43107[(1)]);
if((state_val_43108 === (7))){
var inst_43103 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43109_44219 = state_43107__$1;
(statearr_43109_44219[(2)] = inst_43103);

(statearr_43109_44219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (20))){
var inst_43045 = (state_43107[(7)]);
var inst_43084 = (state_43107[(2)]);
var inst_43085 = cljs.core.next(inst_43045);
var inst_43031 = inst_43085;
var inst_43032 = null;
var inst_43033 = (0);
var inst_43034 = (0);
var state_43107__$1 = (function (){var statearr_43113 = state_43107;
(statearr_43113[(8)] = inst_43031);

(statearr_43113[(9)] = inst_43084);

(statearr_43113[(10)] = inst_43034);

(statearr_43113[(11)] = inst_43033);

(statearr_43113[(12)] = inst_43032);

return statearr_43113;
})();
var statearr_43114_44220 = state_43107__$1;
(statearr_43114_44220[(2)] = null);

(statearr_43114_44220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (1))){
var state_43107__$1 = state_43107;
var statearr_43115_44221 = state_43107__$1;
(statearr_43115_44221[(2)] = null);

(statearr_43115_44221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (4))){
var inst_43020 = (state_43107[(13)]);
var inst_43020__$1 = (state_43107[(2)]);
var inst_43021 = (inst_43020__$1 == null);
var state_43107__$1 = (function (){var statearr_43116 = state_43107;
(statearr_43116[(13)] = inst_43020__$1);

return statearr_43116;
})();
if(cljs.core.truth_(inst_43021)){
var statearr_43117_44222 = state_43107__$1;
(statearr_43117_44222[(1)] = (5));

} else {
var statearr_43119_44223 = state_43107__$1;
(statearr_43119_44223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (15))){
var state_43107__$1 = state_43107;
var statearr_43123_44224 = state_43107__$1;
(statearr_43123_44224[(2)] = null);

(statearr_43123_44224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (21))){
var state_43107__$1 = state_43107;
var statearr_43124_44225 = state_43107__$1;
(statearr_43124_44225[(2)] = null);

(statearr_43124_44225[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (13))){
var inst_43031 = (state_43107[(8)]);
var inst_43034 = (state_43107[(10)]);
var inst_43033 = (state_43107[(11)]);
var inst_43032 = (state_43107[(12)]);
var inst_43041 = (state_43107[(2)]);
var inst_43042 = (inst_43034 + (1));
var tmp43120 = inst_43031;
var tmp43121 = inst_43033;
var tmp43122 = inst_43032;
var inst_43031__$1 = tmp43120;
var inst_43032__$1 = tmp43122;
var inst_43033__$1 = tmp43121;
var inst_43034__$1 = inst_43042;
var state_43107__$1 = (function (){var statearr_43125 = state_43107;
(statearr_43125[(14)] = inst_43041);

(statearr_43125[(8)] = inst_43031__$1);

(statearr_43125[(10)] = inst_43034__$1);

(statearr_43125[(11)] = inst_43033__$1);

(statearr_43125[(12)] = inst_43032__$1);

return statearr_43125;
})();
var statearr_43126_44226 = state_43107__$1;
(statearr_43126_44226[(2)] = null);

(statearr_43126_44226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (22))){
var state_43107__$1 = state_43107;
var statearr_43127_44227 = state_43107__$1;
(statearr_43127_44227[(2)] = null);

(statearr_43127_44227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (6))){
var inst_43020 = (state_43107[(13)]);
var inst_43029 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43020) : f.call(null,inst_43020));
var inst_43030 = cljs.core.seq(inst_43029);
var inst_43031 = inst_43030;
var inst_43032 = null;
var inst_43033 = (0);
var inst_43034 = (0);
var state_43107__$1 = (function (){var statearr_43128 = state_43107;
(statearr_43128[(8)] = inst_43031);

(statearr_43128[(10)] = inst_43034);

(statearr_43128[(11)] = inst_43033);

(statearr_43128[(12)] = inst_43032);

return statearr_43128;
})();
var statearr_43133_44228 = state_43107__$1;
(statearr_43133_44228[(2)] = null);

(statearr_43133_44228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (17))){
var inst_43045 = (state_43107[(7)]);
var inst_43049 = cljs.core.chunk_first(inst_43045);
var inst_43063 = cljs.core.chunk_rest(inst_43045);
var inst_43078 = cljs.core.count(inst_43049);
var inst_43031 = inst_43063;
var inst_43032 = inst_43049;
var inst_43033 = inst_43078;
var inst_43034 = (0);
var state_43107__$1 = (function (){var statearr_43135 = state_43107;
(statearr_43135[(8)] = inst_43031);

(statearr_43135[(10)] = inst_43034);

(statearr_43135[(11)] = inst_43033);

(statearr_43135[(12)] = inst_43032);

return statearr_43135;
})();
var statearr_43136_44229 = state_43107__$1;
(statearr_43136_44229[(2)] = null);

(statearr_43136_44229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (3))){
var inst_43105 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43107__$1,inst_43105);
} else {
if((state_val_43108 === (12))){
var inst_43093 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43143_44236 = state_43107__$1;
(statearr_43143_44236[(2)] = inst_43093);

(statearr_43143_44236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (2))){
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43107__$1,(4),in$);
} else {
if((state_val_43108 === (23))){
var inst_43101 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43144_44237 = state_43107__$1;
(statearr_43144_44237[(2)] = inst_43101);

(statearr_43144_44237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (19))){
var inst_43088 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43145_44238 = state_43107__$1;
(statearr_43145_44238[(2)] = inst_43088);

(statearr_43145_44238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (11))){
var inst_43031 = (state_43107[(8)]);
var inst_43045 = (state_43107[(7)]);
var inst_43045__$1 = cljs.core.seq(inst_43031);
var state_43107__$1 = (function (){var statearr_43154 = state_43107;
(statearr_43154[(7)] = inst_43045__$1);

return statearr_43154;
})();
if(inst_43045__$1){
var statearr_43155_44239 = state_43107__$1;
(statearr_43155_44239[(1)] = (14));

} else {
var statearr_43156_44240 = state_43107__$1;
(statearr_43156_44240[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (9))){
var inst_43095 = (state_43107[(2)]);
var inst_43096 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43107__$1 = (function (){var statearr_43158 = state_43107;
(statearr_43158[(15)] = inst_43095);

return statearr_43158;
})();
if(cljs.core.truth_(inst_43096)){
var statearr_43159_44241 = state_43107__$1;
(statearr_43159_44241[(1)] = (21));

} else {
var statearr_43161_44242 = state_43107__$1;
(statearr_43161_44242[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (5))){
var inst_43023 = cljs.core.async.close_BANG_(out);
var state_43107__$1 = state_43107;
var statearr_43163_44243 = state_43107__$1;
(statearr_43163_44243[(2)] = inst_43023);

(statearr_43163_44243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (14))){
var inst_43045 = (state_43107[(7)]);
var inst_43047 = cljs.core.chunked_seq_QMARK_(inst_43045);
var state_43107__$1 = state_43107;
if(inst_43047){
var statearr_43164_44244 = state_43107__$1;
(statearr_43164_44244[(1)] = (17));

} else {
var statearr_43165_44246 = state_43107__$1;
(statearr_43165_44246[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (16))){
var inst_43091 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43166_44247 = state_43107__$1;
(statearr_43166_44247[(2)] = inst_43091);

(statearr_43166_44247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (10))){
var inst_43034 = (state_43107[(10)]);
var inst_43032 = (state_43107[(12)]);
var inst_43039 = cljs.core._nth(inst_43032,inst_43034);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43107__$1,(13),out,inst_43039);
} else {
if((state_val_43108 === (18))){
var inst_43045 = (state_43107[(7)]);
var inst_43081 = cljs.core.first(inst_43045);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43107__$1,(20),out,inst_43081);
} else {
if((state_val_43108 === (8))){
var inst_43034 = (state_43107[(10)]);
var inst_43033 = (state_43107[(11)]);
var inst_43036 = (inst_43034 < inst_43033);
var inst_43037 = inst_43036;
var state_43107__$1 = state_43107;
if(cljs.core.truth_(inst_43037)){
var statearr_43168_44249 = state_43107__$1;
(statearr_43168_44249[(1)] = (10));

} else {
var statearr_43169_44250 = state_43107__$1;
(statearr_43169_44250[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__40958__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40958__auto____0 = (function (){
var statearr_43170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43170[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40958__auto__);

(statearr_43170[(1)] = (1));

return statearr_43170;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40958__auto____1 = (function (state_43107){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_43107);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e43171){var ex__40961__auto__ = e43171;
var statearr_43172_44257 = state_43107;
(statearr_43172_44257[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_43107[(4)]))){
var statearr_43173_44258 = state_43107;
(statearr_43173_44258[(1)] = cljs.core.first((state_43107[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44259 = state_43107;
state_43107 = G__44259;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40958__auto__ = function(state_43107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40958__auto____1.call(this,state_43107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40958__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40958__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_43175 = f__41047__auto__();
(statearr_43175[(6)] = c__41046__auto__);

return statearr_43175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));

return c__41046__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43179 = arguments.length;
switch (G__43179) {
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
var G__43188 = arguments.length;
switch (G__43188) {
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
var G__43192 = arguments.length;
switch (G__43192) {
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
var c__41046__auto___44269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_43222){
var state_val_43223 = (state_43222[(1)]);
if((state_val_43223 === (7))){
var inst_43217 = (state_43222[(2)]);
var state_43222__$1 = state_43222;
var statearr_43224_44273 = state_43222__$1;
(statearr_43224_44273[(2)] = inst_43217);

(statearr_43224_44273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (1))){
var inst_43198 = null;
var state_43222__$1 = (function (){var statearr_43225 = state_43222;
(statearr_43225[(7)] = inst_43198);

return statearr_43225;
})();
var statearr_43226_44274 = state_43222__$1;
(statearr_43226_44274[(2)] = null);

(statearr_43226_44274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (4))){
var inst_43201 = (state_43222[(8)]);
var inst_43201__$1 = (state_43222[(2)]);
var inst_43202 = (inst_43201__$1 == null);
var inst_43203 = cljs.core.not(inst_43202);
var state_43222__$1 = (function (){var statearr_43227 = state_43222;
(statearr_43227[(8)] = inst_43201__$1);

return statearr_43227;
})();
if(inst_43203){
var statearr_43228_44279 = state_43222__$1;
(statearr_43228_44279[(1)] = (5));

} else {
var statearr_43229_44280 = state_43222__$1;
(statearr_43229_44280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (6))){
var state_43222__$1 = state_43222;
var statearr_43230_44281 = state_43222__$1;
(statearr_43230_44281[(2)] = null);

(statearr_43230_44281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (3))){
var inst_43219 = (state_43222[(2)]);
var inst_43220 = cljs.core.async.close_BANG_(out);
var state_43222__$1 = (function (){var statearr_43232 = state_43222;
(statearr_43232[(9)] = inst_43219);

return statearr_43232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43222__$1,inst_43220);
} else {
if((state_val_43223 === (2))){
var state_43222__$1 = state_43222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43222__$1,(4),ch);
} else {
if((state_val_43223 === (11))){
var inst_43201 = (state_43222[(8)]);
var inst_43211 = (state_43222[(2)]);
var inst_43198 = inst_43201;
var state_43222__$1 = (function (){var statearr_43233 = state_43222;
(statearr_43233[(10)] = inst_43211);

(statearr_43233[(7)] = inst_43198);

return statearr_43233;
})();
var statearr_43234_44283 = state_43222__$1;
(statearr_43234_44283[(2)] = null);

(statearr_43234_44283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (9))){
var inst_43201 = (state_43222[(8)]);
var state_43222__$1 = state_43222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43222__$1,(11),out,inst_43201);
} else {
if((state_val_43223 === (5))){
var inst_43198 = (state_43222[(7)]);
var inst_43201 = (state_43222[(8)]);
var inst_43205 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43201,inst_43198);
var state_43222__$1 = state_43222;
if(inst_43205){
var statearr_43236_44284 = state_43222__$1;
(statearr_43236_44284[(1)] = (8));

} else {
var statearr_43237_44285 = state_43222__$1;
(statearr_43237_44285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (10))){
var inst_43214 = (state_43222[(2)]);
var state_43222__$1 = state_43222;
var statearr_43238_44286 = state_43222__$1;
(statearr_43238_44286[(2)] = inst_43214);

(statearr_43238_44286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (8))){
var inst_43198 = (state_43222[(7)]);
var tmp43235 = inst_43198;
var inst_43198__$1 = tmp43235;
var state_43222__$1 = (function (){var statearr_43239 = state_43222;
(statearr_43239[(7)] = inst_43198__$1);

return statearr_43239;
})();
var statearr_43241_44287 = state_43222__$1;
(statearr_43241_44287[(2)] = null);

(statearr_43241_44287[(1)] = (2));


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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_43242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43242[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_43242[(1)] = (1));

return statearr_43242;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_43222){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_43222);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e43243){var ex__40961__auto__ = e43243;
var statearr_43244_44288 = state_43222;
(statearr_43244_44288[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_43222[(4)]))){
var statearr_43249_44289 = state_43222;
(statearr_43249_44289[(1)] = cljs.core.first((state_43222[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44290 = state_43222;
state_43222 = G__44290;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_43222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_43222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_43251 = f__41047__auto__();
(statearr_43251[(6)] = c__41046__auto___44269);

return statearr_43251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43254 = arguments.length;
switch (G__43254) {
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
var c__41046__auto___44292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_43295){
var state_val_43296 = (state_43295[(1)]);
if((state_val_43296 === (7))){
var inst_43291 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43298_44294 = state_43295__$1;
(statearr_43298_44294[(2)] = inst_43291);

(statearr_43298_44294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (1))){
var inst_43258 = (new Array(n));
var inst_43259 = inst_43258;
var inst_43260 = (0);
var state_43295__$1 = (function (){var statearr_43299 = state_43295;
(statearr_43299[(7)] = inst_43259);

(statearr_43299[(8)] = inst_43260);

return statearr_43299;
})();
var statearr_43300_44296 = state_43295__$1;
(statearr_43300_44296[(2)] = null);

(statearr_43300_44296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (4))){
var inst_43263 = (state_43295[(9)]);
var inst_43263__$1 = (state_43295[(2)]);
var inst_43264 = (inst_43263__$1 == null);
var inst_43265 = cljs.core.not(inst_43264);
var state_43295__$1 = (function (){var statearr_43302 = state_43295;
(statearr_43302[(9)] = inst_43263__$1);

return statearr_43302;
})();
if(inst_43265){
var statearr_43303_44297 = state_43295__$1;
(statearr_43303_44297[(1)] = (5));

} else {
var statearr_43304_44298 = state_43295__$1;
(statearr_43304_44298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (15))){
var inst_43285 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43305_44299 = state_43295__$1;
(statearr_43305_44299[(2)] = inst_43285);

(statearr_43305_44299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (13))){
var state_43295__$1 = state_43295;
var statearr_43307_44300 = state_43295__$1;
(statearr_43307_44300[(2)] = null);

(statearr_43307_44300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (6))){
var inst_43260 = (state_43295[(8)]);
var inst_43281 = (inst_43260 > (0));
var state_43295__$1 = state_43295;
if(cljs.core.truth_(inst_43281)){
var statearr_43312_44301 = state_43295__$1;
(statearr_43312_44301[(1)] = (12));

} else {
var statearr_43313_44302 = state_43295__$1;
(statearr_43313_44302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (3))){
var inst_43293 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43295__$1,inst_43293);
} else {
if((state_val_43296 === (12))){
var inst_43259 = (state_43295[(7)]);
var inst_43283 = cljs.core.vec(inst_43259);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43295__$1,(15),out,inst_43283);
} else {
if((state_val_43296 === (2))){
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43295__$1,(4),ch);
} else {
if((state_val_43296 === (11))){
var inst_43275 = (state_43295[(2)]);
var inst_43276 = (new Array(n));
var inst_43259 = inst_43276;
var inst_43260 = (0);
var state_43295__$1 = (function (){var statearr_43315 = state_43295;
(statearr_43315[(7)] = inst_43259);

(statearr_43315[(10)] = inst_43275);

(statearr_43315[(8)] = inst_43260);

return statearr_43315;
})();
var statearr_43317_44307 = state_43295__$1;
(statearr_43317_44307[(2)] = null);

(statearr_43317_44307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (9))){
var inst_43259 = (state_43295[(7)]);
var inst_43273 = cljs.core.vec(inst_43259);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43295__$1,(11),out,inst_43273);
} else {
if((state_val_43296 === (5))){
var inst_43259 = (state_43295[(7)]);
var inst_43268 = (state_43295[(11)]);
var inst_43260 = (state_43295[(8)]);
var inst_43263 = (state_43295[(9)]);
var inst_43267 = (inst_43259[inst_43260] = inst_43263);
var inst_43268__$1 = (inst_43260 + (1));
var inst_43269 = (inst_43268__$1 < n);
var state_43295__$1 = (function (){var statearr_43318 = state_43295;
(statearr_43318[(12)] = inst_43267);

(statearr_43318[(11)] = inst_43268__$1);

return statearr_43318;
})();
if(cljs.core.truth_(inst_43269)){
var statearr_43319_44308 = state_43295__$1;
(statearr_43319_44308[(1)] = (8));

} else {
var statearr_43320_44309 = state_43295__$1;
(statearr_43320_44309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (14))){
var inst_43288 = (state_43295[(2)]);
var inst_43289 = cljs.core.async.close_BANG_(out);
var state_43295__$1 = (function (){var statearr_43322 = state_43295;
(statearr_43322[(13)] = inst_43288);

return statearr_43322;
})();
var statearr_43323_44310 = state_43295__$1;
(statearr_43323_44310[(2)] = inst_43289);

(statearr_43323_44310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (10))){
var inst_43279 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43324_44311 = state_43295__$1;
(statearr_43324_44311[(2)] = inst_43279);

(statearr_43324_44311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (8))){
var inst_43259 = (state_43295[(7)]);
var inst_43268 = (state_43295[(11)]);
var tmp43321 = inst_43259;
var inst_43259__$1 = tmp43321;
var inst_43260 = inst_43268;
var state_43295__$1 = (function (){var statearr_43325 = state_43295;
(statearr_43325[(7)] = inst_43259__$1);

(statearr_43325[(8)] = inst_43260);

return statearr_43325;
})();
var statearr_43326_44312 = state_43295__$1;
(statearr_43326_44312[(2)] = null);

(statearr_43326_44312[(1)] = (2));


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
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_43328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43328[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_43328[(1)] = (1));

return statearr_43328;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_43295){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_43295);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e43329){var ex__40961__auto__ = e43329;
var statearr_43330_44314 = state_43295;
(statearr_43330_44314[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_43295[(4)]))){
var statearr_43331_44315 = state_43295;
(statearr_43331_44315[(1)] = cljs.core.first((state_43295[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44316 = state_43295;
state_43295 = G__44316;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_43295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_43295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_43332 = f__41047__auto__();
(statearr_43332[(6)] = c__41046__auto___44292);

return statearr_43332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43340 = arguments.length;
switch (G__43340) {
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
var c__41046__auto___44320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41047__auto__ = (function (){var switch__40957__auto__ = (function (state_43392){
var state_val_43393 = (state_43392[(1)]);
if((state_val_43393 === (7))){
var inst_43385 = (state_43392[(2)]);
var state_43392__$1 = state_43392;
var statearr_43394_44323 = state_43392__$1;
(statearr_43394_44323[(2)] = inst_43385);

(statearr_43394_44323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (1))){
var inst_43341 = [];
var inst_43342 = inst_43341;
var inst_43343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43392__$1 = (function (){var statearr_43395 = state_43392;
(statearr_43395[(7)] = inst_43343);

(statearr_43395[(8)] = inst_43342);

return statearr_43395;
})();
var statearr_43396_44326 = state_43392__$1;
(statearr_43396_44326[(2)] = null);

(statearr_43396_44326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (4))){
var inst_43348 = (state_43392[(9)]);
var inst_43348__$1 = (state_43392[(2)]);
var inst_43349 = (inst_43348__$1 == null);
var inst_43350 = cljs.core.not(inst_43349);
var state_43392__$1 = (function (){var statearr_43398 = state_43392;
(statearr_43398[(9)] = inst_43348__$1);

return statearr_43398;
})();
if(inst_43350){
var statearr_43399_44327 = state_43392__$1;
(statearr_43399_44327[(1)] = (5));

} else {
var statearr_43401_44328 = state_43392__$1;
(statearr_43401_44328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (15))){
var inst_43342 = (state_43392[(8)]);
var inst_43375 = cljs.core.vec(inst_43342);
var state_43392__$1 = state_43392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43392__$1,(18),out,inst_43375);
} else {
if((state_val_43393 === (13))){
var inst_43370 = (state_43392[(2)]);
var state_43392__$1 = state_43392;
var statearr_43403_44329 = state_43392__$1;
(statearr_43403_44329[(2)] = inst_43370);

(statearr_43403_44329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (6))){
var inst_43342 = (state_43392[(8)]);
var inst_43372 = inst_43342.length;
var inst_43373 = (inst_43372 > (0));
var state_43392__$1 = state_43392;
if(cljs.core.truth_(inst_43373)){
var statearr_43404_44330 = state_43392__$1;
(statearr_43404_44330[(1)] = (15));

} else {
var statearr_43405_44331 = state_43392__$1;
(statearr_43405_44331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (17))){
var inst_43380 = (state_43392[(2)]);
var inst_43381 = cljs.core.async.close_BANG_(out);
var state_43392__$1 = (function (){var statearr_43406 = state_43392;
(statearr_43406[(10)] = inst_43380);

return statearr_43406;
})();
var statearr_43407_44332 = state_43392__$1;
(statearr_43407_44332[(2)] = inst_43381);

(statearr_43407_44332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (3))){
var inst_43389 = (state_43392[(2)]);
var state_43392__$1 = state_43392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43392__$1,inst_43389);
} else {
if((state_val_43393 === (12))){
var inst_43342 = (state_43392[(8)]);
var inst_43363 = cljs.core.vec(inst_43342);
var state_43392__$1 = state_43392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43392__$1,(14),out,inst_43363);
} else {
if((state_val_43393 === (2))){
var state_43392__$1 = state_43392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43392__$1,(4),ch);
} else {
if((state_val_43393 === (11))){
var inst_43352 = (state_43392[(11)]);
var inst_43342 = (state_43392[(8)]);
var inst_43348 = (state_43392[(9)]);
var inst_43360 = inst_43342.push(inst_43348);
var tmp43409 = inst_43342;
var inst_43342__$1 = tmp43409;
var inst_43343 = inst_43352;
var state_43392__$1 = (function (){var statearr_43410 = state_43392;
(statearr_43410[(7)] = inst_43343);

(statearr_43410[(8)] = inst_43342__$1);

(statearr_43410[(12)] = inst_43360);

return statearr_43410;
})();
var statearr_43411_44334 = state_43392__$1;
(statearr_43411_44334[(2)] = null);

(statearr_43411_44334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (9))){
var inst_43343 = (state_43392[(7)]);
var inst_43356 = cljs.core.keyword_identical_QMARK_(inst_43343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43392__$1 = state_43392;
var statearr_43412_44336 = state_43392__$1;
(statearr_43412_44336[(2)] = inst_43356);

(statearr_43412_44336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (5))){
var inst_43343 = (state_43392[(7)]);
var inst_43352 = (state_43392[(11)]);
var inst_43348 = (state_43392[(9)]);
var inst_43353 = (state_43392[(13)]);
var inst_43352__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43348) : f.call(null,inst_43348));
var inst_43353__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43352__$1,inst_43343);
var state_43392__$1 = (function (){var statearr_43414 = state_43392;
(statearr_43414[(11)] = inst_43352__$1);

(statearr_43414[(13)] = inst_43353__$1);

return statearr_43414;
})();
if(inst_43353__$1){
var statearr_43416_44338 = state_43392__$1;
(statearr_43416_44338[(1)] = (8));

} else {
var statearr_43417_44339 = state_43392__$1;
(statearr_43417_44339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (14))){
var inst_43352 = (state_43392[(11)]);
var inst_43348 = (state_43392[(9)]);
var inst_43365 = (state_43392[(2)]);
var inst_43366 = [];
var inst_43367 = inst_43366.push(inst_43348);
var inst_43342 = inst_43366;
var inst_43343 = inst_43352;
var state_43392__$1 = (function (){var statearr_43424 = state_43392;
(statearr_43424[(14)] = inst_43365);

(statearr_43424[(7)] = inst_43343);

(statearr_43424[(8)] = inst_43342);

(statearr_43424[(15)] = inst_43367);

return statearr_43424;
})();
var statearr_43425_44340 = state_43392__$1;
(statearr_43425_44340[(2)] = null);

(statearr_43425_44340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (16))){
var state_43392__$1 = state_43392;
var statearr_43427_44341 = state_43392__$1;
(statearr_43427_44341[(2)] = null);

(statearr_43427_44341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (10))){
var inst_43358 = (state_43392[(2)]);
var state_43392__$1 = state_43392;
if(cljs.core.truth_(inst_43358)){
var statearr_43432_44342 = state_43392__$1;
(statearr_43432_44342[(1)] = (11));

} else {
var statearr_43433_44343 = state_43392__$1;
(statearr_43433_44343[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (18))){
var inst_43377 = (state_43392[(2)]);
var state_43392__$1 = state_43392;
var statearr_43437_44344 = state_43392__$1;
(statearr_43437_44344[(2)] = inst_43377);

(statearr_43437_44344[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43393 === (8))){
var inst_43353 = (state_43392[(13)]);
var state_43392__$1 = state_43392;
var statearr_43441_44345 = state_43392__$1;
(statearr_43441_44345[(2)] = inst_43353);

(statearr_43441_44345[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__40958__auto__ = null;
var cljs$core$async$state_machine__40958__auto____0 = (function (){
var statearr_43442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43442[(0)] = cljs$core$async$state_machine__40958__auto__);

(statearr_43442[(1)] = (1));

return statearr_43442;
});
var cljs$core$async$state_machine__40958__auto____1 = (function (state_43392){
while(true){
var ret_value__40959__auto__ = (function (){try{while(true){
var result__40960__auto__ = switch__40957__auto__(state_43392);
if(cljs.core.keyword_identical_QMARK_(result__40960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40960__auto__;
}
break;
}
}catch (e43443){var ex__40961__auto__ = e43443;
var statearr_43447_44348 = state_43392;
(statearr_43447_44348[(2)] = ex__40961__auto__);


if(cljs.core.seq((state_43392[(4)]))){
var statearr_43448_44349 = state_43392;
(statearr_43448_44349[(1)] = cljs.core.first((state_43392[(4)])));

} else {
throw ex__40961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44350 = state_43392;
state_43392 = G__44350;
continue;
} else {
return ret_value__40959__auto__;
}
break;
}
});
cljs$core$async$state_machine__40958__auto__ = function(state_43392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40958__auto____1.call(this,state_43392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40958__auto____0;
cljs$core$async$state_machine__40958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40958__auto____1;
return cljs$core$async$state_machine__40958__auto__;
})()
})();
var state__41048__auto__ = (function (){var statearr_43473 = f__41047__auto__();
(statearr_43473[(6)] = c__41046__auto___44320);

return statearr_43473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41048__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
