import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { StackedBar2Options } from '../../ChartOptions/StackedBar2';

export default function TeamModeofSalesWise() {
	const series = [{
		name: 'PRODUCT A',
		data: [44, 55, 41, 67, 22, 43]
	  }, {
		name: 'PRODUCT B',
		data: [13, 23, 20, 8, 13, 27]
	  }, {
		name: 'PRODUCT C',
		data: [11, 17, 15, 15, 21, 14]
	  }, {
		name: 'PRODUCT D',
		data: [21, 7, 25, 13, 22, 8]
	  }]

	const label = ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
	'01/05/2011 GMT', '01/06/2011 GMT'
  ]  
	const option = StackedBar2Options(label)

  return (
    <div class="col-lg-4 col-md-6 col-12">
								<div class="graph-card">
									<a href="#" target="_self" class="card-title-graph team-card-title">
										<p><i class="fas fa-stream"></i>
											Team & Mode of Sales Wise</p>
										<i class="fas fa-external-link-alt"></i>
									</a>
									<div class="crancy-progress-card card-contain-graph">
									<ReactApexChart options={option} series={series} type="bar" height={390} />
									</div>
								</div>
							</div>
  )
}
