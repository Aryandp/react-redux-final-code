import React, { Component } from 'react';

import List from './List';
import Cities from './Cities';
import Article from './Article';






class Section extends Component {
constructor(props){
  super(props);
  this.state={
    
    head:"",
    para:"",
    color:"",
 
    
  };
  
  this.selectList=this.selectList.bind(this);
  this.selectColor=this.selectColor.bind(this);


 }
 selectColor(color,id){
  
  console.log(color,id);
if(id===1){
  this.setState({
    
  color:color,


  });
  
}
}
 
selectList(key,capital){
  console.log(key);
  console.log(capital);

  this.setState({
    head:key,
    para:capital,
  


  });
  
}

  render() {
  
    return(
      <div>
    <section className="App-section">
    <List selectList={this.selectList} selectColor={this.selectColor} color={this.state.color} />
<Cities />
<Article  head={this.state.head} para={this.state.para} /> 
     </section>

        </div>

    );
  }
}

export default Section; 
