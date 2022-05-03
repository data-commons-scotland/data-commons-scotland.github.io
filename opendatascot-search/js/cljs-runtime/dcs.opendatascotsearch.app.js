goog.provide('dcs.opendatascotsearch.app');
dcs.opendatascotsearch.app.match_against_index_card = (function dcs$opendatascotsearch$app$match_against_index_card(index_card,search_words){
var search_words__GT_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function dcs$opendatascotsearch$app$match_against_index_card_$_iter__41257(s__41258){
return (new cljs.core.LazySeq(null,(function (){
var s__41258__$1 = s__41258;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41258__$1);
if(temp__5753__auto__){
var s__41258__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41258__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41258__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41260 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41259 = (0);
while(true){
if((i__41259 < size__4651__auto__)){
var search_word = cljs.core._nth(c__4650__auto__,i__41259);
cljs.core.chunk_append(b__41260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_word,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__41259,search_word,c__4650__auto__,size__4651__auto__,b__41260,s__41258__$2,temp__5753__auto__){
return (function (p1__41255_SHARP_){
return clojure.string.includes_QMARK_(p1__41255_SHARP_,search_word);
});})(i__41259,search_word,c__4650__auto__,size__4651__auto__,b__41260,s__41258__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(index_card)))], null));

var G__41296 = (i__41259 + (1));
i__41259 = G__41296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41260),dcs$opendatascotsearch$app$match_against_index_card_$_iter__41257(cljs.core.chunk_rest(s__41258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41260),null);
}
} else {
var search_word = cljs.core.first(s__41258__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_word,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_word,s__41258__$2,temp__5753__auto__){
return (function (p1__41255_SHARP_){
return clojure.string.includes_QMARK_(p1__41255_SHARP_,search_word);
});})(search_word,s__41258__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(index_card)))], null),dcs$opendatascotsearch$app$match_against_index_card_$_iter__41257(cljs.core.rest(s__41258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(search_words);
})());
var count_of_search_words_with_subs_matches = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.vals(search_words__GT_matches)));
var count_of_search_words_with_exact_matches = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41261){
var vec__41262 = p__41261;
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41262,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41262,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41256_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__41256_SHARP_,search_word);
}),matches);
}),search_words__GT_matches)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index_card,new cljs.core.Keyword(null,"words","words",1924933001)),new cljs.core.Keyword(null,"metric-1","metric-1",-768853583),count_of_search_words_with_subs_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"metric-2","metric-2",-1964306201),count_of_search_words_with_exact_matches,new cljs.core.Keyword(null,"search-words->matches","search-words->matches",-1215625258),search_words__GT_matches], 0));
});
dcs.opendatascotsearch.app.match_against_index_cards = (function dcs$opendatascotsearch$app$match_against_index_cards(index_cards,search_words){
var iter__4652__auto__ = (function dcs$opendatascotsearch$app$match_against_index_cards_$_iter__41265(s__41266){
return (new cljs.core.LazySeq(null,(function (){
var s__41266__$1 = s__41266;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41266__$1);
if(temp__5753__auto__){
var s__41266__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41266__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41266__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41268 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41267 = (0);
while(true){
if((i__41267 < size__4651__auto__)){
var index_card = cljs.core._nth(c__4650__auto__,i__41267);
cljs.core.chunk_append(b__41268,dcs.opendatascotsearch.app.match_against_index_card(index_card,search_words));

var G__41297 = (i__41267 + (1));
i__41267 = G__41297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41268),dcs$opendatascotsearch$app$match_against_index_cards_$_iter__41265(cljs.core.chunk_rest(s__41266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41268),null);
}
} else {
var index_card = cljs.core.first(s__41266__$2);
return cljs.core.cons(dcs.opendatascotsearch.app.match_against_index_card(index_card,search_words),dcs$opendatascotsearch$app$match_against_index_cards_$_iter__41265(cljs.core.rest(s__41266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(index_cards);
});
if((typeof dcs !== 'undefined') && (typeof dcs.opendatascotsearch !== 'undefined') && (typeof dcs.opendatascotsearch.app !== 'undefined') && (typeof dcs.opendatascotsearch.app.search_words !== 'undefined')){
} else {
dcs.opendatascotsearch.app.search_words = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
dcs.opendatascotsearch.app.search_results = (function dcs$opendatascotsearch$app$search_results(){
var search_results = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"metric-1","metric-1",-768853583),new cljs.core.Keyword(null,"metric-2","metric-2",-1964306201),new cljs.core.Keyword(null,"modified","modified",-2134587826),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583)], 0)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41270_SHARP_){
return (new cljs.core.Keyword(null,"metric-1","metric-1",-768853583).cljs$core$IFn$_invoke$arity$1(p1__41270_SHARP_) > (0));
}),dcs.opendatascotsearch.app.match_against_index_cards(dcs.opendatascotsearch.data.index_cards,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41269_SHARP_){
return (cljs.core.count(p1__41269_SHARP_) >= (3));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dcs.opendatascotsearch.app.search_words),/\s/)))))));
var max_search_results_shown = (150);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var n = cljs.core.count(search_results);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),n," (partial) match",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?"es":null),".",(((n > max_search_results_shown))?[" Displaying the first ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_search_results_shown),"."].join(''):"")], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4652__auto__ = (function dcs$opendatascotsearch$app$search_results_$_iter__41271(s__41272){
return (new cljs.core.LazySeq(null,(function (){
var s__41272__$1 = s__41272;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41272__$1);
if(temp__5753__auto__){
var s__41272__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41272__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41272__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41274 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41273 = (0);
while(true){
if((i__41273 < size__4651__auto__)){
var index_card = cljs.core._nth(c__4650__auto__,i__41273);
cljs.core.chunk_append(b__41274,cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(index_card)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(index_card)], null),", ",new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(index_card),", ",new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(index_card),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var s = clojure.string.trim(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(index_card));
if((!(clojure.string.blank_QMARK_(s)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400.text-sm","span.text-gray-400.text-sm",1863034849),"Matching: "], null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2((function (){var iter__4652__auto__ = ((function (i__41273,index_card,c__4650__auto__,size__4651__auto__,b__41274,s__41272__$2,temp__5753__auto__,search_results,max_search_results_shown){
return (function dcs$opendatascotsearch$app$search_results_$_iter__41271_$_iter__41275(s__41276){
return (new cljs.core.LazySeq(null,((function (i__41273,index_card,c__4650__auto__,size__4651__auto__,b__41274,s__41272__$2,temp__5753__auto__,search_results,max_search_results_shown){
return (function (){
var s__41276__$1 = s__41276;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41276__$1);
if(temp__5753__auto____$1){
var s__41276__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41276__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__41276__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__41278 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__41277 = (0);
while(true){
if((i__41277 < size__4651__auto____$1)){
var vec__41279 = cljs.core._nth(c__4650__auto____$1,i__41277);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41279,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41279,(1),null);
cljs.core.chunk_append(b__41278,(function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})());

var G__41298 = (i__41277 + (1));
i__41277 = G__41298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41278),dcs$opendatascotsearch$app$search_results_$_iter__41271_$_iter__41275(cljs.core.chunk_rest(s__41276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41278),null);
}
} else {
var vec__41282 = cljs.core.first(s__41276__$2);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41282,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41282,(1),null);
return cljs.core.cons((function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})(),dcs$opendatascotsearch$app$search_results_$_iter__41271_$_iter__41275(cljs.core.rest(s__41276__$2)));
}
} else {
return null;
}
break;
}
});})(i__41273,index_card,c__4650__auto__,size__4651__auto__,b__41274,s__41272__$2,temp__5753__auto__,search_results,max_search_results_shown))
,null,null));
});})(i__41273,index_card,c__4650__auto__,size__4651__auto__,b__41274,s__41272__$2,temp__5753__auto__,search_results,max_search_results_shown))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"search-words->matches","search-words->matches",-1215625258).cljs$core$IFn$_invoke$arity$1(index_card));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index_card], null)));

var G__41299 = (i__41273 + (1));
i__41273 = G__41299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41274),dcs$opendatascotsearch$app$search_results_$_iter__41271(cljs.core.chunk_rest(s__41272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41274),null);
}
} else {
var index_card = cljs.core.first(s__41272__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(index_card)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(index_card)], null),", ",new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(index_card),", ",new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(index_card),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var s = clojure.string.trim(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(index_card));
if((!(clojure.string.blank_QMARK_(s)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400.text-sm","span.text-gray-400.text-sm",1863034849),"Matching: "], null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2((function (){var iter__4652__auto__ = ((function (index_card,s__41272__$2,temp__5753__auto__,search_results,max_search_results_shown){
return (function dcs$opendatascotsearch$app$search_results_$_iter__41271_$_iter__41285(s__41286){
return (new cljs.core.LazySeq(null,(function (){
var s__41286__$1 = s__41286;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41286__$1);
if(temp__5753__auto____$1){
var s__41286__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41286__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__41286__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__41288 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__41287 = (0);
while(true){
if((i__41287 < size__4651__auto__)){
var vec__41289 = cljs.core._nth(c__4650__auto__,i__41287);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(1),null);
cljs.core.chunk_append(b__41288,(function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})());

var G__41300 = (i__41287 + (1));
i__41287 = G__41300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41288),dcs$opendatascotsearch$app$search_results_$_iter__41271_$_iter__41285(cljs.core.chunk_rest(s__41286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41288),null);
}
} else {
var vec__41292 = cljs.core.first(s__41286__$2);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41292,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41292,(1),null);
return cljs.core.cons((function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})(),dcs$opendatascotsearch$app$search_results_$_iter__41271_$_iter__41285(cljs.core.rest(s__41286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(index_card,s__41272__$2,temp__5753__auto__,search_results,max_search_results_shown))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"search-words->matches","search-words->matches",-1215625258).cljs$core$IFn$_invoke$arity$1(index_card));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index_card], null)),dcs$opendatascotsearch$app$search_results_$_iter__41271(cljs.core.rest(s__41272__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_search_results_shown,search_results));
})()], null)], null);
});
dcs.opendatascotsearch.app.page = (function dcs$opendatascotsearch$app$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto","div.container.mx-auto",-907582330),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prose.prose-a:text-blue-600.prose-a:no-underline.hover:prose-a:underline.font-serif.antialiased.leading-snug","div.prose.prose-a:text-blue-600.prose-a:no-underline.hover:prose-a:underline.font-serif.antialiased.leading-snug",1316365855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"A demo of a simple alternative search over Open Data Scotland's dataset indexes"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://campuspress.stir.ac.uk/datacommonsscotland/2022/05/03/a-simple-alternative-search-over-open-data-scotlands-dataset-indexes/"], null),"Background and rationale"], null),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xl.text-indigo-700.font-bold","p.text-xl.text-indigo-700.font-bold",497642635),"Type words (of three or more letters)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search... (type words of three or more letters)",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),cljs.core.deref(dcs.opendatascotsearch.app.search_words),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-3 placeholder-blueGray-300 text-blueGray-500 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full",new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__41295_SHARP_){
return cljs.core.reset_BANG_(dcs.opendatascotsearch.app.search_words,p1__41295_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.opendatascotsearch.app.search_results], null)], null)], null);
});
dcs.opendatascotsearch.app.start = (function dcs$opendatascotsearch$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.opendatascotsearch.app.page], null),document.getElementById("app"));
});
dcs.opendatascotsearch.app.init = (function dcs$opendatascotsearch$app$init(){
return dcs.opendatascotsearch.app.start();
});
goog.exportSymbol('dcs.opendatascotsearch.app.init', dcs.opendatascotsearch.app.init);
dcs.opendatascotsearch.app.stop = (function dcs$opendatascotsearch$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.opendatascotsearch.app.js.map
