/* global angular */
/* global app */

app.controller('ListaController', function ($scope, listaAPI, $stateParams) {
$scope.nomeLista = listaAPI.get($stateParams.id).nome; 
$scope.sublista = listaAPI.get($stateParams.id).sublista;
 //converte string em boolean
 $scope.mostrar =  ( localStorage.getItem('mostrar') === 'true');

    $scope.remover = function (item) {
        var i = $scope.sublista.indexOf(item);
        if (i != -1) {
            $scope.sublista.splice(i, 1);
            listaAPI.update( listaAPI.get($stateParams.id) );
        }
    }

    $scope.adicionar = function (item) {
        if (item.nome != null) {
            $scope.sublista.unshift(angular.copy(item));
            delete item.nome;
            listaAPI.update( listaAPI.get($stateParams.id) );
        }
    }

    $scope.verificar = function (item) {

    }


     $scope.salvarItem = function (item) {
        listaAPI.update( listaAPI.get($stateParams.id) );
    }
    
    $scope.salvaMostrar = function () {
     console.log($scope.mostrar)
    localStorage.setItem('mostrar', $scope.mostrar);
    }
});