import React from "react";

const card = (props) => {
  return <div>
    <h1>card {props.name} </h1>
    <button onClick={props.action}>{props.data}</button>
    {/* if(!{props.value}) {
        <div> helllllloooooo...../</div>
    } */}
  </div>;
};

export default card;
