import React, { useEffect, useState } from 'react'
import Gradient from "javascript-color-gradient";
import ReactApexChart from 'react-apexcharts';
import BlackDots from '../../Assets/image/Dots.png'

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

	function handledropdownMenu() {
        document.getElementById("myDropdownSales").style.display === "block" ? document.getElementById("myDropdownSales").style.display = "none" : document.getElementById("myDropdownSales").style.display = "block";
      }

      function handleSelectedChart(num) {
        // setBranchWiseChart(num)
      }


	return (

		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<div href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-handshake"></i>
						Sales Party Wise</p>
					<i className="fas fa-external-link-alt"></i>
					<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownSales" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div>
				</div>
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
