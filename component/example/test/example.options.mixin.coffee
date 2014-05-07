Tinytest.add "Example - default options", ( test ) ->
  test.notEqual Template.example.defaultOptions, undefined, "Expected defaultOptions to be defined on the client."