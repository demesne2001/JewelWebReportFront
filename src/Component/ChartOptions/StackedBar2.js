export function StackedBar2Options(labels){

    const options = {
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
		  type: 'datetime',
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