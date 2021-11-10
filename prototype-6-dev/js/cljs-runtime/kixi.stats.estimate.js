goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__36528){
var map__36529 = p__36528;
var map__36529__$1 = cljs.core.__destructure_map(map__36529);
var sum_squares = map__36529__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate36530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate36530 = (function (p__36528,y_bar,offset,ss_xy,map__36529,x_bar,sum_squares,slope,ss_x,meta36531){
this.p__36528 = p__36528;
this.y_bar = y_bar;
this.offset = offset;
this.ss_xy = ss_xy;
this.map__36529 = map__36529;
this.x_bar = x_bar;
this.sum_squares = sum_squares;
this.slope = slope;
this.ss_x = ss_x;
this.meta36531 = meta36531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate36530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36532,meta36531__$1){
var self__ = this;
var _36532__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate36530(self__.p__36528,self__.y_bar,self__.offset,self__.ss_xy,self__.map__36529,self__.x_bar,self__.sum_squares,self__.slope,self__.ss_x,meta36531__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36532){
var self__ = this;
var _36532__$1 = this;
return self__.meta36531;
}));

(kixi.stats.estimate.t_kixi$stats$estimate36530.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36530.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36530.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36530.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__36528","p__36528",207738984,null),new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"map__36529","map__36529",796966256,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"meta36531","meta36531",1851726748,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36530.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate36530.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate36530");

(kixi.stats.estimate.t_kixi$stats$estimate36530.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.estimate/t_kixi$stats$estimate36530");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate36530.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate36530 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate36530(p__36528__$1,y_bar__$1,offset__$1,ss_xy__$1,map__36529__$2,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta36531){
return (new kixi.stats.estimate.t_kixi$stats$estimate36530(p__36528__$1,y_bar__$1,offset__$1,ss_xy__$1,map__36529__$2,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta36531));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate36530(p__36528,y_bar,offset,ss_xy,map__36529__$1,x_bar,sum_squares,slope,ss_x,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__36543,x){
var map__36544 = p__36543;
var map__36544__$1 = cljs.core.__destructure_map(map__36544);
var sum_squares = map__36544__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__36563,x,alpha){
var map__36564 = p__36563;
var map__36564__$1 = cljs.core.__destructure_map(map__36564);
var sum_squares = map__36564__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate36565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate36565 = (function (map__36564,x,p__36563,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,meta36566){
this.map__36564 = map__36564;
this.x = x;
this.p__36563 = p__36563;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta36566 = meta36566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate36565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36567,meta36566__$1){
var self__ = this;
var _36567__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate36565(self__.map__36564,self__.x,self__.p__36563,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta36566__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36567){
var self__ = this;
var _36567__$1 = this;
return self__.meta36566;
}));

(kixi.stats.estimate.t_kixi$stats$estimate36565.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36565.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36565.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__36564","map__36564",-731449088,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__36563","p__36563",235307014,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta36566","meta36566",699641115,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36565.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate36565.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate36565");

(kixi.stats.estimate.t_kixi$stats$estimate36565.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.estimate/t_kixi$stats$estimate36565");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate36565.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate36565 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate36565(map__36564__$2,x__$1,p__36563__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta36566){
return (new kixi.stats.estimate.t_kixi$stats$estimate36565(map__36564__$2,x__$1,p__36563__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta36566));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate36565(map__36564__$1,x,p__36563,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__36568,x){
var map__36569 = p__36568;
var map__36569__$1 = cljs.core.__destructure_map(map__36569);
var sum_squares = map__36569__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36569__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__36570,x,alpha){
var map__36571 = p__36570;
var map__36571__$1 = cljs.core.__destructure_map(map__36571);
var sum_squares = map__36571__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate36574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate36574 = (function (map__36571,x,n,err,regression,df,p__36570,t_crit,y_hat,sum_squares,se,alpha,meta36575){
this.map__36571 = map__36571;
this.x = x;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.p__36570 = p__36570;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta36575 = meta36575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate36574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36576,meta36575__$1){
var self__ = this;
var _36576__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate36574(self__.map__36571,self__.x,self__.n,self__.err,self__.regression,self__.df,self__.p__36570,self__.t_crit,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta36575__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36576){
var self__ = this;
var _36576__$1 = this;
return self__.meta36575;
}));

(kixi.stats.estimate.t_kixi$stats$estimate36574.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36574.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36574.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__36571","map__36571",1192157696,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"p__36570","p__36570",-113139180,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta36575","meta36575",-1882094330,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36574.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate36574.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate36574");

(kixi.stats.estimate.t_kixi$stats$estimate36574.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.estimate/t_kixi$stats$estimate36574");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate36574.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate36574 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate36574(map__36571__$2,x__$1,n__$1,err__$1,regression__$1,df__$1,p__36570__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta36575){
return (new kixi.stats.estimate.t_kixi$stats$estimate36574(map__36571__$2,x__$1,n__$1,err__$1,regression__$1,df__$1,p__36570__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta36575));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate36574(map__36571__$1,x,n,err,regression,df,p__36570,t_crit,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
