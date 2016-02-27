/* global angular */
angular.module('starter').factory("listaAPI", function(){
     var getListas  = angular.fromJson(window.localStorage['listas'] || []);
   
 function persist(){
    window.localStorage['listas'] = angular.toJson(getListas);
  }


    return {
      list: function(){
          return getListas
          },
      get: function(id){
          for (var i = 0; i < getListas.length; ++i) {
                  if(id == getListas[i].id){
                        return getListas[i];
                    }             
          }
          return undefined;
      },
      adicionar: function (item) {
          if (item != null) {
              getListas.push(angular.copy(item));
              persist();
          }
        },

        total: function () {
          return getListas.length;
          },
        
update: function(lista){
for (var i = 0; i < getListas.length; ++i ){
        if( lista.id === getListas[i].id ){
          getListas[i] = lista;
          persist();
          return;
        
    }
  
  }
},


   remove: function(id){
      for (var i = 0; i < getListas.length; ++i ){
        if( id === getListas[i].id ){
          getListas.splice(i,1);
          persist();
          return;
        }
      }
    }

};

});