'use strict';
angular.module('newsFrontendApp')
	.filter('limitText', function () {
		return function (input, count) {
			input = input || '';
			if (!count || input.length <= count) {
				return input;
			}
			return input.slice(0,count).trim() + '...';
		};
	});
