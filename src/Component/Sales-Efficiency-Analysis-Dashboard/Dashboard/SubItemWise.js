import React from 'react'

import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import { useEffect,useState } from 'react';


import ReactApexChart from 'react-apexcharts';
import RoundedBar from '../../CustomCharts/RoundedBar';

import BlackDots from '../../Assets/image/Dots.png'

import { rounBarOptions } from '../../ChartOptions/RoundedBar';


export default function SubItemWise() {

  const catagories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
  const series = [{
    name: 'Inflation',
    data: [20, 30, 42, 12, 41, 36, 32, 23, 14, 8]
  }]

  const barOption = rounBarOptions(catagories)


  function handledropdownMenu() {
    document.getElementById("myDropdownSubitem").style.display === "block" ? document.getElementById("myDropdownSubitem").style.display = "none" : document.getElementById("myDropdownSubitem").style.display = "block";
  }


  function handleSelectedChart(num) {
    // setBranchWiseChart(num)
  }

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


  useEffect(() => {
    getdata()
  }, [])

  function getdata() {

    let temp1 = []

    post(postData, API.GetSubItemWise, 'post')
      .then((res) => {

        for (let index = 0; index < res.data.lstResult.length; index++) {

          temp1.push({

          })

        }

      })
  }

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="graph-card">
        <div className="card-title-graph">
          <p><i className="fas fa-th-list"></i>
            Sub-Item Wise</p>
          <i className="fas fa-external-link-alt"></i>

          <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownSubitem" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div>

        </div>



        <div className="crancy-progress-card card-contain-graph">
          {/* <ReactApexChart options={options} series={series} type="polarArea" height={390} /> */}
          {/* <RoundedBar/> */}
          <ReactApexChart options={barOption} series={series} type="bar" height={350} />
        </div>
      </div>
    </div>
  )
}
