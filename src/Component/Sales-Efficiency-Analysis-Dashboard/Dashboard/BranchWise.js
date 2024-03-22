import React, { useEffect, useState,useRef } from 'react'
import ReactApexChart from 'react-apexcharts';


import BlackDots from '../../Assets/image/Dots.png'

import { radialBarOptions } from '../../ChartOptions/RadialBar';
import { DoughnutOptions } from '../../ChartOptions/Doughnut';
import { render } from '@testing-library/react';




export default function BranchWise() {



	const series = [76, 67, 61, 90]
	const label = ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn']
	const [radialOption, setradialOption] = useState()
	// const radialOption = radialBarOptions()
	const [Doughnut, setDoughnut] = useState()
	// const Doughnut = DoughnutOptions()

	// const [radialOption,setRadialOption] = useState(radialBarOptions(label))
	// const [Doughnut,SetDoughnut] = useState(DoughnutOptions(label))

	// const radialOption = useRef(radialBarOptions(label))
	// const Doughnut = useRef(DoughnutOptions(label))

	const[option,setOption] = useState()
	
	const [branchWiseChart, setBranchWiseChart] = useState(1)

	const [show,setShow] = useState(true)

	useEffect(() => {
		// if (branchWiseChart === 1) {
			
		// 	setOption(radialOption)
		// 	// return(<div> <p>RadialBar</p> </div>)
		// 	// return (<div><ReactApexChart options={option} series={series} type="radialBar" height={380} /></div>)
			
		// }
		// else if (branchWiseChart === 2) { 		
			
		// 	setOption(Doughnut)
		// 	// return(<div> <p>Donut </p></div>)
		// 	// return (<div><ReactApexChart options={Doughnut} series={series} type="donut" height={380} /></div>)
		// }

	}, [branchWiseChart])

// let d ={}
// let r = {}
// 	useEffect(()=>{
// 		let d = DoughnutOptions()
// 		let r = radialBarOptions()
// 		setDoughnut(d)
// 		setradialOption(r)
// 	},[radialOption])



	function handleSelectedChart(num) {
		setBranchWiseChart(num)
		// if (num===1){	
		// setShow(false)
		// }
		// else{
		// 	setShow(true)
		// }	
	}

	function returnSelectedChart() {
		if (branchWiseChart === 1) {
			
			// return(<div> <p>RadialBar</p> </div>)
			return (<div><ReactApexChart options={radialOption} series={series} type="radialBar" height={380} /></div>)
			
		}
		else if (branchWiseChart === 2) { 		
			
			// return(<div> <p>Pie </p></div>)
			return (<div><ReactApexChart options={Doughnut} series={series} type="donut" height={380} /></div>)
		}
	}

	function handledropdownMenu(e) {
		console.log('Branch')
		// console.log(e)
		// console.log(document.getElementById("myDropdownBranch").style.display)
		document.getElementById("myDropdownBranch").style.display === "block" ? document.getElementById("myDropdownBranch").style.display = "none" : document.getElementById("myDropdownBranch").style.display = "block";
	}



	return (
		<div className="col-lg-4 col-md-6 col-12">

			<div className="graph-card">


				<div className='card-title-graph'>

					<p><i class="fas fa-chart-pie">

					</i> Branch Wise </p>



					<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}  >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownBranch" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => {handleSelectedChart(1); }}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => {handleSelectedChart(2); }}>Pie</a><hr class="custom-hr" />
					</div>




					<i class="fas fa-external-link-alt"></i>

				</div>






				<div className="crancy-progress-card card-contain-graph">

					{/* <h1>Hello</h1> */}

					{/* {()=>{return (returnSelectedChart())}} */}

				{/* <returnSelectedChart/> */}
				{returnSelectedChart}
				{/* {branchWiseChart === 1?<ReactApexChart options={radialOption} series={series} type="radialBar" height={380} />:<ReactApexChart options={Doughnut} series={series} type="donut" height={380} /> } */}
					
					

					{/* { 
					
						(branchWiseChart === 1) && (<ReactApexChart options={radialOption} series={series} type="radialBar" height={380} />)
						(branchWiseChart === 2) && (<ReactApexChart options={Doughnut} series={series} type="donut" height={380} />)
					
					} */}

					 {/* {()=>{
						if (branchWiseChart === 1) {

							
							<ReactApexChart options={radialOption} series={series} type="radialBar" height={380} />
							
						}
						else if (branchWiseChart === 2) { 			
							<ReactApexChart options={Doughnut} series={series} type="donut" height={380} />
						}
					 }} */}

					 {/* {
						(show===true) ? <ReactApexChart options={Doughnut} series={series} type="donut" height={380}/> : <ReactApexChart options={radialOption} series={series} type="radialBar" height={380} />
					 } */}

				</div>







			</div>
		</div>
	)
}
