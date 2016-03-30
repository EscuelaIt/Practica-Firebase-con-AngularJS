angular.module("angularFireApp")
.service("authService", function($firebaseAuth, refsFirebase, $mdToast, $state, $rootScope) {
  var ref = refsFirebase('raiz'); //new Firebase("http://yep.fire...");

  var serv = this;
  serv.firebaseAuth = $firebaseAuth(ref);

  serv.registrarUsuario = function(objData) {
    var user = {
      email: objData.email,
      password: objData.clave
    };
    var datosNuevoUser = {
      email: objData.email,
      nombre: objData.nombre,
      apellidos: objData.apellidos,
      provider: 'password'
    };
    serv.firebaseAuth.$createUser(user)
      .then(function(userData) {
        $mdToast.show($mdToast.simple().textContent("usuario registrado con " + userData.uid));
        serv.firebaseAuth.$authWithPassword(user).then(function(userData) {
          var refUser = refsFirebase("usersId", {iduser: userData.uid});
          refUser.set(datosNuevoUser);
          $mdToast.show($mdToast.simple().textContent("usuario logueado con " + userData.uid));
          $state.go('portada');
        });
      })
      .catch(function(error) {
        $mdToast.show($mdToast.simple().textContent("Error al crear el usuario" + error));
      });
  }

  serv.logout = function(){

    serv.firebaseAuth.$unauth();
    $mdToast.show($mdToast.simple().textContent('Sesión cerrada'));
    $rootScope.$broadcast('logout');
  }

  serv.login = function(user){
    serv.firebaseAuth.$authWithPassword(user)
      .then(function(userData) {
        $mdToast.show($mdToast.simple().textContent('usuario logueado con ' + userData.uid));
        $state.go('portada');
      })
      .catch(function(error) {
        $mdToast.show($mdToast.simple().textContent('Error al loguear al usuario' + error));
      });
  }

  serv.usuarioAutenticado = function() {
    return serv.firebaseAuth.$getAuth();
  }

});
