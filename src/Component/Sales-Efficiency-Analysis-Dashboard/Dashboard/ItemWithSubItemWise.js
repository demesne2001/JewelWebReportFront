import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { hBarOptions } from '../../ChartOptions/Hbar';
import BlackDots from '../../Assets/image/Dots.png'

export default function ItemWithSubItemWise() {

	const series = [{
		data: [400, 430, 448, 470,1100]
	  }]
	
	const labels = ['South Korea', 'Canada', 'United Kingdom', 'Netherlands','United States']

	const option = hBarOptions(labels)

	function handledropdownMenu() {
		document.getElementById("myDropdownItemwithsubitem").style.display === "block" ? document.getElementById("myDropdownItemwithsubitem").style.display = "none" : document.getElementById("myDropdownItemwithsubitem").style.display = "block";
	  }
	
	
	  function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	  }

	
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<div href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-sitemap"></i>
											Item with Sub item Wise</p>
										<i className="fas fa-external-link-alt"></i>
										<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownItemwithsubitem" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div>
									</div>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={option} series={series} type="bar" height={330} />
									</div>
								</div>
							</div>
  )
}
