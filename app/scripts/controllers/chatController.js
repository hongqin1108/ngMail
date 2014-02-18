angular.module('ngMail.controllers.chatController', [])
	.controller('ChatController', ['$scope', 'ChatService', '$firebaseSimpleLogin',
		function ($scope, ChatService, $firebaseSimpleLogin) {
			$scope.auth = $firebaseSimpleLogin(ChatService.ref, function (error, user) {
				$scope.user = user;
			});
			$scope.messages = ChatService.messages;
			$scope.addMessage = function () {
				$scope.messages.$add({from: $scope.user.name, content: $scope.message});
				$scope.message = "";
			};
		}]);