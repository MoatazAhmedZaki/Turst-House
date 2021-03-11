import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Container} from "react-materialize";
import Map from "../single-unit/Map"
import PropTypes from "prop-types";
let CurrencyFormat = require("react-currency-format");
const icons = [
  <p className="display-inline"  name='Parking'> <i className="fas fa-parking"></i> Parking</p>,
  <p className="display-inline" name='Green Areas'>  <i className="fas fa-leaf" /> Green Areas</p>,
	<p className="display-inline" name='Security'> <i className="fas fa-lock" /> Security</p>,
	<p className="display-inline" name='Direct Lift Accsess'><i className="fas fa-users" /> Direct Lift Accsess</p>,
	<p className="display-inline" name="Free WiFi"><i class="fas fa-wifi"></i> Free Wi-Fi</p>,
	<p className="display-inline" name="Hot Drinks"><i class="fas fa-mug-hot"></i> Hot Drinks</p>

]

const chosenFeature =[];
const toDeleteFloor=[];
const toDeleteAdditionalImages=[];
// const toDeleteMainImage=[];
let extraFeaturesContent;
export default class UnitEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {unit:[],
      features:[],
      updateMain:false,
      updateAdditional:false,
      updateFloor:false,

      // name: "",
      // age: "00",
      // id: "00",
      additionalImgs:[],
      floorPlanImgs:[],
      isInEditMode: false,
      islogin: true,
      titlechanged:true,

      pricechanged:true,
      typechanged:true,
      categorychanged:true,
      locationchanged:true,
      citychanged:true,
      compoundchanged:true,
      developerchanged:true,
      areachanged:true,
      numberOfBathroomschanged:true,
      numberOfBedroomschanged:true,
      numberOfKitchenschanged:true,
      featureschanged:true,
      descriptionchanged:true,
      countrychanged:true,
      addresschanged:true,
      longitudeChanged: true,
      latitudeChanged: true,
      // isGoing:true
      types:[],
      category:[],
      country:[],
      city:[],
      compound:[],
      developer:[],
      location:[],
      main:{},
      additionalImages:[],
      floorPlan:[],
      




            // agechanged: "true",
      // idchanged:"true"
    };
  }
  // info.price
// info.type
// info.category
// info.location
// city
// compound
// developer
// area
// numberOfBathrooms
// numberOfBedrooms
// info.numberOfKitchens
// info.features
// info.description



// onDelete=e=>{console.log(e.target.id)}


onUpdateFloor =e=>{
  const files = Array.from(e.target.files);
this.setState({ floorPlan: files  });
this.setState({updateFloor: true}, function () {
console.log(this.state.updateFloor);

});
}

onUpdateAdditional=e=>{
  const files = Array.from(e.target.files);
this.setState({ additionalImages: files  });
this.setState({updateAdditional: true}, function () {
console.log(this.state.updateAdditional);
});
}

onUpdateMain=e=>{
      const files = Array.from(e.target.files);
    this.setState({ main: files[0]  });
this.setState({updateMain: true}, function () {
  console.log(this.state.updateMain);
});
}

filterFloor = id => {
  return this.state.floorPlanImgs.filter(image => image.key !== id)
}

onDeleteFloor = e => {
  this.setState({ floorPlanImgs: this.filterFloor(e.target.id) })
  // console.log(this.state.floorPlanImgs)
  toDeleteFloor.push(e.target.id)
  console.log("toDeleteFloor")
  console.log(toDeleteFloor)
  }


  filterAdditionalImages = id => {
    return this.state.additionalImgs.filter(image => image.key !== id)
  }
  
  onDeleteAdditionalImages = e => {
    this.setState({ additionalImgs: this.filterAdditionalImages(e.target.id) })
    // console.log(this.state.additionalImgs)
    toDeleteAdditionalImages.push(e.target.id)
    console.log("toDeleteAdditionalImages")
    console.log(toDeleteAdditionalImages)

  
  }


  // filterMainImage = id => {
  //   return this.state.mainImage.filter(image => image.key !== id)
  // }

  // onDeleteMainImage=e=>{ 
  //   this.setState({ mainImage:null })
  // console.log(this.state.mainImage)
  // toDeleteMainImage.push(e.target.id)
  // console.log("toDeleteMainImage")
  // console.log(toDeleteMainImage)}


    getUnitDetails = id => {
      axios.get(`http://localhost:5000/api/units/${id}`).then(res => {
        this.setState({
          unit: res.data.data,
          additionalImgs:res.data.data.additionalImages,
          floorPlanImgs:res.data.data.floorPlan,
          // mainImage:res.data.data.mainImage
          // updateAdditional:false

        });
        console.log(this.state)
        this.getAllFeatures()
        this.gitAllData()
      });
    };


    gitAllData=e=>{
    

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

   

   axios.get("http://localhost:5000/api/countries/").then(res => {
     this.setState({
       country: res.data.data
     });
   });
    }
    
    // onChooseFeature = e => {
    //   if (e.target.checked === false) {
      
    //     let index = chosenFeature.indexOf(e.target.value);
    //     chosenFeature.splice(index, 1);
    //     console.log(chosenFeature.length)

    //   } else {
      
    //     chosenFeature.push(e.target.value);
    //     console.log(chosenFeature.length)
    //   }
    // };


  

    onChooseFeature = e => {
      this.setState({[e.target.name]:!this.state[e.target.name]})
      if (e.target.checked === true) {
        // let index = chosenFeature.indexOf(e.target.value);
        // toDelete.splice(index, 1);
        chosenFeature.push(e.target.value);
        // console.log(chosenFeature)
        console.log("true")

        console.log("tobeadd")

                console.log(chosenFeature)
                // console.log("tobedelete")

                // console.log(toDelete)


      } else {
        // console.log(e.target)

        let index = chosenFeature.indexOf(e.target.value);
        chosenFeature.splice(index, 1);
        // console.log(chosenFeature)
        // console.log(e.target)
        // toDelete.push(e.target.value);
        console.log("false")

        console.log("tobeadd")
        
        console.log(chosenFeature)
        // console.log("tobedelete")

        // console.log(toDelete)




      }
    };

    getAllFeatures =e=>{axios.get("http://localhost:5000/api/features/").then(res => {
      this.setState({
        features: res.data.data
      });
      // res.data.data.map(fet=>{this.setState({[fet.name]:true})})
      // console.log(this.state)
      this.state.features.map((feature,i) => <p>
      
      
      {this.state.unit.features.find(fet => feature.name === fet)?this.setState({[feature.name]:true}) & 
      chosenFeature.push(feature.name) :this.setState({[feature.name]:false}) }</p>)
      

         })
         
        ;}


      
 
    componentWillMount() {
        // this.getUnitDetails(this.props.match.params.id);

            this.getUnitDetails(this.props.match.params.id);
          
        // this.getAllFeatures()




//         this.state.features.map((feature,i) => <p>{this.state.unit.features.find(fet => feature.name === fet)?console.log(true):console.log(false) }</p>)
// console.log("here")
      }


      handleInputChange=(event)=> {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
//     if(event.target.checked===true){

// event.target.setAttribute("checked", "true"); 

//     }
//     else {event.target.removeAttribute("checked")} 

//       console.log(  event.target)
        // this.setState({
        //   // [name]: value
        //   name: !this.state.name
        // });


        this.setState({[event.target.name]:!this.state[event.target.name]})
        console.log(event.target.checked)
        console.log(this.state)

      }

      componentDidUpdate(previousProps, previousState) {
        if (previousState.unit !== this.state.unit) {
//          
          // this.getUnitDetails();
          // this.setState({
          //   unit: this.state.unit
          // });
          // this.getUnitDetails();

// console.log("old")
// console.log(this.state.unit)


        }
      
          }
    

  checkchanged = e =>(
            //  console.log(e.target)

    e.target.value == this.state.unit[e.target.name]
      ? 
         this.setState({ [`${e.target.name}changed`]: true })
        :
        this.setState({ [`${e.target.name}changed`]: false })
  );

  renderDefaultView = () => (
    <Container className="editpage">


    <h5
            className="text-center"
            style={{ color: "grey", fontWeight: "bold", margin: "22px" }}
          >
            Property Overview
          </h5>

       {this.state.islogin ? (
        <button onClick={this.editButton}                     className="ctrl-standard is-reversed typ-subhed fx-sliderIn"
        > Start Editing</button>
      ) : null}
       
								{/* <Col l={3} m={4} s={6}><p className="center detail-price">
            <CurrencyFormat value={info.price} displayType={'text'} thousandSeparator={true} /> EGP/month</p></Col> */}
							

      {/* <div className="edit-title-holder"><h6 className="edit-title">PROPERTY OVERVIEW</h6></div> */}

      {this.state.unit.title ? (
  <Row>
   
   <Col l={6} s={12}  className="margin-auto" >
            <Col l={6} s={12}  >

               <p className="editpagefont display-inline ">Title : </p>
               </Col >
               <Col l={6} s={12} >

              <p className="display-inline ">
                {this.state.unit.title}
              </p>
              </Col >
              </Col >


  </Row>



) : null}



      {this.state.unit.price ? (
        <Row>
            <Col l={6} s={12}  className="margin-auto" >
            <Col l={6} s={12}  >

<p className="editpagefont display-inline">Price : </p>
</Col>

             {this.state.unit.isForSale=== false ? (
                                
                     <Col l={6} s={12}  >

										<p className="display-inline">
											<CurrencyFormat
												value={this.state.unit.price}
												displayType={'text'}
												thousandSeparator={true}
											/>{' '}
											EGP/month
										</p>
									</Col>

								) : (
                  <Col l={6} s={12}  >
                  <p className="display-inline">
											<CurrencyFormat
												value={this.state.unit.price}
												displayType={'text'}
												thousandSeparator={true}
											/>{' '}
											EGP
										</p>
									</Col>
                )}
                                  </Col>

        </Row>



      ) : null}

{this.state.unit.type ? (
  <Row>
   
      
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Type : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.type}
              </p>
            </Col>
            </Col>

  </Row>



) : null}

{this.state.unit.category ? (
  <Row>
   
      
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Category : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.category}
              </p>
            </Col>
          
          </Col>
  </Row>



) : null}
{this.state.unit.location ? (
  <Row>
   
      
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Location : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.location}
              </p>
            </Col>
          </Col>
  </Row>



) : null}
{this.state.unit.country ? (
  <Row>
   
      
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Country : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.country}
              </p>
            </Col>
          </Col>
  </Row>



) : null}
{this.state.unit.city ? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">City : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.city}
              </p>
            </Col>
            </Col>
          
  </Row>
) : null}
{this.state.unit.address ? (
  <Row>
   
      
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Address : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.address}
              </p>
            </Col>
          </Col>
  </Row>



) : null}
{this.state.unit.compound ? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Compound : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.compound}
              </p>
            </Col>
          </Col>
  </Row>
) : null}

{this.state.unit.developer ? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Developer : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.developer}
              </p>
            </Col>
          </Col>
  </Row>
) : null}

{this.state.unit.area ? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Area : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.area}
              </p>
            </Col>
          </Col>
  </Row>
) : null}

{this.state.unit.numberOfBathrooms ? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Bathrooms : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.numberOfBathrooms}
              </p>
            </Col>
          </Col>
  </Row>
) : null}

{this.state.unit.numberOfbedrooms ? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Bedrooms : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.numberOfbedrooms}
              </p>
            </Col>
          </Col>
  </Row>
) : null}

{this.state.unit.numberOfkitchens? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Kitchens : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.numberOfkitchens}
              </p>
            </Col>
          </Col>
  </Row>
) : null}

{this.state.unit.numberOfkitchens? (
  <Row>
   <Col l={6} s={12}  className="margin-auto" >
   <Col l={6} s={12}  >

               <p className="editpagefont display-inline">Kitchens : </p>
               </Col>
               <Col l={6} s={12}  >

              <p className="display-inline">
                {this.state.unit.numberOfkitchens}
              </p>
            </Col>
          </Col>
  </Row>
) : null}



{this.state.unit.features ? 
(
  <Row>
        {/* <div className="divider" />

   <Col l={6} s={12}  className="margin-auto" >
    <Col l={6} s={12}  >

    <p className="editpagefont display-inline">Additional Features :</p>
    </Col>
    <Col l={6} s={12}  >

      {   this.state.unit.features.map((feature,i) => icons.find(icon => icon.props.name === feature))
}
</Col>
<div> */}
						<div className="divider" />
						<div className="key-info">
            <Row>
                                <Col s={12} m={6}>
                                  <h5
                                    className="text-center"
                                    style={{
                                      color: "grey",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    Additional Features
                                  </h5>
                                </Col>
                                <Col style={{ color: "#8b0000" }} s={12} m={6}>
                                  *Click on the available service
                                </Col>
                              </Row>
							<Container>
								<div className=" card-body-right ">{   this.state.unit.features.map((feature,i) => icons.find(icon => icon.props.name === feature))
}</div>
							</Container>

             
						</div>
					{/* </div> */}
   {/* </Col> */}
          
          </Row>
) : null}
      

{this.state.unit.description ? (
  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <Row>
                                <Col s={12} m={6}>
                                  <h5
                                    className="text-center"
                                    style={{
                                      color: "grey",
                                      fontWeight: "bold"
                                    }}
                                  >
                    Property Describtion
                                  </h5>
                                </Col>
                                <Col style={{ color: "#8b0000" }} s={12} m={6}>
                                  *Click on the available service
                                </Col>
                              </Row>      <p>{this.state.unit.description}</p>
    </div>
  </div>
) : null}


<div>
    <div className="divider" />
    <div className="key-info">
    <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Main Photo
                </h5><Row>

                <Col l={12} m={12} s={12}  >
        <div className="position-rel">
        <img className="responsive-img img-edit z-depth-2" alt={this.state.unit.mainImage ?this.state.unit.mainImage._id:null} src={this.state.unit.mainImage ?this.state.unit.mainImage.url:null}/>
        </div>
      </Col>
     
      
      </Row>
    </div>
  </div>
 

{this.state.unit.additionalImages ? (
  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Photo Gallery
                </h5><Row>
      {this.state.unit.additionalImages.map(img =><Col l={4} m={6} s={12}  >
        <div className="position-rel">
        <img className="responsive-img img-edit z-depth-2" alt={img._id} src={img.url}/>
        </div>
      </Col> )}
     
      </Row>
    </div>
  </div>
) : null}


{this.state.unit.floorPlan ? (
  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property floor Plan
                </h5><Row>
      {this.state.unit.floorPlan.map(img =><Col l={4} m={6} s={12}  >
        <div className="position-rel">
        <img className="responsive-img img-edit z-depth-2" alt={img._id} src={img.url}/>
        </div>
      </Col> )}


      
     
      </Row>
    </div>
  </div>
) : null}

     
{this.state.unit.location ? (
  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <Row>
                                <Col s={12} m={6}>
                                  <h5
                                    className="text-center"
                                    style={{
                                      color: "grey",
                                      fontWeight: "bold"
                                    }}
                                  >
                    Property Map Location
                                  </h5>
                                </Col>
                                <Col style={{ color: "#8b0000" }} s={12} m={6}>
                                  *Click on the available service
                                </Col>
                              </Row>   
                              
                              <Map
        id="myMap" 
        options={{
          center: { lat:29.973427, lng: 31.281559 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: { lat: 29.973427, lng: 31.281559 },
            map: map,
            title: 'Hello Istanbul!'
          });
        }}
      />
      </div>
    </div>
) : null}


    </Container>
  );

  renderEditView = () => (
    <Container className="editpage">
<h5
            className="text-center"
            style={{ color: "grey", fontWeight: "bold", margin: "22px" }}
          >
            Property Overview
          </h5> 
{this.state.unit.title ? (
  <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                      <p className="editpagefont display-inline">Title : </p>
                      </Col>
                      <Col l={6} s={12}  >


                      <p className="display-inline">


<input
          ref="title"
          type="text"
          name="title"
          onChange={this.checkchanged}
          className={` edit-input display-inline validate ${
            this.state.titlechanged ? "notchanged" : "changed"
          }`}
          defaultValue={this.state.unit.title}
        />
        </p>
        </Col>
        </Col>
  </Row>
) : null}

      {this.state.unit.price ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline">Price:</p>
                            </Col>
                            <Col l={6} s={12}  >


                            <p className="display-inline">


<input
                ref="price"
                type="text"
                name="price"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.pricechanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.price}
              />       
                 {/* <label for="price">{this.state.unit.price}</label> */}
              </p>
              </Col>
              </Col>
        </Row>
      ) : null}

{this.state.unit.type ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20"  >

                            <p className="editpagefont display-inline">Type:</p>
                            </Col>
                            <Col l={6} s={12}  >
                   <select ref="type"
                type="text"
                name="type"
                     className={` browser-default ${
                      this.state.typechanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.type}
                     onChange={this.checkchanged}
                    //  name={this.state.types.name}
                     
                   >
                     <option disabled>PROPERTY TYPE</option>
                     {this.state.types.map(info => (info.name===this.state.unit.type? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>

                            {/* <p className="display-inline">


<input
                ref="type"
                type="text"
                name="type"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.typechanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.type}
              />
            
              </p> */}

              </Col>
              </Col>
        </Row>
      ) : null}


{this.state.unit.category ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12}  className="padd-20" >

                            <p className="editpagefont display-inline">category:</p>
</Col>
<Col l={6} s={12}  >


<select ref="category"
                type="text"
                name="category"
                     className={` browser-default ${
                      this.state.categorychanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.category}
                     onChange={this.checkchanged}
                    //  name={this.state.categorys.name}
                     
                   >
                     <option disabled>PROPERTY CATEGORY</option>
                     {this.state.category.map(info => (info.name===this.state.unit.category? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>


                            {/* <p className="display-inline">


<input
                ref="category"
                type="text"
                name="category"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.categorychanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.category}
              />
              </p> */}
              </Col>
              </Col>
        </Row>
      ) : null}
      {this.state.unit.location ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12}  className="padd-20" >

                            <p className="editpagefont display-inline">location : </p>
                            </Col>
                            <Col l={6} s={12}  >



                            <select ref="location"
                type="text"
                name="location"
                     className={` browser-default ${
                      this.state.locationchanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.location}
                     onChange={this.checkchanged}
                    //  name={this.state.locations.name}
                     
                   >
                     <option disabled>PROPERTY LOCATION</option>
                     {this.state.location.map(info => (info.name===this.state.unit.location? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>


{/* 
                            <p className="display-inline">


<input
                ref="location"
                type="text"
                name="location"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.locationchanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.location}
              />
              </p> */}
              </Col>
              </Col>
        </Row>
      ) : null}


{this.state.unit.country ? (
  <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                      <p className="editpagefont display-inline">country : </p>
                      </Col>
                      <Col l={6} s={12}  >

                      <select ref="country"
                type="text"
                name="country"
                     className={` browser-default ${
                      this.state.countrychanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.country}
                     onChange={this.checkchanged}
                    //  name={this.state.countrys.name}
                     
                   >
                     <option disabled>PROPERTY COUNTRY</option>
                     {this.state.country.map(info => (info.name===this.state.unit.country? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>


                      {/* <p className="display-inline">


<input
          ref="country"
          type="text"
          name="country"
          onChange={this.checkchanged}
          className={` edit-input display-inline validate ${
            this.state.countrychanged ? "notchanged" : "changed"
          }`}
          defaultValue={this.state.unit.country}
        />
        </p> */}
        </Col>
        </Col>
  </Row>
) : null}

      {this.state.unit.city ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20"  >

                            <p className="editpagefont display-inline">city : </p>
</Col>
<Col l={6} s={12}  >
  {console.log(this.state.city)}
<select ref="city"
                type="text"
                name="city"
                     className={` browser-default ${
                      this.state.citychanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.city}
                     onChange={this.checkchanged}
                    //  name={this.state.citys.name}
                     
                   >
                     <option disabled>PROPERTY CITY</option>
                     {this.state.city.map(info => (info.name===this.state.unit.city? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>

                            {/* <p className="display-inline">


<input
                ref="city"
                type="text"
                name="city"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.citychanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.city}
              />
              </p> */}
              </Col>
              </Col>
        </Row>
      ) : null}

{this.state.unit.address ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline">Address : </p>
                            
                            </Col>
                            <Col l={6} s={12}  >

                            <p className="display-inline">


<input
                ref="address"
                type="text"
                name="address"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.addresschanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.address}
              />
              </p>
              </Col>
              </Col>
        </Row>
      ) : null}


{this.state.unit.compound ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline">compound : </p>
                            
                            </Col>
                            <Col l={6} s={12}  >


                            <select ref="compound"
                type="text"
                name="compound"
                     className={` browser-default ${
                      this.state.compoundchanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.compound}
                     onChange={this.checkchanged}
                    //  name={this.state.compounds.name}
                     
                   >
                     <option disabled>PROPERTY COMPOUND</option>
                     {this.state.compound.map(info => (info.name===this.state.unit.compound? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>

                            {/* <p className="display-inline">


<input
                ref="compound"
                type="text"
                name="compound"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.compoundchanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.compound}
              />
              </p> */}
              </Col>
              </Col>
        </Row>
      ) : null}
      {this.state.unit.developer ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline"> developer : </p>
                            </Col>
                            <Col l={6} s={12}  >


                            <select ref="developer"
                type="text"
                name="developer"
                     className={` browser-default ${
                      this.state.developerchanged ? "notchanged" : "changed"
                    }`}
                    //  value={this.state.unit.developer}
                     onChange={this.checkchanged}
                    //  name={this.state.developers.name}
                     
                   >
                     <option disabled>PROPERTY DEVELOPER</option>
                     {this.state.developer.map(info => (info.name===this.state.unit.developer? <option selected >{info.name}
                       </option>:
                       <option >
                         {info.name}
                       </option>
                      ) )}
                   </select>



                            {/* <p className="display-inline">


<input
                ref="developer"
                type="text"
                name="developer"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.developerchanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.developer}
              />
              </p> */}
              </Col>
              </Col>
        </Row>
      ) : null}

{this.state.unit.area ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12}  className="padd-20">

                            <p className="editpagefont display-inline">area:</p>
                            </Col>
                            <Col l={6} s={12}  >

                            <p className="display-inline">


<input
                ref="area"
                type="text"
                name="area"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.areachanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.area}
              />
              </p>
              </Col>
              </Col>
        </Row>
      ) : null}


{this.state.unit.numberOfBathrooms ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline">Bathrooms:</p>
                            </Col>
                            <Col l={6} s={12}  >

                            <p className="display-inline">


<input
                ref="numberOfBathrooms"
                type="text"
                name="numberOfBathrooms"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.numberOfBathroomschanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.numberOfBathrooms}
              />
              </p>
              </Col>
              </Col>
        </Row>
      ) : null}

{this.state.unit.numberOfbedrooms ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline">bedrooms:</p>
                            </Col>
                            <Col l={6} s={12}  >


                            <p className="display-inline">


<input
                ref="numberOfBedrooms"
                type="text"
                name="numberOfBedrooms"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.numberOfbedroomschanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.numberOfBedrooms}
              />
              </p>
              </Col>
              </Col>
        </Row>
      ) : null}
      {this.state.unit.numberOfkitchens ? (
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12} className="padd-20" >

                            <p className="editpagefont display-inline">kinumberOfkitchens:</p>
                            </Col>
                            <Col l={6} s={12}  >


                            <p className="display-inline">


<input
                ref="numberOfkitchens"
                type="text"
                name="numberOfkitchens"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.numberOfkitchenschanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.numberOfkitchens}
              />
              </p>
              </Col>
              </Col>
        </Row>
      ) : null}

{this.state.unit.features ? (
<Row>

  <div className="divider" />
  <div className="key-info">
  <Row>
                      <Col s={12} m={6}>
                        <h5
                          className="text-center"
                          style={{
                            color: "grey",
                            fontWeight: "bold"
                          }}
                        >
                          Additional Features
                        </h5>
                      </Col>
                      <Col style={{ color: "#8b0000" }} s={12} m={6}>
                        *Click on the available service
                      </Col>
                    </Row>
    <Container>
      <div className=" card-body-right ">

        
        {/* {this.state.features.map((info,i)=>(info.name===0? console.log(true):console.log(this.state.unit.features[i])))} */}

        {/* {this.state.features.map((info,i)=>(this.state.unit.features.map(fet=>(info.name===fet? console.log(true):console.log(false)))))} */}

        {this.state.features.map((feature,i) => <p>{this.state.unit.features.find(fet => feature.name === fet)?<div>  <input
                           type="checkbox"
                           id={feature.name}
                           value={`${feature.name}`}
                           onClick={this.onChooseFeature}
  // onclick={this.checked==="checked"?"false":"checked"
  // }              
  className= 'checked'
            // checked={}
            name={feature.name}
            checked={this.state[feature.name]}   
            // checked
                                />
                         <label for={feature.name}> {feature.name} </label>
                   </div>  :<div> <input
                           type="checkbox"
                           id={feature.name}
                           value={`${feature.name}`}
                           onClick={this.onChooseFeature}
  // onclick={this.checked==="checked"?"false":"checked"
  // }              
            // checked={}
            // checked="checked"   
            // checked="true"
                                />
                         <label for={feature.name}> {feature.name} </label>
                   </div> }</p>)}



      </div>
    </Container>
  </div>


</Row>
  
//         <Row>
//              <Col l={6} s={12}  className="margin-auto" >

//                             <p className="editpagefont display-inline">features:</p>
                            

//                             <p className="display-inline">



//                             {this.state.unit.features.map(info => (
//                    <div>
//                        <input
//                          type="checkbox"
//                          id={info}
//                          value={`${info}`}
//                          onChange={this.onChooseFeature}
// // onclick={this.checked==="checked"?"false":"checked"
// // }              
//           // checked={}
//           // checked="checked"   
//           // checked="checked"
//                               />
//                        <label for={info}> {info} </label>
//                    </div>
//                  ))}
//               </p>
//               </Col>
//         </Row>
      ) : null}

{this.state.unit.description ? (

<div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <Row>
                                <Col s={12} m={6}>
                                  <h5
                                    className="text-center"
                                    style={{
                                      color: "grey",
                                      fontWeight: "bold"
                                    }}
                                  >
                    Property Describtion
                                  </h5>
                                </Col>
                                <Col style={{ color: "#8b0000" }} s={12} m={6}>
                                  *Click on the available service
                                </Col>
                              </Row>              <textarea rows="4" cols="50"   ref="description"
          type="text"
          name="description"
          onChange={this.checkchanged}
          className={` edit-input display-inline validate ${
            this.state.descriptionchanged ? "notchanged" : "changed"
          }`}
          defaultValue={this.state.unit.description}>
       
</textarea> 
    </div>
  </div>





) : null}







  <div>
    <div className="divider" />
    <div className="key-info">
    <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Main Photo
                </h5><Row>

                <Col l={12} m={12} s={12}  >
        <div className="position-rel">
        <img className="responsive-img img-edit z-depth-2" alt={this.state.unit.mainImage ?this.state.unit.mainImage._id:null} src={this.state.unit.mainImage ?this.state.unit.mainImage.url:null}/>
        </div>
      </Col>
      {/* {this.state.mainImage.map(img =><Col l={12} m={12} s={12}  >
        <div className="position-rel">
        <i class="fas fa-times-circle delete-img" id="00"  onClick={this.onDelete}></i>
        <img className="responsive-img img-edit z-depth-2" src={img}/>
        </div>
      </Col> )} */}
      <Col l={12} s={12}  >     

      <input type="file" name="file" id="file" class="inputfile"  onChange={this.onUpdateMain} />
<label for="file"><img  className="responsive-img img-edit z-depth-2"  src={require('../../img/uploaded2.PNG')} /></label>

</Col>
      </Row>
    </div>
  </div>
 




 
  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Photo Gallery
                </h5><Row>
      {this.state.additionalImgs.map(img =><Col l={4} m={6} s={12}  >
        {console.log(this.state.unit)}
        <div className="position-rel">
        <i class="fas fa-times-circle delete-img"id={img.key}  onClick={this.onDeleteAdditionalImages}></i>
        <img className="responsive-img img-edit z-depth-2" alt={ img._id} src={img.url}/>
        </div>
      </Col> )}
      <Col l={12} s={12}  >     

      <input type="file" name="file" id="file2" class="inputfile" multiple onChange={this.onUpdateAdditional} />
<label for="file2"><img  className="responsive-img img-edit z-depth-2"  src={require('../../img/uploaded2.PNG')} /></label>

</Col>
      </Row>
    </div>
  </div>





  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <h5
                  className="text-center"
                  style={{
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  Property Floor Plan
                </h5><Row>
      {this.state.floorPlanImgs.map(img =><Col l={4} m={6} s={12}  >
        <div className="position-rel">
        <i class="fas fa-times-circle delete-img" id={img.key}  onClick={this.onDeleteFloor} ></i>
        <img className="responsive-img img-edit z-depth-2" alt={img._id} src={img.url}/>
        </div>
      </Col> )}
      <Col l={12} s={12}  >     

<input type="file" name="file" id="file3" class="inputfile" multiple onChange={this.onUpdateFloor} />
<label for="file3"><img  className="responsive-img img-edit z-depth-2" src={require('../../img/uploaded2.PNG')} /></label>

</Col>
      </Row>
    </div>
  </div>


{this.state.unit.location ? (
  <div>
    {' '}
    <div className="divider" />
    <div className="key-info">
    <Row>
                                <Col s={12} m={6}>
                                  <h5
                                    className="text-center"
                                    style={{
                                      color: "grey",
                                      fontWeight: "bold"
                                    }}
                                  >
                    Property Map Location
                                  </h5>
                                </Col>
                                <Col style={{ color: "#8b0000" }} s={12} m={6}>
                                  *Click on the available service
                                </Col>
                              </Row>   
                              
                              <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12}  >

                            <p className="editpagefont display-inline"> latitude : </p>
                            </Col>
                            <Col l={6} s={12}  >


                            <p className="display-inline">


<input
                ref="latitude"
                type="text"
                name="latitude"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.latitudeChanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.latitudeChanged}
              />
              </p>
              </Col>
              </Col>
        </Row>
        <Row>
             <Col l={6} s={12}  className="margin-auto" >
             <Col l={6} s={12}  >

                            <p className="editpagefont display-inline">longitude : </p>
                            </Col>
                            <Col l={6} s={12}  >


                            <p className="display-inline">


<input
                ref="longitude"
                type="text"
                name="longitude"
                onChange={this.checkchanged}
                className={` edit-input display-inline validate ${
                  this.state.longitudeChanged ? "notchanged" : "changed"
                }`}
                defaultValue={this.state.unit.longitudeChanged}
              />
              </p>
              </Col>
              </Col>
        </Row>
      </div>
    </div>
) : null}





      <button onClick={this.updateValue}  className="ctrl-standard is-reversed typ-subhed fx-sliderIn sav">Save</button>
      <br/>
      <button onClick={this.cancelButton}  className="ctrl-standard is-reversed typ-subhed fx-sliderIn">Cancel</button>
    </Container>
  );

  // check = e=>(this.setState({[e.target.id]:true}));
  updateValue = (e) => {
    e.preventDefault()
    // axios.put("192.168.1.20:5000/api/units/5d1340a51b90510de8e945dd", 
  // {
  //     title:this.state.titlechanged===false?this.refs.title.value:this.state.unit.title,
  //     price:this.state.pricechanged===false?this.refs.price.value:this.state.unit.price,
  //      type:this.state.typechanged===false?this.refs.type.value:this.state.unit.type,
  //      category:this.state.categorychanged===false?this.refs.category.value:this.state.unit.category,
  //      location:this.state.locationchanged===false?this.refs.location.value:this.state.unit.location,
  //      country:this.state.countrychanged===false?this.refs.country.value:this.state.unit.country,
  //      city:this.state.citychanged===false?this.refs.city.value:this.state.unit.city,
  //      address:this.state.addresschanged===false?this.refs.address.value:this.state.unit.address,
  //      area:this.state.areachanged===false?this.refs.area.value:this.state.unit.area,
  //      numberOfBathrooms:this.state.numberOfBathroomschanged===false?this.refs.numberOfBathrooms.value:this.state.unit.numberOfBathrooms,
  //      numberOfBedrooms:this.state.numberOfBedroomschanged===false?this.refs.numberOfBedrooms.value:this.state.unit.numberOfBedrooms,
  //      numberOfKitchens:this.state.numberOfKitchenschanged===false?this.refs.numberOfKitchens.value:this.state.unit.numberOfKitchens,
  //     features:{
  //       newFeatures:chosenFeature.length===0?this.state.unit.features:chosenFeature,
  //     }




  //  }
   
   
  //  )
  //   .then(res => {
  //     // console.log(res.data.data)
  //   this.setState({
  //     isInEditMode: false,
      
  //     titlechanged:true,
  //     pricechanged:true,
  //     typechanged:true,
  //     categorychanged:true,
  //     locationchanged:true,
  //     citychanged:true,
  //     compoundchanged:true,
  //     developerchanged:true,
  //     areachanged:true,
  //     numberOfBathroomschanged:true,
  //     numberOfBedroomschanged:true,
  //     numberOfKitchenschanged:true,
  //     featureschanged:true,
  //     descriptionchanged:true,
  //     countrychanged:true,
  //     addresschanged:true,
  //     // units: res.data.data
  //       // name: this.refs.price.value,
  //       // age: this.refs.age.value,
  //       // id: this.refs.id.value
      
  //   });
  //   // alert("Unit was Updated successfully")
  //           this.getUnitDetails();

  // })
    // console.log("this.state.name")

    // console.log( this.refs.price.value)



    const formData = new FormData();
    const { main, additionalImages, floorPlan } = this.state;
 
   

// if(Object.entries(main).length !== 0 && main.constructor === Object){
formData.append("main" ,main)

// }
 
    if(additionalImages) {
      if(Array.isArray(additionalImages)) {
        additionalImages.forEach((file, i) => {
          formData.append("additionalImages", file);
        });
      }
      else {
        formData.append("additionalImages", additionalImages)
      }
    }


    if(floorPlan) {
    if(Array.isArray(floorPlan)) {
      floorPlan.forEach((file, i) => {
        formData.append("floorPlan", file);
      });
    }
    else {
      formData.append("floorPlan", floorPlan)
    }
  }
   
 
    // formData.set('additionalImagesLength’, additionalImages.length)
    // formData.set('floorPlanLength’, floorPlan.length)
    if(this.state.locationchanged===false){ formData.set("location", this.refs.location.value);}
    if(this.state.titlechanged===false){     formData.set("title", this.refs.title.value);
  }
if(this.state.pricechanged===false){    formData.set("price",this.refs.price.value);
}

if(this.state.typechanged===false){    formData.set("type",this.refs.type.value);
}
if(this.state.categorychanged===false){    formData.set("category", this.refs.category.value);
}
if(this.state.locationchanged===false){    formData.set("location", this.refs.location.value);
}
if(this.state.countrychanged===false){    formData.set("country", this.refs.country.value);
}
if(this.state.citychanged===false){    formData.set("city",this.refs.city.value);
}
 if(this.state.addresschanged===false){    formData.set("address", this.refs.address.value);
}

if(this.state.areachanged===false){    formData.set("area",this.refs.area.value);
}
if(this.state.numberOfBathroomschanged===false){    formData.set("numberOfBathrooms",this.refs.numberOfBathrooms.value);
}
if(this.state.numberOfBedroomschanged===false){    formData.set("numberOfBedrooms", this.refs.numberOfBedrooms.value);
}
if(this.state.numberOfKitchenschanged===false){    formData.set("numberOfKitchens", this.refs.numberOfKitchens.value);
}
    formData.set("features", JSON.stringify(chosenFeature));
    formData.set("updateMain",this.state.updateMain)
    formData.set("updateAdditional",this.state.updateAdditional)
    formData.set("updateFloor",this.state.updateFloor)

if(toDeleteAdditionalImages.length!==0){    formData.set('additionalImagesToBeDeleted', JSON.stringify(toDeleteAdditionalImages) )
}

if(toDeleteFloor.length!==0){    formData.set('floorPlanToBeDeleted', JSON.stringify(toDeleteFloor) )
}



 
    axios({
      method: "put",
      url: `http://localhost:5000/api/units/${this.props.match.params.id}`,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(res => {
        // if (!res.ok) {
        //   throw res;
        // }
        // return res.json();
        console.log(res);
        this.setState({
      isInEditMode: false,
      
      titlechanged:true,
      pricechanged:true,
      typechanged:true,
      categorychanged:true,
      locationchanged:true,
      citychanged:true,
      compoundchanged:true,
      developerchanged:true,
      areachanged:true,
      numberOfBathroomschanged:true,
      numberOfBedroomschanged:true,
      numberOfKitchenschanged:true,
      featureschanged:true,
      descriptionchanged:true,
      countrychanged:true,
      addresschanged:true,
     
      
    });
    alert("Unit was Updated successfully")
            this.getUnitDetails(this.props.match.params.id);
             chosenFeature.splice(0, chosenFeature.length) 

      })
     
      .catch(err => {
        console.log(err);
      });

  };

  editButton = () => {
    this.setState({ isInEditMode: true });
  };
  cancelButton = () => {
    this.setState({ isInEditMode: false });
  };

  render() {
	  
    
    return (
      <div>
        <Container  className="reg">

          <h2 className="text-center">Edit Your Unit</h2>
          <hr
            style={{
              height: "10px",
              backgroundColor: "#8b0000",
              borderRadius: "10px"
            }}
          />

</Container>
        {this.state.isInEditMode
          ? this.renderEditView()
          : this.renderDefaultView()}
      </div>
    );
  }
}



