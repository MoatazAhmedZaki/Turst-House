import React, { Component } from "react";
import { Row, Container } from "react-materialize";
// import CarouselImageGallery from "../single-unit/CarouselImageGallery";
import Location from "../single-unit/Location";
import Advertising from "../layout/Advertising";
import SimilarHolder from "../similar-unit/SimilarHolder";
import UnitOverview from "../single-unit/UnitOverview";
import FloorPlan from "../single-unit/FloorPlan";
import UnitCarousel from "../single-unit/UnitCarousel";
import PhotosGallery from "../single-unit/PhotosGallery";

export default class UnitFullDetails extends Component {
  constructor(props) {
    super(props);
    this.view = React.createRef();
    this.floor = React.createRef();
    this.gallery = React.createRef();
    this.state = {
      unit: {},
      test:true
    };
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  handleScrolloverview = e => {
    const view = this.view.current;

    window.scrollTo({
      top: view.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  handleScrollfloorplan = e => {
    const floor = this.floor.current;

    window.scrollTo({
      top: floor.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  handleScrollfullgallery = e => {
    const gallery = this.gallery.current;

    window.scrollTo({
      top: gallery.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  

  // 



  render() {
return (
      <div>
        <UnitCarousel
          unit={this.state.unit.additionalImages}
          // floor={this.state.unit.additionalImages}
          // gallery={this.state.unit.additionalImages}
          handleScrolloverview={this.handleScrolloverview}
          handleScrollfullgallery={this.handleScrollfullgallery}
          handleScrollfloorplan={this.handleScrollfloorplan}
        />
        <div>
          <Row className="flex-container">
     

<SimilarHolder
    title="Similar Units"
  />


            <Container>
                <div ref={this.view}>
                  <UnitOverview  />
                </div>
            </Container>
          </Row>

          <Container>
              <div ref={this.gallery} >
                <div className=" UnitFullDetails  text-center ">
                  <h4>Property Photo Gallery</h4>

                  <PhotosGallery unit={ ["https://realestate.eg/storage/listings/8pvGuR1RcZ3cpeiv_thumb.jpg","http://zifax.com.ng/wp-content/uploads/2017/07/3bedroom.jpeg","https://st.depositphotos.com/1658611/2932/i/600/depositphotos_29329143-stock-photo-street-of-residential-houses.jpg","https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses3-e1586934335439.jpg","https://housesolutionegypt.com/images/600xblogs/blog-1553271229.png"]} />
                </div>
              </div>
          
              <div ref={this.floor}>
                <FloorPlan info={["https://i.pinimg.com/originals/06/37/2c/06372cef20d89b57c58bdfc140710c70.png","https://i.pinimg.com/originals/e1/98/d2/e198d2ba175affaf853e2ea2292cb95e.jpg"]} />
              </div>
         
              <Location info={this.state.unit.location} />
          </Container>
          <Advertising />
        </div>
      </div>
    );
  }
}
