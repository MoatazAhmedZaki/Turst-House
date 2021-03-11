import React, { Component } from 'react';
import Slider from 'react-slick';
import { Row, Col, Modal } from 'react-materialize';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RequestForm from '../single-unit/RequestForm';
export default class UnitCarousel extends Component {
	constructor() {
		super();
		this.scrollview = this.scrollview.bind(this);
		this.scrollgallery = this.scrollgallery.bind(this);
		this.scrollplan = this.scrollplan.bind(this);
	}

	scrollview = e => {
		e.preventDefault();
		this.props.handleScrolloverview();
	};

	scrollgallery = e => {
		e.preventDefault();
		this.props.handleScrollfullgallery();
	};

	scrollplan = e => {
		e.preventDefault();
		this.props.handleScrollfloorplan();
	};
	render() {
		let  imgs= ["https://realestate.eg/storage/listings/8pvGuR1RcZ3cpeiv_thumb.jpg","http://zifax.com.ng/wp-content/uploads/2017/07/3bedroom.jpeg","https://st.depositphotos.com/1658611/2932/i/600/depositphotos_29329143-stock-photo-street-of-residential-houses.jpg","https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses3-e1586934335439.jpg","https://housesolutionegypt.com/images/600xblogs/blog-1553271229.png"]
		;
		
		const settings = {
			infinite: false,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
				{
					breakpoint: 995,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					},
				},

				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		return (
			<div>
				<div id="singleunit-carousel">
					<Slider {...settings}>

{imgs.map(img => {
				return (
					<div key={Math.floor(Math.random() * 100)}>
						<img className="responsive-img" src={img} alt="3aw" />
					</div>
				)
			})}
		</Slider>

					<div className="carousel-footer ">
						<Row className="carouRow ">
							<Col m={8} s={12} className="unitheader-links center">
									<Col m={4} s={12}>
										<button
											className="ctrl-standard is-reversed typ-subhed fx-sliderIn"
											onClick={this.scrollgallery}
										>
											<i className="far fa-images" /> Full Gallery
										</button>
									</Col>

									<Col m={4} s={12}>
										<button
											className="ctrl-standard typ-subhed  is-reversed fx-sliderIn"
											onClick={this.scrollplan}
										>
											<i className="far fa-map" /> Floor Plan
										</button>
									</Col>
							</Col>

							<Col m={4} s={12} className="center">
								<Modal
									fixedFooter
									trigger={
										<button className="ctrl-standard typ-subhed fx-bubbleDown">
											REQUEST PROPERTY
										</button>
									}
								>
									<RequestForm />
								</Modal>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}
