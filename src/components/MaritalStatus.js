import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import { Link } from 'react-router-dom';

//import images from local
import img1 from "../images/Married.png";
import img2 from '../images/single.png';
import img3 from '../images/complicated.png';

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
            <div class="container px-lg-5">
            <h2>Next, what was your marital status on December 31, 2019?</h2>
            <ImagePicker 
                    images={imageList.map((image, i) => ({src: image, value: i}))}
                    onPick={this.onPick}
                    />                   
                    <Link to={`/about`}>Continue</Link>
            </div>
        )
    }
}


export default MaritalStatus;