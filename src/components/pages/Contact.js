import React, { Component } from "react";
import { Row, Container, Col } from "react-materialize";
// import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
      hidden: true
    };
  }

  submit(e) {
    e.preventDefault();

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="contact-page">
        <div className="contact-header ">
          <h4 className="center-align">WE ARE READY TO ASSIST YOU</h4>
        </div>
        <Container>
          <Row className="center">
            <Col s={12} m={4} className="contact-title">
              <Col s={12} className="">
                <h5>Call Us</h5>
              </Col>

              <Col s={12}>
                <p>
                <i className="fas fa-phone fa-x" style={{fontSize: "25px",padding:"5px"}} />
                  {" "}
                 
                  +0224587455
                </p>
                <p>
                <i className="fas fa-mobile fa-x" style={{fontSize: "25px",padding:"10px"}} />
                  {" "}
                 
                  +0124587455
                </p>
               
              </Col>
            </Col>

            <Col s={12} m={4}>
              <Col s={12} >
                <h5>Email Us</h5>
              </Col>

              <Col s={12}>
                <p>
                  {" "}
                  <i
                    className="fas fa-envelope fa-x"
                    style={{ padding: "10px", fontSize: "25px" }}
                  />
                  info@trusthouse.com
                </p>
              </Col>
            </Col>

            <Col s={12} m={4}  className="contactTitle2">
              <Col s={12}>
                <h5>Follow Us</h5>
              </Col>

              <Col s={12}>
                <p>
                  {" "}
                  <i
                    class="fab fa-facebook-square"
                    style={{ fontSize: "25px", padding: "0px 10px", }}
                  />{" "}
                <span style={{ fontSize: "22px"}}> @TrustHouse</span>
                </p>
                <p>
                  {" "}
                  <i
                    class="fab fa-instagram"
                    style={{ fontSize: "25px", padding: "0px 10px", }}
                  />{" "}
                  <span style={{ fontSize: "22px"}}> @TrustHouse</span>
                </p>
              </Col>
            </Col>
          </Row>
        </Container>

        <div className="contact-form">
          <Container className="form-container">
            <div className="form-title center">
              <p>If You Got Any Questions,</p>
              <p>Please Don't Hesitate To Send Us A Message</p>
            </div>

            <form>
              <Row>
                <Col s={12}>
                  <Row>
                    <Col s={6}>
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
                    </Col>

                    <Col s={6}>
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
                    </Col>
                  </Row>
                </Col>

                <Col s={12}>
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
                </Col>

                <Col s={12}>
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
                </Col>

                <Col s={12}>
                  <div className="input-field">
                    <textarea
                      id="message"
                      type="message"
                      className="validate"
                      placeholder="Your Message"
                      value={this.state.message}
                      onChange={this.onChange}
                      name="message"
                    />
                  </div>
                </Col>

                <Col s={12} className="center">
                  <div hidden={this.state.hidden} className="modal-dialogg ">
                    <p id="snackbarr">Sent Successfully</p>
                  </div>
                  {/* <Modal trigger={ <button
                    type="submit"
                    className="btn card-btn"
                    onClick={this.submit}
                  >
                    Submit
                  </button>}>
                    <p id="snackbar">Sent Successfully</p>
                  </Modal> */}

                  <button
                    type="submit"
                    className="btn card-btn"
                    onClick={this.submit}
                  >
                  SUBMIT
                  </button>
                </Col>
              </Row>
            </form>
          </Container>
        </div>

        <div className="contact-map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.394021311696!2d31.267228964817466!3d29.96810433191009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583873b883c1ad%3A0x68eaa568539d4c2c!2sMaadi+as+Sarayat+Al+Gharbeyah%2C+Maadi%2C+Cairo+Governorate!5e0!3m2!1sen!2seg!4v1560778312298!5m2!1sen!2seg" width="600" height="450" frameborder="0"allowfullscreen></iframe>
        </div>

        <div className="contact-location center">
          <p>
            <i className="fas fa-map-marker" /> Newcairo, ekhnaton 21 street 9,
            Cairo, Egypt
          </p>
        </div> 
      </div>
    );
  }
}
