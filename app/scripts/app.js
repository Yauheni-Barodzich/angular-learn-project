(function () {
    'use strict';
	
    angular.module('newsFrontendApp', [
		'trainingnews'
    ])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/content', {
				templateUrl: 'views/components/news-item.html',
				controller: 'NewsListCtrl'
			}).
			when('/news-rest', {
				templateUrl: 'views/components/news-item.html',
				controller: 'NewsListRestCtrl'
			}).
			when('/content/:newsId', {
				templateUrl: 'views/components/news-detail.html',
				controller: 'NewsDetailCtrl'
			}).
			otherwise({
				redirectTo: '/content',
			});
	  }]);
})();