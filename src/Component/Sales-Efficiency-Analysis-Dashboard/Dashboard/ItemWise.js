import React, { useContext } from 'react'
import { useEffect,useState } from 'react';

import HbarFilled from '../../CustomCharts/HbarFilled'
import Cylinder from '../../CustomCharts/Cylinder3d.js/Cylinder'
import CylinderFilled from '../../CustomCharts/CylinderFilled/CylinderFilled'

import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API'
import post from '../../Utility/APIHandle'
import contex from '../../contex/Contex';

export default function ItemWise() {

	const contexData = useContext(contex)

	const lineDiffrence = ["100%","80%","60%","40%","20%","0%"]  

	const label = ["x1","x2","x3","x4","x5","x6"]
	const data = ["95%","83%","80%","93%","65%","78%"]	


	function handledropdownMenu() {
		document.getElementById("myDropdownItem").style.display === "block" ? document.getElementById("myDropdownItem").style.display = "none" : document.getElementById("myDropdownItem").style.display = "block";
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


	useEffect(()=>{

		setPostData(contexData.state)

	},[contexData.state])

	useEffect(()=>{
		getdata()
	},[postData])

	function getdata() {

		let temp1 = []

        post(postData,API.GetItemWise,'post')
        .then((res)=>{

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
					<p><i className="fas fa-project-diagram"></i>
						Item Wise</p>
					<i className="fas fa-external-link-alt"></i>

					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
				</p>
					<div id="myDropdownItem" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
					</div> */}
				</div>

				

				<div className="crancy-progress-card card-contain-graph">
				

				{/* <HbarFilled/> */}

				<div className='container itemwise'>

						{/* <Cylinder/> */}
						{/* <CylinderFilled/> */}

						

						<div className="background_grid">


							{lineDiffrence.map((yaxis)=>{
								
							  return <span className='line' value={yaxis}></span>
							})}


						</div>

						<div className="base"></div >

						<div className="bar_container">

							{data.map((height)=>{

								return <> <div className='shell'><div className='bar' style={{maxHeight:height}}/> <div class="hide">{height}</div></div></>
							})}

						</div>

						<div className='titles'>

							{label.map((label)=>{

								return <span>{label}</span>
							})}
						</div>

					</div>
				</div>
			</div>
		</div>

	)
}
