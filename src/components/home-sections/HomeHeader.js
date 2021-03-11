import React, { Component } from "react";
import { Slider, Slide } from "react-materialize";

export default class HomeHeader extends Component {
  render() {
    return (
      <div id="home-header">
        <Slider>
          <Slide
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Your guide to the top compounds in Egypt"
            placement="left"
          >
          </Slide>
          <Slide
            src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            title="Explore newest top projects"
            placement="left"
          >
          </Slide>
          <Slide
            src="https://images.unsplash.com/photo-1540882082344-a56ecd70ba96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60"
            title="A look at the Best villas in Cairo"
            placement="left"
          >
          </Slide>
          <Slide
            src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            title="Find your next home"
            placement="left"
          >
          </Slide>
        </Slider>
      </div>
    );
  }
}
