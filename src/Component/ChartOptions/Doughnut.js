export function DoughnutOptions(labels){

    const options = {
        chart: {
          type: 'donut',
        },
        legend: {
          show: true
        },
        colors:['#8458b0','#da3e00'],

        labels: labels,
        
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  
                },
                value: {
              
                }
              }
            }
          }
        },
        // responsive: [{
        //   breakpoint: 350,
        // }]
      }

    return options
}