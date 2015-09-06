'use strict';

var rc = require('rc');

var path = require('path');


module.exports = function () {
  return rc('npm', null, []).prefix ||
    (process.platform == 'win32'
     ? path.dirname(process.execPath)
     : path.resolve(process.execPath, '../..'));
};
