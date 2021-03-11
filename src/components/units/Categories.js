import React, { Component } from "react";
import { Col, Row, Button } from "react-materialize";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "react-input-range/lib/js/index.js";
import { Transition, animated } from "react-spring/renderprops";
import axios from "axios";
export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.show = this.show.bind(this);
    this.state = {
      loading: true,
      error: false,
      sort: "",
      value: 2000000,
      valuee: 30,
      value2: 5000000,
      value3: 7000000,
      value4: {
        min: 60000,
        max: 9000000
      },
      value5: {
        min: 45,
        max: 250
      },
      title: "",
      category: [],
      types: [],
      location: [],
      city: [],
      period: [],
      developer: [],
      minrooms: "",
      maxrooms: "",
      bath: "",
      payment: "buy",
      price: [],
      area: [],
      tounits: false,
      hidden: false,
      minPrice:'',
      maxPrice:''
    };
  }


  
  show(e) {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  }
 
  componentWillMount() {
    axios.get("http://localhost:5000/api/cities/").then(res => {
      this.setState({
        city: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/types/").then(res => {
      this.setState({
        types: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/categories/").then(res => {
      this.setState({
        category: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/periods/").then(res => {
      this.setState({
        period: res.data.data
      });
    });


    axios.get("http://localhost:5000/api/locations/").then(res => {
      this.setState({
        location: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/developers/").then(res => {
      this.setState({
        developer: res.data.data
      });
    });
  }



  searchFilter = e =>
  {
    e.preventDefault();
    this.props.filterdata();
  }

  submit(e) {
    e.preventDefault();

    axios.post("http://localhost:5000/api/units/filter",{location:this.state.location.name})
    .then(res => {
      this.setState({
        location:this.state.location
      });
   
    })
    }



  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // if (this.state.tounits === true) {
    //   return <Redirect to="/marketing/units" />;
    // }
    return (
      <div className="marketingheader">
        <div className="categories-header">
          <form>
            <Row>
              <Col s={12} m={8}>
                <Row>
                  <Col s={12}>
                    <div className="header-search">
                      <div className="input-field ">
                        <input
                          id="search"
                          name="title"
                          type="search"
                          onChange={this.onChange}
                        />
                        <label className="label-icon " htmlFor="search">
                          <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                      </div>
                    </div>
                  </Col>

                  <div className="header-dropdown">
                    <Col s={12} m={6}>
                      <div className="drop">
                      <select
                          className="browser-default"
                          value={this.state.category.value}
                          onChange={this.onChange}
                          name={this.state.category.name}
                        >
                          <option>Category</option>
                          {this.state.category.map(info => (
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
                          onChange={this.onChange}
                          name={this.state.types.name}
                        >
                          <option>Types</option>
                          {this.state.types.map(info => (
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
                          onChange={this.onChange}
                          name={this.state.location.name}
                        >
                          <option>Location</option>
                          {this.state.location.map(info => (
                            <option onClick={this.submit} value={info.name} key={info._id}>
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
                          onChange={this.onChange}
                          name={this.state.city.name}
                        >
                          <option>City</option>
                          {this.state.city.map(info => (
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
                      {show =>
                        show &&
                        (props => (
                          <animated.div style={props}>
                            <div className="overlay">
                              <Col s={12} m={6}>
                                <div className="drop">
                                <select
                                    className="browser-default"
                                    value={this.state.period.value}
                                    onChange={this.onChange}
                                    name={this.state.period.name}
                                  >
                                    <option>Period</option>
                                    {this.state.period.map(info => (
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
                                    value={this.state.developer.value}
                                    onChange={this.onChange}
                                    name={this.state.developer.name}
                                  >
                                    <option>Developer</option>
                                    {this.state.developer.map(info => (
                                      <option value={info.name} key={info._id}>
                                        {" "}
                                        {info.name}{" "}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </Col>
                              <Row>
                                <Col m={6} s={12}>
                                  <div className="rooms-drop">
                                    <div className="drop">
                                      <select
                                        className="browser-default"
                                        value={this.state.minrooms}
                                        onChange={this.submit}
                                        name="minrooms"
                                      >
                                        <option>Minimum Bedrooms</option>
                                        <option onClick={this.submit} value="1 Bedroom" defaultValue>
                                          1 Bedroom
                                        </option>
                                        <option onClick={this.submit} value="2 Bedroom">
                                          2 Bedroom
                                        </option>
                                        <option onClick={this.submit} value="3 Bedroom">
                                          3 Bedroom
                                        </option>
                                        <option value="4 Bedroom">
                                          4 Bedroom
                                        </option>
                                        <option value="5 Bedroom">
                                          5 Bedroom
                                        </option>
                                        <option value="6 Bedroom">
                                          6 Bedroom
                                        </option>
                                        <option value="7 Bedroom">
                                          7 Bedroom
                                        </option>
                                        <option value="8 Bedroom">
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
                                        value={this.state.maxrooms}
                                        onChange={this.onChange}
                                        name="maxrooms"
                                      >
                                        <option>Maximium Bedrooms</option>
                                        <option value="1 Bedroom">
                                          1 Bedroom
                                        </option>
                                        <option value="2 Bedroom" defaultValue>
                                          2 Bedroom
                                        </option>
                                        <option value="3 Bedroom">
                                          3 Bedroom
                                        </option>
                                        <option value="4 Bedroom">
                                          4 Bedroom
                                        </option>
                                        <option value="5 Bedroom">
                                          5 Bedroom
                                        </option>
                                        <option value="6 Bedroom">
                                          6 Bedroom
                                        </option>
                                        <option value="7 Bedroom">
                                          7 Bedroom
                                        </option>
                                        <option value="8 Bedroom">
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
                                        value={this.state.bath}
                                        onChange={this.onChange}
                                        name="bath"
                                      >
                                        <option>Bathrooms</option>
                                        <option
                                          value="1 Bathrooms"
                                          defaultValue
                                        >
                                          1 Bathroom
                                        </option>
                                        <option value="2 Bathrooms">
                                          2 Bathroom
                                        </option>
                                        <option value="3 Bathrooms">
                                          3 Bathroom
                                        </option>
                                        <option value="4 Bathrooms">
                                          4 Bathroom
                                        </option>
                                        <option value="5 Bathrooms">
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
                                        value={this.state.kitchen}
                                        onChange={this.onChange}
                                        name="kitchen"
                                      >
                                        <option>Kitchens</option>
                                        <option value="1 kitchen" defaultValue>
                                          1 Kitchen
                                        </option>
                                        <option value="2 kitchen">
                                          2 Kitchens
                                        </option>
                                        <option value="3 kitchen">
                                          3 Kitchens
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </animated.div>
                        ))
                      }
                    </Transition>
                  </div>

                  {/* */}
                  <Col>
                    {" "}
                    <Button className="advanced" onClick={this.show}>
                      Advanced Search
                    </Button>
                  </Col>
                  <Col s={12}>
                    <div className="header-check">
                      <span>
                        <input
                          type="radio"
                          id="check1"
                          value="rent"
                          checked={this.state.payment === "rent"}
                          onChange={this.onChange}
                          name="payment"
                        />
                        <label htmlFor="check1">Rent</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          id="check2"
                          value="buy"
                          checked={this.state.payment === "buy"}
                          onChange={this.onChange}
                          name="payment"
                        />
                        <label htmlFor="check2"> Buy</label>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col s={10} m={3}>
                <div className="ranges">
                  <div className="price-range">
                    <h6>Price range</h6>
                    <InputRange
                      maxValue={20000000}
                      minValue={30000}
                      formatLabel={value => `${value} LE`}
                      value={this.state.value4}
                      onChange={value =>
                        this.setState({ value4: value, price: value })
                      }
                    />
                  </div>

                  <div className="area-range">
                    <h6>Area range</h6>

                    <InputRange
                      maxValue={900}
                      minValue={50}
                      formatLabel={valuee => `${valuee} m`}
                      value={this.state.value5}
                      onChange={valuee =>
                        this.setState({ value5: valuee, area: valuee })
                      }
                      name="area"
                    />
                  </div>

                  <div className="right">
                    <button
                      className="ctrl-standard is-reversed typ-subhed fx-sliderIn"
                      onClick={this.submit}
                    >
                      {" "}
                      Search
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}
