'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var scriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  scriptBase.apply(this, arguments);
  // calling NamedBase allows us to retrieve the name argument associated with
  // yo meteor:package name, and set it to this.name *magic*
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, 'templates'));
};

util.inherits(Generator, scriptBase);

Generator.prototype.askForPackage = function askForPackage() {
  var cb = this.async(),
    prompts = [{
      type: 'input',
      name: 'repoName',
      message: 'What is the name of this GitHub repo?'
    }, {
      type: 'input',
      name: 'owner',
      message: 'What GitHub account owns this repo?'
    }, {
      type: 'input',
      name: 'description',
      message: 'How would you describe this package?'
    }, {
      type: 'input',
      name: 'authorName',
      message: 'Who are you?'
    }, {
      type: 'input',
      name: 'authorEmail',
      message: 'What is your email?'
    }, {
      type: 'input',
      name: 'authorWebsite',
      message: 'What is your website?'
    }];

  this.prompt(prompts, function (answers) {
    this.description = answers.description || "An example package built by generator-luma.";
    this.authorName = answers.authorName || "Austin Rivas";
    this.authorEmail = answers.authorEmail || "austinrivas@gmail.com";
    this.authorWebsite = answers.authorWebsite || "https://github.com/austinrivas";
    this.owner = answers.owner || "LumaPictures";
    this.repoName = answers.repoName || "example";
    cb();
  }.bind(this));
};

Generator.prototype.createPackageFiles = function createPackageFiles() {
  this.writeTemplate('smart.json', path.join('smart.json'));
  this.writeTemplate('package.js', path.join('package.js'));
  this.writeTemplate('README.md', path.join('README.md'));
  this.writeTemplate('LICENSE.md', path.join('LICENSE.md'));
  this.writeTemplate('.travis.yml', path.join('.travis.yml'));
  this.writeTemplate('.groc.json', path.join('.groc.json'));
  this.writeTemplate('.gitignore', path.join('.gitignore'));
  this.writeTemplate('lib/package.coffee', path.join('lib/', this.name.toLowerCase() + '.coffee'));
  this.writeTemplate('tests/package.test.coffee', path.join('tests/', this.name.toLowerCase() + '.test.coffee'));

  this.writeTemplate('example/smart.json', path.join('example/smart.json'));
  this.writeTemplate('example/routes.coffee', path.join('example/routes.coffee'));

  this.writeTemplate('example/.meteor/.gitignore', path.join("example/.meteor/.gitignore"));
  this.writeTemplate('example/.meteor/packages', path.join("example/.meteor/packages"));

  this.writeTemplate('example/client/index.html', path.join('example/client/index.html'));
  this.writeTemplate('example/client/lib/example.controller.coffee', path.join("example/client/lib/example.controller.coffee"));
  this.writeTemplate('example/client/main.less', path.join("example/client/main.less"));
  this.writeTemplate('example/client/views/pages/home/home.html', path.join("example/client/views/pages/home/home.html"));
  this.writeTemplate('example/client/views/pages/home/home.coffee', path.join("example/client/views/pages/home/home.coffee"));

  this.writeTemplate('example/server/lib/settings.coffee', path.join("example/server/lib/settings.coffee"));

  this.writeTemplate('example/public/README.md', path.join("example/public/README.md"));
};