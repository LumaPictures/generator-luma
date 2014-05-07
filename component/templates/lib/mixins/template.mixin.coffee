# # <%= classyName %> Template
# #### `template` String ( optional )
# The name of template that you want to render for this component.
# Default is `default_<%= name %>_template` which you can set by setting `Template.<%= name %>.defaultTemplate`.
<%= classyName %>Mixins.Template =
  # ##### Default Template
  defaultTemplate: 'default_<%= name %>_template'

  # ##### chooseTemplate()
  # Return the template specified in the component parameters
  chooseTemplate: ( template = null ) ->
    # Set table template to default if no template name is passed in
    template ?= Template.<%= name %>.defaultTemplate
    # If the template is defined return it
    if Template[ template ]
      return Template[ template ]
      # Otherwise return the default template
    else return Template[ @defaultTemplate ]