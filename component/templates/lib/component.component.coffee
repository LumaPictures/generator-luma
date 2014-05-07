# # <%= classyName %> Component
if Meteor.isClient
  # Theses mixins are included, extend the component by creating your own mixins and merging them in here.
  <%= classyName %>Component = _.extend {},
    <%= classyName %>Mixins.Initialize,
    <%= classyName %>Mixins.Destroy,
    <%= classyName %>Mixins.Options,
    <%= classyName %>Mixins.Selector,
    <%= classyName %>Mixins.Template,
    <%= classyName %>Mixins.Utility,
    <%= classyName %>Mixins.Debug

  # The code below is an example of how to set some example default options for display and language options.
  #
  # `<%= classyName %>.defaultOptions = _.extend {}, <%= classyName %>Options.display, <%= classyName %>Options.language`
  <%= classyName %>.defaultOptions = {}

  # The code below is an example of how to set some example preset options for dark and light layouts.
  #
  # `<%= classyName %>.presetOptions = _.extend {}, <%= classyName %>Options.darkLayout, <%= classyName %>Options.lightLayout`
  #
  # The preset options you are merging in should have a key that matches a selector that is passed into the component on init.
  #
  # ```
  # <%= classyName %>Options.darkLayout =
  #   "<%= name %>-dark-layout":
  #     background: "#000000"
  #     color: "#FFFFFF"
  # ```
  <%= classyName %>.presetOptions = {}

# Components are client only by default, but if you need to have a presence on the server you can define server mixins.
else if Meteor.isServer
  # `<%= classyName %>Component = _.extend {}, <%= classyName %>Mixins.Debug`
  <%= classyName %>Component = _.extend {}, <%= classyName %>Mixins.Debug`