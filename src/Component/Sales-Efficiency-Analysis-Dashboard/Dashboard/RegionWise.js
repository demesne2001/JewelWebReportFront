import React, { useContext } from 'react'

import ReactApexChart from 'react-apexcharts';
import { loliPopBaroptions } from '../../ChartOptions/BarLolipop';
import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import { useEffect,useState } from 'react';
import contex from '../../contex/Contex';


export default function RegionWise() {

	const contexData = useContext(contex)

	const series = [{
		name: 'Inflation',
		data: [2, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2]
	}]

	const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	const loliPopOptions = loliPopBaroptions(labels)

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

        post(postData,API.GetRegionWise,'post')
        .then((res)=>{

			// for (let index = 0; index < res.data.lstResult.length; index++) {

			// 	temp1.push({
					
			// 	})

			// }
			
        })
    }

	
	function handledropdownMenu() {
		document.getElementById("myDropdownRegion").style.display === "block" ? document.getElementById("myDropdownRegion").style.display = "none" : document.getElementById("myDropdownRegion").style.display = "block";
	}
	

	function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	}

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div className="card-title-graph">
					<p><i className="fas fa-globe"></i>
						Region Wise</p>
					<i className="fas fa-external-link-alt"></i>

					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>

					<div id="myDropdownRegion" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}
					
				</div>
				<div className="crancy-progress-card card-contain-graph">
					<ReactApexChart options={loliPopOptions} series={series} type="bar" height={350} />
					{/* <Cylinder/> */}
				</div>
			</div>
		</div>
	)
}
