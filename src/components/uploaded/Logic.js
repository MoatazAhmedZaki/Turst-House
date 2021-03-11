import React, { Component } from "react";
import Images from "./Images";


export default class App extends Component {
  state = {
    images: []
  };

  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
    }

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    if (errs.length) {
    }
    console.log(formData);

    // fetch(`${API_URL}/image-upload`, {
       fetch('http://192.168.1.11:5000/api/units/addImg', {
      method: "POST",

      body: formData
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
          console.log(err);
      });
  };

  render() {
    const { images } = this.state;

    return (
      <div className="container">
        <Images images={images} />

        <div className="button">
         
          <h1>hey</h1>
          <input type="file" id="single" onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
