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

Generator.prototype.createPageFiles = function createPageFiles() {
  this.writeTemplate('client/view/pages/page.html', path.join('client/views/pages/' + this.name.toLowerCase(), this.name.toLowerCase() + '.html'));
  this.writeTemplate('client/view/pages/page.coffee', path.join('client/views/pages/' + this.name.toLowerCase(), this.name.toLowerCase() + '.coffee'));
};