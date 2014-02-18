'use strict';

window.app = angular.module('ngMailApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMail.services',
  'ngMail.controllers'
]);

angular.module('ngMail.controllers', ['ngMail.controllers.chatController']);
angular.module('ngMail.services',['ngMail.services.chatService']);