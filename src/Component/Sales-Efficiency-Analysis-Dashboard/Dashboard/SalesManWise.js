import React from 'react'

import salesmanwisepng from '../../Assets/image/saleman wise.png'
import BlackDots from '../../Assets/image/Dots.png'

export default function SalesManWise() {

	

	function handledropdownMenu() {
        document.getElementById("myDropdownSalesman").style.display === "block" ? document.getElementById("myDropdownSalesman").style.display = "none" : document.getElementById("myDropdownSalesman").style.display = "block";
      }

      function handleSelectedChart(num) {
        // setBranchWiseChart(num)
      }
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<div href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-users"></i>
											Salesmen Wise</p>
										<i className="fas fa-external-link-alt"></i>
										{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownSalesman" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div> */}
									</div>
									<div className="crancy-progress-card card-contain-graph">
										<img src={salesmanwisepng}/>
									</div>
								</div>
							</div>
  )
}
