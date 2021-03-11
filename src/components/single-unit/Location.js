import React, { Component } from 'react'
import {Container} from 'react-materialize'
import Map from "./Map"

export default class Location extends Component {
  render() {
    const info =this.props.info;
    let address;
    if(info){   address=     <h4><span><i className="fas fa-map-marker-alt"> {info} </i></span></h4>
  }
    return (
      <div className="location-section center">
      <Container>
      <h4> PROPERTY LOCATION</h4>
      <div className="map">
      
      
            
      
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
      />          </div>
{address}
        <div></div>
      </Container>
      </div>






    )
  }
}



// import React from "react";
// import ReactDOM from "react-dom";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

// const MyMapComponent = compose(
//   withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     {props.isMarkerShown && (
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     )}
//   </GoogleMap>
// ));

// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));



