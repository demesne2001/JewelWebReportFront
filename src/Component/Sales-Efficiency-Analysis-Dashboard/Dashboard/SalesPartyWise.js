import React, { useContext, useEffect, useState } from 'react'
import Gradient from "javascript-color-gradient";
import ReactApexChart from 'react-apexcharts';
import BlackDots from '../../Assets/image/Dots.png'
import post from '../../Utility/APIHandle'
import API from '../../Utility/API';
import contex from '../../contex/Contex';


export default function SalesPartyWise() {

	// const contexData = useContext(contex)

	// const [sales, setSales] = useState([
	// 	{ product: 'Black Watch', thisYearProfit: 312122, color: "" },
	// 	{ product: 'Gaming Set', thisYearProfit: 296232, color: "" },
	// 	{ product: 'Brown Purse', thisYearProfit: 500332, color: "" },
	// 	{ product: 'Bamboo Watch', thisYearProfit: 43342, color: "" },
	// 	{ product: 'Blue Band', thisYearProfit: 8500, color: "" },
	// 	{ product: 'Blue T-Shirt', thisYearProfit: 65323, color: "" },
	// 	{ product: 'Chakra Bracelet', thisYearProfit: 150005, color: "" },
	// 	{ product: 'Galaxy Earrings', thisYearProfit: 100214, color: "" },
	// 	{ product: 'Game Controller', thisYearProfit: 53322, color: "" },
	// 	{ product: 'Gold Phone Case', thisYearProfit: 12533, color: "" }
	// ]);

	const gradientArray = new Gradient().setColorGradient("#01555b", "#98c8cb").getColors()

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

	// 	setPostData(contexData.state)

	// },[contexData.state])

	// useEffect(()=>{
	// 	getdata()
	// 	gradientdata()
	// },[postData])
	const contexData = useContext(contex);
	// const [name, setName] = useState([])
	// const [weight, setweight] = useState([])
	const [sales, setSales] = useState([])
	let inputdata = contexData.state;

	useEffect(() => {
		getdata() 
	}, [inputdata])
	// useEffect(() => {
	// 	gradientdata()
	// }, [sales])

	function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'a.accountID,c.AccountName' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let sale = [];
				var js = {};
				// console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					js = {'product':'','thisYearProfit' : 0}
					if (res.data.lstResult[index]['AccountName'] === null) {
						js['product'] = 'null'
					} else {
						js['product'] = res.data.lstResult[index]['AccountName']
					}
					js['thisYearProfit'] = res.data.lstResult[index]['FineWt']

					sale.push(js)
				}
				// setSales(sale)
				var j = []
				for (let index = 0; index < sale.length; index++) {
					j.push({ ...sale[index], ['color']: gradientArray[index] })
				}
				setSales(j)
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
	}

	console.log('sales', sales)

	function gradientdata() {
		var j = []
		for (let index = 0; index < sales.length; index++) {
			j.push({ ...sales[index], ['color']: gradientArray[index] })
		}
		setSales(j)
	}


	return (

		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-handshake"></i>
						Sales Party Wise</p>
					<i className="fas fa-external-link-alt"></i>
					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownSales" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div> */}
				</div>
				<div className="crancy-progress-card card-contain-graph">
					{/* <ReactApexChart options={options} series={series} type="bar" height={350}/> */}
					<table align='center' rules='rows' border='white' style={{ border: 'white' }}>
						<tr>
							<th>AccountName</th>
							<th>FineWt</th>
						</tr>


						{sales.map((data) => {
							return (
								<tr >
									<td style={{ backgroundColor: data.color, width: 250, color: 'white' }}>{data.product} </td>
									<td style={{ backgroundColor: data.color, width: 250, color: 'white' }}>{data.thisYearProfit}</td>
								</tr>
							)
						})}

					</table>
				</div>
			</div>
		</div>
	)
}
