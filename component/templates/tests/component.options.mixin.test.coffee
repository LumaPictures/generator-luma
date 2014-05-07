Tinytest.add "<%= classyName %> - default options", ( test ) ->
  test.notEqual Template.<%= name %>.defaultOptions, undefined, "Expected defaultOptions to be defined on the client."