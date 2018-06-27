var math1
var math2
var math3
var math4
var math5
var math6
var math7
var math8
var math9
var math10
var math11
var math12
var math13
var math14
var math15

var writing1
var writing2
var writing3
var writing4
var writing5
var writing6
var writing7
var writing8
var writing9
var writing10
var writing11
var writing12
var writing13
var writing14
var writing15

var reading1
var reading2
var reading3
var reading4
var reading5
var reading6
var reading7
var reading8
var reading9
var reading10
var reading11
var reading12
var reading13
var reading14
var reading15

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

var classArray;
var legendName;
var courseColour;
var calWidth;

function identifyUser() {
	document.getElementById("headerUserID").innerHTML = "Login: " + sessionStorage.userName;
}

function currentSelections() {
	var a2 = document.getElementById("select-custom-1").value;
	var a3 = document.getElementById("select-custom-2").value;
	var a4 = document.getElementById("select-custom-3").value;
	sessionStorage.setItem("selectGrade", a2);
	sessionStorage.setItem("selectCourse", a3);
	sessionStorage.setItem("selectClass", a4);
}

function initialSelectionsP() {
	sessionStorage.setItem("selectGrade", "8");
}

function currentSelectionsP() {
	var a2 = document.getElementById("select-custom-1").value;
	sessionStorage.setItem("selectGrade", a2);
}

function currentSelectionsP2() {
	var a = document.getElementById("select-custom-2").value;
	sessionStorage.setItem("selectCourse", a);
	
	a = document.getElementById("select-custom-1").value;
	sessionStorage.setItem("selectGrade", a);
}

function chartPoints3() {
	var a = "S11" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math1 = Number(sessionStorage[a]);
	var a = "S18" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math2 = Number(sessionStorage[a]);
	var a = "S25" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math3 = Number(sessionStorage[a]);
	var a = "O2" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math4 = Number(sessionStorage[a]);
	var a = "O9" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math5 = Number(sessionStorage[a]);
	var a = "O16" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math6 = Number(sessionStorage[a]);
	var a = "O23" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math7 = Number(sessionStorage[a]);
	var a = "O30" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math8 = Number(sessionStorage[a]);
	var a = "N6" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math9 = Number(sessionStorage[a]);
	var a = "N13" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math10 = Number(sessionStorage[a]);
	var a = "N20" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math11 = Number(sessionStorage[a]);
	var a = "N27" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math12 = Number(sessionStorage[a]);
	var a = "D4" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math13 = Number(sessionStorage[a]);
	var a = "D11" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math14 = Number(sessionStorage[a]);
	var a = "D18" + "M" + sessionStorage.selectGrade + "All" + "All" + "Total";
	math15 = Number(sessionStorage[a]);
	
	var a = "S11" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading1 = Number(sessionStorage[a]);
	var a = "S18" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading2 = Number(sessionStorage[a]);
	var a = "S25" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading3 = Number(sessionStorage[a]);
	var a = "O2" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading4 = Number(sessionStorage[a]);
	var a = "O9" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading5 = Number(sessionStorage[a]);
	var a = "O16" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading6 = Number(sessionStorage[a]);
	var a = "O23" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading7 = Number(sessionStorage[a]);
	var a = "O30" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading8 = Number(sessionStorage[a]);
	var a = "N6" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading9 = Number(sessionStorage[a]);
	var a = "N13" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading10 = Number(sessionStorage[a]);
	var a = "N20" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading11 = Number(sessionStorage[a]);
	var a = "N27" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading12 = Number(sessionStorage[a]);
	var a = "D4" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading13 = Number(sessionStorage[a]);
	var a = "D11" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading14 = Number(sessionStorage[a]);
	var a = "D18" + "R" + sessionStorage.selectGrade + "All" + "All" + "Total";
	reading15 = Number(sessionStorage[a]);
	
	var a = "S11" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing1 = Number(sessionStorage[a]);
	var a = "S18" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing2 = Number(sessionStorage[a]);
	var a = "S25" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing3 = Number(sessionStorage[a]);
	var a = "O2" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing4 = Number(sessionStorage[a]);
	var a = "O9" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing5 = Number(sessionStorage[a]);
	var a = "O16" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing6 = Number(sessionStorage[a]);
	var a = "O23" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing7 = Number(sessionStorage[a]);
	var a = "O30" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing8 = Number(sessionStorage[a]);
	var a = "N6" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing9 = Number(sessionStorage[a]);
	var a = "N13" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing10 = Number(sessionStorage[a]);
	var a = "N20" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing11 = Number(sessionStorage[a]);
	var a = "N27" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing12 = Number(sessionStorage[a]);
	var a = "D4" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing13 = Number(sessionStorage[a]);
	var a = "D11" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing14 = Number(sessionStorage[a]);
	var a = "D18" + "W" + sessionStorage.selectGrade + "All" + "All" + "Total";
	writing15 = Number(sessionStorage[a]);
}

function initialChartP() {
	chartPoints3();
	calculateDetail();
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Assessment Scores by Subject. September to December 2015'},
        subtitle: {text: 'Click the data points to view class scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: 'true', align: 'center', layout: 'horizontal'},
        plotOptions: {series: {cursor: 'pointer', borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Math",
            	colorByPoint: false,
            	color: "#603CBA",
                      
            data: [{name: "Sep 11", y: math1, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}}, 
            	   {name: "Sep 18", y: math2, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Sep 25", y: math3, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 2", y: math4, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 9", y: math5, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 16", y: math6, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 23", y: math7, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 30", y: math8, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 6", y: math9, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 13", y: math10, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 20", y: math11, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 27", y: math12, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 4", y: math13, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 11", y: math14, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 18", y: math15, events: {click: function(){sessionStorage.setItem("selectCourse", "M");window.open("http://neols.com/eqao_principal1A.html","_self")}}}]
	        },
	        {
	        name: "Reading",
	            colorByPoint: false,
	            color: "#00A300",
	                      
            data: [{name: "Sep 11", y: reading1, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}}, 
            	   {name: "Sep 18", y: reading2, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Sep 25", y: reading3, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 2", y: reading4, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 9", y: reading5, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 16", y: reading6, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 23", y: reading7, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 30", y: reading8, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 6", y: reading9, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 13", y: reading10, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 20", y: reading11, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 27", y: reading12, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 4", y: reading13, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 11", y: reading14, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 18", y: reading15, events: {click: function(){sessionStorage.setItem("selectCourse", "R");window.open("http://neols.com/eqao_principal1A.html","_self")}}}]
			},
	        {
	        name: "Writing",
	            colorByPoint: false,
	            color: "#FFC40D",
	                      
            data: [{name: "Sep 11", y: writing1, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}}, 
            	   {name: "Sep 18", y: writing2, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Sep 25", y: writing3, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 2", y: writing4, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 9", y: writing5, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 16", y: writing6, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 23", y: writing7, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Oct 30", y: writing8, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 6", y: writing9, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 13", y: writing10, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 20", y: writing11, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Nov 27", y: writing12, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 4", y: writing13, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 11", y: writing14, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}},
            	   {name: "Dec 18", y: writing15, events: {click: function(){sessionStorage.setItem("selectCourse", "W");window.open("http://neols.com/eqao_principal1A.html","_self")}}}]

        }],
    });
}

function calculateDetail() {
	document.getElementById("upArrowM").style.visibility = 'hidden';
	document.getElementById("downArrowM").style.visibility = 'hidden';
	document.getElementById("upArrowR").style.visibility = 'hidden';
	document.getElementById("downArrowR").style.visibility = 'hidden';
	document.getElementById("upArrowW").style.visibility = 'hidden';
	document.getElementById("downArrowW").style.visibility = 'hidden';
	
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
	
	var d = "D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	document.getElementById("container5").innerHTML = sessionStorage[d];
	
	var e1 = "D11" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	var e2 = "D4" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	var e3 = "N27" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	var e4 = "N20" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	var e5 = (Number(sessionStorage[e1]) + Number(sessionStorage[e2]) + Number(sessionStorage[e3]) + Number(sessionStorage[e4])) / 4
	e5 = e5.toFixed(2);
	document.getElementById("container6").innerHTML = e5;
	
	var f = Number(sessionStorage[d]) - e5;

	if (f < 0) {
		document.getElementById("downArrowR").style.visibility = 'visible';
	}
	else if (f >= 0) {
		document.getElementById("upArrowR").style.visibility = 'visible';
	};
	
	var g = "D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	document.getElementById("container8").innerHTML = sessionStorage[g];
	
	var h1 = "D11" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	var h2 = "D4" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	var h3 = "N27" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	var h4 = "N20" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	var h5 = (Number(sessionStorage[h1]) + Number(sessionStorage[h2]) + Number(sessionStorage[h3]) + Number(sessionStorage[h4])) / 4;
	h5 = h5.toFixed(2);
	
	document.getElementById("container9").innerHTML = h5;
	
	var i = Number(sessionStorage[g]) - h5;

	if (i < 0) {
		document.getElementById("downArrowW").style.visibility = 'visible';
	}
	else if (i >= 0) {
		document.getElementById("upArrowW").style.visibility = 'visible';
	};
}

function setButtonText() {
	var a = "Grade " + sessionStorage.selectGrade;
	if (sessionStorage.selectCourse == "M") {var b = "Math";}
	else if (sessionStorage.selectCourse == "R") {var b = "Reading";}
	else {var b = "Writing";};
	document.getElementById("noSelectGrade").innerHTML = a;
	document.getElementById("noSelectCourse").innerHTML = b;
}

function chartPoints4() {
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C1" + "All" + "Total";
	math15 = Number(sessionStorage[a]);

	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C2" + "All" + "Total";
	reading15 = Number(sessionStorage[a]);
	
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + "C3" + "All" + "Total";
	writing15 = Number(sessionStorage[a]);
}

function ClassChart() {
	chartPoints4();
	
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Assessment Scores by Class. September to December 2015'},
        subtitle: {text: 'Click the data points to view assessment details'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: 'true', align: 'center', layout: 'horizontal'},
        plotOptions: {series: {cursor: 'pointer', borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Class 1",
            	colorByPoint: false,
            	color: "#ff0000",
                      
            data: [{name: "Sep 11", y: math1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}}, 
            	   {name: "Sep 18", y: math2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Sep 25", y: math3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 2", y: math4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 9", y: math5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 16", y: math6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 23", y: math7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 30", y: math8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 6", y: math9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 13", y: math10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 20", y: math11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 27", y: math12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 4", y: math13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 11", y: math14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 18", y: math15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");sessionStorage.setItem("selectClass", "C1");window.open("http://neols.com/eqao_principal1B.html","_self")}}}]
	        },
	        {
	        name: "Class 2",
            	colorByPoint: false,
            	color: "#0000ff",
                      
            data: [{name: "Sep 11", y: reading1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}}, 
            	   {name: "Sep 18", y: reading2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Sep 25", y: reading3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 2", y: reading4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 9", y: reading5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 16", y: reading6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 23", y: reading7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 30", y: reading8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 6", y: reading9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 13", y: reading10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 20", y: reading11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 27", y: reading12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 4", y: reading13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 11", y: reading14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 18", y: reading15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");sessionStorage.setItem("selectClass", "C2");window.open("http://neols.com/eqao_principal1B.html","_self")}}}]
	        },
	        {
	        name: "Class 3",
	            colorByPoint: false,
	            color: "#ff9933",
	                      
            data: [{name: "Sep 11", y: writing1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}}, 
            	   {name: "Sep 18", y: writing2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Sep 25", y: writing3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 2", y: writing4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 9", y: writing5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 16", y: writing6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 23", y: writing7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Oct 30", y: writing8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 6", y: writing9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 13", y: writing10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 20", y: writing11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Nov 27", y: writing12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 4", y: writing13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 11", y: writing14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}},
            	   {name: "Dec 18", y: writing15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");sessionStorage.setItem("selectClass", "C3");window.open("http://neols.com/eqao_principal1B.html","_self")}}}]

        }],
    });
}

function setChartTitles3() {
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

function setButtonText3() {
	var a = "Grade " + sessionStorage.selectGrade;
	
	if (sessionStorage.selectCourse == "M") {var b = "Math";}
	else if (sessionStorage.selectCourse == "R") {var b = "Reading";}
	else {var b = "Writing";};

	if (sessionStorage.selectClass == "C1") {var c = "Class 1";}
	else if (sessionStorage.selectClass == "C2") {var c = "Class 2";}
	else {var c = "Class 3";};
	
	document.getElementById("noSelectGrade").innerHTML = a;
	document.getElementById("noSelectCourse").innerHTML = b;
	document.getElementById("noSelectClass").innerHTML = c;
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
            
            data: [{name: sessionStorage[tStudent1 + "name"], y: tDrill1, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent1);window.open("http://neols.com/eqao_principal1C.html","_self")}}}, 
            	   {name: sessionStorage[tStudent2 + "name"], y: tDrill2, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent2);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent3 + "name"], y: tDrill3, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent3);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent4 + "name"], y: tDrill4, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent4);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent5 + "name"], y: tDrill5, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent5);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent6 + "name"], y: tDrill6, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent6);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent7 + "name"], y: tDrill7, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent7);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent8 + "name"], y: tDrill8, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent8);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent9 + "name"], y: tDrill9, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent9);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent10 + "name"], y: tDrill10, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent10);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent11 + "name"], y: tDrill11, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent11);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent12 + "name"], y: tDrill12, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent12);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent13 + "name"], y: tDrill13, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent13);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent14 + "name"], y: tDrill14, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent14);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
            	   {name: sessionStorage[tStudent15 + "name"], y: tDrill15, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent15);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
				   {name: sessionStorage[tStudent16 + "name"], y: tDrill16, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent16);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
				   {name: sessionStorage[tStudent17 + "name"], y: tDrill17, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent17);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
				   {name: sessionStorage[tStudent18 + "name"], y: tDrill18, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent18);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
				   {name: sessionStorage[tStudent19 + "name"], y: tDrill19, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent19);window.open("http://neols.com/eqao_principal1C.html","_self")}}},
				   {name: sessionStorage[tStudent20 + "name"], y: tDrill20, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent20);window.open("http://neols.com/eqao_principal1C.html","_self")}}}]
        }],
	});
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
	}
	
	else if (d == "M3C2array") {
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
	}
	
	else if (d == "M3C3array") {
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
	}
	
	else if (d == "M6C1array") {
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
	}
	
	else if (d == "M6C2array") {
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
	}
	
	else if (d == "M6C3array") {
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
	}
	
	else {
		document.getElementById("container2").style.visibility = 'hidden';
		alert("No demo data for this selection.");
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

function setButtonText4() {
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
	document.getElementById("cTab1").innerHTML = "Curriculum Strand 1 Score: " + g + " %";
	
	var h = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat2";
	var i = Number(sessionStorage[h]) / 10 * 100;
	document.getElementById("cTab2").innerHTML = "Curriculum Strand 2 Score: " + i + " %";
	
	var j = sessionStorage.selectTestDate + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "cat3";
	var k = Number(sessionStorage[j]) / 10 * 100;
	document.getElementById("cTab3").innerHTML = "Curriculum Strand 3 Score: " + k + " %";
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

function viewQuestion1() {
	document.getElementById("question2").className = "levelInvisible";
	document.getElementById("question3").className = "levelInvisible";
	document.getElementById("question1").className = "levelVisible";
}

function viewQuestion2() {
	document.getElementById("question1").className = "levelInvisible";
	document.getElementById("question3").className = "levelInvisible";
	document.getElementById("question2").className = "levelVisible";
}

function viewQuestion3() {
	document.getElementById("question1").className = "levelInvisible";
	document.getElementById("question2").className = "levelInvisible";
	document.getElementById("question3").className = "levelVisible";
}

function viewQuestion4() {
	document.getElementById("question5").className = "levelInvisible";
	document.getElementById("question6").className = "levelInvisible";
	document.getElementById("question4").className = "levelVisible";
}

function viewQuestion5() {
	document.getElementById("question4").className = "levelInvisible";
	document.getElementById("question6").className = "levelInvisible";
	document.getElementById("question5").className = "levelVisible";
}

function viewQuestion6() {
	document.getElementById("question4").className = "levelInvisible";
	document.getElementById("question5").className = "levelInvisible";
	document.getElementById("question6").className = "levelVisible";
}

function viewQuestion7() {
	document.getElementById("question8").className = "levelInvisible";
	document.getElementById("question9").className = "levelInvisible";
	document.getElementById("question7").className = "levelVisible";
}

function viewQuestion8() {
	document.getElementById("question7").className = "levelInvisible";
	document.getElementById("question9").className = "levelInvisible";
	document.getElementById("question8").className = "levelVisible";
}

function viewQuestion9() {
	document.getElementById("question7").className = "levelInvisible";
	document.getElementById("question8").className = "levelInvisible";
	document.getElementById("question9").className = "levelVisible";
}

function teacherNames() {
	if (document.getElementById("select-custom-2").value == "M") {
		if (document.getElementById("select-custom-1").value == "8") {
			document.getElementById("score-std1").innerHTML = "Christian Bailey";
			document.getElementById("score-std2").innerHTML = "Jerald Turner";
			document.getElementById("score-std3").innerHTML = "Jesse Norman";
		}
		else if (document.getElementById("select-custom-1").value == "7") {
			document.getElementById("score-std1").innerHTML = "John Jones";
			document.getElementById("score-std2").innerHTML = "Vicki Ortiz";
			document.getElementById("score-std3").innerHTML = "Teresa Cummings";
		}
		else if (document.getElementById("select-custom-1").value == "6") {
			document.getElementById("score-std1").innerHTML = "Michele Hopkins";
			document.getElementById("score-std2").innerHTML = "Candace Palmer";
			document.getElementById("score-std3").innerHTML = "Della Mcguire";
		}
		else if (document.getElementById("select-custom-1").value == "5") {
			document.getElementById("score-std1").innerHTML = "Otis Williams";
			document.getElementById("score-std2").innerHTML = "Wendell Ballard";
			document.getElementById("score-std3").innerHTML = "Clint Lopez";
		}
		else if (document.getElementById("select-custom-1").value == "4") {
			document.getElementById("score-std1").innerHTML = "Nettie Becker";
			document.getElementById("score-std2").innerHTML = "Kenneth Schwartz";
			document.getElementById("score-std3").innerHTML = "Penny Parks";
		}
		else if (document.getElementById("select-custom-1").value == "3") {
			document.getElementById("score-std1").innerHTML = "Clifton Knight";
			document.getElementById("score-std2").innerHTML = "Janis Haynes";
			document.getElementById("score-std3").innerHTML = "Gretchen Glover";
		}
		else {
			document.getElementById("score-std1").innerHTML = "Leroy Aguilar";
			document.getElementById("score-std2").innerHTML = "Brittany Norris";
			document.getElementById("score-std3").innerHTML = "Ron Vargas";
		};
	}
	else if (document.getElementById("select-custom-2").value == "R") {
		if (document.getElementById("select-custom-1").value == "8") {
			document.getElementById("score-std1").innerHTML = "Bessie Mack";
			document.getElementById("score-std2").innerHTML = "Margaret Horton";
			document.getElementById("score-std3").innerHTML = "Donna Mcgee";
		}
		else if (document.getElementById("select-custom-1").value == "7") {
			document.getElementById("score-std1").innerHTML = "Alan Barnes";
			document.getElementById("score-std2").innerHTML = "Louis Jackson";
			document.getElementById("score-std3").innerHTML = "Andrea Brown";
		}
		else if (document.getElementById("select-custom-1").value == "6") {
			document.getElementById("score-std1").innerHTML = "Harold Ross";
			document.getElementById("score-std2").innerHTML = "Nancy Lewis";
			document.getElementById("score-std3").innerHTML = "Christina Alexander";
		}
		else if (document.getElementById("select-custom-1").value == "5") {
			document.getElementById("score-std1").innerHTML = "Sandra Murphy";
			document.getElementById("score-std2").innerHTML = "Victor Edwards";
			document.getElementById("score-std3").innerHTML = "Gerald Allen";
		}
		else if (document.getElementById("select-custom-1").value == "4") {
			document.getElementById("score-std1").innerHTML = "Jeffrey White";
			document.getElementById("score-std2").innerHTML = "Stephen Gonzalez";
			document.getElementById("score-std3").innerHTML = "Heather Sanchez";
		}
		else if (document.getElementById("select-custom-1").value == "3") {
			document.getElementById("score-std1").innerHTML = "Ronald Moore";
			document.getElementById("score-std2").innerHTML = "Randy Foster";
			document.getElementById("score-std3").innerHTML = "Kathleen Bell";
		}
		else {
			document.getElementById("score-std1").innerHTML = "Joe Evans";
			document.getElementById("score-std2").innerHTML = "Sara Martinez";
			document.getElementById("score-std3").innerHTML = "Kenneth Johnson";
		};
	}
	
	else {
		if (document.getElementById("select-custom-1").value == "8") {
			document.getElementById("score-std1").innerHTML = "Jennifer Jenkins";
			document.getElementById("score-std2").innerHTML = "Maria Phillips";
			document.getElementById("score-std3").innerHTML = "Jerry Bennett";
		}
		else if (document.getElementById("select-custom-1").value == "7") {
			document.getElementById("score-std1").innerHTML = "Kevin Campbell";
			document.getElementById("score-std2").innerHTML = "Elizabeth Henderson";
			document.getElementById("score-std3").innerHTML = "Todd Anderson";
		}
		else if (document.getElementById("select-custom-1").value == "6") {
			document.getElementById("score-std1").innerHTML = "Amanda Morgan";
			document.getElementById("score-std2").innerHTML = "Eric Hernandez";
			document.getElementById("score-std3").innerHTML = "Dorothy Green";
		}
		else if (document.getElementById("select-custom-1").value == "5") {
			document.getElementById("score-std1").innerHTML = "Martin Ramirez";
			document.getElementById("score-std2").innerHTML = "Nicholas Perez";
			document.getElementById("score-std3").innerHTML = "Aaron Griffin";
		}
		else if (document.getElementById("select-custom-1").value == "4") {
			document.getElementById("score-std1").innerHTML = "Daniel Cook";
			document.getElementById("score-std2").innerHTML = "Wayne Powell";
			document.getElementById("score-std3").innerHTML = "George Rogers";
		}
		else if (document.getElementById("select-custom-1").value == "3") {
			document.getElementById("score-std1").innerHTML = "Paul Thomas";
			document.getElementById("score-std2").innerHTML = "Chris Ward";
			document.getElementById("score-std3").innerHTML = "Ryan Brooks";
		}
		else {
			document.getElementById("score-std1").innerHTML = "Joyce Nelson";
			document.getElementById("score-std2").innerHTML = "Brenda Robinson";
			document.getElementById("score-std3").innerHTML = "Jean Davis";
		};
	};
}

function hideElements() {
	document.getElementById("studentNameBox").style.visibility = 'hidden';
	document.getElementById("container").style.visibility = 'hidden';
	document.getElementById("container2").style.visibility = 'hidden';
}

function revealGraph1() {
	document.getElementById("container2").style.visibility = 'hidden';
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std1").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	sessionStorage.setItem("selectClass", "C1");
	legendName = document.getElementById("score-std1").innerHTML;
	document.getElementById("container").style.visibility = 'visible';
	if (sessionStorage.selectCourse == "M") {
		courseColour = "#603CBA"}
	else if (sessionStorage.selectCourse == "R") {
		courseColour = "#00A300"}
	else {
		courseColour = "#FFC40D"};
	TeacherChart1();
}

function revealGraph2() {
	document.getElementById("container2").style.visibility = 'hidden';
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std2").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	sessionStorage.setItem("selectClass", "C2");
	legendName = document.getElementById("score-std2").innerHTML;
	document.getElementById("container").style.visibility = 'visible';
	if (sessionStorage.selectCourse == "M") {
		courseColour = "#603CBA"}
	else if (sessionStorage.selectCourse == "R") {
		courseColour = "#00A300"}
	else {
		courseColour = "#FFC40D"};
	TeacherChart1();
}

function revealGraph3() {
	document.getElementById("container2").style.visibility = 'hidden';
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std3").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	sessionStorage.setItem("selectClass", "C3");
	legendName = document.getElementById("score-std3").innerHTML;
	document.getElementById("container").style.visibility = 'visible';
	if (sessionStorage.selectCourse == "M") {
		courseColour = "#603CBA"}
	else if (sessionStorage.selectCourse == "R") {
		courseColour = "#00A300"}
	else {
		courseColour = "#FFC40D"};
	TeacherChart1();
}

function revealGraph4() {
	setChartTitles3();
	document.getElementById("container2").style.visibility = 'visible';
	TeacherChart2();
}

function TeacherChart1() {
	chartPoints5(); 
	
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Assessment Scores by Class. September to December 2015'},
        subtitle: {text: 'Click the data points to view assessment details'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {cursor: 'pointer', borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
            	colorByPoint: false,
            	color: courseColour,
                      
            data: [{name: "Sep 11", y: math1, events: {click: function(){sessionStorage.setItem("selectTestDate", "S11");revealGraph4();}}}, 
            	   {name: "Sep 18", y: math2, events: {click: function(){sessionStorage.setItem("selectTestDate", "S18");revealGraph4();}}},
            	   {name: "Sep 25", y: math3, events: {click: function(){sessionStorage.setItem("selectTestDate", "S25");revealGraph4();}}},
            	   {name: "Oct 2", y: math4, events: {click: function(){sessionStorage.setItem("selectTestDate", "O2");revealGraph4();}}},
            	   {name: "Oct 9", y: math5, events: {click: function(){sessionStorage.setItem("selectTestDate", "O9");revealGraph4();}}},
            	   {name: "Oct 16", y: math6, events: {click: function(){sessionStorage.setItem("selectTestDate", "O16");revealGraph4();}}},
            	   {name: "Oct 23", y: math7, events: {click: function(){sessionStorage.setItem("selectTestDate", "O23");revealGraph4();}}},
            	   {name: "Oct 30", y: math8, events: {click: function(){sessionStorage.setItem("selectTestDate", "O30");revealGraph4();}}},
            	   {name: "Nov 6", y: math9, events: {click: function(){sessionStorage.setItem("selectTestDate", "N6");revealGraph4();}}},
            	   {name: "Nov 13", y: math10, events: {click: function(){sessionStorage.setItem("selectTestDate", "N13");revealGraph4();}}},
            	   {name: "Nov 20", y: math11, events: {click: function(){sessionStorage.setItem("selectTestDate", "N20");revealGraph4();}}},
            	   {name: "Nov 27", y: math12, events: {click: function(){sessionStorage.setItem("selectTestDate", "N27");revealGraph4();}}},
            	   {name: "Dec 4", y: math13, events: {click: function(){sessionStorage.setItem("selectTestDate", "D4");revealGraph4();}}},
            	   {name: "Dec 11", y: math14, events: {click: function(){sessionStorage.setItem("selectTestDate", "D11");revealGraph4();}}},
            	   {name: "Dec 18", y: math15, events: {click: function(){sessionStorage.setItem("selectTestDate", "D18");revealGraph4();}}}]
	        }],
    });
}

function chartPoints5() {
	var a = "S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math1 = Number(sessionStorage[a]);
	var a = "S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math2 = Number(sessionStorage[a]);
	var a = "S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math3 = Number(sessionStorage[a]);
	var a = "O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math4 = Number(sessionStorage[a]);
	var a = "O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math5 = Number(sessionStorage[a]);
	var a = "O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math6 = Number(sessionStorage[a]);
	var a = "O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math7 = Number(sessionStorage[a]);
	var a = "O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math8 = Number(sessionStorage[a]);
	var a = "N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math9 = Number(sessionStorage[a]);
	var a = "N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math10 = Number(sessionStorage[a]);
	var a = "N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math11 = Number(sessionStorage[a]);
	var a = "N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math12 = Number(sessionStorage[a]);
	var a = "D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math13 = Number(sessionStorage[a]);
	var a = "D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math14 = Number(sessionStorage[a]);
	var a = "D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math15 = Number(sessionStorage[a]);
}

function TeacherChart3() {
	drillPoints2();
    $('#container').highcharts({
        chart: {type: 'column'},
        title: {text: 'Assessment Scores - Sep to Dec 2015'},
        subtitle: {
        	style: {
        		fontWeight: 'bold',
        		color: '#000000'
        	}
        },
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}},
        legend: {enabled: false},
        plotOptions: { series: { borderWidth: 0,dataLabels: {enabled: true,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Student Averages",
            colorByPoint: false,
            
            data: [{name: "Sep 11", y: tDrill1}, 
            	   {name: "Sep 18", y: tDrill2},
            	   {name: "Sep 25", y: tDrill3},
            	   {name: "Oct 2", y: tDrill4},
            	   {name: "Oct 9", y: tDrill5},
            	   {name: "Oct 16", y: tDrill6},
            	   {name: "Oct 23", y: tDrill7},
            	   {name: "Oct 30", y: tDrill8},
            	   {name: "Nov 6", y: tDrill9},
            	   {name: "Nov 13", y: tDrill10},
            	   {name: "Nov 20", y: tDrill11},
            	   {name: "Nov 27", y: tDrill12},
            	   {name: "Dec 4", y: tDrill13},
            	   {name: "Dec 11", y: tDrill14},
            	   {name: "Dec 18", y: tDrill15}]
        }],
	});
}

function drillPoints2() {
	tDrill1 = Number(sessionStorage["S11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill2 = Number(sessionStorage["S18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill3 = Number(sessionStorage["S25" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill4 = Number(sessionStorage["O2" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill5 = Number(sessionStorage["O9" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill6 = Number(sessionStorage["O16" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill7 = Number(sessionStorage["O23" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill8 = Number(sessionStorage["O30" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill9 = Number(sessionStorage["N6" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill10 = Number(sessionStorage["N13" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill11 = Number(sessionStorage["N20" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill12 = Number(sessionStorage["N27" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill13 = Number(sessionStorage["D4" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill14 = Number(sessionStorage["D11" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
	tDrill15 = Number(sessionStorage["D18" + sessionStorage.selectCourse + sessionStorage.selectGrade + sessionStorage.selectClass + sessionStorage.selectStudent + "pct"]);
}

function initialSelections() {
	sessionStorage.setItem("selectGrade", "3");
	sessionStorage.setItem("selectCourse", "M");
	sessionStorage.setItem("selectClass", "C1");
	sessionStorage.setItem("TestDateArray", "S11,S18,S25,O2,O9,O16,O23,O30,N6,N13,N20,N27,D4,D11,D18");
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

function currentSelections2() {
	var a2 = document.getElementById("select-custom-1").value;
	var a3 = document.getElementById("select-custom-2").value;
	var a4 = document.getElementById("select-custom-3").value;
	sessionStorage.setItem("selectGrade", a2);
	sessionStorage.setItem("selectCourse", a3);
	sessionStorage.setItem("selectClass", a4);
}

function resetVisible() {
	document.getElementById("container").style.visibility = 'hidden';
	document.getElementById("studentNameBox").style.visibility='hidden';
}

function reveal1() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent1 + "name"];
	sessionStorage.setItem("selectStudent", tStudent1);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal2() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent2 + "name"];
	sessionStorage.setItem("selectStudent", tStudent2);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal3() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent3 + "name"];
	sessionStorage.setItem("selectStudent", tStudent3);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal4() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent4 + "name"];
	sessionStorage.setItem("selectStudent", tStudent4);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal5() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent5 + "name"];
	sessionStorage.setItem("selectStudent", tStudent5);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal6() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent6 + "name"];
	sessionStorage.setItem("selectStudent", tStudent6);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal7() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent7 + "name"];
	sessionStorage.setItem("selectStudent", tStudent7);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal8() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent8 + "name"];
	sessionStorage.setItem("selectStudent", tStudent8);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal9() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent9 + "name"];
	sessionStorage.setItem("selectStudent", tStudent9);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal10() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent10 + "name"];
	sessionStorage.setItem("selectStudent", tStudent10);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal11() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent11 + "name"];
	sessionStorage.setItem("selectStudent", tStudent11);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal12() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent12 + "name"];
	sessionStorage.setItem("selectStudent", tStudent12);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal13() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent13 + "name"];
	sessionStorage.setItem("selectStudent", tStudent13);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal14() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent14 + "name"];
	sessionStorage.setItem("selectStudent", tStudent14);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal15() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent15 + "name"];
	sessionStorage.setItem("selectStudent", tStudent15);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal16() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent16 + "name"];
	sessionStorage.setItem("selectStudent", tStudent16);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal17() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent17 + "name"];
	sessionStorage.setItem("selectStudent", tStudent17);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal18() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent18 + "name"];
	sessionStorage.setItem("selectStudent", tStudent18);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal19() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent19 + "name"];
	sessionStorage.setItem("selectStudent", tStudent19);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function reveal20() {
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("studentNameBox").innerHTML = sessionStorage[tStudent20 + "name"];
	sessionStorage.setItem("selectStudent", tStudent20);
	document.getElementById("container").style.visibility = 'visible';
	TeacherChart3();
}

function TeacherChart2() {
	whichClass();
	drillPoints();
    $('#container2').highcharts({
        chart: {type: 'column'},
        title: {text: ['Student Assessment Scores - ' + tSubTitle]},
        /*subtitle: {
        	text: 'Click the columns to view student score details',
        	style: {
        		fontWeight: 'bold',
        		color: '#000000'
        	}
        },*/
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}},
        legend: {enabled: false},
        plotOptions: { series: { borderWidth: 0,dataLabels: {enabled: true,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: "Student Averages",
            colorByPoint: false,
            
            data: [{name: sessionStorage[tStudent1 + "name"], y: tDrill1, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent1);}}}, 
            	   {name: sessionStorage[tStudent2 + "name"], y: tDrill2, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent2);}}},
            	   {name: sessionStorage[tStudent3 + "name"], y: tDrill3, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent3);}}},
            	   {name: sessionStorage[tStudent4 + "name"], y: tDrill4, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent4);}}},
            	   {name: sessionStorage[tStudent5 + "name"], y: tDrill5, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent5);}}},
            	   {name: sessionStorage[tStudent6 + "name"], y: tDrill6, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent6);}}},
            	   {name: sessionStorage[tStudent7 + "name"], y: tDrill7, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent7);}}},
            	   {name: sessionStorage[tStudent8 + "name"], y: tDrill8, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent8);}}},
            	   {name: sessionStorage[tStudent9 + "name"], y: tDrill9, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent9);}}},
            	   {name: sessionStorage[tStudent10 + "name"], y: tDrill10, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent10);}}},
            	   {name: sessionStorage[tStudent11 + "name"], y: tDrill11, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent11);}}},
            	   {name: sessionStorage[tStudent12 + "name"], y: tDrill12, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent12);}}},
            	   {name: sessionStorage[tStudent13 + "name"], y: tDrill13, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent13);}}},
            	   {name: sessionStorage[tStudent14 + "name"], y: tDrill14, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent14);}}},
            	   {name: sessionStorage[tStudent15 + "name"], y: tDrill15, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent15);}}},
				   {name: sessionStorage[tStudent16 + "name"], y: tDrill16, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent16);}}},
				   {name: sessionStorage[tStudent17 + "name"], y: tDrill17, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent17);}}},
				   {name: sessionStorage[tStudent18 + "name"], y: tDrill18, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent18);}}},
				   {name: sessionStorage[tStudent19 + "name"], y: tDrill19, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent19);}}},
				   {name: sessionStorage[tStudent20 + "name"], y: tDrill20, events: {click: function(){sessionStorage.setItem("selectStudent", tStudent20);}}}]
        }],
	});
}

function initCalendar() {
	calWidth = document.getElementById("scheduler").offsetWidth;
}

function simulationCalendar() {
	var sYear = 2016;
	var sMonth1 = 0;
	var sMonth2 = 1;
	var descDetail = "Neo Assessment";
	
	var appointments = new Array();

            var appointment1 = {id: "id1",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(2015, 11, 4, 9, 0, 0),end: new Date(2015, 11, 4, 10, 0, 0)}
            var appointment2 = {id: "id2",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(2015, 11, 11, 9, 0, 0),end: new Date(2015, 11, 11, 10, 0, 0)}
            var appointment3 = {id: "id3",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(2015, 11, 18, 9, 0, 0),end: new Date(2015, 11, 18, 10, 0, 0)}
            var appointment4 = {id: "id4",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(2015, 11, 4, 13, 0, 0),end: new Date(2015, 11, 4, 14, 0, 0)}
            var appointment5 = {id: "id5",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(2015, 11, 11, 13, 0, 0),end: new Date(2015, 11, 11, 14, 0, 0)}
			var appointment6 = {id: "id6",description: descDetail,location: "",subject: "Reading Grade 6",calendar: "Reading Grade 6",start: new Date(sYear, sMonth1, 7, 14, 0, 0),end: new Date(sYear, sMonth1, 8, 15, 0, 0)}
			var appointment7 = {id: "id7",description: descDetail,location: "",subject: "Math Grade 6",calendar: "Math Grade 6",start: new Date(sYear, sMonth1, 11, 13, 0, 0),end: new Date(sYear, sMonth1, 11, 14, 0, 0)}
			var appointment8 = {id: "id8",description: descDetail,location: "",subject: "Math Grade 6",calendar: "Math Grade 6",start: new Date(sYear, sMonth1, 27, 11, 0, 0),end: new Date(sYear, sMonth1, 29, 12, 0, 0)}
			var appointment9 = {id: "id9",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(sYear, sMonth2, 1, 9, 0, 0),end: new Date(sYear, sMonth2, 5, 10, 0, 0)}
			var appointment10 = {id: "id10",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(sYear, sMonth1, 4, 9, 0, 0),end: new Date(sYear, sMonth1, 8, 10, 0, 0)}
			var appointment11 = {id: "id11",description: descDetail,location: "",subject: "Math Grade 3",calendar: "Math Grade 3",start: new Date(sYear, sMonth2, 22, 9, 0, 0),end: new Date(sYear, sMonth2, 26, 10, 0, 0)}
			var appointment12 = {id: "id12",description: descDetail,location: "",subject: "Reading Grade 4",calendar: "Reading Grade 4",start: new Date(sYear, sMonth1, 18, 14, 0, 0),end: new Date(sYear, sMonth1, 19, 15, 0, 0)}
			var appointment13 = {id: "id13",description: descDetail,location: "",subject: "Writing Grade 5",calendar: "Writing Grade 5",start: new Date(sYear, sMonth1, 20, 13, 0, 0),end: new Date(sYear, sMonth1, 22, 15, 0, 0)}
			var appointment14 = {id: "id14",description: descDetail,location: "",subject: "Writing Grade 8",calendar: "Writing Grade 8",start: new Date(sYear, sMonth1, 14, 11, 0, 0),end: new Date(sYear, sMonth1, 14, 12, 0, 0)}
			var appointment15 = {id: "id15",description: descDetail,location: "",subject: "Reading Grade 8",calendar: "Reading Grade 8",start: new Date(sYear, sMonth1, 21, 10, 0, 0),end: new Date(sYear, sMonth1, 21, 11, 0, 0)}
			var appointment16 = {id: "id16",description: descDetail,location: "",subject: "Math Grade 6",calendar: "Math Grade 6",start: new Date(sYear, sMonth2, 16, 13, 0, 0),end: new Date(sYear, sMonth2, 19, 14, 0, 0)}
			var appointment17 = {id: "id17",description: descDetail,location: "",subject: "Reading Grade 6",calendar: "Reading Grade 6",start: new Date(sYear, sMonth2, 8, 9, 0, 0),end: new Date(sYear, sMonth2, 9, 10, 0, 0)}
			var appointment18 = {id: "id18",description: descDetail,location: "",subject: "Reading Grade 7",calendar: "Reading Grade 7",start: new Date(sYear, sMonth2, 29, 15, 0, 0),end: new Date(sYear, sMonth2, 29, 16, 0, 0)}
			
            appointments.push(appointment1);
			appointments.push(appointment2);
			appointments.push(appointment3);
			appointments.push(appointment4);
			appointments.push(appointment6);
			appointments.push(appointment7);
			appointments.push(appointment8);
			appointments.push(appointment9);
			appointments.push(appointment10);
			appointments.push(appointment11);
			appointments.push(appointment12);
			appointments.push(appointment13);
			appointments.push(appointment14);
			appointments.push(appointment15);
			appointments.push(appointment16);
			appointments.push(appointment17);
			appointments.push(appointment18);

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
                date: new $.jqx.date('todayDate'),
                width: calWidth,
                height: 750,
                source: adapter,
                view: 'monthView',
                theme: 'metrodark',
                appointmentsMinHeight: 30,
                showLegend: false,
                legendHeight: 80,
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

function hideElements2() {
	document.getElementById("studentNameBox").style.visibility = 'hidden';
	document.getElementById("container").style.visibility = 'hidden';
	document.getElementById("container2").style.visibility = 'hidden';
	document.getElementById("container3").style.visibility = 'hidden';
}

function teacherNames2() {
			document.getElementById("score-std1").innerHTML = "Christian Bailey";
			document.getElementById("score-std2").innerHTML = "Jerald Turner";
			document.getElementById("score-std3").innerHTML = "Jesse Norman";
			document.getElementById("score-std4").innerHTML = "John Jones";
			document.getElementById("score-std5").innerHTML = "Vicki Ortiz";
			document.getElementById("score-std6").innerHTML = "Teresa Cummings";
			document.getElementById("score-std7").innerHTML = "Michele Hopkins";
			document.getElementById("score-std8").innerHTML = "Candace Palmer";
			document.getElementById("score-std9").innerHTML = "Della Mcguire";
			document.getElementById("score-std10").innerHTML = "Otis Williams";
			document.getElementById("score-std11").innerHTML = "Wendell Ballard";
			document.getElementById("score-std12").innerHTML = "Clint Lopez";
			document.getElementById("score-std13").innerHTML = "Nettie Becker";
			document.getElementById("score-std14").innerHTML = "Kenneth Schwartz";
			document.getElementById("score-std15").innerHTML = "Penny Parks";
			document.getElementById("score-std16").innerHTML = "Clifton Knight";
			document.getElementById("score-std17").innerHTML = "Janis Haynes";
			document.getElementById("score-std18").innerHTML = "Gretchen Glover";
			document.getElementById("score-std19").innerHTML = "Leroy Aguilar";
			document.getElementById("score-std20").innerHTML = "Brittany Norris";
			document.getElementById("score-std21").innerHTML = "Ron Vargas";
			document.getElementById("score-std22").innerHTML = "Bessie Mack";
}

function teacherGraph1() {
	sessionStorage.setItem("selectGrade", "8");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std1").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph2() {
	sessionStorage.setItem("selectGrade", "8");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std2").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph3() {
	sessionStorage.setItem("selectGrade", "8");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std3").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph4() {
	sessionStorage.setItem("selectGrade", "7");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std4").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph5() {
	sessionStorage.setItem("selectGrade", "7");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std5").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph6() {
	sessionStorage.setItem("selectGrade", "7");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std6").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph7() {
	sessionStorage.setItem("selectGrade", "6");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std7").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph8() {
	sessionStorage.setItem("selectGrade", "6");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std8").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph9() {
	sessionStorage.setItem("selectGrade", "6");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std9").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph10() {
	sessionStorage.setItem("selectGrade", "5");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std10").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph11() {
	sessionStorage.setItem("selectGrade", "5");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std11").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph12() {
	sessionStorage.setItem("selectGrade", "5");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std12").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph13() {
	sessionStorage.setItem("selectGrade", "4");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std13").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph14() {
	sessionStorage.setItem("selectGrade", "4");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std14").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph15() {
	sessionStorage.setItem("selectGrade", "4");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std15").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph16() {
	sessionStorage.setItem("selectGrade", "3");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std16").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph17() {
	sessionStorage.setItem("selectGrade", "3");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std17").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph18() {
	sessionStorage.setItem("selectGrade", "3");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std18").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph19() {
	sessionStorage.setItem("selectGrade", "2");
	sessionStorage.setItem("selectClass", "C1");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std19").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph20() {
	sessionStorage.setItem("selectGrade", "2");
	sessionStorage.setItem("selectClass", "C2");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std20").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function teacherGraph21() {
	sessionStorage.setItem("selectGrade", "2");
	sessionStorage.setItem("selectClass", "C3");
	document.getElementById("studentNameBox").innerHTML = document.getElementById("score-std21").innerHTML;
	document.getElementById("studentNameBox").style.visibility = 'visible';
	document.getElementById("container").style.visibility = 'visible';
	document.getElementById("container2").style.visibility = 'visible';
	document.getElementById("container3").style.visibility = 'visible';
	chartPoints6();
	teacher1();
	teacher2();
	teacher3();
}

function chartPoints6() {
	var a = "S11" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math1 = Number(sessionStorage[a]);
	var a = "S18" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math2 = Number(sessionStorage[a]);
	var a = "S25" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math3 = Number(sessionStorage[a]);
	var a = "O2" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math4 = Number(sessionStorage[a]);
	var a = "O9" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math5 = Number(sessionStorage[a]);
	var a = "O16" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math6 = Number(sessionStorage[a]);
	var a = "O23" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math7 = Number(sessionStorage[a]);
	var a = "O30" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math8 = Number(sessionStorage[a]);
	var a = "N6" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math9 = Number(sessionStorage[a]);
	var a = "N13" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math10 = Number(sessionStorage[a]);
	var a = "N20" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math11 = Number(sessionStorage[a]);
	var a = "N27" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math12 = Number(sessionStorage[a]);
	var a = "D4" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math13 = Number(sessionStorage[a]);
	var a = "D11" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math14 = Number(sessionStorage[a]);
	var a = "D18" + "M" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	math15 = Number(sessionStorage[a]);
	
	var a = "S11" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading1 = Number(sessionStorage[a]);
	var a = "S18" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading2 = Number(sessionStorage[a]);
	var a = "S25" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading3 = Number(sessionStorage[a]);
	var a = "O2" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading4 = Number(sessionStorage[a]);
	var a = "O9" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading5 = Number(sessionStorage[a]);
	var a = "O16" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading6 = Number(sessionStorage[a]);
	var a = "O23" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading7 = Number(sessionStorage[a]);
	var a = "O30" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading8 = Number(sessionStorage[a]);
	var a = "N6" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading9 = Number(sessionStorage[a]);
	var a = "N13" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading10 = Number(sessionStorage[a]);
	var a = "N20" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading11 = Number(sessionStorage[a]);
	var a = "N27" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading12 = Number(sessionStorage[a]);
	var a = "D4" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading13 = Number(sessionStorage[a]);
	var a = "D11" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading14 = Number(sessionStorage[a]);
	var a = "D18" + "R" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	reading15 = Number(sessionStorage[a]);
	
	var a = "S11" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing1 = Number(sessionStorage[a]);
	var a = "S18" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing2 = Number(sessionStorage[a]);
	var a = "S25" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing3 = Number(sessionStorage[a]);
	var a = "O2" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing4 = Number(sessionStorage[a]);
	var a = "O9" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing5 = Number(sessionStorage[a]);
	var a = "O16" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing6 = Number(sessionStorage[a]);
	var a = "O23" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing7 = Number(sessionStorage[a]);
	var a = "O30" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing8 = Number(sessionStorage[a]);
	var a = "N6" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing9 = Number(sessionStorage[a]);
	var a = "N13" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing10 = Number(sessionStorage[a]);
	var a = "N20" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing11 = Number(sessionStorage[a]);
	var a = "N27" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing12 = Number(sessionStorage[a]);
	var a = "D4" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing13 = Number(sessionStorage[a]);
	var a = "D11" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing14 = Number(sessionStorage[a]);
	var a = "D18" + "W" + sessionStorage.selectGrade + sessionStorage.selectClass + "All" + "Total";
	writing15 = Number(sessionStorage[a]);
}

function teacher1() {
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Math Assessment Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
            	colorByPoint: false,
            	color: "#603CBA",
                      
            data: [{name: "Sep 11", y: math1}, 
            	   {name: "Sep 18", y: math2},
            	   {name: "Sep 25", y: math3},
            	   {name: "Oct 2", y: math4},
            	   {name: "Oct 9", y: math5},
            	   {name: "Oct 16", y: math6},
            	   {name: "Oct 23", y: math7},
            	   {name: "Oct 30", y: math8},
            	   {name: "Nov 6", y: math9},
            	   {name: "Nov 13", y: math10},
            	   {name: "Nov 20", y: math11},
            	   {name: "Nov 27", y: math12},
            	   {name: "Dec 4", y: math13},
            	   {name: "Dec 11", y: math14},
            	   {name: "Dec 18", y: math15}]
	        }],
    });
}

function teacher2() {
    $('#container2').highcharts({
        chart: {type: 'line'},
        title: {text: 'Reading Assessment Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
            	colorByPoint: false,
            	color: "#00A300",
                      
            data: [{name: "Sep 11", y: reading1}, 
            	   {name: "Sep 18", y: reading2},
            	   {name: "Sep 25", y: reading3},
            	   {name: "Oct 2", y: reading4},
            	   {name: "Oct 9", y: reading5},
            	   {name: "Oct 16", y: reading6},
            	   {name: "Oct 23", y: reading7},
            	   {name: "Oct 30", y: reading8},
            	   {name: "Nov 6", y: reading9},
            	   {name: "Nov 13", y: reading10},
            	   {name: "Nov 20", y: reading11},
            	   {name: "Nov 27", y: reading12},
            	   {name: "Dec 4", y: reading13},
            	   {name: "Dec 11", y: reading14},
            	   {name: "Dec 18", y: reading15}]
	        }],
    });
}

function teacher3() {
    $('#container3').highcharts({
        chart: {type: 'line'},
        title: {text: 'Writing Assessment Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
            	colorByPoint: false,
            	color: "#FFC40D",
                      
            data: [{name: "Sep 11", y: writing1}, 
            	   {name: "Sep 18", y: writing2},
            	   {name: "Sep 25", y: writing3},
            	   {name: "Oct 2", y: writing4},
            	   {name: "Oct 9", y: writing5},
            	   {name: "Oct 16", y: writing6},
            	   {name: "Oct 23", y: writing7},
            	   {name: "Oct 30", y: writing8},
            	   {name: "Nov 6", y: writing9},
            	   {name: "Nov 13", y: writing10},
            	   {name: "Nov 20", y: writing11},
            	   {name: "Nov 27", y: writing12},
            	   {name: "Dec 4", y: writing13},
            	   {name: "Dec 11", y: writing14},
            	   {name: "Dec 18", y: writing15}]
	        }],
    });
}

function combinedGrades() {
		trendCombined1();
		trendCombined2();
		trendCombined3();
}

function byGrade() {
		trend4();
		trend5();
		trend6();
}

function trendCombined1() {
	trendCombinedPoints1();
    $('#container').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Math Scores'},
        subtitle: {text: 'All Grades Combined'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
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

function trendCombinedPoints1() {
	var a = "2010" + "M" + "AllAllAllTotal";
	math1 = Number(sessionStorage[a]);
	var a = "2011" + "M" + "AllAllAllTotal";
	math2 = Number(sessionStorage[a]);
	var a = "2012" + "M" + "AllAllAllTotal";
	math3 = Number(sessionStorage[a]);
	var a = "2013" + "M" + "AllAllAllTotal";
	math4 = Number(sessionStorage[a]);
	var a = "2014" + "M" + "AllAllAllTotal";
	math5 = Number(sessionStorage[a]);
	var a = "D18" + "M" + "AllAllAllTotal";
	math6 = Number(sessionStorage[a]);
}

function trendCombined2() {
	trendCombinedPoints2();
    $('#container2').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Reading Scores'},
        subtitle: {text: 'All Grades Combined'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
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

function trendCombinedPoints2() {
	var a = "2010" + "R" + "AllAllAllTotal";
	reading1 = Number(sessionStorage[a]);
	var a = "2011" + "R" + "AllAllAllTotal";
	reading2 = Number(sessionStorage[a]);
	var a = "2012" + "R" + "AllAllAllTotal";
	reading3 = Number(sessionStorage[a]);
	var a = "2013" + "R" + "AllAllAllTotal";
	reading4 = Number(sessionStorage[a]);
	var a = "2014" + "R" + "AllAllAllTotal";
	reading5 = Number(sessionStorage[a]);
	var a = "D18" + "R" + "AllAllAllTotal";
	reading6 = Number(sessionStorage[a]);
}

function trendCombined3() {
	trendCombinedPoints3();
    $('#container3').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Writing Scores'},
        subtitle: {text: 'All Grades Combined'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
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

function trendCombinedPoints3() {
	var a = "2010" + "W" + "AllAllAllTotal";
	writing1 = Number(sessionStorage[a]);
	var a = "2011" + "W" + "AllAllAllTotal";
	writing2 = Number(sessionStorage[a]);
	var a = "2012" + "W" + "AllAllAllTotal";
	writing3 = Number(sessionStorage[a]);
	var a = "2013" + "W" + "AllAllAllTotal";
	writing4 = Number(sessionStorage[a]);
	var a = "2014" + "W" + "AllAllAllTotal";
	writing5 = Number(sessionStorage[a]);
	var a = "D18" + "W" + "AllAllAllTotal";
	writing6 = Number(sessionStorage[a]);
}

function currentSelectionsP3() {
	var a = document.getElementById("select-custom-1").value;
	sessionStorage.setItem("selectGrade", a);
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
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
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
	var a = "2010" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math1 = Number(sessionStorage[a]);
	var a = "2011" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math2 = Number(sessionStorage[a]);
	var a = "2012" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math3 = Number(sessionStorage[a]);
	var a = "2013" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math4 = Number(sessionStorage[a]);
	var a = "2014" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math5 = Number(sessionStorage[a]);
	var a = "D18" + "M" + sessionStorage.selectGrade + "AllAllTotal";
	math6 = Number(sessionStorage[a]);
}

function trend5() {
	trendPoints5();
    $('#container5').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Reading Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
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
	var a = "2010" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading1 = Number(sessionStorage[a]);
	var a = "2011" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading2 = Number(sessionStorage[a]);
	var a = "2012" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading3 = Number(sessionStorage[a]);
	var a = "2013" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading4 = Number(sessionStorage[a]);
	var a = "2014" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading5 = Number(sessionStorage[a]);
	var a = "D18" + "R" + sessionStorage.selectGrade + "AllAllTotal";
	reading6 = Number(sessionStorage[a]);
}

function trend6() {
	trendPoints6();
    $('#container6').highcharts({
        chart: {type: 'line'},
        title: {text: 'Historical Writing Scores'},
        xAxis: {type: 'category'},
        yAxis: {title: {text: 'Average Score (%)'}, tickInterval: 10, max: 100},
        legend: {enabled: false},
        plotOptions: {series: {borderWidth: 0,dataLabels: {enabled: false,format: '{point.y:.1f}%'}}},
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: legendName,
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
	var a = "2010" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing1 = Number(sessionStorage[a]);
	var a = "2011" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing2 = Number(sessionStorage[a]);
	var a = "2012" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing3 = Number(sessionStorage[a]);
	var a = "2013" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing4 = Number(sessionStorage[a]);
	var a = "2014" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing5 = Number(sessionStorage[a]);
	var a = "D18" + "W" + sessionStorage.selectGrade + "AllAllTotal";
	writing6 = Number(sessionStorage[a]);
}
