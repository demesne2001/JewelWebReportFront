import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { patternedPieOptions } from '../../ChartOptions/PatternedPie';


export default function DesignCatalogueWise() {
	const series = [44, 55, 41, 17, 15]
  
  const label = ["Comedy", "Action", "SciFi", "Drama", "Horror"]
          
  const pieOptions = patternedPieOptions(label)
          
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-gem"></i>
											Design Catalogue Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={pieOptions} series={series} type="donut" />
									</div>
								</div>
							</div>
  )
}
