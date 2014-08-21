(function () {
'use strict';

var newsFrontendServices = angular.module('newsFrontendServices', ['ngResource']);

    newsFrontendServices.factory('News', ['$resource',
      function($resource){
        return $resource('content/:newsId.json', {}, {
          'get': {
            method:'GET', 
            params:{newsId:'sourceNews'}, 
            isArray:true}
        });
    }]);
	
	newsFrontendServices.factory('RestNews', ['$resource',
      function($resource){
        return $resource('http://54.72.3.96:3000/posts/:_id', null, {
          'update': { method:'PUT' },
          'get': { method:'GET', isArray:true }
        });
    }]);
 
})();