import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
// import {Link} from 'react-router-dom'
export default class CarouselImageGallery extends Component {
  render() {
    const info=this.props.info
      
  const settings = {
    customPaging: function(i) {
      return (
        <a href="/">
            <img className="responsive-img" src={info.largeImageURL} alt="3aw"/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true
  };
      return (
    <div>
            {/* <Link to="full-details"> <div className="btn">back</div></Link> */}

      <Slider {...settings} className="myslider">
        <div>
        <img className="responsive-img" src={info.largeImageURL} alt="3aw"/>
        </div>
        <div>
        <img className="responsive-img" src={info.largeImageURL} alt="3aw"/>
        </div>
        <div>
        <img className="responsive-img" src={info.largeImageURL} alt="3aw"/>
        </div>
        <div>
        <img className="responsive-img" src={info.largeImageURL} alt="3aw"/>
        </div>
      </Slider>


    </div>
  );
}
}

