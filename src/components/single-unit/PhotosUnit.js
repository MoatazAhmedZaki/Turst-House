import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-materialize";
export default class PhotosUnit extends Component {
  render() {
    const info = this.props.info;
    console.log(this.props)
     return(
      <div className="photo-item">
  <div className="list">
      <div key={info.id}>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw" />
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw" />
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>

        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw" />
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
        <Col l={4} m={6} s={12}>
          <Link to={`/full-details/${info.id}/Carousel`}>
            <img className="responsive-img" src={info.webformatURL} alt="3aw"/>
          </Link>
        </Col>
      </div>
      </div></div>
    );
  }
}
