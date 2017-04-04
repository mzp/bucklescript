'use strict';

var Arg = require("../../lib/js/arg.js");

function anno_fun(arg) {
  console.log(arg);
  return /* () */0;
}

var usage_msg = "Usage:\n";

Arg.parse(/* [] */0, anno_fun, usage_msg);

exports.anno_fun  = anno_fun;
exports.usage_msg = usage_msg;
/*  Not a pure module */
