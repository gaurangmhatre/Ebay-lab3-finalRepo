userProfile.controller('accountDetailsController',function($scope, $filter,$http){
	
	$scope.invalid_login = true;
	$scope.unexpected_error = true;

		console.log("inside accountDetails controller");
	
		console.log("userId:: " + $scope.userId)
	
		
		$http({
			method : "POST",
			url : '/getUserAccountDetails',
			data : {
				"userId": $scope.userId //pass userId via session.
			}
		}).success(function(data) {
			console.log("inside success");
			console.log("data is ::");
			console.log(data);
			
			
			$scope.UserId = data[0].userid;
			$scope.FirstName = data[0].firstname;
			$scope.LastName = data[0].lastname;
			$scope.EmailId = data[0].emailid;
			$scope.Address = data[0].address;
			$scope.CreditCardNumber = data[0].creditcardnumber;
			$scope.DateOfBirth = $filter('date')(data[0].dateofbirth, 'yyyy-MM-dd');
			$scope.LastLoggedIn = $filter('date')(data[0].lastloggedin[data[0].lastloggedin.length-1], 'yyyy-MM-dd hh:mm:ss');
			//set all variables.
				 
		}).error(function(error) {
			console.log("inside error");
			console.log(error);
			$scope.unexpected_error = false;
			$scope.invalid_login = true;
			$window.alert("unexpected_error");
		});

});