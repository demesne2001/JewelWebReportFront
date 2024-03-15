import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function ModeofSalesWise() {
	const series = [44, 55, 41, 17, 15]
    const options = {
              chart: {
                type: 'donut',
              },
			  legend: {
				position: 'bottom'
			  },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                }
              }],
			  plotOptions: {
				pie: {
				  startAngle: -90,
				  endAngle: 90,
				  offsetY: 10
				}
            }
		}

  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-layer-group"></i>
											Mode of Sales Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="donut" height={390}/>
									</div>
								</div>
							</div>
  )
}
