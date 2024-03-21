export function DoughnutOptions(labels){

    const options = {
        chart: {
          type: 'donut',
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
        responsive: [{
          breakpoint: 2000,
        }]
      }

    return options
}