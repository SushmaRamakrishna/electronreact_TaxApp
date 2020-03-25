import React, { Component } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import { Link } from "react-router-dom";

//import images from local
import img1 from "../images/128RedImage.png";
import img2 from "../images/128person.png";
import img3 from "../images/128Jar.png";
import img4 from "../images/128YellowImage.png";
import img5 from "../images/128writepaper-ink.png";
import img6 from "../images/128PinkImage.png";

const ImageList1 = [
  { Id: 1, src: img1, alt: "Tax App" },
  { Id: 2, src: img2, alt: "Other tax software" },
  { Id: 3, src: img3, alt: "Tax Professional" },
 
];

const ImageList2 = [
 
  { Id: 4, src: img4, alt: "Tax service" },
  { Id: 5, src: img5, alt: "First time filing" },
  { Id: 6, src: img6, alt: "Other/Don't know" }
];

class PreviousTaxChoice extends Component {
  constructor() {
    super();
    this.state = { selectedImage: {} };
  }
  render() {
    return (
    <section className="row"> 
           <section className="col">             
            <ImagePicker  
                    images={ImageList1.map((image, i) => ({src: image.src, value: i}))}
                    onPick={this.onPick}
                    multiple /> 
           </section>
           <section className="col">
           <ImagePicker    
                    images={ImageList2.map((image, i) => ({src: image.src, value: i}))}
                    onPick={this.onPick}
                    multiple /> 
            </section>
          <Link className="btn btn-primary float-right"  to={`/marital/${this.state.selectedImage.alt}`}>Continue</Link> 
     </section>

    );
  }

  selectImage(selected) {
    if (selected.Id !== this.state.selectedImage.Id) {
      this.setState({ selectedImage: selected });
    } else {
      this.setState({ selectedImage: {} });
    }
  }
}


export default PreviousTaxChoice;
