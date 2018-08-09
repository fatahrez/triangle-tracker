function triangle(){
	var A/*sideOne*/ = parseInt(document.getElementById('sideOne').value);
	var B/*sideTwo*/ = parseInt(document.getElementById('sideTwo').value);
	var C/*sideThree*/ = parseInt(document.getElementById('sideThree').value);

	var AB = A + B;
	var AC = A + C;
	var BC = B + C;


	 if ((AB < C) || (AC < B) || (BC < A)) {
		 alert("no triangle formed");
	}
	else if(A === B && B === C){
		alert("You have an equilateral triangle");
	}

	else if(A === B || B === C || A===C){
		alert("You an isosceles triangle");
	}
	else {
		alert("scalene triangle");
	}
}
