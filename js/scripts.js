function triangle(){
	var sideOne = document.getElementById('sideOne').value;//parseFloat(prompt("enter length of the first side of triangle"));
	var sideTwo = document.getElementById('sideTwo').value;//parseFloat(prompt("enter length of the second side of triangle"));
	var sideThree = document.getElementById('sideThree').value;//parseFloat(prompt("enter length of the third side of triangle"));


	if(sideOne === sideTwo && sideTwo === sideThree){
		alert("You have an equilateral triangle");
	}
	else if(sideOne === sideTwo || sideTwo === sideThree || sideOne===sideThree){
	alert("You an isosceles triangle");
	}
	else if (sideOne + sideTwo < sideThree || sideTwo +sideThree < sideOne || sideOne + sideThree < sideTwo) {
	alert("no triangle formed");
	}
	else{
	alert("you have an scalene triangle");
	}
}
