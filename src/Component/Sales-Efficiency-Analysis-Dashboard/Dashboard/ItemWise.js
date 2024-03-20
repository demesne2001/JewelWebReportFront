import React from 'react'

import HbarFilled from '../../CustomCharts/HbarFilled'
import Cylinder from '../../CustomCharts/Cylinder3d.js/Cylinder'
import CylinderFilled from '../../CustomCharts/CylinderFilled/CylinderFilled'

export default function ItemWise() {

	const lineDiffrence = ["100%","80%","60%","40%","20%","0%"]  

	const label = ["x1","x2","x3","x4","x5","x6"]
	const data = ["95%","83%","80%","93%","65%","78%"]	
	
	return (

		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<a href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-project-diagram"></i>
						Item Wise</p>
					<i className="fas fa-external-link-alt"></i>
				</a>

				<div className="crancy-progress-card card-contain-graph">

				{/* <HbarFilled/> */}

				<div className='container itemwise'>

						{/* <Cylinder/> */}
						{/* <CylinderFilled/> */}

						

						<div className="background_grid">


							{lineDiffrence.map((yaxis)=>{
								
							  return <span className='line' value={yaxis}></span>
							})}


						</div>

						<div className="base"></div >

						<div className="bar_container">

							{data.map((height)=>{

								return <> <div className='shell'><div className='bar' style={{maxHeight:height}}/> <div class="hide">{height}</div></div></>
							})}

						</div>

						<div className='titles'>

							{label.map((label)=>{

								return <span>{label}</span>
							})}
						</div>

					</div>
				</div>
			</div>
		</div>

	)
}
