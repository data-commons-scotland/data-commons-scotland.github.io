goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__37365 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__37365.cljs$core$IFn$_invoke$arity$1 ? fexpr__37365.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__37365.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37366){
var vec__37367 = p__37366;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__37370 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__37370)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__37370)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__37370)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__37370)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__37370)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__37370)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37370)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37371){
var map__37373 = p__37371;
var map__37373__$1 = cljs.core.__destructure_map(map__37373);
var request = map__37373__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37373__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37373__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37373__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37374 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__37374,default_headers);

cljs_http.core.apply_response_type_BANG_(G__37374,response_type);

G__37374.setTimeoutInterval(timeout);

G__37374.setWithCredentials(send_credentials);

return G__37374;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37378){
var map__37379 = p__37378;
var map__37379__$1 = cljs.core.__destructure_map(map__37379);
var request = map__37379__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__37385 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__37385) : cljs_http.core.error_kw.call(null,G__37385));
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

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__30267__auto___37424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_37396){
var state_val_37397 = (state_37396[(1)]);
if((state_val_37397 === (1))){
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37396__$1,(2),cancel);
} else {
if((state_val_37397 === (2))){
var inst_37387 = (state_37396[(2)]);
var inst_37388 = xhr.isComplete();
var inst_37389 = cljs.core.not(inst_37388);
var state_37396__$1 = (function (){var statearr_37398 = state_37396;
(statearr_37398[(7)] = inst_37387);

return statearr_37398;
})();
if(inst_37389){
var statearr_37399_37425 = state_37396__$1;
(statearr_37399_37425[(1)] = (3));

} else {
var statearr_37400_37426 = state_37396__$1;
(statearr_37400_37426[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (3))){
var inst_37391 = xhr.abort();
var state_37396__$1 = state_37396;
var statearr_37401_37427 = state_37396__$1;
(statearr_37401_37427[(2)] = inst_37391);

(statearr_37401_37427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (4))){
var state_37396__$1 = state_37396;
var statearr_37402_37428 = state_37396__$1;
(statearr_37402_37428[(2)] = null);

(statearr_37402_37428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (5))){
var inst_37394 = (state_37396[(2)]);
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37396__$1,inst_37394);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__30236__auto__ = null;
var cljs_http$core$xhr_$_state_machine__30236__auto____0 = (function (){
var statearr_37403 = [null,null,null,null,null,null,null,null];
(statearr_37403[(0)] = cljs_http$core$xhr_$_state_machine__30236__auto__);

(statearr_37403[(1)] = (1));

return statearr_37403;
});
var cljs_http$core$xhr_$_state_machine__30236__auto____1 = (function (state_37396){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_37396);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e37404){var ex__30239__auto__ = e37404;
var statearr_37405_37429 = state_37396;
(statearr_37405_37429[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_37396[(4)]))){
var statearr_37406_37430 = state_37396;
(statearr_37406_37430[(1)] = cljs.core.first((state_37396[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37431 = state_37396;
state_37396 = G__37431;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__30236__auto__ = function(state_37396){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__30236__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__30236__auto____1.call(this,state_37396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__30236__auto____0;
cljs_http$core$xhr_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__30236__auto____1;
return cljs_http$core$xhr_$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_37407 = f__30268__auto__();
(statearr_37407[(6)] = c__30267__auto___37424);

return statearr_37407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37408){
var map__37409 = p__37408;
var map__37409__$1 = cljs.core.__destructure_map(map__37409);
var request = map__37409__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37409__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_37432 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_37432], null));

if(cljs.core.truth_(cancel)){
var c__30267__auto___37433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30268__auto__ = (function (){var switch__30235__auto__ = (function (state_37414){
var state_val_37415 = (state_37414[(1)]);
if((state_val_37415 === (1))){
var state_37414__$1 = state_37414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37414__$1,(2),cancel);
} else {
if((state_val_37415 === (2))){
var inst_37411 = (state_37414[(2)]);
var inst_37412 = jsonp.cancel(req_37432);
var state_37414__$1 = (function (){var statearr_37416 = state_37414;
(statearr_37416[(7)] = inst_37411);

return statearr_37416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37414__$1,inst_37412);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__30236__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__30236__auto____0 = (function (){
var statearr_37417 = [null,null,null,null,null,null,null,null];
(statearr_37417[(0)] = cljs_http$core$jsonp_$_state_machine__30236__auto__);

(statearr_37417[(1)] = (1));

return statearr_37417;
});
var cljs_http$core$jsonp_$_state_machine__30236__auto____1 = (function (state_37414){
while(true){
var ret_value__30237__auto__ = (function (){try{while(true){
var result__30238__auto__ = switch__30235__auto__(state_37414);
if(cljs.core.keyword_identical_QMARK_(result__30238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30238__auto__;
}
break;
}
}catch (e37418){var ex__30239__auto__ = e37418;
var statearr_37419_37434 = state_37414;
(statearr_37419_37434[(2)] = ex__30239__auto__);


if(cljs.core.seq((state_37414[(4)]))){
var statearr_37420_37435 = state_37414;
(statearr_37420_37435[(1)] = cljs.core.first((state_37414[(4)])));

} else {
throw ex__30239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37436 = state_37414;
state_37414 = G__37436;
continue;
} else {
return ret_value__30237__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__30236__auto__ = function(state_37414){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__30236__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__30236__auto____1.call(this,state_37414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__30236__auto____0;
cljs_http$core$jsonp_$_state_machine__30236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__30236__auto____1;
return cljs_http$core$jsonp_$_state_machine__30236__auto__;
})()
})();
var state__30269__auto__ = (function (){var statearr_37421 = f__30268__auto__();
(statearr_37421[(6)] = c__30267__auto___37433);

return statearr_37421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30269__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37422){
var map__37423 = p__37422;
var map__37423__$1 = cljs.core.__destructure_map(map__37423);
var request = map__37423__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
