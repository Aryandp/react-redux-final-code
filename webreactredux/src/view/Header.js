import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';
// import Logo from '../components/Logo';

import HeaderText from './HeaderText'
import Menu from './Menu'
import {data} from '../data/header_data'


import logo from './img/logo.png';

// import img from './img/img.jpg';
import mobile from './img/mobile.png';

class Header extends Component  {
  render(){

    return(

<div>
<span>
{data.map(data =>

      <header className="App-header" key={data.header}>

       <Logo data={data.logo_url} img_extention={data.png} appclass={data.appclass}/>
         <HeaderText data={data}/>
       <Menu data={data}/>




</header>)}
</span>

</div>

);
  }

  }
  export default Header;
