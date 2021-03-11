import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-materialize";
export default class Advertising extends Component {
  render() {
    return (
      <div>
        <div className="adv " style={{ marginBottom: "20px",marginTop:"20px" }}>
          <Col s={4}>
            <Link to="/marketing/units">
              <div className="content">
                <h4>LEARN MORE</h4>
              </div>
            </Link>
          </Col>
        </div>
      </div>
    );
  }
}
