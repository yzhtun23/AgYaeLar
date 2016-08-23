angular
.module('agyaelar',[])
.controller('searchcontrol',function($scope, $http) {

	$scope.allyears="";
	$scope.firstyear="";
	$scope.student="";

	var refresh=function(){
		$http.get('/firstyear/').success(function(response){
			console.log("Got data");
			$scope.firstyear=response;
			$scope.student=$scope.firstyear;
		});
	};
	refresh();
	$scope.find=function(roll_no){

		console.log(roll_no);
		var res = roll_no.charAt(0);
		switch(res)
		{
			case '1':
			document.getElementById("th1").innerHTML = "Myanmar";
			document.getElementById("th2").innerHTML = "English";
			document.getElementById("th3").innerHTML = "Physics";
			document.getElementById("th4").innerHTML = "101";
			document.getElementById("th5").innerHTML = "102";
			document.getElementById("th6").innerHTML = "103";
			document.getElementById("th7").innerHTML = "104";
			break;
			case '2':
			document.getElementById("th1").innerHTML = "English";
			document.getElementById("th2").innerHTML = "201";
			document.getElementById("th3").innerHTML = "202";
			document.getElementById("th4").innerHTML = "203";
			document.getElementById("th5").innerHTML = "204";
			document.getElementById("th6").innerHTML = "205";
			document.getElementById("th7").innerHTML = "206";
			break;
			case '3':
			document.getElementById("th1").innerHTML = "English";
			document.getElementById("th2").innerHTML = "301";
			document.getElementById("th3").innerHTML = "302";
			document.getElementById("th4").innerHTML = "303";
			document.getElementById("th5").innerHTML = "304";
			document.getElementById("th6").innerHTML = "305";
			document.getElementById("th7").innerHTML = "306";
			break;
			case '4':
			document.getElementById("th1").innerHTML = "English";
			document.getElementById("th2").innerHTML = "401";
			document.getElementById("th3").innerHTML = "402";
			document.getElementById("th4").innerHTML = "403";
			document.getElementById("th5").innerHTML = "404";
			document.getElementById("th6").innerHTML = "405";
			document.getElementById("th7").innerHTML = "406";
			break;
		}
		$http.get('/allyears/' + $scope.roll_no).success(function(response){
			console.log(response);
			$scope.allyears= response;
			$scope.student=$scope.allyears;
		});
		//document.getElementById("jumbo").removeAttribute("hidden");
	};

});
