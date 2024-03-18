import React from 'react'

import ReactApexChart from 'react-apexcharts';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Radialbar from '../../Radialbar/Radialbar'

export default function ProductWise() {
  return (
    <div class="col-lg-4 col-md-6 col-12">
								<div class="graph-card">
									<a href="#" target="_self" class="card-title-graph">
										<p><i class="fas fa-boxes"></i>
											Product Wise </p>
										<i class="fas fa-external-link-alt"></i>
									</a>
									<div class="crancy-progress-card card-contain-graph">

                  <ParentSize>{({ width, height }) => <Radialbar width={width} height={350} />}</ParentSize>      

									</div>
								</div>
							</div>
  )
}
