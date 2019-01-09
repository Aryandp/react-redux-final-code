import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {data} from '../data/header_data'




class Menu extends Component {

  // menuTasks(data) {
    //   return <a menu={data.menu} key={data.menu}>{data.menu}</a>
    // }
    // subTasks(subdata) {
    //     return <a submenu={subdata.submenu} key={subdata.submenu}>{subdata.submenu}</a>
    //   }
  render() {

    // var menu=this.props.data.menu;
    // var menuItems = menu.map(this.menuTasks);
    // var submenu=this.props.data.menu[2].submenu;
    // var submenuItems=submenu.map(this.subTasks);
    // console.log(menuItems);
    // console.log(submenuItems);

    return (
      <div>
  <ul id="nav" >
 <li>
 <Link to="/Section">{this.props.data.home_menu}</Link>
 <ul>
   {this.props.data.menu.map(item =>
     <li key={item.menu} submenu={item.submenu}><a> {item.menu}</a>

    { item.length==item.submenu?"":<ul style={{float:'left'}}>


     {item.submenu.map(submenu => <li><Link to="/Contact" key={submenu.submenu}>{submenu.submenu}</Link></li>
     )}

     </ul>}</li>


)}

 </ul>
</li>
</ul>
</div>


    );
  }
}

export default Menu;
