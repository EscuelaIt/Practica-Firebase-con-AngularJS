angular.module("angularFireApp", ['ngMaterial','firebase','ui.router'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('brown').accentPalette('green');
})
