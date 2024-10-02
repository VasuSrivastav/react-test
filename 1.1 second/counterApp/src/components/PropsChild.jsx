import React from "react";
import "./PropsChild.css";
const PropsChild = (props) => {
  
  return (
    <>
      <h1>parent to child</h1>
      <h2>
        Lang:"{props.name}", Level:"{props.level}"
      </h2>
      <div>PropsChild</div>
      <h2>{props.children}</h2>
      
       
    </>
  );
};

export default PropsChild;
