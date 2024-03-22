import React, { useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import API from '../../Utility/API';
import { useEffect,useState } from 'react';
import post from '../../Utility/APIHandle'

import { stackedBarOptions } from '../../ChartOptions/StackedBar';
import BlackDots from '../../Assets/image/Dots.png'
import contex from '../../contex/Contex';

export default function CityWise() {

	const contexData = useContext(contex)

	const label = ['City 1', 'City 2', 'City 3', 'City 1', 'City 2', 'City 3'
	]

	const series = [{
		name: 'PRODUCT A',
		data: [44, 55, 41, 67, 22, 43]
	}, {
		name: 'PRODUCT B',
		data: [13, 23, 20, 8, 13, 27]
	}]

	const stackedBarOption = stackedBarOptions(label)

	const [postData, setPostData] = useState({
        "strBranch": "",
        "strState": "",
        "strCity": "",
        "strItem": "",
        "strSubItem": "",
        "strItemGroup": "",
        "strItemSubitem": "",
        "strPurchaseParty": "",
        "strSalesParty": "",
        "strSaleman": "",
        "strProduct": "",
        "strDesignCatalogue": "",
        "strSaleAging": "",
        "strModeofSale": "",
        "strTeamModeofSale": "",
        "FromDate": "",
        "ToDate": "",
        "strMetalType": "",
        "strDayBook": "",
        "PageNo": 0,
        "PageSize": 0,
        "Search": ""
    })


    useEffect(()=>{

		setPostData(contexData.state)

	},[contexData.state])

	useEffect(()=>{
		getdata()
	},[postData])

    

    function getdata() {

		let temp1 = []

        // post(postData,API.GetCityWise,'post')
        // .then((res)=>{

        //     temp1.push({

		// 	})
        // })
    }
	
	function handledropdownMenu() {
		document.getElementById("myDropdownCity").style.display === "block" ? document.getElementById("myDropdownCity").style.display = "none" : document.getElementById("myDropdownCity").style.display = "block";
	}
	
	

	function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	}


	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">

				<div className="card-title-graph">
					<p><i className="fas fa-city"></i>
						City Wise</p>
					<i className="fas fa-external-link-alt"></i>

					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownCity" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}
				</div>

				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={stackedBarOption} series={series} type="bar" height={390} />
				</div>
			</div>
		</div>
	)
}
