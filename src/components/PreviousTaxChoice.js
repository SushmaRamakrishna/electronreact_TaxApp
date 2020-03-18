import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import { Link } from 'react-router-dom';

//import images from local
import img1 from "../images/128RedImage.png";
import img2 from '../images/128person.png';
import img3 from '../images/128Jar.png';
import img4 from '../images/128YellowImage.png';

const imageList = [img1, img2, img3,img4]

class PreviousTaxChoice extends Component {
     constructor(props) {
        super(props)
        this.state = {
          index: 0,
          image: null
        }
        this.onClick= this.onClick.bind(this)
      }
     
      onClick(image) {
        image.clasName('star')
      }
     
      render() {
          return (
            <div className="container">  
             <div className="Jumbotron">
              <h2>How did you do your taxes last year?</h2>      
              <div className="row">
                  {
                  imageList.map(imageid => 
                  <img key={imageid} src={imageid} onClick={this.onClick}></img>  
                  )       
                  }
                </div>  
                <br></br>       
                      <Link className="btn btn-primary float-right" to={`/marital/${this.state.image}`}>Continue</Link>                  
               
              </div>
            </div>
        )
    }
}


export default PreviousTaxChoice;