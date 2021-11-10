goog.provide('testdouble.cljs.csv');
testdouble.cljs.csv.escape_quotes = (function testdouble$cljs$csv$escape_quotes(s){
return clojure.string.replace(s,"\"","\"\"");
});
testdouble.cljs.csv.wrap_in_quotes = (function testdouble$cljs$csv$wrap_in_quotes(s){
return ["\"",testdouble.cljs.csv.escape_quotes(s),"\""].join('');
});
testdouble.cljs.csv.separate = (function testdouble$cljs$csv$separate(data,separator,quote_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(separator,(function (){var G__29338 = data;
var G__29338__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__29338)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.wrap_in_quotes,G__29338__$1);
} else {
return G__29338__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(newline,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29339_SHARP_){
return testdouble.cljs.csv.separate(p1__29339_SHARP_,separator,quote_QMARK_);
}),data));
});
testdouble.cljs.csv.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
testdouble.cljs.csv.newline_error_message = [":newline must be one of [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.keys(testdouble.cljs.csv.newlines)),"]"].join('');
/**
 * Writes data to String in CSV-format.
 *   Accepts the following options:
 *   :separator - field separator
 *             (default ,)
 *   :newline   - line separator
 *             (accepts :lf or :cr+lf)
 *             (default :lf)
 *   :quote?    - wrap in quotes
 *             (default false)
 */
testdouble.cljs.csv.write_csv = (function testdouble$cljs$csv$write_csv(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29907 = arguments.length;
var i__4772__auto___29908 = (0);
while(true){
if((i__4772__auto___29908 < len__4771__auto___29907)){
args__4777__auto__.push((arguments[i__4772__auto___29908]));

var G__29910 = (i__4772__auto___29908 + (1));
i__4772__auto___29908 = G__29910;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__29364 = options;
var map__29364__$1 = cljs.core.__destructure_map(map__29364);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29364__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29364__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29364__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__5733__auto__)){
var newline_char = temp__5733__auto__;
return testdouble.cljs.csv.write_data(data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
}));

(testdouble.cljs.csv.write_csv.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq29362){
var G__29363 = cljs.core.first(seq29362);
var seq29362__$1 = cljs.core.next(seq29362);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29363,seq29362__$1);
}));

/**
 * Move to the next character.
 */
testdouble.cljs.csv._advance = (function testdouble$cljs$csv$_advance(p__29413){
var map__29420 = p__29413;
var map__29420__$1 = cljs.core.__destructure_map(map__29420);
var state = map__29420__$1;
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.first(chars),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chars","chars",-1094630317),cljs.core.rest(chars)], 0));
});
/**
 * Append the current character onto the field. Advances.
 */
testdouble.cljs.csv._consume = (function testdouble$cljs$csv$_consume(p__29478){
var map__29479 = p__29478;
var map__29479__$1 = cljs.core.__destructure_map(map__29479);
var state = map__29479__$1;
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29479__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return testdouble.cljs.csv._advance(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311),cljs.core.str,char$));
});
/**
 * Finalize the field, adding it to the current row. Does not advance.
 * 
 *   Following convention, a field that hasn't had any chars appended appears as an
 *   empty string, not nil.
 */
testdouble.cljs.csv._end_field = (function testdouble$cljs$csv$_end_field(p__29497){
var map__29498 = p__29497;
var map__29498__$1 = cljs.core.__destructure_map(map__29498);
var state = map__29498__$1;
var field_buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29498__$1,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29498__$1,new cljs.core.Keyword(null,"row","row",-570139521));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(row,cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_buffer))], 0));
});
/**
 * Finalize the last field in the row. Then append the row to the collection of
 *   all rows, and start a new row. Does not advance.
 */
testdouble.cljs.csv._end_row = (function testdouble$cljs$csv$_end_row(state){
var map__29505 = testdouble.cljs.csv._end_field(state);
var map__29505__$1 = cljs.core.__destructure_map(map__29505);
var state__$1 = map__29505__$1;
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29505__$1,new cljs.core.Keyword(null,"row","row",-570139521));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.conj,row),new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.PersistentVector.EMPTY);
});
/**
 * Prepare to process the string `data`. Advances to the first character.
 */
testdouble.cljs.csv._init_read = (function testdouble$cljs$csv$_init_read(data){
return testdouble.cljs.csv._advance(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chars","chars",-1094630317),cljs.core.seq(data),new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311),null,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY], null));
});
/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4777__auto__ = [];
var len__4771__auto___30001 = arguments.length;
var i__4772__auto___30002 = (0);
while(true){
if((i__4772__auto___30002 < len__4771__auto___30001)){
args__4777__auto__.push((arguments[i__4772__auto___30002]));

var G__30021 = (i__4772__auto___30002 + (1));
i__4772__auto___30002 = G__30021;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__29605 = options;
var map__29605__$1 = cljs.core.__destructure_map(map__29605);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29605__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29605__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var separator__$1 = cljs.core.first(separator);
if(cljs.core.contains_QMARK_(testdouble.cljs.csv.newlines,newline)){
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}

var G__29648 = testdouble.cljs.csv._init_read(data);
var map__29649 = G__29648;
var map__29649__$1 = cljs.core.__destructure_map(map__29649);
var state = map__29649__$1;
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var in_quoted_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594));
var field_buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29649__$1,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311));
var G__29648__$1 = G__29648;
while(true){
var map__29811 = G__29648__$1;
var map__29811__$1 = cljs.core.__destructure_map(map__29811);
var state__$1 = map__29811__$1;
var char$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29811__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var chars__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29811__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var in_quoted_field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29811__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594));
var field_buffer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29811__$1,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311));
if(cljs.core.not(char$__$1)){
return new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(testdouble.cljs.csv._end_row(state__$1));
} else {
var G__30059 = (cljs.core.truth_(in_quoted_field__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\""))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(chars__$1),"\""))?testdouble.cljs.csv._advance(testdouble.cljs.csv._consume(state__$1)):testdouble.cljs.csv._advance(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594)))):testdouble.cljs.csv._consume(state__$1)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\"")) && (cljs.core.not(field_buffer__$1))))?testdouble.cljs.csv._advance(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594),true)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,separator__$1))?testdouble.cljs.csv._advance(testdouble.cljs.csv._end_field(state__$1)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\r")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(chars__$1),"\n"))))?testdouble.cljs.csv._advance(testdouble.cljs.csv._advance(testdouble.cljs.csv._end_row(state__$1))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\n")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newline,new cljs.core.Keyword(null,"lf","lf",1923784290)))))?testdouble.cljs.csv._advance(testdouble.cljs.csv._end_row(state__$1)):testdouble.cljs.csv._consume(state__$1)
)))));
G__29648__$1 = G__30059;
continue;
}
break;
}
}));

(testdouble.cljs.csv.read_csv.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq29553){
var G__29554 = cljs.core.first(seq29553);
var seq29553__$1 = cljs.core.next(seq29553);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29554,seq29553__$1);
}));


//# sourceMappingURL=testdouble.cljs.csv.js.map
