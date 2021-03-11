import React, { Component } from "react";
import Slider from "react-slick";
import HomeCategories from "../home-sections/HomeCategories";
import HomeHeader from "../home-sections/HomeHeader";
import ForSale from "../home-sections/ForSale";
import OfficeSpace from "../home-sections/OfficeSpace";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
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
          mainImage:"https://housesolutionegypt.com/images/600xblogs/blog-1553271229.png",
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
          mainImage:"https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses3-e1586934335439.jpg",
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
          mainImage:"https://st.depositphotos.com/1658611/2932/i/600/depositphotos_29329143-stock-photo-street-of-residential-houses.jpg",
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
          mainImage:"http://zifax.com.ng/wp-content/uploads/2017/07/3bedroom.jpeg",
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
          mainImage:"https://realestate.eg/storage/listings/8pvGuR1RcZ3cpeiv_thumb.jpg",
          _id: "5",
        },
      ],
      loading: false,
      error: false,
     
    };



  }


  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },

        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <HomeHeader />

      


        <div className="w-80 m-auto">
          <div id="homecategories-carousel">
            <h3>Featured Units</h3>
            <hr />

            <Slider {...settings}>
              {this.state.cards.map((info) => (
                <HomeCategories info={info} key={Math.random() * 10} />
              ))}
            </Slider>
          </div>
        </div>
        {/* </Row>
      </Container>
          <Costumer/> */}

        <ForSale />
        <OfficeSpace />
      </div>
    );
  }
}
