import React, { Component } from "react";
import { Link } from "react-router-dom";

//materialize
import { Col } from "react-materialize";
export default class OfficeSpace extends Component {
  render() {
    return (
      <div className="office-space" style={{ marginBottom: "20px" }}>
        <Col s={4}>
          {/* <Link to="/marketing/units">
            <button className="officebtn">
              <p>Choose your Office Space</p>
            </button>{" "}
          </Link> */}
          <Link  to="/marketing/units">
            <div className="content">
              <h4>CHOOSE YOUR OFFICE SPACE</h4>
            </div>
          </Link>
        </Col>

        {/* <div className="uk">
          <Link to="/projects">
            <div className="content">
              <h1>British Heathrow Airport Project, Elevator 19 Units</h1>
            </div>
          </Link>
        </div> */}
      </div>
    );
  }
}
