class @ExampleController extends PackageLayoutController
  data: ->
    @data.package =
      name: "<%= classyName %>"
      description: ""
      owner: "LumaPictures"
      repo: "meteor-<%= name %>"
    super