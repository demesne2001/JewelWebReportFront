import React, { useContext } from 'react'
import { useEffect, useState } from 'react';

import HbarFilled from '../../CustomCharts/HbarFilled'
import Cylinder from '../../CustomCharts/Cylinder3d.js/Cylinder'
import CylinderFilled from '../../CustomCharts/CylinderFilled/CylinderFilled'

import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API'
import post from '../../Utility/APIHandle'
import contex from '../../contex/Contex';
import ReactApexChart from 'react-apexcharts';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'


export default function ItemWise() {

	const contexData = useContext(contex)

	// const lineDiffrence = ["100%","80%","60%","40%","20%","0%"]  

	// const label = ["x1","x2","x3","x4","x5","x6"]
	// const data = ["95%","83%","80%","93%","65%","78%"]	


	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownItem").style.display === "block" ? document.getElementById("myDropdownItem").style.display = "none" : document.getElementById("myDropdownItem").style.display = "block";
	// }


	// function handleSelectedChart(num) {
	// 	// setBranchWiseChart(num)
	// }

	// const [postData, setPostData] = useState({
	//     "strBranch": "",
	//     "strState": "",
	//     "strCity": "",
	//     "strItem": "",
	//     "strSubItem": "",
	//     "strItemGroup": "",
	//     "strItemSubitem": "",
	//     "strPurchaseParty": "",
	//     "strSalesParty": "",
	//     "strSaleman": "",
	//     "strProduct": "",
	//     "strDesignCatalogue": "",
	//     "strSaleAging": "",
	//     "strModeofSale": "",
	//     "strTeamModeofSale": "",
	//     "FromDate": "",
	//     "ToDate": "",
	//     "strMetalType": "",
	//     "strDayBook": "",
	//     "PageNo": 0,
	//     "PageSize": 0,
	//     "Search": ""
	// })


	// useEffect(()=>{

	// 	setPostData(contexData.state)

	// },[contexData.state])

	// useEffect(()=>{
	// 	getdata()
	// },[postData])
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

		inputdata = { ...inputdata, ['Grouping']: 'd.itemID,d.ItemName' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['ItemName'] === null) {
						name.push("null")
					} else {
						name.push(res.data.lstResult[index]['ItemName'])
					}
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				console.log("itemgroup", weight);
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}


	if(flag === 'bar'){
		var series = [{
			name: '',
			data: weight
		}]
	
	
		var options = {
			chart: {
				height: 350,
				type: 'bar',
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
					borderRadius: 0,
					columnWidth: '50%',
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 2
			},
	
			grid: {
				row: {
					colors: ['#fff', '#f2f2f2']
				}
			},
			
			xaxis: {
				labels: {
					show: true,
					formatter: function (val) {
						
						if (val.length > 7) {
							return val.slice(0, 6) + "..."
						} else {
							return val
						}
					}
				},
				categories: name,
				//   tickPlacement: 'on'
			},
			yaxis: {
				title: {
					text: '',
				},
	
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: "horizontal",
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 0.85,
					opacityTo: 0.85,
					stops: [50, 0, 100]
				},
			}
		}
	}

	else{
		var series = [{
			name: '',
			data: weight
		}]
	
	
		var options = {
			chart: {
				height: 350,
				type: 'bar',
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
					horizontal: true,
					borderRadius: 0,
					columnWidth: '50%',
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 2
			},
	
			grid: {
				row: {
					colors: ['#fff', '#f2f2f2']
				}
			},
			xaxis: {
				labels: {
					show: true,
					formatter: function (val) {
						console.log("val", val);
						if (val.length > 7) {
							return val.slice(0, 6) + "..."
						} else {
							return val
						}
					}
				},
				categories: name,
				//   tickPlacement: 'on'
			},
			yaxis: {
				title: {
					text: '',
				},
	
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: "horizontal",
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 0.85,
					opacityTo: 0.85,
					stops: [50, 0, 100]
				},
			}
		}
	}




	function handleonchangeCurrency() {
		console.log("innn")
		document.getElementById("myDropdowniconitem").style.display === "block" ? document.getElementById("myDropdowniconitem").style.display = "none" : document.getElementById("myDropdowniconitem").style.display = "block";
	}

	window.onclick = function (event) {
		if (!event.target.matches('.dropbtn') && !event.target.matches('#donut') && !event.target.matches('#radialBar') && !event.target.matches('#bar') && !event.target.matches('#donut')) {
			// console.log("hii");
			if (document.getElementsByClassName("dropdown-contenticon")[4] !== undefined) {
				document.getElementsByClassName("dropdown-contenticon")[4].style.display = "none";
			}

		}
	}



	return (

		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-project-diagram"></i>
						Item Wise</p>
					{/* <div className='btnicons'>
						<img src={drop} className='dropbtn' onClick={handleonchangeCurrency} id='iconidcity'></img>

						<div id="myDropdowniconitem" className="dropdown-contenticon" onClick={handleclick}>
							<a id='bar' >bar chart </a><hr className='custom-hr' />
							<a id='barh' >horizontal bar</a><hr className='custom-hr' />
							<a id='bar' >heat map</a><hr className='custom-hr' />
							<a id='bar' >chart</a><hr className='custom-hr' />
						</div>
						<i class="fas fa-external-link-alt"></i>
					</div> */}


					<i class="fas fa-external-link-alt"></i>
					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
				</p>
					<div id="myDropdownItem" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}
				</div>



				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={options} series={series} type='bar' height={350} />
				</div>
			</div>
		</div>

	)
}
