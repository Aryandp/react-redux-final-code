import React, { Component } from 'react';
import {connect} from 'react-redux';


class Cities extends Component {
  constructor(props) {
		super(props);
		this.state = {
shown: true,
hidden:false,
block:true,
none:false
		};
	}
  none() {
      this.setState({
        block:false,
      });
    }
 block() {
      		this.setState({
            block:true,
      		});
      	}
  hide() {
  		this.setState({
  			shown: false,
  		});
  	}
    show() {
    		this.setState({
    			shown:true,
    		});
    	}

      box1(){
        return this.props.data.map(cities=>{
      return(<div> <h2>{cities.head1}</h2>
      <p   key={cities.id} >{cities.para1}</p></div>
     );
    });
    }
    box2(){
      return this.props.data.map(cities=>{
    return(<div> <h2>{cities.head2}</h2>
    <p   key={cities.id} >{cities.para2}</p></div>
   );
  });
  }
  render() {
    console.log(this.props)
    var shown = {
      visibility:this.state.shown ? "visible" : "hidden",

    };

    var hidden = {
      visibility:this.state.shown ? "hidden" : "visible",
    };
    var block = {
      visibility:this.state.block ? "visible" : "hidden"

    };
    var none = {
      visibility:this.state.block ? "hidden" : "visible"

    };

    return(

      <aside>
      <button style={{float:'left', margin:'2px'}} onClick={this.show.bind(this)}>show</button>
      <button style={{float:'left',margin:'2px'}} onClick={this.hide.bind(this)}>hide</button><br/>
      <div className="cities" style={shown}>
     
      {this.box1()}
      </div>


      <button style={{float:'left',margin:'2px'}} onClick={this.block.bind(this)}>show</button>
      <button style={{float:'left', margin:'2px'}} onClick={this.none.bind(this)}>hide</button><br/>
      <div className="cities" style={block}>
   
      {this.box2()}
      </div>
         </aside>
    );

  }
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {data:state.cities_reducer};
}
export default connect(mapStateToProps)(Cities);
