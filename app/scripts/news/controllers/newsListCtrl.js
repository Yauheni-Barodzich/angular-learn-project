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

	newsFrontendControllers.controller('NewsDetailCtrl', ['$scope', 'News', 'RnewsFrontendControllers.controller('PostsListCtrl', ['$scope', 'RestNews', '$location', function ($scope, Posts, $location) {
        $scope.posts = [];
        Posts.bindPosts($scope.posts);
        $scope.limitText = 100;

        $scope.postClick = function(id) {
            $location.path('/posts/' + id);
        };
    }]);

    newsFrontendControllers.controller('PostPageCtrl', ['$scope', '$routeParams', 'RestNews', function ($scope, $routeParams, Posts) {
        Posts.get({_id: $routeParams._id}).$promise.then(function (_post) {
            $scope.post = _post;
        });
    }]);k = function(id) {
            $location.path('/posts/' + id);
        };
    }]);

    newsFrontendControllers.controller('PostPageCtrl', ['$scope', '$routeParams', 'RestNews', function ($scope, $routeParams, Posts) {
        Posts.get({_id: $routeParams._id}).$promise.then(function (_post) {
            $scope.post = _post;
        });
    }]);

})();