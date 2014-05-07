class @ExampleController extends PackageLayoutController
  data: ->
    @data.package =
      name: "<%= name %>"
      description: ""
      owner: "LumaPictures"
      repo: "meteor-<%= name %>"
    super