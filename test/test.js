'use strict';

var test = require('tape'),
    homedir = require('os-homedir'),
    rewire = require('rewire');

var path = require('path');


var prefix = rewire('..');

var npmrc = {};

prefix.__set__('rc', function (name) {
  if (name == 'npm') return npmrc;
});


test('absolute prefix', function (t) {
  npmrc.prefix = '/root';
  t.equal(prefix(), '/root');
  t.end();
});


test('home-relative prefix', function (t) {
  npmrc.prefix = '~/local';
  t.equal(prefix(), path.join(homedir(), 'local'));
  t.end();
});


test('no rc', function (t) {
  delete npmrc.prefix;
  t.ok(path.relative(path.resolve(process.execPath, '../..'), prefix())[0] != '.');
  t.end();
});
