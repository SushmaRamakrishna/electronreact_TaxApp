import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import { Link } from 'react-router-dom';

//import images from local
import img1 from "../images/Married.png";
import img2 from '../images/Single.png';
import img3 from '../images/Complicated.png';

const ImageList1 = [
  { Id: 1, src: img1, alt: "Married" },
  { Id: 2, src: img2, alt: "Single" },
  { Id: 3, src: img3, alt: "Complicated" },
 
];



class MaritalStatus extends Component {
     constructor(props) {
        super(props)
        this.state = {
          image: null
        }
        this.onPick = this.onPick.bind(this)
        this.state = { selectedImage: {} };
      }
     
      onPick(image) {
        this.setState({image})
      }
     
      render() {
          return (
            <section className="row"> 
            <h2>Next, what was your marital status on December 31, 2019?</h2>          
            <section className="col">             
              <ImagePicker  
                      images={ImageList1.map((image, i) => ({src: image.src, value: i}))}
                      onPick={this.onPick}
                      multiple /> 
            </section>
           <Link className="btn btn-primary float-right" to={`/about`}>Continue</Link>
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


export default MaritalStatus;