angular.module('angularFireApp')
  .controller('todoInsertarController', function(todosService, $rootScope){
    var vm = this;
    //vm.todolistData = todosService.dameTodoListId(this.idtodolist);

    vm.nuevaTarea = function(){
      todosService.nuevaTodo(vm.nameTarea, vm.idtodolist);
    }

    // $rootScope.$on('logout', function(){
    //   vm.todolistData.$destroy()
    // });
  })
  .component('todoInsertar', {
    templateUrl: '/js/components/todo-insertar/todo-insertar.html',
    controller: 'todoInsertarController',
    bindings: {
      idtodolist: "@"
    }
  });
