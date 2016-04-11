angular.module('angularFireApp')
  .controller('todoElementoController', function(todosService, $rootScope){
    var vm = this;
    vm.todoData = todosService.dameTodo(vm.idtodolist, vm.idtodo)
    vm.salvar = () => vm.todoData.$save();

    $rootScope.$on('logout', function(){
      vm.todoData.$destroy()
    });
  })
  .component('todoElemento', {
    templateUrl: '/js/components/todo-elemento/todo-elemento.html',
    controller: 'todoElementoController',
    bindings: {
      idtodolist: '=',
      idtodo: '='
    },
  });
