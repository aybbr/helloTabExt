'use strict';
 
$(document).ready(function () {
    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["bus", "bike", "car", "scooter", "train"],
          datasets: [
            {
              label: "number of trips",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2690,1267,1726,881,4456]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });
});