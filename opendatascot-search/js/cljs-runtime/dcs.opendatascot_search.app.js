goog.provide('dcs.opendatascot_search.app');
dcs.opendatascot_search.app.match_against_index_card = (function dcs$opendatascot_search$app$match_against_index_card(index_card,search_words){
var search_words__GT_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function dcs$opendatascot_search$app$match_against_index_card_$_iter__54387(s__54388){
return (new cljs.core.LazySeq(null,(function (){
var s__54388__$1 = s__54388;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54388__$1);
if(temp__5753__auto__){
var s__54388__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54388__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54388__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54390 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54389 = (0);
while(true){
if((i__54389 < size__4651__auto__)){
var search_word = cljs.core._nth(c__4650__auto__,i__54389);
cljs.core.chunk_append(b__54390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_word,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__54389,search_word,c__4650__auto__,size__4651__auto__,b__54390,s__54388__$2,temp__5753__auto__){
return (function (p1__54385_SHARP_){
return clojure.string.includes_QMARK_(p1__54385_SHARP_,search_word);
});})(i__54389,search_word,c__4650__auto__,size__4651__auto__,b__54390,s__54388__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(index_card)))], null));

var G__54426 = (i__54389 + (1));
i__54389 = G__54426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54390),dcs$opendatascot_search$app$match_against_index_card_$_iter__54387(cljs.core.chunk_rest(s__54388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54390),null);
}
} else {
var search_word = cljs.core.first(s__54388__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_word,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_word,s__54388__$2,temp__5753__auto__){
return (function (p1__54385_SHARP_){
return clojure.string.includes_QMARK_(p1__54385_SHARP_,search_word);
});})(search_word,s__54388__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(index_card)))], null),dcs$opendatascot_search$app$match_against_index_card_$_iter__54387(cljs.core.rest(s__54388__$2)));
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
var count_of_search_words_with_exact_matches = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54391){
var vec__54392 = p__54391;
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54392,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54392,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54386_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54386_SHARP_,search_word);
}),matches);
}),search_words__GT_matches)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index_card,new cljs.core.Keyword(null,"words","words",1924933001)),new cljs.core.Keyword(null,"metric-1","metric-1",-768853583),count_of_search_words_with_subs_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"metric-2","metric-2",-1964306201),count_of_search_words_with_exact_matches,new cljs.core.Keyword(null,"search-words->matches","search-words->matches",-1215625258),search_words__GT_matches], 0));
});
dcs.opendatascot_search.app.match_against_index_cards = (function dcs$opendatascot_search$app$match_against_index_cards(index_cards,search_words){
var iter__4652__auto__ = (function dcs$opendatascot_search$app$match_against_index_cards_$_iter__54395(s__54396){
return (new cljs.core.LazySeq(null,(function (){
var s__54396__$1 = s__54396;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54396__$1);
if(temp__5753__auto__){
var s__54396__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54396__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54396__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54398 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54397 = (0);
while(true){
if((i__54397 < size__4651__auto__)){
var index_card = cljs.core._nth(c__4650__auto__,i__54397);
cljs.core.chunk_append(b__54398,dcs.opendatascot_search.app.match_against_index_card(index_card,search_words));

var G__54427 = (i__54397 + (1));
i__54397 = G__54427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54398),dcs$opendatascot_search$app$match_against_index_cards_$_iter__54395(cljs.core.chunk_rest(s__54396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54398),null);
}
} else {
var index_card = cljs.core.first(s__54396__$2);
return cljs.core.cons(dcs.opendatascot_search.app.match_against_index_card(index_card,search_words),dcs$opendatascot_search$app$match_against_index_cards_$_iter__54395(cljs.core.rest(s__54396__$2)));
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
if((typeof dcs !== 'undefined') && (typeof dcs.opendatascot_search !== 'undefined') && (typeof dcs.opendatascot_search.app !== 'undefined') && (typeof dcs.opendatascot_search.app.search_words !== 'undefined')){
} else {
dcs.opendatascot_search.app.search_words = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
dcs.opendatascot_search.app.search_results = (function dcs$opendatascot_search$app$search_results(){
var search_results = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"metric-1","metric-1",-768853583),new cljs.core.Keyword(null,"metric-2","metric-2",-1964306201),new cljs.core.Keyword(null,"modified","modified",-2134587826),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583)], 0)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54400_SHARP_){
return (new cljs.core.Keyword(null,"metric-1","metric-1",-768853583).cljs$core$IFn$_invoke$arity$1(p1__54400_SHARP_) > (0));
}),dcs.opendatascot_search.app.match_against_index_cards(dcs.opendatascot_search.data.index_cards,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54399_SHARP_){
return (cljs.core.count(p1__54399_SHARP_) >= (3));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dcs.opendatascot_search.app.search_words),/\s/)))))));
var max_search_results_shown = (50);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var n = cljs.core.count(search_results);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),n," (partial) match",(((n > (1)))?"es":null),".",(((n > max_search_results_shown))?[" Displaying the first ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_search_results_shown),"."].join(''):"")], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4652__auto__ = (function dcs$opendatascot_search$app$search_results_$_iter__54401(s__54402){
return (new cljs.core.LazySeq(null,(function (){
var s__54402__$1 = s__54402;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54402__$1);
if(temp__5753__auto__){
var s__54402__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54402__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54402__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54404 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54403 = (0);
while(true){
if((i__54403 < size__4651__auto__)){
var index_card = cljs.core._nth(c__4650__auto__,i__54403);
cljs.core.chunk_append(b__54404,cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(index_card)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(index_card)], null),", ",new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(index_card),", ",new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(index_card),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var s = clojure.string.trim(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(index_card));
if((!(clojure.string.blank_QMARK_(s)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400.text-sm","span.text-gray-400.text-sm",1863034849),"Matching: "], null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2((function (){var iter__4652__auto__ = ((function (i__54403,index_card,c__4650__auto__,size__4651__auto__,b__54404,s__54402__$2,temp__5753__auto__,search_results,max_search_results_shown){
return (function dcs$opendatascot_search$app$search_results_$_iter__54401_$_iter__54405(s__54406){
return (new cljs.core.LazySeq(null,((function (i__54403,index_card,c__4650__auto__,size__4651__auto__,b__54404,s__54402__$2,temp__5753__auto__,search_results,max_search_results_shown){
return (function (){
var s__54406__$1 = s__54406;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54406__$1);
if(temp__5753__auto____$1){
var s__54406__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54406__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__54406__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__54408 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__54407 = (0);
while(true){
if((i__54407 < size__4651__auto____$1)){
var vec__54409 = cljs.core._nth(c__4650__auto____$1,i__54407);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54409,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54409,(1),null);
cljs.core.chunk_append(b__54408,(function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})());

var G__54428 = (i__54407 + (1));
i__54407 = G__54428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54408),dcs$opendatascot_search$app$search_results_$_iter__54401_$_iter__54405(cljs.core.chunk_rest(s__54406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54408),null);
}
} else {
var vec__54412 = cljs.core.first(s__54406__$2);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54412,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54412,(1),null);
return cljs.core.cons((function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})(),dcs$opendatascot_search$app$search_results_$_iter__54401_$_iter__54405(cljs.core.rest(s__54406__$2)));
}
} else {
return null;
}
break;
}
});})(i__54403,index_card,c__4650__auto__,size__4651__auto__,b__54404,s__54402__$2,temp__5753__auto__,search_results,max_search_results_shown))
,null,null));
});})(i__54403,index_card,c__4650__auto__,size__4651__auto__,b__54404,s__54402__$2,temp__5753__auto__,search_results,max_search_results_shown))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"search-words->matches","search-words->matches",-1215625258).cljs$core$IFn$_invoke$arity$1(index_card));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index_card], null)));

var G__54429 = (i__54403 + (1));
i__54403 = G__54429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54404),dcs$opendatascot_search$app$search_results_$_iter__54401(cljs.core.chunk_rest(s__54402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54404),null);
}
} else {
var index_card = cljs.core.first(s__54402__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(index_card)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(index_card)], null),", ",new cljs.core.Keyword(null,"modified","modified",-2134587826).cljs$core$IFn$_invoke$arity$1(index_card),", ",new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(index_card),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var s = clojure.string.trim(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(index_card));
if((!(clojure.string.blank_QMARK_(s)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400.text-sm","span.text-gray-400.text-sm",1863034849),"Matching: "], null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2((function (){var iter__4652__auto__ = ((function (index_card,s__54402__$2,temp__5753__auto__,search_results,max_search_results_shown){
return (function dcs$opendatascot_search$app$search_results_$_iter__54401_$_iter__54415(s__54416){
return (new cljs.core.LazySeq(null,(function (){
var s__54416__$1 = s__54416;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54416__$1);
if(temp__5753__auto____$1){
var s__54416__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54416__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54416__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54418 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54417 = (0);
while(true){
if((i__54417 < size__4651__auto__)){
var vec__54419 = cljs.core._nth(c__4650__auto__,i__54417);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419,(1),null);
cljs.core.chunk_append(b__54418,(function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})());

var G__54430 = (i__54417 + (1));
i__54417 = G__54430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54418),dcs$opendatascot_search$app$search_results_$_iter__54401_$_iter__54415(cljs.core.chunk_rest(s__54416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54418),null);
}
} else {
var vec__54422 = cljs.core.first(s__54416__$2);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54422,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54422,(1),null);
return cljs.core.cons((function (){var temp__5753__auto____$2 = cljs.core.first(matches);
if(cljs.core.truth_(temp__5753__auto____$2)){
var match = temp__5753__auto____$2;
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(match,search_word);
var ix2 = (ix1 + cljs.core.count(search_word));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),search_word], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,ix2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),search_word], null));
} else {
return null;
}
})(),dcs$opendatascot_search$app$search_results_$_iter__54401_$_iter__54415(cljs.core.rest(s__54416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(index_card,s__54402__$2,temp__5753__auto__,search_results,max_search_results_shown))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"search-words->matches","search-words->matches",-1215625258).cljs$core$IFn$_invoke$arity$1(index_card));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index_card], null)),dcs$opendatascot_search$app$search_results_$_iter__54401(cljs.core.rest(s__54402__$2)));
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
dcs.opendatascot_search.app.page = (function dcs$opendatascot_search$app$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Blah blah blah...."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search... (type words of three or more letters)",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),cljs.core.deref(dcs.opendatascot_search.app.search_words),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-3 placeholder-blueGray-300 text-blueGray-500 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full",new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__54425_SHARP_){
return cljs.core.reset_BANG_(dcs.opendatascot_search.app.search_words,p1__54425_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.opendatascot_search.app.search_results], null)], null)], null);
});
dcs.opendatascot_search.app.start = (function dcs$opendatascot_search$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.opendatascot_search.app.page], null),document.getElementById("app"));
});
dcs.opendatascot_search.app.init = (function dcs$opendatascot_search$app$init(){
return dcs.opendatascot_search.app.start();
});
goog.exportSymbol('dcs.opendatascot_search.app.init', dcs.opendatascot_search.app.init);
dcs.opendatascot_search.app.stop = (function dcs$opendatascot_search$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.opendatascot_search.app.js.map
