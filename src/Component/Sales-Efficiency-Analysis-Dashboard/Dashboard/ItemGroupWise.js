import React, { useContext } from 'react'
import API from '../../Utility/API';
import { useEffect,useState } from 'react';
import post from '../../Utility/APIHandle'


import ReactApexChart from 'react-apexcharts';
import { pieOptions } from '../../ChartOptions/Pie';

import BlackDots from '../../Assets/image/Dots.png'
import contex from '../../contex/Contex';

export default function ItemGroupWise() {

  const contexData = useContext(contex)

	const series = [44, 55, 13, 43, 22]

	const labels = ['ItemGroup A', 'ItemGroup B', 'ItemGroup C', 'ItemGroup D', 'ItemGroup E']
	const options = pieOptions(labels)

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

        post(postData,API.GetItemGroupWise,'post')
        .then((res)=>{

			for (let index = 0; index < res.data.lstResult.length; index++) {

				temp1.push({
					
				})

			}
			
        })
    }
    
	function handledropdownMenu() {
		document.getElementById("myDropdownItemgroup").style.display === "block" ? document.getElementById("myDropdownItemgroup").style.display = "none" : document.getElementById("myDropdownItemgroup").style.display = "block";
	  }
	
	
	  function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	  }

  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<div href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-chart-area"></i>
											Item Group Wise</p>
										<i className="fas fa-external-link-alt"></i>

										<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownItemgroup" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div>
									</div>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="pie" height={390} />
									</div>
								</div>
							</div>
  )
}
