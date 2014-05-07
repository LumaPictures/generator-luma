Tinytest.add "<%= classyName %> - chooseTemplate()", ( test ) ->
  test.notEqual Template[ Template.<%= name %>.defaultTemplate ], undefined, "Expected the default_<%= name %>_template to be defined."
  test.equal Template.<%= name %>.chooseTemplate(), Template[ Template.<%= name %>.defaultTemplate ], "Calling chooseTemplate without a param returns the default_<%= name %>_template."
  test.notEqual Template.<%= name %>.chooseTemplate('undefined_template'), undefined, "chooseTemplate() should never return undefined."
  # stub some_template being defined
  Template['some_template'] = true
  test.equal Template.<%= name %>.chooseTemplate('some_template'), Template['some_template'], "Passing a template name to chooseTemplate() returns that template."