import { useState } from "react"
import contex from "./Contex"

const ContexState = (props) => {

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
			"PageSize": 0,
			"Search": "",
			"Grouping": ""
		
    })
	const [tempstate,SettempState] = useState({

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
		"Search": "",
		"Grouping": ""
	
})
	const [childFilterShow, setchildFilterShow] = useState(false);
	const [currency, setcurrency] = useState("");

    return (

       <contex.Provider value={{state:state, SetState:SetState, childFilterShow, setchildFilterShow, tempstate, SettempState, currency, setcurrency}}>

        {props.children}

       </contex.Provider>

    )

}

export default ContexState