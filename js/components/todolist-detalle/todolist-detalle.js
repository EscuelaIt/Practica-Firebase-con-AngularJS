angular.module('angularFireApp')
  .controller('todolistDetalleController', function(todosService, $rootScope, $stateParams, authService){
    var vm = this;
    vm.idTodolist = $stateParams.todolistId;
    vm.todolistData = todosService.dameTodoListId(vm.idTodolist);
    console.log(vm.todolistData)

    vm.todos = todosService.dameTodos(this.idTodolist);
    console.log(vm.todolistData.userCreator);
    //vm.esPropietario = vm.todolistData.userCreator == authService.dameUid();

    $rootScope.todolistData = vm.todolistData;
    $rootScope.$watch("todolistData.userCreator", function(valueNew, valueOld) {
      console.log("este es el user creator", vm.todolistData.userCreator)
      vm.esPropietario = (vm.todolistData.userCreator == authService.dameUid()) ? true : false;
    })

    $rootScope.$on('logout', function(){
      vm.todolistData.$destroy();
      vm.todos.$destroy();
    });


    // console.log(vm.idTodolist);
    //
    // $rootScope.todolistData = vm.todolistData;
    //
    //
    // vm.esPropietario = false;
    // $rootScope.$watch("todolistData.userCreator", function(value) {
    //   console.log("este es el user creator", vm.todolistData.userCreator, value)
    //   vm.esPropietario = (vm.todolistData.userCreator == authService.dameUid()) ? true : false
    //   // setTimeout(() => console.log('propietario',this.todolistData, this.todolistData.userCreator, authService.dameUid(), this.esPropietario), 5000)
    //   // console.log('propietario',this.todolistData, this.todolistData.userCreator, authService.dameUid(), this.esPropietario)
    // })
    // console.log('vm.todolistData.userCreator',vm.todolistData.userCreator)
    // console.log('vm.esPropietario',vm.esPropietario)
    //
    // $rootScope.$on('logout', function(){
    //   vm.todolistData.$destroy();
    //   vm.todos.$destroy();
    // });
  })
  .component('todolistDetalle', {
    templateUrl: '/js/components/todolist-detalle/todolist-detalle.html',
    controller: 'todolistDetalleController'
  });
