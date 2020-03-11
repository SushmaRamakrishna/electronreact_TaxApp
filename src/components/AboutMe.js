import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import { Link } from 'react-router-dom';

//import images from local
import img1 from "../images/128bag.png";
import img2 from '../images/128clipboard.png';
import img4 from '../images/128book.png';
import img5 from '../images/128shape.png';

 
const imageList = [img1, img2, img4, img5]

class AboutMe extends Component {
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
            <div class="container px-lg-2">
            <h2>How did you do your taxes last year, please select all that applies....</h2>
            <ImagePicker       
                    images={imageList.map((image, i) => ({src: image, value: i}))}
                    onPick={this.onPick}
                    multiple />                   
                    <Link to={`/myinfo`}>Continue</Link>
            </div>
        )
    }
}


export default AboutMe;