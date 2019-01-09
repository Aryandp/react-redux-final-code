import React, { Component } from 'react';
import img1 from './img/img1.png';
import img3 from './img/img3.png';
import img2 from './img/img2.jpg';
import './css/App.css';
import './css/submenu.css';
import {connect} from 'react-redux';

class Article extends Component {


  render() {
console.log(this.props.data.capital)
    return(

      <article id="article">
   <p>{this.props.head}</p>
   <p>{this.props.para} </p>


   <div className="img1">
      <img src={img1} alt="Norway" width="300" height="200"/>
   <div className="dropup">
    <div className="desc">London</div>
    <div className="dropup-content">
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
    </div>
   </div>
   </div>
   <div className="img1">
   <img src={img2} alt="Paris" width="200" height="200" />

    <div className="dropup">
    <div className="desc">Paris</div>
    <div className="dropup-content">
   <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500.</p>
    </div>
    </div>
   </div>
   <div className="img1">
   <img src={img3} alt="Paris" width="200" height="200" />

      <div className="dropup">
    <div className="desc">tokyo</div>
    <div className="dropup-content">
   <p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    </div>
    </div>
   </div>

    </article>

    );
  }
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {data:state.list_reducer};
}
export default connect(mapStateToProps)(Article);