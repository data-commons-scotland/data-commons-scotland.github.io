goog.provide('dcs.prototype_6.util');
/**
 * Milliseconds since epoch
 */
dcs.prototype_6.util.now = (function dcs$prototype_6$util$now(){
return Date.now();
});
dcs.prototype_6.util.secs_to_now = (function dcs$prototype_6$util$secs_to_now(start_time){
return ((dcs.prototype_6.util.now() - start_time) / (1000));
});
dcs.prototype_6.util.date_str = (function dcs$prototype_6$util$date_str(year,quarter){
var q_map = new cljs.core.PersistentArrayMap(null, 4, [(1),"31 Mar",(2),"30 Jun",(3),"31 Aug",(4),"31 Dec"], null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((q_map.cljs$core$IFn$_invoke$arity$1 ? q_map.cljs$core$IFn$_invoke$arity$1(quarter) : q_map.call(null,quarter)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
dcs.prototype_6.util.vega_embed_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),false], null);
dcs.prototype_6.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.0-beta/";
dcs.prototype_6.util.easier_repo_data = [dcs.prototype_6.util.easier_repo,"data/"].join('');
dcs.prototype_6.util.easier_repo_metadata = [dcs.prototype_6.util.easier_repo,"metadata/"].join('');

//# sourceMappingURL=dcs.prototype_6.util.js.map
