'use strict';

var rc = require('rc');

var path = require('path');


module.exports = function () {
  return rc('npm', null, []).prefix || path.resolve(process.execPath, '../..');
};
