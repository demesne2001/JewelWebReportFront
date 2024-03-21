import React from 'react'
import ReactApexChart from 'react-apexcharts';

import { stackedBarOptions } from '../../ChartOptions/StackedBar';
import BlackDots from '../../Assets/image/Dots.png'

export default function CityWise() {

	const label = ['City 1', 'City 2', 'City 3', 'City 1', 'City 2', 'City 3'
	]

	const series = [{
		name: 'PRODUCT A',
		data: [44, 55, 41, 67, 22, 43]
	}, {
		name: 'PRODUCT B',
		data: [13, 23, 20, 8, 13, 27]
	}]


	const stackedBarOption = stackedBarOptions(label)

	
	function handledropdownMenu() {
		document.getElementById("myDropdownCity").style.display === "block" ? document.getElementById("myDropdownCity").style.display = "none" : document.getElementById("myDropdownCity").style.display = "block";
	}
	
	

	function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	}


	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">

				<div className="card-title-graph">
					<p><i className="fas fa-city"></i>
						City Wise</p>
					<i className="fas fa-external-link-alt"></i>

					<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownCity" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div>
				</div>

				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={stackedBarOption} series={series} type="bar" height={390} />
				</div>
			</div>
		</div>
	)
}
