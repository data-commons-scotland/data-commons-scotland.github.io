// Compiled by ClojureScript 1.10.866 {:optimizations :whitespace}
goog.provide('dcs.pasi.presentation.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('hiccups.runtime');
goog.require('dcs.pasi.presentation.slides');
dcs.pasi.presentation.core.options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hash","hash",-13781596),true,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"controlsTutorial","controlsTutorial",-1671684530),true,new cljs.core.Keyword(null,"progress","progress",244323547),false,new cljs.core.Keyword(null,"transition","transition",765692007),"fade",new cljs.core.Keyword(null,"slideNumber","slideNumber",1553611975),false,new cljs.core.Keyword(null,"navigationMode","navigationMode",-1064279569),"linear",new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [RevealNotes], null)], null));
/**
 * Get list of all slides and convert them to html strings.
 */
dcs.pasi.presentation.core.convert = (function dcs$pasi$presentation$core$convert(){
var slides = dcs.pasi.presentation.slides.all.call(null);
return clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__9846_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,p1__9846_SHARP_));
}),slides));
});
/**
 * Get all slides, set them as innerHTML and reinitialize Reveal.js
 */
dcs.pasi.presentation.core.main = (function dcs$pasi$presentation$core$main(){
(goog.dom.getElement("slides").innerHTML = dcs.pasi.presentation.core.convert.call(null));

Reveal.initialize(dcs.pasi.presentation.core.options);

return Reveal.setState(Reveal.getState());
});
dcs.pasi.presentation.core.main.call(null);
