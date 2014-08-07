(function () {
'use strict';

var newsFrontendServices = angular.module('newsFrontendServices', ['ngResource']);

    newsFrontendServices.factory('News', ['$resource',
      function($resource){
        return $resource('content/:newsId.json', {}, {
          query: {method:'GET', params:{newsId:'sourceNews'}, isArray:true}
        });
    }]);

    newsFrontendServices.factory('SearchNews', ['$resource',
          function($resource){
            return $resource('content/sourceNews.json?q=:search');
            //return $resource('services/search/news.json?q=:search');
        }]);
})();