import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import { Link } from 'react-router-dom';

//import images from local
import img1 from "../images/128RedImage.png";
import img2 from '../images/128person.png';
import img3 from '../images/128Jar.png';
import img4 from '../images/128YellowImage.png';
import img5 from '../images/128writepaper-ink.png';
import img6 from '../images/128PinkImage.png';
 
const imageList = [img1, img2, img3, img4, img5, img6]

class PreviousTaxChoice extends Component {
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
            <h2>How did you do your taxes last year?</h2>
            <ImagePicker 
                    images={imageList.map((image, i) => ({src: image, value: i}))}
                    onPick={this.onPick}
                    />                   
                    <Link to={`/marital/${this.state.image}`}>Continue</Link>
            </div>
        )
    }
}


export default PreviousTaxChoice;