import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import { Link } from 'react-router-dom';

//import images from local
import img1 from "../images/Married.png";
import img2 from '../images/Single.png';
import img3 from '../images/Complicated.png';

const imageList = [img1, img2, img3]

class MaritalStatus extends Component {
     constructor(props) {
        super(props)
        this.state = {
          image: null
        }
        this.onPick = this.onPick.bind(this)
      }
     
      onPick(image) {
        this.setState({image})
      }
     
      render() {
          return (
            <div class="container">
            <h2>Next, what was your marital status on December 31, 2019?</h2>
            <ImagePicker  class="col-lg-4 col-sm-6"
                    images={imageList.map((image, i) => ({src: image, value: i}))}
                    onPick={this.onPick}
                    />                   
                    <Link className="btn btn-primary float-right" to={`/about`}>Continue</Link>
            </div>
        )
    }
}


export default MaritalStatus;