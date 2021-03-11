import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Col ,Row } from 'react-materialize';
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";

const text = require("../localization/lan.json");


 class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: text.en
    };
  }
  checklang = () => {
    if (this.props.language === "en") {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

componentDidMount() {
  this.checklang()
}

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
    if (this.props.language==="ar")
            // { console.log(text.ar.title)}
    {        this.setState({ text: text.ar });}
   
          else{  this.setState({ text:text.en })}
      }}
  render() {
    return (
      <div className="page-footer pt-1">
        <div className="w-75 m-auto">
          <Row className=" contacts">
            <Col className="myborder mt-6 center-align"  l={6 } m={12} s={12}>
              {/* <div className="pt-5"> */}
              
              <h2> Pages</h2>

                <ul className="list-unstyled ">
                  <Row>
              <Col s={12}>
                  <li style={{fontSize:"19px" , marginTop:"15px "}}><Link to="/" >{this.state.text.navbarhome} </Link></li>
                </Col>  
                <Col  s={12}> 
                    <li  style={{fontSize:"20px", marginTop:"15px "}}> <Link  to="/contact">{this.state.text.navbarcontact}</Link></li>
                  </Col>  
                  <Col  s={12}>  
                    <li  style={{fontSize:"20px" , marginTop:"15px "}}><Link  to="/about">{this.state.text.navbarabout}</Link></li>
                  </Col>  
                  <Col  s={12}>  
                    <li  style={{fontSize:"20px" , marginTop:"15px "}}><Link to="/marketing/units" > {this.state.text.navbarmarket}</Link></li>
                  </Col>  
                  </Row>
                </ul>
              {/* </div> */}
            </Col>

            <Col l={6 } m={12} s={12} className=" mt-6 center-align" >
              {/* <div className="pt-5"> */}
                <h2> Contacts</h2>
                
                <Col style={{fontSize:'15px'}}  s={12}> <p> <i className="fas fa-phone px-1" />
                    +0224587455</p></Col>
                    <Col style={{fontSize:'15px'}}  s={12}><p><i className="fas fa-at px-1" /> 
                    info@TrustHouse.com</p></Col>
                    <Col style={{fontSize:'15px'}}   m={12} s={12}> <p><i className="fab fa-facebook-square  px-1"></i> Facebook@TrustHouse</p></Col>
                    <Col style={{fontSize:'15px'}}  s={12}>  <p> <i className="fab fa-instagram  px-1"></i> Instagram@TrustHouse</p></Col>
                {/* <ul className="list-unstyled">
                  <li className="py-3">
                    <i className="fas fa-phone px-2" />
                    +0224587455
                  </li>
                  <li className="py-3"> <i class="fab fa-facebook-square"></i> Facebook@TrustHouse</li>
                <li className="py-3"> <i class="fab fa-instagram"></i> Instagram@TrustHouse</li>
                  

                  <li className="py-3">
                    <i class="fas fa-at px-2" />
                    etc@etc.com
                  </li>
                </ul> */}
              {/* </div> */}
            </Col>
       
          </Row>
        </div>

        <div className="footer-copyright text-center py-2">
          Copyright© TrustHouse {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(
  mapStateToProps,
  { changeLang }
)(Footer);
