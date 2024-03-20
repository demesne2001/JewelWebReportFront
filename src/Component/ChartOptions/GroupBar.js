export function GroupBarOptions(labels){

    const options = {
        colors:['#00b150','#002060'],
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
              show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: labels,
        },
        yaxis: {
          title: {
            text: 'Thousands'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return  val + " Thousand"
            }
          }
        }
      }
    
      return options
}