angular.module("angularFireApp")
  .controller("LoginController", function(authService){
    var vm = this;
    //var objAuth = authService.firebaseAuth;

    vm.loguearUsuario = function(){
      authService.login(vm.loginusuario);
    }
  });
