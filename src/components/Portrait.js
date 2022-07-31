import React from "react";
import FaceImage from './images/face.png';

class Portrait extends React.Component{
  render() {
    return <div><img src={FaceImage}></img>
    </div>;

  } 

}

export default Portrait;