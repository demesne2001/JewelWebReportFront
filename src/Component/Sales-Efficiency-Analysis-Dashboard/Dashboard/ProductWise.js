import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function ProductWise() {
	const series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
    const options = {
			  colors:['#0f4d45','#00897b','#44b8af','#a5ce9f','#e6eabf','#fffae4'],
              chart: {
                type: 'polarArea',
              },
              stroke: {
                colors: ['#0f4d45']
              },
              fill: {
                opacity: 0.8
              },
              responsive: [{
                breakpoint: 900,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
  return (
    <div class="col-lg-4 col-md-6 col-12">
								<div class="graph-card">
									<a href="#" target="_self" class="card-title-graph">
										<p><i class="fas fa-boxes"></i>
											Product Wise </p>
										<i class="fas fa-external-link-alt"></i>
									</a>
									<div class="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="donut" height={390}/>
									</div>
								</div>
							</div>
  )
}
