import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";
import Input from "./components/Input.jsx";
import Color from "./components/Color.jsx";
function App() {
  const [show, setShow] = useState('');
  // const [show, setShow] = useState(0);
  // // const [toggle, setToggle] = useState(0);
  // function handleClick({data,show}) {
  //   setShow(show = 1);
  //   console.log(show);
  //   if (show==1) {
  //     return <div>hwkwkwkwwjw ✅</div>;
  //   }
  //   return <div>hwkwkwkwwjw </div>;
  
  // }

  return (
    <>
    <Color/>
      {/* hrr
      <Card name="1" data="show me" action={handleClick} value={show}/>
      <Card name="2" data="show me" action={handleClick} value={show} /> */}
      {/* again 
      <Input setShow1={setShow} show1= {show}/>
      <p>in parent : {show}</p> */}
    </>
  );
}

export default App;
