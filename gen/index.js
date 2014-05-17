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

Generator.prototype.createGeneratorFiles = function createGeneratorFiles() {
  this.writeTemplate('index.js', path.join( 'index.js'));
  this.writeTemplate('TEMPLATE.md', path.join( 'templates/TEMPLATE.md'));
  this.writeTemplate('EXAMPLE.md', path.join( 'example/EXAMPLE.md'));
};