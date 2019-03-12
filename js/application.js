	'use strict';
  
(function () {
   $(document).ready(function () {
      // Initializes Tableau extensions Async
      tableau.extensions.initializeAsync().then(function () {
      // Once we initialize we call the renderchart function
      renderChart();
   }, function () { console.log('Initializing error: ' + err.toString()); });
   });
 
   // This javascript function gets data from the worksheet and draws the barchart
   function renderChart() {
      // Gets all the worksheets in a Tableau Dashboard
      const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
      console.log(worksheet)
      // Finds a worksheet called modes
      var worksheet = worksheets.find(function (sheet) {
         return sheet.name === "modes";
      });
 
      // Call a function on the worksheet Object to get the Summary Data.
      worksheet.getSummaryDataAsync().then(function (sumdata) {
         // Create an empty arrays for our labels and data set.
         var labels = [];
         var data = [];
          
         // We get our summary data:
         var modes = sumdata.data;
         // We loop through our summary data and hardcode which columns goes into Label
         // and which column goes into the array.
         for (var i = 0; i < modes.length; i++) {
            labels.push(modes[i][0].formattedValue);
            data.push(modes[i][1].value);
         }
 
         // Draw the chart as before.
         var ctx = $("#myChart");
         var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
               labels: labels, // summary data returned from tableau
               datasets: [{
                  backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                  data: data // summary data returned from tableau
               }]
            }
         });
      });
   }
})();
