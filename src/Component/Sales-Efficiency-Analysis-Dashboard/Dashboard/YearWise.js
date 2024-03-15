import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function YearWise() {
	
          
	const series = [
		{
		  name: 'Actual',
		  data: [
			{
			  x: '2011',
			  y: 1292,
			  goals: [
				{
				  name: 'Expected',
				  value: 1400,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2012',
			  y: 4432,
			  goals: [
				{
				  name: 'Expected',
				  value: 5400,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2013',
			  y: 5423,
			  goals: [
				{
				  name: 'Expected',
				  value: 5200,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2014',
			  y: 6653,
			  goals: [
				{
				  name: 'Expected',
				  value: 6500,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2015',
			  y: 8133,
			  goals: [
				{
				  name: 'Expected',
				  value: 6600,
				  strokeHeight: 13,
				  strokeWidth: 0,
				  strokeLineCap: 'round',
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2016',
			  y: 7132,
			  goals: [
				{
				  name: 'Expected',
				  value: 7500,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2017',
			  y: 7332,
			  goals: [
				{
				  name: 'Expected',
				  value: 8700,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2018',
			  y: 6553,
			  goals: [
				{
				  name: 'Expected',
				  value: 7300,
				  strokeHeight: 2,
				  strokeDashArray: 2,
				  strokeColor: '#775DD0'
				}
			  ]
			}
		  ]
		}
	  ]
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
		
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-calendar-alt"></i>
											Year Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="bar" height={350} />
									</div>
								</div>
							</div>
  )
}
