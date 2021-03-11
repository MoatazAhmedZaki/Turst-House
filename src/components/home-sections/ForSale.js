import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';

export default class ForSale extends Component {
	render() {
		return (
			<div className="grid w-80 m-auto">
				{/* <Container> */}
				<Row>
					<Col l={6} s={12} className="center-align">
						<div className="boxx1" />
						<h5>SPRINGS 4- VILLA TYPE 21 - TUSCAN</h5>
					</Col>

					<Col l={6} s={12} className="center-align">
						<Col s={12}>
							<Col s={6}>
								<div className="boxx2" />
								<h6>SPRINGS 4- VILLA TYPE 21 - TUSCAN</h6>
							</Col>
							<Col s={6}>
								<div className="boxx3" />
								<h6>AVENUES 3 - VILLA TYPE 3</h6>
							</Col>
						</Col>
						<Col s={12}>
							<Col s={6}>
								<div className="boxx4" />
								<h6>GREENS 1 - VILLA TYPE 18</h6>
							</Col>
							<Col s={6}>
								<div className="boxx5" />
								<h6>THE VIEWS - VILLA TYPE 17</h6>
							</Col>
						</Col>
					</Col>
				</Row>
			</div>

			//         <div id="forsale-section">
			//         <div className="overlay-forsale">Available For Resale</div>

			//         <Slider >
			//         <Slide
			// src={require('../../img/image4.jpg')}
			//  title="This is our big Tagline!"
			//  placement="right">
			//     Here's our small slogan.
			//   </Slide>

			// <Slide src={require('../../img/image3.jpg')}
			// title="This is our big Tagline!"
			// placement="right">
			// Here's our small slogan.

			// </Slide>
			// <Slide src={require('../../img/image2.jpg')}
			// title="This is our big Tagline!"
			// placement="right">
			// Here's our small slogan.

			// </Slide>
			// <Slide  src={require('../../img/image1.webp')}
			// title="This is our big Tagline!"
			// placement="right">
			// Here's our small slogan.

			// </Slide>
			//         </Slider>

			//         </div>
		);
	}
}
