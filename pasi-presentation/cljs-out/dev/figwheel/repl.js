// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl.logging');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
figwheel.repl.default_ssl_port = (9533);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
return figwheel.repl.logging.console_logging.call(null);
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return figwheel.repl.logging.debug.call(null,figwheel.repl.logger,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
if((!((goog.debugLoader_ == null)))){
var path = goog.debugLoader_.getPathFromDeps_(ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
} else {
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
(goog.require = figwheel.repl.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

if(cljs.core.truth_((function (){var or__4223__auto__ = reload;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
(goog.require_figwheel_backup_ = (function (){var or__4223__auto__ = goog.require__;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.require;
}
})());
}

(goog.isProvided_ = (function (name){
return false;
}));

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload);

return (goog.require = figwheel.repl.figwheel_require);
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__24579_SHARP_,p2__24580_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24579_SHARP_)),p2__24580_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__24581_SHARP_,p2__24582_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24581_SHARP_),p2__24582_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__24590 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__24590.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__24590.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__24590;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e24591){if((e24591 instanceof Error)){
var e = e24591;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e24591;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24592){if((e24592 instanceof Error)){
var e = e24592;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e24592;

}
}})());
});
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__24593 = cljs.core._EQ_;
var expr__24594 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__24593.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24594))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__24593.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24594))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__24593.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__24594))){
return figwheel.repl.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__24596,callback){
var map__24597 = p__24596;
var map__24597__$1 = cljs.core.__destructure_map.call(null,map__24597);
var file_msg = map__24597__$1;
var request_url = cljs.core.get.call(null,map__24597__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4223__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__24583_SHARP_){
return p1__24583_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__24599 = arguments.length;
switch (G__24599) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
}));

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
if(clojure.string.ends_with_QMARK_.call(null,url,"goog/base.js")){
return true;
} else {
var temp__5753__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__24584_SHARP_){
return p1__24584_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e24600){if((e24600 instanceof Error)){
var e_24670 = e24600;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e_24670);
} else {
throw e24600;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__24585_SHARP_){
return p1__24585_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5753__auto__)){
var next_promise_fn = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}
}));

(figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2);


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__24586_SHARP_){
return p1__24586_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/**
 * @define {string}
 */
figwheel.repl.print_output = goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__24671__delegate = function (args){
var seq__24601 = cljs.core.seq.call(null,printers);
var chunk__24602 = null;
var count__24603 = (0);
var i__24604 = (0);
while(true){
if((i__24604 < count__24603)){
var p = cljs.core._nth.call(null,chunk__24602,i__24604);
figwheel.repl.out_print.call(null,p,args);


var G__24672 = seq__24601;
var G__24673 = chunk__24602;
var G__24674 = count__24603;
var G__24675 = (i__24604 + (1));
seq__24601 = G__24672;
chunk__24602 = G__24673;
count__24603 = G__24674;
i__24604 = G__24675;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__24601);
if(temp__5753__auto__){
var seq__24601__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24601__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__24601__$1);
var G__24676 = cljs.core.chunk_rest.call(null,seq__24601__$1);
var G__24677 = c__4649__auto__;
var G__24678 = cljs.core.count.call(null,c__4649__auto__);
var G__24679 = (0);
seq__24601 = G__24676;
chunk__24602 = G__24677;
count__24603 = G__24678;
i__24604 = G__24679;
continue;
} else {
var p = cljs.core.first.call(null,seq__24601__$1);
figwheel.repl.out_print.call(null,p,args);


var G__24680 = cljs.core.next.call(null,seq__24601__$1);
var G__24681 = null;
var G__24682 = (0);
var G__24683 = (0);
seq__24601 = G__24680;
chunk__24602 = G__24681;
count__24603 = G__24682;
i__24604 = G__24683;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__24671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24684__i = 0, G__24684__a = new Array(arguments.length -  0);
while (G__24684__i < G__24684__a.length) {G__24684__a[G__24684__i] = arguments[G__24684__i + 0]; ++G__24684__i;}
  args = new cljs.core.IndexedSeq(G__24684__a,0,null);
} 
return G__24671__delegate.call(this,args);};
G__24671.cljs$lang$maxFixedArity = 0;
G__24671.cljs$lang$applyTo = (function (arglist__24685){
var args = cljs.core.seq(arglist__24685);
return G__24671__delegate(args);
});
G__24671.cljs$core$IFn$_invoke$arity$variadic = G__24671__delegate;
return G__24671;
})()
);

return cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__24686__delegate = function (args){
var seq__24605 = cljs.core.seq.call(null,printers);
var chunk__24606 = null;
var count__24607 = (0);
var i__24608 = (0);
while(true){
if((i__24608 < count__24607)){
var p = cljs.core._nth.call(null,chunk__24606,i__24608);
figwheel.repl.err_print.call(null,p,args);


var G__24687 = seq__24605;
var G__24688 = chunk__24606;
var G__24689 = count__24607;
var G__24690 = (i__24608 + (1));
seq__24605 = G__24687;
chunk__24606 = G__24688;
count__24607 = G__24689;
i__24608 = G__24690;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__24605);
if(temp__5753__auto__){
var seq__24605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24605__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__24605__$1);
var G__24691 = cljs.core.chunk_rest.call(null,seq__24605__$1);
var G__24692 = c__4649__auto__;
var G__24693 = cljs.core.count.call(null,c__4649__auto__);
var G__24694 = (0);
seq__24605 = G__24691;
chunk__24606 = G__24692;
count__24607 = G__24693;
i__24608 = G__24694;
continue;
} else {
var p = cljs.core.first.call(null,seq__24605__$1);
figwheel.repl.err_print.call(null,p,args);


var G__24695 = cljs.core.next.call(null,seq__24605__$1);
var G__24696 = null;
var G__24697 = (0);
var G__24698 = (0);
seq__24605 = G__24695;
chunk__24606 = G__24696;
count__24607 = G__24697;
i__24608 = G__24698;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__24686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24699__i = 0, G__24699__a = new Array(arguments.length -  0);
while (G__24699__i < G__24699__a.length) {G__24699__a[G__24699__i] = arguments[G__24699__i + 0]; ++G__24699__i;}
  args = new cljs.core.IndexedSeq(G__24699__a,0,null);
} 
return G__24686__delegate.call(this,args);};
G__24686.cljs$lang$maxFixedArity = 0;
G__24686.cljs$lang$applyTo = (function (arglist__24700){
var args = cljs.core.seq(arglist__24700);
return G__24686__delegate(args);
});
G__24686.cljs$core$IFn$_invoke$arity$variadic = G__24686__delegate;
return G__24686;
})()
);
});


/**
 * @define {string}
 */
figwheel.repl.connect_url = goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__24609,response_body){
var map__24610 = p__24609;
var map__24610__$1 = cljs.core.__destructure_map.call(null,map__24610);
var uuid = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__24611 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__24611,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__24611;
}
});

figwheel.repl.http_post = (function (){var pred__24612 = cljs.core._EQ_;
var expr__24613 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__24612.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24613))){
var http = require("http");
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__24615 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5753__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5753__auto__)){
var q = temp__5753__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),(function (x){
return null;
})).on("error",(function (p1__24587_SHARP_){
return console.error(p1__24587_SHARP_);
}));
G__24615.write(post_data);

G__24615.end();

return G__24615;
});
} else {
return (function (url,response){
return goog.net.XhrIo.send(url,(function (e){
return figwheel.repl.debug.call(null,"Response Posted");
}),"POST",response);
});
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__24616,response_body){
var map__24617 = p__24616;
var map__24617__$1 = cljs.core.__destructure_map.call(null,map__24617);
var old_msg = map__24617__$1;
var websocket = cljs.core.get.call(null,map__24617__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__24617__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5753__auto___24701 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5753__auto___24701)){
var sn_24702 = temp__5753__auto___24701;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_24702);
} else {
}

var temp__5753__auto___24703 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5753__auto___24703)){
var sid_24704 = temp__5753__auto___24703;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_24704);
} else {
}

figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__24705 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24619 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24620 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24621 = true;
var _STAR_print_fn_STAR__temp_val__24622 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24621);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24622);

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e24623){if((e24623 instanceof Error)){
var e = e24623;
return null;
} else {
throw e24623;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__4221__auto__ = print_to_console_QMARK__24705;
if(cljs.core.truth_(and__4221__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__4221__auto__;
}
})())){
setTimeout((function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
}),(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24620);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24619);
}}catch (e24618){if((e24618 instanceof Error)){
var e = e24618;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e24618;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__24624){
var map__24625 = p__24624;
var map__24625__$1 = cljs.core.__destructure_map.call(null,map__24625);
var msg = map__24625__$1;
var code = cljs.core.get.call(null,map__24625__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__24626){
var map__24627 = p__24626;
var map__24627__$1 = cljs.core.__destructure_map.call(null,map__24627);
var messages = cljs.core.get.call(null,map__24627__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__24627__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__24628 = cljs.core.seq.call(null,messages);
var chunk__24629 = null;
var count__24630 = (0);
var i__24631 = (0);
while(true){
if((i__24631 < count__24630)){
var msg = cljs.core._nth.call(null,chunk__24629,i__24631);
figwheel.repl.message.call(null,(function (){var G__24634 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__24634,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__24634;
}
})());


var G__24706 = seq__24628;
var G__24707 = chunk__24629;
var G__24708 = count__24630;
var G__24709 = (i__24631 + (1));
seq__24628 = G__24706;
chunk__24629 = G__24707;
count__24630 = G__24708;
i__24631 = G__24709;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__24628);
if(temp__5753__auto__){
var seq__24628__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24628__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__24628__$1);
var G__24710 = cljs.core.chunk_rest.call(null,seq__24628__$1);
var G__24711 = c__4649__auto__;
var G__24712 = cljs.core.count.call(null,c__4649__auto__);
var G__24713 = (0);
seq__24628 = G__24710;
chunk__24629 = G__24711;
count__24630 = G__24712;
i__24631 = G__24713;
continue;
} else {
var msg = cljs.core.first.call(null,seq__24628__$1);
figwheel.repl.message.call(null,(function (){var G__24635 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__24635,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__24635;
}
})());


var G__24714 = cljs.core.next.call(null,seq__24628__$1);
var G__24715 = null;
var G__24716 = (0);
var G__24717 = (0);
seq__24628 = G__24714;
chunk__24629 = G__24715;
count__24630 = G__24716;
i__24631 = G__24717;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__4223__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__24636_24718 = uri.getQueryData().add("fwsid",(function (){var or__4223__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__24636_24718.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4309__auto__ = Math.pow((2),attempt);
var y__4310__auto__ = (20);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__24588_SHARP_){
if(typeof p1__24588_SHARP_ === 'string'){
return p1__24588_SHARP_;
} else {
return goog.json.serialize(p1__24588_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__24589_SHARP_){
if(typeof p1__24589_SHARP_ === 'string'){
return p1__24589_SHARP_;
} else {
return goog.json.serialize(p1__24589_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__24637 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__24637,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__24637;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__24638 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__24638,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__24638;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__4223__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var or__4223__auto____$2 = (function (){var and__4221__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__4221__auto__){
try{return require("ws");
}catch (e24639){if((e24639 instanceof Error)){
var e = e24639;
return null;
} else {
throw e24639;

}
}} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
var and__4221__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__4221__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__4221__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5751__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5751__auto__)){
var websocket_class = temp__5751__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4835__auto__ = [];
var len__4829__auto___24719 = arguments.length;
var i__4830__auto___24720 = (0);
while(true){
if((i__4830__auto___24720 < len__4829__auto___24719)){
args__4835__auto__.push((arguments[i__4830__auto___24720]));

var G__24721 = (i__4830__auto___24720 + (1));
i__4830__auto___24720 = G__24721;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__24641){
var vec__24642 = p__24641;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__24642,(0),null);
return figwheel.repl.ensure_websocket.call(null,(function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var G__24645 = websocket;
G__24645.addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){
var temp__5753__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e24646){if((e24646 instanceof Error)){
var e__$1 = e24646;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e__$1);
} else {
throw e24646;

}
}} else {
return null;
}
}));

G__24645.addEventListener(goog.net.WebSocket.EventType.OPENED,(function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
}));

G__24645.addEventListener(goog.net.WebSocket.EventType.CLOSED,(function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
}));

G__24645.open(url);

return G__24645;
}));
}));

(figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq24640){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24640));
}));


figwheel.repl.http_get = (function (){var pred__24647 = cljs.core._EQ_;
var expr__24648 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__24647.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24648))){
var http = require("http");
return (function (url){
return (new goog.Promise((function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),(function (response){
response.on("data",(function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
}));

return response.on("end",(function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e24650){if((e24650 instanceof Error)){
var e = e24650;
console.error(e);

return err.call(null,e);
} else {
throw e24650;

}
}})());
}));
})).on("error",err);
})));
});
} else {
return (function (url){
return (new goog.Promise((function (succ,err){
return goog.net.XhrIo.send(url,(function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
}));
})));
});
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e24651){if((e24651 instanceof Error)){
var e = e24651;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
throw e24651;

}
}});
var G__24652_24722 = url.getQueryData();
G__24652_24722.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then((function (msg){
var typ = goog.object.get(msg,"connection-type");
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
}),(function (e){
if((e instanceof Error)){
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = (e instanceof goog.net.XhrIo);
if(and__4221__auto__){
return e.getResponseBody();
} else {
return and__4221__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout((function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
}),wait_time);
}));
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4835__auto__ = [];
var len__4829__auto___24723 = arguments.length;
var i__4830__auto___24724 = (0);
while(true){
if((i__4830__auto___24724 < len__4829__auto___24723)){
args__4835__auto__.push((arguments[i__4830__auto___24724]));

var G__24725 = (i__4830__auto___24724 + (1));
i__4830__auto___24724 = G__24725;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__24654){
var vec__24655 = p__24654;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__24655,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
}));

(figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq24653){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24653));
}));


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(url,"http");
if(or__4223__auto__){
return or__4223__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
figwheel.repl.logging.warning.call(null,figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/**
 * @define {string}
 */
figwheel.repl.client_log_level = goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__24658 = cljs.core.seq.call(null,(function (){var G__24663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__24663,figwheel.core.logger);
} else {
return G__24663;
}
})());
var chunk__24659 = null;
var count__24660 = (0);
var i__24661 = (0);
while(true){
if((i__24661 < count__24660)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__24659,i__24661);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__24726 = seq__24658;
var G__24727 = chunk__24659;
var G__24728 = count__24660;
var G__24729 = (i__24661 + (1));
seq__24658 = G__24726;
chunk__24659 = G__24727;
count__24660 = G__24728;
i__24661 = G__24729;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__24658);
if(temp__5753__auto__){
var seq__24658__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24658__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__24658__$1);
var G__24730 = cljs.core.chunk_rest.call(null,seq__24658__$1);
var G__24731 = c__4649__auto__;
var G__24732 = cljs.core.count.call(null,c__4649__auto__);
var G__24733 = (0);
seq__24658 = G__24730;
chunk__24659 = G__24731;
count__24660 = G__24732;
i__24661 = G__24733;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__24658__$1);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__24734 = cljs.core.next.call(null,seq__24658__$1);
var G__24735 = null;
var G__24736 = (0);
var G__24737 = (0);
seq__24658 = G__24734;
chunk__24659 = G__24735;
count__24660 = G__24736;
i__24661 = G__24737;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__4223__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(goog.string.startsWith(url,"ws")){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(goog.string.startsWith(url,"http")){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4835__auto__ = [];
var len__4829__auto___24738 = arguments.length;
var i__4830__auto___24739 = (0);
while(true){
if((i__4830__auto___24739 < len__4829__auto___24738)){
args__4835__auto__.push((arguments[i__4830__auto___24739]));

var G__24740 = (i__4830__auto___24739 + (1));
i__4830__auto___24739 = G__24740;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__24665){
var vec__24666 = p__24665;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__24666,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
}));

(figwheel.repl.connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.connect.cljs$lang$applyTo = (function (seq24664){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24664));
}));


//# sourceMappingURL=repl.js.map
