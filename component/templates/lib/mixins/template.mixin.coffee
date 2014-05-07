# # <%= classyName %> Template
# #### `template` String ( optional )
# The name of template that you want to render for this component.
# Default is `default_<%= name %>_template` found [here](lib/<%= name %>.html).
# You can set your default template by assigning the template name to `Template.<%= name %>.defaultTemplate`.
<%= classyName %>Mixins.Template =
  # ##### Default Table Template
  # The default table template is defined in datatables.html.
  defaultTemplate: 'default_<%= name %>_template'

  # ##### chooseTemplate Helper
  # Return the template specified in the component parameters
  chooseTemplate: ( template = null ) ->
    # Set table template to default if no template name is passed in
    template ?= Template.<%= name %>.defaultTemplate
    # If the template is defined return it
    if Template[ template ]
      return Template[ template ]
      # Otherwise return the default template
    else return Template[ @defaultTemplate ]