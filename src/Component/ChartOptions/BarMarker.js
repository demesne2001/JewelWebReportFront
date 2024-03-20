export function barMarkerOptions(){

    const options = {
		chart: {
		  height: 350,
		  type: 'bar'
		},
		plotOptions: {
		  bar: {
			columnWidth: '60%'
		  }
		},
		colors: ['#00E396'],
		dataLabels: {
		  enabled: false
		},
		legend: {
		  show: true,
		  showForSingleSeries: true,
		  customLegendItems: ['Actual', 'Expected'],
		  markers: {
			fillColors: ['#00E396', '#775DD0']
		  }
		}
	  }
      return options
}