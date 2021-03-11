import React, { Component } from "react";
import { Row,Col,Container } from "react-materialize";
import SideListHolder from "../side-list/SideListHolder";
import ListingUnits from "../units/ListingUnits";

// import Test2 from '../units/Test2'
// import Test3 from '../units/Test3'

export default class Marketing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false
    };
  }
  render() {
    return (
      <div>
        {/* <Test3/> */}

        {/* <Header /> */}
        {/* <Categories filterdata={this.filterdata} /> */}

        {/* <hr/> */}
        <div className="my-padd ">
          <Row className="flex-container">
            <SideListHolder title="Most Viewed" />
            <Col l={9} m={8} s={12} className="flex-item">
              <Container>
                <ListingUnits />
              </Container>
              {/* <UnitPagination /> */}
            </Col>{" "}
          </Row>
        </div>
      </div>
    );
  }
}
