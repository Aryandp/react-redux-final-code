import { combineReducers } from 'redux';
// import {Header_Logo,Header_Text,Header_Menu
// ,Section_List_London,Section_List_Paris,Section_List_Tokyo} from '../actions';
import {Header_Logo,Header_Text,Header_Menu
  ,Section_List,Cities} from '../actions';

export const data = [
  {
  menu:[
    {menu:"London", },
    {menu:"Paris", },
    {menu:"Tokyo",submenu :[{submenu:"Contact Us",}, {submenu:"To Do List",}]}],
    home_menu:"Home",
     header: "8590865153",
     logo_url:"logo",
     figure_url:"img",
     appclass:"App-logo",
     figureclass:"App-figure",
     png:'.png',
     jpg:'.jpg',


  }
]

function reducer(state=data, action) {
  switch (action.type) {
    case Header_Logo:
      return state
case Header_Text:
return state
case Header_Menu:
return state

  default:
  return state


}
}
// store for list
export const list = [
  
  
    {list:"London",capital:"London is the capital of Britain.",color:"red" ,id:1,},
    {list:"Paris",capital:"Paris is the capital of France.", color:"red",id:2,},
    {list:"Tokyo",capital:"Tokyo is the capital of Japan",color:"red",id:3,},
    
  
]


function list_reducer(state=list,action){
switch (action.type) {
  case Section_List:
  return action.payload
  default:
  return state;
}
}

// store for cities
export const cities=[
  {
    id:"1",
  head1:'London',
  para1:'London is the capital of England.'},
{
  id:"2",
  head2:'Paris',
  para2:'Paris is the capital of England.',
},]
function cities_reducer(state=cities,action){
  switch (action.type) {
    case Cities:
    return action.payload
    default:
    return state;
  }
  }

const rootreducer = combineReducers({
   reducer,list_reducer,cities_reducer
})
export default rootreducer;

