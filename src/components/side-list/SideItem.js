import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import UnitFullDetails from '../pages/UnitFullDetails';
export default class SideItem extends Component {
    
  render() {
const info=this.props.info;
let CurrencyFormat = require('react-currency-format');
  
    return (
      <div>          
      {this.props.UnitFullDetail===true? <div >
          <div className=" side-item" >
           <div className="price"><p><CurrencyFormat value={info.price} displayType={'text'} thousandSeparator={true} /> EGP </p></div>
           {/* <Link to={`/full-details/${info._id}`}> */}
           <Link to={`/full-details/${info._id}`}> 
          <div className="side-img " onClick={this.props.updateUnit.bind(this,info._id)}>
            <img className="responsive-img" src={info.mainImage} alt="3aw" />
        </div>
        </Link>
          </div>
        <div className="side-info">
          
          
           
     <h6>{info.title}</h6>
          <p> <span>{info.numberOfViews}</span><i className="fas fa-eye"></i></p>
          <p><span>{info.numberOfBedrooms}</span><i className="fas fa-bed" /></p>
          <p><span>{info.numberOfBathrooms}</span><i className="fas fa-bath" /></p>
        </div>
          
           </div>:	<div >
          <div className=" side-item" >
           <div className="price"><p><CurrencyFormat value={info.price} displayType={'text'} thousandSeparator={true} /> EGP </p></div>
           <Link to={`/full-details/${info._id}`}>
          <div className="side-img ">
            <img className="responsive-img" src={info.mainImage} alt="3aw" />
        </div>
        </Link>
          </div>
        <div className="side-info">
          
          
           
     <h6>{info.title}</h6>
          <p> <span>{info.numberOfViews}</span><i className="fas fa-eye"></i></p>
          <p><span>{info.numberOfBedrooms}</span><i className="fas fa-bed" /></p>
          <p><span>{info.numberOfBathrooms}</span><i className="fas fa-bath" /></p>
        </div>
          
           </div>}

			
                {/* </Link> */}

       </div>
    )
  }
}

