Router.addRoutes [{
  route: 'home'
  path: '/'
  controller: "AppController"
  page:
    title: "example"
    subtitle: "A lame description"
}]

Router.initialize()