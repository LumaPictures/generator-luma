# generator-luma [![Build Status](https://secure.travis-ci.org/LumaPictures/generator-luma.png?branch=master)](https://travis-ci.org/LumaPictures/generator-luma)

A [Meteor](http://meteor.com) project generator for Luma Pictures.

[![NPM](https://nodei.co/npm/generator-luma.png)](https://nodei.co/npm/generator-luma/)

## Prerequisites
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
$ git clone https://github.com/lumapictures/generator-luma
$ cd generator-luma && npm link
```

* Note : I plan on releasing this to NPM once I have formalized the structure

Create a new project directory:

```
$ mkdir your-new-project && cd $_
```

Initiate the generator:

```
$ yo luma
```

Sync the smart.json packages using Meteorite:

```
$ mrt update
```

Finally, run Meteor:

```
$ meteor
```

## View and Collection Generators
generator-luma now supports primitive scaffolding using Yeoman sub-generators

To generate a new Meteor Package use :

```
$ yo luma:package yourPackageName
```

To generate a new Meteor Component use :

```
$ yo luma:component yourComponentName
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

## Structure Generated with Iron-Router Enabled
```
/
    .meteor/
        .gitignore
        packages
        release
    client/
        compatibility/
        lib/
            subscriptions.js
        styles/
            theme.css
        views/
            common/
            home.html
            home.js
            layout.html
        routes.js
    lib/
        collections.js
    private/
    public/
        fonts/
        images/
        robots.txt
    server/
        publications.js
        security.js
        server.js
    .gitignore <- contains sensible defaults for files/folders to ignore
    LICENSE <- default empty license file
    smart.json <- meteorite package definition
```

## [License](https://github.com/lumapictures/generator-luma/LICENSE)
