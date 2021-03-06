/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('luma generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('luma:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      'client/client.js',
      'client/styles/theme.less',
      'client/lib/subscriptions.js',
      'client/views/layout.html',
      'client/views/home.html',
      'client/views/home.js',
      'client/views/common/loading.html',
      'client/routes.js',
      'lib/collections.js',
      'public/robots.txt',
      'public/images/bg.jpg',
      'server/publications.js',
      'server/server.js',
      'server/security.js',
      '.meteor/.gitignore',
      '.meteor/packages',
      '.meteor/release',
      '.gitignore',
      'smart.json',
      'LICENSE',
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      ironRouter: true,
      bootstrap: true
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
