import React, { Component } from 'react';

//materialize
import { Row, Col, Tabs, Tab } from 'react-materialize';

//slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class About extends Component {
	render() {
	

		return (
			<div className="about-us">


				<div className="first" />

				<Row>
					<Col m={12} className=" second-upper second m-auto">
						<div className="hovv">
							<h2 className="text-center mt-5 pt-5 m-auto">About Us</h2>
							<hr />
						</div>

						<Col m={12} className=" m-auto">
							<p className=" text-center w-75 m-auto">
								Trust House is an emerging real estate marketing leader in Egypt, and the MENA region.
                                                                The goal is to revolutionize the real estate marketing industry by providing new opportunities
                                                                in a completely new platform that will transform the way you view real estate.
                                                        
							</p>{' '}
						</Col>
					</Col>
				</Row>

				<div className="third">
					<div className="bkkk">
						<div className="container">
							{/* <Row className=" text-center"> */}

							<Row className="center-align ">
								<Col m={2} s={12} className=" hov ">
									<i class="far fa-3x fa-thumbs-up" />
									<p>Best Deals</p>
								</Col>

								<Col m={2} s={12} className=" hov ">
									<i className="fas fa-3x fa-money-check " />
									<p>Digital Marketing</p>
								</Col>

								<Col m={2} s={12} className="hov ">
									<i class="far fa-3x fa-check-circle" />
									<p>Best Quality</p>
								</Col>

								<Col m={2} s={12} className=" hov   ">
									<i class="fas  fa-3x fa-globe-americas" />
									<p>Wide Diversity</p>
								</Col>

								<Col m={2} s={12} className="   hov ">
									<i className="far fa-3x fa-clock " />
									<p>Timer Saver</p>
								</Col>

								<Col m={2} s={12} className=" hov   ">
									<i className="fas fa-3x fa-sliders-h " />
									<p>Customizable</p>
								</Col>

								{/* </Row> */}
							</Row>

							<Row>
								<Col m={6} s={12}>
									<h2>What We Do.</h2>
									<p>
										We provide a platform for the widest range of real estate options,
                                                                                from the top luxurious to the most affordable
									</p>
								</Col>

								<Col m={6} s={12}>
									<Row>
										<Col s={12}>
											<ul className="pt-4">
												<li>
													{' '}
													<i class="fas fa-check" /> RESEDENTIAL
												</li>
												<li>
													<i class="fas fa-check"> </i> MEDICAL
												</li>
												<li>
													<i class="fas fa-check"> </i> ADMINSTRATION
												</li>
												<li>
													<i class="fas fa-check"> </i> COMMERCIAL
												</li>
											</ul>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</div>
				</div>

				<Tabs className=" w-50 mytabs tabs-fixed-width">
					<Tab
						active
						title={
							<div className="conf ">
								<i className="fas fa-lock fa-2x" />
								<p className="icon-title">
									{' '}
									Confidentiality Guaranteed
									{/* <br/> <i className="fas fa-sort-down  fa-2x"></i> */}
								</p>
							</div>
						}
					>
						<div className="mytab1">
							<h4>Your data are private and guaranteed to stay this way</h4>{' '}
						</div>
					</Tab>
					<Tab
						title={
							<div className="conf">
								<i className="far fa-grin-beam fa-2x" />
								<p className="icon-title"> Customer Satisfaction </p>
							</div>
						}
					>
						<div className="mytab2">
							<h4>Our customers are satisfied with the wide range of options we offer</h4>{' '}
						</div>
					</Tab>
					<Tab
						title={
							<div className="conf">
								<i className="fas fa-shield-alt fa-2x" />
								<p className="icon-title"> Trusted </p>
							</div>
						}
					>
						<div className="mytab3">
							<h4>You can rest assured that you will find your next home</h4>{' '}
						</div>
					</Tab>
					<Tab
						title={
							<div className="conf">
								<i className="fas fa-business-time fa-2x" />
								<p className="icon-title">Fast & Effecient </p>
							</div>
						}
					>
						<div className="mytab4">
							<h4>
								The fastest way to explore options, search for what you want and make the right choice
							</h4>{' '}
						</div>
					</Tab>
				</Tabs>

				{/* </div> */}
			</div>
		);
	}
}
