import React, { useContext, useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import Form from 'react-bootstrap/Form';

import BlackDots from '../../Assets/image/Dots.png'

import { treeMapOptions } from '../../ChartOptions/Treemap';
import { radialBarOptions } from '../../ChartOptions/RadialBar';
import { semiDoughnutOptions } from '../../ChartOptions/semidoughnut';
import contex from '../../contex/Contex';
import API from '../../Utility/API';
import post from '../../Utility/APIHandle';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'


export default function StateWise() {

	const contexData = useContext(contex)
	const [state, setState] = useState([]);
	let inputdata = contexData.state;


	const [flag, setflag] = useState("treemap")


	function handleclick(e) {
		console.log('aaaaaa', e.target.id)
		setflag(e.target.id)
	}


	useEffect(() => {
		getdata()
	}, [inputdata])

	function getdata() {
		inputdata = { ...inputdata, ['Grouping']: 'k.stateID,k.Statename' }
		console.log(inputdata, "stat");
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = []
				console.log("response", res.data.lstResult[0]['Statename'])
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['Statename'] != null) {
						// name.push({ x: res.data.lstResult[index]['Statename'] + "\n" +"(" +res.data.lstResult[index]['FineWt']+")", y: res.data.lstResult[index]['FineWt'] })
						name.push({ x: res.data.lstResult[index]['Statename'], y: res.data.lstResult[index]['FineWt'] })
					}
				}
				// setweight(weight)
				setState(name)
				console.log("statewise", name)
				console.log("statewise Service", series);
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}
	// function handleSelectedChart(num) {
	// 	setStateWiseChart(num)
	// }


	// function returnSelectedChart() {
	// 	if (stateWiseChart === 1) { 

	// 		return (<ReactApexChart options={treeOption} series={series} type="treemap" height={380} />)
	// 	}
	// 	else if(stateWiseChart === 2){

	// 		return (<ReactApexChart options={radialOption} series={series1} type="bar" height={380} />)
	// 	}
	// 	else if(stateWiseChart === 3){
	// 		console.log(semiDoughnutOption)
	// 		return(<ReactApexChart options={semiDoughnutOption} series={series2} type="donut" height={380} />)
	// 	}
	// }

	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownState").style.display === "block" ? document.getElementById("myDropdownState").style.display = "none" : document.getElementById("myDropdownState").style.display = "block";
	// }

	console.log('statewsie',state)

	console.log('flaggggg', flag)

	var datay = []

	var datax = []

	for (let index = 0; index < state.length; index++) {
		datay.push(state[index].y)
	}

	for (let index = 0; index < state.length; index++) {
		datax.push(state[index].x)
		
	}
	
	if (flag === 'radialBar') {
		// console.log(datax)


		let percarray = []

		let sum = 0;

		for (let i = 0; i < datay.length; i++) {
			sum += datay[i];
		}

		for (let index = 0; index < datay.length; index++) {
			percarray.push((datay[index] / sum) * 100)
		}


		var series = percarray

		var options = {
			dataLabels: {
				enabled: true,
			},
			chart: {
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					offsetY: 0,
					startAngle: 0,
					endAngle: 270,
					hollow: {
						margin: 5,
                    	size: '15%',
						background: 'transparent',
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
			labels: datax,
			legend: {
				show: true,
				floating: true,
				fontSize: '13px',
				position: 'left',
				offsetX: 140,
				offsetY: 3,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					width: 0,
					height: 0
				},
				
			},

		}
	}

	else if (flag === 'donut'){
		var series = datay

		var options = {
			dataLabels: {
				enabled: false,
				
			},
			chart: {
			  type: 'donut',
			},
			plotOptions: {
			  pie: {
				startAngle: -90,
				endAngle: 90,
				offsetY: 80
			  }
			},
			legend: {
				show: false,
				floating: true,
				fontSize: '13px',
				position: 'left',
				offsetX: 140,
				offsetY: 3,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					width: 0,
					height: 0
				},
				
			},
			
			labels: datax,
			responsive: [{
			  breakpoint: 480,
			  options: {
				chart: {
				  width: 200
				},
				legend: {
				  position: 'left'
				}
			  }
			}]
		  }
	
		}
	
	

	else{
		var series = [
			{
				data: state
			}
		]

		var options = {
			dataLabels: {
				enabled: true
			},
			legend: {
				show: false
			},
			chart: {
				height: 350,
				type: 'treemap',
				toolbar: {
					show: true,
				},
			},
			title: {
				text: '',
				align: 'center'
			},
			colors: [
				'#3B93A5',
				'#F7B844',
				'#ADD8C7',
				'#EC3C65',
				'#CDD7B6',
				'#C1F666',
				'#D43F97',
				'#1E5D8C',
				'#421243',
				'#7F94B0',
			],
			plotOptions: {
				treemap: {
					distributed: true,
					enableShades: false,
					dataLabels: {
						format: 'scale'
					}
				}
			}
		}
	}



	function handleonchangeCurrency() {
		console.log("innn")
		document.getElementById("myDropdowniconstate").style.display === "block" ? document.getElementById("myDropdowniconstate").style.display = "none" : document.getElementById("myDropdowniconstate").style.display = "block";
	}

	window.onclick = function (event) {

		console.log("eeeeeeeeevent",event.target.matches('#iconidstate'))
		
		if (!event.target.matches('#iconidstate') && !event.target.matches('#treemap') && !event.target.matches('#radialBar') && !event.target.matches('#donut')) {
			// console.log("hii");
			
			console.log('stateeeeeeeeeeeeeeeeeeeeeeee', document.getElementsByClassName("dropdown-contenticon")[1])
			if (document.getElementsByClassName("dropdown-contenticon")[1] !== undefined) {
				document.getElementsByClassName("dropdown-contenticon")[1].style.display = "none";
			}
		}
	}

	


	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-map-marker-alt"></i>
						State Wise</p>

					{/* <div className='btnicons'>
						<img src={drop} className='dropbtn' onClick={handleonchangeCurrency} id='iconidstate'></img>
						<div id="myDropdowniconstate" className="dropdown-contenticon" onClick={handleclick}>
							<a id='treemap' >Tree map</a><hr className='custom-hr' />
							<a id='radialBar' >radialBar</a><hr className='custom-hr' />
							<a id='donut' >Semi donut </a><hr className='custom-hr' />
						</div>
						<i class="fas fa-external-link-alt"></i>
					</div> */}
				<i class="fas fa-external-link-alt"></i>
				</div>

				{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownState" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div> */}
			<div className="crancy-progress-card card-contain-graph">
				<ReactApexChart options={options} type={flag} series={series} height={350} />
			</div>
			<div id="html-dist"></div>
			</div>
		</div>
	)
}
