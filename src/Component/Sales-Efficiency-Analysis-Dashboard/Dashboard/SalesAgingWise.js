import React, { useContext } from 'react'

import ReactApexChart from 'react-apexcharts';
import { lineOption } from '../../ChartOptions/Line';
import BlackDots from '../../Assets/image/Dots.png'
import post from '../../Utility/APIHandle'
import { useEffect, useState } from 'react';
import API from '../../Utility/API';
import contex from '../../contex/Contex';

export default function SalesAgingWise() {

  // const contexData = useContext(contex)

  // const series = [
  //   {
  //     name: "High - 2013",
  //     data: [28, 29, 33, 36, 32, 32, 33]
  //   }
  // ]

  // const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

  // const options = lineOption(labels)

  // const [postData, setPostData] = useState({
  //   "strBranch": "",
  //   "strState": "",
  //   "strCity": "",
  //   "strItem": "",
  //   "strSubItem": "",
  //   "strItemGroup": "",
  //   "strItemSubitem": "",
  //   "strPurchaseParty": "",
  //   "strSalesParty": "",
  //   "strSaleman": "",
  //   "strProduct": "",
  //   "strDesignCatalogue": "",
  //   "strSaleAging": "",
  //   "strModeofSale": "",
  //   "strTeamModeofSale": "",
  //   "FromDate": "",
  //   "ToDate": "",
  //   "strMetalType": "",
  //   "strDayBook": "",
  //   "PageNo": 0,
  //   "PageSize": 0,
  //   "Search": ""
  // })


  // useEffect(()=>{

	// 	setPostData(contexData.state)

	// },[contexData.state])

	// useEffect(()=>{
	// 	getdata()
	// },[postData])


  // function getdata() {

  //   let temp1 = []

  //   post(postData, API.GetSalesAgingWise, 'post')
  //     .then((res) => {

  //       for (let index = 0; index < res.data.lstResult.length; index++) {

  //         temp1.push({

  //         })

  //       }

  //     })
  // }

  // function handledropdownMenu() {
  //   document.getElementById("myDropdownSalesaging").style.display === "block" ? document.getElementById("myDropdownSalesaging").style.display = "none" : document.getElementById("myDropdownSalesaging").style.display = "block";
  // }


  // function handleSelectedChart(num) {
  //   // setBranchWiseChart(num)
  // }

  
	const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

	useEffect(() => {
		getdata()
	}, [inputdata])

	function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'a.[rd.caption]' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['rd.caption'] === null) {
						name.push("null")
					} else {
						name.push(res.data.lstResult[index]['rd.caption'])
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
			toolbar: {
				show: true,
				offsetX: 0,
				offsetY: 0,
				tools: {
				  download: true,
				},
		
			  },
		  height: 350,
		  type: 'line',
		  
		  dropShadow: {
			enabled: true,
			color: '#000',
			top: 18,
			left: 7,
			blur: 10,
			opacity: 0.2
		  }
		},
		colors: ['#77B6EA', '#545454'],
		dataLabels: {
		  enabled: true,
		},
		stroke: {
		  curve: 'smooth'
		},
		title: {
		  text: '',
		  align: 'left'
		},
		grid: {
		  borderColor: '#e7e7e7',
		  row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.5
		  },
		},
		markers: {
		  size: 1
		},
		xaxis: {
		  categories: name,
		  title: {
			text: 'Month'
		  }
		},
		yaxis: {
		  title: {
			text: ''
		  },

		},
		legend: {
		  position: 'top',
		  horizontalAlign: 'right',
		  floating: true,
		  offsetY: -25,
		  offsetX: -5
		}
	  }
  return (
    <div class="col-lg-6 col-md-6 col-12">
      <div class="graph-card">
        <div href="#" target="_self" class="card-title-graph">
          <p><i class="fas fa-chart-line"></i>
            Sales Aging Wise</p>
          <i class="fas fa-external-link-alt"></i>

          {/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownSalesaging" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div> */}
        </div>
        <div class="crancy-progress-card card-contain-graph">
          <ReactApexChart options={options} series={series} type="line" height={390} />
        </div>
      </div>
    </div>
  )
}
