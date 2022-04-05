// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('figwheel.repl.logging');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_25259 = (new goog.debug.Console());
var G__25249_25260 = c_25259.getFormatter();
goog.object.set(G__25249_25260,"showAbsoluteTime",false);

goog.object.set(G__25249_25260,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_25259);

}

var temp__5753__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5753__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5753__auto__)){
var href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__25245_SHARP_,p2__25246_SHARP_){
if(cljs.core._EQ_.call(null,p1__25245_SHARP_,p2__25246_SHARP_)){
return p1__25245_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.main.css_reload.truncate_url.call(null,href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5751__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5751__auto__)){
var parent_stylesheet = temp__5751__auto__;
var G__25261 = parent_stylesheet;
stylesheet = G__25261;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25250){
var map__25251 = p__25250;
var map__25251__$1 = cljs.core.__destructure_map.call(null,map__25251);
var match_length = cljs.core.get.call(null,map__25251__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25251__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25247_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__25247_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url));

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",(function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}));

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__25248_SHARP_){
return p1__25248_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5751__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),(function (){
return fin.call(null,file);
}));
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__25252 = (new Event("figwheel.after-css-load",document.body));
goog.object.add(G__25252,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__25252;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__25253_25262 = cljs.core.seq.call(null,files);
var chunk__25254_25263 = null;
var count__25255_25264 = (0);
var i__25256_25265 = (0);
while(true){
if((i__25256_25265 < count__25255_25264)){
var file_25266 = cljs.core._nth.call(null,chunk__25254_25263,i__25256_25265);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_25266);


var G__25267 = seq__25253_25262;
var G__25268 = chunk__25254_25263;
var G__25269 = count__25255_25264;
var G__25270 = (i__25256_25265 + (1));
seq__25253_25262 = G__25267;
chunk__25254_25263 = G__25268;
count__25255_25264 = G__25269;
i__25256_25265 = G__25270;
continue;
} else {
var temp__5753__auto___25271 = cljs.core.seq.call(null,seq__25253_25262);
if(temp__5753__auto___25271){
var seq__25253_25272__$1 = temp__5753__auto___25271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25253_25272__$1)){
var c__4649__auto___25273 = cljs.core.chunk_first.call(null,seq__25253_25272__$1);
var G__25274 = cljs.core.chunk_rest.call(null,seq__25253_25272__$1);
var G__25275 = c__4649__auto___25273;
var G__25276 = cljs.core.count.call(null,c__4649__auto___25273);
var G__25277 = (0);
seq__25253_25262 = G__25274;
chunk__25254_25263 = G__25275;
count__25255_25264 = G__25276;
i__25256_25265 = G__25277;
continue;
} else {
var file_25278 = cljs.core.first.call(null,seq__25253_25272__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_25278);


var G__25279 = cljs.core.next.call(null,seq__25253_25272__$1);
var G__25280 = null;
var G__25281 = (0);
var G__25282 = (0);
seq__25253_25262 = G__25279;
chunk__25254_25263 = G__25280;
count__25255_25264 = G__25281;
i__25256_25265 = G__25282;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
figwheel.repl.logging.info.call(null,figwheel.main.css_reload.logger,["loaded ",cljs.core.pr_str.call(null,loaded_files)].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5753__auto___25283 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5753__auto___25283)){
var not_loaded_25284 = temp__5753__auto___25283;
figwheel.repl.logging.warning.call(null,figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.pr_str.call(null,not_loaded_25284)].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__25257,files){
var map__25258 = p__25257;
var map__25258__$1 = cljs.core.__destructure_map.call(null,map__25258);
var on_cssload = cljs.core.get.call(null,map__25258__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if((!((goog.global.document == null)))){
var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5753__auto__)){
var files_SINGLEQUOTE_ = temp__5753__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
