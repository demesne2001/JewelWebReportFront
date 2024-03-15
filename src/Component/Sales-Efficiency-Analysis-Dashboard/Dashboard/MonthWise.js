import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function MonthWise() {
	
          
		const series = [{
		  name: 'Net Profit',
		  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
		  name: 'Revenue',
		  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}]

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
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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

  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-calendar-week"></i>
											Month Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
										<ReactApexChart options={options} series={series} type="bar" height={390} />
									</div>
								</div>
							</div>
  )
}
