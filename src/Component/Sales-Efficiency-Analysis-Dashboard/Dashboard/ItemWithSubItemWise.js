import React from 'react'
import API from '../../Utility/API';
import { useEffect, useState, useContext } from 'react';
import post from '../../Utility/APIHandle'

import ReactApexChart from 'react-apexcharts';
import { hBarOptions } from '../../ChartOptions/Hbar';
import BlackDots from '../../Assets/image/Dots.png'
import contex from '../../contex/Contex';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'



export default function ItemWithSubItemWise() {
	const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

	const [flag, setflag] = useState("bar")


	function handleclick(e) {
		setflag(e.target.id)
	}


	useEffect(() => {
		getdata()
	}, [inputdata])

	function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'f.ItemSubNAme,f.ItemSubID' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['ItemSubNAme'] === null) {
						name.push("null")
					} else {
						name.push(res.data.lstResult[index]['ItemSubNAme'])
					}
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}



	if(flag === 'bar'){
		var series = [{
			data: weight
		}]
	
		var options = {
			chart: {
				type: 'bar',
				height: 380
			},
			legend: {
				position: 'bottom'
			},
			plotOptions: {
				bar: {
					barHeight: '100%',
					distributed: true,
					horizontal: true,
					dataLabels: {
						position: 'bottom'
					},
				}
			},
			colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7'],
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {
					colors: ['#fff']
				},
				formatter: function (val, opt) {
					return opt.w.globals.labels[opt.dataPointIndex] + ":" + val
				},
				offsetX: 0,
				offsetY: 0,
				dropShadow: {
					enabled: true
				}
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			xaxis: {
				categories: name,
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			tooltip: {
				theme: 'dark',
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function () {
							return ''
						}
					}
				}
			}
		}
	}

	else if(flag == 'barv') {
		var series = [{
			data: weight
		}]
	
		var options = {
			chart: {
				type: 'bar',
				height: 380
			},
			legend: {
				position: 'bottom'
			},
			plotOptions: {
				bar: {
					barHeight: '100%',
					distributed: true,
					horizontal: false,
					dataLabels: {
						position: 'top'
					},
				}
			},
			colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7'],
			dataLabels: {
				enabled: true,
				offsetX: -20,
				offsetY: -20,
				style: {
				  fontSize: '12px',
				  colors: ["#304758"]
				}
			  },
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			xaxis: {
				categories: name,
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
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			tooltip: {
				theme: 'dark',
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function () {
							return ''
						}
					}
				}
			}
		}
	}



	


	function handleonchangeCurrency() {
		console.log("innn")
		document.getElementById("myDropdowniconitemsub").style.display === "block" ? document.getElementById("myDropdowniconitemsub").style.display = "none" : document.getElementById("myDropdowniconitemsub").style.display = "block";
	}

	window.onclick = function (event) {
		console.log('evennnn', event.target.className)
		
		if (!event.target.matches('.dropbtn') && !event.target.matches('#donut') && !event.target.matches('#radialBar') && !event.target.matches('#bar')) {
			// console.log("hii");
			console.log('branchhh', document.getElementsByClassName("dropdown-contenticon")[7])
			if (document.getElementsByClassName("dropdown-contenticon")[7] !== undefined) {
				document.getElementsByClassName("dropdown-contenticon")[7].style.display = "none";
			}
		}
	}



	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-sitemap"></i>
						Item with Sub item Wise</p>
					{/* <div className='btnicons'>
						<img src={drop} className='dropbtn' onClick={handleonchangeCurrency}></img>

						<div id="myDropdowniconitemsub" className="dropdown-contenticon" onClick={handleclick}>
							<a id='bar' >bar</a><hr className='custom-hr' />
							<a id='barv' >vertical bar </a><hr className='custom-hr' />
						</div>
						<i class="fas fa-external-link-alt"></i>
					</div> */}

					<i class="fas fa-external-link-alt"></i>
					{/* <img src={BlackDots} className='dropbtn' /> */}

					{/* <div id="myDropdownItemwithsubitem" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div> */}
				</div>
				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={options} series={series} type="bar" height={330} />
				</div>
			</div>
		</div>
	)
}
