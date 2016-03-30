angular.module("angularFireApp")
  .controller("PortadaController", function($mdToast, todosService, $rootScope){
    var vm = this;

    vm.nameTodoList = "";
    vm.todoLists = todosService.dameTodoListsUsuario();

    vm.nuevaTodolist = function() {
      // console.log("agregando todolist")
      todosService.nuevaTodolist(vm.nameTodoList)
      vm.nameTodoList = ""
    }

    $rootScope.$on('logout', function(){
      //console.log ("vm.todoLists", vm.todoLists)
      if(vm.todoLists.$destroy){
        vm.todoLists.$destroy();
      }
    });
  });
