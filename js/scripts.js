function triangle(){
	var sideOne = document.getElementById('sideOne').value;
	var sideTwo = document.getElementById('sideTwo').value;
	var sideThree = document.getElementById('sideThree').value;

	var sideOneTwo = parseInt(sideOne) + parseInt(sideTwo);

	if(sideOne === sideTwo && sideTwo === sideThree){
		alert("You have an equilateral triangle");
	}
	else if(sideOne === sideTwo || sideTwo === sideThree || sideOne===sideThree){
	alert("You an isosceles triangle");
	}
	else if ((sideOne + sideTwo) <= sideThree || (sideTwo +sideThree) <= sideOne || (sideOne + sideThree) <= sideTwo) {
	alert("no triangle formed");
	}
	else {
	alert("scalene triangle");
	}
}
alert(sideOneTwo);
