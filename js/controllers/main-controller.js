angular.module("angularFireApp")
  .controller("AngularFireController", function($mdSidenav, authService){
    var vm = this;
    vm.autenticado = false;
    vm.escuela = "EscuelaIT";

    vm.sidebarToggle = function(){
      $mdSidenav('left').toggle();
    }

    authService.firebaseAuth.$onAuth(function(authData){
      if(authData) {
        vm.autenticado = true;
      } else {
        vm.autenticado = false;
      }
    });

    vm.doLogout = function(){
      authService.logout();
    }
  });
