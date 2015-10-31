'use strict';

var rc = require('rc'),
    untildify = require('untildify');

var path = require('path');


module.exports = function () {
  return untildify(rc('npm', null, []).prefix) ||
    (process.platform == 'win32'
     ? path.dirname(process.execPath)
     : path.resolve(process.execPath, '../..'));
};
