export function DoughnutOptions(){

    const options = {
        chart: {
          type: 'donut',
        },
        legend: {
          show: true,
          postition:'bottom'
        },
        colors:['#8458b0','#da3e00'],

        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        
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