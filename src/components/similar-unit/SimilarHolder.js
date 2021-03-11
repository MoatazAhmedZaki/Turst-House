import React, { Component } from "react";
import SimilarList from "./SimilarList";
import { Col, SideNav, Button } from "react-materialize";
export default class SimilarHolder extends Component {
  render() {
    return (
      <Col l={3} m={4} s={12} className="flex-item">
        <SideNav
          className=" mysi"
          title={"Similar Units"}
          trigger={
            <div className="center">
              <Button className="sidebar-button hide-on-med-and-up">
                {this.props.title}
              </Button>
            </div>
          }
          options={{ closeOnClick: true, edge: "right" }}
        >
          <div className="Most-View">
            <SimilarList title={this.props.title} info={this.props.info} />
          </div>
        </SideNav>

        <div className="Most-View hide-on-small-only">
          <SimilarList
            itemsNum={this.props.itemsNum}
            updateUnit={this.props.updateUnit}
            title={this.props.title}
            info={this.props.info}
          />
        </div>
      </Col>
    );
  }
}
