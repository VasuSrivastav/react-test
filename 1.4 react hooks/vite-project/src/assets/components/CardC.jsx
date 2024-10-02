import React from "react";
import "./Card.css";
import { userContext } from "../../App";
import { useContext } from "react";
const CardC = () => {
    const user = useContext(userContext);
    function handleclick() {
        user.setName("vasu");
        user.setCheck(true);
        // way2
        // if(user.check===false){
        // user.setName("vasu");
        // user.setCheck(true);}
        // else{
        //     user.setName("srivastav");
        //     user.setCheck(false);
        // }
    }
  return (
  <>
  <div className="asd">CardC Name: {user.name}</div>
  <button onClick={handleclick} className={user.check?"hidden":""}>change name again</button>
  {/* way 2 
  <button onClick={handleclick} }>change name again</button>
  */}
  </>)
};

export default CardC;
