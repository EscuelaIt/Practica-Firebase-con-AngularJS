angular.module("angularFireApp")
.config(function($stateProvider) {
  console.log("creando rutas");
  $stateProvider.state('acercade', {
      url: '/acercade',
      templateUrl: 'templates/acercade.html',
      controller: function(){
        this.autor = "@midesweb"
      },
      controllerAs: "acecadevm"
    });
  $stateProvider.state('portada', {
      url: '/',
      templateUrl: 'templates/portada.html',
      controller: 'PortadaController as vmPortada'
    })
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController as loginvm'
  });
  $stateProvider.state('registro', {
    url: '/registro',
    templateUrl: 'templates/registro.html',
    controller: 'RegistroController as registrovm'
  });
  $stateProvider.state('todolistDetalle', {
    url: '/todolist/:todolistId',
    template: '<todolist-detalle></todolist-detalle>'
  })
})
.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})
