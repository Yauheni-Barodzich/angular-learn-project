'use strict';
angular.module('newsFrontendApp')
	.directive('newPostPopup', ['RestNews', function (Posts) {
		return {
			templateUrl: 'views/components/new-post.html',
			restrict: 'E',
			link: function postLink($scope, element, attrs) {
				element.on('hidden.bs.modal', function () {
					$scope.$apply(function () {
						$scope.resetNewPost();
						$scope.newPostForm.$setPristine();
						element.find('#image').val(null);
					});
				});
			},
			controller: function ($scope) {

				$scope.newPost = {};

				$scope.addPost = function (post) {
					Posts.addNew(post);
				};
				$scope.resetNewPost = function () {
					$scope.newPost = {};
				};
			}
		};
	}]);
