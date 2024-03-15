import React from 'react'
import './ItemWise.css'

export default function ItemWise() {

	const label = ["y1","y2","y3","y4","y5","y6"]
	const data = ["95","83","80","93","65","78"]	
	
	return (

		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<a href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-project-diagram"></i>
						Item Wise</p>
					<i className="fas fa-external-link-alt"></i>
				</a>
				<div className="crancy-progress-card card-contain-graph">

					<div className='container itemwise'>

						<div className="background_grid">

							<span className='line' value="100%" ></span>
							<span className='line' value="80%"></span>
							<span className='line' value="60%" ></span>
							<span className='line' value="40%"></span>
							<span className='line' value="20%"></span>
							<span className='line' value="0%"></span>

						</div>

						<div className="base"></div >

						<div className="bar_container">

							<div className='bar' style={{ maxHeight: "95%" }} ></div>
							<div className='bar' style={{ maxHeight: "83%" }} ></div>
							<div className='bar' style={{ maxHeight: "80%" }} ></div>
							<div className='bar' style={{ maxHeight: "93%" }} ></div>
							<div className='bar' style={{ maxHeight: "65%" }} ></div>
							<div className='bar' style={{ maxHeight: "78%" }} ></div>

						</div>

						<div className='titles'>
							<span>Item 1</span>
							<span>Item 2</span>
							<span>Item 3</span>
							<span>Item 4</span>
							<span>Item 5</span>
							<span>Item 6</span>
						</div>

					</div>
				</div>
			</div>
		</div>

	)
}
