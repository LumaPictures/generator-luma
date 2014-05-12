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

Generator.prototype.createComponentFiles = function createComponentFiles() {
  this.writeTemplate('lib/component.html', path.join( 'lib/' + this.name.toLowerCase() + '.html'));

  this.writeTemplate('lib/component.client.coffee', path.join( 'lib/' + this.name.toLowerCase() + '.client.coffee'));
  this.writeTemplate('lib/component.server.coffee', path.join( 'lib/' + this.name.toLowerCase() + '.server.coffee'));
  this.writeTemplate('lib/component.component.coffee', path.join( 'lib/' + this.name.toLowerCase() + '.component.coffee'));

  this.writeTemplate('lib/mixins/component.mixin.coffee', path.join( 'lib/mixins/' + this.name.toLowerCase() + '.mixin.coffee' ));
  this.writeTemplate('lib/mixins/initialize.mixin.coffee', path.join( 'lib/mixins/initialize.mixin.coffee' ));
  this.writeTemplate('lib/mixins/destroy.mixin.coffee', path.join( 'lib/mixins/destroy.mixin.coffee' ));
  this.writeTemplate('lib/mixins/debug.mixin.coffee', path.join( 'lib/mixins/debug.mixin.coffee' ));
  this.writeTemplate('lib/mixins/utility.mixin.coffee', path.join( 'lib/mixins/utility.mixin.coffee' ));
  this.writeTemplate('lib/mixins/selector.mixin.coffee', path.join( 'lib/mixins/selector.mixin.coffee' ));
  this.writeTemplate('lib/mixins/options.mixin.coffee', path.join( 'lib/mixins/options.mixin.coffee' ));
  this.writeTemplate('lib/mixins/template.mixin.coffee', path.join( 'lib/mixins/template.mixin.coffee' ));

  this.writeTemplate('lib/plugins/README.md', path.join( 'lib/plugins/README.md' ));

  this.writeTemplate('vendor/README.md', path.join( 'vendor/README.md' ));

  this.writeTemplate('tests/component.test.coffee', path.join( 'tests/' + this.name.toLowerCase() + '.tests.coffee'));

  this.writeTemplate('COMPONENT.md', path.join( this.name.toUpperCase() + '.md' ))
};