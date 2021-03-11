import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import Container from 'react-materialize/lib/Container';
import axios from 'axios'
export default class SortOptions extends Component {
	constructor(props)
	{
	  super(props);
	  this.onChange = this.onChange.bind(this);
	  this.state={
		sort:""
	  }
	  
	}
  
	onChange(e) {
		this.setState({ sort: e.target.value });
	   
	  }
		
	render() {
		return (
			<div className="sortby">
			<Container>
				<Row>
					<Col l={3} m={12} className="right">
						<select className="browser-default" value={this.state.sort}
                onChange={this.onChange}
                name="sort">
							<option value="" disabled >
								Sort By
							</option>
							<option value="price" defaultValue onClick={this.onChange}>PRICE</option>
							<option value="area">AREA</option>
							<option value="location">LOCATION</option>
							<option value="developer">DEVELOPER</option>
						</select>
						{		console.log(this.state.sort)
}
					</Col>
				</Row>
				</Container>
			</div>
		);
	}
}
