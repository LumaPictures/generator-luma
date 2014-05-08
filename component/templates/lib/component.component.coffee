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
  <%= classyName %>Component.defaultOptions = {}

# Components are client only by default, but if you need to have a presence on the server you can define server mixins.
else if Meteor.isServer
  # `<%= classyName %>Component = _.extend {}, <%= classyName %>Mixins.Debug`
  <%= classyName %>Component = _.extend {}, <%= classyName %>Mixins.Debug