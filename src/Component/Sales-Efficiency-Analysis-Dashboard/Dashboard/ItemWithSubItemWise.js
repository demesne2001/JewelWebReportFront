import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { hBarOptions } from '../../ChartOptions/Hbar';

export default function ItemWithSubItemWise() {

	const series = [{
		data: [400, 430, 448, 470,1100]
	  }]
	
	const labels = ['South Korea', 'Canada', 'United Kingdom', 'Netherlands','United States']

	const option = hBarOptions(labels)
	
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-sitemap"></i>
											Item with Sub item Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={option} series={series} type="bar" height={330} />
									</div>
								</div>
							</div>
  )
}
