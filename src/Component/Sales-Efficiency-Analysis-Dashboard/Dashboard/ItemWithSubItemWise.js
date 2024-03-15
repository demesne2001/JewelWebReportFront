import React from 'react'


import ReactApexChart from 'react-apexcharts';

export default function ItemWithSubItemWise() {

	const series = [{
		data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
	  }]
	const options = {
		chart: {
		  type: 'bar',
		  height: 380
		},
		legend: {
			position: 'bottom'
		  },
		plotOptions: {
		  bar: {
			barHeight: '100%',
			distributed: true,
			horizontal: true,
			dataLabels: {
			  position: 'bottom'
			},
		  }
		},
		colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
		  '#f48024', '#69d2e7'
		],
		dataLabels: {
		  enabled: true,
		  textAnchor: 'start',
		  style: {
			colors: ['#fff']
		  },
		  formatter: function (val, opt) {
			return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
		  },
		  offsetX: 0,
		  dropShadow: {
			enabled: true
		  }
		},
		stroke: {
		  width: 1,
		  colors: ['#fff']
		},
		xaxis: {
		  categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
			'United States', 'China', 'India'
		  ],
		},
		yaxis: {
		  labels: {
			show: false
		  }
		},
		title: {
			text: 'Custom DataLabels',
			align: 'center',
			floating: true
		},
		subtitle: {
			text: 'Category Names as DataLabels inside bars',
			align: 'center',
		},
		tooltip: {
		  theme: 'dark',
		  x: {
			show: false
		  },
		  y: {
			title: {
			  formatter: function () {
				return ''
			  }
			}
		  }
		}
	  }
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-sitemap"></i>
											Item with Sub item Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="bar" height={330} />
									</div>
								</div>
							</div>
  )
}
