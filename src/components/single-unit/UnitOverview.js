import React, { Component } from "react";
import { Row, Col, Container } from "react-materialize";
import PropTypes from "prop-types";

export default class UnitOverview extends Component {
  render() {
    

    return (
      <div className="unit-overview ">
        <h6 className="center">PROPERTY OVERVIEW</h6>
        <div className="key-info">
          <p className="info-title">Key Info</p>

          <div className="unit-details center-align">
            <Container>
              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Price</p>
                </Col>

                <Col l={3} m={4} s={6}>
                  <p className="">150,000,00 LE</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Type</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">Vila</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Category</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">Commercial</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Location</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">Maadi</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">City</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">Egypt</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Compound</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">Celia</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Developer</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">Degla</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Area</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">120 M</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Bathrooms</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">2</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Bedrooms</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">3</p>
                </Col>
              </Row>

              <Row>
                <Col l={3} m={4} s={6}>
                  <p className="detail-type">Kitchens</p>
                </Col>
                <Col l={3} m={4} s={6}>
                  <p className="">1</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="divider" />

        <div>
          <div className="key-info">
            <p className="info-title">Additional Features</p>
            <Container>
              <div className=" card-body-right ">
                <p name="Parking">
                  <i className="fas fa-parking" /> Parking
                </p>
                <p name="Green Areas">
                  <i className="fas fa-leaf" /> Green Areas
                </p>
                <p name="Security">
                  <i className="fas fa-lock" /> Security
                </p>
                <p name="Direct Lift Accsess">
                  <i className="fas fa-users" /> Direct Lift Accsess
                </p>
                <p name="Free WiFi">
                  <i class="fas fa-wifi" /> Free Wi-Fi
                </p>
                <p name="Hot Drinks">
                  <i class="fas fa-mug-hot" /> Hot Drinks
                </p>
              </div>
            </Container>
          </div>
        </div>

        <div>
          <div className="divider" />
          <div className="key-info">
            <p className="info-title">Property Description</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
        </div>

        <div className="divider" />
      </div>
    );
  }
}

UnitOverview.propTypes = {
  info: PropTypes.object.isRequired,
};
