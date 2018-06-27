var math1;
var math2;
var math3;
var math4;
var math5;
var math6;

var reading1;
var reading2;
var reading3;
var reading4;
var reading5;
var reading6;

var writing1;
var writing2;
var writing3;
var writing4;
var writing5;
var writing6;

var currentBoardAvgM;
var currentBoardAvgR;
var currentBoardAvgW;

var lineColour;

function identifyUser() {
	document.getElementById("headerUserID").innerHTML = "Login: " + sessionStorage.userName;
}

function selectBoardOptions1() {
	var a = document.getElementById("select-custom-1").value;
	
	if (a == "All") {alert("You must select a grade!");}
	else {
		sessionStorage.setItem("selectGrade", a);
		sessionStorage.setItem("selectCourse", "M");
		sessionStorage.setItem("lineColour", "#603CBA");
		sessionStorage.setItem("currentBoardAvg", currentBoardAvgM);
		window.open("http://neols.com/board2.html","_self");
	};
}

function snapshotCombinedSchools() {
	snapshotPoints1();
	snapshot1();
	snapshot2();
	snapshot3();
}

function snapshotPoints1() {
	math4 = 65;
	math5 = 75;
	math6 = 85;
	reading4 = 70;
	reading5 = 85;
	reading6 = 65;
	writing4 = 80;
	writing5 = 55;
	writing6 = 75;
	
	var a = "D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math1 = Number(sessionStorage[a]);
	var b = "SCH2D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math2 = Number(sessionStorage[b]);
	var c = "SCH3D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math3 = Number(sessionStorage[c]);
	currentBoardAvgM = (Number(sessionStorage[a]) + Number(sessionStorage[b]) + Number(sessionStorage[c]) + math4 + math5 + math6)/6;
	document.getElementById("bAvgMath").innerHTML = Math.round(currentBoardAvgM * 100) / 100 + " %";
	
	var a = "D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading1 = Number(sessionStorage[a]);
	var b = "SCH2D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading2 = Number(sessionStorage[b]);
	var c = "SCH3D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading3 = Number(sessionStorage[c]);
	currentBoardAvgR = (Number(sessionStorage[a]) + Number(sessionStorage[b]) + Number(sessionStorage[c]) + reading4 + reading5 + reading6)/6;
	document.getElementById("bAvgReading").innerHTML = Math.round(currentBoardAvgR * 100) / 100 + " %";
	
	var a = "D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing1 = Number(sessionStorage[a]);
	var b = "SCH2D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing2 = Number(sessionStorage[b]);
	var c = "SCH3D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing3 = Number(sessionStorage[c]);
	currentBoardAvgW = (Number(sessionStorage[a]) + Number(sessionStorage[b]) + Number(sessionStorage[c]) + writing4 + writing5 + writing6)/6;
	document.getElementById("bAvgWriting").innerHTML = Math.round(currentBoardAvgW * 100) / 100 + " %";
}

function snapshot1() {
    $('#container').highcharts({
        chart: {type: 'column'},
        title: {text: 'Math Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: ''}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgM}] },
        legend: {enabled: false},
        plotOptions: {series: {cursor: 'pointer',borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'School',
            	colorByPoint: false,
            	color: "#603CBA",
                      
            data: [{name: "School 1", y: math1, events: {click: function(){sessionStorage.setItem("selectSchool", "1");selectBoardOptions1();}}}, 
            	   {name: "School 2", y: math2, events: {click: function(){alert("no demo data for this school");}}},
            	   {name: "School 3", y: math3, events: {click: function(){alert("no demo data for this school");}}},
            	   {name: "School 4", y: math4, events: {click: function(){alert("no demo data for this school");}}},
            	   {name: "School 5", y: math5, events: {click: function(){alert("no demo data for this school");}}},
            	   {name: "School 6", y: math6, events: {click: function(){alert("no demo data for this school");}}}]
	        }],
    });
}

function snapshot2() {
    $('#container2').highcharts({
        chart: {type: 'column'},
        title: {text: 'Reading Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: ''}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgR}] },
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'School',
            	colorByPoint: false,
            	color: "#00A300",
                      
            data: [{name: "School 1", y: reading1}, 
            	   {name: "School 2", y: reading2},
            	   {name: "School 3", y: reading3},
            	   {name: "School 4", y: reading4},
            	   {name: "School 5", y: reading5},
            	   {name: "School 6", y: reading6}]
	        }],
    });
}

function snapshot3() {
    $('#container3').highcharts({
        chart: {type: 'column'},
        title: {text: 'Writing Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: ''}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgW}] },
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'School',
            	colorByPoint: false,
            	color: "#FFC40D",
                      
            data: [{name: "School 1", y: writing1}, 
            	   {name: "School 2", y: writing2},
            	   {name: "School 3", y: writing3},
            	   {name: "School 4", y: writing4},
            	   {name: "School 5", y: writing5},
            	   {name: "School 6", y: writing6}]
	        }],
    });
}

function currentSelectionsB() {
	var a2 = document.getElementById("select-custom-1").value;
	sessionStorage.setItem("selectGrade", a2);
	var a2 = document.getElementById("select-custom-2").value;
	sessionStorage.setItem("selectSchool", a2);
	var a2 = document.getElementById("select-custom-3").value;
	sessionStorage.setItem("selectGrade2", a2);
}

function historicalTrend() {
	trend4();
	trend5();
	trend6();
}

function trend4() {
	trendPoints4();
    $('#container4').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Math Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Year',
            	colorByPoint: false,
            	color: "#603CBA",
                      
            data: [{name: "2010", y: math1}, 
            	   {name: "2011", y: math2},
            	   {name: "2012", y: math3},
            	   {name: "2013", y: math4},
            	   {name: "2014", y: math5},
            	   {name: "2015", y: math6}]
	        }],
    });
}

function trendPoints4() {
	if (sessionStorage.selectSchool == "All") {
		var a = "2010" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22010M" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32010M" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		math1 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2011" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22011M" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32011M" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		math2 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2012" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22012M" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32012M" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		math3 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2013" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22013M" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32013M" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		math4 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2014" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22014M" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32014M" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		math5 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "D18" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH2D18M" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH3D18M" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		math6 = Math.round((a + b + c + 65 + 75 + 85) / 6 * 100) / 100;
	}
	else if (sessionStorage.selectSchool == "1") {
		var a = "2010" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math1 = Number(sessionStorage[a]);
		var a = "2011" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math2 = Number(sessionStorage[a]);
		var a = "2012" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math3 = Number(sessionStorage[a]);
		var a = "2013" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math4 = Number(sessionStorage[a]);
		var a = "2014" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math5 = Number(sessionStorage[a]);
		var a = "D18" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math6 = Number(sessionStorage[a]);
	}
	else {
		var a = "SCH" + sessionStorage.selectSchool + "2010" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math1 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2011" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math2 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2012" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math3 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2013" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math4 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2014" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math5 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "D18" + "M" + sessionStorage.selectGrade2 + "AllAllTotal";
		math6 = Number(sessionStorage[a]);
	};
}

function trend5() {
	trendPoints5();
    $('#container5').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Reading Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Year',
            	colorByPoint: false,
            	color: "#00A300",
                      
            data: [{name: "2010", y: reading1}, 
            	   {name: "2011", y: reading2},
            	   {name: "2012", y: reading3},
            	   {name: "2013", y: reading4},
            	   {name: "2014", y: reading5},
            	   {name: "2015", y: reading6}]
	        }],
    });
}

function trendPoints5() {
	if (sessionStorage.selectSchool == "All") {
		var a = "2010" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22010R" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32010R" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		reading1 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2011" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22011R" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32011R" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		reading2 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2012" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22012R" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32012R" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		reading3 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2013" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22013R" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32013R" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		reading4 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2014" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22014R" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32014R" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		reading5 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "D18" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH2D18R" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH3D18R" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		reading6 = Math.round((a + b + c + 70 + 85 + 65) / 6 * 100) / 100;
	}
	else if (sessionStorage.selectSchool == "1") {
		var a = "2010" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading1 = Number(sessionStorage[a]);
		var a = "2011" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading2 = Number(sessionStorage[a]);
		var a = "2012" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading3 = Number(sessionStorage[a]);
		var a = "2013" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading4 = Number(sessionStorage[a]);
		var a = "2014" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading5 = Number(sessionStorage[a]);
		var a = "D18" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading6 = Number(sessionStorage[a]);
	}
	else {
		var a = "SCH" + sessionStorage.selectSchool + "2010" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading1 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2011" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading2 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2012" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading3 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2013" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading4 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2014" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading5 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "D18" + "R" + sessionStorage.selectGrade2 + "AllAllTotal";
		reading6 = Number(sessionStorage[a]);
	};
}

function trend6() {
	trendPoints6();
    $('#container6').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Writing Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Year',
            	colorByPoint: false,
            	color: "#FFC40D",
                      
            data: [{name: "2010", y: writing1}, 
            	   {name: "2011", y: writing2},
            	   {name: "2012", y: writing3},
            	   {name: "2013", y: writing4},
            	   {name: "2014", y: writing5},
            	   {name: "2015", y: writing6}]
	        }],
    });
}

function trendPoints6() {
	if (sessionStorage.selectSchool == "All") {
		var a = "2010" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22010W" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32010W" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		writing1 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2011" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22011W" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32011W" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		writing2 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2012" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22012W" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32012W" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		writing3 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2013" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22013W" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32013W" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		writing4 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "2014" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH22014W" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH32014W" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		writing5 = Math.round((a + b + c) / 3 * 100) / 100;
		
		var a = "D18" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		a = Number(sessionStorage[a]);
		var b = "SCH2D18W" + sessionStorage.selectGrade2 + "AllAllTotal";
		b = Number(sessionStorage[b]);
		var c = "SCH3D18W" + sessionStorage.selectGrade2 + "AllAllTotal";
		c = Number(sessionStorage[c]);
		writing6 = Math.round((a + b + c + 80 + 55 + 75) / 6 * 100) / 100;
	}
	else if (sessionStorage.selectSchool == "1") {
		var a = "2010" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing1 = Number(sessionStorage[a]);
		var a = "2011" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing2 = Number(sessionStorage[a]);
		var a = "2012" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing3 = Number(sessionStorage[a]);
		var a = "2013" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing4 = Number(sessionStorage[a]);
		var a = "2014" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing5 = Number(sessionStorage[a]);
		var a = "D18" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing6 = Number(sessionStorage[a]);
	}
	else {
		var a = "SCH" + sessionStorage.selectSchool + "2010" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing1 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2011" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing2 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2012" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing3 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2013" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing4 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "2014" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing5 = Number(sessionStorage[a]);
		var a = "SCH" + sessionStorage.selectSchool + "D18" + "W" + sessionStorage.selectGrade2 + "AllAllTotal";
		writing6 = Number(sessionStorage[a]);
	};
}

function initMap() {
	var mapWidth = document.getElementById("mapContainer").offsetWidth;
	mapWidth = mapWidth * 1;
	mapWidth = mapWidth + "px";
	document.getElementById('boardMap').style.width = mapWidth;
	document.getElementById('boardMap1g').style.width = mapWidth;
	document.getElementById('boardMap1r').style.width = mapWidth;
	document.getElementById('boardMap2g').style.width = mapWidth;
	document.getElementById('boardMap2r').style.width = mapWidth;
	document.getElementById('boardMap3g').style.width = mapWidth;
	document.getElementById('boardMap3r').style.width = mapWidth;
	document.getElementById('boardMap4g').style.width = mapWidth;
	document.getElementById('boardMap4r').style.width = mapWidth;
	document.getElementById('boardMap5g').style.width = mapWidth;
	document.getElementById('boardMap5r').style.width = mapWidth;
	document.getElementById('boardMap6g').style.width = mapWidth;
	document.getElementById('boardMap6r').style.width = mapWidth;
}

function initMap2() {
	var mapWidth = document.getElementById("mapContainer").offsetWidth;
	mapWidth = mapWidth * 1;
	mapWidth = mapWidth + "px";
	document.getElementById('boardMap').style.width = mapWidth;
	document.getElementById('boardMap1g').style.width = mapWidth;
	document.getElementById('boardMap1r').style.width = mapWidth;
	document.getElementById('boardMap2g').style.width = mapWidth;
	document.getElementById('boardMap2r').style.width = mapWidth;
	document.getElementById('boardMap3g').style.width = mapWidth;
	document.getElementById('boardMap3r').style.width = mapWidth;
	document.getElementById('boardMap4g').style.width = mapWidth;
	document.getElementById('boardMap4r').style.width = mapWidth;
	document.getElementById('boardMap5g').style.width = mapWidth;
	document.getElementById('boardMap5r').style.width = mapWidth;
	document.getElementById('boardMap6g').style.width = mapWidth;
	document.getElementById('boardMap6r').style.width = mapWidth;
	document.getElementById('boardMap7g').style.width = mapWidth;
	document.getElementById('boardMap7r').style.width = mapWidth;
	document.getElementById('boardMap8g').style.width = mapWidth;
	document.getElementById('boardMap8r').style.width = mapWidth;
	document.getElementById('boardMap9g').style.width = mapWidth;
	document.getElementById('boardMap9r').style.width = mapWidth;
	document.getElementById('boardMap10g').style.width = mapWidth;
	document.getElementById('boardMap10r').style.width = mapWidth;
}

function chartPoints1() {
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "All" + "All" + "Total";
	pt15 = Number(sessionStorage[a]);
}

function BoardChart2() {
	chartPoints1();
	calculateDetail();
	lineColour = sessionStorage.lineColour;
	currentBoardAvgM = Number(sessionStorage.currentBoardAvg);
	currentBoardAvgM = Math.round(currentBoardAvgM);
	var subText = "Current Board Average (red line): " + currentBoardAvgM + "%"
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Assessment Scores. September to December 2015'},
        subtitle: {text: subText},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgM}]},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Math",
            	colorByPoint: false,
            	color: lineColour,
                      
            data: [{name: "Sep 11", y: pt1}, 
            	   {name: "Sep 18", y: pt2},
            	   {name: "Sep 25", y: pt3},
            	   {name: "Oct 2", y: pt4},
            	   {name: "Oct 9", y: pt5},
            	   {name: "Oct 16", y: pt6},
            	   {name: "Oct 23", y: pt7},
            	   {name: "Oct 30", y: pt8},
            	   {name: "Nov 6", y: pt9},
            	   {name: "Nov 13", y: pt10},
            	   {name: "Nov 20", y: pt11},
            	   {name: "Nov 27", y: pt12},
            	   {name: "Dec 4", y: pt13},
            	   {name: "Dec 11", y: pt14},
            	   {name: "Dec 18", y: pt15}]
	        }],
    });
}

function calculateDetail() {
	document.getElementById("upArrowM").style.visibility = 'hidden';
	document.getElementById("downArrowM").style.visibility = 'hidden';
	
	var a = "D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	document.getElementById("container2").innerHTML = sessionStorage[a];
	
	var b1 = "D11" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	var b2 = "D4" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	var b3 = "N27" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	var b4 = "N20" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	var b5 = (Number(sessionStorage[b1]) + Number(sessionStorage[b2]) + Number(sessionStorage[b3]) + Number(sessionStorage[b4])) / 4
	b5 = b5.toFixed(2);
	document.getElementById("container3").innerHTML = b5;
	
	var c = Number(sessionStorage[a]) - b5;

	if (c < 0) {
		document.getElementById("downArrowM").style.visibility = 'visible';
	}
	else if (c >= 0) {
		document.getElementById("upArrowM").style.visibility = 'visible';
	};
}

function boardMapSelections() {
	var a2 = document.getElementById("select-custom-2").value;
	sessionStorage.setItem("selectCourse", a2);
}

function ministryMapSelections() {
	var a2 = document.getElementById("select-custom-1").value;
	var a3 = document.getElementById("select-custom-2").value;
	sessionStorage.setItem("selectBoardType", a2);
	sessionStorage.setItem("selectCourse", a3);
}

function buildMap() {
	document.getElementById("boardMap1g").style.display = 'none';
	document.getElementById("boardMap1r").style.display = 'none';
	document.getElementById("boardMap2g").style.display = 'none';
	document.getElementById("boardMap2r").style.display = 'none';
	document.getElementById("boardMap3g").style.display = 'none';
	document.getElementById("boardMap3r").style.display = 'none';
	document.getElementById("boardMap4g").style.display = 'none';
	document.getElementById("boardMap4r").style.display = 'none';
	document.getElementById("boardMap5g").style.display = 'none';
	document.getElementById("boardMap5r").style.display = 'none';
	document.getElementById("boardMap6g").style.display = 'none';
	document.getElementById("boardMap6r").style.display = 'none';
	
	var a = sessionStorage.selectCourse;
	
	if (a == "M") {
		document.getElementById("boardMap1g").style.display = 'initial';
		document.getElementById("boardMap2r").style.display = 'initial';
		document.getElementById("boardMap3r").style.display = 'initial';
		document.getElementById("boardMap4g").style.display = 'initial';
		document.getElementById("boardMap5g").style.display = 'initial';
		document.getElementById("boardMap6r").style.display = 'initial';
	}
	else if (a == "R") {
		document.getElementById("boardMap1r").style.display = 'initial';
		document.getElementById("boardMap2g").style.display = 'initial';
		document.getElementById("boardMap3r").style.display = 'initial';
		document.getElementById("boardMap4g").style.display = 'initial';
		document.getElementById("boardMap5r").style.display = 'initial';
		document.getElementById("boardMap6r").style.display = 'initial';
	}
	else if (a == "W") {
		document.getElementById("boardMap1g").style.display = 'initial';
		document.getElementById("boardMap2g").style.display = 'initial';
		document.getElementById("boardMap3g").style.display = 'initial';
		document.getElementById("boardMap4g").style.display = 'initial';
		document.getElementById("boardMap5r").style.display = 'initial';
		document.getElementById("boardMap6g").style.display = 'initial';
	};
}

function buildMapMinistry() {
	document.getElementById("boardMap1g").style.display = 'none';
	document.getElementById("boardMap1r").style.display = 'none';
	document.getElementById("boardMap2g").style.display = 'none';
	document.getElementById("boardMap2r").style.display = 'none';
	document.getElementById("boardMap3g").style.display = 'none';
	document.getElementById("boardMap3r").style.display = 'none';
	document.getElementById("boardMap4g").style.display = 'none';
	document.getElementById("boardMap4r").style.display = 'none';
	document.getElementById("boardMap5g").style.display = 'none';
	document.getElementById("boardMap5r").style.display = 'none';
	document.getElementById("boardMap6g").style.display = 'none';
	document.getElementById("boardMap6r").style.display = 'none';
	document.getElementById("boardMap7g").style.display = 'none';
	document.getElementById("boardMap7r").style.display = 'none';
	document.getElementById("boardMap8g").style.display = 'none';
	document.getElementById("boardMap8r").style.display = 'none';
	document.getElementById("boardMap9g").style.display = 'none';
	document.getElementById("boardMap9r").style.display = 'none';
	document.getElementById("boardMap10g").style.display = 'none';
	document.getElementById("boardMap10r").style.display = 'none';
	
	var a = sessionStorage.selectCourse;
	var b = sessionStorage.selectBoardType;
	
	if (b == "Public") {
		if (a == "M") {
			document.getElementById("boardMap1g").style.display = 'initial';
			document.getElementById("boardMap2r").style.display = 'initial';
			document.getElementById("boardMap3r").style.display = 'initial';
			document.getElementById("boardMap4g").style.display = 'initial';
			document.getElementById("boardMap5g").style.display = 'initial';
			document.getElementById("boardMap6r").style.display = 'initial';
		}
		else if (a == "R") {
			document.getElementById("boardMap1r").style.display = 'initial';
			document.getElementById("boardMap2g").style.display = 'initial';
			document.getElementById("boardMap3r").style.display = 'initial';
			document.getElementById("boardMap4g").style.display = 'initial';
			document.getElementById("boardMap5r").style.display = 'initial';
			document.getElementById("boardMap6r").style.display = 'initial';
		}
		else if (a == "W") {
			document.getElementById("boardMap1g").style.display = 'initial';
			document.getElementById("boardMap2g").style.display = 'initial';
			document.getElementById("boardMap3g").style.display = 'initial';
			document.getElementById("boardMap4g").style.display = 'initial';
			document.getElementById("boardMap5r").style.display = 'initial';
			document.getElementById("boardMap6g").style.display = 'initial';
		};
	}
	else if (b == "Catholic") {
		if (a == "M") {
			document.getElementById("boardMap7g").style.display = 'initial';
			document.getElementById("boardMap8r").style.display = 'initial';
			document.getElementById("boardMap9r").style.display = 'initial';
			document.getElementById("boardMap10g").style.display = 'initial';
		}
		else if (a == "R") {
			document.getElementById("boardMap7r").style.display = 'initial';
			document.getElementById("boardMap8g").style.display = 'initial';
			document.getElementById("boardMap9r").style.display = 'initial';
			document.getElementById("boardMap10g").style.display = 'initial';
		}
		else if (a == "W") {
			document.getElementById("boardMap7g").style.display = 'initial';
			document.getElementById("boardMap8g").style.display = 'initial';
			document.getElementById("boardMap9g").style.display = 'initial';
			document.getElementById("boardMap10r").style.display = 'initial';
		};
	};
}

function setSchoolNumber() {
	sessionStorage.setItem("selectSchool", "1");
}

function snapshotCombinedProvince() {
	snapshotPoints2();
	snapshot4();
	snapshot5();
	snapshot6();
}

function snapshotPoints2() {
	math4 = 65;
	math5 = 75;
	math6 = 85;
	reading4 = 70;
	reading5 = 85;
	reading6 = 65;
	writing4 = 80;
	writing5 = 55;
	writing6 = 75;
	
	var a = "D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math1 = Number(sessionStorage[a]);
	var b = "SCH2D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math2 = Number(sessionStorage[b]);
	var c = "SCH3D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math3 = Number(sessionStorage[c]);
	currentBoardAvgM = (Number(sessionStorage[a]) + Number(sessionStorage[b]) + Number(sessionStorage[c]) + math4 + math5 + math6)/6;
	document.getElementById("bAvgMath").innerHTML = Math.round(currentBoardAvgM * 100) / 100 + " %";
	
	var a = "D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading1 = Number(sessionStorage[a]);
	var b = "SCH2D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading2 = Number(sessionStorage[b]);
	var c = "SCH3D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading3 = Number(sessionStorage[c]);
	currentBoardAvgR = (Number(sessionStorage[a]) + Number(sessionStorage[b]) + Number(sessionStorage[c]) + reading4 + reading5 + reading6)/6;
	document.getElementById("bAvgReading").innerHTML = Math.round(currentBoardAvgR * 100) / 100 + " %";
	
	var a = "D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing1 = Number(sessionStorage[a]);
	var b = "SCH2D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing2 = Number(sessionStorage[b]);
	var c = "SCH3D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing3 = Number(sessionStorage[c]);
	currentBoardAvgW = (Number(sessionStorage[a]) + Number(sessionStorage[b]) + Number(sessionStorage[c]) + writing4 + writing5 + writing6)/6;
	document.getElementById("bAvgWriting").innerHTML = Math.round(currentBoardAvgW * 100) / 100 + " %";
}

function snapshot4() {
    $('#container').highcharts({
        chart: {type: 'column'},
        title: {text: 'Math Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: ''}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgM}] },
        legend: {enabled: false},
        plotOptions: {series: {cursor: 'pointer',borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Board',
            	colorByPoint: false,
            	color: "#603CBA",
                      
            data: [{name: "Board 1", y: math1, events: {click: function(){sessionStorage.setItem("selectSchool", "1");selectMinistryOptions1();}}}, 
            	   {name: "Board 2", y: math2, events: {click: function(){alert("no demo data for this board");}}},
            	   {name: "Board 3", y: math3, events: {click: function(){alert("no demo data for this board");}}},
            	   {name: "Board 4", y: math4, events: {click: function(){alert("no demo data for this board");}}},
            	   {name: "Board 5", y: math5, events: {click: function(){alert("no demo data for this board");}}},
            	   {name: "Board 6", y: math6, events: {click: function(){alert("no demo data for this board");}}}]
	        }],
    });
}

function snapshot5() {
    $('#container2').highcharts({
        chart: {type: 'column'},
        title: {text: 'Reading Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: ''}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgR}] },
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Board',
            	colorByPoint: false,
            	color: "#00A300",
                      
            data: [{name: "Board 1", y: reading1}, 
            	   {name: "Board 2", y: reading2},
            	   {name: "Board 3", y: reading3},
            	   {name: "Board 4", y: reading4},
            	   {name: "Board 5", y: reading5},
            	   {name: "Board 6", y: reading6}]
	        }],
    });
}

function snapshot6() {
    $('#container3').highcharts({
        chart: {type: 'column'},
        title: {text: 'Writing Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: ''}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgW}] },
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Board',
            	colorByPoint: false,
            	color: "#FFC40D",
                      
            data: [{name: "Board 1", y: writing1}, 
            	   {name: "Board 2", y: writing2},
            	   {name: "Board 3", y: writing3},
            	   {name: "Board 4", y: writing4},
            	   {name: "Board 5", y: writing5},
            	   {name: "Board 6", y: writing6}]
	        }],
    });
}

function selectMinistryOptions1() {
	var a = document.getElementById("select-custom-1").value;
	
	if (a == "All") {alert("You must select a grade!");}
	else {
		sessionStorage.setItem("selectGrade", a);
		sessionStorage.setItem("selectCourse", "M");
		sessionStorage.setItem("lineColour", "#603CBA");
		sessionStorage.setItem("currentBoardAvg", currentBoardAvgM);
		window.open("http://neols.com/ministry2.html","_self");
	};
}

function MinistryChart2() {
	chartPoints1();
	calculateDetail();
	lineColour = sessionStorage.lineColour;
	currentBoardAvgM = Number(sessionStorage.currentBoardAvg);
	currentBoardAvgM = Math.round(currentBoardAvgM);
	var subText = "Current Ontario Average (red line): " + currentBoardAvgM + "%"
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Assessment Scores. September to December 2015'},
        subtitle: {text: subText},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100, plotLines: [{color: '#FF0000', width: 2, value: currentBoardAvgM}]},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Math",
            	colorByPoint: false,
            	color: lineColour,
                      
            data: [{name: "Sep 11", y: pt1}, 
            	   {name: "Sep 18", y: pt2},
            	   {name: "Sep 25", y: pt3},
            	   {name: "Oct 2", y: pt4},
            	   {name: "Oct 9", y: pt5},
            	   {name: "Oct 16", y: pt6},
            	   {name: "Oct 23", y: pt7},
            	   {name: "Oct 30", y: pt8},
            	   {name: "Nov 6", y: pt9},
            	   {name: "Nov 13", y: pt10},
            	   {name: "Nov 20", y: pt11},
            	   {name: "Nov 27", y: pt12},
            	   {name: "Dec 4", y: pt13},
            	   {name: "Dec 11", y: pt14},
            	   {name: "Dec 18", y: pt15}]
	        }],
    });
}