import React, { useEffect, useState } from 'react'

import piegraph1 from '../../Assets/image/piegraph1.png'

import salesEff1 from '../../Assets/img/svgs bold/sales eff 1.svg'
import salesEff2 from '../../Assets/img/svgs bold/sales eff 2.svg'

import API from '../../Utility/API'
import post from '../../Utility/APIHandle'

export default function SalesEfficiency() {

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

    },[])

    function getdata() {

        post(postData,API.GetSalesEfficiencyCard,'post')
        .then((res)=>{

        })
    }

    return (

        <div className="col-xl-2 col-lg-4 col-md-4 col-12">
            <div className="graph-card">
                <div className="card-title-top">
                    <h4>Sales Efficiency</h4>
                </div>
                <div className="crancy-progress-card1 top-contant-top-card">
                    <div className="crancy-progress-card__content">
                        <h4 className="crancy-progress-card__title">402.341</h4>
                        <div className="crancy-progress-card__history">
                            <span>(83.43% Sold)</span>
                        </div>
                    </div>
                    <div className="crancy-progress__single">
                        <img className="crancy-color3__fill" width="32" height="32"
                            src={salesEff1} />
                    </div>
                </div>
                <div className="crancy-progress-card1 top-contant-botton-card">
                    <div className="crancy-progress-card__content">
                        <h4 className="crancy-progress-card__title">110.84L</h4>
                        <div className="crancy-progress-card__history">
                            <span>(83.43% Sold)</span>
                        </div>
                    </div>
                    <div className="crancy-progress__single">
                        <img className="crancy-color3__fill" width="32" height="32"
                            src={salesEff2} />
                    </div>
                </div>
            </div>
        </div>

    )
}
