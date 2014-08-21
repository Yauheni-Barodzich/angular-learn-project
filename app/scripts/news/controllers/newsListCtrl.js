(function () {
'use strict';

var newsFrontendControllers = angular.module('newsFrontendControllers', []);

	newsFrontendControllers.controller('NewsListCtrl', ['$scope', 'News',
	  function($scope, News) {
		$scope.arrowNews = News.get();
		
	}]);

	newsFrontendControllers.controller('NewsListRestCtrl', ['$scope', 'RestNews',
	  function($scope, RestNews) {
		
		$scope.arrowNews = RestNews.get();
		
	}]);

	newsFrontendControllers.controller('NewsDetailCtrl', ['$scope', 'News', 'RestNews',
	  function($scope, News, RestNews) {

	  	$scope.newsDetail = {};
	  
		var newsDetail = News.get({id: '1478905265'});

		$scope.newsDetail.title = 'test';
		
		$scope.news = newsDetail;
		console.log(newsDetail);
	}]);

})();