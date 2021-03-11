import React, { Component } from 'react';
import SideList from './SideList';
import { Col, SideNav, Button } from 'react-materialize';
export default class SideListHolder extends Component {
	render() {
	return(
			// <div className="right-bar  ">
			<Col l={3} m={4} s={12} className="flex-item">
				{/* <div className="ex-design">
					<Link to="/ads">
						<img src={require('../../img/dum.jpg')} alt="3aw" />
					</Link>
				</div> */}

				<SideNav className=" mysi" title={"Most Popular Units" }
					trigger={
						<div className="center ">
							<Button className="sidebar-button hide-on-med-and-up">{this.props.title}</Button>
						</div>
					}
					options={{ closeOnClick: true, edge: 'right' }}
				>
					<div className="Most-View">
						<SideList title={this.props.title} info={this.info} 	 UnitFullDetail={this.props.UnitFullDetail}	updateUnit={this.props.updateUnit} 
/>
					</div>
				</SideNav>

				<div className="Most-View hide-on-small-only">
					<SideList title={this.props.title} 	info={this.info}  UnitFullDetail={this.props.UnitFullDetail}	updateUnit={this.props.updateUnit} 
/>
				</div>
			</Col>
			// </div>
		);
	}
}
