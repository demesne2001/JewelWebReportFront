import React, { useEffect, useState, useRef, useContext } from 'react'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle'

import ReactApexChart from 'react-apexcharts';

import BlackDots from '../../Assets/image/Dots.png'

import { radialBarOptions } from '../../ChartOptions/RadialBar';
import { DoughnutOptions } from '../../ChartOptions/Doughnut';
import { render } from '@testing-library/react';
import contex from '../../contex/Contex';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'


export default function BranchWise() {


	const contexData = useContext(contex)
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;


	const [flag, setflag] = useState("donut")


	function handleclick(e) {
		setflag(e.target.id)
	}


	useEffect(() => {
		getdata()
	}, [inputdata])


	if (flag === 'bar') {

		var series = [{
			name: 'weights',
			data: weight
		}]

		var options = {
			chart: {
				
				stacked: true,
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				position: 'bottom'
			},

			xaxis: {
				categories: name,
			},

			labels: name,

			plotOptions: {
				bar: {
					labels: {
						show: true,
						name: {

						},
						value: {

						}
					}
				}
			},
		}
	}



	else if (flag === 'donut') {

		var series = weight

		var options = {
			dataLabels: {
				enabled: true,
			},
			chart: {
				toolbar: {
					show: true,
					offsetX: 0,
					offsetY: 0,
					tools: {
					  download: true,
					},
			
				  },
				type: 'donut',
			},
			legend: {
				show: true,
				floating: false,
				fontSize: '13px',
				position: 'bottom',
				offsetX: 0,
				offsetY: 0,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					width: 12,
					height: 12
				}
			},

			labels: name,

			plotOptions: {
				pie: {
					customScale: 0.9,
					donut: {
						labels: {
							offsetY: 0,
							startAngle: 0,
							endAngle: 360,
							hollow: {
								size: '10%',
							},
							show: true,
							name: {

							},
							value: {

							}
						}
					}
				}
			}
		}
	}


	else if (flag === 'radialBar') {

		let percarray = []

		let sum = 0;

		for (let i = 0; i < weight.length; i++) {
			sum += weight[i];
		}

		for (let index = 0; index < weight.length; index++) {
			percarray.push((weight[index] / sum) * 100)
		}


		var series = percarray

		var options = {
			// dataLabels: {
			// 	enabled: false,
			// },
			chart: {
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					offsetY: 0,
					startAngle: 0,
					endAngle: 270,
					hollow: {
						size: '10%',
						// background: 'transparent',
						// image: undefined,
					},
					dataLabels: {
						name: {
							show: false,
						},
						value: {
							show: false,
						}
					}
				}
			},
			labels: name,
			legend: {
				show: true,
				floating: true,
				fontSize: '15px',
				position: 'left',
				offsetX: 120,
				offsetY: 10,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					width: 0,
					height: 0
				}
			},

		}
	}




	function getdata() {
		inputdata = { ...inputdata, ['Grouping']: 'a.BranchID,b.BranchName' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					name.push(res.data.lstResult[index]['BranchName'])
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				console.log("name", name)
				console.log("weight", weight);
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}



	// function handleThousand(n) {
	// 	localStorage.setItem("value", n)
	// 	contexData.setcurrency(n)
	// }

	function handleonchangeCurrency() {
		console.log("innn")
		document.getElementById("myDropdowniconbranch").style.display === "block" ? document.getElementById("myDropdowniconbranch").style.display = "none" : document.getElementById("myDropdowniconbranch").style.display = "block";
	}

	window.onclick = function (event) {
		console.log('evennnn', event.target.className)
		if (event.target.className !== 'dropbtn' && event.target.id !== 'donut' && event.target.id !== 'radialBar' && event.target.id !== 'bar') {
			if (document.getElementsByClassName("dropdown-contenticon")[0] !== undefined) {
				document.getElementsByClassName("dropdown-contenticon")[0].style.display = "none";
			}
		}
		// if (!event.target.matches('.dropbtn') && !event.target.matches('#donut') && !event.target.matches('#radialBar') && !event.target.matches('#bar')) {
		// 	// console.log("hii");
		// 	console.log('branchhh', document.getElementsByClassName("dropdown-contenticon")[0])
		// 	if (document.getElementsByClassName("dropdown-contenticon")[0] !== undefined) {
		// 		document.getElementsByClassName("dropdown-contenticon")[0].style.display = "none";
		// 	}
		// }
	}

	console.log("optionss", options)

	return (
		<div className="col-lg-4 col-md-6 col-12">

			<div className="graph-card">
				<div className='card-title-graph'>

					<p><i class="fas fa-chart-pie">

					</i> Branch Wise </p>

					{/* <img src={drop} className='dropbtnicon'></img> */}

					<div className='btnicons'>
						<img src={drop} className='dropbtn' onClick={handleonchangeCurrency}></img>

						<div id="myDropdowniconbranch" className="dropdown-contenticon" onClick={handleclick}>
							<a id='donut' >donut</a><hr className='custom-hr' />
							<a id='radialBar' >radialBar</a><hr className='custom-hr' />
							<a id='bar' >bar</a><hr className='custom-hr' />
							{/* <a id='donut' >chart</a><hr className='custom-hr' /> */}
						</div>
						<i class="fas fa-external-link-alt"></i>
					</div>
				</div>



				<div className="crancy-progress-card card-contain-graph">

					{/* <h1>Hello</h1> */}

					{/* {()=>{return (returnSelectedChart())}} */}

					{/* <returnSelectedChart/> */}
					{/* {returnSelectedChart()} */}
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
					<div id="chart">
						<ReactApexChart options={options} series={series} height={380} type={flag} />
					</div>
					<div id="html-dist"></div>
				</div>
			</div>
		</div>
	)
}
