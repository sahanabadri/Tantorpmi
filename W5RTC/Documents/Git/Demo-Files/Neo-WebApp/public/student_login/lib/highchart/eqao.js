localStorage.setItem("q1Actual", "D");
localStorage.setItem("q2Actual", "A");
localStorage.setItem("q3Actual", "D");
localStorage.setItem("q4Actual", "B");
localStorage.setItem("q5Actual", "D");
localStorage.setItem("q6Actual", "A");
localStorage.setItem("q7Actual", "4");
localStorage.setItem("q9Actual", "C");
localStorage.setItem("q10Actual", "D");
localStorage.setItem("q11Actual", "C");
localStorage.setItem("q12Actual", "C");
localStorage.setItem("q13Actual", "B");
localStorage.setItem("testScore", "");

function setupStorage() {
	if (localStorage.getItem("firstName") === null) {
		localStorage.setItem("firstName", "");
		localStorage.setItem("lastName", "");
		localStorage.setItem("studentID", "");
		localStorage.setItem("q1Answer", "");
		localStorage.setItem("q2Answer", "");
		localStorage.setItem("q3Answer", "");
		localStorage.setItem("q4Answer", "");
		localStorage.setItem("q5Answer", "");
		localStorage.setItem("q6Answer", "");
		localStorage.setItem("q7Answer", "");
		localStorage.setItem("q9Answer", "");
		localStorage.setItem("q10Answer", "");
		localStorage.setItem("q11Answer", "");
		localStorage.setItem("q12Answer", "");
		localStorage.setItem("q13Answer", "");
	}
}
		
function updateFirstName() {
	var a1 = document.getElementById("studentFirst").value;
	localStorage.setItem("firstName", a1);
}

function updateLastName() {
	var a2 = document.getElementById("studentLast").value;
	localStorage.setItem("lastName", a2);
}

function updateStudentID() {
	var a3 = document.getElementById("studentID").value;
	localStorage.setItem("studentID", a3);
}

function question1() {
	var q1 = $('input[name=radio-choice-1]:checked').val();
	localStorage.setItem("q1Answer", q1);
}

function question2() {
	var q2 = $('input[name=radio-choice-2]:checked').val();
	localStorage.setItem("q2Answer", q2);
}

function question3() {
	var q3 = $('input[name=radio-choice-3]:checked').val();
	localStorage.setItem("q3Answer", q3);
}

function question4() {
	var q4 = $('input[name=radio-choice-4]:checked').val();
	localStorage.setItem("q4Answer", q4);
}

function question5() {
	var q5 = $('input[name=radio-choice-5]:checked').val();
	localStorage.setItem("q5Answer", q5);
}

function question6() {
	var q6 = $('input[name=radio-choice-6]:checked').val();
	localStorage.setItem("q6Answer", q6);
}

function question7() {
	var q7 = $('input[name=text-q7]').val();
	localStorage.setItem("q7Answer", q7);
}

function question9() {
	var q9 = $('input[name=radio-choice-9]:checked').val();
	localStorage.setItem("q9Answer", q9);
}

function question10() {
	var q10 = $('input[name=radio-choice-10]:checked').val();
	localStorage.setItem("q10Answer", q10);
}

function question11() {
	var q11 = $('input[name=radio-choice-11]:checked').val();
	localStorage.setItem("q11Answer", q11);
}

function question12() {
	var q12 = $('input[name=radio-choice-12]:checked').val();
	localStorage.setItem("q12Answer", q12);
}

function question13() {
	var q13 = $('input[name=radio-choice-13]:checked').val();
	localStorage.setItem("q13Answer", q13);
}

function resetAnswers() {
	localStorage.q1Answer = "";
	localStorage.q2Answer = "";
	localStorage.q3Answer = "";
	localStorage.q4Answer = "";
	localStorage.q5Answer = "";
	localStorage.q6Answer = "";
	localStorage.q7Answer = "";
	localStorage.q9Answer = "";
	localStorage.q10Answer = "";
	localStorage.q11Answer = "";
	localStorage.q12Answer = "";
	localStorage.q13Answer = "";
}

$(document).on("pagecreate",function(){
	document.getElementById("studentFirst").value = localStorage.firstName;
	document.getElementById("studentLast").value = localStorage.lastName;
	document.getElementById("studentID").value = localStorage.studentID;
});

function gradeTest() {
	var score = 0
	
	if (localStorage.q1Answer == localStorage.q1Actual) {
		score = score + 1;
	};
	
	if (localStorage.q2Answer == localStorage.q2Actual) {
		score = score + 1;
	};
	
	if (localStorage.q3Answer == localStorage.q3Actual) {
		score = score + 1;
	};
	
	if (localStorage.q4Answer == localStorage.q4Actual) {
		score = score + 1;
	};
	
	if (localStorage.q5Answer == localStorage.q5Actual) {
		score = score + 1;
	};
	
	if (localStorage.q6Answer == localStorage.q6Actual) {
		score = score + 1;
	};
	
	if (localStorage.q7Answer == localStorage.q7Actual) {
		score = score + 1;
	};
	
	if (localStorage.q9Answer == localStorage.q9Actual) {
		score = score + 1;
	};
	
	if (localStorage.q10Answer == localStorage.q10Actual) {
		score = score + 1;
	};
	
	if (localStorage.q11Answer == localStorage.q11Actual) {
		score = score + 1;
	};
	
	if (localStorage.q12Answer == localStorage.q12Actual) {
		score = score + 1;
	};
	
	if (localStorage.q13Answer == localStorage.q13Actual) {
		score = score + 1;
	};
	
	localStorage.testScore = score;
}

function setLevel() {
	var perCent = localStorage.testScore / 12 * 100;
	
	if (perCent >=0 && perCent < 50) {
		document.getElementById("level1").className = "levelVisible";
		document.getElementById("level2").className = "levelInvisible";
		document.getElementById("level3").className = "levelInvisible";
		document.getElementById("level4").className = "levelInvisible";
	}
	else if (perCent >=50 && perCent < 65) {
		document.getElementById("level1").className = "levelInvisible";
 		document.getElementById("level2").className = "levelVisible";
 		document.getElementById("level3").className = "levelInvisible";
		document.getElementById("level4").className = "levelInvisible";
	}
	else if (perCent >=65 && perCent < 80) {
		document.getElementById("level1").className = "levelInvisible";
 		document.getElementById("level2").className = "levelInvisible";
 		document.getElementById("level3").className = "levelVisible";
		document.getElementById("level4").className = "levelInvisible";
	}
	else if (perCent >80) {
		document.getElementById("level1").className = "levelInvisible";
 		document.getElementById("level2").className = "levelInvisible";
 		document.getElementById("level3").className = "levelInvisible";
		document.getElementById("level4").className = "levelVisible";
	};
	
	if (localStorage.q1Answer == localStorage.q1Actual) {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
	}
	else if (localStorage.q1Answer != localStorage.q1Actual) {
		document.getElementById("q1right").className = "levelInvisible";
		document.getElementById("q1wrong").className = "levelVisible";
	};
	
	if (localStorage.q2Answer == localStorage.q2Actual) {
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
	}
	else if (localStorage.q2Answer != localStorage.q2Actual) {
		document.getElementById("q2right").className = "levelInvisible";
		document.getElementById("q2wrong").className = "levelVisible";
	};

	if (localStorage.q3Answer == localStorage.q3Actual) {
		document.getElementById("q3right").className = "levelVisible";
		document.getElementById("q3wrong").className = "levelInvisible";
	}
	else if (localStorage.q3Answer != localStorage.q3Actual) {
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
	};

	if (localStorage.q4Answer == localStorage.q4Actual) {
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
	}
	else if (localStorage.q4Answer != localStorage.q4Actual) {
		document.getElementById("q4right").className = "levelInvisible";
		document.getElementById("q4wrong").className = "levelVisible";
	};

	if (localStorage.q5Answer == localStorage.q5Actual) {
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
	}
	else if (localStorage.q5Answer != localStorage.q5Actual) {
		document.getElementById("q5right").className = "levelInvisible";
		document.getElementById("q5wrong").className = "levelVisible";
	};

	if (localStorage.q6Answer == localStorage.q6Actual) {
		document.getElementById("q6right").className = "levelVisible";
		document.getElementById("q6wrong").className = "levelInvisible";
	}
	else if (localStorage.q6Answer != localStorage.q6Actual) {
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
	};

	if (localStorage.q7Answer == localStorage.q7Actual) {
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
	}
	else if (localStorage.q7Answer != localStorage.q7Actual) {
		document.getElementById("q7right").className = "levelInvisible";
		document.getElementById("q7wrong").className = "levelVisible";
	};

	if (localStorage.q9Answer == localStorage.q9Actual) {
		document.getElementById("q9right").className = "levelVisible";
		document.getElementById("q9wrong").className = "levelInvisible";
	}
	else if (localStorage.q9Answer != localStorage.q9Actual) {
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
	};

	if (localStorage.q10Answer == localStorage.q10Actual) {
		document.getElementById("q10right").className = "levelVisible";
		document.getElementById("q10wrong").className = "levelInvisible";
	}
	else if (localStorage.q10Answer != localStorage.q10Actual) {
		document.getElementById("q10right").className = "levelInvisible";
		document.getElementById("q10wrong").className = "levelVisible";
	};

	if (localStorage.q11Answer == localStorage.q11Actual) {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
	}
	else if (localStorage.q11Answer != localStorage.q11Actual) {
		document.getElementById("q11right").className = "levelInvisible";
		document.getElementById("q11wrong").className = "levelVisible";
	};

	if (localStorage.q12Answer == localStorage.q12Actual) {
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
	}
	else if (localStorage.q12Answer != localStorage.q12Actual) {
		document.getElementById("q12right").className = "levelInvisible";
		document.getElementById("q12wrong").className = "levelVisible";
	};
	
	if (localStorage.q13Answer == localStorage.q13Actual) {
		document.getElementById("q13right").className = "levelVisible";
		document.getElementById("q13wrong").className = "levelInvisible";
	}
	else if (localStorage.q13Answer != localStorage.q13Actual) {
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
	};

}




