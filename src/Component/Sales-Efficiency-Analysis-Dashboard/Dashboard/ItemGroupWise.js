import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function ItemGroupWise() {
	const series = [44, 55, 13, 43, 22]

    const options = {
			  colors :['#28568e','#a8322f','#6f8d31','#644788','#2d97b2','#2c93ae','#e97d23'],

              chart: {
                width: 380,
                type: 'pie',
              },

			  dataLabels: {
				enabled: true,
				textAnchor: 'start',
				// formatter: function(val, opt) {
				// 	return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
				// },
			stroke: {
					width: 0,
				  },
			  
              labels: ['ItemGroup A', 'ItemGroup B', 'ItemGroup C', 'ItemGroup D', 'ItemGroup E'],

              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  },

                },
				
              }]
            }
		}
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-chart-area"></i>
											Item Group Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="pie" height={390} />
									</div>
								</div>
							</div>
  )
}
