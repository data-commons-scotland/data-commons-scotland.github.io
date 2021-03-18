goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__26277 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__26277.cljs$core$IFn$_invoke$arity$1 ? fexpr__26277.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__26277.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26280){
var vec__26281 = p__26280;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__26285 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__26285)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__26285)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__26285)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__26285)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__26285)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26285)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26285)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__26291){
var map__26292 = p__26291;
var map__26292__$1 = (((((!((map__26292 == null))))?(((((map__26292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26292):map__26292);
var request = map__26292__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__26294 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__26294,default_headers);

cljs_http.core.apply_response_type_BANG_(G__26294,response_type);

G__26294.setTimeoutInterval(timeout);

G__26294.setWithCredentials(send_credentials);

return G__26294;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__26295){
var map__26296 = p__26295;
var map__26296__$1 = (((((!((map__26296 == null))))?(((((map__26296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26296):map__26296);
var request = map__26296__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26296__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__26298 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__26298) : cljs_http.core.error_kw.call(null,G__26298));
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
var c__25757__auto___26351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_26309){
var state_val_26310 = (state_26309[(1)]);
if((state_val_26310 === (1))){
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26309__$1,(2),cancel);
} else {
if((state_val_26310 === (2))){
var inst_26300 = (state_26309[(2)]);
var inst_26301 = xhr.isComplete();
var inst_26302 = cljs.core.not(inst_26301);
var state_26309__$1 = (function (){var statearr_26311 = state_26309;
(statearr_26311[(7)] = inst_26300);

return statearr_26311;
})();
if(inst_26302){
var statearr_26312_26353 = state_26309__$1;
(statearr_26312_26353[(1)] = (3));

} else {
var statearr_26313_26354 = state_26309__$1;
(statearr_26313_26354[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (3))){
var inst_26304 = xhr.abort();
var state_26309__$1 = state_26309;
var statearr_26314_26355 = state_26309__$1;
(statearr_26314_26355[(2)] = inst_26304);

(statearr_26314_26355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (4))){
var state_26309__$1 = state_26309;
var statearr_26315_26356 = state_26309__$1;
(statearr_26315_26356[(2)] = null);

(statearr_26315_26356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (5))){
var inst_26307 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26309__$1,inst_26307);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__25735__auto__ = null;
var cljs_http$core$xhr_$_state_machine__25735__auto____0 = (function (){
var statearr_26316 = [null,null,null,null,null,null,null,null];
(statearr_26316[(0)] = cljs_http$core$xhr_$_state_machine__25735__auto__);

(statearr_26316[(1)] = (1));

return statearr_26316;
});
var cljs_http$core$xhr_$_state_machine__25735__auto____1 = (function (state_26309){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_26309);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e26317){var ex__25738__auto__ = e26317;
var statearr_26318_26359 = state_26309;
(statearr_26318_26359[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_26309[(4)]))){
var statearr_26319_26360 = state_26309;
(statearr_26319_26360[(1)] = cljs.core.first((state_26309[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26361 = state_26309;
state_26309 = G__26361;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__25735__auto__ = function(state_26309){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__25735__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__25735__auto____1.call(this,state_26309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__25735__auto____0;
cljs_http$core$xhr_$_state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__25735__auto____1;
return cljs_http$core$xhr_$_state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_26320 = f__25758__auto__();
(statearr_26320[(6)] = c__25757__auto___26351);

return statearr_26320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__26321){
var map__26322 = p__26321;
var map__26322__$1 = (((((!((map__26322 == null))))?(((((map__26322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26322):map__26322);
var request = map__26322__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26322__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26322__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26322__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26322__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_26367 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_26367], null));

if(cljs.core.truth_(cancel)){
var c__25757__auto___26368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25758__auto__ = (function (){var switch__25734__auto__ = (function (state_26328){
var state_val_26329 = (state_26328[(1)]);
if((state_val_26329 === (1))){
var state_26328__$1 = state_26328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26328__$1,(2),cancel);
} else {
if((state_val_26329 === (2))){
var inst_26325 = (state_26328[(2)]);
var inst_26326 = jsonp.cancel(req_26367);
var state_26328__$1 = (function (){var statearr_26330 = state_26328;
(statearr_26330[(7)] = inst_26325);

return statearr_26330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26328__$1,inst_26326);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__25735__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__25735__auto____0 = (function (){
var statearr_26331 = [null,null,null,null,null,null,null,null];
(statearr_26331[(0)] = cljs_http$core$jsonp_$_state_machine__25735__auto__);

(statearr_26331[(1)] = (1));

return statearr_26331;
});
var cljs_http$core$jsonp_$_state_machine__25735__auto____1 = (function (state_26328){
while(true){
var ret_value__25736__auto__ = (function (){try{while(true){
var result__25737__auto__ = switch__25734__auto__(state_26328);
if(cljs.core.keyword_identical_QMARK_(result__25737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25737__auto__;
}
break;
}
}catch (e26332){var ex__25738__auto__ = e26332;
var statearr_26333_26375 = state_26328;
(statearr_26333_26375[(2)] = ex__25738__auto__);


if(cljs.core.seq((state_26328[(4)]))){
var statearr_26334_26376 = state_26328;
(statearr_26334_26376[(1)] = cljs.core.first((state_26328[(4)])));

} else {
throw ex__25738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26377 = state_26328;
state_26328 = G__26377;
continue;
} else {
return ret_value__25736__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__25735__auto__ = function(state_26328){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__25735__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__25735__auto____1.call(this,state_26328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__25735__auto____0;
cljs_http$core$jsonp_$_state_machine__25735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__25735__auto____1;
return cljs_http$core$jsonp_$_state_machine__25735__auto__;
})()
})();
var state__25759__auto__ = (function (){var statearr_26335 = f__25758__auto__();
(statearr_26335[(6)] = c__25757__auto___26368);

return statearr_26335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25759__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__26336){
var map__26337 = p__26336;
var map__26337__$1 = (((((!((map__26337 == null))))?(((((map__26337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26337):map__26337);
var request = map__26337__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26337__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
