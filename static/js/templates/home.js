define(['swig'], function (swig) {	return (function (data) {		return swig.run(function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<h1>drive-through till</h1>\n\n<hr>\n\n<section>\n    <section class=\"js-alert\"></section>\n</section>\n\n<hr>\n\n<section>\n    <h2>input</h2>\n    <section class=\"js-order-input\"></section>\n</section>\n\n<hr>\n\n<section>\n    <h2>pending orders</h2>\n    <table>\n        <thead>\n            <tr>\n                <th>order items</th>\n                <th>actions</th>\n            </tr>\n        </thead>\n        <tbody class=\"js-orders-pending\"></tbody>\n    </table>\n</section>\n";

  return _output;

}, data);	});});
