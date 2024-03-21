import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

import Dropdown from 'react-bootstrap/Dropdown';
// import BlackDots from '../../Assets/img/svg/BlackDots.svg'
import BlackDots from '../../Assets/image/Dots.png'

import { radialBarOptions } from '../../ChartOptions/RadialBar';
import { DoughnutOptions } from '../../ChartOptions/Doughnut';
import { click } from '@testing-library/user-event/dist/click';


export default function BranchWise() {



	const series = [76, 67, 61, 90]
	const label = ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn']

	const radialOption = radialBarOptions(label)
	const Doughnut = DoughnutOptions(label)

	const [branchWiseChart, setBranchWiseChart] = useState(0)

	useEffect(() => {

	}, [branchWiseChart])

	function handleSelectedChart(num) {
		setBranchWiseChart(num)
	}

	function returnSelectedChart() {
		if (branchWiseChart === 1) {
			return (<ReactApexChart options={radialOption} series={series} type="radialBar" height={380} />)
		}
		else {
			return (<ReactApexChart options={Doughnut} series={series} type="donut" height={380} />)
		}
	}

	function handledropdownMenu() {
		document.getElementById("myDropdown").style.display === "none" ? document.getElementById("myDropdown").style.display = "block" : document.getElementById("myDropdown").style.display = "none";
	}

	window.onclick = function (event) {
		if (!event.target.matches('.dropbtn') && !event.target.matches('#default') && !event.target.matches('#lakh') && !event.target.matches('#million') && !event.target.matches('#thousand')) {
			console.log("hii");
			if (document.getElementsByClassName("dropdown-content")[0] !== undefined) {
				document.getElementsByClassName("dropdown-content")[0].style.display = "none";
			}

		}
	}



	return (
		<div className="col-lg-4 col-md-6 col-12">

			<div className="graph-card">


				<div className='card-title-graph'>

					<p><i class="fas fa-chart-pie">

					</i> Branch Wise </p>



					<a class="geex-content__header__quickaction__link  geex-btn__customizer dots" onClick={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</a>
					<div id="myDropdown" class="dropdown-content">
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div>




					<i class="fas fa-external-link-alt"></i>

				</div>






				<div className="crancy-progress-card card-contain-graph">

					{returnSelectedChart()}

				</div>







			</div>
		</div>
	)
}
