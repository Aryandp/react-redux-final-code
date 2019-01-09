export const Header_Logo="Header_Logo";
export const Header_Text="Header_Text";
export const Header_Menu="Header_Menu";
 export const Section_List="Section_List";
 export const Cities="Cities";
// export const Section_List_Paris="Section_List_Paris";
// export const Section_List_Tokyo="Section_List_Tokyo";




/*
 * action creators
 */

export const headerLogo = ()=>{
 return{ type:Header_Logo,
}
}

export const headerText = ()=>{
return{ type:Header_Text,
}
}

export const headerMenu = ()=>{
return { type:Header_Menu ,
}
}
/*
section list
*/

export const section_List = (list)=>{
 return{ type:Section_List,
   payload:list
}
}
export const cities =(cities)=>{
  return {
    type:Cities,
    payload:cities
  }
}
