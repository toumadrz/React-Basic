import React from "react";
import ReactDOM from "react-dom/client";

//External Component ใช้แบบFunction / Class ก็ได้

// function GetExternalComponent (){
//   return <h1>External Component</h1>
// }
class GetExternalComponent extends React.Component {
  render() {
    return (
      <>
        <div className="container text-primary">
          <h1>External Component</h1>
        </div>
      </>
    );
  }
}

export default GetExternalComponent;
