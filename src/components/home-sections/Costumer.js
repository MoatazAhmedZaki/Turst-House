import React, { Component } from 'react'
//materialize
import {Col} from 'react-materialize'

//slick carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Costumer extends Component {

    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
          <div className="costumer-section">

<div>
        <Slider {...settings}>

        <div className="customer">
          <Col s={6} >
          <img src={require('../../img/image1.webp')} />
          </Col>
  <Col s={12} m={4}>
  <div className="customer-text">
  <h4>Here's our small slogan.<br/> Here's our small slogan.</h4>
  </div>

  </Col>
          
        </div>


        <div className="customer">
          <Col s={6} >
          <img src={require('../../img/image2.jpg')}  />
          </Col>
  <Col s={12} m={4}>
  <div className="customer-text">
  <h4>Here's our small slogan.<br/> Here's our small slogan.</h4>
  </div>

  </Col>
        </div>

        <div className="customer">
          <Col s={6} >
          <img src={require('../../img/image3.jpg')} />
          </Col>
  <Col s={12} m={4}>
  <div className="customer-text">
  <h4>Here's our small slogan.<br/> Here's our small slogan.</h4>
  </div>

  </Col>
        </div>

        <div className="customer">
          <Col s={6} >
          <img  src={require('../../img/image4.jpg')} />
          </Col>
  <Col s={12} m={4}>
  <div className="customer-text">
  <h4>Here's our small slogan.<br/> Here's our small slogan.</h4>
  </div>

  </Col>
        </div>
        </Slider>
      </div>


{/* 

<Slider >
<Slide src={require('../../img/image1.webp')}   
 title="Costumer Satisfaction"
 placement="left">
 
 Here's our small slogan. Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
</Slide>
<Slide   src={require('../../img/image2.jpg')}   
 title="Costumer Satisfaction"
 placement="left">
 
 Here's our small slogan. Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
</Slide>
<Slide   src={require('../../img/image3.jpg')}   
 title="Costumer Satisfaction"
 placement="left">
 
 Here's our small slogan. Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
</Slide>
<Slide  src={require('../../img/image4.jpg')}   
 title="Costumer Satisfaction"
 placement="left">
 
 Here's our small slogan. Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
Here's our small slogan.
</Slide>
</Slider> */}

</div>
        
      
    )
  }
}
