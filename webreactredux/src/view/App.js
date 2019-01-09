import React, { Component } from 'react';
 import { Route} from 'react-router-dom';

import { headerLogo,headerText,headerMenu,section_List } from '../actions/';


 import Section from './HomePage/Section';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './HomePage/ContactForm';

import Logo from './Logo';
import Figure from './HomePage/Figure';


import './css/App.css';
import './css/submenu.css';
import {data} from '../data/header_data'


class App extends Component {

  render() {

    console.log(data[0].menu);


    return (
      <div className="App">
      
 <Header  />
 <Figure />

 <div>
<Route  path="/Section" component={Section} />
  <Route  path="/contact" component={ContactForm} />
  </div>
 

  <Footer contact={"Contact us to know more:"} email={"info@linkcxo.com"} />
  </div>
    );
  }
}

export default (App);
