import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { semiDoughnutOptions } from '../../ChartOptions/semidoughnut';

export default function ModeofSalesWise() {
	const series = [44, 55, 41, 17, 15]
    
	const label = ["Comedy", "Action", "SciFi", "Drama", "Horror"]

	const option = semiDoughnutOptions(label)

  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-layer-group"></i>
											Mode of Sales Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={option} series={series} type="donut" height={390}/>
									</div>
								</div>
							</div>
  )
}
