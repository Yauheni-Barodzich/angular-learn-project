(function () {
    'use strict';

    angular.module('newsFrontendApp', [
    'trainingnews'
    ])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/content', {
				templateUrl: 'views/components/news-item.html'
			}).
			when('/content/:newsId', {
				templateUrl: 'views/components/news-detail.html'
			}).
            when('/posts', {
                templateUrl: 'views/components/post-list.html',
                controller: 'PostsListCtrl'
            })
            .when('/posts/:_id', {
                templateUrl: 'views/components/post-detail.html',
                controller: 'PostPageCtrl'
            })
            .otherwise({
				redirectTo: '/content'
			});
	    }]);
})();