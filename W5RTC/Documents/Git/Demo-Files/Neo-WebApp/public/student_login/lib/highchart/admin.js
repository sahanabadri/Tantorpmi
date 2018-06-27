var tDate1;
var tDate2;
var tDate3;
var tDate4;
var tDate5;
var tDate6;
var tDate7;
var tDate8;
var tDate9;
var tDate10;
var tDate11;
var tDate12;
var tDate13;
var tDate14;
var tDate15;

var tStudent1;
var tStudent2;
var tStudent3;
var tStudent4;
var tStudent5;
var tStudent6;
var tStudent7;
var tStudent8;
var tStudent9;
var tStudent10;
var tStudent11;
var tStudent12;
var tStudent13;
var tStudent14;
var tStudent15;
var tStudent16;
var tStudent17;
var tStudent18;
var tStudent19;
var tStudent20;

var tClass1;
var tClass2;
var tClass3;
var tClass4;
var tClass5;
var tClass6;
var tClass7;
var tClass8;
var tClass9;
var tClass10;
var tClass11;
var tClass12;
var tClass13;
var tClass14;
var tClass15;
var tClass16;
var tClass17;
var tClass18;
var tClass19;
var tClass20;

var tDrill1;
var tDrill2;
var tDrill3;
var tDrill4;
var tDrill5;
var tDrill6;
var tDrill7;
var tDrill8;
var tDrill9;
var tDrill10;
var tDrill11;
var tDrill12;
var tDrill13;
var tDrill14;
var tDrill15;
var tDrill16;
var tDrill17;
var tDrill18;
var tDrill19;
var tDrill20;
var tDrill21;
var tDrill22;
var tDrill23;
var tDrill24;
var tDrill25;
var tDrill26;
var tDrill27;
var tDrill28;
var tDrill29;
var tDrill30;
var tDrill31;
var tDrill32;
var tDrill33;
var tDrill34;
var tDrill35;
var tDrill36;
var tDrill37;
var tDrill38;
var tDrill39;
var tDrill40;
var tDrill41;
var tDrill42;
var tDrill43;
var tDrill44;
var tDrill45;
var tDrill46;
var tDrill47;
var tDrill48;
var tDrill49;
var tDrill50;
var tDrill51;
var tDrill52;
var tDrill53;
var tDrill54;
var tDrill55;
var tDrill56;
var tDrill57;
var tDrill58;
var tDrill59;
var tDrill60;

var tSubTitle;
var tTestArray;
var classArray;

var tCat1_1;
var tCat1_2;
var tCat1_3;
var tCat1_4;
var tCat1_5;
var tCat1_6;
var tCat1_7;
var tCat1_8;
var tCat1_9;
var tCat1_10;
var tCat1_11;
var tCat1_12;
var tCat1_13;
var tCat1_14;
var tCat1_15;

var tCat2_1;
var tCat2_2;
var tCat2_3;
var tCat2_4;
var tCat2_5;
var tCat2_6;
var tCat2_7;
var tCat2_8;
var tCat2_9;
var tCat2_10;
var tCat2_11;
var tCat2_12;
var tCat2_13;
var tCat2_14;
var tCat2_15;

var tCat3_1;
var tCat3_2;
var tCat3_3;
var tCat3_4;
var tCat3_5;
var tCat3_6;
var tCat3_7;
var tCat3_8;
var tCat3_9;
var tCat3_10;
var tCat3_11;
var tCat3_12;
var tCat3_13;
var tCat3_14;
var tCat3_15;

var TDA = ["S11","S18","S25","O2","O9","O16","O23","O30","N6","N13","N20","N27","D4","D11","D18"];
var stuName;
var chrtWidth;
var useSelectedDate;

function login() {
	var a1 = document.getElementById("un").value;
	sessionStorage.setItem("userName", a1);

	if (sessionStorage.userName == "teacher") {
		loadData();
		document.getElementById("loginButton").href = "eqao_teacher1.html";
	}
	else if (sessionStorage.userName == "principal") {
		loadData();
		initialSelectionsP();
		document.getElementById("loginButton").href = "eqao_principal1.html";
	}
	else if (sessionStorage.userName == "board") {
		loadData();
		document.getElementById("loginButton").href = "board1.html";
	}
	else if (sessionStorage.userName == "ministry") {
		loadData();
		document.getElementById("loginButton").href = "ministry1.html";
	}
	else {
		alert("You must enter a valid user name!");
	}
}

function identifyUser() {
	document.getElementById("headerUserID").innerHTML = "Login: " + sessionStorage.userName;
}

function initialSelectionsP() {
	sessionStorage.setItem("selectGrade", "8");
}

function chartPoints() {
	tDate1 = Number(sessionStorage["S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate2 = Number(sessionStorage["S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate3 = Number(sessionStorage["S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate4 = Number(sessionStorage["O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate5 = Number(sessionStorage["O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate6 = Number(sessionStorage["O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate7 = Number(sessionStorage["O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate8 = Number(sessionStorage["O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate9 = Number(sessionStorage["N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate10 = Number(sessionStorage["N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate11 = Number(sessionStorage["N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate12 = Number(sessionStorage["N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate13 = Number(sessionStorage["D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate14 = Number(sessionStorage["D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	tDate15 = Number(sessionStorage["D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "Avg"]);
	
	whichClass();
	chart2Points();
	chart3Points();
	chart4Points();
}

function chart2Points() {
	for (var i = 0; i < TDA.length; i++) {
		var a = TDA[i];
		var c = 0;
		for (var j = 0; j < classArray.length; j++) {
			var b = a + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "ST" + classArray[j] + "cat1";
			c = c + Number(sessionStorage[b]);
		};
		
		if (i == 0) {tCat1_1 = c / 200 * 100}
		else if (i == 1) {tCat1_2 = c / 200 * 100}
		else if (i == 2) {tCat1_3 = c / 200 * 100}
		else if (i == 3) {tCat1_4 = c / 200 * 100}
		else if (i == 4) {tCat1_5 = c / 200 * 100}
		else if (i == 5) {tCat1_6 = c / 200 * 100}
		else if (i == 6) {tCat1_7 = c / 200 * 100}
		else if (i == 7) {tCat1_8 = c / 200 * 100}
		else if (i == 8) {tCat1_9 = c / 200 * 100}
		else if (i == 9) {tCat1_10 = c / 200 * 100}
		else if (i == 10) {tCat1_11 = c / 200 * 100}
		else if (i == 11) {tCat1_12 = c / 200 * 100}
		else if (i == 12) {tCat1_13 = c / 200 * 100}
		else if (i == 13) {tCat1_14 = c / 200 * 100}
		else {tCat1_15 = c / 200 * 100};
	};
}

function chart3Points() {
	for (var i = 0; i < TDA.length; i++) {
		var a = TDA[i];
		var c = 0;

		for (var j = 0; j < classArray.length; j++) {
			var b = a + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "ST" + classArray[j] + "cat2";
			c = c + Number(sessionStorage[b]);
		};
		
		if (i == 0) {tCat2_1 = c / 200 * 100}
		else if (i == 1) {tCat2_2 = c / 200 * 100}
		else if (i == 2) {tCat2_3 = c / 200 * 100}
		else if (i == 3) {tCat2_4 = c / 200 * 100}
		else if (i == 4) {tCat2_5 = c / 200 * 100}
		else if (i == 5) {tCat2_6 = c / 200 * 100}
		else if (i == 6) {tCat2_7 = c / 200 * 100}
		else if (i == 7) {tCat2_8 = c / 200 * 100}
		else if (i == 8) {tCat2_9 = c / 200 * 100}
		else if (i == 9) {tCat2_10 = c / 200 * 100}
		else if (i == 10) {tCat2_11 = c / 200 * 100}
		else if (i == 11) {tCat2_12 = c / 200 * 100}
		else if (i == 12) {tCat2_13 = c / 200 * 100}
		else if (i == 13) {tCat2_14 = c / 200 * 100}
		else {tCat2_15 = c / 200 * 100};
	};
}

function chart4Points() {
	for (var i = 0; i < TDA.length; i++) {
		var a = TDA[i];
		var c = 0;

		for (var j = 0; j < classArray.length; j++) {
			var b = a + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "ST" + classArray[j] + "cat3";
			c = c + Number(sessionStorage[b]);
		};
		
		if (i == 0) {tCat3_1 = c / 200 * 100}
		else if (i == 1) {tCat3_2 = c / 200 * 100}
		else if (i == 2) {tCat3_3 = c / 200 * 100}
		else if (i == 3) {tCat3_4 = c / 200 * 100}
		else if (i == 4) {tCat3_5 = c / 200 * 100}
		else if (i == 5) {tCat3_6 = c / 200 * 100}
		else if (i == 6) {tCat3_7 = c / 200 * 100}
		else if (i == 7) {tCat3_8 = c / 200 * 100}
		else if (i == 8) {tCat3_9 = c / 200 * 100}
		else if (i == 9) {tCat3_10 = c / 200 * 100}
		else if (i == 10) {tCat3_11 = c / 200 * 100}
		else if (i == 11) {tCat3_12 = c / 200 * 100}
		else if (i == 12) {tCat3_13 = c / 200 * 100}
		else if (i == 13) {tCat3_14 = c / 200 * 100}
		else {tCat3_15 = c / 200 * 100};
	};
}

function initialChart() {
	chartPoints();
    $('#container').highcharts({
        chart: {type: 'column'},
        title: {text: 'Average Assessment Scores. September to December 2015'},
        subtitle: {text: 'Click the columns to view score details'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}},
        legend: {enabled: false},
        plotOptions: {series: { cursor: 'pointer',borderWidth: 0,dataLabels: {enabled: true,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Class Average",
            colorByPoint: false,
            
            data: [{name: "Sep 11", y: tDate1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}}, 
            	   {name: "Sep 18", y: tDate2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Sep 25", y: tDate3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Oct 2", y: tDate4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Oct 9", y: tDate5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Oct 16", y: tDate6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Oct 23", y: tDate7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Oct 30", y: tDate8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Nov 6", y: tDate9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Nov 13", y: tDate10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Nov 20", y: tDate11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Nov 27", y: tDate12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Dec 4", y: tDate13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Dec 11", y: tDate14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}},
            	   {name: "Dec 18", y: tDate15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");currentSelections();window.open("http://neols.com/eqao_teacher2.html","_self")}}}]
        }],
		/*restore point*/	
    });
	smallChart2();
	smallChart3();
	smallChart4();
}

function initialSelections() {
	sessionStorage.setItem("selectGrade", "3");
	sessionStorage.setItem("selectCourse", "M");
	sessionStorage.setItem("selectClass", "C1");
	/*sessionStorage.setItem("selectTestDate", "S11");*/
	sessionStorage.setItem("TestDateArray", "S11,S18,S25,O2,O9,O16,O23,O30,N6,N13,N20,N27,D4,D11,D18");
}

function currentSelections() {
	var a2 = document.getElementById("select-custom-1").value;
	var a3 = document.getElementById("select-custom-2").value;
	var a4 = document.getElementById("select-custom-3").value;
	sessionStorage.setItem("selectGrade", a2);
	sessionStorage.setItem("selectCourse", a3);
	sessionStorage.setItem("selectClass", a4);
}

function currentSelections3() {
	var a2 = document.getElementById("courseBox").value;
	var a3 = document.getElementById("gradeBox").value;
	var a4 = document.getElementById("classBox").value;
	sessionStorage.setItem("selectGrade", a2);
	sessionStorage.setItem("selectCourse", a3);
	sessionStorage.setItem("selectClass", a4);
}

function loadData() {
	if (localStorage.getItem("S11M6C1ST1cat1") === null) {
		loadDemographic();
		loadAggregate();
		loadMath3data();
		loadMath6data();
		loadSectionData();
		loadClassArrays();
	}
}

function loadClassArrays() {
	sessionStorage.setItem("M3C1array", "1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58");
	sessionStorage.setItem("M3C2array", "2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59");
	sessionStorage.setItem("M3C3array", "3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60");
	
	sessionStorage.setItem("M6C1array", "4,6,10,12,16,18,22,24,28,30,34,36,40,42,46,48,52,54,58,60");
	sessionStorage.setItem("M6C2array", "2,3,8,9,14,15,20,21,26,27,32,33,38,39,44,45,50,51,56,57");
	sessionStorage.setItem("M6C3array", "1,5,7,11,13,17,19,23,25,29,31,35,37,41,43,47,49,53,55,59");
}

function whichClass() {
	var a = sessionStorage.selectCourse;
	var b = sessionStorage.selectGrade;
	var c = sessionStorage.selectClass;
	var d = a + b + c + "array";
	var studentTemp;
	
	if (d == "M3C1array") {
		classArray = ["1","4","7","10","13","16","19","22","25","28","31","34","37","40","43","46","49","52","55","58"];
		
		for (var i = 0; i < classArray.length; i++) {
			studentTemp = "ST" + classArray[i];
			if (i == 0) {tStudent1 = studentTemp;}
			else if (i == 1) {tStudent2 = studentTemp;}
			else if (i == 2) {tStudent3 = studentTemp;}
			else if (i == 3) {tStudent4 = studentTemp;}
			else if (i == 4) {tStudent5 = studentTemp;}
			else if (i == 5) {tStudent6 = studentTemp;}
			else if (i == 6) {tStudent7 = studentTemp;}
			else if (i == 7) {tStudent8 = studentTemp;}
			else if (i == 8) {tStudent9 = studentTemp;}
			else if (i == 9) {tStudent10 = studentTemp;}
			else if (i == 10) {tStudent11 = studentTemp;}
			else if (i == 11) {tStudent12 = studentTemp;}
			else if (i == 12) {tStudent13 = studentTemp;}
			else if (i == 13) {tStudent14 = studentTemp;}
			else if (i == 14) {tStudent15 = studentTemp;}
			else if (i == 15) {tStudent16 = studentTemp;}
			else if (i == 16) {tStudent17 = studentTemp;}
			else if (i == 17) {tStudent18 = studentTemp;}
			else if (i == 18) {tStudent19 = studentTemp;}
			else {tStudent20 = studentTemp;}
		}
	};
	
	if (d == "M3C2array") {
		classArray = ["2","5","8","11","14","17","20","23","26","29","32","35","38","41","44","47","50","53","56","59"];
		for (var i = 0; i < classArray.length; i++) {
			studentTemp = "ST" + classArray[i];
			if (i == 0) {tStudent1 = studentTemp;}
			else if (i == 1) {tStudent2 = studentTemp;}
			else if (i == 2) {tStudent3 = studentTemp;}
			else if (i == 3) {tStudent4 = studentTemp;}
			else if (i == 4) {tStudent5 = studentTemp;}
			else if (i == 5) {tStudent6 = studentTemp;}
			else if (i == 6) {tStudent7 = studentTemp;}
			else if (i == 7) {tStudent8 = studentTemp;}
			else if (i == 8) {tStudent9 = studentTemp;}
			else if (i == 9) {tStudent10 = studentTemp;}
			else if (i == 10) {tStudent11 = studentTemp;}
			else if (i == 11) {tStudent12 = studentTemp;}
			else if (i == 12) {tStudent13 = studentTemp;}
			else if (i == 13) {tStudent14 = studentTemp;}
			else if (i == 14) {tStudent15 = studentTemp;}
			else if (i == 15) {tStudent16 = studentTemp;}
			else if (i == 16) {tStudent17 = studentTemp;}
			else if (i == 17) {tStudent18 = studentTemp;}
			else if (i == 18) {tStudent19 = studentTemp;}
			else {tStudent20 = studentTemp;}
		}
	};
	
	if (d == "M3C3array") {
		classArray = ["3","6","9","12","15","18","21","24","27","30","33","36","39","42","45","48","51","54","57","60"];
		for (var i = 0; i < classArray.length; i++) {
			studentTemp = "ST" + classArray[i];
			if (i == 0) {tStudent1 = studentTemp;}
			else if (i == 1) {tStudent2 = studentTemp;}
			else if (i == 2) {tStudent3 = studentTemp;}
			else if (i == 3) {tStudent4 = studentTemp;}
			else if (i == 4) {tStudent5 = studentTemp;}
			else if (i == 5) {tStudent6 = studentTemp;}
			else if (i == 6) {tStudent7 = studentTemp;}
			else if (i == 7) {tStudent8 = studentTemp;}
			else if (i == 8) {tStudent9 = studentTemp;}
			else if (i == 9) {tStudent10 = studentTemp;}
			else if (i == 10) {tStudent11 = studentTemp;}
			else if (i == 11) {tStudent12 = studentTemp;}
			else if (i == 12) {tStudent13 = studentTemp;}
			else if (i == 13) {tStudent14 = studentTemp;}
			else if (i == 14) {tStudent15 = studentTemp;}
			else if (i == 15) {tStudent16 = studentTemp;}
			else if (i == 16) {tStudent17 = studentTemp;}
			else if (i == 17) {tStudent18 = studentTemp;}
			else if (i == 18) {tStudent19 = studentTemp;}
			else {tStudent20 = studentTemp;}
		}
	};
	
	if (d == "M6C1array") {
		classArray = ["4","6","10","12","16","18","22","24","28","30","34","36","40","42","46","48","52","54","58","60"];
		for (var i = 0; i < classArray.length; i++) {
			studentTemp = "ST" + classArray[i];
			if (i == 0) {tStudent1 = studentTemp;}
			else if (i == 1) {tStudent2 = studentTemp;}
			else if (i == 2) {tStudent3 = studentTemp;}
			else if (i == 3) {tStudent4 = studentTemp;}
			else if (i == 4) {tStudent5 = studentTemp;}
			else if (i == 5) {tStudent6 = studentTemp;}
			else if (i == 6) {tStudent7 = studentTemp;}
			else if (i == 7) {tStudent8 = studentTemp;}
			else if (i == 8) {tStudent9 = studentTemp;}
			else if (i == 9) {tStudent10 = studentTemp;}
			else if (i == 10) {tStudent11 = studentTemp;}
			else if (i == 11) {tStudent12 = studentTemp;}
			else if (i == 12) {tStudent13 = studentTemp;}
			else if (i == 13) {tStudent14 = studentTemp;}
			else if (i == 14) {tStudent15 = studentTemp;}
			else if (i == 15) {tStudent16 = studentTemp;}
			else if (i == 16) {tStudent17 = studentTemp;}
			else if (i == 17) {tStudent18 = studentTemp;}
			else if (i == 18) {tStudent19 = studentTemp;}
			else {tStudent20 = studentTemp;}
		}
	};
	
	if (d == "M6C2array") {
		classArray = ["2","3","8","9","14","15","20","21","26","27","32","33","38","39","44","45","50","51","56","57"];
		for (var i = 0; i < classArray.length; i++) {
			studentTemp = "ST" + classArray[i];
			if (i == 0) {tStudent1 = studentTemp;}
			else if (i == 1) {tStudent2 = studentTemp;}
			else if (i == 2) {tStudent3 = studentTemp;}
			else if (i == 3) {tStudent4 = studentTemp;}
			else if (i == 4) {tStudent5 = studentTemp;}
			else if (i == 5) {tStudent6 = studentTemp;}
			else if (i == 6) {tStudent7 = studentTemp;}
			else if (i == 7) {tStudent8 = studentTemp;}
			else if (i == 8) {tStudent9 = studentTemp;}
			else if (i == 9) {tStudent10 = studentTemp;}
			else if (i == 10) {tStudent11 = studentTemp;}
			else if (i == 11) {tStudent12 = studentTemp;}
			else if (i == 12) {tStudent13 = studentTemp;}
			else if (i == 13) {tStudent14 = studentTemp;}
			else if (i == 14) {tStudent15 = studentTemp;}
			else if (i == 15) {tStudent16 = studentTemp;}
			else if (i == 16) {tStudent17 = studentTemp;}
			else if (i == 17) {tStudent18 = studentTemp;}
			else if (i == 18) {tStudent19 = studentTemp;}
			else {tStudent20 = studentTemp;}
		}
	};
	
	if (d == "M6C3array") {
		classArray = ["1","5","7","11","13","17","19","23","25","29","31","35","37","41","43","47","49","53","55","59"];
		for (var i = 0; i < classArray.length; i++) {
			studentTemp = "ST" + classArray[i];
			if (i == 0) {tStudent1 = studentTemp;}
			else if (i == 1) {tStudent2 = studentTemp;}
			else if (i == 2) {tStudent3 = studentTemp;}
			else if (i == 3) {tStudent4 = studentTemp;}
			else if (i == 4) {tStudent5 = studentTemp;}
			else if (i == 5) {tStudent6 = studentTemp;}
			else if (i == 6) {tStudent7 = studentTemp;}
			else if (i == 7) {tStudent8 = studentTemp;}
			else if (i == 8) {tStudent9 = studentTemp;}
			else if (i == 9) {tStudent10 = studentTemp;}
			else if (i == 10) {tStudent11 = studentTemp;}
			else if (i == 11) {tStudent12 = studentTemp;}
			else if (i == 12) {tStudent13 = studentTemp;}
			else if (i == 13) {tStudent14 = studentTemp;}
			else if (i == 14) {tStudent15 = studentTemp;}
			else if (i == 15) {tStudent16 = studentTemp;}
			else if (i == 16) {tStudent17 = studentTemp;}
			else if (i == 17) {tStudent18 = studentTemp;}
			else if (i == 18) {tStudent19 = studentTemp;}
			else {tStudent20 = studentTemp;}
		}
	};
}

function drillPoints() {
	tDrill1 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "pct"]);
	tDrill2 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "pct"]);
	tDrill3 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "pct"]);
	tDrill4 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "pct"]);
	tDrill5 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "pct"]);
	tDrill6 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "pct"]);
	tDrill7 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "pct"]);
	tDrill8 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "pct"]);
	tDrill9 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "pct"]);
	tDrill10 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "pct"]);
	tDrill11 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "pct"]);
	tDrill12 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "pct"]);
	tDrill13 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "pct"]);
	tDrill14 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "pct"]);
	tDrill15 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "pct"]);
	tDrill16 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "pct"]);
	tDrill17 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "pct"]);
	tDrill18 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "pct"]);
	tDrill19 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "pct"]);
	tDrill20 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "pct"]);
}

function drillToStudent() {
	whichClass();
	drillPoints();
    $('#container').highcharts({
        chart: {type: 'column'},
        title: {text: ['Student Assessment Scores - ' + tSubTitle]},
        subtitle: {
        	text: 'Click the columns to view student score details',
        	style: {
        		fontWeight: 'bold',
        		color: '#000000'
        	}
        },
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}},
        legend: {enabled: false},
        plotOptions: { series: { cursor: 'pointer', borderWidth: 0,dataLabels: {enabled: true,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Student Averages",
            colorByPoint: false,
            
            data: [{name: sessionStorage[tStudent1 + "name"], y: tDrill1, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent1);window.open("http://neols.com/eqao_teacher3.html","_self")}}}, 
            	   {name: sessionStorage[tStudent2 + "name"], y: tDrill2, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent2);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent3 + "name"], y: tDrill3, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent3);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent4 + "name"], y: tDrill4, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent4);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent5 + "name"], y: tDrill5, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent5);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent6 + "name"], y: tDrill6, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent6);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent7 + "name"], y: tDrill7, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent7);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent8 + "name"], y: tDrill8, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent8);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent9 + "name"], y: tDrill9, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent9);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent10 + "name"], y: tDrill10, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent10);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent11 + "name"], y: tDrill11, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent11);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent12 + "name"], y: tDrill12, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent12);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent13 + "name"], y: tDrill13, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent13);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent14 + "name"], y: tDrill14, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent14);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
            	   {name: sessionStorage[tStudent15 + "name"], y: tDrill15, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent15);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
				   {name: sessionStorage[tStudent16 + "name"], y: tDrill16, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent16);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
				   {name: sessionStorage[tStudent17 + "name"], y: tDrill17, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent17);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
				   {name: sessionStorage[tStudent18 + "name"], y: tDrill18, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent18);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
				   {name: sessionStorage[tStudent19 + "name"], y: tDrill19, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent19);window.open("http://neols.com/eqao_teacher3.html","_self")}}},
				   {name: sessionStorage[tStudent20 + "name"], y: tDrill20, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent20);window.open("http://neols.com/eqao_teacher3.html","_self")}}}]
        }],
	});
}

function setChartTitles2() {
	var dateTemp = sessionStorage.selectTestDate;
	if (dateTemp == "S11")  {tSubTitle = "September 11, 2015";}
		else if (dateTemp == "S11") {tSubTitle = "September 11, 2015";}
		else if (dateTemp == "S18") {tSubTitle = "September 18, 2015";}
		else if (dateTemp == "S25") {tSubTitle = "September 25, 2015";}
		else if (dateTemp == "O2") {tSubTitle = "October 2, 2015";}
		else if (dateTemp == "O9") {tSubTitle = "October 9, 2015";}
		else if (dateTemp == "O16") {tSubTitle = "October 16, 2015";}
		else if (dateTemp == "O23") {tSubTitle = "October 23, 2015";}
		else if (dateTemp == "O30") {tSubTitle = "October 30, 2015";}
		else if (dateTemp == "N6") {tSubTitle = "November 6, 2015";}
		else if (dateTemp == "N13") {tSubTitle = "November 13, 2015";}
		else if (dateTemp == "N20") {tSubTitle = "November 20, 2015";}
		else if (dateTemp == "N27") {tSubTitle = "November 27, 2015";}
		else if (dateTemp == "D4") {tSubTitle = "December 4, 2015";}
		else if (dateTemp == "D11") {tSubTitle = "December 11, 2015";}
		else {tSubTitle = "December 18, 2015";}
}

function setButtonText2() {
	var a = "Grade " + sessionStorage.selectGrade;
	var b = "Math";
	if (sessionStorage.selectClass == "C1") {var c = "Class 1";}
	else if (sessionStorage.selectClass == "C2") {var c = "Class 2";}
	else {var c = "Class 3";};
	document.getElementById("noSelectGrade").innerHTML = a;
	document.getElementById("noSelectCourse").innerHTML = b;
	document.getElementById("noSelectClass").innerHTML = c;
}

function setButtonText3() {
	var a = sessionStorage.selectStudent + "name";
	var b = sessionStorage[a];
	var c = sessionStorage.selectStudent + "ID";
	var d = sessionStorage[c];
	document.getElementById("noSelectName").innerHTML = b;
	document.getElementById("noSelectID").innerHTML = d;
	
	document.getElementById("gradeData").innerHTML = sessionStorage.selectGrade;
	document.getElementById("courseData").innerHTML = "Math";
	document.getElementById("classData").innerHTML = sessionStorage.selectClass;
	
	var dateTemp = sessionStorage.selectTestDate;
	if (dateTemp == "S11")  {tSubTitle = "September 11, 2015";}
		else if (dateTemp == "S11") {tSubTitle = "September 11, 2015";}
		else if (dateTemp == "S18") {tSubTitle = "September 18, 2015";}
		else if (dateTemp == "S25") {tSubTitle = "September 25, 2015";}
		else if (dateTemp == "O2") {tSubTitle = "October 2, 2015";}
		else if (dateTemp == "O9") {tSubTitle = "October 9, 2015";}
		else if (dateTemp == "O16") {tSubTitle = "October 16, 2015";}
		else if (dateTemp == "O23") {tSubTitle = "October 23, 2015";}
		else if (dateTemp == "O30") {tSubTitle = "October 30, 2015";}
		else if (dateTemp == "N6") {tSubTitle = "November 6, 2015";}
		else if (dateTemp == "N13") {tSubTitle = "November 13, 2015";}
		else if (dateTemp == "N20") {tSubTitle = "November 20, 2015";}
		else if (dateTemp == "N27") {tSubTitle = "November 27, 2015";}
		else if (dateTemp == "D4") {tSubTitle = "December 4, 2015";}
		else if (dateTemp == "D11") {tSubTitle = "December 11, 2015";}
		else {tSubTitle = "December 18, 2015";};
	document.getElementById("dateData").innerHTML = tSubTitle;
	
	var e = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct";
	document.getElementById("dataScore").innerHTML = sessionStorage[e] + " %";
	
	var f = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat1";
	var g = Number(sessionStorage[f]) / 10 * 100;
	document.getElementById("cTab1").innerHTML = "Measurement Score: " + g + " %";
	
	var h = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat2";
	var i = Number(sessionStorage[h]) / 10 * 100;
	document.getElementById("cTab2").innerHTML = "Geometry & Spatial Sense: " + i + " %";
	
	var j = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat3";
	var k = Number(sessionStorage[j]) / 10 * 100;
	document.getElementById("cTab3").innerHTML = "Patterning & Algebra: " + k + " %";
}

function smallChart2() {
    $('#container2').highcharts({
        chart: {type: 'line', backgroundColor: "#603CBA"},
        title: {text: 'Measurement', style:{color: "#ffffff"}},
        xAxis: {type: 'category', style:{color: "#ffffff"}, labels: {style: {color: "#ffffff"}}},
        yAxis: {title: {text: null, style:{color: "#ffffff"}}, style:{color: "#ffffff"}, labels: {style: {color: "#ffffff"}}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%', style:{color: "#ffffff"}}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Assessment Date",
            colorByPoint: false,
            data: [{name: "S11", y: tCat1_1}, 
            	   {name: "S18", y: tCat1_2},
            	   {name: "S25", y: tCat1_3},
            	   {name: "O2", y: tCat1_4},
            	   {name: "O9", y: tCat1_5},
            	   {name: "O16", y: tCat1_6},
            	   {name: "O23", y: tCat1_7},
            	   {name: "O30", y: tCat1_8},
            	   {name: "N6", y: tCat1_9},
            	   {name: "N13", y: tCat1_10},
            	   {name: "N20", y: tCat1_11},
            	   {name: "N27", y: tCat1_12},
            	   {name: "D4", y: tCat1_13},
            	   {name: "D11", y: tCat1_14},
            	   {name: "D18", y: tCat1_15}]
        }],
    });
}

function smallChart3() {
    $('#container3').highcharts({
        chart: {type: 'line', backgroundColor: "#00A300"},
        title: {text: 'Geometry & Spatial Sense', style:{color: "#ffffff"}},
        xAxis: {type: 'category', style:{color: "#ffffff"}, labels: {style: {color: "#ffffff"}}},
        yAxis: {title: {text: null, style:{color: "#ffffff"}}, style:{color: "#ffffff"}, labels: {style: {color: "#ffffff"}}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%', style:{color: "#ffffff"}}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Assessment Date",
            colorByPoint: false,
            data: [{name: "S11", y: tCat2_1}, 
            	   {name: "S18", y: tCat2_2},
            	   {name: "S25", y: tCat2_3},
            	   {name: "O2", y: tCat2_4},
            	   {name: "O9", y: tCat2_5},
            	   {name: "O16", y: tCat2_6},
            	   {name: "O23", y: tCat2_7},
            	   {name: "O30", y: tCat2_8},
            	   {name: "N6", y: tCat2_9},
            	   {name: "N13", y: tCat2_10},
            	   {name: "N20", y: tCat2_11},
            	   {name: "N27", y: tCat2_12},
            	   {name: "D4", y: tCat2_13},
            	   {name: "D11", y: tCat2_14},
            	   {name: "D18", y: tCat2_15}]
        }],
    });
}

function smallChart4() {
    $('#container4').highcharts({
        chart: {type: 'line', backgroundColor: "#FFC40D"},
        title: {text: 'Patterning & Algebra', style:{color: "#ffffff"}},
        xAxis: {type: 'category', style:{color: "#ffffff"}, labels: {style: {color: "#ffffff"}}},
        yAxis: {title: {text: null, style:{color: "#ffffff"}}, style:{color: "#ffffff"}, labels: {style: {color: "#ffffff"}}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%', style:{color: "#ffffff"}}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Assessment Date",
            colorByPoint: false,
            data: [{name: "S11", y: tCat3_1}, 
            	   {name: "S18", y: tCat3_2},
            	   {name: "S25", y: tCat3_3},
            	   {name: "O2", y: tCat3_4},
            	   {name: "O9", y: tCat3_5},
            	   {name: "O16", y: tCat3_6},
            	   {name: "O23", y: tCat3_7},
            	   {name: "O30", y: tCat3_8},
            	   {name: "N6", y: tCat3_9},
            	   {name: "N13", y: tCat3_10},
            	   {name: "N20", y: tCat3_11},
            	   {name: "N27", y: tCat3_12},
            	   {name: "D4", y: tCat3_13},
            	   {name: "D11", y: tCat3_14},
            	   {name: "D18", y: tCat3_15}]
        }],
    });
}

function cat1Answers() {
	var a = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat1";
	var b = sessionStorage[a];

	if (b == "1") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelInvisible";
		document.getElementById("q2wrong").className = "levelVisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelInvisible";
		document.getElementById("q4wrong").className = "levelVisible";
		document.getElementById("q5right").className = "levelInvisible";
		document.getElementById("q5wrong").className = "levelVisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelInvisible";
		document.getElementById("q7wrong").className = "levelVisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
		document.getElementById("q10right").className = "levelInvisible";
		document.getElementById("q10wrong").className = "levelVisible";
	};
	
	if (b == "2") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelInvisible";
		document.getElementById("q2wrong").className = "levelVisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelInvisible";
		document.getElementById("q5wrong").className = "levelVisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelInvisible";
		document.getElementById("q7wrong").className = "levelVisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
		document.getElementById("q10right").className = "levelInvisible";
		document.getElementById("q10wrong").className = "levelVisible";
	};
	
	if (b == "3") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelInvisible";
		document.getElementById("q2wrong").className = "levelVisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelInvisible";
		document.getElementById("q5wrong").className = "levelVisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
		document.getElementById("q10right").className = "levelInvisible";
		document.getElementById("q10wrong").className = "levelVisible";
	};

	if (b == "4") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelInvisible";
		document.getElementById("q5wrong").className = "levelVisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
		document.getElementById("q10right").className = "levelInvisible";
		document.getElementById("q10wrong").className = "levelVisible";
	};

	if (b == "5") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
		document.getElementById("q10right").className = "levelInvisible";
		document.getElementById("q10wrong").className = "levelVisible";
	};
	
	if (b == "6") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelInvisible";
		document.getElementById("q9wrong").className = "levelVisible";
		document.getElementById("q10right").className = "levelVisible";
		document.getElementById("q10wrong").className = "levelInvisible";
	};
	
	if (b == "7") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelInvisible";
		document.getElementById("q3wrong").className = "levelVisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelVisible";
		document.getElementById("q9wrong").className = "levelInvisible";
		document.getElementById("q10right").className = "levelVisible";
		document.getElementById("q10wrong").className = "levelInvisible";
	};

	if (b == "8") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelVisible";
		document.getElementById("q3wrong").className = "levelInvisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelInvisible";
		document.getElementById("q8wrong").className = "levelVisible";
		document.getElementById("q9right").className = "levelVisible";
		document.getElementById("q9wrong").className = "levelInvisible";
		document.getElementById("q10right").className = "levelVisible";
		document.getElementById("q10wrong").className = "levelInvisible";
	};

	if (b == "9") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelVisible";
		document.getElementById("q3wrong").className = "levelInvisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
		document.getElementById("q6right").className = "levelInvisible";
		document.getElementById("q6wrong").className = "levelVisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelVisible";
		document.getElementById("q8wrong").className = "levelInvisible";
		document.getElementById("q9right").className = "levelVisible";
		document.getElementById("q9wrong").className = "levelInvisible";
		document.getElementById("q10right").className = "levelVisible";
		document.getElementById("q10wrong").className = "levelInvisible";
	};

	if (b == "10") {
		document.getElementById("q1right").className = "levelVisible";
		document.getElementById("q1wrong").className = "levelInvisible";
		document.getElementById("q2right").className = "levelVisible";
		document.getElementById("q2wrong").className = "levelInvisible";
		document.getElementById("q3right").className = "levelVisible";
		document.getElementById("q3wrong").className = "levelInvisible";
		document.getElementById("q4right").className = "levelVisible";
		document.getElementById("q4wrong").className = "levelInvisible";
		document.getElementById("q5right").className = "levelVisible";
		document.getElementById("q5wrong").className = "levelInvisible";
		document.getElementById("q6right").className = "levelVisible";
		document.getElementById("q6wrong").className = "levelInvisible";
		document.getElementById("q7right").className = "levelVisible";
		document.getElementById("q7wrong").className = "levelInvisible";
		document.getElementById("q8right").className = "levelVisible";
		document.getElementById("q8wrong").className = "levelInvisible";
		document.getElementById("q9right").className = "levelVisible";
		document.getElementById("q9wrong").className = "levelInvisible";
		document.getElementById("q10right").className = "levelVisible";
		document.getElementById("q10wrong").className = "levelInvisible";
	};

}

function cat2Answers() {
	var a = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat2";
	var b = sessionStorage[a];

	if (b == "1") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelInvisible";
		document.getElementById("q12wrong").className = "levelVisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelInvisible";
		document.getElementById("q14wrong").className = "levelVisible";
		document.getElementById("q15right").className = "levelInvisible";
		document.getElementById("q15wrong").className = "levelVisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelInvisible";
		document.getElementById("q17wrong").className = "levelVisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelInvisible";
		document.getElementById("q19wrong").className = "levelVisible";
		document.getElementById("q20right").className = "levelInvisible";
		document.getElementById("q20wrong").className = "levelVisible";
	};
	
	if (b == "2") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelInvisible";
		document.getElementById("q12wrong").className = "levelVisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelInvisible";
		document.getElementById("q15wrong").className = "levelVisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelInvisible";
		document.getElementById("q17wrong").className = "levelVisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelInvisible";
		document.getElementById("q19wrong").className = "levelVisible";
		document.getElementById("q20right").className = "levelInvisible";
		document.getElementById("q20wrong").className = "levelVisible";
	};
	
	if (b == "3") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelInvisible";
		document.getElementById("q12wrong").className = "levelVisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelInvisible";
		document.getElementById("q15wrong").className = "levelVisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelInvisible";
		document.getElementById("q19wrong").className = "levelVisible";
		document.getElementById("q20right").className = "levelInvisible";
		document.getElementById("q20wrong").className = "levelVisible";
	};

	if (b == "4") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelInvisible";
		document.getElementById("q15wrong").className = "levelVisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelInvisible";
		document.getElementById("q19wrong").className = "levelVisible";
		document.getElementById("q20right").className = "levelInvisible";
		document.getElementById("q20wrong").className = "levelVisible";
	};

	if (b == "5") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelVisible";
		document.getElementById("q15wrong").className = "levelInvisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelInvisible";
		document.getElementById("q19wrong").className = "levelVisible";
		document.getElementById("q20right").className = "levelInvisible";
		document.getElementById("q20wrong").className = "levelVisible";
	};
	
	if (b == "6") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelVisible";
		document.getElementById("q15wrong").className = "levelInvisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelInvisible";
		document.getElementById("q19wrong").className = "levelVisible";
		document.getElementById("q20right").className = "levelVisible";
		document.getElementById("q20wrong").className = "levelInvisible";
	};
	
	if (b == "7") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelInvisible";
		document.getElementById("q13wrong").className = "levelVisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelVisible";
		document.getElementById("q15wrong").className = "levelInvisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelVisible";
		document.getElementById("q19wrong").className = "levelInvisible";
		document.getElementById("q20right").className = "levelVisible";
		document.getElementById("q20wrong").className = "levelInvisible";
	};

	if (b == "8") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelVisible";
		document.getElementById("q13wrong").className = "levelInvisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelVisible";
		document.getElementById("q15wrong").className = "levelInvisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelInvisible";
		document.getElementById("q18wrong").className = "levelVisible";
		document.getElementById("q19right").className = "levelVisible";
		document.getElementById("q19wrong").className = "levelInvisible";
		document.getElementById("q20right").className = "levelVisible";
		document.getElementById("q20wrong").className = "levelInvisible";
	};

	if (b == "9") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelVisible";
		document.getElementById("q13wrong").className = "levelInvisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelVisible";
		document.getElementById("q15wrong").className = "levelInvisible";
		document.getElementById("q16right").className = "levelInvisible";
		document.getElementById("q16wrong").className = "levelVisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelVisible";
		document.getElementById("q18wrong").className = "levelInvisible";
		document.getElementById("q19right").className = "levelVisible";
		document.getElementById("q19wrong").className = "levelInvisible";
		document.getElementById("q20right").className = "levelVisible";
		document.getElementById("q20wrong").className = "levelInvisible";
	};

	if (b == "10") {
		document.getElementById("q11right").className = "levelVisible";
		document.getElementById("q11wrong").className = "levelInvisible";
		document.getElementById("q12right").className = "levelVisible";
		document.getElementById("q12wrong").className = "levelInvisible";
		document.getElementById("q13right").className = "levelVisible";
		document.getElementById("q13wrong").className = "levelInvisible";
		document.getElementById("q14right").className = "levelVisible";
		document.getElementById("q14wrong").className = "levelInvisible";
		document.getElementById("q15right").className = "levelVisible";
		document.getElementById("q15wrong").className = "levelInvisible";
		document.getElementById("q16right").className = "levelVisible";
		document.getElementById("q16wrong").className = "levelInvisible";
		document.getElementById("q17right").className = "levelVisible";
		document.getElementById("q17wrong").className = "levelInvisible";
		document.getElementById("q18right").className = "levelVisible";
		document.getElementById("q18wrong").className = "levelInvisible";
		document.getElementById("q19right").className = "levelVisible";
		document.getElementById("q19wrong").className = "levelInvisible";
		document.getElementById("q20right").className = "levelVisible";
		document.getElementById("q20wrong").className = "levelInvisible";
	};

}

function cat3Answers() {
	var a = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat3";
	var b = sessionStorage[a];

	if (b == "1") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelInvisible";
		document.getElementById("q22wrong").className = "levelVisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelInvisible";
		document.getElementById("q24wrong").className = "levelVisible";
		document.getElementById("q25right").className = "levelInvisible";
		document.getElementById("q25wrong").className = "levelVisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelInvisible";
		document.getElementById("q27wrong").className = "levelVisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelInvisible";
		document.getElementById("q29wrong").className = "levelVisible";
		document.getElementById("q30right").className = "levelInvisible";
		document.getElementById("q30wrong").className = "levelVisible";
	};
	
	if (b == "2") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelInvisible";
		document.getElementById("q22wrong").className = "levelVisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelInvisible";
		document.getElementById("q25wrong").className = "levelVisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelInvisible";
		document.getElementById("q27wrong").className = "levelVisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelInvisible";
		document.getElementById("q29wrong").className = "levelVisible";
		document.getElementById("q30right").className = "levelInvisible";
		document.getElementById("q30wrong").className = "levelVisible";
	};
	
	if (b == "3") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelInvisible";
		document.getElementById("q22wrong").className = "levelVisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelInvisible";
		document.getElementById("q25wrong").className = "levelVisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelInvisible";
		document.getElementById("q29wrong").className = "levelVisible";
		document.getElementById("q30right").className = "levelInvisible";
		document.getElementById("q30wrong").className = "levelVisible";
	};

	if (b == "4") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelInvisible";
		document.getElementById("q25wrong").className = "levelVisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelInvisible";
		document.getElementById("q29wrong").className = "levelVisible";
		document.getElementById("q30right").className = "levelInvisible";
		document.getElementById("q30wrong").className = "levelVisible";
	};

	if (b == "5") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelVisible";
		document.getElementById("q25wrong").className = "levelInvisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelInvisible";
		document.getElementById("q29wrong").className = "levelVisible";
		document.getElementById("q30right").className = "levelInvisible";
		document.getElementById("q30wrong").className = "levelVisible";
	};
	
	if (b == "6") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelVisible";
		document.getElementById("q25wrong").className = "levelInvisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelInvisible";
		document.getElementById("q29wrong").className = "levelVisible";
		document.getElementById("q30right").className = "levelVisible";
		document.getElementById("q30wrong").className = "levelInvisible";
	};
	
	if (b == "7") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelInvisible";
		document.getElementById("q23wrong").className = "levelVisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelVisible";
		document.getElementById("q25wrong").className = "levelInvisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelVisible";
		document.getElementById("q29wrong").className = "levelInvisible";
		document.getElementById("q30right").className = "levelVisible";
		document.getElementById("q30wrong").className = "levelInvisible";
	};

	if (b == "8") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelVisible";
		document.getElementById("q23wrong").className = "levelInvisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelVisible";
		document.getElementById("q25wrong").className = "levelInvisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelInvisible";
		document.getElementById("q28wrong").className = "levelVisible";
		document.getElementById("q29right").className = "levelVisible";
		document.getElementById("q29wrong").className = "levelInvisible";
		document.getElementById("q30right").className = "levelVisible";
		document.getElementById("q30wrong").className = "levelInvisible";
	};

	if (b == "9") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelVisible";
		document.getElementById("q23wrong").className = "levelInvisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelVisible";
		document.getElementById("q25wrong").className = "levelInvisible";
		document.getElementById("q26right").className = "levelInvisible";
		document.getElementById("q26wrong").className = "levelVisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelVisible";
		document.getElementById("q28wrong").className = "levelInvisible";
		document.getElementById("q29right").className = "levelVisible";
		document.getElementById("q29wrong").className = "levelInvisible";
		document.getElementById("q30right").className = "levelVisible";
		document.getElementById("q30wrong").className = "levelInvisible";
	};

	if (b == "10") {
		document.getElementById("q21right").className = "levelVisible";
		document.getElementById("q21wrong").className = "levelInvisible";
		document.getElementById("q22right").className = "levelVisible";
		document.getElementById("q22wrong").className = "levelInvisible";
		document.getElementById("q23right").className = "levelVisible";
		document.getElementById("q23wrong").className = "levelInvisible";
		document.getElementById("q24right").className = "levelVisible";
		document.getElementById("q24wrong").className = "levelInvisible";
		document.getElementById("q25right").className = "levelVisible";
		document.getElementById("q25wrong").className = "levelInvisible";
		document.getElementById("q26right").className = "levelVisible";
		document.getElementById("q26wrong").className = "levelInvisible";
		document.getElementById("q27right").className = "levelVisible";
		document.getElementById("q27wrong").className = "levelInvisible";
		document.getElementById("q28right").className = "levelVisible";
		document.getElementById("q28wrong").className = "levelInvisible";
		document.getElementById("q29right").className = "levelVisible";
		document.getElementById("q29wrong").className = "levelInvisible";
		document.getElementById("q30right").className = "levelVisible";
		document.getElementById("q30wrong").className = "levelInvisible";
	};

}

/*function hideSetup() {
	document.getElementById("stTitle").className = "levelInvisible";
	document.getElementById("stnum1").className = "levelInvisible";
	document.getElementById("stnum2").className = "levelInvisible";
	document.getElementById("stnum3").className = "levelInvisible";
	document.getElementById("stnum4").className = "levelInvisible";
	document.getElementById("stnum5").className = "levelInvisible";
	document.getElementById("stnum6").className = "levelInvisible";
	document.getElementById("stnum7").className = "levelInvisible";
	document.getElementById("stnum8").className = "levelInvisible";
	
	document.getElementById("stTitle2").className = "levelInvisible";
	document.getElementById("stnum11").className = "levelInvisible";
	document.getElementById("stnum12").className = "levelInvisible";
	document.getElementById("stnum13").className = "levelInvisible";
	document.getElementById("stnum14").className = "levelInvisible";
	document.getElementById("stnum15").className = "levelInvisible";
	document.getElementById("stnum16").className = "levelInvisible";
	document.getElementById("stnum17").className = "levelInvisible";
	document.getElementById("stnum18").className = "levelInvisible";
}*/

function viewQuestion1() {
	document.getElementById("question2").className = "levelInvisible";
	document.getElementById("question3").className = "levelInvisible";
	document.getElementById("question1").className = "levelVisible";
}

function viewQuestion1A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Adelaide Corp";
	document.getElementById("stnum2").innerHTML = "Shay Lepage";
	document.getElementById("stnum3").innerHTML = "Hannah Grantham";
	document.getElementById("stnum4").innerHTML = "Leola Hawley";
	document.getElementById("stnum5").innerHTML = "Juliane Hunn";
	document.getElementById("stnum6").innerHTML = "Yuriko Hillsman";
	document.getElementById("stnum7").innerHTML = "Lucio Chacko";
	document.getElementById("stnum8").innerHTML = "Oneida Eiland";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
	document.getElementById("stnum3").style.display = "table-cell";
	document.getElementById("stnum4").style.display = "table-cell";
	document.getElementById("stnum5").style.display = "table-cell";
	document.getElementById("stnum6").style.display = "table-cell";
	document.getElementById("stnum7").style.display = "table-cell";
	document.getElementById("stnum8").style.display = "table-cell";
}

function viewQuestion11A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Adelaide Corp";
	document.getElementById("stnum12").innerHTML = "Shay Lepage";
	document.getElementById("stnum13").innerHTML = "Hannah Grantham";
	document.getElementById("stnum14").innerHTML = "Leola Hawley";
	document.getElementById("stnum15").innerHTML = "Juliane Hunn";
	document.getElementById("stnum16").innerHTML = "Yuriko Hillsman";
	document.getElementById("stnum17").innerHTML = "Lucio Chacko";
	document.getElementById("stnum18").innerHTML = "Oneida Eiland";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
	document.getElementById("stnum13").style.display = "table-cell";
	document.getElementById("stnum14").style.display = "table-cell";
	document.getElementById("stnum15").style.display = "table-cell";
	document.getElementById("stnum16").style.display = "table-cell";
	document.getElementById("stnum17").style.display = "table-cell";
	document.getElementById("stnum18").style.display = "table-cell";
}

function viewQuestion21A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Adelaide Corp";
	document.getElementById("stnum22").innerHTML = "Shay Lepage";
	document.getElementById("stnum23").innerHTML = "Hannah Grantham";
	document.getElementById("stnum24").innerHTML = "Leola Hawley";
	document.getElementById("stnum25").innerHTML = "Juliane Hunn";
	document.getElementById("stnum26").innerHTML = "Yuriko Hillsman";
	document.getElementById("stnum27").innerHTML = "Lucio Chacko";
	document.getElementById("stnum28").innerHTML = "Oneida Eiland";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
	document.getElementById("stnum23").style.display = "table-cell";
	document.getElementById("stnum24").style.display = "table-cell";
	document.getElementById("stnum25").style.display = "table-cell";
	document.getElementById("stnum26").style.display = "table-cell";
	document.getElementById("stnum27").style.display = "table-cell";
	document.getElementById("stnum28").style.display = "table-cell";
}

function viewQuestion2() {
	document.getElementById("question1").className = "levelInvisible";
	document.getElementById("question3").className = "levelInvisible";
	document.getElementById("question2").className = "levelVisible";
}

function viewQuestion2A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Shay Lepage";
	document.getElementById("stnum2").innerHTML = "Yuriko Hillsman";
	document.getElementById("stnum3").innerHTML = "Leola Hawley";
	document.getElementById("stnum4").innerHTML = "Oneida Eiland";
	document.getElementById("stnum5").innerHTML = "Juliane Hunn";
	document.getElementById("stnum6").innerHTML = "Charissa Enos";
	document.getElementById("stnum7").innerHTML = "Kimber Mcwhorter";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
	document.getElementById("stnum3").style.display = "table-cell";
	document.getElementById("stnum4").style.display = "table-cell";
	document.getElementById("stnum5").style.display = "table-cell";
	document.getElementById("stnum6").style.display = "table-cell";
	document.getElementById("stnum7").style.display = "table-cell";
}

function viewQuestion12A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Shay Lepage";
	document.getElementById("stnum12").innerHTML = "Yuriko Hillsman";
	document.getElementById("stnum13").innerHTML = "Leola Hawley";
	document.getElementById("stnum14").innerHTML = "Oneida Eiland";
	document.getElementById("stnum15").innerHTML = "Juliane Hunn";
	document.getElementById("stnum16").innerHTML = "Charissa Enos";
	document.getElementById("stnum17").innerHTML = "Kimber Mcwhorter";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
	document.getElementById("stnum13").style.display = "table-cell";
	document.getElementById("stnum14").style.display = "table-cell";
	document.getElementById("stnum15").style.display = "table-cell";
	document.getElementById("stnum16").style.display = "table-cell";
	document.getElementById("stnum17").style.display = "table-cell";
}

function viewQuestion22A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Shay Lepage";
	document.getElementById("stnum22").innerHTML = "Yuriko Hillsman";
	document.getElementById("stnum23").innerHTML = "Leola Hawley";
	document.getElementById("stnum24").innerHTML = "Oneida Eiland";
	document.getElementById("stnum25").innerHTML = "Juliane Hunn";
	document.getElementById("stnum26").innerHTML = "Charissa Enos";
	document.getElementById("stnum27").innerHTML = "Kimber Mcwhorter";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
	document.getElementById("stnum23").style.display = "table-cell";
	document.getElementById("stnum24").style.display = "table-cell";
	document.getElementById("stnum25").style.display = "table-cell";
	document.getElementById("stnum26").style.display = "table-cell";
	document.getElementById("stnum27").style.display = "table-cell";
}

function viewQuestion3() {
	document.getElementById("question1").className = "levelInvisible";
	document.getElementById("question2").className = "levelInvisible";
	document.getElementById("question3").className = "levelVisible";
}

function viewQuestion3A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Latesha Bilderback";
	document.getElementById("stnum2").innerHTML = "Normand Joye";
	document.getElementById("stnum3").innerHTML = "Evette Callejas";
	document.getElementById("stnum4").innerHTML = "Oneida Eiland";
	document.getElementById("stnum5").innerHTML = "Francina Parenteau";
	document.getElementById("stnum6").innerHTML = "Verla Muncy";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
	document.getElementById("stnum3").style.display = "table-cell";
	document.getElementById("stnum4").style.display = "table-cell";
	document.getElementById("stnum5").style.display = "table-cell";
	document.getElementById("stnum6").style.display = "table-cell";
}

function viewQuestion13A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Latesha Bilderback";
	document.getElementById("stnum12").innerHTML = "Normand Joye";
	document.getElementById("stnum13").innerHTML = "Evette Callejas";
	document.getElementById("stnum14").innerHTML = "Oneida Eiland";
	document.getElementById("stnum15").innerHTML = "Francina Parenteau";
	document.getElementById("stnum16").innerHTML = "Verla Muncy";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
	document.getElementById("stnum13").style.display = "table-cell";
	document.getElementById("stnum14").style.display = "table-cell";
	document.getElementById("stnum15").style.display = "table-cell";
	document.getElementById("stnum16").style.display = "table-cell";
}

function viewQuestion23A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Latesha Bilderback";
	document.getElementById("stnum22").innerHTML = "Normand Joye";
	document.getElementById("stnum23").innerHTML = "Evette Callejas";
	document.getElementById("stnum24").innerHTML = "Oneida Eiland";
	document.getElementById("stnum25").innerHTML = "Francina Parenteau";
	document.getElementById("stnum26").innerHTML = "Verla Muncy";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
	document.getElementById("stnum23").style.display = "table-cell";
	document.getElementById("stnum24").style.display = "table-cell";
	document.getElementById("stnum25").style.display = "table-cell";
	document.getElementById("stnum26").style.display = "table-cell";
}

function viewQuestion4() {
	document.getElementById("question5").className = "levelInvisible";
	document.getElementById("question6").className = "levelInvisible";
	document.getElementById("question4").className = "levelVisible";
}

function viewQuestion4A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Francine Cowden";
	document.getElementById("stnum2").innerHTML = "Evette Callejas";
	document.getElementById("stnum3").innerHTML = "Charissa Enos";
	document.getElementById("stnum4").innerHTML = "Charlott Bunch";
	document.getElementById("stnum5").innerHTML = "Lucio Chacko";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
	document.getElementById("stnum3").style.display = "table-cell";
	document.getElementById("stnum4").style.display = "table-cell";
	document.getElementById("stnum5").style.display = "table-cell";
}

function viewQuestion14A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Francine Cowden";
	document.getElementById("stnum12").innerHTML = "Evette Callejas";
	document.getElementById("stnum13").innerHTML = "Charissa Enos";
	document.getElementById("stnum14").innerHTML = "Charlott Bunch";
	document.getElementById("stnum15").innerHTML = "Lucio Chacko";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
	document.getElementById("stnum13").style.display = "table-cell";
	document.getElementById("stnum14").style.display = "table-cell";
	document.getElementById("stnum15").style.display = "table-cell";
}

function viewQuestion24A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Francine Cowden";
	document.getElementById("stnum22").innerHTML = "Evette Callejas";
	document.getElementById("stnum23").innerHTML = "Charissa Enos";
	document.getElementById("stnum24").innerHTML = "Charlott Bunch";
	document.getElementById("stnum25").innerHTML = "Lucio Chacko";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
	document.getElementById("stnum23").style.display = "table-cell";
	document.getElementById("stnum24").style.display = "table-cell";
	document.getElementById("stnum25").style.display = "table-cell";
}

function viewQuestion5() {
	document.getElementById("question4").className = "levelInvisible";
	document.getElementById("question6").className = "levelInvisible";
	document.getElementById("question5").className = "levelVisible";
}

function viewQuestion5A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Verla Muncy";
	document.getElementById("stnum2").innerHTML = "Charlott Bunch";
	document.getElementById("stnum3").innerHTML = "Charissa Enos";
	document.getElementById("stnum4").innerHTML = "Celestina Zinke";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
	document.getElementById("stnum3").style.display = "table-cell";
	document.getElementById("stnum4").style.display = "table-cell";
}

function viewQuestion15A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Verla Muncy";
	document.getElementById("stnum12").innerHTML = "Charlott Bunch";
	document.getElementById("stnum13").innerHTML = "Charissa Enos";
	document.getElementById("stnum14").innerHTML = "Celestina Zinke";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
	document.getElementById("stnum13").style.display = "table-cell";
	document.getElementById("stnum14").style.display = "table-cell";
}

function viewQuestion25A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Verla Muncy";
	document.getElementById("stnum22").innerHTML = "Charlott Bunch";
	document.getElementById("stnum23").innerHTML = "Charissa Enos";
	document.getElementById("stnum24").innerHTML = "Celestina Zinke";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
	document.getElementById("stnum23").style.display = "table-cell";
	document.getElementById("stnum24").style.display = "table-cell";
}

function viewQuestion6() {
	document.getElementById("question4").className = "levelInvisible";
	document.getElementById("question5").className = "levelInvisible";
	document.getElementById("question6").className = "levelVisible";
}

function viewQuestion6A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Charissa Enos";
	document.getElementById("stnum2").innerHTML = "Shay Lepage";
	document.getElementById("stnum3").innerHTML = "Normand Joye";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
	document.getElementById("stnum3").style.display = "table-cell";
}

function viewQuestion16A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Charissa Enos";
	document.getElementById("stnum12").innerHTML = "Shay Lepage";
	document.getElementById("stnum13").innerHTML = "Normand Joye";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
	document.getElementById("stnum13").style.display = "table-cell";
}

function viewQuestion26A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Charissa Enos";
	document.getElementById("stnum22").innerHTML = "Shay Lepage";
	document.getElementById("stnum23").innerHTML = "Normand Joye";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
	document.getElementById("stnum23").style.display = "table-cell";
}

function viewQuestion7() {
	document.getElementById("question8").className = "levelInvisible";
	document.getElementById("question9").className = "levelInvisible";
	document.getElementById("question7").className = "levelVisible";
}

function viewQuestion7A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Arletha Marts";
	document.getElementById("stnum2").innerHTML = "Yuriko Hillsman";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
}

function viewQuestion17A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Arletha Marts";
	document.getElementById("stnum12").innerHTML = "Yuriko Hillsman";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
}

function viewQuestion27A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Arletha Marts";
	document.getElementById("stnum22").innerHTML = "Yuriko Hillsman";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
}

function viewQuestion8() {
	document.getElementById("question7").className = "levelInvisible";
	document.getElementById("question9").className = "levelInvisible";
	document.getElementById("question8").className = "levelVisible";
}

function viewQuestion8A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Hannah Grantham";
	document.getElementById("stnum2").innerHTML = "Evette Callejas";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
	document.getElementById("stnum2").style.display = "table-cell";
}

function viewQuestion18A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Hannah Grantham";
	document.getElementById("stnum12").innerHTML = "Evette Callejas";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
	document.getElementById("stnum12").style.display = "table-cell";
}

function viewQuestion28A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Hannah Grantham";
	document.getElementById("stnum22").innerHTML = "Evette Callejas";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
	document.getElementById("stnum22").style.display = "table-cell";
}

function viewQuestion9() {
	document.getElementById("question7").className = "levelInvisible";
	document.getElementById("question8").className = "levelInvisible";
	document.getElementById("question9").className = "levelVisible";
}

function viewQuestion9A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Normand Joye";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
}

function viewQuestion19A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Normand Joye";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
}

function viewQuestion29A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Normand Joye";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
}

function viewQuestion10() {
	document.getElementById("question7").className = "levelInvisible";
	document.getElementById("question8").className = "levelInvisible";
	document.getElementById("question9").className = "levelVisible";
}

function viewQuestion10A() {
	document.getElementById("stnum1").style.display = "none";
	document.getElementById("stnum2").style.display = "none";
	document.getElementById("stnum3").style.display = "none";
	document.getElementById("stnum4").style.display = "none";
	document.getElementById("stnum5").style.display = "none";
	document.getElementById("stnum6").style.display = "none";
	document.getElementById("stnum7").style.display = "none";
	document.getElementById("stnum8").style.display = "none";
	document.getElementById("stnum1").innerHTML = "Charlott Bunch";
	document.getElementById("stTitle").style.display = "table-cell";
	document.getElementById("stnum1").style.display = "table-cell";
}

function viewQuestion20A() {
	document.getElementById("stnum11").style.display = "none";
	document.getElementById("stnum12").style.display = "none";
	document.getElementById("stnum13").style.display = "none";
	document.getElementById("stnum14").style.display = "none";
	document.getElementById("stnum15").style.display = "none";
	document.getElementById("stnum16").style.display = "none";
	document.getElementById("stnum17").style.display = "none";
	document.getElementById("stnum18").style.display = "none";
	document.getElementById("stnum11").innerHTML = "Charlott Bunch";
	document.getElementById("stTitle2").style.display = "table-cell";
	document.getElementById("stnum11").style.display = "table-cell";
}

function viewQuestion30A() {
	document.getElementById("stnum21").style.display = "none";
	document.getElementById("stnum22").style.display = "none";
	document.getElementById("stnum23").style.display = "none";
	document.getElementById("stnum24").style.display = "none";
	document.getElementById("stnum25").style.display = "none";
	document.getElementById("stnum26").style.display = "none";
	document.getElementById("stnum27").style.display = "none";
	document.getElementById("stnum28").style.display = "none";
	document.getElementById("stnum21").innerHTML = "Charlott Bunch";
	document.getElementById("stTitle3").style.display = "table-cell";
	document.getElementById("stnum21").style.display = "table-cell";
}

function chartPoints2() {
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat1Total";
	tCat1_15 = Number(sessionStorage[a]);
	
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat2Total";
	tCat2_15 = Number(sessionStorage[a]);
	
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "cat3Total";
	tCat3_15 = Number(sessionStorage[a]);
}

function sectionChart() {
	chartPoints2();
	tablePoints();
    $('#container5').highcharts({
        chart: {type: 'line'},
        title: {text: 'Curriculum Scores by Strand. September to December 2015'},
        subtitle: {text: 'Click the data points to view score details'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: 'true', align: 'center', layout: 'horizontal'},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Measurement",
            	colorByPoint: false,
            	color: "#603CBA",
                      
            data: [{name: "Sep 11", y: tCat1_1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}}, 
            	   {name: "Sep 18", y: tCat1_2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Sep 25", y: tCat1_3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 2", y: tCat1_4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 9", y: tCat1_5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 16", y: tCat1_6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 23", y: tCat1_7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 30", y: tCat1_8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 6", y: tCat1_9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 13", y: tCat1_10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 20", y: tCat1_11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 27", y: tCat1_12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 4", y: tCat1_13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 11", y: tCat1_14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 18", y: tCat1_15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}}]
	        },
	        {
	        name: "Geometry & Spatial Sense",
	            colorByPoint: false,
	            color: "#00A300",
	                      
            data: [{name: "Sep 11", y: tCat2_1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}}, 
            	   {name: "Sep 18", y: tCat2_2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Sep 25", y: tCat2_3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 2", y: tCat2_4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 9", y: tCat2_5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 16", y: tCat2_6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 23", y: tCat2_7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 30", y: tCat2_8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 6", y: tCat2_9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 13", y: tCat2_10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 20", y: tCat2_11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 27", y: tCat2_12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 4", y: tCat2_13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 11", y: tCat2_14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 18", y: tCat2_15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}}]
			},
	        {
	        name: "Patterning & Algebra",
	            colorByPoint: false,
	            color: "#FFC40D",
	                      
            data: [{name: "Sep 11", y: tCat3_1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}}, 
            	   {name: "Sep 18", y: tCat3_2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Sep 25", y: tCat3_3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 2", y: tCat3_4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 9", y: tCat3_5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 16", y: tCat3_6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 23", y: tCat3_7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Oct 30", y: tCat3_8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 6", y: tCat3_9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 13", y: tCat3_10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 20", y: tCat3_11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Nov 27", y: tCat3_12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 4", y: tCat3_13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 11", y: tCat3_14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}},
            	   {name: "Dec 18", y: tCat3_15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");currentSelections();window.open("http://neols.com/eqao_teacher5.html","_self")}}}]

        }],
    });
}

function tablePoints() {
	document.getElementById("score-s1-S11").innerHTML = tCat1_1;
	document.getElementById("score-s1-S18").innerHTML = tCat1_2;
	document.getElementById("score-s1-S25").innerHTML = tCat1_3;
	document.getElementById("score-s1-O2").innerHTML = tCat1_4;
	document.getElementById("score-s1-O9").innerHTML = tCat1_5;
	document.getElementById("score-s1-O16").innerHTML = tCat1_6;
	document.getElementById("score-s1-O23").innerHTML = tCat1_7;
	document.getElementById("score-s1-O30").innerHTML = tCat1_8;
	document.getElementById("score-s1-N6").innerHTML = tCat1_9;
	document.getElementById("score-s1-N13").innerHTML = tCat1_10;
	document.getElementById("score-s1-N20").innerHTML = tCat1_11;
	document.getElementById("score-s1-N27").innerHTML = tCat1_12;
	document.getElementById("score-s1-D4").innerHTML = tCat1_13;
	document.getElementById("score-s1-D11").innerHTML = tCat1_14;
	document.getElementById("score-s1-D18").innerHTML = tCat1_15;
	
	document.getElementById("score-s2-S11").innerHTML = tCat2_1;
	document.getElementById("score-s2-S18").innerHTML = tCat2_2;
	document.getElementById("score-s2-S25").innerHTML = tCat2_3;
	document.getElementById("score-s2-O2").innerHTML = tCat2_4;
	document.getElementById("score-s2-O9").innerHTML = tCat2_5;
	document.getElementById("score-s2-O16").innerHTML = tCat2_6;
	document.getElementById("score-s2-O23").innerHTML = tCat2_7;
	document.getElementById("score-s2-O30").innerHTML = tCat2_8;
	document.getElementById("score-s2-N6").innerHTML = tCat2_9;
	document.getElementById("score-s2-N13").innerHTML = tCat2_10;
	document.getElementById("score-s2-N20").innerHTML = tCat2_11;
	document.getElementById("score-s2-N27").innerHTML = tCat2_12;
	document.getElementById("score-s2-D4").innerHTML = tCat2_13;
	document.getElementById("score-s2-D11").innerHTML = tCat2_14;
	document.getElementById("score-s2-D18").innerHTML = tCat2_15;
	
	document.getElementById("score-s3-S11").innerHTML = tCat3_1;
	document.getElementById("score-s3-S18").innerHTML = tCat3_2;
	document.getElementById("score-s3-S25").innerHTML = tCat3_3;
	document.getElementById("score-s3-O2").innerHTML = tCat3_4;
	document.getElementById("score-s3-O9").innerHTML = tCat3_5;
	document.getElementById("score-s3-O16").innerHTML = tCat3_6;
	document.getElementById("score-s3-O23").innerHTML = tCat3_7;
	document.getElementById("score-s3-O30").innerHTML = tCat3_8;
	document.getElementById("score-s3-N6").innerHTML = tCat3_9;
	document.getElementById("score-s3-N13").innerHTML = tCat3_10;
	document.getElementById("score-s3-N20").innerHTML = tCat3_11;
	document.getElementById("score-s3-N27").innerHTML = tCat3_12;
	document.getElementById("score-s3-D4").innerHTML = tCat3_13;
	document.getElementById("score-s3-D11").innerHTML = tCat3_14;
	document.getElementById("score-s3-D18").innerHTML = tCat3_15;
}

function td1() {
	sessionStorage.setItem("selectTestDate", "S11");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td2() {
	sessionStorage.setItem("selectTestDate", "S18");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td3() {
	sessionStorage.setItem("selectTestDate", "S25");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td4() {
	sessionStorage.setItem("selectTestDate", "O2");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td5() {
	sessionStorage.setItem("selectTestDate", "O9");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td6() {
	sessionStorage.setItem("selectTestDate", "O16");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td7() {
	sessionStorage.setItem("selectTestDate", "O23");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td8() {
	sessionStorage.setItem("selectTestDate", "O30");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td9() {
	sessionStorage.setItem("selectTestDate", "N6");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td10() {
	sessionStorage.setItem("selectTestDate", "N13");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td11() {
	sessionStorage.setItem("selectTestDate", "N20");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td12() {
	sessionStorage.setItem("selectTestDate", "N27");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td13() {
	sessionStorage.setItem("selectTestDate", "D4");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td14() {
	sessionStorage.setItem("selectTestDate", "D11");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function td15() {
	sessionStorage.setItem("selectTestDate", "D18");
	currentSelections();
	window.open("http://neols.com/eqao_teacher5.html","_self");
}

function drillToStudent2() {
	whichClass();
	drillPoints2();
	tablePoints2();
	stdNames();
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: ['Student Strand Scores - ' + tSubTitle]},
        subtitle: {
        	text: 'Click the data points to view student details',
        	style: {
        		fontWeight: 'bold',
        		color: '#000000'
        	}
        },
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Strand Score (%)'}},
        legend: {enabled: 'true', align: 'center', layout: 'horizontal'},
        plotOptions: { series: { cursor: 'pointer', borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Measurement",
            colorByPoint: false,
	        color: "#603CBA",
            
            data: [{name: sessionStorage[tStudent1 + "name"], y: tDrill1, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent1);window.open("http://neols.com/eqao_teacher6.html","_self")}}}, 
            	   {name: sessionStorage[tStudent2 + "name"], y: tDrill2, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent2);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent3 + "name"], y: tDrill3, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent3);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent4 + "name"], y: tDrill4, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent4);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent5 + "name"], y: tDrill5, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent5);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent6 + "name"], y: tDrill6, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent6);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent7 + "name"], y: tDrill7, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent7);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent8 + "name"], y: tDrill8, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent8);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent9 + "name"], y: tDrill9, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent9);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent10 + "name"], y: tDrill10, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent10);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent11 + "name"], y: tDrill11, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent11);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent12 + "name"], y: tDrill12, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent12);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent13 + "name"], y: tDrill13, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent13);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent14 + "name"], y: tDrill14, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent14);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent15 + "name"], y: tDrill15, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent15);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent16 + "name"], y: tDrill16, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent16);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent17 + "name"], y: tDrill17, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent17);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent18 + "name"], y: tDrill18, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent18);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent19 + "name"], y: tDrill19, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent19);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent20 + "name"], y: tDrill20, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent20);window.open("http://neols.com/eqao_teacher6.html","_self")}}}],
        },
		
		{
            name: "Geometry & Spatial Sense",
            colorByPoint: false,
            color: "#00A300",
            
            data: [{name: sessionStorage[tStudent1 + "name"], y: tDrill21, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent1);window.open("http://neols.com/eqao_teacher6.html","_self")}}}, 
            	   {name: sessionStorage[tStudent2 + "name"], y: tDrill22, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent2);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent3 + "name"], y: tDrill23, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent3);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent4 + "name"], y: tDrill24, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent4);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent5 + "name"], y: tDrill25, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent5);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent6 + "name"], y: tDrill26, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent6);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent7 + "name"], y: tDrill27, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent7);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent8 + "name"], y: tDrill28, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent8);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent9 + "name"], y: tDrill29, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent9);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent10 + "name"], y: tDrill30, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent10);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent11 + "name"], y: tDrill31, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent11);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent12 + "name"], y: tDrill32, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent12);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent13 + "name"], y: tDrill33, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent13);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent14 + "name"], y: tDrill34, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent14);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent15 + "name"], y: tDrill35, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent15);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent16 + "name"], y: tDrill36, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent16);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent17 + "name"], y: tDrill37, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent17);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent18 + "name"], y: tDrill38, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent18);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent19 + "name"], y: tDrill39, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent19);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent20 + "name"], y: tDrill40, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent20);window.open("http://neols.com/eqao_teacher6.html","_self")}}}],
        },
        
        {
            name: "Patterning & Algebra",
            colorByPoint: false,
            color: "#FFC40D",
            
            data: [{name: sessionStorage[tStudent1 + "name"], y: tDrill41, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent1);window.open("http://neols.com/eqao_teacher6.html","_self")}}}, 
            	   {name: sessionStorage[tStudent2 + "name"], y: tDrill42, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent2);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent3 + "name"], y: tDrill43, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent3);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent4 + "name"], y: tDrill44, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent4);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent5 + "name"], y: tDrill45, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent5);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent6 + "name"], y: tDrill46, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent6);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent7 + "name"], y: tDrill47, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent7);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent8 + "name"], y: tDrill48, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent8);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent9 + "name"], y: tDrill49, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent9);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent10 + "name"], y: tDrill50, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent10);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent11 + "name"], y: tDrill51, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent11);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent12 + "name"], y: tDrill52, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent12);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent13 + "name"], y: tDrill53, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent13);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent14 + "name"], y: tDrill54, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent14);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
            	   {name: sessionStorage[tStudent15 + "name"], y: tDrill55, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent15);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent16 + "name"], y: tDrill56, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent16);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent17 + "name"], y: tDrill57, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent17);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent18 + "name"], y: tDrill58, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent18);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent19 + "name"], y: tDrill59, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent19);window.open("http://neols.com/eqao_teacher6.html","_self")}}},
				   {name: sessionStorage[tStudent20 + "name"], y: tDrill60, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent20);window.open("http://neols.com/eqao_teacher6.html","_self")}}}],
        }
		],
	});
}

function drillPoints2() {
	tDrill1 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat1"]) / 10 * 100;
	tDrill2 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat1"]) / 10 * 100;
	tDrill3 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat1"]) / 10 * 100;
	tDrill4 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat1"]) / 10 * 100;
	tDrill5 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat1"]) / 10 * 100;
	tDrill6 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat1"]) / 10 * 100;
	tDrill7 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat1"]) / 10 * 100;
	tDrill8 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat1"]) / 10 * 100;
	tDrill9 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat1"]) / 10 * 100;
	tDrill10 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat1"]) / 10 * 100;
	tDrill11 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat1"]) / 10 * 100;
	tDrill12 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat1"]) / 10 * 100;
	tDrill13 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat1"]) / 10 * 100;
	tDrill14 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat1"]) / 10 * 100;
	tDrill15 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat1"]) / 10 * 100;
	tDrill16 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat1"]) / 10 * 100;
	tDrill17 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat1"]) / 10 * 100;
	tDrill18 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat1"]) / 10 * 100;
	tDrill19 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat1"]) / 10 * 100;
	tDrill20 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat1"]) / 10 * 100;
	
	tDrill21 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat2"]) / 10 * 100;
	tDrill22 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat2"]) / 10 * 100;
	tDrill23 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat2"]) / 10 * 100;
	tDrill24 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat2"]) / 10 * 100;
	tDrill25 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat2"]) / 10 * 100;
	tDrill26 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat2"]) / 10 * 100;
	tDrill27 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat2"]) / 10 * 100;
	tDrill28 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat2"]) / 10 * 100;
	tDrill29 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat2"]) / 10 * 100;
	tDrill30 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat2"]) / 10 * 100;
	tDrill31 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat2"]) / 10 * 100;
	tDrill32 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat2"]) / 10 * 100;
	tDrill33 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat2"]) / 10 * 100;
	tDrill34 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat2"]) / 10 * 100;
	tDrill35 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat2"]) / 10 * 100;
	tDrill36 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat2"]) / 10 * 100;
	tDrill37 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat2"]) / 10 * 100;
	tDrill38 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat2"]) / 10 * 100;
	tDrill39 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat2"]) / 10 * 100;
	tDrill40 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat2"]) / 10 * 100;
	
	tDrill41 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat3"]) / 10 * 100;
	tDrill42 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat3"]) / 10 * 100;
	tDrill43 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat3"]) / 10 * 100;
	tDrill44 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat3"]) / 10 * 100;
	tDrill45 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat3"]) / 10 * 100;
	tDrill46 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat3"]) / 10 * 100;
	tDrill47 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat3"]) / 10 * 100;
	tDrill48 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat3"]) / 10 * 100;
	tDrill49 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat3"]) / 10 * 100;
	tDrill50 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat3"]) / 10 * 100;
	tDrill51 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat3"]) / 10 * 100;
	tDrill52 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat3"]) / 10 * 100;
	tDrill53 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat3"]) / 10 * 100;
	tDrill54 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat3"]) / 10 * 100;
	tDrill55 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat3"]) / 10 * 100;
	tDrill56 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat3"]) / 10 * 100;
	tDrill57 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat3"]) / 10 * 100;
	tDrill58 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat3"]) / 10 * 100;
	tDrill59 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat3"]) / 10 * 100;
	tDrill60 = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat3"]) / 10 * 100;
}

function std1() {
	sessionStorage.setItem("selectStudent", tStudent1);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std2() {
	sessionStorage.setItem("selectStudent", tStudent2);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std3() {
	sessionStorage.setItem("selectStudent", tStudent3);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std4() {
	sessionStorage.setItem("selectStudent", tStudent4);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std5() {
	sessionStorage.setItem("selectStudent", tStudent5);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std6() {
	sessionStorage.setItem("selectStudent", tStudent6);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std7() {
	sessionStorage.setItem("selectStudent", tStudent7);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std8() {
	sessionStorage.setItem("selectStudent", tStudent8);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std9() {
	sessionStorage.setItem("selectStudent", tStudent9);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std10() {
	sessionStorage.setItem("selectStudent", tStudent10);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std11() {
	sessionStorage.setItem("selectStudent", tStudent11);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std12() {
	sessionStorage.setItem("selectStudent", tStudent12);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std13() {
	sessionStorage.setItem("selectStudent", tStudent13);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std14() {
	sessionStorage.setItem("selectStudent", tStudent14);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std15() {
	sessionStorage.setItem("selectStudent", tStudent15);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std16() {
	sessionStorage.setItem("selectStudent", tStudent16);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std17() {
	sessionStorage.setItem("selectStudent", tStudent17);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std18() {
	sessionStorage.setItem("selectStudent", tStudent18);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std19() {
	sessionStorage.setItem("selectStudent", tStudent19);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function std20() {
	sessionStorage.setItem("selectStudent", tStudent20);
	window.open("http://neols.com/eqao_teacher6.html","_self");
}

function tablePoints2() {
	document.getElementById("score-s1-st1").innerHTML = tDrill1;
	document.getElementById("score-s1-st2").innerHTML = tDrill2;
	document.getElementById("score-s1-st3").innerHTML = tDrill3;
	document.getElementById("score-s1-st4").innerHTML = tDrill4;
	document.getElementById("score-s1-st5").innerHTML = tDrill5;
	document.getElementById("score-s1-st6").innerHTML = tDrill6;
	document.getElementById("score-s1-st7").innerHTML = tDrill7;
	document.getElementById("score-s1-st8").innerHTML = tDrill8;
	document.getElementById("score-s1-st9").innerHTML = tDrill9;
	document.getElementById("score-s1-st10").innerHTML = tDrill10;
	document.getElementById("score-s1-st11").innerHTML = tDrill11;
	document.getElementById("score-s1-st12").innerHTML = tDrill12;
	document.getElementById("score-s1-st13").innerHTML = tDrill13;
	document.getElementById("score-s1-st14").innerHTML = tDrill14;
	document.getElementById("score-s1-st15").innerHTML = tDrill15;
	document.getElementById("score-s1-st16").innerHTML = tDrill16;
	document.getElementById("score-s1-st17").innerHTML = tDrill17;
	document.getElementById("score-s1-st18").innerHTML = tDrill18;
	document.getElementById("score-s1-st19").innerHTML = tDrill19;
	document.getElementById("score-s1-st20").innerHTML = tDrill20;
	
	document.getElementById("score-s2-st1").innerHTML = tDrill21;
	document.getElementById("score-s2-st2").innerHTML = tDrill22;
	document.getElementById("score-s2-st3").innerHTML = tDrill23;
	document.getElementById("score-s2-st4").innerHTML = tDrill24;
	document.getElementById("score-s2-st5").innerHTML = tDrill25;
	document.getElementById("score-s2-st6").innerHTML = tDrill26;
	document.getElementById("score-s2-st7").innerHTML = tDrill27;
	document.getElementById("score-s2-st8").innerHTML = tDrill28;
	document.getElementById("score-s2-st9").innerHTML = tDrill29;
	document.getElementById("score-s2-st10").innerHTML = tDrill30;
	document.getElementById("score-s2-st11").innerHTML = tDrill31;
	document.getElementById("score-s2-st12").innerHTML = tDrill32;
	document.getElementById("score-s2-st13").innerHTML = tDrill33;
	document.getElementById("score-s2-st14").innerHTML = tDrill34;
	document.getElementById("score-s2-st15").innerHTML = tDrill35;
	document.getElementById("score-s2-st16").innerHTML = tDrill36;
	document.getElementById("score-s2-st17").innerHTML = tDrill37;
	document.getElementById("score-s2-st18").innerHTML = tDrill38;
	document.getElementById("score-s2-st19").innerHTML = tDrill39;
	document.getElementById("score-s2-st20").innerHTML = tDrill40;
	
	document.getElementById("score-s3-st1").innerHTML = tDrill41;
	document.getElementById("score-s3-st2").innerHTML = tDrill42;
	document.getElementById("score-s3-st3").innerHTML = tDrill43;
	document.getElementById("score-s3-st4").innerHTML = tDrill44;
	document.getElementById("score-s3-st5").innerHTML = tDrill45;
	document.getElementById("score-s3-st6").innerHTML = tDrill46;
	document.getElementById("score-s3-st7").innerHTML = tDrill47;
	document.getElementById("score-s3-st8").innerHTML = tDrill48;
	document.getElementById("score-s3-st9").innerHTML = tDrill49;
	document.getElementById("score-s3-st10").innerHTML = tDrill50;
	document.getElementById("score-s3-st11").innerHTML = tDrill51;
	document.getElementById("score-s3-st12").innerHTML = tDrill52;
	document.getElementById("score-s3-st13").innerHTML = tDrill53;
	document.getElementById("score-s3-st14").innerHTML = tDrill54;
	document.getElementById("score-s3-st15").innerHTML = tDrill55;
	document.getElementById("score-s3-st16").innerHTML = tDrill56;
	document.getElementById("score-s3-st17").innerHTML = tDrill57;
	document.getElementById("score-s3-st18").innerHTML = tDrill58;
	document.getElementById("score-s3-st19").innerHTML = tDrill59;
	document.getElementById("score-s3-st20").innerHTML = tDrill60;
}

function stdNames() {
	document.getElementById("score-std1").innerHTML = sessionStorage[tStudent1 + "name"];
	document.getElementById("score-std2").innerHTML = sessionStorage[tStudent2 + "name"];
	document.getElementById("score-std3").innerHTML = sessionStorage[tStudent3 + "name"];
	document.getElementById("score-std4").innerHTML = sessionStorage[tStudent4 + "name"];
	document.getElementById("score-std5").innerHTML = sessionStorage[tStudent5 + "name"];
	document.getElementById("score-std6").innerHTML = sessionStorage[tStudent6 + "name"];
	document.getElementById("score-std7").innerHTML = sessionStorage[tStudent7 + "name"];
	document.getElementById("score-std8").innerHTML = sessionStorage[tStudent8 + "name"];
	document.getElementById("score-std9").innerHTML = sessionStorage[tStudent9 + "name"];
	document.getElementById("score-std10").innerHTML = sessionStorage[tStudent10 + "name"];
	document.getElementById("score-std11").innerHTML = sessionStorage[tStudent11 + "name"];
	document.getElementById("score-std12").innerHTML = sessionStorage[tStudent12 + "name"];
	document.getElementById("score-std13").innerHTML = sessionStorage[tStudent13 + "name"];
	document.getElementById("score-std14").innerHTML = sessionStorage[tStudent14 + "name"];
	document.getElementById("score-std15").innerHTML = sessionStorage[tStudent15 + "name"];
	document.getElementById("score-std16").innerHTML = sessionStorage[tStudent16 + "name"];
	document.getElementById("score-std17").innerHTML = sessionStorage[tStudent17 + "name"];
	document.getElementById("score-std18").innerHTML = sessionStorage[tStudent18 + "name"];
	document.getElementById("score-std19").innerHTML = sessionStorage[tStudent19 + "name"];
	document.getElementById("score-std20").innerHTML = sessionStorage[tStudent20 + "name"];
}

function revealGraph1() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent1 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent1);
	stuName = tStudent1;
	teacher2Chart();
}

function revealGraph2() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent2 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent2);
	stuName = tStudent2;
	teacher2Chart();
}

function revealGraph3() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent3 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent3);
	stuName = tStudent3;
	teacher2Chart();
}

function revealGraph4() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent4 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent4);
	stuName = tStudent4;
	teacher2Chart();
}

function revealGraph5() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent5 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent5);
	stuName = tStudent5;
	teacher2Chart();
}

function revealGraph6() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent6 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent6);
	stuName = tStudent6;
	teacher2Chart();
}

function revealGraph7() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent7 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent7);
	stuName = tStudent7;
	teacher2Chart();
}

function revealGraph8() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent8 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent8);
	stuName = tStudent8;
	teacher2Chart();
}

function revealGraph9() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent9 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent9);
	stuName = tStudent9;
	teacher2Chart();
}

function revealGraph10() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent10 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent10);
	stuName = tStudent10;
	teacher2Chart();
}

function revealGraph11() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent11 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent11);
	stuName = tStudent11;
	teacher2Chart();
}

function revealGraph12() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent12 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent12);
	stuName = tStudent12;
	teacher2Chart();
}

function revealGraph13() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent13 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent13);
	stuName = tStudent13;
	teacher2Chart();
}

function revealGraph14() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent14 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent14);
	stuName = tStudent14;
	teacher2Chart();
}

function revealGraph15() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent15 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent15);
	stuName = tStudent15;
	teacher2Chart();
}

function revealGraph16() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent16 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent16);
	stuName = tStudent16;
	teacher2Chart();
}

function revealGraph17() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent17 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent17);
	stuName = tStudent17;
	teacher2Chart();
}

function revealGraph18() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent18 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent18);
	stuName = tStudent18;
	teacher2Chart();
}

function revealGraph19() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent19 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent19);
	stuName = tStudent19;
	teacher2Chart();
}

function revealGraph20() {
	resetVisible();
	document.getElementById("overviewTable").style.display = 'table';	
	
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent20 + "name"] + " - Assessment Overview";
	sessionStorage.setItem("selectStudent", tStudent20);
	stuName = tStudent20;
	teacher2Chart();
}

function teacher2Chart() {
	document.getElementById("container").style.display = 'inherit';
	teacher2Points();
    $('#container').highcharts({
        chart: {type: 'column', width: chrtWidth},
        title: {text: 'Historical Assessment Scores'},
        subtitle: {text: 'Click the columns to view strand score details'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Assessment Score (%)'}},
        legend: {enabled: false, align: 'center', layout: 'horizontal'},
        plotOptions: {series: {cursor: 'pointer',borderWidth: 0,dataLabels: {enabled: true,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Overall Assessment Score",
            colorByPoint: false,
            
            data: [{name: "Sep 11", y: tDate1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");sessionStorage.setItem("selectTestDateFull", "Sep 11, 2015");revealSectionScores();}}}, 
            	   {name: "Sep 18", y: tDate2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");sessionStorage.setItem("selectTestDateFull", "Sep 18, 2015");revealSectionScores();}}},
            	   {name: "Sep 25", y: tDate3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");sessionStorage.setItem("selectTestDateFull", "Sep 25, 2015");revealSectionScores();}}},
            	   {name: "Oct 2", y: tDate4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");sessionStorage.setItem("selectTestDateFull", "Oct 2, 2015");revealSectionScores();}}},
            	   {name: "Oct 9", y: tDate5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");sessionStorage.setItem("selectTestDateFull", "Oct 9, 2015");revealSectionScores();}}},
            	   {name: "Oct 16", y: tDate6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");sessionStorage.setItem("selectTestDateFull", "Oct 16, 2015");revealSectionScores();}}},
            	   {name: "Oct 23", y: tDate7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");sessionStorage.setItem("selectTestDateFull", "Oct 23, 2015");revealSectionScores();}}},
            	   {name: "Oct 30", y: tDate8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");sessionStorage.setItem("selectTestDateFull", "Oct 30, 2015");revealSectionScores();}}},
            	   {name: "Nov 6", y: tDate9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");sessionStorage.setItem("selectTestDateFull", "Nov 6, 2015");revealSectionScores();}}},
            	   {name: "Nov 13", y: tDate10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");sessionStorage.setItem("selectTestDateFull", "Nov 13, 2015");revealSectionScores();}}},
            	   {name: "Nov 20", y: tDate11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");sessionStorage.setItem("selectTestDateFull", "Nov 20, 2015");revealSectionScores();}}},
            	   {name: "Nov 27", y: tDate12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");sessionStorage.setItem("selectTestDateFull", "Nov 27, 2015");revealSectionScores();}}},
            	   {name: "Dec 4", y: tDate13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");sessionStorage.setItem("selectTestDateFull", "Dec 4, 2015");revealSectionScores();}}},
            	   {name: "Dec 11", y: tDate14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");sessionStorage.setItem("selectTestDateFull", "Dec 11, 2015");revealSectionScores();}}},
            	   {name: "Dec 18", y: tDate15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");sessionStorage.setItem("selectTestDateFull", "Dec 18, 2015");revealSectionScores();}}}]
        }],	
    });
}

function teacher2Points() {
	tDate1 = Number(sessionStorage["S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate2 = Number(sessionStorage["S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate3 = Number(sessionStorage["S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate4 = Number(sessionStorage["O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate5 = Number(sessionStorage["O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate6 = Number(sessionStorage["O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate7 = Number(sessionStorage["O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate8 = Number(sessionStorage["O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate9 = Number(sessionStorage["N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate10 = Number(sessionStorage["N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate11 = Number(sessionStorage["N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate12 = Number(sessionStorage["N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate13 = Number(sessionStorage["D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate14 = Number(sessionStorage["D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDate15 = Number(sessionStorage["D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
}

function revealSectionScores() {
	var a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat1"]) / 10 * 100;
	var b = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat2"]) / 10 * 100;
	var c = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat3"]) / 10 * 100;
	var d = "Notes - " + sessionStorage[sessionStorage.selectStudent + "name"] + " - " + sessionStorage.selectTestDateFull;
	var e = "Strand Scores - " + sessionStorage.selectTestDateFull;
	
	document.getElementById("container2").innerHTML = a + "%";
	document.getElementById("container3").innerHTML = b + "%";
	document.getElementById("container4").innerHTML = c + "%";
	document.getElementById("notesLegend").innerHTML = d;
	document.getElementById("strandScoresLegend").innerHTML = e;
	
	document.getElementById("container2").style.display = 'table-cell';
	document.getElementById("container3").style.display = 'table-cell';
	document.getElementById("container4").style.display = 'table-cell';
	document.getElementById("strandScoresFieldset").style.display = 'inherit';
	document.getElementById("notesFieldset").style.display = 'inherit';
}

function resetVisible() {
	document.getElementById("container2").style.display = 'none';
	document.getElementById("container3").style.display = 'none';
	document.getElementById("container4").style.display = 'none';
	document.getElementById("container").style.display = 'none';
	document.getElementById("studentNameBox").style.visibility='hidden';
	document.getElementById("strandScoresFieldset").style.display ='none';
	document.getElementById("notesFieldset").style.display ='none';
	document.getElementById("scorecardTable").style.display = "none";
	document.getElementById("buttonFooter").style.display = "none";
}

function stdNames2() {
	var a;
	var b = document.getElementById("scoreConstraint").value;
	
	document.getElementById("std1-1").innerHTML = sessionStorage[tStudent1 + "name"];
	document.getElementById("std2-1").innerHTML = sessionStorage[tStudent2 + "name"];
	document.getElementById("std3-1").innerHTML = sessionStorage[tStudent3 + "name"];
	document.getElementById("std4-1").innerHTML = sessionStorage[tStudent4 + "name"];
	document.getElementById("std5-1").innerHTML = sessionStorage[tStudent5 + "name"];
	document.getElementById("std6-1").innerHTML = sessionStorage[tStudent6 + "name"];
	document.getElementById("std7-1").innerHTML = sessionStorage[tStudent7 + "name"];
	document.getElementById("std8-1").innerHTML = sessionStorage[tStudent8 + "name"];
	document.getElementById("std9-1").innerHTML = sessionStorage[tStudent9 + "name"];
	document.getElementById("std10-1").innerHTML = sessionStorage[tStudent10 + "name"];
	document.getElementById("std11-1").innerHTML = sessionStorage[tStudent11 + "name"];
	document.getElementById("std12-1").innerHTML = sessionStorage[tStudent12 + "name"];
	document.getElementById("std13-1").innerHTML = sessionStorage[tStudent13 + "name"];
	document.getElementById("std14-1").innerHTML = sessionStorage[tStudent14 + "name"];
	document.getElementById("std15-1").innerHTML = sessionStorage[tStudent15 + "name"];
	document.getElementById("std16-1").innerHTML = sessionStorage[tStudent16 + "name"];
	document.getElementById("std17-1").innerHTML = sessionStorage[tStudent17 + "name"];
	document.getElementById("std18-1").innerHTML = sessionStorage[tStudent18 + "name"];
	document.getElementById("std19-1").innerHTML = sessionStorage[tStudent19 + "name"];
	document.getElementById("std20-1").innerHTML = sessionStorage[tStudent20 + "name"];
	
	document.getElementById("std1-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr1").style.display = "none";};
		if (a < b) {document.getElementById("tr1").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr1").style.display = "none";};
		if (a > b) {document.getElementById("tr1").style.display = "table-row";};
	};
	
	document.getElementById("std2-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr2").style.display = "none";};
		if (a < b) {document.getElementById("tr2").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr2").style.display = "none";};
		if (a > b) {document.getElementById("tr2").style.display = "table-row";};
	};
	
	document.getElementById("std3-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr3").style.display = "none";};
		if (a < b) {document.getElementById("tr3").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr3").style.display = "none";};
		if (a > b) {document.getElementById("tr3").style.display = "table-row";};
	};

	document.getElementById("std4-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr4").style.display = "none";};
		if (a < b) {document.getElementById("tr4").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr4").style.display = "none";};
		if (a > b) {document.getElementById("tr4").style.display = "table-row";};
	};

	document.getElementById("std5-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr5").style.display = "none";};
		if (a < b) {document.getElementById("tr5").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr5").style.display = "none";};
		if (a > b) {document.getElementById("tr5").style.display = "table-row";};
	};

	document.getElementById("std6-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr6").style.display = "none";};
		if (a < b) {document.getElementById("tr6").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr6").style.display = "none";};
		if (a > b) {document.getElementById("tr6").style.display = "table-row";};
	};

	document.getElementById("std7-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr7").style.display = "none";};
		if (a < b) {document.getElementById("tr7").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr7").style.display = "none";};
		if (a > b) {document.getElementById("tr7").style.display = "table-row";};
	};

	document.getElementById("std8-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr8").style.display = "none";};
		if (a < b) {document.getElementById("tr8").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr8").style.display = "none";};
		if (a > b) {document.getElementById("tr8").style.display = "table-row";};
	};

	document.getElementById("std9-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr9").style.display = "none";};
		if (a < b) {document.getElementById("tr9").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr9").style.display = "none";};
		if (a > b) {document.getElementById("tr9").style.display = "table-row";};
	};

	document.getElementById("std10-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr10").style.display = "none";};
		if (a < b) {document.getElementById("tr10").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr10").style.display = "none";};
		if (a > b) {document.getElementById("tr10").style.display = "table-row";};
	};

	document.getElementById("std11-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr11").style.display = "none";};
		if (a < b) {document.getElementById("tr11").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr11").style.display = "none";};
		if (a > b) {document.getElementById("tr11").style.display = "table-row";};
	};
	
	document.getElementById("std12-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr12").style.display = "none";};
		if (a < b) {document.getElementById("tr12").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr12").style.display = "none";};
		if (a > b) {document.getElementById("tr12").style.display = "table-row";};
	};
	
	document.getElementById("std13-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr13").style.display = "none";};
		if (a < b) {document.getElementById("tr13").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr13").style.display = "none";};
		if (a > b) {document.getElementById("tr13").style.display = "table-row";};
	};
	
	document.getElementById("std14-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr14").style.display = "none";};
		if (a < b) {document.getElementById("tr14").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr14").style.display = "none";};
		if (a > b) {document.getElementById("tr14").style.display = "table-row";};
	};
	
	document.getElementById("std15-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr15").style.display = "none";};
		if (a < b) {document.getElementById("tr15").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr15").style.display = "none";};
		if (a > b) {document.getElementById("tr15").style.display = "table-row";};
	};
	
	document.getElementById("std16-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr16").style.display = "none";};
		if (a < b) {document.getElementById("tr16").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr16").style.display = "none";};
		if (a > b) {document.getElementById("tr16").style.display = "table-row";};
	};
	
	document.getElementById("std17-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr17").style.display = "none";};
		if (a < b) {document.getElementById("tr17").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr17").style.display = "none";};
		if (a > b) {document.getElementById("tr17").style.display = "table-row";};
	};
	
	document.getElementById("std18-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr18").style.display = "none";};
		if (a < b) {document.getElementById("tr18").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr18").style.display = "none";};
		if (a > b) {document.getElementById("tr18").style.display = "table-row";};
	};
	
	document.getElementById("std19-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr19").style.display = "none";};
		if (a < b) {document.getElementById("tr19").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr19").style.display = "none";};
		if (a > b) {document.getElementById("tr19").style.display = "table-row";};
	};
	
	document.getElementById("std20-cat1").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat1"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat1"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr20").style.display = "none";};
		if (a < b) {document.getElementById("tr20").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr20").style.display = "none";};
		if (a > b) {document.getElementById("tr20").style.display = "table-row";};
	};
	
	document.getElementById("std1-2").innerHTML = sessionStorage[tStudent1 + "name"];
	document.getElementById("std2-2").innerHTML = sessionStorage[tStudent2 + "name"];
	document.getElementById("std3-2").innerHTML = sessionStorage[tStudent3 + "name"];
	document.getElementById("std4-2").innerHTML = sessionStorage[tStudent4 + "name"];
	document.getElementById("std5-2").innerHTML = sessionStorage[tStudent5 + "name"];
	document.getElementById("std6-2").innerHTML = sessionStorage[tStudent6 + "name"];
	document.getElementById("std7-2").innerHTML = sessionStorage[tStudent7 + "name"];
	document.getElementById("std8-2").innerHTML = sessionStorage[tStudent8 + "name"];
	document.getElementById("std9-2").innerHTML = sessionStorage[tStudent9 + "name"];
	document.getElementById("std10-2").innerHTML = sessionStorage[tStudent10 + "name"];
	document.getElementById("std11-2").innerHTML = sessionStorage[tStudent11 + "name"];
	document.getElementById("std12-2").innerHTML = sessionStorage[tStudent12 + "name"];
	document.getElementById("std13-2").innerHTML = sessionStorage[tStudent13 + "name"];
	document.getElementById("std14-2").innerHTML = sessionStorage[tStudent14 + "name"];
	document.getElementById("std15-2").innerHTML = sessionStorage[tStudent15 + "name"];
	document.getElementById("std16-2").innerHTML = sessionStorage[tStudent16 + "name"];
	document.getElementById("std17-2").innerHTML = sessionStorage[tStudent17 + "name"];
	document.getElementById("std18-2").innerHTML = sessionStorage[tStudent18 + "name"];
	document.getElementById("std19-2").innerHTML = sessionStorage[tStudent19 + "name"];
	document.getElementById("std20-2").innerHTML = sessionStorage[tStudent20 + "name"];
	
	document.getElementById("std1-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr21").style.display = "none";};
		if (a < b) {document.getElementById("tr21").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr21").style.display = "none";};
		if (a > b) {document.getElementById("tr21").style.display = "table-row";};
	};
	
	document.getElementById("std2-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr22").style.display = "none";};
		if (a < b) {document.getElementById("tr22").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr22").style.display = "none";};
		if (a > b) {document.getElementById("tr22").style.display = "table-row";};
	};
	
	document.getElementById("std3-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr23").style.display = "none";};
		if (a < b) {document.getElementById("tr23").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr23").style.display = "none";};
		if (a > b) {document.getElementById("tr23").style.display = "table-row";};
	};
	document.getElementById("std4-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr24").style.display = "none";};
		if (a < b) {document.getElementById("tr24").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr24").style.display = "none";};
		if (a > b) {document.getElementById("tr24").style.display = "table-row";};
	};
	
	document.getElementById("std5-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr25").style.display = "none";};
		if (a < b) {document.getElementById("tr25").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr25").style.display = "none";};
		if (a > b) {document.getElementById("tr25").style.display = "table-row";};
	};
	
	document.getElementById("std6-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr26").style.display = "none";};
		if (a < b) {document.getElementById("tr26").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr26").style.display = "none";};
		if (a > b) {document.getElementById("tr26").style.display = "table-row";};
	};
	
	document.getElementById("std7-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr27").style.display = "none";};
		if (a < b) {document.getElementById("tr27").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr27").style.display = "none";};
		if (a > b) {document.getElementById("tr27").style.display = "table-row";};
	};
	
	document.getElementById("std8-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr28").style.display = "none";};
		if (a < b) {document.getElementById("tr28").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr28").style.display = "none";};
		if (a > b) {document.getElementById("tr28").style.display = "table-row";};
	};
	
	document.getElementById("std9-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr29").style.display = "none";};
		if (a < b) {document.getElementById("tr29").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr29").style.display = "none";};
		if (a > b) {document.getElementById("tr29").style.display = "table-row";};
	};
	
	document.getElementById("std10-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr30").style.display = "none";};
		if (a < b) {document.getElementById("tr30").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr30").style.display = "none";};
		if (a > b) {document.getElementById("tr30").style.display = "table-row";};
	};
	
	document.getElementById("std11-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr31").style.display = "none";};
		if (a < b) {document.getElementById("tr31").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr31").style.display = "none";};
		if (a > b) {document.getElementById("tr31").style.display = "table-row";};
	};
	
	document.getElementById("std12-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr32").style.display = "none";};
		if (a < b) {document.getElementById("tr32").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr32").style.display = "none";};
		if (a > b) {document.getElementById("tr32").style.display = "table-row";};
	};
	
	document.getElementById("std13-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr33").style.display = "none";};
		if (a < b) {document.getElementById("tr33").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr33").style.display = "none";};
		if (a > b) {document.getElementById("tr33").style.display = "table-row";};
	};
	
	document.getElementById("std14-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr34").style.display = "none";};
		if (a < b) {document.getElementById("tr34").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr34").style.display = "none";};
		if (a > b) {document.getElementById("tr34").style.display = "table-row";};
	};
	
	document.getElementById("std15-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr35").style.display = "none";};
		if (a < b) {document.getElementById("tr35").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr35").style.display = "none";};
		if (a > b) {document.getElementById("tr35").style.display = "table-row";};
	};
	
	document.getElementById("std16-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr36").style.display = "none";};
		if (a < b) {document.getElementById("tr36").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr36").style.display = "none";};
		if (a > b) {document.getElementById("tr36").style.display = "table-row";};
	};
	
	document.getElementById("std17-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr37").style.display = "none";};
		if (a < b) {document.getElementById("tr37").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr37").style.display = "none";};
		if (a > b) {document.getElementById("tr37").style.display = "table-row";};
	};
	
	document.getElementById("std18-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr38").style.display = "none";};
		if (a < b) {document.getElementById("tr38").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr38").style.display = "none";};
		if (a > b) {document.getElementById("tr38").style.display = "table-row";};
	};
	
	document.getElementById("std19-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr39").style.display = "none";};
		if (a < b) {document.getElementById("tr39").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr39").style.display = "none";};
		if (a > b) {document.getElementById("tr39").style.display = "table-row";};
	};
	
	document.getElementById("std20-cat2").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat2"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat2"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr40").style.display = "none";};
		if (a < b) {document.getElementById("tr40").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr40").style.display = "none";};
		if (a > b) {document.getElementById("tr40").style.display = "table-row";};
	};
	
	document.getElementById("std1-3").innerHTML = sessionStorage[tStudent1 + "name"];
	document.getElementById("std2-3").innerHTML = sessionStorage[tStudent2 + "name"];
	document.getElementById("std3-3").innerHTML = sessionStorage[tStudent3 + "name"];
	document.getElementById("std4-3").innerHTML = sessionStorage[tStudent4 + "name"];
	document.getElementById("std5-3").innerHTML = sessionStorage[tStudent5 + "name"];
	document.getElementById("std6-3").innerHTML = sessionStorage[tStudent6 + "name"];
	document.getElementById("std7-3").innerHTML = sessionStorage[tStudent7 + "name"];
	document.getElementById("std8-3").innerHTML = sessionStorage[tStudent8 + "name"];
	document.getElementById("std9-3").innerHTML = sessionStorage[tStudent9 + "name"];
	document.getElementById("std10-3").innerHTML = sessionStorage[tStudent10 + "name"];
	document.getElementById("std11-3").innerHTML = sessionStorage[tStudent11 + "name"];
	document.getElementById("std12-3").innerHTML = sessionStorage[tStudent12 + "name"];
	document.getElementById("std13-3").innerHTML = sessionStorage[tStudent13 + "name"];
	document.getElementById("std14-3").innerHTML = sessionStorage[tStudent14 + "name"];
	document.getElementById("std15-3").innerHTML = sessionStorage[tStudent15 + "name"];
	document.getElementById("std16-3").innerHTML = sessionStorage[tStudent16 + "name"];
	document.getElementById("std17-3").innerHTML = sessionStorage[tStudent17 + "name"];
	document.getElementById("std18-3").innerHTML = sessionStorage[tStudent18 + "name"];
	document.getElementById("std19-3").innerHTML = sessionStorage[tStudent19 + "name"];
	document.getElementById("std20-3").innerHTML = sessionStorage[tStudent20 + "name"];
	
	document.getElementById("std1-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr41").style.display = "none";};
		if (a < b) {document.getElementById("tr41").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr41").style.display = "none";};
		if (a > b) {document.getElementById("tr41").style.display = "table-row";};
	};
	
	document.getElementById("std2-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr42").style.display = "none";};
		if (a < b) {document.getElementById("tr42").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr42").style.display = "none";};
		if (a > b) {document.getElementById("tr42").style.display = "table-row";};
	};
	
	document.getElementById("std3-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr43").style.display = "none";};
		if (a < b) {document.getElementById("tr43").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr43").style.display = "none";};
		if (a > b) {document.getElementById("tr43").style.display = "table-row";};
	};
	
	document.getElementById("std4-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr44").style.display = "none";};
		if (a < b) {document.getElementById("tr44").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr44").style.display = "none";};
		if (a > b) {document.getElementById("tr44").style.display = "table-row";};
	};
	
	document.getElementById("std5-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr45").style.display = "none";};
		if (a < b) {document.getElementById("tr45").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr45").style.display = "none";};
		if (a > b) {document.getElementById("tr45").style.display = "table-row";};
	};
	
	document.getElementById("std6-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr46").style.display = "none";};
		if (a < b) {document.getElementById("tr46").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr46").style.display = "none";};
		if (a > b) {document.getElementById("tr46").style.display = "table-row";};
	};
	
	document.getElementById("std7-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr47").style.display = "none";};
		if (a < b) {document.getElementById("tr47").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr47").style.display = "none";};
		if (a > b) {document.getElementById("tr47").style.display = "table-row";};
	};
	
	document.getElementById("std8-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr48").style.display = "none";};
		if (a < b) {document.getElementById("tr48").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr48").style.display = "none";};
		if (a > b) {document.getElementById("tr48").style.display = "table-row";};
	};
	
	document.getElementById("std9-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr49").style.display = "none";};
		if (a < b) {document.getElementById("tr49").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr49").style.display = "none";};
		if (a > b) {document.getElementById("tr49").style.display = "table-row";};
	};
	
	document.getElementById("std10-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr50").style.display = "none";};
		if (a < b) {document.getElementById("tr50").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr50").style.display = "none";};
		if (a > b) {document.getElementById("tr50").style.display = "table-row";};
	};
	
	document.getElementById("std11-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr51").style.display = "none";};
		if (a < b) {document.getElementById("tr51").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr51").style.display = "none";};
		if (a > b) {document.getElementById("tr51").style.display = "table-row";};
	};
	
	document.getElementById("std12-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr52").style.display = "none";};
		if (a < b) {document.getElementById("tr52").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr52").style.display = "none";};
		if (a > b) {document.getElementById("tr52").style.display = "table-row";};
	};
	
	document.getElementById("std13-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr53").style.display = "none";};
		if (a < b) {document.getElementById("tr53").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr53").style.display = "none";};
		if (a > b) {document.getElementById("tr53").style.display = "table-row";};
	};
	
	document.getElementById("std14-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr54").style.display = "none";};
		if (a < b) {document.getElementById("tr54").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr54").style.display = "none";};
		if (a > b) {document.getElementById("tr54").style.display = "table-row";};
	};
	
	document.getElementById("std15-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr55").style.display = "none";};
		if (a < b) {document.getElementById("tr55").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr55").style.display = "none";};
		if (a > b) {document.getElementById("tr55").style.display = "table-row";};
	};
	
	document.getElementById("std16-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr56").style.display = "none";};
		if (a < b) {document.getElementById("tr56").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr56").style.display = "none";};
		if (a > b) {document.getElementById("tr56").style.display = "table-row";};
	};
	
	document.getElementById("std17-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr57").style.display = "none";};
		if (a < b) {document.getElementById("tr57").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr57").style.display = "none";};
		if (a > b) {document.getElementById("tr57").style.display = "table-row";};
	};
	
	document.getElementById("std18-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr58").style.display = "none";};
		if (a < b) {document.getElementById("tr58").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr58").style.display = "none";};
		if (a > b) {document.getElementById("tr58").style.display = "table-row";};
	};
	
	document.getElementById("std19-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr59").style.display = "none";};
		if (a < b) {document.getElementById("tr59").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr59").style.display = "none";};
		if (a > b) {document.getElementById("tr59").style.display = "table-row";};
	};
	
	document.getElementById("std20-cat3").innerHTML = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat3"]) / 10 * 100;
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "cat3"]) / 10 * 100;
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr60").style.display = "none";};
		if (a < b) {document.getElementById("tr60").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr60").style.display = "none";};
		if (a > b) {document.getElementById("tr60").style.display = "table-row";};
	};
	
	document.getElementById("std1-4").innerHTML = sessionStorage[tStudent1 + "name"];
	document.getElementById("std2-4").innerHTML = sessionStorage[tStudent2 + "name"];
	document.getElementById("std3-4").innerHTML = sessionStorage[tStudent3 + "name"];
	document.getElementById("std4-4").innerHTML = sessionStorage[tStudent4 + "name"];
	document.getElementById("std5-4").innerHTML = sessionStorage[tStudent5 + "name"];
	document.getElementById("std6-4").innerHTML = sessionStorage[tStudent6 + "name"];
	document.getElementById("std7-4").innerHTML = sessionStorage[tStudent7 + "name"];
	document.getElementById("std8-4").innerHTML = sessionStorage[tStudent8 + "name"];
	document.getElementById("std9-4").innerHTML = sessionStorage[tStudent9 + "name"];
	document.getElementById("std10-4").innerHTML = sessionStorage[tStudent10 + "name"];
	document.getElementById("std11-4").innerHTML = sessionStorage[tStudent11 + "name"];
	document.getElementById("std12-4").innerHTML = sessionStorage[tStudent12 + "name"];
	document.getElementById("std13-4").innerHTML = sessionStorage[tStudent13 + "name"];
	document.getElementById("std14-4").innerHTML = sessionStorage[tStudent14 + "name"];
	document.getElementById("std15-4").innerHTML = sessionStorage[tStudent15 + "name"];
	document.getElementById("std16-4").innerHTML = sessionStorage[tStudent16 + "name"];
	document.getElementById("std17-4").innerHTML = sessionStorage[tStudent17 + "name"];
	document.getElementById("std18-4").innerHTML = sessionStorage[tStudent18 + "name"];
	document.getElementById("std19-4").innerHTML = sessionStorage[tStudent19 + "name"];
	document.getElementById("std20-4").innerHTML = sessionStorage[tStudent20 + "name"];
	
	document.getElementById("std1-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent1 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr61").style.display = "none";};
		if (a < b) {document.getElementById("tr61").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr61").style.display = "none";};
		if (a > b) {document.getElementById("tr61").style.display = "table-row";};
	};
	
	document.getElementById("std2-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent2 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr62").style.display = "none";};
		if (a < b) {document.getElementById("tr62").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr62").style.display = "none";};
		if (a > b) {document.getElementById("tr62").style.display = "table-row";};
	};
	
	document.getElementById("std3-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent3 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr63").style.display = "none";};
		if (a < b) {document.getElementById("tr63").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr63").style.display = "none";};
		if (a > b) {document.getElementById("tr63").style.display = "table-row";};
	};
	
	document.getElementById("std4-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent4 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr64").style.display = "none";};
		if (a < b) {document.getElementById("tr64").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr64").style.display = "none";};
		if (a > b) {document.getElementById("tr64").style.display = "table-row";};
	};
	
	document.getElementById("std5-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent5 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr65").style.display = "none";};
		if (a < b) {document.getElementById("tr65").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr65").style.display = "none";};
		if (a > b) {document.getElementById("tr65").style.display = "table-row";};
	};
	
	document.getElementById("std6-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent6 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr66").style.display = "none";};
		if (a < b) {document.getElementById("tr66").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr66").style.display = "none";};
		if (a > b) {document.getElementById("tr66").style.display = "table-row";};
	};
	
	document.getElementById("std7-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent7 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr67").style.display = "none";};
		if (a < b) {document.getElementById("tr67").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr67").style.display = "none";};
		if (a > b) {document.getElementById("tr67").style.display = "table-row";};
	};
	
	document.getElementById("std8-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent8 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr68").style.display = "none";};
		if (a < b) {document.getElementById("tr68").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr68").style.display = "none";};
		if (a > b) {document.getElementById("tr68").style.display = "table-row";};
	};
	
	document.getElementById("std9-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent9 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr69").style.display = "none";};
		if (a < b) {document.getElementById("tr69").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr69").style.display = "none";};
		if (a > b) {document.getElementById("tr69").style.display = "table-row";};
	};
	
	document.getElementById("std10-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent10 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr70").style.display = "none";};
		if (a < b) {document.getElementById("tr70").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr70").style.display = "none";};
		if (a > b) {document.getElementById("tr70").style.display = "table-row";};
	};
	
	document.getElementById("std11-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent11 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr71").style.display = "none";};
		if (a < b) {document.getElementById("tr71").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr71").style.display = "none";};
		if (a > b) {document.getElementById("tr71").style.display = "table-row";};
	};
	
	document.getElementById("std12-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent12 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr72").style.display = "none";};
		if (a < b) {document.getElementById("tr72").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr72").style.display = "none";};
		if (a > b) {document.getElementById("tr72").style.display = "table-row";};
	};
	
	document.getElementById("std13-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent13 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr73").style.display = "none";};
		if (a < b) {document.getElementById("tr73").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr73").style.display = "none";};
		if (a > b) {document.getElementById("tr73").style.display = "table-row";};
	};
	
	document.getElementById("std14-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent14 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr74").style.display = "none";};
		if (a < b) {document.getElementById("tr74").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr74").style.display = "none";};
		if (a > b) {document.getElementById("tr74").style.display = "table-row";};
	};
	
	document.getElementById("std15-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent15 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr75").style.display = "none";};
		if (a < b) {document.getElementById("tr75").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr75").style.display = "none";};
		if (a > b) {document.getElementById("tr75").style.display = "table-row";};
	};
	
	document.getElementById("std16-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent16 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr76").style.display = "none";};
		if (a < b) {document.getElementById("tr76").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr76").style.display = "none";};
		if (a > b) {document.getElementById("tr76").style.display = "table-row";};
	};
	
	document.getElementById("std17-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent17 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr77").style.display = "none";};
		if (a < b) {document.getElementById("tr77").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr77").style.display = "none";};
		if (a > b) {document.getElementById("tr77").style.display = "table-row";};
	};
	
	document.getElementById("std18-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent18 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr78").style.display = "none";};
		if (a < b) {document.getElementById("tr78").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr78").style.display = "none";};
		if (a > b) {document.getElementById("tr78").style.display = "table-row";};
	};
	
	document.getElementById("std19-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent19 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr79").style.display = "none";};
		if (a < b) {document.getElementById("tr79").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr79").style.display = "none";};
		if (a > b) {document.getElementById("tr79").style.display = "table-row";};
	};
	
	document.getElementById("std20-cat4").innerHTML = sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "pct"];
	a = Number(sessionStorage[sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + tStudent20 + "pct"]);
	if (document.getElementById("select-custom-4").value == "A") {
		if (a > b) {document.getElementById("tr80").style.display = "none";};
		if (a < b) {document.getElementById("tr80").style.display = "table-row";};
	}
	else if (document.getElementById("select-custom-4").value == "B") {
		if (a < b) {document.getElementById("tr80").style.display = "none";};
		if (a > b) {document.getElementById("tr80").style.display = "table-row";};
	};
}

function currentTestSelection() {
	var a2 = document.getElementById("select-custom-5").value;
	sessionStorage.setItem("selectTestDate", a2);
}

function initialTestSelection() {
	sessionStorage.setItem("selectTestDate", "N27");
	document.getElementById("select-custom-5").value = "N27";
}

function gotoStudent1() {
	sessionStorage.setItem("selectStudent", tStudent1);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent2() {
	sessionStorage.setItem("selectStudent", tStudent2);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent3() {
	sessionStorage.setItem("selectStudent", tStudent3);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent4() {
	sessionStorage.setItem("selectStudent", tStudent4);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent5() {
	sessionStorage.setItem("selectStudent", tStudent5);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent6() {
	sessionStorage.setItem("selectStudent", tStudent6);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent7() {
	sessionStorage.setItem("selectStudent", tStudent7);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent8() {
	sessionStorage.setItem("selectStudent", tStudent8);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent9() {
	sessionStorage.setItem("selectStudent", tStudent9);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent10() {
	sessionStorage.setItem("selectStudent", tStudent10);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent11() {
	sessionStorage.setItem("selectStudent", tStudent11);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent12() {
	sessionStorage.setItem("selectStudent", tStudent12);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent13() {
	sessionStorage.setItem("selectStudent", tStudent13);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent14() {
	sessionStorage.setItem("selectStudent", tStudent14);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent15() {
	sessionStorage.setItem("selectStudent", tStudent15);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent16() {
	sessionStorage.setItem("selectStudent", tStudent16);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent17() {
	sessionStorage.setItem("selectStudent", tStudent17);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent18() {
	sessionStorage.setItem("selectStudent", tStudent18);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent19() {
	sessionStorage.setItem("selectStudent", tStudent19);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function gotoStudent20() {
	sessionStorage.setItem("selectStudent", tStudent20);
	window.open("http://neols.com/eqao_teacher9.html","_self");
}

function hideQuestions1() {
	if (document.getElementById("simTypeSelect").value == "SelectedQ") {
		document.getElementById("questionFieldset").style.display = "table-row";
		document.getElementById("strandRow").style.display = "table-row";
		document.getElementById("ratingRow").style.display = "table-row";
		document.getElementById("libraryRow").style.display = "table-row";
		document.getElementById("typeRow").style.display = "table-row";
		document.getElementById("simPreview").style.display = "table-row";
	};
	
	if (document.getElementById("simTypeSelect").value == "RandomQ") {
		document.getElementById("questionFieldset").style.display = "none";
		document.getElementById("strandRow").style.display = "none";
		document.getElementById("ratingRow").style.display = "none";
		document.getElementById("libraryRow").style.display = "none";
		document.getElementById("typeRow").style.display = "none";
		document.getElementById("simPreview").style.display = "none";
	};
}

function hideQuestions2() {
	if (document.getElementById("simTypeSelect").value == "SelectedQ") {
		document.getElementById("questionFieldset").style.display = "table-row";
		document.getElementById("strandRow").style.display = "table-row";
		document.getElementById("ratingRow").style.display = "table-row";
		document.getElementById("libraryRow").style.display = "table-row";
		document.getElementById("typeRow").style.display = "table-row";
		document.getElementById("numQRow").style.display = "none";
	};
	
	if (document.getElementById("simTypeSelect").value == "RandomQ") {
		document.getElementById("questionFieldset").style.display = "none";
		document.getElementById("strandRow").style.display = "none";
		document.getElementById("ratingRow").style.display = "none";
		document.getElementById("libraryRow").style.display = "none";
		document.getElementById("typeRow").style.display = "none";
		document.getElementById("numQRow").style.display = "table-row";
	};
}

function hideQTypes() {
	if (document.getElementById("typeSelect").value == "multi") {
		document.getElementById("q1").style.display = "table-row";
		document.getElementById("q2").style.display = "table-row";
		document.getElementById("q3").style.display = "table-row";
		document.getElementById("q4").style.display = "table-row";
		document.getElementById("q5").style.display = "table-row";
		document.getElementById("q6").style.display = "table-row";
		document.getElementById("q7").style.display = "none";
		document.getElementById("q8").style.display = "none";
		document.getElementById("q9").style.display = "table-row";
		document.getElementById("q10").style.display = "table-row";
		document.getElementById("q11").style.display = "table-row";
		document.getElementById("q12").style.display = "table-row";
		document.getElementById("q13").style.display = "table-row";
	};
	
	if (document.getElementById("typeSelect").value == "text") {
		document.getElementById("q1").style.display = "none";
		document.getElementById("q2").style.display = "none";
		document.getElementById("q3").style.display = "none";
		document.getElementById("q4").style.display = "none";
		document.getElementById("q5").style.display = "none";
		document.getElementById("q6").style.display = "none";
		document.getElementById("q7").style.display = "table-row";
		document.getElementById("q8").style.display = "table-row";
		document.getElementById("q9").style.display = "none";
		document.getElementById("q10").style.display = "none";
		document.getElementById("q11").style.display = "none";
		document.getElementById("q12").style.display = "none";
		document.getElementById("q13").style.display = "none";
	};
	
	if (document.getElementById("typeSelect").value == "all") {
		document.getElementById("q1").style.display = "table-row";
		document.getElementById("q2").style.display = "table-row";
		document.getElementById("q3").style.display = "table-row";
		document.getElementById("q4").style.display = "table-row";
		document.getElementById("q5").style.display = "table-row";
		document.getElementById("q6").style.display = "table-row";
		document.getElementById("q7").style.display = "table-row";
		document.getElementById("q8").style.display = "table-row";
		document.getElementById("q9").style.display = "table-row";
		document.getElementById("q10").style.display = "table-row";
		document.getElementById("q11").style.display = "table-row";
		document.getElementById("q12").style.display = "table-row";
		document.getElementById("q13").style.display = "table-row";
	};
}

function simCheck() {
	var a = document.getElementById("gradeBox").value;
	sessionStorage.setItem("selectGrade", a);
	
	a = document.getElementById("courseBox").value;
	sessionStorage.setItem("selectCourse", a);
	
	a = document.getElementById("classBox").value;
	sessionStorage.setItem("selectClass", a);
	
	a = document.getElementById("groupBox").value;
	sessionStorage.setItem("selectGroup", a);
	
	a = document.getElementById("studentBox").value;
	sessionStorage.setItem("selectStudent", a);
	
	a = document.getElementById("simTypeSelect").value;
	sessionStorage.setItem("selectAssignType", a);
	
	a = document.getElementById("libraryBox").value;
	sessionStorage.setItem("selectLibrary", a);

	a = document.getElementById("datepicker").value;
	var b = a.substring(0, 4);
	var c = a.substring(5, 7);
	var d = a.substring(8, 10);
	
	sessionStorage.setItem("simDate", a);
	sessionStorage.setItem("simYear", b);
	sessionStorage.setItem("simMonth", c);
	sessionStorage.setItem("simDay", d);
	
	a = document.getElementById("datepicker2").value;
	var b = a.substring(0, 4);
	var c = a.substring(5, 7);
	var d = a.substring(8, 10);
	
	sessionStorage.setItem("simDate2", a);
	sessionStorage.setItem("simYear2", b);
	sessionStorage.setItem("simMonth2", c);
	sessionStorage.setItem("simDay2", d);
	
	sessionStorage.setItem("qNumber1", "");
	sessionStorage.setItem("qNumber2", "");
	sessionStorage.setItem("qNumber3", "");
	sessionStorage.setItem("qNumber4", "");
	sessionStorage.setItem("qNumber5", "");
	sessionStorage.setItem("qNumber6", "");
	sessionStorage.setItem("qNumber7", "");
	sessionStorage.setItem("qNumber8", "");
	sessionStorage.setItem("qNumber9", "");
	sessionStorage.setItem("qNumber10", "");
	
	sessionStorage.setItem("qTextDetail1", "");
	sessionStorage.setItem("qTextDetail2", "");
	sessionStorage.setItem("qTextDetail3", "");
	sessionStorage.setItem("qTextDetail4", "");
	sessionStorage.setItem("qTextDetail5", "");
	sessionStorage.setItem("qTextDetail6", "");
	sessionStorage.setItem("qTextDetail7", "");
	sessionStorage.setItem("qTextDetail8", "");
	sessionStorage.setItem("qTextDetail9", "");
	sessionStorage.setItem("qTextDetail10", "");
	
	var counter = 1;
	var e;
	var f;
	
	a = document.getElementById("simTypeSelect").value;
	if (a == "RandomQ") {
		window.open("http://neols.com/eqao_teacher12A.html","_self");
	}
	else if (a == "SelectedQ") {
		if (document.getElementById("cb1").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener1").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext1").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb2").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener2").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext2").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb3").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener3").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext3").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb4").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener4").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext4").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb5").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener5").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext5").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb6").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener6").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext6").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb7").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener7").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext7").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb8").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener8").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext8").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb9").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener9").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext9").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb10").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener10").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext10").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb11").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener11").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext11").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb12").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener12").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext12").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};
		
		if (document.getElementById("cb13").checked == 1) {
			e = "qNumber" + counter;
			f = document.getElementById("opener13").innerHTML;
			sessionStorage.setItem(e, f);
			
			e = "qTextDetail" + counter;
			f = document.getElementById("qtext13").innerHTML;
			sessionStorage.setItem(e, f)
			
			counter = counter + 1;
		};

		window.open("http://neols.com/eqao_teacher12B.html","_self");
	};
}

function fillGrid() {
	if (sessionStorage.qNumber1 != "") {
		document.getElementById("qnum1").innerHTML = sessionStorage.qNumber1;
		document.getElementById("opener1").innerHTML = sessionStorage.qTextDetail1;}
	else {
		document.getElementById("qnum1").style.display = "none";
		document.getElementById("opener1").style.display = "none";};
	
	if (sessionStorage.qNumber2 != "") {
		document.getElementById("qnum2").innerHTML = sessionStorage.qNumber2;
		document.getElementById("opener2").innerHTML = sessionStorage.qTextDetail2;}
	else {
		document.getElementById("qnum2").style.display = "none";
		document.getElementById("opener2").style.display = "none";};
		
	if (sessionStorage.qNumber3 != "") {
		document.getElementById("qnum3").innerHTML = sessionStorage.qNumber3;
		document.getElementById("opener3").innerHTML = sessionStorage.qTextDetail3;}
	else {
		document.getElementById("qnum3").style.display = "none";
		document.getElementById("opener3").style.display = "none";};
		
	if (sessionStorage.qNumber4 != "") {
		document.getElementById("qnum4").innerHTML = sessionStorage.qNumber4;
		document.getElementById("opener4").innerHTML = sessionStorage.qTextDetail4;}
	else {
		document.getElementById("qnum4").style.display = "none";
		document.getElementById("opener4").style.display = "none";};
		
	if (sessionStorage.qNumber5 != "") {
		document.getElementById("qnum5").innerHTML = sessionStorage.qNumber5;
		document.getElementById("opener5").innerHTML = sessionStorage.qTextDetail5;}
	else {
		document.getElementById("qnum5").style.display = "none";
		document.getElementById("opener5").style.display = "none";};
		
	if (sessionStorage.qNumber6 != "") {
		document.getElementById("qnum6").innerHTML = sessionStorage.qNumber6;
		document.getElementById("opener6").innerHTML = sessionStorage.qTextDetail6;}
	else {
		document.getElementById("qnum6").style.display = "none";
		document.getElementById("opener6").style.display = "none";};
		
	if (sessionStorage.qNumber7 != "") {
		document.getElementById("qnum7").innerHTML = sessionStorage.qNumber7;
		document.getElementById("opener7").innerHTML = sessionStorage.qTextDetail7;}
	else {
		document.getElementById("qnum7").style.display = "none";
		document.getElementById("opener7").style.display = "none";};
		
	if (sessionStorage.qNumber8 != "") {
		document.getElementById("qnum8").innerHTML = sessionStorage.qNumber8;
		document.getElementById("opener8").innerHTML = sessionStorage.qTextDetail8;}
	else {
		document.getElementById("qnum8").style.display = "none";
		document.getElementById("opener8").style.display = "none";};
		
	if (sessionStorage.qNumber9 != "") {
		document.getElementById("qnum9").innerHTML = sessionStorage.qNumber9;
		document.getElementById("opener9").innerHTML = sessionStorage.qTextDetail9;}
	else {
		document.getElementById("qnum9").style.display = "none";
		document.getElementById("opener9").style.display = "none";};
		
	if (sessionStorage.qNumber10 != "") {
		document.getElementById("qnum10").innerHTML = sessionStorage.qNumber10;
		document.getElementById("opener10").innerHTML = sessionStorage.qTextDetail10;}
	else {
		document.getElementById("qnum10").style.display = "none";
		document.getElementById("opener10").style.display = "none";};
}

function gotoCalendar() {
	window.open("http://neols.com/eqao_teacher13.html","_self");
}

function openSim() {
	window.open("http://neols.com/eqao_test_1.html","_blank");
}

function returnToSim() {
	window.open("http://neols.com/eqao_teacher12.html","_self");
}

function fillEDate() {
	document.getElementById("datepicker2").value = document.getElementById("datepicker").value;
}

/* *************Calendar Testing*************** */
var sDate;
var sDay;
var sMonth;
var sYear;
var sHour;

var eDate;
var eDay;
var eMonth;
var eYear;
var eHour;

var descDetail;
var calType;
var calWidth;
var simSubjectLine;

function initCalendar() {
	sDate = sessionStorage.simDate;
	sDay = sessionStorage.simDay;
	sMonth = Number(sessionStorage.simMonth) - 1;
	sYear = sessionStorage.simYear;
	
	eDate = sessionStorage.simDate2;
	eDay = sessionStorage.simDay2;
	eMonth = Number(sessionStorage.simMonth2) - 1;
	eYear = sessionStorage.simYear2;
	
	if (sessionStorage.selectTarget == "Class") {
		if (sessionStorage.selectGrade == "3") {
			descDetail = "Grade 3 Math Assessment";
			if (sessionStorage.selectClass == "C1") {
				sHour = 9;
				eHour = 10;
				calType = "Grade 3 Class 1";
				simSubjectLine = "Math Sim: Grade 3 Class 1";}
			else if (sessionStorage.selectClass == "C2") {
				sHour = 11;
				eHour = 12;
				calType = "Grade 3 Class 2";
				simSubjectLine = "Math Sim: Grade 3 Class 2";}
			else if (sessionStorage.selectClass == "C3") {
				sHour = 13;
				eHour = 14
				calType = "Grade 3 Class 3";
				simSubjectLine = "Math Sim: Grade 3 Class 3";};
		}
		else {
			descDetail = "Grade 6 Math Assessment";
			if (sessionStorage.selectClass == "C1") {
				sHour = 10;
				eHour = 11;
				calType = "Grade 6 Class 1";
				simSubjectLine = "Math Sim: Grade 6 Class 1";}
			else if (sessionStorage.selectClass == "C2") {
				sHour = 14;
				eHour = 15;
				calType = "Grade 6 Class 2";
				simSubjectLine = "Math Sim: Grade 6 Class 2";}
			else if (sessionStorage.selectClass == "C3") {
				sHour = 15;
				eHour = 16;
				calType = "Grade 6 Class 3";
				simSubjectLine = "Math Sim: Grade 6 Class 3";};
		};
	}
	else if (sessionStorage.selectTarget == "Group") {
		if (sessionStorage.selectGrade == "3") {
			descDetail = "Grade 3 Math Assessment";
			if (sessionStorage.selectClass == "C1") {
				sHour = 9;
				eHour = 10;
				calType = "Grade 3 Class 1";
				simSubjectLine = "Math Sim: Group: " + sessionStorage.selectGroup;}
			else if (sessionStorage.selectClass == "C2") {
				sHour = 11;
				eHour = 12;
				calType = "Grade 3 Class 2";
				simSubjectLine = "Math Sim: Group: " + sessionStorage.selectGroup;}
			else if (sessionStorage.selectClass == "C3") {
				sHour = 13;
				eHour = 14
				calType = "Grade 3 Class 3";
				simSubjectLine = "Math Sim: Group: " + sessionStorage.selectGroup;};
		}
		else {
			descDetail = "Grade 6 Math Assessment";
			if (sessionStorage.selectClass == "C1") {
				sHour = 10;
				eHour = 11;
				calType = "Grade 6 Class 1";
				simSubjectLine = "Math Sim: Group: " + sessionStorage.selectGroup;}
			else if (sessionStorage.selectClass == "C2") {
				sHour = 14;
				eHour = 15;
				calType = "Grade 6 Class 2";
				simSubjectLine = "Math Sim: Group: " + sessionStorage.selectGroup;}
			else if (sessionStorage.selectClass == "C3") {
				sHour = 15;
				eHour = 16;
				calType = "Grade 6 Class 3";
				simSubjectLine = "Math Sim: Group: " + sessionStorage.selectGroup;};
		};
	}
	else {
		if (sessionStorage.selectGrade == "3") {
			descDetail = "Grade 3 Math Assessment";
			if (sessionStorage.selectClass == "C1") {
				sHour = 9;
				eHour = 10;
				calType = "Grade 3 Class 1";
				simSubjectLine = "Math Sim: Student: " + sessionStorage.selectStudent;}
			else if (sessionStorage.selectClass == "C2") {
				sHour = 11;
				eHour = 12;
				calType = "Grade 3 Class 2";
				simSubjectLine = "Math Sim: Student: " + sessionStorage.selectStudent;}
			else if (sessionStorage.selectClass == "C3") {
				sHour = 13;
				eHour = 14
				calType = "Grade 3 Class 3";
				simSubjectLine = "Math Sim: Student: " + sessionStorage.selectStudent;};
		}
		else {
			descDetail = "Grade 6 Math Assessment";
			if (sessionStorage.selectClass == "C1") {
				sHour = 10;
				eHour = 11;
				calType = "Grade 6 Class 1";
				simSubjectLine = "Math Sim: Student: " + sessionStorage.selectStudent;}
			else if (sessionStorage.selectClass == "C2") {
				sHour = 14;
				eHour = 15;
				calType = "Grade 6 Class 2";
				simSubjectLine = "Math Sim: Student: " + sessionStorage.selectStudent;}
			else if (sessionStorage.selectClass == "C3") {
				sHour = 15;
				eHour = 16;
				calType = "Grade 6 Class 3";
				simSubjectLine = "Math Sim: Student: " + sessionStorage.selectStudent;};
		};
	};
	
	calWidth = document.getElementById("scheduler").offsetWidth;
}

function simulationCalendar() {
	/*var b = "Grade 6 Math Sim";
	var c = "Subject Line 10";
	var d = "Grade 6 Class 3";*/

	var appointments = new Array();

            var appointment1 = {
                id: "id1",
                description: "Grade 3 Math Assessment",
                location: "",
                subject: "Math Sim",
                calendar: "Grade 3 Class 1",
                start: new Date(2015, 11, 4, 9, 0, 0),
                end: new Date(2015, 11, 4, 10, 0, 0)
            }
            
            var appointment2 = {
                id: "id2",
                description: "Grade 3 Math Assessment",
                location: "",
                subject: "Math Sim",
                calendar: "Grade 3 Class 1",
                start: new Date(2015, 11, 11, 9, 0, 0),
                end: new Date(2015, 11, 11, 10, 0, 0)
            }
            
            var appointment3 = {
                id: "id3",
                description: "Grade 3 Math Assessment",
                location: "",
                subject: "Math Sim",
                calendar: "Grade 3 Class 1",
                start: new Date(2015, 11, 18, 9, 0, 0),
                end: new Date(2015, 11, 18, 10, 0, 0)
            }
            
            var appointment4 = {
                id: "id4",
                description: "Grade 3 Math Assessment",
                location: "",
                subject: "Math Sim",
                calendar: "Grade 3 Class 2",
                start: new Date(2015, 11, 4, 13, 0, 0),
                end: new Date(2015, 11, 4, 14, 0, 0)
            }
            
            var appointment5 = {
                id: "id5",
                description: "Grade 3 Math Assessment",
                location: "",
                subject: "Math Sim",
                calendar: "Grade 3 Class 2",
                start: new Date(2015, 11, 11, 13, 0, 0),
                end: new Date(2015, 11, 11, 14, 0, 0)
            }
            
            var appointment6 = {
                id: "id6",
                description: descDetail,
                location: "",
                subject: simSubjectLine,
                calendar: calType,
                start: new Date(sYear, sMonth, sDay, sHour, 0, 0),
                end: new Date(eYear, eMonth, eDay, eHour, 0, 0)
            }
            
            /*var appointment7 = {
            	id: "id7", 
            	description: b, 
            	location: "", 
            	subject: c, 
            	calendar: d, 
            	start: new Date(sYear, sMonth, sDay, sHour, 0, 0), 
            	end: new Date(eYear, eMonth, eDay, eHour, 0, 0)
            }*/

            appointments.push(appointment1);
			appointments.push(appointment2);
			appointments.push(appointment3);
			appointments.push(appointment4);
			appointments.push(appointment6);
			/*appointments.push(appointment7);
			appointments.push(appointment8);
			appointments.push(appointment9);
			appointments.push(appointment10);
			appointments.push(appointment11);
			appointments.push(appointment12);
			appointments.push(appointment13);
			appointments.push(appointment14);
			appointments.push(appointment15);*/
			
            // prepare the data
            var source =
            {
                dataType: "array",
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'description', type: 'string' },
                    { name: 'location', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'start', type: 'date' },
                    { name: 'end', type: 'date' },
                    { name: 'recurrencePattern', type: 'string' }
                ],
                id: 'id',
                localData: appointments
            };
            var adapter = new $.jqx.dataAdapter(source);
            $("#scheduler").jqxScheduler({
                date: new $.jqx.date(2016, 00, 15),
                width: calWidth,
                height: 750,
                source: adapter,
                view: 'monthView',
                theme: 'metrodark',
                appointmentsMinHeight: 30,
                showLegend: true,
                /*legendHeight: 40,*/
                ready: function () {
                    $("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
                },
                resources:
                {
                    colorScheme: "scheme01",
                    dataField: "calendar",
                    source:  new $.jqx.dataAdapter(source)
                },
                appointmentDataFields:
                {
                    from: "start",
                    to: "end",
                    id: "id",
                    description: "description",
                    location: "place",
                    subject: "subject",
                    resourceId: "calendar",
                    recurrencePattern: "recurrencePattern"
                },
                views:
                [
                    { type: "dayView", 
                    	showWeekends: false, 
                    	timeRuler: { scaleStartHour: 8, scaleEndHour: 16 } 
                    },
                    { type: "weekView", 
                    	showWeekends: false, 
                    	workTime:{fromDayOfWeek: 1, toDayOfWeek: 5, fromHour: 8, toHour: 16}, 
                    	timeRuler: { scaleStartHour: 8, scaleEndHour: 16 } 
                    },
                    'monthView',
                    { type: "agendaView",
                    	days: 60
                    }
                ]
            });
}

function createNewGroup() {
	var a = document.getElementById("select-custom-1").value;
	sessionStorage.setItem("selectGrade", a);
	a = document.getElementById("select-custom-2").value;
	sessionStorage.setItem("selectCourse", a);
	a = document.getElementById("select-custom-3").value;
	sessionStorage.setItem("selectClass", a);
	
	window.open("http://neols.com/eqao_teacher8B.html","_self");
}

function setChartSelectors() {
	var a = sessionStorage.selectGrade;
	document.getElementById("noSelectGrade").innerHTML = "Grade " + a;
	
	a = sessionStorage.selectCourse;
	if (a == "M") {document.getElementById("noSelectCourse").innerHTML = "Math";}
	else if (a == "R") {document.getElementById("noSelectCourse").innerHTML = "Reading";}
	else {document.getElementById("noSelectCourse").innerHTML = "Writing";};
	
	a = sessionStorage.selectClass;
	if (a == "C1") {document.getElementById("noSelectClass").innerHTML = "Class 1"}
	else if (a == "C2") {document.getElementById("noSelectClass").innerHTML = "Class 2"}
	else {document.getElementById("noSelectClass").innerHTML = "Class 2"};
}

function setOptions() {
	if (document.getElementById("strandBox").value == "1") {
		document.getElementById("option1").innerHTML = "Attributes, Units, and Measurement Sense";
		document.getElementById("option2").innerHTML = "Measurement Relationships";
		document.getElementById("option3").innerHTML = "";
	}
	else if (document.getElementById("strandBox").value == "2") {
		document.getElementById("option1").innerHTML = "Geometric Properties";
		document.getElementById("option2").innerHTML = "Geometric Relationships";
		document.getElementById("option3").innerHTML = "Location and Movement";
	}
	else {
		document.getElementById("option1").innerHTML = "Patterns and Relationships";
		document.getElementById("option2").innerHTML = "Expressions and Equality";
		document.getElementById("option3").innerHTML = "";
	};
}

function setTargets() {
	if (document.getElementById("targetBox").value == "1") {
		document.getElementById("classBoxRow").style.display = "table-row";
		document.getElementById("boxLeft1").className = "leftLabel2";
		document.getElementById("boxRight1").className = "rightBox2";
		document.getElementById("groupBoxRow").style.display = "none";
		document.getElementById("studentBoxRow").style.display = "none";
		sessionStorage.setItem("selectTarget", "Class");
	}
	else if (document.getElementById("targetBox").value == "2") {
		document.getElementById("classBoxRow").style.display = "none";
		document.getElementById("groupBoxRow").style.display = "table-row";
		document.getElementById("boxLeft2").className = "leftLabel2";
		document.getElementById("boxRight2").className = "rightBox2";
		document.getElementById("studentBoxRow").style.display = "none";
		sessionStorage.setItem("selectTarget", "Group");
	}
	else {
		document.getElementById("classBoxRow").style.display = "table-row";
		document.getElementById("groupBoxRow").style.display = "none";
		document.getElementById("studentBoxRow").style.display = "table-row";
		document.getElementById("boxLeft3").className = "leftLabel2";
		document.getElementById("boxRight3").className = "rightBox2";
		sessionStorage.setItem("selectTarget", "Student");
	};
}

function setHeaders() {
	if (sessionStorage.selectTarget == "Class") {
		document.getElementById("classBoxRow").style.display = "table-row";
		document.getElementById("groupBoxRow").style.display = "none";
		document.getElementById("studentBoxRow").style.display = "none";
	}
	else if (sessionStorage.selectTarget == "Group") {
		document.getElementById("classBoxRow").style.display = "table-row";
		document.getElementById("groupBoxRow").style.display = "table-row";
		document.getElementById("studentBoxRow").style.display = "none";
		document.getElementById("groupBox").value = sessionStorage.selectGroup;
	}
	else {
		document.getElementById("classBoxRow").style.display = "table-row";
		document.getElementById("groupBoxRow").style.display = "none";
		document.getElementById("studentBoxRow").style.display = "table-row";
		document.getElementById("studentBox").value = sessionStorage.selectStudent;
	};
}

function revealDetails() {
	document.getElementById("overviewTable").style.display = "none";
	document.getElementById("scorecardTable").style.display = "none";
	document.getElementById("buttonFooter").style.display = "none";
	
	if (sessionStorage.selectDetails == "Overview") {
		sessionStorage.setItem("selectDetails", "Scorecard");
		document.getElementById("scorecardTable").style.display = "table-cell";
		document.getElementById("buttonFooter").style.display = "table";
		document.getElementById("studentNameBox").innerHTML = sessionStorage[stuName + "name"] + " - Curriculum Scorecard";
	}
	else {
		sessionStorage.setItem("selectDetails", "Overview");
		document.getElementById("overviewTable").style.display = "table-cell";
		document.getElementById("studentNameBox").innerHTML = sessionStorage[stuName + "name"] + " - Assessment Overview";
	};
}

function switchView1() {
	window.open("http://neols.com/eqao_teacher7.html","_self");
}

function switchView2() {
	window.open("http://neols.com/eqao_teacher7B.html","_self");
}

function optionValues() {
	document.getElementById("score-std1").value = tStudent1;
	document.getElementById("score-std2").value = tStudent2;
	document.getElementById("score-std3").value = tStudent3;
	document.getElementById("score-std4").value = tStudent4;
	document.getElementById("score-std5").value = tStudent5;
	document.getElementById("score-std6").value = tStudent6;
	document.getElementById("score-std7").value = tStudent7;
	document.getElementById("score-std8").value = tStudent8;
	document.getElementById("score-std9").value = tStudent9;
	document.getElementById("score-std10").value = tStudent10;
	document.getElementById("score-std11").value = tStudent11;
	document.getElementById("score-std12").value = tStudent12;
	document.getElementById("score-std13").value = tStudent13;
	document.getElementById("score-std14").value = tStudent14;
	document.getElementById("score-std15").value = tStudent15;
	document.getElementById("score-std16").value = tStudent16;
	document.getElementById("score-std17").value = tStudent17;
	document.getElementById("score-std18").value = tStudent18;
	document.getElementById("score-std19").value = tStudent19;
	document.getElementById("score-std20").value = tStudent20;
}

function graphReveal() {
	document.getElementById("container2").style.display = 'none';
	document.getElementById("container3").style.display = 'none';
	document.getElementById("container4").style.display = 'none';
	document.getElementById("strandScoresFieldset").style.display ='none';
	document.getElementById("notesFieldset").style.display ='none';
	
	sessionStorage.setItem("selectStudent", document.getElementById("listC1").value);
	stuName = document.getElementById("listC1").value;
	teacher2Chart();
}

function switchView() {
	var a = document.getElementById("selectView").value;
	localStorage.setItem("selectETView", a);
}

function initialView() {
	/*document.getElementById("field1").style.display = 'none';*/
	document.getElementById("field2").style.display = 'none';
	document.getElementById("questionFieldset").style.display = 'none';
	document.getElementById("footertable").style.display = 'none';
	document.getElementById("questionResults").style.display = 'none';
	
	if (localStorage.selectETView == "setup") {
		/*document.getElementById("field1").style.display = 'inherit';*/
		document.getElementById("field2").style.display = 'table';
		document.getElementById("questionFieldset").style.display = 'table';
		document.getElementById("footertable").style.display = 'table';
	}
	else if (localStorage.selectETView == "review") {
		document.getElementById("questionResults").style.display = 'table';
	}
	else {
		localStorage.setItem("selectETView", "setup");
		/*document.getElementById("field1").style.display = 'table';*/
		document.getElementById("field2").style.display = 'table';
		document.getElementById("questionFieldset").style.display = 'table';
		document.getElementById("footertable").style.display = 'table';
		document.getElementById("questionResults").style.display = 'none';
	};
}

function hideQuestions() {
	document.getElementById("q1").style.display = 'none';
	document.getElementById("q2").style.display = 'none';
	document.getElementById("q3").style.display = 'none';
	document.getElementById("q4").style.display = 'none';
	document.getElementById("q5").style.display = 'none';
	document.getElementById("q6").style.display = 'none';
	document.getElementById("q7").style.display = 'none';
	document.getElementById("q8").style.display = 'none';
	document.getElementById("q9").style.display = 'none';
	document.getElementById("q10").style.display = 'none';
	document.getElementById("q11").style.display = 'none';
	document.getElementById("q12").style.display = 'none';
	document.getElementById("q13").style.display = 'none';
}

function unhideQuestions() {
	document.getElementById("q1").style.display = 'table-row';
	document.getElementById("q2").style.display = 'table-row';
	document.getElementById("q3").style.display = 'table-row';
	document.getElementById("q4").style.display = 'table-row';
	document.getElementById("q5").style.display = 'table-row';
	document.getElementById("q6").style.display = 'table-row';
	document.getElementById("q7").style.display = 'table-row';
	document.getElementById("q8").style.display = 'table-row';
	document.getElementById("q9").style.display = 'table-row';
	document.getElementById("q10").style.display = 'table-row';
	document.getElementById("q11").style.display = 'table-row';
	document.getElementById("q12").style.display = 'table-row';
	document.getElementById("q13").style.display = 'table-row';
}

function showQ1() {
	if (document.getElementById("cb1").checked == true) {
		document.getElementById("q1").style.display = 'table-row';
	}
	else if (document.getElementById("cb1").checked == false) {
		unhideQuestions();
	};
}

function showQ2() {
	if (document.getElementById("cb2").checked == true) {
		document.getElementById("q2").style.display = 'table-row';
	}
	else if (document.getElementById("cb2").checked == false) {
		unhideQuestions();
	};
}

function showQ3() {
	if (document.getElementById("cb3").checked == true) {
		document.getElementById("q3").style.display = 'table-row';
	}
	else if (document.getElementById("cb3").checked == false) {
		unhideQuestions();
	};
}

function showQ4() {
	if (document.getElementById("cb4").checked == true) {
		document.getElementById("q4").style.display = 'table-row';
	}
	else if (document.getElementById("cb4").checked == false) {
		unhideQuestions();
	};
}

function showQ5() {
	if (document.getElementById("cb5").checked == true) {
		document.getElementById("q5").style.display = 'table-row';
	}
	else if (document.getElementById("cb5").checked == false) {
		unhideQuestions();
	};
}

function showQ6() {
	if (document.getElementById("cb6").checked == true) {
		document.getElementById("q6").style.display = 'table-row';
	}
	else if (document.getElementById("cb6").checked == false) {
		unhideQuestions();
	};
}

function showQ7() {
	if (document.getElementById("cb7").checked == true) {
		document.getElementById("q7").style.display = 'table-row';
	}
	else if (document.getElementById("cb7").checked == false) {
		unhideQuestions();
	};
}

function showQ8() {
	if (document.getElementById("cb8").checked == true) {
		document.getElementById("q8").style.display = 'table-row';
	}
	else if (document.getElementById("cb8").checked == false) {
		unhideQuestions();
	};
}

function showQ9() {
	if (document.getElementById("cb9").checked == true) {
		document.getElementById("q9").style.display = 'table-row';
	}
	else if (document.getElementById("cb9").checked == false) {
		unhideQuestions();
	};
}

function showQ10() {
	if (document.getElementById("cb10").checked == true) {
		document.getElementById("q10").style.display = 'table-row';
	}
	else if (document.getElementById("cb10").checked == false) {
		unhideQuestions();
	};
}

function showQ11() {
	if (document.getElementById("cb11").checked == true) {
		document.getElementById("q11").style.display = 'table-row';
	}
	else if (document.getElementById("cb11").checked == false) {
		unhideQuestions();
	};
}

function showQ12() {
	if (document.getElementById("cb12").checked == true) {
		document.getElementById("q12").style.display = 'table-row';
	}
	else if (document.getElementById("cb12").checked == false) {
		unhideQuestions();
	};
}

function showQ13() {
	if (document.getElementById("cb13").checked == true) {
		document.getElementById("q13").style.display = 'table-row';
	}
	else if (document.getElementById("cb13").checked == false) {
		unhideQuestions();
	};
}

function launchWhiteboard() {
	window.open("http://neols.com/eqao_teacher15B.html", "_self");
}

function updateScoreCard() {
	sessionStorage.setItem("selectStudent", document.getElementById("listC1").value);
	stuName = document.getElementById("listC1").value;
	
	/*var image = document.getElementById('t1e1');
	if (stuName == "Normand Joye") {
		image.src = "assets/dot16-yellow.png";
	}
	else {image.src = "assets/dot16-red.png";}*/
	
	if (stuName == "Normand Joye") {
		var image = document.getElementById('t1e1');
		image.src = "assets/dot16-yellow.png";
		var image = document.getElementById('t1e2');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t1e3');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t1e4');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t1e5');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t1e6');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t1e7');
		image.src = "assets/dot16-red.png";
		var image = document.getElementById('t1e8');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t1e9');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t1e10');
		image.src = "assets/dot16-red.png";
		var image = document.getElementById('t1e11');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t1e12');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t1e13');
		image.src = "assets/dot16-yellow.png";
		var image = document.getElementById('t1e14');
		image.src = "assets/dot16-yellow.png";
		var image = document.getElementById('t1e15');
		image.src = "assets/dot16-red.png";
		var image = document.getElementById('t1e16');
		image.src = "assets/dot16-red.png";
		
		var image = document.getElementById('t2e1');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t2e2');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t2e3');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t2e4');
		image.src = "assets/dot16-red.png";
		var image = document.getElementById('t2e5');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t2e6');
		image.src = "assets/dot16-yellow.png";
		var image = document.getElementById('t2e7');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t2e8');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t2e9');
		image.src = "assets/dot16-red.png";
		var image = document.getElementById('t2e10');
		image.src = "assets/dot16-white.png";
		var image = document.getElementById('t2e11');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t2e12');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t2e13');
		image.src = "assets/dot16-yellow.png";
		
		var image = document.getElementById('t3e1');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e2');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e3');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e4');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e5');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e6');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e7');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e8');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e9');
		image.src = "assets/dot16-green.png";
		var image = document.getElementById('t3e10');
		image.src = "assets/dot16-green.png";
	}
	else {		
		for (i = 1; i < 17; i++) {
			var c = "t1e" + i;
			var image = document.getElementById(c);
			var a = Math.floor((Math.random()*6) + 1);
			if (a == 1) {var b = "assets/dot16-white";}
			else if (a == 2) {var b = "assets/dot16-yellow.png";}
			else if (a == 3) {var b = "assets/dot16-red.png";}
			else {var b = "assets/dot16-green.png";};
			document.getElementById(c).src = b;
		};
		
		for (i = 1; i < 14; i++) {
			c = "t2e" + i;
			image = document.getElementById(c);
			a = Math.floor((Math.random()*6) + 1);
			if (a == 1) {b = "assets/dot16-white";}
			else if (a == 2) {b = "assets/dot16-yellow.png";}
			else if (a == 3) {b = "assets/dot16-red.png";}
			else {b = "assets/dot16-green.png";};
			document.getElementById(c).src = b;
		};
		
		for (i = 1; i < 11; i++) {
			c = "t3e" + i;
			image = document.getElementById(c);
			a = Math.floor((Math.random()*6) + 1);
			if (a == 1) {b = "assets/dot16-white";}
			else if (a == 2) {b = "assets/dot16-yellow.png";}
			else if (a == 3) {b = "assets/dot16-red.png";}
			else {b = "assets/dot16-green.png";};
			document.getElementById(c).src = b;
		};
	}
}