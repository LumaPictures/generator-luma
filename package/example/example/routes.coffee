Router.addRoutes [{
  route: 'home'
  path: '/'
  controller: "ExampleController"
  page:
    title: "example"
    subtitle: "An example package built by generator-luma."
},{
  route: 'gitHub'
  path: "https://github.com/LumaPictures/example"
  external: true
  page:
    title: "GitHub"
    subtitle: "Open Source Repo"
  nav:
    priority: 1000
    icon: 'icon-github'
},{
  route: 'reportBugs'
  path: "https://github.com/LumaPictures/example/issues/new"
  external: true
  page:
    title: "Report Bugs"
    subtitle: "GitHub Issues"
},{
  route: 'source'
  path: "http://LumaPictures.github.io/example/"
  external: true
  page:
    title: "Annotated Source"
    subtitle: "GitHub pages generated by Groc"
  nav:
    priority: 1001
    icon: 'icon-code'
},{
  route: 'build'
  path: "https://travis-ci.org/LumaPictures/example"
  external: true
  page:
    title: "Build Status"
    subtitle: "Continuous Integration by Travis CI"
  nav:
    priority: 1002
    icon: 'icon-cogs'
}]

Router.initialize()