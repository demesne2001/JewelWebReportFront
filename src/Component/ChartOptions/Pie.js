export function pieOptions(labels){

    const options = {
        colors :['#28568e','#a8322f','#6f8d31','#644788','#2d97b2','#2c93ae','#e97d23'],

        chart: {
          width: 380,
          type: 'pie',
        },

        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          // formatter: function(val, opt) {
          // 	return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          // },
      stroke: {
              width: 0,
            },
        
        labels: labels,

        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            },

          },
          
        }]
      }
  }
  
  return options
}