import React, { useEffect, useState } from 'react'

import API from '../../Utility/API'
import post from '../../Utility/APIHandle'

import return1 from '../../Assets/img/svgs bold/return 1.svg'
import return2 from '../../Assets/img/svgs bold/return 2.svg'


export default function ReturnTrend() {

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
        getdata()
    },[])
    

    function getdata() {

        post(postData,API.GetReturnTrendCard,'post')
        .then((res)=>{
            
        })
    }

  return (
    
      <div className="col-xl-2 col-lg-4 col-md-4 col-12">
								<div className="graph-card">
									<div className="card-title-top2">
										<h4>Return Trend</h4>
									</div>
									<div className="crancy-progress-card2 top-contant-top-card">
										<div className="crancy-progress-card__content">
											<h4 className="crancy-progress-card__title">66.668</h4>
											<div className="crancy-progress-card__history">
												<span>(16.57% Ret.)</span>
											</div>
										</div>
										<div className="crancy-progress__single">
											<img className="crancy-color2__fill" width="32" height="32" viewBox="0 0 20 20"
												fill="none" src={return1}/>
										</div>
									</div>
									<div className="crancy-progress-card2 top-contant-botton-card">
										<div className="crancy-progress-card__content">
											<h4 className="crancy-progress-card__title">450.230</h4>
											<div className="crancy-progress-card__history">
												<span>(16.57% Ret.)</span>
											</div>
										</div>
										<div className="crancy-progress__single">
											<img className="crancy-color2__fill" width="32" height="32" viewBox="0 0 20 20"
												fill="none" src={return2}/>
										</div>
									</div>
								</div>
							</div>
  )
}
