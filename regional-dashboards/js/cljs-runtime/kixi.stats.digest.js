goog.provide('kixi.stats.digest');
kixi.stats.digest.sum_squares = (function kixi$stats$digest$sum_squares(fx,fy){
return (function() {
var G__26325 = null;
var G__26325__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__26325__1 = (function (p__26318){
var vec__26322 = p__26318;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(5),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"n","n",562130025),c,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486),mx,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827),my,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232),ssxy,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410),ssx,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976),ssy], null);
});
var G__26325__2 = (function (p__26317,e){
var vec__26319 = p__26317;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(5),null);
var acc = vec__26319;
var x = (fx.cljs$core$IFn$_invoke$arity$1 ? fx.cljs$core$IFn$_invoke$arity$1(e) : fx.call(null,e));
var y = (fy.cljs$core$IFn$_invoke$arity$1 ? fy.cljs$core$IFn$_invoke$arity$1(e) : fy.call(null,e));
if((((x == null)) || ((y == null)))){
return acc;
} else {
var x__$1 = x;
var y__$1 = y;
var c_SINGLEQUOTE_ = (c + (1));
var mx_SINGLEQUOTE_ = (mx + ((x__$1 - mx) / c_SINGLEQUOTE_));
var my_SINGLEQUOTE_ = (my + ((y__$1 - my) / c_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,mx_SINGLEQUOTE_,my_SINGLEQUOTE_,(ssx + ((x__$1 - mx_SINGLEQUOTE_) * (x__$1 - mx))),(ssy + ((y__$1 - my_SINGLEQUOTE_) * (y__$1 - my))),(ssxy + ((x__$1 - mx_SINGLEQUOTE_) * (y__$1 - my)))], null);
}
});
G__26325 = function(p__26317,e){
switch(arguments.length){
case 0:
return G__26325__0.call(this);
case 1:
return G__26325__1.call(this,p__26317);
case 2:
return G__26325__2.call(this,p__26317,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26325.cljs$core$IFn$_invoke$arity$0 = G__26325__0;
G__26325.cljs$core$IFn$_invoke$arity$1 = G__26325__1;
G__26325.cljs$core$IFn$_invoke$arity$2 = G__26325__2;
return G__26325;
})()
});

//# sourceMappingURL=kixi.stats.digest.js.map
