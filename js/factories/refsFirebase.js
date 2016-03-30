angular.module("angularFireApp")
.constant("firebaseUrl", "https://yep.firebaseio.com/")
.factory("refsFirebase", function(firebaseUrl) {
  var urls = {
    raiz: function(){
      return firebaseUrl;
    },
    users: function(data){
      console.log(firebaseUrl + "users/" + data.uid)
      return firebaseUrl + "users/" + data.uid
    },
    usersId: function(data){
      return firebaseUrl + "users/" + data.iduser;
    },
    userTodolist: function(data){
      // console.log("-->", firebaseUrl + "userTodolist/" + data.uid)
      return firebaseUrl + "userTodolist/" + data.uid
    },
    userTodolistTodoList: function(data){
      return firebaseUrl + "userTodolist/" + data.user.uid + '/' + data.idTodolist
    },
    todoList: function(){
      return firebaseUrl + "todolist"
    },
    todoListId: function(data){
      return firebaseUrl + "todolist/" + data.id
    },
    todos: function(data){
      // console.log(firebaseUrl + "todos/" + data.idTodolist)
      return firebaseUrl + "todos/" + data.idTodolist
    },
    todoId: function(data){
      return firebaseUrl + "todos/" + data.idtodolist + "/" + data.idtodo
    }
  };
  return function(lugar, adicionales){
    adicionales =  adicionales || {};
    return new Firebase(urls[lugar](adicionales));
  }
});

//ejemplos de acceso a esta factoria
//var objFirebase = refsFirebase("raiz");
//var objFirebase = refsFirebase("users");
//var objFirebase = refsFirebase("usersId", { iduser: "dfdf934-ssdsd-3434-sd-233"});

