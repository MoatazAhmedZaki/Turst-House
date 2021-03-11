import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SimilerItem extends Component {
  render() {
    const info = this.props.info;
    let CurrencyFormat = require("react-currency-format");
    // console.log(this.props);
    return (
      // <Link to={`/full-details/${info._id}`}>

      <div 
      >
        <div className=" side-item">
          <div className="price">
            <p>
              <CurrencyFormat
                value={info.price}
                displayType={"text"}
                thousandSeparator={true}
              />{" "}
              EGP
            </p>
          </div>

          <Link to={`/full-details/${info._id}`}>
            <div className="side-img ">
              <img className="responsive-img" src={info.mainImage} alt="3aw" />
            </div>
          </Link>
        </div>
        <div className="side-info">
          <h6>{info.title}</h6>
          <p>
            {" "}
            <span>{info.numberOfViews}</span>
            <i className="fas fa-eye" />
          </p>
          <p>
            <span>{info.numberOfBedrooms}</span>
            <i className="fas fa-bed" />
          </p>
          <p>
            <span>{info.numberOfBathrooms}</span>
            <i className="fas fa-bath" />
          </p>
        </div>
      </div>
      // </Link>
    );
  }
}
