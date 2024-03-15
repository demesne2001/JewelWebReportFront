import React from 'react'
import ReactApexChart from 'react-apexcharts';



export default function CityWise() {

	
          
	const series = [{
		  name: 'PRODUCT A',
		  data: [44, 55, 41, 67, 22, 43]
		}, {
		  name: 'PRODUCT B',
		  data: [13, 23, 20, 8, 13, 27]
		}]
	const options = {
		  colors: ['#7f7f7f', '#ffc000'],
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
			type: 'text',
			categories: ['City 1','City 2' ,'City 3','City 1','City 2' ,'City 3'
			],
		  },
		  legend: {
			position: 'right',
			offsetY: 40
		  },
		  fill: {
			opacity: 1
		  }
		}
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-city"></i>
											City Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="bar" height={390} />
									</div>
								</div>
							</div>
  )
}
