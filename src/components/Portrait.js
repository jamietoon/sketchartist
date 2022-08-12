import React from "react";
import FaceImage from './images/face.png';

class Portrait extends React.Component{
  render() {
    return (
    <div className='faceSlice'>
      <img src={FaceImage} alt=''></img>
    </div>
    );

  } 

}

export default Portrait;