import React from 'react'

import collenction1 from '../../Assets/img/svgs bold/collection1.svg'
import collenction2 from '../../Assets/img/svgs bold/collection 2.svg'

export default function Collection() {
  return (
    
      <div className="col-xl-2 col-lg-6 col-md-6 col-12">
								<div className="graph-card">
									<div className="card-title-top3">
										<h4>Collection</h4>
									</div>
									<div className="crancy-progress-card3 top-contant-top-card">
										<div className="crancy-progress-card__content">
											<h4 className="crancy-progress-card__title">172.602</h4>
											<div className="crancy-progress-card__history">
												<span>(Metal Recepit)</span>
											</div>
										</div>
										<div className="crancy-progress__single">
											<img className="crancy-color2__fill" width="30" height="30" viewBox="0 0 20 20"
												fill="none" src={collenction1}/>
										</div>
									</div>
									<div className="crancy-progress-card3 top-contant-botton-card">
										<div className="crancy-progress-card__content">
											<h4 className="crancy-progress-card__title">2,083.43L</h4>
											<div className="crancy-progress-card__history">
												<span>(Bank Recepit)</span>
											</div>
										</div>
										<div className="crancy-progress__single">
											<img className="crancy-color2__fill" width="30" height="30" viewBox="0 0 20 20"
												fill="none" src={collenction2}/>
										</div>
									</div>
								</div>
							</div>
    
  )
}
