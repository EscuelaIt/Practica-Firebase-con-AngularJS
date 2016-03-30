angular.module("angularFireApp")
  .controller("RegistroController", function(authService){
    var vm = this;

    vm.registrarUsuario = function(){
      authService.registrarUsuario(vm.registrousuario);
    }
  });
