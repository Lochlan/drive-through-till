define(['swig'], function (swig) {	return (function (data) {		return swig.run(function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<td\n    class=\"\n        ";
if ((((typeof _ctx.editingThis !== "undefined" && _ctx.editingThis !== null) ? ((typeof _ctx.editingThis !== "undefined" && _ctx.editingThis !== null) ? _ctx.editingThis : "") : ((typeof editingThis !== "undefined" && editingThis !== null) ? editingThis : "")) !== null ? ((typeof _ctx.editingThis !== "undefined" && _ctx.editingThis !== null) ? ((typeof _ctx.editingThis !== "undefined" && _ctx.editingThis !== null) ? _ctx.editingThis : "") : ((typeof editingThis !== "undefined" && editingThis !== null) ? editingThis : "")) : "" ) == true) { 
_output += "\n            order-edit-mode\n        ";

}_output += "\n    \"\n>\n    ";
(function () {
  var __l = (((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? _ctx.items : "") : ((typeof items !== "undefined" && items !== null) ? items : "")) !== null ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? _ctx.items : "") : ((typeof items !== "undefined" && items !== null) ? items : "")) : "" ), __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
    var _ctx__loopcache023872303450480103 = { loop: _ctx.loop, item: _ctx.item, __k: _ctx.__k };
    _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (item, __k) {
    _ctx.item = item;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n        ";
_output += _filters["e"]((((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? ((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? _ctx.item : "") : ((typeof item !== "undefined" && item !== null) ? item : "")) !== null ? ((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? ((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? _ctx.item : "") : ((typeof item !== "undefined" && item !== null) ? item : "")) : "" ));
_output += "\n    ";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx__loopcache023872303450480103.loop;
  _ctx.item = _ctx__loopcache023872303450480103.item;
  _ctx.__k = _ctx__loopcache023872303450480103.__k;
  _ctx__loopcache023872303450480103 = undefined;
})();
_output += "\n</td>\n<td>\n    <button\n        class=\"js-complete\"\n        ";
if ((((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) !== null ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) : "" )) { 
_output += "\n            disabled\n        ";

}_output += "\n    >complete</button>\n\n    <button\n        class=\"js-cancel\"\n        ";
if ((((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) !== null ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) : "" )) { 
_output += "\n            disabled\n        ";

}_output += "\n    >cancel</button>\n\n    <button\n        class=\"js-edit\"\n        ";
if ((((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) !== null ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) : "" )) { 
_output += "\n            disabled\n        ";

}_output += "\n    >edit</button>\n</td>\n";

  return _output;

}, data);	});});
