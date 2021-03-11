import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-materialize";
import { Transition, animated } from "react-spring/renderprops";
let editedcategory;
let editedtype;
let editedcity;
let editedcountry;
let editedlocation;
let editedcompound;
let editeddeveloper;
let editedfeature;
export default class AddDataSeparately extends Component {
  constructor() {
    super();
    this.state = {
      categoryarray: [],
      cityarray: [],
      typearray: [],
      countryarray: [],
      locationarray: [],
      developerarray: [],
      compoundarray: [],
      featuresarray: [],
      show: false,
      categorychanged: true,
      typechanged: true,
      developerchanged: true,
      locationchanged: true,
      citychanged: true,
      countrychanged: true,
      compoundchanged: true,
      featurechanged: true,
      addedcategory: "",
      addeddeveloper: "",
      addedlocation: "",
      addedcompound: "",
      addedfeature: "",
      addedtype: "",
      addedcity: "",
      addedcountry: ""
    };
  }
  openModaldedit = e => {
    this.setState({ [e.target.id]: true });
  };
  handleShow = () => {
    this.setState({ show: true });
    this.hideModal();
  };
  hide1 = e => {
    e.preventDefault();
    this.setState({ [e.target.id]: false });
  };
  editcategory = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedcategory = e.target.value;
  };
  edittype = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedtype = e.target.value;
  };
  editlocation = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedlocation = e.target.value;
  };
  editfeature = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedfeature = e.target.value;
  };
  editcompound = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedcompound = e.target.value;
  };
  editdeveloper = e => {
    this.setState({ [e.target.name]: e.target.value });
    editeddeveloper = e.target.value;
  };
  editcountry = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedcountry = e.target.value;
  };
  editcity = e => {
    this.setState({ [e.target.name]: e.target.value });
    editedcity = e.target.value;
  };
  componentDidMount() {
    console.log(this.props.location.pathname)
    console.log(this.props.location.pathname.substring(15))

    if (this.props.location.pathname.substring(15) === "category") {
      axios.get("http://localhost:5000/api/categories/").then(res => {
        this.setState({
          categoryarray: res.data.data
        });
        // this.state.categoryarray.map(info => {
        //   this.setState({ [info._id]: false });
        // });
      });
    } else if (this.props.location.pathname.substring(15) === "city") {
      axios.get("http://localhost:5000/api/cities/").then(res => {
        this.setState({
          cityarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "country") {
      axios.get("http://localhost:5000/api/countries/").then(res => {
        this.setState({
          countryarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "type") {
      axios.get("http://localhost:5000/api/types/").then(res => {
        this.setState({
          typearray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "location") {
      axios.get("http://localhost:5000/api/locations/").then(res => {
        this.setState({
          locationarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "developer") {
      axios.get("http://localhost:5000/api/developers/").then(res => {
        this.setState({
          developerarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "compound") {
      axios.get("http://localhost:5000/api/compounds/").then(res => {
        this.setState({
          compoundarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "feature") {
      axios.get("http://localhost:5000/api/features/").then(res => {
        this.setState({
          featuresarray: res.data.data
        });
      });
    } else {
      return null;
    }
  }
  componentWillUpdate() {
    if (this.props.location.pathname.substring(15) === "category") {
      axios.get("http://localhost:5000/api/categories/").then(res => {
        this.setState({
          categoryarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "city") {
      axios.get("http://localhost:5000/api/cities/").then(res => {
        this.setState({
          cityarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "country") {
      axios.get("http://localhost:5000/api/countries/").then(res => {
        this.setState({
          countryarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "type") {
      axios.get("http://localhost:5000/api/types/").then(res => {
        this.setState({
          typearray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "location") {
      axios.get("http://localhost:5000/api/locations/").then(res => {
        this.setState({
          locationarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "developer") {
      axios.get("http://localhost:5000/api/developers/").then(res => {
        this.setState({
          developerarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "compound") {
      axios.get("http://localhost:5000/api/compounds/").then(res => {
        this.setState({
          compoundarray: res.data.data
        });
      });
    } else if (this.props.location.pathname.substring(15) === "feature") {
      axios.get("http://localhost:5000/api/features/").then(res => {
        this.setState({
          featuresarray: res.data.data
        });
      });
    } else {
      return null;
    }
  }
  onWriteCategory = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedcategory = e.target.value;
  };
  onWriteCity = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedcity = e.target.value;
  };
  onWriteCountry = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedcountry = e.target.value;
  };
  onWriteLocation = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedlocation = e.target.value;
  };
  onWriteDeveloper = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addeddeveloper = e.target.value;
  };
  onWriteCompound = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedcompound = e.target.value;
  };
  onWriteFeature = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedfeature = e.target.value;
  };
  onWriteType = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.addedtype = e.target.value;
  };
  render() {
    return (
      <div className="masterdata">
        <div>
          {this.props.location.pathname.substring(15) === "category" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Category:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="category"
                        type="text"
                        className="validate"
                        value={this.state.addedcategory}
                        onChange={this.onWriteCategory}
                        name="category"
                        ref='cat'
                      />
                      <label htmlFor="category"> Category Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddCategory = e => {
                          this.state.categoryarray.find(
                            category => category.name === this.refs.cat.value
                          )
                            ? alert("This Category already exist")
                            : axios
                                .post("http://localhost:5000/api/categories", {
                                  name: this.state.addedcategory
                                })
                                .then(
                                  this.setState({
                                    addedcategory: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add Category
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>
              <hr />
              <h5 className="center">Existing Categories</h5>
            </Container>
          )}
          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.categoryarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="category"
                                      type="text"
                                      name="category"
                                      onChange={this.editcategory}
                                      className={` edit-input display-inline validate
                                    ${
                                      this.state.categorychanged
                                        ? "notchanged"
                                        : "changed"
                                    }`}
                                      defaultValue={info.name}
                                      id={info._id}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditcategory = e => {
                                            e.preventDefault();
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/categories/${
                                                  info._id
                                                }`,
                                                {
                                                  name:
                                                    this.state
                                                      .categorychanged === false
                                                      ? this.refs.category.value
                                                      : editedcategory
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Category Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>
                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletecategory = () => {
                              axios
                                .delete(
                                  `http://localhost:5000/api/categories/${
                                    info._id
                                  }`
                                )
                                .then(res => {
                                  alert("Category deleted successfully");
                                });
                            })
                          }
                        >
                          Delete
                        </button>
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>

        <div>
          {this.props.location.pathname.substring(15) === "developer" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Developer:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="developer"
                        type="text"
                        className="validate"
                        value={this.state.addeddeveloper}
                        onChange={this.onWriteDeveloper}
                        name="developer"
                        ref='dev'
                      />
                      <label htmlFor="developer"> Developer Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddDeveloper = e => {
                          this.state.developerarray.find(
                            developer => developer.name === this.refs.dev.value
                          )
                            ? alert("This Developer already exist")
                            : axios
                                .post("http://localhost:5000/api/developers", {
                                  name: this.state.addeddeveloper
                                })
                                .then(
                                  this.setState({
                                    addeddeveloper: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add Developer
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr /> <h5 className="center">Existing Developers</h5>
            </Container>
          )}
          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.developerarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="developer"
                                      type="text"
                                      name="developer"
                                      onChange={this.editdeveloper}
                                      className={` edit-input display-inline validate
               ${this.state.developerchanged ? "notchanged" : "changed"}`}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditdeveloper = e => {
                                            e.preventDefault();
                                            console.log(e.target.id);
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/developers/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editeddeveloper
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Developer Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletedeveloper = () => {
                              axios.delete(
                                `http://localhost:5000/api/developers/${
                                  info._id
                                }`
                              );
                              alert("Developer deleted successfully");
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>

        <div>
          {this.props.location.pathname.substring(15) === "compound" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Compound:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="compound"
                        type="text"
                        className="validate"
                        value={this.state.addedcompound}
                        onChange={this.onWriteCompound}
                        name="compound"
                        ref='comp'
                      />
                      <label htmlFor="compound"> Compound Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddCompound = e => {
                          this.state.compoundarray.find(
                            compound => compound.name === this.refs.comp.value
                          )
                            ? alert("This Compound already exist")
                            : axios
                                .post("http://localhost:5000/api/compounds", {
                                  name: this.state.addedcompound
                                })
                                .then(
                                  this.setState({
                                    addedcompound: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add Compound
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr /> <h5 className="center">Existing Compounds</h5>
            </Container>
          )}
          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.compoundarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="compound"
                                      type="text"
                                      name="compound"
                                      onChange={this.editcompound}
                                      className={` edit-input display-inline validate
               ${this.state.compoundchanged ? "notchanged" : "changed"}
              `}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditcompound = e => {
                                            e.preventDefault();
                                            console.log(e.target.id);
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/compounds/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editedcompound
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Compound Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletedcompound = () => {
                              axios.delete(
                                `http://localhost:5000/api/compounds/${
                                  info._id
                                }`
                              );
                              alert("Compound deleted successfully");
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>

        <div>
          {this.props.location.pathname.substring(15) === "location" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Location:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="location"
                        type="text"
                        className="validate"
                        value={this.state.addedlocation}
                        onChange={this.onWriteLocation}
                        name="developer"
                        ref='loc'
                      />
                      <label htmlFor="location"> Location Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddLocation = e => {
                          this.state.locationarray.find(
                            location => location.name === this.refs.loc.value
                          )
                            ? alert("This Location already exist")
                            : axios
                                .post("http://localhost:5000/api/locations", {
                                  name: this.state.addedlocation
                                })
                                .then(
                                  this.setState({
                                    addedlocation: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add Location
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr />
              <h5 className="center">Existing Locations</h5>
            </Container>
          )}

          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.locationarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="location"
                                      type="text"
                                      name="location"
                                      onChange={this.editlocation}
                                      className={` edit-input display-inline validate
               ${this.state.locationchanged ? "notchanged" : "changed"}
              `}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditlocation = e => {
                                            e.preventDefault();
                                            console.log(e.target.id);
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/locations/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editedlocation
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Location Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletedlocation = () => {
                              axios
                                .delete(
                                  `http://localhost:5000/api/locations/${
                                    info._id
                                  }`
                                )
                                .then(res => {
                                  alert("Location deleted successfully");
                                });
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>
        <div>
          {this.props.location.pathname.substring(15) === "type" && (
            <Container className="addsection">
              <Row>
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Type:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="type"
                        type="text"
                        className="validate"
                        value={this.state.addedtype}
                        onChange={this.onWriteType}
                        name="type"
                        ref='type'
                      />
                      <label htmlFor="type"> Type Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddType = e => {
                          this.state.typearray.find(
                            ty => ty.name === this.refs.type.value
                          )
                            ? alert("This Type already exist")
                            : axios
                                .post("http://localhost:5000/api/types", {
                                  name: this.state.addedtype
                                })
                                .then(
                                  this.setState({
                                    addedtype: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add Type
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr /> <h5 className="center">Existing Types</h5>
            </Container>
          )}
          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.typearray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="type"
                                      type="text"
                                      name="type"
                                      onChange={this.edittype}
                                      className={` edit-input display-inline validate
                                      ${
                                        this.state.typechanged
                                          ? "notchanged"
                                          : "changed"
                                      }`}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.onedittype = e => {
                                            e.preventDefault();
                                            console.log(e.target.id);
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/types/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editedtype
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Type Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletetype = () => {
                              axios.delete(
                                `http://localhost:5000/api/types/${info._id}`
                              );
                              alert("Type deleted successfully");
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>
        <div>
          {this.props.location.pathname.substring(15) === "city" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add City:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="city"
                        type="text"
                        className="validate"
                        value={this.state.addedcity}
                        onChange={this.onWriteCity}
                        name="city"
                        ref='city'
                      />
                      <label htmlFor="city"> City Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddCity = e => {
                          this.state.cityarray.find(
                            ci => ci.name === this.refs.city.value
                          )
                            ? alert("This City already exist")
                            : axios
                                .post("http://localhost:5000/api/cities", {
                                  name: this.state.addedcity
                                })
                                .then(
                                  this.setState({
                                    addedcity: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add City
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr />
              <h5 className="center">Existing Cities</h5>
            </Container>
          )}

          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.cityarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="city"
                                      type="text"
                                      name="city"
                                      onChange={this.editcity}
                                      className={` edit-input display-inline validate
               ${this.state.citychanged ? "notchanged" : "changed"}
              `}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditcity = e => {
                                            e.preventDefault();
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/cities/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editedcity
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "City Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletedcity = () => {
                              axios
                                .delete(
                                  `http://localhost:5000/api/cities/${info._id}`
                                )
                                .then(res => {
                                  alert("City deleted successfully");
                                });
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>

        <div>
          {this.props.location.pathname.substring(15) === "country" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Country:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="country"
                        type="text"
                        className="validate"
                        value={this.state.addedcountry}
                        onChange={this.onWriteCountry}
                        name="country"
                        ref-='coun'
                      />
                      <label htmlFor="country"> Country Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={this.AddCountry = e => {

                        this.state.countryarray.find(country => country.name === this.refs.coun.value)
                        ?  alert("This Country already exist")               
 : 
 axios
                              .post("http://localhost:5000/api/countries", {
                                name: this.state.addedcountry
                              })
                              .then(
                                this.setState({
                                  addedcountry: ""
                                })
                              )   


                       
                              } }
                      className="card-btn"
                    >
                      Add Country
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr />
              <h5 className="center">Existing Countries</h5>
            </Container>
          )}

          <Container>
            <div
              style={{  
                textAlign: "center", 
              }}
            >
              {this.state.countryarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="country"
                                      type="text"
                                      name="country"
                                      onChange={this.editcountry}
                                      className={` edit-input display-inline validate
               ${this.state.countrychanged ? "notchanged" : "changed"}
              `}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditcountry = e => {
                                            e.preventDefault();
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/countries/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editedcountry
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Country Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletedcountry = () => {
                              axios
                                .delete(
                                  `http://localhost:5000/api/countries/${
                                    info._id
                                  }`
                                )
                                .then(res => {
                                  alert("Country deleted successfully");
                                });
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>

        <div>
          {this.props.location.pathname.substring(15) === "feature" && (
            <Container className="addsection">
              <Row>
                {" "}
                <Col m={3} />
                <Col m={10} s={12}>
                  <Col m={3}>
                    <h5>Add Feature:</h5>
                  </Col>
                  <Col m={5}>
                    <div className="input-field">
                      <input
                        id="feature"
                        type="text"
                        className="validate"
                        value={this.state.addedfeature}
                        onChange={this.onWriteFeature}
                        name="feature"
                        ref="fett"
                      />
                      <label htmlFor="feature"> Feature Name</label>
                    </div>
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    />
                    <button
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        border: "none"
                      }}
                      type="submit"
                      onClick={
                        (this.AddFeature = e => {
                          this.state.featuresarray.find(
                            fet => fet.name === this.refs.fett.value
                          )
                            ? alert("false")
                            : axios
                                .post("http://localhost:5000/api/features", {
                                  name: this.state.addedfeature
                                })
                                .then(
                                  this.setState({
                                    addedfeature: ""
                                  })
                                );
                        })
                      }
                      className="card-btn"
                    >
                      Add Feature
                    </button>
                  </Col>
                </Col>
                <Col m={3} />
              </Row>{" "}
              <hr />
              <h5 className="center">Existing Features</h5>
            </Container>
          )}

          <Container>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {this.state.featuresarray.map(info => (
                <Row>
                  <Col m={3} />
                  <Col s={12} m={6}>
                    <div className="editdeletemastercard z-depth-4">
                      <div>
                        <Transition
                          native
                          items={this.state[info._id]}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <animated.div style={props}>
                                <div className="unitmodaloverlay">
                                  <div className="unitmodalcontent">
                                    <input
                                      ref="feature"
                                      type="text"
                                      name="feature"
                                      onChange={this.editfeature}
                                      className={` edit-input display-inline validate
               ${this.state.featurechanged ? "notchanged" : "changed"}
              `}
                                      defaultValue={info.name}
                                    />
                                    <div className="unitmodalbtn">
                                      <Button
                                        id={info._id}
                                        className="btn yesbtn"
                                        onClick={
                                          (this.oneditcity = e => {
                                            e.preventDefault();
                                            this.setState({
                                              [e.target.id]: false
                                            });
                                            axios
                                              .put(
                                                `http://localhost:5000/api/features/${
                                                  info._id
                                                }`,
                                                {
                                                  name: editedfeature
                                                }
                                              )
                                              .then(res => {
                                                alert(
                                                  "Feature Edited successfully"
                                                );
                                              });
                                          })
                                        }
                                        variant="primary"
                                        type="submit"
                                      >
                                        Save
                                      </Button>

                                      <Button
                                        className="btn nobtn"
                                        id={info._id}
                                        onClick={this.hide1}
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </animated.div>
                            ))
                          }
                        </Transition>
                      </div>
                      <div className="existingname">
                        <p>{info.name} </p>
                      </div>
                      <div className="unitmodalbtn">
                        {" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={
                            (this.deletedfeature = () => {
                              axios
                                .delete(
                                  `http://localhost:5000/api/features/${
                                    info._id
                                  }`
                                )
                                .then(res => {
                                  alert("Feature deleted successfully");
                                });
                            })
                          }
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn card-btn"
                          id={info._id}
                          onClick={this.openModaldedit}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col m={3} />
                </Row>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
