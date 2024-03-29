import React, { useContext } from 'react'

import ReactApexChart from 'react-apexcharts';
import { loliPopBaroptions } from '../../ChartOptions/BarLolipop';
import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import { useEffect, useState } from 'react';
import contex from '../../contex/Contex';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'

export default function RegionWise() {

	const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

	const [flag, setflag] = useState("bar")


	function handleclick(e) {
		console.log('aaaaaa', e.target.id)
		setflag(e.target.id)
	}



	useEffect(() => {
		getdata()
	}, [inputdata])

	function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'l.RegionID,l.RegionName' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['RegionName'] === null) {
						name.push("null")
					} else {
						name.push(res.data.lstResult[index]['RegionName'])
					}

					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				console.log("name in region", name)
				console.log("weight in reign", weight);
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}

	if (flag === 'bar') {
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

			}
		}
	}

	else if(flag === 'polarArea'){
		var series = weight

		var options = {
			chart: {
				type: 'polarArea',
			},
			stroke: {
				colors: ['#fff']
			},
			fill: {
				opacity: 0.8
			},
			labels: name,
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]

		}
	}

	function handleonchangeCurrency() {
		console.log("innn")
		document.getElementById("myDropdowniconregion").style.display === "block" ? document.getElementById("myDropdowniconregion").style.display = "none" : document.getElementById("myDropdowniconregion").style.display = "block";
	}

	window.onclick = function (event) {
		if (!event.target.matches('.dropbtn') && !event.target.matches('#donut') && !event.target.matches('#radialBar') && !event.target.matches('#bar') && !event.target.matches('#donut')) {
			// console.log("hii");
			if (document.getElementsByClassName("dropdown-contenticon")[3] !== undefined) {
				document.getElementsByClassName("dropdown-contenticon")[3].style.display = "none";
			}

		}
	}




	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-globe"></i>
						Region Wise</p>
					{/* <div className='btnicons'>
						<img src={drop} className='dropbtn' onClick={handleonchangeCurrency} id='iconidcity'></img>

						<div id="myDropdowniconregion" className="dropdown-contenticon" onClick={handleclick}>
							<a id='bar' >lollipop chart </a><hr className='custom-hr' />
							<a id='polarArea' >polar area</a><hr className='custom-hr' />
							<a id='bar' >chart</a><hr className='custom-hr' />
							<a id='bar' >chart</a><hr className='custom-hr' />
						</div>
						<i class="fas fa-external-link-alt"></i>
					</div> */}

					<i class="fas fa-external-link-alt"></i>
				</div>
				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={options} series={series} type={flag} height={350} />
					{/* <Cylinder/> */}
				</div>
			</div>
		</div>
	)
}
