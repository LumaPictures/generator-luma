# # <%= classyName %> Component
if Meteor.isClient
  # Theses mixins are included, extend the component by creating your own mixins and merging them in here.
  <%= classyName %>Component = _.extend {},
    <%= classyName %>Mixins.Base,
    <%= classyName %>Mixins.Initialize,
    <%= classyName %>Mixins.Destroy,
    <%= classyName %>Mixins.Options,
    <%= classyName %>Mixins.Selector,
    <%= classyName %>Mixins.Utility,
    <%= classyName %>Mixins.Debug
    # Add additional client mixin namespaces here
  
  <%= classyName %>Component.defaultOptions = {}

# Components are client only by default, but if you need to have a presence on the server you can define server mixins.
else if Meteor.isServer
  # `<%= classyName %>Component = _.extend {}, <%= classyName %>Mixins.Debug`
  <%= classyName %>Component = _.extend {},
    <%= classyName %>Mixins.Base,
    <%= classyName %>Mixins.Debug
    # Add additional server mixin namespaces here

  <%= classyName %>Component.defaultOptions = {}