angular.module("angularFireApp")
.service("todosService", function($firebaseObject, $firebaseArray, refsFirebase, authService, $mdToast) {
  var serv = this;

  this.nuevaTodolist = function(cadena) {
    var ref = refsFirebase('todoList')
    var user = authService.usuarioAutenticado()
    if(user){
      var nuevaTodolist = ref.push({
        name: cadena,
        deleted: false,
        userCreator: user.uid
      }, function(){
        serv.nuevaUserTodolist(user, nuevaTodolist.key());
      })
    } else {
      $mdToast.show($mdToast.simple().textContent('No se pueden crear todoList sin estar autenticado'));
    }
  }
  this.nuevaUserTodolist = function (user, idTodolist) {
    var ref = refsFirebase('userTodolistTodoList', {
      user: user,
      idTodolist: idTodolist
    })
    ref.set(true)
  }

  this.dameTodoListsUsuario = function() {
    var user = authService.usuarioAutenticado();
    if(!user){
      return []
    } else {
      var ref = refsFirebase('userTodolist', user);
      //console.log(ref)
      return $firebaseArray(ref);
    }
  }

  this.dameTodoListId = function(id) {
    var ref = refsFirebase('todoListId', {id: id})
    return $firebaseObject(ref);
  }

  this.nuevaTodo = function(cadena, idTodolist) {
    var ref = refsFirebase('todos',{
      idTodolist: idTodolist
    });
    var user = authService.usuarioAutenticado()
    if(user){
      var nuevaTodo = ref.push({
        completed: false,
        name: cadena
      })
    } else {
      $mdToast.show($mdToast.simple().textContent('No se pueden crear tareas sin estar autenticado'));
    }
  }
  this.dameTodos = function(idtodolist) {
    var ref = refsFirebase('todos', {idTodolist: idtodolist})
    // console.log(ref, $firebaseArray(ref))
    return $firebaseArray(ref)
  }

  this.dameTodo = function(idtodolist, id) {
    var ref = refsFirebase('todoId', {idtodo: id, idtodolist: idtodolist})
    return $firebaseObject(ref)
  }
});
