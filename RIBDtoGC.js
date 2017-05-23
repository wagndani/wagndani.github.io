<<<<<<< HEAD
//Load Google Chart Packages
google.charts.load('current', {'packages':['corechart']});

//Our summary results data
var summaryResults = [
    {
        advanceDays:2467,
        averageAdvance:123.35,
        averagestay:2.3,
        occurance:20,
        siteType:"GROUP STANDARD NONELECTRIC",
        totalday:46
    },
    {
        advanceDays:17203,
        averageAdvance:86.015,
        averagestay:1.745,
        occurance:200,
        siteType:"TENT ONLY NONELECTRIC",
        totalday:349,
    },
    {
        advanceDays:44715,
        averageAdvance:57.32692307692308,
        averagestay:2.1615384615384614,
        occurance:780,
        siteType:"STANDARD NONELECTRIC",
        totalday:1686,
    }
]


var reservationDataArray =[];

summaryResults.forEach(function(element){
    var rowArray =[];
    rowArray.push(element.siteType + '\n(' + element.occurance + ' reservations)');
    rowArray.push(element.averageAdvance);
    reservationDataArray.push(rowArray);
})
        
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(advancedDayResPieChart);
        
function advancedDayResPieChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'Site Type');
        data.addColumn('number', 'Days Reservation Made in Advance');
        data.addRows(reservationDataArray);

    // Set chart options
    var options = {
        'title':'Comparison of Days of Advanced Reservation by Site Type',
        'width':600,
        'height':300,
        'backgroundColor':'#ece9e2',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new     google.visualization.ColumnChart(document.getElementById('ColumnChartHere'));
        chart.draw(data, options);
}   

=======
//Load Google Chart Packages
google.charts.load('current', {'packages':['corechart']});

//Our summary results data
var summaryResults = [
    {
        advanceDays:2467,
        averageAdvance:123.35,
        averagestay:2.3,
        occurance:20,
        siteType:"GROUP STANDARD NONELECTRIC",
        totalday:46
    },
    {
        advanceDays:17203,
        averageAdvance:86.015,
        averagestay:1.745,
        occurance:200,
        siteType:"TENT ONLY NONELECTRIC",
        totalday:349,
    },
    {
        advanceDays:44715,
        averageAdvance:57.32692307692308,
        averagestay:2.1615384615384614,
        occurance:780,
        siteType:"STANDARD NONELECTRIC",
        totalday:1686,
    }
]


var reservationDataArray =[];

summaryResults.forEach(function(element){
    var rowArray =[];
    rowArray.push(element.siteType + '\n(' + element.occurance + ' reservations)');
    rowArray.push(element.averageAdvance);
    reservationDataArray.push(rowArray);
})
        
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(advancedDayResPieChart);
        
function advancedDayResPieChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'Site Type');
        data.addColumn('number', 'Days Reservation Made in Advance');
        data.addRows(reservationDataArray);

    // Set chart options
    var options = {
        'title':'Comparison of Days of Advanced Reservation by Site Type',
        'width':800,
        'height':600,
        'backgroundColor':'#ece9e2',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new     google.visualization.ColumnChart(document.getElementById('ColumnChartHere'));
        chart.draw(data, options);
}   

>>>>>>> origin/master
