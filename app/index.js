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

Generator.prototype.askFor = function askFor() {
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
      message: 'How would you describe this app?'
    }];

  this.prompt(prompts, function (answers) {
    this.repoName = answers.repoName || "example";
    this.owner = answers.owner || "LumaPictures";
    this.description = answers.description || "A lame description"
    cb();
  }.bind(this));
};

Generator.prototype.createApp = function createApp() {
  this.writeTemplate('meteor-luma.config.sh', path.join('meteor-luma.config.sh'));
  this.writeTemplate('smart.json', path.join('smart.json'));
  this.writeTemplate('README.md', path.join('README.md'));
  this.writeTemplate('.gitignore', path.join('.gitignore'));
  this.writeTemplate('tests/app.tests.coffee', path.join('tests/', this.name.toLowerCase() + '.tests.coffee'));
  this.writeTemplate('routes.coffee', path.join('routes.coffee'));

  this.writeTemplate('.meteor/.gitignore', path.join(".meteor/.gitignore"));
  this.writeTemplate('.meteor/packages', path.join(".meteor/packages"));

  this.writeTemplate('client/index.html', path.join('client/index.html'));
  this.writeTemplate('client/lib/app.controller.coffee', path.join("client/lib/app.controller.coffee"));
  this.writeTemplate('client/main.less', path.join("client/main.less"));
  this.writeTemplate('client/views/pages/home/home.html', path.join("client/views/pages/home/home.html"));
  this.writeTemplate('client/views/pages/home/home.coffee', path.join("client/views/pages/home/home.coffee"));

  this.writeTemplate('server/lib/settings.coffee', path.join("server/lib/settings.coffee"));

  this.writeTemplate('public/README.md', path.join("public/README.md"));
};