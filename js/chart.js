// Load the Visualization API and the corechart package.
google.charts.load("current", {"packages":["corechart"]});

function drawResponseChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "School");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["WES", 133],
      ["MGHS", 97],
      ["IHoMCS, NMCS & MG21", 35]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 1: Survey Response Number by School",
        chartArea: {width: "50%"},
        "height": 300,
		"width": 1000,
		fontSize: 16,
		colors: ['#8E2D26','#B9322A','#DD847E','#ADADAD']
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div1"));
    chart.draw(data, options);
}

function drawDistanceChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Distance (miles)");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["More than 2 miles", 67],
	  ["1 mile - 2 miles", 61],
	  ["Less than 1 mile", 128],
      ["Don't know", 7]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 2: Distance to School",
	    chartArea: {width: "50%"},
	    "width": 1000,
	    "height": 300,
		fontSize: 16,
		colors: ['#8E2D26','#B9322A','#DD847E','#ADADAD'],
	    hAxis: {
	        title: "Number of Response",
	        minValue: 0
	    },
	    vAxis: {
		    title: "Distance (miles)"
	    }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div2"));
    chart.draw(data, options);
}

function drawTravelToChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Traveling time (minutes)");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Less than 10 ", 155],
      ["10 - 20", 80],
      ["More than 20", 27]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 3: Traveling Time to School",
	    chartArea: {width: "50%"},
	    "width": 600,
	    "height": 300,
		colors: ['#8E2D26','#B9322A','#DD847E'],
		hAxis: {
	        title: "Number of Response",
	        minValue: 0
	    },
	    vAxis: {
		    title: "Duration (minutes)"
	    }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div3"));
    chart.draw(data, options);
}

function drawTravelFromChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Traveling Time");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Less than 10 ", 143],
      ["10 - 20", 78],
      ["More than 20", 44]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 4: Traveling Time from School",
	    chartArea: {width: "50%"},
	    "width": 600,
	    "height": 300,
		colors: ['#8E2D26','#B9322A','#DD847E'],
	    hAxis: {
	        title: "Number of Response",
	        minValue: 0
	    },
	    vAxis: {
		    title: "Duration (minutes)"
	    }
	};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div4"));
    chart.draw(data, options);
}

// Transportation to school in percentage pie chart
function drawTransport2PChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Traveling Time");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Bike, walk, others", 60],
      ["School bus, family vehicle, carpool, or city bus ", 205]
    ]);

    // Set chart options
    var options = {"title": "Figure 6: Mode of Transporation to School (%)",
                   "width": 500,
                   "height": 300,
				   colors: ['#C52026','#ADADAD']
                   };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div6"));
    chart.draw(data, options);
}
// Transportation from school in quantity column chart
function drawTransportFQChart(){
    // Create the data table.
    var data = new google.visualization.arrayToDataTable([
	  ["Mode of Transportation", "Going to school","Coming back from school"],	
      ["School bus", 91,95],
      ["Family vehicle",104, 85],
      ["Carpool", 8,10],
      ["Transit(City Bus)", 2, 0],
      ["Walk", 41,56],
      ["Bike", 19,18],
      ["Other",1,0]
    ]);

    // Set chart options
    var options = {"title": "Figure 5 : Mode of Transporation from School",
                   chartArea: {width: "50%"},
                   "height": 300,
		           "width": 1000,
		           fontSize: 16,
				   colors: ['#C52026','#ADADAD']
                   };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById("chart_div7"));
    chart.draw(data, options);
}
// Transportation from school in percent pie chart
function drawTransportFPChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Traveling Time");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Bike, walk, others", 75],
      ["School bus, family vehicle, carpool, or city bus ", 190]
    ]);

    // Set chart options
    var options = {"title": "Figure 7: Mode of Transporation from School (%)",
                   "width": 500,
                   "height": 300,
				   colors: ['#C52026','#ADADAD']
                   };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div8"));
    chart.draw(data, options);
}

// Transportation to school by school stacked chart
function drawSchool2Stacked() {
      var data = google.visualization.arrayToDataTable([
        ["School", "Bike, walk, others", "School bus, family vehicle, carpool, or city bus"],
        ["WES", 28, 105],
        ["MGHS", 13, 84],
        ["IHoMCS", 10, 12],
        ["NMCS", 5, 2],
        ["MG21", 4, 2]
      ]);


      var options = {
        "title": "Figure 8: Mode of Transportation to School by School",
        chartArea: {width: "50%"},
		"width": 600,
        isStacked: true,
        hAxis: {
          title: "Number of Response",
          minValue: 0
        },
		colors: ['#C52026','#ADADAD'],
        vAxis: {
          title: "School"
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById("chart_div9"));
      chart.draw(data, options);
    }
// Transportation from school by school stacked chart
function drawSchoolFStacked() {
      var data = google.visualization.arrayToDataTable([
        ["School", "Bike, walk, others", "School bus, family vehicle, carpool, or city bus"],
        ["WES", 31, 102],
        ["MGHS", 24, 73],
        ["IHoMCS",11, 11],
        ["NMCS", 5, 2],
        ["MG21", 4, 2]
      ]);


      var options = {
        title: "Figure 9: Mode of Transportation from School by School",
        chartArea: {width: "50%"},
		"width": 600,
        isStacked: true,
		colors: ['#C52026','#ADADAD'],
        hAxis: {
          title: "Number of Response",
          minValue: 0
        },
        vAxis: {
          title: "School"
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById("chart_div10"));
      chart.draw(data, options);
    }
// Transportation to school by grade stacked chart
function drawGrade2Stacked() {
      var data = google.visualization.arrayToDataTable([
        ["Grade", "Bike, walk, others", "School bus, family vehicle, carpool, or city bus"],
        ["Pre-school", 15, 151],
        ["Primary school", 8, 80],
        ["Middle school", 20, 19],
        ["Highschool", 15, 151]
      ]);

      var options = {
        "title": "Figure 10: Mode of Transportation to School by Grade",
        chartArea: {width: "50%"},
        "isStacked": true,
		colors: ['#C52026','#ADADAD'],
		"width": 800,
        hAxis: {
          title: "Number of Response",
          minValue: 0
        },
        vAxis: {
          title: "Grade"
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById("chart_div11"));
      chart.draw(data, options);
    }
// Transportation from school by grade stacked chart
function drawGradeFStacked() {
      var data = google.visualization.arrayToDataTable([
        ["Grade", "Bike, walk, others", "School bus, family vehicle, carpool, or city bus"],
        ["Pre-school", 15, 151],
        ["Primary school", 8, 80],
        ["Middle school", 20, 19],
        ["Highschool", 15, 151]
      ]);

      var options = {
        "title": "Figure 11: Mode of Transportation to School by Grade",
        chartArea: {width: "50%"},
        "isStacked": true,
		colors: ['#C52026','#ADADAD'],
		"width": 800,
        hAxis: {
          title: "Number of Response",
          minValue: 0
        },
        vAxis: {
          title: "Grade"
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById("chart_div12"));
      chart.draw(data, options);
    }
// Transportation to school by distance stacked chart
function drawDistance2Stacked() {
    var data = google.visualization.arrayToDataTable([
        ["Distance", "Bike, walk, others", "School bus, family vehicle, carpool, or city bus"],
        ["Less than 1/4", 29, 12],
        ["1/4 - 1/2", 13, 24],
        ["1/2 -1", 11, 39],
        ["1 - 2", 6, 55],
        ["More than 2", 1, 66]
    ]);

    var options = {
        title: "Figure 10: Mode of Transportation to School by Distance",
        chartArea: {width: "50%"},
        isStacked: true,
		colors: ['#C52026','#ADADAD'],
        hAxis: {
          title: "Number of Response",
          minValue: 0
        },
		"width": 600,
        vAxis: {
          title: "Distance (miles)"
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("chart_div13"));
    chart.draw(data, options);
}

// Transportation from school by distance stacked chart
function drawDistanceFSStacked() {
    var data = google.visualization.arrayToDataTable([
        ["Distance", "Bike, walk, others", "School bus, family vehicle, carpool, or city bus"],
        ["Less than 1/4", 30, 11],
        ["1/4 - 1/2", 16, 21],
        ["1/2 -1", 16, 34],
        ["1 - 2", 11, 50],
        ["More than 2", 1, 86]
    ]);

    var options = {
        title: "Figure 11: Mode of Trasnportation from School by Distance",
        chartArea: {width: "50%"},
        isStacked: true,
		colors: ['#C52026','#ADADAD'],
		"width": 600,
        hAxis: {
          title: "Number of Response",
          minValue: 0
        },
        vAxis: {
          title: "Distance (miles)"
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("chart_div19"));
    chart.draw(data, options);
}
// Bike /Walk Safety in percent pie chart
function drawSafetyBikeChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Safetyl level");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Not at all safe & Somewhat unsafe", 11],
      ["Somewhat safe & Very safe", 45],
	  ["Neither safe nor unsafe", 0],
      ["Neutral", 0]
    ]);


    // Set chart options
    var options = {"title": "Figure 13: How safe do you feel the route to school is for your child to walk or bike?",
                   "width": 500,
                   "height": 300,
				   chartArea: { left: 150, width: 350 },
		           colors: ['#C52026','#DD847E'],
                   };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div14"));
    chart.draw(data, options);
}
// None Bike /Walk Safety in percent pie chart
function drawSafetyNonBikeChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Safetyl level");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Not at all safe & Somewhat unsafe", 130],
      ["Somewhat safe & Very safe", 68],
	  ["Neutral", 17]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 14: How safe do you feel the route to school if he or she would walk or bike?",
        "width": 500,
        "height": 300,
		chartArea: { left: 150, width: 350 },
		colors: ['#C52026','#DD847E','#ADADAD'],
		isStacked: true
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div15"));
    chart.draw(data, options);
}

// How important were the following issues for you when you decided to allow your child to walk or bike to/from school?
function drawTopConcernsAllowStacked() {
    var data = google.visualization.arrayToDataTable([
        ["Issues", "Very important & Somewhat important", "Not at all important", "Neutral"],
        ["Speed of traffic along route", 53, 3, 0],
		["Distance from home to school", 53, 1, 2],
        ["Amount of traffic along route", 52, 3, 1],
		["Weather", 50, 5, 1],
        ["Sidewalks or pathways", 45, 9, 2],
        ["Violence or crime", 37, 14, 5],
        ["Family schedule", 35, 17, 4],
		["Adults to walk or bike with", 35, 17, 3],
		["Crossing guards", 33, 18, 5],
		["Child's before or after school activities", 33, 16, 6],
        ["Convenience/Inconvenience of driving", 29, 22 , 5]	
    ]);

    var options = {
        title: "Figure 15: How important were the following issues for you when you decided to allow your child to walk or bike to/from school?",
		height: 400,
        chartArea: { width: "50%", height: 300 },
        isStacked: true,
		colors: ['#C52026','#DD847E','#ADADAD'],
        hAxis: {
          title: "Number of Response",
          minValue: 0
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("chart_div16"));
    chart.draw(data, options);
}


// None Bike /Walk Top Safety Concern stacked chart
function drawTopConcernsNotAllowStacked() {
    var data = google.visualization.arrayToDataTable([
		["Issues", "Very important & Somewhat important", "Not at all important", "Neutral"],
        ["Amount of traffic along route", 156, 14, 3],
        ["Speed of traffic along route", 153, 16, 3],
		["Weather", 145, 24, 3],
        ["Age of children", 143, 25, 3],
        ["Sidewalks or pathways", 142, 23, 6],
		["Distance from home to school", 132, 38, 4],
		["Crossing guards", 131, 31, 10],
        ["Family schedule", 129, 35, 8],
        ["Convenience/Inconvenience of driving", 114, 47 , 11],	
		["Child's before or after school activities", 113, 49, 9],
		["Adults to walk or bike with", 106, 52, 16],
        ["Violence or crime", 92, 71, 10]
    ]);


    var options = {
        title: "Figure 16: How important were the follwing issues for you when you decided NOT to allow your child to walk or bike to and from school",
		height: 400,
        chartArea: { width: "50%", height: 300 },
        isStacked: true,
		colors: ['#C52026','#DD847E','#ADADAD'],
        hAxis: {
          title: "Number of Response",
          minValue: 0
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("chart_div17"));
    chart.draw(data, options);
}

// can child walk or bike if issues is improved?
function drawIssuesImpStacked() {
    var data = google.visualization.arrayToDataTable([
		["Issues", "Yes", "No", "Neutral"],
        ["Amount of traffic along route", 124, 33, 14],
        ["Speed of traffic along route", 121, 34, 16],
        ["Sidewalks or pathways", 96, 53, 22],
        ["Crossing guards", 96, 53, 22],
		["Adults to walk or bike with", 85, 58, 27],
        ["Distance from home to school", 80, 43, 48],
		["Family schedule", 75, 53, 44],
		["Child's before or after school activities", 65, 61, 45],
		["Violence or crime", 60, 54, 53],
        ["Convenience/Inconvenience of driving", 47, 67, 57],

    ]);

    var options = {
        title: "Figure 17: Would you allow your child ot walk or bike to school if the following issues were improved?",
        height: 400,
		chartArea: { width: "50%", height: 300 },
        isStacked: true,
		colors: ['#C52026','#DD847E','#ADADAD'],
        hAxis: {
          title: "Number of Response",
          minValue: 0
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("chart_div18"));
    chart.draw(data, options);
}
//Quote chart 1
function drawQuote1Chart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Distance (miles)");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Poor drivers", 24],
	  ["Lack of sidewalks", 23],
	  ["Road/intersection design", 21],
      ["Traffic", 13],
	  ["Lack of  or inadequate bike facilities", 12],
	  ["Lack of signage", 7],
	  ["Lack of crossing guard", 7]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 18: Topic arrised from the area or intersection where parents have safety concerns",
	    chartArea: {width: "300"},
	    "width": 1200,
	    "height": 400,
		fontSize: 16,
		colors: ['#C52026'],
		legend: { position: "none" },
	    hAxis: {
	        title: "Percentage(%)",
	        minValue: 0
	    },
	    vAxis: {
		    title: "Identified issues"
	    }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById("chart_div20"));
    chart.draw(data, options);
}
//Quote chart 2
function drawQuote2Chart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Distance (miles)");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Distance", 31],
	  ["Traffic", 22],
	  ["Age of children", 22],
	  ["Lack of sidewalks", 17],
	  ["Safety", 13],
	  ["Schedule/time", 12],
	  ["Poor drivers", 11],
	  
	  ["Road/intersection design", 10],
      ["Other", 7],
	  ["Lack of adequate bike facilities", 5],
	  ["Backpacks/too much to carry", 3],
	  ["Weather", 3],
	  ["Lack of crossing guard", 2]
    ]);
	
    // Set chart options
    var options = {
		"title": "Figure 19: What would you say is the most important reason why your child does not walk or bike to school?",
	    chartArea: {width: "50%"},
	    "width": 1200,
	    "height": 400,
		fontSize: 16,
		colors: ['#C52026'],
		legend: { position: "none" },
	    hAxis: {
	        title: "Percentage(%)",
	        minValue: 0
	    },
	    vAxis: {
		    title: "Identified issues"
	    }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById("chart_div21"));
    chart.draw(data, options);
}
//Quote chart 3
function drawQuote3Chart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Distance (miles)");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["More than 2 miles", 67],
	  ["1 mile - 2 miles", 61],
	  ["Less than 1 mile", 128],
      ["Don't know", 7]
    ]);
	

    // Set chart options
    var options = {
		"title": "Figure 2: Distance to School",
	    chartArea: {width: "50%"},
	    "width": 1000,
	    "height": 300,
		fontSize: 16,
		colors: ['#8E2D26','#B9322A','#DD847E','#ADADAD'],
	    hAxis: {
	        title: "Number of Response",
	        minValue: 0
	    },
	    vAxis: {
		    title: "Distance (miles)"
	    }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div22"));
    chart.draw(data, options);
}

// Intersection concernt yes no in percent pie chart
function drawSafetyYNChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Safetyl level");
    data.addColumn("number", "Number of Response");
    data.addRows([
      ["Yes", 130],
	  ["No", 17]
    ]);

    // Set chart options
    var options = {
		"title": "Figure 18: When your child does walk or bike to school, are there any areas or intersections where you have safety concerns?",
        "width": 500,
        "height": 300,
		chartArea: { left: 150, width: 350 },
		colors: ['#C52026','#ADADAD'],
		isStacked: true
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById("chart_div23"));
    chart.draw(data, options);
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    // Draw X chart
    drawResponseChart();
    drawDistanceChart();
    drawTravelToChart();
    drawTravelFromChart();
    drawTransport2PChart();
    drawTransportFQChart();
    drawTransportFPChart();
    drawSchool2Stacked();
    drawSchoolFStacked();
	drawSafetyBikeChart();
	drawSafetyNonBikeChart();
	drawTopConcernsAllowStacked()
	drawTopConcernsNotAllowStacked();
	drawIssuesImpStacked();
	drawDistanceFSStacked();
	drawQuote1Chart();
	drawQuote2Chart();
	drawQuote3Chart();
	drawSafetyYNChart();
}

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

//create trigger to resizeEnd event     
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

//redraw graph when window resize is completed  
$(window).on('resizeEnd', function() {
    drawChart();
});

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (8000) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 1000, function(){
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	});
	
	// Handle button click
    $("#btnBySchool").click(function(e){
        e.preventDefault();

        $("#bySchool").removeClass("hidden");
        $("#bygrade").addClass("hidden");
        $("#byDistance").addClass("hidden");
    });

    $("#btnbygrade").click(function(e){
        e.preventDefault();

        $("#bySchool").addClass("hidden");
        $("#bygrade").removeClass("hidden");
        $("#byDistance").addClass("hidden");
		drawGrade2Stacked();
		drawGradeFStacked();
    });

    $("#btnByDistance").click(function(e){
        e.preventDefault();

        $("#bySchool").addClass("hidden");
        $("#bygrade").addClass("hidden");
        $("#byDistance").removeClass("hidden");
		drawDistance2Stacked();
    });
});
