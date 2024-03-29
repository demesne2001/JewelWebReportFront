import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { stackedBarOptions } from '../../ChartOptions/StackedBar';
import { GroupBarOptions } from '../../ChartOptions/GroupBar';
import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle';
import contex from '../../contex/Contex';

import { useEffect,useState, useContext } from 'react';


export default function MonthWise() {


	// const series = [{
	// 	name: 'Net Profit',
	// 	data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
	// }]

	// const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

	// const options = GroupBarOptions(labels)

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
    //     getdata()
    // },[])

	// function getdata() {

	// 	let temp1 = []

    //     post(postData,API.GetMonthWise,'post')
    //     .then((res)=>{

	// 		for (let index = 0; index < res.data.lstResult.length; index++) {

	// 			temp1.push({
					
	// 			})

	// 		}
			
    //     })
    // }

	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownMonth").style.display === "block" ? document.getElementById("myDropdownMonth").style.display = "none" : document.getElementById("myDropdownMonth").style.display = "block";
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

        inputdata = { ...inputdata, ['Grouping']: 'datename(month,voucherDate)' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['MonthName'] === null) {
						name.push("null")
					} else {
            name.push(res.data.lstResult[index]['MonthName'])
					}
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
    }
		const series = [{
		name: '',
		data: weight
	}]
	const options = {
        colors:['#00b150','#002060'],
        chart: {
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
            },
    
          },
          type: 'bar',
          height: 350,
          
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: name,
        },
        yaxis: {
          title: {
            text: 'Thousands'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return  val + " Thousand"
            }
          }
        }
      }
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-calendar-week"></i>
						Month Wise</p>
					<i className="fas fa-external-link-alt"></i>
					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownMonth" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}

					

				</div>
				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={options} series={series} type="bar" height={390} />
				</div>
			</div>
		</div>
	)
}
