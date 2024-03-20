import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { loliPopBaroptions } from '../../ChartOptions/BarLolipop';


export default function regionWise() {
	const series = [{
		name: 'Inflation',
		data: [2, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2]
	  }]
	
	const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	const loliPopOptions = loliPopBaroptions(labels) 

  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-globe"></i>
											Region Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={loliPopOptions} series={series} type="bar" height={350} />
									{/* <Cylinder/> */}
									</div>
								</div>
							</div>
  )
}
