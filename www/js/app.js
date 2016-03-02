/* global run */
/* global StatusBar */
/* global cordova */
/* global angular */
// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var db = null;
var app = angular.module('starter', ['ionic',
                                    'starter',
                                    'ngCordova',
                                    
                        
                        ]);

app.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        
        if(window.cordova) {
      // App syntax
      db = $cordovaSQLite.openDB("myapp.db");
        console.log('ionic run android')

    } else {
      // Ionic serve syntax
      db = window.openDatabase("myapp.db", "1.0", "My app", -1);
        console.log('ionic serve')
    }
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS task (id integer primary key, usuario varchar(255),login varchar(24), senha varchar(20), lista text(65555) )");
        $cordovaSQLite.execute(db, "desc task", []).then(function (params) {
            console.log(params)
        });
     
        console.log('query ok!')
        
    
    });
})


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppController'
        })
       
                
            .state('app.listas', {
            url: '/listas',
            views: {
                'menuContent': {
                    templateUrl: 'templates/listas.html',
                     controller: 'ListasController'
                }
            }
        })
        
        .state('app.lista_add', {
            url: '/lista_add/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/lista_add.html',
                    controller: 'ListaController'
                }
            }
        });
        
        
        
        
        
    $urlRouterProvider.otherwise('/app/listas');

});
