import React from 'react'

import item from '../../Assets/image/item.png'

export default function ItemWise() {
  return (
    
      <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-project-diagram"></i>
											Item Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
										<img src={item}/>
									</div>
								</div>
							</div>
   
  )
}
