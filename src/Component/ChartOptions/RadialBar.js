export function radialBarOptions (){
    const options = {
		chart: {
			height: 390,
			type: 'radialBar',
		},

		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '30%',
					background: 'transparent',
					image: undefined,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						show: false,
					}
				},
				track: {
					show: true,
				}
			},
		},
		colors: ['#b55dc4', '#d4d4d4', '#e86867', '#78c37b', '#ffd142'],
        labels:  ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
		legend: {
			show: true,
			floating: true,
			fontSize: '16px',
			position: 'right',
			offsetX: 240,
			offsetY: 15,
			labels: {
				useSeriesColors: true,
			},
			markers: {
				size: 0
			},
			formatter: function (seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				vertical: 3
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}]
    }
    return options
}