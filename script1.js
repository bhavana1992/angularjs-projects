var app;
app = angular.module("app", ["ngStorage"]);
app.controller("MaintCtrl", function($scope, $localStorage) {
 // this.greeting = "This is a localstorage demo app";
  //this.value = LS.getData();
  //this.latestData = function() {
   // return LS.getData();
  //};
  $scope.update = function(value) {
    Current LocalStorage value is = $localStorage.setData(value);
  };
});
//app.factory("LS", function($window, $rootScope) {
 // return {
   // setData: function(val) {
     // $window.localStorage && $window.localStorage.setItem('my-storage', val);
     // return this;
   // },
   // getData: function() {
     // return $window.localStorage && $window.localStorage.getItem('my-storage');
   // }
  //};
//});
