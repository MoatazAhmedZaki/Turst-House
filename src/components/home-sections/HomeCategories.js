import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class HomeCtegories extends Component {
	render() {
		var CurrencyFormat = require('react-currency-format');

		const info = this.props.info;

		//  console.log(info)

		return (
			<div className=" homecard z-depth-2">
				{/* <Row> */}
				{/* <Col s={12} > */}
				<Link to={`/full-details/${info._id}`}>
					<Col s={12}>
						<img className="responsive-img" src={info.mainImage} alt="3aw" />
					</Col>
				</Link>
				<Col s={12}>
					<div className="card-info">
						{/* <Row> */}
						{/* <Col s={12}> */}
						<h5 className="truncate">{info.title}</h5>

						{/* </Col> */}

						{/* </Row>  */}
					</div>

					<Row>
						<Col l={7} m={5} s={4}>
							<h6 className="card-location card-info">
								{/* <i className="fas fa-map-marker-alt" /> */}
								{info.location}
								{info.compound ? ' , ' + info.compound : null}
							</h6>
							<h6 className=" card-price card-info" style={{ fontSize: '20px', fontWeight: '700' }}>
								<CurrencyFormat value={info.price} displayType={'text'} thousandSeparator={true} /> EGP
							</h6>
						</Col>
						{/* <Col l={0} m={0} s={1}></Col> */}

						<Col l={5} m={7} s={8}>
							<div className="floatleft">
								<p className="item-info ">
									<span>{info.numberOfBedrooms}</span>
									<i className="fas fa-bed" />
								</p>
								<p className="item-info">
									<span>{info.numberOfBathrooms}</span>
									<i className="fas fa-bath" />
								</p>
							</div>
							<div className="floatleft">
								<p className="item-info pt-2" style={{ fontWeight: '800' }}>
									{info.area} sqm
								</p>
							</div>

							<div className="clearfix" />

							{/* </div> */}

							{/* <Row>
                    <Col l={6} s={6} >
  <p className="item-info">
                      <span>{info.numberOfBedrooms}</span>
                      <i className="fas fa-bed" /></p>
                        <p className="item-info">

                      <span>{info.numberOfBathrooms}</span>
                      <i className="fas fa-bath" />
                    </p>
                    </Col>
                    <Col l={6} s={6}   >

                    <p className="item-info pt-2">
  {info.area} sqm</p>
                    </Col>
                    </Row> */}
						</Col>
					</Row>
				</Col>

				{/* </Col> */}
				{/* </Row>    */}
			</div>
		);
	}
}
