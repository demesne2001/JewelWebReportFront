export function semiDoughnutOptions(label){

    const options = {
        chart: {
          type: 'donut',
        },
        legend: {
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
          }
      },
      labels : label
  }

  return options
}