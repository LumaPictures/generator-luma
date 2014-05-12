# <%= classyName %> Component

## Setup

In order to include this component in your package you must add the following to you `package.js` `on_use` callback.

```javascript
  /* <%= classyName %>Component */
  api.export([
    '<%= classyName %>Mixins',
    '<%= classyName %>Component'
    /* ADD <%= classyName %> Exports here */
  ], [ 'client', 'server' ]);

  api.add_files([
    'lib/components/<%= name %>/lib/mixins/<%= name %>.mixin.coffee',
    'lib/components/<%= name %>/lib/mixins/debug.mixin.coffee'
  ], [ 'client', 'server']);

  api.add_files([
    'lib/components/<%= name %>/lib/<%= name %>.server.coffee'
  ], [ 'server' ]);

  api.add_files([
    'lib/components/<%= name %>/lib/mixins/initialize.mixin.coffee',
    'lib/components/<%= name %>/lib/mixins/destroy.mixin.coffee',
    'lib/components/<%= name %>/lib/mixins/options.mixin.coffee',
    'lib/components/<%= name %>/lib/mixins/selector.mixin.coffee',
    'lib/components/<%= name %>/lib/mixins/utility.mixin.coffee'
    /* ADD <%= classyName %>Component Mixins here */
  ], [ 'client' ]);

  api.add_files([
    'lib/components/<%= name %>/lib/<%= name %>.component.coffee'
  ], [ 'client', 'server']);

  api.add_files([
    'lib/components/<%= name %>/lib/<%= name %>.html',
    'lib/components/<%= name %>/lib/<%= name %>.client.coffee'
  ], [ 'client' ]);
  /* END <%= classyName %>Component */
```

Add the following to your `package.js` `on_test` callback.

```javascript
  /* <%= classyName %>Component Tests */
  api.add_files([
    'lib/components/<%= name %>/tests/<%= name %>.tests.coffee'
    /* ADD <%= classyName %>Component Tests here */
  ], [ 'client', 'server' ]);
  /* END <%= classyName %>Component Tests */
```

# Extend

In order to extend this component with your own mixins you must.

1. Create your own mixin file or add the methods to the `Base` mixin

2. If you added a mixin file you must include it in your `package.js` at the location marked `ADD <%= classyName %>Component Mixins here`.

3. If you added a new mixin namespace you must extend the component in `lib/components/<%= name %>/lib/<%= name %>.component.coffee`
    at the location marked `# Add additional client mixin namespaces here` and `# Add additional client mixin namespaces here`
    depending on the intended use.

## Vendor

Any vendor assets must be placed in the vendor directory and included in you `package.js`

```javascript
  /* <%= classyName %>Component Vendor Assets */
  api.add_files([
    'lib/components/<%= name %>/vendor/example_vendor_file.min.js'
  ], [ 'client' ]);
```
