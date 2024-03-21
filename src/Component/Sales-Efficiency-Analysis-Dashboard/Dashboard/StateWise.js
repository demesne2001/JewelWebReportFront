import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import Form from 'react-bootstrap/Form';

import BlackDots from '../../Assets/image/Dots.png'

import { treeMapOptions } from '../../ChartOptions/Treemap';
import { radialBarOptions } from '../../ChartOptions/RadialBar';
import { semiDoughnutOptions } from '../../ChartOptions/semidoughnut';



export default function StateWise() {

	
	const series = [
		{
			data: [
				{
					x: 'New Delhi',
					y: 218
				},
				{
					x: 'Kolkata',
					y: 149
				},
				{
					x: 'Mumbai',
					y: 184
				},
				{
					x: 'Ahmedabad',
					y: 55
				},
				{
					x: 'Bangaluru',
					y: 84
				},
				{
					x: 'Pune',
					y: 31
				},
				{
					x: 'Chennai',
					y: 70
				},
				{
					x: 'Jaipur',
					y: 30
				},
				{
					x: 'Surat',
					y: 44
				},
				{
					x: 'Hyderabad',
					y: 68
				},
				{
					x: 'Lucknow',
					y: 28
				},
				{
					x: 'Indore',
					y: 19
				},
				{
					x: 'Kanpur',
					y: 29
				}
			]
		}
	]
	const label = []
	
	const series2 = [44, 55, 13, 43, 22]

	const series1 = [76, 67, 61, 90]

	// const treeOption = treeMapOptions()
	const [treeOption,setTreeOption] = useState(treeMapOptions())
	const [radialOption,setRadialOption] = useState(radialBarOptions(label))
	const [semiDoughnutOption,setSemiDoughnutOption] = useState(semiDoughnutOptions(label))

	// const radialOption = radialBarOptions(label)
	// const semiDoughnutOption = semiDoughnutOptions(label)
	
	const [stateWiseChart,setStateWiseChart] = useState(1)

	useEffect(()=>{

	},[stateWiseChart])

	function handleSelectedChart(num) {
		setStateWiseChart(num)
	}


	function returnSelectedChart() {
		if (stateWiseChart === 1) {

			return (<ReactApexChart options={treeOption} series={series} type="treemap" height={380} />)
		}
		else if(stateWiseChart === 2){
			
			return (<ReactApexChart options={radialOption} series={series1} type="bar" height={380} />)
		}
		else if(stateWiseChart === 3){
			console.log(semiDoughnutOption)
			return(<ReactApexChart options={semiDoughnutOption} series={series2} type="donut" height={380} />)
		}
	}

	function handledropdownMenu() {
		document.getElementById("myDropdownState").style.display === "block" ? document.getElementById("myDropdownState").style.display = "none" : document.getElementById("myDropdownState").style.display = "block";
	}
	

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-map-marker-alt"></i>
						State Wise</p>
					<i className="fas fa-external-link-alt"></i>

					<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownState" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div>
				</div>
				<div className="crancy-progress-card card-contain-graph">
					{returnSelectedChart()}
				</div>
			</div>
		</div>
	)
}
