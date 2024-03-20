export function stackedBarOptions(labels){
    const options = {
        colors: ['#7f7f7f', '#ffc000'],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
              show: false,
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 0,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        xaxis: {
          type: 'text',
          categories: labels,
        },
        legend: {
          position: 'bottom',
        },
        fill: {
          opacity: 1
        }
      }
    
      return options
}