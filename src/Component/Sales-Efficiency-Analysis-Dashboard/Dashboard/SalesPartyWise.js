import React, { useEffect, useState } from 'react'
import Gradient from "javascript-color-gradient";
import ReactApexChart from 'react-apexcharts';

export default function SalesPartyWise() {

	const [sales, setSales] = useState([
		{ product: 'Black Watch', thisYearProfit: 312122, color: "" },
		{ product: 'Gaming Set', thisYearProfit: 296232, color: "" },
		{ product: 'Brown Purse', thisYearProfit: 500332, color: "" },
		{ product: 'Bamboo Watch', thisYearProfit: 43342, color: "" },
		{ product: 'Blue Band', thisYearProfit: 8500, color: "" },
		{ product: 'Blue T-Shirt', thisYearProfit: 65323, color: "" },
		{ product: 'Chakra Bracelet', thisYearProfit: 150005, color: "" },
		{ product: 'Galaxy Earrings', thisYearProfit: 100214, color: "" },
		{ product: 'Game Controller', thisYearProfit: 53322, color: "" },
		{ product: 'Gold Phone Case', thisYearProfit: 12533, color: "" }
	]);

	const gradientArray = new Gradient()

	// .setColorGradient("#00897b", "#cdffed")
	// .getColors()
	

		.setColorGradient("#01555b", "#98c8cb")
		.getColors()


	useEffect(() => {
		gradientdata()
	}, [])


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
				<a href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-handshake"></i>
						Sales Party Wise</p>
					<i className="fas fa-external-link-alt"></i>
				</a>
				<div className="crancy-progress-card card-contain-graph">
					{/* <ReactApexChart options={options} series={series} type="bar" height={350}/> */}
					<table align='center' rules='rows' border='white' style={{border:'white'}}>
						<tr>
							<th> Product</th>
							<th> Profit</th>
						</tr>


						{sales.map((data) => {
							return (
								<tr >
									<td style={{ backgroundColor: data.color, width: 250, color:'white'}}>{data.product} </td>
									<td style={{ backgroundColor: data.color, width: 250, color:'white' }}>{data.thisYearProfit} ₹</td>


								</tr>
							)
						})}

					</table>
				</div>
			</div>
		</div>
	)
}
