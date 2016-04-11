angular.module("angularFireApp")
  .controller("todolistElementoController", function(todosService, $rootScope, authService){
    var vm = this;
    vm.todolistData = todosService.dameTodoListId(vm.idtodolist);
    console.log("en el controller de elemento")
    vm.userId = authService.dameUid();
    
    $rootScope.$on('logout', function(){
      vm.todolistData.$destroy();
    })
  })
  .component('todolistElemento', {
    templateUrl: "js/components/todolist-elemento/todolist-elemento.html",
    bindings: {
      idtodolist: "@"
    },
    controller: "todolistElementoController"
  })
