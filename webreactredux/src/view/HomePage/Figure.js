import React, { Component } from 'react';
import img from './img/img.jpg';
import './css/App.css';

class Figure extends Component {
  render() {
    return(

<div>
      <div className="App-figure">
    <img src={img} alt="Trulli"/>
    </div>
    </div>
    );

  }
}
export default Figure;
