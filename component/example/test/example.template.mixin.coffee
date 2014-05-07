Tinytest.add "Example - chooseTemplate()", ( test ) ->
  test.notEqual Template[ Template.example.defaultTemplate ], undefined, "Expected the default_example_template to be defined."
  test.equal Template.example.chooseTemplate(), Template[ Template.example.defaultTemplate ], "Calling chooseTemplate without a param returns the default_example_template."
  test.notEqual Template.example.chooseTemplate('undefined_template'), undefined, "chooseTemplate() should never return undefined."
  # stub some_template being defined
  Template['some_template'] = true
  test.equal Template.example.chooseTemplate('some_template'), Template['some_template'], "Passing a template name to chooseTemplate() returns that template."