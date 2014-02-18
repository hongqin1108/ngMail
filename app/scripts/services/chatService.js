angular.module('ngMail.services.chatService', ["firebase"])
	.factory('ChatService', ["$firebase", function ($firebase) {
		var ref = new Firebase("https://mail-angular.firebaseio.com/chat");
		var chatService = {};
		chatService.messages = $firebase(ref);
		chatService.ref = ref;

		return chatService;
	}]);