import React from 'react'

import purchsepartywisepng from '../../Assets/image/purchaspartywise.png'

export default function PurchasePartyWise() {
  return (
    
      <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-people-carry"></i>
											Purchase Party Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
										<img src={purchsepartywisepng}/>
									</div>
								</div>
							</div>
    
  )
}
