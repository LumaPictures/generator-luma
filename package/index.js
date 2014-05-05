'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var scriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  scriptBase.apply(this, arguments);
  // calling NamedBase allows us to retrieve the name argument associated with
  // yo meteor:view name, and set it to this.name *magic*
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));
};

util.inherits(Generator, scriptBase);

Generator.prototype.createPackageFiles = function createPackageFiles() {
  this.writeTemplate('package/smart.json', path.join('smart.json'));
  this.writeTemplate('package/package.js', path.join('package.js'));
  this.writeTemplate('package/README.md', path.join('README.md'));
  this.writeTemplate('package/LICENSE.md', path.join('LICENSE.md'));
  this.writeTemplate('package/.travis.yml', path.join('.travis.yml'));
  this.writeTemplate('package/.groc.json', path.join('.groc.json'));
  this.writeTemplate('package/.gitignore', path.join('.gitignore'));
  this.writeTemplate('package/lib/package.coffee', path.join('lib/', this.name.toLowerCase() + '.coffee'));
  this.writeTemplate('package/tests/package.test.coffee', path.join('tests/', this.name.toLowerCase() + '.test.coffee'));

  this.writeTemplate('package/example/smart.json', path.join('example/smart.json'));
  this.writeTemplate('package/example/routes.coffee', path.join('example/routes.coffee'));

  this.writeTemplate('package/example/.meteor/.gitignore', path.join("example/.meteor/.gitignore"));
  this.writeTemplate('package/example/.meteor/packages', path.join("example/.meteor/packages"));

  this.writeTemplate('package/example/client/index.html', path.join('example/client/index.html'));
  this.writeTemplate('package/example/client/lib/example.controller.coffee', path.join("example/client/lib/example.controller.coffee"));
  this.writeTemplate('package/example/client/main.less', path.join("example/client/main.less"));
  this.writeTemplate('package/example/client/views/pages/home/home.html', path.join("example/client/main.less"))

  this.writeTemplate('package/example/packages/.gitignore', path.join("example/packages/.gitignore"));

  this.writeTemplate('package/example/server/lib/settings.coffee', path.join("example/server/lib/settings.coffee"));

  this.writeTemplate('package/example/public/README.md', path.join("example/public/README.md"));
};