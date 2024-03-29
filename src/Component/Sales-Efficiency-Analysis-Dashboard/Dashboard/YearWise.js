import React, { useContext } from 'react'

import ReactApexChart from 'react-apexcharts';
import { barMarkerOptions } from '../../ChartOptions/BarMarker';
import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import { useEffect, useState } from 'react';
import contex from '../../contex/Contex';

export default function YearWise() {

	// const contexData = useContext(contex)

	// const series = [
	// 	{
	// 		name: 'Actual',
	// 		data: [
	// 			{
	// 				x: '2011',
	// 				y: 1292,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 1400,
	// 						strokeHeight: 5,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2012',
	// 				y: 4432,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 5400,
	// 						strokeHeight: 5,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2013',
	// 				y: 5423,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 5200,
	// 						strokeHeight: 5,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2014',
	// 				y: 6653,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 6500,
	// 						strokeHeight: 5,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2015',
	// 				y: 8133,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 6600,
	// 						strokeHeight: 13,
	// 						strokeWidth: 0,
	// 						strokeLineCap: 'round',
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2016',
	// 				y: 7132,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 7500,
	// 						strokeHeight: 5,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2017',
	// 				y: 7332,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 8700,
	// 						strokeHeight: 5,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				x: '2018',
	// 				y: 6553,
	// 				goals: [
	// 					{
	// 						name: 'Expected',
	// 						value: 7300,
	// 						strokeHeight: 2,
	// 						strokeDashArray: 2,
	// 						strokeColor: '#775DD0'
	// 					}
	// 				]
	// 			}
	// 		]
	// 	}
	// ]
	// const option = barMarkerOptions()

	// const [postData, setPostData] = useState({
	// 	"strBranch": "",
	// 	"strState": "",
	// 	"strCity": "",
	// 	"strItem": "",
	// 	"strSubItem": "",
	// 	"strItemGroup": "",
	// 	"strItemSubitem": "",
	// 	"strPurchaseParty": "",
	// 	"strSalesParty": "",
	// 	"strSaleman": "",
	// 	"strProduct": "",
	// 	"strDesignCatalogue": "",
	// 	"strSaleAging": "",
	// 	"strModeofSale": "",
	// 	"strTeamModeofSale": "",
	// 	"FromDate": "",
	// 	"ToDate": "",
	// 	"strMetalType": "",
	// 	"strDayBook": "",
	// 	"PageNo": 0,
	// 	"PageSize": 0,
	// 	"Search": ""
	// })


	// useEffect(()=>{

	// 	setPostData(contexData.state)

	// },[contexData.state])

	// useEffect(()=>{

	// 	getdata()

	// },[postData])


	// function getdata() {

	// 	let temp1 = []

	// 	post(postData, API.GetYearWise, 'post')
	// 		.then((res) => {

	// 			for (let index = 0; index < res.data.lstResult.length; index++) {

	// 				temp1.push({

	// 				})

	// 			}

	// 		})
	// }

	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownYear").style.display === "block" ? document.getElementById("myDropdownYear").style.display = "none" : document.getElementById("myDropdownYear").style.display = "block";
	// }


	// function handleSelectedChart(num) {
	// 	// setBranchWiseChart(num)
	// }


	const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

	useEffect(() => {
		getdata()
	}, [inputdata])

	function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'M.FinYearID,m.YearCode' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['YearCode'] === null) {
						name.push("null")
					} else {
						name.push(res.data.lstResult[index]['YearCode'])
					}
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)

				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}
	const series = [{
		data:weight
	}]

	const options = {
		chart: {
		  height: 350,
		  type: 'bar'
		},
		plotOptions: {
		  bar: {
			columnWidth: '60%'
		  }
		},
		xaxis: {
			categories: name,
		  },
		colors: ['#00E396'],
		dataLabels: {
		  enabled: false
		},
		legend: {
		  show: true,
		  showForSingleSeries: true,
		  markers: {
			fillColors: ['#00E396']
		  }
		}
	  }

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-calendar-alt"></i>
						Year Wise</p>
					<i className="fas fa-external-link-alt"></i>
					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownYear" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}
				</div>
				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={options} series={series} type="bar" height={350} />
				</div>
			</div>
		</div>
	)
}
