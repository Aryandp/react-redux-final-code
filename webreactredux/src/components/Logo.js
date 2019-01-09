import React, { Component } from 'react';

import logo from './img/logo.png';
import img from './img/img.jpg';



class Logo extends Component {



  render() {
console.log(this.props.data.menu);
    return (
      <div>
  <img src ={require('./img/' + this.props.data +this.props.img_extention)} alt="mobile" className={this.props.appclass}/>


   </div>


    );
  }
}

export default Logo;
