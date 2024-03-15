import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function SalesPartyWise() {
	const series = [{
		name: 'Marine Sprite',
		data: [44, 55, 41, 37, 22, 43, 21]
	  }]

	const options = {
		chart: {
		  type: 'bar',
		  height: 350,
		  stacked: true,
		  stackType: '100%'
		},
		plotOptions: {
		  bar: {
			horizontal: true,
			 dataLabels: {
			 enabled: true,
			 position: 'top'
				}
		  },
		},
		stroke: {
		  width: 1,
		  colors: ['#fff']
		},
		title: {
		  text: ''
		},
		xaxis: {
		  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
		},
		tooltip: {
		  y: {
			formatter: function (val) {
			  return val + "K"
			}
		  }
		},
		fill: {
		  opacity: 1
		
		},
		legend: {
		  position: 'top',
		  horizontalAlign: 'left',
		  offsetX: 40
		}
	  }
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-handshake"></i>
											Sales Party Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="bar" height={350}/>
									</div>
								</div>
							</div>
  )
}
