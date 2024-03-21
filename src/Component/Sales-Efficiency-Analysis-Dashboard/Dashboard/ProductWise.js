import React from 'react'

import ReactApexChart from 'react-apexcharts';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Radialbar from '../../Radialbar/Radialbar'
import BlackDots from '../../Assets/image/Dots.png'

export default function ProductWise() {

	function handledropdownMenu() {
		document.getElementById("myDropdownProduct").style.display === "block" ? document.getElementById("myDropdownProduct").style.display = "none" : document.getElementById("myDropdownProduct").style.display = "block";
	}

	function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	}
	return (
		<div class="col-lg-4 col-md-6 col-12">
			<div class="graph-card">
				<div href="#" target="_self" class="card-title-graph">
					<p><i class="fas fa-boxes"></i>
						Product Wise </p>
					<i class="fas fa-external-link-alt"></i>
					<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownProduct" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div>
				</div>
				<div class="crancy-progress-card card-contain-graph">

					<ParentSize>{({ width, height }) => <Radialbar width={width} height={350} />}</ParentSize>

				</div>
			</div>
		</div>
	)
}
