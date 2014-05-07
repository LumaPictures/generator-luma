class @ExampleController extends PackageLayoutController
  data: ->
    @data.package =
      name: "<%= name %>"
      description: "<%= description %>"
      owner: "<%= owner %>"
      repo: "<%= repoName %>"
    super