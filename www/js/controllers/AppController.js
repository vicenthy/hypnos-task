

var listas = [
    {   id:1,
        nome: 'Mercado', 
        sublista:[
            {nome:'Arroz', feito:true},
            {nome:'Feijão', feito:false},
            {nome:'Macarrão', feito:false},
            {nome:'Açucar', feito:true},
            {nome:'Sal', feito:true}
            
            ]
    },
        {   id:2,
        nome: 'Colégio', 
        sublista:[
            {nome:'Lapiz', feito:true},
            {nome:'Caneta', feito:false},
            {nome:'Tesoura', feito:false},
            {nome:'Caderno', feito:true},
            {nome:'Borracha', feito:true},
            {nome:'Carderno de desenho', feito:true},
            {nome:'Carderno de caligrafia', feito:false}
            
            ]
    }
];


window.localStorage['listas'] = angular.toJson(listas);


app.controller('AppController', function ($scope, $ionicSideMenuDelegate) {
$scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();

}


});
