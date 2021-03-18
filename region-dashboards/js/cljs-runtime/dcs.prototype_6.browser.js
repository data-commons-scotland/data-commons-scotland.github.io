goog.provide('dcs.prototype_6.browser');
dcs.prototype_6.browser.start = (function dcs$prototype_6$browser$start(){
console.log("start");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.prototype_6.ui_root.app], null),document.getElementById("app"));
});
dcs.prototype_6.browser.init = (function dcs$prototype_6$browser$init(){
console.log("init");

return dcs.prototype_6.browser.start();
});
goog.exportSymbol('dcs.prototype_6.browser.init', dcs.prototype_6.browser.init);
dcs.prototype_6.browser.stop = (function dcs$prototype_6$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.prototype_6.browser.js.map
