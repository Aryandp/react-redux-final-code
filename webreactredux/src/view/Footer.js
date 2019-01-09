import React, { Component } from 'react';
import home from './img/home.png';


class Footer extends Component {


  render() {

    return(
      <div>
  <footer>
{/*// <p>< img src={home} alt="home" className="App-home" style={{color:'white'}}/><a style={{margin:'5px'}}><strong>{this.props.address.name}</strong></a><br/><br/>
// {this.props.address.head}<br/>{this.props.address.first}<br/>{this.props.address.second}<br/>{this.props.address.third}  </p>*/}

    <p><strong>{this.props.contact}</strong>{this.props.email}</p>
    </footer>
   </div>
    );
  }
}
export default Footer;
