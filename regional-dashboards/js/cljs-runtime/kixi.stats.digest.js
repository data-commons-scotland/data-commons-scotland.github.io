goog.provide('kixi.stats.digest');
kixi.stats.digest.sum_squares = (function kixi$stats$digest$sum_squares(fx,fy){
return (function() {
var G__36222 = null;
var G__36222__0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0,0.0,0.0], null);
});
var G__36222__1 = (function (p__36214){
var vec__36219 = p__36214;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(5),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"n","n",562130025),c,new cljs.core.Keyword(null,"x-bar","x-bar",1942845486),mx,new cljs.core.Keyword(null,"y-bar","y-bar",-1489868827),my,new cljs.core.Keyword(null,"ss-xy","ss-xy",483608232),ssxy,new cljs.core.Keyword(null,"ss-x","ss-x",-1806914410),ssx,new cljs.core.Keyword(null,"ss-y","ss-y",-376418976),ssy], null);
});
var G__36222__2 = (function (p__36213,e){
var vec__36215 = p__36213;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(1),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(2),null);
var ssx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(3),null);
var ssy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(4),null);
var ssxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(5),null);
var acc = vec__36215;
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
G__36222 = function(p__36213,e){
switch(arguments.length){
case 0:
return G__36222__0.call(this);
case 1:
return G__36222__1.call(this,p__36213);
case 2:
return G__36222__2.call(this,p__36213,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36222.cljs$core$IFn$_invoke$arity$0 = G__36222__0;
G__36222.cljs$core$IFn$_invoke$arity$1 = G__36222__1;
G__36222.cljs$core$IFn$_invoke$arity$2 = G__36222__2;
return G__36222;
})()
});

//# sourceMappingURL=kixi.stats.digest.js.map
