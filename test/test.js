'use strict';

var npmPrefix = require('..');

var test = require('tape');

var path = require('path');


test('absolute prefix', function (t) {
  process.chdir(__dirname + '/fixtures/absolute');
  t.equal(npmPrefix(), '/root');
  t.end();
});
