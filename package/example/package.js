Package.describe({
  summary: "An example package built by generator-luma."
});

Package.on_use(function (api, where) {
  api.use([
    'coffeescript',
    'underscore'
  ],[ 'client', 'server' ]);

  api.use([
    'jquery',
    'ui',
    'templating',
    'spacebars'
  ], [ 'client' ]);

  api.export([], ['client','server']);

  api.add_files([
    'lib/example.coffee'
  ], [ 'client', 'server' ]);
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'example',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.add_files([
    'tests/example.test.coffee'
  ], ['client', 'server']);
});