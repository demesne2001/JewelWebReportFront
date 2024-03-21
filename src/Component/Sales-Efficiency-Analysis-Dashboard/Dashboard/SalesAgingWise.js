import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { lineOption } from '../../ChartOptions/Line';
import BlackDots from '../../Assets/image/Dots.png'

export default function SalesAgingWise() {
	const series = [
		{
		  name: "High - 2013",
		  data: [28, 29, 33, 36, 32, 32, 33]
		}
	  ]
	
	const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

	const options = lineOption(labels)

	function handledropdownMenu() {
		document.getElementById("myDropdownSalesaging").style.display === "block" ? document.getElementById("myDropdownSalesaging").style.display = "none" : document.getElementById("myDropdownSalesaging").style.display = "block";
	  }
	
	
	  function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	  }

  return (
    <div class="col-lg-4 col-md-6 col-12">
								<div class="graph-card">
									<div href="#" target="_self" class="card-title-graph">
										<p><i class="fas fa-chart-line"></i>
											Sales Aging Wise</p>
										<i class="fas fa-external-link-alt"></i>

										<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownSalesaging" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div>
									</div>
									<div class="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="line" height={390} />
									</div>
								</div>
							</div>
  )
}
