import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { BrowserRouter} from 'react-router-dom';

// import { headerLogo,headerText,headerMenu,section_List_London,section_List_Paris,section_List_Tokyo } from '../actions/';
import { headerLogo,headerText,headerMenu,section_List } from '../actions/';

import App from '../view/App';
class App1 extends Component{
    render(){
        return(
            <BrowserRouter>
            <App />
            </BrowserRouter>
        );
    }
}


    function mapStateToProps(state) {
        return {
            data: state
        };
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({headerLogo,headerText,headerMenu,section_List}, dispatch);
    }
    export default connect(mapStateToProps,mapDispatchToProps)(App1);
