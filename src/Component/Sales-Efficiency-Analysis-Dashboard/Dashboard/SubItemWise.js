import React from 'react'


import ReactApexChart from 'react-apexcharts';
import RoundedBar from '../../CustomCharts/RoundedBar';

import { rounBarOptions } from '../../ChartOptions/RoundedBar';


export default function SubItemWise() {

  const catagories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
  const series = [{
    name: 'Inflation',
    data: [20, 30, 42, 12, 41, 36, 32, 23, 14, 8]
  }]

  const barOption = rounBarOptions(catagories)

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
									{/* <ReactApexChart options={options} series={series} type="polarArea" height={390} /> */}
                  {/* <RoundedBar/> */}
                  <ReactApexChart options={barOption} series={series} type="bar" height={350} />
									</div>
								</div>
							</div>
  )
}
