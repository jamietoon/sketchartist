import React from "react";
import Portrait from "./Portrait.js";
import NavArrow from "./NavArrow.js";




class App extends React.Component {
  render() {
    return (
      <div className="facePart">
        <div className="navButtonLeft"><NavArrow side="Left"/></div>
        <div className="faceSlice"><Portrait/></div>
        <div className="navButtonRight"><NavArrow side="Right"/></div>
      </div>
  
    );
  }
}

export default App;