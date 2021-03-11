import React, { Component } from "react";
import { Col, Row, Button } from "react-materialize";
import Container from "react-materialize/lib/Container";
import UnitItem from "./UnitItem";
import Preloading from "./Preloading";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "react-input-range/lib/js/index.js";
import SideListHolder from "../side-list/SideListHolder";
import { Transition, animated } from "react-spring/renderprops";
import {  withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchEnter } from "../../globalState/actions/searchActions";
import { removeSearch } from "../../globalState/actions/searchActions";

import PropTypes from "prop-types";


class ListingUnits extends Component {
  constructor() {
    super();
    this.state = {
      priceValue: { min: 10000, max: 9000000 },
      areaValue: { min: 50, max: 250 },
      units: [
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 1",
          mainImage:
            "https://housesolutionegypt.com/images/600xblogs/blog-1553271229.png",
          _id: "1",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 2",
          mainImage:
            "https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses3-e1586934335439.jpg",
          _id: "2",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 3",
          mainImage:
            "https://st.depositphotos.com/1658611/2932/i/600/depositphotos_29329143-stock-photo-street-of-residential-houses.jpg",
          _id: "2",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 4",
          mainImage:
            "http://zifax.com.ng/wp-content/uploads/2017/07/3bedroom.jpeg",
          _id: "4",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 5",
          mainImage:
            "https://realestate.eg/storage/listings/8pvGuR1RcZ3cpeiv_thumb.jpg",
          _id: "5",
        },
      ],
      loading: false,
      error: false,
      msg: false,
      text: "",
      title: "",
      category: [],
      types: [],
      location: [],
      city: [],
      period: [],
      developer: [],
      bedrooms: [],
      bathrooms: [],
      hidden: false,
      compound: [],
      isForSale: true,
      selectedSale: "buy",
      kitchen: [],
      noOption: "",
    };
  }

  show = (e) => {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  };

  

  

  submitfilter = (e) => {
    e.preventDefault();
  };

  submitsearch = (e) => {
    e.preventDefault();
  };

  onSearchText = (e) => {
    this.setState({ [this.state.text]: e.target.value });
  };

  onSearchType = (e) => {
    e.preventDefault();
  };

  onSearchSale = (e) => {
    e.preventDefault();

  };

  onSearchDeveloper = (e) => {
    e.preventDefault();

  };

  onSearchLocation = (e) => {
    e.preventDefault();

  };
  onSearchCategory = (e) => {
    e.preventDefault();

  };

  onSearchCity = (e) => {
    e.preventDefault();

  };

  onSearchBath = (e) => {
    e.preventDefault();

  };
  onSearchBed = (e) => {
    e.preventDefault();

  };

  onSearchKitchen = (e) => {
    e.preventDefault();

  };
  onSearchCompound = (e) => {
    e.preventDefault();

  };

  onChange = (e) => {
    e.preventDefault();

  };

  deleteItem = (id) => {
    this.setState((state) => {
      return { units: state.units.filter((unit) => id !== unit._id) };
    });
  };

  render() {
    if (this.state.error)
      return <h3> Error while getting units or no units</h3>;
    return this.state.loading ? (
      <div className="card-loading">
        <Preloading />
      </div>
    ) : (
      <div>
        <div className="my-padd ">
          <Row className="flex-container">
            <SideListHolder title="Most Viewed" />



            <Col l={9} m={8} s={12} className="flex-item">
              <Container>
                <div className="marketingheader">
                  <div className="categories-header">
                    <form>
                      <Row>
                        <Col s={12} m={10}>
                          <Row>
                            <Col s={12}>
                              <Row>
                                <Col s={9}>
                                  <div className="header-search">
                                    <div className="input-field ">
                                      <input
                                        id="search"
                                        name="title"
                                        type="search"
                                        onChange={this.onSearchText}
                                      />
                                      <label
                                        className="label-icon "
                                        htmlFor="search"
                                      >
                                        <i className="material-icons">search</i>
                                      </label>
                                    </div>
                                  </div>
                                </Col>

                                <Col s={3}>
                                  <div className="marketingsearchicon">
                                    <button
                                      className="ctrl-standard is-reversed typ-subhed fx-sliderIn"
                                      onClick={this.submitsearch}
                                    >
                                      <i class="fas fa-search" />
                                    </button>
                                  </div>
                                </Col>
                              </Row>
                            </Col>

                            <div className="header-dropdown">
                              <Col s={12} m={6}>
                                <div className="drop">
                                  <select
                                    className="browser-default"
                                    value={this.state.category.value}
                                    onChange={this.onSearchCategory}
                                    name={this.state.category.name}
                                  >
                                    <option selected disabled>
                                      Category
                                    </option>
                                    <option value={this.state.noOption}>
                                      No Option
                                    </option>
                                    {this.state.category.map((info) => (
                                      <option value={info.name} key={info._id}>
                                        {" "}
                                        {info.name}{" "}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </Col>

                              <Col s={12} m={6}>
                                <div className="drop">
                                  <select
                                    className="browser-default"
                                    value={this.state.types.value}
                                    onChange={this.onSearchType}
                                    name={this.state.types.name}
                                  >
                                    <option selected disabled>
                                      Type
                                    </option>
                                    {this.state.types.map((info) => (
                                      <option value={info.name} key={info._id}>
                                        {" "}
                                        {info.name}{" "}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </Col>

                              <Col s={12} m={6}>
                                <div className="drop">
                                  <select
                                    className="browser-default"
                                    value={this.state.location.value}
                                    onChange={this.onSearchLocation}
                                    name={this.state.location.name}
                                  >
                                    <option selected disabled>
                                      Location
                                    </option>
                                    <option value={this.state.noOption}>
                                      No Option
                                    </option>

                                    {this.state.location.map((info) => (
                                      <option value={info.name} key={info._id}>
                                        {" "}
                                        {info.name}{" "}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </Col>

                              <Col s={12} m={6}>
                                <div className="drop">
                                  <select
                                    className="browser-default"
                                    value={this.state.city.value}
                                    onChange={this.onSearchCity}
                                    name={this.state.city.name}
                                  >
                                    <option selected disabled>
                                      City
                                    </option>
                                    {this.state.city.map((info) => (
                                      <option value={info.name} key={info._id}>
                                        {" "}
                                        {info.name}{" "}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </Col>
                              <Transition
                                native
                                items={this.state.hidden}
                                from={{ opacity: 0 }}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0 }}
                              >
                                {(show) =>
                                  show &&
                                  ((props) => (
                                    <animated.div style={props}>
                                      <div className="overlay">
                                        <Col s={12} m={6}>
                                          <div className="drop">
                                            <select
                                              className="browser-default"
                                              value={this.state.compound.value}
                                              onChange={this.onSearchCompound}
                                              name={this.state.compound.name}
                                            >
                                              <option selected disabled>
                                                Compound
                                              </option>
                                              {this.state.compound.map(
                                                (info) => (
                                                  <option
                                                    value={info.name}
                                                    key={info._id}
                                                  >
                                                    {" "}
                                                    {info.name}{" "}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </Col>

                                        <Col s={12} m={6}>
                                          <div className="drop">
                                            <select
                                              className="browser-default"
                                              value={this.state.developer.value}
                                              onChange={this.onSearchDeveloper}
                                              name={this.state.developer.name}
                                            >
                                              <option selected disabled>
                                                Developer
                                              </option>

                                              {this.state.developer.map(
                                                (info) => (
                                                  <option
                                                    value={info.name}
                                                    key={info._id}
                                                  >
                                                    {" "}
                                                    {info.name}{" "}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </Col>

                                        <Col m={6} s={12}>
                                          <div className="rooms-drop">
                                            <div className="drop">
                                              <select
                                                className="browser-default"
                                                onChange={this.onSearchBed}
                                                name="bedrooms"
                                              >
                                                <option selected disabled>
                                                  {" "}
                                                  Bedrooms
                                                </option>
                                                <option value="1">
                                                  1 Bedroom
                                                </option>
                                                <option value="2">
                                                  2 Bedroom
                                                </option>
                                                <option value="3">
                                                  3 Bedroom
                                                </option>
                                                <option value="4">
                                                  4 Bedroom
                                                </option>
                                                <option value="5">
                                                  5 Bedroom
                                                </option>
                                                <option value="6">
                                                  6 Bedroom
                                                </option>
                                                <option value="7">
                                                  7 Bedroom
                                                </option>
                                                <option value="8">
                                                  8 Bedroom
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </Col>
                                        <Col m={6} s={12}>
                                          <div className="rooms-drop">
                                            <div className="drop">
                                              <select
                                                className="browser-default"
                                                onChange={this.onSearchBath}
                                                name="bath"
                                              >
                                                <option selected disabled>
                                                  Bathrooms
                                                </option>
                                                <option value="1" defaultValue>
                                                  1 Bathroom
                                                </option>
                                                <option value="2">
                                                  2 Bathroom
                                                </option>
                                                <option value="3">
                                                  3 Bathroom
                                                </option>
                                                <option value="4">
                                                  4 Bathroom
                                                </option>
                                                <option value="5">
                                                  5 Bathroom
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col m={6} s={12}>
                                          <div className="rooms-drop">
                                            <div className="drop">
                                              <select
                                                className="browser-default"
                                                onChange={this.onSearchKitchen}
                                                name="kitchen"
                                              >
                                                <option selected disabled>
                                                  Kitchens
                                                </option>
                                                <option value="1" defaultValue>
                                                  1 Kitchen
                                                </option>
                                                <option value="2">
                                                  2 Kitchens
                                                </option>
                                                <option value="3">
                                                  3 Kitchens
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col m={6} s={12} />
                                      </div>
                                    </animated.div>
                                  ))
                                }
                              </Transition>
                            </div>

                            <Col>
                              <Button className="advanced" onClick={this.show}>
                                Advanced Search
                              </Button>
                            </Col>
                            <Col s={12}>
                              <div className="header-check">
                                <input
                                  type="radio"
                                  value="rent"
                                  name="group1"
                                  id="rent"
                                  checked={this.state.selectedSale === "rent"}
                                  onChange={this.onSearchSale}
                                />

                                <label htmlFor="rent">Rent</label>
                                <span>
                                  <input
                                    type="radio"
                                    value="buy"
                                    name="group1"
                                    id="buy"
                                    checked={this.state.selectedSale === "buy"}
                                    onChange={this.onSearchSale}
                                  />

                                  <label htmlFor="buy"> Buy</label>
                                </span>
                              </div>
                            </Col>

                            <div className="ranges">
                              <Col s={12} m={5}>
                                <div className="price-range">
                                  <h6>Price range</h6>
                                  <InputRange
                                    maxValue={20000000}
                                    minValue={5000}
                                    formatLabel={(chosenprice) =>
                                      `${chosenprice} LE`
                                    }
                                    value={this.state.priceValue}
                                    onChange={(chosenprice) =>
                                      this.setState({ priceValue: chosenprice })
                                    }
                                  />
                                </div>
                              </Col>
                              <Col m={2} />
                              <Col m={5} s={12}>
                                <div className="area-range">
                                  <h6>Area range</h6>

                                  <InputRange
                                    maxValue={900}
                                    minValue={20}
                                    formatLabel={(chosenArea) =>
                                      `${chosenArea} m`
                                    }
                                    value={this.state.areaValue}
                                    onChange={(chosenArea) =>
                                      this.setState({ areaValue: chosenArea })
                                    }
                                  />
                                </div>

                                <div className="right">
                                  <button
                                    className="ctrl-standard is-reversed typ-subhed fx-sliderIn"
                                    onClick={this.submitfilter}
                                  >
                                    {" "}
                                    Search
                                  </button>
                                </div>
                              </Col>{" "}
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>

                <div className="sortby">
                  <Container>
                    <Row>
                      <Col l={3} m={12} className="right">
                        <select
                          className="browser-default"
                          value={this.state.sort}
                          onChange={this.onChange}
                          name="sort"
                        >
                          <option value="" disabled>
                            Sort By
                          </option>
                          <option
                            value="priceHigh"
                            defaultValue
                            onClick={this.onChange}
                          >
                            PRICE (High-Low)
                          </option>
                          <option value="priceLow" onClick={this.onChange}>
                            {" "}
                            PRICE (Low-High)
                          </option>
                          <option value="areaHigh" onClick={this.onChange}>
                            {" "}
                            AREA (High-Low)
                          </option>
                          <option value="areaLow">AREA (Low-High)</option>
                        </select>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {this.state.msg ? (
                  <div
                    style={{
                      color: "gray",
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <h2>Results not Found</h2>
                  </div>
                ) : null}
                {this.state.units.map((item) => (
                  <UnitItem
                    cards={item}
                    key={item._id}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </Container>{" "}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

ListingUnits.propTypes = {
  search: PropTypes.string.isRequired,
  searchEnter: PropTypes.func.isRequired,
  removeSearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search.search,
});

export default connect(mapStateToProps, { searchEnter, removeSearch })(
  withRouter(ListingUnits)
);
