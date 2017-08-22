var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	 console.log("In myController");

	 $scope.newmovie = {};
	 $scope.clickedmovie = {};

	 $scope.movies = [{Title:"300", Duration:"1.45",Actors :"Jhon",Director :"Oliver"}];
	  

	$scope.savemovie = function(){
	 $scope.movies.push($scope.newmovie);
	 $scope.newmovie = {};
	};

	$scope.selectmovie = function(movie){
		console.log(movie);
		$scope.clickedmovie = movie;
	};
	$scope.updatemovie= function(){

	};

	$scope.deleteMovie = function (Title) {

				if (confirm("sure to delete")) {
					for (counter in $scope.movies) {
							if ($scope.movies[counter].Title == Title) {
									$scope.movies.splice(counter, 1);
							}
    }
		}
			if ($scope.newmovie.Title == Title) $scope.newmovie = {};
			console.log($scope.movies);
	}

});
