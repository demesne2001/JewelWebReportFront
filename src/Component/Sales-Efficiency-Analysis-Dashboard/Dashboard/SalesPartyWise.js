import React from 'react'

import salespartywisepng from '../../Assets/image/salesparty wise.png'

export default function SalesPartyWise() {
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-handshake"></i>
											Sales Party Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
										<img src={salespartywisepng}/>
									</div>
								</div>
							</div>
  )
}
