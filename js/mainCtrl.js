angular.module('friendsList').controller('mainCtrl', function($scope){

    $scope.name = "Dorian";

  $scope.friends = ["Sam", "Rachel","Braden","Sven"];

$scope.addFriend = function(name){
  console.log(name);
      $scope.friends.push(name.toUpperCase());
    }





});
