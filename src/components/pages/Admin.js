import React, { Component } from "react";
//materialize
import { Container, Row, Col } from "react-materialize";
import axios from "axios";

//imgs
import uploadImg from "../../img/uploadimg.png";
import uploaded from "../../img/uploaded2.PNG";


let chosenLocation;
let chosenType;
let chosencategory;
let chosencity;
let chosencountry;
let chosenbath;
let chosendeveloper;
let chosencompound;
let chosenBedRooms;
let chosenKitchen;
let chosenFeature = [];
let chosendescribe;
let chosenArea;
let chosenPrice;
let chosentilte;
let chosenaddress;
let chosenlatitude;
let chosenlongitude;
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      types: [],
      location: [],
      country: [],
      city: [],
      compound: [],
      developer: [],
      features: [],
      rooms: 0,
      bath: 0,
      kitchen: "",
      pictures: [],
      longitude:'',
      latitude :'',
      title: "",
      description: "",
      area: "",
      price: "",
      adress: "",
      isForSale: true,
      selectedSale: "buy",
      selectedFile: null,
      srcImg: ['a','b'],
      floorPlan: [],
      additionalImages: [],
      main: "",
      hidden: true
    };
  }
  onChooseLocation = e => {
    this.setState({ [this.state.location]: e.target.value });
    chosenLocation = e.target.value;
  };
  onChoosecategory = e => {
    this.setState({ [this.state.category]: e.target.value });
    chosencategory = e.target.value;
  };
  onChooseType = e => {
    this.setState({ [this.state.types]: e.target.value });
    chosenType = e.target.value;
  };

  onChooseCompound = e => {
    this.setState({ [this.state.compound]: e.target.value });
    chosencompound = e.target.value;
  };
  onChooseDeveloper = e => {
    this.setState({ [this.state.developer]: e.target.value });
    chosendeveloper = e.target.value;
  };
  onChooseCity = e => {
    this.setState({ [this.state.city]: e.target.value });
    chosencity = e.target.value;
  };
  onChooseArea = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosenArea = e.target.value;
  };
  onChooseLongitude = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosenlongitude = e.target.value;
  };

  onChooselatitude = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosenlatitude = e.target.value;
  };


  onChoosePrice = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosenPrice = e.target.value;
  };

  onChooseCountry = e => {
    this.setState({ [this.state.country]: e.target.value });
    chosencountry = e.target.value;
    console.log(chosencountry);
  };

  onChooseKitchen = e => {
    this.setState({ [this.state.kitchen]: e.target.value });
    chosenKitchen = e.target.value;
  };
  onChoosebath = e => {
    this.setState({ [this.state.bath]: e.target.value });
    chosenbath = e.target.value;
    //console.log(chosenbath)
  };
  onChooserooms = e => {
    this.setState({ [this.state.rooms]: e.target.value });
    chosenBedRooms = e.target.value;
  };

  onChooseFeature = e => {
    if (e.target.checked === true) {
      chosenFeature.push(e.target.value);
    } else {
      let index = chosenFeature.indexOf(e.target.value);
      chosenFeature.splice(index, 1);
    }
  };

  onChangeMain = e => {
    const files = Array.from(e.target.files);
    this.setState({ main: files[0] ,
      srcImg: window.URL.createObjectURL(e.target.files[0])

    });
  };

  onChangeFloor = e => {
    const files = Array.from(e.target.files);
    this.setState({ floorPlan: files });
  };
  onChangeAdd = e => {

    const files = Array.from(e.target.files);
    this.setState({ additionalImages: files,   

    });

  //   files.map(i=>
  // {
  //  this.setState({srcImg: window.URL.createObjectURL(e.target.files[0])}) 
  //  console.log(this.state.srcImg)
  // // myImgs.push(i);
  // // console.log(myImgs)
  // })

  };

  onCreateUnit = e => {
    e.preventDefault();
    const formData = new FormData();
    const { main, additionalImages, floorPlan } = this.state;

    formData.append("main", main);

    additionalImages.forEach((file, i) => {
      formData.append("additionalImages", file);
    });
    floorPlan.forEach((file, i) => {
      formData.append("floorPlan", file);
    });

    // formData.set('additionalImagesLength’, additionalImages.length)
    // formData.set('floorPlanLength’, floorPlan.length)


    formData.set("location", chosenLocation);
    formData.set("city", chosencity);
    formData.set("category", chosencategory);
    formData.set("compound", chosencompound);
    formData.set("type", chosenType);
    formData.set("country", chosencountry);
    formData.set("developer", chosendeveloper);
    formData.set("features", JSON.stringify(chosenFeature));
    formData.set("isForSale", this.state.isForSale);
    formData.set("title", chosentilte);
    formData.set("description", chosendescribe);
    formData.set("price", chosenPrice);
    formData.set("area", chosenArea);
    formData.set("numberOfKitchens", chosenKitchen);
    formData.set("numberOfBedrooms", chosenBedRooms);
    formData.set("numberOfBathrooms", chosenbath);
    formData.set("address", chosenaddress);
    formData.set("longitude", chosenlongitude);
    formData.set("latitude", chosenlatitude);

    // formData.set("location", 'best');
    // formData.set("city", 'cairo');
    // formData.set("category", 'medical');
    // formData.set("compound", 'celia');
    // formData.set("type", 'villa');
    // formData.set("country", 'om l donia');
    // formData.set("developer", 'Emmar');
    // formData.set("features", ['free wifi']);
    // formData.set("isForSale", false);
    // formData.set("title", 'hey you');
    // formData.set("description", 'hellooo');
    // formData.set("price", 20000);
    // formData.set("area", 250);
    // formData.set("numberOfKitchens", 3);
    // formData.set("numberOfBedrooms", 4);
    // formData.set("numberOfBathrooms", 2);
    // formData.set("address", 'my address');


    axios({
      method: "post",
      url: "http://localhost:5000/api/units",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(this.setState({ hidden: false }))
      .then(
        setTimeout(() => {
          this.setState({ hidden: true });
        }, 3000)
      )
      .catch(err => {
        console.log(err);
      });
  };

  onSearchSale = e => {
    this.setState({ selectedSale: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosendescribe = e.target.value;
  };

  onChangeAddress = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosenaddress = e.target.value;
  };

  onChangeTitle = e => {
    this.setState({ [e.target.name]: e.target.value });
    chosentilte = e.target.value;
  };

  onSearchSale = e => {
    this.setState({ selectedSale: e.target.value });
    if (e.target.value === "buy") {
      this.setState({ isForSale: true });
    } else {
      this.setState({ isForSale: false });
    }
    console.log(e.target.value);
  };

  onAddMainImg = e => {
    e.preventDefault();
  };

  componentDidMount() {
    console.log(this.state.selectedFile);
    axios.get("http://localhost:5000/api/features/").then(res => {
      this.setState({
        features: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/cities/").then(res => {
      this.setState({
        city: res.data.data
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

    axios.get("http://localhost:5000/api/types/").then(res => {
      this.setState({
        types: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/features/").then(res => {
      this.setState({
        fetures: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/categories/").then(res => {
      this.setState({
        category: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/compounds/").then(res => {
      this.setState({
        compound: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/periods/").then(res => {
      this.setState({
        period: res.data.data
      });
    });

    axios.get("http://localhost:5000/api/countries/").then(res => {
      this.setState({
        country: res.data.data
      });
    });
  }


  render() {

    let {srcImg} = this.state;

    return (
      <div>

        <Container className="reg">
 {/* {myImgs.map(image=>
  (
    <img alt="uploaded image" src={image}/>
  ))} */}

          <h2 className="text-center">Place Your Unit</h2>
          <hr
            style={{
              height: "10px",
              backgroundColor: "#8b0000",
              borderRadius: "10px"
            }}
          />
          <h5
            className="text-center"
            style={{ color: "grey", fontWeight: "bold", margin: "22px" }}
          >
            Property Overview
          </h5>
          <div className="adminform">
            <form>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="center">
                    <select
                      className="browser-default"
                      value={this.state.category.value}
                      onChange={this.onChoosecategory}
                      name={this.state.category.name}
                    >
                      <option>CATEGORY</option>
                      {this.state.category.map(info => (
                        <option value={info.name} key={info._id}>
                          {" "}
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="drop">
                    <select
                      className="browser-default"
                      value={this.state.types.value}
                      onChange={this.onChooseType}
                      name={this.state.types.name}
                    >
                      <option>PROPERTY TYPE</option>
                      {this.state.types.map(info => (
                        <option value={info.name} key={info._id}>
                          {" "}
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="drop">
                    <select
                      className="browser-default"
                      value={this.state.country.value}
                      onChange={this.onChooseCountry}
                      name={this.state.country.name}
                    >
                      <option>COUNTRY</option>
                      {this.state.country.map(info => (
                        <option value={info.name} key={info._id}>
                          {" "}
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="drop">
                    <select
                      className="browser-default"
                      value={this.state.city.value}
                      onChange={this.onChooseCity}
                      name={this.state.city.name}
                    >
                      <option>CITY</option>
                      {this.state.city.map(info => (
                        <option value={info.name} key={info._id}>
                          {" "}
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="drop">
                    <select
                      className="browser-default"
                      value={this.state.location.value}
                      onChange={this.onChooseLocation}
                      name={this.state.location.name}
                    >
                      <option>LOCATION</option>
                      {this.state.location.map(info => (
                        <option value={info.name} key={info._id}>
                          {" "}
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col m={6} s={12}>
                  <div className="rooms-drop">
                    <div className="drop">
                      <select
                        className="browser-default"
                        value={this.state.compound.value}
                        onChange={this.onChooseCompound}
                        name={this.state.compound.name}
                      >
                        <option>COMPOUND</option>
                        {this.state.compound.map(info => (
                          <option value={info.name} key={info._id}>
                            {" "}
                            {info.name}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />

                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="drop">
                    {" "}
                    <select
                      className="browser-default"
                      value={this.state.developer.value}
                      onChange={this.onChange}
                      name={this.state.developer.name}
                    >
                      <option>DEVELOPER</option>
                      {this.state.developer.map(info => (
                        <option value={info.name} key={info._id}>
                          {" "}
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="rooms-drop">
                    <div className="drop">
                      <select
                        className="browser-default"
                        value={this.state.rooms.value}
                        onChange={this.onChooserooms}
                        name="maxrooms"
                      >
                        <option> BEDROOMS</option>
                        <option value="1 ">1 Bedroom</option>
                        <option value="2 " defaultValue>
                          2 Bedroom
                        </option>
                        <option value="3 ">3 Bedroom</option>
                        <option value="4 ">4 Bedroom</option>
                        <option value="5 ">5 Bedroom</option>
                        <option value="6 ">6 Bedroom</option>
                        <option value="7 ">7 Bedroom</option>
                        <option value="8 ">8 Bedroom</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col m={6} s={12}>
                  <div className="rooms-drop">
                    <div className="drop">
                      <select
                        className="browser-default"
                        value={this.state.kitchen.value}
                        onChange={this.onChooseKitchen}
                        name="kitchen"
                      >
                        <option>KITCHENS</option>
                        <option value="1 " defaultValue>
                          1 Kitchen
                        </option>
                        <option value="2 ">2 Kitchens</option>
                        <option value="3 ">3 Kitchens</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col m={6} s={12}>
                  <div className="rooms-drop">
                    <div className="drop">
                      <select
                        className="browser-default"
                        value={this.state.bath.value}
                        onChange={this.onChoosebath}
                        name="bath"
                      >
                        <option>BATHROOMS</option>
                        <option value="1" defaultValue>
                          1 Bathroom
                        </option>
                        <option value="2">2 Bathrooms</option>
                        <option value="3 ">3 Bathrooms</option>
                        <option value="4 ">4 Bathrooms</option>
                        <option value="5 ">5 Bathrooms</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="input-field">
                    <input
                      id="area"
                      min="30"
                      type="number"
                      className="validate"
                      value={this.state.area}
                      onChange={this.onChooseArea}
                      name="area"
                    />
                    <label htmlFor="area">Area</label>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="input-field">
                    <input
                      id="price"
                      min="100"
                      type="number"
                      className="validate"
                      value={this.state.price}
                      onChange={this.onChoosePrice}
                      name="price"
                    />
                    <label htmlFor="price">Price</label>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
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
              </Row>
              <hr
                style={{
                  margin: "10px",
                  backgroundColor: "#ccc"
                }}
              />
              <div className="featuresadmintitle">
                <Row>
                  <Col s={12} m={6}>
                    <p
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold"
                      }}
                    >
                      Additional Features
                    </p>
                  </Col>
                  <Col style={{ color: "#8b0000" }} s={12} m={6}>
                    *Click on the available service
                  </Col>
                </Row>
              </div>
              <Row>
                <Col m={3} />
                <Col m={6}>
                  <ul>
                    {" "}
                    {this.state.features.map(info => (
                      <div>
                        <div className="admincreatefeature">
                          <li>
                            <input
                              type="checkbox"
                              id={info._id}
                              value={`${info.name}`}
                              onChange={this.onChooseFeature}
                            />
                            <label for={info._id}> {info.name} </label>
                          </li>
                        </div>
                      </div>
                    ))}
                  </ul>
                </Col>{" "}
                <Col m={3} />
              </Row>
            <Row>
                <Col s={12} m={6}>
                  <p
                    className="text-center"
                    style={{
                      color: "black",
                      fontWeight: "bold"
                    }}
                  >
                    Property Describtion
                  </p>
                </Col>
                </Row>
              <div className="input-field">
                <textarea
                  id="message"
                  type="message"
                  className="validate"
                  style={{ width: "50%" }}
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                  rows="6"
                />
              </div>
             <Row>
                <Col s={12} m={6}>
                  <p
                    className="text-center"
                    style={{
                      color: "black",
                      fontWeight: "bold"
                    }}
                  >
                    Property Title
                  </p>
                </Col>
                </Row>
                <Col s={12} m={6} />
              
              <div className="input-field">
                <textarea
                  id="title"
                  type="message"
                  className="validate"
                  style={{ width: "50%" }}
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                  rows="6"
                />
              </div>
              <hr
                style={{
                  margin: "10px",
                  backgroundColor: "#ccc"
                }}
              />
              <Col s={12} m={12}>
                <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Main Image
                </h5>
              </Col>
              <input
                type="file"
                id="main"
                name="main"
                className="inputfile"
                onChange={this.onChangeMain}
              />{" "}
              <label for="main">
                <img className="responsive-img" src={uploadImg} alt="pic"/>
              </label>
              <img alt="" src={srcImg}/>

              <hr
                style={{
                  margin: "10px",
                  backgroundColor: "#ccc"
                }}
              />
              <Col s={12} m={12}>
                <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Photo Gallary
                </h5>
              </Col>
              <input
                type="file"
                id="additionalImages"
                name="add"
                multiple
                onChange={this.onChangeAdd}
                className="inputfile"
                ref="img"
              />
              <label for="additionalImages">
                <img className="responsive-img" src={uploadImg}   alt="pic"/>
              </label>


              <hr
                style={{
                  margin: "10px",
                  backgroundColor: "#ccc"
                }}
              />
              <Col s={12} m={12}>
                <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Floor Plan
                </h5>
              </Col>
              <input
                type="file"
                id="floorPlan"
                name="floor"
                multiple
                className="inputfile2"
                onChange={this.onChangeFloor}
              />
              <label for="floorPlan">
                <img className="responsive-img" src={uploaded}  alt="pic" />
              </label>
              <hr
                style={{
                  margin: "10px",
                  backgroundColor: "#ccc"
                }}
              />
              <h5
                className="text-center"
                style={{ color: "grey", fontWeight: "bold", margin: "22px" }}
              >
                Property Location
              </h5>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="input-field">
                    <input
                      id="longitude"
                      type="text"
                      className="validate"
                      value={this.state.longitude}
                      onChange={this.onChooseLongitude}
                      name="longitude"
                    />
                    <label htmlFor="longitude">Longitude</label>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
              <Row>
                <Col m={3} />
                <Col s={12} m={6}>
                  <div className="input-field">
                    <input
                      id="latitude"
                      type="text"
                      className="validate"
                      value={this.state.latitude}
                      onChange={this.onChooselatitude}
                      name="latitude"
                    />
                    <label htmlFor="latitude">Latitude</label>
                  </div>
                </Col>
                <Col m={3} />
              </Row>
               <div hidden={this.state.hidden} className="modal-dialogg ">
                    <p id="snackbarr">Unit was created successfully</p>
                  </div>

              <Col s={12} className="center">
                <button
                  type="submit"
                  className="submitAdmin"
                  onClick={this.onCreateUnit}
                >
                 Submit
                </button>
              </Col>
            </form>
          </div>
        </Container>
        <test />
      </div>
    );
  }
}
