import React from "react";
import ArrowRight from './images/ArrowRight.png';
import ArrowLeft from './images/ArrowLeft.png';

/*- class NavArrow extends React.Component{-*/
 const NavArrow = ({side}) => {

  const ArrowDir = `<Arrow${side}/>`;
  
   return (
    <div>
      <img src= {ArrowDir} alt=''/>
    </div>
    );

  
 };
  
     


export default NavArrow;