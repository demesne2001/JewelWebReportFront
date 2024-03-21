import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { patternedPieOptions } from '../../ChartOptions/PatternedPie';
import BlackDots from '../../Assets/image/Dots.png'


export default function DesignCatalogueWise() {
	const series = [44, 55, 41, 17, 15]
  
  const label = ["Comedy", "Action", "SciFi", "Drama", "Horror"]
          
  const pieOptions = patternedPieOptions(label)

  function handledropdownMenu() {
    document.getElementById("myDropdownDesign").style.display === "block" ? document.getElementById("myDropdownDesign").style.display = "none" : document.getElementById("myDropdownDesign").style.display = "block";
  }


  function handleSelectedChart(num) {
    // setBranchWiseChart(num)
  }
          
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<div href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-gem"></i>
											Design Catalogue Wise</p>
										<i className="fas fa-external-link-alt"></i>
										<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownDesign" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div>
									</div>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={pieOptions} series={series} type="donut" />
									</div>
								</div>
							</div>
  )
}
