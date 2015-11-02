'use strict';

var npmPrefix = require('..');

var test = require('tape'),
    homedir = require('os-homedir');

var path = require('path');


test('absolute prefix', function (t) {
  process.chdir(__dirname + '/fixtures/absolute');
  t.equal(npmPrefix(), '/root');
  t.end();
});


test('home-relative prefix', function (t) {
  process.chdir(__dirname + '/fixtures/home-relative');
  t.equal(npmPrefix(), path.join(homedir(), 'local'));
  t.end();
});


test('no rc', function (t) {
  process.chdir(__dirname + '/fixtures/no-rc');
  var prefix = npmPrefix();
  t.ok(path.relative(path.resolve(process.execPath, '../..'), prefix)[0] != '.');
  t.end();
});
