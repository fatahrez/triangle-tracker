function triangle(){
	var A/*sideOne*/ = parseFloat(document.getElementById('sideOne').value);
	var B/*sideTwo*/ = parseFloat(document.getElementById('sideTwo').value);
	var C/*sideThree*/ = parseFloat(document.getElementById('sideThree').value);

	var AB = A + B;
	var AC = A + C;
	var BC = B + C;


	 if ((AB < C) || (AC < B) || (BC < A)) {
		 alert("There is no triangle formed");
	}
	else if(A === B && B === C){
		alert("You have an equilateral triangle");
	}

	else if(A === B || B === C || A===C){
		alert("You have an isosceles triangle");
	}
	else {
		alert("Scalene triangle formed");
	}
}
