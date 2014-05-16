Router.addRoutes [{
  route: 'home'
  path: '/'
  controller: "AppController"
  page:
    title: "<%= name %>"
    subtitle: "<%= description %>"
}]

Router.initialize()