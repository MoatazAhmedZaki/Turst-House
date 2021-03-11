import React, { Component } from "react";
import SideItem from "./SideItem";
import Preloading from "../units/Preloading";
export default class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {
  units: [
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 1",
          mainImage:
            "https://housesolutionegypt.com/images/600xblogs/blog-1553271229.png",
          _id: "1",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 2",
          mainImage:
            "https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses3-e1586934335439.jpg",
          _id: "2",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 3",
          mainImage:
            "https://st.depositphotos.com/1658611/2932/i/600/depositphotos_29329143-stock-photo-street-of-residential-houses.jpg",
          _id: "2",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 4",
          mainImage:
            "http://zifax.com.ng/wp-content/uploads/2017/07/3bedroom.jpeg",
          _id: "4",
        },
        {
          area: 660,
          city: "Cairo",
          compound: "Celia",
          location: "New Capital",
          numberOfBathrooms: 3,
          numberOfBedrooms: 4,
          numberOfViews: 887,
          price: 15000000,
          title: "The absoulte best 5",
          mainImage:
            "https://realestate.eg/storage/listings/8pvGuR1RcZ3cpeiv_thumb.jpg",
          _id: "5",
        },
      ],    };
  }

  

  render() {
    if (this.state.error) return <h1> Error while getting units</h1>;
    return this.state.loading ? (
      <Preloading />
    ) : (
      <div className="center list">
        <h5>{this.props.title} </h5>

        {this.state.units.map(item=> 
         <SideItem info={item} key={this.state._id} updateUnit={this.props.updateUnit}  UnitFullDetail={this.props.UnitFullDetail}/>  

         )}  
      </div>
    );
  }
}
