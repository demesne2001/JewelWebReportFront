import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { pieOptions } from '../../ChartOptions/Pie';

export default function ItemGroupWise() {
	const series = [44, 55, 13, 43, 22]

	const labels = ['ItemGroup A', 'ItemGroup B', 'ItemGroup C', 'ItemGroup D', 'ItemGroup E']
	const options = pieOptions(labels)
    
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
