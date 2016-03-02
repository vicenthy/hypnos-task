
app.controller('AppController', function ($scope, $ionicSideMenuDelegate) {
$scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();

}


});
