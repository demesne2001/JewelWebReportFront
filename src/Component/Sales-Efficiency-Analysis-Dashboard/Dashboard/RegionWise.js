import React from 'react'

import ReactApexChart from 'react-apexcharts';


export default function regionWise() {
	const series = [
		{
		  data: [
			{
			  x: '2008',
			  y: [2800, 4500]
			},
			{
			  x: '2009',
			  y: [3200, 4100]
			},
			{
			  x: '2010',
			  y: [2950, 7800]
			},
			{
			  x: '2011',
			  y: [3000, 4600]
			},
			{
			  x: '2012',
			  y: [3500, 4100]
			},
			{
			  x: '2013',
			  y: [4500, 6500]
			},
			{
			  x: '2014',
			  y: [4100, 5600]
			}
		  ]
		}
	  ]
	  const options = {
		chart: {
		  height: 350,
		  type: 'rangeBar',
		  zoom: {
			enabled: false
		  },
		  toolbar: {
			show: false,
		},
		},
		plotOptions: {
		  bar: {
			isDumbbell: true,
			columnWidth: 3,
			dumbbellColors: [['#008FFB', '#00E396']]
		  }
		},
		legend: {
		  show: true,
		  showForSingleSeries: true,
		  position: 'top',
		  horizontalAlign: 'left',
		  customLegendItems: ['Product A', 'Product B']
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			type: 'vertical',
			gradientToColors: ['#00E396'],
			inverseColors: true,
			stops: [0, 100]
		  }
		},
		grid: {
		  xaxis: {
			lines: {
			  show: true
			}
		  },
		  yaxis: {
			lines: {
			  show: false
			}
		  }
		},
		xaxis: {
		  tickPlacement: 'on'
		}
	  }
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-globe"></i>
											Region Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="rangeBar" height={350} />
									</div>
								</div>
							</div>
  )
}
