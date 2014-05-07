# # <%= classyName %> Client
# ##### Extending the Template
# `Template.<%= name %>` is extended with `<%= classyName %>Component`'s methods so that the template callbacks can execute
# `<%= classyName %>Component` instance methods. In truth `Template.<%= name %>` is the actual `<%= classyName %>Component`.
Template.<%= name %> = _.extend Template.<%= name %>, <%= classyName %>Component

# ##### created()
# This is the component constructor.
Template.<%= name %>.created = ->
  templateInstance = @
  instantiatedComponent = templateInstance.__component__
  instantiatedComponent.prepareSelector()
  instantiatedComponent.prepareOptions()
  instantiatedComponent.log "created", @

# ##### rendered()
# When the component is first rendered the component is initialized  and `templateInstance.__component__` is the `this` context
Template.<%= name %>.rendered = ->
  templateInstance = @
  instantiatedComponent = templateInstance.__component__
  instantiatedComponent.log "rendered", @
  instantiatedComponent.initialize()

# ##### destroyed()
# The `<%= classyName %>Component.destroy()` method is a convenient place to do teardown and cleanup.
Template.<%= name %>.destroyed = ->
  templateInstance = @
  instantiatedComponent = templateInstance.__component__
  instantiatedComponent.destroy()
  instantiatedComponent.log "destroyed", @