import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {  Route,HashRouter } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import UnitFullDetails from './components/pages/UnitFullDetails';
import Home from '../src/components/pages/Home';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import ListingUnits from './components/units/ListingUnits';
import About from './components/pages/About';
import Dashboard from './components/admin/Dashboard';
import AdminLogin from './components/admin/AdminLogin';

import { changeLang } from './globalState/actions/langActions';

import store from './globalState/store';



if (localStorage.chosenLanguage) {
	store.dispatch(changeLang(localStorage.chosenLanguage));
	console.log('heree');
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	render() {
		return (
			<HashRouter basename="/">
				<div className="App">
					<Nav />
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/about" component={About} />
					<Route exact path="/marketing/units" component={ListingUnits} />
					<Route exact path="/full-details/:id" component={UnitFullDetails} />
					<Route exact path="/admin/login" component={AdminLogin} />
					<Route exact path="/admin/create" component={Admin} />
					<Route path="/admin/dashboard" component={Dashboard} />
					<Footer />
				</div>
			</HashRouter>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn,
	search: state.search.search,
});

export default connect(
	mapStateToProps,
	{ changeLang }
)(App);
