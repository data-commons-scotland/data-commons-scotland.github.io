goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__37331 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__37331.cljs$core$IFn$_invoke$arity$1 ? fexpr__37331.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__37331.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37341){
var vec__37348 = p__37341;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37348,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__37351 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__37351)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__37351)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__37351)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__37351)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__37351)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__37351)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37351)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37366){
var map__37368 = p__37366;
var map__37368__$1 = cljs.core.__destructure_map(map__37368);
var request = map__37368__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37368__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37368__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37368__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37383 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__37383,default_headers);

cljs_http.core.apply_response_type_BANG_(G__37383,response_type);

G__37383.setTimeoutInterval(timeout);

G__37383.setWithCredentials(send_credentials);

return G__37383;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37402){
var map__37403 = p__37402;
var map__37403__$1 = cljs.core.__destructure_map(map__37403);
var request = map__37403__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4160__auto__ = request_method;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__37455 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__37455) : cljs_http.core.error_kw.call(null,G__37455));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_37634 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__37484_37635 = xhr;
G__37484_37635.setProgressEventsEnabled(true);

G__37484_37635.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_37634,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__37484_37635.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_37634,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__29041__auto___37636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_37534){
var state_val_37535 = (state_37534[(1)]);
if((state_val_37535 === (1))){
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37534__$1,(2),cancel);
} else {
if((state_val_37535 === (2))){
var inst_37523 = (state_37534[(2)]);
var inst_37524 = xhr.isComplete();
var inst_37525 = cljs.core.not(inst_37524);
var state_37534__$1 = (function (){var statearr_37562 = state_37534;
(statearr_37562[(7)] = inst_37523);

return statearr_37562;
})();
if(inst_37525){
var statearr_37564_37638 = state_37534__$1;
(statearr_37564_37638[(1)] = (3));

} else {
var statearr_37565_37639 = state_37534__$1;
(statearr_37565_37639[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (3))){
var inst_37528 = xhr.abort();
var state_37534__$1 = state_37534;
var statearr_37567_37646 = state_37534__$1;
(statearr_37567_37646[(2)] = inst_37528);

(statearr_37567_37646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (4))){
var state_37534__$1 = state_37534;
var statearr_37568_37647 = state_37534__$1;
(statearr_37568_37647[(2)] = null);

(statearr_37568_37647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (5))){
var inst_37532 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37534__$1,inst_37532);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__28972__auto__ = null;
var cljs_http$core$xhr_$_state_machine__28972__auto____0 = (function (){
var statearr_37570 = [null,null,null,null,null,null,null,null];
(statearr_37570[(0)] = cljs_http$core$xhr_$_state_machine__28972__auto__);

(statearr_37570[(1)] = (1));

return statearr_37570;
});
var cljs_http$core$xhr_$_state_machine__28972__auto____1 = (function (state_37534){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_37534);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e37575){var ex__28975__auto__ = e37575;
var statearr_37576_37657 = state_37534;
(statearr_37576_37657[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_37534[(4)]))){
var statearr_37577_37658 = state_37534;
(statearr_37577_37658[(1)] = cljs.core.first((state_37534[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37659 = state_37534;
state_37534 = G__37659;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__28972__auto__ = function(state_37534){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__28972__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__28972__auto____1.call(this,state_37534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__28972__auto____0;
cljs_http$core$xhr_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__28972__auto____1;
return cljs_http$core$xhr_$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_37578 = f__29042__auto__();
(statearr_37578[(6)] = c__29041__auto___37636);

return statearr_37578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37582){
var map__37583 = p__37582;
var map__37583__$1 = cljs.core.__destructure_map(map__37583);
var request = map__37583__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37583__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_37665 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_37665], null));

if(cljs.core.truth_(cancel)){
var c__29041__auto___37672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29042__auto__ = (function (){var switch__28971__auto__ = (function (state_37603){
var state_val_37604 = (state_37603[(1)]);
if((state_val_37604 === (1))){
var state_37603__$1 = state_37603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37603__$1,(2),cancel);
} else {
if((state_val_37604 === (2))){
var inst_37600 = (state_37603[(2)]);
var inst_37601 = jsonp.cancel(req_37665);
var state_37603__$1 = (function (){var statearr_37612 = state_37603;
(statearr_37612[(7)] = inst_37600);

return statearr_37612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37603__$1,inst_37601);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__28972__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__28972__auto____0 = (function (){
var statearr_37613 = [null,null,null,null,null,null,null,null];
(statearr_37613[(0)] = cljs_http$core$jsonp_$_state_machine__28972__auto__);

(statearr_37613[(1)] = (1));

return statearr_37613;
});
var cljs_http$core$jsonp_$_state_machine__28972__auto____1 = (function (state_37603){
while(true){
var ret_value__28973__auto__ = (function (){try{while(true){
var result__28974__auto__ = switch__28971__auto__(state_37603);
if(cljs.core.keyword_identical_QMARK_(result__28974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28974__auto__;
}
break;
}
}catch (e37614){var ex__28975__auto__ = e37614;
var statearr_37615_37673 = state_37603;
(statearr_37615_37673[(2)] = ex__28975__auto__);


if(cljs.core.seq((state_37603[(4)]))){
var statearr_37616_37674 = state_37603;
(statearr_37616_37674[(1)] = cljs.core.first((state_37603[(4)])));

} else {
throw ex__28975__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37680 = state_37603;
state_37603 = G__37680;
continue;
} else {
return ret_value__28973__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__28972__auto__ = function(state_37603){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__28972__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__28972__auto____1.call(this,state_37603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__28972__auto____0;
cljs_http$core$jsonp_$_state_machine__28972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__28972__auto____1;
return cljs_http$core$jsonp_$_state_machine__28972__auto__;
})()
})();
var state__29043__auto__ = (function (){var statearr_37617 = f__29042__auto__();
(statearr_37617[(6)] = c__29041__auto___37672);

return statearr_37617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29043__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37620){
var map__37621 = p__37620;
var map__37621__$1 = cljs.core.__destructure_map(map__37621);
var request = map__37621__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
