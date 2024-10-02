import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button.jsx";

function App() {
  const [count, SetCount] = useState(0);
  // const [statee, SetStatee] = useState(true);

  // parent to children fx
  function handleIncrement() {
    SetCount(count + 1);
    // SetStatee(statee = false);
    // console.log(statee);
  }
  function handleDecrement() {
    SetCount(count - 1);
    // SetStatee(statee = true);
    // console.log(statee);
  }
  
  return (
    <>
      {/* <PropsChild  name="react" level="1/10" >
      hello this line is part of parent to child.
      </PropsChild> */}

      <div className="btn">
        <Button
          name="Increment btn"
          // no={count}
          action={handleIncrement}
          // boool={statee}
        ></Button>
        <Button
          name="Decrement btn"
          // no={count}
          action={handleDecrement}
          // boool={statee}
        ></Button>
        <h1>count : {count}</h1>
      </div>
    </>
  );
}

export default App;
