import React from 'react'

import salesmanwisepng from '../../Assets/image/saleman wise.png'

export default function SalesManWise() {
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-users"></i>
											Salesmen Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
										<img src={salesmanwisepng}/>
									</div>
								</div>
							</div>
  )
}
