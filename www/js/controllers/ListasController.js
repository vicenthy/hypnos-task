app.controller('ListasController', function ($scope, listaAPI, $ionicPopup) {

$scope.lista = {};
$scope.listas = listaAPI.list();
$scope.editar = function (item) {
      item = listaAPI.get(item.id);
      item.editMode = true;
      listaAPI.update(item);
      console.log(item)

}


$scope.salvar = function (item) {
      item = listaAPI.get(item.id);
      delete item.editMode;
      listaAPI.update(item);

}


$scope.remover = function (item) {
      listaAPI.remove(item.id);

}



$scope.showPopup = function(){
$scope.lista.nome = '';
var mypopup = $ionicPopup.show( {
            template: '<input type="text" ng-model="lista.nome" />',
            title:'Nova Lista',
            subtitle:'Digite o nome da nova lista',
            scope: $scope,
            buttons:[
                 {text:'Cancel',
                 type:'button-assertive'},
                 {text:'<b>Salvar</b>',
                 type:'button-positive',
                 onTap: function(e){
                    if (!$scope.lista.nome) {
                        e.preventDefault();
                    }else{
                    	$scope.lista.id = listaAPI.total()+1;
                        $scope.lista.sublista = [];
                        console.log($scope.lista); 
                        listaAPI.adicionar($scope.lista);   
                        return $scope.lista.nome;

                    }
                 }
                }   

            ]
});

 mypopup.then(function(res) {
    console.log('Tapped!', res);
  });


};

});