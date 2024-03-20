import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { stackedBarOptions } from '../../ChartOptions/StackedBar';
import { GroupBarOptions } from '../../ChartOptions/GroupBar';

export default function MonthWise() {
	
          
		const series = [{
		  name: 'Net Profit',
		  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
		  name: 'Revenue',
		  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}]

		const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

		const options = GroupBarOptions(labels)
  
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-calendar-week"></i>
											Month Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
										<ReactApexChart options={options} series={series} type="bar" height={390} />
									</div>
								</div>
							</div>
  )
}
