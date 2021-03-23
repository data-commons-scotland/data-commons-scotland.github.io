goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__26328){
var map__26329 = p__26328;
var map__26329__$1 = (((((!((map__26329 == null))))?(((((map__26329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26329):map__26329);
var sum_squares = map__26329__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26329__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26329__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26329__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26329__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate26331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate26331 = (function (p__26328,y_bar,map__26329,offset,ss_xy,x_bar,sum_squares,slope,ss_x,meta26332){
this.p__26328 = p__26328;
this.y_bar = y_bar;
this.map__26329 = map__26329;
this.offset = offset;
this.ss_xy = ss_xy;
this.x_bar = x_bar;
this.sum_squares = sum_squares;
this.slope = slope;
this.ss_x = ss_x;
this.meta26332 = meta26332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate26331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26333,meta26332__$1){
var self__ = this;
var _26333__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate26331(self__.p__26328,self__.y_bar,self__.map__26329,self__.offset,self__.ss_xy,self__.x_bar,self__.sum_squares,self__.slope,self__.ss_x,meta26332__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate26331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26333){
var self__ = this;
var _26333__$1 = this;
return self__.meta26332;
}));

(kixi.stats.estimate.t_kixi$stats$estimate26331.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate26331.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate26331.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate26331.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__26328","p__26328",1820017379,null),new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"map__26329","map__26329",1090522988,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"meta26332","meta26332",-796859095,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26331.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate26331.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate26331");

(kixi.stats.estimate.t_kixi$stats$estimate26331.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.estimate/t_kixi$stats$estimate26331");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate26331.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate26331 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate26331(p__26328__$1,y_bar__$1,map__26329__$2,offset__$1,ss_xy__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta26332){
return (new kixi.stats.estimate.t_kixi$stats$estimate26331(p__26328__$1,y_bar__$1,map__26329__$2,offset__$1,ss_xy__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta26332));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate26331(p__26328,y_bar,map__26329__$1,offset,ss_xy,x_bar,sum_squares,slope,ss_x,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__26337,x){
var map__26338 = p__26337;
var map__26338__$1 = (((((!((map__26338 == null))))?(((((map__26338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26338):map__26338);
var sum_squares = map__26338__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__26343,x,alpha){
var map__26344 = p__26343;
var map__26344__$1 = (((((!((map__26344 == null))))?(((((map__26344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26344):map__26344);
var sum_squares = map__26344__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26344__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate26346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate26346 = (function (x,p__26343,n,err,regression,df,t_crit,y_hat,sum_squares,map__26344,se,alpha,meta26347){
this.x = x;
this.p__26343 = p__26343;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.map__26344 = map__26344;
this.se = se;
this.alpha = alpha;
this.meta26347 = meta26347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate26346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26348,meta26347__$1){
var self__ = this;
var _26348__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate26346(self__.x,self__.p__26343,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.map__26344,self__.se,self__.alpha,meta26347__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate26346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26348){
var self__ = this;
var _26348__$1 = this;
return self__.meta26347;
}));

(kixi.stats.estimate.t_kixi$stats$estimate26346.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate26346.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26346.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__26343","p__26343",-721778621,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"map__26344","map__26344",338704156,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta26347","meta26347",1623082852,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26346.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate26346.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate26346");

(kixi.stats.estimate.t_kixi$stats$estimate26346.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.estimate/t_kixi$stats$estimate26346");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate26346.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate26346 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate26346(x__$1,p__26343__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,map__26344__$2,se__$1,alpha__$1,meta26347){
return (new kixi.stats.estimate.t_kixi$stats$estimate26346(x__$1,p__26343__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,map__26344__$2,se__$1,alpha__$1,meta26347));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate26346(x,p__26343,n,err,regression,df,t_crit,y_hat,sum_squares,map__26344__$1,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__26349,x){
var map__26350 = p__26349;
var map__26350__$1 = (((((!((map__26350 == null))))?(((((map__26350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26350):map__26350);
var sum_squares = map__26350__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26350__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__26352,x,alpha){
var map__26353 = p__26352;
var map__26353__$1 = (((((!((map__26353 == null))))?(((((map__26353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26353):map__26353);
var sum_squares = map__26353__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26353__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate26355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate26355 = (function (x,map__26353,p__26352,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,meta26356){
this.x = x;
this.map__26353 = map__26353;
this.p__26352 = p__26352;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta26356 = meta26356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate26355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26357,meta26356__$1){
var self__ = this;
var _26357__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate26355(self__.x,self__.map__26353,self__.p__26352,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta26356__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate26355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26357){
var self__ = this;
var _26357__$1 = this;
return self__.meta26356;
}));

(kixi.stats.estimate.t_kixi$stats$estimate26355.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate26355.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26355.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__26353","map__26353",695875689,null),new cljs.core.Symbol(null,"p__26352","p__26352",-2142511127,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta26356","meta26356",1418994528,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate26355.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate26355.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate26355");

(kixi.stats.estimate.t_kixi$stats$estimate26355.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"kixi.stats.estimate/t_kixi$stats$estimate26355");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate26355.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate26355 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate26355(x__$1,map__26353__$2,p__26352__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta26356){
return (new kixi.stats.estimate.t_kixi$stats$estimate26355(x__$1,map__26353__$2,p__26352__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta26356));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate26355(x,map__26353__$1,p__26352,n,err,regression,df,t_crit,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
