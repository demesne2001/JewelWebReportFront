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
	
	const treeOption = treeMapOptions()
	const radialOption = radialBarOptions(label)
	const semiDoughnutOption = semiDoughnutOptions(label)
	
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
			return (<ReactApexChart options={radialOption} series={series} type="donut" />)
		}
		else if(stateWiseChart === 3){
			return(<ReactApexChart options={semiDoughnutOption} series={series} type="donut" height={390}/>)
		}
	}

	function handledropdownMenu() {
		document.getElementById("myDropdown").style.display === "none" ? document.getElementById("myDropdown").style.display = "block" : document.getElementById("myDropdown").style.display = "none";
	}

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-map-marker-alt"></i>
						State Wise</p>
					<i className="fas fa-external-link-alt"></i>

					<a class="geex-content__header__quickaction__link  geex-btn__customizer dots" onClick={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</a>
					<div id="myDropdown" class="dropdown-content">
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div>
				</div>
				<div className="crancy-progress-card card-contain-graph">
					{returnSelectedChart()}
				</div>
			</div>
		</div>
	)
}
