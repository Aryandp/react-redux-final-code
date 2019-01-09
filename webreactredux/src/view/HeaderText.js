import React, { Component } from 'react';
import mobile from './img/mobile.png';


class App extends Component {


  render() {

    console.log(this.props.data.header);

    return (
      <div>
      <h3><img src ={mobile} alt="mobile" className="App-mobile"/>{this.props.data.header}</h3>



   </div>


    );
  }
}

export default App;
