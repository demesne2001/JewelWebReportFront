import React from 'react'

import StockAnalysis2 from '../../Assets/img/svgs bold/stock analysis 2.svg'
import Vector2 from '../../Assets/img/svgs bold/Vector (2).svg'

export default function StockAnalysis() {
  return (
    <div className="col-xl-2 col-lg-6 col-md-6 col-12">
								<div className="graph-card">
									<div className="card-title-top4">
										<h4>Stock Analysis</h4>
									</div>
									<div className="crancy-progress-card4 top-contant-top-card">
										<div className="crancy-progress-card__content">
											<h4 className="crancy-progress-card__title">78.94</h4>
											<div className="crancy-progress-card__history">
												<span>(Tag Stock)</span>
											</div>
										</div>
										<div className="crancy-progress__single">
											<img className="crancy-color2__fill" width="32" height="32" viewBox="0 0 20 20"
												fill="none" src={StockAnalysis2}/>
										</div>
									</div>
									<div className="crancy-progress-card4 top-contant-botton-card">
										<div className="crancy-progress-card__content">
											<h4 className="crancy-progress-card__title">32.948</h4>
											<div className="crancy-progress-card__history">
												<span>(Losse Stock)</span>
											</div>
										</div>
										<div className="crancy-progress__single">
											<img className="crancy-color2__fill" width="32" height="32" viewBox="0 0 20 20"
												fill="none" src={Vector2}/>
										</div>
									</div>
								</div>
							</div>
  )
}
