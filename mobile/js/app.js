// Initialize the Parse object first.
Parse.initialize("fyDP4zl5WB5CxosiOccG8uAA90xhA48nipoX36oo", "Vq7qc3pqWdM7OfNHZ2gwXWHrIq7ydLBaOSEMLkxe");

var SporkitApp = angular.module('SporkitApp', ['SporkitServiceModule', 'SporkitControllerModule', 'SporkitDirectiveModule']);
SporkitApp.run(function($rootScope) {
    window.fbAsyncInit = function() {
        //Once the Facebook JavaScript SDK is loaded, initialize FB and Parse.FacebookUtils

        Parse.FacebookUtils.init({
            appId : '491653977599476',
            status : true,
            cookie : true,
            xfbml : true
        });

        FB.getLoginStatus(function(response) {
            $rootScope.$broadcast('get-fb-login-status', response);
        });

    }; ( function(d) {
            var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }(document));
});

SporkitApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'views/MyPlate.html'
    }).when('/myplate', {
        templateUrl : 'views/MyPlate.html'
    }).when('/takephoto', {
        templateUrl : 'views/TakePhoto.html'
    }).when('/search', {
        templateUrl : 'views/Search.html'
    }).when('/profile', {
        templateUrl : 'views/Profile.html'
    });
}); 

angular.element(document).ready(function(){
    angular.bootstrap($(document.body), ['SporkitApp']);
});
