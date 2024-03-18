import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';

export default function Header() {

	const [filterFlag,setFIlterFlag] = useState(false)

	const [fullScreenFlag,setFullscreenFlag] = useState(false)


	function handlerOnOpen(){
		setFIlterFlag(true)
	}

	function handleOnClose(){
		setFIlterFlag(false)
	}

	function fullscreen(){
		setFullscreenFlag(true)
		let elem = document.documentElement;
		if(fullScreenFlag){
			elem.requestFullscreen();
		}
	}

	useEffect(()=>{

	},[fullScreenFlag])

  return (
  <>
      <header className="crancy-header">
			<div className="container g-0">
				<div className="row g-0">
					<div className="col-12">

						<div className="crancy-header__inner">
							<div className="crancy-header__middle">
								<div className="crancy-header__left">
									<div className="crancy-header__nav-bottom">

										<div className="logo crancy-sidebar-padding">
											<a className="crancy-logo">

												<img className="crancy-logo__main" src="image/logo/jsoft-initial.png" alt="#"/>
												<img className="crancy-logo__main--dark" src="image/logo/jsoft-initial.png" alt="#"/>
												<img className="crancy-logo__main--small" src="image/logo/jsoft-initial.png" alt="#"/>
												<img className="crancy-logo__main--small--dark" src="image/logo/jsoft-initial.png" alt="#"/>

											</a>
										</div>
									</div>

									<div id="crancy__sicon" className="crancy__sicon close-icon">
										<i className="fas fa-angle-left" style={{color: "#ffffff"}}></i>
									</div>



								</div>
								<div className="geex-content__header">
									<div className="geex-content__header__content">
										<div className="geex-content__header__customizer">
											<h2 className="geex-content__header__title">Sales Efficiency Analysis Dashboard
											</h2>
										</div>

									</div>
									<div className="geex-content__header__action">

										<div className="geex-content__header__action__wrap">
											<ul className="geex-content__header__quickaction">
												<li className="from-date-to-date-header__quickaction">
													<h5>Synchronize-Date : <span className="text-muted">01/03/2023
															11:53:00</span></h5>
												</li>
												<li className="geex-content__header__quickaction__item">
													<div className="geex-content__header__quickaction__link crancy-header__alarm top-header-icon"
														id="crancy-header__full">
														<i className="fas fa-expand-alt" onClick={fullscreen}></i>
													</div>
												</li>
												<li className="geex-content__header__quickaction__item">
													<div className="geex-content__header__quickaction__link  geex-btn__customizer"
														id="Filtermodal">
														<i className="fas fa-filter" onClick={handlerOnOpen}></i>
													</div>
												</li>
												<li className="geex-content__header__quickaction__item">
													<div className="geex-content__header__quickaction__link">
														<i className="fas fa-sync"></i>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<Modal show={filterFlag}  onHide={handleOnClose}  backdrop="static"  keyboard={false}  size='xl'>

		{/* <div tabindex="-1" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
		aria-labelledby="staticBackdropLabel" aria-hidden="true"> */}
		<div class="modal-dialog modal-dialog-c`entered modal-dialog-scrollable modal-xl modal-filter">`
			<div class="modal-content">
				

                <Modal.Header closeButton>
					<div class="modal-body-header">
						<div class="container">
							<div class="card-graph-detail">
								<div class="row">
									<div class="filter-top">
										<form class="form-group">
											<div class="row">
												<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
													<div class="card-filter-contain top-card-filter">
														<label for="sel1" class="form-label">From Date</label>
														<input class="form-control  date-spacing" type="date"/>
													</div>
												</div>
												<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
													<div class="card-filter-contain top-card-filter">
														<label for="sel1" class="form-label">To Date</label>
														<input class="form-control" type="date"/>
													</div>
												</div>
												<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
													<div class="card-filter-contain top-card-filter">
														<form class="from-group">
															<label for="sel1" class="form-label">

																Metal Type</label>
															<select
																class="form-select form-control filter-header-dropdown"
																aria-label="Default select example">
																<option selected>Select Metal Type</option>
																<option value="1">One</option>
																<option value="2">Two</option>
																<option value="3">Three</option>
															</select>

														</form>
													</div>
												</div>
												<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
													<div class="card-filter-contain top-card-filter">
														<form class="from-group">
															<label for="sel1" class="form-label">

																Day Book Selection</label>
															<select
																class="form-select form-control filter-header-dropdown"
																aria-label="Default select example">
																<option selected>Select Day Book</option>
																<option value="1">One</option>
																<option value="2">Two</option>
																<option value="3">Three</option>
															</select>

														</form>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
                </Modal.Header>


                <Modal.Body>
				<div class="modal-body">
					<div class="container">
						<form>
							<div class="row">
								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-chart-pie"></i>
										<label for="sel1" class="form-label">Branch</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-map-marker-alt"></i>
										<label for="sel1" class="form-label">State</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-city"></i>
										<label for="sel1" class="form-label">City</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-globe"></i>
										<label for="sel1" class="form-label">Region </label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>


								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-project-diagram"></i>
										<label for="sel1" class="form-label">Item</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-th-list"></i>
										<label for="sel1" class="form-label">Sub-Item</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-chart-area"></i>
										<label for="sel1" class="form-label">Item Group</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-sitemap"></i>
										<label for="sel1" class="form-label">Item with Sub-item</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>


								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-people-carry"></i>
										<label for="sel1" class="form-label">Purchase Party</label>
										<button type="button" class="filter-dropdown" data-bs-toggle="modal"
											data-bs-target="#modal2" aria-label="Default select example"
											>
											Select Purchase Party
										</button>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-handshake"></i>
										<label for="sel1" class="form-label">Sales Party</label>
										<button type="button" class="filter-dropdown" data-bs-toggle="modal"
											data-bs-target="#modal3" aria-label="Default select example"
											>
											Select Sales Party
										</button>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-users"></i>
										<label for="sel1" class="form-label">Saleman</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-boxes"></i>
										<label for="sel1" class="form-label">Product</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>


								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-gem"></i>
										<label for="sel1" class="form-label">Design Catalogue</label>
										<button type="button" class="filter-dropdown" data-bs-toggle="modal"
											data-bs-target="#modal4" aria-label="Default select example"
											>
											Select Design Catalogue
										</button>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-calendar-week"></i>
										<label for="sel1" class="form-label">Month</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas  fa-calendar-alt"></i>
										<label for="sel1" class="form-label">Year</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-chart-line"></i>
										<label for="sel1" class="form-label">Sale Aging</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-layer-group"></i>
										<label for="sel1" class="form-label">Mode of Sale</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

								<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
									<div class="card-filter-contain">
										<i class="fas fa-stream"></i>
										<label for="sel1" class="form-label">Team & Mode of Sale</label>
										<div class="dropdown">
											<select class="selectpicker" multiple aria-label="Default select example"
												data-live-search="true">
												<option value="one">One</option>
												<option value="two">Two</option>
												<option value="three">Three</option>
												<option value="four">Four</option>
											</select>
										</div>
									</div>
								</div>

							</div>
						</form>
					</div>
				</div>   

                       

                </Modal.Body>

                <Modal.Footer>

                    <button type="button" class="filter-footer-button" data-mdb-ripple-init onClick={handleOnClose}> Close </button>
                    <button type="button" class="filter-footer-button" data-mdb-ripple-init>Apply</button>
					<div class="form-check checkbox-filter">
						<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
						<label class="form-check-label checkbox-filter-label text-muted" for="flexCheckChecked">(% Set
							as Default)</label>
					</div>

                </Modal.Footer>

				</div>
			 </div>
			{/* </div> */}
			</Modal>
	
        </> 
  )
}
