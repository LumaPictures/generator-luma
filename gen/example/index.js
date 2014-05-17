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

Generator.prototype.askForExample = function askForExample() {
  var cb = this.async();
  var prompts = [{
    type: 'input',
    name: 'examplePrompt',
    message: 'What is your favorite color?'
  }];

  this.prompt(prompts, function (answers) {
    this.examplePrompt = answers.examplePrompt || "red";
    cb();
  }.bind(this));
};

Generator.prototype.createExampleFiles = function createExampleFiles() {
  // this.writeTemplate('example.coffee', path.join( 'someDir/' + this.name + '.mixin.coffee'));
};