import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Section_List} from '/media/ravi/New Volume1/ravigit/finalcode/webreactredux/src/actions';
class List extends Component {
  renderList(){
    return this.props.data.map(data=>{
  return(<li ><a href="#article" style={{color:this.props.color}}
   key={data.id} onClick={()=>{this.props.selectList(data.list,data.capital);this.props.selectColor(data.color,data.id)}}>
   {data.list}</a></li>
 );
});
}


  render() {
    console.log(this.props);
  
    return(
      <nav>
      
      <ul id="article"style={{float:'left'}}>
      {this.renderList()}
       
      </ul>
        </nav>

    );
  }
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {data:state.list_reducer};
}
export default connect(mapStateToProps,{Section_List})(List);
