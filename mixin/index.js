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

Generator.prototype.askForMixin = function askForMixin() {
  var cb = this.async();
  var prompts = [{
    type: 'input',
    name: 'containerObject',
    message: 'What is the name of mixin container object?'
  }];

  this.prompt(prompts, function (answers) {
    this.containerObject = answers.containerObject || "ComponentMixin";
    cb();
  }.bind(this));
};

Generator.prototype.createMixinFiles = function createMixinFiles() {
  this.writeTemplate('mixin.coffee', path.join( 'mixins/' + this.name + '.mixin.coffee'));
};