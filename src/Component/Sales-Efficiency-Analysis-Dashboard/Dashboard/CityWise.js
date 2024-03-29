import React, { useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import API from '../../Utility/API';
import { useEffect, useState } from 'react';
import post from '../../Utility/APIHandle'

import { stackedBarOptions } from '../../ChartOptions/StackedBar';
import BlackDots from '../../Assets/image/Dots.png'
import contex from '../../contex/Contex';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'


export default function CityWise() {

	const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

	useEffect(() => {
		getdata()
	}, [inputdata])


	const [flag, setflag] = useState("bar")


	function handleclick(e) {
		console.log('aaaaaa', e.target.id)
		setflag(e.target.id)
	}


	function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'c.cityname' }
		console.log(inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					name.push(res.data.lstResult[index]['cityname'])
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				console.log("name", name)
				console.log("weight", weight);
			})
	}

	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownCity").style.display === "block" ? document.getElementById("myDropdownCity").style.display = "none" : document.getElementById("myDropdownCity").style.display = "block";
	// }



	// function handleSelectedChart(num) {
	// 	// setBranchWiseChart(num)
	// }


	if (flag === 'barl') {
		var series = [{
			name: 'Weight',
			data: weight
		}]

		var options = {
			chart: {
				height: 350,
				type: 'bar',
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '5%',
					borderRadius: 1,
					dataLabels: {
						position: 'top', // top, center, bottom
					},
				}
			},
			dataLabels: {
				enabled: true,
				formatter: function (val) {
					return val;
				},
				offsetY: -18,
				style: {
					fontSize: '14px',
					colors: ["#25e1fa"],
				},
				background: {
					enabled: true,
					foreColor: '#000000',
					padding: 10,
					borderRadius: 50,
					borderWidth: 2,
					borderColor: '#26a0fc',
					opacity: 1,

				}
			},

			xaxis: {
				categories: name,
				position: 'bottom',
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				crosshairs: {
					fill: {
						type: 'gradient',
						gradient: {
							colorFrom: '#D8E3F0',
							colorTo: '#BED1E6',
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5,
						}
					}
				},
				tooltip: {
					enabled: true,
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					formatter: function (val) {
						return val;
					}
				}

			},
		}
	}



	else {
		var series = [{
			data: weight
		}]


		var options = {
			chart: {
				type: 'bar',
				height: 350
			},
			tooltip: {
				x: {
					formatter: function (val) {
						return val
					}
				}
			},
			plotOptions: {
				bar: {
					columnWidth: '0%',
					borderRadius: 4,
					horizontal: true,
				}
			},
			dataLabels: {
				enabled: false
			},
			// xaxis: {
			// 	categories: name,

			// 	formatter: function (val) {
			// 		console.log(val);
			// 		return val.length
			// 	}

			// },
			xaxis: {
				categories: name,


			},
			yaxis: {
				labels: {
					show: true,
					formatter: function (val) {
						if (val.length > 7) {
							return val.slice(0, 6) + "..."
						} else {
							return val
						}
					}
				}
			}
		}

	}



	function handleonchangeCurrency() {
		console.log("innn")
		document.getElementById("myDropdowniconcity").style.display === "block" ? document.getElementById("myDropdowniconcity").style.display = "none" : document.getElementById("myDropdowniconcity").style.display = "block";
	}

	window.onclick = function (event) {
		if (!event.target.matches('.dropbtn') && !event.target.matches('#barl') && !event.target.matches('#radialBar') && !event.target.matches('#bar') && !event.target.matches('#donut')) {
			// console.log("hii");
			console.log("cityyyyyyyyyyy", document.getElementsByClassName("dropdown-contenticon")[2])
			if (document.getElementsByClassName("dropdown-contenticon")[2] !== undefined) {
				document.getElementsByClassName("dropdown-contenticon")[2].style.display = "none";
			}
		}
	}




	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-city"></i>
						City Wise</p>
					{/* <div className='btnicons'>
						<img src={drop} className='dropbtn' onClick={handleonchangeCurrency} id='iconidcity'></img>

						<div id="myDropdowniconcity" className="dropdown-contenticon" onClick={handleclick}>
							<a id='bar' >bar </a><hr className='custom-hr' />
							<a id='barl' >lollipop chart</a><hr className='custom-hr' />
							<a id='bar' >chart</a><hr className='custom-hr' />
							<a id='bar' >chart</a><hr className='custom-hr' />
						</div>
						<i class="fas fa-external-link-alt"></i>
					</div> */}

					<i class="fas fa-external-link-alt"></i>
				</div>

				{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownCity" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}

				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={options} series={series} type="bar" height={390} />
				</div>
			</div>
		</div>

	)
}
