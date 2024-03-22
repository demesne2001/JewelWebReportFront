import { useState } from "react"

import contex from "./Contex"

const contexState = (props) => {

    const [state,SetState] = useState({
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
		"PageSize": 999,
		"Search": ""
    })

    return (

       <contex.Provider value={{state,SetState}}>

        {props.children}

       </contex.Provider>

    )

}

export default contexState