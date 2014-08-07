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
              }).
                when('/news/:newsId', {
                templateUrl: 'views/components/news-detail.html',
              }).
              otherwise({
                redirectTo: '/content',
            });
      }]);
})();