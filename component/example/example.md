# Example Component

## Setup

In order to include this component in your package you must add the following to you `package.js` `on_use` callback.

```javascript
  /* ExampleComponent */
  api.export([
    'ExampleMixins',
    'ExampleComponent'
    /* ADD Example Exports here */
  ], [ 'client', 'server' ]);

  api.add_files([
    'lib/components/example/lib/mixins/example.mixin.coffee',
    'lib/components/example/lib/mixins/debug.mixin.coffee'
  ], [ 'client', 'server']);

  api.add_files([
    'lib/components/example/lib/example.server.coffee'
  ], [ 'server' ]);

  api.add_files([
    'lib/components/example/lib/mixins/initialize.mixin.coffee',
    'lib/components/example/lib/mixins/destroy.mixin.coffee',
    'lib/components/example/lib/mixins/options.mixin.coffee',
    'lib/components/example/lib/mixins/selector.mixin.coffee',
    'lib/components/example/lib/mixins/utility.mixin.coffee'
    /* ADD ExampleComponent Mixins here */
  ], [ 'client' ]);

  api.add_files([
    'lib/components/example/lib/example.component.coffee'
  ], [ 'client', 'server']);

  api.add_files([
    'lib/components/example/lib/example.html',
    'lib/components/example/lib/example.client.coffee'
  ], [ 'client' ]);
  /* END ExampleComponent */
```

Add the following to your `package.js` `on_test` callback.

```javascript
  /* ExampleComponent Tests */
  api.add_files([
    'lib/components/example/tests/example.tests.coffee'
    /* ADD ExampleComponent Tests here */
  ], [ 'client', 'server' ]);
  /* END ExampleComponent Tests */
```

# Extend

In order to extend this component with your own mixins you must.

1. Create your own mixin file or add the methods to the `Base` mixin

2. If you added a mixin file you must include it in your `package.js` at the location marked `ADD ExampleComponent Mixins here`.

3. If you added a new mixin namespace you must extend the component in `lib/components/example/lib/example.component.coffee`
    at the location marked `# Add additional client mixin namespaces here` and `# Add additional client mixin namespaces here`
    depending on the intended use.

## Vendor

Any vendor assets must be placed in the vendor directory and included in you `package.js`

```javascript
  /* ExampleComponent Vendor Assets */
  api.add_files([
    'lib/components/example/vendor/example_vendor_file.min.js'
  ], [ 'client' ]);
```
