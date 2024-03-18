import React from 'react'


import ReactApexChart from 'react-apexcharts';

export default function SubItemWise() {
	const series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
    const options = {
      dataLabels: {enabled: true,
      //   formatter: function (val, opts) {
      //     return val
      // },
    },
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
                breakpoint: 480,
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
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-th-list"></i>
											Sub-Item Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="polarArea" height={390} />
									</div>
								</div>
							</div>
  )
}
