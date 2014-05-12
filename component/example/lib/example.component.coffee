# # Example Component
if Meteor.isClient
  # Theses mixins are included, extend the component by creating your own mixins and merging them in here.
  ExampleComponent = _.extend {},
    ExampleMixins.Base,
    ExampleMixins.Initialize,
    ExampleMixins.Destroy,
    ExampleMixins.Options,
    ExampleMixins.Selector,
    ExampleMixins.Template,
    ExampleMixins.Utility,
    ExampleMixins.Debug
    # Add additional client mixin namespaces here

  # The code below is an example of how to set some example default options for display and language options.
  #
  # `Example.defaultOptions = _.extend {}, ExampleOptions.display, ExampleOptions.language`
  ExampleComponent.defaultOptions = {}

# Components are client only by default, but if you need to have a presence on the server you can define server mixins.
else if Meteor.isServer
  # `ExampleComponent = _.extend {}, ExampleMixins.Debug`
  ExampleComponent = _.extend {},
    ExampleMixins.Base,
    ExampleMixins.Debug
    # Add additional server mixin namespaces here

  ExampleComponent.defaultOptions = {}