import React from 'react'
import ReactApexChart from 'react-apexcharts';

import { stackedBarOptions } from '../../ChartOptions/StackedBar';

export default function CityWise() {

	const label = ['City 1','City 2' ,'City 3','City 1','City 2' ,'City 3'
]
          
	const series = [{
		  name: 'PRODUCT A',
		  data: [44, 55, 41, 67, 22, 43]
		}, {
		  name: 'PRODUCT B',
		  data: [13, 23, 20, 8, 13, 27]
		}]


	const stackedBarOption = stackedBarOptions(label)

  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-city"></i>
											City Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={stackedBarOption} series={series} type="bar" height={390} />
									</div>
								</div>
							</div>
  )
}
