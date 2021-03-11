import React, { Component } from 'react';
import { Container } from 'react-materialize';
// import Container from 'react-materialize/lib/Container';
import axios from 'axios';

export default class RequestForm extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
      firstName: '',
      lastName: '',
			email: '',
			number: '',
		};
	}

	submit(e) {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/contact', this.state)
			.then(this.setState({ firstName: '', lastName: '', number: '', email: '' }))
			.catch(err => console.log(err));
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		return (
			<Container className="reg">
				<h4>REQUEST THIS PROPERTY</h4>
				<form>
					<div className="input-field">
						<input
							id="name"
							type="text"
							className="validate"
							value={this.state.firstName}
							onChange={this.onChange}
							name="firstName"
						/>
						<label htmlFor="name">First Name</label>
					</div>

					<div className="input-field">
						<input
							id="name"
							type="text"
							className="validate"
							value={this.state.lastName}
							onChange={this.onChange}
							name="lastName"
						/>
						<label htmlFor="name">Last Name</label>
					</div>

					<div className="input-field">
						<input
							id="email"
							type="email"
							className="validate"
							value={this.state.email}
							onChange={this.onChange}
							name="email"
						/>
						<label htmlFor="email">Email</label>
					</div>

					<div className="input-field">
						<input
							id="phone"
							min="0"
							type="number"
							className="validate"
							value={this.state.number}
							onChange={this.onChange}
							name="number"
						/>
						<label htmlFor="phone">Phone Number</label>
					</div>
					<div className="col s12">
						<p>Trust House agents will contact you.</p>
					</div>
					<div className="col s12 right ">
						<button type="submit" className="btn card-btn" onClick={this.submit}>
							SUBMIT
						</button>
					</div>
				</form>
			</Container>
		);
	}
}
