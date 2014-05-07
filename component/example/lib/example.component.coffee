# # Example Component
if Meteor.isClient
  # Theses mixins are included, extend the component by creating your own mixins and merging them in here.
  ExampleComponent = _.extend {},
    ExampleMixins.Initialize,
    ExampleMixins.Destroy,
    ExampleMixins.Options,
    ExampleMixins.Selector,
    ExampleMixins.Template,
    ExampleMixins.Utility,
    ExampleMixins.Debug

  # The code below is an example of how to set some example default options for display and language options.
  #
  # `Example.defaultOptions = _.extend {}, ExampleOptions.display, ExampleOptions.language`
  Example.defaultOptions = {}

  # The code below is an example of how to set some example preset options for dark and light layouts.
  #
  # `Example.presetOptions = _.extend {}, ExampleOptions.darkLayout, ExampleOptions.lightLayout`
  #
  # The preset options you are merging in should have a key that matches a selector that is passed into the component on init.
  #
  # ```
  # ExampleOptions.darkLayout =
  #   "example-dark-layout":
  #     background: "#000000"
  #     color: "#FFFFFF"
  # ```
  Example.presetOptions = {}

# Components are client only by default, but if you need to have a presence on the server you can define server mixins.
else if Meteor.isServer
  # `ExampleComponent = _.extend {}, ExampleMixins.Debug`
  ExampleComponent = _.extend {}, ExampleMixins.Debug