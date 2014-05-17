Router.addRoutes [{
  route: 'home'
  path: '/'
  controller: "AppController"
  page:
    title: "example"
    subtitle: "Awesome."
}]

Router.initialize()