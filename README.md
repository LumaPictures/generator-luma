# generator-luma [![Build Status](https://secure.travis-ci.org/LumaPictures/generator-luma.png?branch=master)](https://travis-ci.org/LumaPictures/generator-luma)

A [Meteor](http://meteor.com) project generator for Luma Pictures.

[![NPM](https://nodei.co/npm/generator-luma.png)](https://nodei.co/npm/generator-luma/)

## Prerequisites
* [Meteor](https://github.com/meteor/meteor)
* [Meteorite](https://github.com/oortcloud/meteorite)
* [nodejs](http://nodejs.com)
* [yeoman](http://yeoman.io)

To install meteorite from npm, run:

```
$ npm install -g meteorite
```

To install yeoman from npm, run:

```
$ npm install -g yo
```

### The Best Instructions You'll See All Day

To install generator-luma run:

```
$ npm install -g generator-luma
```

Create a new project directory:

```
$ mkdir your-new-project && cd $_
```

Initiate the generator:

```
$ yo luma:app appName
```

Sync the smart.json packages using Meteorite:

```
$ mrt install
```

Finally, run Meteor:

```
$ meteor
```

## Generators

To generator a new generator use :

```
$ yo luma:gen yourGenerator
```

To generate a new Meteor Package use :

```
$ yo luma:package yourPackageName
```

To generate a new Meteor Component use :

```
$ yo luma:component yourComponentName
```

To generator a new Component Mixin use :

```
$ yo luma:mixin yourMixin
```

To generate a new Meteor Collection, try using:

```
$ yo luma:collection yourCollectionName
```

To generate a new Meteor Template view/events/helper, try this one out:

```
$ yo luma:view viewName
```

To generate a new Meteor Template Page, try this one out:

```
$ yo luma:page pageName
```

These generators will be extended over time and I hope you make good use of them!

## [License](https://github.com/lumapictures/generator-luma/LICENSE)
