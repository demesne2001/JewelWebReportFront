import React from 'react'

import ReactApexChart from 'react-apexcharts';



export default function regionWise() {
	const series = [{
		name: 'Inflation',
		data: [2, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2]
	  }]
	const options = {
		chart: {
		  height: 350,
		  type: 'bar',
		},
		plotOptions: {
		  bar: {
			columnWidth: '5%',
			borderRadius: 1,
			dataLabels: {
			  position: 'top', // top, center, bottom
			},
		  }
		},
		dataLabels: {
		  enabled: true,
		  formatter: function (val) {
			return val;
		  },
		  offsetY: -18,
		  style: {
			fontSize: '14px',
			colors:["#25e1fa"],
		  },
		  background: {
			enabled: true,
			foreColor: '#000000',
			padding: 10,
			borderRadius: 20,
			borderWidth: 1,
			borderColor: '#FFFFFF',
			opacity: 1,

		}
		},
		
		xaxis: {
		  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		  position: 'bottom',
		  axisBorder: {
			show: false
		  },
		  axisTicks: {
			show: false
		  },
		  crosshairs: {
			fill: {
			  type: 'gradient',
			  gradient: {
				colorFrom: '#D8E3F0',
				colorTo: '#BED1E6',
				stops: [0, 100],
				opacityFrom: 0.4,
				opacityTo: 0.5,
			  }
			}
		  },
		  tooltip: {
			enabled: true,
		  }
		},
		yaxis: {
		  axisBorder: {
			show: false
		  },
		  axisTicks: {
			show: false,
		  },
		  labels: {
			show: false,
			formatter: function (val) {
			  return val + "%";
			}
		  }
		
		},
	  }

	// const series = [
	// 	{
	// 	  data: [
	// 		{
	// 		  x: '2008',
	// 		  y: '4500'
	// 		},
	// 		{
	// 		  x: '2009',
	// 		  y: '4100'
	// 		},
	// 		{
	// 		  x: '2010',
	// 		  y: '7800'
	// 		},
	// 		{
	// 		  x: '2011',
	// 		  y: '4600'
	// 		},
	// 		{
	// 		  x: '2012',
	// 		  y: '4100'
	// 		},
	// 		{
	// 		  x: '2013',
	// 		  y: '6500'
	// 		},
	// 		{
	// 		  x: '2014',
	// 		  y: '5600'
	// 		}
	// 	  ]
	// 	}
	//   ]
	//   const options = {
	// 	chart: {
	// 	  height: 350,
	// 	  type: 'bar',
	// 	  zoom: {
	// 		enabled: false
	// 	  },
	// 	  toolbar: {
	// 		show: false,
	// 	},
	// 	},
	// 	legend: {
	// 	  show: true,
	// 	  showForSingleSeries: true,
	// 	  position: 'top',
	// 	  horizontalAlign: 'left',
	// 	  customLegendItems: ['Product A', 'Product B']
	// 	},
	// 	grid: {
	// 	  xaxis: {
	// 		lines: {
	// 		  show: true
	// 		}
	// 	  },
	// 	  yaxis: {
	// 		lines: {
	// 		  show: false
	// 		}
	// 	  }
	// 	},
	// 	xaxis: {
	// 	  tickPlacement: 'on'
	// 	},
	// 	dataLabels: {
	// 		enabled: true,
	// 		enabledOnSeries: undefined,
			
	// 		formatter: function (val, opts) {
	// 			return val
	// 		},
	// 		textAnchor: 'middle',
	// 		distributed: false,
	// 		offsetX: 0,
	// 		offsetY: 0,
	// 		style: {
	// 			fontSize: '14px',
	// 			fontFamily: 'Helvetica, Arial, sans-serif',
	// 			fontWeight: 'bold',
	// 			colors: undefined
	// 		},
	// 		background: {
	// 		  enabled: true,
	// 		  foreColor: '#fff',
	// 		  padding: 4,
	// 		  borderRadius: 2,
	// 		  borderWidth: 1,
	// 		  borderColor: '#fff',
	// 		  opacity: 0.9,
	// 		  dropShadow: {
	// 			enabled: false,
	// 			top: 1,
	// 			left: 1,
	// 			blur: 1,
	// 			color: '#000',
	// 			opacity: 0.45
	// 		  }
	// 		},
	// 		dropShadow: {
	// 			enabled: false,
	// 			top: 1,
	// 			left: 1,
	// 			blur: 1,
	// 			color: '#000',
	// 			opacity: 0.45
	// 		}
	// 	  }
	// }
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-globe"></i>
											Region Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="bar" height={350} />
									{/* <Cylinder/> */}
									</div>
								</div>
							</div>
  )
}
