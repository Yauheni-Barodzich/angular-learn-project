(function () {
'use strict';

var newsFrontendControllers = angular.module('newsFrontendControllers', []);

newsFrontendControllers.controller('NewsListCtrl', ['$scope', 'News', 'SearchNews',
  function($scope, News, SearchNews) {
    $scope.newss = News.query();
    $scope.orderProp = 'title';
    
    $scope.UpdateNews = function(searchQuery) {
        $scope.newss = SearchNews.query({search: searchQuery});
    };
    
  }]);
  
newsFrontendControllers.controller('NewsDetailCtrl', ['$scope', '$routeParams', 'News',
  function($scope, $routeParams, News) {
    $scope.news = News.query({newsId: $routeParams.newsId});
  }]);
  
})();