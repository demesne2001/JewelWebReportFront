import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { lineOption } from '../../ChartOptions/Line';

export default function SalesAgingWise() {
	const series = [
		{
		  name: "High - 2013",
		  data: [28, 29, 33, 36, 32, 32, 33]
		}
	  ]
	
	const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

	const options = lineOption(labels)

  return (
    <div class="col-lg-4 col-md-6 col-12">
								<div class="graph-card">
									<a href="#" target="_self" class="card-title-graph">
										<p><i class="fas fa-chart-line"></i>
											Sales Aging Wise</p>
										<i class="fas fa-external-link-alt"></i>
									</a>
									<div class="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="line" height={390} />
									</div>
								</div>
							</div>
  )
}
