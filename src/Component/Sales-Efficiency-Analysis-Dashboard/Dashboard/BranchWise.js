import React from 'react'
import ReactApexChart from 'react-apexcharts';

import { radialBarOptions } from '../../ChartOptions/RadialBar';

import bracnchh from '../../Assets/image/branchh.png'
import item from '../../Assets/image/item.png'
import salesaginwise from '../../Assets/image/salesaging wise.png'


export default function BranchWise() {

	const series = [76, 67, 61, 90]
	const label = ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn']
	
	const radialOption = radialBarOptions(label)

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<a href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-chart-pie"></i>
						Branch Wise</p>
					<i className="fas fa-external-link-alt"></i>
				</a>
				<div className="crancy-progress-card card-contain-graph">
							<ReactApexChart options={radialOption} series={series} type="radialBar" height={390} />
				</div>
			</div>
		</div>
	)
	}
