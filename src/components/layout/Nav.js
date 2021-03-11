import React, { Component } from "react";
import { Navbar, Button } from "react-materialize";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import { searchEnter } from "../../globalState/actions/searchActions";
import { removeSearch } from "../../globalState/actions/searchActions";
import { logout } from "../../globalState/actions/authActions";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import axios from "axios";

const text = require("../localization/lan.json");

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tounits: false,
      text: text.en,
      hidden: true,
      searchText: ""
    };
  }
  checklang = () => {
    if (this.props.language === "en") {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  onLogout = e => {
    e.preventDefault();
    this.props.logout(this.props.history);
    this.setState({ hidden: false });

    setTimeout(() => {
      this.setState({ hidden: true });
    }, 3000);
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === "ar") {
        // { console.log(text.ar.title)}
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }
 
  onSearchText = e => {
  
    this.setState({ searchText: e.target.value });

    if (this.props.location.pathname === "/marketing/units") {
    }

  };

  
  onChange = e => {
    return this.changeLanguage(e);
  };
  changeLanguage = e => {
    e.preventDefault();
    // Get the language that the user entered
    this.props.changeLang(e.target.id);
  };

  gotToMarketingWithoutSearch = e => {
    e.preventDefault();
    this.setState({ searchText: "" });
    this.props.removeSearch();
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  
  // componentWillReceiveProps() {
  //   console.log(this.props.language)
  // }
  goToMarketingWithSearch = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.searchEnter(this.state.searchText);
  };

  componentDidMount() {
    this.checklang()
    axios.get("http://localhost:5000/api/categories/").then(res => {
      this.setState({
        category: res.data.data
      });
    });
  }

  

  render() {
    
    if (this.state.tounits === true) {
      return <Redirect to="/marketing/units" />;
    }

    return (
      <div className="navbar">
     
        <Navbar
          href="/ "
          brand={
            <img
              alt="ads"
              className="responsive-img"
              src={require("../../img/white-logo.png")}
            />
          }
        >
          {/* <Link to="/login" >Admin</Link>
          {
                            this.props.isAuthenticated && <Link to="/admin" ></Link>
                        } */}
          <Link to="/">{this.state.text.navbarhome}</Link>
          <Link to="/contact">{this.state.text.navbarcontact}</Link>
          <Link to="/about">{this.state.text.navbarabout}</Link>

          <Button 
            onClick={this.gotToMarketingWithoutSearch}
            className="mydropdown markeitng navmarketingbtn"
          >
            <Link to="/marketing/units"> {this.state.text.navbarmarket}</Link>
            <div className="mydropdown-content" />
          </Button>

          {this.props.isLoggedIn && (
            <Link to="/admin/dashboard">{this.state.text.navbardashboard}</Link>
          )}
          {this.props.isLoggedIn && (
            <Link onClick={this.onLogout}>{this.state.text.navbarlogout}</Link>
          )}
          <div hidden={this.state.hidden} className="modal-dialogg ">
            <p id="snackbarr">Logged Out Successfully</p>
          </div>

          <a className="mydropdown markeitng " >
            <i className="material-icons">language expand_more</i>
            <div className="mydropdown-content">
              <button id="en" onClick={this.onChange} style={{backgroundColor:"black" , color:"white"}}>
                EN
              </button>
              <button id="ar" onClick={this.onChange}  style={{backgroundColor:"black" , color:"white"}}>
                AR
              </button>
            </div>
          </a>
          <Button className="navmarketingbtn" onClick={this.goToMarketingWithSearch}>
            <Link to="/marketing/units">Search</Link>
          </Button>
          <form id="demo-2">
            <input
              type="search"
              placeholder="Search"
              ref="ser"
              value={this.state.searchText}
              onChange={this.onSearchText}
            />
          </form>
        </Navbar>
      </div>
    );
  }
}

Nav.propTypes = {
  changeLang: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
  searchEnter: PropTypes.func.isRequired,
  removeSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language,
  isLoggedIn: state.auth.isLoggedIn,
  search: state.search.search
});

export default connect(
  mapStateToProps,
  { changeLang, logout, searchEnter, removeSearch }
)(withRouter(Nav));
