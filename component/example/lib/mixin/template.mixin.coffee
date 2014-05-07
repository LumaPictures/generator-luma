# # Example Template
# #### `template` String ( optional )
# The name of template that you want to render for this component.
# Default is `default_example_template` which you can set by setting `Template.example.defaultTemplate`.
ExampleMixins.Template =
  # ##### Default Template
  defaultTemplate: 'default_example_template'

  # ##### chooseTemplate()
  # Return the template specified in the component parameters
  chooseTemplate: ( template = null ) ->
    # Set table template to default if no template name is passed in
    template ?= Template.example.defaultTemplate
    # If the template is defined return it
    if Template[ template ]
      return Template[ template ]
      # Otherwise return the default template
    else return Template[ @defaultTemplate ]