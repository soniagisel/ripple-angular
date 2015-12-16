app.controller('toDoCtrl', function($scope) {
    $scope.todos = [];
    $scope.done = function(todo) {
    	var indexOf = $scope.todos.indexOf(todo);
    	if (indexOf !== -1) {
    		$scope.todos.splice(indexOf, 1);
    	};
    };
    $scope.add = function(e) {
    	if (e.which && e.which === 13) {
    		$scope.todos.push($scope.newTodo);
    		$scope.newTodo = " ";
    	};
    };
});


app.controller('notesCtrl', function($scope) {
	$scope.notes = [];
	$scope.erase = function(note) {
		var indexOf = $scope.notes.indexOf(note);
		if (indexOf !== -1) {
			$scope.notes.splice(indexOf, 1);
		};
	};

	$scope.add = function(e) {
		if (e.which && e.which === 13) {
			$scope.notes.push($scope.newNote);
			$scope.newNote = " ";
		};
	}
});


app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'tmp/landing.html',
		controller  : 'landingCtrl'
	})
	.when('/todos', {
		templateUrl : 'tmp/todos.html',
        controller  : 'toDoCtrl'
	})
	.when('/notes', {
		templateUrl : 'tmp/notes.html',
		controller  : 'notesCtrl'
	})
})