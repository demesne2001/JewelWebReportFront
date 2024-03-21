import React from 'react'

import ReactApexChart from 'react-apexcharts';
import { barMarkerOptions } from '../../ChartOptions/BarMarker';
import BlackDots from '../../Assets/image/Dots.png'

export default function YearWise() {
	
          
	const series = [
		{
		  name: 'Actual',
		  data: [
			{
			  x: '2011',
			  y: 1292,
			  goals: [
				{
				  name: 'Expected',
				  value: 1400,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2012',
			  y: 4432,
			  goals: [
				{
				  name: 'Expected',
				  value: 5400,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2013',
			  y: 5423,
			  goals: [
				{
				  name: 'Expected',
				  value: 5200,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2014',
			  y: 6653,
			  goals: [
				{
				  name: 'Expected',
				  value: 6500,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2015',
			  y: 8133,
			  goals: [
				{
				  name: 'Expected',
				  value: 6600,
				  strokeHeight: 13,
				  strokeWidth: 0,
				  strokeLineCap: 'round',
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2016',
			  y: 7132,
			  goals: [
				{
				  name: 'Expected',
				  value: 7500,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2017',
			  y: 7332,
			  goals: [
				{
				  name: 'Expected',
				  value: 8700,
				  strokeHeight: 5,
				  strokeColor: '#775DD0'
				}
			  ]
			},
			{
			  x: '2018',
			  y: 6553,
			  goals: [
				{
				  name: 'Expected',
				  value: 7300,
				  strokeHeight: 2,
				  strokeDashArray: 2,
				  strokeColor: '#775DD0'
				}
			  ]
			}
		  ]
		}
	  ]
	  const option = barMarkerOptions()

	  function handledropdownMenu() {
		document.getElementById("myDropdownYear").style.display === "block" ? document.getElementById("myDropdownYear").style.display = "none" : document.getElementById("myDropdownYear").style.display = "block";
	  }
	
	
	  function handleSelectedChart(num) {
		// setBranchWiseChart(num)
	  }
		
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<div href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-calendar-alt"></i>
											Year Wise</p>
										<i className="fas fa-external-link-alt"></i>
										<p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownYear" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div>
									</div>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={option} series={series} type="bar" height={350} />
									</div>
								</div>
							</div>
  )
}
