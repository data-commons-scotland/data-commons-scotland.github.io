goog.provide('kixi.stats.estimate');
kixi.stats.estimate.simple_linear_regression = (function kixi$stats$estimate$simple_linear_regression(p__36230){
var map__36231 = p__36230;
var map__36231__$1 = cljs.core.__destructure_map(map__36231);
var sum_squares = map__36231__$1;
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((ss_x === (0))){
return null;
} else {
var slope = (ss_xy / ss_x);
var offset = (y_bar - (x_bar * slope));
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate36232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {kixi.stats.protocols.PDependent}
 * @implements {kixi.stats.protocols.PParameterised}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate36232 = (function (y_bar,offset,map__36231,ss_xy,p__36230,x_bar,sum_squares,slope,ss_x,meta36233){
this.y_bar = y_bar;
this.offset = offset;
this.map__36231 = map__36231;
this.ss_xy = ss_xy;
this.p__36230 = p__36230;
this.x_bar = x_bar;
this.sum_squares = sum_squares;
this.slope = slope;
this.ss_x = ss_x;
this.meta36233 = meta36233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate36232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36234,meta36233__$1){
var self__ = this;
var _36234__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate36232(self__.y_bar,self__.offset,self__.map__36231,self__.ss_xy,self__.p__36230,self__.x_bar,self__.sum_squares,self__.slope,self__.ss_x,meta36233__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36234){
var self__ = this;
var _36234__$1 = this;
return self__.meta36233;
}));

(kixi.stats.estimate.t_kixi$stats$estimate36232.prototype.kixi$stats$protocols$PDependent$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36232.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.offset + (self__.slope * x));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36232.prototype.kixi$stats$protocols$PParameterised$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36232.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.offset,self__.slope], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y-bar","y-bar",150662700,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"map__36231","map__36231",1800164302,null),new cljs.core.Symbol(null,"ss-xy","ss-xy",2124139759,null),new cljs.core.Symbol(null,"p__36230","p__36230",-1018150096,null),new cljs.core.Symbol(null,"x-bar","x-bar",-711590283,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"slope","slope",412593404,null),new cljs.core.Symbol(null,"ss-x","ss-x",-166382883,null),new cljs.core.Symbol(null,"meta36233","meta36233",1988699957,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36232.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate36232.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate36232");

(kixi.stats.estimate.t_kixi$stats$estimate36232.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.estimate/t_kixi$stats$estimate36232");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate36232.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate36232 = (function kixi$stats$estimate$simple_linear_regression_$___GT_t_kixi$stats$estimate36232(y_bar__$1,offset__$1,map__36231__$2,ss_xy__$1,p__36230__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta36233){
return (new kixi.stats.estimate.t_kixi$stats$estimate36232(y_bar__$1,offset__$1,map__36231__$2,ss_xy__$1,p__36230__$1,x_bar__$1,sum_squares__$1,slope__$1,ss_x__$1,meta36233));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate36232(y_bar,offset,map__36231__$1,ss_xy,p__36230,x_bar,sum_squares,slope,ss_x,cljs.core.PersistentArrayMap.EMPTY));
}
});
kixi.stats.estimate.regression_standard_error = (function kixi$stats$estimate$regression_standard_error(p__36239,x){
var map__36240 = p__36239;
var map__36240__$1 = cljs.core.__destructure_map(map__36240);
var sum_squares = map__36240__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) / n) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_confidence_interval = (function kixi$stats$estimate$regression_confidence_interval(p__36241,x,alpha){
var map__36242 = p__36241;
var map__36242__$1 = cljs.core.__destructure_map(map__36242);
var sum_squares = map__36242__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate36249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate36249 = (function (x,p__36241,n,err,regression,df,t_crit,y_hat,sum_squares,map__36242,se,alpha,meta36250){
this.x = x;
this.p__36241 = p__36241;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.map__36242 = map__36242;
this.se = se;
this.alpha = alpha;
this.meta36250 = meta36250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate36249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36251,meta36250__$1){
var self__ = this;
var _36251__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate36249(self__.x,self__.p__36241,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.y_hat,self__.sum_squares,self__.map__36242,self__.se,self__.alpha,meta36250__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36251){
var self__ = this;
var _36251__$1 = this;
return self__.meta36250;
}));

(kixi.stats.estimate.t_kixi$stats$estimate36249.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36249.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36249.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__36241","p__36241",-1186849206,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"map__36242","map__36242",65547486,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta36250","meta36250",1589545676,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36249.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate36249.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate36249");

(kixi.stats.estimate.t_kixi$stats$estimate36249.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.estimate/t_kixi$stats$estimate36249");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate36249.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate36249 = (function kixi$stats$estimate$regression_confidence_interval_$___GT_t_kixi$stats$estimate36249(x__$1,p__36241__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,map__36242__$2,se__$1,alpha__$1,meta36250){
return (new kixi.stats.estimate.t_kixi$stats$estimate36249(x__$1,p__36241__$1,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,y_hat__$1,sum_squares__$1,map__36242__$2,se__$1,alpha__$1,meta36250));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate36249(x,p__36241,n,err,regression,df,t_crit,y_hat,sum_squares,map__36242__$1,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});
kixi.stats.estimate.regression_prediction_standard_error = (function kixi$stats$estimate$regression_prediction_standard_error(p__36252,x){
var map__36253 = p__36252;
var map__36253__$1 = cljs.core.__destructure_map(map__36253);
var sum_squares = map__36253__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486));
var y_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827));
var ss_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410));
var ss_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976));
var ss_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232));
if((((n > (2))) && ((!((ss_x === (0))))))){
return kixi.stats.math.sqrt(((((1) / (n - (2))) * (ss_y - (kixi.stats.math.sq(ss_xy) / ss_x))) * (((1) + ((1) / n)) + (kixi.stats.math.sq((x - x_bar)) / ss_x))));
} else {
return null;
}
});
kixi.stats.estimate.regression_prediction_interval = (function kixi$stats$estimate$regression_prediction_interval(p__36254,x,alpha){
var map__36255 = p__36254;
var map__36255__$1 = cljs.core.__destructure_map(map__36255);
var sum_squares = map__36255__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36255__$1,new cljs.core.Keyword(null,"n","n",562130025));
var regression = kixi.stats.estimate.simple_linear_regression(sum_squares);
var y_hat = kixi.stats.protocols.measure(regression,x);
var se = kixi.stats.estimate.regression_prediction_standard_error(sum_squares,x);
var df = (n - (2));
var t_crit = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),df], null)),alpha);
var err = (t_crit * se);
if((typeof kixi !== 'undefined') && (typeof kixi.stats !== 'undefined') && (typeof kixi.stats.estimate !== 'undefined') && (typeof kixi.stats.estimate.t_kixi$stats$estimate36256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kixi.stats.protocols.PInterval}
 * @implements {cljs.core.IWithMeta}
*/
kixi.stats.estimate.t_kixi$stats$estimate36256 = (function (x,map__36255,n,err,regression,df,t_crit,p__36254,y_hat,sum_squares,se,alpha,meta36257){
this.x = x;
this.map__36255 = map__36255;
this.n = n;
this.err = err;
this.regression = regression;
this.df = df;
this.t_crit = t_crit;
this.p__36254 = p__36254;
this.y_hat = y_hat;
this.sum_squares = sum_squares;
this.se = se;
this.alpha = alpha;
this.meta36257 = meta36257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kixi.stats.estimate.t_kixi$stats$estimate36256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36258,meta36257__$1){
var self__ = this;
var _36258__$1 = this;
return (new kixi.stats.estimate.t_kixi$stats$estimate36256(self__.x,self__.map__36255,self__.n,self__.err,self__.regression,self__.df,self__.t_crit,self__.p__36254,self__.y_hat,self__.sum_squares,self__.se,self__.alpha,meta36257__$1));
}));

(kixi.stats.estimate.t_kixi$stats$estimate36256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36258){
var self__ = this;
var _36258__$1 = this;
return self__.meta36257;
}));

(kixi.stats.estimate.t_kixi$stats$estimate36256.prototype.kixi$stats$protocols$PInterval$ = cljs.core.PROTOCOL_SENTINEL);

(kixi.stats.estimate.t_kixi$stats$estimate36256.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat - self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36256.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.y_hat + self__.err);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__36255","map__36255",-658396657,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"regression","regression",1209204402,null),new cljs.core.Symbol(null,"df","df",1701750387,null),new cljs.core.Symbol(null,"t-crit","t-crit",-1473514667,null),new cljs.core.Symbol(null,"p__36254","p__36254",-334568841,null),new cljs.core.Symbol(null,"y-hat","y-hat",-1873919944,null),new cljs.core.Symbol(null,"sum-squares","sum-squares",4070811,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"meta36257","meta36257",249328614,null)], null);
}));

(kixi.stats.estimate.t_kixi$stats$estimate36256.cljs$lang$type = true);

(kixi.stats.estimate.t_kixi$stats$estimate36256.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate36256");

(kixi.stats.estimate.t_kixi$stats$estimate36256.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"kixi.stats.estimate/t_kixi$stats$estimate36256");
}));

/**
 * Positional factory function for kixi.stats.estimate/t_kixi$stats$estimate36256.
 */
kixi.stats.estimate.__GT_t_kixi$stats$estimate36256 = (function kixi$stats$estimate$regression_prediction_interval_$___GT_t_kixi$stats$estimate36256(x__$1,map__36255__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,p__36254__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta36257){
return (new kixi.stats.estimate.t_kixi$stats$estimate36256(x__$1,map__36255__$2,n__$1,err__$1,regression__$1,df__$1,t_crit__$1,p__36254__$1,y_hat__$1,sum_squares__$1,se__$1,alpha__$1,meta36257));
});

}

return (new kixi.stats.estimate.t_kixi$stats$estimate36256(x,map__36255__$1,n,err,regression,df,t_crit,p__36254,y_hat,sum_squares,se,alpha,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=kixi.stats.estimate.js.map
