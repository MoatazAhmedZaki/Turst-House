import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import RequestForm from '../single-unit/RequestForm';
import ReactCardFlip from 'react-card-flip';
import { Transition, animated } from 'react-spring/renderprops';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../globalState/actions/authActions';
import axios from 'axios';
const icons = [
	<p name="Parking">
		{' '}
		<i className="fas fa-parking" /> Parking
	</p>,
	<p name="Green Areas">
		{' '}
		<i className="fas fa-leaf" /> Green Areas
	</p>,
	<p name="Security">
		{' '}
		<i className="fas fa-lock" /> Security
	</p>,
	<p name="Direct Lift Accsess">
		<i className="fas fa-users" /> Direct Lift Accsess
	</p>,
];
class UnitItem extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false,
			showmodal: false,
			show: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	propertyReq = () => {
		return (
			<button className="btn card-btn" onClick={this.handleClick}>
				REQUEST PROPERTY
			</button>
		);
	};
	componentWillUpdate() {}
	openModaldelete = () => {
		this.setState({
			showmodal: !this.state.showmodal,
		});
	};

	hideModal = () => {
		this.setState({ showmodal: false });
	};

	deleteUnit = e => {
		axios.delete(`http://localhost:5000/api/units/${this.props.cards._id}`).then(res => {
    this.hideModal()
    this.props.deleteItem(this.props.cards._id)  
    alert('Unit deleted successfully');
      
    });
	};

	closeDeleteModal = () => {
		this.setState({ showmodal: false });
	};

	handleShow = () => {
		this.setState({ show: true });
		this.hideModal();
	};

	hide1 = e => {
		e.preventDefault();
		this.hideModal();
	};
	hide2(e) {
		e.preventDefault();
		this.props.hideModal();
	}

	editDelete = () => {
		return (
			<div className="adminbtns">
				<Row>
					<Col s={6}>
						<button className="btn">
							<Link to={`/admin/full-details/${this.props.cards._id}`}>Edit</Link>
						</button>
					</Col>

					<Col s={6}>
						<button className="btn" trigger={<Button />} onClick={this.openModaldelete}>
							Delete
						</button>
					</Col>
				</Row>
			</div>
		);
	};

	render() {
    const info = this.props.cards;
		let loginornot = this.props.isLoggedIn ? this.editDelete() : this.propertyReq();

		let extraFeaturesContent;
		if (info.features) {
			extraFeaturesContent = info.features.map(feature => icons.find(icon => icon.props.name === feature));
			// console.log(extraFeaturesContent)
		}

		let CurrencyFormat = require('react-currency-format');
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
				<div key="front" className="unititem">
					<div>
						<Transition
							native
							items={this.state.showmodal}
							from={{ opacity: 0 }}
							enter={{ opacity: 1 }}
							leave={{ opacity: 0 }}
						>
							{show =>
								show &&
								(props => (
									<animated.div style={props}>
										<div className="unitmodaloverlay">
											<div className="unitmodalcontent">
												<p>Are you sure you want to delete this unit?</p>
												<div className="unitmodalbtn">
													<Button
														className="btn yesbtn"
														onClick={this.deleteUnit.bind(this, this.props.cards._id)}
														variant="primary"
														type="submit"
													>
														Yes
													</Button>

													<Button className="btn nobtn" onClick={this.hide1}>
														No
													</Button>
												</div>
											</div>
										</div>
									</animated.div>
								))
							}
						</Transition>
					</div>
					<div className="siglecard z-depth-4">
						<Row >
							<Col m={12}>
								<Row style={{margin:"0"}} >
									<Link to={`/full-details/${info._id}`}>
										<Col l={4} m={12} s={12}>
                   

                      <img
												style={{ height: '15rem' }}
												className="responsive-img"
												src={info.mainImage ?info.mainImage:null}
												alt="3aw"
											/>
										</Col>
									</Link>
									<Col l={8} m={12} s={12}>
										<div className="card-info">
											<h5>{info.title}</h5>

											<h6 className="card-location">
												<i className="fas fa-map-marker-alt" /> {info.location}
											</h6>

											<p className="item-info">
												<span>{info.numberOfBedrooms}</span>
												<i className="fas fa-bed" />
												<span>{info.numberOfBathrooms}</span>
												<i className="fas fa-bath" /> <span>{info.area} sqm</span>
											</p>
										</div>

										<div className="left card-body-right card-info ">
											{extraFeaturesContent}
											{/* <p>
                      <i className="fas fa-parking" /> Parking
                    </p>
                    <p>
                      <i className="fas fa-lock" /> Security
                    </p>
                    <p>
                      <i className="fas fa-users" /> Direct Lift Accsess
                    </p>
                    <p>
                      <i className="fas fa-leaf" /> Green Areas
                    </p> */}
										</div>
										<div className="right card-price">
											<h5>
												<CurrencyFormat
													value={info.price}
													displayType={'text'}
													thousandSeparator={true}
												/>{' '}
												EGP
											</h5>

											{loginornot}
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>

				<div className="back-face  z-depth-4" key="back">
					<RequestForm />
					<button className="back-face-btn " onClick={this.handleClick}>
						<i className="fas fa-times" />
					</button>
				</div>
			</ReactCardFlip>
		);
	}
}

//  <div>{
//                     <p>
//                       <i className="fas fa-parking" /> Parking
//                     </p>
//                     && this.state.unit.extraFeatures.parking }
//                     </div>

UnitItem.propTypes = {
	login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn,
});

export default connect(
	mapStateToProps,
	{ login }
)(UnitItem);
