define(['swig'], function (swig) {	return (function (data) {		return swig.run(function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<section\n    ";
if ((((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) !== null ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) : "" ) == true) { 
_output += "\n        class=\"order-edit-mode\"\n    ";

}_output += "\n>\n    <section>\n        ";
if ((((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) !== null ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? ((typeof _ctx.editing !== "undefined" && _ctx.editing !== null) ? _ctx.editing : "") : ((typeof editing !== "undefined" && editing !== null) ? editing : "")) : "" ) == true) { 
_output += "\n            <p><strong>edit mode</strong></p>\n        ";

}_output += "\n\n        <strong>Order: </strong>\n        ";
if ((((typeof _ctx.items !== "undefined" && _ctx.items !== null && _ctx.items.length !== undefined && _ctx.items.length !== null) ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null && _ctx.items.length !== undefined && _ctx.items.length !== null) ? _ctx.items.length : "") : ((typeof items !== "undefined" && items !== null && items.length !== undefined && items.length !== null) ? items.length : "")) !== null ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null && _ctx.items.length !== undefined && _ctx.items.length !== null) ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null && _ctx.items.length !== undefined && _ctx.items.length !== null) ? _ctx.items.length : "") : ((typeof items !== "undefined" && items !== null && items.length !== undefined && items.length !== null) ? items.length : "")) : "" ) == 0) { 
_output += "\n            <em>Empty</em> (Please choose 🍔, 🍟, or 🍦 below)\n        ";

}_output += "\n\n        ";
(function () {
  var __l = (((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? _ctx.items : "") : ((typeof items !== "undefined" && items !== null) ? items : "")) !== null ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? ((typeof _ctx.items !== "undefined" && _ctx.items !== null) ? _ctx.items : "") : ((typeof items !== "undefined" && items !== null) ? items : "")) : "" ), __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
    var _ctx__loopcache09108177421148866 = { loop: _ctx.loop, item: _ctx.item, __k: _ctx.__k };
    _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (item, __k) {
    _ctx.item = item;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n            ";
_output += _filters["e"]((((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? ((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? _ctx.item : "") : ((typeof item !== "undefined" && item !== null) ? item : "")) !== null ? ((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? ((typeof _ctx.item !== "undefined" && _ctx.item !== null) ? _ctx.item : "") : ((typeof item !== "undefined" && item !== null) ? item : "")) : "" ));
_output += "\n        ";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx__loopcache09108177421148866.loop;
  _ctx.item = _ctx__loopcache09108177421148866.item;
  _ctx.__k = _ctx__loopcache09108177421148866.__k;
  _ctx__loopcache09108177421148866 = undefined;
})();
_output += "\n    </section>\n\n    <section>\n        <div class=\"order-input-items\">\n            <button class=\"js-item order-input-item\" data-value=\"🍔\">🍔 burger</button>\n            <button class=\"js-item order-input-item\" data-value=\"🍟\">🍟 fries</button>\n            <button class=\"js-item order-input-item\" data-value=\"🍦\">🍦 cone</button>\n        </div>\n        <div>\n            <button class=\"js-cancel\">❌ clear</button>\n            <button class=\"js-submit\">✅ submit</button>\n        </div>\n    </section>\n</section>\n";

  return _output;

}, data);	});});
