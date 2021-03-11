import React, { Component } from "react";
import axios from "axios";
import { read } from "fs";
export default class Test extends Component {
  state = {
    selectedFile: null,
    image: ""
  };
  //   onSelectImage=e=>
  // {
  //   let files =e.target.files
  //   console.log(files)
  // let reader = new FileReader();
  // reader.readAsBinaryString(files[0]);

  // reader.onload=e=>
  // {
  //   console.log("e.target.result")

  //   console.log(e.target.result)

  //   axios
  //   .post("http://localhost:5000/api/units/addImg", {data:e.target.result})
  //   .then(res => console.log("here",res))
  //   // .catch(err => console.log(err));

  // }
  // }

  //  previewFile=()=>{
  //   var preview = document.querySelector('img'); //selects the query named img
  //   var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  //   var reader  = new FileReader();

  //   reader.onloadend = function () {
  //       preview.src = reader.result;
  //   }
  //   if (file) {
  //      const red=reader.readAsDataURL(file); //reads the data as a URL
  //       console.log(file)
  //       console.log(red.result)

  //   } else {
  //       preview.src = "";
  //   }
  // }

  onSelectImage = e => {
    // console.log(e.target.files[0]);
    this.setState({ selectedFile: e.target.files[0] });
  };

  uploadImage = () => {
    let file = this.state.selectedFile;
    let f = new FormData();
    f.append("image", this.state.selectedFile, this.state.selectedFile.name);
   console.log("file");
    console.log(file);
    console.log("f");

    // for (let [key, value] of f.entries()) {
    //   console.log(key, value);
    //   console.log(f);
    // }

    axios
      .post("http://localhost:5000/api/units/addImg", { data: f })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={this.onSelectImage} />
        <button onClick={this.uploadImage}>Upload</button>
        {/* <input type="file" onChange={this.previewFile}/>
<img src="" height="200" alt="Image preview..."/> */}
      </div>
    );
  }
}
